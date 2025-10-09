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
parcelRequire.register("eE7XC", function(module, exports) {

$parcel$export(module.exports, "default", () => $aa9af9ead173a2c5$export$2e2bcd8739ae039);

var $3p9rK = parcelRequire("3p9rK");

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

var $d2llj = parcelRequire("d2llj");

var $g7IJ1 = parcelRequire("g7IJ1");

var $isnw9 = parcelRequire("isnw9");

var $fMv3m = parcelRequire("fMv3m");

var $dnCk4 = parcelRequire("dnCk4");

var $5SWAC = parcelRequire("5SWAC");

var $agsce = parcelRequire("agsce");

var $eL71b = parcelRequire("eL71b");
var $8MoF3 = parcelRequire("8MoF3");

var $iEMNi = parcelRequire("iEMNi");

var $3H1bD = parcelRequire("3H1bD");

var $fkycJ = parcelRequire("fkycJ");

var $7qKv7 = parcelRequire("7qKv7");

var $bU5jx = parcelRequire("bU5jx");

var $gMRW6 = parcelRequire("gMRW6");

var $fNKI4 = parcelRequire("fNKI4");

var $beoSC = parcelRequire("beoSC");

var $hKlYK = parcelRequire("hKlYK");

var $doByU = parcelRequire("doByU");

var $7wewY = parcelRequire("7wewY");

var $bhrJr = parcelRequire("bhrJr");

var $1dpTN = parcelRequire("1dpTN");

var $9FqM5 = parcelRequire("9FqM5");
var $aa9af9ead173a2c5$var$_templateObject, $aa9af9ead173a2c5$var$_templateObject2, $aa9af9ead173a2c5$var$_templateObject3, $aa9af9ead173a2c5$var$_templateObject4, $aa9af9ead173a2c5$var$_templateObject5, $aa9af9ead173a2c5$var$_templateObject6, $aa9af9ead173a2c5$var$_templateObject7, $aa9af9ead173a2c5$var$_templateObject8, $aa9af9ead173a2c5$var$_templateObject9, $aa9af9ead173a2c5$var$_templateObject10, $aa9af9ead173a2c5$var$_templateObject11, $aa9af9ead173a2c5$var$_templateObject12, $aa9af9ead173a2c5$var$_templateObject13;
function $aa9af9ead173a2c5$var$_createSuper(Derived) {
    var hasNativeReflectConstruct = $aa9af9ead173a2c5$var$_isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, (/*@__PURE__*/$parcel$interopDefault($eN9hz)))(this, result);
    };
}
function $aa9af9ead173a2c5$var$_isNativeReflectConstruct() {
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
var $aa9af9ead173a2c5$var$ToolbarItems = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).memo(function(_ref) {
    var items = _ref.items, dispatchCommand = _ref.dispatchCommand, popupsMountPoint = _ref.popupsMountPoint, popupsBoundariesElement = _ref.popupsBoundariesElement, editorView = _ref.editorView, dispatchAnalyticsEvent = _ref.dispatchAnalyticsEvent, popupsScrollableElement = _ref.popupsScrollableElement, scrollable = _ref.scrollable, providerFactory = _ref.providerFactory, extensionsProvider = _ref.extensionsProvider, node = _ref.node, setDisableScroll = _ref.setDisableScroll, mountRef = _ref.mountRef, featureFlags = _ref.featureFlags, api = _ref.api;
    var emojiAndColourPickerMountPoint = scrollable ? popupsMountPoint || (editorView === null || editorView === void 0 ? void 0 : editorView.dom.closest(".fabric-editor-popup-scroll-parent")) || (editorView === null || editorView === void 0 ? void 0 : editorView.dom.closest(".ak-editor-content-area")) || undefined : popupsMountPoint;
    return (0, $8zogs.jsx)((0, $d2llj.default), null, items.filter(function(item) {
        return !item.hidden;
    }).map(function(item, idx) {
        var _api$contextPanel, _api$extension;
        switch(item.type){
            case "button":
                var ButtonIcon = item.icon;
                var onClickHandler = function onClickHandler() {
                    if (item.confirmDialog) dispatchCommand((0, $agsce.showConfirmDialog)(idx));
                    else {
                        dispatchCommand(item.onClick);
                        if (item.focusEditoronEnter && !(editorView !== null && editorView !== void 0 && editorView.hasFocus())) editorView === null || editorView === void 0 || editorView.focus();
                    }
                };
                return (0, $8zogs.jsx)((0, $8MoF3.default), {
                    className: item.className,
                    key: idx,
                    title: item.title,
                    href: item.href,
                    icon: item.icon ? (0, $8zogs.jsx)(ButtonIcon, {
                        label: item.title
                    }) : undefined,
                    appearance: item.appearance,
                    target: item.target,
                    onClick: onClickHandler,
                    onMouseEnter: function onMouseEnter() {
                        return dispatchCommand(item.onMouseEnter);
                    },
                    onMouseLeave: function onMouseLeave() {
                        return dispatchCommand(item.onMouseLeave);
                    },
                    onFocus: function onFocus() {
                        return dispatchCommand(item.onFocus);
                    },
                    onBlur: function onBlur() {
                        return dispatchCommand(item.onBlur);
                    },
                    selected: item.selected,
                    disabled: item.disabled,
                    tooltipContent: item.tooltipContent,
                    testId: item.testId,
                    hideTooltipOnClick: item.hideTooltipOnClick,
                    ariaHasPopup: item.ariaHasPopup,
                    tabIndex: item.tabIndex
                }, item.showTitle && item.title);
            case "input":
                return (0, $8zogs.jsx)((0, $7qKv7.default), {
                    key: idx,
                    mountPoint: popupsMountPoint,
                    boundariesElement: popupsBoundariesElement,
                    defaultValue: item.defaultValue,
                    placeholder: item.placeholder,
                    onSubmit: function onSubmit(value) {
                        return dispatchCommand(item.onSubmit(value));
                    },
                    onBlur: function onBlur(value) {
                        return dispatchCommand(item.onBlur(value));
                    }
                });
            case "custom":
                return item.render(editorView, idx, dispatchAnalyticsEvent);
            case "dropdown":
                var DropdownIcon = item.icon;
                return (0, $8zogs.jsx)((0, $iEMNi.default), {
                    key: idx,
                    title: item.title,
                    icon: DropdownIcon && (0, $8zogs.jsx)(DropdownIcon, {
                        label: item.title
                    }),
                    dispatchCommand: dispatchCommand,
                    options: item.options,
                    disabled: item.disabled,
                    tooltip: item.tooltip,
                    hideExpandIcon: item.hideExpandIcon,
                    mountPoint: popupsMountPoint,
                    boundariesElement: popupsBoundariesElement,
                    scrollableElement: popupsScrollableElement,
                    dropdownWidth: item.dropdownWidth,
                    showSelected: item.showSelected,
                    buttonTestId: item.testId,
                    editorView: editorView,
                    setDisableParentScroll: scrollable ? setDisableScroll : undefined,
                    dropdownListId: (item === null || item === void 0 ? void 0 : item.id) && "".concat(item.id, "-dropdownList")
                });
            case "select":
                if (item.selectType === "list") {
                    var ariaLabel = item.title || item.placeholder;
                    return (0, $8zogs.jsx)((0, $3H1bD.default), {
                        key: idx,
                        dispatchCommand: dispatchCommand,
                        options: item.options,
                        hideExpandIcon: item.hideExpandIcon,
                        mountPoint: scrollable ? mountRef.current : undefined,
                        boundariesElement: popupsBoundariesElement,
                        scrollableElement: popupsScrollableElement,
                        defaultValue: item.defaultValue,
                        placeholder: item.placeholder,
                        onChange: function onChange(selected) {
                            return dispatchCommand(item.onChange(selected));
                        },
                        ariaLabel: ariaLabel,
                        filterOption: item.filterOption,
                        setDisableParentScroll: scrollable ? setDisableScroll : undefined,
                        classNamePrefix: "floating-toolbar-select"
                    });
                }
                if (item.selectType === "color") return (0, $8zogs.jsx)((0, $gMRW6.default), {
                    skipFocusButtonAfterPick: true,
                    key: idx,
                    title: item.title,
                    onChange: function onChange(selected) {
                        dispatchCommand(item.onChange(selected));
                    },
                    colorPalette: item.options,
                    currentColor: item.defaultValue ? item.defaultValue.value : undefined,
                    placement: "Panels",
                    mountPoint: emojiAndColourPickerMountPoint,
                    setDisableParentScroll: scrollable ? setDisableScroll : undefined,
                    hexToPaletteColor: (0, $g7IJ1.hexToEditorBackgroundPaletteColor),
                    paletteColorTooltipMessages: (0, $fNKI4.backgroundPaletteTooltipMessages)
                });
                if (item.selectType === "emoji") return (0, $8zogs.jsx)((0, $beoSC.EmojiPickerButton), {
                    key: idx,
                    editorView: editorView,
                    title: item.title,
                    providerFactory: providerFactory,
                    isSelected: item.selected,
                    onChange: function onChange(selected) {
                        return dispatchCommand(item.onChange(selected));
                    },
                    mountPoint: emojiAndColourPickerMountPoint,
                    setDisableParentScroll: scrollable ? setDisableScroll : undefined
                });
                return null;
            case "extensions-placeholder":
                if (!editorView || !extensionsProvider) return null;
                var _ref2 = featureFlags || {}, extendFloatingToolbar = _ref2.extendFloatingToolbar;
                if (!extendFloatingToolbar) return null;
                return (0, $8zogs.jsx)((0, $bU5jx.ExtensionsPlaceholder), {
                    key: idx,
                    node: node,
                    editorView: editorView,
                    extensionProvider: extensionsProvider,
                    separator: item.separator,
                    applyChangeToContextPanel: api === null || api === void 0 ? void 0 : (_api$contextPanel = api.contextPanel) === null || _api$contextPanel === void 0 ? void 0 : _api$contextPanel.actions.applyChange,
                    extensionApi: api === null || api === void 0 ? void 0 : (_api$extension = api.extension) === null || _api$extension === void 0 ? void 0 : _api$extension.actions.api()
                });
            case "separator":
                return (0, $8zogs.jsx)((0, $fkycJ.default), {
                    key: idx
                });
        }
    }));
}, function(prevProps, nextProps) {
    if (!nextProps.node) return false;
    // only rerender toolbar items if the node is different
    // otherwise it causes an issue where multiple popups stays open
    return !(prevProps.node.type !== nextProps.node.type || prevProps.node.attrs.localId !== nextProps.node.attrs.localId || !$aa9af9ead173a2c5$export$1d04baad505b720e(prevProps.items, nextProps.items) || !prevProps.mounted !== !nextProps.mounted);
});
var $aa9af9ead173a2c5$var$toolbarContainer = function toolbarContainer(theme, scrollable, hasSelect, firstElementIsSelect) {
    return (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject || ($aa9af9ead173a2c5$var$_templateObject = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n  background-color: ",
        ";\n  border-radius: ",
        "px;\n  box-shadow: ",
        ";\n  display: flex;\n  line-height: 1;\n  box-sizing: border-box;\n\n  & > div > div {\n    align-items: center;\n  }\n  ",
        "\n"
    ])), (0, $isnw9.default)({
        light: "var(--ds-surface-overlay, white)",
        dark: "var(--ds-surface-overlay, ".concat((0, $dnCk4.DN70), ")")
    })(theme), (0, $fMv3m.borderRadius)(), "var(--ds-shadow-overlay, ".concat("0 0 1px rgba(9, 30, 66, 0.31), 0 4px 8px -2px rgba(9, 30, 66, 0.25)", ")"), scrollable ? (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject2 || ($aa9af9ead173a2c5$var$_templateObject2 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n        ",
        "\n        overflow: hidden;\n      "
    ])), hasSelect ? (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject3 || ($aa9af9ead173a2c5$var$_templateObject3 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n              height: 40px;\n            "
    ]))) : (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject4 || ($aa9af9ead173a2c5$var$_templateObject4 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n              height: 32px;\n            "
    ])))) : (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject5 || ($aa9af9ead173a2c5$var$_templateObject5 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n        padding: ",
        " ",
        ";\n        ",
        "\n      "
    ])), "var(--ds-space-050, 4px)", "var(--ds-space-100, 8px)", firstElementIsSelect && (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject6 || ($aa9af9ead173a2c5$var$_templateObject6 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n          padding-left: ",
        ";\n        "
    ])), "var(--ds-space-050, 4px)")));
};
var $aa9af9ead173a2c5$var$toolbarOverflow = function toolbarOverflow(scrollable, scrollDisabled, firstElementIsSelect) {
    return (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject7 || ($aa9af9ead173a2c5$var$_templateObject7 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n  ",
        "\n"
    ])), scrollable ? (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject8 || ($aa9af9ead173a2c5$var$_templateObject8 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n        ",
        "\n        -webkit-overflow-scrolling: touch;\n        padding: ",
        " 0 50px;\n        > div {\n          > div:first-child {\n            ",
        "\n          }\n          > div:last-child {\n            margin-right: ",
        ";\n          }\n        }\n      "
    ])), scrollDisabled ? (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject9 || ($aa9af9ead173a2c5$var$_templateObject9 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n              overflow: hidden;\n            "
    ]))) : (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject10 || ($aa9af9ead173a2c5$var$_templateObject10 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n              overflow-x: auto;\n              overflow-y: hidden;\n            "
    ]))), "var(--ds-space-050, 4px)", firstElementIsSelect ? (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject11 || ($aa9af9ead173a2c5$var$_templateObject11 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n                  margin-left: ",
        ";\n                "
    ])), "var(--ds-space-050, 4px)") : (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject12 || ($aa9af9ead173a2c5$var$_templateObject12 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n                  margin-left: ",
        ";\n                "
    ])), "var(--ds-space-100, 8px)"), "var(--ds-space-100, 8px)") : (0, $8zogs.css)($aa9af9ead173a2c5$var$_templateObject13 || ($aa9af9ead173a2c5$var$_templateObject13 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
        "\n        display: flex;\n      "
    ]))));
};
function $aa9af9ead173a2c5$var$makeSameType(_a, _b) {
    return true;
}
var $aa9af9ead173a2c5$var$compareItemWithKeys = function compareItemWithKeys(leftItem, rightItem) {
    var excludedKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return Object.keys(leftItem).filter(function(key) {
        return excludedKeys.indexOf(key) === -1;
    }).every(function(key) {
        return leftItem[key] instanceof Object ? (0, $5SWAC.shallowEqual)(leftItem[key], rightItem[key]) : leftItem[key] === rightItem[key];
    });
};
var $aa9af9ead173a2c5$export$b6007c51cfc2eaf0 = function isSameItem(leftItem, rightItem) {
    if (leftItem.type !== rightItem.type) return false;
    switch(leftItem.type){
        case "button":
            // Need to typecast `rightItem as typeof leftItem` otherwise we will
            // have to put the `type !==` inside each case.
            return $aa9af9ead173a2c5$var$compareItemWithKeys(leftItem, rightItem, [
                "type",
                "onClick",
                "onMouseEnter",
                "onMouseLeave"
            ]);
        case "copy-button":
            return $aa9af9ead173a2c5$var$compareItemWithKeys(leftItem, rightItem, [
                "type",
                "items"
            ]);
        case "input":
            return $aa9af9ead173a2c5$var$compareItemWithKeys(leftItem, rightItem, [
                "type",
                "onSubmit",
                "onBlur"
            ]);
        case "select":
            if ($aa9af9ead173a2c5$var$makeSameType(leftItem, rightItem) && Array.isArray(leftItem.options) && Array.isArray(rightItem.options) && !(0, $5SWAC.compareArrays)(leftItem.options, rightItem.options, function(left, right) {
                return $aa9af9ead173a2c5$var$compareItemWithKeys(left, right);
            })) return false;
            return $aa9af9ead173a2c5$var$compareItemWithKeys(leftItem, rightItem, [
                "type",
                "onChange",
                "options"
            ]);
        case "dropdown":
            if ($aa9af9ead173a2c5$var$makeSameType(leftItem, rightItem) && Array.isArray(leftItem.options) && Array.isArray(rightItem.options) && // @ts-expect-error TS2345: Argument of type 'DropdownOptionT<Function>[]' is not assignable to parameter of type 'any[][]'
            !(0, $5SWAC.compareArrays)(leftItem.options, rightItem.options, function(left, right) {
                return(// @ts-expect-error  TS2322: Type '"onClick"' is not assignable to type 'keyof any[]'
                $aa9af9ead173a2c5$var$compareItemWithKeys(left, right, [
                    "onClick"
                ]));
            })) return false;
            return $aa9af9ead173a2c5$var$compareItemWithKeys(leftItem, rightItem, [
                "type",
                "options"
            ]);
        case "custom":
            return false;
        case "separator":
            return $aa9af9ead173a2c5$var$compareItemWithKeys(leftItem, rightItem);
        case "extensions-placeholder":
            return $aa9af9ead173a2c5$var$compareItemWithKeys(leftItem, rightItem);
    }
};
var $aa9af9ead173a2c5$export$1d04baad505b720e = function areSameItems(leftArr, rightArr) {
    if (leftArr === undefined && rightArr === undefined) return true;
    if (leftArr === undefined || rightArr === undefined) return false;
    if (leftArr.length !== rightArr.length) return false;
    return leftArr.every(function(item, index) {
        return $aa9af9ead173a2c5$export$b6007c51cfc2eaf0(rightArr[index], item);
    });
};
var $aa9af9ead173a2c5$var$Toolbar = /*#__PURE__*/ function(_Component) {
    (0, (/*@__PURE__*/$parcel$interopDefault($f8wIT)))(Toolbar, _Component);
    var _super = $aa9af9ead173a2c5$var$_createSuper(Toolbar);
    function Toolbar(props) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($fu0YK)))(this, Toolbar);
        _this = _super.call(this, props);
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "shouldHandleArrowKeys", function() {
            var _this$props$items;
            //To prevent the keydown handling of arrow keys for custom toolbar items with 'disableArrowNavigation' prop enabled,
            //Usually the button which has menus or popups
            return !((_this$props$items = _this.props.items) !== null && _this$props$items !== void 0 && _this$props$items.find(function(item) {
                return item.type === "custom" && item.disableArrowNavigation;
            }));
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleEscape", function(event) {
            var _this$props$editorVie;
            // If any menu is open inside the floating toolbar 'Esc' key should not
            // focus the editorview.
            // Event can't be stopped as they are not childnodes of floating toolbar
            var isDropdownOpen = !!document.querySelector('[data-role="droplistContent"]');
            var isSelectMenuOpen = !!document.querySelector(".floating-toolbar-select__menu");
            if (isDropdownOpen || isSelectMenuOpen) return;
            (_this$props$editorVie = _this.props.editorView) === null || _this$props$editorVie === void 0 || _this$props$editorVie.focus();
            event.preventDefault();
            event.stopPropagation();
        });
        _this.scrollContainerRef = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createRef();
        _this.mountRef = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createRef();
        _this.toolbarContainerRef = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createRef();
        _this.state = {
            scrollDisabled: false,
            mounted: false
        };
        return _this;
    }
    // remove any decorations added by toolbar buttons i.e danger and selected styling
    // this prevents https://product-fabric.atlassian.net/browse/ED-10207
    (0, (/*@__PURE__*/$parcel$interopDefault($lR7jo)))(Toolbar, [
        {
            key: "resetStyling",
            value: function resetStyling(_ref3) {
                var table = _ref3.table;
                if (this.props.editorView) {
                    var _this$props$api;
                    var _this$props$editorVie2 = this.props.editorView, state = _this$props$editorVie2.state, dispatch = _this$props$editorVie2.dispatch;
                    if (table) return (0, $7wewY.clearHoverSelection)()(state, dispatch);
                    (_this$props$api = this.props.api) === null || _this$props$api === void 0 || _this$props$api.decorations.actions.removeDecoration(state, dispatch);
                }
            }
        },
        {
            key: "setDisableScroll",
            value: function setDisableScroll(disabled) {
                var _this2 = this;
                // wait before setting disabled state incase users jumping from one popup to another
                if (disabled) requestAnimationFrame(function() {
                    _this2.setState({
                        scrollDisabled: disabled
                    });
                });
                else this.setState({
                    scrollDisabled: disabled
                });
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.setState({
                    mounted: true
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var _this$props;
                (0, $9FqM5.checkShouldForceFocusAndApply)((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.editorView);
                if (this.props.node !== prevProps.node) this.resetStyling({
                    table: (prevProps === null || prevProps === void 0 ? void 0 : prevProps.node.type.name) === "table"
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                var editorView = this.props.editorView;
                if (editorView) {
                    var tr = editorView.state.tr, dispatch = editorView.dispatch;
                    dispatch((0, $9FqM5.forceFocusSelector)(null)(tr));
                }
                this.resetStyling({
                    table: this.props.node.type.name === "table"
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, items = _this$props2.items, className = _this$props2.className, node = _this$props2.node, intl = _this$props2.intl, scrollable = _this$props2.scrollable;
                if (!items || !items.length) return null;
                // Select has left padding of 4px to the border, everything else 8px
                var firstElementIsSelect = items[0].type === "select";
                var hasSelect = items.find(function(item) {
                    return item.type === "select" && item.selectType === "list";
                });
                var isShortcutToFocusToolbar = function isShortcutToFocusToolbar(event) {
                    //Alt + F10 to reach first element in this floating toolbar
                    return event.altKey && (event.key === "F10" || event.keyCode === 121);
                };
                return (0, $8zogs.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($acw62))).Fragment, null, (0, $8zogs.jsx)((0, $1dpTN.ToolbarArrowKeyNavigationProvider), {
                    editorView: this.props.editorView,
                    handleEscape: this.handleEscape,
                    disableArrowKeyNavigation: !this.shouldHandleArrowKeys(),
                    childComponentSelector: "[data-testid='editor-floating-toolbar']",
                    isShortcutToFocusToolbar: isShortcutToFocusToolbar,
                    intl: intl
                }, (0, $8zogs.jsx)("div", {
                    ref: this.toolbarContainerRef,
                    css: function css(theme) {
                        return [
                            $aa9af9ead173a2c5$var$toolbarContainer({
                                theme: theme
                            }, scrollable, hasSelect !== undefined, firstElementIsSelect)
                        ];
                    },
                    "aria-label": intl.formatMessage((0, $doByU.default).floatingToolbarAriaLabel),
                    role: "toolbar",
                    "data-testid": "editor-floating-toolbar",
                    className: className
                }, (0, $8zogs.jsx)((0, $eL71b.default), {
                    text: intl.formatMessage((0, $doByU.default).floatingToolbarAnnouncer),
                    delay: 250
                }), (0, $8zogs.jsx)("div", {
                    "data-testid": "floating-toolbar-items",
                    ref: this.scrollContainerRef,
                    css: $aa9af9ead173a2c5$var$toolbarOverflow(scrollable, this.state.scrollDisabled, firstElementIsSelect)
                }, (0, $8zogs.jsx)($aa9af9ead173a2c5$var$ToolbarItems, (0, (/*@__PURE__*/$parcel$interopDefault($3p9rK)))({}, this.props, {
                    setDisableScroll: this.setDisableScroll.bind(this),
                    mountRef: this.mountRef,
                    mounted: this.state.mounted,
                    featureFlags: this.props.featureFlags
                }))), scrollable && (0, $8zogs.jsx)((0, $bhrJr.ScrollButtons), {
                    intl: intl,
                    scrollContainerRef: this.scrollContainerRef,
                    node: node,
                    disabled: this.state.scrollDisabled
                })), (0, $8zogs.jsx)("div", {
                    ref: this.mountRef
                })));
            }
        }
    ]);
    return Toolbar;
}((0, $acw62.Component));
var $aa9af9ead173a2c5$export$2e2bcd8739ae039 = (0, $hKlYK.default)($aa9af9ead173a2c5$var$Toolbar);

});
parcelRequire.register("iEMNi", function(module, exports) {

$parcel$export(module.exports, "default", () => $d951cfed3e2e7098$export$2e2bcd8739ae039);

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

var $brDEX = parcelRequire("brDEX");

var $68OT2 = parcelRequire("68OT2");

var $8MoF3 = parcelRequire("8MoF3");

var $1EF7F = parcelRequire("1EF7F");
var $d951cfed3e2e7098$var$_templateObject, $d951cfed3e2e7098$var$_templateObject2;
function $d951cfed3e2e7098$var$ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function $d951cfed3e2e7098$var$_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? $d951cfed3e2e7098$var$ownKeys(Object(t), !0).forEach(function(r) {
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $d951cfed3e2e7098$var$ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function $d951cfed3e2e7098$var$_createSuper(Derived) {
    var hasNativeReflectConstruct = $d951cfed3e2e7098$var$_isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, (/*@__PURE__*/$parcel$interopDefault($eN9hz)))(this, result);
    };
}
function $d951cfed3e2e7098$var$_isNativeReflectConstruct() {
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
var $d951cfed3e2e7098$var$dropdownExpandContainer = (0, $8zogs.css)($d951cfed3e2e7098$var$_templateObject || ($d951cfed3e2e7098$var$_templateObject = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  margin: 0px -4px;\n"
])));
var $d951cfed3e2e7098$var$iconGroup = (0, $8zogs.css)($d951cfed3e2e7098$var$_templateObject2 || ($d951cfed3e2e7098$var$_templateObject2 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  display: flex;\n"
])));
var $d951cfed3e2e7098$var$CompositeIcon = function CompositeIcon(_ref) {
    var icon = _ref.icon;
    return (0, $8zogs.jsx)("div", {
        css: $d951cfed3e2e7098$var$iconGroup
    }, icon, (0, $8zogs.jsx)("span", {
        css: $d951cfed3e2e7098$var$dropdownExpandContainer
    }, (0, $8zogs.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($brDEX))), {
        label: "Expand dropdown menu"
    })));
};
var $d951cfed3e2e7098$export$2e2bcd8739ae039 = /*#__PURE__*/ function(_Component) {
    (0, (/*@__PURE__*/$parcel$interopDefault($f8wIT)))(Dropdown, _Component);
    var _super = $d951cfed3e2e7098$var$_createSuper(Dropdown);
    function Dropdown() {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($fu0YK)))(this, Dropdown);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "state", {
            isOpen: false,
            isOpenedByKeyboard: false
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "triggerRef", /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createRef());
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "renderArrayOptions", function(options) {
            var _this$props = _this.props, showSelected = _this$props.showSelected, dispatchCommand = _this$props.dispatchCommand, editorView = _this$props.editorView;
            return (0, $8zogs.jsx)((0, $1EF7F.default), {
                hide: _this.hide,
                dispatchCommand: dispatchCommand,
                items: options,
                showSelected: showSelected,
                editorView: editorView
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "toggleOpen", function() {
            _this.setState({
                isOpen: !_this.state.isOpen,
                isOpenedByKeyboard: false
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "toggleOpenByKeyboard", function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                _this.setState({
                    isOpen: !_this.state.isOpen,
                    isOpenedByKeyboard: true
                });
            }
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "hide", function() {
            _this.setState($d951cfed3e2e7098$var$_objectSpread($d951cfed3e2e7098$var$_objectSpread({}, _this.state), {}, {
                isOpen: false
            }));
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "hideOnEsc", function() {
            var _document$querySelect;
            // Focus the trigger button only on Escape
            // Focus is done before hiding to ensure onBlur is called
            (_document$querySelect = document.querySelector("[data-testid=".concat(_this.props.buttonTestId, "]"))) === null || _document$querySelect === void 0 || _document$querySelect.focus();
            _this.hide();
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "onOpenChanged", function(openChangedEvent) {
            if (!openChangedEvent.isOpen && openChangedEvent.event instanceof KeyboardEvent) {
                var _openChangedEvent$eve;
                ((_openChangedEvent$eve = openChangedEvent.event) === null || _openChangedEvent$eve === void 0 ? void 0 : _openChangedEvent$eve.key) === "Escape" ? _this.hideOnEsc() : _this.hide();
            }
        });
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($lR7jo)))(Dropdown, [
        {
            key: "render",
            value: function render() {
                var isOpen = this.state.isOpen;
                var _this$props2 = this.props, title = _this$props2.title, icon = _this$props2.icon, options = _this$props2.options, dispatchCommand = _this$props2.dispatchCommand, mountPoint = _this$props2.mountPoint, boundariesElement = _this$props2.boundariesElement, scrollableElement = _this$props2.scrollableElement, hideExpandIcon = _this$props2.hideExpandIcon, disabled = _this$props2.disabled, tooltip = _this$props2.tooltip, buttonTestId = _this$props2.buttonTestId, dropdownWidth = _this$props2.dropdownWidth, editorView = _this$props2.editorView, dropdownListId = _this$props2.dropdownListId;
                var trigger;
                if (icon) {
                    var TriggerIcon = hideExpandIcon ? icon : (0, $8zogs.jsx)($d951cfed3e2e7098$var$CompositeIcon, {
                        icon: icon
                    });
                    trigger = (0, $8zogs.jsx)((0, $8MoF3.default), {
                        testId: buttonTestId,
                        title: title,
                        icon: TriggerIcon,
                        onClick: this.toggleOpen,
                        onKeyDown: this.toggleOpenByKeyboard,
                        selected: isOpen,
                        disabled: disabled,
                        tooltipContent: tooltip
                    });
                } else trigger = (0, $8zogs.jsx)((0, $8MoF3.default), {
                    testId: buttonTestId,
                    iconAfter: (0, $8zogs.jsx)("span", {
                        css: $d951cfed3e2e7098$var$dropdownExpandContainer
                    }, (0, $8zogs.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($brDEX))), {
                        label: "Expand dropdown menu"
                    })),
                    onClick: this.toggleOpen,
                    onKeyDown: this.toggleOpenByKeyboard,
                    selected: isOpen,
                    disabled: disabled,
                    tooltipContent: tooltip,
                    ariaHasPopup: true,
                    areaControls: dropdownListId
                }, title);
                /**
       * We want to change direction of our dropdowns a bit early,
       * not exactly when it hits the boundary.
       */ var fitTolerance = 10;
                var fitWidth = Array.isArray(options) ? dropdownWidth || (0, $1EF7F.menuItemDimensions).width : options.width;
                var fitHeight = Array.isArray(options) ? options.length * (0, $1EF7F.menuItemDimensions).height + (0, $1EF7F.itemSpacing) * 2 : options.height;
                return (0, $8zogs.jsx)((0, $68OT2.default), {
                    ref: this.triggerRef,
                    mountTo: mountPoint,
                    boundariesElement: boundariesElement,
                    scrollableElement: scrollableElement,
                    isOpen: isOpen,
                    handleClickOutside: this.hide,
                    handleEscapeKeydown: this.hideOnEsc,
                    onOpenChange: this.onOpenChanged,
                    fitWidth: fitWidth + fitTolerance,
                    fitHeight: fitHeight + fitTolerance,
                    trigger: trigger,
                    editorView: editorView,
                    dropdownListId: dropdownListId
                }, Array.isArray(options) ? this.renderArrayOptions(options) : options.render({
                    hide: this.hide,
                    dispatchCommand: dispatchCommand
                }));
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                if (prevState.isOpen !== this.state.isOpen) {
                    if (this.props.setDisableParentScroll) this.props.setDisableParentScroll(this.state.isOpen);
                    if (this.state.isOpen && this.state.isOpenedByKeyboard) {
                        var dropList = document.querySelector('[data-role="droplistContent"]');
                        if (dropList) {
                            var keyboardEvent = new KeyboardEvent("keydown", {
                                bubbles: true,
                                key: "ArrowDown"
                            });
                            dropList.dispatchEvent(keyboardEvent);
                        }
                    }
                }
            }
        }
    ]);
    return Dropdown;
}((0, $acw62.Component));

});
parcelRequire.register("1EF7F", function(module, exports) {

$parcel$export(module.exports, "menuItemDimensions", () => $13496cf4e64c700d$export$1a7f12094b137d20);
$parcel$export(module.exports, "itemSpacing", () => $13496cf4e64c700d$export$e14354b446b68c1f);
$parcel$export(module.exports, "default", () => $13496cf4e64c700d$export$2e2bcd8739ae039);

var $fu0YK = parcelRequire("fu0YK");

var $lR7jo = parcelRequire("lR7jo");

var $f8wIT = parcelRequire("f8wIT");

var $eN9hz = parcelRequire("eN9hz");

var $cGTaw = parcelRequire("cGTaw");

var $02Ztr = parcelRequire("02Ztr");

var $gS6QF = parcelRequire("gS6QF");

var $acw62 = parcelRequire("acw62");

var $8zogs = parcelRequire("8zogs");

var $fMv3m = parcelRequire("fMv3m");

var $dnCk4 = parcelRequire("dnCk4");

var $h1jxn = parcelRequire("h1jxn");

var $gm5D7 = parcelRequire("gm5D7");

var $7tZKi = parcelRequire("7tZKi");

var $hKlYK = parcelRequire("hKlYK");

var $doByU = parcelRequire("doByU");
var $13496cf4e64c700d$var$_templateObject, $13496cf4e64c700d$var$_templateObject2, $13496cf4e64c700d$var$_templateObject3;
function $13496cf4e64c700d$var$_createSuper(Derived) {
    var hasNativeReflectConstruct = $13496cf4e64c700d$var$_isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, (/*@__PURE__*/$parcel$interopDefault($eN9hz)))(this, result);
    };
}
function $13496cf4e64c700d$var$_isNativeReflectConstruct() {
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
var $13496cf4e64c700d$export$1a7f12094b137d20 = {
    width: 175,
    height: 32
};
var $13496cf4e64c700d$var$spacer = (0, $8zogs.css)($13496cf4e64c700d$var$_templateObject || ($13496cf4e64c700d$var$_templateObject = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  display: flex;\n  flex: 1;\n  padding: ",
    ";\n"
])), "var(--ds-space-100, 8px)");
var $13496cf4e64c700d$var$menuContainer = (0, $8zogs.css)($13496cf4e64c700d$var$_templateObject2 || ($13496cf4e64c700d$var$_templateObject2 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  min-width: ",
    "px;\n\n  // temporary solution to retain spacing defined by @atlaskit/Item\n  & button {\n    min-height: ",
    ";\n    padding: ",
    " ",
    " 7px;\n\n    & > [data-item-elem-before] {\n      margin-right: ",
    ";\n    }\n  }\n"
])), $13496cf4e64c700d$export$1a7f12094b137d20.width, "var(--ds-space-400, 32px)", "var(--ds-space-100, 8px)", "var(--ds-space-100, 8px)", "var(--ds-space-050, 4px)");
var $13496cf4e64c700d$var$label = (0, $8zogs.css)($13496cf4e64c700d$var$_templateObject3 || ($13496cf4e64c700d$var$_templateObject3 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  display: inline-block;\n  width: 100%;\n"
])));
var $13496cf4e64c700d$export$e14354b446b68c1f = (0, $fMv3m.gridSize)() / 2;
// Extend the ButtonItem component type to allow mouse events to be accepted from the Typescript check
var $13496cf4e64c700d$var$DropdownButtonItem = (0, $h1jxn.default);
var $13496cf4e64c700d$var$DropdownMenuItem = function DropdownMenuItem(_ref) {
    var item = _ref.item, hide = _ref.hide, dispatchCommand = _ref.dispatchCommand, editorView = _ref.editorView, iconBefore = _ref.iconBefore;
    var _useState = (0, $acw62.useState)(item.tooltip || ""), _useState2 = (0, (/*@__PURE__*/$parcel$interopDefault($02Ztr)))(_useState, 2), tooltipContent = _useState2[0], setTooltipContent = _useState2[1];
    var handleItemMouseOut = (0, $acw62.useCallback)(function() {
        setTooltipContent("");
        if (item.onMouseOut) dispatchCommand(item.onMouseOut);
    }, [
        item.onMouseOut,
        dispatchCommand
    ]);
    var handleItemMouseDown = (0, $acw62.useCallback)(function(e) {
        e.preventDefault(); // ED-16204 - This is needed for safari to get handleItemClick() to work
        if (item.onMouseDown) dispatchCommand(item.onMouseDown);
    }, [
        item.onMouseDown,
        dispatchCommand
    ]);
    var handleItemMouseOver = (0, $acw62.useCallback)(function() {
        setTooltipContent(item.tooltip || "");
        if (item.onMouseOver) dispatchCommand(item.onMouseOver);
    }, [
        item.tooltip,
        item.onMouseOver,
        dispatchCommand
    ]);
    var handleItemMouseEnter = (0, $acw62.useCallback)(function(e) {
        if (item.onMouseEnter) {
            e.preventDefault();
            dispatchCommand(item.onMouseEnter);
        }
    }, [
        item.onMouseEnter,
        dispatchCommand
    ]);
    var handleItemMouseLeave = (0, $acw62.useCallback)(function(e) {
        if (item.onMouseLeave) {
            e.preventDefault();
            dispatchCommand(item.onMouseLeave);
        }
    }, [
        item.onMouseLeave,
        dispatchCommand
    ]);
    var handleItemOnFocus = (0, $acw62.useCallback)(function(e) {
        if (item.onFocus) {
            e.preventDefault();
            dispatchCommand(item.onFocus);
        }
    }, [
        item.onFocus,
        dispatchCommand
    ]);
    var handleItemOnBlur = (0, $acw62.useCallback)(function(e) {
        if (item.onBlur) {
            e.preventDefault();
            dispatchCommand(item.onBlur);
        }
    }, [
        item.onBlur,
        dispatchCommand
    ]);
    var handleItemClick = (0, $acw62.useCallback)(function() {
        /**
     * The order of dispatching the event and hide() is important, because
     * the ClickAreaBlock will be relying on the element to calculate the
     * click coordinate.
     * For more details, please visit the comment in this PR https://bitbucket.org/atlassian/atlassian-frontend/pull-requests/5328/edm-1321-set-selection-near-smart-link?link_source=email#chg-packages/editor/editor-core/src/plugins/floating-toolbar/ui/DropdownMenu.tsx
     */ dispatchCommand(item.onClick);
        hide();
        if (!(editorView !== null && editorView !== void 0 && editorView.hasFocus())) editorView === null || editorView === void 0 || editorView.focus();
    }, [
        dispatchCommand,
        item.onClick,
        hide,
        editorView
    ]);
    /* ED-16704 - Native mouse event handler to overcome firefox issue on disabled <button> - https://github.com/whatwg/html/issues/5886 */ var labelRef = /*#__PURE__*/ (0, $acw62.createRef)();
    var handleTitleWrapperMouseEvent = (0, $acw62.useCallback)(function(e) {
        if (item.disabled) {
            e.stopPropagation();
            e.preventDefault();
        }
    }, [
        item.disabled
    ]);
    (0, $acw62.useEffect)(function() {
        var labelRefCurrent = labelRef.current;
        labelRefCurrent === null || labelRefCurrent === void 0 || labelRefCurrent.addEventListener("click", handleTitleWrapperMouseEvent);
        labelRefCurrent === null || labelRefCurrent === void 0 || labelRefCurrent.addEventListener("mousedown", handleTitleWrapperMouseEvent);
        return function() {
            labelRefCurrent === null || labelRefCurrent === void 0 || labelRefCurrent.removeEventListener("click", handleTitleWrapperMouseEvent);
            labelRefCurrent === null || labelRefCurrent === void 0 || labelRefCurrent.removeEventListener("mousedown", handleTitleWrapperMouseEvent);
        };
    });
    var itemContent = (0, $8zogs.jsx)($13496cf4e64c700d$var$DropdownButtonItem, {
        iconBefore: iconBefore,
        iconAfter: item.elemAfter,
        onClick: handleItemClick,
        "data-testid": item.testId,
        isDisabled: item.disabled,
        onMouseDown: handleItemMouseDown,
        onMouseOver: handleItemMouseOver,
        onMouseEnter: handleItemMouseEnter,
        onMouseLeave: handleItemMouseLeave,
        onMouseOut: handleItemMouseOut,
        onFocus: handleItemOnFocus,
        onBlur: handleItemOnBlur
    }, (0, $8zogs.jsx)("span", {
        ref: labelRef,
        css: $13496cf4e64c700d$var$label
    }, item.title));
    if (tooltipContent) return (0, $8zogs.jsx)((0, $7tZKi.default), {
        content: tooltipContent
    }, itemContent);
    return itemContent;
};
var $13496cf4e64c700d$var$Dropdown = /*#__PURE__*/ function(_Component) {
    (0, (/*@__PURE__*/$parcel$interopDefault($f8wIT)))(Dropdown, _Component);
    var _super = $13496cf4e64c700d$var$_createSuper(Dropdown);
    function Dropdown() {
        (0, (/*@__PURE__*/$parcel$interopDefault($fu0YK)))(this, Dropdown);
        return _super.apply(this, arguments);
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($lR7jo)))(Dropdown, [
        {
            key: "render",
            value: function render() {
                var _this = this;
                var _this$props = this.props, hide = _this$props.hide, dispatchCommand = _this$props.dispatchCommand, items = _this$props.items, intl = _this$props.intl, editorView = _this$props.editorView;
                return (0, $8zogs.jsx)("div", {
                    css: $13496cf4e64c700d$var$menuContainer
                }, items.filter(function(item) {
                    return !item.hidden;
                }).map(function(item, idx) {
                    return (0, $8zogs.jsx)($13496cf4e64c700d$var$DropdownMenuItem, {
                        key: idx,
                        item: item,
                        hide: hide,
                        dispatchCommand: dispatchCommand,
                        editorView: editorView,
                        iconBefore: _this.renderSelected(item, intl)
                    });
                }));
            }
        },
        {
            key: "renderSelected",
            value: function renderSelected(item, intl) {
                var _this$props$showSelec = this.props.showSelected, showSelected = _this$props$showSelec === void 0 ? true : _this$props$showSelec;
                var selected = item.selected;
                if (showSelected && selected) return (0, $8zogs.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($gm5D7))), {
                    primaryColor: "var(--ds-icon-selected, ".concat((0, $dnCk4.B400), ")"),
                    size: "small",
                    label: intl.formatMessage((0, $doByU.default).confirmModalOK)
                });
                return (0, $8zogs.jsx)("span", {
                    css: $13496cf4e64c700d$var$spacer
                });
            }
        }
    ]);
    return Dropdown;
}((0, $acw62.Component));
var $13496cf4e64c700d$export$2e2bcd8739ae039 = (0, $hKlYK.default)($13496cf4e64c700d$var$Dropdown);

});


parcelRequire.register("3H1bD", function(module, exports) {

$parcel$export(module.exports, "default", () => $2b064ee499380e67$export$2e2bcd8739ae039);

var $g5Zhu = parcelRequire("g5Zhu");

var $acw62 = parcelRequire("acw62");

var $lnydF = parcelRequire("lnydF");
function $2b064ee499380e67$var$ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function $2b064ee499380e67$var$_objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? $2b064ee499380e67$var$ownKeys(Object(t), !0).forEach(function(r) {
            (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $2b064ee499380e67$var$ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function $2b064ee499380e67$export$2e2bcd8739ae039(props) {
    var selectRef = (0, $acw62.useRef)(null);
    var _props$width = props.width, width = _props$width === void 0 ? 200 : _props$width;
    var style = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useMemo(function() {
        return {
            container: function container(base) {
                return $2b064ee499380e67$var$_objectSpread($2b064ee499380e67$var$_objectSpread({}, base), {}, {
                    width: width
                });
            },
            menuPortal: function menuPortal(base) {
                var _selectRef$current, _selectRef$current$se, _selectRef$current$se2, _selectRef$current2, _selectRef$current2$s, _selectRef$current2$s2, _selectRef$current2$s3;
                // ED:16095: We add two possible getter paths for safely reaching into the underlying
                // react-select element. We first try a getter that conforms with react-select v5 APIs,
                // Failing that, we try a getter consistent with react-select v4 APIs. (We
                // handle both as consumers may control the time of the actual dependency version
                // cutover).
                var controlWrapper = (selectRef === null || selectRef === void 0 ? void 0 : (_selectRef$current = selectRef.current) === null || _selectRef$current === void 0 ? void 0 : (_selectRef$current$se = _selectRef$current.select) === null || _selectRef$current$se === void 0 ? void 0 : (_selectRef$current$se2 = _selectRef$current$se.controlRef) === null || _selectRef$current$se2 === void 0 ? void 0 : _selectRef$current$se2.parentNode) || (selectRef === null || selectRef === void 0 ? void 0 : (_selectRef$current2 = selectRef.current) === null || _selectRef$current2 === void 0 ? void 0 : (_selectRef$current2$s = _selectRef$current2.select) === null || _selectRef$current2$s === void 0 ? void 0 : (_selectRef$current2$s2 = _selectRef$current2$s.select) === null || _selectRef$current2$s2 === void 0 ? void 0 : (_selectRef$current2$s3 = _selectRef$current2$s2.controlRef) === null || _selectRef$current2$s3 === void 0 ? void 0 : _selectRef$current2$s3.parentNode);
                var menuPortalStyles = controlWrapper && props.setDisableParentScroll ? {
                    // since the portal is now outside, we need to position it as before
                    top: controlWrapper.offsetTop,
                    left: controlWrapper.offsetLeft,
                    height: controlWrapper.offsetHeight,
                    width: width
                } : {};
                return $2b064ee499380e67$var$_objectSpread($2b064ee499380e67$var$_objectSpread({}, base), menuPortalStyles);
            }
        };
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        width
    ]);
    var onMenuOpen = function onMenuOpen() {
        if (props.setDisableParentScroll) props.setDisableParentScroll(true);
    };
    var onMenuClose = function onMenuClose() {
        if (props.setDisableParentScroll) props.setDisableParentScroll(false);
    };
    return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement((0, $lnydF.default), {
        ref: selectRef,
        options: props.options,
        value: props.defaultValue,
        onChange: props.onChange,
        placeholder: props.placeholder,
        spacing: "compact",
        menuPlacement: "auto",
        filterOption: props.filterOption,
        styles: style,
        menuPortalTarget: props.mountPoint,
        onMenuOpen: onMenuOpen,
        onMenuClose: onMenuClose,
        "aria-label": props.ariaLabel,
        classNamePrefix: props.classNamePrefix
    });
}

});

parcelRequire.register("fkycJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $b2934184bbf58b6d$export$2e2bcd8739ae039);

var $lEKe9 = parcelRequire("lEKe9");
var $b2934184bbf58b6d$export$2e2bcd8739ae039 = (0, $lEKe9.default);

});

parcelRequire.register("7qKv7", function(module, exports) {

$parcel$export(module.exports, "default", () => $568f083a1dbad1a3$export$2e2bcd8739ae039);

var $fu0YK = parcelRequire("fu0YK");

var $lR7jo = parcelRequire("lR7jo");

var $6zC7B = parcelRequire("6zC7B");

var $f8wIT = parcelRequire("f8wIT");

var $eN9hz = parcelRequire("eN9hz");

var $cGTaw = parcelRequire("cGTaw");

var $g5Zhu = parcelRequire("g5Zhu");

var $acw62 = parcelRequire("acw62");

var $8zogs = parcelRequire("8zogs");

var $4XOau = parcelRequire("4XOau");
function $568f083a1dbad1a3$var$_createSuper(Derived) {
    var hasNativeReflectConstruct = $568f083a1dbad1a3$var$_isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, (/*@__PURE__*/$parcel$interopDefault($cGTaw)))(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, (/*@__PURE__*/$parcel$interopDefault($eN9hz)))(this, result);
    };
}
function $568f083a1dbad1a3$var$_isNativeReflectConstruct() {
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
var $568f083a1dbad1a3$export$2e2bcd8739ae039 = /*#__PURE__*/ function(_Component) {
    (0, (/*@__PURE__*/$parcel$interopDefault($f8wIT)))(TextField, _Component);
    var _super = $568f083a1dbad1a3$var$_createSuper(TextField);
    function TextField(props) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($fu0YK)))(this, TextField);
        _this = _super.call(this, props);
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleChange", function(e) {
            _this.setState({
                text: e.target.value
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleSubmit", function(e) {
            e.preventDefault();
            if (_this.props.onSubmit) _this.props.onSubmit(_this.state.text);
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($g5Zhu)))((0, (/*@__PURE__*/$parcel$interopDefault($6zC7B)))(_this), "handleBlur", function(e) {
            e.preventDefault();
            if (_this.props.onBlur) _this.props.onBlur(_this.state.text);
        });
        _this.state = {
            text: props.defaultValue || ""
        };
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($lR7jo)))(TextField, [
        {
            key: "UNSAFE_componentWillReceiveProps",
            value: function UNSAFE_componentWillReceiveProps(nextProps) {
                if (this.state.text !== nextProps.defaultValue) this.setState({
                    text: nextProps.defaultValue || ""
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var placeholder = this.props.placeholder;
                return (0, $8zogs.jsx)("form", {
                    onSubmit: this.handleSubmit
                }, (0, $8zogs.jsx)("input", {
                    css: (0, $4XOau.panelTextInput),
                    value: this.state.text,
                    onChange: this.handleChange,
                    placeholder: placeholder,
                    onBlur: this.handleBlur
                }));
            }
        }
    ]);
    return TextField;
}((0, $acw62.Component));

});

parcelRequire.register("bU5jx", function(module, exports) {

$parcel$export(module.exports, "ExtensionsPlaceholder", () => $8aa90becc47ea4c2$export$8bacfc8aacebb3c1);

var $02Ztr = parcelRequire("02Ztr");

var $fOd0O = parcelRequire("fOd0O");

var $h1Oiy = parcelRequire("h1Oiy");

var $acw62 = parcelRequire("acw62");

var $eXyb6 = parcelRequire("eXyb6");

var $iWXZ4 = parcelRequire("iWXZ4");

var $d2llj = parcelRequire("d2llj");

var $9ykpo = parcelRequire("9ykpo");

var $8MoF3 = parcelRequire("8MoF3");

var $fkycJ = parcelRequire("fkycJ");
var $8aa90becc47ea4c2$var$noop = function noop() {
    return null;
};
var $8aa90becc47ea4c2$var$isDefaultExport = function isDefaultExport(mod) {
    return mod.hasOwnProperty("default");
};
var $8aa90becc47ea4c2$var$resolveExtensionIcon = /*#__PURE__*/ function() {
    var _ref = (0, (/*@__PURE__*/$parcel$interopDefault($fOd0O)))(/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($h1Oiy))).mark(function _callee(getIcon) {
        var maybeIcon;
        return (0, (/*@__PURE__*/$parcel$interopDefault($h1Oiy))).wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    if (getIcon) {
                        _context.next = 2;
                        break;
                    }
                    return _context.abrupt("return", $8aa90becc47ea4c2$var$noop);
                case 2:
                    _context.next = 4;
                    return getIcon();
                case 4:
                    maybeIcon = _context.sent;
                    return _context.abrupt("return", $8aa90becc47ea4c2$var$isDefaultExport(maybeIcon) ? maybeIcon.default : maybeIcon);
                case 6:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
    return function resolveExtensionIcon(_x) {
        return _ref.apply(this, arguments);
    };
}();
var $8aa90becc47ea4c2$var$ExtensionButton = function ExtensionButton(props) {
    var item = props.item, node = props.node, extensionApi = props.extensionApi;
    var ButtonIcon = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useMemo(function() {
        return item.icon ? (0, (/*@__PURE__*/$parcel$interopDefault($eXyb6)))({
            loader: function() {
                var _loader = (0, (/*@__PURE__*/$parcel$interopDefault($fOd0O)))(/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($h1Oiy))).mark(function _callee2() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($h1Oiy))).wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                return _context2.abrupt("return", $8aa90becc47ea4c2$var$resolveExtensionIcon(item.icon));
                            case 1:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2);
                }));
                function loader() {
                    return _loader.apply(this, arguments);
                }
                return loader;
            }(),
            loading: $8aa90becc47ea4c2$var$noop
        }) : undefined;
    }, [
        item.icon
    ]);
    var onClick = function onClick() {
        if (typeof item.action !== "function") throw new Error("'action' of context toolbar item '".concat(item.key, "' is not a function"));
        var targetNodeAdf = (0, $9ykpo.nodeToJSON)(node);
        item.action(targetNodeAdf, extensionApi);
    };
    return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement((0, $8MoF3.default), {
        title: item.label,
        ariaLabel: item.tooltip,
        icon: ButtonIcon ? /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement(ButtonIcon, {
            label: item.label || ""
        }) : undefined,
        onClick: onClick,
        tooltipContent: item.tooltip,
        disabled: item.disabled
    }, item.label);
};
var $8aa90becc47ea4c2$export$8bacfc8aacebb3c1 = function ExtensionsPlaceholder(props) {
    var node = props.node, editorView = props.editorView, extensionProvider = props.extensionProvider, separator = props.separator, applyChangeToContextPanel = props.applyChangeToContextPanel, extensionApi = props.extensionApi;
    var _useState = (0, $acw62.useState)([]), _useState2 = (0, (/*@__PURE__*/$parcel$interopDefault($02Ztr)))(_useState, 2), extensions = _useState2[0], setExtensions = _useState2[1];
    (0, $acw62.useEffect)(function() {
        getExtensions();
        function getExtensions() {
            return _getExtensions.apply(this, arguments);
        } // leaving dependencies array empty so that this effect runs just once on component mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
        function _getExtensions() {
            _getExtensions = (0, (/*@__PURE__*/$parcel$interopDefault($fOd0O)))(/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($h1Oiy))).mark(function _callee3() {
                var provider;
                return (0, (/*@__PURE__*/$parcel$interopDefault($h1Oiy))).wrap(function _callee3$(_context3) {
                    while(true)switch(_context3.prev = _context3.next){
                        case 0:
                            _context3.next = 2;
                            return extensionProvider;
                        case 2:
                            provider = _context3.sent;
                            if (!provider) {
                                _context3.next = 9;
                                break;
                            }
                            _context3.t0 = setExtensions;
                            _context3.next = 7;
                            return provider.getExtensions();
                        case 7:
                            _context3.t1 = _context3.sent;
                            (0, _context3.t0)(_context3.t1);
                        case 9:
                        case "end":
                            return _context3.stop();
                    }
                }, _callee3);
            }));
            return _getExtensions.apply(this, arguments);
        }
    }, []);
    var nodeAdf = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useMemo(function() {
        return (0, $9ykpo.nodeToJSON)(node);
    }, [
        node
    ]);
    var extensionItems = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useMemo(function() {
        return (0, $iWXZ4.getContextualToolbarItemsFromModule)(extensions, nodeAdf, extensionApi);
    }, [
        extensions,
        nodeAdf,
        extensionApi
    ]);
    if (!extensionItems.length) return null;
    // ButtonGroup wraps each child with another layer
    // but count fragment as 1 child, so here we create the children manually.
    var children = [];
    if (separator && [
        "start",
        "both"
    ].includes(separator)) children.push(/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement((0, $fkycJ.default), null));
    extensionItems.forEach(function(item, index) {
        children.push(/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement($8aa90becc47ea4c2$var$ExtensionButton, {
            node: node,
            item: item,
            editorView: editorView,
            applyChangeToContextPanel: applyChangeToContextPanel,
            extensionApi: extensionApi
        }));
        if (index < extensionItems.length - 1) children.push(/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement((0, $fkycJ.default), null));
    });
    if (separator && [
        "end",
        "both"
    ].includes(separator)) children.push(/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement((0, $fkycJ.default), null));
    return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement((0, $d2llj.default), {
        children: children
    });
};

});

parcelRequire.register("beoSC", function(module, exports) {

$parcel$export(module.exports, "EmojiPickerButton", () => $82d44d22ace14bbb$export$428fcc6fc228bd52);

var $02Ztr = parcelRequire("02Ztr");

var $gS6QF = parcelRequire("gS6QF");

var $8zogs = parcelRequire("8zogs");

var $acw62 = parcelRequire("acw62");

var $fFFBq = parcelRequire("fFFBq");

var $gZEVV = parcelRequire("gZEVV");

var $ilv0D = parcelRequire("ilv0D");
parcelRequire("gntnR");
var $6QlBD = parcelRequire("6QlBD");

var $7tZKi = parcelRequire("7tZKi");

var $gDuIw = parcelRequire("gDuIw");

var $7eFcd = parcelRequire("7eFcd");
var $82d44d22ace14bbb$var$_templateObject;
// helps adjusts position of popup
var $82d44d22ace14bbb$var$emojiPickerButtonWrapper = (0, $8zogs.css)($82d44d22ace14bbb$var$_templateObject || ($82d44d22ace14bbb$var$_templateObject = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  position: relative;\n"
])));
var $82d44d22ace14bbb$var$EmojiPickerWithListener = (0, $7eFcd.default)((0, $6QlBD.default));
var $82d44d22ace14bbb$export$428fcc6fc228bd52 = function EmojiPickerButton(props) {
    var buttonRef = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useRef(null);
    var _React$useState = (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useState(false), _React$useState2 = (0, (/*@__PURE__*/$parcel$interopDefault($02Ztr)))(_React$useState, 2), isPopupOpen = _React$useState2[0], setIsPopupOpen = _React$useState2[1];
    (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).useEffect(function() {
        if (props.setDisableParentScroll) props.setDisableParentScroll(isPopupOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isPopupOpen
    ]);
    var togglePopup = function togglePopup() {
        setIsPopupOpen(!isPopupOpen);
    };
    var updateEmoji = function updateEmoji(emoji) {
        setIsPopupOpen(false);
        props.onChange && props.onChange(emoji);
        requestAnimationFrame(function() {
            var _props$editorView;
            (_props$editorView = props.editorView) === null || _props$editorView === void 0 || _props$editorView.focus();
        });
    };
    var isDetachedElement = function isDetachedElement(el) {
        return !document.body.contains(el);
    };
    var handleEmojiClickOutside = function handleEmojiClickOutside(e) {
        // Ignore click events for detached elements.
        // Workaround for CETI-240 - where two onClicks fire - one when the upload button is
        // still in the document, and one once it's detached. Does not always occur, and
        // may be a side effect of a react render optimisation
        if (e && e.target && !isDetachedElement(e.target)) togglePopup();
    };
    var handleEmojiPressEscape = function handleEmojiPressEscape() {
        var _buttonRef$current;
        setIsPopupOpen(false);
        (_buttonRef$current = buttonRef.current) === null || _buttonRef$current === void 0 || _buttonRef$current.focus();
    };
    var renderPicker = function renderPicker(providers) {
        if (!providers.emojiProvider) return null;
        return (0, $8zogs.jsx)($82d44d22ace14bbb$var$EmojiPickerWithListener, {
            emojiProvider: providers.emojiProvider,
            onSelection: updateEmoji,
            onPickerRef: function onPickerRef() {},
            handleClickOutside: handleEmojiClickOutside,
            handleEscapeKeydown: handleEmojiPressEscape
        });
    };
    var renderPopup = function renderPopup() {
        if (!buttonRef.current || !isPopupOpen) return;
        return (0, $8zogs.jsx)((0, $ilv0D.default), {
            target: buttonRef.current,
            mountTo: props.setDisableParentScroll ? props.mountPoint : buttonRef.current.parentElement,
            fitHeight: 350,
            fitWidth: 350,
            offset: [
                0,
                10
            ],
            zIndex: props.setDisableParentScroll ? 600 : undefined,
            focusTrap: true
        }, (0, $8zogs.jsx)((0, $gZEVV.WithProviders), {
            providers: [
                "emojiProvider"
            ],
            providerFactory: props.providerFactory,
            renderNode: renderPicker
        }));
    };
    var title = props.title || "";
    return (0, $8zogs.jsx)("div", {
        css: $82d44d22ace14bbb$var$emojiPickerButtonWrapper
    }, (0, $8zogs.jsx)((0, $7tZKi.default), {
        content: title,
        position: "top"
    }, (0, $8zogs.jsx)((0, $fFFBq.default), {
        appearance: "subtle",
        key: props.idx,
        style: {
            padding: 0,
            margin: 0,
            display: "flex",
            height: "24px",
            width: "24px"
        },
        onClick: togglePopup,
        ref: buttonRef,
        isSelected: props.isSelected,
        iconBefore: (0, $8zogs.jsx)((0, $gDuIw.default), null)
    })), renderPopup());
};

});
parcelRequire.register("gntnR", function(module, exports) {

$parcel$export(module.exports, "EmojiPicker", () => (parcelRequire("6QlBD")).default);

var $emOH2 = parcelRequire("emOH2");




var $6QlBD = parcelRequire("6QlBD");



var $8wbDD = parcelRequire("8wbDD");

var $bL75e = parcelRequire("bL75e");






var $3fho1 = parcelRequire("3fho1");







var $j0LDc = parcelRequire("j0LDc");
var $bec5965adb0ad688$export$2e2bcd8739ae039 = (0, $6QlBD.default);

});

parcelRequire.register("gDuIw", function(module, exports) {

$parcel$export(module.exports, "default", () => $c1c81da2a8652422$export$2e2bcd8739ae039);

var $acw62 = parcelRequire("acw62");
function $c1c81da2a8652422$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-label": "editor-add-emoji"
    }, /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement("rect", {
        width: 24,
        height: 24,
        fill: "var(--ds-background-neutral-subtle, white)",
        fillOpacity: "0.01"
    }), /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14.5715 6.20367C13.7531 5.88041 12.8807 5.71423 12 5.71423C10.1435 5.71423 8.36301 6.45173 7.05025 7.76449C5.7375 9.07724 5 10.8577 5 12.7142C5 14.5708 5.7375 16.3512 7.05025 17.664C8.36301 18.9767 10.1435 19.7142 12 19.7142C12.9193 19.7142 13.8295 19.5332 14.6788 19.1814C15.5281 18.8296 16.2997 18.314 16.9497 17.664C17.5998 17.014 18.1154 16.2423 18.4672 15.393C18.8189 14.5437 19 13.6335 19 12.7142C19 12.1349 18.9281 11.5591 18.7868 10.9999H17.2266C17.404 11.5396 17.5 12.1159 17.5 12.7142C17.5 15.7472 15.033 18.2142 12 18.2142C8.967 18.2142 6.5 15.7472 6.5 12.7142C6.50159 11.256 7.08156 9.85801 8.11267 8.8269C9.14377 7.79579 10.5418 7.21582 12 7.21423C12.9284 7.21423 13.8037 7.44537 14.5715 7.85312V6.20367ZM9.79289 11.9213C9.98043 12.1089 10.2348 12.2142 10.5 12.2142C10.7652 12.2142 11.0196 12.1089 11.2071 11.9213C11.3946 11.7338 11.5 11.4795 11.5 11.2142C11.5 10.949 11.3946 10.6947 11.2071 10.5071C11.0196 10.3196 10.7652 10.2142 10.5 10.2142C10.2348 10.2142 9.98043 10.3196 9.79289 10.5071C9.60536 10.6947 9.5 10.949 9.5 11.2142C9.5 11.4795 9.60536 11.7338 9.79289 11.9213ZM12.7929 11.9213C12.9804 12.1089 13.2348 12.2142 13.5 12.2142C13.7652 12.2142 14.0196 12.1089 14.2071 11.9213C14.3946 11.7338 14.5 11.4795 14.5 11.2142C14.5 10.949 14.3946 10.6947 14.2071 10.5071C14.0196 10.3196 13.7652 10.2142 13.5 10.2142C13.2348 10.2142 12.9804 10.3196 12.7929 10.5071C12.6054 10.6947 12.5 10.949 12.5 11.2142C12.5 11.4795 12.6054 11.7338 12.7929 11.9213ZM14.1965 13.61C14.0355 13.6153 13.8828 13.6823 13.77 13.7972C12.871 14.8032 11.133 14.8032 10.232 13.8002C10.1205 13.6799 9.96614 13.6082 9.80223 13.6006C9.63832 13.5931 9.47801 13.6503 9.35592 13.7599C9.23383 13.8695 9.15974 14.0227 9.14965 14.1865C9.13956 14.3503 9.19428 14.5115 9.302 14.6352C9.64217 15.0139 10.0582 15.3167 10.523 15.5241C10.9878 15.7316 11.491 15.8389 12 15.8392C12.51 15.839 13.0142 15.7313 13.4797 15.5231C13.9453 15.315 14.3617 15.0111 14.702 14.6312C14.8037 14.5064 14.8535 14.3472 14.8409 14.1866C14.8282 14.0261 14.7542 13.8766 14.6342 13.7692C14.5142 13.6618 14.3574 13.6048 14.1965 13.61Z",
        fill: "currentColor"
    }), /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($acw62))).createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.2856 8.31714H17.0228V9.05429C17.0228 9.28161 17.1131 9.49963 17.2738 9.66038C17.4345 9.82112 17.6526 9.91143 17.8799 9.91143C18.1072 9.91143 18.3252 9.82112 18.486 9.66038C18.6467 9.49963 18.737 9.28161 18.737 9.05429V8.31714H19.4828C19.7101 8.31714 19.9281 8.22684 20.0888 8.06609C20.2496 7.90535 20.3399 7.68733 20.3399 7.46C20.3399 7.23267 20.2496 7.01465 20.0888 6.85391C19.9281 6.69316 19.7101 6.60286 19.4828 6.60286H18.737V5.85714C18.737 5.62981 18.6467 5.4118 18.486 5.25105C18.3252 5.09031 18.1072 5 17.8799 5C17.6526 5 17.4345 5.09031 17.2738 5.25105C17.1131 5.4118 17.0228 5.62981 17.0228 5.85714V6.60286H16.2856C16.0583 6.60286 15.8403 6.69316 15.6795 6.85391C15.5188 7.01465 15.4285 7.23267 15.4285 7.46C15.4285 7.68733 15.5188 7.90535 15.6795 8.06609C15.8403 8.22684 16.0583 8.31714 16.2856 8.31714Z",
        fill: "currentColor"
    }));
}

});


parcelRequire.register("bhrJr", function(module, exports) {

$parcel$export(module.exports, "ScrollButtons", () => $8366cb32dc2c212d$export$154bc6e95efc5a0d);

var $02Ztr = parcelRequire("02Ztr");

var $gS6QF = parcelRequire("gS6QF");

var $acw62 = parcelRequire("acw62");

var $8zogs = parcelRequire("8zogs");

var $dnCk4 = parcelRequire("dnCk4");

var $d9q0V = parcelRequire("d9q0V");

var $7gGhC = parcelRequire("7gGhC");

var $8MoF3 = parcelRequire("8MoF3");

var $doByU = parcelRequire("doByU");

var $ciU3d = parcelRequire("ciU3d");
var $8366cb32dc2c212d$var$_templateObject;
var $8366cb32dc2c212d$var$toolbarScrollButtons = (0, $8zogs.css)($8366cb32dc2c212d$var$_templateObject || ($8366cb32dc2c212d$var$_templateObject = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: ",
    ";\n  padding: ",
    " ",
    ";\n  border-left: solid ",
    " 1px;\n  flex-shrink: 0;\n  align-items: center;\n"
])), "var(--ds-space-050, 4px)", "var(--ds-space-050, 4px)", "var(--ds-space-100, 8px)", "var(--ds-border, ".concat((0, $dnCk4.N30), ")"));
var $8366cb32dc2c212d$var$LeftIcon = (0, (/*@__PURE__*/$parcel$interopDefault($d9q0V)));
var $8366cb32dc2c212d$var$RightIcon = (0, (/*@__PURE__*/$parcel$interopDefault($7gGhC)));
var $8366cb32dc2c212d$export$154bc6e95efc5a0d = function ScrollButtons(_ref) {
    var intl = _ref.intl, scrollContainerRef = _ref.scrollContainerRef, node = _ref.node, disabled = _ref.disabled;
    var buttonsContainerRef = (0, $acw62.useRef)(null);
    var _useState = (0, $acw62.useState)(false), _useState2 = (0, (/*@__PURE__*/$parcel$interopDefault($02Ztr)))(_useState, 2), needScroll = _useState2[0], setNeedScroll = _useState2[1];
    var _useState3 = (0, $acw62.useState)(true), _useState4 = (0, (/*@__PURE__*/$parcel$interopDefault($02Ztr)))(_useState3, 2), canScrollLeft = _useState4[0], setCanScrollLeft = _useState4[1];
    var _useState5 = (0, $acw62.useState)(true), _useState6 = (0, (/*@__PURE__*/$parcel$interopDefault($02Ztr)))(_useState5, 2), canScrollRight = _useState6[0], setCanScrollRight = _useState6[1];
    var setCanScrollDebounced = (0, $ciU3d.default)(function() {
        // Refs are null before mounting and after unmount
        if (!scrollContainerRef.current) return;
        var _scrollContainerRef$c = scrollContainerRef.current, scrollLeft = _scrollContainerRef$c.scrollLeft, scrollWidth = _scrollContainerRef$c.scrollWidth, offsetWidth = _scrollContainerRef$c.offsetWidth;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + offsetWidth < scrollWidth - 1); // -1 to account for half pixel
    });
    var onScroll = function onScroll() {
        return setCanScrollDebounced();
    };
    var scrollLeft = function scrollLeft() {
        var _scrollContainerRef$c2, _scrollContainerRef$c3, _scrollContainerRef$c4;
        var _ref2 = ((_scrollContainerRef$c2 = scrollContainerRef.current) === null || _scrollContainerRef$c2 === void 0 ? void 0 : _scrollContainerRef$c2.getBoundingClientRect()) || {}, _ref2$width = _ref2.width, scrollContainerWidth = _ref2$width === void 0 ? 0 : _ref2$width;
        var scrollLeft = ((_scrollContainerRef$c3 = scrollContainerRef.current) === null || _scrollContainerRef$c3 === void 0 ? void 0 : _scrollContainerRef$c3.scrollLeft) || 0;
        // scroll to current position - scroll container width
        var scrollTo = scrollLeft - scrollContainerWidth;
        (_scrollContainerRef$c4 = scrollContainerRef.current) === null || _scrollContainerRef$c4 === void 0 || _scrollContainerRef$c4.scrollTo({
            top: 0,
            left: scrollTo,
            behavior: "smooth"
        });
    };
    var scrollRight = function scrollRight() {
        var _scrollContainerRef$c5, _scrollContainerRef$c6, _scrollContainerRef$c7;
        var _ref3 = ((_scrollContainerRef$c5 = scrollContainerRef.current) === null || _scrollContainerRef$c5 === void 0 ? void 0 : _scrollContainerRef$c5.getBoundingClientRect()) || {}, _ref3$width = _ref3.width, scrollContainerWidth = _ref3$width === void 0 ? 0 : _ref3$width;
        var scrollLeft = ((_scrollContainerRef$c6 = scrollContainerRef.current) === null || _scrollContainerRef$c6 === void 0 ? void 0 : _scrollContainerRef$c6.scrollLeft) || 0;
        // scroll to current position + scroll container width
        var scrollTo = scrollLeft + scrollContainerWidth;
        (_scrollContainerRef$c7 = scrollContainerRef.current) === null || _scrollContainerRef$c7 === void 0 || _scrollContainerRef$c7.scrollTo({
            top: 0,
            left: scrollTo,
            behavior: "smooth"
        });
    };
    var resizeObserver = new ResizeObserver(function(t) {
        var _scrollContainerRef$c8, _scrollContainerRef$c9, _scrollContainerRef$c10;
        var widthNeededToShowAllItems = ((_scrollContainerRef$c8 = scrollContainerRef.current) === null || _scrollContainerRef$c8 === void 0 ? void 0 : _scrollContainerRef$c8.scrollWidth) || 0;
        var availableSpace = (_scrollContainerRef$c9 = scrollContainerRef.current) === null || _scrollContainerRef$c9 === void 0 ? void 0 : (_scrollContainerRef$c10 = _scrollContainerRef$c9.parentNode) === null || _scrollContainerRef$c10 === void 0 ? void 0 : _scrollContainerRef$c10.offsetWidth;
        if (availableSpace >= widthNeededToShowAllItems) setNeedScroll(false);
        else {
            setNeedScroll(true);
            onScroll();
        }
    });
    (0, $acw62.useEffect)(function() {
        onScroll();
        var scrollContainerRefCurrent = scrollContainerRef.current;
        if (scrollContainerRefCurrent) {
            // enable/disable scroll buttons depending on scroll position
            scrollContainerRefCurrent.addEventListener("scroll", onScroll);
            // watch for toolbar resize and show/hide scroll buttons if needed
            resizeObserver.observe(scrollContainerRefCurrent);
        }
        return function() {
            if (scrollContainerRefCurrent) {
                scrollContainerRefCurrent.removeEventListener("scroll", onScroll);
                resizeObserver.unobserve(scrollContainerRefCurrent);
            }
            setCanScrollDebounced.cancel();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, $acw62.useEffect)(function() {
        var scrollContainerRefCurrent = scrollContainerRef.current;
        if (scrollContainerRefCurrent) {
            var _scrollContainerRefCu;
            // reset scroll position when switching from one node with toolbar to another
            // scroll to made optional as it may not be rendered in testing env
            (_scrollContainerRefCu = scrollContainerRefCurrent.scrollTo) === null || _scrollContainerRefCu === void 0 || _scrollContainerRefCu.call(scrollContainerRefCurrent, {
                left: 0
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        node.type
    ]);
    return needScroll ? (0, $8zogs.jsx)("div", {
        ref: buttonsContainerRef,
        css: $8366cb32dc2c212d$var$toolbarScrollButtons,
        className: "scroll-buttons"
    }, (0, $8zogs.jsx)((0, $8MoF3.default), {
        title: intl.formatMessage((0, $doByU.default).floatingToolbarScrollLeft),
        icon: (0, $8zogs.jsx)($8366cb32dc2c212d$var$LeftIcon, {
            label: intl.formatMessage((0, $doByU.default).floatingToolbarScrollLeft)
        }),
        onClick: scrollLeft,
        disabled: !canScrollLeft || disabled
    }), (0, $8zogs.jsx)((0, $8MoF3.default), {
        title: intl.formatMessage((0, $doByU.default).floatingToolbarScrollRight),
        icon: (0, $8zogs.jsx)($8366cb32dc2c212d$var$RightIcon, {
            label: intl.formatMessage((0, $doByU.default).floatingToolbarScrollRight)
        }),
        onClick: scrollRight,
        disabled: !canScrollRight || disabled
    })) : null;
};

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



parcelRequire.register("ju9UL", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;

var $e2f88278aaba07aa$var$_react = $e2f88278aaba07aa$var$_interopRequireDefault((parcelRequire("acw62")));

var $cpJkH = parcelRequire("cpJkH");
function $e2f88278aaba07aa$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $e2f88278aaba07aa$var$SelectClearIcon = (props)=>/*#__PURE__*/ $e2f88278aaba07aa$var$_react.default.createElement($cpJkH.Icon, Object.assign({
        dangerouslySetGlyph: `<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="9"/><path d="M16.155 14.493a1.174 1.174 0 11-1.662 1.663L12 13.662l-2.494 2.494a1.172 1.172 0 01-1.662 0 1.176 1.176 0 010-1.663L10.337 12 7.844 9.507a1.176 1.176 0 011.662-1.662L12 10.338l2.493-2.493a1.174 1.174 0 111.662 1.662L13.662 12l2.493 2.493z" fill="inherit"/></g></svg>`
    }, props));
$e2f88278aaba07aa$var$SelectClearIcon.displayName = "SelectClearIcon";
var $e2f88278aaba07aa$var$_default = $e2f88278aaba07aa$var$SelectClearIcon;
module.exports.default = $e2f88278aaba07aa$var$_default;

});


//# sourceMappingURL=Toolbar.5ec05f18.js.map
