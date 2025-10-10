/**
 * URL utility functions.
 */
define("gliffy/url", {
    buildPath: function (pathElementArray) {
        return pathElementArray.reduce(function (result, value) {
            if (value == null) {
                return result;
            } else if (result) {
                return result + "/" + encodeURIComponent(value);
            }
            return encodeURIComponent(value);
        }, "");
    },
    buildQuery: function (queryMap) {
        return _.reduce(queryMap, function (result, value, key) {
            if (value == null) {
                return result;
            } else if (result) {
                return result + "&" + encodeURIComponent(key) + "=" + encodeURIComponent(value);
            }
            return encodeURIComponent(key) + "=" + encodeURIComponent(value);
        }, "");
    },
    buildPathAndQuery: function (pathElements, queryMap) {
        var elements = [this.buildPath(pathElements)];

        if((typeof queryMap !== "undefined") && Object.keys(queryMap).length > 0) {
            elements.push(this.buildQuery(queryMap))
        }
        return elements.join("?");
    },
    buildRootedPathAndQuery: function (rootPath, pathElements, queryMap) {
        return rootPath + "/" + this.buildPathAndQuery(pathElements, queryMap);
    },
    "parse": function(url) {
        var regex = /^(?:([a-z]*):)?(?:\/\/)?(?:([^:@]*)(?::([^@]*))?@)?([0-9a-z-._]+)?(?::([0-9]*))?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/i;
        var md = url.match(regex) || [];

        var r = {
            "url":    url,
            "scheme": md[1],
            "user":   md[2],
            "pass":   md[3],
            "host":   md[4],
            "port":   md[5] && +md[5],
            "path":   md[6],
            "query":  md[7],
            "hash":   md[8]
        };

        // parse query params
        r.queryParams = {};

        var queryTokens = r.query.split("&");
        for(var tokenIndex = 0; tokenIndex < queryTokens.length; tokenIndex++) {
            var subTokens = queryTokens[tokenIndex].split("=");
            r.queryParams[decodeURIComponent(subTokens[0])] = decodeURIComponent(subTokens[1]);
        }
        return r;
    }
});
