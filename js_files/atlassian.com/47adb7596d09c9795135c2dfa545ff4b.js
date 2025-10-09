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
parcelRequire.register("kfb6l", function(module, exports) {

$parcel$export(module.exports, "default", () => $ebcdd1dc07920c1a$export$2e2bcd8739ae039);

var $3p9rK = parcelRequire("3p9rK");

var $gZU1N = parcelRequire("gZU1N");

var $fu0YK = parcelRequire("fu0YK");

var $lR7jo = parcelRequire("lR7jo");

var $6zC7B = parcelRequire("6zC7B");

var $f8wIT = parcelRequire("f8wIT");

var $eN9hz = parcelRequire("eN9hz");

var $cGTaw = parcelRequire("cGTaw");

var $g5Zhu = parcelRequire("g5Zhu");

var $acw62 = parcelRequire("acw62");

var $am0Pt = parcelRequire("am0Pt");

var $jk22o = parcelRequire("jk22o");

var $ai2Pb = parcelRequire("ai2Pb");

var $6zWQd = parcelRequire("6zWQd");

var $eL1bh = parcelRequire("eL1bh");

var $OlBzB = parcelRequire("OlBzB");

var $fSYsC = parcelRequire("fSYsC");
var $ebcdd1dc07920c1a$var$_excluded = [
    "styles",
    "validationState",
    "isInvalid",
    "spacing",
    "isMulti",
    "appearance",
    "ariaLiveMessages"
];
function $ebcdd1dc07920c1a$var$ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function $ebcdd1dc07920c1a$var$_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? $ebcdd1dc07920c1a$var$ownKeys(Object(t), !0).forEach(function(r) {
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $ebcdd1dc07920c1a$var$ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function $ebcdd1dc07920c1a$var$_createSuper(Derived) {
    var hasNativeReflectConstruct = $ebcdd1dc07920c1a$var$_isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, (/*@__PURE__*/$parcel$interopDefault($eN9hz)))(this, result);
    };
}
function $ebcdd1dc07920c1a$var$_isNativeReflectConstruct() {
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
function $ebcdd1dc07920c1a$export$2e2bcd8739ae039(WrappedComponent) {
    var _class;
    return _class = /*#__PURE__*/ function(_Component) {
        (0, (/*@__PURE__*/$parcel$interopDefault($f8wIT)))(AtlaskitSelect, _Component);
        var _super = $ebcdd1dc07920c1a$var$_createSuper(AtlaskitSelect);
        function AtlaskitSelect(props) {
            var _this;
            (0, (/*@__PURE__*/$parcel$interopDefault($fu0YK)))(this, AtlaskitSelect);
            _this = _super.call(this, props);
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "components", {});
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "select", null);
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "cacheComponents", function(components) {
                _this.components = $ebcdd1dc07920c1a$var$_objectSpread($ebcdd1dc07920c1a$var$_objectSpread({}, $eL1bh), components);
            });
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "onSelectRef", function(ref) {
                _this.select = ref;
            });
            _this.cacheComponents = (0, $jk22o.default)(_this.cacheComponents, (0, (/*@__PURE__*/$parcel$interopDefault($ai2Pb)))).bind((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this));
            _this.cacheComponents(props.components || {});
            return _this;
        }
        (0, (/*@__PURE__*/$parcel$interopDefault($lR7jo)))(AtlaskitSelect, [
            {
                key: "UNSAFE_componentWillReceiveProps",
                value: function UNSAFE_componentWillReceiveProps(nextProps) {
                    this.cacheComponents(nextProps.components);
                }
            },
            {
                key: "focus",
                value: function focus() {
                    if (this.select) this.select.focus();
                }
            },
            {
                key: "blur",
                value: function blur() {
                    if (this.select) this.select.blur();
                }
            },
            {
                key: "render",
                value: function render() {
                    var _this$props = this.props, styles = _this$props.styles, validationState = _this$props.validationState, isInvalid = _this$props.isInvalid, spacing = _this$props.spacing, isMulti = _this$props.isMulti, appearance = _this$props.appearance, ariaLiveMessages = _this$props.ariaLiveMessages, props = (0, (/*@__PURE__*/$parcel$interopDefault($gZU1N)))(_this$props, $ebcdd1dc07920c1a$var$_excluded);
                    var isCompact = spacing === "compact";
                    // props must be spread first to stop `components` being overridden
                    return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement(WrappedComponent, (0, (/*@__PURE__*/$parcel$interopDefault($3p9rK)))({
                        ref: this.onSelectRef,
                        isMulti: isMulti,
                        "aria-live": "assertive",
                        ariaLiveMessages: (0, $fSYsC.isOptionsGrouped)(this.props.options) ? $ebcdd1dc07920c1a$var$_objectSpread({
                            onFocus: (0, $fSYsC.onFocus)
                        }, ariaLiveMessages) : $ebcdd1dc07920c1a$var$_objectSpread({}, ariaLiveMessages)
                    }, props, {
                        components: this.components,
                        styles: (0, $am0Pt.m)((0, $OlBzB.default)(// This will cover both props for invalid state while giving priority to isInvalid. When cleaning up validationState, we can just keep the inner condition.
                        typeof isInvalid !== "undefined" ? isInvalid ? "error" : "default" : validationState, isCompact, this.props.appearance || "default"), styles)
                    }));
                }
            }
        ]);
        return AtlaskitSelect;
    }((0, $acw62.Component)), (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(_class, "defaultProps", {
        validationState: "default",
        // TODO: uncomment the next line when cleaning up validationState prop so it has a default value
        // isInvalid: false,
        spacing: "default",
        onClickPreventDefault: true,
        tabSelectsValue: false,
        components: {
            Input: (0, $6zWQd.Input)
        },
        styles: {}
    }), _class;
}

});
parcelRequire.register("6zWQd", function(module, exports) {

$parcel$export(module.exports, "Input", () => $4ca3a7988055c6ad$export$f5b8910cec6cf069);

var $3p9rK = parcelRequire("3p9rK");

var $acw62 = parcelRequire("acw62");

var $cQEWp = parcelRequire("cQEWp");
var $4ca3a7988055c6ad$export$f5b8910cec6cf069 = function Input(props) {
    var passed_describedby = props.selectProps["aria-describedby"];
    var describedby = props["aria-describedby"] + (passed_describedby ? " " + passed_describedby : "");
    return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement((0, $cQEWp.c).Input, (0, (/*@__PURE__*/$parcel$interopDefault($3p9rK)))({}, props, {
        "aria-describedby": describedby
    }));
};

});

parcelRequire.register("eL1bh", function(module, exports) {

$parcel$export(module.exports, "MultiValueRemove", () => $abe65efaffddbae4$export$8e1fd1a40e7a2f4a);
$parcel$export(module.exports, "IndicatorSeparator", () => $abe65efaffddbae4$export$bd638c2ba7915668);
$parcel$export(module.exports, "ClearIndicator", () => (parcelRequire("eXek1")).ClearIndicator);
$parcel$export(module.exports, "DropdownIndicator", () => (parcelRequire("eXek1")).DropdownIndicator);
$parcel$export(module.exports, "LoadingIndicator", () => (parcelRequire("eXek1")).LoadingIndicator);
/** @jsx jsx */ 
var $8zogs = parcelRequire("8zogs");

var $ju9UL = parcelRequire("ju9UL");

var $cQEWp = parcelRequire("cQEWp");

var $eXek1 = parcelRequire("eXek1");
var $abe65efaffddbae4$var$disabledStyles = (0, $8zogs.css)({
    display: "none"
});
var $abe65efaffddbae4$var$enabledStyles = (0, $8zogs.css)({
    display: "inherit"
});
var $abe65efaffddbae4$export$8e1fd1a40e7a2f4a = function MultiValueRemove(props) {
    var isDisabled = props.selectProps.isDisabled;
    return (0, $8zogs.jsx)((0, $cQEWp.c).MultiValueRemove, props, (0, $8zogs.jsx)("div", {
        css: isDisabled ? $abe65efaffddbae4$var$disabledStyles : $abe65efaffddbae4$var$enabledStyles,
        "data-testid": isDisabled ? "hide-clear-icon" : "show-clear-icon"
    }, (0, $8zogs.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($ju9UL))), {
        label: "Clear",
        size: "small",
        primaryColor: "transparent",
        secondaryColor: "inherit"
    })));
};
var $abe65efaffddbae4$export$bd638c2ba7915668 = null;

});
parcelRequire.register("eXek1", function(module, exports) {

$parcel$export(module.exports, "ClearIndicator", () => $ae31af68194bd92a$export$ecf9cf59142dd54a);
$parcel$export(module.exports, "DropdownIndicator", () => $ae31af68194bd92a$export$ec98719d3db7f2e4);
$parcel$export(module.exports, "LoadingIndicator", () => $ae31af68194bd92a$export$7c20be4c1d342248);

var $3p9rK = parcelRequire("3p9rK");

var $g5Zhu = parcelRequire("g5Zhu");

var $8zogs = parcelRequire("8zogs");

var $cQEWp = parcelRequire("cQEWp");

var $bYGJU = parcelRequire("bYGJU");

var $ju9UL = parcelRequire("ju9UL");

var $brDEX = parcelRequire("brDEX");
function $ae31af68194bd92a$var$ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function $ae31af68194bd92a$var$_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? $ae31af68194bd92a$var$ownKeys(Object(t), !0).forEach(function(r) {
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $ae31af68194bd92a$var$ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
var $ae31af68194bd92a$var$iconContainerStyles = (0, $8zogs.css)({
    all: "unset",
    outline: "revert",
    display: "flex",
    alignItems: "center"
});
var $ae31af68194bd92a$export$ecf9cf59142dd54a = function ClearIndicator(props) {
    return (0, $8zogs.jsx)((0, $cQEWp.c).ClearIndicator, $ae31af68194bd92a$var$_objectSpread($ae31af68194bd92a$var$_objectSpread({}, props), {}, {
        innerProps: $ae31af68194bd92a$var$_objectSpread($ae31af68194bd92a$var$_objectSpread({}, props.innerProps), {}, {
            "aria-hidden": "false"
        })
    }), (0, $8zogs.jsx)("button", {
        css: $ae31af68194bd92a$var$iconContainerStyles,
        type: "button",
        tabIndex: -1
    }, (0, $8zogs.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($ju9UL))), {
        size: "small",
        label: "clear"
    })));
};
var $ae31af68194bd92a$export$ec98719d3db7f2e4 = function DropdownIndicator(props) {
    return (0, $8zogs.jsx)((0, $cQEWp.c).DropdownIndicator, props, (0, $8zogs.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($brDEX))), {
        label: "open"
    }));
};
var $ae31af68194bd92a$export$7c20be4c1d342248 = function LoadingIndicator(props) {
    var loadingStyles = (0, $8zogs.css)(props.getStyles("loadingIndicator", props));
    return(// This *must* be constructed this way because this is being consumed by
    // `react-select` and we don't control what it wants.
    // eslint-disable-next-line @atlaskit/design-system/consistent-css-prop-usage
    (0, $8zogs.jsx)("div", (0, (/*@__PURE__*/$parcel$interopDefault($3p9rK)))({
        css: loadingStyles
    }, props.innerProps), (0, $8zogs.jsx)((0, $bYGJU.default), {
        size: "small"
    })));
};

});
parcelRequire.register("bYGJU", function(module, exports) {

$parcel$export(module.exports, "default", () => $8b867377ac186d90$export$2e2bcd8739ae039);
/** @jsx jsx */ 
var $acw62 = parcelRequire("acw62");

var $8zogs = parcelRequire("8zogs");

var $12HqF = parcelRequire("12HqF");

var $dnCk4 = parcelRequire("dnCk4");

var $gaiZC = parcelRequire("gaiZC");

var $3OLdN = parcelRequire("3OLdN");
/**
 * Returns the appropriate circle stroke color.
 */ function $8b867377ac186d90$var$getStrokeColor(_ref) {
    var mode = _ref.mode, appearance = _ref.appearance;
    if (mode === "light") return appearance === "inherit" ? "var(--ds-icon-subtle, ".concat((0, $dnCk4.N500), ")") : "var(--ds-icon-inverse, ".concat((0, $dnCk4.N0), ")");
    return appearance === "inherit" ? "var(--ds-icon-subtle, ".concat((0, $dnCk4.DN900), ")") : "var(--ds-icon-inverse, ".concat((0, $dnCk4.DN500), ")");
}
var $8b867377ac186d90$var$rotate = (0, $8zogs.keyframes)({
    to: {
        transform: "rotate(360deg)"
    }
});
var $8b867377ac186d90$var$rotateStyles = (0, $8zogs.css)({
    animation: "".concat($8b867377ac186d90$var$rotate, " 0.86s infinite"),
    animationTimingFunction: "cubic-bezier(0.4, 0.15, 0.6, 0.85)",
    transformOrigin: "center"
});
/**
 * There are three parts to the load in animation:
 * 1. Fade in
 * 2. Accelerated spin
 * 3. Stretch the spinner line
 */ var $8b867377ac186d90$var$loadIn = (0, $8zogs.keyframes)({
    from: {
        transform: "rotate(50deg)",
        opacity: 0,
        strokeDashoffset: 60
    },
    to: {
        transform: "rotate(230deg)",
        opacity: 1,
        strokeDashoffset: 50
    }
});
var $8b867377ac186d90$var$loadInStyles = (0, $8zogs.css)({
    animation: "".concat($8b867377ac186d90$var$loadIn, " 1s ease-in-out"),
    /**
   * When the animation completes, stay at the last frame of the animation.
   */ animationFillMode: "forwards",
    /**
   * We are going to animate this in.
   */ opacity: 0
});
var $8b867377ac186d90$var$wrapperStyles = (0, $8zogs.css)({
    display: "inline-flex",
    /**
   * Align better inline with text.
   */ verticalAlign: "middle"
});
var $8b867377ac186d90$var$circleStyles = (0, $8zogs.css)({
    fill: "none",
    strokeDasharray: 60,
    strokeDashoffset: "inherit",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    "@media screen and (forced-colors: active)": {
        filter: "grayscale(100%)",
        stroke: "CanvasText"
    }
});
/**
 * `useLayoutEffect` is being used in SSR safe form. On the server, this work doesn’t need to run.
 * `useEffect` is used in-place, because `useEffect` is not run on the server and it matches types
 * which makes things simpler than doing an `isServer` check or a `null` check.
 *
 * @see https://hello.atlassian.net/wiki/spaces/DST/pages/2081696628/DSTDACI-010+-+Interaction+Tracing+hooks+in+DS+components
 */ var $8b867377ac186d90$var$useLayoutEffect = typeof window === "undefined" ? (0, $acw62.useEffect) : (0, $acw62.useLayoutEffect);
var $8b867377ac186d90$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).memo(/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).forwardRef(function Spinner(_ref2, ref) {
    var testId = _ref2.testId, _ref2$appearance = _ref2.appearance, appearance = _ref2$appearance === void 0 ? "inherit" : _ref2$appearance, _ref2$delay = _ref2.delay, delay = _ref2$delay === void 0 ? 0 : _ref2$delay, _ref2$size = _ref2.size, providedSize = _ref2$size === void 0 ? "medium" : _ref2$size, interactionName = _ref2.interactionName;
    var size = typeof providedSize === "number" ? providedSize : (0, $3OLdN.presetSizes)[providedSize];
    var animationDelay = "".concat(delay, "ms");
    var _useGlobalTheme = (0, $gaiZC.useGlobalTheme)(), mode = _useGlobalTheme.mode;
    var stroke = $8b867377ac186d90$var$getStrokeColor({
        mode: mode,
        appearance: appearance
    });
    var context = (0, $acw62.useContext)((0, $12HqF.default));
    $8b867377ac186d90$var$useLayoutEffect(function() {
        if (context != null) return context.hold(interactionName);
    }, [
        context,
        interactionName
    ]);
    /**
   * The Spinner animation uses a combination of two
   * css animations on two separate elements.
   */ return (0, $8zogs.jsx)("span", {
        /**
     * This span exists to off-load animations from the circle element,
     * which were causing performance issues (style recalculations)
     * on Safari and older versions of Chrome.
     *
     * This can be removed and styles placed back on the circle element once
     * Safari fixes this bug and off-loads rendering to the GPU from the CPU.
     */ css: [
            $8b867377ac186d90$var$wrapperStyles,
            $8b867377ac186d90$var$rotateStyles
        ],
        "data-testid": testId && "".concat(testId, "-wrapper"),
        style: {
            animationDelay: animationDelay,
            width: size,
            height: size
        }
    }, (0, $8zogs.jsx)("svg", {
        height: size,
        width: size,
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        "data-testid": testId,
        ref: ref,
        css: $8b867377ac186d90$var$loadInStyles,
        style: {
            animationDelay: animationDelay
        }
    }, (0, $8zogs.jsx)("circle", {
        cx: "8",
        cy: "8",
        r: "7",
        css: $8b867377ac186d90$var$circleStyles,
        style: {
            stroke: stroke
        }
    })));
}));

});
parcelRequire.register("3OLdN", function(module, exports) {

$parcel$export(module.exports, "presetSizes", () => $2c7aabd711a3d4da$export$4e9f1640bbe7a1a8);
var $2c7aabd711a3d4da$export$4e9f1640bbe7a1a8 = {
    xsmall: 8,
    small: 16,
    medium: 24,
    large: 48,
    xlarge: 96
};

});




parcelRequire.register("fSYsC", function(module, exports) {

$parcel$export(module.exports, "onFocus", () => $b90acc5a26ad71de$export$ecf9bf35ad97eb74);
$parcel$export(module.exports, "isOptionsGrouped", () => $b90acc5a26ad71de$export$d2756249f53f9f8);
// Used for overwriting ariaLiveMessages builtin onFocus method.
// Returns custom built string while focusing each group option. This string is used for screen reader announcement.
function $b90acc5a26ad71de$export$ecf9bf35ad97eb74(props) {
    var _groupData$options$fi;
    var focused = props.focused, options = props.options;
    var isOptionFocused = function isOptionFocused(option) {
        return option === focused;
    };
    var groupData = options === null || options === void 0 ? void 0 : options.find(function(option) {
        var _option$options;
        return (_option$options = option.options) === null || _option$options === void 0 ? void 0 : _option$options.some(isOptionFocused);
    });
    var groupOptionIndex = (_groupData$options$fi = groupData === null || groupData === void 0 ? void 0 : groupData.options.findIndex(isOptionFocused)) !== null && _groupData$options$fi !== void 0 ? _groupData$options$fi : 0;
    return "Option ".concat(focused.label, ", ").concat(groupData === null || groupData === void 0 ? void 0 : groupData.label, " group, item ").concat(groupOptionIndex + 1, " out of ").concat(groupData === null || groupData === void 0 ? void 0 : groupData.options.length, ". All in all ");
}
var $b90acc5a26ad71de$export$d2756249f53f9f8 = function isOptionsGrouped(arr) {
    return arr === null || arr === void 0 ? void 0 : arr.every(function(obj) {
        return obj.hasOwnProperty("options");
    });
};

});



//# sourceMappingURL=modal.e4733eea.js.map
