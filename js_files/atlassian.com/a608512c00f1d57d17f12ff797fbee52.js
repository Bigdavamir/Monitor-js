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
parcelRequire.register("f9fQn", function(module, exports) {

$parcel$export(module.exports, "default", () => $b073fc8a3995aa04$export$2e2bcd8739ae039);

var $3p9rK = parcelRequire("3p9rK");

var $fUHKi = parcelRequire("fUHKi");

var $acw62 = parcelRequire("acw62");

var $8zogs = parcelRequire("8zogs");

var $6NnWa = parcelRequire("6NnWa");
var $1wS1J = parcelRequire("1wS1J");
var $hKlYK = parcelRequire("hKlYK");

var $cn4mC = parcelRequire("cn4mC");

var $at3iV = parcelRequire("at3iV");

var $hTEuQ = parcelRequire("hTEuQ");
var $bUA5Z = parcelRequire("bUA5Z");
var $3Fnef = parcelRequire("3Fnef");

var $hayVV = parcelRequire("hayVV");

var $egnaC = parcelRequire("egnaC");

var $gmiqh = parcelRequire("gmiqh");

var $3lIeg = parcelRequire("3lIeg");
var $sVHvX = parcelRequire("sVHvX");

var $1tZWb = parcelRequire("1tZWb");

var $9c9TW = parcelRequire("9c9TW");

var $dKgMd = parcelRequire("dKgMd");

var $8bsHl = parcelRequire("8bsHl");

var $hu5k1 = parcelRequire("hu5k1");

var $kNHon = parcelRequire("kNHon");

var $5otTM = parcelRequire("5otTM");
var $b073fc8a3995aa04$var$messages = (0, $6NnWa.defineMessages)({
    editorHelp: {
        id: "fabric.editor.editorHelp",
        defaultMessage: "Editor help",
        description: "Title of editor help dialog."
    },
    helpDialogTips: {
        id: "fabric.editor.helpDialogTips",
        defaultMessage: "Press {keyMap} to quickly open this dialog at any time",
        description: "Hint about how to open a dialog quickly using a shortcut."
    },
    keyboardShortcuts: {
        id: "fabric.editor.keyboardShortcuts",
        defaultMessage: "Keyboard shortcuts",
        description: ""
    },
    markdown: {
        id: "fabric.editor.markdown",
        defaultMessage: "Markdown",
        description: "It is a name of popular markup language."
    },
    pastePlainText: {
        id: "fabric.editor.pastePlainText",
        defaultMessage: "Paste plain text",
        description: ""
    },
    CheckUncheckActionItem: {
        id: "fabric.editor.checkUncheckActionItem",
        defaultMessage: "Toggle action item",
        description: "For Check/Uncheck Action item use shortcut"
    },
    altText: {
        id: "fabric.editor.altText",
        defaultMessage: "Alt text",
        description: "Alternative text for image."
    },
    closeHelpDialog: {
        id: "fabric.editor.closeHelpDialog",
        defaultMessage: "Close help dialog",
        description: ""
    },
    // TODO: Move it inside quick insert plugin
    quickInsert: {
        id: "fabric.editor.quickInsert",
        defaultMessage: "Quick insert",
        description: "Name of a feature, which let you insert items quickly."
    }
});
var $b073fc8a3995aa04$var$navigationKeymaps = function navigationKeymaps(_ref) {
    var formatMessage = _ref.formatMessage;
    return [
        {
            name: formatMessage((0, $sVHvX.toolbarMessages).navigateToEditorToolbar),
            type: "navigation",
            keymap: function keymap() {
                return 0, $egnaC.navToEditorToolbar;
            }
        },
        {
            name: formatMessage((0, $sVHvX.toolbarMessages).navigateToFloatingToolbar),
            type: "navigation",
            keymap: function keymap() {
                return 0, $egnaC.navToFloatingToolbar;
            }
        }
    ];
};
var $b073fc8a3995aa04$export$e8eb56737f1ebbe8 = function formatting(_ref2) {
    var formatMessage = _ref2.formatMessage;
    return [
        {
            name: formatMessage((0, $sVHvX.toolbarMessages).bold),
            type: "strong",
            keymap: function keymap() {
                return 0, $egnaC.toggleBold;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "**", (0, $8zogs.jsx)((0, $1wS1J.default), (0, $sVHvX.toolbarMessages).bold), "**"));
            }
        },
        {
            name: formatMessage((0, $sVHvX.toolbarMessages).italic),
            type: "em",
            keymap: function keymap() {
                return 0, $egnaC.toggleItalic;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "*", (0, $8zogs.jsx)((0, $1wS1J.default), (0, $sVHvX.toolbarMessages).italic), "*"));
            }
        },
        {
            name: formatMessage((0, $sVHvX.toolbarMessages).underline),
            type: "underline",
            keymap: function keymap() {
                return 0, $egnaC.toggleUnderline;
            }
        },
        {
            name: formatMessage((0, $sVHvX.toolbarMessages).strike),
            type: "strike",
            keymap: function keymap() {
                return 0, $egnaC.toggleStrikethrough;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "~~", (0, $8zogs.jsx)((0, $1wS1J.default), (0, $sVHvX.toolbarMessages).strike), "~~"));
            }
        },
        {
            name: formatMessage((0, $sVHvX.toolbarMessages).subscript),
            type: "subsup",
            keymap: function keymap() {
                return 0, $egnaC.toggleSubscript;
            }
        },
        {
            name: formatMessage((0, $sVHvX.toolbarMessages).superscript),
            type: "subsup",
            keymap: function keymap() {
                return 0, $egnaC.toggleSuperscript;
            }
        },
        {
            name: formatMessage((0, $9c9TW.messages).heading1),
            type: "heading",
            keymap: function keymap() {
                return 0, $egnaC.toggleHeading1;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeSm)
                }, "#"), " ", (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "Space"));
            }
        },
        {
            name: formatMessage((0, $9c9TW.messages).heading2),
            type: "heading",
            keymap: function keymap() {
                return 0, $egnaC.toggleHeading2;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "##"), " ", (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "Space"));
            }
        },
        {
            name: formatMessage((0, $9c9TW.messages).heading3),
            type: "heading",
            keymap: function keymap() {
                return 0, $egnaC.toggleHeading3;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "###"), " ", (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "Space"));
            }
        },
        {
            name: formatMessage((0, $9c9TW.messages).heading4),
            type: "heading",
            keymap: function keymap() {
                return 0, $egnaC.toggleHeading4;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "####"), " ", (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "Space"));
            }
        },
        {
            name: formatMessage((0, $9c9TW.messages).heading5),
            type: "heading",
            keymap: function keymap() {
                return 0, $egnaC.toggleHeading5;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "#####"), " ", (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "Space"));
            }
        },
        {
            name: formatMessage((0, $9c9TW.messages).heading6),
            type: "heading",
            keymap: function keymap() {
                return 0, $egnaC.toggleHeading6;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "######"), " ", (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "Space"));
            }
        },
        {
            name: formatMessage((0, $9c9TW.messages).normal),
            type: "paragraph",
            keymap: function keymap() {
                return 0, $egnaC.setNormalText;
            }
        },
        {
            name: formatMessage((0, $3lIeg.messages).orderedList),
            type: "orderedList",
            keymap: function keymap() {
                return 0, $egnaC.toggleOrderedList;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeSm)
                }, "1."), " ", (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "Space"));
            }
        },
        {
            name: formatMessage((0, $3lIeg.messages).unorderedList),
            type: "bulletList",
            keymap: function keymap() {
                return 0, $egnaC.toggleBulletList;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeSm)
                }, "*"), " ", (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "Space"));
            }
        },
        {
            name: formatMessage((0, $9c9TW.messages).blockquote),
            type: "blockquote",
            keymap: function keymap() {
                return 0, $egnaC.toggleBlockQuote;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, ">"), " ", (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "Space"));
            }
        },
        {
            name: formatMessage((0, $9c9TW.messages).codeblock),
            type: "codeBlock",
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "```"));
            }
        },
        {
            name: formatMessage((0, $1tZWb.toolbarInsertBlockMessages).horizontalRule),
            type: "rule",
            keymap: function keymap() {
                return 0, $egnaC.insertRule;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "---"));
            }
        },
        {
            name: formatMessage((0, $1tZWb.toolbarInsertBlockMessages).link),
            type: "link",
            keymap: function keymap() {
                return 0, $egnaC.addLink;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "[", (0, $8zogs.jsx)((0, $1wS1J.default), (0, $1tZWb.toolbarInsertBlockMessages).link), "](http://a.com)"));
            }
        },
        {
            name: formatMessage((0, $sVHvX.toolbarMessages).code),
            type: "code",
            keymap: function keymap() {
                return 0, $egnaC.toggleCode;
            },
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "`", (0, $8zogs.jsx)((0, $1wS1J.default), (0, $sVHvX.toolbarMessages).code), "`"));
            }
        },
        {
            name: formatMessage((0, $1tZWb.toolbarInsertBlockMessages).action),
            type: "taskItem",
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeSm)
                }, "[]"), " ", (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "Space"));
            }
        },
        {
            name: formatMessage((0, $1tZWb.toolbarInsertBlockMessages).decision),
            type: "decisionItem",
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeSm)
                }, "<>"), " ", (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "Space"));
            }
        },
        {
            name: formatMessage((0, $1tZWb.toolbarInsertBlockMessages).emoji),
            type: "emoji",
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, ":"));
            }
        },
        {
            name: formatMessage((0, $1tZWb.toolbarInsertBlockMessages).mention),
            type: "mention",
            autoFormatting: function autoFormatting() {
                return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                    css: (0, $hayVV.codeLg)
                }, "@"));
            }
        },
        {
            name: formatMessage((0, $8bsHl.alignmentMessages).alignLeft),
            type: "alignment",
            keymap: function keymap() {
                return 0, $egnaC.alignLeft;
            }
        },
        {
            name: formatMessage((0, $8bsHl.alignmentMessages).alignRight),
            type: "alignment"
        }
    ];
};
var $b073fc8a3995aa04$var$shortcutNamesWithoutKeymap = [
    "emoji",
    "mention",
    "quickInsert"
];
var $b073fc8a3995aa04$var$otherFormatting = function otherFormatting(_ref3) {
    var formatMessage = _ref3.formatMessage;
    return [
        {
            name: formatMessage((0, $sVHvX.toolbarMessages).clearFormatting),
            type: "clearFormatting",
            keymap: function keymap() {
                return 0, $egnaC.clearFormatting;
            }
        },
        {
            name: formatMessage((0, $dKgMd.messages).undo),
            type: "undo",
            keymap: function keymap() {
                return 0, $egnaC.undo;
            }
        },
        {
            name: formatMessage((0, $dKgMd.messages).redo),
            type: "redo",
            keymap: function keymap() {
                return 0, $egnaC.redo;
            }
        },
        {
            name: formatMessage($b073fc8a3995aa04$var$messages.pastePlainText),
            type: "paste",
            keymap: function keymap() {
                return 0, $egnaC.pastePlainText;
            }
        },
        {
            name: formatMessage((0, $kNHon.annotationMessages).createComment),
            type: "annotation",
            keymap: function keymap() {
                return 0, $egnaC.addInlineComment;
            }
        },
        {
            name: formatMessage($b073fc8a3995aa04$var$messages.CheckUncheckActionItem),
            type: "checkbox",
            keymap: function keymap() {
                return 0, $egnaC.toggleTaskItemCheckbox;
            }
        }
    ];
};
var $b073fc8a3995aa04$var$imageAutoFormat = {
    name: "Image",
    type: "image",
    autoFormatting: function autoFormatting() {
        return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
            css: (0, $hayVV.codeLg)
        }, "![", (0, $8zogs.jsx)((0, $1wS1J.default), $b073fc8a3995aa04$var$messages.altText), "](http://www.image.com)"));
    }
};
var $b073fc8a3995aa04$var$quickInsertAutoFormat = function quickInsertAutoFormat(_ref4) {
    var formatMessage = _ref4.formatMessage;
    return {
        name: formatMessage($b073fc8a3995aa04$var$messages.quickInsert),
        type: "quickInsert",
        autoFormatting: function autoFormatting() {
            return (0, $8zogs.jsx)("span", null, (0, $8zogs.jsx)("span", {
                css: (0, $hayVV.codeLg)
            }, "/"));
        }
    };
};
var $b073fc8a3995aa04$var$getKeyParts = function getKeyParts(keymap) {
    var shortcut = keymap[(0, $cn4mC.default).mac ? "mac" : "windows"];
    if ((0, $cn4mC.default).mac) shortcut = shortcut.replace("Alt", "Opt");
    return shortcut.replace(/\-(?=.)/g, " + ").split(" ");
};
var $b073fc8a3995aa04$export$49b39f11f17c13f0 = function getSupportedFormatting(schema, intl, imageEnabled, quickInsertEnabled) {
    var supportedBySchema = $b073fc8a3995aa04$export$e8eb56737f1ebbe8(intl).filter(function(format) {
        return schema.nodes[format.type] || schema.marks[format.type];
    });
    return [].concat((0, (/*@__PURE__*/$parcel$interopDefault($fUHKi)))($b073fc8a3995aa04$var$navigationKeymaps(intl)), (0, (/*@__PURE__*/$parcel$interopDefault($fUHKi)))(supportedBySchema), (0, (/*@__PURE__*/$parcel$interopDefault($fUHKi)))(imageEnabled ? [
        $b073fc8a3995aa04$var$imageAutoFormat
    ] : []), (0, (/*@__PURE__*/$parcel$interopDefault($fUHKi)))(quickInsertEnabled ? [
        $b073fc8a3995aa04$var$quickInsertAutoFormat(intl)
    ] : []), (0, (/*@__PURE__*/$parcel$interopDefault($fUHKi)))($b073fc8a3995aa04$var$otherFormatting(intl)));
};
var $b073fc8a3995aa04$export$bad16e05505d5562 = function getComponentFromKeymap(keymap) {
    var keyParts = $b073fc8a3995aa04$var$getKeyParts(keymap);
    return (0, $8zogs.jsx)("span", null, keyParts.map(function(part, index) {
        if (part === "+") return (0, $8zogs.jsx)("span", {
            key: "".concat(keyParts, "-").concat(index)
        }, " + ");
        else if (part === "Cmd") return (0, $8zogs.jsx)("span", {
            css: (0, $hayVV.codeSm),
            key: "".concat(keyParts, "-").concat(index)
        }, "⌘");
        else if ([
            "ctrl",
            "alt",
            "opt",
            "shift"
        ].indexOf(part.toLowerCase()) >= 0) return (0, $8zogs.jsx)("span", {
            css: (0, $hayVV.codeMd),
            key: "".concat(keyParts, "-").concat(index)
        }, part);
        else if ([
            "f9",
            "f10"
        ].indexOf(part.toLowerCase()) >= 0) return (0, $8zogs.jsx)("span", {
            css: (0, $hayVV.codeLg),
            key: "".concat(keyParts, "-").concat(index)
        }, part);
        else if (part.toLowerCase() === "enter") return (0, $8zogs.jsx)("span", {
            css: (0, $hayVV.codeSm),
            key: "".concat(keyParts, "-").concat(index)
        }, "⏎");
        return (0, $8zogs.jsx)("span", {
            css: (0, $hayVV.codeSm),
            key: "".concat(keyParts, "-").concat(index)
        }, part.toUpperCase());
    }));
};
var $b073fc8a3995aa04$var$ModalHeader = (0, $hKlYK.default)(function(_ref5) {
    var formatMessage = _ref5.intl.formatMessage;
    var _useModal = (0, $3Fnef.useModal)(), onClose = _useModal.onClose;
    return (0, $8zogs.jsx)("div", {
        css: (0, $hayVV.header)
    }, (0, $8zogs.jsx)("h1", {
        css: (0, $hayVV.dialogHeader)
    }, (0, $8zogs.jsx)((0, $1wS1J.default), $b073fc8a3995aa04$var$messages.editorHelp)), (0, $8zogs.jsx)("div", null, (0, $8zogs.jsx)((0, $gmiqh.default), {
        onClick: onClose,
        title: formatMessage($b073fc8a3995aa04$var$messages.closeHelpDialog),
        spacing: "compact",
        iconBefore: (0, $8zogs.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($at3iV))), {
            label: formatMessage($b073fc8a3995aa04$var$messages.closeHelpDialog),
            size: "medium"
        })
    })));
});
var $b073fc8a3995aa04$var$ModalFooter = function ModalFooter() {
    return (0, $8zogs.jsx)("div", {
        css: (0, $hayVV.footer)
    }, (0, $8zogs.jsx)((0, $1wS1J.default), (0, (/*@__PURE__*/$parcel$interopDefault($3p9rK)))({}, $b073fc8a3995aa04$var$messages.helpDialogTips, {
        values: {
            keyMap: $b073fc8a3995aa04$export$bad16e05505d5562((0, $egnaC.openHelp))
        }
    })));
};
var $b073fc8a3995aa04$var$HelpDialog = function HelpDialog(_ref6) {
    var pluginInjectionApi = _ref6.pluginInjectionApi, editorView = _ref6.editorView, quickInsertEnabled = _ref6.quickInsertEnabled, intl = _ref6.intl;
    var _useSharedPluginState = (0, $5otTM.useSharedPluginState)(pluginInjectionApi, [
        "helpDialog"
    ]), helpDialogState = _useSharedPluginState.helpDialogState;
    var closeDialog = (0, $acw62.useCallback)(function() {
        var tr = editorView.state.tr, dispatch = editorView.dispatch;
        (0, $hu5k1.closeHelpCommand)(tr, dispatch);
    }, [
        editorView
    ]);
    var handleEsc = (0, $acw62.useCallback)(function(e) {
        if (e.key === "Escape" && helpDialogState !== null && helpDialogState !== void 0 && helpDialogState.isVisible) closeDialog();
    }, [
        closeDialog,
        helpDialogState === null || helpDialogState === void 0 ? void 0 : helpDialogState.isVisible
    ]);
    (0, $acw62.useEffect)(function() {
        document.addEventListener("keydown", handleEsc);
        return function() {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [
        handleEsc
    ]);
    var formatting = $b073fc8a3995aa04$export$49b39f11f17c13f0(editorView.state.schema, intl, helpDialogState === null || helpDialogState === void 0 ? void 0 : helpDialogState.imageEnabled, quickInsertEnabled);
    return (0, $8zogs.jsx)((0, $bUA5Z.default), null, helpDialogState !== null && helpDialogState !== void 0 && helpDialogState.isVisible ? (0, $8zogs.jsx)((0, $hTEuQ.default), {
        width: "large",
        onClose: closeDialog,
        testId: "help-modal-dialog"
    }, (0, $8zogs.jsx)($b073fc8a3995aa04$var$ModalHeader, null), (0, $8zogs.jsx)("div", {
        css: (0, $hayVV.contentWrapper)
    }, (0, $8zogs.jsx)("div", {
        css: (0, $hayVV.line)
    }), (0, $8zogs.jsx)("div", {
        css: (0, $hayVV.content)
    }, (0, $8zogs.jsx)("div", {
        css: (0, $hayVV.column)
    }, (0, $8zogs.jsx)("h2", {
        css: (0, $hayVV.title)
    }, (0, $8zogs.jsx)((0, $1wS1J.default), $b073fc8a3995aa04$var$messages.keyboardShortcuts)), (0, $8zogs.jsx)("ul", null, formatting.filter(function(form) {
        var keymap = form.keymap && form.keymap();
        return keymap && keymap[(0, $cn4mC.default).mac ? "mac" : "windows"];
    }).map(function(form) {
        return (0, $8zogs.jsx)("li", {
            css: (0, $hayVV.row),
            key: "textFormatting-".concat(form.name)
        }, (0, $8zogs.jsx)("span", null, form.name), $b073fc8a3995aa04$export$bad16e05505d5562(form.keymap()));
    }), formatting.filter(function(form) {
        return $b073fc8a3995aa04$var$shortcutNamesWithoutKeymap.indexOf(form.type) !== -1;
    }).filter(function(form) {
        return form.autoFormatting;
    }).map(function(form) {
        return (0, $8zogs.jsx)("li", {
            css: (0, $hayVV.row),
            key: "autoFormatting-".concat(form.name)
        }, (0, $8zogs.jsx)("span", null, form.name), form.autoFormatting());
    }))), (0, $8zogs.jsx)("div", {
        css: (0, $hayVV.line)
    }), (0, $8zogs.jsx)("div", {
        css: (0, $hayVV.column)
    }, (0, $8zogs.jsx)("h2", {
        css: (0, $hayVV.title)
    }, (0, $8zogs.jsx)((0, $1wS1J.default), $b073fc8a3995aa04$var$messages.markdown)), (0, $8zogs.jsx)("ul", null, formatting.filter(function(form) {
        return $b073fc8a3995aa04$var$shortcutNamesWithoutKeymap.indexOf(form.type) === -1;
    }).map(function(form) {
        return form.autoFormatting && (0, $8zogs.jsx)("li", {
            key: "autoFormatting-".concat(form.name),
            css: (0, $hayVV.row)
        }, (0, $8zogs.jsx)("span", null, form.name), form.autoFormatting());
    }))))), (0, $8zogs.jsx)($b073fc8a3995aa04$var$ModalFooter, null)) : null);
};
var $b073fc8a3995aa04$export$2e2bcd8739ae039 = (0, $hKlYK.default)($b073fc8a3995aa04$var$HelpDialog);

});
parcelRequire.register("hayVV", function(module, exports) {

$parcel$export(module.exports, "header", () => $c7fe77e163acfe8a$export$38e42c68cf43b5d4);
$parcel$export(module.exports, "footer", () => $c7fe77e163acfe8a$export$adb608be33961c98);
$parcel$export(module.exports, "contentWrapper", () => $c7fe77e163acfe8a$export$2a82ddc22e8c7fbb);
$parcel$export(module.exports, "line", () => $c7fe77e163acfe8a$export$53f1d5ea8de3d7c);
$parcel$export(module.exports, "content", () => $c7fe77e163acfe8a$export$a7db06668cad9adb);
$parcel$export(module.exports, "column", () => $c7fe77e163acfe8a$export$4e0c71f277ca26b3);
$parcel$export(module.exports, "row", () => $c7fe77e163acfe8a$export$120ff0929b202a6d);
$parcel$export(module.exports, "dialogHeader", () => $c7fe77e163acfe8a$export$9bb6a6f2774dc082);
$parcel$export(module.exports, "title", () => $c7fe77e163acfe8a$export$fb184b623420d9be);
$parcel$export(module.exports, "codeSm", () => $c7fe77e163acfe8a$export$eaf58fc9a4af1cd1);
$parcel$export(module.exports, "codeMd", () => $c7fe77e163acfe8a$export$b66c8226842e8632);
$parcel$export(module.exports, "codeLg", () => $c7fe77e163acfe8a$export$7339ad1acb07ac82);

var $gS6QF = parcelRequire("gS6QF");

var $8zogs = parcelRequire("8zogs");

var $fMv3m = parcelRequire("fMv3m");

var $dnCk4 = parcelRequire("dnCk4");

var $8QnbZ = parcelRequire("8QnbZ");
var $c7fe77e163acfe8a$var$_templateObject, $c7fe77e163acfe8a$var$_templateObject2, $c7fe77e163acfe8a$var$_templateObject3, $c7fe77e163acfe8a$var$_templateObject4, $c7fe77e163acfe8a$var$_templateObject5, $c7fe77e163acfe8a$var$_templateObject6, $c7fe77e163acfe8a$var$_templateObject7, $c7fe77e163acfe8a$var$_templateObject8, $c7fe77e163acfe8a$var$_templateObject9;
var $c7fe77e163acfe8a$export$38e42c68cf43b5d4 = (0, $8zogs.css)($c7fe77e163acfe8a$var$_templateObject || ($c7fe77e163acfe8a$var$_templateObject = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  z-index: ",
    ";\n  min-height: 24px;\n  padding: 20px 40px;\n  font-size: ",
    ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 'none';\n  color: ",
    ";\n  background-color: ",
    ";\n  border-radius: ",
    "px;\n"
])), (0, $8QnbZ.akEditorUnitZIndex), (0, $8QnbZ.relativeFontSizeToBase16)(24), "var(--ds-text, ".concat($dnCk4.N400, ")"), "var(--ds-background-neutral-subtle, ".concat($dnCk4.N0, ")"), (0, $fMv3m.borderRadius)());
var $c7fe77e163acfe8a$export$adb608be33961c98 = (0, $8zogs.css)($c7fe77e163acfe8a$var$_templateObject2 || ($c7fe77e163acfe8a$var$_templateObject2 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  z-index: ",
    ";\n  font-size: ",
    ";\n  line-height: 20px;\n  color: ",
    ";\n  padding: 24px;\n  text-align: right;\n  box-shadow: 'none';\n"
])), (0, $8QnbZ.akEditorUnitZIndex), (0, $8QnbZ.relativeFontSizeToBase16)(14), "var(--ds-text-subtlest, ".concat($dnCk4.N300, ")"));
var $c7fe77e163acfe8a$export$2a82ddc22e8c7fbb = (0, $8zogs.css)($c7fe77e163acfe8a$var$_templateObject3 || ($c7fe77e163acfe8a$var$_templateObject3 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  padding: 20px 44px;\n  border-bottom-right-radius: ",
    "px;\n  overflow: auto;\n  position: relative;\n  color: ",
    ";\n  background-color: ",
    ";\n"
])), (0, $fMv3m.borderRadius)(), "var(--ds-text-subtle, ".concat($dnCk4.N400, ")"), "var(--ds-background-neutral-subtle, ".concat($dnCk4.N0, ")"));
var $c7fe77e163acfe8a$export$53f1d5ea8de3d7c = (0, $8zogs.css)($c7fe77e163acfe8a$var$_templateObject4 || ($c7fe77e163acfe8a$var$_templateObject4 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  background: ",
    ";\n  content: '';\n  display: block;\n  height: 2px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  min-width: 604px;\n"
])), "var(--ds-background-neutral-subtle, #fff)");
var $c7fe77e163acfe8a$export$a7db06668cad9adb = (0, $8zogs.css)($c7fe77e163acfe8a$var$_templateObject5 || ($c7fe77e163acfe8a$var$_templateObject5 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  min-width: 524px;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n"
])));
var $c7fe77e163acfe8a$export$4e0c71f277ca26b3 = {
    width: "44%",
    "& > ul": {
        padding: 0
    }
};
var $c7fe77e163acfe8a$export$120ff0929b202a6d = (0, $8zogs.css)($c7fe77e163acfe8a$var$_templateObject6 || ($c7fe77e163acfe8a$var$_templateObject6 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n"
])));
var $c7fe77e163acfe8a$export$9bb6a6f2774dc082 = {
    "&": {
        fontSize: (0, $8QnbZ.relativeFontSizeToBase16)(24),
        fontWeight: 400,
        color: "var(--ds-text-subtle, ".concat((0, $dnCk4.N400), ")"),
        letterSpacing: "normal",
        lineHeight: 1.42857142857143
    }
};
var $c7fe77e163acfe8a$export$fb184b623420d9be = {
    "&": {
        fontSize: (0, $8QnbZ.relativeFontSizeToBase16)(18),
        fontWeight: 400,
        color: "var(--ds-text-subtle, ".concat((0, $dnCk4.N400), ")"),
        letterSpacing: "normal",
        lineHeight: 1.42857142857143
    }
};
var $c7fe77e163acfe8a$export$eaf58fc9a4af1cd1 = (0, $8zogs.css)($c7fe77e163acfe8a$var$_templateObject7 || ($c7fe77e163acfe8a$var$_templateObject7 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  background-color: ",
    ";\n  border-radius: ",
    "px;\n  width: 24px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n"
])), "var(--ds-background-neutral, ".concat($dnCk4.N20, ")"), (0, $fMv3m.borderRadius)());
var $c7fe77e163acfe8a$export$b66c8226842e8632 = (0, $8zogs.css)($c7fe77e163acfe8a$var$_templateObject8 || ($c7fe77e163acfe8a$var$_templateObject8 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  background-color: ",
    ";\n  border-radius: ",
    "px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  width: 50px;\n  text-align: center;\n"
])), "var(--ds-background-neutral, ".concat($dnCk4.N20, ")"), (0, $fMv3m.borderRadius)());
var $c7fe77e163acfe8a$export$7339ad1acb07ac82 = (0, $8zogs.css)($c7fe77e163acfe8a$var$_templateObject9 || ($c7fe77e163acfe8a$var$_templateObject9 = (0, (/*@__PURE__*/$parcel$interopDefault($gS6QF)))([
    "\n  background-color: ",
    ";\n  border-radius: ",
    "px;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 10px;\n  text-align: center;\n"
])), "var(--ds-background-neutral, ".concat($dnCk4.N20, ")"), (0, $fMv3m.borderRadius)());

});



//# sourceMappingURL=ui.03efa51e.js.map
