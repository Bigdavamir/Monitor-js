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
parcelRequire.register("kQTTF", function(module, exports) {

$parcel$export(module.exports, "default", () => $f2e405ecec45b277$export$2e2bcd8739ae039);

var $3p9rK = parcelRequire("3p9rK");

var $g5Zhu = parcelRequire("g5Zhu");

var $gZU1N = parcelRequire("gZU1N");

var $acw62 = parcelRequire("acw62");

var $6K5jR = parcelRequire("6K5jR");
var $f2e405ecec45b277$var$_excluded = [
    "analyticsContext"
];
function $f2e405ecec45b277$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $f2e405ecec45b277$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $f2e405ecec45b277$var$ownKeys(Object(source), !0).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $f2e405ecec45b277$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var $f2e405ecec45b277$var$withAnalyticsContext = function withAnalyticsContext(defaultData) {
    return function(WrappedComponent) {
        var WithAnalyticsContext = /*#__PURE__*/ (0, $acw62.forwardRef)(function(_ref, ref) {
            var analyticsContext = _ref.analyticsContext, rest = (0, (/*@__PURE__*/$parcel$interopDefault($gZU1N)))(_ref, $f2e405ecec45b277$var$_excluded);
            var analyticsData = (0, $acw62.useMemo)(function() {
                return $f2e405ecec45b277$var$_objectSpread($f2e405ecec45b277$var$_objectSpread({}, defaultData), analyticsContext);
            }, [
                analyticsContext
            ]);
            return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement((0, $6K5jR.default), {
                data: analyticsData
            }, /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement(WrappedComponent, (0, (/*@__PURE__*/$parcel$interopDefault($3p9rK)))({}, rest, {
                ref: ref
            })));
        });
        // @ts-ignore
        WithAnalyticsContext.displayName = "WithAnalyticsContext(".concat(// @ts-ignore disneyName doesn't exist on type
        WrappedComponent.displayName || WrappedComponent.name, ")");
        return WithAnalyticsContext;
    };
};
var $f2e405ecec45b277$export$2e2bcd8739ae039 = $f2e405ecec45b277$var$withAnalyticsContext;

});

parcelRequire.register("gMRW6", function(module, exports) {

$parcel$export(module.exports, "default", () => $c38af7a75d53c72b$export$2e2bcd8739ae039);

var $02Ztr = parcelRequire("02Ztr");

var $gS6QF = parcelRequire("gS6QF");

var $acw62 = parcelRequire("acw62");

var $8zogs = parcelRequire("8zogs");

var $ilv0D = parcelRequire("ilv0D");
var $cGMdY = parcelRequire("cGMdY");

var $a0oRF = parcelRequire("a0oRF");
var $eGXiX = parcelRequire("eGXiX");

var $bpQ5d = parcelRequire("bpQ5d");

var $fFFBq = parcelRequire("fFFBq");

var $7tZKi = parcelRequire("7tZKi");

var $dnCk4 = parcelRequire("dnCk4");

var $isnw9 = parcelRequire("isnw9");

var $fMv3m = parcelRequire("fMv3m");

var $9x5Ry = parcelRequire("9x5Ry");

var $g9InS = parcelRequire("g9InS");

var $kQTTF = parcelRequire("kQTTF");
var $liddP = parcelRequire("liddP");

var $9LKoi = parcelRequire("9LKoi");

var $akWxV = parcelRequire("akWxV");

var $brDEX = parcelRequire("brDEX");
var $c38af7a75d53c72b$var$_templateObject, $c38af7a75d53c72b$var$_templateObject2, $c38af7a75d53c72b$var$_templateObject3, $c38af7a75d53c72b$var$_templateObject4;
// helps adjusts position of popup
var $c38af7a75d53c72b$var$colorPickerButtonWrapper = (0, $8zogs.css)($c38af7a75d53c72b$var$_templateObject || ($c38af7a75d53c72b$var$_templateObject = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  position: relative;\n"
])));
var $c38af7a75d53c72b$var$colorPickerExpandContainer = (0, $8zogs.css)($c38af7a75d53c72b$var$_templateObject2 || ($c38af7a75d53c72b$var$_templateObject2 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  margin: 0px ",
    ";\n"
])), "var(--ds-space-negative-050, -4px)");
// Control the size of color picker buttons and preview
// TODO: https://product-fabric.atlassian.net/browse/DSP-4134
/* eslint-disable @atlaskit/design-system/ensure-design-token-usage */ var $c38af7a75d53c72b$var$colorPickerWrapper = function colorPickerWrapper(theme) {
    return (0, $8zogs.css)($c38af7a75d53c72b$var$_templateObject3 || ($c38af7a75d53c72b$var$_templateObject3 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n  border-radius: ",
        "px;\n  background-color: ",
        ";\n  box-shadow: 0 4px 8px -2px ",
        ", 0 0 1px ",
        ";\n  padding: ",
        " 0px;\n"
    ])), (0, $fMv3m.borderRadius)(), (0, $isnw9.default)({
        light: "var(--ds-surface-overlay, ".concat((0, $dnCk4.N0), ")"),
        dark: "var(--ds-surface-overlay, ".concat((0, $dnCk4.DN50), ")")
    })(theme), (0, $dnCk4.N60A), (0, $dnCk4.N60A), "var(--ds-space-100, 8px)");
};
/* eslint-enable @atlaskit/design-system/ensure-design-token-usage */ var $c38af7a75d53c72b$var$ColorPaletteWithListeners = (0, $cGMdY.default)((0, $9x5Ry.default));
var $c38af7a75d53c72b$var$ColorPickerButton = function ColorPickerButton(props) {
    var buttonRef = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useRef(null);
    var _React$useState = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useState(false), _React$useState2 = (0, (/*@__PURE__*/$parcel$interopDefault($02Ztr)))(_React$useState, 2), isPopupOpen = _React$useState2[0], setIsPopupOpen = _React$useState2[1];
    var _React$useState3 = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useState(false), _React$useState4 = (0, (/*@__PURE__*/$parcel$interopDefault($02Ztr)))(_React$useState3, 2), isPopupPositioned = _React$useState4[0], setIsPopupPositioned = _React$useState4[1];
    var _React$useState5 = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useState(false), _React$useState6 = (0, (/*@__PURE__*/$parcel$interopDefault($02Ztr)))(_React$useState5, 2), isOpenedByKeyboard = _React$useState6[0], setIsOpenedByKeyboard = _React$useState6[1];
    var togglePopup = function togglePopup() {
        setIsPopupOpen(!isPopupOpen);
        if (!isPopupOpen) {
            setIsOpenedByKeyboard(false);
            setIsPopupPositioned(false);
        }
    };
    (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useEffect(function() {
        if (props.setDisableParentScroll) props.setDisableParentScroll(isPopupOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isPopupOpen
    ]);
    var focusButton = function focusButton() {
        var _buttonRef$current;
        (_buttonRef$current = buttonRef.current) === null || _buttonRef$current === void 0 || _buttonRef$current.focus();
    };
    var handleEsc = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useCallback(function() {
        setIsOpenedByKeyboard(false);
        setIsPopupPositioned(false);
        setIsPopupOpen(false);
        focusButton();
    }, []);
    var onPositionCalculated = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useCallback(function(position) {
        setIsPopupPositioned(true);
        return position;
    }, []);
    var onChange = props.onChange, createAnalyticsEvent = props.createAnalyticsEvent, colorPalette = props.colorPalette, placement = props.placement, skipFocusButtonAfterPick = props.skipFocusButtonAfterPick;
    var onColorSelected = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useCallback(function(color, label) {
        setIsOpenedByKeyboard(false);
        setIsPopupOpen(false);
        setIsPopupPositioned(false);
        if (onChange) {
            if (createAnalyticsEvent) {
                // fire analytics
                var payload = {
                    action: (0, $akWxV.ACTION).UPDATED,
                    actionSubject: (0, $akWxV.ACTION_SUBJECT).PICKER,
                    actionSubjectId: (0, $akWxV.ACTION_SUBJECT_ID).PICKER_COLOR,
                    attributes: {
                        color: color,
                        label: label,
                        placement: placement
                    },
                    eventType: (0, $akWxV.EVENT_TYPE).TRACK
                };
                createAnalyticsEvent(payload).fire((0, $9LKoi.editorAnalyticsChannel));
            }
            var newPalette = colorPalette.find(function(colorPalette) {
                return colorPalette.value === color;
            });
            newPalette && onChange(newPalette);
        }
        if (!skipFocusButtonAfterPick) focusButton();
    }, [
        colorPalette,
        onChange,
        createAnalyticsEvent,
        placement,
        skipFocusButtonAfterPick
    ]);
    var renderPopup = function renderPopup() {
        if (!isPopupOpen || !buttonRef.current) return;
        var selectedColor = props.currentColor || null;
        var _getSelectedRowAndCol = (0, $bpQ5d.getSelectedRowAndColumnFromPalette)(props.colorPalette, selectedColor, props.cols), selectedRowIndex = _getSelectedRowAndCol.selectedRowIndex, selectedColumnIndex = _getSelectedRowAndCol.selectedColumnIndex;
        return (0, $8zogs.jsx)((0, $ilv0D.default), {
            target: buttonRef.current,
            fitHeight: 350,
            fitWidth: 350,
            offset: [
                0,
                10
            ],
            alignX: props.alignX,
            mountTo: props.setDisableParentScroll ? props.mountPoint : undefined,
            zIndex: props.setDisableParentScroll ? 600 : undefined,
            ariaLabel: "Color picker popup",
            onPositionCalculated: onPositionCalculated
        }, (0, $8zogs.jsx)("div", {
            css: $c38af7a75d53c72b$var$colorPickerWrapper,
            "data-test-id": "color-picker-menu"
        }, (0, $8zogs.jsx)((0, $a0oRF.ArrowKeyNavigationProvider), {
            type: (0, $eGXiX.ArrowKeyNavigationType).COLOR,
            selectedRowIndex: selectedRowIndex,
            selectedColumnIndex: selectedColumnIndex,
            closeOnTab: true,
            handleClose: function handleClose() {
                return setIsPopupOpen(false);
            },
            isOpenedByKeyboard: isOpenedByKeyboard,
            isPopupPositioned: isPopupPositioned
        }, (0, $8zogs.jsx)($c38af7a75d53c72b$var$ColorPaletteWithListeners, {
            cols: props.cols,
            selectedColor: selectedColor,
            onClick: onColorSelected,
            handleClickOutside: togglePopup,
            handleEscapeKeydown: handleEsc,
            paletteOptions: {
                palette: props.colorPalette,
                hexToPaletteColor: props.hexToPaletteColor,
                paletteColorTooltipMessages: props.paletteColorTooltipMessages
            }
        }))));
    };
    var title = props.title || "";
    var currentColor = props.currentColor && props.hexToPaletteColor ? props.hexToPaletteColor(props.currentColor) : props.currentColor;
    var buttonStyle = function buttonStyle(theme) {
        var _props$size, _props$size2, _props$size3;
        return (0, $8zogs.css)($c38af7a75d53c72b$var$_templateObject4 || ($c38af7a75d53c72b$var$_templateObject4 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
            "\n    padding: 0 10px;\n    background-color: ",
            ";\n    ",
            "\n    &:before {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      align-self: center;\n      content: '';\n      border: 1px solid ",
            ";\n      border-radius: ",
            "px;\n      background-color: ",
            ";\n      width: ",
            ";\n      height: ",
            ";\n      padding: 0;\n      margin: 0px ",
            ";\n    }\n    &:hover {\n      background: ",
            ";\n    }\n  "
        ])), "var(--ds-background-neutral-subtle, transparent)", /* If custom props size height, override the button base height property */ !!((_props$size = props.size) !== null && _props$size !== void 0 && _props$size.height) && "height: inherit;", (0, $g9InS.DEFAULT_BORDER_COLOR), (0, $fMv3m.borderRadius)(), currentColor || "transparent", ((_props$size2 = props.size) === null || _props$size2 === void 0 ? void 0 : _props$size2.width) || "14px", ((_props$size3 = props.size) === null || _props$size3 === void 0 ? void 0 : _props$size3.height) || "14px", "var(--ds-space-025, 2px)", (0, $isnw9.default)({
            light: "var(--ds-background-neutral-subtle-hovered, ".concat((0, $dnCk4.N30A), ")"),
            dark: "var(--ds-background-neutral-subtle-hovered, ".concat((0, $dnCk4.N30A), ")")
        })(theme));
    };
    return (0, $8zogs.jsx)("div", {
        css: $c38af7a75d53c72b$var$colorPickerButtonWrapper
    }, (0, $8zogs.jsx)((0, $7tZKi.default), {
        content: title,
        position: "top"
    }, (0, $8zogs.jsx)((0, $fFFBq.default), {
        ref: buttonRef,
        "aria-label": title,
        spacing: "compact",
        onClick: togglePopup,
        onKeyDown: function onKeyDown(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                togglePopup();
                setIsOpenedByKeyboard(true);
            }
        },
        css: buttonStyle,
        iconAfter: (0, $8zogs.jsx)("span", {
            css: $c38af7a75d53c72b$var$colorPickerExpandContainer
        }, (0, $8zogs.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($brDEX))), {
            label: ""
        }))
    })), renderPopup());
};
var $c38af7a75d53c72b$export$2e2bcd8739ae039 = (0, $kQTTF.default)({
    source: "ConfigPanel"
})((0, $liddP.default)()($c38af7a75d53c72b$var$ColorPickerButton));

});
parcelRequire.register("cGMdY", function(module, exports) {

$parcel$export(module.exports, "default", () => $93ced0a2a6a9dd8b$export$2e2bcd8739ae039);

var $fu0YK = parcelRequire("fu0YK");

var $lR7jo = parcelRequire("lR7jo");

var $6zC7B = parcelRequire("6zC7B");

var $f8wIT = parcelRequire("f8wIT");

var $eN9hz = parcelRequire("eN9hz");

var $cGTaw = parcelRequire("cGTaw");

var $g5Zhu = parcelRequire("g5Zhu");

var $acw62 = parcelRequire("acw62");

var $1u0KT = parcelRequire("1u0KT");
function $93ced0a2a6a9dd8b$var$_createSuper(Derived) {
    var hasNativeReflectConstruct = $93ced0a2a6a9dd8b$var$_isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, (/*@__PURE__*/$parcel$interopDefault($eN9hz)))(this, result);
    };
}
function $93ced0a2a6a9dd8b$var$_isNativeReflectConstruct() {
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
function $93ced0a2a6a9dd8b$export$2e2bcd8739ae039(Component) {
    return /*#__PURE__*/ function(_PureComponent) {
        (0, (/*@__PURE__*/$parcel$interopDefault($f8wIT)))(WithOutsideClick, _PureComponent);
        var _super = $93ced0a2a6a9dd8b$var$_createSuper(WithOutsideClick);
        function WithOutsideClick() {
            var _this;
            (0, (/*@__PURE__*/$parcel$interopDefault($fu0YK)))(this, WithOutsideClick);
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            _this = _super.call.apply(_super, [
                this
            ].concat(args));
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleClick", function(evt) {
                var domNode = (0, (/*@__PURE__*/$parcel$interopDefault($1u0KT))).findDOMNode((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this)); // eslint-disable-line react/no-find-dom-node
                if (!domNode || evt.target instanceof Node && !domNode.contains(evt.target)) {
                    if (_this.props.handleClickOutside) _this.props.handleClickOutside(evt);
                }
            });
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleKeydown", function(evt) {
                if (evt.code === "Escape" && _this.props.handleEscapeKeydown) _this.props.handleEscapeKeydown(evt);
            });
            return _this;
        }
        (0, (/*@__PURE__*/$parcel$interopDefault($lR7jo)))(WithOutsideClick, [
            {
                key: "componentDidMount",
                value: function componentDidMount() {
                    if (this.props.handleClickOutside) document.addEventListener("click", this.handleClick, false);
                    if (this.props.handleEscapeKeydown) document.addEventListener("keydown", this.handleKeydown, false);
                }
            },
            {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    if (this.props.handleClickOutside) document.removeEventListener("click", this.handleClick, false);
                    if (this.props.handleEscapeKeydown) document.removeEventListener("keydown", this.handleKeydown, false);
                }
            },
            {
                key: "render",
                value: function render() {
                    return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement(Component, this.props);
                }
            }
        ]);
        return WithOutsideClick;
    }((0, $acw62.PureComponent));
}

});


parcelRequire.register("lnydF", function(module, exports) {

$parcel$export(module.exports, "default", () => $f9064a3e3a727614$export$2e2bcd8739ae039);

var $a3QyA = parcelRequire("a3QyA");

var $1oSng = parcelRequire("1oSng");
var $jn7ET = parcelRequire("jn7ET");
var $3TaPS = parcelRequire("3TaPS");

var $kfb6l = parcelRequire("kfb6l");
var $f9064a3e3a727614$var$packageName = "@atlaskit/select";
var $f9064a3e3a727614$var$packageVersion = "16.7.0";
var $f9064a3e3a727614$export$d1de3b251ccaa8a3 = (0, $kfb6l.default)((0, $a3QyA.default));
var $f9064a3e3a727614$var$createAndFireEventOnAtlaskit = (0, $1oSng.default)("atlaskit");
var $f9064a3e3a727614$export$2e2bcd8739ae039 = (0, $jn7ET.default)({
    componentName: "select",
    packageName: $f9064a3e3a727614$var$packageName,
    packageVersion: $f9064a3e3a727614$var$packageVersion
})((0, $3TaPS.default)({
    onChange: $f9064a3e3a727614$var$createAndFireEventOnAtlaskit({
        action: "changed",
        actionSubject: "option",
        attributes: {
            componentName: "select",
            packageName: $f9064a3e3a727614$var$packageName,
            packageVersion: $f9064a3e3a727614$var$packageVersion
        }
    })
})($f9064a3e3a727614$export$d1de3b251ccaa8a3));

});
parcelRequire.register("1oSng", function(module, exports) {

$parcel$export(module.exports, "default", () => $105235ecd2b331a6$export$2e2bcd8739ae039);
var $105235ecd2b331a6$export$2e2bcd8739ae039 = function(channel) {
    return function(payload) {
        return function(createAnalyticsEvent) {
            var consumerEvent = createAnalyticsEvent(payload);
            var clonedEvent = consumerEvent.clone();
            if (clonedEvent) clonedEvent.fire(channel);
            return consumerEvent;
        };
    };
};

});

parcelRequire.register("jn7ET", function(module, exports) {

$parcel$export(module.exports, "default", () => $e1a61b2011d4b521$export$2e2bcd8739ae039);

var $3p9rK = parcelRequire("3p9rK");

var $g5Zhu = parcelRequire("g5Zhu");

var $gZU1N = parcelRequire("gZU1N");

var $acw62 = parcelRequire("acw62");

var $945SN = parcelRequire("945SN");
var $e1a61b2011d4b521$var$_excluded = [
    "analyticsContext"
];
function $e1a61b2011d4b521$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $e1a61b2011d4b521$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $e1a61b2011d4b521$var$ownKeys(Object(source), !0).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $e1a61b2011d4b521$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var $e1a61b2011d4b521$var$withAnalyticsContext = function withAnalyticsContext(defaultData) {
    return function(WrappedComponent) {
        var WithAnalyticsContext = /*#__PURE__*/ (0, $acw62.forwardRef)(function(_ref, ref) {
            var analyticsContext = _ref.analyticsContext, rest = (0, (/*@__PURE__*/$parcel$interopDefault($gZU1N)))(_ref, $e1a61b2011d4b521$var$_excluded);
            var analyticsData = (0, $acw62.useMemo)(function() {
                return $e1a61b2011d4b521$var$_objectSpread($e1a61b2011d4b521$var$_objectSpread({}, defaultData), analyticsContext);
            }, [
                analyticsContext
            ]);
            return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement((0, $945SN.default), {
                data: analyticsData
            }, /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement(WrappedComponent, (0, (/*@__PURE__*/$parcel$interopDefault($3p9rK)))({}, rest, {
                ref: ref
            })));
        });
        // @ts-ignore
        WithAnalyticsContext.displayName = "WithAnalyticsContext(".concat(// @ts-ignore disneyName doesn't exist on type
        WrappedComponent.displayName || WrappedComponent.name, ")");
        return WithAnalyticsContext;
    };
};
var $e1a61b2011d4b521$export$2e2bcd8739ae039 = $e1a61b2011d4b521$var$withAnalyticsContext;

});
parcelRequire.register("945SN", function(module, exports) {

$parcel$export(module.exports, "default", () => $69990d010f243d2d$export$2e2bcd8739ae039);

var $91WLW = parcelRequire("91WLW");

var $iPPg8 = parcelRequire("iPPg8");

var $hPtJY = parcelRequire("hPtJY");
var $69990d010f243d2d$var$_process$env;
var $69990d010f243d2d$var$ExportedAnalyticsContext;
if (typeof $hPtJY !== "undefined" && $hPtJY !== null && ($69990d010f243d2d$var$_process$env = {}, true) && $69990d010f243d2d$var$_process$env !== void 0 && $69990d010f243d2d$var$_process$env["ANALYTICS_NEXT_MODERN_CONTEXT"]) $69990d010f243d2d$var$ExportedAnalyticsContext = (0, $iPPg8.default);
else $69990d010f243d2d$var$ExportedAnalyticsContext = (0, $91WLW.default);
var $69990d010f243d2d$export$2e2bcd8739ae039 = $69990d010f243d2d$var$ExportedAnalyticsContext;

});
parcelRequire.register("91WLW", function(module, exports) {

$parcel$export(module.exports, "default", () => $6931cbfa441a80ef$export$2e2bcd8739ae039);

var $fUHKi = parcelRequire("fUHKi");

var $fu0YK = parcelRequire("fu0YK");

var $lR7jo = parcelRequire("lR7jo");

var $6zC7B = parcelRequire("6zC7B");

var $f8wIT = parcelRequire("f8wIT");

var $eN9hz = parcelRequire("eN9hz");

var $cGTaw = parcelRequire("cGTaw");

var $g5Zhu = parcelRequire("g5Zhu");

var $acw62 = parcelRequire("acw62");

var $c9Z8w = parcelRequire("c9Z8w");

var $cpKm9 = parcelRequire("cpKm9");
function $6931cbfa441a80ef$var$_createSuper(Derived) {
    var hasNativeReflectConstruct = $6931cbfa441a80ef$var$_isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, (/*@__PURE__*/$parcel$interopDefault($eN9hz)))(this, result);
    };
}
function $6931cbfa441a80ef$var$_isNativeReflectConstruct() {
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
var $6931cbfa441a80ef$var$ContextTypes = {
    getAtlaskitAnalyticsContext: (0, (/*@__PURE__*/$parcel$interopDefault($c9Z8w))).func,
    getAtlaskitAnalyticsEventHandlers: (0, (/*@__PURE__*/$parcel$interopDefault($c9Z8w))).func
};
var $6931cbfa441a80ef$var$noop = function noop() {
    return [];
};
// eslint-disable-next-line @repo/internal/react/no-class-components
var $6931cbfa441a80ef$var$AnalyticsContext = /*#__PURE__*/ function(_Component) {
    (0, (/*@__PURE__*/$parcel$interopDefault($f8wIT)))(AnalyticsContext, _Component);
    var _super = $6931cbfa441a80ef$var$_createSuper(AnalyticsContext);
    function AnalyticsContext(props) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($fu0YK)))(this, AnalyticsContext);
        _this = _super.call(this, props);
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "getChildContext", function() {
            return {
                getAtlaskitAnalyticsContext: _this.getAnalyticsContext
            };
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "getAnalyticsContext", function() {
            var data = _this.props.data;
            var _this$context$getAtla = _this.context.getAtlaskitAnalyticsContext, getAtlaskitAnalyticsContext = _this$context$getAtla === void 0 ? $6931cbfa441a80ef$var$noop : _this$context$getAtla;
            return [].concat((0, (/*@__PURE__*/$parcel$interopDefault($fUHKi)))(getAtlaskitAnalyticsContext()), [
                data
            ]);
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "getAnalyticsEventHandlers", function() {
            var _this$context$getAtla2 = _this.context.getAtlaskitAnalyticsEventHandlers, getAtlaskitAnalyticsEventHandlers = _this$context$getAtla2 === void 0 ? $6931cbfa441a80ef$var$noop : _this$context$getAtla2;
            return getAtlaskitAnalyticsEventHandlers();
        });
        _this.contextValue = {
            getAtlaskitAnalyticsContext: _this.getAnalyticsContext,
            getAtlaskitAnalyticsEventHandlers: _this.getAnalyticsEventHandlers
        };
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($lR7jo)))(AnalyticsContext, [
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement((0, $cpKm9.default).Provider, {
                    value: this.contextValue
                }, children);
            }
        }
    ]);
    return AnalyticsContext;
}((0, $acw62.Component));
(0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))($6931cbfa441a80ef$var$AnalyticsContext, "contextTypes", $6931cbfa441a80ef$var$ContextTypes);
(0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))($6931cbfa441a80ef$var$AnalyticsContext, "childContextTypes", $6931cbfa441a80ef$var$ContextTypes);
var $6931cbfa441a80ef$export$2e2bcd8739ae039 = $6931cbfa441a80ef$var$AnalyticsContext;

});

parcelRequire.register("iPPg8", function(module, exports) {

$parcel$export(module.exports, "default", () => $db64c0750a322720$export$2e2bcd8739ae039);

var $fUHKi = parcelRequire("fUHKi");

var $acw62 = parcelRequire("acw62");

var $cpKm9 = parcelRequire("cpKm9");

var $cNKf0 = parcelRequire("cNKf0");

var $goOaz = parcelRequire("goOaz");
var $db64c0750a322720$var$AnalyticsContext = function AnalyticsContext(_ref) {
    var data = _ref.data, children = _ref.children;
    var dataRef = (0, $goOaz.useTrackedRef)(data);
    var analyticsContext = (0, $cNKf0.useAnalyticsContext)();
    var getAtlaskitAnalyticsContext = (0, $acw62.useCallback)(function() {
        return [].concat((0, (/*@__PURE__*/$parcel$interopDefault($fUHKi)))(analyticsContext.getAtlaskitAnalyticsContext()), [
            dataRef.current
        ]);
    }, [
        analyticsContext,
        dataRef
    ]);
    var value = (0, $acw62.useMemo)(function() {
        return {
            getAtlaskitAnalyticsContext: getAtlaskitAnalyticsContext,
            getAtlaskitAnalyticsEventHandlers: analyticsContext.getAtlaskitAnalyticsEventHandlers
        };
    }, [
        analyticsContext,
        getAtlaskitAnalyticsContext
    ]);
    return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement((0, $cpKm9.default).Provider, {
        value: value
    }, children);
};
var $db64c0750a322720$export$2e2bcd8739ae039 = $db64c0750a322720$var$AnalyticsContext;

});
parcelRequire.register("cNKf0", function(module, exports) {

$parcel$export(module.exports, "useAnalyticsContext", () => $951dee20ad76d371$export$d1f587f82ad51c4);

var $acw62 = parcelRequire("acw62");

var $cpKm9 = parcelRequire("cpKm9");
var $951dee20ad76d371$export$d1f587f82ad51c4 = function useAnalyticsContext() {
    return (0, $acw62.useContext)((0, $cpKm9.default));
};

});

parcelRequire.register("goOaz", function(module, exports) {

$parcel$export(module.exports, "useTrackedRef", () => $bf05cdd9a70aadc2$export$1d27a74659855e44);

var $acw62 = parcelRequire("acw62");
var $bf05cdd9a70aadc2$export$1d27a74659855e44 = function useTrackedRef(value) {
    var ref = (0, $acw62.useRef)(value);
    (0, $acw62.useEffect)(function() {
        ref.current = value;
    }, [
        value
    ]);
    return ref;
};

});




parcelRequire.register("3TaPS", function(module, exports) {

$parcel$export(module.exports, "default", () => $2d4ee9e38798a1ac$export$2e2bcd8739ae039);

var $3p9rK = parcelRequire("3p9rK");

var $acw62 = parcelRequire("acw62");

var $2BoPZ = parcelRequire("2BoPZ");

var $iJsMR = parcelRequire("iJsMR");
var $2d4ee9e38798a1ac$var$withAnalyticsEvents = function withAnalyticsEvents() {
    var createEventMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function(WrappedComponent) {
        var WithAnalyticsEvents = /*#__PURE__*/ (0, $acw62.forwardRef)(function(props, ref) {
            var _usePatchedProps = (0, $iJsMR.usePatchedProps)(createEventMap, props), patchedEventProps = _usePatchedProps.patchedEventProps;
            var _useAnalyticsEvents = (0, $2BoPZ.useAnalyticsEvents)(), createAnalyticsEvent = _useAnalyticsEvents.createAnalyticsEvent;
            return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement(WrappedComponent, (0, (/*@__PURE__*/$parcel$interopDefault($3p9rK)))({}, props, patchedEventProps, {
                createAnalyticsEvent: createAnalyticsEvent,
                ref: ref
            }));
        });
        // @ts-ignore
        WithAnalyticsEvents.displayName = "WithAnalyticsEvents(".concat(// @ts-ignore disneyName doesn't exist on type
        WrappedComponent.displayName || WrappedComponent.name, ")");
        return WithAnalyticsEvents;
    };
};
var $2d4ee9e38798a1ac$export$2e2bcd8739ae039 = $2d4ee9e38798a1ac$var$withAnalyticsEvents;

});
parcelRequire.register("2BoPZ", function(module, exports) {

$parcel$export(module.exports, "useAnalyticsEvents", () => $1e524db72a6953e2$export$5bf35293e545f20c);

var $i58AA = parcelRequire("i58AA");

var $jOvbM = parcelRequire("jOvbM");

var $cNKf0 = parcelRequire("cNKf0");
function $1e524db72a6953e2$export$5bf35293e545f20c() {
    var analyticsContext = (0, $cNKf0.useAnalyticsContext)();
    var createAnalyticsEvent = (0, $i58AA.useCallbackOne)(function(payload) {
        return new (0, $jOvbM.default)({
            context: analyticsContext.getAtlaskitAnalyticsContext(),
            handlers: analyticsContext.getAtlaskitAnalyticsEventHandlers(),
            payload: payload
        });
    }, [
        analyticsContext
    ]);
    return {
        createAnalyticsEvent: createAnalyticsEvent
    };
}

});
parcelRequire.register("jOvbM", function(module, exports) {

$parcel$export(module.exports, "default", () => $e6cae14b24a7fae1$export$2e2bcd8739ae039);

var $fUHKi = parcelRequire("fUHKi");

var $fu0YK = parcelRequire("fu0YK");

var $lR7jo = parcelRequire("lR7jo");

var $6zC7B = parcelRequire("6zC7B");

var $dpL0o = parcelRequire("dpL0o");

var $f8wIT = parcelRequire("f8wIT");

var $eN9hz = parcelRequire("eN9hz");

var $cGTaw = parcelRequire("cGTaw");

var $g5Zhu = parcelRequire("g5Zhu");

var $3Xgf9 = parcelRequire("3Xgf9");
function $e6cae14b24a7fae1$var$_createSuper(Derived) {
    var hasNativeReflectConstruct = $e6cae14b24a7fae1$var$_isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, (/*@__PURE__*/$parcel$interopDefault($eN9hz)))(this, result);
    };
}
function $e6cae14b24a7fae1$var$_isNativeReflectConstruct() {
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
var $e6cae14b24a7fae1$export$35f8383928ba8d7 = function isUIAnalyticsEvent(obj) {
    var _obj$constructor;
    return obj instanceof $e6cae14b24a7fae1$export$2e2bcd8739ae039 || !!(obj !== null && obj !== void 0 && obj._isUIAnalyticsEvent) || // Backwards compatibility with older analytics-next packages
    (obj === null || obj === void 0 ? void 0 : (_obj$constructor = obj.constructor) === null || _obj$constructor === void 0 ? void 0 : _obj$constructor.name) === "UIAnalyticsEvent";
};
var $e6cae14b24a7fae1$export$2e2bcd8739ae039 = /*#__PURE__*/ function(_AnalyticsEvent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($f8wIT)))(UIAnalyticsEvent, _AnalyticsEvent);
    var _super = $e6cae14b24a7fae1$var$_createSuper(UIAnalyticsEvent);
    function UIAnalyticsEvent(props) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($fu0YK)))(this, UIAnalyticsEvent);
        _this = _super.call(this, props);
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "_isUIAnalyticsEvent", true);
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "clone", function() {
            if (_this.hasFired) return null;
            var context = (0, (/*@__PURE__*/$parcel$interopDefault($fUHKi)))(_this.context);
            var handlers = (0, (/*@__PURE__*/$parcel$interopDefault($fUHKi)))(_this.handlers);
            /**
       * A hacky "deep clone" of the object. This is limited in that it wont
       * support functions, regexs, Maps, Sets, etc, but none of those need to
       * be represented in our payload.
       */ var payload = JSON.parse(JSON.stringify(_this.payload));
            return new UIAnalyticsEvent({
                context: context,
                handlers: handlers,
                payload: payload
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "fire", function(channel) {
            if (_this.hasFired) return;
            _this.handlers.forEach(function(handler) {
                return handler((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), channel);
            });
            _this.hasFired = true;
        });
        _this.context = props.context || [];
        _this.handlers = props.handlers || [];
        _this.hasFired = false;
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($lR7jo)))(UIAnalyticsEvent, [
        {
            key: "update",
            value: function update(updater) {
                if (this.hasFired) return this;
                return (0, (/*@__PURE__*/$parcel$interopDefault($dpL0o)))((0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(UIAnalyticsEvent.prototype), "update", this).call(this, updater);
            }
        }
    ]);
    return UIAnalyticsEvent;
}((0, $3Xgf9.default));

});
parcelRequire.register("3Xgf9", function(module, exports) {

$parcel$export(module.exports, "default", () => $2e137b612a76c2a3$export$2e2bcd8739ae039);

var $41YNz = parcelRequire("41YNz");

var $fu0YK = parcelRequire("fu0YK");

var $lR7jo = parcelRequire("lR7jo");

var $g5Zhu = parcelRequire("g5Zhu");
function $2e137b612a76c2a3$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $2e137b612a76c2a3$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $2e137b612a76c2a3$var$ownKeys(Object(source), !0).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $2e137b612a76c2a3$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var $2e137b612a76c2a3$export$ad4be5c2ec28cecf = function isAnalyticsEvent(obj) {
    var _obj$constructor;
    return obj instanceof $2e137b612a76c2a3$export$2e2bcd8739ae039 || !!(obj !== null && obj !== void 0 && obj._isAnalyticsEvent) || // Backwards compatibility with older analytics-next packages
    (obj === null || obj === void 0 ? void 0 : (_obj$constructor = obj.constructor) === null || _obj$constructor === void 0 ? void 0 : _obj$constructor.name) === "AnalyticsEvent";
};
var $2e137b612a76c2a3$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    function AnalyticsEvent(props) {
        var _this = this;
        (0, (/*@__PURE__*/$parcel$interopDefault($fu0YK)))(this, AnalyticsEvent);
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(this, "_isAnalyticsEvent", true);
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(this, "clone", function() {
            // just a shallow clone, don't change sub refs unless you want to
            // affect the original's too
            var payload = $2e137b612a76c2a3$var$_objectSpread({}, _this.payload);
            return new AnalyticsEvent({
                payload: payload
            });
        });
        this.payload = props.payload;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($lR7jo)))(AnalyticsEvent, [
        {
            key: "update",
            value: function update(updater) {
                if (typeof updater === "function") this.payload = updater(this.payload);
                if ((0, (/*@__PURE__*/$parcel$interopDefault($41YNz)))(updater) === "object") this.payload = $2e137b612a76c2a3$var$_objectSpread($2e137b612a76c2a3$var$_objectSpread({}, this.payload), updater);
                return this;
            }
        }
    ]);
    return AnalyticsEvent;
}();

});



parcelRequire.register("iJsMR", function(module, exports) {

$parcel$export(module.exports, "usePatchedProps", () => $da32c279044b1244$export$9ebb5a84d17e5d18);

var $g5Zhu = parcelRequire("g5Zhu");

var $41YNz = parcelRequire("41YNz");

var $acw62 = parcelRequire("acw62");

var $2BoPZ = parcelRequire("2BoPZ");
function $da32c279044b1244$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $da32c279044b1244$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $da32c279044b1244$var$ownKeys(Object(source), !0).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $da32c279044b1244$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $da32c279044b1244$export$9ebb5a84d17e5d18() {
    var createEventMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var wrappedComponentProps = arguments.length > 1 ? arguments[1] : undefined;
    var _useAnalyticsEvents = (0, $2BoPZ.useAnalyticsEvents)(), createAnalyticsEvent = _useAnalyticsEvents.createAnalyticsEvent;
    var handlerCache = (0, $acw62.useRef)({});
    var patchedProps = (0, $acw62.useMemo)(function() {
        var cache = handlerCache.current;
        // Clean up no longer used handlers in cache
        Object.keys(cache).filter(function(key) {
            return !(key in createEventMap);
        }).forEach(function(key) {
            return delete cache[key];
        });
        return Object.keys(createEventMap).reduce(function(p, k) {
            var eventCreator = createEventMap[k];
            if (![
                "object",
                "function"
            ].includes((0, (/*@__PURE__*/$parcel$interopDefault($41YNz)))(eventCreator))) return p;
            var propValue = wrappedComponentProps[k];
            if (k in cache && cache[k].eventCreator === eventCreator && cache[k].propValue === propValue) return $da32c279044b1244$var$_objectSpread($da32c279044b1244$var$_objectSpread({}, p), {}, (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))({}, k, cache[k].wrappedCallback));
            var wrappedCallback = function wrappedCallback() {
                var analyticsEvent = typeof eventCreator === "function" ? eventCreator(createAnalyticsEvent, wrappedComponentProps) : createAnalyticsEvent(eventCreator);
                if (propValue && typeof propValue === "function") {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                    propValue.apply(void 0, args.concat([
                        analyticsEvent
                    ]));
                }
            };
            cache[k] = {
                eventCreator: eventCreator,
                wrappedCallback: wrappedCallback,
                propValue: propValue
            };
            return $da32c279044b1244$var$_objectSpread($da32c279044b1244$var$_objectSpread({}, p), {}, (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))({}, k, wrappedCallback));
        }, {});
    }, [
        createEventMap,
        wrappedComponentProps,
        createAnalyticsEvent,
        handlerCache
    ]);
    return {
        patchedEventProps: patchedProps
    };
}

});




//# sourceMappingURL=ConfigPanelFieldsLoader.c1d45f96.js.map
