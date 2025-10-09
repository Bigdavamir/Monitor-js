const fs = require('fs');

const escapeUnicode = (s) =>
    // s.replace(/[\u007f-\uffff]/g, (c) => `\\u${'0000' + c.charCodeAt(0).toString(16)}`.slice(-4));
    s.replace(/[\u0014-\u001d]|[\u007f-\uffff]/g, 'X');

const issues = JSON.parse(escapeUnicode(fs.readFileSync(process.argv[2], { encoding: 'utf8' })))
    .issues.filter((x) => x.values.parent)
    .map(({ id, issueKey, values: { summary, parent } }) => ({ id, issueKey, summary, parent }));

console.log(`Found ${issues.length} issues with parents`);

const issuesById = issues.reduce((acc, x) => {
    acc[x.id] = x;
    return acc;
}, {});

const checked = new Set();
for (const issue of issues) {
    const ancestors = new Set([issue.id]);
    let parent = issuesById[issue.parent];
    while (parent && !checked.has(parent.id)) {
        if (ancestors.has(parent.id)) {
            if (issue.id === parent.id) {
                console.log('vvvvvvvv');
                for (const id of ancestors) {
                    console.log(issuesById[id]);
                }
                console.log(`^^^^^^^^`);
                for (const id of ancestors) {
                    checked.add(id);
                }
            }
            break;
        }
        ancestors.add(parent.id);
        parent = issuesById[parent.parent];
    }
}
