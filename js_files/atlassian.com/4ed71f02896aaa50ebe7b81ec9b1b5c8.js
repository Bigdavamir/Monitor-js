function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var parcelRequire = $parcel$global["parcelRequire3e65"];
parcelRequire.register("am0Pt", function(module, exports) {

$parcel$export(module.exports, "c", () => $789c9a1e73441536$export$db3b6bfb95261072);
$parcel$export(module.exports, "b", () => $789c9a1e73441536$export$8b22cf2602fb60ce);
$parcel$export(module.exports, "g", () => $789c9a1e73441536$export$39b482c5e57630a8);
$parcel$export(module.exports, "m", () => $789c9a1e73441536$export$953cecd6e717a553);
$parcel$export(module.exports, "S", () => $789c9a1e73441536$export$25ce5a424b770e84);

var $8nd05 = parcelRequire("8nd05");

var $d49SP = parcelRequire("d49SP");

var $6CZeq = parcelRequire("6CZeq");

var $cHPF9 = parcelRequire("cHPF9");

var $1gYAD = parcelRequire("1gYAD");

var $enfmq = parcelRequire("enfmq");

var $kbxxf = parcelRequire("kbxxf");

var $acw62 = parcelRequire("acw62");

var $cQEWp = parcelRequire("cQEWp");

var $8zogs = parcelRequire("8zogs");

var $jk22o = parcelRequire("jk22o");

var $9X7IJ = parcelRequire("9X7IJ");
function $789c9a1e73441536$var$_EMOTION_STRINGIFIED_CSS_ERROR__$2() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
// Assistive text to describe visual elements. Hidden for sighted users.
var $789c9a1e73441536$var$_ref = {
    name: "7pg0cj-a11yText",
    styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
};
var $789c9a1e73441536$var$A11yText = function A11yText(props) {
    return (0, $8zogs.jsx)("span", (0, $8nd05.default)({
        css: $789c9a1e73441536$var$_ref
    }, props));
};
var $789c9a1e73441536$var$A11yText$1 = $789c9a1e73441536$var$A11yText;
var $789c9a1e73441536$var$defaultAriaLiveMessages = {
    guidance: function guidance(props) {
        var isSearchable = props.isSearchable, isMulti = props.isMulti, isDisabled = props.isDisabled, tabSelectsValue = props.tabSelectsValue, context = props.context;
        switch(context){
            case "menu":
                return "Use Up and Down to choose options".concat(isDisabled ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
            case "input":
                return "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "");
            case "value":
                return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
            default:
                return "";
        }
    },
    onChange: function onChange(props) {
        var action = props.action, _props$label = props.label, label = _props$label === void 0 ? "" : _props$label, labels = props.labels, isDisabled = props.isDisabled;
        switch(action){
            case "deselect-option":
            case "pop-value":
            case "remove-value":
                return "option ".concat(label, ", deselected.");
            case "clear":
                return "All selected options have been cleared.";
            case "initial-input-focus":
                return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");
            case "select-option":
                return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
            default:
                return "";
        }
    },
    onFocus: function onFocus(props) {
        var context = props.context, focused = props.focused, options = props.options, _props$label2 = props.label, label = _props$label2 === void 0 ? "" : _props$label2, selectValue = props.selectValue, isDisabled = props.isDisabled, isSelected = props.isSelected;
        var getArrayIndex = function getArrayIndex(arr, item) {
            return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
        };
        if (context === "value" && selectValue) return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
        if (context === "menu") {
            var disabled = isDisabled ? " disabled" : "";
            var status = "".concat(isSelected ? "selected" : "focused").concat(disabled);
            return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
        }
        return "";
    },
    onFilter: function onFilter(props) {
        var inputValue = props.inputValue, resultsMessage = props.resultsMessage;
        return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
    }
};
var $789c9a1e73441536$var$LiveRegion = function LiveRegion(props) {
    var ariaSelection = props.ariaSelection, focusedOption = props.focusedOption, focusedValue = props.focusedValue, focusableOptions = props.focusableOptions, isFocused = props.isFocused, selectValue = props.selectValue, selectProps = props.selectProps, id = props.id;
    var ariaLiveMessages = selectProps.ariaLiveMessages, getOptionLabel = selectProps.getOptionLabel, inputValue = selectProps.inputValue, isMulti = selectProps.isMulti, isOptionDisabled = selectProps.isOptionDisabled, isSearchable = selectProps.isSearchable, menuIsOpen = selectProps.menuIsOpen, options = selectProps.options, screenReaderStatus = selectProps.screenReaderStatus, tabSelectsValue = selectProps.tabSelectsValue;
    var ariaLabel = selectProps["aria-label"];
    var ariaLive = selectProps["aria-live"];
    // Update aria live message configuration when prop changes
    var messages = (0, $acw62.useMemo)(function() {
        return (0, $d49SP.default)((0, $d49SP.default)({}, $789c9a1e73441536$var$defaultAriaLiveMessages), ariaLiveMessages || {});
    }, [
        ariaLiveMessages
    ]);
    // Update aria live selected option when prop changes
    var ariaSelected = (0, $acw62.useMemo)(function() {
        var message = "";
        if (ariaSelection && messages.onChange) {
            var option = ariaSelection.option, selectedOptions = ariaSelection.options, removedValue = ariaSelection.removedValue, removedValues = ariaSelection.removedValues, value = ariaSelection.value;
            // select-option when !isMulti does not return option so we assume selected option is value
            var asOption = function asOption(val) {
                return !Array.isArray(val) ? val : null;
            };
            // If there is just one item from the action then get its label
            var selected = removedValue || option || asOption(value);
            var label = selected ? getOptionLabel(selected) : "";
            // If there are multiple items from the action then return an array of labels
            var multiSelected = selectedOptions || removedValues || undefined;
            var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
            var onChangeProps = (0, $d49SP.default)({
                // multiSelected items are usually items that have already been selected
                // or set by the user as a default value so we assume they are not disabled
                isDisabled: selected && isOptionDisabled(selected, selectValue),
                label: label,
                labels: labels
            }, ariaSelection);
            message = messages.onChange(onChangeProps);
        }
        return message;
    }, [
        ariaSelection,
        messages,
        isOptionDisabled,
        selectValue,
        getOptionLabel
    ]);
    var ariaFocused = (0, $acw62.useMemo)(function() {
        var focusMsg = "";
        var focused = focusedOption || focusedValue;
        var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
        if (focused && messages.onFocus) {
            var onFocusProps = {
                focused: focused,
                label: getOptionLabel(focused),
                isDisabled: isOptionDisabled(focused, selectValue),
                isSelected: isSelected,
                options: focusableOptions,
                context: focused === focusedOption ? "menu" : "value",
                selectValue: selectValue
            };
            focusMsg = messages.onFocus(onFocusProps);
        }
        return focusMsg;
    }, [
        focusedOption,
        focusedValue,
        getOptionLabel,
        isOptionDisabled,
        messages,
        focusableOptions,
        selectValue
    ]);
    var ariaResults = (0, $acw62.useMemo)(function() {
        var resultsMsg = "";
        if (menuIsOpen && options.length && messages.onFilter) {
            var resultsMessage = screenReaderStatus({
                count: focusableOptions.length
            });
            resultsMsg = messages.onFilter({
                inputValue: inputValue,
                resultsMessage: resultsMessage
            });
        }
        return resultsMsg;
    }, [
        focusableOptions,
        inputValue,
        menuIsOpen,
        messages,
        options,
        screenReaderStatus
    ]);
    var ariaGuidance = (0, $acw62.useMemo)(function() {
        var guidanceMsg = "";
        if (messages.guidance) {
            var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
            guidanceMsg = messages.guidance({
                "aria-label": ariaLabel,
                context: context,
                isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
                isMulti: isMulti,
                isSearchable: isSearchable,
                tabSelectsValue: tabSelectsValue
            });
        }
        return guidanceMsg;
    }, [
        ariaLabel,
        focusedOption,
        focusedValue,
        isMulti,
        isOptionDisabled,
        isSearchable,
        menuIsOpen,
        messages,
        selectValue,
        tabSelectsValue
    ]);
    var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
    var ScreenReaderText = (0, $8zogs.jsx)((0, $acw62.Fragment), null, (0, $8zogs.jsx)("span", {
        id: "aria-selection"
    }, ariaSelected), (0, $8zogs.jsx)("span", {
        id: "aria-context"
    }, ariaContext));
    var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
    return (0, $8zogs.jsx)((0, $acw62.Fragment), null, (0, $8zogs.jsx)($789c9a1e73441536$var$A11yText$1, {
        id: id
    }, isInitialFocus && ScreenReaderText), (0, $8zogs.jsx)($789c9a1e73441536$var$A11yText$1, {
        "aria-live": ariaLive,
        "aria-atomic": "false",
        "aria-relevant": "additions text"
    }, isFocused && !isInitialFocus && ScreenReaderText));
};
var $789c9a1e73441536$var$LiveRegion$1 = $789c9a1e73441536$var$LiveRegion;
var $789c9a1e73441536$var$diacritics = [
    {
        base: "A",
        letters: "AⒶＡ\xc0\xc1\xc2ẦẤẪẨ\xc3ĀĂẰẮẴẲȦǠ\xc4ǞẢ\xc5ǺǍȀȂẠẬẶḀĄȺⱯ"
    },
    {
        base: "AA",
        letters: "Ꜳ"
    },
    {
        base: "AE",
        letters: "\xc6ǼǢ"
    },
    {
        base: "AO",
        letters: "Ꜵ"
    },
    {
        base: "AU",
        letters: "Ꜷ"
    },
    {
        base: "AV",
        letters: "ꜸꜺ"
    },
    {
        base: "AY",
        letters: "Ꜽ"
    },
    {
        base: "B",
        letters: "BⒷＢḂḄḆɃƂƁ"
    },
    {
        base: "C",
        letters: "CⒸＣĆĈĊČ\xc7ḈƇȻꜾ"
    },
    {
        base: "D",
        letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
    },
    {
        base: "DZ",
        letters: "ǱǄ"
    },
    {
        base: "Dz",
        letters: "ǲǅ"
    },
    {
        base: "E",
        letters: "EⒺＥ\xc8\xc9\xcaỀẾỄỂẼĒḔḖĔĖ\xcbẺĚȄȆẸỆȨḜĘḘḚƐƎ"
    },
    {
        base: "F",
        letters: "FⒻＦḞƑꝻ"
    },
    {
        base: "G",
        letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
    },
    {
        base: "H",
        letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
    },
    {
        base: "I",
        letters: "IⒾＩ\xcc\xcd\xceĨĪĬİ\xcfḮỈǏȈȊỊĮḬƗ"
    },
    {
        base: "J",
        letters: "JⒿＪĴɈ"
    },
    {
        base: "K",
        letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
    },
    {
        base: "L",
        letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
    },
    {
        base: "LJ",
        letters: "Ǉ"
    },
    {
        base: "Lj",
        letters: "ǈ"
    },
    {
        base: "M",
        letters: "MⓂＭḾṀṂⱮƜ"
    },
    {
        base: "N",
        letters: "NⓃＮǸŃ\xd1ṄŇṆŅṊṈȠƝꞐꞤ"
    },
    {
        base: "NJ",
        letters: "Ǌ"
    },
    {
        base: "Nj",
        letters: "ǋ"
    },
    {
        base: "O",
        letters: "OⓄＯ\xd2\xd3\xd4ỒỐỖỔ\xd5ṌȬṎŌṐṒŎȮȰ\xd6ȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬ\xd8ǾƆƟꝊꝌ"
    },
    {
        base: "OI",
        letters: "Ƣ"
    },
    {
        base: "OO",
        letters: "Ꝏ"
    },
    {
        base: "OU",
        letters: "Ȣ"
    },
    {
        base: "P",
        letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
    },
    {
        base: "Q",
        letters: "QⓆＱꝖꝘɊ"
    },
    {
        base: "R",
        letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
    },
    {
        base: "S",
        letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
    },
    {
        base: "T",
        letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
    },
    {
        base: "TZ",
        letters: "Ꜩ"
    },
    {
        base: "U",
        letters: "UⓊＵ\xd9\xda\xdbŨṸŪṺŬ\xdcǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
    },
    {
        base: "V",
        letters: "VⓋＶṼṾƲꝞɅ"
    },
    {
        base: "VY",
        letters: "Ꝡ"
    },
    {
        base: "W",
        letters: "WⓌＷẀẂŴẆẄẈⱲ"
    },
    {
        base: "X",
        letters: "XⓍＸẊẌ"
    },
    {
        base: "Y",
        letters: "YⓎＹỲ\xddŶỸȲẎŸỶỴƳɎỾ"
    },
    {
        base: "Z",
        letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
    },
    {
        base: "a",
        letters: "aⓐａẚ\xe0\xe1\xe2ầấẫẩ\xe3āăằắẵẳȧǡ\xe4ǟả\xe5ǻǎȁȃạậặḁąⱥɐ"
    },
    {
        base: "aa",
        letters: "ꜳ"
    },
    {
        base: "ae",
        letters: "\xe6ǽǣ"
    },
    {
        base: "ao",
        letters: "ꜵ"
    },
    {
        base: "au",
        letters: "ꜷ"
    },
    {
        base: "av",
        letters: "ꜹꜻ"
    },
    {
        base: "ay",
        letters: "ꜽ"
    },
    {
        base: "b",
        letters: "bⓑｂḃḅḇƀƃɓ"
    },
    {
        base: "c",
        letters: "cⓒｃćĉċč\xe7ḉƈȼꜿↄ"
    },
    {
        base: "d",
        letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
    },
    {
        base: "dz",
        letters: "ǳǆ"
    },
    {
        base: "e",
        letters: "eⓔｅ\xe8\xe9\xeaềếễểẽēḕḗĕė\xebẻěȅȇẹệȩḝęḙḛɇɛǝ"
    },
    {
        base: "f",
        letters: "fⓕｆḟƒꝼ"
    },
    {
        base: "g",
        letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
    },
    {
        base: "h",
        letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
    },
    {
        base: "hv",
        letters: "ƕ"
    },
    {
        base: "i",
        letters: "iⓘｉ\xec\xed\xeeĩīĭ\xefḯỉǐȉȋịįḭɨı"
    },
    {
        base: "j",
        letters: "jⓙｊĵǰɉ"
    },
    {
        base: "k",
        letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
    },
    {
        base: "l",
        letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
    },
    {
        base: "lj",
        letters: "ǉ"
    },
    {
        base: "m",
        letters: "mⓜｍḿṁṃɱɯ"
    },
    {
        base: "n",
        letters: "nⓝｎǹń\xf1ṅňṇņṋṉƞɲŉꞑꞥ"
    },
    {
        base: "nj",
        letters: "ǌ"
    },
    {
        base: "o",
        letters: "oⓞｏ\xf2\xf3\xf4ồốỗổ\xf5ṍȭṏōṑṓŏȯȱ\xf6ȫỏőǒȍȏơờớỡởợọộǫǭ\xf8ǿɔꝋꝍɵ"
    },
    {
        base: "oi",
        letters: "ƣ"
    },
    {
        base: "ou",
        letters: "ȣ"
    },
    {
        base: "oo",
        letters: "ꝏ"
    },
    {
        base: "p",
        letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
    },
    {
        base: "q",
        letters: "qⓠｑɋꝗꝙ"
    },
    {
        base: "r",
        letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
    },
    {
        base: "s",
        letters: "sⓢｓ\xdfśṥŝṡšṧṣṩșşȿꞩꞅẛ"
    },
    {
        base: "t",
        letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
    },
    {
        base: "tz",
        letters: "ꜩ"
    },
    {
        base: "u",
        letters: "uⓤｕ\xf9\xfa\xfbũṹūṻŭ\xfcǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
    },
    {
        base: "v",
        letters: "vⓥｖṽṿʋꝟʌ"
    },
    {
        base: "vy",
        letters: "ꝡ"
    },
    {
        base: "w",
        letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
    },
    {
        base: "x",
        letters: "xⓧｘẋẍ"
    },
    {
        base: "y",
        letters: "yⓨｙỳ\xfdŷỹȳẏ\xffỷẙỵƴɏỿ"
    },
    {
        base: "z",
        letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
    }
];
var $789c9a1e73441536$var$anyDiacritic = new RegExp("[" + $789c9a1e73441536$var$diacritics.map(function(d) {
    return d.letters;
}).join("") + "]", "g");
var $789c9a1e73441536$var$diacriticToBase = {};
for(var $789c9a1e73441536$var$i = 0; $789c9a1e73441536$var$i < $789c9a1e73441536$var$diacritics.length; $789c9a1e73441536$var$i++){
    var $789c9a1e73441536$var$diacritic = $789c9a1e73441536$var$diacritics[$789c9a1e73441536$var$i];
    for(var $789c9a1e73441536$var$j = 0; $789c9a1e73441536$var$j < $789c9a1e73441536$var$diacritic.letters.length; $789c9a1e73441536$var$j++)$789c9a1e73441536$var$diacriticToBase[$789c9a1e73441536$var$diacritic.letters[$789c9a1e73441536$var$j]] = $789c9a1e73441536$var$diacritic.base;
}
var $789c9a1e73441536$var$stripDiacritics = function stripDiacritics(str) {
    return str.replace($789c9a1e73441536$var$anyDiacritic, function(match) {
        return $789c9a1e73441536$var$diacriticToBase[match];
    });
};
var $789c9a1e73441536$var$memoizedStripDiacriticsForInput = (0, $jk22o.default)($789c9a1e73441536$var$stripDiacritics);
var $789c9a1e73441536$var$trimString = function trimString(str) {
    return str.replace(/^\s+|\s+$/g, "");
};
var $789c9a1e73441536$var$defaultStringify = function defaultStringify(option) {
    return "".concat(option.label, " ").concat(option.value);
};
var $789c9a1e73441536$export$db3b6bfb95261072 = function createFilter(config) {
    return function(option, rawInput) {
        // eslint-disable-next-line no-underscore-dangle
        if (option.data.__isNew__) return true;
        var _ignoreCase$ignoreAcc = (0, $d49SP.default)({
            ignoreCase: true,
            ignoreAccents: true,
            stringify: $789c9a1e73441536$var$defaultStringify,
            trim: true,
            matchFrom: "any"
        }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify = _ignoreCase$ignoreAcc.stringify, trim = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
        var input = trim ? $789c9a1e73441536$var$trimString(rawInput) : rawInput;
        var candidate = trim ? $789c9a1e73441536$var$trimString(stringify(option)) : stringify(option);
        if (ignoreCase) {
            input = input.toLowerCase();
            candidate = candidate.toLowerCase();
        }
        if (ignoreAccents) {
            input = $789c9a1e73441536$var$memoizedStripDiacriticsForInput(input);
            candidate = $789c9a1e73441536$var$stripDiacritics(candidate);
        }
        return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
    };
};
var $789c9a1e73441536$var$_excluded = [
    "innerRef"
];
function $789c9a1e73441536$var$DummyInput(_ref) {
    var innerRef = _ref.innerRef, props = (0, $9X7IJ.default)(_ref, $789c9a1e73441536$var$_excluded);
    // Remove animation props not meant for HTML elements
    var filteredProps = (0, $cQEWp.r)(props, "onExited", "in", "enter", "exit", "appear");
    return (0, $8zogs.jsx)("input", (0, $8nd05.default)({
        ref: innerRef
    }, filteredProps, {
        css: /*#__PURE__*/ (0, $8zogs.css)({
            label: "dummyInput",
            // get rid of any default styles
            background: 0,
            border: 0,
            // important! this hides the flashing cursor
            caretColor: "transparent",
            fontSize: "inherit",
            gridArea: "1 / 1 / 2 / 3",
            outline: 0,
            padding: 0,
            // important! without `width` browsers won't allow focus
            width: 1,
            // remove cursor on desktop
            color: "transparent",
            // remove cursor on mobile whilst maintaining "scroll into view" behaviour
            left: -100,
            opacity: 0,
            position: "relative",
            transform: "scale(.01)"
        }, "", "")
    }));
}
var $789c9a1e73441536$var$cancelScroll = function cancelScroll(event) {
    event.preventDefault();
    event.stopPropagation();
};
function $789c9a1e73441536$var$useScrollCapture(_ref) {
    var isEnabled = _ref.isEnabled, onBottomArrive = _ref.onBottomArrive, onBottomLeave = _ref.onBottomLeave, onTopArrive = _ref.onTopArrive, onTopLeave = _ref.onTopLeave;
    var isBottom = (0, $acw62.useRef)(false);
    var isTop = (0, $acw62.useRef)(false);
    var touchStart = (0, $acw62.useRef)(0);
    var scrollTarget = (0, $acw62.useRef)(null);
    var handleEventDelta = (0, $acw62.useCallback)(function(event, delta) {
        if (scrollTarget.current === null) return;
        var _scrollTarget$current = scrollTarget.current, scrollTop = _scrollTarget$current.scrollTop, scrollHeight = _scrollTarget$current.scrollHeight, clientHeight = _scrollTarget$current.clientHeight;
        var target = scrollTarget.current;
        var isDeltaPositive = delta > 0;
        var availableScroll = scrollHeight - clientHeight - scrollTop;
        var shouldCancelScroll = false;
        // reset bottom/top flags
        if (availableScroll > delta && isBottom.current) {
            if (onBottomLeave) onBottomLeave(event);
            isBottom.current = false;
        }
        if (isDeltaPositive && isTop.current) {
            if (onTopLeave) onTopLeave(event);
            isTop.current = false;
        }
        // bottom limit
        if (isDeltaPositive && delta > availableScroll) {
            if (onBottomArrive && !isBottom.current) onBottomArrive(event);
            target.scrollTop = scrollHeight;
            shouldCancelScroll = true;
            isBottom.current = true;
        // top limit
        } else if (!isDeltaPositive && -delta > scrollTop) {
            if (onTopArrive && !isTop.current) onTopArrive(event);
            target.scrollTop = 0;
            shouldCancelScroll = true;
            isTop.current = true;
        }
        // cancel scroll
        if (shouldCancelScroll) $789c9a1e73441536$var$cancelScroll(event);
    }, [
        onBottomArrive,
        onBottomLeave,
        onTopArrive,
        onTopLeave
    ]);
    var onWheel = (0, $acw62.useCallback)(function(event) {
        handleEventDelta(event, event.deltaY);
    }, [
        handleEventDelta
    ]);
    var onTouchStart = (0, $acw62.useCallback)(function(event) {
        // set touch start so we can calculate touchmove delta
        touchStart.current = event.changedTouches[0].clientY;
    }, []);
    var onTouchMove = (0, $acw62.useCallback)(function(event) {
        var deltaY = touchStart.current - event.changedTouches[0].clientY;
        handleEventDelta(event, deltaY);
    }, [
        handleEventDelta
    ]);
    var startListening = (0, $acw62.useCallback)(function(el) {
        // bail early if no element is available to attach to
        if (!el) return;
        var notPassive = (0, $cQEWp.s) ? {
            passive: false
        } : false;
        el.addEventListener("wheel", onWheel, notPassive);
        el.addEventListener("touchstart", onTouchStart, notPassive);
        el.addEventListener("touchmove", onTouchMove, notPassive);
    }, [
        onTouchMove,
        onTouchStart,
        onWheel
    ]);
    var stopListening = (0, $acw62.useCallback)(function(el) {
        // bail early if no element is available to detach from
        if (!el) return;
        el.removeEventListener("wheel", onWheel, false);
        el.removeEventListener("touchstart", onTouchStart, false);
        el.removeEventListener("touchmove", onTouchMove, false);
    }, [
        onTouchMove,
        onTouchStart,
        onWheel
    ]);
    (0, $acw62.useEffect)(function() {
        if (!isEnabled) return;
        var element = scrollTarget.current;
        startListening(element);
        return function() {
            stopListening(element);
        };
    }, [
        isEnabled,
        startListening,
        stopListening
    ]);
    return function(element) {
        scrollTarget.current = element;
    };
}
var $789c9a1e73441536$var$STYLE_KEYS = [
    "boxSizing",
    "height",
    "overflow",
    "paddingRight",
    "position"
];
var $789c9a1e73441536$var$LOCK_STYLES = {
    boxSizing: "border-box",
    // account for possible declaration `width: 100%;` on body
    overflow: "hidden",
    position: "relative",
    height: "100%"
};
function $789c9a1e73441536$var$preventTouchMove(e) {
    e.preventDefault();
}
function $789c9a1e73441536$var$allowTouchMove(e) {
    e.stopPropagation();
}
function $789c9a1e73441536$var$preventInertiaScroll() {
    var top = this.scrollTop;
    var totalScroll = this.scrollHeight;
    var currentScroll = top + this.offsetHeight;
    if (top === 0) this.scrollTop = 1;
    else if (currentScroll === totalScroll) this.scrollTop = top - 1;
}
// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function $789c9a1e73441536$var$isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
}
var $789c9a1e73441536$var$canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var $789c9a1e73441536$var$activeScrollLocks = 0;
var $789c9a1e73441536$var$listenerOptions = {
    capture: false,
    passive: false
};
function $789c9a1e73441536$var$useScrollLock(_ref) {
    var isEnabled = _ref.isEnabled, _ref$accountForScroll = _ref.accountForScrollbars, accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
    var originalStyles = (0, $acw62.useRef)({});
    var scrollTarget = (0, $acw62.useRef)(null);
    var addScrollLock = (0, $acw62.useCallback)(function(touchScrollTarget) {
        if (!$789c9a1e73441536$var$canUseDOM) return;
        var target = document.body;
        var targetStyle = target && target.style;
        if (accountForScrollbars) // store any styles already applied to the body
        $789c9a1e73441536$var$STYLE_KEYS.forEach(function(key) {
            var val = targetStyle && targetStyle[key];
            originalStyles.current[key] = val;
        });
        // apply the lock styles and padding if this is the first scroll lock
        if (accountForScrollbars && $789c9a1e73441536$var$activeScrollLocks < 1) {
            var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
            var clientWidth = document.body ? document.body.clientWidth : 0;
            var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
            Object.keys($789c9a1e73441536$var$LOCK_STYLES).forEach(function(key) {
                var val = $789c9a1e73441536$var$LOCK_STYLES[key];
                if (targetStyle) targetStyle[key] = val;
            });
            if (targetStyle) targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
        // account for touch devices
        if (target && $789c9a1e73441536$var$isTouchDevice()) {
            // Mobile Safari ignores { overflow: hidden } declaration on the body.
            target.addEventListener("touchmove", $789c9a1e73441536$var$preventTouchMove, $789c9a1e73441536$var$listenerOptions);
            // Allow scroll on provided target
            if (touchScrollTarget) {
                touchScrollTarget.addEventListener("touchstart", $789c9a1e73441536$var$preventInertiaScroll, $789c9a1e73441536$var$listenerOptions);
                touchScrollTarget.addEventListener("touchmove", $789c9a1e73441536$var$allowTouchMove, $789c9a1e73441536$var$listenerOptions);
            }
        }
        // increment active scroll locks
        $789c9a1e73441536$var$activeScrollLocks += 1;
    }, [
        accountForScrollbars
    ]);
    var removeScrollLock = (0, $acw62.useCallback)(function(touchScrollTarget) {
        if (!$789c9a1e73441536$var$canUseDOM) return;
        var target = document.body;
        var targetStyle = target && target.style;
        // safely decrement active scroll locks
        $789c9a1e73441536$var$activeScrollLocks = Math.max($789c9a1e73441536$var$activeScrollLocks - 1, 0);
        // reapply original body styles, if any
        if (accountForScrollbars && $789c9a1e73441536$var$activeScrollLocks < 1) $789c9a1e73441536$var$STYLE_KEYS.forEach(function(key) {
            var val = originalStyles.current[key];
            if (targetStyle) targetStyle[key] = val;
        });
        // remove touch listeners
        if (target && $789c9a1e73441536$var$isTouchDevice()) {
            target.removeEventListener("touchmove", $789c9a1e73441536$var$preventTouchMove, $789c9a1e73441536$var$listenerOptions);
            if (touchScrollTarget) {
                touchScrollTarget.removeEventListener("touchstart", $789c9a1e73441536$var$preventInertiaScroll, $789c9a1e73441536$var$listenerOptions);
                touchScrollTarget.removeEventListener("touchmove", $789c9a1e73441536$var$allowTouchMove, $789c9a1e73441536$var$listenerOptions);
            }
        }
    }, [
        accountForScrollbars
    ]);
    (0, $acw62.useEffect)(function() {
        if (!isEnabled) return;
        var element = scrollTarget.current;
        addScrollLock(element);
        return function() {
            removeScrollLock(element);
        };
    }, [
        isEnabled,
        addScrollLock,
        removeScrollLock
    ]);
    return function(element) {
        scrollTarget.current = element;
    };
}
function $789c9a1e73441536$var$_EMOTION_STRINGIFIED_CSS_ERROR__$1() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var $789c9a1e73441536$var$blurSelectInput = function blurSelectInput() {
    return document.activeElement && document.activeElement.blur();
};
var $789c9a1e73441536$var$_ref2$1 = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function $789c9a1e73441536$var$ScrollManager(_ref) {
    var children = _ref.children, lockEnabled = _ref.lockEnabled, _ref$captureEnabled = _ref.captureEnabled, captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled, onBottomArrive = _ref.onBottomArrive, onBottomLeave = _ref.onBottomLeave, onTopArrive = _ref.onTopArrive, onTopLeave = _ref.onTopLeave;
    var setScrollCaptureTarget = $789c9a1e73441536$var$useScrollCapture({
        isEnabled: captureEnabled,
        onBottomArrive: onBottomArrive,
        onBottomLeave: onBottomLeave,
        onTopArrive: onTopArrive,
        onTopLeave: onTopLeave
    });
    var setScrollLockTarget = $789c9a1e73441536$var$useScrollLock({
        isEnabled: lockEnabled
    });
    var targetRef = function targetRef(element) {
        setScrollCaptureTarget(element);
        setScrollLockTarget(element);
    };
    return (0, $8zogs.jsx)((0, $acw62.Fragment), null, lockEnabled && (0, $8zogs.jsx)("div", {
        onClick: $789c9a1e73441536$var$blurSelectInput,
        css: $789c9a1e73441536$var$_ref2$1
    }), children(targetRef));
}
function $789c9a1e73441536$var$_EMOTION_STRINGIFIED_CSS_ERROR__() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var $789c9a1e73441536$var$_ref2 = {
    name: "1a0ro4n-requiredInput",
    styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
};
var $789c9a1e73441536$var$RequiredInput = function RequiredInput(_ref) {
    var name = _ref.name, onFocus = _ref.onFocus;
    return (0, $8zogs.jsx)("input", {
        required: true,
        name: name,
        tabIndex: -1,
        "aria-hidden": "true",
        onFocus: onFocus,
        css: $789c9a1e73441536$var$_ref2,
        value: "",
        onChange: function onChange() {}
    });
};
var $789c9a1e73441536$var$RequiredInput$1 = $789c9a1e73441536$var$RequiredInput;
var $789c9a1e73441536$var$formatGroupLabel = function formatGroupLabel(group) {
    return group.label;
};
var $789c9a1e73441536$export$8b22cf2602fb60ce = function getOptionLabel(option) {
    return option.label;
};
var $789c9a1e73441536$export$39b482c5e57630a8 = function getOptionValue(option) {
    return option.value;
};
var $789c9a1e73441536$var$isOptionDisabled = function isOptionDisabled(option) {
    return !!option.isDisabled;
};
var $789c9a1e73441536$var$defaultStyles = {
    clearIndicator: (0, $cQEWp.a),
    container: (0, $cQEWp.b),
    control: (0, $cQEWp.d),
    dropdownIndicator: (0, $cQEWp.e),
    group: (0, $cQEWp.g),
    groupHeading: (0, $cQEWp.f),
    indicatorsContainer: (0, $cQEWp.i),
    indicatorSeparator: (0, $cQEWp.h),
    input: (0, $cQEWp.j),
    loadingIndicator: (0, $cQEWp.l),
    loadingMessage: (0, $cQEWp.k),
    menu: (0, $cQEWp.m),
    menuList: (0, $cQEWp.n),
    menuPortal: (0, $cQEWp.o),
    multiValue: (0, $cQEWp.p),
    multiValueLabel: (0, $cQEWp.q),
    multiValueRemove: (0, $cQEWp.t),
    noOptionsMessage: (0, $cQEWp.u),
    option: (0, $cQEWp.v),
    placeholder: (0, $cQEWp.w),
    singleValue: (0, $cQEWp.x),
    valueContainer: (0, $cQEWp.y)
};
// Merge Utility
// Allows consumers to extend a base Select with additional styles
function $789c9a1e73441536$export$953cecd6e717a553(source) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // initialize with source styles
    var styles = (0, $d49SP.default)({}, source);
    // massage in target styles
    Object.keys(target).forEach(function(keyAsString) {
        var key = keyAsString;
        if (source[key]) styles[key] = function(rsCss, props) {
            return target[key](source[key](rsCss, props), props);
        };
        else styles[key] = target[key];
    });
    return styles;
}
var $789c9a1e73441536$var$colors = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)"
};
var $789c9a1e73441536$var$borderRadius = 4;
// Used to calculate consistent margin/padding on elements
var $789c9a1e73441536$var$baseUnit = 4;
// The minimum height of the control
var $789c9a1e73441536$var$controlHeight = 38;
// The amount of space between the control and menu */
var $789c9a1e73441536$var$menuGutter = $789c9a1e73441536$var$baseUnit * 2;
var $789c9a1e73441536$var$spacing = {
    baseUnit: $789c9a1e73441536$var$baseUnit,
    controlHeight: $789c9a1e73441536$var$controlHeight,
    menuGutter: $789c9a1e73441536$var$menuGutter
};
var $789c9a1e73441536$export$4368d992c4eafac0 = {
    borderRadius: $789c9a1e73441536$var$borderRadius,
    colors: $789c9a1e73441536$var$colors,
    spacing: $789c9a1e73441536$var$spacing
};
var $789c9a1e73441536$export$407448d2b89b1813 = {
    "aria-live": "polite",
    backspaceRemovesValue: true,
    blurInputOnSelect: (0, $cQEWp.z)(),
    captureMenuScroll: !(0, $cQEWp.z)(),
    classNames: {},
    closeMenuOnSelect: true,
    closeMenuOnScroll: false,
    components: {},
    controlShouldRenderValue: true,
    escapeClearsValue: false,
    filterOption: $789c9a1e73441536$export$db3b6bfb95261072(),
    formatGroupLabel: $789c9a1e73441536$var$formatGroupLabel,
    getOptionLabel: $789c9a1e73441536$export$8b22cf2602fb60ce,
    getOptionValue: $789c9a1e73441536$export$39b482c5e57630a8,
    isDisabled: false,
    isLoading: false,
    isMulti: false,
    isRtl: false,
    isSearchable: true,
    isOptionDisabled: $789c9a1e73441536$var$isOptionDisabled,
    loadingMessage: function loadingMessage() {
        return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: false,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: false,
    menuShouldScrollIntoView: !(0, $cQEWp.A)(),
    noOptionsMessage: function noOptionsMessage() {
        return "No options";
    },
    openMenuOnFocus: false,
    openMenuOnClick: true,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function screenReaderStatus(_ref) {
        var count = _ref.count;
        return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: true,
    unstyled: false
};
function $789c9a1e73441536$var$toCategorizedOption(props, option, selectValue, index) {
    var isDisabled = $789c9a1e73441536$var$_isOptionDisabled(props, option, selectValue);
    var isSelected = $789c9a1e73441536$var$_isOptionSelected(props, option, selectValue);
    var label = $789c9a1e73441536$var$getOptionLabel(props, option);
    var value = $789c9a1e73441536$var$getOptionValue(props, option);
    return {
        type: "option",
        data: option,
        isDisabled: isDisabled,
        isSelected: isSelected,
        label: label,
        value: value,
        index: index
    };
}
function $789c9a1e73441536$var$buildCategorizedOptions(props, selectValue) {
    return props.options.map(function(groupOrOption, groupOrOptionIndex) {
        if ("options" in groupOrOption) {
            var categorizedOptions = groupOrOption.options.map(function(option, optionIndex) {
                return $789c9a1e73441536$var$toCategorizedOption(props, option, selectValue, optionIndex);
            }).filter(function(categorizedOption) {
                return $789c9a1e73441536$var$isFocusable(props, categorizedOption);
            });
            return categorizedOptions.length > 0 ? {
                type: "group",
                data: groupOrOption,
                options: categorizedOptions,
                index: groupOrOptionIndex
            } : undefined;
        }
        var categorizedOption = $789c9a1e73441536$var$toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
        return $789c9a1e73441536$var$isFocusable(props, categorizedOption) ? categorizedOption : undefined;
    }).filter((0, $cQEWp.K));
}
function $789c9a1e73441536$var$buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
    return categorizedOptions.reduce(function(optionsAccumulator, categorizedOption) {
        if (categorizedOption.type === "group") optionsAccumulator.push.apply(optionsAccumulator, (0, $kbxxf.default)(categorizedOption.options.map(function(option) {
            return option.data;
        })));
        else optionsAccumulator.push(categorizedOption.data);
        return optionsAccumulator;
    }, []);
}
function $789c9a1e73441536$var$buildFocusableOptions(props, selectValue) {
    return $789c9a1e73441536$var$buildFocusableOptionsFromCategorizedOptions($789c9a1e73441536$var$buildCategorizedOptions(props, selectValue));
}
function $789c9a1e73441536$var$isFocusable(props, categorizedOption) {
    var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
    var data = categorizedOption.data, isSelected = categorizedOption.isSelected, label = categorizedOption.label, value = categorizedOption.value;
    return (!$789c9a1e73441536$var$shouldHideSelectedOptions(props) || !isSelected) && $789c9a1e73441536$var$_filterOption(props, {
        label: label,
        value: value,
        data: data
    }, inputValue);
}
function $789c9a1e73441536$var$getNextFocusedValue(state, nextSelectValue) {
    var focusedValue = state.focusedValue, lastSelectValue = state.selectValue;
    var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
    if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
        if (nextFocusedIndex > -1) // the focused value is still in the selectValue, return it
        return focusedValue;
        else if (lastFocusedIndex < nextSelectValue.length) // the focusedValue is not present in the next selectValue array by
        // reference, so return the new value at the same index
        return nextSelectValue[lastFocusedIndex];
    }
    return null;
}
function $789c9a1e73441536$var$getNextFocusedOption(state, options) {
    var lastFocusedOption = state.focusedOption;
    return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}
var $789c9a1e73441536$var$getOptionLabel = function getOptionLabel(props, data) {
    return props.getOptionLabel(data);
};
var $789c9a1e73441536$var$getOptionValue = function getOptionValue(props, data) {
    return props.getOptionValue(data);
};
function $789c9a1e73441536$var$_isOptionDisabled(props, option, selectValue) {
    return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}
function $789c9a1e73441536$var$_isOptionSelected(props, option, selectValue) {
    if (selectValue.indexOf(option) > -1) return true;
    if (typeof props.isOptionSelected === "function") return props.isOptionSelected(option, selectValue);
    var candidate = $789c9a1e73441536$var$getOptionValue(props, option);
    return selectValue.some(function(i) {
        return $789c9a1e73441536$var$getOptionValue(props, i) === candidate;
    });
}
function $789c9a1e73441536$var$_filterOption(props, option, inputValue) {
    return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var $789c9a1e73441536$var$shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
    var hideSelectedOptions = props.hideSelectedOptions, isMulti = props.isMulti;
    if (hideSelectedOptions === undefined) return isMulti;
    return hideSelectedOptions;
};
var $789c9a1e73441536$var$instanceId = 1;
var $789c9a1e73441536$export$25ce5a424b770e84 = /*#__PURE__*/ function(_Component) {
    (0, $1gYAD.default)(Select, _Component);
    var _super = (0, $enfmq.default)(Select);
    // Misc. Instance Properties
    // ------------------------------
    // TODO
    // Refs
    // ------------------------------
    // Lifecycle
    // ------------------------------
    function Select(_props) {
        var _this;
        (0, $6CZeq.default)(this, Select);
        _this = _super.call(this, _props);
        _this.state = {
            ariaSelection: null,
            focusedOption: null,
            focusedValue: null,
            inputIsHidden: false,
            isFocused: false,
            selectValue: [],
            clearFocusValueOnUpdate: false,
            prevWasFocused: false,
            inputIsHiddenAfterUpdate: undefined,
            prevProps: undefined
        };
        _this.blockOptionHover = false;
        _this.isComposing = false;
        _this.commonProps = void 0;
        _this.initialTouchX = 0;
        _this.initialTouchY = 0;
        _this.instancePrefix = "";
        _this.openAfterFocus = false;
        _this.scrollToFocusedOptionOnUpdate = false;
        _this.userIsDragging = void 0;
        _this.controlRef = null;
        _this.getControlRef = function(ref) {
            _this.controlRef = ref;
        };
        _this.focusedOptionRef = null;
        _this.getFocusedOptionRef = function(ref) {
            _this.focusedOptionRef = ref;
        };
        _this.menuListRef = null;
        _this.getMenuListRef = function(ref) {
            _this.menuListRef = ref;
        };
        _this.inputRef = null;
        _this.getInputRef = function(ref) {
            _this.inputRef = ref;
        };
        _this.focus = _this.focusInput;
        _this.blur = _this.blurInput;
        _this.onChange = function(newValue, actionMeta) {
            var _this$props = _this.props, onChange = _this$props.onChange, name = _this$props.name;
            actionMeta.name = name;
            _this.ariaOnChange(newValue, actionMeta);
            onChange(newValue, actionMeta);
        };
        _this.setValue = function(newValue, action, option) {
            var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti, inputValue = _this$props2.inputValue;
            _this.onInputChange("", {
                action: "set-value",
                prevInputValue: inputValue
            });
            if (closeMenuOnSelect) {
                _this.setState({
                    inputIsHiddenAfterUpdate: !isMulti
                });
                _this.onMenuClose();
            }
            // when the select value should change, we should reset focusedValue
            _this.setState({
                clearFocusValueOnUpdate: true
            });
            _this.onChange(newValue, {
                action: action,
                option: option
            });
        };
        _this.selectOption = function(newValue) {
            var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti, name = _this$props3.name;
            var selectValue = _this.state.selectValue;
            var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
            var isDisabled = _this.isOptionDisabled(newValue, selectValue);
            if (deselected) {
                var candidate = _this.getOptionValue(newValue);
                _this.setValue((0, $cQEWp.B)(selectValue.filter(function(i) {
                    return _this.getOptionValue(i) !== candidate;
                })), "deselect-option", newValue);
            } else if (!isDisabled) {
                // Select option if option is not disabled
                if (isMulti) _this.setValue((0, $cQEWp.B)([].concat((0, $kbxxf.default)(selectValue), [
                    newValue
                ])), "select-option", newValue);
                else _this.setValue((0, $cQEWp.C)(newValue), "select-option");
            } else {
                _this.ariaOnChange((0, $cQEWp.C)(newValue), {
                    action: "select-option",
                    option: newValue,
                    name: name
                });
                return;
            }
            if (blurInputOnSelect) _this.blurInput();
        };
        _this.removeValue = function(removedValue) {
            var isMulti = _this.props.isMulti;
            var selectValue = _this.state.selectValue;
            var candidate = _this.getOptionValue(removedValue);
            var newValueArray = selectValue.filter(function(i) {
                return _this.getOptionValue(i) !== candidate;
            });
            var newValue = (0, $cQEWp.D)(isMulti, newValueArray, newValueArray[0] || null);
            _this.onChange(newValue, {
                action: "remove-value",
                removedValue: removedValue
            });
            _this.focusInput();
        };
        _this.clearValue = function() {
            var selectValue = _this.state.selectValue;
            _this.onChange((0, $cQEWp.D)(_this.props.isMulti, [], null), {
                action: "clear",
                removedValues: selectValue
            });
        };
        _this.popValue = function() {
            var isMulti = _this.props.isMulti;
            var selectValue = _this.state.selectValue;
            var lastSelectedValue = selectValue[selectValue.length - 1];
            var newValueArray = selectValue.slice(0, selectValue.length - 1);
            var newValue = (0, $cQEWp.D)(isMulti, newValueArray, newValueArray[0] || null);
            _this.onChange(newValue, {
                action: "pop-value",
                removedValue: lastSelectedValue
            });
        };
        _this.getValue = function() {
            return _this.state.selectValue;
        };
        _this.cx = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            return (0, $cQEWp.E).apply(void 0, [
                _this.props.classNamePrefix
            ].concat(args));
        };
        _this.getOptionLabel = function(data) {
            return $789c9a1e73441536$var$getOptionLabel(_this.props, data);
        };
        _this.getOptionValue = function(data) {
            return $789c9a1e73441536$var$getOptionValue(_this.props, data);
        };
        _this.getStyles = function(key, props) {
            var unstyled = _this.props.unstyled;
            var base = $789c9a1e73441536$var$defaultStyles[key](props, unstyled);
            base.boxSizing = "border-box";
            var custom = _this.props.styles[key];
            return custom ? custom(base, props) : base;
        };
        _this.getClassNames = function(key, props) {
            var _this$props$className, _this$props$className2;
            return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
        };
        _this.getElementId = function(element) {
            return "".concat(_this.instancePrefix, "-").concat(element);
        };
        _this.getComponents = function() {
            return (0, $cQEWp.F)(_this.props);
        };
        _this.buildCategorizedOptions = function() {
            return $789c9a1e73441536$var$buildCategorizedOptions(_this.props, _this.state.selectValue);
        };
        _this.getCategorizedOptions = function() {
            return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
        };
        _this.buildFocusableOptions = function() {
            return $789c9a1e73441536$var$buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
        };
        _this.getFocusableOptions = function() {
            return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
        };
        _this.ariaOnChange = function(value, actionMeta) {
            _this.setState({
                ariaSelection: (0, $d49SP.default)({
                    value: value
                }, actionMeta)
            });
        };
        _this.onMenuMouseDown = function(event) {
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            _this.focusInput();
        };
        _this.onMenuMouseMove = function(event) {
            _this.blockOptionHover = false;
        };
        _this.onControlMouseDown = function(event) {
            // Event captured by dropdown indicator
            if (event.defaultPrevented) return;
            var openMenuOnClick = _this.props.openMenuOnClick;
            if (!_this.state.isFocused) {
                if (openMenuOnClick) _this.openAfterFocus = true;
                _this.focusInput();
            } else if (!_this.props.menuIsOpen) {
                if (openMenuOnClick) _this.openMenu("first");
            } else if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") _this.onMenuClose();
            if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") event.preventDefault();
        };
        _this.onDropdownIndicatorMouseDown = function(event) {
            // ignore mouse events that weren't triggered by the primary button
            if (event && event.type === "mousedown" && event.button !== 0) return;
            if (_this.props.isDisabled) return;
            var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
            _this.focusInput();
            if (menuIsOpen) {
                _this.setState({
                    inputIsHiddenAfterUpdate: !isMulti
                });
                _this.onMenuClose();
            } else _this.openMenu("first");
            event.preventDefault();
        };
        _this.onClearIndicatorMouseDown = function(event) {
            // ignore mouse events that weren't triggered by the primary button
            if (event && event.type === "mousedown" && event.button !== 0) return;
            _this.clearValue();
            event.preventDefault();
            _this.openAfterFocus = false;
            if (event.type === "touchend") _this.focusInput();
            else setTimeout(function() {
                return _this.focusInput();
            });
        };
        _this.onScroll = function(event) {
            if (typeof _this.props.closeMenuOnScroll === "boolean") {
                if (event.target instanceof HTMLElement && (0, $cQEWp.G)(event.target)) _this.props.onMenuClose();
            } else if (typeof _this.props.closeMenuOnScroll === "function") {
                if (_this.props.closeMenuOnScroll(event)) _this.props.onMenuClose();
            }
        };
        _this.onCompositionStart = function() {
            _this.isComposing = true;
        };
        _this.onCompositionEnd = function() {
            _this.isComposing = false;
        };
        _this.onTouchStart = function(_ref2) {
            var touches = _ref2.touches;
            var touch = touches && touches.item(0);
            if (!touch) return;
            _this.initialTouchX = touch.clientX;
            _this.initialTouchY = touch.clientY;
            _this.userIsDragging = false;
        };
        _this.onTouchMove = function(_ref3) {
            var touches = _ref3.touches;
            var touch = touches && touches.item(0);
            if (!touch) return;
            var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
            var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
            var moveThreshold = 5;
            _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
        };
        _this.onTouchEnd = function(event) {
            if (_this.userIsDragging) return;
            // close the menu if the user taps outside
            // we're checking on event.target here instead of event.currentTarget, because we want to assert information
            // on events on child elements, not the document (which we've attached this handler to).
            if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) _this.blurInput();
            // reset move vars
            _this.initialTouchX = 0;
            _this.initialTouchY = 0;
        };
        _this.onControlTouchEnd = function(event) {
            if (_this.userIsDragging) return;
            _this.onControlMouseDown(event);
        };
        _this.onClearIndicatorTouchEnd = function(event) {
            if (_this.userIsDragging) return;
            _this.onClearIndicatorMouseDown(event);
        };
        _this.onDropdownIndicatorTouchEnd = function(event) {
            if (_this.userIsDragging) return;
            _this.onDropdownIndicatorMouseDown(event);
        };
        _this.handleInputChange = function(event) {
            var prevInputValue = _this.props.inputValue;
            var inputValue = event.currentTarget.value;
            _this.setState({
                inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange(inputValue, {
                action: "input-change",
                prevInputValue: prevInputValue
            });
            if (!_this.props.menuIsOpen) _this.onMenuOpen();
        };
        _this.onInputFocus = function(event) {
            if (_this.props.onFocus) _this.props.onFocus(event);
            _this.setState({
                inputIsHiddenAfterUpdate: false,
                isFocused: true
            });
            if (_this.openAfterFocus || _this.props.openMenuOnFocus) _this.openMenu("first");
            _this.openAfterFocus = false;
        };
        _this.onInputBlur = function(event) {
            var prevInputValue = _this.props.inputValue;
            if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
                _this.inputRef.focus();
                return;
            }
            if (_this.props.onBlur) _this.props.onBlur(event);
            _this.onInputChange("", {
                action: "input-blur",
                prevInputValue: prevInputValue
            });
            _this.onMenuClose();
            _this.setState({
                focusedValue: null,
                isFocused: false
            });
        };
        _this.onOptionHover = function(focusedOption) {
            if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) return;
            _this.setState({
                focusedOption: focusedOption
            });
        };
        _this.shouldHideSelectedOptions = function() {
            return $789c9a1e73441536$var$shouldHideSelectedOptions(_this.props);
        };
        _this.onValueInputFocus = function(e) {
            e.preventDefault();
            e.stopPropagation();
            _this.focus();
        };
        _this.onKeyDown = function(event) {
            var _this$props5 = _this.props, isMulti = _this$props5.isMulti, backspaceRemovesValue = _this$props5.backspaceRemovesValue, escapeClearsValue = _this$props5.escapeClearsValue, inputValue = _this$props5.inputValue, isClearable = _this$props5.isClearable, isDisabled = _this$props5.isDisabled, menuIsOpen = _this$props5.menuIsOpen, onKeyDown = _this$props5.onKeyDown, tabSelectsValue = _this$props5.tabSelectsValue, openMenuOnFocus = _this$props5.openMenuOnFocus;
            var _this$state = _this.state, focusedOption = _this$state.focusedOption, focusedValue = _this$state.focusedValue, selectValue = _this$state.selectValue;
            if (isDisabled) return;
            if (typeof onKeyDown === "function") {
                onKeyDown(event);
                if (event.defaultPrevented) return;
            }
            // Block option hover events when the user has just pressed a key
            _this.blockOptionHover = true;
            switch(event.key){
                case "ArrowLeft":
                    if (!isMulti || inputValue) return;
                    _this.focusValue("previous");
                    break;
                case "ArrowRight":
                    if (!isMulti || inputValue) return;
                    _this.focusValue("next");
                    break;
                case "Delete":
                case "Backspace":
                    if (inputValue) return;
                    if (focusedValue) _this.removeValue(focusedValue);
                    else {
                        if (!backspaceRemovesValue) return;
                        if (isMulti) _this.popValue();
                        else if (isClearable) _this.clearValue();
                    }
                    break;
                case "Tab":
                    if (_this.isComposing) return;
                    if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
                    // option is already selected; it breaks the flow of navigation
                    openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) return;
                    _this.selectOption(focusedOption);
                    break;
                case "Enter":
                    if (event.keyCode === 229) break;
                    if (menuIsOpen) {
                        if (!focusedOption) return;
                        if (_this.isComposing) return;
                        _this.selectOption(focusedOption);
                        break;
                    }
                    return;
                case "Escape":
                    if (menuIsOpen) {
                        _this.setState({
                            inputIsHiddenAfterUpdate: false
                        });
                        _this.onInputChange("", {
                            action: "menu-close",
                            prevInputValue: inputValue
                        });
                        _this.onMenuClose();
                    } else if (isClearable && escapeClearsValue) _this.clearValue();
                    break;
                case " ":
                    // space
                    if (inputValue) return;
                    if (!menuIsOpen) {
                        _this.openMenu("first");
                        break;
                    }
                    if (!focusedOption) return;
                    _this.selectOption(focusedOption);
                    break;
                case "ArrowUp":
                    if (menuIsOpen) _this.focusOption("up");
                    else _this.openMenu("last");
                    break;
                case "ArrowDown":
                    if (menuIsOpen) _this.focusOption("down");
                    else _this.openMenu("first");
                    break;
                case "PageUp":
                    if (!menuIsOpen) return;
                    _this.focusOption("pageup");
                    break;
                case "PageDown":
                    if (!menuIsOpen) return;
                    _this.focusOption("pagedown");
                    break;
                case "Home":
                    if (!menuIsOpen) return;
                    _this.focusOption("first");
                    break;
                case "End":
                    if (!menuIsOpen) return;
                    _this.focusOption("last");
                    break;
                default:
                    return;
            }
            event.preventDefault();
        };
        _this.instancePrefix = "react-select-" + (_this.props.instanceId || ++$789c9a1e73441536$var$instanceId);
        _this.state.selectValue = (0, $cQEWp.H)(_props.value);
        // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
        if (_props.menuIsOpen && _this.state.selectValue.length) {
            var focusableOptions = _this.buildFocusableOptions();
            var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
            _this.state.focusedOption = focusableOptions[optionIndex];
        }
        return _this;
    }
    (0, $cHPF9.default)(Select, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.startListeningComposition();
                this.startListeningToTouch();
                if (this.props.closeMenuOnScroll && document && document.addEventListener) // Listen to all scroll events, and filter them out inside of 'onScroll'
                document.addEventListener("scroll", this.onScroll, true);
                if (this.props.autoFocus) this.focusInput();
                // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
                if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) (0, $cQEWp.I)(this.menuListRef, this.focusedOptionRef);
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var _this$props6 = this.props, isDisabled = _this$props6.isDisabled, menuIsOpen = _this$props6.menuIsOpen;
                var isFocused = this.state.isFocused;
                if (// ensure focus is restored correctly when the control becomes enabled
                isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
                isFocused && menuIsOpen && !prevProps.menuIsOpen) this.focusInput();
                if (isFocused && isDisabled && !prevProps.isDisabled) // ensure select state gets blurred in case Select is programmatically disabled while focused
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({
                    isFocused: false
                }, this.onMenuClose);
                else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({
                    isFocused: true
                });
                // scroll the focused option into view if necessary
                if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
                    (0, $cQEWp.I)(this.menuListRef, this.focusedOptionRef);
                    this.scrollToFocusedOptionOnUpdate = false;
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.stopListeningComposition();
                this.stopListeningToTouch();
                document.removeEventListener("scroll", this.onScroll, true);
            }
        },
        {
            key: "onMenuOpen",
            value: function onMenuOpen() {
                this.props.onMenuOpen();
            }
        },
        {
            key: "onMenuClose",
            value: function onMenuClose() {
                this.onInputChange("", {
                    action: "menu-close",
                    prevInputValue: this.props.inputValue
                });
                this.props.onMenuClose();
            }
        },
        {
            key: "onInputChange",
            value: function onInputChange(newValue, actionMeta) {
                this.props.onInputChange(newValue, actionMeta);
            }
        },
        {
            key: "focusInput",
            value: function focusInput() {
                if (!this.inputRef) return;
                this.inputRef.focus();
            }
        },
        {
            key: "blurInput",
            value: function blurInput() {
                if (!this.inputRef) return;
                this.inputRef.blur();
            }
        },
        {
            key: "openMenu",
            value: function openMenu(focusOption) {
                var _this2 = this;
                var _this$state2 = this.state, selectValue = _this$state2.selectValue, isFocused = _this$state2.isFocused;
                var focusableOptions = this.buildFocusableOptions();
                var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;
                if (!this.props.isMulti) {
                    var selectedIndex = focusableOptions.indexOf(selectValue[0]);
                    if (selectedIndex > -1) openAtIndex = selectedIndex;
                }
                // only scroll if the menu isn't already open
                this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
                this.setState({
                    inputIsHiddenAfterUpdate: false,
                    focusedValue: null,
                    focusedOption: focusableOptions[openAtIndex]
                }, function() {
                    return _this2.onMenuOpen();
                });
            }
        },
        {
            key: "focusValue",
            value: function focusValue(direction) {
                var _this$state3 = this.state, selectValue = _this$state3.selectValue, focusedValue = _this$state3.focusedValue;
                // Only multiselects support value focusing
                if (!this.props.isMulti) return;
                this.setState({
                    focusedOption: null
                });
                var focusedIndex = selectValue.indexOf(focusedValue);
                if (!focusedValue) focusedIndex = -1;
                var lastIndex = selectValue.length - 1;
                var nextFocus = -1;
                if (!selectValue.length) return;
                switch(direction){
                    case "previous":
                        if (focusedIndex === 0) // don't cycle from the start to the end
                        nextFocus = 0;
                        else if (focusedIndex === -1) // if nothing is focused, focus the last value first
                        nextFocus = lastIndex;
                        else nextFocus = focusedIndex - 1;
                        break;
                    case "next":
                        if (focusedIndex > -1 && focusedIndex < lastIndex) nextFocus = focusedIndex + 1;
                        break;
                }
                this.setState({
                    inputIsHidden: nextFocus !== -1,
                    focusedValue: selectValue[nextFocus]
                });
            }
        },
        {
            key: "focusOption",
            value: function focusOption() {
                var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "first";
                var pageSize = this.props.pageSize;
                var focusedOption = this.state.focusedOption;
                var options = this.getFocusableOptions();
                if (!options.length) return;
                var nextFocus = 0; // handles 'first'
                var focusedIndex = options.indexOf(focusedOption);
                if (!focusedOption) focusedIndex = -1;
                if (direction === "up") nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
                else if (direction === "down") nextFocus = (focusedIndex + 1) % options.length;
                else if (direction === "pageup") {
                    nextFocus = focusedIndex - pageSize;
                    if (nextFocus < 0) nextFocus = 0;
                } else if (direction === "pagedown") {
                    nextFocus = focusedIndex + pageSize;
                    if (nextFocus > options.length - 1) nextFocus = options.length - 1;
                } else if (direction === "last") nextFocus = options.length - 1;
                this.scrollToFocusedOptionOnUpdate = true;
                this.setState({
                    focusedOption: options[nextFocus],
                    focusedValue: null
                });
            }
        },
        {
            key: "getTheme",
            value: // ==============================
            // Getters
            // ==============================
            function getTheme() {
                // Use the default theme if there are no customisations.
                if (!this.props.theme) return $789c9a1e73441536$export$4368d992c4eafac0;
                // If the theme prop is a function, assume the function
                // knows how to merge the passed-in default theme with
                // its own modifications.
                if (typeof this.props.theme === "function") return this.props.theme($789c9a1e73441536$export$4368d992c4eafac0);
                // Otherwise, if a plain theme object was passed in,
                // overlay it with the default theme.
                return (0, $d49SP.default)((0, $d49SP.default)({}, $789c9a1e73441536$export$4368d992c4eafac0), this.props.theme);
            }
        },
        {
            key: "getCommonProps",
            value: function getCommonProps() {
                var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getClassNames = this.getClassNames, getValue = this.getValue, selectOption = this.selectOption, setValue = this.setValue, props = this.props;
                var isMulti = props.isMulti, isRtl = props.isRtl, options = props.options;
                var hasValue = this.hasValue();
                return {
                    clearValue: clearValue,
                    cx: cx,
                    getStyles: getStyles,
                    getClassNames: getClassNames,
                    getValue: getValue,
                    hasValue: hasValue,
                    isMulti: isMulti,
                    isRtl: isRtl,
                    options: options,
                    selectOption: selectOption,
                    selectProps: props,
                    setValue: setValue,
                    theme: this.getTheme()
                };
            }
        },
        {
            key: "hasValue",
            value: function hasValue() {
                var selectValue = this.state.selectValue;
                return selectValue.length > 0;
            }
        },
        {
            key: "hasOptions",
            value: function hasOptions() {
                return !!this.getFocusableOptions().length;
            }
        },
        {
            key: "isClearable",
            value: function isClearable() {
                var _this$props7 = this.props, isClearable = _this$props7.isClearable, isMulti = _this$props7.isMulti;
                // single select, by default, IS NOT clearable
                // multi select, by default, IS clearable
                if (isClearable === undefined) return isMulti;
                return isClearable;
            }
        },
        {
            key: "isOptionDisabled",
            value: function isOptionDisabled(option, selectValue) {
                return $789c9a1e73441536$var$_isOptionDisabled(this.props, option, selectValue);
            }
        },
        {
            key: "isOptionSelected",
            value: function isOptionSelected(option, selectValue) {
                return $789c9a1e73441536$var$_isOptionSelected(this.props, option, selectValue);
            }
        },
        {
            key: "filterOption",
            value: function filterOption(option, inputValue) {
                return $789c9a1e73441536$var$_filterOption(this.props, option, inputValue);
            }
        },
        {
            key: "formatOptionLabel",
            value: function formatOptionLabel(data, context) {
                if (typeof this.props.formatOptionLabel === "function") {
                    var _inputValue = this.props.inputValue;
                    var _selectValue = this.state.selectValue;
                    return this.props.formatOptionLabel(data, {
                        context: context,
                        inputValue: _inputValue,
                        selectValue: _selectValue
                    });
                } else return this.getOptionLabel(data);
            }
        },
        {
            key: "formatGroupLabel",
            value: function formatGroupLabel(data) {
                return this.props.formatGroupLabel(data);
            }
        },
        {
            key: "startListeningComposition",
            value: // ==============================
            // Composition Handlers
            // ==============================
            function startListeningComposition() {
                if (document && document.addEventListener) {
                    document.addEventListener("compositionstart", this.onCompositionStart, false);
                    document.addEventListener("compositionend", this.onCompositionEnd, false);
                }
            }
        },
        {
            key: "stopListeningComposition",
            value: function stopListeningComposition() {
                if (document && document.removeEventListener) {
                    document.removeEventListener("compositionstart", this.onCompositionStart);
                    document.removeEventListener("compositionend", this.onCompositionEnd);
                }
            }
        },
        {
            key: "startListeningToTouch",
            value: // ==============================
            // Touch Handlers
            // ==============================
            function startListeningToTouch() {
                if (document && document.addEventListener) {
                    document.addEventListener("touchstart", this.onTouchStart, false);
                    document.addEventListener("touchmove", this.onTouchMove, false);
                    document.addEventListener("touchend", this.onTouchEnd, false);
                }
            }
        },
        {
            key: "stopListeningToTouch",
            value: function stopListeningToTouch() {
                if (document && document.removeEventListener) {
                    document.removeEventListener("touchstart", this.onTouchStart);
                    document.removeEventListener("touchmove", this.onTouchMove);
                    document.removeEventListener("touchend", this.onTouchEnd);
                }
            }
        },
        {
            key: "renderInput",
            value: // ==============================
            // Renderers
            // ==============================
            function renderInput() {
                var _this$props8 = this.props, isDisabled = _this$props8.isDisabled, isSearchable = _this$props8.isSearchable, inputId = _this$props8.inputId, inputValue = _this$props8.inputValue, tabIndex = _this$props8.tabIndex, form = _this$props8.form, menuIsOpen = _this$props8.menuIsOpen, required = _this$props8.required;
                var _this$getComponents = this.getComponents(), Input = _this$getComponents.Input;
                var _this$state4 = this.state, inputIsHidden = _this$state4.inputIsHidden, ariaSelection = _this$state4.ariaSelection;
                var commonProps = this.commonProps;
                var id = inputId || this.getElementId("input");
                // aria attributes makes the JSX "noisy", separated for clarity
                var ariaAttributes = (0, $d49SP.default)((0, $d49SP.default)((0, $d49SP.default)({
                    "aria-autocomplete": "list",
                    "aria-expanded": menuIsOpen,
                    "aria-haspopup": true,
                    "aria-errormessage": this.props["aria-errormessage"],
                    "aria-invalid": this.props["aria-invalid"],
                    "aria-label": this.props["aria-label"],
                    "aria-labelledby": this.props["aria-labelledby"],
                    "aria-required": required,
                    role: "combobox"
                }, menuIsOpen && {
                    "aria-controls": this.getElementId("listbox"),
                    "aria-owns": this.getElementId("listbox")
                }), !isSearchable && {
                    "aria-readonly": true
                }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && {
                    "aria-describedby": this.getElementId("live-region")
                } : {
                    "aria-describedby": this.getElementId("placeholder")
                });
                if (!isSearchable) // use a dummy input to maintain focus/blur functionality
                return /*#__PURE__*/ $acw62.createElement($789c9a1e73441536$var$DummyInput, (0, $8nd05.default)({
                    id: id,
                    innerRef: this.getInputRef,
                    onBlur: this.onInputBlur,
                    onChange: (0, $cQEWp.J),
                    onFocus: this.onInputFocus,
                    disabled: isDisabled,
                    tabIndex: tabIndex,
                    inputMode: "none",
                    form: form,
                    value: ""
                }, ariaAttributes));
                return /*#__PURE__*/ $acw62.createElement(Input, (0, $8nd05.default)({}, commonProps, {
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: "off",
                    id: id,
                    innerRef: this.getInputRef,
                    isDisabled: isDisabled,
                    isHidden: inputIsHidden,
                    onBlur: this.onInputBlur,
                    onChange: this.handleInputChange,
                    onFocus: this.onInputFocus,
                    spellCheck: "false",
                    tabIndex: tabIndex,
                    form: form,
                    type: "text",
                    value: inputValue
                }, ariaAttributes));
            }
        },
        {
            key: "renderPlaceholderOrValue",
            value: function renderPlaceholderOrValue() {
                var _this3 = this;
                var _this$getComponents2 = this.getComponents(), MultiValue = _this$getComponents2.MultiValue, MultiValueContainer = _this$getComponents2.MultiValueContainer, MultiValueLabel = _this$getComponents2.MultiValueLabel, MultiValueRemove = _this$getComponents2.MultiValueRemove, SingleValue = _this$getComponents2.SingleValue, Placeholder = _this$getComponents2.Placeholder;
                var commonProps = this.commonProps;
                var _this$props9 = this.props, controlShouldRenderValue = _this$props9.controlShouldRenderValue, isDisabled = _this$props9.isDisabled, isMulti = _this$props9.isMulti, inputValue = _this$props9.inputValue, placeholder = _this$props9.placeholder;
                var _this$state5 = this.state, selectValue = _this$state5.selectValue, focusedValue = _this$state5.focusedValue, isFocused = _this$state5.isFocused;
                if (!this.hasValue() || !controlShouldRenderValue) return inputValue ? null : /*#__PURE__*/ $acw62.createElement(Placeholder, (0, $8nd05.default)({}, commonProps, {
                    key: "placeholder",
                    isDisabled: isDisabled,
                    isFocused: isFocused,
                    innerProps: {
                        id: this.getElementId("placeholder")
                    }
                }), placeholder);
                if (isMulti) return selectValue.map(function(opt, index) {
                    var isOptionFocused = opt === focusedValue;
                    var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
                    return /*#__PURE__*/ $acw62.createElement(MultiValue, (0, $8nd05.default)({}, commonProps, {
                        components: {
                            Container: MultiValueContainer,
                            Label: MultiValueLabel,
                            Remove: MultiValueRemove
                        },
                        isFocused: isOptionFocused,
                        isDisabled: isDisabled,
                        key: key,
                        index: index,
                        removeProps: {
                            onClick: function onClick() {
                                return _this3.removeValue(opt);
                            },
                            onTouchEnd: function onTouchEnd() {
                                return _this3.removeValue(opt);
                            },
                            onMouseDown: function onMouseDown(e) {
                                e.preventDefault();
                            }
                        },
                        data: opt
                    }), _this3.formatOptionLabel(opt, "value"));
                });
                if (inputValue) return null;
                var singleValue = selectValue[0];
                return /*#__PURE__*/ $acw62.createElement(SingleValue, (0, $8nd05.default)({}, commonProps, {
                    data: singleValue,
                    isDisabled: isDisabled
                }), this.formatOptionLabel(singleValue, "value"));
            }
        },
        {
            key: "renderClearIndicator",
            value: function renderClearIndicator() {
                var _this$getComponents3 = this.getComponents(), ClearIndicator = _this$getComponents3.ClearIndicator;
                var commonProps = this.commonProps;
                var _this$props10 = this.props, isDisabled = _this$props10.isDisabled, isLoading = _this$props10.isLoading;
                var isFocused = this.state.isFocused;
                if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) return null;
                var innerProps = {
                    onMouseDown: this.onClearIndicatorMouseDown,
                    onTouchEnd: this.onClearIndicatorTouchEnd,
                    "aria-hidden": "true"
                };
                return /*#__PURE__*/ $acw62.createElement(ClearIndicator, (0, $8nd05.default)({}, commonProps, {
                    innerProps: innerProps,
                    isFocused: isFocused
                }));
            }
        },
        {
            key: "renderLoadingIndicator",
            value: function renderLoadingIndicator() {
                var _this$getComponents4 = this.getComponents(), LoadingIndicator = _this$getComponents4.LoadingIndicator;
                var commonProps = this.commonProps;
                var _this$props11 = this.props, isDisabled = _this$props11.isDisabled, isLoading = _this$props11.isLoading;
                var isFocused = this.state.isFocused;
                if (!LoadingIndicator || !isLoading) return null;
                var innerProps = {
                    "aria-hidden": "true"
                };
                return /*#__PURE__*/ $acw62.createElement(LoadingIndicator, (0, $8nd05.default)({}, commonProps, {
                    innerProps: innerProps,
                    isDisabled: isDisabled,
                    isFocused: isFocused
                }));
            }
        },
        {
            key: "renderIndicatorSeparator",
            value: function renderIndicatorSeparator() {
                var _this$getComponents5 = this.getComponents(), DropdownIndicator = _this$getComponents5.DropdownIndicator, IndicatorSeparator = _this$getComponents5.IndicatorSeparator;
                // separator doesn't make sense without the dropdown indicator
                if (!DropdownIndicator || !IndicatorSeparator) return null;
                var commonProps = this.commonProps;
                var isDisabled = this.props.isDisabled;
                var isFocused = this.state.isFocused;
                return /*#__PURE__*/ $acw62.createElement(IndicatorSeparator, (0, $8nd05.default)({}, commonProps, {
                    isDisabled: isDisabled,
                    isFocused: isFocused
                }));
            }
        },
        {
            key: "renderDropdownIndicator",
            value: function renderDropdownIndicator() {
                var _this$getComponents6 = this.getComponents(), DropdownIndicator = _this$getComponents6.DropdownIndicator;
                if (!DropdownIndicator) return null;
                var commonProps = this.commonProps;
                var isDisabled = this.props.isDisabled;
                var isFocused = this.state.isFocused;
                var innerProps = {
                    onMouseDown: this.onDropdownIndicatorMouseDown,
                    onTouchEnd: this.onDropdownIndicatorTouchEnd,
                    "aria-hidden": "true"
                };
                return /*#__PURE__*/ $acw62.createElement(DropdownIndicator, (0, $8nd05.default)({}, commonProps, {
                    innerProps: innerProps,
                    isDisabled: isDisabled,
                    isFocused: isFocused
                }));
            }
        },
        {
            key: "renderMenu",
            value: function renderMenu() {
                var _this4 = this;
                var _this$getComponents7 = this.getComponents(), Group = _this$getComponents7.Group, GroupHeading = _this$getComponents7.GroupHeading, Menu = _this$getComponents7.Menu, MenuList = _this$getComponents7.MenuList, MenuPortal = _this$getComponents7.MenuPortal, LoadingMessage = _this$getComponents7.LoadingMessage, NoOptionsMessage = _this$getComponents7.NoOptionsMessage, Option = _this$getComponents7.Option;
                var commonProps = this.commonProps;
                var focusedOption = this.state.focusedOption;
                var _this$props12 = this.props, captureMenuScroll = _this$props12.captureMenuScroll, inputValue = _this$props12.inputValue, isLoading = _this$props12.isLoading, loadingMessage = _this$props12.loadingMessage, minMenuHeight = _this$props12.minMenuHeight, maxMenuHeight = _this$props12.maxMenuHeight, menuIsOpen = _this$props12.menuIsOpen, menuPlacement = _this$props12.menuPlacement, menuPosition = _this$props12.menuPosition, menuPortalTarget = _this$props12.menuPortalTarget, menuShouldBlockScroll = _this$props12.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView, noOptionsMessage = _this$props12.noOptionsMessage, onMenuScrollToTop = _this$props12.onMenuScrollToTop, onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
                if (!menuIsOpen) return null;
                // TODO: Internal Option Type here
                var render = function render(props, id) {
                    var type = props.type, data = props.data, isDisabled = props.isDisabled, isSelected = props.isSelected, label = props.label, value = props.value;
                    var isFocused = focusedOption === data;
                    var onHover = isDisabled ? undefined : function() {
                        return _this4.onOptionHover(data);
                    };
                    var onSelect = isDisabled ? undefined : function() {
                        return _this4.selectOption(data);
                    };
                    var optionId = "".concat(_this4.getElementId("option"), "-").concat(id);
                    var innerProps = {
                        id: optionId,
                        onClick: onSelect,
                        onMouseMove: onHover,
                        onMouseOver: onHover,
                        tabIndex: -1
                    };
                    return /*#__PURE__*/ $acw62.createElement(Option, (0, $8nd05.default)({}, commonProps, {
                        innerProps: innerProps,
                        data: data,
                        isDisabled: isDisabled,
                        isSelected: isSelected,
                        key: optionId,
                        label: label,
                        type: type,
                        value: value,
                        isFocused: isFocused,
                        innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
                    }), _this4.formatOptionLabel(props.data, "menu"));
                };
                var menuUI;
                if (this.hasOptions()) menuUI = this.getCategorizedOptions().map(function(item) {
                    if (item.type === "group") {
                        var _data = item.data, options = item.options, groupIndex = item.index;
                        var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
                        var headingId = "".concat(groupId, "-heading");
                        return /*#__PURE__*/ $acw62.createElement(Group, (0, $8nd05.default)({}, commonProps, {
                            key: groupId,
                            data: _data,
                            options: options,
                            Heading: GroupHeading,
                            headingProps: {
                                id: headingId,
                                data: item.data
                            },
                            label: _this4.formatGroupLabel(item.data)
                        }), item.options.map(function(option) {
                            return render(option, "".concat(groupIndex, "-").concat(option.index));
                        }));
                    } else if (item.type === "option") return render(item, "".concat(item.index));
                });
                else if (isLoading) {
                    var message = loadingMessage({
                        inputValue: inputValue
                    });
                    if (message === null) return null;
                    menuUI = /*#__PURE__*/ $acw62.createElement(LoadingMessage, commonProps, message);
                } else {
                    var _message = noOptionsMessage({
                        inputValue: inputValue
                    });
                    if (_message === null) return null;
                    menuUI = /*#__PURE__*/ $acw62.createElement(NoOptionsMessage, commonProps, _message);
                }
                var menuPlacementProps = {
                    minMenuHeight: minMenuHeight,
                    maxMenuHeight: maxMenuHeight,
                    menuPlacement: menuPlacement,
                    menuPosition: menuPosition,
                    menuShouldScrollIntoView: menuShouldScrollIntoView
                };
                var menuElement = /*#__PURE__*/ $acw62.createElement((0, $cQEWp.M), (0, $8nd05.default)({}, commonProps, menuPlacementProps), function(_ref4) {
                    var ref = _ref4.ref, _ref4$placerProps = _ref4.placerProps, placement = _ref4$placerProps.placement, maxHeight = _ref4$placerProps.maxHeight;
                    return /*#__PURE__*/ $acw62.createElement(Menu, (0, $8nd05.default)({}, commonProps, menuPlacementProps, {
                        innerRef: ref,
                        innerProps: {
                            onMouseDown: _this4.onMenuMouseDown,
                            onMouseMove: _this4.onMenuMouseMove,
                            id: _this4.getElementId("listbox")
                        },
                        isLoading: isLoading,
                        placement: placement
                    }), /*#__PURE__*/ $acw62.createElement($789c9a1e73441536$var$ScrollManager, {
                        captureEnabled: captureMenuScroll,
                        onTopArrive: onMenuScrollToTop,
                        onBottomArrive: onMenuScrollToBottom,
                        lockEnabled: menuShouldBlockScroll
                    }, function(scrollTargetRef) {
                        return /*#__PURE__*/ $acw62.createElement(MenuList, (0, $8nd05.default)({}, commonProps, {
                            innerRef: function innerRef(instance) {
                                _this4.getMenuListRef(instance);
                                scrollTargetRef(instance);
                            },
                            isLoading: isLoading,
                            maxHeight: maxHeight,
                            focusedOption: focusedOption
                        }), menuUI);
                    }));
                });
                // positioning behaviour is almost identical for portalled and fixed,
                // so we use the same component. the actual portalling logic is forked
                // within the component based on `menuPosition`
                return menuPortalTarget || menuPosition === "fixed" ? /*#__PURE__*/ $acw62.createElement(MenuPortal, (0, $8nd05.default)({}, commonProps, {
                    appendTo: menuPortalTarget,
                    controlElement: this.controlRef,
                    menuPlacement: menuPlacement,
                    menuPosition: menuPosition
                }), menuElement) : menuElement;
            }
        },
        {
            key: "renderFormField",
            value: function renderFormField() {
                var _this5 = this;
                var _this$props13 = this.props, delimiter = _this$props13.delimiter, isDisabled = _this$props13.isDisabled, isMulti = _this$props13.isMulti, name = _this$props13.name, required = _this$props13.required;
                var selectValue = this.state.selectValue;
                if (required && !this.hasValue() && !isDisabled) return /*#__PURE__*/ $acw62.createElement($789c9a1e73441536$var$RequiredInput$1, {
                    name: name,
                    onFocus: this.onValueInputFocus
                });
                if (!name || isDisabled) return;
                if (isMulti) {
                    if (delimiter) {
                        var value = selectValue.map(function(opt) {
                            return _this5.getOptionValue(opt);
                        }).join(delimiter);
                        return /*#__PURE__*/ $acw62.createElement("input", {
                            name: name,
                            type: "hidden",
                            value: value
                        });
                    } else {
                        var input = selectValue.length > 0 ? selectValue.map(function(opt, i) {
                            return /*#__PURE__*/ $acw62.createElement("input", {
                                key: "i-".concat(i),
                                name: name,
                                type: "hidden",
                                value: _this5.getOptionValue(opt)
                            });
                        }) : /*#__PURE__*/ $acw62.createElement("input", {
                            name: name,
                            type: "hidden",
                            value: ""
                        });
                        return /*#__PURE__*/ $acw62.createElement("div", null, input);
                    }
                } else {
                    var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
                    return /*#__PURE__*/ $acw62.createElement("input", {
                        name: name,
                        type: "hidden",
                        value: _value
                    });
                }
            }
        },
        {
            key: "renderLiveRegion",
            value: function renderLiveRegion() {
                var commonProps = this.commonProps;
                var _this$state6 = this.state, ariaSelection = _this$state6.ariaSelection, focusedOption = _this$state6.focusedOption, focusedValue = _this$state6.focusedValue, isFocused = _this$state6.isFocused, selectValue = _this$state6.selectValue;
                var focusableOptions = this.getFocusableOptions();
                return /*#__PURE__*/ $acw62.createElement($789c9a1e73441536$var$LiveRegion$1, (0, $8nd05.default)({}, commonProps, {
                    id: this.getElementId("live-region"),
                    ariaSelection: ariaSelection,
                    focusedOption: focusedOption,
                    focusedValue: focusedValue,
                    isFocused: isFocused,
                    selectValue: selectValue,
                    focusableOptions: focusableOptions
                }));
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$getComponents8 = this.getComponents(), Control = _this$getComponents8.Control, IndicatorsContainer = _this$getComponents8.IndicatorsContainer, SelectContainer = _this$getComponents8.SelectContainer, ValueContainer = _this$getComponents8.ValueContainer;
                var _this$props14 = this.props, className = _this$props14.className, id = _this$props14.id, isDisabled = _this$props14.isDisabled, menuIsOpen = _this$props14.menuIsOpen;
                var isFocused = this.state.isFocused;
                var commonProps = this.commonProps = this.getCommonProps();
                return /*#__PURE__*/ $acw62.createElement(SelectContainer, (0, $8nd05.default)({}, commonProps, {
                    className: className,
                    innerProps: {
                        id: id,
                        onKeyDown: this.onKeyDown
                    },
                    isDisabled: isDisabled,
                    isFocused: isFocused
                }), this.renderLiveRegion(), /*#__PURE__*/ $acw62.createElement(Control, (0, $8nd05.default)({}, commonProps, {
                    innerRef: this.getControlRef,
                    innerProps: {
                        onMouseDown: this.onControlMouseDown,
                        onTouchEnd: this.onControlTouchEnd
                    },
                    isDisabled: isDisabled,
                    isFocused: isFocused,
                    menuIsOpen: menuIsOpen
                }), /*#__PURE__*/ $acw62.createElement(ValueContainer, (0, $8nd05.default)({}, commonProps, {
                    isDisabled: isDisabled
                }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/ $acw62.createElement(IndicatorsContainer, (0, $8nd05.default)({}, commonProps, {
                    isDisabled: isDisabled
                }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, state) {
                var prevProps = state.prevProps, clearFocusValueOnUpdate = state.clearFocusValueOnUpdate, inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate, ariaSelection = state.ariaSelection, isFocused = state.isFocused, prevWasFocused = state.prevWasFocused;
                var options = props.options, value = props.value, menuIsOpen = props.menuIsOpen, inputValue = props.inputValue, isMulti = props.isMulti;
                var selectValue = (0, $cQEWp.H)(value);
                var newMenuOptionsState = {};
                if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
                    var focusableOptions = menuIsOpen ? $789c9a1e73441536$var$buildFocusableOptions(props, selectValue) : [];
                    var focusedValue = clearFocusValueOnUpdate ? $789c9a1e73441536$var$getNextFocusedValue(state, selectValue) : null;
                    var focusedOption = $789c9a1e73441536$var$getNextFocusedOption(state, focusableOptions);
                    newMenuOptionsState = {
                        selectValue: selectValue,
                        focusedOption: focusedOption,
                        focusedValue: focusedValue,
                        clearFocusValueOnUpdate: false
                    };
                }
                // some updates should toggle the state of the input visibility
                var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
                    inputIsHidden: inputIsHiddenAfterUpdate,
                    inputIsHiddenAfterUpdate: undefined
                } : {};
                var newAriaSelection = ariaSelection;
                var hasKeptFocus = isFocused && prevWasFocused;
                if (isFocused && !hasKeptFocus) {
                    // If `value` or `defaultValue` props are not empty then announce them
                    // when the Select is initially focused
                    newAriaSelection = {
                        value: (0, $cQEWp.D)(isMulti, selectValue, selectValue[0] || null),
                        options: selectValue,
                        action: "initial-input-focus"
                    };
                    hasKeptFocus = !prevWasFocused;
                }
                // If the 'initial-input-focus' action has been set already
                // then reset the ariaSelection to null
                if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") newAriaSelection = null;
                return (0, $d49SP.default)((0, $d49SP.default)((0, $d49SP.default)({}, newMenuOptionsState), newInputIsHiddenState), {}, {
                    prevProps: props,
                    ariaSelection: newAriaSelection,
                    prevWasFocused: hasKeptFocus
                });
            }
        }
    ]);
    return Select;
}((0, $acw62.Component));
$789c9a1e73441536$export$25ce5a424b770e84.defaultProps = $789c9a1e73441536$export$407448d2b89b1813;

});
parcelRequire.register("d49SP", function(module, exports) {

$parcel$export(module.exports, "default", () => $983350b7b3960a26$export$2e2bcd8739ae039);

var $kSlfw = parcelRequire("kSlfw");
function $983350b7b3960a26$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $983350b7b3960a26$export$2e2bcd8739ae039(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $983350b7b3960a26$var$ownKeys(Object(source), !0).forEach(function(key) {
            (0, $kSlfw.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $983350b7b3960a26$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

});

parcelRequire.register("6CZeq", function(module, exports) {

$parcel$export(module.exports, "default", () => $4d35ca0862055760$export$2e2bcd8739ae039);
function $4d35ca0862055760$export$2e2bcd8739ae039(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

});

parcelRequire.register("cHPF9", function(module, exports) {

$parcel$export(module.exports, "default", () => $94019358ecbcf36b$export$2e2bcd8739ae039);

var $4ZreY = parcelRequire("4ZreY");
function $94019358ecbcf36b$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, (0, $4ZreY.default)(descriptor.key), descriptor);
    }
}
function $94019358ecbcf36b$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
    if (protoProps) $94019358ecbcf36b$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $94019358ecbcf36b$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}

});

parcelRequire.register("1gYAD", function(module, exports) {

$parcel$export(module.exports, "default", () => $0ed648f7bbaf3aff$export$2e2bcd8739ae039);

var $VFVve = parcelRequire("VFVve");
function $0ed648f7bbaf3aff$export$2e2bcd8739ae039(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) (0, $VFVve.default)(subClass, superClass);
}

});

parcelRequire.register("enfmq", function(module, exports) {

$parcel$export(module.exports, "default", () => $a76f20fb39fa9d46$export$2e2bcd8739ae039);

var $jDKKo = parcelRequire("jDKKo");

var $fhGLX = parcelRequire("fhGLX");

var $9715X = parcelRequire("9715X");
function $a76f20fb39fa9d46$export$2e2bcd8739ae039(Derived) {
    var hasNativeReflectConstruct = (0, $fhGLX.default)();
    return function _createSuperInternal() {
        var Super = (0, $jDKKo.default)(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, $jDKKo.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, $9715X.default)(this, result);
    };
}

});
parcelRequire.register("jDKKo", function(module, exports) {

$parcel$export(module.exports, "default", () => $e4c5ebe502337db0$export$2e2bcd8739ae039);
function $e4c5ebe502337db0$export$2e2bcd8739ae039(o) {
    $e4c5ebe502337db0$export$2e2bcd8739ae039 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $e4c5ebe502337db0$export$2e2bcd8739ae039(o);
}

});

parcelRequire.register("fhGLX", function(module, exports) {

$parcel$export(module.exports, "default", () => $b2099f49db83e2df$export$2e2bcd8739ae039);
function $b2099f49db83e2df$export$2e2bcd8739ae039() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}

});

parcelRequire.register("9715X", function(module, exports) {

$parcel$export(module.exports, "default", () => $6a259df8fa92dc4a$export$2e2bcd8739ae039);

var $fSwVM = parcelRequire("fSwVM");

var $hDpcU = parcelRequire("hDpcU");
function $6a259df8fa92dc4a$export$2e2bcd8739ae039(self, call) {
    if (call && ((0, $fSwVM.default)(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return (0, $hDpcU.default)(self);
}

});
parcelRequire.register("hDpcU", function(module, exports) {

$parcel$export(module.exports, "default", () => $cd69a1d4c6210e44$export$2e2bcd8739ae039);
function $cd69a1d4c6210e44$export$2e2bcd8739ae039(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}

});



parcelRequire.register("kbxxf", function(module, exports) {

$parcel$export(module.exports, "default", () => $eb1ed927433e7e98$export$2e2bcd8739ae039);

var $cN7Ua = parcelRequire("cN7Ua");

var $dOjF6 = parcelRequire("dOjF6");

var $abLc2 = parcelRequire("abLc2");

var $fB5Ly = parcelRequire("fB5Ly");
function $eb1ed927433e7e98$export$2e2bcd8739ae039(arr) {
    return (0, $cN7Ua.default)(arr) || (0, $dOjF6.default)(arr) || (0, $abLc2.default)(arr) || (0, $fB5Ly.default)();
}

});
parcelRequire.register("cN7Ua", function(module, exports) {

$parcel$export(module.exports, "default", () => $95003165623aa54c$export$2e2bcd8739ae039);

var $7K8zV = parcelRequire("7K8zV");
function $95003165623aa54c$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return (0, $7K8zV.default)(arr);
}

});
parcelRequire.register("7K8zV", function(module, exports) {

$parcel$export(module.exports, "default", () => $5a337bca9556bfe7$export$2e2bcd8739ae039);
function $5a337bca9556bfe7$export$2e2bcd8739ae039(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}

});


parcelRequire.register("dOjF6", function(module, exports) {

$parcel$export(module.exports, "default", () => $a0df324e6f81ee90$export$2e2bcd8739ae039);
function $a0df324e6f81ee90$export$2e2bcd8739ae039(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

});

parcelRequire.register("abLc2", function(module, exports) {

$parcel$export(module.exports, "default", () => $76af8a05551d5f25$export$2e2bcd8739ae039);

var $7K8zV = parcelRequire("7K8zV");
function $76af8a05551d5f25$export$2e2bcd8739ae039(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, $7K8zV.default)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, $7K8zV.default)(o, minLen);
}

});

parcelRequire.register("fB5Ly", function(module, exports) {

$parcel$export(module.exports, "default", () => $b5aec8b8da7ac2f2$export$2e2bcd8739ae039);
function $b5aec8b8da7ac2f2$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

});


parcelRequire.register("cQEWp", function(module, exports) {

$parcel$export(module.exports, "J", () => $95aa1968e67d2b10$export$b4171a6734a65d42);
$parcel$export(module.exports, "E", () => $95aa1968e67d2b10$export$a9c23c6ac3fc3eca);
$parcel$export(module.exports, "H", () => $95aa1968e67d2b10$export$7f8ddf7c7c20b3cd);
$parcel$export(module.exports, "L", () => $95aa1968e67d2b10$export$61196ced6d74a310);
$parcel$export(module.exports, "G", () => $95aa1968e67d2b10$export$2329c99376c9d0a4);
$parcel$export(module.exports, "I", () => $95aa1968e67d2b10$export$9bb611d729802a56);
$parcel$export(module.exports, "z", () => $95aa1968e67d2b10$export$df995fae86a55f06);
$parcel$export(module.exports, "A", () => $95aa1968e67d2b10$export$ebd11618f299a286);
$parcel$export(module.exports, "s", () => $95aa1968e67d2b10$export$2408f22a0fab9ae5);
$parcel$export(module.exports, "K", () => $95aa1968e67d2b10$export$3466f893ebf79586);
$parcel$export(module.exports, "D", () => $95aa1968e67d2b10$export$96f57966bedc81b4);
$parcel$export(module.exports, "C", () => $95aa1968e67d2b10$export$e7094788287c5e9b);
$parcel$export(module.exports, "B", () => $95aa1968e67d2b10$export$ef35774e6d314e91);
$parcel$export(module.exports, "r", () => $95aa1968e67d2b10$export$43caf9889c228507);
$parcel$export(module.exports, "m", () => $95aa1968e67d2b10$export$953cecd6e717a553);
$parcel$export(module.exports, "M", () => $95aa1968e67d2b10$export$3a1a48c8f6ef640e);
$parcel$export(module.exports, "n", () => $95aa1968e67d2b10$export$7ccc53e8f1e7dfc5);
$parcel$export(module.exports, "u", () => $95aa1968e67d2b10$export$3b14a55fb2447963);
$parcel$export(module.exports, "k", () => $95aa1968e67d2b10$export$342063e11d6c3cad);
$parcel$export(module.exports, "o", () => $95aa1968e67d2b10$export$ae1af26003f05816);
$parcel$export(module.exports, "b", () => $95aa1968e67d2b10$export$8b22cf2602fb60ce);
$parcel$export(module.exports, "y", () => $95aa1968e67d2b10$export$4a5767248b18ef41);
$parcel$export(module.exports, "i", () => $95aa1968e67d2b10$export$23f2a1d2818174ef);
$parcel$export(module.exports, "e", () => $95aa1968e67d2b10$export$f1e1789686576879);
$parcel$export(module.exports, "a", () => $95aa1968e67d2b10$export$407448d2b89b1813);
$parcel$export(module.exports, "h", () => $95aa1968e67d2b10$export$dda1d9f60106f0e9);
$parcel$export(module.exports, "l", () => $95aa1968e67d2b10$export$882b5998b3b9117c);
$parcel$export(module.exports, "d", () => $95aa1968e67d2b10$export$4368d992c4eafac0);
$parcel$export(module.exports, "g", () => $95aa1968e67d2b10$export$39b482c5e57630a8);
$parcel$export(module.exports, "f", () => $95aa1968e67d2b10$export$2d1720544b23b823);
$parcel$export(module.exports, "j", () => $95aa1968e67d2b10$export$35e795649ee09318);
$parcel$export(module.exports, "p", () => $95aa1968e67d2b10$export$ffb5f4729a158638);
$parcel$export(module.exports, "q", () => $95aa1968e67d2b10$export$9e5f44173e64f162);
$parcel$export(module.exports, "t", () => $95aa1968e67d2b10$export$625550452a3fa3ec);
$parcel$export(module.exports, "v", () => $95aa1968e67d2b10$export$90a7f3efeed30595);
$parcel$export(module.exports, "w", () => $95aa1968e67d2b10$export$efccba1c4a2ef57b);
$parcel$export(module.exports, "x", () => $95aa1968e67d2b10$export$d141bba7fdc215a3);
$parcel$export(module.exports, "c", () => $95aa1968e67d2b10$export$db3b6bfb95261072);
$parcel$export(module.exports, "F", () => $95aa1968e67d2b10$export$d66501df72047452);

var $d49SP = parcelRequire("d49SP");

var $8nd05 = parcelRequire("8nd05");

var $8zogs = parcelRequire("8zogs");

var $eUqlC = parcelRequire("eUqlC");

var $9X7IJ = parcelRequire("9X7IJ");

var $fSwVM = parcelRequire("fSwVM");

var $hvnYt = parcelRequire("hvnYt");

var $kSlfw = parcelRequire("kSlfw");

var $acw62 = parcelRequire("acw62");

var $1u0KT = parcelRequire("1u0KT");

var $618j3 = parcelRequire("618j3");

var $jLbqB = parcelRequire("jLbqB");
var $95aa1968e67d2b10$var$_excluded$4 = [
    "className",
    "clearValue",
    "cx",
    "getStyles",
    "getClassNames",
    "getValue",
    "hasValue",
    "isMulti",
    "isRtl",
    "options",
    "selectOption",
    "selectProps",
    "setValue",
    "theme"
];
// ==============================
// NO OP
// ==============================
var $95aa1968e67d2b10$export$b4171a6734a65d42 = function noop() {};
// ==============================
// Class Name Prefixer
// ==============================
/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/ function $95aa1968e67d2b10$var$applyPrefixToName(prefix, name) {
    if (!name) return prefix;
    else if (name[0] === "-") return prefix + name;
    else return prefix + "__" + name;
}
function $95aa1968e67d2b10$export$a9c23c6ac3fc3eca(prefix, state) {
    for(var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)classNameList[_key - 2] = arguments[_key];
    var arr = [].concat(classNameList);
    if (state && prefix) {
        for(var key in state)if (state.hasOwnProperty(key) && state[key]) arr.push("".concat($95aa1968e67d2b10$var$applyPrefixToName(prefix, key)));
    }
    return arr.filter(function(i) {
        return i;
    }).map(function(i) {
        return String(i).trim();
    }).join(" ");
}
// ==============================
// Clean Value
// ==============================
var $95aa1968e67d2b10$export$7f8ddf7c7c20b3cd = function cleanValue(value) {
    if ($95aa1968e67d2b10$var$isArray(value)) return value.filter(Boolean);
    if ((0, $fSwVM.default)(value) === "object" && value !== null) return [
        value
    ];
    return [];
};
// ==============================
// Clean Common Props
// ==============================
var $95aa1968e67d2b10$var$cleanCommonProps = function cleanCommonProps(props) {
    //className
    props.className;
    props.clearValue;
    props.cx;
    props.getStyles;
    props.getClassNames;
    props.getValue;
    props.hasValue;
    props.isMulti;
    props.isRtl;
    props.options;
    props.selectOption;
    props.selectProps;
    props.setValue;
    props.theme;
    var innerProps = (0, $9X7IJ.default)(props, $95aa1968e67d2b10$var$_excluded$4);
    return (0, $d49SP.default)({}, innerProps);
};
// ==============================
// Get Style Props
// ==============================
var $95aa1968e67d2b10$var$getStyleProps = function getStyleProps(props, name, classNamesState) {
    var cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, className = props.className;
    return {
        css: getStyles(name, props),
        className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
    };
};
// ==============================
// Handle Input Change
// ==============================
function $95aa1968e67d2b10$export$61196ced6d74a310(inputValue, actionMeta, onInputChange) {
    if (onInputChange) {
        var _newValue = onInputChange(inputValue, actionMeta);
        if (typeof _newValue === "string") return _newValue;
    }
    return inputValue;
}
// ==============================
// Scroll Helpers
// ==============================
function $95aa1968e67d2b10$export$2329c99376c9d0a4(el) {
    return [
        document.documentElement,
        document.body,
        window
    ].indexOf(el) > -1;
}
// Normalized Scroll Top
// ------------------------------
function $95aa1968e67d2b10$var$normalizedHeight(el) {
    if ($95aa1968e67d2b10$export$2329c99376c9d0a4(el)) return window.innerHeight;
    return el.clientHeight;
}
// Normalized scrollTo & scrollTop
// ------------------------------
function $95aa1968e67d2b10$var$getScrollTop(el) {
    if ($95aa1968e67d2b10$export$2329c99376c9d0a4(el)) return window.pageYOffset;
    return el.scrollTop;
}
function $95aa1968e67d2b10$var$scrollTo(el, top) {
    // with a scroll distance, we perform scroll on the element
    if ($95aa1968e67d2b10$export$2329c99376c9d0a4(el)) {
        window.scrollTo(0, top);
        return;
    }
    el.scrollTop = top;
}
// Get Scroll Parent
// ------------------------------
function $95aa1968e67d2b10$var$getScrollParent(element) {
    var style = getComputedStyle(element);
    var excludeStaticParent = style.position === "absolute";
    var overflowRx = /(auto|scroll)/;
    if (style.position === "fixed") return document.documentElement;
    for(var parent = element; parent = parent.parentElement;){
        style = getComputedStyle(parent);
        if (excludeStaticParent && style.position === "static") continue;
        if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) return parent;
    }
    return document.documentElement;
}
// Animated Scroll To
// ------------------------------
/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/ function $95aa1968e67d2b10$var$easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}
function $95aa1968e67d2b10$var$animatedScrollTo(element, to) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : $95aa1968e67d2b10$export$b4171a6734a65d42;
    var start = $95aa1968e67d2b10$var$getScrollTop(element);
    var change = to - start;
    var increment = 10;
    var currentTime = 0;
    function animateScroll() {
        currentTime += increment;
        var val = $95aa1968e67d2b10$var$easeOutCubic(currentTime, start, change, duration);
        $95aa1968e67d2b10$var$scrollTo(element, val);
        if (currentTime < duration) window.requestAnimationFrame(animateScroll);
        else callback(element);
    }
    animateScroll();
}
// Scroll Into View
// ------------------------------
function $95aa1968e67d2b10$export$9bb611d729802a56(menuEl, focusedEl) {
    var menuRect = menuEl.getBoundingClientRect();
    var focusedRect = focusedEl.getBoundingClientRect();
    var overScroll = focusedEl.offsetHeight / 3;
    if (focusedRect.bottom + overScroll > menuRect.bottom) $95aa1968e67d2b10$var$scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
    else if (focusedRect.top - overScroll < menuRect.top) $95aa1968e67d2b10$var$scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
}
// ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect
function $95aa1968e67d2b10$var$getBoundingClientObj(element) {
    var rect = element.getBoundingClientRect();
    return {
        bottom: rect.bottom,
        height: rect.height,
        left: rect.left,
        right: rect.right,
        top: rect.top,
        width: rect.width
    };
}
// ==============================
// Touch Capability Detector
// ==============================
function $95aa1968e67d2b10$export$df995fae86a55f06() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}
// ==============================
// Mobile Device Detector
// ==============================
function $95aa1968e67d2b10$export$ebd11618f299a286() {
    try {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    } catch (e) {
        return false;
    }
}
// ==============================
// Passive Event Detector
// ==============================
// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
var $95aa1968e67d2b10$var$passiveOptionAccessed = false;
var $95aa1968e67d2b10$var$options = {
    get passive () {
        return $95aa1968e67d2b10$var$passiveOptionAccessed = true;
    }
};
// check for SSR
var $95aa1968e67d2b10$var$w = typeof window !== "undefined" ? window : {};
if ($95aa1968e67d2b10$var$w.addEventListener && $95aa1968e67d2b10$var$w.removeEventListener) {
    $95aa1968e67d2b10$var$w.addEventListener("p", $95aa1968e67d2b10$export$b4171a6734a65d42, $95aa1968e67d2b10$var$options);
    $95aa1968e67d2b10$var$w.removeEventListener("p", $95aa1968e67d2b10$export$b4171a6734a65d42, false);
}
var $95aa1968e67d2b10$export$2408f22a0fab9ae5 = $95aa1968e67d2b10$var$passiveOptionAccessed;
function $95aa1968e67d2b10$export$3466f893ebf79586(item) {
    return item != null;
}
function $95aa1968e67d2b10$var$isArray(arg) {
    return Array.isArray(arg);
}
function $95aa1968e67d2b10$export$96f57966bedc81b4(isMulti, multiValue, singleValue) {
    return isMulti ? multiValue : singleValue;
}
function $95aa1968e67d2b10$export$e7094788287c5e9b(singleValue) {
    return singleValue;
}
function $95aa1968e67d2b10$export$ef35774e6d314e91(multiValue) {
    return multiValue;
}
var $95aa1968e67d2b10$export$43caf9889c228507 = function removeProps(propsObj) {
    for(var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)properties[_key2 - 1] = arguments[_key2];
    var propsMap = Object.entries(propsObj).filter(function(_ref) {
        var _ref2 = (0, $eUqlC.default)(_ref, 1), key = _ref2[0];
        return !properties.includes(key);
    });
    return propsMap.reduce(function(newProps, _ref3) {
        var _ref4 = (0, $eUqlC.default)(_ref3, 2), key = _ref4[0], val = _ref4[1];
        newProps[key] = val;
        return newProps;
    }, {});
};
var $95aa1968e67d2b10$var$_excluded$3 = [
    "children",
    "innerProps"
], $95aa1968e67d2b10$var$_excluded2$1 = [
    "children",
    "innerProps"
];
function $95aa1968e67d2b10$var$getMenuPlacement(_ref) {
    var preferredMaxHeight = _ref.maxHeight, menuEl = _ref.menuEl, minHeight = _ref.minHeight, preferredPlacement = _ref.placement, shouldScroll = _ref.shouldScroll, isFixedPosition = _ref.isFixedPosition, controlHeight = _ref.controlHeight;
    var scrollParent = $95aa1968e67d2b10$var$getScrollParent(menuEl);
    var defaultState = {
        placement: "bottom",
        maxHeight: preferredMaxHeight
    };
    // something went wrong, return default state
    if (!menuEl || !menuEl.offsetParent) return defaultState;
    // we can't trust `scrollParent.scrollHeight` --> it may increase when
    // the menu is rendered
    var _scrollParent$getBoun = scrollParent.getBoundingClientRect(), scrollHeight = _scrollParent$getBoun.height;
    var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
    var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(), containerTop = _menuEl$offsetParent$.top;
    var viewHeight = isFixedPosition ? window.innerHeight : $95aa1968e67d2b10$var$normalizedHeight(scrollParent);
    var scrollTop = $95aa1968e67d2b10$var$getScrollTop(scrollParent);
    var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
    var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
    var viewSpaceAbove = containerTop - marginTop;
    var viewSpaceBelow = viewHeight - menuTop;
    var scrollSpaceAbove = viewSpaceAbove + scrollTop;
    var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
    var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
    var scrollUp = scrollTop + menuTop - marginTop;
    var scrollDuration = 160;
    switch(preferredPlacement){
        case "auto":
        case "bottom":
            // 1: the menu will fit, do nothing
            if (viewSpaceBelow >= menuHeight) return {
                placement: "bottom",
                maxHeight: preferredMaxHeight
            };
            // 2: the menu will fit, if scrolled
            if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
                if (shouldScroll) $95aa1968e67d2b10$var$animatedScrollTo(scrollParent, scrollDown, scrollDuration);
                return {
                    placement: "bottom",
                    maxHeight: preferredMaxHeight
                };
            }
            // 3: the menu will fit, if constrained
            if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
                if (shouldScroll) $95aa1968e67d2b10$var$animatedScrollTo(scrollParent, scrollDown, scrollDuration);
                // we want to provide as much of the menu as possible to the user,
                // so give them whatever is available below rather than the minHeight.
                var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
                return {
                    placement: "bottom",
                    maxHeight: constrainedHeight
                };
            }
            // 4. Forked beviour when there isn't enough space below
            // AUTO: flip the menu, render above
            if (preferredPlacement === "auto" || isFixedPosition) {
                // may need to be constrained after flipping
                var _constrainedHeight = preferredMaxHeight;
                var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
                if (spaceAbove >= minHeight) _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
                return {
                    placement: "top",
                    maxHeight: _constrainedHeight
                };
            }
            // BOTTOM: allow browser to increase scrollable area and immediately set scroll
            if (preferredPlacement === "bottom") {
                if (shouldScroll) $95aa1968e67d2b10$var$scrollTo(scrollParent, scrollDown);
                return {
                    placement: "bottom",
                    maxHeight: preferredMaxHeight
                };
            }
            break;
        case "top":
            // 1: the menu will fit, do nothing
            if (viewSpaceAbove >= menuHeight) return {
                placement: "top",
                maxHeight: preferredMaxHeight
            };
            // 2: the menu will fit, if scrolled
            if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
                if (shouldScroll) $95aa1968e67d2b10$var$animatedScrollTo(scrollParent, scrollUp, scrollDuration);
                return {
                    placement: "top",
                    maxHeight: preferredMaxHeight
                };
            }
            // 3: the menu will fit, if constrained
            if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
                var _constrainedHeight2 = preferredMaxHeight;
                // we want to provide as much of the menu as possible to the user,
                // so give them whatever is available below rather than the minHeight.
                if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
                if (shouldScroll) $95aa1968e67d2b10$var$animatedScrollTo(scrollParent, scrollUp, scrollDuration);
                return {
                    placement: "top",
                    maxHeight: _constrainedHeight2
                };
            }
            // 4. not enough space, the browser WILL NOT increase scrollable area when
            // absolutely positioned element rendered above the viewport (only below).
            // Flip the menu, render below
            return {
                placement: "bottom",
                maxHeight: preferredMaxHeight
            };
        default:
            throw new Error('Invalid placement provided "'.concat(preferredPlacement, '".'));
    }
    return defaultState;
}
// Menu Component
// ------------------------------
function $95aa1968e67d2b10$var$alignToControl(placement) {
    var placementToCSSProp = {
        bottom: "top",
        top: "bottom"
    };
    return placement ? placementToCSSProp[placement] : "bottom";
}
var $95aa1968e67d2b10$var$coercePlacement = function coercePlacement(p) {
    return p === "auto" ? "bottom" : p;
};
var $95aa1968e67d2b10$export$953cecd6e717a553 = function menuCSS(_ref2, unstyled) {
    var _objectSpread2;
    var placement = _ref2.placement, _ref2$theme = _ref2.theme, borderRadius = _ref2$theme.borderRadius, spacing = _ref2$theme.spacing, colors = _ref2$theme.colors;
    return (0, $d49SP.default)((_objectSpread2 = {
        label: "menu"
    }, (0, $kSlfw.default)(_objectSpread2, $95aa1968e67d2b10$var$alignToControl(placement), "100%"), (0, $kSlfw.default)(_objectSpread2, "position", "absolute"), (0, $kSlfw.default)(_objectSpread2, "width", "100%"), (0, $kSlfw.default)(_objectSpread2, "zIndex", 1), _objectSpread2), unstyled ? {} : {
        backgroundColor: colors.neutral0,
        borderRadius: borderRadius,
        boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
        marginBottom: spacing.menuGutter,
        marginTop: spacing.menuGutter
    });
};
var $95aa1968e67d2b10$var$PortalPlacementContext = /*#__PURE__*/ (0, $acw62.createContext)(null);
// NOTE: internal only
var $95aa1968e67d2b10$export$3a1a48c8f6ef640e = function MenuPlacer(props) {
    var children = props.children, minMenuHeight = props.minMenuHeight, maxMenuHeight = props.maxMenuHeight, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition, menuShouldScrollIntoView = props.menuShouldScrollIntoView, theme = props.theme;
    var _ref3 = (0, $acw62.useContext)($95aa1968e67d2b10$var$PortalPlacementContext) || {}, setPortalPlacement = _ref3.setPortalPlacement;
    var ref = (0, $acw62.useRef)(null);
    var _useState = (0, $acw62.useState)(maxMenuHeight), _useState2 = (0, $eUqlC.default)(_useState, 2), maxHeight = _useState2[0], setMaxHeight = _useState2[1];
    var _useState3 = (0, $acw62.useState)(null), _useState4 = (0, $eUqlC.default)(_useState3, 2), placement = _useState4[0], setPlacement = _useState4[1];
    var controlHeight = theme.spacing.controlHeight;
    (0, $jLbqB.default)(function() {
        var menuEl = ref.current;
        if (!menuEl) return;
        // DO NOT scroll if position is fixed
        var isFixedPosition = menuPosition === "fixed";
        var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
        var state = $95aa1968e67d2b10$var$getMenuPlacement({
            maxHeight: maxMenuHeight,
            menuEl: menuEl,
            minHeight: minMenuHeight,
            placement: menuPlacement,
            shouldScroll: shouldScroll,
            isFixedPosition: isFixedPosition,
            controlHeight: controlHeight
        });
        setMaxHeight(state.maxHeight);
        setPlacement(state.placement);
        setPortalPlacement === null || setPortalPlacement === void 0 || setPortalPlacement(state.placement);
    }, [
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView,
        minMenuHeight,
        setPortalPlacement,
        controlHeight
    ]);
    return children({
        ref: ref,
        placerProps: (0, $d49SP.default)((0, $d49SP.default)({}, props), {}, {
            placement: placement || $95aa1968e67d2b10$var$coercePlacement(menuPlacement),
            maxHeight: maxHeight
        })
    });
};
var $95aa1968e67d2b10$var$Menu = function Menu(props) {
    var children = props.children, innerRef = props.innerRef, innerProps = props.innerProps;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "menu", {
        menu: true
    }), {
        ref: innerRef
    }, innerProps), children);
};
var $95aa1968e67d2b10$var$Menu$1 = $95aa1968e67d2b10$var$Menu;
// ==============================
// Menu List
// ==============================
var $95aa1968e67d2b10$export$7ccc53e8f1e7dfc5 = function menuListCSS(_ref4, unstyled) {
    var maxHeight = _ref4.maxHeight, baseUnit = _ref4.theme.spacing.baseUnit;
    return (0, $d49SP.default)({
        maxHeight: maxHeight,
        overflowY: "auto",
        position: "relative",
        // required for offset[Height, Top] > keyboard scroll
        WebkitOverflowScrolling: "touch"
    }, unstyled ? {} : {
        paddingBottom: baseUnit,
        paddingTop: baseUnit
    });
};
var $95aa1968e67d2b10$var$MenuList = function MenuList(props) {
    var children = props.children, innerProps = props.innerProps, innerRef = props.innerRef, isMulti = props.isMulti;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "menuList", {
        "menu-list": true,
        "menu-list--is-multi": isMulti
    }), {
        ref: innerRef
    }, innerProps), children);
};
// ==============================
// Menu Notices
// ==============================
var $95aa1968e67d2b10$var$noticeCSS = function noticeCSS(_ref5, unstyled) {
    var _ref5$theme = _ref5.theme, baseUnit = _ref5$theme.spacing.baseUnit, colors = _ref5$theme.colors;
    return (0, $d49SP.default)({
        textAlign: "center"
    }, unstyled ? {} : {
        color: colors.neutral40,
        padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
    });
};
var $95aa1968e67d2b10$export$3b14a55fb2447963 = $95aa1968e67d2b10$var$noticeCSS;
var $95aa1968e67d2b10$export$342063e11d6c3cad = $95aa1968e67d2b10$var$noticeCSS;
var $95aa1968e67d2b10$var$NoOptionsMessage = function NoOptionsMessage(_ref6) {
    var _ref6$children = _ref6.children, children = _ref6$children === void 0 ? "No options" : _ref6$children, innerProps = _ref6.innerProps, restProps = (0, $9X7IJ.default)(_ref6, $95aa1968e67d2b10$var$_excluded$3);
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps((0, $d49SP.default)((0, $d49SP.default)({}, restProps), {}, {
        children: children,
        innerProps: innerProps
    }), "noOptionsMessage", {
        "menu-notice": true,
        "menu-notice--no-options": true
    }), innerProps), children);
};
var $95aa1968e67d2b10$var$LoadingMessage = function LoadingMessage(_ref7) {
    var _ref7$children = _ref7.children, children = _ref7$children === void 0 ? "Loading..." : _ref7$children, innerProps = _ref7.innerProps, restProps = (0, $9X7IJ.default)(_ref7, $95aa1968e67d2b10$var$_excluded2$1);
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps((0, $d49SP.default)((0, $d49SP.default)({}, restProps), {}, {
        children: children,
        innerProps: innerProps
    }), "loadingMessage", {
        "menu-notice": true,
        "menu-notice--loading": true
    }), innerProps), children);
};
// ==============================
// Menu Portal
// ==============================
var $95aa1968e67d2b10$export$ae1af26003f05816 = function menuPortalCSS(_ref8) {
    var rect = _ref8.rect, offset = _ref8.offset, position = _ref8.position;
    return {
        left: rect.left,
        position: position,
        top: offset,
        width: rect.width,
        zIndex: 1
    };
};
var $95aa1968e67d2b10$var$MenuPortal = function MenuPortal(props) {
    var appendTo = props.appendTo, children = props.children, controlElement = props.controlElement, innerProps = props.innerProps, menuPlacement = props.menuPlacement, menuPosition = props.menuPosition;
    var menuPortalRef = (0, $acw62.useRef)(null);
    var cleanupRef = (0, $acw62.useRef)(null);
    var _useState5 = (0, $acw62.useState)($95aa1968e67d2b10$var$coercePlacement(menuPlacement)), _useState6 = (0, $eUqlC.default)(_useState5, 2), placement = _useState6[0], setPortalPlacement = _useState6[1];
    var portalPlacementContext = (0, $acw62.useMemo)(function() {
        return {
            setPortalPlacement: setPortalPlacement
        };
    }, []);
    var _useState7 = (0, $acw62.useState)(null), _useState8 = (0, $eUqlC.default)(_useState7, 2), computedPosition = _useState8[0], setComputedPosition = _useState8[1];
    var updateComputedPosition = (0, $acw62.useCallback)(function() {
        if (!controlElement) return;
        var rect = $95aa1968e67d2b10$var$getBoundingClientObj(controlElement);
        var scrollDistance = menuPosition === "fixed" ? 0 : window.pageYOffset;
        var offset = rect[placement] + scrollDistance;
        if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) setComputedPosition({
            offset: offset,
            rect: rect
        });
    }, [
        controlElement,
        menuPosition,
        placement,
        computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset,
        computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left,
        computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width
    ]);
    (0, $jLbqB.default)(function() {
        updateComputedPosition();
    }, [
        updateComputedPosition
    ]);
    var runAutoUpdate = (0, $acw62.useCallback)(function() {
        if (typeof cleanupRef.current === "function") {
            cleanupRef.current();
            cleanupRef.current = null;
        }
        if (controlElement && menuPortalRef.current) cleanupRef.current = (0, $618j3.autoUpdate)(controlElement, menuPortalRef.current, updateComputedPosition, {
            elementResize: "ResizeObserver" in window
        });
    }, [
        controlElement,
        updateComputedPosition
    ]);
    (0, $jLbqB.default)(function() {
        runAutoUpdate();
    }, [
        runAutoUpdate
    ]);
    var setMenuPortalElement = (0, $acw62.useCallback)(function(menuPortalElement) {
        menuPortalRef.current = menuPortalElement;
        runAutoUpdate();
    }, [
        runAutoUpdate
    ]);
    // bail early if required elements aren't present
    if (!appendTo && menuPosition !== "fixed" || !computedPosition) return null;
    // same wrapper element whether fixed or portalled
    var menuWrapper = (0, $8zogs.jsx)("div", (0, $8nd05.default)({
        ref: setMenuPortalElement
    }, $95aa1968e67d2b10$var$getStyleProps((0, $d49SP.default)((0, $d49SP.default)({}, props), {}, {
        offset: computedPosition.offset,
        position: menuPosition,
        rect: computedPosition.rect
    }), "menuPortal", {
        "menu-portal": true
    }), innerProps), children);
    return (0, $8zogs.jsx)($95aa1968e67d2b10$var$PortalPlacementContext.Provider, {
        value: portalPlacementContext
    }, appendTo ? /*#__PURE__*/ (0, $1u0KT.createPortal)(menuWrapper, appendTo) : menuWrapper);
};
// ==============================
// Root Container
// ==============================
var $95aa1968e67d2b10$export$8b22cf2602fb60ce = function containerCSS(_ref) {
    var isDisabled = _ref.isDisabled, isRtl = _ref.isRtl;
    return {
        label: "container",
        direction: isRtl ? "rtl" : undefined,
        pointerEvents: isDisabled ? "none" : undefined,
        // cancel mouse events when disabled
        position: "relative"
    };
};
var $95aa1968e67d2b10$var$SelectContainer = function SelectContainer(props) {
    var children = props.children, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "container", {
        "--is-disabled": isDisabled,
        "--is-rtl": isRtl
    }), innerProps), children);
};
// ==============================
// Value Container
// ==============================
var $95aa1968e67d2b10$export$4a5767248b18ef41 = function valueContainerCSS(_ref2, unstyled) {
    var spacing = _ref2.theme.spacing, isMulti = _ref2.isMulti, hasValue = _ref2.hasValue, controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
    return (0, $d49SP.default)({
        alignItems: "center",
        display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
        flex: 1,
        flexWrap: "wrap",
        WebkitOverflowScrolling: "touch",
        position: "relative",
        overflow: "hidden"
    }, unstyled ? {} : {
        padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
    });
};
var $95aa1968e67d2b10$var$ValueContainer = function ValueContainer(props) {
    var children = props.children, innerProps = props.innerProps, isMulti = props.isMulti, hasValue = props.hasValue;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "valueContainer", {
        "value-container": true,
        "value-container--is-multi": isMulti,
        "value-container--has-value": hasValue
    }), innerProps), children);
};
// ==============================
// Indicator Container
// ==============================
var $95aa1968e67d2b10$export$23f2a1d2818174ef = function indicatorsContainerCSS() {
    return {
        alignItems: "center",
        alignSelf: "stretch",
        display: "flex",
        flexShrink: 0
    };
};
var $95aa1968e67d2b10$var$IndicatorsContainer = function IndicatorsContainer(props) {
    var children = props.children, innerProps = props.innerProps;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "indicatorsContainer", {
        indicators: true
    }), innerProps), children);
};
var $95aa1968e67d2b10$var$_templateObject;
var $95aa1968e67d2b10$var$_excluded$2 = [
    "size"
], $95aa1968e67d2b10$var$_excluded2 = [
    "innerProps",
    "isRtl",
    "size"
];
function $95aa1968e67d2b10$var$_EMOTION_STRINGIFIED_CSS_ERROR__() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
// ==============================
// Dropdown & Clear Icons
// ==============================
var $95aa1968e67d2b10$var$_ref2 = {
    name: "8mmkcg",
    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
};
var $95aa1968e67d2b10$var$Svg = function Svg(_ref) {
    var size = _ref.size, props = (0, $9X7IJ.default)(_ref, $95aa1968e67d2b10$var$_excluded$2);
    return (0, $8zogs.jsx)("svg", (0, $8nd05.default)({
        height: size,
        width: size,
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        focusable: "false",
        css: $95aa1968e67d2b10$var$_ref2
    }, props));
};
var $95aa1968e67d2b10$var$CrossIcon = function CrossIcon(props) {
    return (0, $8zogs.jsx)($95aa1968e67d2b10$var$Svg, (0, $8nd05.default)({
        size: 20
    }, props), (0, $8zogs.jsx)("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
    }));
};
var $95aa1968e67d2b10$var$DownChevron = function DownChevron(props) {
    return (0, $8zogs.jsx)($95aa1968e67d2b10$var$Svg, (0, $8nd05.default)({
        size: 20
    }, props), (0, $8zogs.jsx)("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
    }));
};
// ==============================
// Dropdown & Clear Buttons
// ==============================
var $95aa1968e67d2b10$var$baseCSS = function baseCSS(_ref3, unstyled) {
    var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit = _ref3$theme.spacing.baseUnit, colors = _ref3$theme.colors;
    return (0, $d49SP.default)({
        label: "indicatorContainer",
        display: "flex",
        transition: "color 150ms"
    }, unstyled ? {} : {
        color: isFocused ? colors.neutral60 : colors.neutral20,
        padding: baseUnit * 2,
        ":hover": {
            color: isFocused ? colors.neutral80 : colors.neutral40
        }
    });
};
var $95aa1968e67d2b10$export$f1e1789686576879 = $95aa1968e67d2b10$var$baseCSS;
var $95aa1968e67d2b10$var$DropdownIndicator = function DropdownIndicator(props) {
    var children = props.children, innerProps = props.innerProps;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "dropdownIndicator", {
        indicator: true,
        "dropdown-indicator": true
    }), innerProps), children || (0, $8zogs.jsx)($95aa1968e67d2b10$var$DownChevron, null));
};
var $95aa1968e67d2b10$export$407448d2b89b1813 = $95aa1968e67d2b10$var$baseCSS;
var $95aa1968e67d2b10$var$ClearIndicator = function ClearIndicator(props) {
    var children = props.children, innerProps = props.innerProps;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "clearIndicator", {
        indicator: true,
        "clear-indicator": true
    }), innerProps), children || (0, $8zogs.jsx)($95aa1968e67d2b10$var$CrossIcon, null));
};
// ==============================
// Separator
// ==============================
var $95aa1968e67d2b10$export$dda1d9f60106f0e9 = function indicatorSeparatorCSS(_ref4, unstyled) {
    var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit = _ref4$theme.spacing.baseUnit, colors = _ref4$theme.colors;
    return (0, $d49SP.default)({
        label: "indicatorSeparator",
        alignSelf: "stretch",
        width: 1
    }, unstyled ? {} : {
        backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
        marginBottom: baseUnit * 2,
        marginTop: baseUnit * 2
    });
};
var $95aa1968e67d2b10$var$IndicatorSeparator = function IndicatorSeparator(props) {
    var innerProps = props.innerProps;
    return (0, $8zogs.jsx)("span", (0, $8nd05.default)({}, innerProps, $95aa1968e67d2b10$var$getStyleProps(props, "indicatorSeparator", {
        "indicator-separator": true
    })));
};
// ==============================
// Loading
// ==============================
var $95aa1968e67d2b10$var$loadingDotAnimations = (0, $8zogs.keyframes)($95aa1968e67d2b10$var$_templateObject || ($95aa1968e67d2b10$var$_templateObject = (0, $hvnYt.default)([
    "\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"
])));
var $95aa1968e67d2b10$export$882b5998b3b9117c = function loadingIndicatorCSS(_ref5, unstyled) {
    var isFocused = _ref5.isFocused, size = _ref5.size, _ref5$theme = _ref5.theme, colors = _ref5$theme.colors, baseUnit = _ref5$theme.spacing.baseUnit;
    return (0, $d49SP.default)({
        label: "loadingIndicator",
        display: "flex",
        transition: "color 150ms",
        alignSelf: "center",
        fontSize: size,
        lineHeight: 1,
        marginRight: size,
        textAlign: "center",
        verticalAlign: "middle"
    }, unstyled ? {} : {
        color: isFocused ? colors.neutral60 : colors.neutral20,
        padding: baseUnit * 2
    });
};
var $95aa1968e67d2b10$var$LoadingDot = function LoadingDot(_ref6) {
    var delay = _ref6.delay, offset = _ref6.offset;
    return (0, $8zogs.jsx)("span", {
        css: /*#__PURE__*/ (0, $8zogs.css)({
            animation: "".concat($95aa1968e67d2b10$var$loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
            backgroundColor: "currentColor",
            borderRadius: "1em",
            display: "inline-block",
            marginLeft: offset ? "1em" : undefined,
            height: "1em",
            verticalAlign: "top",
            width: "1em"
        }, "", "")
    });
};
var $95aa1968e67d2b10$var$LoadingIndicator = function LoadingIndicator(_ref7) {
    var innerProps = _ref7.innerProps, isRtl = _ref7.isRtl, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? 4 : _ref7$size, restProps = (0, $9X7IJ.default)(_ref7, $95aa1968e67d2b10$var$_excluded2);
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps((0, $d49SP.default)((0, $d49SP.default)({}, restProps), {}, {
        innerProps: innerProps,
        isRtl: isRtl,
        size: size
    }), "loadingIndicator", {
        indicator: true,
        "loading-indicator": true
    }), innerProps), (0, $8zogs.jsx)($95aa1968e67d2b10$var$LoadingDot, {
        delay: 0,
        offset: isRtl
    }), (0, $8zogs.jsx)($95aa1968e67d2b10$var$LoadingDot, {
        delay: 160,
        offset: true
    }), (0, $8zogs.jsx)($95aa1968e67d2b10$var$LoadingDot, {
        delay: 320,
        offset: !isRtl
    }));
};
var $95aa1968e67d2b10$export$4368d992c4eafac0 = function css(_ref, unstyled) {
    var isDisabled = _ref.isDisabled, isFocused = _ref.isFocused, _ref$theme = _ref.theme, colors = _ref$theme.colors, borderRadius = _ref$theme.borderRadius, spacing = _ref$theme.spacing;
    return (0, $d49SP.default)({
        label: "control",
        alignItems: "center",
        cursor: "default",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        minHeight: spacing.controlHeight,
        outline: "0 !important",
        position: "relative",
        transition: "all 100ms"
    }, unstyled ? {} : {
        backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
        borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
        borderRadius: borderRadius,
        borderStyle: "solid",
        borderWidth: 1,
        boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
        "&:hover": {
            borderColor: isFocused ? colors.primary : colors.neutral30
        }
    });
};
var $95aa1968e67d2b10$var$Control = function Control(props) {
    var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({
        ref: innerRef
    }, $95aa1968e67d2b10$var$getStyleProps(props, "control", {
        control: true,
        "control--is-disabled": isDisabled,
        "control--is-focused": isFocused,
        "control--menu-is-open": menuIsOpen
    }), innerProps), children);
};
var $95aa1968e67d2b10$var$Control$1 = $95aa1968e67d2b10$var$Control;
var $95aa1968e67d2b10$var$_excluded$1 = [
    "data"
];
var $95aa1968e67d2b10$export$39b482c5e57630a8 = function groupCSS(_ref, unstyled) {
    var spacing = _ref.theme.spacing;
    return unstyled ? {} : {
        paddingBottom: spacing.baseUnit * 2,
        paddingTop: spacing.baseUnit * 2
    };
};
var $95aa1968e67d2b10$var$Group = function Group(props) {
    var children = props.children, cx = props.cx, getStyles = props.getStyles, getClassNames = props.getClassNames, Heading = props.Heading, headingProps = props.headingProps, innerProps = props.innerProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "group", {
        group: true
    }), innerProps), (0, $8zogs.jsx)(Heading, (0, $8nd05.default)({}, headingProps, {
        selectProps: selectProps,
        theme: theme,
        getStyles: getStyles,
        getClassNames: getClassNames,
        cx: cx
    }), label), (0, $8zogs.jsx)("div", null, children));
};
var $95aa1968e67d2b10$export$2d1720544b23b823 = function groupHeadingCSS(_ref2, unstyled) {
    var _ref2$theme = _ref2.theme, colors = _ref2$theme.colors, spacing = _ref2$theme.spacing;
    return (0, $d49SP.default)({
        label: "group",
        cursor: "default",
        display: "block"
    }, unstyled ? {} : {
        color: colors.neutral40,
        fontSize: "75%",
        fontWeight: 500,
        marginBottom: "0.25em",
        paddingLeft: spacing.baseUnit * 3,
        paddingRight: spacing.baseUnit * 3,
        textTransform: "uppercase"
    });
};
var $95aa1968e67d2b10$var$GroupHeading = function GroupHeading(props) {
    var _cleanCommonProps = $95aa1968e67d2b10$var$cleanCommonProps(props);
    _cleanCommonProps.data;
    var innerProps = (0, $9X7IJ.default)(_cleanCommonProps, $95aa1968e67d2b10$var$_excluded$1);
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "groupHeading", {
        "group-heading": true
    }), innerProps));
};
var $95aa1968e67d2b10$var$Group$1 = $95aa1968e67d2b10$var$Group;
var $95aa1968e67d2b10$var$_excluded = [
    "innerRef",
    "isDisabled",
    "isHidden",
    "inputClassName"
];
var $95aa1968e67d2b10$export$35e795649ee09318 = function inputCSS(_ref, unstyled) {
    var isDisabled = _ref.isDisabled, value = _ref.value, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
    return (0, $d49SP.default)((0, $d49SP.default)({
        visibility: isDisabled ? "hidden" : "visible",
        // force css to recompute when value change due to @emotion bug.
        // We can remove it whenever the bug is fixed.
        transform: value ? "translateZ(0)" : ""
    }, $95aa1968e67d2b10$var$containerStyle), unstyled ? {} : {
        margin: spacing.baseUnit / 2,
        paddingBottom: spacing.baseUnit / 2,
        paddingTop: spacing.baseUnit / 2,
        color: colors.neutral80
    });
};
var $95aa1968e67d2b10$var$spacingStyle = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
};
var $95aa1968e67d2b10$var$containerStyle = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": (0, $d49SP.default)({
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre"
    }, $95aa1968e67d2b10$var$spacingStyle)
};
var $95aa1968e67d2b10$var$inputStyle = function inputStyle(isHidden) {
    return (0, $d49SP.default)({
        label: "input",
        color: "inherit",
        background: 0,
        opacity: isHidden ? 0 : 1,
        width: "100%"
    }, $95aa1968e67d2b10$var$spacingStyle);
};
var $95aa1968e67d2b10$var$Input = function Input(props) {
    var cx = props.cx, value = props.value;
    var _cleanCommonProps = $95aa1968e67d2b10$var$cleanCommonProps(props), innerRef = _cleanCommonProps.innerRef, isDisabled = _cleanCommonProps.isDisabled, isHidden = _cleanCommonProps.isHidden, inputClassName = _cleanCommonProps.inputClassName, innerProps = (0, $9X7IJ.default)(_cleanCommonProps, $95aa1968e67d2b10$var$_excluded);
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "input", {
        "input-container": true
    }), {
        "data-value": value || ""
    }), (0, $8zogs.jsx)("input", (0, $8nd05.default)({
        className: cx({
            input: true
        }, inputClassName),
        ref: innerRef,
        style: $95aa1968e67d2b10$var$inputStyle(isHidden),
        disabled: isDisabled
    }, innerProps)));
};
var $95aa1968e67d2b10$var$Input$1 = $95aa1968e67d2b10$var$Input;
var $95aa1968e67d2b10$export$ffb5f4729a158638 = function multiValueCSS(_ref, unstyled) {
    var _ref$theme = _ref.theme, spacing = _ref$theme.spacing, borderRadius = _ref$theme.borderRadius, colors = _ref$theme.colors;
    return (0, $d49SP.default)({
        label: "multiValue",
        display: "flex",
        minWidth: 0
    }, unstyled ? {} : {
        backgroundColor: colors.neutral10,
        borderRadius: borderRadius / 2,
        margin: spacing.baseUnit / 2
    });
};
var $95aa1968e67d2b10$export$9e5f44173e64f162 = function multiValueLabelCSS(_ref2, unstyled) {
    var _ref2$theme = _ref2.theme, borderRadius = _ref2$theme.borderRadius, colors = _ref2$theme.colors, cropWithEllipsis = _ref2.cropWithEllipsis;
    return (0, $d49SP.default)({
        overflow: "hidden",
        textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? "ellipsis" : undefined,
        whiteSpace: "nowrap"
    }, unstyled ? {} : {
        borderRadius: borderRadius / 2,
        color: colors.neutral80,
        fontSize: "85%",
        padding: 3,
        paddingLeft: 6
    });
};
var $95aa1968e67d2b10$export$625550452a3fa3ec = function multiValueRemoveCSS(_ref3, unstyled) {
    var _ref3$theme = _ref3.theme, spacing = _ref3$theme.spacing, borderRadius = _ref3$theme.borderRadius, colors = _ref3$theme.colors, isFocused = _ref3.isFocused;
    return (0, $d49SP.default)({
        alignItems: "center",
        display: "flex"
    }, unstyled ? {} : {
        borderRadius: borderRadius / 2,
        backgroundColor: isFocused ? colors.dangerLight : undefined,
        paddingLeft: spacing.baseUnit,
        paddingRight: spacing.baseUnit,
        ":hover": {
            backgroundColor: colors.dangerLight,
            color: colors.danger
        }
    });
};
var $95aa1968e67d2b10$var$MultiValueGeneric = function MultiValueGeneric(_ref4) {
    var children = _ref4.children, innerProps = _ref4.innerProps;
    return (0, $8zogs.jsx)("div", innerProps, children);
};
var $95aa1968e67d2b10$var$MultiValueContainer = $95aa1968e67d2b10$var$MultiValueGeneric;
var $95aa1968e67d2b10$var$MultiValueLabel = $95aa1968e67d2b10$var$MultiValueGeneric;
function $95aa1968e67d2b10$var$MultiValueRemove(_ref5) {
    var children = _ref5.children, innerProps = _ref5.innerProps;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({
        role: "button"
    }, innerProps), children || (0, $8zogs.jsx)($95aa1968e67d2b10$var$CrossIcon, {
        size: 14
    }));
}
var $95aa1968e67d2b10$var$MultiValue = function MultiValue(props) {
    var children = props.children, components = props.components, data = props.data, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps = props.removeProps, selectProps = props.selectProps;
    var Container = components.Container, Label = components.Label, Remove = components.Remove;
    return (0, $8zogs.jsx)(Container, {
        data: data,
        innerProps: (0, $d49SP.default)((0, $d49SP.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "multiValue", {
            "multi-value": true,
            "multi-value--is-disabled": isDisabled
        })), innerProps),
        selectProps: selectProps
    }, (0, $8zogs.jsx)(Label, {
        data: data,
        innerProps: (0, $d49SP.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "multiValueLabel", {
            "multi-value__label": true
        })),
        selectProps: selectProps
    }, children), (0, $8zogs.jsx)(Remove, {
        data: data,
        innerProps: (0, $d49SP.default)((0, $d49SP.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "multiValueRemove", {
            "multi-value__remove": true
        })), {}, {
            "aria-label": "Remove ".concat(children || "option")
        }, removeProps),
        selectProps: selectProps
    }));
};
var $95aa1968e67d2b10$var$MultiValue$1 = $95aa1968e67d2b10$var$MultiValue;
var $95aa1968e67d2b10$export$90a7f3efeed30595 = function optionCSS(_ref, unstyled) {
    var isDisabled = _ref.isDisabled, isFocused = _ref.isFocused, isSelected = _ref.isSelected, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
    return (0, $d49SP.default)({
        label: "option",
        cursor: "default",
        display: "block",
        fontSize: "inherit",
        width: "100%",
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
    }, unstyled ? {} : {
        backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : "transparent",
        color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : "inherit",
        padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
        // provide some affordance on touch devices
        ":active": {
            backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
        }
    });
};
var $95aa1968e67d2b10$var$Option = function Option(props) {
    var children = props.children, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "option", {
        option: true,
        "option--is-disabled": isDisabled,
        "option--is-focused": isFocused,
        "option--is-selected": isSelected
    }), {
        ref: innerRef,
        "aria-disabled": isDisabled
    }, innerProps), children);
};
var $95aa1968e67d2b10$var$Option$1 = $95aa1968e67d2b10$var$Option;
var $95aa1968e67d2b10$export$efccba1c4a2ef57b = function placeholderCSS(_ref, unstyled) {
    var _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
    return (0, $d49SP.default)({
        label: "placeholder",
        gridArea: "1 / 1 / 2 / 3"
    }, unstyled ? {} : {
        color: colors.neutral50,
        marginLeft: spacing.baseUnit / 2,
        marginRight: spacing.baseUnit / 2
    });
};
var $95aa1968e67d2b10$var$Placeholder = function Placeholder(props) {
    var children = props.children, innerProps = props.innerProps;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "placeholder", {
        placeholder: true
    }), innerProps), children);
};
var $95aa1968e67d2b10$var$Placeholder$1 = $95aa1968e67d2b10$var$Placeholder;
var $95aa1968e67d2b10$export$d141bba7fdc215a3 = function css(_ref, unstyled) {
    var isDisabled = _ref.isDisabled, _ref$theme = _ref.theme, spacing = _ref$theme.spacing, colors = _ref$theme.colors;
    return (0, $d49SP.default)({
        label: "singleValue",
        gridArea: "1 / 1 / 2 / 3",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    }, unstyled ? {} : {
        color: isDisabled ? colors.neutral40 : colors.neutral80,
        marginLeft: spacing.baseUnit / 2,
        marginRight: spacing.baseUnit / 2
    });
};
var $95aa1968e67d2b10$var$SingleValue = function SingleValue(props) {
    var children = props.children, isDisabled = props.isDisabled, innerProps = props.innerProps;
    return (0, $8zogs.jsx)("div", (0, $8nd05.default)({}, $95aa1968e67d2b10$var$getStyleProps(props, "singleValue", {
        "single-value": true,
        "single-value--is-disabled": isDisabled
    }), innerProps), children);
};
var $95aa1968e67d2b10$var$SingleValue$1 = $95aa1968e67d2b10$var$SingleValue;
var $95aa1968e67d2b10$export$db3b6bfb95261072 = {
    ClearIndicator: $95aa1968e67d2b10$var$ClearIndicator,
    Control: $95aa1968e67d2b10$var$Control$1,
    DropdownIndicator: $95aa1968e67d2b10$var$DropdownIndicator,
    DownChevron: $95aa1968e67d2b10$var$DownChevron,
    CrossIcon: $95aa1968e67d2b10$var$CrossIcon,
    Group: $95aa1968e67d2b10$var$Group$1,
    GroupHeading: $95aa1968e67d2b10$var$GroupHeading,
    IndicatorsContainer: $95aa1968e67d2b10$var$IndicatorsContainer,
    IndicatorSeparator: $95aa1968e67d2b10$var$IndicatorSeparator,
    Input: $95aa1968e67d2b10$var$Input$1,
    LoadingIndicator: $95aa1968e67d2b10$var$LoadingIndicator,
    Menu: $95aa1968e67d2b10$var$Menu$1,
    MenuList: $95aa1968e67d2b10$var$MenuList,
    MenuPortal: $95aa1968e67d2b10$var$MenuPortal,
    LoadingMessage: $95aa1968e67d2b10$var$LoadingMessage,
    NoOptionsMessage: $95aa1968e67d2b10$var$NoOptionsMessage,
    MultiValue: $95aa1968e67d2b10$var$MultiValue$1,
    MultiValueContainer: $95aa1968e67d2b10$var$MultiValueContainer,
    MultiValueLabel: $95aa1968e67d2b10$var$MultiValueLabel,
    MultiValueRemove: $95aa1968e67d2b10$var$MultiValueRemove,
    Option: $95aa1968e67d2b10$var$Option$1,
    Placeholder: $95aa1968e67d2b10$var$Placeholder$1,
    SelectContainer: $95aa1968e67d2b10$var$SelectContainer,
    SingleValue: $95aa1968e67d2b10$var$SingleValue$1,
    ValueContainer: $95aa1968e67d2b10$var$ValueContainer
};
var $95aa1968e67d2b10$export$d66501df72047452 = function defaultComponents(props) {
    return (0, $d49SP.default)((0, $d49SP.default)({}, $95aa1968e67d2b10$export$db3b6bfb95261072), props.components);
};

});
parcelRequire.register("eUqlC", function(module, exports) {

$parcel$export(module.exports, "default", () => $adaabbc18727b3e6$export$2e2bcd8739ae039);

var $1uEeT = parcelRequire("1uEeT");

var $guSBA = parcelRequire("guSBA");

var $abLc2 = parcelRequire("abLc2");

var $782Uh = parcelRequire("782Uh");
function $adaabbc18727b3e6$export$2e2bcd8739ae039(arr, i) {
    return (0, $1uEeT.default)(arr) || (0, $guSBA.default)(arr, i) || (0, $abLc2.default)(arr, i) || (0, $782Uh.default)();
}

});
parcelRequire.register("1uEeT", function(module, exports) {

$parcel$export(module.exports, "default", () => $1167ce760980f343$export$2e2bcd8739ae039);
function $1167ce760980f343$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return arr;
}

});

parcelRequire.register("guSBA", function(module, exports) {

$parcel$export(module.exports, "default", () => $c029ce1ef065e371$export$2e2bcd8739ae039);
function $c029ce1ef065e371$export$2e2bcd8739ae039(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
        try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
            } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
            _d = !0, _e = err;
        } finally{
            try {
                if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}

});

parcelRequire.register("782Uh", function(module, exports) {

$parcel$export(module.exports, "default", () => $530b88ff20858fe6$export$2e2bcd8739ae039);
function $530b88ff20858fe6$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

});


parcelRequire.register("9X7IJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $73ef9ce1c41fc0c0$export$2e2bcd8739ae039);

var $1En50 = parcelRequire("1En50");
function $73ef9ce1c41fc0c0$export$2e2bcd8739ae039(source, excluded) {
    if (source == null) return {};
    var target = (0, $1En50.default)(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}

});

parcelRequire.register("hvnYt", function(module, exports) {

$parcel$export(module.exports, "default", () => $cbe7edbf3ccb8828$export$2e2bcd8739ae039);
function $cbe7edbf3ccb8828$export$2e2bcd8739ae039(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

});

parcelRequire.register("618j3", function(module, exports) {

$parcel$export(module.exports, "autoUpdate", () => $461947879dcdbcd4$export$deee3a793edee05f);

var $cZ41y = parcelRequire("cZ41y");
function $461947879dcdbcd4$var$getWindow(node) {
    var _node$ownerDocument;
    return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function $461947879dcdbcd4$var$getComputedStyle$1(element) {
    return $461947879dcdbcd4$var$getWindow(element).getComputedStyle(element);
}
function $461947879dcdbcd4$var$isNode(value) {
    return value instanceof $461947879dcdbcd4$var$getWindow(value).Node;
}
function $461947879dcdbcd4$var$getNodeName(node) {
    if ($461947879dcdbcd4$var$isNode(node)) return (node.nodeName || "").toLowerCase();
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return "#document";
}
function $461947879dcdbcd4$var$isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof $461947879dcdbcd4$var$getWindow(value).HTMLElement;
}
function $461947879dcdbcd4$var$isShadowRoot(node) {
    // Browsers without `ShadowRoot` support.
    if (typeof ShadowRoot === "undefined") return false;
    return node instanceof $461947879dcdbcd4$var$getWindow(node).ShadowRoot || node instanceof ShadowRoot;
}
function $461947879dcdbcd4$var$isOverflowElement(element) {
    const { overflow: overflow, overflowX: overflowX, overflowY: overflowY, display: display } = $461947879dcdbcd4$var$getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && ![
        "inline",
        "contents"
    ].includes(display);
}
function $461947879dcdbcd4$var$isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].includes($461947879dcdbcd4$var$getNodeName(element));
}
function $461947879dcdbcd4$var$isContainingBlock(element) {
    const safari = $461947879dcdbcd4$var$isSafari();
    const css = $461947879dcdbcd4$var$getComputedStyle$1(element);
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !safari && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !safari && (css.filter ? css.filter !== "none" : false) || [
        "transform",
        "perspective",
        "filter"
    ].some((value)=>(css.willChange || "").includes(value)) || [
        "paint",
        "layout",
        "strict",
        "content"
    ].some((value)=>(css.contain || "").includes(value));
}
function $461947879dcdbcd4$var$isSafari() {
    if (typeof CSS === "undefined" || !CSS.supports) return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
}
function $461947879dcdbcd4$var$isLastTraversableNode(node) {
    return [
        "html",
        "body",
        "#document"
    ].includes($461947879dcdbcd4$var$getNodeName(node));
}
const $461947879dcdbcd4$var$min = Math.min;
const $461947879dcdbcd4$var$max = Math.max;
const $461947879dcdbcd4$var$round = Math.round;
const $461947879dcdbcd4$var$floor = Math.floor;
const $461947879dcdbcd4$var$createCoords = (v)=>({
        x: v,
        y: v
    });
function $461947879dcdbcd4$var$getCssDimensions(element) {
    const css = $461947879dcdbcd4$var$getComputedStyle$1(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = $461947879dcdbcd4$var$isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = $461947879dcdbcd4$var$round(width) !== offsetWidth || $461947879dcdbcd4$var$round(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width: width,
        height: height,
        $: shouldFallback
    };
}
function $461947879dcdbcd4$var$isElement(value) {
    return value instanceof Element || value instanceof $461947879dcdbcd4$var$getWindow(value).Element;
}
function $461947879dcdbcd4$var$unwrapElement(element) {
    return !$461947879dcdbcd4$var$isElement(element) ? element.contextElement : element;
}
function $461947879dcdbcd4$var$getScale(element) {
    const domElement = $461947879dcdbcd4$var$unwrapElement(element);
    if (!$461947879dcdbcd4$var$isHTMLElement(domElement)) return $461947879dcdbcd4$var$createCoords(1);
    const rect = domElement.getBoundingClientRect();
    const { width: width, height: height, $: $ } = $461947879dcdbcd4$var$getCssDimensions(domElement);
    let x = ($ ? $461947879dcdbcd4$var$round(rect.width) : rect.width) / width;
    let y = ($ ? $461947879dcdbcd4$var$round(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) x = 1;
    if (!y || !Number.isFinite(y)) y = 1;
    return {
        x: x,
        y: y
    };
}
const $461947879dcdbcd4$var$noOffsets = /*#__PURE__*/ $461947879dcdbcd4$var$createCoords(0);
function $461947879dcdbcd4$var$getVisualOffsets(element) {
    const win = $461947879dcdbcd4$var$getWindow(element);
    if (!$461947879dcdbcd4$var$isSafari() || !win.visualViewport) return $461947879dcdbcd4$var$noOffsets;
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function $461947879dcdbcd4$var$shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) isFixed = false;
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== $461947879dcdbcd4$var$getWindow(element)) return false;
    return isFixed;
}
function $461947879dcdbcd4$var$getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    const clientRect = element.getBoundingClientRect();
    const domElement = $461947879dcdbcd4$var$unwrapElement(element);
    let scale = $461947879dcdbcd4$var$createCoords(1);
    if (includeScale) {
        if (offsetParent) {
            if ($461947879dcdbcd4$var$isElement(offsetParent)) scale = $461947879dcdbcd4$var$getScale(offsetParent);
        } else scale = $461947879dcdbcd4$var$getScale(element);
    }
    const visualOffsets = $461947879dcdbcd4$var$shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? $461947879dcdbcd4$var$getVisualOffsets(domElement) : $461947879dcdbcd4$var$createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = $461947879dcdbcd4$var$getWindow(domElement);
        const offsetWin = offsetParent && $461947879dcdbcd4$var$isElement(offsetParent) ? $461947879dcdbcd4$var$getWindow(offsetParent) : offsetParent;
        let currentIFrame = win.frameElement;
        while(currentIFrame && offsetParent && offsetWin !== win){
            const iframeScale = $461947879dcdbcd4$var$getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = getComputedStyle(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentIFrame = $461947879dcdbcd4$var$getWindow(currentIFrame).frameElement;
        }
    }
    return (0, $cZ41y.rectToClientRect)({
        width: width,
        height: height,
        x: x,
        y: y
    });
}
function $461947879dcdbcd4$var$getNodeScroll(element) {
    if ($461947879dcdbcd4$var$isElement(element)) return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
    return {
        scrollLeft: element.pageXOffset,
        scrollTop: element.pageYOffset
    };
}
function $461947879dcdbcd4$var$getDocumentElement(node) {
    var _ref;
    return (_ref = ($461947879dcdbcd4$var$isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function $461947879dcdbcd4$var$convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { rect: rect, offsetParent: offsetParent, strategy: strategy } = _ref;
    const isOffsetParentAnElement = $461947879dcdbcd4$var$isHTMLElement(offsetParent);
    const documentElement = $461947879dcdbcd4$var$getDocumentElement(offsetParent);
    if (offsetParent === documentElement) return rect;
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = $461947879dcdbcd4$var$createCoords(1);
    const offsets = $461947879dcdbcd4$var$createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
        if ($461947879dcdbcd4$var$getNodeName(offsetParent) !== "body" || $461947879dcdbcd4$var$isOverflowElement(documentElement)) scroll = $461947879dcdbcd4$var$getNodeScroll(offsetParent);
        if ($461947879dcdbcd4$var$isHTMLElement(offsetParent)) {
            const offsetRect = $461947879dcdbcd4$var$getBoundingClientRect(offsetParent);
            scale = $461947879dcdbcd4$var$getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
}
function $461947879dcdbcd4$var$getClientRects(element) {
    return Array.from(element.getClientRects());
}
function $461947879dcdbcd4$var$getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    return $461947879dcdbcd4$var$getBoundingClientRect($461947879dcdbcd4$var$getDocumentElement(element)).left + $461947879dcdbcd4$var$getNodeScroll(element).scrollLeft;
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function $461947879dcdbcd4$var$getDocumentRect(element) {
    const html = $461947879dcdbcd4$var$getDocumentElement(element);
    const scroll = $461947879dcdbcd4$var$getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = $461947879dcdbcd4$var$max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = $461947879dcdbcd4$var$max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + $461947879dcdbcd4$var$getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ($461947879dcdbcd4$var$getComputedStyle$1(body).direction === "rtl") x += $461947879dcdbcd4$var$max(html.clientWidth, body.clientWidth) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
function $461947879dcdbcd4$var$getParentNode(node) {
    if ($461947879dcdbcd4$var$getNodeName(node) === "html") return node;
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    $461947879dcdbcd4$var$isShadowRoot(node) && node.host || // Fallback.
    $461947879dcdbcd4$var$getDocumentElement(node);
    return $461947879dcdbcd4$var$isShadowRoot(result) ? result.host : result;
}
function $461947879dcdbcd4$var$getNearestOverflowAncestor(node) {
    const parentNode = $461947879dcdbcd4$var$getParentNode(node);
    if ($461947879dcdbcd4$var$isLastTraversableNode(parentNode)) return node.ownerDocument ? node.ownerDocument.body : node.body;
    if ($461947879dcdbcd4$var$isHTMLElement(parentNode) && $461947879dcdbcd4$var$isOverflowElement(parentNode)) return parentNode;
    return $461947879dcdbcd4$var$getNearestOverflowAncestor(parentNode);
}
function $461947879dcdbcd4$export$3b57c1601291186b(node, list) {
    var _node$ownerDocument;
    if (list === void 0) list = [];
    const scrollableAncestor = $461947879dcdbcd4$var$getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
    const win = $461947879dcdbcd4$var$getWindow(scrollableAncestor);
    if (isBody) return list.concat(win, win.visualViewport || [], $461947879dcdbcd4$var$isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
    return list.concat(scrollableAncestor, $461947879dcdbcd4$export$3b57c1601291186b(scrollableAncestor));
}
function $461947879dcdbcd4$var$getViewportRect(element, strategy) {
    const win = $461947879dcdbcd4$var$getWindow(element);
    const html = $461947879dcdbcd4$var$getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = $461947879dcdbcd4$var$isSafari();
        if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
// Returns the inner client rect, subtracting scrollbars if present.
function $461947879dcdbcd4$var$getInnerBoundingClientRect(element, strategy) {
    const clientRect = $461947879dcdbcd4$var$getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = $461947879dcdbcd4$var$isHTMLElement(element) ? $461947879dcdbcd4$var$getScale(element) : $461947879dcdbcd4$var$createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
function $461947879dcdbcd4$var$getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") rect = $461947879dcdbcd4$var$getViewportRect(element, strategy);
    else if (clippingAncestor === "document") rect = $461947879dcdbcd4$var$getDocumentRect($461947879dcdbcd4$var$getDocumentElement(element));
    else if ($461947879dcdbcd4$var$isElement(clippingAncestor)) rect = $461947879dcdbcd4$var$getInnerBoundingClientRect(clippingAncestor, strategy);
    else {
        const visualOffsets = $461947879dcdbcd4$var$getVisualOffsets(element);
        rect = {
            ...clippingAncestor,
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y
        };
    }
    return (0, $cZ41y.rectToClientRect)(rect);
}
function $461947879dcdbcd4$var$hasFixedPositionAncestor(element, stopNode) {
    const parentNode = $461947879dcdbcd4$var$getParentNode(element);
    if (parentNode === stopNode || !$461947879dcdbcd4$var$isElement(parentNode) || $461947879dcdbcd4$var$isLastTraversableNode(parentNode)) return false;
    return $461947879dcdbcd4$var$getComputedStyle$1(parentNode).position === "fixed" || $461947879dcdbcd4$var$hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function $461947879dcdbcd4$var$getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) return cachedResult;
    let result = $461947879dcdbcd4$export$3b57c1601291186b(element).filter((el)=>$461947879dcdbcd4$var$isElement(el) && $461947879dcdbcd4$var$getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = $461947879dcdbcd4$var$getComputedStyle$1(element).position === "fixed";
    let currentNode = elementIsFixed ? $461947879dcdbcd4$var$getParentNode(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while($461947879dcdbcd4$var$isElement(currentNode) && !$461947879dcdbcd4$var$isLastTraversableNode(currentNode)){
        const computedStyle = $461947879dcdbcd4$var$getComputedStyle$1(currentNode);
        const currentNodeIsContaining = $461947879dcdbcd4$var$isContainingBlock(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === "fixed") currentContainingBlockComputedStyle = null;
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && [
            "absolute",
            "fixed"
        ].includes(currentContainingBlockComputedStyle.position) || $461947879dcdbcd4$var$isOverflowElement(currentNode) && !currentNodeIsContaining && $461947879dcdbcd4$var$hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) // Drop non-containing blocks.
        result = result.filter((ancestor)=>ancestor !== currentNode);
        else // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
        currentNode = $461947879dcdbcd4$var$getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function $461947879dcdbcd4$var$getClippingRect(_ref) {
    let { element: element, boundary: boundary, rootBoundary: rootBoundary, strategy: strategy } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? $461947879dcdbcd4$var$getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = $461947879dcdbcd4$var$getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = $461947879dcdbcd4$var$max(rect.top, accRect.top);
        accRect.right = $461947879dcdbcd4$var$min(rect.right, accRect.right);
        accRect.bottom = $461947879dcdbcd4$var$min(rect.bottom, accRect.bottom);
        accRect.left = $461947879dcdbcd4$var$max(rect.left, accRect.left);
        return accRect;
    }, $461947879dcdbcd4$var$getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
function $461947879dcdbcd4$var$getDimensions(element) {
    return $461947879dcdbcd4$var$getCssDimensions(element);
}
function $461947879dcdbcd4$var$getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = $461947879dcdbcd4$var$isHTMLElement(offsetParent);
    const documentElement = $461947879dcdbcd4$var$getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = $461947879dcdbcd4$var$getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = $461947879dcdbcd4$var$createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ($461947879dcdbcd4$var$getNodeName(offsetParent) !== "body" || $461947879dcdbcd4$var$isOverflowElement(documentElement)) scroll = $461947879dcdbcd4$var$getNodeScroll(offsetParent);
        if ($461947879dcdbcd4$var$isHTMLElement(offsetParent)) {
            const offsetRect = $461947879dcdbcd4$var$getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) offsets.x = $461947879dcdbcd4$var$getWindowScrollBarX(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
function $461947879dcdbcd4$var$getTrueOffsetParent(element, polyfill) {
    if (!$461947879dcdbcd4$var$isHTMLElement(element) || $461947879dcdbcd4$var$getComputedStyle$1(element).position === "fixed") return null;
    if (polyfill) return polyfill(element);
    return element.offsetParent;
}
function $461947879dcdbcd4$var$getContainingBlock(element) {
    let currentNode = $461947879dcdbcd4$var$getParentNode(element);
    while($461947879dcdbcd4$var$isHTMLElement(currentNode) && !$461947879dcdbcd4$var$isLastTraversableNode(currentNode)){
        if ($461947879dcdbcd4$var$isContainingBlock(currentNode)) return currentNode;
        else currentNode = $461947879dcdbcd4$var$getParentNode(currentNode);
    }
    return null;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function $461947879dcdbcd4$var$getOffsetParent(element, polyfill) {
    const window1 = $461947879dcdbcd4$var$getWindow(element);
    if (!$461947879dcdbcd4$var$isHTMLElement(element)) return window1;
    let offsetParent = $461947879dcdbcd4$var$getTrueOffsetParent(element, polyfill);
    while(offsetParent && $461947879dcdbcd4$var$isTableElement(offsetParent) && $461947879dcdbcd4$var$getComputedStyle$1(offsetParent).position === "static")offsetParent = $461947879dcdbcd4$var$getTrueOffsetParent(offsetParent, polyfill);
    if (offsetParent && ($461947879dcdbcd4$var$getNodeName(offsetParent) === "html" || $461947879dcdbcd4$var$getNodeName(offsetParent) === "body" && $461947879dcdbcd4$var$getComputedStyle$1(offsetParent).position === "static" && !$461947879dcdbcd4$var$isContainingBlock(offsetParent))) return window1;
    return offsetParent || $461947879dcdbcd4$var$getContainingBlock(element) || window1;
}
const $461947879dcdbcd4$var$getElementRects = async function(_ref) {
    let { reference: reference, floating: floating, strategy: strategy } = _ref;
    const getOffsetParentFn = this.getOffsetParent || $461947879dcdbcd4$var$getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
        reference: $461947879dcdbcd4$var$getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
        floating: {
            x: 0,
            y: 0,
            ...await getDimensionsFn(floating)
        }
    };
};
function $461947879dcdbcd4$var$isRTL(element) {
    return getComputedStyle(element).direction === "rtl";
}
const $461947879dcdbcd4$export$722a64dea1b767dc = {
    convertOffsetParentRelativeRectToViewportRelativeRect: $461947879dcdbcd4$var$convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: $461947879dcdbcd4$var$getDocumentElement,
    getClippingRect: $461947879dcdbcd4$var$getClippingRect,
    getOffsetParent: $461947879dcdbcd4$var$getOffsetParent,
    getElementRects: $461947879dcdbcd4$var$getElementRects,
    getClientRects: $461947879dcdbcd4$var$getClientRects,
    getDimensions: $461947879dcdbcd4$var$getDimensions,
    getScale: $461947879dcdbcd4$var$getScale,
    isElement: $461947879dcdbcd4$var$isElement,
    isRTL: $461947879dcdbcd4$var$isRTL
};
// https://samthor.au/2021/observing-dom/
function $461947879dcdbcd4$var$observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = $461947879dcdbcd4$var$getDocumentElement(element);
    function cleanup() {
        clearTimeout(timeoutId);
        io && io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) skip = false;
        if (threshold === void 0) threshold = 1;
        cleanup();
        const { left: left, top: top, width: width, height: height } = element.getBoundingClientRect();
        if (!skip) onMove();
        if (!width || !height) return;
        const insetTop = $461947879dcdbcd4$var$floor(top);
        const insetRight = $461947879dcdbcd4$var$floor(root.clientWidth - (left + width));
        const insetBottom = $461947879dcdbcd4$var$floor(root.clientHeight - (top + height));
        const insetLeft = $461947879dcdbcd4$var$floor(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin: rootMargin,
            threshold: $461947879dcdbcd4$var$max(0, $461947879dcdbcd4$var$min(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) return refresh();
                if (!ratio) timeoutId = setTimeout(()=>{
                    refresh(false, 1e-7);
                }, 100);
                else refresh(false, ratio);
            }
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function $461947879dcdbcd4$export$deee3a793edee05f(reference, floating, update, options) {
    if (options === void 0) options = {};
    const { ancestorScroll: ancestorScroll = true, ancestorResize: ancestorResize = true, elementResize: elementResize = typeof ResizeObserver === "function", layoutShift: layoutShift = typeof IntersectionObserver === "function", animationFrame: animationFrame = false } = options;
    const referenceEl = $461947879dcdbcd4$var$unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? $461947879dcdbcd4$export$3b57c1601291186b(referenceEl) : [],
        ...$461947879dcdbcd4$export$3b57c1601291186b(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener("scroll", update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener("resize", update);
    });
    const cleanupIo = referenceEl && layoutShift ? $461947879dcdbcd4$var$observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    resizeObserver && resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
        resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? $461947879dcdbcd4$var$getBoundingClientRect(reference) : null;
    if (animationFrame) frameLoop();
    function frameLoop() {
        const nextRefRect = $461947879dcdbcd4$var$getBoundingClientRect(reference);
        if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) update();
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener("scroll", update);
            ancestorResize && ancestor.removeEventListener("resize", update);
        });
        cleanupIo && cleanupIo();
        resizeObserver && resizeObserver.disconnect();
        resizeObserver = null;
        if (animationFrame) cancelAnimationFrame(frameId);
    };
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */ const $461947879dcdbcd4$export$48a53dcb22e581d0 = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform: $461947879dcdbcd4$export$722a64dea1b767dc,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return (0, $cZ41y.computePosition)(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};

});
parcelRequire.register("cZ41y", function(module, exports) {

$parcel$export(module.exports, "computePosition", () => $973e4da43f2a375d$export$48a53dcb22e581d0);
$parcel$export(module.exports, "rectToClientRect", () => $973e4da43f2a375d$export$ee05aea0aeecbad4);
function $973e4da43f2a375d$var$getAlignment(placement) {
    return placement.split("-")[1];
}
function $973e4da43f2a375d$var$getLengthFromAxis(axis) {
    return axis === "y" ? "height" : "width";
}
function $973e4da43f2a375d$var$getSide(placement) {
    return placement.split("-")[0];
}
function $973e4da43f2a375d$var$getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].includes($973e4da43f2a375d$var$getSide(placement)) ? "x" : "y";
}
function $973e4da43f2a375d$var$computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference: reference, floating: floating } = _ref;
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const mainAxis = $973e4da43f2a375d$var$getMainAxisFromPlacement(placement);
    const length = $973e4da43f2a375d$var$getLengthFromAxis(mainAxis);
    const commonAlign = reference[length] / 2 - floating[length] / 2;
    const side = $973e4da43f2a375d$var$getSide(placement);
    const isVertical = mainAxis === "x";
    let coords;
    switch(side){
        case "top":
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case "bottom":
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case "right":
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case "left":
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch($973e4da43f2a375d$var$getAlignment(placement)){
        case "start":
            coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case "end":
            coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const $973e4da43f2a375d$export$48a53dcb22e581d0 = async (reference, floating, config)=>{
    const { placement: placement = "bottom", strategy: strategy = "absolute", middleware: middleware = [], platform: platform } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference: reference,
        floating: floating,
        strategy: strategy
    });
    let { x: x, y: y } = $973e4da43f2a375d$var$computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for(let i = 0; i < validMiddleware.length; i++){
        const { name: name, fn: fn } = validMiddleware[i];
        const { x: nextX, y: nextY, data: data, reset: reset } = await fn({
            x: x,
            y: y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy: strategy,
            middlewareData: middlewareData,
            rects: rects,
            platform: platform,
            elements: {
                reference: reference,
                floating: floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
            ...middlewareData,
            [name]: {
                ...middlewareData[name],
                ...data
            }
        };
        if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === "object") {
                if (reset.placement) statefulPlacement = reset.placement;
                if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
                    reference: reference,
                    floating: floating,
                    strategy: strategy
                }) : reset.rects;
                ({ x: x, y: y } = $973e4da43f2a375d$var$computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
            continue;
        }
    }
    return {
        x: x,
        y: y,
        placement: statefulPlacement,
        strategy: strategy,
        middlewareData: middlewareData
    };
};
function $973e4da43f2a375d$var$evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
}
function $973e4da43f2a375d$var$expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function $973e4da43f2a375d$var$getSideObjectFromPadding(padding) {
    return typeof padding !== "number" ? $973e4da43f2a375d$var$expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function $973e4da43f2a375d$export$ee05aea0aeecbad4(rect) {
    return {
        ...rect,
        top: rect.y,
        left: rect.x,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function $973e4da43f2a375d$export$37b6bde19b108ecc(state, options) {
    var _await$platform$isEle;
    if (options === void 0) options = {};
    const { x: x, y: y, platform: platform, rects: rects, elements: elements, strategy: strategy } = state;
    const { boundary: boundary = "clippingAncestors", rootBoundary: rootBoundary = "viewport", elementContext: elementContext = "floating", altBoundary: altBoundary = false, padding: padding = 0 } = $973e4da43f2a375d$var$evaluate(options, state);
    const paddingObject = $973e4da43f2a375d$var$getSideObjectFromPadding(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = $973e4da43f2a375d$export$ee05aea0aeecbad4(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary: boundary,
        rootBoundary: rootBoundary,
        strategy: strategy
    }));
    const rect = elementContext === "floating" ? {
        ...rects.floating,
        x: x,
        y: y
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = $973e4da43f2a375d$export$ee05aea0aeecbad4(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: rect,
        offsetParent: offsetParent,
        strategy: strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
const $973e4da43f2a375d$var$min = Math.min;
const $973e4da43f2a375d$var$max = Math.max;
function $973e4da43f2a375d$var$within(min$1, value, max$1) {
    return $973e4da43f2a375d$var$max(min$1, $973e4da43f2a375d$var$min(value, max$1));
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const $973e4da43f2a375d$export$f2120bbfa5450bd2 = (options)=>({
        name: "arrow",
        options: options,
        async fn (state) {
            const { x: x, y: y, placement: placement, rects: rects, platform: platform, elements: elements } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element: element, padding: padding = 0 } = $973e4da43f2a375d$var$evaluate(options, state) || {};
            if (element == null) return {};
            const paddingObject = $973e4da43f2a375d$var$getSideObjectFromPadding(padding);
            const coords = {
                x: x,
                y: y
            };
            const axis = $973e4da43f2a375d$var$getMainAxisFromPlacement(placement);
            const length = $973e4da43f2a375d$var$getLengthFromAxis(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === "y";
            const minProp = isYAxis ? "top" : "left";
            const maxProp = isYAxis ? "bottom" : "right";
            const clientProp = isYAxis ? "clientHeight" : "clientWidth";
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = $973e4da43f2a375d$var$min(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = $973e4da43f2a375d$var$min(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = $973e4da43f2a375d$var$within(min$1, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. This stops `shift()` from taking action, but can
            // be worked around by calling it again after the `arrow()` if desired.
            const shouldAddOffset = $973e4da43f2a375d$var$getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max - center : 0;
            return {
                [axis]: coords[axis] - alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset + alignmentOffset
                }
            };
        }
    });
const $973e4da43f2a375d$var$sides = [
    "top",
    "right",
    "bottom",
    "left"
];
const $973e4da43f2a375d$var$allPlacements = /*#__PURE__*/ $973e4da43f2a375d$var$sides.reduce((acc, side)=>acc.concat(side, side + "-start", side + "-end"), []);
const $973e4da43f2a375d$var$oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function $973e4da43f2a375d$var$getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side)=>$973e4da43f2a375d$var$oppositeSideMap[side]);
}
function $973e4da43f2a375d$var$getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) rtl = false;
    const alignment = $973e4da43f2a375d$var$getAlignment(placement);
    const mainAxis = $973e4da43f2a375d$var$getMainAxisFromPlacement(placement);
    const length = $973e4da43f2a375d$var$getLengthFromAxis(mainAxis);
    let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = $973e4da43f2a375d$var$getOppositePlacement(mainAlignmentSide);
    return {
        main: mainAlignmentSide,
        cross: $973e4da43f2a375d$var$getOppositePlacement(mainAlignmentSide)
    };
}
const $973e4da43f2a375d$var$oppositeAlignmentMap = {
    start: "end",
    end: "start"
};
function $973e4da43f2a375d$var$getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment)=>$973e4da43f2a375d$var$oppositeAlignmentMap[alignment]);
}
function $973e4da43f2a375d$var$getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>$973e4da43f2a375d$var$getAlignment(placement) === alignment),
        ...allowedPlacements.filter((placement)=>$973e4da43f2a375d$var$getAlignment(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>$973e4da43f2a375d$var$getSide(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) return $973e4da43f2a375d$var$getAlignment(placement) === alignment || (autoAlignment ? $973e4da43f2a375d$var$getOppositeAlignmentPlacement(placement) !== placement : false);
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const $973e4da43f2a375d$export$91fb6ecbd551914 = function(options) {
    if (options === void 0) options = {};
    return {
        name: "autoPlacement",
        options: options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects: rects, middlewareData: middlewareData, placement: placement, platform: platform, elements: elements } = state;
            const { crossAxis: crossAxis = false, alignment: alignment, allowedPlacements: allowedPlacements = $973e4da43f2a375d$var$allPlacements, autoAlignment: autoAlignment = true, ...detectOverflowOptions } = $973e4da43f2a375d$var$evaluate(options, state);
            const placements = alignment !== undefined || allowedPlacements === $973e4da43f2a375d$var$allPlacements ? $973e4da43f2a375d$var$getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await $973e4da43f2a375d$export$37b6bde19b108ecc(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements[currentIndex];
            if (currentPlacement == null) return {};
            const { main: main, cross: cross } = $973e4da43f2a375d$var$getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) return {
                reset: {
                    placement: placements[0]
                }
            };
            const currentOverflows = [
                overflow[$973e4da43f2a375d$var$getSide(currentPlacement)],
                overflow[main],
                overflow[cross]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) return {
                data: {
                    index: currentIndex + 1,
                    overflows: allOverflows
                },
                reset: {
                    placement: nextPlacement
                }
            };
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = $973e4da43f2a375d$var$getAlignment(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                $973e4da43f2a375d$var$getAlignment(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) return {
                data: {
                    index: currentIndex + 1,
                    overflows: allOverflows
                },
                reset: {
                    placement: resetPlacement
                }
            };
            return {};
        }
    };
};
function $973e4da43f2a375d$var$getExpandedPlacements(placement) {
    const oppositePlacement = $973e4da43f2a375d$var$getOppositePlacement(placement);
    return [
        $973e4da43f2a375d$var$getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        $973e4da43f2a375d$var$getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function $973e4da43f2a375d$var$getSideList(side, isStart, rtl) {
    const lr = [
        "left",
        "right"
    ];
    const rl = [
        "right",
        "left"
    ];
    const tb = [
        "top",
        "bottom"
    ];
    const bt = [
        "bottom",
        "top"
    ];
    switch(side){
        case "top":
        case "bottom":
            if (rtl) return isStart ? rl : lr;
            return isStart ? lr : rl;
        case "left":
        case "right":
            return isStart ? tb : bt;
        default:
            return [];
    }
}
function $973e4da43f2a375d$var$getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = $973e4da43f2a375d$var$getAlignment(placement);
    let list = $973e4da43f2a375d$var$getSideList($973e4da43f2a375d$var$getSide(placement), direction === "start", rtl);
    if (alignment) {
        list = list.map((side)=>side + "-" + alignment);
        if (flipAlignment) list = list.concat(list.map($973e4da43f2a375d$var$getOppositeAlignmentPlacement));
    }
    return list;
}
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const $973e4da43f2a375d$export$8a83211c878a3f1f = function(options) {
    if (options === void 0) options = {};
    return {
        name: "flip",
        options: options,
        async fn (state) {
            var _middlewareData$flip;
            const { placement: placement, middlewareData: middlewareData, rects: rects, initialPlacement: initialPlacement, platform: platform, elements: elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy: fallbackStrategy = "bestFit", fallbackAxisSideDirection: fallbackAxisSideDirection = "none", flipAlignment: flipAlignment = true, ...detectOverflowOptions } = $973e4da43f2a375d$var$evaluate(options, state);
            const side = $973e4da43f2a375d$var$getSide(placement);
            const isBasePlacement = $973e4da43f2a375d$var$getSide(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                $973e4da43f2a375d$var$getOppositePlacement(initialPlacement)
            ] : $973e4da43f2a375d$var$getExpandedPlacements(initialPlacement));
            if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") fallbackPlacements.push(...$973e4da43f2a375d$var$getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await $973e4da43f2a375d$export$37b6bde19b108ecc(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) overflows.push(overflow[side]);
            if (checkCrossAxis) {
                const { main: main, cross: cross } = $973e4da43f2a375d$var$getAlignmentSides(placement, rects, rtl);
                overflows.push(overflow[main], overflow[cross]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement: placement,
                    overflows: overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) // Try next placement and re-run the lifecycle.
                return {
                    data: {
                        index: nextIndex,
                        overflows: overflowsData
                    },
                    reset: {
                        placement: nextPlacement
                    }
                };
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) switch(fallbackStrategy){
                    case "bestFit":
                        {
                            var _overflowsData$map$so;
                            const placement = (_overflowsData$map$so = overflowsData.map((d)=>[
                                    d.placement,
                                    d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                            if (placement) resetPlacement = placement;
                            break;
                        }
                    case "initialPlacement":
                        resetPlacement = initialPlacement;
                        break;
                }
                if (placement !== resetPlacement) return {
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
function $973e4da43f2a375d$var$getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function $973e4da43f2a375d$var$isAnySideFullyClipped(overflow) {
    return $973e4da43f2a375d$var$sides.some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const $973e4da43f2a375d$export$fe8985bb6374093c = function(options) {
    if (options === void 0) options = {};
    return {
        name: "hide",
        options: options,
        async fn (state) {
            const { rects: rects } = state;
            const { strategy: strategy = "referenceHidden", ...detectOverflowOptions } = $973e4da43f2a375d$var$evaluate(options, state);
            switch(strategy){
                case "referenceHidden":
                    {
                        const overflow = await $973e4da43f2a375d$export$37b6bde19b108ecc(state, {
                            ...detectOverflowOptions,
                            elementContext: "reference"
                        });
                        const offsets = $973e4da43f2a375d$var$getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: $973e4da43f2a375d$var$isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case "escaped":
                    {
                        const overflow = await $973e4da43f2a375d$export$37b6bde19b108ecc(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = $973e4da43f2a375d$var$getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: $973e4da43f2a375d$var$isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    return {};
            }
        }
    };
};
function $973e4da43f2a375d$var$getBoundingRect(rects) {
    const minX = $973e4da43f2a375d$var$min(...rects.map((rect)=>rect.left));
    const minY = $973e4da43f2a375d$var$min(...rects.map((rect)=>rect.top));
    const maxX = $973e4da43f2a375d$var$max(...rects.map((rect)=>rect.right));
    const maxY = $973e4da43f2a375d$var$max(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function $973e4da43f2a375d$var$getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) groups.push([
            rect
        ]);
        else groups[groups.length - 1].push(rect);
        prevRect = rect;
    }
    return groups.map((rect)=>$973e4da43f2a375d$export$ee05aea0aeecbad4($973e4da43f2a375d$var$getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const $973e4da43f2a375d$export$18c8ad048e32c7d5 = function(options) {
    if (options === void 0) options = {};
    return {
        name: "inline",
        options: options,
        async fn (state) {
            const { placement: placement, elements: elements, rects: rects, platform: platform, strategy: strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding: padding = 2, x: x, y: y } = $973e4da43f2a375d$var$evaluate(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = $973e4da43f2a375d$var$getRectsByLine(nativeClientRects);
            const fallback = $973e4da43f2a375d$export$ee05aea0aeecbad4($973e4da43f2a375d$var$getBoundingRect(nativeClientRects));
            const paddingObject = $973e4da43f2a375d$var$getSideObjectFromPadding(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) // Find the first rect in which the point is fully inside.
                return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if ($973e4da43f2a375d$var$getMainAxisFromPlacement(placement) === "x") {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = $973e4da43f2a375d$var$getSide(placement) === "top";
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top: top,
                            bottom: bottom,
                            left: left,
                            right: right,
                            width: width,
                            height: height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = $973e4da43f2a375d$var$getSide(placement) === "left";
                    const maxRight = $973e4da43f2a375d$var$max(...clientRects.map((rect)=>rect.right));
                    const minLeft = $973e4da43f2a375d$var$min(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top: top,
                        bottom: bottom,
                        left: left,
                        right: right,
                        width: width,
                        height: height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect: getBoundingClientRect
                },
                floating: elements.floating,
                strategy: strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) return {
                reset: {
                    rects: resetRects
                }
            };
            return {};
        }
    };
};
async function $973e4da43f2a375d$var$convertValueToCoords(state, options) {
    const { placement: placement, platform: platform, elements: elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = $973e4da43f2a375d$var$getSide(placement);
    const alignment = $973e4da43f2a375d$var$getAlignment(placement);
    const isVertical = $973e4da43f2a375d$var$getMainAxisFromPlacement(placement) === "x";
    const mainAxisMulti = [
        "left",
        "top"
    ].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = $973e4da43f2a375d$var$evaluate(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis: mainAxis, crossAxis: crossAxis, alignmentAxis: alignmentAxis } = typeof rawValue === "number" ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...rawValue
    };
    if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const $973e4da43f2a375d$export$cc800923e997bb8 = function(options) {
    if (options === void 0) options = 0;
    return {
        name: "offset",
        options: options,
        async fn (state) {
            const { x: x, y: y } = state;
            const diffCoords = await $973e4da43f2a375d$var$convertValueToCoords(state, options);
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: diffCoords
            };
        }
    };
};
function $973e4da43f2a375d$var$getCrossAxis(axis) {
    return axis === "x" ? "y" : "x";
}
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const $973e4da43f2a375d$export$fba63a578e423eb = function(options) {
    if (options === void 0) options = {};
    return {
        name: "shift",
        options: options,
        async fn (state) {
            const { x: x, y: y, placement: placement } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter: limiter = {
                fn: (_ref)=>{
                    let { x: x, y: y } = _ref;
                    return {
                        x: x,
                        y: y
                    };
                }
            }, ...detectOverflowOptions } = $973e4da43f2a375d$var$evaluate(options, state);
            const coords = {
                x: x,
                y: y
            };
            const overflow = await $973e4da43f2a375d$export$37b6bde19b108ecc(state, detectOverflowOptions);
            const mainAxis = $973e4da43f2a375d$var$getMainAxisFromPlacement($973e4da43f2a375d$var$getSide(placement));
            const crossAxis = $973e4da43f2a375d$var$getCrossAxis(mainAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === "y" ? "top" : "left";
                const maxSide = mainAxis === "y" ? "bottom" : "right";
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = $973e4da43f2a375d$var$within(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === "y" ? "top" : "left";
                const maxSide = crossAxis === "y" ? "bottom" : "right";
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = $973e4da43f2a375d$var$within(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const $973e4da43f2a375d$export$7bf07e38f3dc4b69 = function(options) {
    if (options === void 0) options = {};
    return {
        options: options,
        fn (state) {
            const { x: x, y: y, placement: placement, rects: rects, middlewareData: middlewareData } = state;
            const { offset: offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = $973e4da43f2a375d$var$evaluate(options, state);
            const coords = {
                x: x,
                y: y
            };
            const mainAxis = $973e4da43f2a375d$var$getMainAxisFromPlacement(placement);
            const crossAxis = $973e4da43f2a375d$var$getCrossAxis(mainAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = $973e4da43f2a375d$var$evaluate(offset, state);
            const computedOffset = typeof rawOffset === "number" ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === "y" ? "height" : "width";
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
                else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === "y" ? "width" : "height";
                const isOriginSide = [
                    "top",
                    "left"
                ].includes($973e4da43f2a375d$var$getSide(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) crossAxisCoord = limitMin;
                else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const $973e4da43f2a375d$export$346677f925de839c = function(options) {
    if (options === void 0) options = {};
    return {
        name: "size",
        options: options,
        async fn (state) {
            const { placement: placement, rects: rects, platform: platform, elements: elements } = state;
            const { apply: apply = ()=>{}, ...detectOverflowOptions } = $973e4da43f2a375d$var$evaluate(options, state);
            const overflow = await $973e4da43f2a375d$export$37b6bde19b108ecc(state, detectOverflowOptions);
            const side = $973e4da43f2a375d$var$getSide(placement);
            const alignment = $973e4da43f2a375d$var$getAlignment(placement);
            const axis = $973e4da43f2a375d$var$getMainAxisFromPlacement(placement);
            const isXAxis = axis === "x";
            const { width: width, height: height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === "top" || side === "bottom") {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
            } else {
                widthSide = side;
                heightSide = alignment === "end" ? "top" : "bottom";
            }
            const overflowAvailableHeight = height - overflow[heightSide];
            const overflowAvailableWidth = width - overflow[widthSide];
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if (isXAxis) {
                const maximumClippingWidth = width - overflow.left - overflow.right;
                availableWidth = alignment || noShift ? $973e4da43f2a375d$var$min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
            } else {
                const maximumClippingHeight = height - overflow.top - overflow.bottom;
                availableHeight = alignment || noShift ? $973e4da43f2a375d$var$min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
            }
            if (noShift && !alignment) {
                const xMin = $973e4da43f2a375d$var$max(overflow.left, 0);
                const xMax = $973e4da43f2a375d$var$max(overflow.right, 0);
                const yMin = $973e4da43f2a375d$var$max(overflow.top, 0);
                const yMax = $973e4da43f2a375d$var$max(overflow.bottom, 0);
                if (isXAxis) availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : $973e4da43f2a375d$var$max(overflow.left, overflow.right));
                else availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : $973e4da43f2a375d$var$max(overflow.top, overflow.bottom));
            }
            await apply({
                ...state,
                availableWidth: availableWidth,
                availableHeight: availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) return {
                reset: {
                    rects: true
                }
            };
            return {};
        }
    };
};

});


parcelRequire.register("jLbqB", function(module, exports) {

$parcel$export(module.exports, "default", () => $e62b4578a0a2b358$export$2e2bcd8739ae039);

var $acw62 = parcelRequire("acw62");
var $e62b4578a0a2b358$var$index = (0, $acw62.useLayoutEffect);
var $e62b4578a0a2b358$export$2e2bcd8739ae039 = $e62b4578a0a2b358$var$index;

});



parcelRequire.register("dwyob", function(module, exports) {

$parcel$export(module.exports, "u", () => $9d88f0746ba78f85$export$3b14a55fb2447963);

var $d49SP = parcelRequire("d49SP");

var $eUqlC = parcelRequire("eUqlC");

var $9X7IJ = parcelRequire("9X7IJ");

var $acw62 = parcelRequire("acw62");
var $9d88f0746ba78f85$var$_excluded = [
    "defaultInputValue",
    "defaultMenuIsOpen",
    "defaultValue",
    "inputValue",
    "menuIsOpen",
    "onChange",
    "onInputChange",
    "onMenuClose",
    "onMenuOpen",
    "value"
];
function $9d88f0746ba78f85$export$3b14a55fb2447963(_ref) {
    var _ref$defaultInputValu = _ref.defaultInputValue, defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu, _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen, defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe, _ref$defaultValue = _ref.defaultValue, defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue, propsInputValue = _ref.inputValue, propsMenuIsOpen = _ref.menuIsOpen, propsOnChange = _ref.onChange, propsOnInputChange = _ref.onInputChange, propsOnMenuClose = _ref.onMenuClose, propsOnMenuOpen = _ref.onMenuOpen, propsValue = _ref.value, restSelectProps = (0, $9X7IJ.default)(_ref, $9d88f0746ba78f85$var$_excluded);
    var _useState = (0, $acw62.useState)(propsInputValue !== undefined ? propsInputValue : defaultInputValue), _useState2 = (0, $eUqlC.default)(_useState, 2), stateInputValue = _useState2[0], setStateInputValue = _useState2[1];
    var _useState3 = (0, $acw62.useState)(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen), _useState4 = (0, $eUqlC.default)(_useState3, 2), stateMenuIsOpen = _useState4[0], setStateMenuIsOpen = _useState4[1];
    var _useState5 = (0, $acw62.useState)(propsValue !== undefined ? propsValue : defaultValue), _useState6 = (0, $eUqlC.default)(_useState5, 2), stateValue = _useState6[0], setStateValue = _useState6[1];
    var onChange = (0, $acw62.useCallback)(function(value, actionMeta) {
        if (typeof propsOnChange === "function") propsOnChange(value, actionMeta);
        setStateValue(value);
    }, [
        propsOnChange
    ]);
    var onInputChange = (0, $acw62.useCallback)(function(value, actionMeta) {
        var newValue;
        if (typeof propsOnInputChange === "function") newValue = propsOnInputChange(value, actionMeta);
        setStateInputValue(newValue !== undefined ? newValue : value);
    }, [
        propsOnInputChange
    ]);
    var onMenuOpen = (0, $acw62.useCallback)(function() {
        if (typeof propsOnMenuOpen === "function") propsOnMenuOpen();
        setStateMenuIsOpen(true);
    }, [
        propsOnMenuOpen
    ]);
    var onMenuClose = (0, $acw62.useCallback)(function() {
        if (typeof propsOnMenuClose === "function") propsOnMenuClose();
        setStateMenuIsOpen(false);
    }, [
        propsOnMenuClose
    ]);
    var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
    var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
    var value = propsValue !== undefined ? propsValue : stateValue;
    return (0, $d49SP.default)((0, $d49SP.default)({}, restSelectProps), {}, {
        inputValue: inputValue,
        menuIsOpen: menuIsOpen,
        onChange: onChange,
        onInputChange: onInputChange,
        onMenuClose: onMenuClose,
        onMenuOpen: onMenuOpen,
        value: value
    });
}

});

parcelRequire.register("cbdLd", function(module, exports) {

var $g5Zhu = parcelRequire("g5Zhu");
function $8de12fa6a893dcd1$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $8de12fa6a893dcd1$var$_objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $8de12fa6a893dcd1$var$ownKeys(Object(source), !0).forEach(function(key) {
            $g5Zhu(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $8de12fa6a893dcd1$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
module.exports = $8de12fa6a893dcd1$var$_objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

});

parcelRequire.register("9jKhT", function(module, exports) {

var $cGTaw = parcelRequire("cGTaw");

var $5HCVq = parcelRequire("5HCVq");

var $eN9hz = parcelRequire("eN9hz");
function $6c89cb228f797fa5$var$_createSuper(Derived) {
    var hasNativeReflectConstruct = $5HCVq();
    return function _createSuperInternal() {
        var Super = $cGTaw(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = $cGTaw(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return $eN9hz(this, result);
    };
}
module.exports = $6c89cb228f797fa5$var$_createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

});

parcelRequire.register("OlBzB", function(module, exports) {

$parcel$export(module.exports, "default", () => $09756def0598458d$export$2e2bcd8739ae039);

var $g5Zhu = parcelRequire("g5Zhu");

var $fMv3m = parcelRequire("fMv3m");

var $ltooA = parcelRequire("ltooA");

var $dnCk4 = parcelRequire("dnCk4");
function $09756def0598458d$var$ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function $09756def0598458d$var$_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? $09756def0598458d$var$ownKeys(Object(t), !0).forEach(function(r) {
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $09756def0598458d$var$ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
var $09756def0598458d$var$BORDER_WIDTH = 2;
var $09756def0598458d$var$ICON_PADDING = 2;
var $09756def0598458d$var$paddingExcludingBorder = (0, $fMv3m.gridSize)() - $09756def0598458d$var$BORDER_WIDTH;
function $09756def0598458d$export$2e2bcd8739ae039(validationState) {
    var isCompact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var appearance = arguments.length > 2 ? arguments[2] : undefined;
    return {
        container: function container(css, _ref) {
            var isDisabled = _ref.isDisabled;
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                fontFamily: "var(--ds-font-family-sans, ".concat((0, $fMv3m.fontFamily)(), ")"),
                // react-select disables pointer events when isDisabled is true.
                // We override this and make the inner container turn it off instead.
                pointerEvents: "all",
                cursor: isDisabled ? "not-allowed" : css.cursor
            });
        },
        input: function input(css) {
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                color: "var(--ds-text, hsl(0, 0%, 20%))"
            });
        },
        control: function control(css, _ref2) {
            var isFocused = _ref2.isFocused, isDisabled = _ref2.isDisabled;
            var borderColor = isFocused ? "var(--ds-border-focused, ".concat((0, $dnCk4.B100), ")") : "var(--ds-border-input, ".concat((0, $ltooA.getBooleanFF)("platform.design-system-team.border-checkbox_nyoiu") ? (0, $dnCk4.N100) : (0, $dnCk4.N20), ")");
            var backgroundColor = isFocused ? "var(--ds-background-input-pressed, ".concat((0, $dnCk4.N0), ")") : "var(--ds-background-input, ".concat((0, $dnCk4.N20), ")");
            var backgroundColorHover = isFocused ? "var(--ds-background-input-pressed, ".concat((0, $dnCk4.N0), ")") : "var(--ds-background-input-hovered, ".concat((0, $dnCk4.N30), ")");
            if (isDisabled) {
                backgroundColor = "var(--ds-background-disabled, ".concat((0, $dnCk4.N20), ")");
                borderColor = "var(--ds-background-disabled, ".concat((0, $dnCk4.N20), ")");
            }
            if (validationState === "error") borderColor = "var(--ds-border-danger, ".concat((0, $dnCk4.R400), ")");
            if (validationState === "success") borderColor = "var(--ds-border-success, ".concat((0, $dnCk4.G400), ")");
            var borderColorHover = isFocused ? "var(--ds-border-focused, ".concat((0, $dnCk4.B100), ")") : "var(--ds-border-input, ".concat((0, $ltooA.getBooleanFF)("platform.design-system-team.border-checkbox_nyoiu") ? (0, $dnCk4.N100) : (0, $dnCk4.N30), ")");
            if (validationState === "error") borderColorHover = "var(--ds-border-danger, ".concat((0, $dnCk4.R400), ")");
            if (validationState === "success") borderColorHover = "var(--ds-border-success, ".concat((0, $dnCk4.G400), ")");
            var transitionDuration = "200ms";
            if (appearance === "subtle") {
                borderColor = isFocused ? "var(--ds-border-focused, ".concat((0, $dnCk4.B100), ")") : "transparent";
                backgroundColor = isFocused ? "var(--ds-surface, ".concat((0, $dnCk4.N0), ")") : "transparent";
                backgroundColorHover = isFocused ? "var(--ds-background-input-pressed, ".concat((0, $dnCk4.N0), ")") : "var(--ds-background-input-hovered, ".concat((0, $dnCk4.N30), ")");
            }
            if (appearance === "none") {
                borderColor = "transparent";
                backgroundColor = "transparent";
                backgroundColorHover = "transparent";
                borderColorHover = "transparent";
            }
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                // Turn pointer events off when disabled - this makes it so hover etc don't work.
                pointerEvents: isDisabled ? "none" : undefined,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderStyle: "solid",
                borderRadius: "var(--ds-border-radius-100, 3px)",
                borderWidth: (0, $ltooA.getBooleanFF)("platform.design-system-team.border-checkbox_nyoiu") ? "var(--ds-border-width, 1px)" : "var(--ds-border-width-outline, 2px)",
                boxShadow: "none"
            }, (0, $ltooA.getBooleanFF)("platform.design-system-team.border-checkbox_nyoiu") && {
                "&:focus-within": {
                    boxShadow: "inset 0 0 0 ".concat("var(--ds-border-width, 1px)", " ", borderColor)
                }
            }), {}, {
                minHeight: isCompact ? (0, $fMv3m.gridSize)() * 4 : (0, $fMv3m.gridSize)() * 5,
                padding: 0,
                transition: "background-color ".concat(transitionDuration, " ease-in-out,\n        border-color ").concat(transitionDuration, " ease-in-out"),
                "::-webkit-scrollbar": {
                    height: (0, $fMv3m.gridSize)(),
                    width: (0, $fMv3m.gridSize)()
                },
                "::-webkit-scrollbar-corner": {
                    display: "none"
                },
                ":hover": {
                    "::-webkit-scrollbar-thumb": {
                        // scrollbars occur only if the user passes in a custom component with overflow: scroll
                        backgroundColor: "rgba(0,0,0,0.2)"
                    },
                    cursor: "pointer",
                    backgroundColor: backgroundColorHover,
                    borderColor: borderColorHover
                },
                "::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "rgba(0,0,0,0.4)"
                }
            });
        },
        valueContainer: function valueContainer(css) {
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                paddingLeft: $09756def0598458d$var$paddingExcludingBorder,
                paddingRight: $09756def0598458d$var$paddingExcludingBorder,
                paddingBottom: isCompact ? 0 : 2,
                paddingTop: isCompact ? 0 : 2
            });
        },
        clearIndicator: function clearIndicator(css) {
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                color: "var(--ds-text-subtlest, ".concat((0, $dnCk4.N70), ")"),
                paddingLeft: $09756def0598458d$var$ICON_PADDING,
                paddingRight: $09756def0598458d$var$ICON_PADDING,
                paddingBottom: isCompact ? 0 : 6,
                paddingTop: isCompact ? 0 : 6,
                ":hover": {
                    color: "var(--ds-text-subtle, ".concat((0, $dnCk4.N500), ")")
                }
            });
        },
        loadingIndicator: function loadingIndicator(css) {
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                paddingBottom: isCompact ? 0 : 6,
                paddingTop: isCompact ? 0 : 6
            });
        },
        dropdownIndicator: function dropdownIndicator(css, _ref3) {
            var isDisabled = _ref3.isDisabled;
            var color = "var(--ds-text-subtle, ".concat((0, $dnCk4.N500), ")");
            if (isDisabled) color = "var(--ds-text-disabled, ".concat((0, $dnCk4.N70), ")");
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                color: color,
                paddingLeft: $09756def0598458d$var$ICON_PADDING,
                paddingRight: $09756def0598458d$var$ICON_PADDING,
                paddingBottom: isCompact ? 0 : 6,
                paddingTop: isCompact ? 0 : 6,
                ":hover": {
                    color: "var(--ds-text-subtle, ".concat((0, $dnCk4.N200), ")")
                }
            });
        },
        indicatorsContainer: function indicatorsContainer(css) {
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                paddingRight: $09756def0598458d$var$paddingExcludingBorder - $09756def0598458d$var$ICON_PADDING
            });
        },
        option: function option(css, _ref4) {
            var isFocused = _ref4.isFocused, isSelected = _ref4.isSelected, isDisabled = _ref4.isDisabled;
            var color = "var(--ds-text, ".concat((0, $dnCk4.N800), ")");
            if (isDisabled) color = "var(--ds-text-disabled, ".concat((0, $dnCk4.N70), ")");
            else if (isSelected) color = "var(--ds-text-selected, ".concat((0, $dnCk4.B400), ")");
            var boxShadow;
            var backgroundColor;
            if (isDisabled) backgroundColor = undefined;
            else if (isSelected && isFocused) backgroundColor = "var(--ds-background-selected-hovered, ".concat((0, $dnCk4.B50), ")");
            else if (isSelected) backgroundColor = "var(--ds-background-selected, ".concat((0, $dnCk4.B50), ")");
            else if (isFocused) backgroundColor = "var(--ds-background-neutral-subtle-hovered, ".concat((0, $dnCk4.N20), ")");
            if (!isDisabled && (isFocused || isSelected)) boxShadow = "inset 2px 0px 0px ".concat("var(--ds-border-selected, ".concat((0, $dnCk4.B400), ")"));
            var cursor = isDisabled ? "not-allowed" : css.cursor;
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                padding: "6px 12px",
                backgroundColor: backgroundColor,
                color: color,
                cursor: cursor,
                boxShadow: boxShadow,
                ":active": {
                    backgroundColor: !isDisabled ? isSelected ? "var(--ds-background-selected-pressed, ".concat((0, $dnCk4.N20), ")") : "var(--ds-background-neutral-subtle-pressed, ".concat((0, $dnCk4.N30), ")") : undefined
                },
                "@media screen and (-ms-high-contrast: active)": {
                    borderLeft: !isDisabled && (isFocused || isSelected) ? "2px solid transparent" : ""
                }
            });
        },
        placeholder: function placeholder(css, _ref5) {
            var isDisabled = _ref5.isDisabled;
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                color: isDisabled ? "var(--ds-text-disabled, ".concat((0, $dnCk4.N300), ")") : "var(--ds-text-subtlest, ".concat((0, $dnCk4.N200), ")")
            });
        },
        singleValue: function singleValue(css, _ref6) {
            var isDisabled = _ref6.isDisabled;
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                color: isDisabled ? "var(--ds-text-disabled, ".concat((0, $dnCk4.N70), ")") : "var(--ds-text, ".concat((0, $dnCk4.N800), ")"),
                lineHeight: "var(--ds-font-lineHeight-100, 16px)" // 16px
            });
        },
        menu: function menu(css) {
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                backgroundColor: "var(--ds-surface-overlay, white)",
                boxShadow: "var(--ds-shadow-overlay, 0 0 0 1px hsl(0deg 0% 0% / 10%), 0 4px 11px hsl(0deg 0% 0% / 10%))"
            });
        },
        menuList: function menuList(css) {
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                paddingTop: "var(--ds-space-100, 8px)",
                paddingBottom: "var(--ds-space-100, 8px)"
            });
        },
        multiValue: function multiValue(css, _ref7) {
            var isDisabled = _ref7.isDisabled, isFocused = _ref7.isFocused;
            var backgroundColor;
            var color;
            if (isDisabled) {
                // Use the basic neutral background so it is slightly separate from the
                // field's background
                backgroundColor = "var(--ds-background-neutral, ".concat((0, $dnCk4.N40), ")");
                color = "var(--ds-text-disabled, ".concat((0, $dnCk4.N70), ")");
            } else if (isFocused) {
                backgroundColor = "var(--ds-background-selected, ".concat((0, $dnCk4.N40), ")");
                color = "var(--ds-text-selected, hsl(0, 0%, 20%))";
            } else {
                backgroundColor = "var(--ds-background-neutral, ".concat((0, $dnCk4.N40), ")");
                color = "var(--ds-text, hsl(0, 0%, 20%))";
            }
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                borderRadius: "var(--ds-border-radius-050, 2px)",
                backgroundColor: backgroundColor,
                boxShadow: isFocused ? "0 0 0 2px ".concat("var(--ds-surface, transparent)", ", 0 0 0 4px ", "var(--ds-border-focused, transparent)") : "none",
                maxWidth: "100%",
                "@media screen and (-ms-high-contrast: active)": {
                    border: isFocused ? "1px solid transparent" : "none"
                },
                color: color
            });
        },
        multiValueLabel: function multiValueLabel(css, _ref8) {
            var isDisabled = _ref8.isDisabled;
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                padding: "var(--ds-space-025, 2px)",
                color: isDisabled ? "var(--ds-text-disabled, ".concat((0, $dnCk4.N70), ")") : "inherit",
                paddingRight: "var(--ds-space-025, 2px)"
            });
        },
        multiValueRemove: function multiValueRemove(css, _ref9) {
            var isFocused = _ref9.isFocused;
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                backgroundColor: isFocused ? "var(--ds-UNSAFE-transparent, ".concat((0, $dnCk4.R75), ")") : undefined,
                fill: isFocused ? "var(--ds-text-selected, #000)" : "var(--ds-text, #000)",
                paddingLeft: "var(--ds-space-025, 2px)",
                paddingRight: "var(--ds-space-025, 2px)",
                borderRadius: "0px 2px 2px 0px",
                // DSP-6470 we should style like Tag once we have the :has selector
                ":hover": {
                    backgroundColor: "var(--ds-background-danger-hovered, ".concat((0, $dnCk4.R75), ")"),
                    fill: "var(--ds-text-danger, #000)"
                },
                ":active": {
                    backgroundColor: "var(--ds-background-danger-pressed, ".concat((0, $dnCk4.R75), ")"),
                    fill: "var(--ds-text-danger, #000)"
                }
            });
        },
        groupHeading: function groupHeading(css) {
            return $09756def0598458d$var$_objectSpread($09756def0598458d$var$_objectSpread({}, css), {}, {
                color: "var(--ds-text-subtle, ".concat((0, $dnCk4.N200), ")")
            });
        }
    };
}

});

parcelRequire.register("a3QyA", function(module, exports) {

$parcel$export(module.exports, "default", () => $7532f3e29d96fa2a$export$2e2bcd8739ae039);

var $dwyob = parcelRequire("dwyob");

var $8nd05 = parcelRequire("8nd05");

var $acw62 = parcelRequire("acw62");

var $am0Pt = parcelRequire("am0Pt");

var $1my5K = parcelRequire("1my5K");

var $lDTld = parcelRequire("lDTld");

var $cQEWp = parcelRequire("cQEWp");
parcelRequire("cbdLd");
parcelRequire("02Ztr");
parcelRequire("gZU1N");
parcelRequire("fu0YK");
parcelRequire("lR7jo");
parcelRequire("f8wIT");
parcelRequire("9jKhT");
parcelRequire("fUHKi");

parcelRequire("41YNz");
parcelRequire("gS6QF");
parcelRequire("g5Zhu");
parcelRequire("1u0KT");

parcelRequire("jLbqB");
var $7532f3e29d96fa2a$var$StateManagedSelect = /*#__PURE__*/ (0, $acw62.forwardRef)(function(props, ref) {
    var baseSelectProps = (0, $dwyob.u)(props);
    return /*#__PURE__*/ $acw62.createElement((0, $am0Pt.S), (0, $8nd05.default)({
        ref: ref
    }, baseSelectProps));
});
var $7532f3e29d96fa2a$export$2e2bcd8739ae039 = $7532f3e29d96fa2a$var$StateManagedSelect;
var $7532f3e29d96fa2a$export$a7deb1594c5ce10e = function(_ref) {
    var nonce = _ref.nonce, children = _ref.children, cacheKey = _ref.cacheKey;
    var emotionCache = (0, $acw62.useMemo)(function() {
        return (0, $lDTld.default)({
            key: cacheKey,
            nonce: nonce
        });
    }, [
        cacheKey,
        nonce
    ]);
    return /*#__PURE__*/ $acw62.createElement((0, $1my5K.C), {
        value: emotionCache
    }, children);
};

});


//# sourceMappingURL=modal.876722a8.js.map
