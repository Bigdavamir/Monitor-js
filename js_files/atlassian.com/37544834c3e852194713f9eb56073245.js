function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
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
parcelRequire.register("bLn82", function(module, exports) {

$parcel$export(module.exports, "default", () => $8906065b1dfcdfc3$export$2e2bcd8739ae039);

var $fu0YK = parcelRequire("fu0YK");

var $lR7jo = parcelRequire("lR7jo");

var $6zC7B = parcelRequire("6zC7B");

var $f8wIT = parcelRequire("f8wIT");

var $eN9hz = parcelRequire("eN9hz");

var $cGTaw = parcelRequire("cGTaw");

var $g5Zhu = parcelRequire("g5Zhu");

var $gS6QF = parcelRequire("gS6QF");

var $acw62 = parcelRequire("acw62");

var $8zogs = parcelRequire("8zogs");

var $1u0KT = parcelRequire("1u0KT");

var $ilv0D = parcelRequire("ilv0D");

var $13zFV = parcelRequire("13zFV");

var $8QnbZ = parcelRequire("8QnbZ");

var $jZ4Cm = parcelRequire("jZ4Cm");

var $fMv3m = parcelRequire("fMv3m");

var $dnCk4 = parcelRequire("dnCk4");

var $7eFcd = parcelRequire("7eFcd");

var $akWxV = parcelRequire("akWxV");

var $hKlYK = parcelRequire("hKlYK");

var $lV93V = parcelRequire("lV93V");
var $8906065b1dfcdfc3$var$_templateObject;
function $8906065b1dfcdfc3$var$_createSuper(Derived) {
    var hasNativeReflectConstruct = $8906065b1dfcdfc3$var$_isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, (/*@__PURE__*/$parcel$interopDefault($eN9hz)))(this, result);
    };
}
function $8906065b1dfcdfc3$var$_isNativeReflectConstruct() {
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
var $8906065b1dfcdfc3$var$PopupWithListeners = (0, $7eFcd.default)((0, $ilv0D.default));
var $8906065b1dfcdfc3$var$popupContentWrapper = (0, $8zogs.css)($8906065b1dfcdfc3$var$_templateObject || ($8906065b1dfcdfc3$var$_templateObject = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  padding: ",
    ";\n  border-radius: ",
    "px;\n  box-shadow: ",
    ";\n  background-color: ",
    ";\n"
])), "var(--ds-space-025, 2px)", (0, $fMv3m.borderRadius)(), "var(--ds-shadow-overlay, ".concat("0 4px 8px -2px ".concat((0, $dnCk4.N60A), ", 0 0 1px ").concat((0, $dnCk4.N60A)), ")"), "var(--ds-surface-overlay, ".concat((0, $dnCk4.N0), ")"));
var $8906065b1dfcdfc3$var$DatePicker = /*#__PURE__*/ function(_React$Component) {
    (0, (/*@__PURE__*/$parcel$interopDefault($f8wIT)))(DatePicker, _React$Component);
    var _super = $8906065b1dfcdfc3$var$_createSuper(DatePicker);
    function DatePicker(props) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($fu0YK)))(this, DatePicker);
        _this = _super.call(this, props);
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleNewDate", function(date) {
            _this.props.onTextChanged(date);
            _this.setState({
                latestValidDate: date
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleKeyboardSubmitDate", function(date) {
            _this.props.onSelect(date, (0, $akWxV.INPUT_METHOD).KEYBOARD);
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleEmptySubmitDate", function() {
            _this.props.onDelete();
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleOnChange", function(_ref) {
            var day = _ref.day, month = _ref.month, year = _ref.year;
            var date = {
                day: day,
                month: month,
                year: year
            };
            _this.setState({
                latestValidDate: date
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "closeDatePickerWithAnalytics", function() {
            _this.props.closeDatePickerWithAnalytics({
                date: _this.state.latestValidDate
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleRef", function(ref) {
            var elm = ref && (0, (/*@__PURE__*/$parcel$interopDefault($1u0KT))).findDOMNode(ref);
            if (elm) elm.focus();
        });
        var timestamp = props.element.getAttribute("timestamp");
        if (timestamp) {
            // Warning: The 'Date' return type of timestampToUTCDate() is not a JS date, it's more similar
            // to the DateType type
            var _timestampToUTCDate = (0, $13zFV.timestampToUTCDate)(timestamp), day = _timestampToUTCDate.day, month = _timestampToUTCDate.month, year = _timestampToUTCDate.year;
            var _date = {
                day: day,
                month: month,
                year: year
            };
            _this.state = {
                selected: [
                    (0, $13zFV.timestampToIsoFormat)(timestamp)
                ],
                date: _date,
                latestValidDate: _date
            };
        }
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($lR7jo)))(DatePicker, [
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, element = _this$props.element, _onSelect = _this$props.onSelect, mountTo = _this$props.mountTo, boundariesElement = _this$props.boundariesElement, scrollableElement = _this$props.scrollableElement, intl = _this$props.intl, dispatchAnalyticsEvent = _this$props.dispatchAnalyticsEvent, isNew = _this$props.isNew, autoFocus = _this$props.autoFocus, weekStartDay = _this$props.weekStartDay;
                var timestamp = element.getAttribute("timestamp");
                if (this.state === null) // Without this, you can blow up the page by slowing down cpu, opening date, typing after date
                // then clicking on date lozenge and typing quickly before it opens
                return null;
                var _this$state = this.state, date = _this$state.date, selected = _this$state.selected, latestValidDate = _this$state.latestValidDate;
                var day = latestValidDate.day, month = latestValidDate.month, year = latestValidDate.year;
                if (!timestamp) return null;
                return (0, $8zogs.jsx)($8906065b1dfcdfc3$var$PopupWithListeners, {
                    target: element,
                    offset: [
                        0,
                        8
                    ],
                    fitHeight: 327,
                    fitWidth: 340,
                    handleClickOutside: this.closeDatePickerWithAnalytics,
                    handleEscapeKeydown: this.closeDatePickerWithAnalytics,
                    zIndex: (0, $8QnbZ.akEditorFloatingDialogZIndex),
                    mountTo: mountTo,
                    boundariesElement: boundariesElement,
                    scrollableElement: scrollableElement
                }, (0, $8zogs.jsx)("div", {
                    css: $8906065b1dfcdfc3$var$popupContentWrapper
                }, (0, $8zogs.jsx)((0, $lV93V.default), {
                    date: date,
                    onNewDate: this.handleNewDate,
                    onSubmitDate: this.handleKeyboardSubmitDate,
                    onEmptySubmit: this.handleEmptySubmitDate,
                    locale: intl.locale,
                    dispatchAnalyticsEvent: dispatchAnalyticsEvent,
                    autoFocus: autoFocus,
                    autoSelectAll: isNew
                }), (0, $8zogs.jsx)((0, $jZ4Cm.default), {
                    onChange: this.handleOnChange,
                    onSelect: function onSelect(date) {
                        return _onSelect(date, (0, $akWxV.INPUT_METHOD).PICKER);
                    },
                    day: day,
                    month: month,
                    year: year,
                    selected: selected,
                    ref: this.handleRef,
                    weekStartDay: weekStartDay,
                    testId: "datepicker"
                })));
            }
        }
    ]);
    return DatePicker;
}((0, (/*@__PURE__*/$parcel$interopDefault($acw62))).Component);
var $8906065b1dfcdfc3$export$2e2bcd8739ae039 = (0, $hKlYK.default)($8906065b1dfcdfc3$var$DatePicker);

});
parcelRequire.register("lV93V", function(module, exports) {

$parcel$export(module.exports, "default", () => $ff55f3680cfba519$export$2e2bcd8739ae039);

var $fu0YK = parcelRequire("fu0YK");

var $lR7jo = parcelRequire("lR7jo");

var $6zC7B = parcelRequire("6zC7B");

var $f8wIT = parcelRequire("f8wIT");

var $eN9hz = parcelRequire("eN9hz");

var $cGTaw = parcelRequire("cGTaw");

var $g5Zhu = parcelRequire("g5Zhu");

var $gS6QF = parcelRequire("gS6QF");

var $acw62 = parcelRequire("acw62");

var $8zogs = parcelRequire("8zogs");

var $6NnWa = parcelRequire("6NnWa");
var $hKlYK = parcelRequire("hKlYK");

var $61Cz5 = parcelRequire("61Cz5");

var $ayILm = parcelRequire("ayILm");

var $akWxV = parcelRequire("akWxV");

var $7J2L3 = parcelRequire("7J2L3");

var $hr2bc = parcelRequire("hr2bc");
var $ff55f3680cfba519$var$_templateObject;
function $ff55f3680cfba519$var$_createSuper(Derived) {
    var hasNativeReflectConstruct = $ff55f3680cfba519$var$_isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, (/*@__PURE__*/$parcel$interopDefault($eN9hz)))(this, result);
    };
}
function $ff55f3680cfba519$var$_isNativeReflectConstruct() {
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
var $ff55f3680cfba519$var$dateTextFieldWrapper = (0, $8zogs.css)($ff55f3680cfba519$var$_templateObject || ($ff55f3680cfba519$var$_templateObject = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  padding: 22px;\n  padding-bottom: 12px;\n"
])));
var $ff55f3680cfba519$var$messages = (0, $6NnWa.defineMessages)({
    invalidDateError: {
        id: "fabric.editor.invalidDateError",
        defaultMessage: "Enter a valid date",
        description: "Error message when the date typed in is invalid, requesting they inputs a new date"
    }
});
var $ff55f3680cfba519$var$DatePickerInput = /*#__PURE__*/ function(_React$Component) {
    (0, (/*@__PURE__*/$parcel$interopDefault($f8wIT)))(DatePickerInput, _React$Component);
    var _super = $ff55f3680cfba519$var$_createSuper(DatePickerInput);
    function DatePickerInput(props) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($fu0YK)))(this, DatePickerInput);
        _this = _super.call(this, props);
        /**
     * Focus the input textfield
     */ (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "focusInput", function() {
            if (!_this.inputRef) return;
            // Defer to prevent editor scrolling to top (See FS-3227, also ED-2992)
            _this.autofocusTimeout = setTimeout(function() {
                _this.inputRef.focus();
            });
        });
        /**
     * Select all the input text
     */ (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "selectInput", function() {
            if (!_this.inputRef) return;
            // Defer to prevent editor scrolling to top (See FS-3227, also ED-2992)
            _this.autoSelectAllTimeout = setTimeout(function() {
                _this.inputRef.select();
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleInputRef", function(ref) {
            var _this$props = _this.props, autoFocus = _this$props.autoFocus, autoSelectAll = _this$props.autoSelectAll;
            if (ref) _this.inputRef = ref;
            if (ref && autoFocus) _this.focusInput();
            if (autoSelectAll) _this.selectInput();
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleChange", function(evt) {
            var textFieldValue = evt.target.value;
            var _this$props2 = _this.props, locale = _this$props2.locale, dispatchAnalyticsEvent = _this$props2.dispatchAnalyticsEvent;
            var newDate = (0, $ayILm.parseDateType)(textFieldValue, locale);
            if (newDate !== undefined && newDate !== null) {
                _this.setState({
                    inputText: textFieldValue
                });
                _this.props.onNewDate(newDate);
                if (dispatchAnalyticsEvent) dispatchAnalyticsEvent({
                    eventType: (0, $akWxV.EVENT_TYPE).TRACK,
                    action: (0, $akWxV.ACTION).TYPING_FINISHED,
                    actionSubject: (0, $akWxV.ACTION_SUBJECT).DATE
                });
            } else // if invalid, just update state text (to rerender textfield)
            _this.setState({
                inputText: textFieldValue
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleKeyPress", function(event) {
            var _this$props3 = _this.props, locale = _this$props3.locale, dispatchAnalyticsEvent = _this$props3.dispatchAnalyticsEvent;
            var textFieldValue = event.target.value;
            // Fire event on every keypress (textfield not necessarily empty)
            if (dispatchAnalyticsEvent && event.key !== "Enter" && event.key !== "Backspace") dispatchAnalyticsEvent({
                eventType: (0, $akWxV.EVENT_TYPE).TRACK,
                action: (0, $akWxV.ACTION).TYPING_STARTED,
                actionSubject: (0, $akWxV.ACTION_SUBJECT).DATE
            });
            if (event.key !== "Enter") return;
            if (textFieldValue === "") {
                _this.props.onEmptySubmit();
                return;
            }
            var newDate = (0, $ayILm.parseDateType)(textFieldValue, locale);
            _this.props.onSubmitDate(newDate);
        });
        // arrow keys are only triggered by onKeyDown, not onKeyPress
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleKeyDown", function(event) {
            var dateString = event.target.value;
            var locale = _this.props.locale;
            var adjustment;
            if (event.key === "ArrowUp") adjustment = 1;
            else if (event.key === "ArrowDown") adjustment = -1;
            if (adjustment === undefined) return;
            var dispatchAnalyticsEvent = _this.props.dispatchAnalyticsEvent;
            var cursorPos = _this.inputRef.selectionStart;
            var activeSegment = (0, $61Cz5.findDateSegmentByPosition)(cursorPos, dateString, locale);
            if (activeSegment === undefined) return;
            var dateSegment;
            switch(activeSegment){
                case "day":
                    dateSegment = (0, $akWxV.ACTION_SUBJECT_ID).DATE_DAY;
                    break;
                case "month":
                    dateSegment = (0, $akWxV.ACTION_SUBJECT_ID).DATE_MONTH;
                    break;
                default:
                    dateSegment = (0, $akWxV.ACTION_SUBJECT_ID).DATE_YEAR;
            }
            if (dispatchAnalyticsEvent) dispatchAnalyticsEvent({
                eventType: (0, $akWxV.EVENT_TYPE).TRACK,
                action: adjustment > 0 ? (0, $akWxV.ACTION).INCREMENTED : (0, $akWxV.ACTION).DECREMENTED,
                actionSubject: (0, $akWxV.ACTION_SUBJECT).DATE_SEGMENT,
                attributes: {
                    dateSegment: dateSegment
                }
            });
            var oldDateType = (0, $ayILm.parseDateType)(dateString, locale);
            if (oldDateType === undefined || oldDateType === null) return;
            var newDateType = (0, $61Cz5.adjustDate)(oldDateType, activeSegment, adjustment);
            _this.setState({
                inputText: (0, $ayILm.formatDateType)(newDateType, locale)
            });
            _this.props.onNewDate(newDateType);
            _this.setInputSelectionPos = Math.min(cursorPos, dateString.length);
            event.preventDefault();
        });
        var date = props.date;
        _this.setInputSelectionPos = undefined;
        var inputText = (0, $ayILm.formatDateType)(date, _this.props.locale);
        _this.state = {
            inputText: inputText
        };
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($lR7jo)))(DatePickerInput, [
        {
            key: "render",
            value: function render() {
                var _this$props4 = this.props, locale = _this$props4.locale, formatMessage = _this$props4.intl.formatMessage;
                var inputText = this.state.inputText;
                var possiblyValid = (0, $61Cz5.isDatePossiblyValid)(inputText);
                var attemptedDateParse = (0, $ayILm.parseDateType)(inputText, locale);
                // Don't display an error for an empty input.
                var displayError = (attemptedDateParse === null || !possiblyValid) && inputText !== "";
                return (0, $8zogs.jsx)("div", {
                    css: $ff55f3680cfba519$var$dateTextFieldWrapper
                }, (0, $8zogs.jsx)((0, $7J2L3.default), {
                    name: "datetextfield",
                    value: inputText,
                    ref: this.handleInputRef,
                    onChange: this.handleChange,
                    onKeyPress: this.handleKeyPress,
                    onKeyDown: this.handleKeyDown,
                    spellCheck: false,
                    autoComplete: "off",
                    isInvalid: displayError
                }), displayError && (0, $8zogs.jsx)((0, $hr2bc.ErrorMessage), null, formatMessage($ff55f3680cfba519$var$messages.invalidDateError)));
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                var setInputSelectionPos = this.setInputSelectionPos;
                if (setInputSelectionPos !== undefined) {
                    this.inputRef.setSelectionRange(setInputSelectionPos, setInputSelectionPos);
                    this.setInputSelectionPos = undefined;
                }
                if (this.inputRef && this.props.autoFocus) // TODO: Check if input already has focus
                this.focusInput();
            // Don't select all text here - would seleect text on each keystroke
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.autofocusTimeout !== undefined) clearTimeout(this.autofocusTimeout);
                if (this.autoSelectAllTimeout !== undefined) clearTimeout(this.autoSelectAllTimeout);
            }
        }
    ]);
    return DatePickerInput;
}((0, (/*@__PURE__*/$parcel$interopDefault($acw62))).Component);
var $ff55f3680cfba519$export$2e2bcd8739ae039 = (0, $hKlYK.default)($ff55f3680cfba519$var$DatePickerInput);

});
parcelRequire.register("hr2bc", function(module, exports) {

$parcel$export(module.exports, "HelperMessage", () => $cb16a61bc9021082$export$8fbe3c7d0ed2c683);
$parcel$export(module.exports, "ErrorMessage", () => $cb16a61bc9021082$export$915e9e7bd4f0f96d);
/** @jsx jsx */ 
var $8zogs = parcelRequire("8zogs");

var $7GNzJ = parcelRequire("7GNzJ");

var $29iCp = parcelRequire("29iCp");

var $dnCk4 = parcelRequire("dnCk4");

var $gaiZC = parcelRequire("gaiZC");

var $fMv3m = parcelRequire("fMv3m");

var $ttzuU = parcelRequire("ttzuU");

var $7Ommd = parcelRequire("7Ommd");
/**
 * API for the internal `<Message />` component. This is not public API.
 */ /**
 * Public API of the various message components.
 */ var $cb16a61bc9021082$var$fontFamily = (0, $fMv3m.fontFamily)();
// eslint-disable-next-line @atlaskit/design-system/consistent-css-prop-usage
var $cb16a61bc9021082$var$lightH200Styles = (0, $8zogs.css)((0, $ttzuU.h200)({
    theme: {
        mode: "light"
    }
}));
// eslint-disable-next-line @atlaskit/design-system/consistent-css-prop-usage
var $cb16a61bc9021082$var$darkH200Styles = (0, $8zogs.css)((0, $ttzuU.h200)({
    theme: {
        mode: "dark"
    }
}));
var $cb16a61bc9021082$var$messageStyles = (0, $8zogs.css)({
    display: "flex",
    marginTop: "var(--ds-space-050, 4px)",
    justifyContent: "baseline",
    fontFamily: "".concat($cb16a61bc9021082$var$fontFamily),
    fontWeight: "normal"
});
var $cb16a61bc9021082$var$messageAppearanceStyles = {
    default: (0, $8zogs.css)({
        color: "var(--ds-text-subtlest, ".concat((0, $dnCk4.N200), ")")
    }),
    error: (0, $8zogs.css)({
        color: "var(--ds-text-danger, #AE2A19)"
    }),
    valid: (0, $8zogs.css)({
        color: "var(--ds-text-success, #216E4E)"
    })
};
var $cb16a61bc9021082$var$iconWrapperStyles = (0, $8zogs.css)({
    display: "flex"
});
var $cb16a61bc9021082$var$IconWrapper = function IconWrapper(_ref) {
    var children = _ref.children;
    return (0, $8zogs.jsx)("span", {
        css: $cb16a61bc9021082$var$iconWrapperStyles
    }, children);
};
var $cb16a61bc9021082$var$messageIcons = {
    error: (0, $8zogs.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($29iCp))), {
        size: "small",
        label: "error"
    }),
    valid: (0, $8zogs.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($7GNzJ))), {
        size: "small",
        label: "success"
    })
};
var $cb16a61bc9021082$var$Message = function Message(_ref2) {
    var children = _ref2.children, _ref2$appearance = _ref2.appearance, appearance = _ref2$appearance === void 0 ? "default" : _ref2$appearance, fieldId = _ref2.fieldId, testId = _ref2.testId;
    var _useGlobalTheme = (0, $gaiZC.useGlobalTheme)(), mode = _useGlobalTheme.mode;
    var icon = $cb16a61bc9021082$var$messageIcons[appearance];
    /**
   * The wrapping span is necessary to preserve spaces between children.
   * Otherwise the flex layout of the message will remove any whitespace
   * between children.
   *
   * If the child is just a string, this is not required and we can use one
   * less DOM element.
   */ var content = typeof children === "string" ? children : (0, $8zogs.jsx)("span", null, children);
    return (0, $8zogs.jsx)("div", {
        css: [
            mode === "light" ? $cb16a61bc9021082$var$lightH200Styles : $cb16a61bc9021082$var$darkH200Styles,
            $cb16a61bc9021082$var$messageStyles,
            $cb16a61bc9021082$var$messageAppearanceStyles[appearance]
        ],
        "data-testid": testId,
        id: fieldId,
        role: "alert"
    }, icon && (0, $8zogs.jsx)($cb16a61bc9021082$var$IconWrapper, null, icon), content);
};
var $cb16a61bc9021082$export$8fbe3c7d0ed2c683 = function HelperMessage(_ref3) {
    var children = _ref3.children, testId = _ref3.testId;
    return (0, $8zogs.jsx)((0, $7Ommd.FieldId).Consumer, null, function(fieldId) {
        return (0, $8zogs.jsx)($cb16a61bc9021082$var$Message, {
            fieldId: fieldId ? "".concat(fieldId, "-helper") : undefined,
            testId: testId
        }, children);
    });
};
var $cb16a61bc9021082$export$915e9e7bd4f0f96d = function ErrorMessage(_ref4) {
    var children = _ref4.children, testId = _ref4.testId;
    return (0, $8zogs.jsx)((0, $7Ommd.FieldId).Consumer, null, function(fieldId) {
        return (0, $8zogs.jsx)($cb16a61bc9021082$var$Message, {
            appearance: "error",
            fieldId: fieldId ? "".concat(fieldId, "-error") : undefined,
            testId: testId
        }, children);
    });
};
var $cb16a61bc9021082$export$5505afb209a532c8 = function ValidMessage(_ref5) {
    var children = _ref5.children, testId = _ref5.testId;
    return (0, $8zogs.jsx)((0, $7Ommd.FieldId).Consumer, null, function(fieldId) {
        return (0, $8zogs.jsx)($cb16a61bc9021082$var$Message, {
            appearance: "valid",
            fieldId: fieldId ? "".concat(fieldId, "-valid") : undefined,
            testId: testId
        }, children);
    });
};

});



parcelRequire.register("aMFpo", function(module, exports) {

$parcel$export(module.exports, "default", () => $7d9e81ef639116d5$export$2e2bcd8739ae039);
/** @jsx jsx */ 
var $8zogs = parcelRequire("8zogs");

var $5C8dD = parcelRequire("5C8dD");

var $hPtJY = parcelRequire("hPtJY");
// https://atlassian.design/foundations/typography
var $7d9e81ef639116d5$var$levelMap = {
    h900: "h1",
    h800: "h1",
    h700: "h2",
    h600: "h3",
    h500: "h4",
    h400: "h5",
    h300: "h6",
    // NB: These two levels are not covered at all by the existing @atlaskit/css-reset
    h200: "div",
    h100: "div"
};
var $7d9e81ef639116d5$var$headingResetStyles = (0, $8zogs.css)({
    marginTop: "var(--ds-space-0, 0px)",
    marginBottom: "var(--ds-space-0, 0px)",
    color: "var(--ds-text, #172B4D)"
});
var $7d9e81ef639116d5$var$h900Styles = (0, $8zogs.css)({
    fontSize: "var(--ds-font-size-600, 35px)",
    fontWeight: "var(--ds-font-weight-medium, 500)",
    letterSpacing: "-0.01em",
    lineHeight: "var(--ds-font-lineHeight-600, 40px)"
});
var $7d9e81ef639116d5$var$h800Styles = (0, $8zogs.css)({
    fontSize: "var(--ds-font-size-500, 29px)",
    fontWeight: "var(--ds-font-weight-semibold, 600)",
    letterSpacing: "-0.01em",
    lineHeight: "var(--ds-font-lineHeight-500, 32px)"
});
var $7d9e81ef639116d5$var$h700Styles = (0, $8zogs.css)({
    fontSize: "var(--ds-font-size-400, 24px)",
    fontWeight: "var(--ds-font-weight-medium, 500)",
    letterSpacing: "-0.01em",
    lineHeight: "var(--ds-font-lineHeight-400, 28px)"
});
var $7d9e81ef639116d5$var$h600Styles = (0, $8zogs.css)({
    fontSize: "var(--ds-font-size-300, 20px)",
    fontWeight: "var(--ds-font-weight-medium, 500)",
    letterSpacing: "-0.008em",
    lineHeight: "var(--ds-font-lineHeight-300, 24px)"
});
var $7d9e81ef639116d5$var$h500Styles = (0, $8zogs.css)({
    fontSize: "var(--ds-font-size-200, 16px)",
    fontWeight: "var(--ds-font-weight-semibold, 600)",
    letterSpacing: "-0.006em",
    lineHeight: "var(--ds-font-lineHeight-200, 20px)"
});
var $7d9e81ef639116d5$var$h400Styles = (0, $8zogs.css)({
    fontSize: "var(--ds-font-size-100, 14px)",
    fontWeight: "var(--ds-font-weight-semibold, 600)",
    letterSpacing: "-0.003em",
    lineHeight: "var(--ds-font-lineHeight-100, 16px)"
});
var $7d9e81ef639116d5$var$h300Styles = (0, $8zogs.css)({
    fontSize: "var(--ds-font-size-075, 12px)",
    fontWeight: "var(--ds-font-weight-semibold, 600)",
    letterSpacing: 0,
    lineHeight: "var(--ds-font-lineHeight-100, 16px)",
    textTransform: "uppercase"
});
var $7d9e81ef639116d5$var$h200Styles = (0, $8zogs.css)({
    fontSize: "var(--ds-font-size-075, 12px)",
    fontWeight: "var(--ds-font-weight-semibold, 600)",
    letterSpacing: 0,
    lineHeight: "var(--ds-font-lineHeight-100, 16px)"
});
var $7d9e81ef639116d5$var$h100Styles = (0, $8zogs.css)({
    fontSize: "var(--ds-font-size-050, 11px)",
    fontWeight: "var(--ds-font-weight-bold, 700)",
    letterSpacing: 0,
    lineHeight: "var(--ds-font-lineHeight-100, 16px)"
});
var $7d9e81ef639116d5$var$inverseStyles = (0, $8zogs.css)({
    color: "var(--ds-text-inverse, #FFF)"
});
var $7d9e81ef639116d5$var$subtlestStyles = (0, $8zogs.css)({
    color: "var(--ds-text-subtlest, #6B778C)"
});
/**
 * __Heading__
 *
 * A heading is a typography component used to display text in different sizes and formats.
 *
 * @example
 *
 * ```jsx
 * import Heading from '@atlaskit/heading';
 *
 * const H100 = () => (
 *   <Heading level="h100">h100</Heading>
 * );
 * ```
 */ var $7d9e81ef639116d5$var$Heading = function Heading(_ref) {
    var children = _ref.children, level = _ref.level, id = _ref.id, testId = _ref.testId, as = _ref.as, _ref$color = _ref.color, color = _ref$color === void 0 ? "default" : _ref$color;
    typeof $hPtJY;
    var hLevel = (0, $5C8dD.useHeadingElement)();
    /**
   * Order here is important, we for now apply
   * 1. user choice
   * 2. inferred a11y level
   * 3. default final fallback
   */ var Markup = as || hLevel && "h".concat(hLevel) || $7d9e81ef639116d5$var$levelMap[level];
    var isSubtleHeading = level === "h200" || level === "h100";
    return (0, $8zogs.jsx)(Markup, {
        id: id,
        "data-testid": testId,
        css: [
            $7d9e81ef639116d5$var$headingResetStyles,
            // This can be refactored when @compiled supports style maps
            level === "h100" && $7d9e81ef639116d5$var$h100Styles,
            level === "h200" && $7d9e81ef639116d5$var$h200Styles,
            level === "h300" && $7d9e81ef639116d5$var$h300Styles,
            level === "h400" && $7d9e81ef639116d5$var$h400Styles,
            level === "h500" && $7d9e81ef639116d5$var$h500Styles,
            level === "h600" && $7d9e81ef639116d5$var$h600Styles,
            level === "h700" && $7d9e81ef639116d5$var$h700Styles,
            level === "h800" && $7d9e81ef639116d5$var$h800Styles,
            level === "h900" && $7d9e81ef639116d5$var$h900Styles,
            color === "inverse" && $7d9e81ef639116d5$var$inverseStyles,
            color === "default" && isSubtleHeading && $7d9e81ef639116d5$var$subtlestStyles
        ]
    }, children);
};
var $7d9e81ef639116d5$export$2e2bcd8739ae039 = $7d9e81ef639116d5$var$Heading;

});
parcelRequire.register("5C8dD", function(module, exports) {

$parcel$export(module.exports, "useHeadingElement", () => $4166e07202f48cb9$export$9e9567cdaababb98);

var $acw62 = parcelRequire("acw62");
var $4166e07202f48cb9$var$HeadingContext = /*#__PURE__*/ (0, $acw62.createContext)(undefined);
var $4166e07202f48cb9$export$9e9567cdaababb98 = function useHeadingElement() {
    return Math.min((0, $acw62.useContext)($4166e07202f48cb9$var$HeadingContext) || 0, 6);
};
/**
 * __Heading context__
 *
 * The HeadingContext
 *
 * @example
 * ```tsx
 * // Will correctly infer the heading level
 * <HeadingContext value={1}>
 *  <Heading>H1</Heading>
 *  <HeadingContext>
 *    <Heading>H2</Heading>
 *  </HeadingContext>
 * </HeadingContext>
 * ```
 */ var $4166e07202f48cb9$var$HeadingContextProvider = function HeadingContextProvider(_ref) {
    var children = _ref.children, value = _ref.value;
    var parentHeadingLevel = $4166e07202f48cb9$export$9e9567cdaababb98();
    var headingLevel = parentHeadingLevel + 1;
    return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement($4166e07202f48cb9$var$HeadingContext.Provider, {
        value: value || headingLevel
    }, children);
};
var $4166e07202f48cb9$export$2e2bcd8739ae039 = $4166e07202f48cb9$var$HeadingContextProvider;

});


parcelRequire.register("aRXfL", function(module, exports) {

$parcel$export(module.exports, "default", () => $7e9cd1185a5decf2$export$2e2bcd8739ae039);

var $fUHKi = parcelRequire("fUHKi");

var $acw62 = parcelRequire("acw62");

var $8zogs = parcelRequire("8zogs");

var $iCZ4r = parcelRequire("iCZ4r");

var $dUZ3q = parcelRequire("dUZ3q");
var $7e9cd1185a5decf2$var$flexGrowMap = {
    hug: (0, $iCZ4r.xcss)({
        flexGrow: 0
    }),
    fill: (0, $iCZ4r.xcss)({
        width: "100%",
        flexGrow: 1
    })
};
/**
 * __Stack__
 *
 * Stack is a primitive component based on flexbox that manages the block layout of direct children.
 *
 * @example
 * ```tsx
 *  <Stack>
 *    <Box padding="space.100" backgroundColor="neutral"></Box>
 *    <Box padding="space.100" backgroundColor="neutral"></Box>
 *  </Stack>
 * ```
 *
 */ var $7e9cd1185a5decf2$var$Stack = /*#__PURE__*/ (0, $acw62.memo)(/*#__PURE__*/ (0, $acw62.forwardRef)(function(_ref, ref) {
    var as = _ref.as, alignItems = _ref.alignInline, _ref$alignBlock = _ref.alignBlock, alignBlock = _ref$alignBlock === void 0 ? "stretch" : _ref$alignBlock, spread = _ref.spread, grow = _ref.grow, space = _ref.space, children = _ref.children, testId = _ref.testId, xcss = _ref.xcss;
    var justifyContent = spread || alignBlock;
    return (0, $8zogs.jsx)((0, $dUZ3q.default), {
        as: as,
        gap: space,
        direction: "column",
        alignItems: alignItems,
        justifyContent: justifyContent,
        xcss: grow ? [
            $7e9cd1185a5decf2$var$flexGrowMap[grow]
        ].concat((0, (/*@__PURE__*/$parcel$interopDefault($fUHKi)))(Array.isArray(xcss) ? xcss : [
            xcss
        ])) : // eslint-disable-next-line @atlaskit/design-system/consistent-css-prop-usage
        xcss,
        testId: testId,
        ref: ref
    }, children);
}));
$7e9cd1185a5decf2$var$Stack.displayName = "Stack";
var $7e9cd1185a5decf2$export$2e2bcd8739ae039 = $7e9cd1185a5decf2$var$Stack;

});

parcelRequire.register("7gGhC", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;

var $54aad3967c6c9221$var$_react = $54aad3967c6c9221$var$_interopRequireDefault((parcelRequire("acw62")));

var $cpJkH = parcelRequire("cpJkH");
function $54aad3967c6c9221$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $54aad3967c6c9221$var$ChevronRightLargeIcon = (props)=>/*#__PURE__*/ $54aad3967c6c9221$var$_react.default.createElement($cpJkH.Icon, Object.assign({
        dangerouslySetGlyph: `<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentColor" fill-rule="evenodd" d="M14.995 10.995a1 1 0 010 1.414l-4.593 4.593a.99.99 0 01-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 011.4-1.4l4.593 4.593z"/></svg>`
    }, props));
$54aad3967c6c9221$var$ChevronRightLargeIcon.displayName = "ChevronRightLargeIcon";
var $54aad3967c6c9221$var$_default = $54aad3967c6c9221$var$ChevronRightLargeIcon;
module.exports.default = $54aad3967c6c9221$var$_default;

});


//# sourceMappingURL=DatePicker.7c10f466.js.map
