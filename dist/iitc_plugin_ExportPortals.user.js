// ==UserScript==
// @name            IITC plugin: ExportPortals
// @id              iitc_plugin_ExportPortals
// @category        Misc
// @version         0.0.0
// @namespace       https://github.com/IITC-CE/ingress-intel-total-conversion
// @match           https://intel.ingress.com/*
// @author          elkuku
// @icon64          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA2xSURBVHic3Zt5cJ3VecZ/3/3urrtfyZK1WF4kS5YsSw4QswbGmBBDCI4JbUJpyzAQmGba0jS0TOiStklaQgJkUloomaZpghmGYYgxNkmcmIFaGDtEkq3Fi2RL8qJdutLV3b+tf3y+17rSlaUrXUltnhmPR0dnec+j8z7nPee8H6ws3Cs8/oqhGPhvQAU+BD65suYsH6zA00AI0Kb8U4EfoxPzO4v7gW4uT7qwsFDbvn27VlFRoQmCkCRiEvg6OlHLAmEZxtgKvAB8CsDhcFBXV0dZWVmqwuTkJC0tLfT39yeLLqKvlJ+gE7NkWEoC/MDfAV8BRKPRSFVVFZs2bcJgMGRsMDg4SHNzM8FgMFl0FPjzy/8vCZaCABPwJ8A/AG5BEFizZg319fVYrVdWdqxgC6NVf4wp2EP+qR9jSOiTVlWVs2fP0tbWhiRJoOvDq8CTwGCujc01ATuA7wM1AH6/n4aGBvx+f6qCZF/N6OZHiTnXXTFClfB2v42z910ETQEgkUjQ3t5OV1cXmqaBLpzfA/4ZiOfK4FwRUAU8B9wFYLPZqKurY+3atakKqsnO+MYvMVl0IxqZXUCUgvjO7CFv4MqKDwQCtLS0MDw8nCzqQhfKN3Jh+GIJ8ALfQF/yRlEUqa6uprq6GlEUL49gIFi+k/F1n0M1mNMai0oUVbSiTTPDGuzG3/FDTOG+VFlfXx/Nzc2Ew+Fk0SHgCaB1MRNYKAFG4GHgm0ABQFlZGfX19djt9lSlWH4dI9UPI1s86YNqCq5L7+HpfB3ZXsho7ZeJOdZMG0Ijb+g3+E+/OkMfWltbkWUZQAb+E/gbYJgFYCEE3A48D9QB+Hw+GhoayM/PT1WQ7UWM1jxE1F01ramGffwk/taXERPBtN9Ei65ntOoPkI2OdANVCXfvAdw9+xFUSa8bjdLe3k53d3dSHwLAM5ftSmQzmWwIqAS+hR7QYLPZqK2tZd26dQiC3o0mWglU/h6TJbfO8HNLdBB/28uYg92zDqAhENywi4nyu1AFY9rvjIkJvJ2vpenD2NgYLS0tjIyMJItOA38J7J/vpOZDgAP4GvAUYBFFkcrKSmpqajAajSnDQ2XbCWy4H1W0pDUWlSi+06+S1984X5tQjDYCmx8h5N86w0TLZC/5HT/EFLqYKrtw4QLHjx8nEokki36Frg/tc411NQIMwIPAd4BCgOLiYrZu3UpeXl6qku7nDyFbfOkdT/FzQZXnsiMjJEfJvPVBURQ6Ozvp6OhI6oME/Dt6MDYx2xizEXAbevhaD+D1emloaKCgoCBVQc4rYnTTVfy87T8Q47OOmxUiRdsYq3pwFn3Yj7vnQJo+nDhxgt7e3mS1UeCfgH8FlOl9ZyLgu+h+hNVqTe3n8/Fzc2wIf+tLWK7i5wuFhkCw4j4m1tyZWR/OvEbe4BV9GB4epqWlhUAgkCw6CtyCvjJSyERAp9VqrSgtLaWurg6TyZQy4Kp+3rmHvEuHFznNuZGNPmiaRnd3N01NTaiqCrAGuDC1TUYCVq9eXbF+/Xr8fj9Wq5WYv46RTUvj5wuF5ChltPbRzPoweAz/mT0pfXjrrbeS54oZBBiZBaqqMjExwaRjA+GGr84YxDHaiq/9FQxSaPGzWQBMoYsUHf17IsU3MbrxARQxGYAJhAu3ITnLKD7y9Jz9zEpAEjJi2s+CpuDp3ou7e9+CDM817H2N2IaaGWx4gpi7MlWuTQu7Z8OcBEyFgIYmiATW7ybqq8V7eg+W0PnsLM4hNNFCqORWAuV3o5pdun1ZBrdZEYCmYv7gm8jXPkbMU0X/J79B3vDHeDtfxxgbzaqrxUATRMLFtxBYdy+KxQOaHhcIaIRWZXe/mh0BgHjpKOJAM3LVvcibv0h41XVE/HW4ew7gPv8LBHX+obhidiEoCQxKbF71NQQiq64lsOE+ZHshALaxDrxn38Ac7CFQ81C208meAACUBMaONxDPHUTa8ocoG+5kfMNuQqW34e16Q9+Ptdmv8iR7EcE1nyG0+kYEVcZ56T1cFw4ixsdnbRP11RCo+H0STl31LRNdeM++iTVwakFTSGJhBFyGEBvHfOwHaGf2IX3iy8hFDQzXPkaw7A58Z17DMtGVVj/u3kCwfCeRgk+gISBoCqpoZaL8LoJlnyZv8CPcve+m3QPEPRsJbNhNzKNHnObwJdzn9pI39JvFmJ7CoghIQhjvwXzo6yhFDcjXPEbcvZ7+a5/GPnIc75k9yLZ8Jss+TSS/HgCDEsPZ9z9ECrYixiewBM8xWfwpQqtvJlR0E7bASayjrcS91ak2xtgInp795F16HyGHF8U5ISAJcaAF8d0/Ra68G2nzA0Ty64n4t8DlMNoYG8V1/pc4+z5AUGJE/HUIqoTvzB7c3W8zWbaDydLbifpqiPpq9DbxMTzn9uLobwRtRii/aOSUAABUGePpvRh7DiFtfRR5/Q7E2Bi+c29iHziauvSEy2GooJ8nRCmE59zPcPe+S7DkNgKVX0RMBCn58KnUQWcpkPl2MheIT2LoOQSAZbyTvP4P0yYP6EIppO/bghLHMXBEN04KL+nkYSkJmA80NevAJddYFgK0WbdELeUCK4UVISDhKGV48+PIjhLizrWM1DyCbM2fpfXSIvcimAFJAuKu9Yyv/SzR/AZAxTHwEZpgIFR0I+HCbTj63sfT8w5o6nKYBSwTAarZyVD9E0Ty6xE0hbyBI3h69mGKDADgznubifW7mCy9ndDqm3EMfrQcZgHLRIBUUIesJnBdOIir9+cY42NpvzeH+yho/Tec7krGN+xmsvjW5TALWGINEORYajlrGsiKijDL0ziAJprBcOVvIkrBWevmCku6Agwjp7Due0Q/OVbsJLL2TiJrbsc+cBTv+QOpmH96vC9GR/BcPIjj4ntLaR6wDC4ghAYw/fZljCffRK7+PErFTiLFNxEtvhHbUBOKxU3cXaEbEx3C072PvIEjM4OmrAeeX3yxLBoAIERGMDW9grH9deSNn0Ou3kVk1TW6EbmceJZYNgKSEOJBTK0/xTjwMbE7nsMU7qfk6N8uyUFnPli5MEzWkzzExMSKTR5W+iywpJifBmRHgCCgWf/vZrcq094O54OsCNAwEN/1E+StD4NoynqwpULCWU7/Dd8mVHBN1m3nFsHQIAYlnnoP1AxGpE1fQKm4E9PHL2HoXvq9ejaoJgejmx8l7Ktj+pI3B8/Nq485V4Bh4jzmN7+EqfuXaYcU1eQkfsOTJO55BdVXeZUelgCCyETFF7hwy/OEfVuYOnmjFGTV8R9QcOLFeXWVaQVIkiQxNDSE3+/HZrMhyDGMR15APLEH+aYnkfNrU5UVZwnqZ76POHQc4+FnEGKzX23nApHCaxmt+iMUkzOtXFAlPL37cXe/k9pVQqEQLS0tyYdRmPY0Dkx7+NNxPhKJ3BqLxZySJCHLMlarFYPBgCCFEc8exDjcjlZYh2a6kimi5hUhV9+LYPMiDLQgzHWktXmRK+/GGBvRLzznQMJRyvDWrzJRegda2vO8Rt7wbyls+g620VZAQ5Ik2traOHbsWDLtNgr8I3BgPgScAV6SZVkOhULb4vG4KR6Po6oqVqsVQRAQQgOIp/dikKNoq2rRkgcYwYDq34hSdQ+G+ARC4OyiCVCNeYzWPcbYxgeQzenpdpbQBQqbn8V14dcY1ASaptHb20tjYyODg4PJe4h3gHuAtzP1P9dmWQp8WxTFB91ut+ByufB6vbhcrlQFzWhFue5xpLU7ZlxviZMXMTY+i2Gsc0bHmncdsZ0vYg2coqjpmQyWiUysu4fxtXehCek7jlGaxHfyv7APN6XKhoeHaW5uZnw85YLN6IlSH1xtgvO9kdwGvGA2m69PEuDz+dKSnzVHIfKNX0vTh+QAmfThagRk4+fZ5gRNRyYXyIRLwI8URTkXDodviEajjkQika4Picv6MNKBWrRlFn3wIAwc1/Uhgwtc3c+bKGx6JuXniqJw8uRJjhw5kswDkoAXgc8D7zPP7wzmSwCXOzyOrg9SKBS6IZFIGDPpg/H0XgxyLIM+VKFs/CyGeBAhOpYiwD7SMrufhy9S2PQsrou6n4OeF3j48GH6+vqSfv4rYBf6BxZZZZIv5lK+Al0f7ne73Xg8HjweD07nlGVrsiFd9xXk8ttm6IMxMohsL8QUG0W2uNGmZ35JE/hP/gjb8PFUWYbM0FPoGW0z1H2+yMWrxHbgebPZvCWpD36/H4tlyhJ2lSDd/FfInrkDJoMq4e7+Ge7en6cCrwy5wWPo29qL6AnTC0aunmWSWaXP2u32VR6PB7fbjd/vv5I2D6gl25C2/Rmq1TvTEE3FMfQR3tOvYpD0lNcM2Z+Lzg6fMW4uOpkCL/DXgiD8hdPpNLvdbrxeLx6PJ5VoiSCgbNqNXPdg6nxhCV/E3/oS5vClVEcZvg/4Nfq21pZLg5fqYW4j8Jwoincn9cHr9eJwTDmummxo1z2Oa6IN+8iJVHGGL0Q60b8gy8kXItOx1C+TO9Djh9pM+mA2m/F6dXeIx+N0dHRM/UZoHPgX9JzlnH0jNB3ZbIMLwTngFUVRRsPh8PWxWMw6dds0m82YzWa6urpobGxM/tVV4KfAvcAvmEcw8/8FBcDLgiDILpdLKy8v12prazWHwzH1E9pDXM5Q/11GPfCe0WjUnE5ncuJngd0ra9by4z70v/hTLOO3wtPxv8EA3YCUDCjNAAAAAElFTkSuQmCC
// ==/UserScript==
function wrapper(SCRIPT_INFO) {
(() => {
    "use strict";
    var __webpack_modules__ = {
        27: (__unused_webpack_module, exports, __webpack_require__) => {
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.__esModule = !0, exports.parseWithoutProcessing = parseWithoutProcessing, 
            exports.parse = function parse(input, options) {
                var ast = parseWithoutProcessing(input, options);
                return new _whitespaceControl2.default(options).accept(ast);
            };
            var _parser2 = _interopRequireDefault(__webpack_require__(201)), _whitespaceControl2 = _interopRequireDefault(__webpack_require__(915)), Helpers = function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }(__webpack_require__(425)), _utils = __webpack_require__(849);
            exports.parser = _parser2.default;
            var yy = {};
            function parseWithoutProcessing(input, options) {
                return "Program" === input.type ? input : (_parser2.default.yy = yy, yy.locInfo = function(locInfo) {
                    return new yy.SourceLocation(options && options.srcName, locInfo);
                }, _parser2.default.parse(input));
            }
            _utils.extend(yy, Helpers);
        },
        56: (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = function setAttributesWithoutAttributes(styleElement) {
                var nonce = __webpack_require__.nc;
                nonce && styleElement.setAttribute("nonce", nonce);
            };
        },
        72: module => {
            var stylesInDOM = [];
            function getIndexByIdentifier(identifier) {
                for (var result = -1, i = 0; i < stylesInDOM.length; i++) if (stylesInDOM[i].identifier === identifier) {
                    result = i;
                    break;
                }
                return result;
            }
            function modulesToDom(list, options) {
                for (var idCountMap = {}, identifiers = [], i = 0; i < list.length; i++) {
                    var item = list[i], id = options.base ? item[0] + options.base : item[0], count = idCountMap[id] || 0, identifier = "".concat(id, " ").concat(count);
                    idCountMap[id] = count + 1;
                    var indexByIdentifier = getIndexByIdentifier(identifier), obj = {
                        css: item[1],
                        media: item[2],
                        sourceMap: item[3],
                        supports: item[4],
                        layer: item[5]
                    };
                    if (-1 !== indexByIdentifier) stylesInDOM[indexByIdentifier].references++, stylesInDOM[indexByIdentifier].updater(obj); else {
                        var updater = addElementStyle(obj, options);
                        options.byIndex = i, stylesInDOM.splice(i, 0, {
                            identifier,
                            updater,
                            references: 1
                        });
                    }
                    identifiers.push(identifier);
                }
                return identifiers;
            }
            function addElementStyle(obj, options) {
                var api = options.domAPI(options);
                api.update(obj);
                return function updater(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) return;
                        api.update(obj = newObj);
                    } else api.remove();
                };
            }
            module.exports = function(list, options) {
                var lastIdentifiers = modulesToDom(list = list || [], options = options || {});
                return function update(newList) {
                    newList = newList || [];
                    for (var i = 0; i < lastIdentifiers.length; i++) {
                        var index = getIndexByIdentifier(lastIdentifiers[i]);
                        stylesInDOM[index].references--;
                    }
                    for (var newLastIdentifiers = modulesToDom(newList, options), _i = 0; _i < lastIdentifiers.length; _i++) {
                        var _index = getIndexByIdentifier(lastIdentifiers[_i]);
                        0 === stylesInDOM[_index].references && (stylesInDOM[_index].updater(), stylesInDOM.splice(_index, 1));
                    }
                    lastIdentifiers = newLastIdentifiers;
                };
            };
        },
        97: (module, exports, __webpack_require__) => {
            exports.__esModule = !0;
            var _utils = __webpack_require__(849);
            exports.default = function(instance) {
                instance.registerHelper("blockHelperMissing", function(context, options) {
                    var inverse = options.inverse, fn = options.fn;
                    if (!0 === context) return fn(this);
                    if (!1 === context || null == context) return inverse(this);
                    if (_utils.isArray(context)) return context.length > 0 ? (options.ids && (options.ids = [ options.name ]), 
                    instance.helpers.each(context, options)) : inverse(this);
                    if (options.data && options.ids) {
                        var data = _utils.createFrame(options.data);
                        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name), 
                        options = {
                            data
                        };
                    }
                    return fn(context, options);
                });
            }, module.exports = exports.default;
        },
        113: module => {
            module.exports = function styleTagTransform(css, styleElement) {
                if (styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
                    for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
                    styleElement.appendChild(document.createTextNode(css));
                }
            };
        },
        127: (__unused_webpack_module, exports, __webpack_require__) => {
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.__esModule = !0, exports.Compiler = Compiler, exports.precompile = function precompile(input, options, env) {
                if (null == input || "string" != typeof input && "Program" !== input.type) throw new _exception2.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
                "data" in (options = options || {}) || (options.data = !0);
                options.compat && (options.useDepths = !0);
                var ast = env.parse(input, options), environment = (new env.Compiler).compile(ast, options);
                return (new env.JavaScriptCompiler).compile(environment, options);
            }, exports.compile = function compile(input, options, env) {
                void 0 === options && (options = {});
                if (null == input || "string" != typeof input && "Program" !== input.type) throw new _exception2.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
                "data" in (options = _utils.extend({}, options)) || (options.data = !0);
                options.compat && (options.useDepths = !0);
                var compiled = void 0;
                function compileInput() {
                    var ast = env.parse(input, options), environment = (new env.Compiler).compile(ast, options), templateSpec = (new env.JavaScriptCompiler).compile(environment, options, void 0, !0);
                    return env.template(templateSpec);
                }
                function ret(context, execOptions) {
                    return compiled || (compiled = compileInput()), compiled.call(this, context, execOptions);
                }
                return ret._setup = function(setupOptions) {
                    return compiled || (compiled = compileInput()), compiled._setup(setupOptions);
                }, ret._child = function(i, data, blockParams, depths) {
                    return compiled || (compiled = compileInput()), compiled._child(i, data, blockParams, depths);
                }, ret;
            };
            var _exception2 = _interopRequireDefault(__webpack_require__(769)), _utils = __webpack_require__(849), _ast2 = _interopRequireDefault(__webpack_require__(919)), slice = [].slice;
            function Compiler() {}
            function argEquals(a, b) {
                if (a === b) return !0;
                if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
                    for (var i = 0; i < a.length; i++) if (!argEquals(a[i], b[i])) return !1;
                    return !0;
                }
            }
            function transformLiteralToPath(sexpr) {
                if (!sexpr.path.parts) {
                    var literal = sexpr.path;
                    sexpr.path = {
                        type: "PathExpression",
                        data: !1,
                        depth: 0,
                        parts: [ literal.original + "" ],
                        original: literal.original + "",
                        loc: literal.loc
                    };
                }
            }
            Compiler.prototype = {
                compiler: Compiler,
                equals: function equals(other) {
                    var len = this.opcodes.length;
                    if (other.opcodes.length !== len) return !1;
                    for (var i = 0; i < len; i++) {
                        var opcode = this.opcodes[i], otherOpcode = other.opcodes[i];
                        if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) return !1;
                    }
                    len = this.children.length;
                    for (i = 0; i < len; i++) if (!this.children[i].equals(other.children[i])) return !1;
                    return !0;
                },
                guid: 0,
                compile: function compile(program, options) {
                    return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = options, 
                    this.stringParams = options.stringParams, this.trackIds = options.trackIds, options.blockParams = options.blockParams || [], 
                    options.knownHelpers = _utils.extend(Object.create(null), {
                        helperMissing: !0,
                        blockHelperMissing: !0,
                        each: !0,
                        if: !0,
                        unless: !0,
                        with: !0,
                        log: !0,
                        lookup: !0
                    }, options.knownHelpers), this.accept(program);
                },
                compileProgram: function compileProgram(program) {
                    var result = (new this.compiler).compile(program, this.options), guid = this.guid++;
                    return this.usePartial = this.usePartial || result.usePartial, this.children[guid] = result, 
                    this.useDepths = this.useDepths || result.useDepths, guid;
                },
                accept: function accept(node) {
                    if (!this[node.type]) throw new _exception2.default("Unknown type: " + node.type, node);
                    this.sourceNode.unshift(node);
                    var ret = this[node.type](node);
                    return this.sourceNode.shift(), ret;
                },
                Program: function Program(program) {
                    this.options.blockParams.unshift(program.blockParams);
                    for (var body = program.body, bodyLength = body.length, i = 0; i < bodyLength; i++) this.accept(body[i]);
                    return this.options.blockParams.shift(), this.isSimple = 1 === bodyLength, this.blockParams = program.blockParams ? program.blockParams.length : 0, 
                    this;
                },
                BlockStatement: function BlockStatement(block) {
                    transformLiteralToPath(block);
                    var program = block.program, inverse = block.inverse;
                    program = program && this.compileProgram(program), inverse = inverse && this.compileProgram(inverse);
                    var type = this.classifySexpr(block);
                    "helper" === type ? this.helperSexpr(block, program, inverse) : "simple" === type ? (this.simpleSexpr(block), 
                    this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), this.opcode("emptyHash"), 
                    this.opcode("blockValue", block.path.original)) : (this.ambiguousSexpr(block, program, inverse), 
                    this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), this.opcode("emptyHash"), 
                    this.opcode("ambiguousBlockValue")), this.opcode("append");
                },
                DecoratorBlock: function DecoratorBlock(decorator) {
                    var program = decorator.program && this.compileProgram(decorator.program), params = this.setupFullMustacheParams(decorator, program, void 0), path = decorator.path;
                    this.useDecorators = !0, this.opcode("registerDecorator", params.length, path.original);
                },
                PartialStatement: function PartialStatement(partial) {
                    this.usePartial = !0;
                    var program = partial.program;
                    program && (program = this.compileProgram(partial.program));
                    var params = partial.params;
                    if (params.length > 1) throw new _exception2.default("Unsupported number of partial arguments: " + params.length, partial);
                    params.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : params.push({
                        type: "PathExpression",
                        parts: [],
                        depth: 0
                    }));
                    var partialName = partial.name.original, isDynamic = "SubExpression" === partial.name.type;
                    isDynamic && this.accept(partial.name), this.setupFullMustacheParams(partial, program, void 0, !0);
                    var indent = partial.indent || "";
                    this.options.preventIndent && indent && (this.opcode("appendContent", indent), indent = ""), 
                    this.opcode("invokePartial", isDynamic, partialName, indent), this.opcode("append");
                },
                PartialBlockStatement: function PartialBlockStatement(partialBlock) {
                    this.PartialStatement(partialBlock);
                },
                MustacheStatement: function MustacheStatement(mustache) {
                    this.SubExpression(mustache), mustache.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
                },
                Decorator: function Decorator(decorator) {
                    this.DecoratorBlock(decorator);
                },
                ContentStatement: function ContentStatement(content) {
                    content.value && this.opcode("appendContent", content.value);
                },
                CommentStatement: function CommentStatement() {},
                SubExpression: function SubExpression(sexpr) {
                    transformLiteralToPath(sexpr);
                    var type = this.classifySexpr(sexpr);
                    "simple" === type ? this.simpleSexpr(sexpr) : "helper" === type ? this.helperSexpr(sexpr) : this.ambiguousSexpr(sexpr);
                },
                ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
                    var path = sexpr.path, name = path.parts[0], isBlock = null != program || null != inverse;
                    this.opcode("getContext", path.depth), this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), 
                    path.strict = !0, this.accept(path), this.opcode("invokeAmbiguous", name, isBlock);
                },
                simpleSexpr: function simpleSexpr(sexpr) {
                    var path = sexpr.path;
                    path.strict = !0, this.accept(path), this.opcode("resolvePossibleLambda");
                },
                helperSexpr: function helperSexpr(sexpr, program, inverse) {
                    var params = this.setupFullMustacheParams(sexpr, program, inverse), path = sexpr.path, name = path.parts[0];
                    if (this.options.knownHelpers[name]) this.opcode("invokeKnownHelper", params.length, name); else {
                        if (this.options.knownHelpersOnly) throw new _exception2.default("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
                        path.strict = !0, path.falsy = !0, this.accept(path), this.opcode("invokeHelper", params.length, path.original, _ast2.default.helpers.simpleId(path));
                    }
                },
                PathExpression: function PathExpression(path) {
                    this.addDepth(path.depth), this.opcode("getContext", path.depth);
                    var name = path.parts[0], scoped = _ast2.default.helpers.scopedId(path), blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
                    blockParamId ? this.opcode("lookupBlockParam", blockParamId, path.parts) : name ? path.data ? (this.options.data = !0, 
                    this.opcode("lookupData", path.depth, path.parts, path.strict)) : this.opcode("lookupOnContext", path.parts, path.falsy, path.strict, scoped) : this.opcode("pushContext");
                },
                StringLiteral: function StringLiteral(string) {
                    this.opcode("pushString", string.value);
                },
                NumberLiteral: function NumberLiteral(number) {
                    this.opcode("pushLiteral", number.value);
                },
                BooleanLiteral: function BooleanLiteral(bool) {
                    this.opcode("pushLiteral", bool.value);
                },
                UndefinedLiteral: function UndefinedLiteral() {
                    this.opcode("pushLiteral", "undefined");
                },
                NullLiteral: function NullLiteral() {
                    this.opcode("pushLiteral", "null");
                },
                Hash: function Hash(hash) {
                    var pairs = hash.pairs, i = 0, l = pairs.length;
                    for (this.opcode("pushHash"); i < l; i++) this.pushParam(pairs[i].value);
                    for (;i--; ) this.opcode("assignToHash", pairs[i].key);
                    this.opcode("popHash");
                },
                opcode: function opcode(name) {
                    this.opcodes.push({
                        opcode: name,
                        args: slice.call(arguments, 1),
                        loc: this.sourceNode[0].loc
                    });
                },
                addDepth: function addDepth(depth) {
                    depth && (this.useDepths = !0);
                },
                classifySexpr: function classifySexpr(sexpr) {
                    var isSimple = _ast2.default.helpers.simpleId(sexpr.path), isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]), isHelper = !isBlockParam && _ast2.default.helpers.helperExpression(sexpr), isEligible = !isBlockParam && (isHelper || isSimple);
                    if (isEligible && !isHelper) {
                        var _name = sexpr.path.parts[0], options = this.options;
                        options.knownHelpers[_name] ? isHelper = !0 : options.knownHelpersOnly && (isEligible = !1);
                    }
                    return isHelper ? "helper" : isEligible ? "ambiguous" : "simple";
                },
                pushParams: function pushParams(params) {
                    for (var i = 0, l = params.length; i < l; i++) this.pushParam(params[i]);
                },
                pushParam: function pushParam(val) {
                    var value = null != val.value ? val.value : val.original || "";
                    if (this.stringParams) value.replace && (value = value.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), 
                    val.depth && this.addDepth(val.depth), this.opcode("getContext", val.depth || 0), 
                    this.opcode("pushStringParam", value, val.type), "SubExpression" === val.type && this.accept(val); else {
                        if (this.trackIds) {
                            var blockParamIndex = void 0;
                            if (!val.parts || _ast2.default.helpers.scopedId(val) || val.depth || (blockParamIndex = this.blockParamIndex(val.parts[0])), 
                            blockParamIndex) {
                                var blockParamChild = val.parts.slice(1).join(".");
                                this.opcode("pushId", "BlockParam", blockParamIndex, blockParamChild);
                            } else (value = val.original || value).replace && (value = value.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), 
                            this.opcode("pushId", val.type, value);
                        }
                        this.accept(val);
                    }
                },
                setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
                    var params = sexpr.params;
                    return this.pushParams(params), this.opcode("pushProgram", program), this.opcode("pushProgram", inverse), 
                    sexpr.hash ? this.accept(sexpr.hash) : this.opcode("emptyHash", omitEmpty), params;
                },
                blockParamIndex: function blockParamIndex(name) {
                    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
                        var blockParams = this.options.blockParams[depth], param = blockParams && _utils.indexOf(blockParams, name);
                        if (blockParams && param >= 0) return [ depth, param ];
                    }
                }
            };
        },
        132: module => {
            module.exports = JSON.parse('{"result":[["e8365744fb72428b969e05ecc1043be0.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"MEET","multiplierE6":1000000}}],["c0235795699944a284c5d8d2b5a97aaa.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FW_ENL","multiplierE6":1000000}}],["180d34b89b5246c7ac163ec0d8ac0135.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["42c1af5f94de4f30b339cada60d1ce1f.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["52b0daecd0e74c96b09b2775739cb6d1.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["e3c3a81dcd574e8aa370ca489a000793.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["35c8b1a181124845af28a74fb0732416.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["3470164fb83248f4ac4842e1dc669b63.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["d025fb3863894c2796ed07f9f72af636.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["ba010eb98dcb4663a03fd001984529cb.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["3a3c8d915f9041e9a904af41ddb345bd.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["b035f29e165f46f4b8a5f02695651e3e.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["18f35b2ca5ac4be1b85cde0fe52566d3.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"TOASTY","multiplierE6":1000000}}],["c431c53c5f3a48de84eda48e29c223bf.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["b849b004323a4f37a7a2dccd8322811e.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["16243acd24eb4516908a37bf6c7dbdee.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["4adf3d64f0ea46678c368ecd4e167430.5",0,{"resource":{"resourceType":"CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":100,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"41743D5D"}}],["d36751d233e7473db4903866ebc4a503.5",0,{"resource":{"resourceType":"CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":100,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"F190A8DF"}}],["bdf0a4a920974895808e67d69a1bcc12.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["5d6d0102e8ab42fa82a3b78b73551668.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["6509efc3aaa241a58a732ad21a19eb50.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["41ce63a619474ae6bea0c0450155f8c9.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["0178a4393fec48acac37c6dee551a776.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["bc897d1654724bd585a2233a8fddac30.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["cc082f1680a44e60975a1817d95c9108.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["334b03e2fd8d4d63874547561154b59e.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"EA80C17B"}}],["1a4310c757ad413eabd204fab5ec4170.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"NIA","multiplierE6":1000000}}],["efa96998792e4438af1013811b06c579.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["1c916587b83744129c21548faffd6933.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["47c05c3016944b5ea649a2db09470ca1.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"439006F7"}}],["a64130ec107142a091ded5673a7b9b2a.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["d4bac5b449f942b9b9087612c9956ab7.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["93e5e0602f6d4caeb146bcd73d8f58d6.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["75ce849793264b658a78f974bb6e8d83.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["a7fbc9606b354596b8e6e6178aee2169.5",1748223606068,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7269f5179d334a02857f2899d1574773.16","portalLocation":"fff4a82e,fa9df2a2","portalImageUrl":"https://lh3.googleusercontent.com/ZmG7M3_fxHtAEZ5rq5wyM3do9taQbMHhsd7grxf7WQYV7tfi57p-uhWmNvrXI5ymPUxP6rK5tyrTt-wNrvUdkWntOcQMSvw9g3D5EdKRZ2Y","portalTitle":"Tu Fruto, Tu Mar","portalAddress":"Av. Charles Darwin, Galapagos National Park, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731954153155"}}],["4227e4f7324f48ec951f46ed811ce177.5",1748223606335,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"99abe280a39a4945b48d387c22ceccf7.16","portalLocation":"ffea0caa,fb4381a2","portalImageUrl":"https://lh3.googleusercontent.com/mgnhyBXtDs75X03oF4qurUWGisRmA-7n-QBG5d0dTaSQTG-zvPWWVbamee2NAcgotA2HC0B40ZirOfLVVp9VE3aA7FYPh2RsNSHSrgHvF9xl9A","portalTitle":"Estatua de Maiz","portalAddress":"Calle Seminario, Ventanas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731945596679"}}],["ebf9e60868ac4d0bbf51732ced2e3a4e.5",1748223606399,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0336bd25dae94f909d9e85ddf0d53abe.16","portalLocation":"fff49686,fa9df14a","portalImageUrl":"https://lh3.googleusercontent.com/-ISQNiWvGFyfanHE-UqWv5Q5-uTFu5ksWiQd1hQgU2f0g45F3jJu4YimkCxeupfmd4pLdgkm5aAIAyULnZn3rCJR4Zc0VrNpenaH0tGXPRY","portalTitle":"Pier Santa Cruz","portalAddress":"Parque Nacional Galápagos, Malecon, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731954153156"}}],["bf67ab0d9935436d86e6716fe76e02ae.5",1748223606750,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"265aa85eaf104cfea5fa2e33f889b5ec.16","portalLocation":"000f5cde,fb4280be","portalImageUrl":"https://lh3.googleusercontent.com/848LV5-YlLu3qGf28WvkFV1x-Q1buJ1jLBgkiZP6vrhfFaKwIw9OaiT7T8vTNPGEqWU6S4fjGoVpW3j344ismv0m-7Z_IYrZFen7LcFGdDB1jg","portalTitle":"Mural KONG","portalAddress":"Troncal del Pacífico, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1745945919620"}}],["e1044e47ff694b85a2549c0f8b252aba.5",1748223606809,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9a8af8ed11b84bc0ab55df51c9c18064.16","portalLocation":"fff4afcc,fa9e0789","portalImageUrl":"https://lh3.googleusercontent.com/A0uA3hgiX_JZ9T1C05-NyxmJeKzbM8HKhWZVJCo59N-ODvf5kt2ni9tiJJwt5SqbcAzXE0UXhLXEFeUEN4D8aP6wHrHzcoxhTtZynz5whOxcBQ","portalTitle":"Guardaparques Touristico","portalAddress":"EC200102 Puerto Ayora, isla, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731954153154"}}],["6bf09813e22544c6b8144eeec7222a55.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["38d6bb1c6d084c58ad1bea150bf4b5ad.5",0,{"modResource":{"displayName":"Ito En Transmuter (-)","stats":{"REMOVAL_STICKINESS":"0","XM_SPIN":"-1"},"rarity":"VERY_RARE","resourceType":"TRANSMUTER_ATTACK"}}],["ed12dcb9855746279494be107d7a325f.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["c9d25f863d92453787cc0532d30cc84e.5",1753120685652,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b1b3fa6479624b92bc8d4ddf11a26174.16","portalLocation":"fffc7e79,fb47ffda","portalImageUrl":"https://lh3.googleusercontent.com/Ske3C2zR1uBUnJuiHwAzlcFSZkt4K6lYT836cwN-D46UeFQ6wlnLRTlEd_XlSNsFqzGAPlnScQ_5Ie4ePxGRcwJCndgKNXzLrSAHrh_2-JybJw","portalTitle":"Pileta Del Porton","portalAddress":"Vía a Quinindé 7, Santo Domingo, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753120684892"}}],["2adc8e9fb1c54253b7336f4e2a69c265.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["1a3fba6f978c41d29c254e0ce86d6069.5",1753301215750,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"372acc23ab2645c1ba3342ab456db537.16","portalLocation":"ffe03a39,fb3d3a6d","portalImageUrl":"https://lh3.googleusercontent.com/pSlK4oF4-8W0GxpSie82gz9tRJiPHnzOYscpFz7m9p-78yvhslN-knqBu89tfW9KH9hgw8DmAcB7wncynLmOV3_YP8UFJkP8p13yAdKw-Hap","portalTitle":"Laguna del Sol","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753301215173"}}],["36ee47d94e1641a9bc878740b35b01b9.5",1753304046258,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d3421953acdb3f93b93a9ba80aef7736.16","portalLocation":"ffe0d8d1,fb3d7954","portalImageUrl":"https://lh3.googleusercontent.com/Hlf8Uob1hJ0B-jwlGkJrp3xCyizPi7uQn1W9WBkMuKl_cOGi5_9UlZ_DOtlQU2-61LGTzJE5AbvaE-qhbXgh4gB3ziuXaIdp2d6G37dY97AZ","portalTitle":"escudo de Monte Tabor","portalAddress":"Via a Samborondon Km 13 1/2, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753304045520"}}],["ff94065ddf374646920da912db7fac6d.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["f2b76ab4910b4740b4b00ae6a66463c3.5",1753380941236,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7d21b01e6d324025849e69f4afd26ebe.16","portalLocation":"ffdf78df,fb3cb52e","portalImageUrl":"https://lh3.googleusercontent.com/jFSnpxO9UA7kO7iwdCcDZ4n0eC4BgEPepRVT1LDNtdsiqMLZxmfDgIgWfLq12GGf8DBnwVm4T2xf6XEaBoAj8lan3HlzEF0IJyn1dKgeSANBMw","portalTitle":"Parque Triangular Francisco De Orellana","portalAddress":"Destacamento Base Sur, Guayaquil 090501, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753380940623"}}],["81aa822d9e2e43ca8623b4705b9abcaa.5",1753736722247,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"bc264e0b51c64656b8dd5f375a309841.16","portalLocation":"ffde2709,fb3d285b","portalImageUrl":"https://lh3.googleusercontent.com/e_XGgEbPjgItUd8sINUDyoWngWKnfL6RZ3s7wqwkUb_kQBWI3fay3y18V_BCGzVNW0MLnNMemFKhxMaxyXe-96z4i68qZckA3WeJN8DknT1vqg","portalTitle":"Mirador Final Puente Santay","portalAddress":"Paseo Ecoturístico Isla Santay, Isla Santay, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753736721548"}}],["6906849101c24ba8a8499d4e25e54b35.5",1753737212899,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ed7e73e968724ec098d008f28c44f666.16","portalLocation":"ffde2880,fb3d1473","portalImageUrl":"https://lh3.googleusercontent.com/2J_62B-a0FZxVxDN73mwgi0c09BtHDi1WZtUQd9wA_ee6VY19VQxeFkY3mU7xzXkpleWVtTyU6SzLgu8a370AfPOBs1qop4ZWWSMpLrszNwUoA","portalTitle":"Puente elevadizo de la Isla Santay","portalAddress":"Puente Guayaquil - Santay, Puente Peatonal & Ciclovia \\"Santay\\", Guayaquil 090101, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753737212164"}}],["57d80faef1b34417b86ec81f3234b9b5.5",1753737228130,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ed7e73e968724ec098d008f28c44f666.16","portalLocation":"ffde2880,fb3d1473","portalImageUrl":"https://lh3.googleusercontent.com/2J_62B-a0FZxVxDN73mwgi0c09BtHDi1WZtUQd9wA_ee6VY19VQxeFkY3mU7xzXkpleWVtTyU6SzLgu8a370AfPOBs1qop4ZWWSMpLrszNwUoA","portalTitle":"Puente elevadizo de la Isla Santay","portalAddress":"Puente Guayaquil - Santay, Puente Peatonal & Ciclovia \\"Santay\\", Guayaquil 090101, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753737227367"}}],["49f41db6a84d4ba886173741b9fd6b2e.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["ccbc71639cb549b69ed50cf1b1503c2b.5",0,{"modResource":{"displayName":"Force Amp","stats":{"FORCE_AMPLIFIER":"2000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"FORCE_AMP"}}],["f5ad5775659c4201bf4659e65822aab3.5",1753967224478,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"91d13ffb20f24767a0bab27e4987ca03.16","portalLocation":"ffe032bc,fb3d3b1b","portalImageUrl":"https://lh3.googleusercontent.com/t6r9lq5katMbA438_D-ZpbFNtCYj_XBrcdAIFIo4OWKm2Mqv-riYN3326JeOTtAcadIkkoaZL66Y3MNaG8EWeP6UpmKCX6_ewWqrm6vPaJkx","portalTitle":"Cancha de Tenis Laguna S.","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753967223719"}}],["f3976aaf1a9e401da5c94e7dfcd71c8a.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["9724ee37533943e5b99e030f03bb1657.5",1753989483730,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5d8b0f29d8253ad5ac571e680093886a.16","portalLocation":"ffdfb492,fb3d4bdd","portalImageUrl":"https://lh3.googleusercontent.com/hEbCaUFmGYVDrCEneT5HXkrp_U0AR9wwGHpCPx91ynp2_jQCq6AeosBCF3JbIejNA1WBy0otgfgA4pLUetGfWNB5ERGhuk7I2jR45Zoz2_k3","portalTitle":"Zona De Juegos #3","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753989482998"}}],["c291a926bad14f56adb9bcc5f1e59dc5.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["98dae47763f94268812c0a8b6323ea1f.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["2159fc8d49804f8daa13c8688283bbc9.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["bb76f61189a64863b52788d4f89e644c.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["e82c8315e50b4e19a7c9663e31ba82bd.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"82262B57"}}],["ccec0f37680c4d1f92dd2a65c6380d4b.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["f3a478a0271f4b5380b7eb4460ba04ff.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["ef8dd809038d4a05ab4828a22ed0ff67.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["6ccdaada352c4765b326ff050f4403a9.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"0309A2E2"}}],["77b84cd9658444fba557a4e26a910562.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["e5781a946f194e429d85ff09ae83d4e3.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["74d4c1b6c3ff453b8621ecbf81857d7c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["02fc0c2184f7486587cfc0d0b6c71044.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["fa2f398c0e1f43a1b635ec7145bfa794.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["6784658e1bf24b6a80de4282dee02b58.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["1d14da7bd4874f0f837ff78272f88b15.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["31d6db7634a84bf2b0dea3acb2dc9bab.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["b0bb76737e2448429a3cb599f4fda6e5.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["0a85598ec16745059472ba7b3e4908ae.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["6c6b2f48df41485cb085eebfb2396a52.5",1756927643197,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d905b9a2f5a34db6a51cb3707d277fc1.16","portalLocation":"000e3d39,fb4050a4","portalImageUrl":"https://lh3.googleusercontent.com/iH5ICZxqu3u3EqcibE63u3Ux6xkqloRAp_eMmZBkgL3EgoLsZlfGrT3jGpEgW4veJVb5qcWzCVvAORRcXDu8ViRDMbmpjr56nFV_4pA-IeU","portalTitle":"Torre Puerto Green","portalAddress":"Entrada Terminal, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1756927642524"}}],["9c7315faabeb407e9b6c24fdb051bb5c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["ca1dde699ad746d1b4a7e34df8ffa3ae.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["5cba6c24d84f413b9e1fb7de0c3c2065.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["858199c8c10b4d839b5d4d2cb90a1d9d.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["ca1daf159d054299b2efdb53cbc981e3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["938d0fbb04184d3ebcd9d0515ff9c4fc.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["a43f485f60874b1db138b78af0914e14.5",0,{"modResource":{"displayName":"Ito En Transmuter (+)","stats":{"REMOVAL_STICKINESS":"0","XM_SPIN":"1"},"rarity":"VERY_RARE","resourceType":"TRANSMUTER_DEFENSE"}}],["05f3a6cc5c7243668311439dba919e8f.5",0,{"modResource":{"displayName":"SoftBank Ultra Link","stats":{"LINK_RANGE_MULTIPLIER":"5000","LINK_DEFENSE_BOOST":"1500","OUTGOING_LINKS_BONUS":"8","REMOVAL_STICKINESS":"150000"},"rarity":"VERY_RARE","resourceType":"ULTRA_LINK_AMP"}}],["8c17920a09e84b6cb7eec49a124f2699.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["4832e98560564193ab0557e19cadacca.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["a8bfe2346c104e0c8907abc3bfb2b2f3.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["6b4d79561e774e46bbcfc2995cb247e7.5",0,{"modResource":{"displayName":"Link Amp","stats":{"LINK_RANGE_MULTIPLIER":"2000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"LINK_AMPLIFIER"}}],["91d02ae8e0f04ad686ecd79ae9f592e7.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["5ad22fe9a4444a71be8c27d9ff09a38b.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["f8ae8cc6df1a460c88d3d43b8e582b71.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["4325d9bda08d4dca9095706d66e46288.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["6c4bc17c0be041ed8e27bfea622e0259.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["558f33e39e534cf59322b7e516280d78.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["15a5d795e2484916b5bafcd16ef127fd.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["1b124927ae4d42d8b6921233dc0fdb48.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["d94ff8fe30cd4b8b8ea394a546e3b76f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["f150c256444e4d2c9fdca58f93f55c04.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["2daf61bc9cf44d9984f17b05fdc99d26.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["08eebf2d53284463bb48fc74a1216c4b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["c3b9fe22c0c74e14b8a683248251b72a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["aaf87578d3ec4b4dbd19b77d5e4e9bfe.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["b5c91884c74741dc8a50bfd15b3ab74c.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["d52ae8cb80604d61bd5ed9fb595cf8f7.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["0e178ab58beb4cf9a1e68134af712b69.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["0a97a9d7391b48e69f2fe1e3d4dc5028.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["2fd16a7a5b0441448c1f60b8d425b7bc.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["b463fb4ef87e4582831e03c2cf093e2c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["73ff6997e0244cbd85e7f5aaa169612b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["e3f5a7d5c7b948e3a8c8cb0fa4edaaeb.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["55c3f364b14a4208ac3d609927b5f070.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["12cfd9d7428e468e8b7841c52d644ffa.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["efabda209f13403ca6d8892626d692d0.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["ddac73c2503441f78c855e3e2e402c33.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["378abfc3f859493fbc810c5c5e16d3e4.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["3d64bf0e068747348a47ef7679b0c1bb.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["3b16c40cf8494d7c9758edcac75495ba.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["1af6d901bea6497ba8cace21c4dadfe6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["7829e81901cc483ebbff63d3f18c6f10.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["16d49c2f80594a929f7b291aae413c4d.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["fdc81b5a317e42729f3a6c3d09677682.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["a3ca4dacb82e4575af1ee017193c236b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["cc0c809927fd4a2dafed1646e0ded8be.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["f7e0adf758a74ef2a8f843f953f2c12b.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["b9772db0ec0c4a9c898cfa444de9ce3b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":6}}],["aa6cc4d8b77c460392d61801767ac0e7.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["34b5eae7839f4df9ba4db0b273c252de.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3c455cfcc6ef465bb2c41aa5d933b48e.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["9c714c9afe974723a1d3aa2818113bad.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["07b5011808b14c51b53c1600705e3d37.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["6795c69578334255aeff4a5198d028ad.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["8f518112b5694f5bbe60c2ad3bc765d0.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["e793a199a3f040f08b778723dca07d1f.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["db4803345e98459eb62fda36e80b2cb4.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["a6210d96ec1a4f2582e5bd71c2d073f9.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["b96d70accc6c408c9d7766ed0163eb65.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["53411bbbcb65471ab6f36d9450c6cd11.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"TOASTY","multiplierE6":1000000}}],["b4cbb9fd0f044eaa9423c8e0cc48e5fc.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"TOASTY","multiplierE6":1000000}}],["9280444ff9cc4cec94a97390b7a08151.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["b40f67eee2554cbf9a053ff7b793e091.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["16b70b23743a47dea89a1bfa1e3c3b0b.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["d43a563d0f6040deb85c55a9cfaf22a6.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["2126abbe86ef4322b9fb9a2dc9d98041.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["245f0412411643c7836103f93ef70b2d.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["584c56e02c0a4b3b889d52de84ef1ae4.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["00f7aa27edca486ca60a02e338d398ef.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["643b7ca96f9b4262b842d2919fe109b0.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["e19e4c900ee44c5d9cbdfefab5460e1c.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"0F0969A1"}}],["2e3ba61287aa4672b8f9a60d5cdc8078.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["349fbaf193414a599aea09b92ff2d17f.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["dcc8809056bf435eabdfeb8181bfa3f9.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["f30d8be9df98462db6cb64027117052f.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["a843dfc59a704f2488f2e2330d5492a7.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["67f2ed5e264346df8e24d02f86a230fd.5",1748223607417,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b39c039ff7e83dde81b47acb109cb809.16","portalLocation":"fffb99a6,fb474ddd","portalImageUrl":"https://lh3.googleusercontent.com/Yq2EBYCjLLF-iD3O8Sc1dZuTtZGvt-9XjrTLy1iBCjagBmOaNmsXDb5Iyy_pc_3pBZ79X9LSIEB65GpVmUOK_tH2Z7I_3nCtSMSfQwUsGxDo","portalTitle":"Monumento a la Ranchera","portalAddress":"PQ6P+QM8, Santo Domingo, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731955868267"}}],["799d391240b64fad8b704c95ec60e54e.5",1748223607918,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0074f8bc8b4542ffa5bdfe0a40862623.16","portalLocation":"0010057f,fb62283d","portalImageUrl":"https://lh3.googleusercontent.com/hN2p0KfVjPeNEAYG66A5-tH0SQ4VCwmkVn4CgODyHnDt-Iz7Rx1pykh9GE3J8eTpSpSWeq7N30uFmFbJtnm0phNSB76Lns_6BpES34lxlTuwBQ","portalTitle":"Templo Del Pedregal","portalAddress":"Imués-El Pedregal, Pedregal, Imués, Nariño, Colombia"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1747934444447"}}],["f9192f9743614b14982ea6a26e3d86cc.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["36751206f9504154b0ead2c54d538202.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["72deb79c920d434b9e637b888912f182.5",1753226610129,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"fccf6400dfed498eabd4c51cbe9d202e.16","portalLocation":"ffe07f8d,fb3d3cc7","portalImageUrl":"https://lh3.googleusercontent.com/zoztownM0RDA67oo6VbdD0fpVFs1xi_ZzFlqB0tP3SPe3Y_XCLf4L-LRPpSfntvhqOCMKt8kgLDrQBv_5dURTC9jUJG1gAWkTcane4AAa5M","portalTitle":"Estancias del Rio","portalAddress":"4, Estancia del Rio 092302, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753226609502"}}],["60df3a09986745568a47a6f1c510d998.5",1753299805272,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ed5ebe7ffb464b9d8e9aa1e4d04a4849.16","portalLocation":"ffdfd5a2,fb3d404e","portalImageUrl":"https://lh3.googleusercontent.com/T_ECDahVk5acZ1mfnw_UFy40MIwsHaGAy6gHCuhZS12XOwrQFGXYeK8GvFsBuJU9os1bLIU6RWxRgY-pXLYsLWAGNP7ew6wTciXS__unR8A","portalTitle":"Britannia I","portalAddress":"Unnamed Road, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753299804695"}}],["06ea03c1683c453ab6279d4b9abcb8b1.5",1753305249570,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d35c84fab6bb3fbca3d08ec0fe93007c.16","portalLocation":"ffe0dd40,fb3d626d","portalImageUrl":"https://lh3.googleusercontent.com/tyMAQSY7kYvYIzfFy1EntHERJ1StSneFCR2hB7AapkJd46QiFdoZuaUC4XaOmaZedNPaK1INX8h8WXLihjNdJ7k518Sw-ShUOmsLwtDppxa7","portalTitle":"Zona de juegos infantiles Castilla","portalAddress":"X45P+RF8, Bonaterra, Guayaquil, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753305248967"}}],["b3e1ea11b68646f483e1905187c1edb5.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["49cfd3fdb82b470c84b699f9fe14c5c9.5",1753306068550,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"689bd986708a30f38b0129942a8425b3.16","portalLocation":"ffe0e735,fb3d6178","portalImageUrl":"https://lh3.googleusercontent.com/GVu1YRM0tr8bx0Nt9DuCKRa_aW1hrBzzie4713YOG9P4qxr9MljOt2eeJrJaGR4yhvpSWBsWZkkZl4Emqc2vwrg14SDcdedWI6j0V74JaMqqKw","portalTitle":"Gruta a la virgen Maria urbanizacion Castilla","portalAddress":"X46P+RJ Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753306067721"}}],["410b48b97d664c3396a1e7f27e7bd6ee.5",1753306502491,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"8cade8938aeb3f909aae8c87a3f4e087.16","portalLocation":"ffe0c2ac,fb3d4569","portalImageUrl":"https://lh3.googleusercontent.com/JDtR3mmE4ZVxTfEdQCBbuFIB_4tBL-xmxZZv2m7y0su07iUF7hNe-GGp-HoQBeqMvk9VvwJOMKuws--r_eqGqaok0Ndx3zuf6ESqAZxCeXF5","portalTitle":"Letrero Marino D’or Park","portalAddress":"X42H+WMV, E486, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753306501870"}}],["d85aaf761cf44376be4702f0123e235c.5",1753307151782,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f472bd010b7348bca2e29b757cf1c0fc.16","portalLocation":"ffe0494e,fb3d3838","portalImageUrl":"https://lh3.googleusercontent.com/QBi3HXqgg03hjlui8BDkc6BsYh7dhmahnc8WMDQ7rlmpzD38HAqOdm4X3deqVMajyMtCBCmF08KhjgTlRQXJBQLfWS5lLv-fZNCx2OiDCk3j","portalTitle":"La Ribera de Batan","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753307151098"}}],["cf1bbb3908f54c07bcb207ce7c4136d9.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["0601bbc8ecf647dfa8fc5a70799dd153.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"B0451920"}}],["a55c90101b384a60940582d1016d6d34.5",1753394654698,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"00a5e9d3dd8345319eaa6d65cac59536.16","portalLocation":"ffdf403e,fb3d5e83","portalImageUrl":"https://lh3.googleusercontent.com/akY9w8VET8lbPQWRUSvj_mtw6R9kjjsqlZ9uyQDx2moJt5ex7F7OgBu401C1J_u9ambospGDHr_z348drwEWuLNcohM5sk37dDHgSv7FcUHBww","portalTitle":"Rotary club La Puntilla","portalAddress":"Av. Samborondón, Samborondón 092301, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753394654161"}}],["1a381b7d0cd748a9acf4de49db807486.5",1753967076548,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2f3022ef638a3651a1759e8c4f653b00.16","portalLocation":"ffdfdc4f,fb3d3ed0","portalImageUrl":"https://lh3.googleusercontent.com/e1qPkws74KIg4yhNudpOSXJ-tpW-YLfDT47XM0o8Cac5PtX_iQEWo5f_dkjTrpReZOK4Av64cFi9BOGe3CMMmX5ePrHLVUepGkVEstwIWU3H","portalTitle":"Bellagio","portalAddress":"V4VH+F8J, Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753967075919"}}],["0f446ab3a5a8407a87942433e6fb8c41.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["09d585d3c18842238d733c0685ae16ab.5",1753987474310,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b869119238033312bb3fdb8125d50ea9.16","portalLocation":"ffdffb2b,fb3d328b","portalImageUrl":"https://lh3.googleusercontent.com/Ed4HJy0HWc3L4W6mRhoPfHDEk7wgtKN1GCfJurp-kOkMIRs0hWygoxhnW8SpSM36VSad3MR5DF688jPYNePNm1LGFJSr5-k91CKfc9EcQLk","portalTitle":"DARTH VADER PENSADOR","portalAddress":"W42F+JQV, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753987473594"}}],["fae7ac558c2f4daeb7ff17016af0d405.5",1753998723876,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f8446544ed66366ab71320aa94af4359.16","portalLocation":"ffdee65c,fb3d20ce","portalImageUrl":"https://lh3.googleusercontent.com/gzdXcKjSUy-ZUAH6FA8Z03YhJMJjUQpZFUmoCbTsYZ67iMCmLTyKPa5cvxqqPVE6M0AKClAOOYAZBbYbgfWe__Lca-Fwd316PsuT51AWvt0","portalTitle":"Mural Selección Tricolor","portalAddress":"General Galo Coronel Drouet Ciudadela LA FAE Mz.19 Villa 10, Guayaquil 090513, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753998723070"}}],["90e5bcafb5b84c548c3623a81e449c0b.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["b6c3b7bce3ce4f41907caca347b92bff.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["46ba7b8a3a574446a1d200eb29a01027.5",1754138735129,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6bf4709d25bc4e49b9f359d1753a0429.16","portalLocation":"ffdf1d20,fb3d0866","portalImageUrl":"https://lh3.googleusercontent.com/B3qoZoRjnf4IRoJHFEocvm5Y4fio0cHCAnFwR7VaVl_MoDvtwIbTZl13F0342enuwLF9Tixj0p1TANh5FVPhqtJL9atYinx7bUM6ydFTLfnz","portalTitle":"Dirección De Aviación Civil","portalAddress":"1º Callejón 14 NE 1, Guayaquil 090513, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754138734398"}}],["9bb3cd243d9142e8b0a19979638b260b.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["0b3d976bffa546f5aed1389a4e62449b.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["c63df381193d4f8788eee346e742c939.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["83108b3b1db542f4bb7e25720f078699.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["49829e1bef124aa9b38785caec70fc02.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["4718769c210d41109ae5ec5630268ae6.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["95eddf7739ff4c6f864de9f357d41844.5",1756582772841,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7580d059238f39e295c9ded7fa42dfa0.16","portalLocation":"000db286,fb3e4505","portalImageUrl":"https://lh3.googleusercontent.com/_a-jsWkhak4iRfFHqnhkj4oUF9jnHAKvBcT_uVR7O9njjV9WrBoUwa95-JejNrlt1rAa7d2INWPmhk4Q2MA-C9DYAdPCpUYzipyUgGy8pmHU","portalTitle":"Pileta Arenas","portalAddress":"V5WV+WVW, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1756582772219"}}],["015317ee4c974903893807d05364c3f5.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["4fae46fad8174c08a6befebeca61876f.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"FAC4E652"}}],["509e92c37a294291a27997dda46342e7.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["3127c963856e4ac39e196abf944975fb.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["f3d1f0fa3c7140ecb7a9c57aa468acf1.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["1dff2f31228a41419f8e631d839cb80e.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["d98e72028ca84ce69b3f9f7baf88c3ca.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"1E321752"}}],["718fee34a65f43e68a95063f257dc3eb.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["3424b2fc57ce46259c7fc0830f35159e.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["c452d10887cd4765a826b51b02a7bcab.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["51d68bb5441443bf81b633ec02680e63.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["9d9fa8bc3919488e89341b81cae95e0e.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["83017c9c2f9a4b4688db4c109b7a2379.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["2894628909a141e7bdc63cd028696c32.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["3535df16f4cd44f9ae5cafa2048546f8.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["d02da6b7e499495bb99b7cd906bb247e.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["56cfa040fba5468eb4f9105192098d44.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["d4d1b4a3e6bc4264b85a341f89f00684.5",0,{"modResource":{"displayName":"Force Amp","stats":{"FORCE_AMPLIFIER":"2000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"FORCE_AMP"}}],["e1879000556a4c27bec66d97a6f2a03f.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"4","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"MULTIHACK"}}],["a9aeb797e2fc47318a5966645715850d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["c71e3b84eab54b018b3e005a3171fe35.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["adaad525ef1240e08ca154c35b7c8652.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["3654d5d350cd406eb45620a00630c889.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["4447fd7125434f2a91048712fc5629e0.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["2d70f25eb0834dc4a84f2ba67c627318.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["15c77115a52f4d87a455ae0c148c922d.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["c665953dae304306b14f8407f020e8ff.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["bfe2bb3a0f504992ab46ef671675214c.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["f39af1daa3064dc680c6c606db4e3d00.5",0,{"modResource":{"displayName":"SoftBank Ultra Link","stats":{"LINK_RANGE_MULTIPLIER":"5000","LINK_DEFENSE_BOOST":"1500","OUTGOING_LINKS_BONUS":"8","REMOVAL_STICKINESS":"150000"},"rarity":"VERY_RARE","resourceType":"ULTRA_LINK_AMP"}}],["abf640736bf541a3b8cdb90c419c7ec6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["dd639e9510ce4a16b564b20a7e405b69.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["7441be2093bb4c529c22020e6229c2c5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["aaa5dbb886b04b2b892907961247552f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["438570497c6c4f088e42d5a6ca0e798e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["8956e72852be4a1aa29fba1661d45281.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["08015d4f3a224b3bb25913d4560e2869.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["bbcfc5dca62c4a9da00bc66abf2a37dd.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["f3717d81b4c14a529d9026dcfa630f33.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["12a99c7c8ea64c1484915a4e4d033642.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["627f3d43e74045cbad2cf4727b5cfe5a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["1a26129299874d0cb6566ee6d6059d1d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["f3dfecbb57a84d1ba75b573666d8091e.5",0,{"modResource":{"displayName":"Ito En Transmuter (+)","stats":{"REMOVAL_STICKINESS":"0","XM_SPIN":"1"},"rarity":"VERY_RARE","resourceType":"TRANSMUTER_DEFENSE"}}],["b6e98207b2414e26828f35b6d9b24299.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["0488d78d282f45eab96dadddf34d3965.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"83458AA7"}}],["398406473d2c4a19a2d985fc95e3eec1.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["e5a98534323041a899f93a32d1b8e587.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["57d503554caf44368f5138a044066cf4.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["a6480cf1abb241a2b3be9aff67ed3546.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["db5ce3259cc34caa8e589ea2b62222eb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["f489c28b7d7249c1ba853a6a13f25908.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["86fd700f79aa4b31b92c707ff4fd5dec.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["a70228b10b9649dabae907c3290d9e7d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":5}}],["6ba72fc38aff4332b7071081fb779fa1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":6}}],["07b23b38fb364eee80f60b2c41245626.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4c7f8fb0710a4a9e9a0478985214423f.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["9b9cd22291cd4310a5341cac44839a98.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["d91b4665adf4483ca2d43aff59c5d0a9.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["1a15571abf224f84aa6759fbd57c604c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["f0c0077d692548ea901a9e9ddfe8e3c6.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["e294a83f4d3a49fbb4019cbef3d203a9.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["fa67c8e596a44fbd96773ef860fc0ebe.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["17263c935ecc41b6b129b5907f09f170.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"TOASTY","multiplierE6":1000000}}],["0a7befd3bc3f40e68b76559a71609d64.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["b12f652950794802a761df58a3074eb1.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["51003473a92c4452a4411d3566d2003d.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["a51158f922d149fd8c125fdfb8136d9e.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["7eab04bfc32d479b942eafebd189ca33.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["2407b538d3264736b6d0175aa393157d.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["696fa31e121e4a21a32c9d073fee8cff.5",1748223608118,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"71f11c3221b9481e99ebefc0109a41c7.16","portalLocation":"fffda089,fb52b522","portalImageUrl":"https://lh3.googleusercontent.com/DlcABZC3QPWOL4vIE_xMJxwziw69o_8njxJ0HyE6qehJ5nVwjCW_Zrlz3S5MvfJTbFr52RybE1q6J8Z8aNk3Px_Hgd-tMsPN79xmlYcG_aEr","portalTitle":"Me Voy A Volver","portalAddress":"De Los Perales, Quito, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742255773572"}}],["e9388ce3834a4c4096c9d3641e5d08bc.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["4b7e62fc80ac454b86a6dca0fa3fba34.5",1753107964036,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b920484375e93389b540fb7e148b99d3.16","portalLocation":"000d5d43,fb40dcc4","portalImageUrl":"https://lh3.googleusercontent.com/5Sk0n-9dfXMk7JfcBdXKbN89xwQaVmGbylLEpBKx_9pOmCXz5ynJmGU_95aM7IS0LxZWB6Zi5DoVXeIiFCvKhVGk6GnhfzUqd5oDF5TK_JQ","portalTitle":"Letras San Mateo","portalAddress":"V9G7+8V San Mateo, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753107963398"}}],["6e39033e169644e88c6f345d6dbf1e2a.5",1753109905379,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"58df2b1f958d4cb185bb90b05110d9ad.16","portalLocation":"000a0852,fb42440b","portalImageUrl":"https://lh3.googleusercontent.com/qdLIus3qdAqudapHbrASYQLDnYYMNp8dz5PVDtPqaz6Ssmlh1wczu6cbi93QAsLrIJGv3nbffOXFgBNWZVF0GAelsGEro7zc4osLQ5eCtO8","portalTitle":"Letras Viche","portalAddress":"1, 9 de Octubre 080409, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753109904742"}}],["0016bfe3e17141239f82d5db460713d1.5",1753295412554,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5a24eb173201496e86ad7da29586bd4b.16","portalLocation":"ffdf4480,fb3d12f1","portalImageUrl":"https://lh3.googleusercontent.com/bqrDfYXNuneahwXP9sJlZhIWJba4IdkH3_8lHjbCRcvsNdqB9XJtO948cE1XjRVSD_wvxme8LJSugeglGId8tYqw0k7qv9rdcck_FlZOv3lC","portalTitle":"Holiday Inn Guayaquil Airport","portalAddress":"Av. de Alarcón, Guayaquil 090513, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753295411935"}}],["8e1cd6a287444c398dd634977428ded6.5",1753299924502,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0631e8586deb47b185f1900fd0ba6541.16","portalLocation":"ffdfd833,fb3d3fd4","portalImageUrl":"https://lh3.googleusercontent.com/OF06nZHX45Ntd_Kf2pfkwepZlnZQJiJvUKlHK484mV2rUdYm7jTpBLtl7jyC_XuLbLR-obhYILR3WzHLHnypIEe_rI89l05XzBVL8HU4W3k9","portalTitle":"Britannia II","portalAddress":"E-40 Av. Samborondon Km 5.5, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753299923741"}}],["b5b7aae7148040d6a37c0f4094ecb6ab.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["cee96610f8804b91b3695555b2d6b554.5",1753305902301,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"82b4737a5b0d34cc8fb51ee15c35cb01.16","portalLocation":"ffe0e6f9,fb3d633e","portalImageUrl":"https://lh3.googleusercontent.com/y7UnSLHH_JBULEyakwBshNB_xA2-z-OKEr5b6vSSG8n2HW_7NQcG9VXo8wrmtbe-lRMZKY7yvfk63gmjUlWU-GD_ojoQ8oW3JAyO9rO0G6eejw","portalTitle":"Parque Acuatico Parte 1","portalAddress":"X46P+QR Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753305902294"}}],["dfabceb161e9437dba0eebb3e324ecbd.5",1753306435874,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d8e52f79f66b3b099a0fcfb8f64a612f.16","portalLocation":"ffe0d08e,fb3d4635","portalImageUrl":"https://lh3.googleusercontent.com/o-FDbjaaVzSQFPEtokOPnir0kkUNBLKD95IwlGGVUPTNHOSF6ZExCT3PjA2EyfJIN9A1p6hhh0pHcpbjzl6ErQei-ywodvvfaNheE2gbGrA","portalTitle":"Arco Cataluña","portalAddress":"E486, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753306435172"}}],["7e7207d5d0324941b5ddea4c24912b98.5",1753376342860,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9653732fd18e4817977074b5cf6f5a0d.16","portalLocation":"ffdfa588,fb3d5784","portalImageUrl":"https://lh3.googleusercontent.com/4wQjQjAuZW7S0myQGMdDA02jGiogyLZ0WPdVCQmB94nIXe8QCDUm7HpOJBDLVHO3sqWfKDbqLti4lODMyt2iXv2h364vfuXRlpzliv_RSH2a","portalTitle":"Sainte Claire","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753376342279"}}],["c8eb908f999e4b1b9beede641706ccf9.5",1753376400462,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"adeb2c1630144797b407b2739895a052.16","portalLocation":"ffdfaae0,fb3d546d","portalImageUrl":"https://lh3.googleusercontent.com/kSP9fvq4PIfQFhhMMdYTLGzg_wIlKAVYC8RAOKlEKvP8IpMuD5S-Es8gnq6brtLwMX9jmaYbwoJr0oQW8ZORMO3UX3GZIXpzsfWS-jAsFOXTLg","portalTitle":"Flor del Rio","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753376399833"}}],["d75dd35ca88543bf87defbcdf86a57a8.5",1753376610447,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"8dd470aed3ee3255bc3824058de1ffa9.16","portalLocation":"ffdfff2a,fb3d39b8","portalImageUrl":"https://lh3.googleusercontent.com/IEYBm0qn1FY49Etc3jVz3Buw3LUgjI4uwp4WziTjh3yk-_tLsY9AFyin-7ZmZulpbT7qAFOiLD5yo83vfeEMCenXoGIkmeiEyJl2HmTZpV--","portalTitle":"Cancha de futbol Castelago","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753376609816"}}],["79785e30f2b54f268521e36bfc450000.5",1753398517584,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"10d05a2544e1406da78a0d8adb9c73ae.16","portalLocation":"ffde8207,fb3bc6e1","portalImageUrl":"https://lh3.googleusercontent.com/9uPXP24YmA7z0z9-0fX_sZkN8gPsrX5ZF7LiPa_dbhkw2QowoneBCI9cC01SEp0d54P6sgV6DxQEUzuEJV49pcOyqKwvhegWmP-g3Gxc3WGo","portalTitle":"Glorieta del muelle puerto azul","portalAddress":"Calle 7 SO, Guayaquil, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753398516821"}}],["b0f1666b958a4e8fb93f54e61627b3dc.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["eaf2b322be5246dea2761c029ba76204.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["257cc15dc9da4a13855fec60bccd11c2.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["ded3576b4684430f8a01c4523691c002.5",1753967203926,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"3c857e5435da4173b6351bd07fdc98fe.16","portalLocation":"ffe02652,fb3d3b04","portalImageUrl":"https://lh3.googleusercontent.com/Kr59mplBDKlt9ccR3g7OF4No5gPUS7ccITH1YZ9D9f0krlOwyeuRdEUIznU9_cFh0rWlQ2yAPra096qYvyhKA6bept9I2Y2P_GRBUvk9cMlm","portalTitle":"VistaSol","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753967203285"}}],["619e48dacbfb43d58c4a38223b468567.5",1753981751631,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"8ffea9c58cd544fe81299fab6a925a91.16","portalLocation":"ffe0aeb7,fb3d29e6","portalImageUrl":"https://lh3.googleusercontent.com/o12huFAzu5WZffb-dHy-GdrfMm3JrKYDOBVK9Bv47LADow3nKiWSYxfhm_D0OC7oyt_2SAhbVcuOIUvJmDwzVT19K8_8G14e9NkaIQjpYNTe","portalTitle":"Iglesia Adventista del Séptimo Día","portalAddress":"Alfredo Adum, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753981750970"}}],["d2b21fa0d19845ee82e19bbe0aee1688.5",1753986745907,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"85a64ec016db411f95d11a64c6cfafdb.16","portalLocation":"ffe08dd4,fb3d3e4b","portalImageUrl":"https://lh3.googleusercontent.com/uOhKiNbJHMS5udFg2TnIamjHTzk73xZcjPDy4c2gqCecrnjd7ZrDkCtn0FtStgFSSrja9syY_SSjIbunJ7aFa0XaO8-LggGdRhVgYDwNZJZL","portalTitle":"Capilla Señor de la Misericordia","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753986745214"}}],["1871387585804d23a9b6a776b9990de4.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["bc51b865f5b04eb6b07ae6a61638ecf9.5",1754141986413,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"cffb221a6b994827b4e5c20964cb1e73.16","portalLocation":"ffdf4969,fb3d299a","portalImageUrl":"https://lh3.googleusercontent.com/nNxxxWDpbUxoK4KeZB9TsZtWM7hQujwNGU0s9BdA6eM1n1tIg__-0Y3lZRgrpcV_MkOm4Qz5wek22YgNOgSt_aSb8Mgl9tKZoQmbieOIiKE60Q","portalTitle":"Terminal de Carga","portalAddress":"V44C+8PX, Terminal Encomiendas, Guayaquil 090513, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754141985673"}}],["f3b53706b0fb402cb2ff41fe6649ca7d.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["3796f6f517854e87b343656c1580a8b5.5",1754173260719,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"8b0354631dce4a7199cc1540a530ae6b.16","portalLocation":"000a0398,fb424414","portalImageUrl":"https://lh3.googleusercontent.com/Fzzb25ML9EBtnOpwzln4wc0imm1KrudRZEzv5iz7HnvZCsSugIHnaD55S77Fv1fWpMBhXXrzep4yNhjpVI1a1cueHS4At982-bbLv_8BVioN","portalTitle":"GAD Parroquial De Viche","portalAddress":"1, 9 de Octubre 080409, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754173260009"}}],["874abc68b33247cf93c0742cadd86eb7.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["ef0c90d10a5f42729627444bb8878fde.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["c3802146793c4375b473d24308ab2fad.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["5d14e2f742874152b31f13203f9d69ed.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["1c23d14781de4649900ebc4ce0ce7a39.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["6c8f07218e9c4f7ba21a4f8cfc11ee72.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["8241f88a4ef040bc840b76d8590c4fbe.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["7b6cc1307389435d894d6b5eba66730a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e02716b58fd646ff8876c69e82e0b648.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e91aadf95a874431a3ba132106d29c08.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1a3ecc4355f54559a0931e5bcc280095.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["8fa5225837c348f4a223f758cb291e91.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8b6068bf6e194a9ea3ed90cc3f280383.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["f732c58314334f47b5594c22b519b72b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9015fa4c99814cc09c12d716bd07e72c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6d9724336ccc45339fbcae23df311e15.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7ae4fb094ef24af1806e338a2398fa01.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["72d6ea050ea9492c82a019b1526514ab.5",0,{"modResource":{"displayName":"Ito En Transmuter (+)","stats":{"REMOVAL_STICKINESS":"0","XM_SPIN":"1"},"rarity":"VERY_RARE","resourceType":"TRANSMUTER_DEFENSE"}}],["2cde1af088dd4b0dbb28251c3dd9fb77.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["4da0a61aa5f64e9ea53d6027a363193b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cbf9613312344a43b3a9c7b00a914a1d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0b20f35ca1f34eb5a0c371b2e6f7aaae.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1097bc262f004311afc05cf680974611.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["880f748a719940a28df7860f49805beb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["22fa78486618458aaa328f9c6c4f29f5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0362d48ebfcd467a8fb7c2d4bb661cd8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["713d6ea1a9b54107b825493b8790b678.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["aaecb2d814764cf7b4c217e53d4a7092.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1798abc537d945d783940395fa20c1c7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5ee05f8396984764a784d406b2944ed9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["806f2b3954c64694b93e158dfcba0728.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1aac934e12b846daa33018ab350f7bec.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["b5595d37f55b4e24b3a24b4e8e3f3bee.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["b9da5a0213b34c5abdeb4fbdfff15e0e.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["73276681b6954473b2e0d0b03821d0b0.5",0,{"modResource":{"displayName":"Ito En Transmuter (+)","stats":{"REMOVAL_STICKINESS":"0","XM_SPIN":"1"},"rarity":"VERY_RARE","resourceType":"TRANSMUTER_DEFENSE"}}],["9ac3ca86ac1e4b29abbad1e08336bc5b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6e15bc9d766e49749d03d9dc50df160b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["be7e4cc13f4044239061b3c480928064.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6a274e1ee7a0408880d8e42aa6b3addf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3bc9280a663f45e2964667af197c5158.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0bfe6638be60481ebd38c8531eba6abf.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["a9ad16335c35466fb30a680c6dc3434c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6024a3a1efd44174a82400b71a9d786f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["170b93dc033f4f809a85ceb64b39a594.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["8363fc34c7f44b3fb06def6b7c5e999d.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["1a5f88ea87904f2f80754fb51cbf99b3.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["74557e7d11a94cc69d3ccf33e4ff6fdf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d8002b9f4a44468781717c0a5b90b56a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["880bdedd35d54f4aacd9716053629f4f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["aa44e188632c44289c25ca27489fed8e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c6f8c2664b8c43c0aebaaecf8111266c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["5da6c942336140aaa44c3bea6446dd9f.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["6cfa1c5370354eb2a8d016231a86609c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d32d60db302344e1b7e54e8d4dfe4d36.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c49990ff093843feaf137aa7190579ab.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ac9dcbcc51f545289c457de09bec3985.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["36a19c444718431ba0da4c63f2285f25.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["5c6269fb99b84efa955596c3b0ab8df6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a3319d1ce37c4767bc5853d2181ce5fc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1dd81a6decb746caa5c736a5ba1ac284.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6267910446994b4c9fd8d81e2c6b775f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["17e4870722fb446e903382016392644e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["c4182bc5eab84634953b4cfddc775fd0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5e514c754e794f47a51224975dcfe255.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["8a15bd81658f4b6db4da8d8dc8b8c7f8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["58c43ebb6ec24648ae115b878c6dc9a9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["825ad3f1a2e449c8bb97dfe297f4fbbb.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["4f083391b838479a8fde98643f94663b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["71e56245e32048b1ab615fe1644b3911.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["bcb293213c0c44ce99e89722b00c7beb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["923cb39533b748a1aca6739ae8e8a404.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8b9676228a714e619e42b95d7cd0398b.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["376fb42aeaf645ffbb990f7111396483.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["09547e3cbbee47be9add5cf57f1187ce.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4d73e90bfc60432180450eae7e425007.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["011e8ec11c2e4ec2ad1b247d334ffc40.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cc4612f74eca4dc3b597c9a0fd054a84.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8031ccb5305642dc8b32a5123624b796.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9e3bf3e4a0f247e7bcceda66b0e96fc5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ef2faf05655446b6a39189f92c94754b.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["00cb7333f92647c6acf898739a013ca6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["11e5ab16ec63468da07d7836469493b3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1a3c7d4272eb4945aba13bbd373513dd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ea18606519ef41aca39fea3431fa7382.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7a153b760cd54b54b10aec2487fb87dd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["df0fd0eba34d4a40ae8940c36dc1030c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["bf3b9a1284e44192bbfc92dd0c8bf8dc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6a613ec047a34ecc9fb3faaa2c1ca867.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8fd9fe8836454b4aa051416e303bac36.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["eff7f5b9c0ee4329a6024a6d6ab64656.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2f19e738ea7a4b7cb1f74b9d4b4a0734.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a70eba0b6b0b401f87fa96c2ed3814ab.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c8b8935d5d45430ca2ba37d3d02740c8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c117034e7d0c4a1e94bbd9cbf7ed2441.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["0ad823ff65d3467497076c8ab6d37e0b.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["a1f377e155f54d90b05a17e0409bc1b2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3f71a3591b7c45d09cea498297b57823.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["df2c13d995d54e8d9c894c7a9d7997d8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7f1cc59f516a44708334edc14cab3ace.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fb25834641454e20ae669bef70dfcee6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5f7af426457b415ba55e1444216d2b46.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["5bd4c7736ce847d0b77dbd61b2a3c4ef.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["614cc1a9e8d5451785837ce30d74ef40.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"EC5AC544"}}],["eebedc4708cf42ecbe53ee2381ee9db9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["7073c3b1c7c84a8bb9a1007229af34d6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["8bc6abc8d13043ffae4d42e7dc697453.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["ad55f0c7aacc4a04a7e80979e96f1c01.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5a7a18affefb4661b7d6f54a932d6075.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["59c59af6e7b24e559814a8b7c3ef635a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["c68db4b541794efc9ef8c80d19aff3e2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["a441d6449a9e468984401a1613e2e23b.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["361b21e1c09f4825a7a4fc322b63ac23.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["8d65f1311aeb4d3283f05ff7c86c3b2e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["5fc0fdecdee047179c7a114ec8794ccb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["3e8a04432d714fab8c7587400831c9df.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["48e42b2f931840a1a88bb2fe2a088d82.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["cb2cefcce76744f78b79f710f123f284.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["e41570dc52b74a99a1679e3c278a33fd.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["13bc87fdfcf244ef9eb67c1e11a2ac99.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["1ea5be257a644a5cbfb9b19395d80493.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["916607c52fc84ee1b46124eb0d5cad74.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["00d6f4cc87234c0db985ac4e2b09d4e1.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["376075923dd44e34af8ea9d93770f22a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["e70901d167b844219e5db90a490220c3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["9754e80c51aa4f14a27a1edbfefbaf1c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["43d993df16724a6496e41051435b390e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["94cf9b8acfb14aab811d8affd23352ab.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["684e2459dba84f9994b5679f061210d1.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["147eeaf06441402f9e47fc498a7a4193.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["948eb846b0e243e5bb360a7e851f2dc8.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["6beaf5fb104240c29bf45a2895025842.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8d71e6c6c1ca43069218a635a5aaef60.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a71d8ae74eeb4cffb4c0c709352c907a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["6a2e0ce4bc1c4c9b9e4a7bf0abcfc157.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d37a8a10d2094c5b945170c29316c497.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["f9bae385ead94619a1e7cca9f082e767.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a94441cff78d481097292c2935bd226b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["3930ab248d7b4db0bc6692d92798ba6d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["5dcd03815e1b492f8d37057309fb68be.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["1538dda00d854190981c32954114faeb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["aaf6f219ee87494d9a35bd5434059021.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["a2d8ac802d8a4490b83b4f721d923b96.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["7cc50e7e16334d95872c96abfc60917c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["d025233df3694565b93bfc35fe5b060c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":5}}],["52b69693573c479cb752352538bcab06.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fe7b7bd47b534b20a9f6f19034995beb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["bd631d4db1034a8e86ff45dc67d9b51b.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FW_ENL","multiplierE6":1000000}}],["9c6553766fbf486eb585f6b12c5bd473.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FW_RES","multiplierE6":1000000}}],["d13c49d617c8467ca643d6be6fdd8b3c.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["543363d5204b4f8ab2502c469614c77a.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["a8746cae33144131ae177adfb29a43e9.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["c2af491a773a450593d1de07ccc3c658.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["e0bfc7df2b2144f0a85830c56e2ce743.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["0ac9f869ee974c6bb35b69cbdcd4c528.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["9eac6a30b2b543c5aa10557ac66ccf9e.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["10242e6f22dc4288baacf9026b5f4b44.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["cf7f4b50a93443579abb3702ff9f0ddd.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["2557f394743c436a83496e579c8fd201.5",0,{"resource":{"resourceType":"CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":100,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"BE4AB97C"}}],["9f604636b5fd437a9edce9ac1b7eb25a.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["11885febe6204541908f0e779b0851e5.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["e7dc579f36354bdab05d26253ca00515.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["895404c68cde4c08b27f008361a12618.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["c521812b202b4af29b80aa2210476314.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["ef827a8b8c9e4a0793bc91bb4561fe5c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["7274b326a0b74b84a835718e3cb805f6.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["e6922752da8f4d309da586281ab8d94d.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["708b06ccfc304c46a69a2c64ec4b52ed.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["b829ffbb4d6d40fd87e1e2f76db019b6.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"NIA","multiplierE6":1000000}}],["b9219a79335f48e3a6749e619489b682.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["43a79752bf37421fafe7b8b96c11c0a6.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["9b3f5b3d1b9e443bb2b5c35fd7e5fea5.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"5943FE93"}}],["50eb8a246b1140f0bae0a90435abfa56.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["18d095f09ea7417abdf5a236e1a81c22.5",1748223608679,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"8d2d12d7170d4e8fa23a5ddd503dbab7.16","portalLocation":"fff4acb9,fa9e0bc7","portalImageUrl":"https://lh3.googleusercontent.com/dxEzZTEgxNnjiBfI6MzRacpO-4XQaWqE_Wyz7uRHp11sgygbXbQh_3bkCyLiPJY9mLW0Vwjy_8dLpZ_NesGWQzzAhT9Og20urJjJfI21UPmB","portalTitle":"Playa De La Estación","portalAddress":"Parque Nacional Galápagos, Avenue Charles Darwin, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731954153158"}}],["f4f308e359b042c7a33daa8648e60973.5",1748223608743,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"486fc690b7254eda9a2558188e412436.16","portalLocation":"fff4a620,fa9df0a0","portalImageUrl":"https://lh3.googleusercontent.com/uDukKhuCayrQQ07xlAL-Jnw-4HP8ewbk_o3sx-znbAuD5SlKncZIzJG0Htf2zOxI7bbnYVNklyHPSbhHxxpwojGvRMzHeMbLORWntv_zGHB1","portalTitle":"La Tortuga","portalAddress":"Parque Nacional Galápagos, Avenue Charles Darwin, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1741570076220"}}],["d52097d045864f70b1863cdf4a1910ec.5",1748223608806,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"71f11c3221b9481e99ebefc0109a41c7.16","portalLocation":"fffda089,fb52b522","portalImageUrl":"https://lh3.googleusercontent.com/DlcABZC3QPWOL4vIE_xMJxwziw69o_8njxJ0HyE6qehJ5nVwjCW_Zrlz3S5MvfJTbFr52RybE1q6J8Z8aNk3Px_Hgd-tMsPN79xmlYcG_aEr","portalTitle":"Me Voy A Volver","portalAddress":"De Los Perales, Quito, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742255775317"}}],["a4b71900a5264f1c96ef877873e24d54.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"6B8492A3"}}],["3f583c52bc7b4737a9de52db62cb208c.5",1753303911608,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2164bbfa41b04933a84ef76fd0b3ad27.16","portalLocation":"ffe0dac5,fb3d7cb5","portalImageUrl":"https://lh3.googleusercontent.com/LjS4e7ErCkaQJ3NwthkhNtp54LyHi3739qsF0hJ-VeGeKUO9NtRut9ruhLsUq-Vvd-iAZRnWqggP0fL-h2pQ9Sgf822VASPft5wsqew_y8g","portalTitle":"Entrada Universidad Ecotec","portalAddress":"Unnamed Road, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753303910920"}}],["bef6d83258e94ceea24e859f21142fa5.5",1753306068550,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"689bd986708a30f38b0129942a8425b3.16","portalLocation":"ffe0e735,fb3d6178","portalImageUrl":"https://lh3.googleusercontent.com/GVu1YRM0tr8bx0Nt9DuCKRa_aW1hrBzzie4713YOG9P4qxr9MljOt2eeJrJaGR4yhvpSWBsWZkkZl4Emqc2vwrg14SDcdedWI6j0V74JaMqqKw","portalTitle":"Gruta a la virgen Maria urbanizacion Castilla","portalAddress":"X46P+RJ Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753306067721"}}],["e4e3ce960aa1454d9bd08c18847a3251.5",1753376454522,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9fde386602fa43f3be012b5d49db1a2d.16","portalLocation":"ffdfb9b9,fb3d4be6","portalImageUrl":"https://lh3.googleusercontent.com/yINWdc6HfyG6UDoHL01C-xvHvCy9_vddolJbz7OTq4yY5CqThZO-_dW1a3QwrA5UCtAuJMmGPUZ1SgzGxDpNkGDVuRwL1l4ZxnxQzPWNyCib","portalTitle":"Urbanización Atlantis","portalAddress":"Av. Samborondón 4, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753376453931"}}],["06a25b2f6e4646c696d3a0ffaa50322c.5",1753376562392,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f28fd8b53fb64786b6c2c6f84514b342.16","portalLocation":"ffdfe3d5,fb3d3cef","portalImageUrl":"https://lh3.googleusercontent.com/Z7Pr8yP4IY6Tv2J5pHEd2ysCH7t51XL3uYrrnKR_VN49GxjAjSG1svnbTdOpnuas3VXg_5wIiiqg1VXyVtNJ1zxkuCW7mzFkx9yn2FL0VSXQ","portalTitle":"Bonaire","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753376561804"}}],["d5fbf4332de44d0eb5b704763e49af79.5",1753398517584,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"10d05a2544e1406da78a0d8adb9c73ae.16","portalLocation":"ffde8207,fb3bc6e1","portalImageUrl":"https://lh3.googleusercontent.com/9uPXP24YmA7z0z9-0fX_sZkN8gPsrX5ZF7LiPa_dbhkw2QowoneBCI9cC01SEp0d54P6sgV6DxQEUzuEJV49pcOyqKwvhegWmP-g3Gxc3WGo","portalTitle":"Glorieta del muelle puerto azul","portalAddress":"Calle 7 SO, Guayaquil, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753398516821"}}],["de4ffb67cacd44478a4d8911c39f1349.5",1753736744612,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"bc264e0b51c64656b8dd5f375a309841.16","portalLocation":"ffde2709,fb3d285b","portalImageUrl":"https://lh3.googleusercontent.com/e_XGgEbPjgItUd8sINUDyoWngWKnfL6RZ3s7wqwkUb_kQBWI3fay3y18V_BCGzVNW0MLnNMemFKhxMaxyXe-96z4i68qZckA3WeJN8DknT1vqg","portalTitle":"Mirador Final Puente Santay","portalAddress":"Paseo Ecoturístico Isla Santay, Isla Santay, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753736743987"}}],["4769f83732a8409e97100b846b53498d.5",1753737212899,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ed7e73e968724ec098d008f28c44f666.16","portalLocation":"ffde2880,fb3d1473","portalImageUrl":"https://lh3.googleusercontent.com/2J_62B-a0FZxVxDN73mwgi0c09BtHDi1WZtUQd9wA_ee6VY19VQxeFkY3mU7xzXkpleWVtTyU6SzLgu8a370AfPOBs1qop4ZWWSMpLrszNwUoA","portalTitle":"Puente elevadizo de la Isla Santay","portalAddress":"Puente Guayaquil - Santay, Puente Peatonal & Ciclovia \\"Santay\\", Guayaquil 090101, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753737212164"}}],["da9d8a6ca059473083762f8cda75f74b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7c2cf1d130d84eaea6342560b8913b34.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["a8f25e4447294e80adc16f85c973daeb.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["ed4f35eb773e4eca9767808a51e3375f.5",1753987474310,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b869119238033312bb3fdb8125d50ea9.16","portalLocation":"ffdffb2b,fb3d328b","portalImageUrl":"https://lh3.googleusercontent.com/Ed4HJy0HWc3L4W6mRhoPfHDEk7wgtKN1GCfJurp-kOkMIRs0hWygoxhnW8SpSM36VSad3MR5DF688jPYNePNm1LGFJSr5-k91CKfc9EcQLk","portalTitle":"DARTH VADER PENSADOR","portalAddress":"W42F+JQV, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753987473594"}}],["beedbcc6bc3f4353af28028d585dbeb3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["355925da4f554bd9ada1b8e59af67f10.5",1753989747586,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7c40918fc95145ffa44084e9f4aa3f38.16","portalLocation":"ffdf7975,fb3cfeab","portalImageUrl":"https://lh3.googleusercontent.com/AObYhbTJp7m4VRRFIMLTTiLRLUUGqrtifDD1yQNL7f2tGoHLdNefZ8Jbp5FP8iuOTS3BpdEfFi1pu3znKjsr_9irYn65l7DHTPALDNC_h7VR","portalTitle":"Juegos Infantiles Mz.119 Sauces 3","portalAddress":"Av. 4, Guayaquil 090504, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753989746837"}}],["7d5562d05fdf4242b23df0d38cf98fce.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ad4beb16dfc2418aa051ecdd0d882d12.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c4ff4d0fae5340d3a164d616fb3693d6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["971532127fdb4f1b8edb3cc3c92c3bf3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["576999cd5b8b47db8adb3b11cd41421c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["30a6dbdfcc434ab19a3a5051ca7a06c7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8dce46fea1a24f7c9101ff1c847341ea.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["6d5a096422d046dba2c7cab89251e23c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a63697f2223d4c718fe44733658b1501.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["a7c49f7bbe8a4c7ea76531230d7e6817.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["fc7f9b21ca914077b7c02db9d154cbc1.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["c17d27e576774075849c3a4a6977eb33.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["365ec54189834fc39da0584ada70c384.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["9dccb6e7912e4973ba3693d35e882f35.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["afa985d15c76467ab0b0ae3bfb0bf4e6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["ef5fa6760a98457da756df9888e40b1f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["08daf8fc7b714fc5b95ee23cd277043f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["75a10781360149da91df67258b447f4e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["de6ec0544df643e6a9f3835ebc2fdbf7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e74df5ea992147ac8230c7b86bf95839.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["91738216b45d473a93f5c4b6c5529c68.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["7619d77c127d41de8a2e2546cd0d3d4a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c4e49f8f3346458ea64fc2eda929cf19.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["8c9c3d2b8d7b4780a73c3633dc378293.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b2b19b5a3f83423ebc5728348ebc14d1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dd6b00e27f3744a2bac87e1a6187a152.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fa5afc69913140158073db84374b92df.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["f020bbd0edb64b06bf1a92c15c6901ff.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["ea5ea83987104bc7ac0d5bc3620f5f63.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8f839e1e6e0646278bfd8d52532b71bf.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["c2900aeaf7564291a74781461369f6dd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9ebf4d6681134656a6d6f0ae85136d17.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6bdd35d6c185496d98bfba7a465b9152.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["65b6c7ac21de471c9df7e397c2cdf6e3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c36bce448e9a4fe9972f1b8a3aa767f2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ba3b5c58201e4d389af6bde81f8e23ec.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["51c47840085b42b286530503a9d6f731.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"792229E5"}}],["3b9e4d6375e345d29a14bb3dd250d11d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["296050a9cf7741259bee3fd750634d11.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["689a27e6c38c4acf8921bbc7518d1413.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fe7b8224345d40688d1b7c649fb73028.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0df98aa2297047b5ac9848c4e5d86f5d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["da68ba7a6d4f47c58d62407597decb0c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cc87f53afc5346efb83de607fb797338.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3dc8274644cd4982a7274b95de081dc9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["391ae1f28a5142cf858203664bd21508.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ec0912ecf1a94d29a890d7252a3b77b6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0a9702e4df5b45ffa5793084c3b781d7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4d498c6a822f4cdcaa40ebf29a753c1a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cd1b645808ba4abfaaeadcf68346f845.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9475e62de789439387260ef32872b6ce.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2da3152111234eef8d44207fda197a28.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["72aaed49fda740668ead3e60a351ecd7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8f603207617d4488a94530bd97f1e87c.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["89e3ff7eb7284fc3a483ebfa4a94a9db.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["d33f8d047899465a84bf67fc8d047f84.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["65a451e2636041359190d9a190ed5aa4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["68c105e765fb40ce816ef1eb6039bbff.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7f05b363da0c4450b8589e51ed63a6f1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["047aee8f239744518bb394545506ba54.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["25afc183215748e5a554a2793314f3cc.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["71d4d81a3fe8465382dcfbb17a675f0f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["300eb501e4ee4a70b06b3b6357b94b4d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["141794073ec6435a8da9c44ef3138c30.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["bde9532e6c1a4b6fbfe518bd2ad85e5e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["38636b9d81924952b14c70d43599e58f.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["17787c17ee5c41dda4abddf992f3bbe0.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["5184f6c9eb6949529c9c27be44c03be5.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["e294c6441c2642a28a35c32fdb28e0b8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["befca4706d81438caaa383deae9d873f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["328acbcfdce34a4983ed1ff3e0ec9395.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"73315389"}}],["77d3582fb08c4a13974373a97841184f.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["92b3cea7d30d49438558034952ca4cf9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d6c4738e49ff41459108ced00629384e.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["41e05830713542a5bcb81ec33eb1c5aa.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c2f8b912f4c54efd82e188868721623a.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["fe996a8bbb0040bbb3f3914f7c03df8a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b4c671ea1ffd43eda39ed57998d61a1a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a80647e7d4ed4815a06519d5e5715005.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9534b68869db4066ac38a112e7b2a21d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6a7b41f17c22483fada06cd89fec482c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["669c2561b8f0462bbf27a654e5086ec5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a46bf3dce4b948c898586bcb531088a7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["aaa07e7b863d4897aec6488e1e188064.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["27bbf4839e054887b0f73b817f803f29.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["914ecc6d27bd4985a708d4c7c41701d4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b815cb74a0cb419899a2cb793cf31c38.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fbfd07648bf84ed098cc6115972201e6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["146544eaedcd4eb4ad6f07fbd7c1e621.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7139ca784a794452a935e8227f125441.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["cd750004949947e98cfd1e07e2943c18.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["180f2a98461448f7b0deef489fba4823.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["cf61edae4cf34d6f8079b8a0a1e44519.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["31cbbae412824738a2b6bcfce7fd5a3b.5",1758136213652,{"resource":{"resourceType":"PLAYER_POWERUP","resourceRarity":"VERY_RARE"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1758136213651"},"playerPowerupResource":{"playerPowerupEnum":"APEX"}}],["f2e59846772d4af3958a0969697a9f1a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["67e0a3891e4840cfa531e2a491bc630b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["78b79e65ec9c4820b922a23886ff3fc2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4170eb7da32a4b278f2e2d00508f9bf5.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["c127e23448c949e487f633c4be07be24.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2764fc6df6284910829991b485605cad.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2b63085885ec47e98b3032705803fff9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["54134d9558f64bb08265c6dd7fa7c259.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4c26aea3af5749b7b08b156e8a73b466.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f87d40e9ba2d49488f8dbb57cc561256.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cf0a7d2f73f845fdac6688ce8405c059.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["eeb667cb09904c02bc317cf8b6742568.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d24ae800bd6c4f14966aa51d04923007.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["68f74129297448ed984143d32578f7c4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c886a8e8b8364e6ea079e0b277a15f2c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7e3019e7210e42a194b79cd3018f5929.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9b9eb356ac4c457dbad4c72157e70c1d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3a7151fd501f4407bef5ca420de3b38d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8d39c16748034638905747d0587cfed1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fee72b11a9934e0bb87c45bd8d00ecfa.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["08ddca7a4fc441f7930150251f953b2d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["040ccceb9fdd4af0a4ec23cb3e6307e6.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["a5c38b032022469096378057c58b5c4a.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["5f5a76e5efa04d37bf55b57a067d0f53.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["144542ceaf4b421988ea7d382d41e832.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c274705852eb40ea9f378d1de03a74a9.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["913fab8457744ca6aa8fdb1548db47aa.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ada5b798a87d44548bfcb8436f7a4c21.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e28615479f294501842ab8804025823c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e128e8e448b54318903b9f1751ca0c74.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c228dda55e83462e807da7bc693fd4cb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e204e2a688a24d29bf62d96225cb6264.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3117b227e1a946c89dd0d1a280594e60.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7773f11e805d4ccfb25aefee1c4348b8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c2f87be966534969a65509d506e177f7.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["2a5f529a52f64f069db0b361f2c4835f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["bfec10da4db6431e9c9636d9166ab163.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["11d11aa47d214ec4907b9f93d7dffa21.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["a122a9188ad34b8bae2b9dd60611fa69.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["02f9ee1438144eff9c3e9a07f80e3f9e.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["8549c26a4da649d5aa0114db55ff1163.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["f60f10c1ee724b5fbd85f312befd232f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["499368ee31ce478f8af68e1863acc2ba.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["bd3aba33d57a413a81a07800fe5f76a4.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["c62e239561644c1083a8cb0f02c13aef.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["0cc6892d70794a05931f0f6444af43b9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["6289ae81384d423996e7498f00bc682f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["625bcc55d4be4774ba293c052c759e24.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["031ee03291fa43279ebfa63fa3f20ad9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["77558138f71d43b889585b0c1accadd6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c4f8ffcdb85b4cf09d9587a76d78ecbe.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["aa4c1b989dbe45b78b1c3ed5e6ab0f1e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["b3feedcecdf146dd9fddb25ba913be9e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["7d2656bf058f45b09064c62668e681f2.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["c639d736ae784af7b81ad26fce604895.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["5fc0b23c974446de84d0921fec9b26d4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ac5e99a128e747cab9db4f00b7be61e6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["2b0f411916bc4a938cb24b67e940b556.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["6514711aa3104499905f39c850e58e66.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["e0e0770943784d54a69c88675f8bba40.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["86c2af5b1685435aaebb094a308169e6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f893f4e405c64cb19dc9bcb65cd2a3cb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["03684bf8c60548e194c6d7f09dccc422.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["03009d5cd0534f5cb238755821fb37d5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["47dce99bfea74c2db15704cecf2b7a07.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["8de4403604b54a43b5a1f531bdef8556.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["bdc8879a313440279ad696cafc41c67a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["89373c66ec284ba3994c7bbc3b385f3f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["10de7cb9cb6149fba340135e46145211.5",0,{"resource":{"resourceType":"KEY_CAPSULE","resourceRarity":"VERY_RARE"},"container":{"currentCapacity":100,"currentCount":58,"stackableItems":[{"itemGuids":["41bc90cda6b64f3bb786ca1a717fa424.1b"],"exampleGameEntity":["1ddc3ea572b248e3875180ee9c6e8c9e.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7349ddd2f16d37408f60f43b88bde7c6.16","portalLocation":"000d48d0,fb3da926","portalImageUrl":"https://lh3.googleusercontent.com/U1oSMZXvAVQjE7XsH2UtwPwfdKNz-79L8dmimSv5aeT4A1FX0tqOrJ4T8x9Geh-4SqqDraMENPOUa14UWlCyqi2iqz6XVZvc4KMD5fjnXKvokA","portalTitle":"Mural Pepita","portalAddress":"7, Las Palmeras 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714698007434"}}]},{"itemGuids":["f0a635f75ae34f69be183566b99a3a48.1b","bc77ea9831aa4dea93447339d40674dc.1b","6542d3dfff544dc8824632e0cb4faf8f.1b"],"exampleGameEntity":["d202323897804be5867254b5a0f557dd.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0155683dc3f3386f8ed1dfcac0a7bb48.16","portalLocation":"000d3c64,fb3da8fe","portalImageUrl":"https://lh3.googleusercontent.com/0AcfoVU_uOn4wVH0MnOlE3-7xG_HxLfQ2ihsPCJ7mDyNQvcNxdPms0hRIJ4zwJ2FCNX2XNyZi_yX6tX58JHHKzRNcfseu3kFLjDnVJxkf_5A","portalTitle":"Iglesia Cristiana Pentecostes De Atacames","portalAddress":"11, Victoria Dios 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725630360113"}}]},{"itemGuids":["fae447dcac9e49368c05aa0125607056.1b"],"exampleGameEntity":["e8aaa40afeb34290bab9a3dcd8296718.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b57f02a2fff24b33b26e429934a4bb5d.16","portalLocation":"000d443f,fb3d9cff","portalImageUrl":"https://lh3.googleusercontent.com/hmBtXKya-Umra_mTUNT6Qzo6bEBu1gLJGCjosX-sAMivE1_gyGYqyCWwMaQHmSSbSHxXZTciPaKefcpyQLhKFki9ZjZ3KKZC0sYjKjAEEUK0","portalTitle":"Los Juegos Del Parque","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090143347"}}]},{"itemGuids":["b64c93d3d98c4fe6814138da21858002.1b","0c7be26758294609846fc7bdb8fcfa17.1b"],"exampleGameEntity":["13343fbf2d12432aa51975f2b025696a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ac2a04349d1e3cb4b2e98b0812b02ba8.16","portalLocation":"000d553e,fb3d9711","portalImageUrl":"https://lh3.googleusercontent.com/KFkmNfj4gvC3SXiSHCbRkvPM46mqS3PY-p2fWaK3Fn3tqPiiuWct2CuzlZs1jurY4KPWlpuRbnFQRIv4dbE-HBFW0aJ8gOiV88X7jAJqYSQ","portalTitle":"Mural La Tortuga Marina","portalAddress":"V5F2+F4M, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1727787867353"}}]},{"itemGuids":["4d5f0690146f4814950947447a7db5ae.1b"],"exampleGameEntity":["f98808aac13845a583ba5f8d9e0a46ef.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6a97bfa313e24bd68ad53a150c312710.16","portalLocation":"000d5d9d,fb3e008d","portalImageUrl":"https://lh3.googleusercontent.com/KL8cp9tD0Skaa24S88up_LbAuiSNpm7Y1OIZiQIXWnfbi1seTDmnDFoYr3g8pAuarv3Voa2OZSESs-Lry9jDCIsAsCBW_CzuGgYzNTxhBFcW","portalTitle":"Monumento Santa Rosa De Lima","portalAddress":"Ruta del Spondylus, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1709307717981"}}]},{"itemGuids":["8a8f7166d7fe40b3ab39637231a8e978.1b"],"exampleGameEntity":["a979cbcf78e54a648aaa3815f19d42dd.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"af5bebfd4db94ef7ab1c8cf7d09e0907.16","portalLocation":"000d4438,fb3d932e","portalImageUrl":"https://lh3.googleusercontent.com/pwCl54jSK--BVcJ1kp8_IrXjf99I6GHvQ7qAmECKPA33ci9gvq7xcph4r9eC-1Du5zlXACwUv1Q1ZuJCFPcIu1P2fWSp5YWQutZiFWFXjevD","portalTitle":"Mural Frutero","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714069682797"}}]},{"itemGuids":["bb78bcda760b4ce5bc9fecdf198bfc9d.1b","506f940dc9054e8f87290f9336618e2b.1b"],"exampleGameEntity":["6489db84a70d407890bab4a9afbf9e21.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"1e10fa7cc0834012b95a610e299364f2.16","portalLocation":"000d5387,fb3d95c2","portalImageUrl":"https://lh3.googleusercontent.com/axnHle22GH6KY45LFkKohR2s7jvc9R-jiCz13reZ2f5LAlZ27GVTQwdOTXwJ35kmk2pjJXer6apdYdh_Jztzyc7-cFzM28636xcNKDhAuprv","portalTitle":"Mural El Barco Fritz","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1727787867308"}}]},{"itemGuids":["2795da0d1f39451bab5f0f3ecea373bd.1b"],"exampleGameEntity":["2286df4001db4e73a037d6f3da793430.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"35995df0c5a730a3917100a279cd7344.16","portalLocation":"000d3cb3,fb3d7eb8","portalImageUrl":"https://lh3.googleusercontent.com/q-EveXAumt1UortTwcrAvM9VhXn1vCT9G_IvIR0eMWBgOyjU4lz66Q4lO1uJF4sShqCPcfRo1bilL_mM1whW7IlYjn_hxeoOGk4t0PahYHE","portalTitle":"Mural El Hombre","portalAddress":"V48V+WG2, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1719359597811"}}]},{"itemGuids":["d22fdc4a98fe4f988dd07239c71256f1.1b"],"exampleGameEntity":["6d329bd6b26042a1964f9411e93ccd68.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"cea96f37f3af369ab1c3f5f58a3a014d.16","portalLocation":"000d4026,fb3d9b7e","portalImageUrl":"https://lh3.googleusercontent.com/Mc9Tbx0TE5tdB8guwGGUjT6NJdmAvXs9T_oU66Iv9zPslnI2fII_ZgGd_isr92VKNyoTfko9-w7mzp8hra_Lo0MKHRTSvRNIBhYEWJjNnmA","portalTitle":"Mural El Submarino De Julio Verne","portalAddress":"Sexta 2620, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090143340"}}]},{"itemGuids":["718c088a436a44399aeb86434c91dd7b.1b","79be9e88c58049088239970f83459709.1b","4799dda1af1c4bf68579e5e1836c2789.1b","126282d1e7d948edac54149cce1512a6.1b"],"exampleGameEntity":["0aa11009c43148baaea0e4d85b275c91.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"89adf77fe9b348f99626414e78c58ca3.16","portalLocation":"000d55aa,fb3d9867","portalImageUrl":"https://lh3.googleusercontent.com/jXwupHeL5IHXqry_HACQe-6v63WNZ6UUdZCrvgsdvN2EiG2loSa_zH22zw5f08BH3GQqI5rt9TFsl06o4QWNMeVQE5qxEjx5QtoBtyuw6j3wkQ","portalTitle":"La Marimba","portalAddress":"Malecón del Mar, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1727787867304"}}]},{"itemGuids":["6e1a3d7d79bf47adbcac0c40efb35316.1b","dc424c4036ee4757a8d3375805da3ca4.1b"],"exampleGameEntity":["1e9c403fa9c04bda80a01c1383258cda.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"aa7578a05ced40ffb514645b2da0e93e.16","portalLocation":"000d5091,fb3d9388","portalImageUrl":"https://lh3.googleusercontent.com/Oy5sONTBoGbbhu4iY1RbWG1Tw51cSaUCrNyuTz-RSUUk-QZqB11fEt_Di1TxK4GzmH3piDf6dDBoGpWeiZ4rHjzOGpnPbomXYrihz89gZhli","portalTitle":"Mural Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730982961511"}}]},{"itemGuids":["5212b7ff9985499a9c9690745d4f4792.1b","3a846bd1bdee48238893441898ba2976.1b"],"exampleGameEntity":["52c61ed6c57b4722b6bc0c61865f7d44.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"53033d7727c7433fbf4672744e2c046b.16","portalLocation":"000d4c43,fb3d93ec","portalImageUrl":"https://lh3.googleusercontent.com/8tSVjkXhuM_eskaoGbpKd56rJ3H9Do5hkCzZupsQKockPxmCEHpzWVvG1qxwypdKA84Lr6WIm6loiQDLmWN1ES3NBM2SNpsZLiCRJxR1hBZt","portalTitle":"Mural Acuario Atacames","portalAddress":"Puente Peatonal, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730982961513"}}]},{"itemGuids":["7a64ffb2c2d64874b43d7e30b976bce4.1b"],"exampleGameEntity":["64eddb64c3104fdb8c96e7001d5b4d70.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"593eacf87249464ca1275209729226ef.16","portalLocation":"000d4527,fb3d9e85","portalImageUrl":"https://lh3.googleusercontent.com/ZAij7b5Fi_NMJqsHFGNzvrqC-FW_0iQvcODqua2T8L8aAlVGe1jklxp8emS2kHUjynMbnmMjZyW_qen-pThPbz59P1mP1AjXEG_ne037eH7ajg","portalTitle":"Museo Arqueológico Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090143351"}}]},{"itemGuids":["e43d0cc2094245fb8c44c6a6728e502c.1b","916ea328146c4675aed188446a029cae.1b"],"exampleGameEntity":["c1fbbe50e8fa41b7a6cb759f96840955.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"91ebe2b830463619b7d50fb3f09bc1bd.16","portalLocation":"000d4101,fb3d9a28","portalImageUrl":"https://lh3.googleusercontent.com/V2dzZ9A8AigSE5nkrOaVN8CrYdz7-sI1czsbaF_RmPIPCpcZmKBWn_JqmLTUAbZQybQEbllwbwD0Ik8ywS9L1hj4iVY-cYrwsuQZpnksWBug","portalTitle":"Mural La Vida Submarina","portalAddress":"Sexta 2620, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090143341"}}]},{"itemGuids":["b34980f68f17418080f40251d31c9c54.1b","d384d4de6f594193bd43f767a8e3b3c8.1b","8c27fb48f715401eaece5a8ec5332a25.1b"],"exampleGameEntity":["633e2654c3274545bedc7d6531f7c356.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"3c795410dc903389a06165e60ee2a0ae.16","portalLocation":"000d4863,fb3da9d9","portalImageUrl":"https://lh3.googleusercontent.com/pyP02xoQjR0VSJ7sJOiuDtL4uJCC8zYXjpESSGTZvSXHzY1zryczXAzLmJYdjHISNEVYJeoLuFhtqr71MJvgee1ICe-fjj0hLbs7v_zUepBd","portalTitle":"Mural La Bella Esmeraldeña","portalAddress":"V5C4+776, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1713229834193"}}]},{"itemGuids":["c7faf0dd78c84e7189486bec5ce9676a.1b"],"exampleGameEntity":["6cc1fd32e2ea439b8ad35a5b28326aa1.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b9df9220925847aebbb127b2dab0e3fc.16","portalLocation":"000d5ac9,fb3da0f1","portalImageUrl":"https://lh3.googleusercontent.com/yf5sD1XM9ryH7QEs4EJCk7LEtlI6eabcj94gySfPqg1I98j3xc4fTrGLKvI2yyiXPQj_zsMRiMOqtSRjz60KuuQ94DITcCNt-BWoyUlHyX0","portalTitle":"I Love Atacames","portalAddress":"Cayapas, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1727787867317"}}]},{"itemGuids":["6f00a10e30b2403084cfc74048a8d580.1b"],"exampleGameEntity":["8d91af6c83954cb9b454c34120f20b0c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2cf608b4585e36ceb829435dc07e4af0.16","portalLocation":"000d3ef5,fb3d85f5","portalImageUrl":"https://lh3.googleusercontent.com/UfQIuzoQfRASJ9EbGYr07Npzth128O5E7-HT0fg6kMKhnZ6xwLPKW6B-f1IZE39BnIyet93G58VCDvTp5OGUdhlL3hgkxjIw8frhxwHvdac","portalTitle":"Mural La Banana Acuática","portalAddress":"V49W+49X, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1726923189138"}}]},{"itemGuids":["20ef0a9dd5b848619c7e281bb6687d52.1b","92319c54b259489db2f53bd9431acfc4.1b"],"exampleGameEntity":["235501300e094865bf92ea432b19ece2.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"74576a54036141bab50b6d82d28e21c3.16","portalLocation":"000d48cf,fb3d85fa","portalImageUrl":"https://lh3.googleusercontent.com/Ocmb0VdH2kx5s4c4viUjuvquHAsot9fBlzvBlf_LBqmAIHZnA_woaRd9wcT4_GU1o7uB0ReLcfx9cn4cYpgbCUR6ZLPBnd9LuzPrcQmn76Y","portalTitle":"La Bota Del Marqués","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730982961512"}}]},{"itemGuids":["8414f52f913f4a089373d945d12db1a3.1b","81a8935b3d2c4d8eaf92b489f2866234.1b","fe73dea5a6fa41c9a8a3a2d49140f770.1b","694e49467fa046b4a21cc917fa8efe09.1b","943982e27341423b945e647dd16822a3.1b"],"exampleGameEntity":["79a6e7e4ac434f84a36038da7fac22f7.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9554ba4fdedf4bacb9730bd51b50c425.16","portalLocation":"000d4716,fb3d99fd","portalImageUrl":"https://lh3.googleusercontent.com/FaEHzPNPpO86QeXHjLywoEB9-bvAoFItOpQojCl_TBfmdB76QbUIca5A85uZ_xlxXPmGko64db_ZTJmYC7FlWl79-mbYxOkixuLsbH9nvqs","portalTitle":"Iglesia Ministerial De Jesucristo Internacional Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1707941287412"}}]},{"itemGuids":["979947ef1b6248b68830b58203993026.1b","8a5a174e81b74628804014894bf6fac2.1b"],"exampleGameEntity":["1db4874742344061a238cdd57538c233.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"567a43df1d6539769df6d686962a4d7c.16","portalLocation":"000d50ac,fb3d99c1","portalImageUrl":"https://lh3.googleusercontent.com/KAzDhFY5ZJZ1s1eysm9iZyR6RCVbCtPzKKRCeUmcDtl7n05Gs57XSpQDrbUqA0eaJ3F_8BXa-YPsxUFm8UGUoja1zrBkCtHaV1l1ZOP51lSV","portalTitle":"Pergolas De Descanso Manglares De Atacames #2","portalAddress":"V5F2+C78, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1727787867312"}}]},{"itemGuids":["d19d387b3f984162b00d15f932536997.1b"],"exampleGameEntity":["6ca24b984f944e05bd84ac52c598eb46.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"dbb238809d42492181e27a6284348e64.16","portalLocation":"000d3e75,fb3d82b9","portalImageUrl":"https://lh3.googleusercontent.com/2ldjx2KEqmAOVU97dueby8HkQiUQt_VUPMosHIgeGCfbMswubhTi0xR-B-ZDUl5P2NkkwFdNnovel3UbOcGupMZPAcRJ2khUBbRUIT4hu0PY","portalTitle":"Mural Delfines","portalAddress":"38, Vista al Mar 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090143355"}}]},{"itemGuids":["8b1ab145a1b549e6b0179eaecf8fb232.1b"],"exampleGameEntity":["1a0d78868c9f4507bb342af145f1253a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"a57d00674d2e30ddbdaed2fd4ee2a7bf.16","portalLocation":"000d47d4,fb3da660","portalImageUrl":"https://lh3.googleusercontent.com/ihBrn6d-c5c87sIHpP5VzKKFnsZcX71Oaq-RryvBx-5rzXHZHHlzhZV8dzyYHVFjkcrSQZwXuQj3hMFAnBtg3LvJc2Iztp2CG0h_1H5dLNUC","portalTitle":"Mural Miguel Y Dante","portalAddress":"V5C3+4MF, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1719359597797"}}]},{"itemGuids":["befcbea0ca3d4a62b8f47be42a647743.1b"],"exampleGameEntity":["af54cc4bb97e4237a0a0b9d29347c1d7.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9e62f51ec0b5378181706d21fbea5593.16","portalLocation":"000d3bdf,fb3da83d","portalImageUrl":"https://lh3.googleusercontent.com/9lJpQe89db6mRWmfGWpJ9L16p21nY330qUFCqmVXO6W7ismzkLED3sLhgBTbfnjZBdOQSeRRaSPwny4E2COWZyYy-1v7PkSbr3MHnCaxvYOJ","portalTitle":"Cancha De VolleyBall Atacames","portalAddress":"V583+VXF, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1726923189150"}}]},{"itemGuids":["ce2831d1e66346fb9219d9c2e6481339.1b"],"exampleGameEntity":["3449fa38625140a8a4da41a7d52092a7.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7be1528d041146f48f15a41975108ff1.16","portalLocation":"000d45da,fb3d9d46","portalImageUrl":"https://lh3.googleusercontent.com/gBXWCD_d52Y31fLi7rMicpI9_1ZbLlSlQd3oNP_BWtFsuceIY6ZsyVrDqvU28D36iA9mm3caYmyJAG4TsgZ2h1EtUXukiWISdImKDk73I8sOxg","portalTitle":"Iglesia De Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090143349"}}]},{"itemGuids":["63d49c5682524a7caa775c8150bc50f3.1b"],"exampleGameEntity":["5962171dfadf4bac8ec3a5b54f9b49f9.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"a0d92daff6f33f9ea04150f36a0452c0.16","portalLocation":"000d414a,fb3d9cb4","portalImageUrl":"https://lh3.googleusercontent.com/qXpRzPLuc5bFljrjKfSE8yMeIO-aNMQBVkYs24KT_82JZAIdOv_OEWvVQLF9uU78XP-3j0ZiwXUVpYGxoVW_YJyp24S-IgGlw-WOpCEc_754YA","portalTitle":"Mural Atacames","portalAddress":"V592+9PM, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090143352"}}]},{"itemGuids":["070157f761564d5eb40c185f6c06ac62.1b"],"exampleGameEntity":["e64d014d63514b078202efc1d697a2ec.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2de4b4639d7b48b6bf551415df3848f6.16","portalLocation":"000d4a94,fb3db00a","portalImageUrl":"https://lh3.googleusercontent.com/jXcjKRzSp1KmB06mk5In8D2Qi2fXpeszVTEQADr5XCmoxRiIO-_SnUUk0n0DTZZxaoBvJtgzbHCslYU0upBXKJjqgF0vJdbNNoR_dWlJA9E","portalTitle":"Registro de la Propiedad y Mercantil de Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1719958014944"}}]},{"itemGuids":["8d6326495ad94c708f3c5053904e0381.1b","1326a82ff66e448bab57d1b22b53efc6.1b","1596ad17915142a4b59ce4917b82d081.1b","301530fd3c294b0c91a681dea95cb098.1b"],"exampleGameEntity":["9e7947548d2544d4b58f092bbdbe73ff.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"3791397a23764dcd8f5eb8206e9005a9.16","portalLocation":"000d4455,fb3d98f6","portalImageUrl":"https://lh3.googleusercontent.com/oRU1sBlpUHl1aUPti9SwY1Sh5tVTJ5CTpOsKwrnVH7dmKwo3-cMDe5IZVWbleoJasIdpQ65adN_g2NQqTBpRwXRbrK6xz1kvCbzATJGXNy7p","portalTitle":"Placa Reconocimiento A Luis Eduardo Casierra","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1726923189137"}}]},{"itemGuids":["a4b98806296f46a79bd706f5d1ec75c4.1b","779f812bea8247d585d1480871190d06.1b","58c93b0d78854b4cb748d8ff15e80be8.1b","ccebadf95c564a308d57f21442bfbbe9.1b"],"exampleGameEntity":["60f7e61bf03944e9ac70c9fa250d964a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7d0942efd53f37919059002cdd894e52.16","portalLocation":"000d3ed7,fb3d851f","portalImageUrl":"https://lh3.googleusercontent.com/nCKCqD6m44JlbaY5SXUhJA4hNfYiOzrka2xp9eFazxJS_ZrDrsgwRTtwdDEWcXgHYiRPxlAMGXGH0L0y27irzKlRCxAbLu_U9dOLZqexOIMh","portalTitle":"Mural Santa Rosa De Lima","portalAddress":"V49W+48V, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1708119199914"}}]},{"itemGuids":["6606872780e34908b890829010cf3327.1b"],"exampleGameEntity":["c0e5b382ebd34754865dc3673d6a5418.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"df92ae02de6c3d599b9912e432622c87.16","portalLocation":"000d4899,fb3daa91","portalImageUrl":"https://lh3.googleusercontent.com/y8K-fTiJVzJHQL3b2pKcMNQyW4YxxJcMmy35m5vcGT3MzOpVMA_4YL7tgw9ZOo12GcCPsQXL2bd4dJMiM7_Yv24bohvU-Io25f5aRUfb8Aax","portalTitle":"Mural La Esmeraldas Hermosa","portalAddress":"V5C4+776, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1713229834207"}}]},{"itemGuids":["ebd8b1ee363c4eca972558a1aca21e06.1b","2deb42391cb34c2ba44af4ea60a1c4bf.1b","8c34eeb93d534ee5af2fa9c1613b8806.1b"],"exampleGameEntity":["6114dbe320384114ac2a9a170f2dc7e2.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5fc5593d615247979b8e117b01ca599f.16","portalLocation":"000d50ab,fb3d98b8","portalImageUrl":"https://lh3.googleusercontent.com/Cu9Fhklp3npcKA31lAU9qi-GaFhjVqBSCy2jUIdKEDttO8fn4RM_3lOvTEqec463gKp80LF1dviWW-g_wHY0cObZ_AZX36RZOn2DsrjQqHk","portalTitle":"Mural cigüeña","portalAddress":"Avenida Malecon Playa Atacames 21, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1727787867314"}}]},{"itemGuids":["444373b1ec5944ec86da1a98f5698c2f.1b"],"exampleGameEntity":["da51900f632f45baa6cc8ffe8b9f2932.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"27fa807ac95b30fdaf91ec46fde602dc.16","portalLocation":"000d4714,fb3da66a","portalImageUrl":"https://lh3.googleusercontent.com/TWPV24I8d7QSxwuTV7z9XL1O-JUdgbEHsvluB0CjBjpqB4IN8GRDvr3Q6SKx1kd1uYL26jFWrxE_xpETlDTteXcZ5jbMY0GBCxiZybEARGNv","portalTitle":"Mural La Vida Silvestre","portalAddress":"V5C3+3M9, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1713229834199"}}]},{"itemGuids":["5a2a90ba659946628c8eba93cab17242.1b"],"exampleGameEntity":["2f756ed6d6bd45d19e93b5b75915fc16.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5824cd2ce7913ef98f95abf069d26236.16","portalLocation":"000d3d60,fb3d80b7","portalImageUrl":"https://lh3.googleusercontent.com/HX6xQFZ8Z9lUkeh2IoPkRCP26vto4QcC9lzlUDtqGih468pTPOGDmQ6_jekCCB0d4JxKUc-WWaqWAGwcZPiW8gC7HLM5Z_uI2CBRu0mo_Es","portalTitle":"Mural Dama Azul","portalAddress":"38, Vista al Mar 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090143354"}}]}]},"moniker":{"differentiator":"B517E8AE"}}],["8b1cd1d41f844e0db3a21207c455d86d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["8e4437a41c8346608c9b0ab6dda2b3b8.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["0bc943707f1c4c2e935bcb84cb0cc284.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["154c38e9b5184ed6a8e5d34f6442be99.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["4d98c3a6f6c74e3eba0e26ce42f7d6ec.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["072ee08fa4b243338997479ef9e36a81.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["d945e9b3f552459782b73168d00b3077.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["2da1871a2e204c16a21c2406df4a26c3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["5d309c98311b43f8b6464231e9efa274.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["92fe8372e81a4851a45e5029c40a08e5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["02537344311d4f31a2fbceb0ddd362da.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["7eeb8ecdd8f74eefaf3ce20146431f9f.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["1c6441cfd88f4993a3d613a9dfa2c7d4.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["ecd953c0b95245ca9f9e7881cefd2671.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["65bbe26d407e4000bbbf08d1162d0d35.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["321366b7985d49fab678f119737d13d3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d0abbd4b2290413795f8bd66ba827fba.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"CBDB8D51"}}],["f4d8554b513a48209b9bd1c7efb14319.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["fd2647e03e2745dc9de5fa9aca8d7ce4.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"4","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"MULTIHACK"}}],["d826360c6229417393577fbb0f323f34.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["5163f0ed79bc4b38b5b9b878392f8aac.5",0,{"modResource":{"displayName":"Force Amp","stats":{"FORCE_AMPLIFIER":"2000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"FORCE_AMP"}}],["5b22cc9b16d84f5ab22debdc90473fc1.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["982375c3b9354becb2b2a50722591902.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["40f9fbdfcddc491fa29e51a8566b9ff3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["ab1f5d4c7a3d4b109af8932889ae8e75.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["88a575260760452e8d964b117fe8a515.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["3f64ee95b36f43cd8108c1efe7b84d59.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["53d838c643c94e25b606a3f72f118651.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["bad65b07f8c54c96824b5a13594ffd1f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["56189f3c93b34756b7d21ce49c6275d8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["34773e56e4dd46918c29cb50876fba5b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f16a6822c6484b748a14fdc033b424a8.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["b5bcfe2fa6a444fb9df7696e096ab1fd.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["e93900caee89443a962f0d373fecfa6b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ddb60851fe7742ff9c9c19f2b951dbe9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["e0848b685ed44d75b2f59400b01a2b32.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["30a88d58e3254f7ebe12f05fc12f5a9f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["5bd1e2bd1afa44f78b751291a5babac7.5",1760727321460,{"resource":{"resourceType":"PLAYER_POWERUP","resourceRarity":"VERY_RARE"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1760727321459"},"playerPowerupResource":{"playerPowerupEnum":"APEX"}}],["38fb76e2dd694abab5fd606c078b517d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["035784b1a1c94d248109d46a9ff89db3.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["a34700a74d714a9082d5a5f75b473a6a.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["c270618ff3764fb286cedbf45a073252.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["b6b1e83b67ec4062acd497c603e0e233.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3673881abe454dd3b88cd9ffc500cdb9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["39df40e74b084366b97d488b337ffeaf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1a09eb4b0e30469ab85842f36e3a491c.5",0,{"resourceWithLevels":{"resourceType":"POWER_CUBE","level":8}}],["82166da99fad438584644e77054d2593.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["f9c7d6213db9474797038fe2e928f14c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["638a4e347d6647aa904b5395f5d7e084.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["162724feeeab4875be214e38ff6ac7a2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4867b341c9ef4046a1435de98c68fbcc.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["279c8b09c82f4eb299da3436e51f4af8.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_BLM","multiplierE6":1000000}}],["dfd985ce1bf64f43a6408c4ce0b7ebcf.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["bc21dab932ff4068ba142f2da1ec43ad.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["a8077205ef684841ae8df93b72fc3b4b.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["6e2c28af83c84a7bb4e0e9fa07815bd9.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["ed12b493f0a342d39bc07fa6fb816cd6.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["083ba8bde09c4db189d41f5f8f6a3411.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["3303fb29986b44e2b75b0eb9159e513b.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["4d602daeb8e6425cafa85476cf94248f.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["dc7c5c8aeee14d26ab70c9c6ffe89a5d.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["9b0c8a04682e4b8d9be33304cb354cec.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["dbc44bf883d2417dbfe07b2977f615d0.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["6334adce07044f3eb3bb193c4f4cc7d3.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["d5f95b0e9c134cd595a2b853a8c7fc3c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["0e5a2d16cdb044ca8c593245ecc3f296.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["a0d011ff9b414d0ba0cad0928472dc1c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["3a61246e26f642df93894e1e30eb4ef2.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"TOASTY","multiplierE6":1000000}}],["ef769fc59eec4177aa6bfc13b0c1b11d.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"TOASTY","multiplierE6":1000000}}],["d6b86beed47d4918aeb4bd52bc03df36.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["9be1183832554797917340adefebcaed.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["d096e0378a7c4636bfd0202eea309d8b.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["a2d93840dbce44a289459a1adbdb2c35.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["fc8c633af8b34beb8ff83a5d0cbc7bdb.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["a3a5bffe77f54a61b8df0cb6216d92a7.5",0,{"resource":{"resourceType":"CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":100,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"47A78055"}}],["da5875bc2bc349749c08310044f0d194.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["990ea75cbb904f7e84856effc5827527.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["91a3438ab39c4acca37801f8a49efa2a.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["39e5ca7a29ab4db781aa0f56ff5153f8.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["47f220f1e5ee46729dca26ab20ac1bef.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["a098707a547d4e5a9c499b15b30aa60f.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["6f5d486a960641b7a9da25e38fbb930b.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["b5f63b879647420987375054fa0e40bb.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["d9cb9660b7b948e98bde81c4f9acb240.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["8f49356775d84438bc468fd77f6daca8.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"397E3E18"}}],["8b084b8700164ca2b3a18a57c9ef4ef5.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["9cee4864901c4027b92a27c2049fc786.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["f79c882b922545628928eb26e13f9b7b.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"TOASTY","multiplierE6":1000000}}],["daad1e45fd00407880e79ffd623581a4.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["9a0c311f039e4a308c04c4f5c9aafef4.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["0c2f9273c9894cffa4ffa9d1fe6af2dc.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["ad8aa3373de14a449f690a8b7a862077.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["0b72e6c48342427db215b8cb5dcb6a15.5",1748223609148,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"176a308eb1464008a1e4b855af3af196.16","portalLocation":"ffe19587,fb414844","portalImageUrl":"https://lh3.googleusercontent.com/fjQD8yDGPcvxkEMFUTEgSNzAqzia6ucSMkyjIuS1V_xnyzH7vytCQSfpHwpk8OZh5JeAIqjtbifhctvG5ccG866cLa-mat2ySu5-HoWKblgGFQ","portalTitle":"ReyPark","portalAddress":"E25, Tres Postes, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731705209343"}}],["a16e5791c269486cb9efaa9a43f1f37c.5",1748223609479,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2f82a0f5323f39a882523514c20ee720.16","portalLocation":"00104dd9,fb44e1df","portalImageUrl":"https://lh3.googleusercontent.com/roGOJUSex12qe07t5TKjE0AJtvwCrt-b6FwAygoQisumxStbAXT7L3ThICTsVLH119YtQV2dcL9P8RtbEYIFyh5XNN23B89YkblsCcoRB9o","portalTitle":"Mural El Perezoso","portalAddress":"2, Tabaquito 080602, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1745940129720"}}],["2a36f97636c24020ad18540e4f421912.5",1748223609542,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2f82a0f5323f39a882523514c20ee720.16","portalLocation":"00104dd9,fb44e1df","portalImageUrl":"https://lh3.googleusercontent.com/roGOJUSex12qe07t5TKjE0AJtvwCrt-b6FwAygoQisumxStbAXT7L3ThICTsVLH119YtQV2dcL9P8RtbEYIFyh5XNN23B89YkblsCcoRB9o","portalTitle":"Mural El Perezoso","portalAddress":"2, Tabaquito 080602, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1745940762296"}}],["d7c4615d98f5408b9210dc861b92ef65.5",1748223609602,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"57d9db6fc5993b149e39e72ba7456c2a.16","portalLocation":"00105a6b,fb4443a1","portalImageUrl":"https://lh3.googleusercontent.com/taV5OwCotuCkl0EjRJg98qqpSVe3yI-xZnCxETC-tkDdOrPTUfkD0nrdZWJiBeH-yvk0xrGXS2RpjiDYR-eInFMDdE7ZXmQKT8VxVsm6cBmo","portalTitle":"Mort Heroique - Rioverde","portalAddress":"3HCP+QQ3, Río Verde, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1745943036346"}}],["624e7f05ad544b159c43598667e90925.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["4e57873fb797457f87ba354f9bacacee.5",0,{"modResource":{"displayName":"SoftBank Ultra Link","stats":{"LINK_RANGE_MULTIPLIER":"5000","LINK_DEFENSE_BOOST":"1500","OUTGOING_LINKS_BONUS":"8","REMOVAL_STICKINESS":"150000"},"rarity":"VERY_RARE","resourceType":"ULTRA_LINK_AMP"}}],["d6c7c8cf7b7a4d99bf77896ef22d566a.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["74089ad0723a499ea49a730868b3b91f.5",1753120231429,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b1b3fa6479624b92bc8d4ddf11a26174.16","portalLocation":"fffc7e79,fb47ffda","portalImageUrl":"https://lh3.googleusercontent.com/Ske3C2zR1uBUnJuiHwAzlcFSZkt4K6lYT836cwN-D46UeFQ6wlnLRTlEd_XlSNsFqzGAPlnScQ_5Ie4ePxGRcwJCndgKNXzLrSAHrh_2-JybJw","portalTitle":"Pileta Del Porton","portalAddress":"Vía a Quinindé 7, Santo Domingo, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753120230828"}}],["05949af4fd304cee884f4d040db67701.5",1753295441652,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6bc0823d578336a792ed0a2002470d20.16","portalLocation":"ffdf4366,fb3d165c","portalImageUrl":"https://lh3.googleusercontent.com/sCxt9aqtXeJ6QE9G5U3Hgz_QKonhYUoGnT-B8FbPXq4EM8SWIsUcKKC4gbQoVkn1_J6tpf4gOc5xqPr3p8lcfAcXyrI_aVCJQwI0ztfG7wo","portalTitle":"Letrero Sky Building","portalAddress":"V438+RW Guayaquil, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753295441044"}}],["2360300965484d91a38cff21164d8383.5",1753300202566,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2afc137e86b1417abb962b9e8042355e.16","portalLocation":"ffe00232,fb3d396e","portalImageUrl":"https://lh3.googleusercontent.com/tXexrB-Cb9Rsa26shQPJxpwd6GIPSE6goi1OhpqXx0TMRiZ3maeiROOA9j0PLga2-6OvLW_3nP5iCsM97CEu-BaTE3WJrPbx-hhYmpFMEmE","portalTitle":"Castelago","portalAddress":"La Puntilla (Satelite), Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753300201700"}}],["44c93e9040264ce3b7cf18f86a3f3a77.5",1753304098407,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"99df2677dd223765b6b2c241ff91850a.16","portalLocation":"ffe0d64b,fb3d64eb","portalImageUrl":"https://lh3.googleusercontent.com/LfKnp7Zg688fWJ2pf0FckXdYeZ4BguoZOTOwVWKGQLtKweCpJ99JHc00Bsr75vHbmFMy2rWckF87MiDuyVV8fz-fK_YXZxNJeSxdyMgGrOYkQQ","portalTitle":"Totem bienvenida Parroquia Aurora","portalAddress":"X45P+6W, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753304097863"}}],["8938ae1f32ee40a599afd6c86b89debe.5",1753304772593,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5ed38f2db7b8350f8c8ee41413513ad1.16","portalLocation":"ffe0dbf5,fb3d6380","portalImageUrl":"https://lh3.googleusercontent.com/AQEcQQEhtwY_UDvKnjy_srj5EZkIIDxvQupCtrWYG1MGgs_dB3zgJD8LCnGwf7iLtoDd01Kxw99hhoDWW2UujgbXETEsuTJKWugLpbTjBOk","portalTitle":"Gruta a la Virgen María","portalAddress":"X45P+9WP, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753304771955"}}],["13750bb1023e4855bb2a5dc4e2d8da7f.5",1753305885275,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9b181a8d3540399d96f4444c3a97f4b9.16","portalLocation":"ffe0e513,fb3d630f","portalImageUrl":"https://lh3.googleusercontent.com/SbzkxztMQtq8H0NhvnvoYlGaGu_4mSgr445nq4_JBm1tOaEx7Ght3G010-2KlHEu0ldQEyw3E7qIwd8v3UytxsSPWU1hu9GWYqzoIUA5H-Y","portalTitle":"Cancha de tennis urbanizacion Castilla","portalAddress":"X46P+HQ Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753305884633"}}],["2b75aaedfd434adba2f4c37abbaaae0e.5",1753306192428,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"47945d8894fa360d98aef737b034e438.16","portalLocation":"ffe0dc59,fb3d6296","portalImageUrl":"https://lh3.googleusercontent.com/vw5ToWHbleU1MM60Q7eYXIHvd0zEXMBTIrejIlR9VJemoGh0qsnASZ0OWnbmFTm68r4pHa1SDqu_UOhwQzmgv8P-DzN5Kc8E3gYj0CGdVIs","portalTitle":"Plazoleta urbanizacion Castilla","portalAddress":"X45P+RF8, Bonaterra, Guayaquil, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753306191879"}}],["1c79876dd3074b48a14d4dba7a3a3cab.5",1753306435874,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d8e52f79f66b3b099a0fcfb8f64a612f.16","portalLocation":"ffe0d08e,fb3d4635","portalImageUrl":"https://lh3.googleusercontent.com/o-FDbjaaVzSQFPEtokOPnir0kkUNBLKD95IwlGGVUPTNHOSF6ZExCT3PjA2EyfJIN9A1p6hhh0pHcpbjzl6ErQei-ywodvvfaNheE2gbGrA","portalTitle":"Arco Cataluña","portalAddress":"E486, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753306435172"}}],["e33eacfe332346ffb58ef14d5a747217.5",1753306805052,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b59650855c5045439bd7eac62b2a89d9.16","portalLocation":"ffe086f8,fb3d3f66","portalImageUrl":"https://lh3.googleusercontent.com/ldvuc2-w9AsguQU9EOIIo_we0aE8wWtaPYgBl8IV2ugOQs04bW1K1Bj5E5FbmtZyntJJTexJwg5ZuPjWn8H8O7eer5xVOxivM9f12MJOc7z0","portalTitle":"Amagua","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753306804387"}}],["9f18d47ca8dd4bb0bf15760c2c56e861.5",1753307103349,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"87f7788697dd382ca629af2ba870721f.16","portalLocation":"ffe05925,fb3d3815","portalImageUrl":"https://lh3.googleusercontent.com/9lKozUtaubRZO6Brgnr8okapsabLngZSTPYgkcGIXsGDiOJD-2_roi7j28cRNejIH3G6UpNkHmcdmpo3SrmD2MlNmCCuWYz9EZoN97j6bFQY","portalTitle":"Vista al Parque","portalAddress":"W4GG+PH7, Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753307102343"}}],["71a00ab35c84461fb18b4545ff7fa008.5",1753376494567,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"eafe9617b39a4662957f185b496a643f.16","portalLocation":"ffdfcba9,fb3d40c7","portalImageUrl":"https://lh3.googleusercontent.com/JjN4Mcxf68h4vzzjQILwR-hvUaEsW6tdfL8yEHA-Bs9rhJHyqasWCK3p7gOukTYrktxW7inYPe0hQdr4xMcew-4Qkln2Prw4Ti7zClJ2dFAjAg","portalTitle":"Pileta de Colores","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753376493929"}}],["f142862ae9ce4e93a1d7aa41aa52c62d.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["b1622d71e9364e7e892d67c0b0a9a1f3.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["0b2922c56a3945009d7e45d4b6e9dab3.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["ec3f517d1e7f422a933328503c65c5be.5",0,{"modResource":{"displayName":"SoftBank Ultra Link","stats":{"LINK_RANGE_MULTIPLIER":"5000","LINK_DEFENSE_BOOST":"1500","OUTGOING_LINKS_BONUS":"8","REMOVAL_STICKINESS":"150000"},"rarity":"VERY_RARE","resourceType":"ULTRA_LINK_AMP"}}],["cdc97a3c934940bba02a760ff8f5bcc7.5",1753736722247,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"bc264e0b51c64656b8dd5f375a309841.16","portalLocation":"ffde2709,fb3d285b","portalImageUrl":"https://lh3.googleusercontent.com/e_XGgEbPjgItUd8sINUDyoWngWKnfL6RZ3s7wqwkUb_kQBWI3fay3y18V_BCGzVNW0MLnNMemFKhxMaxyXe-96z4i68qZckA3WeJN8DknT1vqg","portalTitle":"Mirador Final Puente Santay","portalAddress":"Paseo Ecoturístico Isla Santay, Isla Santay, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753736721549"}}],["9e553858e64445b588b5196a2a9d35bf.5",1753736764434,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"bc264e0b51c64656b8dd5f375a309841.16","portalLocation":"ffde2709,fb3d285b","portalImageUrl":"https://lh3.googleusercontent.com/e_XGgEbPjgItUd8sINUDyoWngWKnfL6RZ3s7wqwkUb_kQBWI3fay3y18V_BCGzVNW0MLnNMemFKhxMaxyXe-96z4i68qZckA3WeJN8DknT1vqg","portalTitle":"Mirador Final Puente Santay","portalAddress":"Paseo Ecoturístico Isla Santay, Isla Santay, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753736763857"}}],["21dcd79371d84da0a98cc46ae202646e.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["d7ff235816fa4feaa2a4d91ad946ac37.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["6a25d403625e4446acf1a2a3b77c32e7.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["5b3767f7b1a34cceaa628065966a06fe.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9a4cde1452a8462a8a5e8e8a33c80dfe.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["151c5c815eaa4390aa7fc58e05aeefd0.5",1753986721375,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f801bac6f79b3a40850ef3a616a75719.16","portalLocation":"ffe09d7c,fb3d370d","portalImageUrl":"https://lh3.googleusercontent.com/_IiQTsVaNrIjsnHehrBy9NFbq0ayxO4NCEeYrVYCHEPTza9y2GPaP1QLQhH2EcGNyn6Q4riZ15KRCnoTEYigu-OnhiZjRR2vc5wTAy3j__D2","portalTitle":"Letrero Matices","portalAddress":"Avenida Leon Febres Cordero Ribadeneyra, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753986720498"}}],["df131396461f404a97389ecb66038dcb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["9fdc2402220e444b8209c3d53bbc5b85.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["82ee4321b9fd479ba0f452bb10e622a9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0fae44ec6a4344ed8f11f93a150a5c17.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f848d695d81840f98762acf0119a4bb2.5",1754141418006,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b436c5df289c3877a3f6f7891ea23483.16","portalLocation":"ffdf4b83,fb3d2100","portalImageUrl":"https://lh3.googleusercontent.com/VZCSzpAdVtqqEXCV7wVjEOngJ01mNPUahAfIF9g-gKBFXC3VUYCIMgFm65KHCnQYiT6hBiKL3pjyB9m_3rBimy594c1VDoZQTbMcCFSl_zdV","portalTitle":"Mural de jovenes","portalAddress":"V44C+M26, Guayaquil 090513, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754141417267"}}],["0f76f50a7ab24834aa0590de87834358.5",1754141986413,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"cffb221a6b994827b4e5c20964cb1e73.16","portalLocation":"ffdf4969,fb3d299a","portalImageUrl":"https://lh3.googleusercontent.com/nNxxxWDpbUxoK4KeZB9TsZtWM7hQujwNGU0s9BdA6eM1n1tIg__-0Y3lZRgrpcV_MkOm4Qz5wek22YgNOgSt_aSb8Mgl9tKZoQmbieOIiKE60Q","portalTitle":"Terminal de Carga","portalAddress":"V44C+8PX, Terminal Encomiendas, Guayaquil 090513, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754141985673"}}],["a538477faf004dc3827e6dcb0b4498ba.5",0,{"modResource":{"displayName":"SoftBank Ultra Link","stats":{"LINK_RANGE_MULTIPLIER":"5000","LINK_DEFENSE_BOOST":"1500","OUTGOING_LINKS_BONUS":"8","REMOVAL_STICKINESS":"150000"},"rarity":"VERY_RARE","resourceType":"ULTRA_LINK_AMP"}}],["1eb1a69716b8409bb7e5f23a204bee51.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["e79d8597babb499491a8232b981d18bc.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["b90e821176b9450ba64708ba21a4f650.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["604c9e1367fe40a583892db13dfd4d1e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8e62c77115e241ac9e5bfb8b67ac6ec6.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["5e1036ab73d048dd982f1e5a23e25b4b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["acece7c45daf4ed9ad5bddaa821c6204.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0e61a8b513054c94ab9a2fea2a103961.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f42cdc023fdb4aa9a66fd6fc46fb2b94.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["64893d643a424835803c182903c3e7ee.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["93160842eed041e7b00c0cf798f56787.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["268435c2b99440b78205c3bf8161463a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["d4ee162658054fbd836361565da44332.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cf2101ef27ae441585ee2af142f5a22a.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["a06bdd2cb4264f8e96910fbd0459d041.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cdedb44290fb4110bb2a2903154688a6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["d702cc7a02b846bb925c9729878a1c46.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cb8f17c16e9e4dd4b02185d51a46115e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1aa3dff3042c4507a28065ccf9b49b76.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["bc733b2687344335afc75c498dba1019.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1c66dc767a3a48c494b2d815241e4cf8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8944b39f9a204ca9904fd7dcd268458a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d9cfbdc029ad4d0e894067cbb48e3bd2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["871cc918b4ff4bde84b8cf38b82ef9f6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5c27f5b2f6454de8b038e3f7cc1a4713.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2cc19ef5ecea44a4bf51b78c5bd9a62e.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["ade72310014b426ab30167a8323519c2.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["48da50f60bc342d1a012ba2f1095f4d6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a27a088f3966488a80d6bb056347fe96.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0ac507001a054dc5a0ad6caa4a04911a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8eae13789c3142bf9fe05a786a3488b8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2eb273155c954450ab1ea9882e304365.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["200e672853ac40f1bec58cc715d6520e.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["7810d82657cf4391bec636a6c62a4f7d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["09d8dceec9014f548a6f33fb87559e74.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["885177e1644845e2bd34833da00aa9a9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9e8984b00cba43169fa7152fe8c8c402.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["236781ca28fe411b9dcbda7e45fdd122.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["05bd740eab35467cb781f048e5a408bb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8acb07b77b364e75a8ea565046c6b94c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c7a2cb78e3d343fa9a57354bdb319691.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["ab86355c50d245ada68779453de77a07.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["273c0e1233a74620899cced8e7e230da.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e02f7c00cc504b4293bae3b738782795.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a730ef78c7a0446e941ce4418cf81698.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["05a5a6ccf99a4e4691925858c74a7d2d.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["f5aef49d60d14f579201ddc1000cd379.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a131d1fb3f3641ae9c88a48331208155.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["577929f040124e07b487c06285a79302.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5791b03d2f4247dea67f75c3c45234dc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fa36e36f64104bf9a706cd2b86a4e5da.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9b904863889944d1a104d2a6ad62ca43.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["91bec421f1104971af7ff19cce548a13.5",1756582752132,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5026c8d814384d53af83fae9685b5c03.16","portalLocation":"000dc600,fb3ffcaa","portalImageUrl":"https://lh3.googleusercontent.com/EvfGzBmi0vU-odkSOk0kAVwGlC6jLT0VYAlZubGcrvNsn3TnUQPNwclwFJfGFqNamnXg37DcYKgAFRc11qeE9PtLbIUqzdTxjJLcQRZNzkUI","portalTitle":"Cancha de futbol","portalAddress":"3, Tierra Verde 080118, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1756582752124"}}],["ae99573a149447bfb64f4196db417244.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["967a9ccaa4f04a1a8e5068e3f7afd34a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3b2325ef2dcc45c284ed71591231c3b1.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["acf41744def24083b9909ee675d61407.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c6aeb0bbb0574075a8d3e10830848fa0.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["1571cb10dce448a7a9f41b0fcc81ee36.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4c5ab90dc3b94893909404fe29400f82.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["116332d736914eb083d6fe592b6c18f0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["aa366fedba924e9899be5ee02fdcd0d2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["26efa9c4855e47ad99c9e789a8368a93.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1a4b6fb5895b473abfa513859c96f9ec.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5e96bca7d7a24e39b7b77012949e9b8b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["847df7b6ca994e50958343906f629d72.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["866c3f142f4e465db50f7e5cd5fc3af1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5254dd11bdca4fd69a609623efa15919.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a116bccff8314eebb435dee0db93270c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["9d57cfc8db714de29be565935cc2b826.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["55576759772048da9b69958c6976f110.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["02a89954d2974dcfa2ed521c0a8c399f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["6c60ef31ccbf4bd48a204dd107ad163a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["81257b6fe5ef430a831397c294b599d1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9f4a81729be24cfc937933588e18239b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["24d5511d13814d3cb3d8dc6b117a8224.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["a2fd5424095b4bb4a505303cb16d2bf0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b3bec17b71e5438e868d93e93ff5ee3c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["08168e4f8e2947f0bb1de46d049a5241.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["750466fcc3c54e3dbd47141793449fb7.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["7bcc41ac0aee405dba3547cebee1c8cb.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["f27ad0fab8eb4c9388bd2efb447ef841.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8788b2e32a9d4f32ab9fac40bc429227.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1b108d01594e457298f70349287f0fd4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2bd25f71f2814ab5907561a9231ef444.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["b951e480a677440e8133429dd453141c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["122400681f5d4215b22389082a05568e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b89551b9cff64a4b8846eab1ac5c8eec.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2e4e0f2fb06c42528f619be057d80e90.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9fdb37e4883e48ec9e3ec32990263de3.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["94f4ce32921c4dfc8e5fad52ef04583b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["483d4f1e81d84c98b1ab65608e9e8f2e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a110f98d63f4407ab06f1c38ccee7c4a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8ed92e03bcf4456caa2dc72d6d5c9371.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["ca1fa7b3688046168fc0e79d9dc28e9b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["003cf732135b4c80ad6ed15423c3b5ef.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["12956947a59d49a19a264d17e65b3c3e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a7e8e350661643e8a2712adc6678a8be.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["da33b1d32af04c2d8a9ddb7a5f6b1eb9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["0eccbb6d71d24a1fa171f5e32738899e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["41ad8791cbb84f229b22781ebb97ed99.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["19a0d647c42349ffa74e1f86171a3bb7.5",1759444085567,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0db9ef4aba0e3f888f5e6688f5a8abf3.16","portalLocation":"ffe0db8e,fb3d6450","portalImageUrl":"https://lh3.googleusercontent.com/hur4V_yFn16kB-_DpRSm3tcTlpC064hVe1VyQNjSOeVWoMx4FE14oSs2EWch61jI9KGSYJrXxiIyFaf0SRK10ZylNZfE-OEm1U_UmBfHJWAw","portalTitle":"Cancha de basketball de la Urbanizacion Castilla","portalAddress":"X45P+9WP, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1759444085562"}}],["4844c45205a14bcaad0d86c7d81e73fa.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["75f7884422fa426199a8565cc63c5dbb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["99e6e5b0932a4e1db855c246e75a8f8f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["03669ad8e6e84164a77341c14c416916.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b538edc6d08c4e978224598fe9048599.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["36fcdee4c7a44f219586b00ebeca6823.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["020e88761e8f477daa5b4d0ee94f11be.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1fe13bfae56f4482a4e8c3d73882801e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1465d202e0c44922b048f118dcaeb1b8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a411935f822f498d927e928069e0bee2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["40ffdb5bdb6740bf84bc22331129eb48.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b093c281ab4f442f9be8718f341fe99c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["2ea88e8ebb824015b6c0f376551a45a2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["611979c30a4b406090c0c524a31e60cf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["50873259154241349109b1dda076db40.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["113e151450fe4069aae97bbe6def42bd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b8effb10a33441418a97fca150360732.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["95239f1db927454799dae83ec956f0eb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["dd11318f826c452589b484078c31ca67.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c325bf4c88374bf79bcd632295e054dc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c8e8a14db91b4dcabd109ba0c77f66b1.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["f670c7d470224385be42d9a46c487556.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["415891cfcf1340cea26cb27803022e3c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3f16172f4cb94fa8983870c0268cd1b2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e79563e254554734a6a4e2a2924fc754.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["627ef0853e2b4493a85d1b55ea095e57.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["cbd00e40f45a439d9df4d2764318a27c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["6fd0ff93a1c64e4f8738d3e213d439dc.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["a83b378d378c41cd88097bf6ba276ae4.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["59a1608299d9436fa6d9081898f1e5df.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["85a2f89e61e74bb2ab21220104936047.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["2151ba0dae8c4e9d9c046504bc5aeb81.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["ba8728d0726649ca9335bdcd160664fe.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["b9ac5ffb4de3492093f2dfc4677db799.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["765aafe40d3b46e29d24649da55b6fb3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["c32a31a0142147a8b2d8bffa588bbae3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["499e42d8ca5c403d889be322c2a654c8.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["864f698740a54a62abcbc3f5ae9a8c66.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["cac3b7df9b9b45ebb52d585dd14a51f5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["ed31df3b1bce41c8b28b03f0c223a5da.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["03b7d961b0114d3ca8759ed2fc214765.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f3715b57a94440da8eb2c559f4e83450.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["f54268bdfe814102a4fb24ded0f33a88.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["643f635ab93d4770bd81d38d9d1f54f4.5",0,{"modResource":{"displayName":"Link Amp","stats":{"LINK_RANGE_MULTIPLIER":"2000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"LINK_AMPLIFIER"}}],["a2feeabb856d4c1cb0ab65fb034b920e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["2e8f342c5417482fa22ec187b3a46ede.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["5b3a9cf94a20401cb243063b22581f02.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["fcd22de9fa844f2f8a9d454015aa1a22.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["be7e9deadf444ffbb5646c9ece80ebdd.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["cf6d19c31fc94b8b914c65268c1809fb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["bc5873908bc8468abd80c4875ba12a95.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["0638c41486f74e97b8c2ead20ee4fa22.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["11ed0819e64d47d29187663c4e301673.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["c4eff8682963411c881a0daaf9a6a382.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["40f83a1a0194447cb419ac56da6f9112.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["aba1343874a34b50a37a716538fe0c73.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["b6634e15d43a4421b7cd0e26e9cc6858.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["2a4e87a0d14e42009b4162b6f38a1de5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["68c71ed647e94a8b8fafb9cd4d290379.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3c751ea107584bbebab67bfcfae42e8d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["09fd845802304680a880577acb531188.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["d1af62963c524858a73d57d0a2ad556e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["6bd658ae428343e08d20eea8eef8d82d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["c0a3c658b7794385bb0d9e5070c0950f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["a061ca45fafe4d7a9b10226cd2835f81.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["da603e331c724a2599151069813efcc8.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["1650f8f771d542d09a816d8f2afac982.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f3a483a5cca8453988920271d50f090a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["76021e27910246c4817938cf4ffb2049.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["09d83032100a4f9caa28a392f83ca04f.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"4","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"MULTIHACK"}}],["ee23ef9519034dd39d81cc81ea20d3b5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["d1bea18e33b44cdc9ac142b440fd80d6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["0467796e05574cc9bbeb57ae3360a8a8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["16b81cff94344fc7b6fa0ae584372561.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["a74f41564cbe422ca3612e032fb11aa3.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["5784ee5c422c4b5aab217257644e7254.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["eb39579603594a61b550b5190003893b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["22a348296d6a4fac86d9037d322c6b44.5",0,{"resource":{"resourceType":"KEY_CAPSULE","resourceRarity":"VERY_RARE"},"container":{"currentCapacity":100,"currentCount":70,"stackableItems":[{"itemGuids":["849c371974494300a92a4b76ec4399d3.1b"],"exampleGameEntity":["bf97cc4be8114377ba5191379b3cc87c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"23f56f19300247a6832695b9c1725574.16","portalLocation":"000e3f70,fb407a2b","portalImageUrl":"https://lh3.googleusercontent.com/Un07s5SID-Li_YPHvOiiS_Mvg0QBHcq2ua6baix0mm6oXIb0kdVw2KbNSSSblQcb8YukGK9BSafyHKO_B2YGvZFKbZDEzVGfT7_oTwxGyUs","portalTitle":"Mural del Centro de Movilización de Esmeraldas","portalAddress":"25, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846070"}}]},{"itemGuids":["bf0e251b5ff44ad5aeaa798e9be39330.1b"],"exampleGameEntity":["d0849b521c9f4d5bb49ec255a3dc103f.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b1b3fa6479624b92bc8d4ddf11a26174.16","portalLocation":"fffc7e79,fb47ffda","portalImageUrl":"https://lh3.googleusercontent.com/Ske3C2zR1uBUnJuiHwAzlcFSZkt4K6lYT836cwN-D46UeFQ6wlnLRTlEd_XlSNsFqzGAPlnScQ_5Ie4ePxGRcwJCndgKNXzLrSAHrh_2-JybJw","portalTitle":"Pileta Del Porton","portalAddress":"Vía a Quinindé 7, Santo Domingo, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765704720"}}]},{"itemGuids":["40888b92e8e0434ea5769c7c96248540.1b"],"exampleGameEntity":["529d756dda9844779e7f24819355b17b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2223495e49bd44fa97578a9779de4529.16","portalLocation":"000f0124,fb40abf2","portalImageUrl":"https://lh3.googleusercontent.com/VN6q9QIbte68wSYBUCS7hYbwHLmtnsACfN6IQ5szR0nNctyEY2RfP2CtC-gef6brUvwVArNf2KRyHet46zOVdqx0TCDUDs134fwGr4I07QaWrw","portalTitle":"Centro De Atención Ciudadana","portalAddress":"Unnamed Road, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846094"}}]},{"itemGuids":["67d6edb4ed784d00b4a3ea37b7c2c59c.1b"],"exampleGameEntity":["6581674258f249098f4e2a5c055f501f.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"1c2a49eef430411c8b33fbbb66cf73ad.16","portalLocation":"000dbd73,fb3fc68e","portalImageUrl":"https://lh3.googleusercontent.com/cW2BbU1IAvLfXxHcFlXwkV65Ej9EJSaE2lY-vVBTopAnKgulFK5CSuaQ73IJQBmz7793CVfLNgDIhDrED71S2wIOlIgveqKK1K4Jvrmgf4iOaA","portalTitle":"Mural Toma Mi Mano","portalAddress":"BUEN PASTOR, VIA ATACAMES KM 7 1/2, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846088"}}]},{"itemGuids":["f623069026bd4b23be5410ca919f046e.1b"],"exampleGameEntity":["ff570650eea94e559d6989a7d08e36e6.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"4cac57c15ef6480d88979cf0db6278cc.16","portalLocation":"fffffabe,fb449f22","portalImageUrl":"https://lh3.googleusercontent.com/U9UXvxCE5R0Qy2uqWNI9waSNSmvA1EAmi9Z_p-X6z_v0v4QjQXW8LEapFUpULEDvXuoig1fPSw96FsY5-H76hKpd3gJa_SzLZ9rPdHc5DH0","portalTitle":"Estadio Jorge Chiriboga","portalAddress":"Paso Lateral La Concordia, La Concordia, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765704721"}}]},{"itemGuids":["4a86eda900df4660964cfbe71c2369e1.1b","b062df85fe614d59a0121aa166925b5d.1b"],"exampleGameEntity":["dfd61fdeb57c480c9ebd72332fb78988.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0a0fa6fad1683199a3aebf9ad00fe22b.16","portalLocation":"000dc020,fb3fc90f","portalImageUrl":"https://lh3.googleusercontent.com/U4Xi1vRY1sJVxjpN0ciuKFA7OwoDNmoD_LNOrp-7gkvOO7UmUnNSOrAltkVY-8kthEjN4wVZ53ans3zipBFCGrbewJq7PeQ2L0C-1fkbFDQ","portalTitle":"Mural Estandarte Ecuatoriano","portalAddress":"W72V+JG5, Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846069"}}]},{"itemGuids":["702f194dd4f84cbd83e0236100aca615.1b"],"exampleGameEntity":["6fb8a5ed541340e3945a1a9c6377db6a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"e0d25f6fabdc4c8085d12ecab2375f75.16","portalLocation":"000d21d2,fb3d506a","portalImageUrl":"https://lh3.googleusercontent.com/r5U1_jRA6pLhXR2fCDFcYzMb8jsawjMVBjra_pj2B3a3nkxnxdQ9OkVdf3SeESTTmdLeBmJe0nfb5b8ah49m5iSgdEOf1wYoFTkdrqts2S4VnQ","portalTitle":"Bienvenidos Al Peñon del Suicida","portalAddress":"Nueva Sua, Súa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1733930320139"}}]},{"itemGuids":["bdda1c5e5e2e48d2874a8f77ef6ae079.1b"],"exampleGameEntity":["36f0f284b163464bbda71411bb848cc1.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"8b0354631dce4a7199cc1540a530ae6b.16","portalLocation":"000a0398,fb424414","portalImageUrl":"https://lh3.googleusercontent.com/Fzzb25ML9EBtnOpwzln4wc0imm1KrudRZEzv5iz7HnvZCsSugIHnaD55S77Fv1fWpMBhXXrzep4yNhjpVI1a1cueHS4At982-bbLv_8BVioN","portalTitle":"GAD Parroquial De Viche","portalAddress":"1, 9 de Octubre 080409, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765704727"}}]},{"itemGuids":["758e3f0fc6c84f07996e12ae465d606d.1b"],"exampleGameEntity":["833cdd6d43034ed3af86f05c774ac953.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"4772a45546624336b729d27f8e4a28a7.16","portalLocation":"000e81d2,fb40a11d","portalImageUrl":"https://lh3.googleusercontent.com/MjrJSg2tG3xWD3oA-a8TptbslsjquB0dutlWUioZwaHN26-qicxUYpPG1fWD2Rx-8EvmRRhvNzVxSp8YzFPDwepODchTh4ffc42qnUgyNP4","portalTitle":"Mini parque Aire libre","portalAddress":"Ecuador 593, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846075"}}]},{"itemGuids":["d5955b25f77f401987cdefe966bbbe73.1b"],"exampleGameEntity":["e177b885044b46f8bef46fb6ce1b872b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5c6032262e2c4c26a89b1fae458c9f49.16","portalLocation":"000da70d,fb3fba2b","portalImageUrl":"https://lh3.googleusercontent.com/qNhw8JJdjmiSICyRfrxAZS0Kml672P6gWhhPSN07Nv9z6kwkdHFhvw2wHkqk-sVCIbjj_kxKhQbWrmkspAZNsm2tizSzYM-mZOZIJCCJK5oY","portalTitle":"Iglesia de La Virgen de Guadalupe","portalAddress":"17, La Tormenta 080119, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226353964"}}]},{"itemGuids":["bb52c536189a495da535c5b4cc0d378d.1b"],"exampleGameEntity":["12de792716054b808160077758d16b98.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"bdb711f56f8730589d387fd2bfb9c969.16","portalLocation":"000e38ce,fb40494e","portalImageUrl":"https://lh3.googleusercontent.com/bbPsfMWJjKNRpLQCRdpp1aZwNrV5VmMiKjPd61eDiMkbK1k-EuTZIcPgU4bNnehRCS_dUM0U9LETgmVBmjyycUKtaeXzxfpsKTT0E0fP5rfa","portalTitle":"Área De Descanso Codesa","portalAddress":"W8JG+RQ Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846092"}}]},{"itemGuids":["5c402512d652423ebcb6f4155017af4f.1b","c23b38a298974dbabcaed2120982eb86.1b","1e9c3c9a51074c2e96379ad36f31c18f.1b","9e1aa97dee914a51b5f171200956a0f2.1b","7ebdce65fcb9441c88b6d0cd9d12ebeb.1b","eac5d2488273482c8c4a95554557322f.1b","17172d3d5d80440f9dde1b49b84769ec.1b","bd2801556ff148afa698dc684061d08a.1b","43277bebc19c4a01bd9b365528dc8159.1b","a1cd1c3ac84d46969339d928a20a367b.1b","14e11ed9c0ef44e7baca65918478bf37.1b","1a1e0a396e7c44e68b20b5993d5c5433.1b"],"exampleGameEntity":["5eca110abfe14c43ac3fca4fec5b75b7.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9fee669b6b794a1bba04d0fa78969608.16","portalLocation":"000d3325,fb3d95b0","portalImageUrl":"https://lh3.googleusercontent.com/g7EsIQIOK6g8e1Fa1ZrHtUYXqdn3T5IPgr9vn4zSBrVVV8vRbyjL3UgsPplZXVVgSaAMyr3IL1BvkTAHJHfy6cPFTJ_Wr_vefGWoRURLFdOQxQ","portalTitle":"cancha de fútbol via a la union","portalAddress":"3, Capitan Jimen 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1723669516172"}}]},{"itemGuids":["053849551ed447b9a18a27d4a0d19c13.1b","2e64fd0b83bd4f7e9dada3cef3731a71.1b"],"exampleGameEntity":["9b9c978416404e57bb2db99670d92f53.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"c113e22b2cb847ec8576e18c74126ae2.16","portalLocation":"000eff2f,fb409537","portalImageUrl":"https://lh3.googleusercontent.com/KWHWAYV0Gz3gwgK4-OMdal0OdQvFP8U0ZjvdHb0XjsmPVgFL4J4F6qqCi7lLy0LvtxKUAzrwLErT32DWnLa4ynOao8rb66gSj0gclmoojn9EFg","portalTitle":"Monumento al negro","portalAddress":"30, Venecia 080108, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846063"}}]},{"itemGuids":["93a04270b89544aea65569ec64ce03e8.1b"],"exampleGameEntity":["c82ea661a5484fcd9128906f5dc7c579.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"e9273712c5bc3b6692190678c039364f.16","portalLocation":"000efaf4,fb40b312","portalImageUrl":"https://lh3.googleusercontent.com/7ka0uwq6lp-rx4ZQmnAWEVNpqHSbez84_tqLi-Av7ktbAn-k14BdQ_YJQRywXS7hfuOb-A1P3NYmVtZgyJexNstfwVEHj7jtGkVqjMZV3-ecNg","portalTitle":"Mercado Minorista del Puerto Artesanal","portalAddress":"X9J3+QRC, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846093"}}]},{"itemGuids":["bb3654fd622b4a37984712942cb750d7.1b","10ea455d3a8d48eaabb82c83f87a33f3.1b","ffd48145f71d465897e8612643c79641.1b","0f6e2d325f2e4b3eac84c4ec4bc58954.1b","586c8d31389b4f66976d441c945db771.1b","4aed89ea5a634c52a398f51e83372c39.1b","5aaeb0439f924e40a33cf7ab329ab9ba.1b","f5ab6fb6286240b49887bf2493719b37.1b","29b60abcbba744789afcc6b5ed79f12a.1b","458102111caa42db8d28d59eb93f0bac.1b","7cc965e2620840bfb03707cc52d5949b.1b","549522a4a0d14b4c934a8cbdaa0291cf.1b","643fdb147012467886cfd367f62ba3d5.1b"],"exampleGameEntity":["b919a3ad40b242c19ea7f45c2697b2a8.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"da0572f846424746b9a812ea98566b09.16","portalLocation":"000d4d7e,fb3d8c01","portalImageUrl":"https://lh3.googleusercontent.com/2PiU4jyl9pdVJK23vo6Kp58YawXIVZH61kJpZYlnmb2FLGFsggw4K5Cr-K2gpj2paqK9Df_p95cSQ1Aho6-xZvImm5umk69NiCIzm0BiVvY","portalTitle":"Loco Max","portalAddress":"Puente Peatonal, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1760630687809"}}]},{"itemGuids":["d9ecc1d4fb2b4448a832ac960ed520f8.1b"],"exampleGameEntity":["85e4300a08f44ed4828f00ba8b3036b0.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"19e965b825864c39bb931783be62c30c.16","portalLocation":"000e3270,fb403a4b","portalImageUrl":"https://lh3.googleusercontent.com/awfBxruRrN7WEyCIVuTzs3W4CizE6rdilS80R-IPaWx9QPcSwMFWZFa_uSar2klIrOUIwTCc7d_aHAAGWnkglrip3w0xzhyVRudO53WDEoH1lg","portalTitle":"Mural al Electricista","portalAddress":"11, La Florida 080113, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846096"}}]},{"itemGuids":["13707be7d2f84ae1a5c9ed2d4ce41e47.1b"],"exampleGameEntity":["98f0a841b7ae46d29ce360036f438737.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"c071fa446c5931648180646254223a3f.16","portalLocation":"000d6741,fb3db639","portalImageUrl":"https://lh3.googleusercontent.com/ubp7eEbs5ivl2L7ZN8l_EAfTU3gh93BB9Cm1UwJu-zk4wbPVNn-TCq2nAfQFH2I-Jmqg7_dCMniFa4so-pMKyc7VApTYmXhUBvj936jx7Fru","portalTitle":"Bienvenidos a la Bocana","portalAddress":"V5H5+98 Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1760536263780"}}]},{"itemGuids":["5202fb1ceb6a4b50b0cb10ac435dc1d8.1b"],"exampleGameEntity":["cb80b31a781243e180230a0d4c570d7a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d4bccb69964f3654a9e8ca6c7ba08dee.16","portalLocation":"000da237,fb3e425a","portalImageUrl":"https://lh3.googleusercontent.com/chSAcj9U1Do9zZGIreE56B5Lh4ufUWIJygWGO3iQLaY5mp9spRV9BaCK5S6R7462R90FeILV-2j_cst1LnUunfVoYGTJqBcxuSCSqiOqeEQ","portalTitle":"Conjunto Riviera Arenys","portalAddress":"V5VV+8MG, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226353961"}}]},{"itemGuids":["77a404a34d26450bae1e9af7f3fe47a5.1b"],"exampleGameEntity":["26fc9276ff7b4017880c0aca608305fa.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"51b776fa7bb24595a02753fe6da7e820.16","portalLocation":"000efb97,fb40af65","portalImageUrl":"https://lh3.googleusercontent.com/IltroVZGPxhU07uUb2yl5w5LfKrZW9A_mh0A8iJoNBLodzaEJaOzYDS6S2d41bCF3jF7xZQn3eoS5dLjB3aCZ7OfE0Q5TXBRNzFZn8ej0Gw","portalTitle":"Mural Protege Las Aves","portalAddress":"3, Vivar 080108, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846079"}}]},{"itemGuids":["f6b621cd69604d2f86b40b6b4ffc4d5c.1b","6741db28c6f043d3b5ddae5b05389405.1b","afb6f2b5de7445d2af10249df70ed871.1b","10ebfe3311324616b981f1d6c8e917be.1b"],"exampleGameEntity":["f4990d725bd54754ac30b69dd57b6fbd.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"e461d18a78dc4235b8da744dbd6035b8.16","portalLocation":"000e147a,fb405772","portalImageUrl":"https://lh3.googleusercontent.com/vi_ntNmDvZscbw4ELsHWVgnSCFKFvS_Z4ekulItjpkS5GlzlpCflBJXfsmwz6x8dJf5K_z8_i5DThuySUVVA04xGLVW45hcnmPGacKU74QYt","portalTitle":"El León De Esmeraldas","portalAddress":"Ruta del Spondylus, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1711839195357"}}]},{"itemGuids":["74c9ad535ef14cf5a72e8e2a8a742398.1b","c8976aa51ac8497a90fd730afa93b235.1b"],"exampleGameEntity":["7e10234940604417b2d6d096b34d0467.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6a97bfa313e24bd68ad53a150c312710.16","portalLocation":"000d5d9d,fb3e008d","portalImageUrl":"https://lh3.googleusercontent.com/KL8cp9tD0Skaa24S88up_LbAuiSNpm7Y1OIZiQIXWnfbi1seTDmnDFoYr3g8pAuarv3Voa2OZSESs-Lry9jDCIsAsCBW_CzuGgYzNTxhBFcW","portalTitle":"Monumento Santa Rosa De Lima","portalAddress":"Ruta del Spondylus, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1759932773418"}}]},{"itemGuids":["feab213f4e5246c7b48c004227e41b30.1b"],"exampleGameEntity":["9e21e2c416f64702a67031a89542860b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"03bf7fb21f144aae991df200e7e01bcc.16","portalLocation":"0004eba4,fb435928","portalImageUrl":"https://lh3.googleusercontent.com/cs-uHYq0h3fY0DLcAMZJPRkDqk8_fphjjYub7QT8nO3GM8EL5xF24Q0aDwdVX0n55ZPMc7VjJr4yX7n0wlTWBknyLlBQMwvrffDalAjH5nf0","portalTitle":"Jesus del Gran Poder","portalAddress":"E20, Quinindé, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765704724"}}]},{"itemGuids":["d2c11ed314ee429da8f39a63c71234eb.1b"],"exampleGameEntity":["b5d448e5dd2a4cbeab1742ae959761c4.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"71b90208c028408bb1b0413988dccb92.16","portalLocation":"000e3308,fb403d53","portalImageUrl":"https://lh3.googleusercontent.com/E4HnzKIpgS2bKD4bK1-iP6q5bX9QMzvIFttbw86g_PFsSaeRaz4dvEZIvBI-jZa-a4lLHOveYURFB9-4NBWLmEa7m7L6UYGEqzJtuBj_Mc0adw","portalTitle":"Mural Cubran La Tierra","portalAddress":"Calle Primero de Mayo 32, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846079"}}]},{"itemGuids":["c39ca6b181b24ff297c50328b16d6ed4.1b"],"exampleGameEntity":["b84f564ac85645f38fae8fc786751ea5.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9c6478ebc5a347eaa7dbc80c6439efb2.16","portalLocation":"000efda1,fb40b757","portalImageUrl":"https://lh3.googleusercontent.com/H70hxnRUZH1Tke-WkreN3WiHjwdLJm6Au2VA0OOQmkPMm9l3xy6giuE4vbjXq0eeqecY4Bwf8_yyk9IGomE7nNQr-KW8WqlfqBrgYgJg4yU","portalTitle":"Entrada Peatonal al Puerto Pesquero Artesanal Esmeraldas","portalAddress":"3, Vivar 080108, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846097"}}]},{"itemGuids":["ce8a11c4a71b4f018a60e4b5abaa015a.1b"],"exampleGameEntity":["10a188e8dfa84a24a5e9c23b9db0e482.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"a0a5851f5b9939f58c9c0eeb3d2c801b.16","portalLocation":"000efdaf,fb40acf0","portalImageUrl":"https://lh3.googleusercontent.com/1DU-uqwuj8OVqFk232k5MHf7YM7C5t65WSKlgnIxmFLFD5Kfr1eHj_FHRFwNv498eUWbKJLG422dOcWWZA0m5GZGszioqu3HthAVEFauM48","portalTitle":"Mural El Alta Mar","portalAddress":"X9M3+367, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846071"}}]},{"itemGuids":["cca86bbbff914e56b30a4b2acc24497e.1b","3a712de72ebe493099b9cdbff1482e54.1b"],"exampleGameEntity":["1e245882b7a64fb7a551e00a8e61d1b1.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"fd780c8bd5d343e4ac696ba46bcc9372.16","portalLocation":"000e0469,fb402146","portalImageUrl":"https://lh3.googleusercontent.com/fU8V_yVOlunh98WYAMkrMVNAvSwhvoLL_aYIKGFo71bwHJihzAShVFRg-XiZKgLWT5CcO9QFOHlHQkyRpWiPoJVKGT87Dae_-oxF89S-Efs4","portalTitle":"Iglesia de los Mormones de la Tolita","portalAddress":"Calle Principal La Tolita 1, Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846074"}}]},{"itemGuids":["f931eaf53c874e688e8149caa2bed4c1.1b","bc68034a37a0422f9115d9926e2d6340.1b","a5f737000a44422cbffa1f4450c15be4.1b","6190ee3ce9c3496f8d4c08c3c959dd8b.1b"],"exampleGameEntity":["28cc4e30d2ad491ca8e2e102819ef7f8.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"21dc8026f4304c86aef6134558b7ac33.16","portalLocation":"000ee64b,fb409627","portalImageUrl":"https://lh3.googleusercontent.com/2a--7H4YdAuxYgWROXVzAvXDnosjwRxdMiyDtkYjgElM1HKhiLA3VB83B2C9k2WxETB6hi7QIzePPmyt9lCK0ZuxaFg8kEtirshpQoxKGQjD","portalTitle":"Multiplaza","portalAddress":"Pedro Vicente Maldonado, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846085"}}]},{"itemGuids":["9fcecc1d1bc54b9886926489def4924a.1b","093d208487d44aadb62ff49abef3c2b1.1b","eac93bf8452d421cbcaff01fe4b25ce7.1b","39fbf505b73b412190ffe4bfe422c1b4.1b"],"exampleGameEntity":["f3d34f5aa8d54d0bb0099ed5834ea35b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"261fa0788fc64a84802bc84fd42031ba.16","portalLocation":"000e3ca1,fb404fc3","portalImageUrl":"https://lh3.googleusercontent.com/eRUkvGs9cYx-gvVBX4IVu_oovlHaof7TihkCTlCda0pwEwPgCBe9mQ84ELqeNw6nmFUYGqweJqu3CJyF5TMj1h3Y_WIcza_zcslcQJjDgN6W","portalTitle":"Terminal Terrestre Esmeraldas","portalAddress":"Calle Carlos Concha, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846062"}}]},{"itemGuids":["46340f35b6aa4785b00ee5265b81c09d.1b"],"exampleGameEntity":["a9a341743f5e4da88b82334b5631e1d5.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"c8974eeef9e437a8ab5c18e163f6afef.16","portalLocation":"000f007d,fb40ae11","portalImageUrl":"https://lh3.googleusercontent.com/cAzaewPQ15d3QyvuCCV9JZ0d8a9bQ7vnBqCmWyT5MHIpsdeb78WB9FGvSdJWOM0r95637i43A3omC8GEJydqKTGxDBHoyn2Vc2GowC4WDio","portalTitle":"Placa Informátiva Del CAC","portalAddress":"Unnamed Road, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846091"}}]},{"itemGuids":["83f0e1f0ab1647a496ae3f573900de9f.1b","c80b5276bddb4bdeb7a1eb5c0d2e96f9.1b"],"exampleGameEntity":["0fc0a5d739984008b0f8e24a1b7964c1.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"bb60682c98113e7ebf900236637cede0.16","portalLocation":"000ebb9f,fb409aa9","portalImageUrl":"https://lh3.googleusercontent.com/fk7V4jO_W2xvVwrnINhLc2FMrGoBNJlgm3yO9wsz_9Aigz_3727cuGZEMV0kGgNqr5XFBBmB4pwbG8rcsUtsgvfDt27oE1rsFQIZOWWzNDAS7w","portalTitle":"Cancha De Futbol Sintetico La Polvorita","portalAddress":"Piedrahita 2-16, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846086"}}]},{"itemGuids":["eb8bbedc701c4cea8a834d25737e3c6c.1b"],"exampleGameEntity":["7f13698c482441a38062b31993c7427c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"1b9df10aee0f3ec1bf5ccfbc41bc42c6.16","portalLocation":"000e23d8,fb400273","portalImageUrl":"https://lh3.googleusercontent.com/VlcKrmGaCO4eqM2QDycuhdcTwdAf7w8UvLv_9kfGNiCqNumglA54HpLq1xyRpexH-xMc1ruSTECWPHiX7psVifB-rMK9LQ8wxYcGfRv4odNI","portalTitle":"Monumento Al Compañerismo","portalAddress":"W8G5+P97, Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846081"}}]},{"itemGuids":["e88d9f5bc5df4a3fae68a4a166813628.1b"],"exampleGameEntity":["a77fbfbf1275402eb66df7ed76785511.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"1fc797284a154103b9ea1bfee81cf8d0.16","portalLocation":"000d3c8d,fb3d7537","portalImageUrl":"https://lh3.googleusercontent.com/K91kY8DM_1IauIS4PW7KV-ijxbGIGAQ_T2BdyK8d07kMHppKMvEBPvQiCL5wnGirc0hVcbYV_Di6fQBMVDo09p--FVZ40bTMmGjcGO_0MfjM","portalTitle":"Gruta diviño niño","portalAddress":"16, La Granada 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1733930320181"}}]},{"itemGuids":["ecacc4eca59344f19031026fd86eca16.1b"],"exampleGameEntity":["65954b4e1e3e483da92bfafa5e48edb4.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d9ba89c69d6e30a4a39741d02c4bddb3.16","portalLocation":"000efefc,fb40ad06","portalImageUrl":"https://lh3.googleusercontent.com/5eL3WkKDxvpt8vhi0fbTWn9T5tdoflCEMYgzEHGQCPoxyogPDwUT7uFDTW2UVJXOOq5WyGBohtGOfcMPousvFgW_f98bqJKJ0PsgNNP7rFM","portalTitle":"Área De Descanso Del CAC","portalAddress":"Unnamed Road, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731765846085"}}]}]},"moniker":{"differentiator":"DB3DE09C"}}],["f592860b7a8c4b8fa1c91882573b7add.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["dcadf915ed2a42199bf23e92862e6a82.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5cb2b879df9c47b7a87ab736b859860f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["986dfb9f29ef410b8ff8d85a2289cd66.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d30bd09927704b61b597b92e72cd2666.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b8a11c1fd7644250920f17857e4bfe7f.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"B0B8E8DA"}}],["22ccb05bf8de4bb8a927b97542a64260.5",0,{"modResource":{"displayName":"Ito En Transmuter (-)","stats":{"REMOVAL_STICKINESS":"0","XM_SPIN":"-1"},"rarity":"VERY_RARE","resourceType":"TRANSMUTER_ATTACK"}}],["dfd9cfd06f6d415da928c7d424107ed0.5",1760727321460,{"resource":{"resourceType":"PLAYER_POWERUP","resourceRarity":"VERY_RARE"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1760727321459"},"playerPowerupResource":{"playerPowerupEnum":"APEX"}}],["f0b901e18a0f43c2b95e09097835f279.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2b661a9037b3459694a936bde70e8af7.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["6cf4b3b1c331412f91b48a054ee299c2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["74c790eb08ff46aeb68209949a788c51.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f3baaf4ded514358a235032dcbd3d4cd.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["e7c4d18697da4f60947ceb7b2df8fac3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4e0d37bbaaa24cf7852adea50e8d5992.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ec05efbe998c424e8a16f0252f4666e4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":6}}],["264bcd57916247fa841ed50cc49097fa.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"MEET","multiplierE6":1000000}}],["cde8c229f3d048bdb371de17c3af815f.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FW_ENL","multiplierE6":1000000}}],["e8fe2d88f409434b8388f9c4797cf69b.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FW_ENL","multiplierE6":1000000}}],["972cd9c009a2462685a15da45afadd76.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["b4559679d612439dbe0954da8c06380f.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["b40ffcd91e2c46f5aede50e303844bcf.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["0af8b50bb21c472bb12c5d2c6bb6aed5.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["9412ffdeeb574cdb98bc452d4007bd81.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["f8c836a04ed5418abc814408302b5d8a.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["9f8229f782e042f1abf917b40f9ff392.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["9598abb28da440d7b7565dd75bf081ca.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["0f950dfcf8e741bb8c738c266141bb80.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["790c2b9d74824be09220e82b9287ae62.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["c20f7e286ac7484d8f8d1222ac2f4a0d.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["553f88083c834f698fe3ed26b066c18d.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"TOASTY","multiplierE6":1000000}}],["fdf46026628442b2b19881831608a864.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["6e91fe1542dd4b8f8814841914b6d57f.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["a5c1d65968234e269fed0745263bdc24.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["82360483ae194e23980859eef7158547.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["22e25a6e632f4da389a44167355778fb.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["8d0ef5ca27a141c5867f3561fad169f7.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["8f3c0a8aa55b4b79a9b0c1729d72190b.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["8b4f60ba80c04c14b56ff88c9763753d.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"362C0051"}}],["4aa388f31c224abcb4e44810f6905a25.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["1e6f0c9ca30745b19f6d5bc33ab79431.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["b441b296f4b14dc1b29f523d672311a5.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["8438c0d5900c4d358ea89148493cf824.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["63e04bcab16a4fefb5df3becbf2916d1.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["775e2965049a41eea35545788f774245.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["a3ef0fc2cc12409398e03612d7234df9.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FW_ENL","multiplierE6":1000000}}],["57bd24dbb74142ed926602a95e46e3e3.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["fc143119f4c6416da2df61f5ac4ddbe4.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"C9775E88"}}],["de4f94c9a4454e779426e83696e0eeae.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"7E6097C5"}}],["6305aa55449c4e0ab81b35570d29a5fb.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["18172521c7de45d39d27857f0ad6fcca.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["59a8e2cecddd48f69f6e944c34f90fba.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["ee91823f11a54704aca7420dd215bc61.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["ee0cad6dd48a4a1eb0bc786ec2871529.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["d3e976ca550c4abab11b4bac45972fa3.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"NIA","multiplierE6":1000000}}],["b1f2eaa8e23c4af0826620d8967dd891.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["7f1b668637a14308a6aff726a063e966.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["6293c25456d14891a79c92024e04de0c.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["c5570aa221004c2d8fb73fe6d770d735.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["caa4584f24154e5da47ba99e52831582.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["6bc75e4453fc4bcab8f383664f67ed87.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["9268c6553d124848bceab8f5114d9f96.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["582ae35195c54baca9d943538a4d00a8.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"73122AFC"}}],["6dbdd0fb0620415eb50b0ef122e9686b.5",1748223609853,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2f82a0f5323f39a882523514c20ee720.16","portalLocation":"00104dd9,fb44e1df","portalImageUrl":"https://lh3.googleusercontent.com/roGOJUSex12qe07t5TKjE0AJtvwCrt-b6FwAygoQisumxStbAXT7L3ThICTsVLH119YtQV2dcL9P8RtbEYIFyh5XNN23B89YkblsCcoRB9o","portalTitle":"Mural El Perezoso","portalAddress":"2, Tabaquito 080602, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1745940568906"}}],["be932aa2c46a4635a956bff74d960651.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["9bde0fda5c254846a26ee05aeca186a4.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["2b7d7d856728496f97c4b6c72f5d2aa7.5",1753299805272,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ed5ebe7ffb464b9d8e9aa1e4d04a4849.16","portalLocation":"ffdfd5a2,fb3d404e","portalImageUrl":"https://lh3.googleusercontent.com/T_ECDahVk5acZ1mfnw_UFy40MIwsHaGAy6gHCuhZS12XOwrQFGXYeK8GvFsBuJU9os1bLIU6RWxRgY-pXLYsLWAGNP7ew6wTciXS__unR8A","portalTitle":"Britannia I","portalAddress":"Unnamed Road, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753299804695"}}],["9f7f51ed1ee649d39fda9f60310eec37.5",1753299924502,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0631e8586deb47b185f1900fd0ba6541.16","portalLocation":"ffdfd833,fb3d3fd4","portalImageUrl":"https://lh3.googleusercontent.com/OF06nZHX45Ntd_Kf2pfkwepZlnZQJiJvUKlHK484mV2rUdYm7jTpBLtl7jyC_XuLbLR-obhYILR3WzHLHnypIEe_rI89l05XzBVL8HU4W3k9","portalTitle":"Britannia II","portalAddress":"E-40 Av. Samborondon Km 5.5, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753299923742"}}],["1ddc1c1d2bff48dd8e28676bfafa7707.5",1753303308124,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"93b761b200e93d728797a01d00301c70.16","portalLocation":"ffe0e160,fb3da25f","portalImageUrl":"https://lh3.googleusercontent.com/_C64U_KAyvu5Qlie1tTgwukEJme1ukUkwxxx1JRwldWFfmTs7cvpaALzb24r4Fz4u8CyELu3T64hs7BpoT6ePp1mbaX8nCN5yGB-z9kW6KEC","portalTitle":"Centro de Convenciones Arena Park Samborondon","portalAddress":"X563+77M, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753303307434"}}],["3822d8e8b40949559c1c509e36ee6578.5",1753307151782,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f472bd010b7348bca2e29b757cf1c0fc.16","portalLocation":"ffe0494e,fb3d3838","portalImageUrl":"https://lh3.googleusercontent.com/QBi3HXqgg03hjlui8BDkc6BsYh7dhmahnc8WMDQ7rlmpzD38HAqOdm4X3deqVMajyMtCBCmF08KhjgTlRQXJBQLfWS5lLv-fZNCx2OiDCk3j","portalTitle":"La Ribera de Batan","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753307151099"}}],["5a105d5bbee34db7bd9056251093b508.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["12b1d74ab80143c284bbdfe684629a57.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["2c972e68f06743cbbf06057da57411e5.5",1753737195700,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ed7e73e968724ec098d008f28c44f666.16","portalLocation":"ffde2880,fb3d1473","portalImageUrl":"https://lh3.googleusercontent.com/2J_62B-a0FZxVxDN73mwgi0c09BtHDi1WZtUQd9wA_ee6VY19VQxeFkY3mU7xzXkpleWVtTyU6SzLgu8a370AfPOBs1qop4ZWWSMpLrszNwUoA","portalTitle":"Puente elevadizo de la Isla Santay","portalAddress":"Puente Guayaquil - Santay, Puente Peatonal & Ciclovia \\"Santay\\", Guayaquil 090101, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753737194863"}}],["59c35bdac12c4579a6caa2bc20e79927.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e468a399314c467f9eb769aecb0e1084.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5d1b6d1745a2497c993c487152b68400.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["98aa158402804433aa89e2afad7cc114.5",1753966350366,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"e62197e7d5984efa898197586b54d847.16","portalLocation":"ffdf2e5c,fb3cedc6","portalImageUrl":"https://lh3.googleusercontent.com/wB7Kyp-bkTnwC3JWm-gPeZOcYVCxomwZ9eah-5_TlimkS8pFSCFXp-Xz-5aRamQ9VSklm3sgWORpkc4zFsHXRYIiiQE3zTmwrV2L29tKZIdt","portalTitle":"Mural Mundo Libre De Pensar Con Sabiduría","portalAddress":"Av. Guillermo Pareja Rolando, Guayaquil 090513, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753966349627"}}],["569ad073c4184ceaba633bce2257daae.5",1753966670586,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9306079149c24515845686d06c207277.16","portalLocation":"ffdf48c7,fb3d10f6","portalImageUrl":"https://lh3.googleusercontent.com/Xx7EIB5A4oT9857u8pPSeORCj2HG4zHl_w1aPJNCEc-XE_Qe47f--SaMVkP5tO3F2W2USbsPjoqy7KNKwt780S_FK32pqd2XIYWJvOtSoz0","portalTitle":"Centro De Negocios El Terminal","portalAddress":"Av de Las Américas 510, Guayaquil 090513, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753966669987"}}],["cfd2da5e03294b75ac25379e1cc20442.5",1753967112989,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9e76e484ac23490ca02f282812f8a4bd.16","portalLocation":"ffdff038,fb3d39fe","portalImageUrl":"https://lh3.googleusercontent.com/TVPoCFTR6erfi7FToWhmt6pUNvzHMracW0rvR9gaR2mxwYInIXrrwJIT8v_XBaGTWTeW5hXJ1FQJRXQVZeqHT-SZ9cZxaMQKWrIPcDmvPHJb","portalTitle":"La castellana","portalAddress":"via a samborondon km. 6.1 urb. la castellana, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753967112234"}}],["5ca0b13a06ca46ae92ef1cb6009e8f44.5",1753986645815,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5fdd6e0fb9184ad5b62f37ddb050aa1b.16","portalLocation":"ffe0a567,fb3d2c47","portalImageUrl":"https://lh3.googleusercontent.com/lkF3CcgGbIoNnahg-v_UrEm0A1Oz2BnI7VTWBT1rzkCnkuFtwN3OhhZmWdkJ7ApjsRX09_JMipVC9ypDJq61m6kkiZYXFYPjhPUEuKsSM_zHtg","portalTitle":"Avalon Plaza","portalAddress":"Av León Febres Cordero Ribadeneyra, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753986645219"}}],["d1a6bc98732e4080ac200e4abee95ac3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a049617a242f4ba7af498a0b37cc2415.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5415f9bfc2cb407486d337efa148e628.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5886953dc5c04a5597ce243a61f1a843.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d9c336b3694e49cfa40245f22cbf7a08.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["63298381a01244d2b0c7f0e28c4afbc4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["54838238f06b424f984ad853cd326abb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d988fc530ae9447ea469af3c917c10a6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1227617a8e8d43d1b34d6bc9d793aaa9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5cca1bb325bd4bed9d180a3c8adce07c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9691fed1f1c340cf999b24f5db6debcc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d8dd2de4df774c12afee6f65bdfdc1d1.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["8f4c91d49c4843108b07ac2633b16665.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ce7b93df5b2f4eaeacedc511e3c41d1a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7dfe0fff014e4f5eb728ad4f4951ebc9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["485c6dec3fd04d9782bb1034b8d3ee33.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["4302eed812b24689936cd1cda1fc7914.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5c0d9b5ae5f3421ba20cf289ff1725ab.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["c4d3db6454824fe5b2e6fd9b66707524.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1fe25deaa65e41778bf78a7cc68237ca.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f11baa66f69a4213ae61e5a896553cbc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d458dd4361464cd3b63eb483e390dfc2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fe8718b9206b41adad485ba4799dbb02.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["828c03c51f30446f888cb7e3c87e601f.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["04f5474cb91a426ab9adf5c623ae2bb4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f9a90737c8084872b7a360d375f8997a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["49eaab38dcaf47cca0a80b4bf1fc5ba8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["123f26b77ed14a758eb7ad09772fe790.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["33715b4de7f6468b8b5fd920e0720f05.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["02664da8cbb44d9b9ffb35a57396580b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["65ac62bbf92f4938a384c0ed9a7d56e3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8b09ada5706749cbbad6ff202c86d8f8.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["2538ccc71f1641639362da470f47f87b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c1aa8518ac594de9b0cff4395246a436.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["250141bb235d4b56a491c053dd4434b5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8d6aed747d0a4507ae75619cadb1958b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["745cf1c978864c53b082f944ff8a1f50.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["448299771cc449cfaab70ec62054404c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f2a106ac5ed541de909448892e35c640.5",1755456853792,{"resource":{"resourceType":"PLAYER_POWERUP","resourceRarity":"VERY_RARE"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1755456853791"},"playerPowerupResource":{"playerPowerupEnum":"APEX"}}],["2e3f69cb827d4758bc71c6899085cdb7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d4515cb659bd4ec2b8f57cf3e9dc6d32.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["1435f5bff2fe4389a3153dfac07bf9f2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5680be9dc9044ceea19585ef76ed535c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ba27bee9b7734fc891ec337ffc1d68cc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4817e674240544d2a79db29304887867.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5855dcefc8084e799170d5f3c6523f65.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cdaddab614b440c39f50ad6785a9ed93.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["d95f8e9a2ddf43d593a4eb27b2ba5022.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["d4b53c6e1aa14d31a8f21cb5d9dd54a9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["48537940791d414e8d9abac618d43ed8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c46ddf73c5814ab88a4d89f96dd0bad1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1b7ce5e6f708443f81f962ed4e855fc3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5976317313144684b0dff0dc21e71456.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4af00a7540af48fe8d50133cdbe35741.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["299a5164db3941d4a85c4e2e69f00e8c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b3cc767feae14a2fbb57a488799ad2ba.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ac430843662e4196abc9bf0e0dcd8c0e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dfe9fdb23b68407abf668ff4785053ad.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["84fa30bab6e342a08a43308c4c670718.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0b5d376892a449a096b0ea770c116c39.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e88ff9773ed64264b958aa0be1331a66.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5369075afb8b41a2a4fd54c41e9e4056.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ba4053f481f54f7ea20d5396eac3a3b7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2d823582092645b3a9665ff622a9713c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["abe22b7ac07d408e842f2e459db50c7a.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["7f42f05e82d24f279266cea88c3d40d6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d2a50f55b275466c84a5f775bef1b40f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["64316208adf14f669eed1f0277209715.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["61dd5369426c481ea780f17b409b4828.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9133890750bf4bdc84debdcf47eae943.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["bad280474e4746a98a3866fd19ca2b95.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["798aae1921ae4addb5e1d9900910a520.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["0e3d472e017c47e79cc9ec0d14089de9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0f25b11e9a0c4cc09b1e5e90360ba97c.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["7e629003a6fc49198ea79019f87ac019.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["731c97f7b9874f2d816baa4720ea7543.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e5d7f6357b33429e8e86cb69ed8782b3.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["900f48a630dd4bcca9c707279ff95958.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["e94a7bebc8f242eea98eb89562e415c9.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["479b1febaaf844d1ab40c3d0351c6acb.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["f17ec9a4a0a3429790cbf7cd3569433b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["43905c1ca87f4f94ab05bbd8400e5106.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d56a407383e942f8b7c82e13ca89315b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["47855bc8a91c48ff8bdebcc788d7f4c2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a98f8b7375c442e5a2f54bd96bcaa322.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["3c77a3ac51ba43128793760a96d6fc3a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["26aba2dfe9b847a8bb2f460bc77766b0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2e09d37410c342d3a82b071c282e4418.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["2e8235e0db414be2bccb2adcfcda63d3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3461a34d73544434b3527be51416022e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3c61c211c2aa4cf5a931b5f2a7d4171c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["665010c2078c4a5eaab8167dd3e8a463.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5333562546d34d12baf4b572157acbdb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["800c4d45ee6845da9ea84ef06313d874.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0a77148344084bb3841ab4ca473f2b8b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7e13b5fa91bc4d9a95466df382959627.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e9e4562ad8d549a7a11e35582a8223d6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b1bcaafff5f14b00b7dbd19440ff8ca5.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["274bf6ea52e94311b85a85cd7bc3d9b3.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["595c4d4880ba4cf6ba7bbfb5aa37b874.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5802253f5c804bf4a1f2a960776972d1.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["14aa919dd2c24b7d869000c8eeab5688.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["7645b454038d41a6b408969593cf125b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3ca889c8b29e44f0a325555e96366635.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["86f5d2e74c2d43b594df0c36746a03cc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b38083ac935a4b30a2f7937bf1a84b75.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0677592f153740929e05fd8ed8f115a1.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["76a1e977c85f4e958cf5aa6d4b5732de.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4d3201e8f3ba433abc1134042b2e27f8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["08a8d0d2650547cdb7cf14fd388b38fb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c435245f069e49dd9314debe095755c2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b2f06403428f4b81be29f1f7f79da177.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["631b58c13bba46c48fce26bdc1bea253.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d67052c4a39744a4934679498e18ac56.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8b97d1cc9882458387bd0fb23088e4a2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9435989166d8496b9ac6915b110c8e12.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["09470f5b462244c8986834b86d559586.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["56c686ecd05341239162115eb24ee29c.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["e67e88e5939743ed8876ab81dedb9233.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["52561ce189b942669c15af8cb2133d10.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["7819d46acd3444d5bff078716142d508.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e6ef0723858c4fc282edbc57caeb0406.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["af4e436ae86e48209bc8434f5abc2916.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ff38021c86e44ce99b522ed0ba4a8b9a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["35426191409f407faba8cbdfb63d90b8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b2190d39a3bf476ca80203328952a40f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["44cab4f9cbc2473d8aef3de4dcc7605e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2616eee3d8fb4701bf6364ca556ee1cd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0097ac4bda27473986f36e61462f76ef.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7fb3e74add6d4d01a59e5b48e4b9d1c7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6bfb9a4dedf44a9784faba3b13a587df.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["82bbbaec3c114198af2dc78a7bd332e7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6d17b9fabc4c41ffa10924cfdf32dcab.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7002154a354441a6b386fd11218246e1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["95dc27c570b54733aa434e45180b5bff.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a9b13f1d99734680a711315333ad316d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["abd67b34fb7047ce86cbe9e6f99a1fc2.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["58604e8d77624e6aa38a72d200d7f238.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["85f80eb18fb04552bc4957526d55ad3b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1a7b746e8eb24872b2403294daa47813.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["42b8e7dc1bcb45bc98bc705345292657.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["871a6b464eac4e54bb67786f675d9b94.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6c37aaf9e0114920bcce045f77612265.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["74e75f20d28944f9b2858e0a1f0aec23.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["edf76ba3185e4879a9f301e41657865b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ec38bb77bfd845e5b715191e7a279caa.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e00a49afbd024363bfc514a9fff5c7fb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["ed0945fbafde4a689e0cad7ca42b557b.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["05caac7898074732ba59fac03c9e3d4b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9576de4f3b5c4e54b51376a65e43d0bc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c7350b6e317e4ac998b9e97d6c39d25c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["078fe378d2ab483cbeee511b12f4e4ba.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["f49ad3cf1df14dc980e831260322a06a.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["c3e0de08e0b94b048b18925f48636c7d.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["7095d460e1644f01a258e8565a40085a.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["dd4cdaeaab2a4795833b40df7c4597a5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["342158195d814aeeafe2c2416bfbbbce.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f1d1efebadf64d3688196563cafb7191.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["1e984f3ed8774066b06dd5b1a57beeea.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["85be53c0222142b1a748abe1a3a7a91e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c06bd1dae29244f39c82ae98cb7b0c28.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["2452a7497aee44d892ba91a033df6e7e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["72200282faab4ee099beb8b9abc01587.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b08a0c114b2f43cab7222a029f02affe.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["e9145e44ee59478db4f615a1a283efd9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["14dd130d894e446d9ef3bbd404717876.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["9db8ff00d85849c9a5c17d860761d20f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6837cec24a3c4519a45be89a1fee614b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["f25421482ca54364a2ae988608e71de6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["08c7accb6b684c4ea6d473c4fc8614af.5",0,{"modResource":{"displayName":"Turret","stats":{"ATTACK_FREQUENCY":"1500","HIT_BONUS":"200000","REMOVAL_STICKINESS":"200000"},"rarity":"RARE","resourceType":"TURRET"}}],["b0fbd58fd5154d538c57b880287dae42.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["fed430041f524252a88565d904ed79e1.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["29b0b5a5f9094d86a85830e3abecf15d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["42ae4decf37c4ea29a99e52ee0bf0971.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["15568c18f33241c29bb616832c59e19f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["ac6c455eefde4a4a8eb59f0c545812de.5",0,{"resource":{"resourceType":"KEY_CAPSULE","resourceRarity":"VERY_RARE"},"container":{"currentCapacity":100,"currentCount":74,"stackableItems":[{"itemGuids":["4964882ae5504c359326e3da07ec75d9.1b","bad47f1484474b929411676739da022a.1b"],"exampleGameEntity":["aa7464eff96248e6b53f2ab4b8f6c355.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f35ee204d1cb3efa9eed8196fee7dfcb.16","portalLocation":"000d5d5b,fb3dad88","portalImageUrl":"https://lh3.googleusercontent.com/UYq3ANk1wtyRJetQ0h8ruNLqT0DFHndKKi0nKHOIyZJhcnXdVb6n0pWKM7y2DSCwxPajcR7rG9D6ob0KbhO5WX1KQilfCao8HAX_DMGo_jnZ9g","portalTitle":"Mural Marimbera Rio Mar","portalAddress":"V5G4+G79, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038986058"}}]},{"itemGuids":["a31ade3eefdb40e3a4016b7275537b30.1b","010602b903024709b0c6f2676d2f1277.1b","ba11815533864bb1b2880726290ef6a1.1b"],"exampleGameEntity":["1e5ff03dd9e64cb19195ace4f60243e1.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9554ba4fdedf4bacb9730bd51b50c425.16","portalLocation":"000d4716,fb3d99fd","portalImageUrl":"https://lh3.googleusercontent.com/FaEHzPNPpO86QeXHjLywoEB9-bvAoFItOpQojCl_TBfmdB76QbUIca5A85uZ_xlxXPmGko64db_ZTJmYC7FlWl79-mbYxOkixuLsbH9nvqs","portalTitle":"Iglesia Ministerial De Jesucristo Internacional Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1716041963162"}}]},{"itemGuids":["bfd308c16b2a4572926543a564a5cf52.1b","a1087eac1bcd420a92abcb73e6a38e62.1b","74647d78ddeb4d398b10814ea389eb85.1b","d78622e618c8445a99f9b57e33309b4d.1b"],"exampleGameEntity":["5353c6e55d2743fbbf2b28df967be40c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"593eacf87249464ca1275209729226ef.16","portalLocation":"000d4527,fb3d9e85","portalImageUrl":"https://lh3.googleusercontent.com/ZAij7b5Fi_NMJqsHFGNzvrqC-FW_0iQvcODqua2T8L8aAlVGe1jklxp8emS2kHUjynMbnmMjZyW_qen-pThPbz59P1mP1AjXEG_ne037eH7ajg","portalTitle":"Museo Arqueológico Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1716041963147"}}]},{"itemGuids":["7c4277f46c7241efa58ca0bae7a4a2d7.1b","89f4a5a487b449eda0c324c91c8ed7b9.1b","53285cb62618456980d498578d043791.1b"],"exampleGameEntity":["08c3e4e3c2f643b6b1be1478cd324eab.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5fc5593d615247979b8e117b01ca599f.16","portalLocation":"000d50ab,fb3d98b8","portalImageUrl":"https://lh3.googleusercontent.com/Cu9Fhklp3npcKA31lAU9qi-GaFhjVqBSCy2jUIdKEDttO8fn4RM_3lOvTEqec463gKp80LF1dviWW-g_wHY0cObZ_AZX36RZOn2DsrjQqHk","portalTitle":"Mural cigüeña","portalAddress":"Avenida Malecon Playa Atacames 21, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725630308090"}}]},{"itemGuids":["24e45a86c3054730931613e68ed9e5b0.1b"],"exampleGameEntity":["dff3dd5ddba5469783fdbada7659e5ac.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"1556d5c25d204a339f27cc5af4e42799.16","portalLocation":"000d4806,fb3d8d1a","portalImageUrl":"https://lh3.googleusercontent.com/O29DYODaf2ua_f-YlLVmrhbVbP4iv-dlxylhBx6idM_X_wgJXihZRF2NfniL8jU_5FUg7MlPnvbde0Sx8eZE8WVKPKiRqwd_Vi-iEUxFD-0I","portalTitle":"Mural Playa Hermosa","portalAddress":"Puente Peatonal, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730982931680"}}]},{"itemGuids":["b6f8411880804e32a1cde789462cca1a.1b","1c15c76fa9c94a219263abc0ebf622ed.1b","7932fd53d84e4a5fa5cbedb515981e2f.1b"],"exampleGameEntity":["a3d1d3ebecb24f3492538cf56f0b959c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"40779a80c30c454db3b0cba76179abe8.16","portalLocation":"000d40f9,fb3d9541","portalImageUrl":"https://lh3.googleusercontent.com/o3doX2XwSH2fNLkwdk1pFKQ8aWBT5AYuXf9lijX1tU5t5tyVcNdt14Lu-vkxRQFmC_KhmfCtV9p_1C7SAudZXV4Ksscoz5Tge1fsT1bJTpG3","portalTitle":"Coliseo Municipal Sebastián Valencia","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1719359584655"}}]},{"itemGuids":["0626176cc6234d9f948eaa0ff359f92c.1b"],"exampleGameEntity":["3129468d42ed4a2db87b642f5ed19710.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"3791397a23764dcd8f5eb8206e9005a9.16","portalLocation":"000d4455,fb3d98f6","portalImageUrl":"https://lh3.googleusercontent.com/oRU1sBlpUHl1aUPti9SwY1Sh5tVTJ5CTpOsKwrnVH7dmKwo3-cMDe5IZVWbleoJasIdpQ65adN_g2NQqTBpRwXRbrK6xz1kvCbzATJGXNy7p","portalTitle":"Placa Reconocimiento A Luis Eduardo Casierra","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1721948579950"}}]},{"itemGuids":["edb83ff9ff6546db9052f089fcc3efec.1b","4f428958cc144330b633ad0c9f61e53e.1b"],"exampleGameEntity":["47e80f70703c4ad7bb0c20a233b4a8e9.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5c6032262e2c4c26a89b1fae458c9f49.16","portalLocation":"000da70d,fb3fba2b","portalImageUrl":"https://lh3.googleusercontent.com/qNhw8JJdjmiSICyRfrxAZS0Kml672P6gWhhPSN07Nv9z6kwkdHFhvw2wHkqk-sVCIbjj_kxKhQbWrmkspAZNsm2tizSzYM-mZOZIJCCJK5oY","portalTitle":"Iglesia de La Virgen de Guadalupe","portalAddress":"17, La Tormenta 080119, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226405695"}}]},{"itemGuids":["79c3874060c34679bcda4996e091077c.1b"],"exampleGameEntity":["d87a768290ed46c58d4da33be900e86f.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0b8297f8d4b8445a9853c2b4fe2c26ec.16","portalLocation":"000d4afb,fb3d8913","portalImageUrl":"https://lh3.googleusercontent.com/lqMVPxeAAY3vJ8j4JL9y66rqFjcFklHK0qso4kEc7n6guCLe4w_CrMcH6OAFHWAq5IQiFMxNnggNPsMX_okRsSgzD6Pq1X-zlyH7mNiS8J2TfQ","portalTitle":"Mural Playa Hermosa","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730982931688"}}]},{"itemGuids":["63167a42b9ed44f388575ede27238508.1b"],"exampleGameEntity":["595fa01ce3b348af862501f7ba6b1a0b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"c113e22b2cb847ec8576e18c74126ae2.16","portalLocation":"000eff2f,fb409537","portalImageUrl":"https://lh3.googleusercontent.com/KWHWAYV0Gz3gwgK4-OMdal0OdQvFP8U0ZjvdHb0XjsmPVgFL4J4F6qqCi7lLy0LvtxKUAzrwLErT32DWnLa4ynOao8rb66gSj0gclmoojn9EFg","portalTitle":"Monumento al negro","portalAddress":"30, Venecia 080108, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226405696"}}]},{"itemGuids":["9a8fa620b4364c399fffd7308d766728.1b"],"exampleGameEntity":["403f6a83af974964b8fd9ac4d2711984.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"71e2c9be811440a0b2ca6c153c79d812.16","portalLocation":"000d44c8,fb3d7e36","portalImageUrl":"https://lh3.googleusercontent.com/IV9eOvjbdaqXQUKaOBUsnFOk-4PpOyuNrlafRkp2YYS9rt2ewkn9-qj3trGr5kN672GKCaAEdFjmAn-5jC0zVErWoZgg-fg9RDHeJ3W1SNH2","portalTitle":"Juegos infantiles del Sol","portalAddress":"Nueva Granada 5, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1721948579918"}}]},{"itemGuids":["d2714e22d81f48e0a48993d756cfcc4b.1b"],"exampleGameEntity":["84228ae4745640cda49179e8f9fd14e2.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"a0d92daff6f33f9ea04150f36a0452c0.16","portalLocation":"000d414a,fb3d9cb4","portalImageUrl":"https://lh3.googleusercontent.com/qXpRzPLuc5bFljrjKfSE8yMeIO-aNMQBVkYs24KT_82JZAIdOv_OEWvVQLF9uU78XP-3j0ZiwXUVpYGxoVW_YJyp24S-IgGlw-WOpCEc_754YA","portalTitle":"Mural Atacames","portalAddress":"V592+9PM, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038986073"}}]},{"itemGuids":["30e79b487b7e41aba0b1a3ff00ba0c77.1b","faa0712400324b5b9cd95efb217ad809.1b","d5323f49e92941b5a91b9f97f7599993.1b"],"exampleGameEntity":["2408515dd2e34456b2d3b2d76eea532e.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"19e965b825864c39bb931783be62c30c.16","portalLocation":"000e3270,fb403a4b","portalImageUrl":"https://lh3.googleusercontent.com/awfBxruRrN7WEyCIVuTzs3W4CizE6rdilS80R-IPaWx9QPcSwMFWZFa_uSar2klIrOUIwTCc7d_aHAAGWnkglrip3w0xzhyVRudO53WDEoH1lg","portalTitle":"Mural al Electricista","portalAddress":"11, La Florida 080113, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226405688"}}]},{"itemGuids":["365bb3405cdf498da131e8abee031fb6.1b"],"exampleGameEntity":["105f507949184bfe8ff747b2d94e075f.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"a361a45c5b3a30dc9d2063ee82c83749.16","portalLocation":"000d4fde,fb3db72d","portalImageUrl":"https://lh3.googleusercontent.com/6ZDgo6o_Am-bHgHBj5-O-Vl8vZPdnY0XpDN52azOjW4p9Tcn4R8bq9ofXbG818Vjyu18FF94WWV2gD1uxsHHHI2WVicCPqMxJhbdteFNwos","portalTitle":"Mural Atacames La Ciudad donde siempre brilla el sol","portalAddress":"V5C5+XCQ, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1721948580014"}}]},{"itemGuids":["8e2fbe30d2af4f768d677fadf96c3eeb.1b","56ac3dbb6bcc45e399a6a7a1d9ea8c45.1b"],"exampleGameEntity":["2febf8d012974e639b18f3d3827e3ee4.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"1b9df10aee0f3ec1bf5ccfbc41bc42c6.16","portalLocation":"000e23d8,fb400273","portalImageUrl":"https://lh3.googleusercontent.com/VlcKrmGaCO4eqM2QDycuhdcTwdAf7w8UvLv_9kfGNiCqNumglA54HpLq1xyRpexH-xMc1ruSTECWPHiX7psVifB-rMK9LQ8wxYcGfRv4odNI","portalTitle":"Monumento Al Compañerismo","portalAddress":"W8G5+P97, Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226405693"}}]},{"itemGuids":["eea3b446b64249d9a9a124850cadafc5.1b"],"exampleGameEntity":["3cf7809c9fe44ce6a7fab0bcde0aa170.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7be1528d041146f48f15a41975108ff1.16","portalLocation":"000d45da,fb3d9d46","portalImageUrl":"https://lh3.googleusercontent.com/gBXWCD_d52Y31fLi7rMicpI9_1ZbLlSlQd3oNP_BWtFsuceIY6ZsyVrDqvU28D36iA9mm3caYmyJAG4TsgZ2h1EtUXukiWISdImKDk73I8sOxg","portalTitle":"Iglesia De Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038986051"}}]},{"itemGuids":["668a320d64e845e5a64e1e8c95314036.1b","08123a902fbe4c14ad0c9a041ddbf7da.1b","2d55e61c30d34f3493428229fe3b4bb4.1b"],"exampleGameEntity":["44bae2bb65d94e41b4b8d499047e4563.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"af5bebfd4db94ef7ab1c8cf7d09e0907.16","portalLocation":"000d4438,fb3d932e","portalImageUrl":"https://lh3.googleusercontent.com/pwCl54jSK--BVcJ1kp8_IrXjf99I6GHvQ7qAmECKPA33ci9gvq7xcph4r9eC-1Du5zlXACwUv1Q1ZuJCFPcIu1P2fWSp5YWQutZiFWFXjevD","portalTitle":"Mural Frutero","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1716041963211"}}]},{"itemGuids":["e3502d5beff244788240f07062d9d7e4.1b"],"exampleGameEntity":["8700bfbd1de6451baffa5eb50ef87e90.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ac1bd581971337b0a7b12a32669fc406.16","portalLocation":"000df896,fb401c19","portalImageUrl":"https://lh3.googleusercontent.com/HDzmq9v9u2Ur8NhCgo0o09qR_vFDUmnqNgJ8x8D4SaDEl4-txYd9e-6uZ6fcScAQWx3KfYTyXAUKViP1X-zSbDH-qdTkNQrJ05uNzrvpK_gD","portalTitle":"Mural La Llegada Del Sacerdote Don bosco","portalAddress":"12, Las Acacias 080118, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226405690"}}]},{"itemGuids":["36b0046e17714c1c99bdfb9f733ecfd8.1b","c4ea05063d4842e89c5d0e1f5aa98149.1b"],"exampleGameEntity":["41ec7569ae034abd8cdd41f5b1dec34c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"76cc11f316ef3bc7aa8fb3d24cd2f5ff.16","portalLocation":"000dcf8c,fb3fe9ea","portalImageUrl":"https://lh3.googleusercontent.com/26kn3EdtLbZNeNwEniYvkdFYuOavT7NwYzY39SHRnD1M_IGpj8KI_mr9EqrmntDrJwrk_Xy5B7QFLQY_8irbNc0gO3tXnPWjZ6bs2UVeUDuFew","portalTitle":"Estatua De Jesus Del Gran Poder","portalAddress":"W842+5X3, Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226405691"}}]},{"itemGuids":["ee3c765231f84bddb93b12ab2f94a801.1b"],"exampleGameEntity":["42279ad3af06424ea07641e87f801f8d.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0a0fa6fad1683199a3aebf9ad00fe22b.16","portalLocation":"000dc020,fb3fc90f","portalImageUrl":"https://lh3.googleusercontent.com/U4Xi1vRY1sJVxjpN0ciuKFA7OwoDNmoD_LNOrp-7gkvOO7UmUnNSOrAltkVY-8kthEjN4wVZ53ans3zipBFCGrbewJq7PeQ2L0C-1fkbFDQ","portalTitle":"Mural Estandarte Ecuatoriano","portalAddress":"W72V+JG5, Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226405698"}}]},{"itemGuids":["adbd0c1932da4951ab389167574aef16.1b"],"exampleGameEntity":["04a83a583cae4839aee3a6c657ed3f17.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"3c795410dc903389a06165e60ee2a0ae.16","portalLocation":"000d4863,fb3da9d9","portalImageUrl":"https://lh3.googleusercontent.com/pyP02xoQjR0VSJ7sJOiuDtL4uJCC8zYXjpESSGTZvSXHzY1zryczXAzLmJYdjHISNEVYJeoLuFhtqr71MJvgee1ICe-fjj0hLbs7v_zUepBd","portalTitle":"Mural La Bella Esmeraldeña","portalAddress":"V5C4+776, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1716041963174"}}]},{"itemGuids":["0aeeb81a3ce34aa6b92319b8273279de.1b"],"exampleGameEntity":["463e11c0c88040d88e3bb82e22f8c545.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b6d5068714ef4da6a154a3cbcfd5b7e1.16","portalLocation":"000de389,fb400d9c","portalImageUrl":"https://lh3.googleusercontent.com/0DWPxERURh-6iBANxbQTef062gzVbhGkpuL4oexZkyonWGvgnK5ivigyPG0rSbKN-1VJYRHVVo0Fw79xKjpDcAD4baUc_bBS9iRzYX-7LRlP","portalTitle":"Mural el colibrí","portalAddress":"Ruta del Spondylus, Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226405692"}}]},{"itemGuids":["c7daee3aefbe42178880370873a063e4.1b","f1e78fc367694fc292e846c9008a3594.1b"],"exampleGameEntity":["c7fceebf245a400ab66fb13175f77f4f.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"4c306355b67142938839d6599102ef3c.16","portalLocation":"000d48c1,fb3d986c","portalImageUrl":"https://lh3.googleusercontent.com/lPXdrQwFfaPpDmtcht22VP6lN437pLprLA5d7l-O-33gSVy10z1PmAjz9ELc-cjMWFC80cM6PM9lnPPnFxD2taDmg65M5AGkxJnKKn83ZoIiVg","portalTitle":"Iglesia Asamblea De Dios Ecuatoriana Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725630308074"}}]},{"itemGuids":["2a512334772d457d857e87314cc23550.1b"],"exampleGameEntity":["b04fc9361c9b417e8bebbac35a9bc14c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"53033d7727c7433fbf4672744e2c046b.16","portalLocation":"000d4c43,fb3d93ec","portalImageUrl":"https://lh3.googleusercontent.com/8tSVjkXhuM_eskaoGbpKd56rJ3H9Do5hkCzZupsQKockPxmCEHpzWVvG1qxwypdKA84Lr6WIm6loiQDLmWN1ES3NBM2SNpsZLiCRJxR1hBZt","portalTitle":"Mural Acuario Atacames","portalAddress":"Puente Peatonal, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1727787817908"}}]},{"itemGuids":["4eca8c6ce87e4b6eb8439d38805a0e0d.1b"],"exampleGameEntity":["5a9dc9d8aa07460d95eda318af11d830.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"cf50d791cb8e4ad4a2c23ffff066ef12.16","portalLocation":"000d4355,fb3d9e1f","portalImageUrl":"https://lh3.googleusercontent.com/Dsi1Hnml7M23wzOiOAbkDaeEo_Rsax7rSXDE7U_sYoXTd2JknJl5PzRAdAqfR8I2_nxtdLUVI0WzUXbbT4kGS3HPD7TDu0e8r3fBxI5mwNH0Lg","portalTitle":"Pedro Vicente Maldonado","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725630308075"}}]},{"itemGuids":["675b0b6bf81e45b9b7ef461514549b30.1b"],"exampleGameEntity":["e1fa6bb996c54422a32bb0335789769a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"1e10fa7cc0834012b95a610e299364f2.16","portalLocation":"000d5387,fb3d95c2","portalImageUrl":"https://lh3.googleusercontent.com/axnHle22GH6KY45LFkKohR2s7jvc9R-jiCz13reZ2f5LAlZ27GVTQwdOTXwJ35kmk2pjJXer6apdYdh_Jztzyc7-cFzM28636xcNKDhAuprv","portalTitle":"Mural El Barco Fritz","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1716041963205"}}]},{"itemGuids":["f553fdd10dfc447d998e9e79b70d1060.1b"],"exampleGameEntity":["cdbb5129fef541cf801e342b8b3b514a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"291b9f32e8c74a78a2c8ad60791e9947.16","portalLocation":"000d4321,fb3d8bd6","portalImageUrl":"https://lh3.googleusercontent.com/_xgGF3JhVgnEEo8LJ9N9HuFAJVJ3sourjV_zWr9-HTX4Nr7zAGm4DmxuyTEep6ZGRVOnaBsq3we1ucgbSOAgBuo0VvTeREZmJ6Ru_JGgX3rF","portalTitle":"La Sirena","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1721948579984"}}]},{"itemGuids":["256b55727ca84a5aaa07214b770e4434.1b"],"exampleGameEntity":["87b489ba17a646c2bdbd92a571181311.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"bdb711f56f8730589d387fd2bfb9c969.16","portalLocation":"000e38ce,fb40494e","portalImageUrl":"https://lh3.googleusercontent.com/bbPsfMWJjKNRpLQCRdpp1aZwNrV5VmMiKjPd61eDiMkbK1k-EuTZIcPgU4bNnehRCS_dUM0U9LETgmVBmjyycUKtaeXzxfpsKTT0E0fP5rfa","portalTitle":"Área De Descanso Codesa","portalAddress":"W8JG+RQ Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226405701"}}]},{"itemGuids":["850c931ec29c45f288d2d6f86a008b7f.1b","e7750de1fbed45a9b642a53b98bc4a69.1b","9785a86b02ed4e82aa68effac6db06e9.1b"],"exampleGameEntity":["03ef9c5fb70740518ea91ac620d442f6.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5766c1046c844a8bb30a6329caa6fca2.16","portalLocation":"000d522f,fb3dbb0e","portalImageUrl":"https://lh3.googleusercontent.com/LrZRvOoZruL54zRnZIhalx4go4rH53r7qktxKcfpOLyWyP34HfUSDfjCZfGDkj_Tq4OdUjunLFU75FkI8PuhYBFk6WvR8SlLBQOGIqGBbMbcCw","portalTitle":"Edificio Judicial De Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714698051914"}}]},{"itemGuids":["6c7a02be363946fcaff2fa05712533d6.1b","4aa0de0bb3f1447d9d359ff445c27df0.1b","6a76bedc71a240369733cd66f4b98a0d.1b","9cb7a3ac5f4b4f48b95bdb93769997c7.1b","42c117a1d70c4b088c1292b4c9c6f217.1b","a7637b2e022a4ddfa7c282fa1ac44a15.1b","bf5da996c78440dc8735871b242dc295.1b","a5228836823f456281b1faa61c64878c.1b","e26173331b884449817722e6883ca479.1b"],"exampleGameEntity":["aa21113955df43b5802d00804ea4414c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"c071fa446c5931648180646254223a3f.16","portalLocation":"000d6741,fb3db639","portalImageUrl":"https://lh3.googleusercontent.com/ubp7eEbs5ivl2L7ZN8l_EAfTU3gh93BB9Cm1UwJu-zk4wbPVNn-TCq2nAfQFH2I-Jmqg7_dCMniFa4so-pMKyc7VApTYmXhUBvj936jx7Fru","portalTitle":"Bienvenidos a la Bocana","portalAddress":"V5H5+98 Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1760137071742"}}]},{"itemGuids":["d16199c50b404db99683958383f5c534.1b"],"exampleGameEntity":["c2894d59bd494a77a0f23d23cce0a2ed.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"8629599e5f2a4704a6a4696e77fef645.16","portalLocation":"000d4562,fb3d9530","portalImageUrl":"https://lh3.googleusercontent.com/XF1-3k1prQjEScPfdV2gX23j2z9Heh73dPmVuuuWyFE8cEnEp1HvPPC9toV5BQ6gh5p7ShfmFbLjURZvtQs8OiiYChBSwPiIKOL4WVxdFEo","portalTitle":"Mural Naturaleza","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1716041963157"}}]},{"itemGuids":["50dc6e9552a24c85b2b975c302195425.1b"],"exampleGameEntity":["62ff215d12cd4fada39b0d161d6a88f1.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"02d8a8ccf1593e449c480eb21ba5cd6e.16","portalLocation":"000ef25c,fb4090bf","portalImageUrl":"https://lh3.googleusercontent.com/SqpYb7_4RoqHN6dbPf00eRZTxnwqqiiKyoCz2gtQvsmc4QckQtyo4jTNy0cXPLN8-bqT1OVqmAOa1Jl_YjMHjpEhgKncNZjTTUmgLpSRsnH3kw","portalTitle":"Iglesia Evangelica Pentecostes Del Señor Jesus","portalAddress":"Homero Lopez &, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226405694"}}]},{"itemGuids":["ff2ad413763c48d2a6a5340298d17aa6.1b","58fd2d7f58424f578d8f1dd13d5bdfa7.1b","ef5cfe3e1af2466b829dcf3519587406.1b","04c3d1e8b85644bc98b02fa064dfb005.1b"],"exampleGameEntity":["16403d589dfa44078a3c9995184e1940.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"848900db9b874bb6b622be70b50faa21.16","portalLocation":"000d475b,fb3d8c30","portalImageUrl":"https://lh3.googleusercontent.com/y564hxJ68HSgKFAMMuzAO-J0PATLil0HcmvvF-JzmbtlW_Zyztij4ZY3m3gmPrgRx2YFjdJ_ZtxwVD31oyHBqonnT-Pvx0XvXflrFrX42vM","portalTitle":"Juegos Aquaticos Azul Real","portalAddress":"Puente Peatonal, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725882090941"}}]},{"itemGuids":["633a52c7533a41568cc5becdf289f691.1b","1b84d946294640a2ac53c10cf24f43f5.1b"],"exampleGameEntity":["c41e00abff6c41bfb6c34dcd965a4bcc.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"89adf77fe9b348f99626414e78c58ca3.16","portalLocation":"000d55aa,fb3d9867","portalImageUrl":"https://lh3.googleusercontent.com/jXwupHeL5IHXqry_HACQe-6v63WNZ6UUdZCrvgsdvN2EiG2loSa_zH22zw5f08BH3GQqI5rt9TFsl06o4QWNMeVQE5qxEjx5QtoBtyuw6j3wkQ","portalTitle":"La Marimba","portalAddress":"Malecón del Mar, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725630308069"}}]},{"itemGuids":["bb92b938c9ad49efb76dc1c7b4c14552.1b"],"exampleGameEntity":["d56fcebbf668451a9e6408184a158a98.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"fd780c8bd5d343e4ac696ba46bcc9372.16","portalLocation":"000e0469,fb402146","portalImageUrl":"https://lh3.googleusercontent.com/fU8V_yVOlunh98WYAMkrMVNAvSwhvoLL_aYIKGFo71bwHJihzAShVFRg-XiZKgLWT5CcO9QFOHlHQkyRpWiPoJVKGT87Dae_-oxF89S-Efs4","portalTitle":"Iglesia de los Mormones de la Tolita","portalAddress":"Calle Principal La Tolita 1, Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742226405699"}}]},{"itemGuids":["16853d7a5a7444938e085f5e474caaef.1b"],"exampleGameEntity":["9a2b54b6d79943bc8c46e5760a1388be.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ac2a04349d1e3cb4b2e98b0812b02ba8.16","portalLocation":"000d553e,fb3d9711","portalImageUrl":"https://lh3.googleusercontent.com/KFkmNfj4gvC3SXiSHCbRkvPM46mqS3PY-p2fWaK3Fn3tqPiiuWct2CuzlZs1jurY4KPWlpuRbnFQRIv4dbE-HBFW0aJ8gOiV88X7jAJqYSQ","portalTitle":"Mural La Tortuga Marina","portalAddress":"V5F2+F4M, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725630308089"}}]},{"itemGuids":["1d7a6046a7044d20b1c78346eff43b56.1b"],"exampleGameEntity":["85b1d949942c4df6bc79a0f30533ca5f.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"93bd790837ed476cb32752236a87482d.16","portalLocation":"000d224a,fb3d3725","portalImageUrl":"https://lh3.googleusercontent.com/kaxfAMDwe-IUEJ6ByiAQ-ditQvSlXlDIMctvFsjRSYE4QhVY9YzxdC902jhAvgxZL-kuD-KijD1NamLuM0B8RarEr0tvigs5SaSa_xiMIWU","portalTitle":"Estatua Nelson Estupiñan Bass","portalAddress":"Unnamed Road, Súa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1721948580004"}}]},{"itemGuids":["05362c7a4b1f4a5e9ab0b0750b864fcc.1b"],"exampleGameEntity":["6bf0dc376cd34716aedb79f8dfe9465e.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"e461d18a78dc4235b8da744dbd6035b8.16","portalLocation":"000e147a,fb405772","portalImageUrl":"https://lh3.googleusercontent.com/vi_ntNmDvZscbw4ELsHWVgnSCFKFvS_Z4ekulItjpkS5GlzlpCflBJXfsmwz6x8dJf5K_z8_i5DThuySUVVA04xGLVW45hcnmPGacKU74QYt","portalTitle":"El León De Esmeraldas","portalAddress":"Ruta del Spondylus, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038986065"}}]},{"itemGuids":["d5123f9a853d4a1aa020ef0a3ef5fe19.1b"],"exampleGameEntity":["4b96d52009d84e7a97a83e0a80bea603.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"580a99653c8b342c8b2c5fd14f951ac4.16","portalLocation":"000d480a,fb3da8da","portalImageUrl":"https://lh3.googleusercontent.com/844oDQw3x1leuv3krWXGCxTlN9buA_evJJE1kp-JGvmtvwPLWCcNi-jYMwS9SK6RVBbgHsyqcc_Pbu64A7wYMSKehrydljPATa5fp8sShTlTIA","portalTitle":"Mural El Águila Multicolor","portalAddress":"7, Las Palmeras 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1716041963192"}}]},{"itemGuids":["b97a928ef5ad484899a69256e46a6fa2.1b"],"exampleGameEntity":["921ac4e5792c423585cd3ce934e82fd1.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"4f09540cc74548398afd2a82b2ed1984.16","portalLocation":"000d5523,fb3dc0b3","portalImageUrl":"https://lh3.googleusercontent.com/0UP-QX7ErlmQUv3olEcvsD2kfoGGinXKGOUr193D6XojZDlb96IOX4x0X_TwTM2IN_ovebKsGVT7ovkd1DyftyUdxmB5Wbe6ooPYAlz9kRZR7Q","portalTitle":"Mural Ayuda Humanitaria","portalAddress":"3, Juventud Progresista 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1721948579948"}}]},{"itemGuids":["eeceed1ba2ec45d091701d249be3d8b2.1b"],"exampleGameEntity":["7fe88f44278046aeb02537b89d5b8e8e.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f4d1298ef0153a36b4eb094090243aa2.16","portalLocation":"000d4091,fb3d9c56","portalImageUrl":"https://lh3.googleusercontent.com/FTTpgBvXVucdlofJaWjuuoJPANWGeiu1tUVko23iok6mhn7XWK2T24rP7I3E0gwTO4_EaW_KrPI7weQ0-pBlW9gAluoAnFaj3QmofHizjDgVUg","portalTitle":"Mural Pez Abisal","portalAddress":"V592+9PM, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1716041963155"}}]},{"itemGuids":["8585bd27fcf94e33b29f26a9a226a813.1b"],"exampleGameEntity":["6d0f9e89bcac4b26bd460a912a02ec1c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"a9ea2fd6c405330f99b7ac7a62e1d2b0.16","portalLocation":"000d57a7,fb3d9ae4","portalImageUrl":"https://lh3.googleusercontent.com/ySuhvXV_SSK4-wJ4Alj3umn3zrBRLtQcMjjqCgsosAeO6s1M3g4rQ8VSfwa29GWOXQScmOCNfQS0iElpHhoocJ3VNOtbkABYB8TNneVUeYQ","portalTitle":"Mural Al Mojito","portalAddress":"Mal. del Mar 80151, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725630308092"}}]}]},"moniker":{"differentiator":"3C0B9BC3"}}],["92af5d49c73646dab6f5287231c99a9e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["b8a82cd650fb4026b18621b124df9276.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["13ab6b23cb254be18aa2a55541f89714.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["817d2ad6549e4237b708ea1760df3d2f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f8c6c3c2cba345de92d531fed7c72180.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["159b3eec1409419b9f6f4071a5d916e7.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["3fe053012ff741e4b7d54b0443b3f36e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["4e678c50b22c406396b90cc0f26db2c9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["13c19a6e22a74a989eeacf113f468658.5",1760458612984,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d905b9a2f5a34db6a51cb3707d277fc1.16","portalLocation":"000e3d39,fb4050a4","portalImageUrl":"https://lh3.googleusercontent.com/iH5ICZxqu3u3EqcibE63u3Ux6xkqloRAp_eMmZBkgL3EgoLsZlfGrT3jGpEgW4veJVb5qcWzCVvAORRcXDu8ViRDMbmpjr56nFV_4pA-IeU","portalTitle":"Torre Puerto Green","portalAddress":"Entrada Terminal, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1760458612975"}}],["3f851d5c022946cca185e1025eb52ff0.5",1760458612984,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d905b9a2f5a34db6a51cb3707d277fc1.16","portalLocation":"000e3d39,fb4050a4","portalImageUrl":"https://lh3.googleusercontent.com/iH5ICZxqu3u3EqcibE63u3Ux6xkqloRAp_eMmZBkgL3EgoLsZlfGrT3jGpEgW4veJVb5qcWzCVvAORRcXDu8ViRDMbmpjr56nFV_4pA-IeU","portalTitle":"Torre Puerto Green","portalAddress":"Entrada Terminal, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1760458612976"}}],["6169ccd9d1d24fdeb536a751dc3cb6d4.5",0,{"modResource":{"displayName":"Force Amp","stats":{"FORCE_AMPLIFIER":"2000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"FORCE_AMP"}}],["12ffb21feef347499272a2d4708622d9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["49276868d85f4a98a970b1d11fd5896a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["e44c4b3907e4446dbb585bec3b16cbd7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f23b06910a014846b374a5e98e356088.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7ae9a6c1da6d4acd9ea7359a621eec44.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["306fc28ae2d944ff81d17336e28e69cd.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["d97612e2d4734524b2f760349f040c09.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["090856d3cbc14e70ac03676fc572958e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5d88866df7244cc1b701563f92034ffe.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["83d27f612b5847c5a998234674c0f531.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["1c24a9401ed94c6fa89193f275dcfe0e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["604e9bbe27744bc4b6988e79d92fc879.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["eb381c427695447089c7010b4ef0d0e6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b22059d912384b28b23b6da8236ce9bc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["db99a449b9484e2caeae4ee4be62ad6e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["51291fed09b544ec9e686a99c0abf4d4.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["debdecb893e44b5cac2b8e8674280729.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["9d41671c009748f285cba07ab2f07c2d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["66309e58115a4adf8a1bdaa86ea53397.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["bb735257f15242e78447866a462a8e98.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["faaf5dea1cf84c78a0951bebe3ee98cb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["59db6ebcbc434937974d8a0eb66f82f9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["a2de5bf7d0eb424c9c9c2dd51c4ce926.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["c0aad8e5b3f447f49f4f456380042242.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["8d6c70fe8736483db158084de94db7dc.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["046be784453e48d59b12376740f5aaa9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["a59643344fe949c5b31e4ea0def0696e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["12ac1f2617ef4a3ab6b0d79cc1b980b8.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["2f512ed3cfb744de8d8d2078a570c408.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["5d0f607928ff476688863065d3b0343c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["f33f3a7bab72450cb62ff91a65a5aff8.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["55506129cc5147f2bbe6259a7afb31ce.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["c8a0967a28114da2b9caecb68888c077.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["a964c2378d244b1c9bd750a3c0e10285.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["436fec753f6340c79d29b521f98f54a8.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["3bc85f0515d84e3ea930105aee883a7d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ffbadd9cc17244a58c322b57bc7afb94.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["e6f58737df3a419697c6c5ec7baac110.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["603a6c0610b5447c99c4770346ac2274.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["954d9825dbd54461810c44abcb746643.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["26f3ab024fa64342ba858b2c6dd68694.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7b89f3f652874a5f8757ea880524406c.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["793c986e432b445a9cf7d0265f528ff2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["483f9f0b16c849cd9ed575b07f8cf37e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["e6f50237bc0f46ff9805062bd0f18415.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["56a8a88ea1a04f76a37ce49ecc1ed856.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["a2d9648af752467386ff1c5462591364.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dc146f010f9a49a9b5dc980b84723139.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3fbc974001a94e7a878ab421f91e5a51.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["21defa3f45244c58a36c77d98cd7120d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["39f17a9b9e0d45c29d7323d13e6b83b2.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"COMMON"},"container":{"currentCapacity":3,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"10818BF9"}}],["6873e2a1610f400280bc5036c345cd8a.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["ed54f1bf17fd43fb8e7f5e252d221950.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["9b7c7bfa52034d14a6efc3c601376d5c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["a42e4934cd41455dabcd72b724f169bb.5",0,{"resourceWithLevels":{"resourceType":"POWER_CUBE","level":6}}],["47ca599a922542fd8001c167f283d967.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0dadbc691c9d4ae3b0cf1fc68d0fbcba.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["75ea83ddc994490cac232924487664db.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["887247bb06e04469bf9d710e54e71ebf.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["5a6c0383f2fc48b7b3ff92268ccca0f2.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["233453199e0f419f98de7c5eeed2e35d.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["ad58e3e644d442188c559d9575230114.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["ac20368cd860403a9b0eb3be4a3ceb34.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["acf34ce16e5f411282887e43dd42eee3.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["b706e07d5f5141518cb5e8d22c1f069b.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["ab653bcf15f54e5abdb21efd70b09eae.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["fea5ea43df7644a6afa0ac27256f4c7c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["7ca25fdd0b504bafbf205f1a42827ae9.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["bef62d5d58564764bc5e1c1e5883eb51.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["fd4b90a38d2c4b56ae8bf541e91db2fc.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["d7487f0986bb4a7d81b885b51eae7f4f.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["9c309139710048f18c6047654fe5d383.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["3775011adee849ffb74f956464fb70c8.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["941303eda92b430a9152f7db33a3612a.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["03d63d1649fc4499b0baa8e87eef2b71.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["91be0ca846514ddb9d0d6649265da495.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["18a8f21559254dbca2e5cfe6fba35175.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["103eb489d3504f0ba12ddf3a4a0bcc4d.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"BE188541"}}],["0e5f429755b645699f0be72a8dc6e6b1.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["8c860e571f9c41ba8bcd5b0d2b2b216e.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"RES","multiplierE6":1000000}}],["82b004161630404198e95264af871446.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["fc370d6e891b4c54b1285c6e2a112448.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["574d0f7d2ae4410898ae5fa5e600ca1a.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["b901adf898734be58417815787da5197.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["6db7aa51a3f047559f7ff2cc86143bd3.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["d88da057fc874cc78a383f62409d5ec6.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["b16c2c76dfd54d0b818aed643dcc5115.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["6de36688f8d7485e9ff0b4856650e5cf.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["bde1b06b25564f2f955e1655c34429e6.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["2fd9f014e4db48c787b1eac7345a24af.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["489dd9018a13407c88a7dfc877bbcb05.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"TOASTY","multiplierE6":1000000}}],["fe066ad1050c4e04b91f336a2cf10071.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["6c38a80314444982961705caa9213f5d.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["5a98d7a3d4aa4a49b38f23531b7f3ce8.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["3f11e1a7a2aa4475adf114472b5af0ef.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["2264a59fa63448e3844a1dd5c9c4ea39.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["1631067d3f6941bdabae7f8dbff9d4de.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["ca97786a79984cb3acea38109e4e23f8.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["95ab8125f0804a3aa4e48877eb85229d.5",1748223610710,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"174bfe92caa0332cb208ba32bb084201.16","portalLocation":"000e8ed6,fb405acb","portalImageUrl":"https://lh3.googleusercontent.com/UpbPs0LKiakDH1M3wKVuETE4-OU3ODoUmnYvqIvW54PBtmKppc8tMEurJJ2eTqzwykoWUQau6uOPx4jKKk3El81Xjhz_d2kRUTZS4rCyMgf3dw","portalTitle":"Mural Momo Ayase","portalAddress":"X83J+JV2, C. Carlos Concha, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1744646542747"}}],["5375b21e1b184b748e485231a72d63e2.5",1748223610776,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2f82a0f5323f39a882523514c20ee720.16","portalLocation":"00104dd9,fb44e1df","portalImageUrl":"https://lh3.googleusercontent.com/roGOJUSex12qe07t5TKjE0AJtvwCrt-b6FwAygoQisumxStbAXT7L3ThICTsVLH119YtQV2dcL9P8RtbEYIFyh5XNN23B89YkblsCcoRB9o","portalTitle":"Mural El Perezoso","portalAddress":"2, Tabaquito 080602, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1745940568906"}}],["78ce76acfdc8460a88a5ede948666b86.5",1748223610981,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"58df2b1f958d4cb185bb90b05110d9ad.16","portalLocation":"000a0852,fb42440b","portalImageUrl":"https://lh3.googleusercontent.com/qdLIus3qdAqudapHbrASYQLDnYYMNp8dz5PVDtPqaz6Ssmlh1wczu6cbi93QAsLrIJGv3nbffOXFgBNWZVF0GAelsGEro7zc4osLQ5eCtO8","portalTitle":"Letras Viche","portalAddress":"1, 9 de Octubre 080409, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1742502245317"}}],["4b692ae82c2f40a4a4e318eccfdec236.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"11B149BE"}}],["2e78aa0b6eb8404587dba2c81a8d7efd.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"27AEE702"}}],["a6d217b325974334b4c95b1f90858ee6.5",1753120231429,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b1b3fa6479624b92bc8d4ddf11a26174.16","portalLocation":"fffc7e79,fb47ffda","portalImageUrl":"https://lh3.googleusercontent.com/Ske3C2zR1uBUnJuiHwAzlcFSZkt4K6lYT836cwN-D46UeFQ6wlnLRTlEd_XlSNsFqzGAPlnScQ_5Ie4ePxGRcwJCndgKNXzLrSAHrh_2-JybJw","portalTitle":"Pileta Del Porton","portalAddress":"Vía a Quinindé 7, Santo Domingo, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753120230828"}}],["79395d1ba1db463da7fee0093907dd6d.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["32fa85fa0dcc47c3ab3698808922e382.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["59185531a30940f085b37841976421f2.5",0,{"modResource":{"displayName":"Force Amp","stats":{"FORCE_AMPLIFIER":"2000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"FORCE_AMP"}}],["7d5a666cdc774303a2a417f21428b5a3.5",1753303436560,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"93b761b200e93d728797a01d00301c70.16","portalLocation":"ffe0e160,fb3da25f","portalImageUrl":"https://lh3.googleusercontent.com/_C64U_KAyvu5Qlie1tTgwukEJme1ukUkwxxx1JRwldWFfmTs7cvpaALzb24r4Fz4u8CyELu3T64hs7BpoT6ePp1mbaX8nCN5yGB-z9kW6KEC","portalTitle":"Centro de Convenciones Arena Park Samborondon","portalAddress":"X563+77M, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753303436552"}}],["5aa501f983a649d19d35f306ae02594a.5",1753305422851,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ffa6b1cf231130daba3e520955157f15.16","portalLocation":"ffe0ddcc,fb3d61c5","portalImageUrl":"https://lh3.googleusercontent.com/IJAk8pEAB2C4Uy9eOqTOM_T6KtxttW4gLtThWxKdfVB84r6X0vCNIcFYHTnE0qJ50sQld9kj5IRfXfHCuN4OgNG2VqKCH_H4KFPJNIiM2FuRxA","portalTitle":"area de ejercicio #2 del parque Castilla","portalAddress":"X45P+RF8, Bonaterra, Guayaquil, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753305422252"}}],["969030fb41654a2492ef0dbf0a06e71a.5",1753306568286,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0bc077a00e353cf381dea9d59d8dd0f6.16","portalLocation":"ffe0a9f2,fb3d4215","portalImageUrl":"https://lh3.googleusercontent.com/K6Ud0LkhadIt3XTk73TEdkzuAV4HT_2Sk5-xml_q6UTa2wE7Zn2yGMfKDZ_AugUi-vWyJCP-SQzVFhMjfmc-cSpcg312kucA2R2GKZ40eOW-8Q","portalTitle":"Obeliscos entrada al dorado","portalAddress":"W4WG+JQ3, 170513 212b, Samborondón 170513, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753306567726"}}],["ab5d89730aeb4fa8a81054bd0cd5cbbc.5",1753307126224,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0eafa09e350d3196a0fbd4f1d3afbfd1.16","portalLocation":"ffe051f7,fb3d37d7","portalImageUrl":"https://lh3.googleusercontent.com/eWq9fX1MAdpT0sPe4DA-IsdpLMJ-c7KWyWgu9_lol-GkcZNVQEGBPoJleniMCZTiOXVTj0Ih2p3kEjbLc1zvesRW8hPdhf0jrdxOF1rP8aQt","portalTitle":"La Laguna","portalAddress":"W4FG+G77, Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753307125546"}}],["bf0cfa47260d482e8476e3bf02dd256c.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["11d7f6895194412484d5db7a45696bd6.5",1753394654698,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"00a5e9d3dd8345319eaa6d65cac59536.16","portalLocation":"ffdf403e,fb3d5e83","portalImageUrl":"https://lh3.googleusercontent.com/akY9w8VET8lbPQWRUSvj_mtw6R9kjjsqlZ9uyQDx2moJt5ex7F7OgBu401C1J_u9ambospGDHr_z348drwEWuLNcohM5sk37dDHgSv7FcUHBww","portalTitle":"Rotary club La Puntilla","portalAddress":"Av. Samborondón, Samborondón 092301, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753394654161"}}],["c5e26f4cfea4428fa0ec6da81f3fc60d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["0c7abf31db0e4cec8dbbaa8e7ec86b3a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["26c42c89c49b43ad848f3a9e5c37394d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5f34113689a245f2a5f74c0f7c31e824.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["bbeadce75e9540c2ab63d70db247054d.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["5010d2d85ecd48dba7933a56038a9c10.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["f72e55fe8b1c4c0caca3be6a1b24e376.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b39c2674e2ae42269bf4e5be91a527e2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f7859185eb5b40f7988336c23743501b.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["ddc4b30aa33b4a139f023189b7cbcfd5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["003ddb70566f4759ac4fd9b27cbdf4bb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["2c57e3fbee7041cb9bfe8f41c46a050e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["657cd02696e14d4d9e4083583b5fb988.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["90438fbc7e7c468181942b574840cfaa.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["944395d0a5644d42b49f99208f307aa2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e3883205f91148a6b8bca01beca4feac.5",1754173295757,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"58df2b1f958d4cb185bb90b05110d9ad.16","portalLocation":"000a0852,fb42440b","portalImageUrl":"https://lh3.googleusercontent.com/qdLIus3qdAqudapHbrASYQLDnYYMNp8dz5PVDtPqaz6Ssmlh1wczu6cbi93QAsLrIJGv3nbffOXFgBNWZVF0GAelsGEro7zc4osLQ5eCtO8","portalTitle":"Letras Viche","portalAddress":"1, 9 de Octubre 080409, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754173294939"}}],["18ba357e48a44a8bad9ab218568e79de.5",1754173295757,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"58df2b1f958d4cb185bb90b05110d9ad.16","portalLocation":"000a0852,fb42440b","portalImageUrl":"https://lh3.googleusercontent.com/qdLIus3qdAqudapHbrASYQLDnYYMNp8dz5PVDtPqaz6Ssmlh1wczu6cbi93QAsLrIJGv3nbffOXFgBNWZVF0GAelsGEro7zc4osLQ5eCtO8","portalTitle":"Letras Viche","portalAddress":"1, 9 de Octubre 080409, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754173294939"}}],["cf4db662292b4c7792f202e27c46138d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0c0477732abf4b738476d6c883639bff.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["85a07a3c97c5419ab46ccf4ff6b40367.5",1754175395037,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b920484375e93389b540fb7e148b99d3.16","portalLocation":"000d5d43,fb40dcc4","portalImageUrl":"https://lh3.googleusercontent.com/5Sk0n-9dfXMk7JfcBdXKbN89xwQaVmGbylLEpBKx_9pOmCXz5ynJmGU_95aM7IS0LxZWB6Zi5DoVXeIiFCvKhVGk6GnhfzUqd5oDF5TK_JQ","portalTitle":"Letras San Mateo","portalAddress":"V9G7+8V San Mateo, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754175394433"}}],["bcbb701842d2433ea3f0b01bb44fc931.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["43bc328c84724aa99e68c8017ee26f66.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["ac74f6150b294ba993371c019e147ff2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["30fa2d5fa3744770a7670e11309fb6cf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["842378aaa43545e082b3c9e5724b140a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["132639616737497abe9c9a16d2be826e.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["15f4450234e9424e99d607149e557e7a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dd104681b4e544f0b8c4843315cf64f9.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["68d837bb566645e6a22a4fd54c181eb3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["dc139ba8ada242a4b6e5aabeee873db0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["12d900e68ec64c43a84f211d958a120a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["4da78631d18148b3b8e482c51dbd5eac.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["27f55cca25674145a3bf32ec2540d092.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["82ec589d6a9c4b8f8d440df786126bf6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a05b78f4b8a64bc888a1c878517360e7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d7c9590d3bc94ac7872a99549d0a6fb3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6eb3496a41a34326964f640999544aab.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["57f1b06add2a4f2281a29e58ba376cd9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["4808079a78e14dbb9886c28b273bbc24.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["34dd5a11898147c18b898bdc909ecba4.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["8c5cbee14de74eae8e6098e28f7899bb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c7592adef8664408865bc21cdc0f2198.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["7d0670a717244c5d8fcebab90543fa0b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["1c2bbff0d17540529a2edce2e73d6c77.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3f65ffc863da4526951dac9ad260e6a4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["29659c6d691a4429b45da48b88da47f3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a729bfa889cc4af0bb53d1a34e71f412.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c40ae4ed0bb24626af3f6eba30c18e52.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["484b92af128a403f9a7f0b0563108334.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["9b65f7a529244b77b7b857fe0127ae94.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["1418244a5f2b4b099ff0476229caa05a.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["ad4e6fc9691443fe82ad016fbbfebf53.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["df4dfa0ad0ab43a3910999b52ca38640.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"31CF9628"}}],["865d294d6edd432e96e71512fa1295c7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ef789d0745634138b8fd2ce13e92b979.5",0,{"modResource":{"displayName":"SoftBank Ultra Link","stats":{"LINK_RANGE_MULTIPLIER":"5000","LINK_DEFENSE_BOOST":"1500","OUTGOING_LINKS_BONUS":"8","REMOVAL_STICKINESS":"150000"},"rarity":"VERY_RARE","resourceType":"ULTRA_LINK_AMP"}}],["997a4801ffe74e6384f101e50de2173d.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"F2366F3C"}}],["8e7eee12121a4fbb8343d0937aa0791f.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"5D3E7010"}}],["5a5a64f0aa3f436a86c365c21c92d195.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c49aaa226fbc495287574404e397cc84.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["763591a6dbae45539daa418c9ce17dfd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["24a963992ccc47f7ac1b4ff04ca6dcb5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0ebf141246b34e8b88945261594758d9.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["e45e762b3e9442158187ca959f52cab8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b426fef2d54849c4b101efe339814b78.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8eab0c78f3f74a1fb11e3f68e597610d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["35d5ed888fa64ec7bfab17ddb50020ab.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6aa5448f111d4c2592e17419124527c5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["4b0af74d362d433582b846c847be6075.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["859e22caf16c4768983d692534d4494a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d652f4b4cc114dcfb1d28adafaac0a4d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0d79bbd9fb6341fa8cc5c53cd4599d30.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7ada3edc59a44599b390d9d1fd9ee75f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["948bb2fc485e4455818dbdb5b5af351d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e66f2efb07874a39beee302e7f637f13.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d856ef69f2be4978b132e8a764895f02.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1c1ecf3379254986b49db8d88c13753a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["00eab341692b4d1cb56eed96a667f03c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4fa86bdaed334094b865bf96f134bace.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b07530564a86482793f3246e30bef014.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["accf1cc4d4b7441eaf49ef498c4afde9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d3d1b4eec0cd4b409527ef0cb947fead.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["481532f9f64d4b45a95e4ac6d12ee4e6.5",1756582704542,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7580d059238f39e295c9ded7fa42dfa0.16","portalLocation":"000db286,fb3e4505","portalImageUrl":"https://lh3.googleusercontent.com/_a-jsWkhak4iRfFHqnhkj4oUF9jnHAKvBcT_uVR7O9njjV9WrBoUwa95-JejNrlt1rAa7d2INWPmhk4Q2MA-C9DYAdPCpUYzipyUgGy8pmHU","portalTitle":"Pileta Arenas","portalAddress":"V5WV+WVW, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1756582703846"}}],["68d7682d50ef4d62802f22dec114b370.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4993b189123e4f458b895e188e5128d1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dba33cf233954719b29111d5d9b5c0aa.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["98b3a2c954f047e999ab4c09da3f16db.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c267eff1443b4d92b1df2a8fda552fdd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["559924a994b24fef99a795bb3957ceb7.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["2af1e2f0164d41599dbca52417796ead.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["b1987f72013f40f681fc64311a63a122.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["38bab0d793904d88a35674efbafdf2be.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e1b484b769ac4ff9bc2e9b8c9ec406e6.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["f68a5721633540d98eb89844773c721e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8717a424e93d4318aed7af9a17db56b3.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["f07cbb165df04f439c1685c311e8f19c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5b08a3b977044c8882a1f54d844b4234.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"E413BC95"}}],["54809cd5302c4ccbacbd5771f18c4ee3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["c66c0125ea694e4c80528e9e61407c50.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ef3d9469c24b4c94aae71aede01e8fec.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["77560c70a0fa4e0fa065b100a82ca9bd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0b3e534d30de4fb7b57f4e49b7c4e1ff.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5b6a68b4fb924b51988ca579c3c59f52.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["31f8e3fedc344cc38a9ae085d59766c2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8821ef124d7b47f2a420dc783b8460df.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["c765239eabe74148afd51eb084b5b98c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["76bb2e74585c4719bdaa4e78ce042a29.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["27f6f370a3304b7a8d1712dc150472bf.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["a926048524634550a25730f9fa114867.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["36538f9f3b7148118dee90b2223b537c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5d89c6c245b84e2d8e86e3106e4f9674.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ddd07b4b9ce7482db04e49ceafdd9840.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["822e0954f3cd445daa56a4aa4746ba25.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ca577ba1a0224cdbbd166ba839aa68a3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a3171510e93d41f19475a32bf222efaf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["269228130c4942128323cb9a0fa3d1c2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["86c44b528dfe4feeb6540b57b839c6c5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ff01b8868dad44578e6da73707f22b5b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1a5c51c97fc04f3a9579c71759eb80dd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f4f7a281ce9346beb4ee5ff4b782fbcb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7b13d99db8534f1b840604cfbc3fe269.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["baea6c8fce174360a4cd58023f8919b9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1b05cc16131f482cb5ea2f36e5a8ba08.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["4ae1ec976168413d9a5fa083b39bee5a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fdc87fe49f1141239077ee89493b2adf.5",0,{"modResource":{"displayName":"Ito En Transmuter (-)","stats":{"REMOVAL_STICKINESS":"0","XM_SPIN":"-1"},"rarity":"VERY_RARE","resourceType":"TRANSMUTER_ATTACK"}}],["ab427212ae744b5f9138109b310d9088.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["ef38e2633d8d4c229909664d3a426f31.5",1758136213652,{"resource":{"resourceType":"PLAYER_POWERUP","resourceRarity":"VERY_RARE"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1758136213651"},"playerPowerupResource":{"playerPowerupEnum":"APEX"}}],["c4ee1126ca9d4818984e981e98a4a56e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1e4678e46921486c8afe2900c3a3a163.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ab290a8b738448bd846d02522a1cc8a4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e4ecdb39bd9c49c29cf2064c3e457a26.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["a09e414cfc0c4eebbcb9c1006c9127ae.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["03c0688be5f845a39f0c43c8647a004b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cfe2044af5f7492a95e7e418619c94e3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0e95ff45f50f447089378958e653ddd1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["58ed2490f04148c7a32d88fcd94db883.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3c086eae13da49c6b8c9226b62030bc5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0baf9b766388411082640c64b5b0dfbc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["be97fe932ea64756b679e714edf12f82.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["3627eedc08184a44aa65a906cceca8f2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["32e0b5d6f9d148139a69126d7af467c4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ee0a440ee1424ea6b346be8acf841db0.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["b6391d0062ac4a4a8cb9ae397021bc76.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9e3747cd0add4460b538e72edf7cd9f6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3c6354847001425fb4ef51daddde886a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7a289a59b3e64f55946813f2c8fbbd38.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["462ab7676535494e9a33197ab1a67697.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["b54e76e6ddf4480a99d713794148a2da.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["e06e05addf654559b1a005687b4b7bf4.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["e638fe00ce914272ac57062b95093b94.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dc77f9ee96a2420bad7a3f5ca48bf63e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["997d06d2d31344069bc3d1050ca2182e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["88d57214dcf841c58344a8ddb5336135.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["4e39c20bb1de4f6f9fbb319fb4fcafd7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1496906dc0b14e2b8a63e8d625b0c594.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["68f5846cae0541a193ba54f2bde7ff36.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f30b281211e04a169f02893cd69431f1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3cb9b06f4e044c0b9d4e6c6cb9309010.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["36486d5d7d7549079e74ddf07990226f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cc1da28fee884cef8abf633a466e3af2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["863cf8e5a35245e388fe72bd267935a0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["537726aac7644413b9091ae96271ece4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["226ceccaefa34b96bed61fcec72ae215.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["dec38694896d4a648e140b7aabd1d5ca.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5f4065ca34784e40902f840a5c3833fc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["aedd2a918eaa442ead491855d2750b58.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dcab5dce44fe4f829cdd3e00feaf9afe.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["f9b7ee73678947c19e69e30a0cc1c967.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["d6cead2410c94ffabecd704166408220.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["d1350fd47e424d19a7a6d3b34c2b8fb8.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["ade541bb3f924b6281673311d9965cfc.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["07e2488ab62e4e20b2e25a80adfe6292.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["0c4708ea68ed44b9940734c190b48d9b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["42b6a7f6f96a460e9ca5e9554112a7ca.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["7b134f6a9ab3462787955b0fb4dcd44d.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["c6a25953416c44499be872260f2befdf.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["6c6cc9b5f23e43d283f4c19b4aebba3c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["42d93b17ebac4f1fba8bd110a171a4cd.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["6e7064b12a314c11a6a54dd4ab8e4eaa.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["0db547affe9246daa7e70634ec2134e5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["5410867373cb416d895f4bbf64d60993.5",0,{"modResource":{"displayName":"SoftBank Ultra Link","stats":{"LINK_RANGE_MULTIPLIER":"5000","LINK_DEFENSE_BOOST":"1500","OUTGOING_LINKS_BONUS":"8","REMOVAL_STICKINESS":"150000"},"rarity":"VERY_RARE","resourceType":"ULTRA_LINK_AMP"}}],["219d6bed68f741ec8179c91506c61ea1.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["e78d45c1619b4fab802df9dddc0566b8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["678b9a687cea41ac8c8c2d46d943d311.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["b3d287f212ca474eb146becf72e38fff.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["37b1f7fc661348d08c5522b27c3d10e6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["71823cef9370445894fa1f3b4db03c8d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["4c8f4f12c4724becad6e5eb1202669ef.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["0eac1b8715f94e6998e105eab198c4f8.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["483a8c509dcf49c68353bc178e4b8f97.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["a23b47dac6f8414481651ca713471a7c.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["d51ac22107c84caf85039f4b7e3f8978.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["1b0aac83d0c34cd88b384d0e70ed2023.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"168AAF21"}}],["306b5c24cef143198a5a59de88ea42e9.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["84f944a40f404b28a8b1c6354d0ce710.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["de921666f64e4a20be3f77b334be2ef4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["19b6ff46ee0b4d1480982e424080ec51.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["d4a5b43247fd43b3bffc057756b0961f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["620a786662bb4e2d9c6e28afbc05a5ae.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["b39a1da84c574e22be3175afa612b5fc.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["7337cca8f2984dadbdf3b25173b3a0b5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dddada544cb14b35b9543be99f640765.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["2a4d45dd314c400795d932da906120a7.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["e88f63e4d7a640d09796ed8b65dd38bd.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["dadfdabcd121427e9a777efd708de691.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["da57ec4578b1407283a3875941e767d6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["174ed03b5812498ba429c87b68f85c31.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["2c33d27c2b464b57abbe6f6d1099eb79.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["6ccfb52c7a024daeb2d7f83f4a976f8b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["b982a6f6c2c449359ad716d644c643bf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["17c48ea094554a4fae537121ce8f0fa6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["61a56903676f45b8bb01bca1e94e5723.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["ae15e2143f974a5fa8eca5424b513d06.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["f00cf437391044b4a64b7407a4e88785.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7aaa509a8d5d4664b7cd8e2e6908761f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["a092739cd9144661b1ab6e8c5dfa3ab6.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["e32f5ba359fd4b3bb8ab6f486a29766e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["e7dad06422fb4792882f42bb242b948c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["d9e93714cf264eb48c1bd21c3c1b4bbd.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["39406b5235464478b1c31e7055f0c545.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["da77977e628040ba89b8c04ae58b86fb.5",0,{"modResource":{"displayName":"Turret","stats":{"ATTACK_FREQUENCY":"1500","HIT_BONUS":"200000","REMOVAL_STICKINESS":"200000"},"rarity":"RARE","resourceType":"TURRET"}}],["ec61ae3b73334d059ab56bf411d59793.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["6797c7423c6a43beb4a1a6d42801c194.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["66fe506886c74245921e46bbe62d7474.5",0,{"resource":{"resourceType":"KEY_CAPSULE","resourceRarity":"VERY_RARE"},"container":{"currentCapacity":100,"currentCount":84,"stackableItems":[{"itemGuids":["f07df96ad1b44682a37f8558c372503b.1b"],"exampleGameEntity":["5b0aec4e137a48acac4c28340982d14a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"40779a80c30c454db3b0cba76179abe8.16","portalLocation":"000d40f9,fb3d9541","portalImageUrl":"https://lh3.googleusercontent.com/o3doX2XwSH2fNLkwdk1pFKQ8aWBT5AYuXf9lijX1tU5t5tyVcNdt14Lu-vkxRQFmC_KhmfCtV9p_1C7SAudZXV4Ksscoz5Tge1fsT1bJTpG3","portalTitle":"Coliseo Municipal Sebastián Valencia","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1710168730091"}}]},{"itemGuids":["ca1a538834af40a7bbd840a36c56ab8f.1b"],"exampleGameEntity":["7b1110c91d2a4c3dabf22272295dade0.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"27fa807ac95b30fdaf91ec46fde602dc.16","portalLocation":"000d4714,fb3da66a","portalImageUrl":"https://lh3.googleusercontent.com/TWPV24I8d7QSxwuTV7z9XL1O-JUdgbEHsvluB0CjBjpqB4IN8GRDvr3Q6SKx1kd1uYL26jFWrxE_xpETlDTteXcZ5jbMY0GBCxiZybEARGNv","portalTitle":"Mural La Vida Silvestre","portalAddress":"V5C3+3M9, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714697967432"}}]},{"itemGuids":["08587e5cd5654b2a888b0a7c5de5c184.1b","816f4df3566c49e6b37c813c8c23eee9.1b"],"exampleGameEntity":["dbfe6490f0e94b158a5522ad609714f4.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"cf50d791cb8e4ad4a2c23ffff066ef12.16","portalLocation":"000d4355,fb3d9e1f","portalImageUrl":"https://lh3.googleusercontent.com/Dsi1Hnml7M23wzOiOAbkDaeEo_Rsax7rSXDE7U_sYoXTd2JknJl5PzRAdAqfR8I2_nxtdLUVI0WzUXbbT4kGS3HPD7TDu0e8r3fBxI5mwNH0Lg","portalTitle":"Pedro Vicente Maldonado","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1708119220912"}}]},{"itemGuids":["2df555689b874264b55cf3a4951f1ba1.1b"],"exampleGameEntity":["c492f809a9664f3b9cc8fa10936d676e.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5fc5593d615247979b8e117b01ca599f.16","portalLocation":"000d50ab,fb3d98b8","portalImageUrl":"https://lh3.googleusercontent.com/Cu9Fhklp3npcKA31lAU9qi-GaFhjVqBSCy2jUIdKEDttO8fn4RM_3lOvTEqec463gKp80LF1dviWW-g_wHY0cObZ_AZX36RZOn2DsrjQqHk","portalTitle":"Mural cigüeña","portalAddress":"Avenida Malecon Playa Atacames 21, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725882109575"}}]},{"itemGuids":["5dc8cb4930c646afa40d90ef318ecc71.1b","0349f87a6511414d8d233e6410ebbe80.1b"],"exampleGameEntity":["b0af0e96cc6047958d84085b2bc3b2ad.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"33f53994be763f7fbc5eb07ab749ce47.16","portalLocation":"000d53a4,fb3d9476","portalImageUrl":"https://lh3.googleusercontent.com/aTQewkhKQ2YlMCOCREdk3YuWOFx-GsZUTU5hu-tDA0oT3gnfdZ48r1TEl_awSFACKo4xrg2H9zdckhK_TEB_uTJD697yZB8wTxwXmv-lZHo","portalTitle":"Mural La Chica Azuliz","portalAddress":"V4FX+7V8, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1727787838265"}}]},{"itemGuids":["60470b4526ef421ba1512be336be483b.1b"],"exampleGameEntity":["07b2eff2f1ec4ca5b8efb2ebfe6d5b36.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ac2a04349d1e3cb4b2e98b0812b02ba8.16","portalLocation":"000d553e,fb3d9711","portalImageUrl":"https://lh3.googleusercontent.com/KFkmNfj4gvC3SXiSHCbRkvPM46mqS3PY-p2fWaK3Fn3tqPiiuWct2CuzlZs1jurY4KPWlpuRbnFQRIv4dbE-HBFW0aJ8gOiV88X7jAJqYSQ","portalTitle":"Mural La Tortuga Marina","portalAddress":"V5F2+F4M, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038967452"}}]},{"itemGuids":["afbb0974c71c4311a302ac08a1eb1da3.1b"],"exampleGameEntity":["540f85d98a1b41d2af9b566fb4b44225.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7aae03821d3a4570b18080dfa43c5cbc.16","portalLocation":"000d3cf5,fb3d8b4e","portalImageUrl":"https://lh3.googleusercontent.com/M5c7YVQYQyHgB9OGjjTLtbeWcmBjC8pEI8Tpksi1zpQmck8MgT-ih-yIgMqyRoBEGTuHcFe-JdD-hc2i4-3uh24zwVHbrXIfjTImFhqldHg","portalTitle":"Iglesia Nuevo Amanecer","portalAddress":"7, El Rosario 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038967453"}}]},{"itemGuids":["477bf3e49b1a44a0a1004cf56d5b5fdb.1b","77c31d75d78549b0891d84912e67e68f.1b"],"exampleGameEntity":["6e141ee1ae2240f5b9b0bcfc3370f492.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9a8af8ed11b84bc0ab55df51c9c18064.16","portalLocation":"fff4afcc,fa9e0789","portalImageUrl":"https://lh3.googleusercontent.com/A0uA3hgiX_JZ9T1C05-NyxmJeKzbM8HKhWZVJCo59N-ODvf5kt2ni9tiJJwt5SqbcAzXE0UXhLXEFeUEN4D8aP6wHrHzcoxhTtZynz5whOxcBQ","portalTitle":"Guardaparques Touristico","portalAddress":"EC200102 Puerto Ayora, isla, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386727"}}]},{"itemGuids":["4481b3631bd7471cb38e321019ee4e04.1b"],"exampleGameEntity":["26bc3bc27a34468e833c8fbfccefeca7.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0bdc56e1d5514af9bf29a06b54f89499.16","portalLocation":"fff6c31e,fb34ccc4","portalImageUrl":"https://lh3.googleusercontent.com/_sWwglPKU7cbUIATshOfypgyQnhELLp2V_XyVzJWCstht6EqohKI4wawL_sLbDah0vsZ05cgNRuxj_0CoixVFZHudOInQeksTfUe_SVa5GOQ","portalTitle":"Mirador La Cruz","portalAddress":"Calle Pedro Fermin Cevallos y Calle Aguilera, 306, Bahía de Caráquez, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386703"}}]},{"itemGuids":["c086580939284dd09250a88c2aae8377.1b"],"exampleGameEntity":["0cd0bdd4de9b4bdc8811c90db80b917c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"bdadad45c8c23e619065dc9abd020dc3.16","portalLocation":"000d4dae,fb3db554","portalImageUrl":"https://lh3.googleusercontent.com/zcEuD8zPTk3WoJF_s8q2ZAiTCr_8RoX3GVAe2xHaD29xcCZcri_6ZKaLjj23tIUoyDTOKrM9G6u3dhXLrnyHB_7VKmFAWWKBfOmqzHr-AixjOA","portalTitle":"Letras Cocobamba","portalAddress":"V5C5+M6Q, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1716042010496"}}]},{"itemGuids":["e6ef6dec85c8473192610cd96f551144.1b"],"exampleGameEntity":["82b628da089d481a95d88b670345c330.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7be1528d041146f48f15a41975108ff1.16","portalLocation":"000d45da,fb3d9d46","portalImageUrl":"https://lh3.googleusercontent.com/gBXWCD_d52Y31fLi7rMicpI9_1ZbLlSlQd3oNP_BWtFsuceIY6ZsyVrDqvU28D36iA9mm3caYmyJAG4TsgZ2h1EtUXukiWISdImKDk73I8sOxg","portalTitle":"Iglesia De Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038967470"}}]},{"itemGuids":["fe9e7c2396e54b859611a2006b3aeeb4.1b"],"exampleGameEntity":["a91ab41c16e44f75b743e802fd285b46.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"a57d00674d2e30ddbdaed2fd4ee2a7bf.16","portalLocation":"000d47d4,fb3da660","portalImageUrl":"https://lh3.googleusercontent.com/ihBrn6d-c5c87sIHpP5VzKKFnsZcX71Oaq-RryvBx-5rzXHZHHlzhZV8dzyYHVFjkcrSQZwXuQj3hMFAnBtg3LvJc2Iztp2CG0h_1H5dLNUC","portalTitle":"Mural Miguel Y Dante","portalAddress":"V5C3+4MF, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714697967440"}}]},{"itemGuids":["3a1e9b072bc1423493f4ac86ea5e73f7.1b"],"exampleGameEntity":["f9d69816d8de44388ef051559c4dd7ae.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ed30e6b50e1240d3940602ff70de9bc7.16","portalLocation":"000c6c64,fb5ef1ca","portalImageUrl":"https://lh3.googleusercontent.com/lXlRTyVJC1Ea2vKUXagXytPARv7MDJ2E8sXoouk_i4I5sLx0bZXWJ_8cPiNASVvBcwKGQvO5FomH-vFfHABTuHXoCqHudNugQVQ4nNxz_zI","portalTitle":"Puente Internacional Rumichaca","portalAddress":"Carr. Panamericana, Ipiales, Nariño, Colombia"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386706"}}]},{"itemGuids":["83b987398fae41468366a666a4f1b83c.1b","fc74901c3c5c455496d3e969458f5226.1b"],"exampleGameEntity":["7a6ae77a479e4baa9df16a3e4581e6b9.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"a8bda71990c537fe84fee82a6c7001b2.16","portalLocation":"000d4092,fb3d9ad5","portalImageUrl":"https://lh3.googleusercontent.com/Sd9W7iDtewqc86u11LAK6rUL9FGIfDHawusI-6NfoEjEkvp9gBGJ4HdfL4GezJB48p8AWTDhF1lqMb12hrnJEgFRIBXkOY54dFf0MUZsAHP-Jg","portalTitle":"Mural La Tortuga Marina","portalAddress":"Sexta 2620, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983203835"}}]},{"itemGuids":["6ebc4a258c694b759283d01ceffb53b7.1b","f0081663086948b682f2d3e718d83b8d.1b","193221a812dd443ca4960886836a7465.1b"],"exampleGameEntity":["53474f323e2c43c99d9434368b5fc2d1.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5ff3d785086140ab8e8589bcb120d58a.16","portalLocation":"fff4afb8,fa9e15ab","portalImageUrl":"https://lh3.googleusercontent.com/NS_L9JvTyzdLMFLo1cgb7vhvHeI5tX9lF6KcvnTwtSS_Ll-eRtReTw9b5wqWcLWOLRuOe3fFZb7xDz-3kDnx-8_DWhnoBEAsJgMITgAHiUcb","portalTitle":"Centro De Crianza","portalAddress":"Parque Nacional Galápagos, Avenue Charles Darwin, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386717"}}]},{"itemGuids":["f0b66c30664f4871ae8c2cba77bef750.1b"],"exampleGameEntity":["8c8fae3f91804bf6a65490c0c3af1a95.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"837e5958464d40cea99cc6fa33df2939.16","portalLocation":"000c791a,fb3a9607","portalImageUrl":"https://lh3.googleusercontent.com/fRh_pyAzpY9xvAOil3GZT_pvmoC0uPhBpH0JrEXzKJlrP8170PXK4hXezKjIK2eZmDniX2wEH5HmxPwDYgHQ4VYYTySKQUrebse86ZKKSQX3Lg","portalTitle":"Virgen Y Niño De La GALERA","portalAddress":"RX93+5G6, Galera, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386720"}}]},{"itemGuids":["ec650ae2f40246b6bc430c12825b2613.1b","ac96c144b6274f5ab53a6d627fbc6241.1b"],"exampleGameEntity":["275b5532bfb44462a3411364032210f6.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5766c1046c844a8bb30a6329caa6fca2.16","portalLocation":"000d522f,fb3dbb0e","portalImageUrl":"https://lh3.googleusercontent.com/LrZRvOoZruL54zRnZIhalx4go4rH53r7qktxKcfpOLyWyP34HfUSDfjCZfGDkj_Tq4OdUjunLFU75FkI8PuhYBFk6WvR8SlLBQOGIqGBbMbcCw","portalTitle":"Edificio Judicial De Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1713229913533"}}]},{"itemGuids":["9ccef520b43449139759a11fa9d9cfd6.1b","6a3ee7fd96c24b94af6706bfdc5b5fda.1b"],"exampleGameEntity":["e1a08d70879b4731a7d534ece5d59111.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ba6ab9754efc3bdfb633372ec9758e81.16","portalLocation":"000d7324,fb3de123","portalImageUrl":"https://lh3.googleusercontent.com/zQLDzSlxu1wulgUSbXfG3fmK0ObVzB6vnSizpkvJEQ3TXkqpIjBLUQi171j-gGWvzpGAXpYA-HSNbLrYWY8E-8_tmwq2Uqpren0pvkYegm1qCg","portalTitle":"Mural \\"Océano vivo\\"","portalAddress":"6, Castelnuovo 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1713229913541"}}]},{"itemGuids":["af78ef19bce14945be78cc355c41b18e.1b"],"exampleGameEntity":["fd4490f219cc4059b75f1ec64cdc4965.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"213baa7453e44b86a85f1a9cc9ab67ee.16","portalLocation":"000d9f31,fb3e27b7","portalImageUrl":"https://lh3.googleusercontent.com/eO_cjj9EoNbWAw43r5LfWscBlPhfIWpTRqcW1aQm84aRwwsDlqv9ZB4x5xY-mA7OsXgRWVU1R0JsYJjwqjsE_YvjfHJMhNvtZUxTspMJphyC","portalTitle":"Plazoleta De Tonsupa","portalAddress":"1ra Principal, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1719958029235"}}]},{"itemGuids":["5b7978cd787d4de7865dde3f0729c9f1.1b"],"exampleGameEntity":["f00bdf0370da43c0b2f9e3b3cf996e2c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"c66f765ef1264b3a846c5f48dfd1899d.16","portalLocation":"ffefd7a4,fb2d69b2","portalImageUrl":"https://lh3.googleusercontent.com/VK6BpDEccqsPrA-xRJDo9U5MK59PjBSbdFBzC27wFdfV-4QhGdtPNMNWl6uuejt7JrmZvMW3WHs97ubVRTehaN11hXWJ_SI1vLPAdxqeky1U","portalTitle":"Faro De San Lorenzo","portalAddress":"Faro Antiguo San Lorenzo, Colina, San Lorenzo, Manta, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386725"}}]},{"itemGuids":["db15287de8d1449e9b143dee813adca8.1b"],"exampleGameEntity":["ea5c5d6eacea49ddb2b9962dcd5dd004.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"4f09540cc74548398afd2a82b2ed1984.16","portalLocation":"000d5523,fb3dc0b3","portalImageUrl":"https://lh3.googleusercontent.com/0UP-QX7ErlmQUv3olEcvsD2kfoGGinXKGOUr193D6XojZDlb96IOX4x0X_TwTM2IN_ovebKsGVT7ovkd1DyftyUdxmB5Wbe6ooPYAlz9kRZR7Q","portalTitle":"Mural Ayuda Humanitaria","portalAddress":"3, Juventud Progresista 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1719958029233"}}]},{"itemGuids":["4abfa683c08c49c38687ebc440f22ff4.1b","da795e04a709445a9f23901306025913.1b"],"exampleGameEntity":["dff803eb22034a2491c3b1ae9875303d.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5824cd2ce7913ef98f95abf069d26236.16","portalLocation":"000d3d60,fb3d80b7","portalImageUrl":"https://lh3.googleusercontent.com/HX6xQFZ8Z9lUkeh2IoPkRCP26vto4QcC9lzlUDtqGih468pTPOGDmQ6_jekCCB0d4JxKUc-WWaqWAGwcZPiW8gC7HLM5Z_uI2CBRu0mo_Es","portalTitle":"Mural Dama Azul","portalAddress":"38, Vista al Mar 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983203831"}}]},{"itemGuids":["ab5c894a20c24f75ab0bbe2ec85c1b04.1b"],"exampleGameEntity":["950ea03c7ba94f24ac29c02e3341868a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"1e10fa7cc0834012b95a610e299364f2.16","portalLocation":"000d5387,fb3d95c2","portalImageUrl":"https://lh3.googleusercontent.com/axnHle22GH6KY45LFkKohR2s7jvc9R-jiCz13reZ2f5LAlZ27GVTQwdOTXwJ35kmk2pjJXer6apdYdh_Jztzyc7-cFzM28636xcNKDhAuprv","portalTitle":"Mural El Barco Fritz","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725882109581"}}]},{"itemGuids":["f58345675b04412e875723112650c0a9.1b","44b78bf5cba54cbd8c970c70b5ece4ff.1b"],"exampleGameEntity":["55d1de0dbf4a4f69a06c4af4fa044efe.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7269f5179d334a02857f2899d1574773.16","portalLocation":"fff4a82e,fa9df2a2","portalImageUrl":"https://lh3.googleusercontent.com/ZmG7M3_fxHtAEZ5rq5wyM3do9taQbMHhsd7grxf7WQYV7tfi57p-uhWmNvrXI5ymPUxP6rK5tyrTt-wNrvUdkWntOcQMSvw9g3D5EdKRZ2Y","portalTitle":"Tu Fruto, Tu Mar","portalAddress":"Av. Charles Darwin, Galapagos National Park, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386704"}}]},{"itemGuids":["9cc7aaf047f74cc6af866ce0a2f489f7.1b"],"exampleGameEntity":["8bc75fd1ca5d44db9273adb5542d44cf.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d13adaadc179430eb4545f46592289e3.16","portalLocation":"fff0e3dc,fb2e5d09","portalImageUrl":"https://lh3.googleusercontent.com/oFjErsiuM3fzHc7Hu5gE_473zFiWwMAburUojBdkEMiNf1OA-cz8fF4Ptq-AxsAx4RmU0VIFdTBZMCT0iZLHuXBrT3zm6RpcnTqknUhnShu8","portalTitle":"Iglesia Parroquial Sta. Marianita","portalAddress":"Calle Principal, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386729"}}]},{"itemGuids":["51c48112262f499a8448f0af58057698.1b"],"exampleGameEntity":["853c850513964453879ac0d0104d06da.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f35ee204d1cb3efa9eed8196fee7dfcb.16","portalLocation":"000d5d5b,fb3dad88","portalImageUrl":"https://lh3.googleusercontent.com/UYq3ANk1wtyRJetQ0h8ruNLqT0DFHndKKi0nKHOIyZJhcnXdVb6n0pWKM7y2DSCwxPajcR7rG9D6ob0KbhO5WX1KQilfCao8HAX_DMGo_jnZ9g","portalTitle":"Mural Marimbera Rio Mar","portalAddress":"V5G4+G79, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725996374025"}}]},{"itemGuids":["8fa39beebf134aa588eacc4dbf5648a6.1b"],"exampleGameEntity":["3f307c4829724ecd87afb7743e14742a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"4c306355b67142938839d6599102ef3c.16","portalLocation":"000d48c1,fb3d986c","portalImageUrl":"https://lh3.googleusercontent.com/lPXdrQwFfaPpDmtcht22VP6lN437pLprLA5d7l-O-33gSVy10z1PmAjz9ELc-cjMWFC80cM6PM9lnPPnFxD2taDmg65M5AGkxJnKKn83ZoIiVg","portalTitle":"Iglesia Asamblea De Dios Ecuatoriana Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1710168730095"}}]},{"itemGuids":["10bb4b71203a4dafbb47be088ff2dece.1b","ba621b8b39134f8db19a81e189b7f70a.1b","896c693b1bc847c19e252be67e02551f.1b"],"exampleGameEntity":["16adbe517ec34f57bbd2825f86d0a777.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"685f8143e4464d8a9dac4641003529a0.16","portalLocation":"fff4aa77,fa9df539","portalImageUrl":"https://lh3.googleusercontent.com/Hco4ur4cVpUgAPl1xFnL0V9hgVJilfNqTzBzdMHI-brGQSZBdJL9jSpO97RnpJi5XvSdVZMFg3fTkqGkb5kQswy7Ty4lmCkM0vBVJy3lDhGv","portalTitle":"Galeria Aymara","portalAddress":"Parque Nacional Galápagos, Avenue Charles Darwin, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386710"}}]},{"itemGuids":["408d8037eac844108370d6fc1b251630.1b"],"exampleGameEntity":["e7fcea5e67f44168ba0c10a46090d216.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9554ba4fdedf4bacb9730bd51b50c425.16","portalLocation":"000d4716,fb3d99fd","portalImageUrl":"https://lh3.googleusercontent.com/FaEHzPNPpO86QeXHjLywoEB9-bvAoFItOpQojCl_TBfmdB76QbUIca5A85uZ_xlxXPmGko64db_ZTJmYC7FlWl79-mbYxOkixuLsbH9nvqs","portalTitle":"Iglesia Ministerial De Jesucristo Internacional Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038967451"}}]},{"itemGuids":["86993dde7efd4cf790f87645d6f83cfd.1b","8f657833f54647b986bd5f9889867c82.1b","aead6cb2c4df4128828758343c682a15.1b"],"exampleGameEntity":["193da579c6e84d0680adf82c40626bf2.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d19bdcfb4f69465fbaa8d51610bb6ed2.16","portalLocation":"fff4a948,fa9dfe01","portalImageUrl":"https://lh3.googleusercontent.com/Ul8cXwYL7Xhyw2ZXMosTmZI2WsUvlgq8tYo3t_9_3vFfzpdT3iOYO5EaKlC5LsYQrGoj7X2MnZzBnm2P4s7ea4WfE8qhIDXCjzKyTuIFm5Qi","portalTitle":"Las Islas","portalAddress":"Ave Charles Darwin, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386713"}}]},{"itemGuids":["6d772678063949f5956e9123e860f753.1b"],"exampleGameEntity":["4cde982066d241078846096933b18f6d.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6ddfcc922c1a4fc4a2c76786a4e7bb2b.16","portalLocation":"0255ad34,f8a29521","portalImageUrl":"https://lh3.googleusercontent.com/t2_TuhHTeNPTMF0vPr8u9t2NsQxy0Uxd8s67MUSZ1STeirslIlsq-3qlmOBVeqn5fn2SChX3FI-vg-N2_sVyNqWd0Ja_Tzk4Ti5W8KnU94Zl","portalTitle":"NL-1331","portalAddress":"17525 Masonite Industrial Rd, Navarro, CA 95463, USA"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386723"}}]},{"itemGuids":["8e551df35b50482d9eb2ef48314f102e.1b"],"exampleGameEntity":["2c2868fd2fc14ca0912412461baea37a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"e3aad8b07d1c3d2e8ccec754746c97f6.16","portalLocation":"000d444c,fb3e0a5c","portalImageUrl":"https://lh3.googleusercontent.com/wBtQIEC9DQ7LN7vf07gDd2Va3Cge8I0P_rgLBWVqpwNZyUYLgyh4Y9Rv5FhnT5S94rdzPd3ShrpTWWCcz5jhAO2Y0LmSVBwuZW3_pA8H-kny","portalTitle":"Cancha De Uso Múltiples Spondylus","portalAddress":"V59H+QW Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1719958029242"}}]},{"itemGuids":["2d350286ccdc4f8ea2be7dcd65de8de7.1b"],"exampleGameEntity":["b45d1f5dcb374ad0ab1507749e17470e.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"3791397a23764dcd8f5eb8206e9005a9.16","portalLocation":"000d4455,fb3d98f6","portalImageUrl":"https://lh3.googleusercontent.com/oRU1sBlpUHl1aUPti9SwY1Sh5tVTJ5CTpOsKwrnVH7dmKwo3-cMDe5IZVWbleoJasIdpQ65adN_g2NQqTBpRwXRbrK6xz1kvCbzATJGXNy7p","portalTitle":"Placa Reconocimiento A Luis Eduardo Casierra","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038967463"}}]},{"itemGuids":["da00b234d0f84e989387713ec2ed3b47.1b","a0b9e602e6634ba89114e3cf2990f9e1.1b","c2446461f4d44addb4a5fa51ca379ce8.1b","0644021fdcf84b3690072b4dc50c1e12.1b"],"exampleGameEntity":["169dfd77178d4d6b9f8d9dddf14e3fa4.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"cef6241af94e45fa906bf99bc10c98cb.16","portalLocation":"000d489c,fb3d9e07","portalImageUrl":"https://lh3.googleusercontent.com/AaTw_s5dWkWmqYIiPwqzhiHO_bvuUF7Txm21yZ-ZHCIKEYNSYf60zdzbFwrvefL0aeufyYH4KgFPI3Jef5CqxK7e5OcZOOj_r0sfjxe_Y9jsZQ","portalTitle":"Fiscalía de Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038967456"}}]},{"itemGuids":["54c26bf7c66c4b17b56aadaadcec48db.1b","77e6b519b6784b23aa17abeffd17be16.1b","81949fdda3a449d5ae7a81cbff4a1ced.1b"],"exampleGameEntity":["b7c19fb8e26242cdb23110fd31dd859c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5743ab839e6e49d392269de231d6351e.16","portalLocation":"fff48383,fa9dbdf6","portalImageUrl":"https://lh3.googleusercontent.com/uBhKdMZsijZw4bIKijXLh9kHZCls-w7JaxkcbqQNH1UsO8ZxZaCBOnScT3IiEDQ0FS99kCT53yjpJGyz2A-ZgIdEg-Zv3uHJeDinX9Tmgxze","portalTitle":"Opuntias and Finches","portalAddress":"Unnamed Road, Galapagos National Park, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386714"}}]},{"itemGuids":["2dab3af7ad114bb6b34495addd8ecc50.1b","29d7e3dae1754223ab7b292bb154b0b2.1b","fcbf91736ce0403e85e536ee3f8bb294.1b","79b14d819c0b4f7ebd52aa2b753c9997.1b"],"exampleGameEntity":["38773ef9efd44e689cdf52341707bf9b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"cea96f37f3af369ab1c3f5f58a3a014d.16","portalLocation":"000d4026,fb3d9b7e","portalImageUrl":"https://lh3.googleusercontent.com/Mc9Tbx0TE5tdB8guwGGUjT6NJdmAvXs9T_oU66Iv9zPslnI2fII_ZgGd_isr92VKNyoTfko9-w7mzp8hra_Lo0MKHRTSvRNIBhYEWJjNnmA","portalTitle":"Mural El Submarino De Julio Verne","portalAddress":"Sexta 2620, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1710168730101"}}]},{"itemGuids":["bedb323c29004b83bfdfdf272e23c503.1b"],"exampleGameEntity":["98e5c376cf0f474db3d36696c8f4a888.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f2a0c92dc00d4544bbef6a79961bf48a.16","portalLocation":"000d3c3e,fb3d8e49","portalImageUrl":"https://lh3.googleusercontent.com/d9N57vJipEBYyPvGvDarvy_mJ6kdVPX-wCAPVEhaLAE50wV1yEN3yRlTMdXBs6p-UUNO5YW9-TVKuxBCCfyAQsCjQ-NbEhKSsPt8G6m3FV8","portalTitle":"Juegos Infantiles","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038967462"}}]},{"itemGuids":["4a2a57cc2cb54775a308c2ca18f2361d.1b"],"exampleGameEntity":["8cc2aca11b0642be8f7a1e5fdd1f48e4.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"42cc4cb9bc9c44e5a32f21af74c8b83d.16","portalLocation":"000d0599,fb3d9231","portalImageUrl":"https://lh3.googleusercontent.com/SxCaViXrOzJ8ZKdhF8NFHtPQX88VZMC0sRhgpI4R56tvGFEv6ebttkOdVXI73QJYnCZR-R84UZS841tO_XdVkzfEFq-mW9cpTfRUcIUqNx11Tw","portalTitle":"Batalla de titanes Acuapark","portalAddress":"Ruta del Spondylus, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1719958029253"}}]},{"itemGuids":["43c18ea9dcd14722b9bdfd37180b3770.1b","d0bf8c17a69d48e59820048b367a4856.1b","82650f23e6e148698696df4b870708fa.1b"],"exampleGameEntity":["face8455306a4205bab9106592de79f2.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0336bd25dae94f909d9e85ddf0d53abe.16","portalLocation":"fff49686,fa9df14a","portalImageUrl":"https://lh3.googleusercontent.com/-ISQNiWvGFyfanHE-UqWv5Q5-uTFu5ksWiQd1hQgU2f0g45F3jJu4YimkCxeupfmd4pLdgkm5aAIAyULnZn3rCJR4Zc0VrNpenaH0tGXPRY","portalTitle":"Pier Santa Cruz","portalAddress":"Parque Nacional Galápagos, Malecon, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386707"}}]},{"itemGuids":["1e1ccdf2cf3b4afdb480cb0b060dc57f.1b"],"exampleGameEntity":["24fa5dc4d35342e0aeca6fc89c33269c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"a98dbd22783a4ec29fdd24f5bce92f03.16","portalLocation":"fff63fb2,fb34d767","portalImageUrl":"https://lh3.googleusercontent.com/WKuJrA2kefYmvo1XDwQjG_Rf-PpWwLZJJcTrwCZ5j4YvkyVL3TLkTPUuvXafXp1_Ye0FaEMcfOY8GyfRk04AL70vvNFBrgSb60EJhMvyQrWh","portalTitle":"Monumento A La Gloriosa Fuerza Aerea Ecuatoriana","portalAddress":"Troncal del Pacífico, Bahía de Caráquez, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386731"}}]},{"itemGuids":["26100d5920444b66906ffce93857bf53.1b","f8b2eddc6ff84f33a2aedf25acbf6e50.1b"],"exampleGameEntity":["8ce11f2a59604278bfb26f77a3f7e629.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f4d1298ef0153a36b4eb094090243aa2.16","portalLocation":"000d4091,fb3d9c56","portalImageUrl":"https://lh3.googleusercontent.com/FTTpgBvXVucdlofJaWjuuoJPANWGeiu1tUVko23iok6mhn7XWK2T24rP7I3E0gwTO4_EaW_KrPI7weQ0-pBlW9gAluoAnFaj3QmofHizjDgVUg","portalTitle":"Mural Pez Abisal","portalAddress":"V592+9PM, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714697967445"}}]},{"itemGuids":["29307f01ef2f4ab0825fd98667521ba4.1b","9870de18db1e4969b0ab49b3c70d5be3.1b"],"exampleGameEntity":["0d23ebb12ba74d788b9d14654ecbf02b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ee2f39d760463d72a6ecddb55a47de69.16","portalLocation":"000d9ec2,fb3e2714","portalImageUrl":"https://lh3.googleusercontent.com/MlKMKORU4fajgokm4hXmQY69AbmrVqy0JM991j2wQMUeV1NbtSKwmsJPwe1R49q2bfnfqHZMFCpBP8D2zPh6drIU-g3qQaafU5q0sdX3TDji","portalTitle":"Mural Unión Sin Fronteras","portalAddress":"V5RP+XVG, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1713229913535"}}]},{"itemGuids":["b7b53abdd34b4d598d67324cfd36bf7d.1b"],"exampleGameEntity":["1d4a42616ef7475b97508ee39c75cd93.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6466d6daeade4ae8bb16ac88b28126c3.16","portalLocation":"000d607b,fb3da9ff","portalImageUrl":"https://lh3.googleusercontent.com/ES-Sdy7Jatdq1Tg9jrG4yASGQNFeIGtWtvIOLx-ZtW_C-HrnaG4iaZk5dHzzNuUkCno5KtJqHp26jplcJCmhKHvbsVBRF60yQLe_rOjp07fO","portalTitle":"Torres MARBENSA","portalAddress":"Malecón del Mar, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1708119220916"}}]},{"itemGuids":["99f1577534494907a750715e09ee6738.1b"],"exampleGameEntity":["47c8e744cd0644018fe2f55bcf049d82.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"8d2d12d7170d4e8fa23a5ddd503dbab7.16","portalLocation":"fff4acb9,fa9e0bc7","portalImageUrl":"https://lh3.googleusercontent.com/dxEzZTEgxNnjiBfI6MzRacpO-4XQaWqE_Wyz7uRHp11sgygbXbQh_3bkCyLiPJY9mLW0Vwjy_8dLpZ_NesGWQzzAhT9Og20urJjJfI21UPmB","portalTitle":"Playa De La Estación","portalAddress":"Parque Nacional Galápagos, Avenue Charles Darwin, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386702"}}]},{"itemGuids":["5cf0bc0c793a481f8c1ea4849e5391e4.1b","0b150f83b10843d897967a909cd6ecc2.1b","9a3af60326174362900903daa339dd35.1b"],"exampleGameEntity":["236b71de012843ae82a6bb6f96bddf17.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"63bc97d285c84ee7ac6cde28788b179f.16","portalLocation":"fff4a080,fa9df49c","portalImageUrl":"https://lh3.googleusercontent.com/JrzZjmaG3m2PjAYv615nuqNg7nhutxiKTuW8PaGMMnC8hQwu93n-Lr7m46CzKdgkfvm61gfOrdT2PDmvWhEFIB-mU6squ4M18zx625ZxmEU","portalTitle":"Iglesia Adventista Loma Linda","portalAddress":"Av. Charles Darwin, Galapagos National Park, Puerto Ayora, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386715"}}]},{"itemGuids":["68c4e0a0f86d47da8254ecf46a77c745.1b"],"exampleGameEntity":["324c5dc44d0844a29602ef0825d97fba.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6c8b8acae68748b89de7eb1fea66f233.16","portalLocation":"000d938b,fb3e2c01","portalImageUrl":"https://lh3.googleusercontent.com/nesp2Y3ZhCpIwEfDg1P4Gx5oS1gpKQNDbrvg5jGo4TY9MbogbdTEKo3TIeql0IR0WR0pWleRnc-KaEV4EH3nNI8zwiyLlUQRyhlXGnPh8eso","portalTitle":"Mural Playero","portalAddress":"1ra Principal, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1719958029247"}}]},{"itemGuids":["c212d0a5865c4ea3b2ef51f0b370c37c.1b"],"exampleGameEntity":["3adf1285a6444d4c930937e29688e1d7.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2cd1717b38964aac9546d5ed394c3e3a.16","portalLocation":"000d3ada,fb3d8fcb","portalImageUrl":"https://lh3.googleusercontent.com/so6sZzbNG1z-7fEzsLa_fltyrclYvENIPmFKkPNLSQIu7ZA_7AhwTSkGVZ0QMhSSZgfJQ1tlLrA89y-UQbOf-MKWJ4Rj2J8-AEpiVOAIppjq","portalTitle":"Cancha De Básquet","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038967466"}}]},{"itemGuids":["0376cf7becaf453abfc8b999c0d6b0b8.1b","5048987696434cb4aa9a76d38fc43a1e.1b"],"exampleGameEntity":["03924787f708426fb27d0d2b69ce439d.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7d0942efd53f37919059002cdd894e52.16","portalLocation":"000d3ed7,fb3d851f","portalImageUrl":"https://lh3.googleusercontent.com/nCKCqD6m44JlbaY5SXUhJA4hNfYiOzrka2xp9eFazxJS_ZrDrsgwRTtwdDEWcXgHYiRPxlAMGXGH0L0y27irzKlRCxAbLu_U9dOLZqexOIMh","portalTitle":"Mural Santa Rosa De Lima","portalAddress":"V49W+48V, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725038967458"}}]},{"itemGuids":["9041e18ed8a44289b5676bc4f0501bbd.1b","cd475e7e6a7f46fabfe9c6e830d498ec.1b"],"exampleGameEntity":["6ac9142091c840a089a00dd129773685.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"53033d7727c7433fbf4672744e2c046b.16","portalLocation":"000d4c43,fb3d93ec","portalImageUrl":"https://lh3.googleusercontent.com/8tSVjkXhuM_eskaoGbpKd56rJ3H9Do5hkCzZupsQKockPxmCEHpzWVvG1qxwypdKA84Lr6WIm6loiQDLmWN1ES3NBM2SNpsZLiCRJxR1hBZt","portalTitle":"Mural Acuario Atacames","portalAddress":"Puente Peatonal, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1710168730078"}}]},{"itemGuids":["ef558aef615b4cb59b4075e87a64f99b.1b","0d1ce8ca69d14a0daa0f487cd764b98e.1b"],"exampleGameEntity":["01f4c0f8c35a48c9879beda13d1e8ba8.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"346aa7e34186306a8ea8148c08150d40.16","portalLocation":"000d7f3b,fb3e36bf","portalImageUrl":"https://lh3.googleusercontent.com/APGV6SAVXUrnXjsuVCeWHmLg6h2Y0BHHPNxHeG2mttZ4CPyFzSBa2AxaPr_kgyV2AvDN89Ap-d9LuVkR0z4rteordVSdSxGcv41r7-wlZ6g","portalTitle":"Mural \\"la morena\\"","portalAddress":"V5MR+PCR, 1ra Principal, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1713229913540"}}]},{"itemGuids":["4237549fb9964394a67e748ebd74e4d2.1b"],"exampleGameEntity":["6fa197c41af84abaafebe779ed4ec653.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b57f02a2fff24b33b26e429934a4bb5d.16","portalLocation":"000d443f,fb3d9cff","portalImageUrl":"https://lh3.googleusercontent.com/hmBtXKya-Umra_mTUNT6Qzo6bEBu1gLJGCjosX-sAMivE1_gyGYqyCWwMaQHmSSbSHxXZTciPaKefcpyQLhKFki9ZjZ3KKZC0sYjKjAEEUK0","portalTitle":"Los Juegos Del Parque","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983203833"}}]},{"itemGuids":["66f0c1cbffab4cdcae18fcf1516e8e37.1b"],"exampleGameEntity":["4463395d9171499389622ad3986cdc7d.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"c4e5cac46ece40a8b91151a3afcb11e0.16","portalLocation":"000d7e88,fb3e3780","portalImageUrl":"https://lh3.googleusercontent.com/ftLhF9mfpoKKrv4YOcyM1WUxD8UxOeCpl4BYvkk-5ix4ZqngxM7XSqajDwOV7_7CRgTf1XmfSHdq8X-SuJt2t7V0W1ZH2IzH3JsPw8kPzo4a","portalTitle":"Letras De Tonsupa","portalAddress":"Ruta del Spondylus, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1719958029238"}}]},{"itemGuids":["0268a518e6904a008b5f02230905d8bd.1b"],"exampleGameEntity":["0eb8fabffff14328af28be2f7e144445.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"3280b493a64a4263954148c29743f579.16","portalLocation":"00065f7a,fb56da49","portalImageUrl":"https://lh3.googleusercontent.com/yBhDqD_WC9HFH95LhEwbNDdTGq1BLiiFQzk4jWtXCKo32OehsbUjp4t1Zud5d7-x9nzjblJonLhYfeNUuTlS2iugua5UuvA6mXDtnkCZOVh7","portalTitle":"Catedral de Urcuquí","portalAddress":"Calle Gonzáles Suárez, Urcuqui, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1693047386718"}}]}]},"moniker":{"differentiator":"52EF9294"}}],["a5dd43e017f8400083c6dc201308a1cc.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["d396a78292374b4599f1c6bcf4e85f1c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["dcadbed0e9c54e0ea01bbec1205260d4.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["889c1b61df024c1caebd67f2ddda837d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1db3ea34d0c5414b8006f21710bb6cde.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["41a8196d7b1e4e3c8e01b50dc62a63b7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["348df4be59dd4cfaaadb575491d17833.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["1c610dc55f9142bf85c38544797d12ab.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["4ed1e53413a74a26a9bf08e98342878e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["de591f0fb1524ffeb1a1f5fa0c64f7b7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["487391835a1449728bd1c64bae5a7fdd.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["ea53412bbe6840b9901bb7e55e48c336.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["9e6935a3315c4812a1d077dbd53f0c75.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0be0f82a9b2244c4921a0ecc4283d2b6.5",0,{"resourceWithLevels":{"resourceType":"POWER_CUBE","level":6}}],["4becebecc74c4a28a644899b07986324.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["dd064d1811294d76bf50a5156a696f5f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["f4c38fe1e8174d2b9accc56354339945.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["f084dd4a9da040168c9f461965080a48.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["7a849ec66cf146789b288f35cd535eb4.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["b1d8e56ae27a4fdc89fc9b2ddce68d56.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["2110ec73a0a54e97ae472e2dda8cb6a7.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["2f5b4cc6ccb44ae7a8956cf40ef2d0e8.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["8999905cd84742c99cbadb33bda0d388.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["177769ecfeef4c67a6b7b20279dff3ae.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["94ce5cfab0a74743ad71bd8a1f5685c2.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["02b07364dff343bdbf8cf8cb9c2750c3.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["576436fac94c42e1aeedc3aa270dce32.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["cf9b98c84e454a2c90745e7e2055e17a.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["9e764c34ada0470cb4f3677372c3a06e.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["446dbbdd781b4bdbb7fa95ea2f3454e5.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["3c2e07a3c0b4422e817426bcdbb2eaad.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["ffa2f7c0758e44d1986252331361f082.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["55528a57d64d46febe3d3709fe039d30.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["9403bec995524b96b13d38e7be3f38b7.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["a7326985c1d24f5bab8267c55a5c9df3.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["22a86768f07d4bb08d48d8312cd676eb.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["39b232a6a50547acb5740f7b33a24864.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["361f491934b1415eb3f16c09d5d44131.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["0f2f919fb8944195985b27ffd145d336.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["6b13adc4cc0e4cc0a9c15ca24110d875.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["ff84b879763c49ceb6a9816751cc0c12.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["7521385150d74be1a8401a8c4d34b241.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["21c178212fe54dc291012d92b7e67f0e.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["a842da129a4048238295580f0b8ac25f.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["620252c598794494b501b7c2da0d7a1c.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["ece5278d01344a43a6caf6ba651df85b.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["e25fdc06d3ae4ee18de23a7d50d93578.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["a269e3a0dc1647d0a164151c1f197790.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["24df5bfcc34f406ba64f8396851d8cc1.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["aa299f726efa495fb31fa54fd4074417.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["1d97acc76df14157bc6b4bb3249f47cb.5",1748223611270,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"176a308eb1464008a1e4b855af3af196.16","portalLocation":"ffe19587,fb414844","portalImageUrl":"https://lh3.googleusercontent.com/fjQD8yDGPcvxkEMFUTEgSNzAqzia6ucSMkyjIuS1V_xnyzH7vytCQSfpHwpk8OZh5JeAIqjtbifhctvG5ccG866cLa-mat2ySu5-HoWKblgGFQ","portalTitle":"ReyPark","portalAddress":"E25, Tres Postes, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1731705209343"}}],["a3911e95703b4257921fb9277d7f0181.5",1748223611448,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2f82a0f5323f39a882523514c20ee720.16","portalLocation":"00104dd9,fb44e1df","portalImageUrl":"https://lh3.googleusercontent.com/roGOJUSex12qe07t5TKjE0AJtvwCrt-b6FwAygoQisumxStbAXT7L3ThICTsVLH119YtQV2dcL9P8RtbEYIFyh5XNN23B89YkblsCcoRB9o","portalTitle":"Mural El Perezoso","portalAddress":"2, Tabaquito 080602, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1745940371863"}}],["86469f112e9b4c84ae1c9f892571bbd9.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["bcbe7ce6f234465bb175f7fbdcad841d.5",1751054817975,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"1b8088b422103e79b27f9f06dfa0eca9.16","portalLocation":"0001084c,fb3a63a8","portalImageUrl":"https://lh3.googleusercontent.com/KFK5xRmCtiqwM9GlrlJN35-79_M0kXfF5M5wcZX6HXry5t9q-PbUWdn_dsAj-qoVDrmnWZH2q0eBZEWKcvnIGfxfFlRTsWKqnP4GmKnrubA_","portalTitle":"Monumento A La Ballena Azul","portalAddress":"3W8R+X7M, Malecon, Pedernales, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1751054817963"}}],["426d3955976c42ed963213a963eb76dc.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["85c2b67db4bf4d3e9855281cda197547.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["5b34ccedd3ba4e75b27bfae69f3fb12d.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["44c294a5656e47918f16ddcf904b4f68.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["a393259b503646fa8638f7b6e1a20985.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["d72a2c1ccb134051a6df7353bb9c5a45.5",1753299525342,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"44cc2785eb343963883fc7c4a5b08538.16","portalLocation":"ffdfc39a,fb3d4651","portalImageUrl":"https://lh3.googleusercontent.com/9mdGROJZgdKEnchxlQthaO3z_Y97WGpXupVQfDfuyVI4VQ_Deantuj9i3qE6_DboouI8rn4mfw5QxrjO-ZUTzpeUQegxskubR07FZMiwXb8","portalTitle":"Almeria","portalAddress":"V4PH+XR8 Urb. Almería, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753299524731"}}],["b004eefb51a94aa0b6c02e1cbbfa7453.5",1753299755093,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"c0ef984f32a74d75a20720ebb717924e.16","portalLocation":"ffdfd005,fb3d41b9","portalImageUrl":"https://lh3.googleusercontent.com/x1YcxPJEe0IipKI3cSEBU8e3bk5WNehzL5HU6kHh9aGxv7VRH8yfwCiFYYjPYKoZ6cA0LPah43V0mBgGMCAc8AwrPinImNmFQHp_g3yFbtsSkg","portalTitle":"Paz","portalAddress":"Edificio Global Center, Global Center, Av. Samborondón, Samborondón 092302, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753299754429"}}],["dbc7f94152f34b72af2946a41ec15fe8.5",1753300922941,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d791f57bfae53a33b21e4c1c59d67715.16","portalLocation":"ffe023ad,fb3d3b9d","portalImageUrl":"https://lh3.googleusercontent.com/CTn-J4sLyNLbXFXB19oxcNP5pViMEVni1IEUPBK9uAKfC7Ae9bXZbbeGtbrgQ3uODSx6_vk_GTG3A0Zmi32OQDDF2t5yBr3uDXPt9yrgnS0","portalTitle":"Glorieta Vista Sol","portalAddress":"W46G+HJR, Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753300922307"}}],["1d4c7cc328b74ffebe11988cce7aa52a.5",1753305937874,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"63c3fc76490c330fb24ed01f37ed4ce0.16","portalLocation":"ffe0e515,fb3d6229","portalImageUrl":"https://lh3.googleusercontent.com/DVsETBwexcu-UgJxlR24z4W6QtDMyezysvWfUWhO3qx_Ui052KQiYI8skANO0daCQdzWvtQw27cClvbSz1N8RX_DQEM4PsWZz-L_jnu1Ri_I","portalTitle":"cancha de futbol de parque Castilla","portalAddress":"X46P+HM Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753305937226"}}],["db86e4ef97d44f91b8766f93d435acb1.5",1753307540303,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7dfa4b79954749efb886e89531eb6586.16","portalLocation":"ffdfc70f,fb3d417e","portalImageUrl":"https://lh3.googleusercontent.com/5b2GhiAMUG31BG6TBC-UuLafEK1JQ6gP_W1iqPJ-reAUfXlKBgh0-I4ybAbpejfymFydmOT32HoqpvNIrEe5sehtmS49HDI2D6ZCxk-qNbs","portalTitle":"Pileta de Cascadas","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753307539349"}}],["806f1f976d0441cab6adc428b7f28083.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["94edd98ef5f14ad683b0eb70692597d0.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["db6e1422e30944c796f76304ddc96ff2.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["5cae1a26f4c841b0872e33ee1d1245cd.5",1753380941236,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7d21b01e6d324025849e69f4afd26ebe.16","portalLocation":"ffdf78df,fb3cb52e","portalImageUrl":"https://lh3.googleusercontent.com/jFSnpxO9UA7kO7iwdCcDZ4n0eC4BgEPepRVT1LDNtdsiqMLZxmfDgIgWfLq12GGf8DBnwVm4T2xf6XEaBoAj8lan3HlzEF0IJyn1dKgeSANBMw","portalTitle":"Parque Triangular Francisco De Orellana","portalAddress":"Destacamento Base Sur, Guayaquil 090501, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753380940623"}}],["075eb073846f4e558e17cc37edb18797.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["08dbf0d9d214499bb48b9762f9ba12f3.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["8abbdb1ed926443bbf34c70753d80694.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["7357a5d3bb3a44dbbe76e1c91cb898d0.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["1c67ae72c8974257bf792d9dab138d27.5",1753736744612,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"bc264e0b51c64656b8dd5f375a309841.16","portalLocation":"ffde2709,fb3d285b","portalImageUrl":"https://lh3.googleusercontent.com/e_XGgEbPjgItUd8sINUDyoWngWKnfL6RZ3s7wqwkUb_kQBWI3fay3y18V_BCGzVNW0MLnNMemFKhxMaxyXe-96z4i68qZckA3WeJN8DknT1vqg","portalTitle":"Mirador Final Puente Santay","portalAddress":"Paseo Ecoturístico Isla Santay, Isla Santay, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753736743987"}}],["aeef178d87c54ba78caaf72790a02131.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["381ee514afb24d3396a3a2d1925a9185.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["02dc5315c32d4a96867273adef008350.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1a02f09e80364f6f9aeceb2014455f7f.5",1753906174567,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"db32d1ba97374eb38a89ca074ed769fb.16","portalLocation":"ffdebc8d,fb3d21d9","portalImageUrl":"https://lh3.googleusercontent.com/5AsV7bXkZHmf8GYoZFSAwjslagEIW6KgqYPdiPY4MMSrVZs_BEXt4PC7pj9jmM9qppI0jhNFcBbnwPFD0aMBCm8jKZ0OanYMKwOOpeWRXnDbMA","portalTitle":"Torre El Carmen CNT","portalAddress":"Túnel del Cerro del Carmen, Guayaquil, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753906173909"}}],["3f69d193ec3741209bc6f5c75ec92e15.5",1753966505136,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ec42a1cbf28d3ef5afb79081d804a65f.16","portalLocation":"ffdf2e51,fb3d00c5","portalImageUrl":"https://lh3.googleusercontent.com/b8ii8YZ3xTmzZLGrWRYIYTAdic_K7scVLmbMws_OrcFme90Wd_A2NfiKQL3zm2R1-kSEovXxYC6RAPPHiTUEdl86ljFj_ORHMc8Q8PbpIHNz","portalTitle":"Mural Amy Winehouse","portalAddress":"Gaz- 05, Guayaquil 090513, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753966504499"}}],["c49b7b8472fa4a52b9ba67105779d0e8.5",1753967456537,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"e8d0e844079348edbc0e285f3e37c84a.16","portalLocation":"ffe05c3c,fb3d3b0b","portalImageUrl":"https://lh3.googleusercontent.com/ROHdL3g48vZZDjFm1W0ohzeQWom0C-la7hI5IqeZzxRiChs4TWI13ZIrxVllzP6hp4lcStx4u_uI1todxHhSsunM5hRoQh1XQoFkWikOeCzi","portalTitle":"Placa conmemorativa Gabriela Mistral","portalAddress":"Avenida a Ciudad Celeste, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753967455707"}}],["fce863553f8a4f64af24dbb257890b2e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5986d089dae14a1e9551f8879e9eefd3.5",1753986657772,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"00abc060d1c3462bb77c43741368d44b.16","portalLocation":"ffe0a213,fb3d2ea2","portalImageUrl":"https://lh3.googleusercontent.com/riIao8yOGLtqN6PKf0Sm1wc2mk1NuYE86ls_cZMkmoT4RDYLvHbXgzZ89fZtvz1tlD62n2OTGGD1ss1QwTJ8H85h6ITUKYexXqsUsulrma8","portalTitle":"Iglesia Jesucristo de los Santos de los Últimos Días","portalAddress":"18, San Sebastian 091910, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753986657041"}}],["08c61aebb8ee4ba0a03ebd82328f63bb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["23f5f2e46a5748888020f6da47bb224d.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["69bdca2bc97743b59596149fcbbf707e.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["c26af48a2e344acf85c45512ddf4e144.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["034fe8ab8e284b498b8b6681dc1e5200.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7bb4822cc5584e61b759d616efee4cde.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["dd2d8f41fe1c4dcd9257662245ee993d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0ca8d6e2dc9045e1bfe9402a48306bf4.5",1754146935387,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"572f63ac344d4d29b2dc4ef30726fb8d.16","portalLocation":"ffe32579,fb420c0d","portalImageUrl":"https://lh3.googleusercontent.com/Bbn8E8KKDUafQHEDC1iJWJ0Trz2ua6s8E6aiRTdDp0B7Phpf5Pc3qUGRaXEfrCF1X23rclNqoeg2fYHVWsw8dwDJGFDIsHwbs8X3yeQ65MdN","portalTitle":"Letras Jujan","portalAddress":"Gruta la Virgen, Jujan, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754146934830"}}],["1de98e0075034b43b2557e21a186128d.5",1754162978324,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b1b3fa6479624b92bc8d4ddf11a26174.16","portalLocation":"fffc7e79,fb47ffda","portalImageUrl":"https://lh3.googleusercontent.com/Ske3C2zR1uBUnJuiHwAzlcFSZkt4K6lYT836cwN-D46UeFQ6wlnLRTlEd_XlSNsFqzGAPlnScQ_5Ie4ePxGRcwJCndgKNXzLrSAHrh_2-JybJw","portalTitle":"Pileta Del Porton","portalAddress":"Vía a Quinindé 7, Santo Domingo, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754162977687"}}],["cc3e2e4814aa4784a1f36734e9ebd33e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["79fbef117d61451ea456f62175111fdf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e590729f6c694851a2012283a7e55cdd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9b94e15824734a2eb155149dbebcdcf9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["04f517b6cf3d4d48a247b396b6d2fcdb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c0c1ac391516455da3ad469efcf76eff.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["eff2a9bde5894e00bd5199540862a0fa.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ad343c4b810d4c94ab447a63163433f7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a188daeb2fb84b4db459d66a7f699246.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["c41759ead01945a981526ddcbfb7778d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4691dd46a7024129a5c851899f36e81d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["b6fc5b467e044cb8ae7a5f4a85b51bd0.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["9e872c6c42a54de293761d2d7b69ce11.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["1439a64816534a8c80a3f6146de7715a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["248d99f666ff4ec1a47efdbb4dc52ff6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["95af595476a44b91a5dc4e0b55d988e0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4396c148365a443bbe81e9c3725ac105.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6ca327e8ced84f639a60cccf9d5879a2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["2dd067df724b430baca3a1523edc9b48.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["526e79ca25104442bbc79ea8092d2dcc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0516e00935284f9397db72bff693b3bb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3dd17ce599754f85894154e59c3a1616.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8ae0491783294fdeaa733e06a6e0c069.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8c4e33a11d8e42188b79daba5d144bd3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["eba2b21dbe214f0690fbe9ebbd9edee9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9e8efa09981d422db74530a9ac651e03.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["698874de2f2c48a6bf863b8ea12a0a01.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["aa01463013944b5498339840b0ff8134.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["2451c4ef195c484a830af26c3119d051.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["827afbcafb084e0cb30f70ded3057244.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["61fc566a434c45bfb39f137b19b0c9d6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cf45c19f43bd4f6fae46a40d9a11f124.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["357ff5b8038f44f4bf11f1164bf66f85.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["c2721f3c47a149408d6f8ed6b7c0943b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2c0b22ad3e8748ea870e7fca4c07ef83.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["950b6564432f4bb2a8db1452edb33701.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7900f48e80974801b9cdfefc2f540b7d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["49185102a2f0410aa3a56cf5df01abcf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ef539c7596044841a864fc8ab73f3cac.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["369a6fcfc7c346f98e996a7abdea44b7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fd05023a515e43cfa48d3089e9fc3879.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["9d90cf4134b44655bd061cea7415ce6f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["68d715dc6adb41aca234919b4e436892.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["aca507fd020d4f3c9eaf07b3ff2e8f1d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9cd0bb55bb8442a386ab83d6a1d8c524.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["13edc870f9e24ab4a884fa897de12569.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b705ffb790744ef69547891677daf024.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["21919be042f94e55b75a56443bbd75ea.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2515e4975f7e4c7ea5aec78964c8acc5.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["96e62f7beab342b2b6f603486c4ab73e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4a8fa0cd679a49e5b39425746d027970.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b25dc93092f2461681bb4d00b0ad3e77.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["bcaa19fcdeb74f3a9f7e758f73ac5dec.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2c068348f2a1415198002eb68b1b2994.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4db73c2fee45459aa40473b577141632.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["7c8ea21e230d4055a8df3500e19fea14.5",1756584193421,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6a97bfa313e24bd68ad53a150c312710.16","portalLocation":"000d5d9d,fb3e008d","portalImageUrl":"https://lh3.googleusercontent.com/KL8cp9tD0Skaa24S88up_LbAuiSNpm7Y1OIZiQIXWnfbi1seTDmnDFoYr3g8pAuarv3Voa2OZSESs-Lry9jDCIsAsCBW_CzuGgYzNTxhBFcW","portalTitle":"Monumento Santa Rosa De Lima","portalAddress":"Ruta del Spondylus, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1756584192693"}}],["9d6302f32981401580e4205b30d95071.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0635382c36f94c148a631d376925f09b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e2a933636548476c9aa4cc17cd3722ad.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["984cdbfe90694475abb251bc6c264cb9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["b38605f16dca4ea7a876c57f12b72c95.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["117bcb9d3a154d878411e2d392591332.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["a39ef1bed15c4bf286cfcda5b038772d.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["07ded1378ee54b80a03b194db7f93e6f.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["19452a7f54e14bbaa74a28e3070e0b1e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["47bcc0c57da74a4f9631baf1ea7061e7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c7e844bcc14e4d5087545df612baee7d.5",1757175475435,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0c962a8251773b40804bbd5e0df1d703.16","portalLocation":"000dc498,fb3fd11d","portalImageUrl":"https://lh3.googleusercontent.com/SSZe7lLbk7PrfyKEiQQgQdwDo33nSC9v3JF-vdjk_Ix9PFAUiCw9lROKMScf9GyAA-UZHOdR8zh77w86-K02MElRaYytDX7eLLbJxeG4gWU","portalTitle":"Cancha De Fútbol Francés","portalAddress":"W72W+RFF, Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1757175475422"}}],["fb431ea24e5b42549be7b5ba0466a3ce.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3d8312e4adc84b0199d727329d3f08ca.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fddeb2c369864af5a6286c40f0a2cb0d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f8a762e5799549d9969ec0def2a66d77.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2f5f5316476044dea0de12a22c752d27.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b187fcfd6c8e4dd498ce497a6105832d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4d84e0f1e02945cf8fa07c541b298422.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["9fe53d685eed4df7ad002b86cde3ef2a.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["1689960ea03d406f97b0b247c6f16c6f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8357ca81e9c94114beb94d4e40871d0e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d4da4b0ac364496b8a6a44e67e71cae9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3d8ef44e023c4e11a745bbd85d00e35a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8db3b160e2a347cc9b6ab96c6ea253b4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1affd02613c14aeeb591ebdd2865ffff.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["989274f9f8e0414e91b01f15216f847f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3ee491628a2442c285f1af87d3bd8a81.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1859442a25ef45b095f231ac5c261d6d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["0fe44f0c10e84898b9ffa3795c13b7b9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["9a12b06469f3496eb1df7d82a51ed737.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["3762c85e1b0e47619771a46f4b624802.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a52153d3f184421594a7dfa30fe65060.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f677cdcdd53447d4a85d1a2b03a9655b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7a453d42de76428b8026d2d7572cafb3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["e5c1008725914836948d03d41fc01f82.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["97451dd9559a47a98f80abdf1434066c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2f0f1b137daf484080caae19e5f83235.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["3d7e1d89ee174992804ca2dc69cc368b.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["ca63f01868194362b7388d373c7b95c1.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"A7ED2FDF"}}],["9d31589e7ea7402e8a5fb7444276bf76.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["541e5e82443d4caa8431a05aca998ddd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4197892a9bf64ab58029bf474357f322.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["73bd05cad1a1406ba9a155d4f001e981.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["93e5b0ad03ae43028882d942c26aca0d.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["1eddd5a6d6bb4080a094c3451dd22835.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fb164f8681f1461db464842a513ac2ee.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e8de223612a742339597eb565f688506.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4f645224bbcb440e8c3712b7f96a8bd8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["da9ca7d906c542509e11460ed8e6c611.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9d8f22616a5d4597a1a026d71d18df74.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["22bf4cfd94814c60a29ebc2e234a16df.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c8a0134db1ea4f0cb870d296801b35f1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cd66538e59a0474fa5e451c166580b24.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1381b6f7a5944011bfb1ecbe8ee515c3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["da3031bfb03a4db4a00ef699c3331b01.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["785d81836f4f4ccc91f969870079497f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["69aee37c4d5f4192866c0d9f7246e783.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a359e003fdf74693879f98c48a7bb5a3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a28fbcbd62024abe9b6b51196d5b24d6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["90a82615954b4812a0424c3b77531425.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ccf0fd02cf3e4967b5b850958570bfd3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0027544b36124c5180ecb93b8ed6fad1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a2fe57702e904779a2b39aee7a61f360.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c468d346aec04b61bf33ba92f4bbcaea.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2d578c56ee0f432199b2f33ad265bd20.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1dff773fcb0140219fe6a85fcc173ec4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2d619c3fba584d23a2f10478fd161f6d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["77180d378b1a46c3812bbab3bdc27ee8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["87b8c5c4027c4c7994449aedfb11ceb1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["134335191d9a4046bc278db2766cc0c4.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["1796b2555e18402ca3761a4fc23d8c32.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["362c028bc742479eadcfe89733e49532.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["8843a3fe56ad4471a4f5c31c19d77de1.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["8a3d6d750722483393dbcaa78a42751e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["710fb0d253e543c49dd1707b3fcf410a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b570763f37904e3fb5c921b377eac17e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["65c07eda519c4b4ebebb2bd3a8f0b467.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2e85a8e4491542a88fb6c1c96924f5b6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["41e888921bb84a05b067a83681b7dff9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ec39845d883e484387447100a21b954c.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["af9dabc9079c4accb87e9240eaba9ac2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["61920476a2b240d1aa36df0bc530f86a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ff63c7cfdb9a4e7f808ba8b3f9064757.5",0,{"modResource":{"displayName":"Turret","stats":{"ATTACK_FREQUENCY":"1500","HIT_BONUS":"200000","REMOVAL_STICKINESS":"200000"},"rarity":"RARE","resourceType":"TURRET"}}],["32bc4932712749e490b7fd6963381522.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a3b65853fda945fda6fc28802a401800.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ab58f995c6794162be2526d3faa8a27d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fb9bb3ae180049ddaca8f7d982d72a30.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["681f5720ddcf4e8ab4259bbc3a14b1fa.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["94c5c1333e1941ffafba53c411c4489a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fe35caae423e40d2a69dc3c37b91c801.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4a3b6a3b566348ed8748443a18cd6c7f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2d35e27577ff4318afe5375f09fbb4e7.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["c1f9709a31be467ab0bbd822ea35bca7.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["2e52f77cce7340f899b52e040e4a681f.5",0,{"modResource":{"displayName":"Turret","stats":{"ATTACK_FREQUENCY":"1500","HIT_BONUS":"200000","REMOVAL_STICKINESS":"200000"},"rarity":"RARE","resourceType":"TURRET"}}],["ee198a1d6f1c44e0a953afa011b42a9e.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["80e37552a65149b3bd3d10b1a65ad3b5.5",0,{"resource":{"resourceType":"KEY_CAPSULE","resourceRarity":"VERY_RARE"},"container":{"currentCapacity":100,"currentCount":100,"stackableItems":[{"itemGuids":["ab8aa5aac79a42979feb0c4b1b4e363c.1b","055cea1dd83248db9c78c3feca32acf6.1b"],"exampleGameEntity":["d4163b22f5a246d29ce546410023bf8a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6db9c9259d833a92b337a38254aa79ed.16","portalLocation":"000db3fb,fb3e4664","portalImageUrl":"https://lh3.googleusercontent.com/RDJ4f0H5H2m3gM1lPkTxXySHx_vjnCySGbR_zuQYNv40Xr1rTmZniDh2fwYh51Azm6K0rLk0_SCJe53N4Tv5Tj1AeICnKBFV_jRZRmaUjup9","portalTitle":"Mural El Pez Koi Dorado","portalAddress":"V5WV+WVW, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725882121059"}}]},{"itemGuids":["c3d1abd1e2664618bd0efb661d999a7d.1b","4cbfb0db4e81407b9e406607e50bd9ce.1b"],"exampleGameEntity":["21a53567e55b44539d1d1184a6c2a5d8.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0a0fa6fad1683199a3aebf9ad00fe22b.16","portalLocation":"000dc020,fb3fc90f","portalImageUrl":"https://lh3.googleusercontent.com/U4Xi1vRY1sJVxjpN0ciuKFA7OwoDNmoD_LNOrp-7gkvOO7UmUnNSOrAltkVY-8kthEjN4wVZ53ans3zipBFCGrbewJq7PeQ2L0C-1fkbFDQ","portalTitle":"Mural Estandarte Ecuatoriano","portalAddress":"W72V+JG5, Vuelta Larga, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725882121053"}}]},{"itemGuids":["8a3959da857b4b5f9988e2e6b7a31618.1b"],"exampleGameEntity":["ebd6847a9ff74f029eba63fc997fd2a2.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"df92ae02de6c3d599b9912e432622c87.16","portalLocation":"000d4899,fb3daa91","portalImageUrl":"https://lh3.googleusercontent.com/y8K-fTiJVzJHQL3b2pKcMNQyW4YxxJcMmy35m5vcGT3MzOpVMA_4YL7tgw9ZOo12GcCPsQXL2bd4dJMiM7_Yv24bohvU-Io25f5aRUfb8Aax","portalTitle":"Mural La Esmeraldas Hermosa","portalAddress":"V5C4+776, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714069787292"}}]},{"itemGuids":["acba50807e574b30911969e71b5c5700.1b","827f7a1ecf4f49f9bbbf468618ade174.1b","bf5bba7190cf400abc699ef46272e153.1b","24edfe3ee95b4bf680dd0a18fcbd9e28.1b","bf75e23161c84d8fafa00a873cb78079.1b","7e75c96b28dc42b5b78848961ab21f05.1b","656fdd1e144642f8a489abe5546a4faa.1b","77f4445c8ded468ab1004fe4aacda520.1b","38c94b1dad624757b07b0fc8827ab7da.1b","256538131f134c4d8f6c78e3bebbe477.1b","42fa1c182b0e4b3b923e2e4c72a6d83c.1b","64f0a76f24194d1d90ff47a27c7bcd98.1b","a0fe636cb99f48e393e3e1b175d80748.1b","267795744020446396f2b7e0b7133138.1b","5b70f65d3cc44b87a969d9f0c5dbaa42.1b"],"exampleGameEntity":["0ad9463f411c4dc8b0ea3ca5edb874b0.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"da0572f846424746b9a812ea98566b09.16","portalLocation":"000d4d7e,fb3d8c01","portalImageUrl":"https://lh3.googleusercontent.com/2PiU4jyl9pdVJK23vo6Kp58YawXIVZH61kJpZYlnmb2FLGFsggw4K5Cr-K2gpj2paqK9Df_p95cSQ1Aho6-xZvImm5umk69NiCIzm0BiVvY","portalTitle":"Loco Max","portalAddress":"Puente Peatonal, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1745344754184"}}]},{"itemGuids":["7113981cb8f64bbc874ed394826ae1e0.1b","8cc75e7276cc46e498753719ddb0a6a2.1b","e03914faa6c2476ab576854622afb687.1b","242a7c0e6df0440ab89d1007c8e9c17d.1b"],"exampleGameEntity":["4ceaccb735f04ce1a51853d3f2e34082.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7349ddd2f16d37408f60f43b88bde7c6.16","portalLocation":"000d48d0,fb3da926","portalImageUrl":"https://lh3.googleusercontent.com/U1oSMZXvAVQjE7XsH2UtwPwfdKNz-79L8dmimSv5aeT4A1FX0tqOrJ4T8x9Geh-4SqqDraMENPOUa14UWlCyqi2iqz6XVZvc4KMD5fjnXKvokA","portalTitle":"Mural Pepita","portalAddress":"7, Las Palmeras 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090203495"}}]},{"itemGuids":["c7436d54828f482c91d82b488258381a.1b"],"exampleGameEntity":["5e74b58ac2a8437e97ce6c4e275b6db9.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f112a5e6bfa24f1f95c8185e3a2ca0c2.16","portalLocation":"000dbe6e,fb3fc74e","portalImageUrl":"https://lh3.googleusercontent.com/8esvfRAIdhlL0pQs3BBv0uoXVB9wvJcXEEOlXfn4T3hkgZEpMWfvBqmgwHVYZ-o_JzPOgOE4c9Li1cERvQ0EPIq-QkT_S0Ka2P2K6eJIC_Q","portalTitle":"Bandera de Esmeraldas","portalAddress":"BUEN PASTOR, VIA ATACAMES KM 7 1/2, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1726577731105"}}]},{"itemGuids":["d24bb831d0c94b5395784a46b8c66629.1b","7c26fda59ea847ebb7ebd87830954eab.1b","9162b8c358614d95b774b443baaa58b7.1b","d1fc3587cd374024973ad8d4a57ba780.1b","61a5b32d549b421b970830f9891ae86f.1b"],"exampleGameEntity":["0245cb7260fa482897943f5754dcd32b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ad4128d3d41346249810bb5f98189305.16","portalLocation":"000d572e,fb3da4e2","portalImageUrl":"https://lh3.googleusercontent.com/uwkWpw5xYlSIDxC1OJVzzTPF04YXWDwXP43WBPxuDG-spVHYXR2l3beIxyoSD9QZlKpIQKGHSqe_CBMBe7IeGWaB7v-q-wT_UMy9Ab9UAho","portalTitle":"Pergolas de Descanso Manglares Atacames","portalAddress":"Avenida Malecon 21 de Noviembre, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1726577731107"}}]},{"itemGuids":["573ddb7c4baf4a0ca787cb100413553a.1b","b93c037e1bdc489ea6877c94c5406eca.1b"],"exampleGameEntity":["48e186d7c80948749631fe48f928316d.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f4d1298ef0153a36b4eb094090243aa2.16","portalLocation":"000d4091,fb3d9c56","portalImageUrl":"https://lh3.googleusercontent.com/FTTpgBvXVucdlofJaWjuuoJPANWGeiu1tUVko23iok6mhn7XWK2T24rP7I3E0gwTO4_EaW_KrPI7weQ0-pBlW9gAluoAnFaj3QmofHizjDgVUg","portalTitle":"Mural Pez Abisal","portalAddress":"V592+9PM, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714069787291"}}]},{"itemGuids":["7318a65ea20041d08f851d65694b06db.1b"],"exampleGameEntity":["5213b6feec004c3ea56716fe85761035.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"372e94e3e4ad49ed83a12355f9ca26a5.16","portalLocation":"000d4473,fb3d8f2e","portalImageUrl":"https://lh3.googleusercontent.com/fBXVAzdhi8K6u8MA9KkUfsDJoq3EXl-znP9plB-DbEhS0b6F7zajacJQ3Iy32yMjJhPV9kJQ5qoaSGEt1DmC3r0mxhNL93PthieWTXuObfDb","portalTitle":"Virgen Mexicana","portalAddress":"2, Prado Atacames 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1710173718630"}}]},{"itemGuids":["8b9b8751ece0418393596dbae54256cc.1b","587ec44aecb549d480b2a084f0aca7ab.1b"],"exampleGameEntity":["e40bc3c58e14429e92f6e01db9ada9ef.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"cea96f37f3af369ab1c3f5f58a3a014d.16","portalLocation":"000d4026,fb3d9b7e","portalImageUrl":"https://lh3.googleusercontent.com/Mc9Tbx0TE5tdB8guwGGUjT6NJdmAvXs9T_oU66Iv9zPslnI2fII_ZgGd_isr92VKNyoTfko9-w7mzp8hra_Lo0MKHRTSvRNIBhYEWJjNnmA","portalTitle":"Mural El Submarino De Julio Verne","portalAddress":"Sexta 2620, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983214670"}}]},{"itemGuids":["c763f625353c4110ad0848f994be3a0e.1b"],"exampleGameEntity":["eb2252c98fb5455cad86ba155f272983.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7d0942efd53f37919059002cdd894e52.16","portalLocation":"000d3ed7,fb3d851f","portalImageUrl":"https://lh3.googleusercontent.com/nCKCqD6m44JlbaY5SXUhJA4hNfYiOzrka2xp9eFazxJS_ZrDrsgwRTtwdDEWcXgHYiRPxlAMGXGH0L0y27irzKlRCxAbLu_U9dOLZqexOIMh","portalTitle":"Mural Santa Rosa De Lima","portalAddress":"V49W+48V, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1713635018747"}}]},{"itemGuids":["6035bef01b4a43b29c3e0a85beaa7e21.1b","45a87ac34d6d4921856e62fb54689384.1b","063878bdb2f740e1b73e2a5d990f6ca2.1b","5be5a5d3764f4c909d142d78e1f20c50.1b","5a211095073c485fbd4816bff201339c.1b","39d3a927cd3c40d19e0e73b3a8d5d41e.1b"],"exampleGameEntity":["68abe33cd9744c32a3416f9fd7c17507.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"27fa807ac95b30fdaf91ec46fde602dc.16","portalLocation":"000d4714,fb3da66a","portalImageUrl":"https://lh3.googleusercontent.com/TWPV24I8d7QSxwuTV7z9XL1O-JUdgbEHsvluB0CjBjpqB4IN8GRDvr3Q6SKx1kd1uYL26jFWrxE_xpETlDTteXcZ5jbMY0GBCxiZybEARGNv","portalTitle":"Mural La Vida Silvestre","portalAddress":"V5C3+3M9, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714069787293"}}]},{"itemGuids":["3999cc97a4c847d1964ccbd4039c4752.1b","24238cfe8e594cedb9f94be8ab0ce5ec.1b","28ca7115937a4225a922663d72e01090.1b"],"exampleGameEntity":["7390f6fa13dd4e9e8a2c397afe3a1b0c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f35ee204d1cb3efa9eed8196fee7dfcb.16","portalLocation":"000d5d5b,fb3dad88","portalImageUrl":"https://lh3.googleusercontent.com/UYq3ANk1wtyRJetQ0h8ruNLqT0DFHndKKi0nKHOIyZJhcnXdVb6n0pWKM7y2DSCwxPajcR7rG9D6ob0KbhO5WX1KQilfCao8HAX_DMGo_jnZ9g","portalTitle":"Mural Marimbera Rio Mar","portalAddress":"V5G4+G79, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725882121078"}}]},{"itemGuids":["b334cafdf0844dd891d0927ffc07d5bb.1b","ffb6dc49611d498d932f87a995ae5766.1b","822f9b0956da434fb1e2097afe57c69b.1b"],"exampleGameEntity":["70f405e380f948068db535235e240978.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"53033d7727c7433fbf4672744e2c046b.16","portalLocation":"000d4c43,fb3d93ec","portalImageUrl":"https://lh3.googleusercontent.com/8tSVjkXhuM_eskaoGbpKd56rJ3H9Do5hkCzZupsQKockPxmCEHpzWVvG1qxwypdKA84Lr6WIm6loiQDLmWN1ES3NBM2SNpsZLiCRJxR1hBZt","portalTitle":"Mural Acuario Atacames","portalAddress":"Puente Peatonal, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714697919493"}}]},{"itemGuids":["c370c193298e4acf886d019d5f90fb3f.1b","ad3a1bb857144ceda8f6404af0923998.1b"],"exampleGameEntity":["2460e976edb74400908e7b92e7cec6d6.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6a97bfa313e24bd68ad53a150c312710.16","portalLocation":"000d5d9d,fb3e008d","portalImageUrl":"https://lh3.googleusercontent.com/KL8cp9tD0Skaa24S88up_LbAuiSNpm7Y1OIZiQIXWnfbi1seTDmnDFoYr3g8pAuarv3Voa2OZSESs-Lry9jDCIsAsCBW_CzuGgYzNTxhBFcW","portalTitle":"Monumento Santa Rosa De Lima","portalAddress":"Ruta del Spondylus, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1713635018774"}}]},{"itemGuids":["24bd46d11342420bba19aa4e82b2115d.1b","354329bcc6d94ae1a2a6af79f75a80bf.1b"],"exampleGameEntity":["358374b9c3ad45af9582696cdbd00c20.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"593eacf87249464ca1275209729226ef.16","portalLocation":"000d4527,fb3d9e85","portalImageUrl":"https://lh3.googleusercontent.com/ZAij7b5Fi_NMJqsHFGNzvrqC-FW_0iQvcODqua2T8L8aAlVGe1jklxp8emS2kHUjynMbnmMjZyW_qen-pThPbz59P1mP1AjXEG_ne037eH7ajg","portalTitle":"Museo Arqueológico Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983214671"}}]},{"itemGuids":["0afdfb2281dd4eee84a2d2b4a52e720c.1b","30cea0f9756d408397b641b3f7c145dc.1b"],"exampleGameEntity":["402f315d039e472c9ba1d6a0698714ce.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0855e71cd949433e9da4c1700aa6ec68.16","portalLocation":"000d3f16,fb3d7e0c","portalImageUrl":"https://lh3.googleusercontent.com/qcHfRAxb_w-OOjkJ9e20jcDLz_faOe3W71REO0BgYhFOp7W18gYAOfdemFf9Yvfg3Ul6xhpye89872_xc69g55CcMzvoSApUjZOjpSFZ7bY","portalTitle":"Cancha Sintética La Granada","portalAddress":"Casa Playa Atacames, E15, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983214669"}}]},{"itemGuids":["7287e0e9ec804bc68180fd479b6ac7bb.1b","ae46551d351b4041b582eeb0c1fa3098.1b","c2a758727d514e44b822dc1692782207.1b","7fe63836c0e04109b584b2d63b9a2efe.1b"],"exampleGameEntity":["ff54878ff8d7411b9ecff216c523e770.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"3d5b038beb6d3213b65b64e4618ab0da.16","portalLocation":"000d479c,fb3da7c9","portalImageUrl":"https://lh3.googleusercontent.com/k-7vn6ilN2eOq0P_-b8foIS1caMlBUIJz-ElqlG6YRD9hpAr3xN1SQqa5a2zr8c5TpkNoT34GsUeqqglbi_G63BwZCgpN7Ylf94sr1w8Th2V","portalTitle":"Mural Mirada A La Naturaleza","portalAddress":"7, Las Palmeras 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714069787281"}}]},{"itemGuids":["81a7c53cd32048e5b1976689ebe81624.1b"],"exampleGameEntity":["f163b3992b764558b228567f55932b37.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"93bd790837ed476cb32752236a87482d.16","portalLocation":"000d224a,fb3d3725","portalImageUrl":"https://lh3.googleusercontent.com/kaxfAMDwe-IUEJ6ByiAQ-ditQvSlXlDIMctvFsjRSYE4QhVY9YzxdC902jhAvgxZL-kuD-KijD1NamLuM0B8RarEr0tvigs5SaSa_xiMIWU","portalTitle":"Estatua Nelson Estupiñan Bass","portalAddress":"Unnamed Road, Súa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1726577731093"}}]},{"itemGuids":["8ef38667a1f746a28dd3a7aba4a6b7b2.1b","3a45a768053144abb719f249717e0f22.1b","d384b19d167440b9bccda3c8f8c37ed9.1b"],"exampleGameEntity":["584808b5070c4711a3514c174e53c67e.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5c6032262e2c4c26a89b1fae458c9f49.16","portalLocation":"000da70d,fb3fba2b","portalImageUrl":"https://lh3.googleusercontent.com/qNhw8JJdjmiSICyRfrxAZS0Kml672P6gWhhPSN07Nv9z6kwkdHFhvw2wHkqk-sVCIbjj_kxKhQbWrmkspAZNsm2tizSzYM-mZOZIJCCJK5oY","portalTitle":"Iglesia de La Virgen de Guadalupe","portalAddress":"17, La Tormenta 080119, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725882121065"}}]},{"itemGuids":["d06acab660c34a3e9d55d64f94b21cef.1b","109b7e91b0d64caea922bb5518cbe4fd.1b"],"exampleGameEntity":["d56ba31539e74bc784dd79d661851986.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"580a99653c8b342c8b2c5fd14f951ac4.16","portalLocation":"000d480a,fb3da8da","portalImageUrl":"https://lh3.googleusercontent.com/844oDQw3x1leuv3krWXGCxTlN9buA_evJJE1kp-JGvmtvwPLWCcNi-jYMwS9SK6RVBbgHsyqcc_Pbu64A7wYMSKehrydljPATa5fp8sShTlTIA","portalTitle":"Mural El Águila Multicolor","portalAddress":"7, Las Palmeras 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090203493"}}]},{"itemGuids":["4054e6c181934ee6b82d99b179cb7b20.1b"],"exampleGameEntity":["428c1db7cfeb407ca1d017aced394520.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"3791397a23764dcd8f5eb8206e9005a9.16","portalLocation":"000d4455,fb3d98f6","portalImageUrl":"https://lh3.googleusercontent.com/oRU1sBlpUHl1aUPti9SwY1Sh5tVTJ5CTpOsKwrnVH7dmKwo3-cMDe5IZVWbleoJasIdpQ65adN_g2NQqTBpRwXRbrK6xz1kvCbzATJGXNy7p","portalTitle":"Placa Reconocimiento A Luis Eduardo Casierra","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725996350714"}}]},{"itemGuids":["4fd4e392696f4cc08a0062ea76e8fcf3.1b"],"exampleGameEntity":["b9faa6b0fa2542bfae7b635916aa4cb2.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5824cd2ce7913ef98f95abf069d26236.16","portalLocation":"000d3d60,fb3d80b7","portalImageUrl":"https://lh3.googleusercontent.com/HX6xQFZ8Z9lUkeh2IoPkRCP26vto4QcC9lzlUDtqGih468pTPOGDmQ6_jekCCB0d4JxKUc-WWaqWAGwcZPiW8gC7HLM5Z_uI2CBRu0mo_Es","portalTitle":"Mural Dama Azul","portalAddress":"38, Vista al Mar 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983214674"}}]},{"itemGuids":["c45a2e6ebc2342ed9345414689322dc8.1b","357b8d6f937c4d41afc70de78c8f9db4.1b"],"exampleGameEntity":["bc27fdaf81514cf88b225e6542c307c0.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b9df9220925847aebbb127b2dab0e3fc.16","portalLocation":"000d5ac9,fb3da0f1","portalImageUrl":"https://lh3.googleusercontent.com/yf5sD1XM9ryH7QEs4EJCk7LEtlI6eabcj94gySfPqg1I98j3xc4fTrGLKvI2yyiXPQj_zsMRiMOqtSRjz60KuuQ94DITcCNt-BWoyUlHyX0","portalTitle":"I Love Atacames","portalAddress":"Cayapas, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1726577731102"}}]},{"itemGuids":["8d7bd5916d174c2db8c44ccdce8ac0ae.1b"],"exampleGameEntity":["9cfb3b848bca4bb5bd4b00b34fb72050.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ba5b19b617ad30a68c190e138e026a21.16","portalLocation":"000d3fb0,fb3d9c0e","portalImageUrl":"https://lh3.googleusercontent.com/DCeuncgss7v4VlFvihHTtpScPGG-Y9vR2u6Bq_PY3eHhmfWW2xgMPBkKQ9Qd2tgidn__lxRAySbGc1d1k1_LBOn74P0_IaE4JZTot4NFzyoJ","portalTitle":"Mural Medusa","portalAddress":"V592+9PM, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714069787279"}}]},{"itemGuids":["45786c65f0964312bd667ca942c8c5e7.1b"],"exampleGameEntity":["6397ee8cd8d24849b6143db5e4c6646b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0cad7df4472a4e589e9ec0d3b6ca0755.16","portalLocation":"000d59af,fb3da31e","portalImageUrl":"https://lh3.googleusercontent.com/J_DvTHCVTKCuamQmhtzi3faQQd77u-SG8oxkUyz2rShPou7iulkfmbMqPxuGulifiiIEvEEGREmJZJsm2KHNhrQhKXcFj3r8Z_emC2Ez5e0","portalTitle":"Casa Mexicana","portalAddress":"Las Iguanas, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090203506"}}]},{"itemGuids":["a51bc93f76c54227a83eddebeaf841af.1b"],"exampleGameEntity":["2a305515090846218a5ec51ce80c6665.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"346aa7e34186306a8ea8148c08150d40.16","portalLocation":"000d7f3b,fb3e36bf","portalImageUrl":"https://lh3.googleusercontent.com/APGV6SAVXUrnXjsuVCeWHmLg6h2Y0BHHPNxHeG2mttZ4CPyFzSBa2AxaPr_kgyV2AvDN89Ap-d9LuVkR0z4rteordVSdSxGcv41r7-wlZ6g","portalTitle":"Mural \\"la morena\\"","portalAddress":"V5MR+PCR, 1ra Principal, Tonsupa, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1726577731129"}}]},{"itemGuids":["10846d3943864d288abf74115e105106.1b","d6a12b836f7544668e10155916695929.1b"],"exampleGameEntity":["d2ef62e610104e80bdead530c8033360.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"cf50d791cb8e4ad4a2c23ffff066ef12.16","portalLocation":"000d4355,fb3d9e1f","portalImageUrl":"https://lh3.googleusercontent.com/Dsi1Hnml7M23wzOiOAbkDaeEo_Rsax7rSXDE7U_sYoXTd2JknJl5PzRAdAqfR8I2_nxtdLUVI0WzUXbbT4kGS3HPD7TDu0e8r3fBxI5mwNH0Lg","portalTitle":"Pedro Vicente Maldonado","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714069787297"}}]},{"itemGuids":["0be949da2c1e401ab02932840775b2ce.1b","677ccb56fd224095adbd456e6d0362c6.1b","b48e2602a45c4498be17eb27500f125b.1b","ac7ac8b04fbf499abcd8a95a135ca737.1b"],"exampleGameEntity":["dedb2a9f52ce4665acf15a7985747a09.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9badf12407d6388db245e92fd4a26cd1.16","portalLocation":"000d474e,fb3da6fa","portalImageUrl":"https://lh3.googleusercontent.com/O31wBwr3ogcjHndX0bHHw43ICk8qlIXM9NOA0_qVVZE-yRaqA60dPBvd2LRlz3NQ3JcHPg-tCZmVJ48iDOkv8wtT_KRP1WLnxhIJNUHfUqo","portalTitle":"Mural La Dama Mariposa","portalAddress":"V5C3+3PQ, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714069787284"}}]},{"itemGuids":["19800f79fdd44ba9a3e7f5e7ff5c3ec4.1b"],"exampleGameEntity":["ecc47e853ebc4c969d449e37bce0235d.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f7133a21802a4bbca9c5c76132fe6871.16","portalLocation":"000d3cf9,fb3d7f63","portalImageUrl":"https://lh3.googleusercontent.com/9pXItAuRHw_xlvzzgey3KvlrhPANY9Z8-J3N9ZX6npPO--LUrEPCCaHrHH0rM5aweJCkpMgdMQHK6oIyP-Lqs6P1UxZV2v0Fw78G9qLVp6A","portalTitle":"Mural Alas y Manos","portalAddress":"Casa Playa Atacames, E15, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090203518"}}]},{"itemGuids":["84453d56da0a49f499a035dacc0b4b4d.1b","b7e1f069b14a4fafa9601c60a2120b4d.1b"],"exampleGameEntity":["842e25a4b37f458493e7279336f4b999.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2a42e58c64834eea98d843cd5eca95fa.16","portalLocation":"000d579a,fb3da3ec","portalImageUrl":"https://lh3.googleusercontent.com/LKW9q6fCWgmwwkZNYtouGKnOWovS17utl26TLFa681sjsgs08dDQESPq1Eu5j0F-FBoPuWfRLAVpetMptgp0K2ydoCYb3j0CH2ZDlYV41ClN","portalTitle":"mural ballenas manglar","portalAddress":"Avenida Malecon 21 de Noviembre, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1726577731099"}}]},{"itemGuids":["159c6ccab79149bbbe7f6af3e75e388c.1b","df28bd56025c480d98aebfa3917ee6b3.1b"],"exampleGameEntity":["17524f8ccba640c09c06dc5e3347f15b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6466d6daeade4ae8bb16ac88b28126c3.16","portalLocation":"000d607b,fb3da9ff","portalImageUrl":"https://lh3.googleusercontent.com/ES-Sdy7Jatdq1Tg9jrG4yASGQNFeIGtWtvIOLx-ZtW_C-HrnaG4iaZk5dHzzNuUkCno5KtJqHp26jplcJCmhKHvbsVBRF60yQLe_rOjp07fO","portalTitle":"Torres MARBENSA","portalAddress":"Malecón del Mar, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1713635018777"}}]},{"itemGuids":["f2f1821e099546e69f43572e83272f94.1b","9bf431d78c0149d7bd9d4cece305ade8.1b","869adc08e76c479fbc8bb3b7aea6e9e2.1b","5f754bb3061244a8b15ed80f0b51f171.1b","e666bb64110140718f90abd8eb0cd77a.1b","6ad239d8061140fdad8c14e16e0a0c6c.1b"],"exampleGameEntity":["78f5630ae9904059afe097e2351f7aa0.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b782f038a04f3b8daee61a1452dfef29.16","portalLocation":"000d4856,fb3da805","portalImageUrl":"https://lh3.googleusercontent.com/Y-YB17QUjU1sc9CfmPDIzcMDSPZSaCXHM-OoJHzo4YdeOusZ6QVUo7lqk0Eqot9v2fLRJhmbjX4Dlrelu2oq2rXLRBx_ow71wcCKHqg0gbk","portalTitle":"Mural Ernesto De La Cruz","portalAddress":"7, Las Palmeras 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1719359614453"}}]},{"itemGuids":["d1824ed45ff6434b81fb4badc3c87743.1b","8469c718c4b84a78be608439c1cfb81b.1b"],"exampleGameEntity":["82bc232d7c494b2a9dfec3097f2937eb.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"a0d92daff6f33f9ea04150f36a0452c0.16","portalLocation":"000d414a,fb3d9cb4","portalImageUrl":"https://lh3.googleusercontent.com/qXpRzPLuc5bFljrjKfSE8yMeIO-aNMQBVkYs24KT_82JZAIdOv_OEWvVQLF9uU78XP-3j0ZiwXUVpYGxoVW_YJyp24S-IgGlw-WOpCEc_754YA","portalTitle":"Mural Atacames","portalAddress":"V592+9PM, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983214666"}}]},{"itemGuids":["efa392acdf8849ea95f15c3ea76cc050.1b","041b997b7925401290d247264e8d88db.1b","243c43728d0a46da9b5126d3ea97b194.1b"],"exampleGameEntity":["d01c069643234598809c76f5025fe8f9.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"3c795410dc903389a06165e60ee2a0ae.16","portalLocation":"000d4863,fb3da9d9","portalImageUrl":"https://lh3.googleusercontent.com/pyP02xoQjR0VSJ7sJOiuDtL4uJCC8zYXjpESSGTZvSXHzY1zryczXAzLmJYdjHISNEVYJeoLuFhtqr71MJvgee1ICe-fjj0hLbs7v_zUepBd","portalTitle":"Mural La Bella Esmeraldeña","portalAddress":"V5C4+776, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1714069787289"}}]},{"itemGuids":["3c4b01929aeb49c29ced365845476ba1.1b","3b8b839f15c049709bc77db3389ea918.1b"],"exampleGameEntity":["4cd244aae70f4ef7ae1515a563ce4434.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"afb63cbfeee33c73bea23710c5811ebd.16","portalLocation":"000d445c,fb3d9dd1","portalImageUrl":"https://lh3.googleusercontent.com/okIJAaqnXaXSfcaRrn2xq4Lnl_cditoswSCcvTi8MCs-enhy1WAZZmvt_RRT_siT2Lg7eOM_XGCnYyaEuXwW0mLahoUqdmseuBUm3nhPHdi2","portalTitle":"Fuente De Agua Atacames","portalAddress":"V592+QQ4 Atacames Central Park, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983214668"}}]},{"itemGuids":["dd72375e860a45e491961a921edca5d6.1b"],"exampleGameEntity":["107522992a6b44d69e561ba84b6c2ecf.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"30668741f7e94b168ab7edb1a0a9436b.16","portalLocation":"000dc6ca,fb3ffd34","portalImageUrl":"https://lh3.googleusercontent.com/3PJt3S3743TzKXBCXWqNvzJFntr0Lepvut0eruQzGYSO8xTNiv9I3ac0Cy6xsJ412gneeEJ8rlz9v2CkxTdqigf4vmKD2uRoI64OawR8mGZvPA","portalTitle":"Glorieta de descanso","portalAddress":"3, Tierra Verde 080118, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1726577731113"}}]},{"itemGuids":["f1a7fc17298b47c8ba7ccf11089c73a1.1b"],"exampleGameEntity":["e7de7c568da24f0ea8ec05713bf81c44.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"da07e1a32cdc3923add691eca9d4bc68.16","portalLocation":"000d480a,fb3da72b","portalImageUrl":"https://lh3.googleusercontent.com/q-l6UAia7PRMh79EONwK-hUf2F9kBOpaj10h4W5iUIMOc2FjzIm_MWhfhz9aAO1Jl9rVP0JwIfPGwJpW_MZRJoXcj_lor0oZ-2AXYORgYBQ","portalTitle":"Mural Familia Rivera","portalAddress":"7, Las Palmeras 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1729090203498"}}]},{"itemGuids":["7095a906f02d45b68658fa3065194dea.1b"],"exampleGameEntity":["e3908ab8a8234ba48e8635680ff97757.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"e4e69a37e5754bfb8300900dec9712d0.16","portalLocation":"000da638,fb3fb974","portalImageUrl":"https://lh3.googleusercontent.com/nJVUkK3UUq3DhHg-ltW0rkYP7ENGnUrh35UJodb0LOONbX0Jmw1L9boqUlevVNAK_NKxyj_WXCaxLy_XgClWoU4to3bEyGO0weH_gCTjPdKf","portalTitle":"Parroquia Virgen de Guadalupe","portalAddress":"17, La Tormenta 080119, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1725882121073"}}]},{"itemGuids":["2e385038f9c943c0b40959571a70b9ef.1b","42ffef8a096e401c9d55b0ca77b8174d.1b"],"exampleGameEntity":["9f7f39b9f2bb46b287f2115888cd509f.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"e461d18a78dc4235b8da744dbd6035b8.16","portalLocation":"000e147a,fb405772","portalImageUrl":"https://lh3.googleusercontent.com/vi_ntNmDvZscbw4ELsHWVgnSCFKFvS_Z4ekulItjpkS5GlzlpCflBJXfsmwz6x8dJf5K_z8_i5DThuySUVVA04xGLVW45hcnmPGacKU74QYt","portalTitle":"El León De Esmeraldas","portalAddress":"Ruta del Spondylus, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1726577731094"}}]}]},"moniker":{"differentiator":"33124ACF"}}],["d8dd770d87014c93a761546b11b0d41f.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["77d29d1fc83d447fadab27a2083b6945.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["a26870be37ce4c74ac35d2477182243c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["bec94ea457a4464a895fa2f0795c6aef.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["d7ba8568763c4832915237286ac05d16.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["bc5d8c05464d4a4cb39ee92eecac28c5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["07c31398b39f4165b1308843d2e2d385.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["89a47a957b8e4066b0ae7e21c2be6304.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["066a74f7c9944cd4ae6cf4582a489348.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["6334ad946fef4007b889d06c17bf7533.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["d580eec15c95487885e42794cc48ecea.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d35c4bc45ad64c99bb945cd75319da95.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["56b4210623ad4e77b0d36fecf306467d.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["c819a2bc6a68474a8b39adcf73859655.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["8b5e9bb1c1384f209a3c4cef31c307bf.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["02a7493c7d1145ea8bb14e612503151c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["acfff274d4b04bc0be863b9878dc562f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a1df4f67ed8f409b8d5c6710c07f31ed.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["d296f89047d248d3804f417b2fe9e4d7.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["72325e64eeba4e3a90cae9ab72c0fdd2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["2a6648fa74854ec8ab8436e9c7f4cbe0.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["637e7149beda4aa1800e28248e5826ce.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["44819ca424d34e61a485a4d6fdc4a682.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["741372d7be4d4436bb5fde189f839a77.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["8418182356c94b30978d477badc187a6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["400d62f313524b9ab6cfa25f6cca3890.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["e85833c564c3468f8c75134ff067a319.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["46654b890dac468e934ed62f9c5c8dc1.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["535247dd28f34e478bba3f756b1d8259.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["bbcc15ce75664ea19bd8cf66e69ede21.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["e80bdcefab53474d94ce910b830b4157.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["7cb8646af556424087c514800c12e525.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b5f4d4b2310549c298c7b34780c0d248.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["8890134ed6ce4a2892f71edd56fa348f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["7dd5f21310fe4e5bbd5f8d28856c0c6b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["0081dff69c7e453994823a2008e95a12.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["27d1321168ee4cccb6b25647af214cf3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["463cc6cd236044b48be508c43bdcd8f2.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["a7709b848cd94e4bb5a7e4a432a3fe59.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["aa138b4714d846618006f1ad73b71ac5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["692f8c4fa9874e56990df6111ede88d4.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["18ce3afc9f144ac2a9ddd6fa6315f44b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["5e046efc5a3a4a069b678051563f21f0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3f1d1aad14f345b094c000897618b049.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["be7860fc02ec460f814c28e759f1fb2b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["c02c9abfd444416aa78f3cae5af0563d.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["dbc7f08460034f23b15e0493c1c56777.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["b1f8cd647a1a48ce98dd12c5abcc0137.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["3bb9b04d73764bfcb554883cb8cae8fc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d3c8f52148564aa5abfb3b8c500ca02f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["7b2b54493caa4c09a89473084ab5bafb.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"4","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"MULTIHACK"}}],["7a00f097f4b64af7ae533f8d9918f716.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["f547531b5568450caf9140cfd800bc13.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["3d4630a61ed4450caaa7d2d836d5f78f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6b561fe4930d409baaa174ceab22a7aa.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a0bfe22183ac42feb07f73e77358164b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["6bc138e4287442b8b271f4205e815933.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dec1683462a94fba8038b782aabb714a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":6}}],["a6bec1f435ea46eaa3eae2bb8ba440a2.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"RES","multiplierE6":1000000}}],["4df14b86ef65481592f426ddbdc4b244.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_BLM","multiplierE6":1000000}}],["a840a66708e04547829aa218ed39bc5f.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["9da2712d0f144708bc754549561abc4d.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["bebad2a45e124fe795e62264a2683e10.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["ef1ce5a0c5864492b42bc131d3b711c1.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["69531efa487f4e00b1d11ab9b93f25cb.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["4acc74d1c2e242f3b815c0a144d22424.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["b4b029fa96aa4162bd2f94cdc2750215.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["5e2d99ac5f6c427faf2eead881fd7c47.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["5ce8a8ac3d4346b6bb9133adac342667.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["a7a4f73d23334cd5a90bdc999f8fcf2d.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"JARVIS"}}],["b3779cb057d14596bbea46627bea9ab4.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["9e4959a1315840b3b5abd658ede50a72.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"TOASTY","multiplierE6":1000000}}],["0338f0cb2f6d4493b79d5081cc782e75.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["8685d8c824704a21893653ebb61d2440.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["953cf46a90274a01af258e78b45ea625.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["5bc7f0d575d54d3483c7cdb7e00df03b.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["d65917780b6841dd8482f00519142b16.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["f17c7c9d10bb4e94b9d31a8d406574c9.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["3240632739bf4b54a1ade26efddc0dab.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["4fcd86452dbe4daaaf1caae0d90b0991.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["bdc30a5b6aef48a5ac22809187c1fad7.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"F2479309"}}],["e85de4689f144ac5bf96f2bb4cd3bea2.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["486b068e9b57459b9c5cfe448beba480.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["1c73e3dc85674ab2aa82b3b7002f22b1.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["445d89b62b6b4f1dae832dc03bcc701c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["34fefd292b71492c8b81a5f1e92a34fb.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["c081dd5de9984cf3a0a1958aafc1f376.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"ENL","multiplierE6":1000000}}],["9fb03d0c5695467f8007f2de0ce9b2d7.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["b210e07742ec439c888139938ff87bbf.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["e2bb80a51b4841318be2999d790f1baf.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["b4db0f1dc29a4d5dbdf57df57a7f0002.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["8c1ff902798b485485dcc0b28285a769.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["4c1cdc1d8784495ca180e5f98185f957.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["3ebd7191d77c442f8bfb953b7aa1d5ac.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["9b77652e30294c34b53200975e261c75.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["6e48cd1cac794774bec203da82d71fdc.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["6fb5c2a231314d6790c9d2c0815816f2.5",1748223613026,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2f82a0f5323f39a882523514c20ee720.16","portalLocation":"00104dd9,fb44e1df","portalImageUrl":"https://lh3.googleusercontent.com/roGOJUSex12qe07t5TKjE0AJtvwCrt-b6FwAygoQisumxStbAXT7L3ThICTsVLH119YtQV2dcL9P8RtbEYIFyh5XNN23B89YkblsCcoRB9o","portalTitle":"Mural El Perezoso","portalAddress":"2, Tabaquito 080602, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1745940371862"}}],["49c03f7c85144eb785918c777a518d93.5",1748223613334,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"265aa85eaf104cfea5fa2e33f889b5ec.16","portalLocation":"000f5cde,fb4280be","portalImageUrl":"https://lh3.googleusercontent.com/848LV5-YlLu3qGf28WvkFV1x-Q1buJ1jLBgkiZP6vrhfFaKwIw9OaiT7T8vTNPGEqWU6S4fjGoVpW3j344ismv0m-7Z_IYrZFen7LcFGdDB1jg","portalTitle":"Mural KONG","portalAddress":"Troncal del Pacífico, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1745945919619"}}],["d3e61b41009f43edaa2227c28e2c6bea.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["93986b63de68464cb7ee47e5082a6152.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["bda3c13c917a4f878ed09c3ece3bd12c.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["97c4d80fedd74da29458ecefd9dd52ee.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["6358f0e95d284687986878d3db7594e0.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["bed6726ff8154dad856977e1644bb63e.5",0,{"modResource":{"displayName":"SoftBank Ultra Link","stats":{"LINK_RANGE_MULTIPLIER":"5000","LINK_DEFENSE_BOOST":"1500","OUTGOING_LINKS_BONUS":"8","REMOVAL_STICKINESS":"150000"},"rarity":"VERY_RARE","resourceType":"ULTRA_LINK_AMP"}}],["d9e15480b7ac4dc78087e58f8f44b496.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["7197ea36895f4b31b72c815d23bc2718.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["a19ea828b8eb44c48a8ece686b3eeaa5.5",1753299755093,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"c0ef984f32a74d75a20720ebb717924e.16","portalLocation":"ffdfd005,fb3d41b9","portalImageUrl":"https://lh3.googleusercontent.com/x1YcxPJEe0IipKI3cSEBU8e3bk5WNehzL5HU6kHh9aGxv7VRH8yfwCiFYYjPYKoZ6cA0LPah43V0mBgGMCAc8AwrPinImNmFQHp_g3yFbtsSkg","portalTitle":"Paz","portalAddress":"Edificio Global Center, Global Center, Av. Samborondón, Samborondón 092302, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753299754429"}}],["44dc57b9ef914615a7649f5f353f34ee.5",1753300131422,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"3a94a40bb7e632d2be9eb948db15f327.16","portalLocation":"ffdffa55,fb3d3953","portalImageUrl":"https://lh3.googleusercontent.com/g4xkPq0cFCC2sNj8AkQwdsai7TsMbxIyKD7MMQDiQxzHM5xeG6unXL3zU3S51af3orETQwxiYAym2bpzcMMtpVifZNhPOzD2vtOep8Si24GT","portalTitle":"Driving Range Samborondon","portalAddress":"Edificio Molinos, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753300130829"}}],["4dda1af9c5934a209cb45cd591295b52.5",1753302347097,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"9128fcbc03053d2482bad26f938bcba2.16","portalLocation":"ffe05ea0,fb3dcb4a","portalImageUrl":"https://lh3.googleusercontent.com/iLCIjknMIjjbJqkQ4h0PhZoo0hwrjk2js0dY2VXEFcMu57Wm00yXHr1vM7WyTPUu-9i7CbDyDq6F-YqIw0DGoB3Rv_nG3chq4cUXGuU6-Ov9Eg","portalTitle":"Letrero \\"La Cristalina\\"","portalAddress":"W5G7+W8W, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753302346096"}}],["dc74f95cd9b341abb9d391618d80c9a2.5",1753302445645,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"88310815c4f33dbaa4bc1608f5c06762.16","portalLocation":"ffe05d9d,fb3dddb5","portalImageUrl":"https://lh3.googleusercontent.com/N9IooRlyv6goeInSwCAEFxViiuNQEsh3m3ujCcgHlYxuqZ1iUHvTe2zew1wjuteFhdWYVzS3Pq-6sjXvvrHrPHhtrtm_3NGSgrvhQketvFoJ","portalTitle":"Letrero La Costa","portalAddress":"La Puntilla (Satelite), Samborondón, W5G8+PW9, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753302444958"}}],["111bdaaa2bcc4e1bb18554614e1fcc5b.5",1753306068550,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"689bd986708a30f38b0129942a8425b3.16","portalLocation":"ffe0e735,fb3d6178","portalImageUrl":"https://lh3.googleusercontent.com/GVu1YRM0tr8bx0Nt9DuCKRa_aW1hrBzzie4713YOG9P4qxr9MljOt2eeJrJaGR4yhvpSWBsWZkkZl4Emqc2vwrg14SDcdedWI6j0V74JaMqqKw","portalTitle":"Gruta a la virgen Maria urbanizacion Castilla","portalAddress":"X46P+RJ Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753306067721"}}],["7a0f7f4f4f0b4e2c8822522211ef1b74.5",1753307103349,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"87f7788697dd382ca629af2ba870721f.16","portalLocation":"ffe05925,fb3d3815","portalImageUrl":"https://lh3.googleusercontent.com/9lKozUtaubRZO6Brgnr8okapsabLngZSTPYgkcGIXsGDiOJD-2_roi7j28cRNejIH3G6UpNkHmcdmpo3SrmD2MlNmCCuWYz9EZoN97j6bFQY","portalTitle":"Vista al Parque","portalAddress":"W4GG+PH7, Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753307102343"}}],["6a7206c416224d5cb1e51abb49f6ed46.5",1753376411713,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f763b31993e036c2a7d29fd79582aa03.16","portalLocation":"ffdfadbf,fb3d527d","portalImageUrl":"https://lh3.googleusercontent.com/3W2MhtWgQlG6jKKXjduj3Rkn2LywZYBBaA73J9ZAiFM0K5uVv_XRcoQOGWObdHAsTc_GMP_aA-jw1a48USJhmn53UKHqcTdmIZLDfnu7HRM","portalTitle":"Esmeralda del Rio","portalAddress":"V4JM+G52, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753376411082"}}],["5c79634c711a4323bd1fccf42c99548d.5",1753398348917,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"10d05a2544e1406da78a0d8adb9c73ae.16","portalLocation":"ffde8207,fb3bc6e1","portalImageUrl":"https://lh3.googleusercontent.com/9uPXP24YmA7z0z9-0fX_sZkN8gPsrX5ZF7LiPa_dbhkw2QowoneBCI9cC01SEp0d54P6sgV6DxQEUzuEJV49pcOyqKwvhegWmP-g3Gxc3WGo","portalTitle":"Glorieta del muelle puerto azul","portalAddress":"Calle 7 SO, Guayaquil, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753398348386"}}],["ca0659ce3b664e7f89372a0c2a20945d.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["2e73a651b18d4974879d8d069f54cdbc.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["e019149899a944aebdc89ef445419a0e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["04aee5beb6bf4ead93d8d61c40c8efaa.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6bec0cc8de23416fac0478ec744cbf7b.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["41d93eedd10040249dc14d1608b4078d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["246badacf56c4831bfc463e69c6643d0.5",1753966350366,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"e62197e7d5984efa898197586b54d847.16","portalLocation":"ffdf2e5c,fb3cedc6","portalImageUrl":"https://lh3.googleusercontent.com/wB7Kyp-bkTnwC3JWm-gPeZOcYVCxomwZ9eah-5_TlimkS8pFSCFXp-Xz-5aRamQ9VSklm3sgWORpkc4zFsHXRYIiiQE3zTmwrV2L29tKZIdt","portalTitle":"Mural Mundo Libre De Pensar Con Sabiduría","portalAddress":"Av. Guillermo Pareja Rolando, Guayaquil 090513, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753966349627"}}],["e0dc829ecf52465eb7b701bfcd7ead8d.5",1753967074837,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7488cb6839504afa9ee2f3e21fcf41a1.16","portalLocation":"ffdfdac4,fb3d3d56","portalImageUrl":"https://lh3.googleusercontent.com/JAxKHxmTUDNqlTlcNEWRykqfOWgb6SJ55AMiIMPivM9aVTJdSFWU-8RMwlssxbmT2MqxlS_4pASKlC_8cblIpD_8LjNCKSDaos6_D25G_6CiNg","portalTitle":"Pileta Urbanización Mirasol","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753967074201"}}],["02907a54b4e54601adfc49b7e3ebc989.5",1753967188605,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"765d437b55564cc893a7fc910e938be4.16","portalLocation":"ffe01d3b,fb3d3af8","portalImageUrl":"https://lh3.googleusercontent.com/u4D6mglwhtw8dLYeP_d_kM20s0whF6-ywHIsFwQY5ot23ksNNIlYB9WDmT2Tgf78kp8paBfo6z6yYz-Aej_ZIF6NKnHPwGci6u71p0mQ8Z5T7g","portalTitle":"Cancha de Tenis E.L.","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753967187940"}}],["1b7c5178d31e43e8b71ad986cfd09a32.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["46e092c7712746058dd3e5d8806e73bc.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["3228ccb28b4e4647969f7d13d860084a.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["6353417f585b4bd19e75e3b0b460f1d4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1de1107ec70742c7982dced41b1e8826.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9cf7c8d793514777882068d5682386e2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c0859754c28549769c9565caaf0779a0.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["586647423cd74196a0a916e26c34b8f7.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["b7ed48732583448ab554b5dab043b890.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c6786c900a9e4d10a7b72b35501faaf6.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["b61781b319044e94a0bae32d621a2b92.5",1754151166489,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"99abe280a39a4945b48d387c22ceccf7.16","portalLocation":"ffea0caa,fb4381a2","portalImageUrl":"https://lh3.googleusercontent.com/mgnhyBXtDs75X03oF4qurUWGisRmA-7n-QBG5d0dTaSQTG-zvPWWVbamee2NAcgotA2HC0B40ZirOfLVVp9VE3aA7FYPh2RsNSHSrgHvF9xl9A","portalTitle":"Estatua de Maiz","portalAddress":"Calle Seminario, Ventanas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754151165654"}}],["d272aaf9732b49938e565ca08a1e2b71.5",1754151166489,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"99abe280a39a4945b48d387c22ceccf7.16","portalLocation":"ffea0caa,fb4381a2","portalImageUrl":"https://lh3.googleusercontent.com/mgnhyBXtDs75X03oF4qurUWGisRmA-7n-QBG5d0dTaSQTG-zvPWWVbamee2NAcgotA2HC0B40ZirOfLVVp9VE3aA7FYPh2RsNSHSrgHvF9xl9A","portalTitle":"Estatua de Maiz","portalAddress":"Calle Seminario, Ventanas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754151165655"}}],["ef32374c8f994d86ac3659979a4daa47.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8e209c2cb43342ceaa7a049c3ec607fe.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["fb1e47ec5706493a948be1a292d75545.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["b08ad112091c409996c76dc277b2d6e2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["87104df1ec0c42928b58a81280dbf861.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0a0403b9dea042ae8b339a3e05446371.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5f3168e0416945c09d794a7b15bdf00d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["78991c7f34034c7c98b9b8ed7e690f42.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["35fc702eb5184e0fbc930c0ebdf5ef77.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5bff40d192184d6ebcc3356045816308.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["73d5005114e94b98a30e21c035b9cc00.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7c879823954f44da99149b202938ac7d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["ac7d5610658e4707ba45f67083dadce1.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["1ce882601cf0468983237c5c0267c704.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3828b1a7c14745f9a56f509a4be4afb7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["67b00e653cd3441e9f423f0b66d52806.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["a05b2da663434f45a218e58345dbf90b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7c56807e26214b63a68fb28b40c2e0f5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["82b5b5729dfb4eaa8e5a9b6c65ec4f1a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["3828d99d54684f13b99ae5e3e3781b39.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["afe06784b68d4802a21b731e21f3fb5c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["f753d34db5a841d3b30989260a9cb9d2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["1404fbf0d60c4f9c88136073e0db7b36.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["d40ec4e62ddf46d58eba413917c5d8f4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3a311973eedf47688722dfc563c4cb0f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["0e7ca8635cc14b77bf9002f20de89c9e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c887a9e66baa4d37879fb01c1ff99d72.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["b3ba14df2b3c4ba1b5ee1ceef76c32c7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c7269024c0194bf2a3fb3b72b292f006.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1af838264cd4487891751e4de610eb1f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d941c4580e284ea5a6586e514a27c371.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["ff02ce7fc232403bacd7a0ff8e2ff6d4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8b345ddffc1d452b98ae82708e4c9f85.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7a6d9cf636da4e3e91d5b191136b0145.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["20558d289cd34e7d927ec725280c549c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["02a3526f9d224e64b7f9cd6427c6144b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["954ad36c4e924b24aa971c25a9d35ce9.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["18544364789f47cb8a168bfc0e179be2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8f4d95efe9f543c49f1ac8072f993562.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["ed07e12402c14772ab177820ada3590f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3608b094fa29416ebb8b6003e0330465.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["c705af41acca4d348ee499bc77ca0d3e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a817014225f5476995f6e076da665a0b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9986fc76d2634c04aa1bfaf749401e8c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5cae85074c594682bc777e331154c31c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["84969c82f28149adaaec034a0e4fbd26.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["160b846b930a47559d6ee814d4d9ac6e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7daaf9ae07c746a8863d96940faf1bd4.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["aa8e6ae3aeda4cee9c6914f2f3968fef.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["978f6d22e0e64daab2bbb8b8f2d2cf48.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["31d8b9962b704a37bd9a02e27514baa3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b74e87402db14f7b8a9c68761f7796a3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["bfcf6a25d54e418886aa7c90b51e40ad.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["99d9cced494947cb9c3a94ce0e19f9ce.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["84de9ac110ee4f66a04cf3765fcce0c6.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["796fd9479c9c4523b1ecadac4f66dfb9.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["32d5ecc657b64544ace01ddbb4d2961a.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["fab04403701d47489e38e7032976f149.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["025e09515290456297d3ad80e04880fb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["b0e9ccd7027348629f1540ebe3ce6815.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b4546c52927d40f78786aa4acafbbffe.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0f6eeb9aeaa64430ba4816f8328eff05.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["3b29014baa3d485c9c44ecaaedeabfe1.5",1756912190793,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b369e2cd39b0320bb970accc19b96189.16","portalLocation":"000e0dc9,fb406574","portalImageUrl":"https://lh3.googleusercontent.com/g68EJThMdHMj1qKcUcuDV7VHjLZ9jGAGbHXlJC83KKUvebSh78nfNg4MQ2HLeMPEkFCp4Vb6TQ8_stDohjkNfpK-UPWwOsiRRgBxocfpP6s9vw","portalTitle":"Mural El Jazmín Celeste","portalAddress":"W8CM+FM2, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1756912190145"}}],["b5cc883a30c24773a794f8675b746355.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["d9122eae6cb84fb1ab3fb50219285103.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1574b3c5b2634191a3bc189fb2312e85.5",0,{"resource":{"resourceType":"CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":100,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"7B95FF6F"}}],["f6bdc0b09fd64d04b725c4b9f58272ed.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["11d82df9b9b94cadb9cb0b9ccf341984.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["f9d776281587457cbfc3538a9b66d9d3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["16fd4f2286794dbe8d5b1dd486318a1c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9ecc45108ed34a0a879f694724a181d0.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["05dbe57842f74e3d815b8e871882e63e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["add2d86339fb4c03abe3b59987c3f7d3.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["adacab92f2c240a1be0f6ff95e89a61b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3ee6ca86d47446f58e2bc41f651b1d7e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1f0b6bca21b44fbaae082f7a32e74da0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2355418144c94f668ead8fe7e0a69401.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e89292d6cd3e43759c1053ff962c4bf3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["65ba016e034f4acc9d6cfde5c73faf16.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d7caeede84e641b6884ee70336bec8df.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["14380d66068645bea55cdfd26f96729d.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["3b5a34d46f8a495a81c63f82d1e6346a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c9122c2b05224f17aa933ee58f3bfe55.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e48e931359034224b19f5e79640d1146.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d426ed036ca340c6b45a848f56b8572d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fcd65b5f878a47899cb182d2fb520e25.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["35550dedadc04a8b8678ed045916ddee.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c470a3b63836422194689b1933bcaf79.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["017dd78c3e0d40d48fa9773958a7b3c4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["03e697f86c6a4a8795a9d3944a98a635.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["abd49ddd86a74cadb9fcb1c2bf3fdcf9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["41488cdaa40d4d6ebbe29361643ea764.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["cd6d3564c97c45b39d9815bfa57cf255.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1730f8d0f8ba4b099e34adbe176cc423.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["bfcd4baf0f3d4faa95d0b82c265141b2.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["8a91030ad3fe4ceea88a89d58d31ba1c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["fafc27ff36aa4bb1b3344ce20e9431bf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e09175114c8f4e67a84436ec9fbd80e1.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["0bcc4b3047924c0d99e0bffff120f21f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fd4d1871a20a4727a7815d4b1f17b2f5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e47064af4d1349a898c3be493eb22fc6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ab54295f05ca4709ac5e04c3022287e6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fc54d87f52d745009601f1084acd3ad8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["04022d35245141089e672940f21369dc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a8cdbf1368274176b2ab58c8cfcd108d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3685aa28cd0d4981b700b0f635ca5c4c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["25fff791ae84481e81e3aafd764c2b55.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3637c85099f74024a724337f58b5a93c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0a466cc4f994424491f5facacbf57fc2.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["8db9d9f938764d02a18ed975f77aafaa.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4aa09bd06d3b48f08f4e7dea07f1f86a.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["04ffd74c1ae240f8ad7a742489131e67.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2a9a8e17c30b4865ac08d58b4cc5dd3c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["02417f124dce42b3a5b96e4f1a2bd1c5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a51ace82a81045d6876dfc7983940ad5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["eddeee119baa43f589595dfa3758d404.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["99bb98e125ff4ad191d0afa1818d1c8c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["39d52bbbafd54aa4a8e4aceda244cf25.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["bcd11dafd2c44fc6805442b6ea89f579.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["8b40be743ccd477eb3350ca13e1c60b7.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["05ba9dea8441482c95f54d66f3d6d888.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4ca9d0b8fcbf41fb8192a4a26b32a41a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5fda85a0ea1946cd8c1113d3857af371.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["af6c6d87563b49cdbd810e3238755d41.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["aebba80d6c3b4e15b025aff13987db56.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["6e629efa0d9f41e3b56bf761b91e2f47.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["5314a39f9e704cac9074f688206b10f2.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["31778c7fba0c4d648c830b69e4b69f0b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["748daeffdfc4413183b4a73d02018e3c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0a4397a0110441788ee8cf99f4f9d936.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3cf12b37121743eca80254d574446370.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1e1e42b31d5f4a68b4dea697e0953e97.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["efe4f9d2cdc2419b8b9bbcbf01117325.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2fc515e584734b7687b67dd351ff67c3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["052e1e4ff5f74daab068e6011b2e083d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["82142f5f57f14c3694f82e503a960d48.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["65fc6a76051d4fe7879310815d038219.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["2ed019e5d07a457ab290ef7f75f7a12c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ca8e81bb56ea434b96f651aaff3fd926.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["24a388b9ad794b028fbed47755b6cd5b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["9a69567f38624fb580dbf184eb99ad72.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9bfb3bef9ec34e4694df63a9e8c76e63.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f7cdd27006b04ab3950e6f6309703fab.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["3095bd8f604b402cb6782d1192f35830.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["41bfbab48603426a9cfa08cc7dd95fbe.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fe29ac291dda4fffb8364b53c7444ec5.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["8ed4a5aa56bf48fea436cb3d570a1ad9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["df44040f14854eaabe2b02e14922929b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["209c769d4f2447d58cf1fe7245fd2c45.5",0,{"resource":{"resourceType":"ENTITLEMENT","resourceRarity":"COMMON"}}],["70f776cef4df4287bccaddc9fe6df148.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["6a4c1f40e38b436d98629704cbf68250.5",0,{"modResource":{"displayName":"Link Amp","stats":{"LINK_RANGE_MULTIPLIER":"2000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"LINK_AMPLIFIER"}}],["c799ed2aa8034edc87ef18c4f014ff93.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["633e8197d06f497f89bae6cb5dc1a67d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["16104da8c6384604bd668ef572b01509.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["f062eb57d1e14cd5908e9ce7f54e9710.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d0e82c11e7224ebf9e741035a8e1baa1.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["63f925b40c7341cda7458535dce4e1e2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["8bc318b928bd476980dc55777317fe85.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["275de20412da445387dc780234ef48bc.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["fc87b02a9f3c413996c02bba11b0a44f.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["63187fd809fb4204993c822910d6ad39.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["9ad3aa8a5d304c17b325a285cb5a461b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["71ed07a71b1b42259a46a0f578be076a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["4547f70eb35c4962bfa2f114b63f6c9a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["091b64e638ea47bfb775e771ff49d8bf.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["4ed44ccee85c425b8cc8cbb7c0389855.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["0e40ef5e559b42b5b8d9b7cf947f006f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["d0b2a00e94774cd5a25bf854187a5c88.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["e249531379d249188073dc3b311b578b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["c2246bfa828741889fdb17ba9f6b54cb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["eaca40e75b2c43bda3d142cc86393c30.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["53e1ef22c32b42af8cc0f542af5bad1f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["839a89a12eb144c9ab60fa55b19f4c77.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["987e8460375949e3a0a37aec49e16498.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["0426cdf152474f84b810887ee42bd3fb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["749cebca0be744348ebe2c78bdac0d62.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["f510519acfa24c7b8c132b329c5886f4.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["7bc27334b6c845a192a072f4108c1ff6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b36afa262d744da5847158bae65c2d99.5",0,{"modResource":{"displayName":"Force Amp","stats":{"FORCE_AMPLIFIER":"2000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"FORCE_AMP"}}],["8a79277949264b8a90447d626a4c02e4.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["5745e86b0efc4ad2a3b2c23b4991f827.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["414ebb007f794840a1908c17c02444c6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["f264c750c8e1419fb803039f1789cf6f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["8cfdcdd8cef144cd9a13bad280695cfe.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["3752cae2e11d4ac6b1f7ca936f40793e.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"1877C1B1"}}],["cf5bf33e12244bf8864f9e22343127a6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["24ba86987bf64d858bc6fc08e06be1b0.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["2fb0c990682e4958b61c70f49eab05f0.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["f920e4cdeda74ec29c21743b821d1a18.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["d451d201939d4a4e916e032f7d47700d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["9a4138f4e7cc4cc1b385460d4bb16874.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["15fcff75e4814257967c7b2da2ff0759.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["f7767431caf247d484c9e9aea61b50ae.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["b1b984526ff4471eb178c284e0bdc716.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["8196f160fe45409aa0ffab3998b99ab2.5",0,{"modResource":{"displayName":"Force Amp","stats":{"FORCE_AMPLIFIER":"2000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"FORCE_AMP"}}],["5b239607285d4a9697a1c55cdf2c31f3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["63e7f24bfa784e858d8b49c42894f2dc.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["9467bbd526554b82a6e094fedebf5f57.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["fc98976cc44247d4abede60671d91da2.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["719b3492dae84bec8c441711cb971461.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["784f5f141b534e8981b644759e25e7d9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["4cd2eea04cf3471f9307084342f98a74.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["0c6cb625bd5b431a9a43033280467776.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["30bf84e057b94d7680b337adab53e4e6.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["987ae41d358d43dbb69143df5f4c5e06.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["c067800b09154e5597c7a4e4a5e6bbea.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["1a05019a3d7d441d8743266dd19ad6f1.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["04e1c41352ff4186b8fe55911a59dd70.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["9d16f260dbb0471ba9e501f0b6c8f59a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["73ae055d4cb24936958d4ee08b341af5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["27807762eb2c4847b5c8a5f1e24b51a0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0ff5c935584949e19b568de24bca696a.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["799c22848b0f4c50b5fb1f9dd245f436.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["d1902fb266eb4f8089f6526e90c61695.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9281589c010340ad929aa1cd3481be64.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["ec370a45d0544dfc9e685900c107a654.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1cb03fa7779247f782d5aaef21244c4c.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["6f07192560314b4e8d3eb1b94b1b82fe.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["a328c370c16e40938d868a7c1f3aa8a1.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["8885e890375f433ea16efab5e9db54f8.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["ece1dc9ec9ae405a8dbc55b1cea0d91c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f57a4ab40f4a41e4b1cb28609546772d.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"A0E5CE44"}}],["19ad6fbf9edb4de18e3134d888e4163a.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["f058330ce7d0415fb290e749dfefcd32.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["6a2448ae3219489da98e5f626a03cab8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["745f76c8adf748bb8b8192d1fc7ae24f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["17bb9eee6da14f689050dd5617b04fa5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8f9165beba6240abab1eeba06f3c910f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["39c9891fa82245f8932680ef578df0bb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":6}}],["3b5e7f1a93ab4543840187ebe34d51f3.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["8159dd1dfc154095a0ba14e155800472.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":6}}],["e6233c0ae4374bc29d36997c54edd491.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":6}}],["c730e364f15b4a7d9eeef910c7f335ad.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["63f61dd1ea624b8fb6eb4dcc2e7aa73c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["c49cf82fec8740eb80bf11750a02a7c6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["535dc0c526fd4ee6ba01f44c588704f2.5",0,{"resource":{"resourceType":"DRONE","resourceRarity":"COMMON"},"moniker":{"differentiator":"CAC23973"}}],["2f9078d35d104c878c97010576536e79.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"ENL","multiplierE6":1000000}}],["30befae08c6b4081a79de99a5abc302a.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FW_ENL","multiplierE6":1000000}}],["ed215b64673648eca634b3e3d15f77f8.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["b0d79528032841dfa21c742d7b80d4e1.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["68337fbf2c3243779cce1c765fa07a0a.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["ca5e3eaaaa4c4e4996546931ef4a2b28.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["e8c067bc2f04487a8faef9e7373c818f.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["f86d6845cfc9496d84b6e680000d76f3.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["439489f3022d4fa1afd1a91a1df46f69.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["2669f14a5acd42caa077352e8b4631bb.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["1cdda5316bb047388365a6754dcab9e9.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["c8625a1d0dfe4202838015f197b6b8cf.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["8f9aa191245d4872b41e5a88fb2b8099.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["9ff3a132dd6a4461b34cc727c01bd523.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["5c439447b4ef47d98abd00f61e3e4de2.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["727e648044be4366bc68ca0d024d9445.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["d053dc6c57f74813a862bafb0c511fba.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["5cac98c24d80458d94e73f4ee9fb4e5d.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["8b671142876a439fba7afbe66b2ee5a9.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["f63639934c1047b18f33cde0cc906e72.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["a78a8454b8e44f66b8928a19955b94c0.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["e84237d2869241e1b72c12b9243ba0a0.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BB_BATTLE","multiplierE6":1000000}}],["72fdc86585504c318ac4396fa90ef814.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["bd47479f98b64652a97cad7ce9b35bee.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["131077ab5ef143539a5d570b00163dc2.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"CF54BC15"}}],["5f488475e2ba4def851773f4518e3090.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["60772a8644ce4e24ae9d364cf793c79a.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["dd1e5cdbfba842af87f3e67ba2dd36db.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["46cbca25e1ec4d68a79770a8409dc29c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["bf0a3659a13f4e5f9f4350df9b45ceff.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["7936f2b595234782a465a92ae7a99ad1.5",0,{"resource":{"resourceType":"KINETIC_CAPSULE","resourceRarity":"RARE"},"container":{"currentCapacity":0,"currentCount":0,"stackableItems":[]},"moniker":{"differentiator":"E416B517"}}],["eee8b3d182a94b26b7209af52243d659.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["5c88e3cd10b44994afa2fe06ed1f5f79.5",0,{"resource":{"resourceType":"FLIP_CARD","resourceRarity":"VERY_RARE"},"flipCard":{"flipCardType":"ADA"}}],["db494880f65449ab9b8b74b8eda933f3.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["fddbe71d9a164852a0074b2bd24dbf50.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"FRACK","multiplierE6":2000000}}],["21849f3e93694037a2b44fad56adedfd.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["222f9ffb872446c9b2d54cde17a9f951.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["c8cfe34e6bf3454f82355c54fe8480a4.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["926860bc6dfb4c20b670becbcf81504a.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["6ac39b0ca75f4fe7b057712928d387a6.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"MEET","multiplierE6":1000000}}],["79ab681a7a354f6aa9354003e072c701.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["f583838a7b35460cad800e468a71536c.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["322f8fa6ebf644c5b655101a8d264891.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["69fa57911e9240bfbb4e5a047217ca81.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["6e34eda8b52046d8b1555cbc147dab40.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["3c4d4aa7938442baa422f10568cdebeb.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["8bb4adf5713b453b84e530eab85d6498.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["2e4a234d40e341ffa5838f7b5a3429bf.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["bac2c456354d4bd6ba26cab42fb3be78.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["47d035c55121421ca91c046803e098e6.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["649fff51af254cc6aecb007033a1028e.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"TOASTY","multiplierE6":1000000}}],["6119170064344e92a361efa619905258.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["036690db26944ccf99bd410c7e54551c.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["c3a3039ffb6c4e3caf0dcb5bbcffd071.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"500000","REMOVAL_STICKINESS":"0"},"rarity":"RARE","resourceType":"HEATSINK"}}],["b875aa2b865a4ac691185085fce3bc74.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["d9ddca02467247d6a77e384a18779f49.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["76ff2241b07b4262a64dd9ecd2434e70.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["6dd7a0862dc34f4fa9e9820a3949ce9e.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["aa184806b3a64dffb075c9888fea318e.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["b2318f249aad488e94dfcee1a495c52b.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["34b3ba603e464d04be9f60f3a47c9cb9.5",0,{"modResource":{"displayName":"Multi-hack","stats":{"BURNOUT_INSULATION":"12","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"MULTIHACK"}}],["dff5a5353719435794967c377bf15af0.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["339f1045254b4a91993ed28853fc57ee.5",1748223614737,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"174bfe92caa0332cb208ba32bb084201.16","portalLocation":"000e8ed6,fb405acb","portalImageUrl":"https://lh3.googleusercontent.com/UpbPs0LKiakDH1M3wKVuETE4-OU3ODoUmnYvqIvW54PBtmKppc8tMEurJJ2eTqzwykoWUQau6uOPx4jKKk3El81Xjhz_d2kRUTZS4rCyMgf3dw","portalTitle":"Mural Momo Ayase","portalAddress":"X83J+JV2, C. Carlos Concha, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1744646542747"}}],["a1e96a89017b426abea352ba44ac1ef4.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["33fb8192d774449d8eac0f7f551ecec2.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["60084369aaae48cc9ac4dbe03b7e2f94.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["33050a300ff3496ea0137f8926bfec32.5",1753120685652,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b1b3fa6479624b92bc8d4ddf11a26174.16","portalLocation":"fffc7e79,fb47ffda","portalImageUrl":"https://lh3.googleusercontent.com/Ske3C2zR1uBUnJuiHwAzlcFSZkt4K6lYT836cwN-D46UeFQ6wlnLRTlEd_XlSNsFqzGAPlnScQ_5Ie4ePxGRcwJCndgKNXzLrSAHrh_2-JybJw","portalTitle":"Pileta Del Porton","portalAddress":"Vía a Quinindé 7, Santo Domingo, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753120684892"}}],["6afbe73024d44bed9a0fdef9e644e8f7.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["b3be27a921af4ae2ab4fe5d5eaa6c1cc.5",1753295441652,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6bc0823d578336a792ed0a2002470d20.16","portalLocation":"ffdf4366,fb3d165c","portalImageUrl":"https://lh3.googleusercontent.com/sCxt9aqtXeJ6QE9G5U3Hgz_QKonhYUoGnT-B8FbPXq4EM8SWIsUcKKC4gbQoVkn1_J6tpf4gOc5xqPr3p8lcfAcXyrI_aVCJQwI0ztfG7wo","portalTitle":"Letrero Sky Building","portalAddress":"V438+RW Guayaquil, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753295441043"}}],["45982e16fd0d4b28a5597bb9237b7a59.5",1753299805272,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ed5ebe7ffb464b9d8e9aa1e4d04a4849.16","portalLocation":"ffdfd5a2,fb3d404e","portalImageUrl":"https://lh3.googleusercontent.com/T_ECDahVk5acZ1mfnw_UFy40MIwsHaGAy6gHCuhZS12XOwrQFGXYeK8GvFsBuJU9os1bLIU6RWxRgY-pXLYsLWAGNP7ew6wTciXS__unR8A","portalTitle":"Britannia I","portalAddress":"Unnamed Road, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753299804695"}}],["f20776a4be1544f9981948389d296582.5",1753300691936,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2d52f3482522453c901e739987ca36e5.16","portalLocation":"ffe01a65,fb3d3b03","portalImageUrl":"https://lh3.googleusercontent.com/8yGFGd0_QojToLVHSOk48UuorMcb0187q8IN_FHSxDq3jmTqOcM3XxjruyPFq43vexwXsxsDTIly1ViCdyVzS0MfGuceUkxP67S205HKr1PM","portalTitle":"Parque Infantil E.L.","portalAddress":"Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753300691420"}}],["fdedd20c908448c68ba676b77bc96e25.5",1753300922941,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d791f57bfae53a33b21e4c1c59d67715.16","portalLocation":"ffe023ad,fb3d3b9d","portalImageUrl":"https://lh3.googleusercontent.com/CTn-J4sLyNLbXFXB19oxcNP5pViMEVni1IEUPBK9uAKfC7Ae9bXZbbeGtbrgQ3uODSx6_vk_GTG3A0Zmi32OQDDF2t5yBr3uDXPt9yrgnS0","portalTitle":"Glorieta Vista Sol","portalAddress":"W46G+HJR, Av. Samborondón, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753300922307"}}],["7d98c05a22ad40b98404cc96a2cadc84.5",1753305249570,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d35c84fab6bb3fbca3d08ec0fe93007c.16","portalLocation":"ffe0dd40,fb3d626d","portalImageUrl":"https://lh3.googleusercontent.com/tyMAQSY7kYvYIzfFy1EntHERJ1StSneFCR2hB7AapkJd46QiFdoZuaUC4XaOmaZedNPaK1INX8h8WXLihjNdJ7k518Sw-ShUOmsLwtDppxa7","portalTitle":"Zona de juegos infantiles Castilla","portalAddress":"X45P+RF8, Bonaterra, Guayaquil, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753305248967"}}],["bfb09f861ae243edb69ebe452cdc53ac.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["fa83d3e6c84944f38234d19304fa3c06.5",1753376467098,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"4b41607a65b54c85ac6a53e51b743527.16","portalLocation":"ffdfbf28,fb3d489d","portalImageUrl":"https://lh3.googleusercontent.com/oFwxrNxifCUL749n1UowPvOWLljUqCXHv4bWmH2aeKrdJagpFpNx7LvPt3LkQCDZK55Nh_j7DE4iCJm3nmTXh2GQj-IoNBoGORTTr2LmRsTBQQ","portalTitle":"Montego Bay","portalAddress":"Av. Samborondón 5, Samborondón 092302, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753376466488"}}],["2767a260d2bd46bb93954cd6c7c6bdf1.5",1753377006721,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f801bac6f79b3a40850ef3a616a75719.16","portalLocation":"ffe09d7c,fb3d370d","portalImageUrl":"https://lh3.googleusercontent.com/_IiQTsVaNrIjsnHehrBy9NFbq0ayxO4NCEeYrVYCHEPTza9y2GPaP1QLQhH2EcGNyn6Q4riZ15KRCnoTEYigu-OnhiZjRR2vc5wTAy3j__D2","portalTitle":"Letrero Matices","portalAddress":"Avenida Leon Febres Cordero Ribadeneyra, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753377006045"}}],["e81393ca7dd74b348e5233de3afcf729.5",1753377235110,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7f7e60b297974e13b7e9e36ff1e5718f.16","portalLocation":"ffe0a574,fb3d2d1d","portalImageUrl":"https://lh3.googleusercontent.com/pqoNudxzZzTqGbIA_38qlvolkkwbtUw-3r1Xv7-TdzDE813HX-1oAZ95wYvD5ApFsbSGPpYg5Mz9QNCjpFLwo6hzdRMYU_CsoCgJc3oFCdM","portalTitle":"Fuente Decorativa.","portalAddress":"Av León Febres Cordero Ribadeneyra, Samborondón, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1753377234513"}}],["731cafba3eea44f6b85e057e2206ab35.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["ce20b79519e44b8a8bf755aa4562d896.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["9050ce22170b47a981424a704f155052.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["f738c95824b24a0bb95886205bbeceb6.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["ff38113d677b428891e677b65e6d45a1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["81c7834b81d64598aef7944cacc8b612.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d74ac005bd4b4cd195ad01e38a91ecfa.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d3992f909faf4928971578af3e727fe6.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["bb8e4961e0714d8cb4f9621a444da836.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7a7a2e8d7afe45839539852ac87824c9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["dd7a2fb1d49a4fc18391407aaaa619fe.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["f4a8fc79630348b8b4f27999cc72a390.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["9b89b18613704bfcb8bbbdb792a12436.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e66a7322328a46b2a442b88d37d0e39d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["868939ecd292481cbcaa0eff9511b497.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c5d50403059d41b689d241e33d222262.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["88eb5fee8a014cdd9fd074e2ff0414d9.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["240a6be7f8624abca0bd2b6b0568b841.5",1754169439759,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"03bf7fb21f144aae991df200e7e01bcc.16","portalLocation":"0004eba4,fb435928","portalImageUrl":"https://lh3.googleusercontent.com/cs-uHYq0h3fY0DLcAMZJPRkDqk8_fphjjYub7QT8nO3GM8EL5xF24Q0aDwdVX0n55ZPMc7VjJr4yX7n0wlTWBknyLlBQMwvrffDalAjH5nf0","portalTitle":"Jesus del Gran Poder","portalAddress":"E20, Quinindé, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754169439130"}}],["3653a187f24b4f0a89e3c1b688f74386.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2eaffacc871b48ada8b2612cc8d2ef78.5",1754175381334,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b920484375e93389b540fb7e148b99d3.16","portalLocation":"000d5d43,fb40dcc4","portalImageUrl":"https://lh3.googleusercontent.com/5Sk0n-9dfXMk7JfcBdXKbN89xwQaVmGbylLEpBKx_9pOmCXz5ynJmGU_95aM7IS0LxZWB6Zi5DoVXeIiFCvKhVGk6GnhfzUqd5oDF5TK_JQ","portalTitle":"Letras San Mateo","portalAddress":"V9G7+8V San Mateo, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1754175380758"}}],["60f5118135f243bca05758b124725c62.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["51ab072c79d2409eb934e92ecb7a1e27.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["d074116da29d4a32ba2b982d0f9813e9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cdef7e6cc88a4b9ba7b393f7169b754d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["09b539c7a49046be91ee053a45633be8.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2a66686df381400d8083b7044a9992f5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7ef4062caf4a4e8ab85302806e2875a9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e2cec0738e6240b4945a4f0b56ca4edb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2550f8632bbd4428acf78481696514e7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["773672be30364b2c97a3ba081a7f3a22.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ed34227fe74f4c8fa5e883aaffb6f84b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["17e16c9561fd4fafbd9715d30bf6694a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["342f26657cab464786d0ca1511310785.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["71b27dba226e4481be242120087fd12b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3dbca8577f1c48fcb27b80d73bc85402.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["409c5c1260214250b0851661efc416a0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["af35ab33720c4eb687633e56aa1925de.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d8f19a8f0a854f31bafeee0a9f0a7dd7.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["b992da07830e42e59efafe95002e3495.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["99f6e39cf6334cd28c54b48373e62eb2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["b6fc9ae01a9b47ffb1b1b4ac7a36102f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b81876168eeb4db38cf99aea529d9e5e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["f598910aa6e44f6c88343565f4f5e8a9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ee162ef26d654fcf896ab88f810859e4.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["86877d658868446e8acc6d43770a9567.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0d36ce4aa6814283a5fb371b618be28f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["317f00e2f3a648b7894d0f611d67bfe0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c31cda70214e415e9a0c8159659742d4.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["92e1ab0bff554889a9e71fcb3782b7fb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["94b44e0a52ac431e81b62295037b5baf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6910089e8dc243e0a947720f319db2a1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2b12b600435148d6ac58c40b7e3db667.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["482a74f8be1f475b9e88b08bfdad2951.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["87393bc202104f99afc610491ddfd79c.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["908855a4f2f8447a9afe30cf85fe2c28.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["1e8879a7b34b473fa84c1370985f0b19.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b370acbbcc1140e49c25e2dbf404bcf0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["22ba0d6362f947a582004680a43ecadc.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8db3bc7c1c6c4295a1e80d125107a991.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dd112258644b4083a217a4e03d400554.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cb25e1dcd8c94fa491fd18cffb6371eb.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["28be30ae83da40d88c69fd39c823658e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["031f7161cf2441c0af1701f6cf964275.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c2facf0da71042e2bde14729d610cb7b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["69cf883530b741fda30ad8359bdceb09.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0b93c4cd4ac7424f826c6e4250e8d5a9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c0462f3317a0425eb76d2684a51f4b79.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["f3f609a2dee74c7da47a68f5f5e2e960.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["bc14188f5ae9469088fb9b77a9fae474.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["37e2893019984b57ab8ec6f704a48aee.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2736f07cd2234cba8928d96808d1f2c7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3248c98294e345058009d79da351d098.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["11cd06bdf21b495988c7dfa40f52b23b.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["975786f0c2944a99b1fe5cdd7f3fa415.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b61de270e9cd414185049fd0ba623385.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["21d37e7af51a422e99f931f4911973ad.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8b04cbbe1c5d49379a61d936709ad833.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":7}}],["9b0b79cb229d411aa64f6b6c08e35f2e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["0f376ab71a3648d1bcb93d13c91a9e52.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["23c2cb0f7931415bb7cb081bf2c88bbe.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["1a79a5a63ea444bf8b580e05a3f32b17.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"60","REMOVAL_STICKINESS":"450000"},"rarity":"VERY_RARE","resourceType":"RES_SHIELD"}}],["50cfea4c1a8942609a645442974f4559.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["88ddc6ca2bfe4bd48a0bd58319f1a322.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["4b777b20a107494d80ba7a37b9dc3841.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["ce73da79562d45b1905a1023f0d4ebf6.5",1756919356641,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d176250324b3436d86c45300e6e67479.16","portalLocation":"000ec01a,fb409afb","portalImageUrl":"https://lh3.googleusercontent.com/kFuWugGsVn32QyqtDGWkg46OfQDS7WSQaohSS5wEgN4zHGh5I58sY7k8Ia67dI45jEJomlCcHJ4uSQg2ZJjuPDaAHh3cb1tYT9GizOeHHNw","portalTitle":"Pileta Parque Central de La Ciudad Esmeraldas","portalAddress":"Parada de autobuses Las Palmas, 10 de Agosto, Esmeraldas, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1756919355897"}}],["0a6d9ad85fee4d8caf94a62b2d5e59f6.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["513791f2d642477abdaaad0dec563e74.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["f65ee6900e3a4e63866c2c1d1bb3f264.5",0,{"resource":{"resourceType":"PORTAL_POWERUP","resourceRarity":"VERY_RARE"},"timedPowerupResource":{"multiplier":0,"designation":"BN_PEACE","multiplierE6":1000000}}],["3c49e6a505df4931ac2f79f81e6756d6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dfd1ce17c08e4a59ac926c134c92d71d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["808d6284a63a40619cc76fb84fff3429.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6838c4435a7444968c389706ce9c1bb4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1d8da7bd09e540b7b0917c4a6f53e5bd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3702a747308643eba906636fd19ce9aa.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["43967a94f16746e9973e8c3a22e33e84.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c5da66ef746646a4aa4fb9d27992f7e4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5057fc34594c46ee950ff2cf16ef2218.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["30549f1360604bcf97af2e77d80ac178.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["d48fc53c919a44efa1ee39b6a5b3c683.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["0eafaaaa8c024237bc029ae89ae7fe1a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["71d077e2e00b460291037575116278ff.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["fe01d19443334007b27c9929c1d4888c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["729fdaaf05334ecba49a0768fe3ecdd9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["b2677bd764624f77858789fa02f57142.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["681de69150064f74bc242663be1aaecd.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["00d66371e8f44bd3b90753a13d8ab768.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["42abc289e8554f9c89de4fe49859b664.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["1c92f0c3c9974af39e02cd9e0bd3b82a.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["304a5a1991e74ff2abcd775cfd801d16.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["03de92295cd94085afc6a27651ff8ad5.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["26623c412715452ca9a05932f71f2baa.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c36319f10d4f437fbef2c7cb81b864ed.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c9d77fecc4074cd58318615de14ae9f7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d2ad53d5b3df4f14ad3a714523c0306c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2c8b881a11694d8087fc1bda1ad33cda.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["96a661ff8f3341a4b1f00694efb3e150.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["5a72d34579ba47e78384900d2a01f2de.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["21e55edbb3ef4304882fc0b77e3e41e8.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["628925d0a56541a6a1ad7e7d98a0a552.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1aa7f510aa3841ca9cc8d41de63465f5.5",0,{"modResource":{"displayName":"Aegis Shield","stats":{"MITIGATION":"70","REMOVAL_STICKINESS":"550000"},"rarity":"VERY_RARE","resourceType":"EXTRA_SHIELD"}}],["4f96e6b1d33448c38fb0f8ae06f0c194.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["00f024fe7ccc426d8442afc89365b2c3.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["203326c2730a415789066193d84c045c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["7cdafceb663949f6bae1d9829621e00c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["417010df96ec4717aaba39148bda0745.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ef8ded3fa3d340b59549facb4fe6d9f4.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["a04bcfe2b9174ee5b2c955daeabb3b52.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e04c0229a1e84e3491fe2b9ee55587ee.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["21e6c278e1aa482a8d606fbb459310d7.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["ae4e995fa55d4e899c27e3a96d08309f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["c9d58f3039aa46dfb45b4d9fcc29423d.5",0,{"modResource":{"displayName":"Turret","stats":{"ATTACK_FREQUENCY":"1500","HIT_BONUS":"200000","REMOVAL_STICKINESS":"200000"},"rarity":"RARE","resourceType":"TURRET"}}],["94a13ea4ac8049f8bfb57149425976d4.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["1e7ab6ab36384276b79bf1edf402746c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3f8c7911bf164d669b5a47660a8c825f.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["4f85d2dcb138463281347eb5a83851a1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["18eae92bf7b240eaab1f4044da19e48f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b5b2410903a84252bcb9e5b6e38c1c4c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["7e3b0c64b4204f40b8a86df3de54fc2c.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0c2501879ee64c4f8b1a25e3130cec4f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["714d4344c661407ab519831a93c176f8.5",0,{"resourceWithLevels":{"resourceType":"ULTRA_STRIKE","level":8}}],["1ddc1e7ce32646728caa8c84c336dcd1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["980a4650d0314516a1960c2d0eb57fb6.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dfee17bf15614539a8c96ef3cc023e63.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["947445194cbe47bba86324b3f7ee5d83.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["0e4e0bbf1eeb452d99a21edc266705bf.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["8e831e547527439db6895a3b33b559f9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["44ac2a126ac04f90a2dc89edfc1af8ce.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9c4aee88f6ff4ff8841030dd87e6e651.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9a632cf5dd5b4bd0ac900096ac32621d.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["abe7a0f998ec40f0930fd1d356f1aa37.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["de936aa4b3d94688a2fff9c91cd498e1.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["b27f6f69cd394abab2ec23524744c83d.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["de54f45e75f74133931be531ec2018e9.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["2ffb0009a8a34ed0819017629d01e439.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["e99500fb2f28482192cf0dc10a07d171.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["489d286f43f3437aa4f39aa419decc4f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["bc342bdaf7c1400080a984af9e4b9703.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["d74a881226b3401f8d676b4440da0d65.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["9019e27bc56b4c1da5bb002f5056677e.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["73a33327aa864e0fbf607932619d43fb.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dba9e3cfcc9e4c19aa2c13d0bbd96be3.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["beecce127e37426da783f87a68d72a21.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["97eed6acf9c649a0afd3f23cb7bb9794.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["f7486fcc58764b26a5c640332714462b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["771ef47ee9324d6bae60edc4218561d2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["42ead91b63834af3836c59f0481d1415.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["acdc5ea5d1ba4ac1a7a0a60fbb6a4898.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["e1443439bbe44645acbd7f6f3ede4458.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["bed91fcea99d4ea9a3931b38783118e4.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["700e56c569594761a03452b14eac0663.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["c0f3e17785db4de19600336750f06332.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["306b703216eb4b71aa90f7000c643003.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["8883b616d2ab4900be69178d6d0b9306.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["6c63583faab5476ab6cfec227349a080.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["2b1526f56c68428ead85e8043a50ad4f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["8e5e60b05f93451e9c7dd986ada487f8.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["9db222e910be4799b8846f4d616cc1fd.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["63f232caca574ab3be937eaeac4f9c03.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":7}}],["a83c2ec9306247b8afb6515a592fe231.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["34483ff68c394f059be0ebf6cb83bd16.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["dc66cf9c6bd14ec9ab7c7d09d323cdae.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["ee48041dfd3646cdbb93f92f13f80d5e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["448263d598b948b6a002db7d7f0ea2dc.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["8af4e266833f4f67935d45117e0c1f3f.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["cc950ac4ea064539b6a7908d5e368827.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["7848c449d45c4261846e3a86b2217957.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["bd0df6bfce6a42ff83f3ac71582bbf48.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["5eed2ca1bb214b5ea39815e678e3894c.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["dd63b4934c6b435da5a4b835ca241455.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["148f0282590548ffb5174a4f3d7d7cb6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["f63835a9e6ff4ea1a2cea1f2ead94f32.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["46e1cca2494e411e9c69b88b1deca272.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["7a20484877d941b69d42456d8d94bfab.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["7fc9796c6ca34fc190681f88a043c422.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["6f80425bda574fd195bb465e4aca4f08.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["093d63f341a84751ad82b8278a7a86bf.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["712cce4b42e3497f886db16d1954f83d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["9d781267ff1b4400a87fa45f2bae8333.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["7560c29e7b11499fb3dc1920d5786b3e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["f05cdc0b3ff34b1eb621dc6b1edbf6ed.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["a47f6b0d84dc49cf80c730bb9485f792.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["27f3d009c6a14abcad31ecb68704f266.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["c89768b539e2430187b381409e7d6d0e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["3cd33d52172741b0a28d37f5fc92c55f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["ff3d628157f14ce69f7df8fd74c0592e.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["4f7214b8853c4fccb7a8da86722c139a.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["0459b1829cb444c9ae652c5b6aa31996.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"30","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"RES_SHIELD"}}],["c3e5c9b5444b4068b66afb4d58e690ba.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["7d9a6b672ab34305b3dd72112fbc42c2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["7a9f1d5604d14123bfdef10ac24c3934.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["3b54227ba4e046c5b68e690b965891e6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["39048f1c8b9049ed81cf2aeaed2b37ad.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["898b7bbd22c74eb3a731e667e570e2e7.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["342f4d723b694843954e0048f44247b1.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["c7eb728eaa324fd9a5c72859d05e15be.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":5}}],["7a700ee561f142b98bb31a4255f599b7.5",0,{"modResource":{"displayName":"Portal Shield","stats":{"MITIGATION":"40","REMOVAL_STICKINESS":"150000"},"rarity":"RARE","resourceType":"RES_SHIELD"}}],["e94bf03b71f6402eb1b8ae7a5d7e21f9.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["fee222be13e843eda07d8813caf214c4.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["31e7d0c638dc4cbda92dc07222913bf5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["b32d5c3fcca64eb6bb19d23ac3e7875b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["2cfa665054b74bb78737301503b472d2.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["8af59d18cbbf4d2bbff8ed4957411f6e.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"700000","REMOVAL_STICKINESS":"0"},"rarity":"VERY_RARE","resourceType":"HEATSINK"}}],["da65c555a10e4a42882df13c3c6acf30.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["d79faefc445a49a0926a83b5af763f4d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["f6bd70ba00cc45bd8e02c0172901450b.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["140b05c3f3e741de9f5089dc6f691050.5",1760628207802,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"da0572f846424746b9a812ea98566b09.16","portalLocation":"000d4d7e,fb3d8c01","portalImageUrl":"https://lh3.googleusercontent.com/2PiU4jyl9pdVJK23vo6Kp58YawXIVZH61kJpZYlnmb2FLGFsggw4K5Cr-K2gpj2paqK9Df_p95cSQ1Aho6-xZvImm5umk69NiCIzm0BiVvY","portalTitle":"Loco Max","portalAddress":"Puente Peatonal, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1760628207792"}}],["c15750289cf441e3b24981c2861ba98d.5",0,{"resource":{"resourceType":"KEY_CAPSULE","resourceRarity":"VERY_RARE"},"container":{"currentCapacity":100,"currentCount":86,"stackableItems":[{"itemGuids":["ca7d36fc73d4410eaf562442228371b2.1b"],"exampleGameEntity":["c297c8473be14cdead87f0367ad2c869.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"af5bebfd4db94ef7ab1c8cf7d09e0907.16","portalLocation":"000d4438,fb3d932e","portalImageUrl":"https://lh3.googleusercontent.com/pwCl54jSK--BVcJ1kp8_IrXjf99I6GHvQ7qAmECKPA33ci9gvq7xcph4r9eC-1Du5zlXACwUv1Q1ZuJCFPcIu1P2fWSp5YWQutZiFWFXjevD","portalTitle":"Mural Frutero","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156629"}}]},{"itemGuids":["b06e9de9975642459c4776aa4681bcb0.1b","ec2d0cd9283e45fc8139e387afa2543d.1b","e9e4c23052744dda9e1856e13ee4f21e.1b"],"exampleGameEntity":["9aa043899c54476f91dace50c96a38ea.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"f2a0c92dc00d4544bbef6a79961bf48a.16","portalLocation":"000d3c3e,fb3d8e49","portalImageUrl":"https://lh3.googleusercontent.com/d9N57vJipEBYyPvGvDarvy_mJ6kdVPX-wCAPVEhaLAE50wV1yEN3yRlTMdXBs6p-UUNO5YW9-TVKuxBCCfyAQsCjQ-NbEhKSsPt8G6m3FV8","portalTitle":"Juegos Infantiles","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156641"}}]},{"itemGuids":["8a6b15a76ba249039e1b04700cdecf54.1b","17380dd53ab14322aa6ee21833efaaea.1b","caf0836f03f3408695d0e7baf866466b.1b"],"exampleGameEntity":["8b6dac2057a34b6f9cbffaf14bf009bd.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"5fc5593d615247979b8e117b01ca599f.16","portalLocation":"000d50ab,fb3d98b8","portalImageUrl":"https://lh3.googleusercontent.com/Cu9Fhklp3npcKA31lAU9qi-GaFhjVqBSCy2jUIdKEDttO8fn4RM_3lOvTEqec463gKp80LF1dviWW-g_wHY0cObZ_AZX36RZOn2DsrjQqHk","portalTitle":"Mural cigüeña","portalAddress":"Avenida Malecon Playa Atacames 21, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156665"}}]},{"itemGuids":["d42a9e7aa76a4f4b9b16303aa0686466.1b","a522f734d99e49208be8adb7ffd2aa78.1b"],"exampleGameEntity":["2f28132262a14b1a9537b64e3dec32be.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"cae5106d1f543afeb20ee3bc7a49073b.16","portalLocation":"000d3ecd,fb3d8451","portalImageUrl":"https://lh3.googleusercontent.com/Nv0LF9guUyH9RGnq3n88fP3RFlXuzZotb3N4TLJIhA6_NENqwenMAap0H6J1lxUdEECo1R0pMc07OJak5SjLepnnFogZLdqQwJegHPkhHtNx","portalTitle":"Mural La Bolonera","portalAddress":"V49W+48V, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156666"}}]},{"itemGuids":["1639033bd72c46e9b41012290716bbe9.1b","d35d917d78bf4028922fd03090d46ab7.1b","5f001297c7a74fb8805dcb3a4af010cc.1b","b87c1b7b8c2e48a8a8da313752915f18.1b"],"exampleGameEntity":["1db1b67215e04516b9a8418e9a3ddb7b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"dbb238809d42492181e27a6284348e64.16","portalLocation":"000d3e75,fb3d82b9","portalImageUrl":"https://lh3.googleusercontent.com/2ldjx2KEqmAOVU97dueby8HkQiUQt_VUPMosHIgeGCfbMswubhTi0xR-B-ZDUl5P2NkkwFdNnovel3UbOcGupMZPAcRJ2khUBbRUIT4hu0PY","portalTitle":"Mural Delfines","portalAddress":"38, Vista al Mar 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156622"}}]},{"itemGuids":["bc831c892bf34800bc3b1ed572690d82.1b"],"exampleGameEntity":["ccbe2cfae041475b9a9e89a8df3ea5dc.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"710a02c227b5453cace35bd78577efee.16","portalLocation":"000d44b9,fb3d888f","portalImageUrl":"https://lh3.googleusercontent.com/ElzSs2AVpcOrlGRG8Vu5XCLN0mEmcKfnJJP1svO3cvaWuAdZLX_m6AG9OzSh_QZWpzeGK8WjJBZ9zHVPvArNpvtU5-c8NmFU4EU2t2HgvLr0","portalTitle":"Grafiti Cultural Atacames","portalAddress":"Puente Peatonal, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730982972116"}}]},{"itemGuids":["95efd298b73e4fa9a43dd7de7fe88c02.1b","2f65b621d68c4ada888c7114d3f046fd.1b"],"exampleGameEntity":["19f324847c274e12bfb85d03d1308b4c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ea3c8fd8684f33a28998c31f4af60780.16","portalLocation":"000d417e,fb3d8f6f","portalImageUrl":"https://lh3.googleusercontent.com/xrLWJq5jTXqrcX3-Tgaq87XWjVw6lVcpZjjyxYQU33MhmViRCqnOZLPOwSq_wxiHUTcBsWZeXqAABxXVf-0bAVLnwQ-gZWLdU1GJb0kDoTyu","portalTitle":"Iglesia Cristiana Misionera Ministrando con Poder","portalAddress":"Via principal, calle roberto luis servante ,frente a pintulac, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156628"}}]},{"itemGuids":["78d74f1af0bd4465be737be7cc976251.1b","43e105c98e2045ddbfa257190ce994b8.1b"],"exampleGameEntity":["d85edc4591e749c4857b8872f8be3a66.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"6de8c4865c473f98b367df3a27c9da8b.16","portalLocation":"000d3e96,fb3d8382","portalImageUrl":"https://lh3.googleusercontent.com/uaacTxpmTBBmDL2pD5lmjrBYKfqN69YP11kLiBanOIyigINIkS4eHU2_-lmuJnZq0hXKTx8gd9y4y3jE-vwbdd_IilIsWWH044V25ZkqYV7LkA","portalTitle":"Mural La Marimba","portalAddress":"10, El Rosario 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156663"}}]},{"itemGuids":["9b6fe567e2f84a4f8f5878b230ff1cdd.1b"],"exampleGameEntity":["8b1b1a6d3bd14cbc9f665f86fa28fd4e.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"a9ea2fd6c405330f99b7ac7a62e1d2b0.16","portalLocation":"000d57a7,fb3d9ae4","portalImageUrl":"https://lh3.googleusercontent.com/ySuhvXV_SSK4-wJ4Alj3umn3zrBRLtQcMjjqCgsosAeO6s1M3g4rQ8VSfwa29GWOXQScmOCNfQS0iElpHhoocJ3VNOtbkABYB8TNneVUeYQ","portalTitle":"Mural Al Mojito","portalAddress":"Mal. del Mar 80151, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156668"}}]},{"itemGuids":["df65605f8e244ae8b33167f63a517371.1b","3a5da6fa2af345bcb84f957136e95c27.1b","6de68e6bc01544d983ed2889bc962734.1b","2b679c1180ae4f2dafc5d941b8345738.1b","483656edb2844de78de2aa991584fef2.1b","c68dc9e7f1204e4ba15f47b65040913a.1b"],"exampleGameEntity":["088d97d4a3ad4a2fbefd321b0123150c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"aed75d334e2e493a9ebf18a9bb3b5503.16","portalLocation":"000d4115,fb3d8a5a","portalImageUrl":"https://lh3.googleusercontent.com/0SOaMqydPVl0kqUimgn1CZaoNcmCXoLWLX_5SoLeYWtzCPErgtPI89ZwEG2RLQXQw_wrsL2LKn92V99dfmFzViyx5hPM8J1iLemtIRw_uiA","portalTitle":"Monumento A Los Pescadores","portalAddress":"Puente Peatonal, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156648"}}]},{"itemGuids":["868ac3298ce14e5c82e2a91d1ac901f9.1b","da7f8bb0b0314472b7832dca0b480b02.1b","b88e525d0b0e4c10a9775f904162cbc9.1b"],"exampleGameEntity":["88ca7ef2a13a43d7ae268180ac28320f.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b89118bf91a94eafba3d79c4ebd84381.16","portalLocation":"000d3fd7,fb3d8b82","portalImageUrl":"https://lh3.googleusercontent.com/ynLejll3XqLWXRqP9ITGvYNbXn1xABZMV_jU9zhg3trwNC2r0ZkKT8BBWx0Q4VM9uiQqOO5U6rxAifqBGAwgnV_G9sixCEHyJkwovB8n8Xhn","portalTitle":"Camara De Turismo Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156661"}}]},{"itemGuids":["d649f552de3e490a821946c1d94cd539.1b","1e97d8e889114fe7b23842cc6f786d38.1b"],"exampleGameEntity":["29ddc0e6318d42508523b95d2f755edc.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"291b9f32e8c74a78a2c8ad60791e9947.16","portalLocation":"000d4321,fb3d8bd6","portalImageUrl":"https://lh3.googleusercontent.com/_xgGF3JhVgnEEo8LJ9N9HuFAJVJ3sourjV_zWr9-HTX4Nr7zAGm4DmxuyTEep6ZGRVOnaBsq3we1ucgbSOAgBuo0VvTeREZmJ6Ru_JGgX3rF","portalTitle":"La Sirena","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156637"}}]},{"itemGuids":["b5d2808e69f44b5a93995cf28720ad20.1b","1ead4f276d2b41f4ad7adacfab1ea2a9.1b","d03a17d6ce664757930df288d413e2e7.1b","f2365853abf342b9a37fed76b32d18b4.1b"],"exampleGameEntity":["c92cd1c04abd4b719c795af694650d8d.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2cf608b4585e36ceb829435dc07e4af0.16","portalLocation":"000d3ef5,fb3d85f5","portalImageUrl":"https://lh3.googleusercontent.com/UfQIuzoQfRASJ9EbGYr07Npzth128O5E7-HT0fg6kMKhnZ6xwLPKW6B-f1IZE39BnIyet93G58VCDvTp5OGUdhlL3hgkxjIw8frhxwHvdac","portalTitle":"Mural La Banana Acuática","portalAddress":"V49W+49X, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156633"}}]},{"itemGuids":["7529a5863fde46fea1d53489c38d4c6a.1b"],"exampleGameEntity":["36263f8de7494dacacdb80dd18e267fa.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"567a43df1d6539769df6d686962a4d7c.16","portalLocation":"000d50ac,fb3d99c1","portalImageUrl":"https://lh3.googleusercontent.com/KAzDhFY5ZJZ1s1eysm9iZyR6RCVbCtPzKKRCeUmcDtl7n05Gs57XSpQDrbUqA0eaJ3F_8BXa-YPsxUFm8UGUoja1zrBkCtHaV1l1ZOP51lSV","portalTitle":"Pergolas De Descanso Manglares De Atacames #2","portalAddress":"V5F2+C78, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156635"}}]},{"itemGuids":["61c8633c41d146b382513898d5c186f8.1b","da7d219278f7407bb00d2c95e1d84e7d.1b"],"exampleGameEntity":["66d6780929fb4f038bdde26c444e3cbb.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"96b8304c1a9443179672952a7a0a09dc.16","portalLocation":"00050389,fb434f8c","portalImageUrl":"https://lh3.googleusercontent.com/QghwvqHudz86m_1RHBDXgW8rB1dAO7lYOAZtKBt75aJL20XgFHQltR27XuAOirbbJB4tx1PrOKinVXfqdpfaxkwL3xFNPCC3MopdrQeYZuc","portalTitle":"Letras Quininde","portalAddress":"Lineal QUININDE Park, Unnamed Road, Quinindé, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1710291423619"}}]},{"itemGuids":["640d066a40d34f13a09eb37d1af8795b.1b"],"exampleGameEntity":["bbfc6c8e8f194b209f9b624187566210.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"cef6241af94e45fa906bf99bc10c98cb.16","portalLocation":"000d489c,fb3d9e07","portalImageUrl":"https://lh3.googleusercontent.com/AaTw_s5dWkWmqYIiPwqzhiHO_bvuUF7Txm21yZ-ZHCIKEYNSYf60zdzbFwrvefL0aeufyYH4KgFPI3Jef5CqxK7e5OcZOOj_r0sfjxe_Y9jsZQ","portalTitle":"Fiscalía de Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156660"}}]},{"itemGuids":["10279f1d914b403ba28e8f3946ed9a79.1b","3694ed38e14742389fa467795fd085ee.1b","4648c2def578424f9c941a910f810c20.1b"],"exampleGameEntity":["9b4b495f97ff41b880d48109a51c6dc5.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"71e2c9be811440a0b2ca6c153c79d812.16","portalLocation":"000d44c8,fb3d7e36","portalImageUrl":"https://lh3.googleusercontent.com/IV9eOvjbdaqXQUKaOBUsnFOk-4PpOyuNrlafRkp2YYS9rt2ewkn9-qj3trGr5kN672GKCaAEdFjmAn-5jC0zVErWoZgg-fg9RDHeJ3W1SNH2","portalTitle":"Juegos infantiles del Sol","portalAddress":"Nueva Granada 5, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156610"}}]},{"itemGuids":["16f374ad169f4cfea3fb71d7c06c4c14.1b"],"exampleGameEntity":["53aaa25892384c67951e1b175bfaa3fb.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"ac2a04349d1e3cb4b2e98b0812b02ba8.16","portalLocation":"000d553e,fb3d9711","portalImageUrl":"https://lh3.googleusercontent.com/KFkmNfj4gvC3SXiSHCbRkvPM46mqS3PY-p2fWaK3Fn3tqPiiuWct2CuzlZs1jurY4KPWlpuRbnFQRIv4dbE-HBFW0aJ8gOiV88X7jAJqYSQ","portalTitle":"Mural La Tortuga Marina","portalAddress":"V5F2+F4M, Atacames Canton, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156657"}}]},{"itemGuids":["1a6a82562c484ea388736e5f8056f34d.1b","c5d90527e80d4c9092e973df7aec87a1.1b","a4ee4b59934f45f8a114c50c503903d2.1b"],"exampleGameEntity":["327ea357dcda4d9eadec6f63520e170b.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7d26e76297ae3d368b2427796b9cdf02.16","portalLocation":"000d3f1e,fb3d8799","portalImageUrl":"https://lh3.googleusercontent.com/v1avuInhwpsgVyB_n_8RDavneI50fLAOuoU2siPCLOO21bFPNi9dZZgfvyMiownmg9XZKfhrZxJS3xpTC2_zPM9L8Fb8IEg_qtDvm50R5eMM","portalTitle":"Mural El Surf","portalAddress":"V49W+4CW, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156595"}}]},{"itemGuids":["529ed1e414874ab38b703da8534110f8.1b","a496048fb1714f20b369d809a8ab57c6.1b","b6528564ff0e465b8be8276c7a7d188d.1b"],"exampleGameEntity":["d853fc9b5beb49f795aa8e2cdc5f84f6.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"89adf77fe9b348f99626414e78c58ca3.16","portalLocation":"000d55aa,fb3d9867","portalImageUrl":"https://lh3.googleusercontent.com/jXwupHeL5IHXqry_HACQe-6v63WNZ6UUdZCrvgsdvN2EiG2loSa_zH22zw5f08BH3GQqI5rt9TFsl06o4QWNMeVQE5qxEjx5QtoBtyuw6j3wkQ","portalTitle":"La Marimba","portalAddress":"Malecón del Mar, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156638"}}]},{"itemGuids":["d78fd0117749404caac3467345cc6c7b.1b","0cc3f7a2620345c894dd752ffce0ea8b.1b"],"exampleGameEntity":["b8b84cf30e2c4d68a90fafc03d61342c.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"33f53994be763f7fbc5eb07ab749ce47.16","portalLocation":"000d53a4,fb3d9476","portalImageUrl":"https://lh3.googleusercontent.com/aTQewkhKQ2YlMCOCREdk3YuWOFx-GsZUTU5hu-tDA0oT3gnfdZ48r1TEl_awSFACKo4xrg2H9zdckhK_TEB_uTJD697yZB8wTxwXmv-lZHo","portalTitle":"Mural La Chica Azuliz","portalAddress":"V4FX+7V8, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156596"}}]},{"itemGuids":["0b37ae43321a45618aa7489b5a408087.1b","8ec412c5898a45bba53a937fba46388c.1b"],"exampleGameEntity":["cad5ffa1175d412ab41882da5dfd94a8.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7d0942efd53f37919059002cdd894e52.16","portalLocation":"000d3ed7,fb3d851f","portalImageUrl":"https://lh3.googleusercontent.com/nCKCqD6m44JlbaY5SXUhJA4hNfYiOzrka2xp9eFazxJS_ZrDrsgwRTtwdDEWcXgHYiRPxlAMGXGH0L0y27irzKlRCxAbLu_U9dOLZqexOIMh","portalTitle":"Mural Santa Rosa De Lima","portalAddress":"V49W+48V, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156655"}}]},{"itemGuids":["b65c98a0da394a4b9f1a260329313edb.1b"],"exampleGameEntity":["7e52eec70daa43d886e0ae1ea8e4c0f5.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"b57f02a2fff24b33b26e429934a4bb5d.16","portalLocation":"000d443f,fb3d9cff","portalImageUrl":"https://lh3.googleusercontent.com/hmBtXKya-Umra_mTUNT6Qzo6bEBu1gLJGCjosX-sAMivE1_gyGYqyCWwMaQHmSSbSHxXZTciPaKefcpyQLhKFki9ZjZ3KKZC0sYjKjAEEUK0","portalTitle":"Los Juegos Del Parque","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156626"}}]},{"itemGuids":["f179c51cb4f442c48c2ff1798a1e22a4.1b","8f53dcd880274fb6aed952c9640b9639.1b"],"exampleGameEntity":["79324f9793df43e9a5614a26b59ca794.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"1e10fa7cc0834012b95a610e299364f2.16","portalLocation":"000d5387,fb3d95c2","portalImageUrl":"https://lh3.googleusercontent.com/axnHle22GH6KY45LFkKohR2s7jvc9R-jiCz13reZ2f5LAlZ27GVTQwdOTXwJ35kmk2pjJXer6apdYdh_Jztzyc7-cFzM28636xcNKDhAuprv","portalTitle":"Mural El Barco Fritz","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156614"}}]},{"itemGuids":["728b8356ccb948e59f0aa67786152d9a.1b","0ee29b680c2947b8ac27af8452885a69.1b","709ca364ce864592b5a3241ad49d02e5.1b","4e6259b21ee141f5b8120f1390bc8ae9.1b","8acb1e9e2db44f439deb16cbb146a64c.1b","38c2711a698547d0a96d8d4ffd03ad1c.1b","142146875abe4f95b823688cf29f1db2.1b","462fbb13139443549bbf0beb371b82dd.1b","1b33957f3a3a4094add8a74096f372f7.1b","1b2fc5e58aa649048a9af03c200bc0a5.1b","58a02cbca66d4e7a8b146d09920cacd8.1b","d62733a214da456da224490e0af330fb.1b","269e06716d25417f805d14b567628f26.1b","fb5acb199ab14e7dbaa25aea7c26558f.1b","62d47bf7a61940d883aa664844791a32.1b","f87f20d7e3ad429ebbdd6cca1665a859.1b","20ac4474caa2489a85c533370f8c0fea.1b","01f7eff1dd0a46d8a6e8102d8719c04f.1b","5395928e09ef4272a7d424e8a6775058.1b"],"exampleGameEntity":["325c8d63398544e9bfa9e7eda886e0f6.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"0afbad6b54d149ad92611a5c0fbedd20.16","portalLocation":"000d5348,fb3d937f","portalImageUrl":"https://lh3.googleusercontent.com/RjV8x1But1hlX4zMI5II3OhlkuSawEKtrlufRkwxduiA3wqFF8LT5yTHylyvWiDqfKON9UPgpaczob-NV8gDDuJ7usIUDPsUVuAOj1nZXmK0SA","portalTitle":"Bull Dog Playero","portalAddress":"Atacames, Malecon de la playa., Esmeraldas, Atacames 080650, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156612"}}]},{"itemGuids":["331bf1355fcb4a44afe424d78b1273e0.1b","b448ecb0da2848d890e641663e8a8a00.1b"],"exampleGameEntity":["90c95110000841c7bbc66f3419e79ffc.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"d1bdf6a6c4534c0ca46a6b9ba35d131f.16","portalLocation":"000d3f19,fb3d86c7","portalImageUrl":"https://lh3.googleusercontent.com/aRGmVAAlbAn3xmlYD1YNQ1rUfvkn03LBBM4t_yGereyTk348CI-G4eJW1tJjJXgRvA7IMuj905yg_PBJjo7YcwjBQBe0RJEvgXmOSBLmNnyk","portalTitle":"Galeria de arte Atacames","portalAddress":"7, El Rosario 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156620"}}]},{"itemGuids":["9b965dd9ac124b34a229a7a310ae18de.1b"],"exampleGameEntity":["ba0bd36144d24210afce6b578b42000d.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"2cd1717b38964aac9546d5ed394c3e3a.16","portalLocation":"000d3ada,fb3d8fcb","portalImageUrl":"https://lh3.googleusercontent.com/so6sZzbNG1z-7fEzsLa_fltyrclYvENIPmFKkPNLSQIu7ZA_7AhwTSkGVZ0QMhSSZgfJQ1tlLrA89y-UQbOf-MKWJ4Rj2J8-AEpiVOAIppjq","portalTitle":"Cancha De Básquet","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156631"}}]},{"itemGuids":["de78a304f8ad4b16b8d2984906cc100d.1b","53d6aeb108cb4c2699cd7d73227a9499.1b","cbcca5288bd54a018aef63745947e772.1b"],"exampleGameEntity":["de8a9ed6ac5f4de8a4d8f4835022524a.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"40779a80c30c454db3b0cba76179abe8.16","portalLocation":"000d40f9,fb3d9541","portalImageUrl":"https://lh3.googleusercontent.com/o3doX2XwSH2fNLkwdk1pFKQ8aWBT5AYuXf9lijX1tU5t5tyVcNdt14Lu-vkxRQFmC_KhmfCtV9p_1C7SAudZXV4Ksscoz5Tge1fsT1bJTpG3","portalTitle":"Coliseo Municipal Sebastián Valencia","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156617"}}]},{"itemGuids":["2083ce46415044aca798cee291cb9e88.1b","7aa98ecfe95443beae2d4ea402d6cf01.1b"],"exampleGameEntity":["dfac7cf05f2e46b9b369f4399eca8017.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7aae03821d3a4570b18080dfa43c5cbc.16","portalLocation":"000d3cf5,fb3d8b4e","portalImageUrl":"https://lh3.googleusercontent.com/M5c7YVQYQyHgB9OGjjTLtbeWcmBjC8pEI8Tpksi1zpQmck8MgT-ih-yIgMqyRoBEGTuHcFe-JdD-hc2i4-3uh24zwVHbrXIfjTImFhqldHg","portalTitle":"Iglesia Nuevo Amanecer","portalAddress":"7, El Rosario 080305, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156640"}}]},{"itemGuids":["9587dc1af0df4336b89a8132c46931ed.1b","ea34cb139d974943b8c89cf3036327a7.1b","6174ed95114d465c8f52243857eb88b6.1b"],"exampleGameEntity":["38b976aa50414beb89647843cabf1162.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"91ebe2b830463619b7d50fb3f09bc1bd.16","portalLocation":"000d4101,fb3d9a28","portalImageUrl":"https://lh3.googleusercontent.com/V2dzZ9A8AigSE5nkrOaVN8CrYdz7-sI1czsbaF_RmPIPCpcZmKBWn_JqmLTUAbZQybQEbllwbwD0Ik8ywS9L1hj4iVY-cYrwsuQZpnksWBug","portalTitle":"Mural La Vida Submarina","portalAddress":"Sexta 2620, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156649"}}]},{"itemGuids":["ec6ecf6d030643849e3c476d27a04282.1b"],"exampleGameEntity":["2d95479b56e245aaaba6b0a8d23b7887.5",0,{"resource":{"resourceType":"PORTAL_LINK_KEY","resourceRarity":"VERY_COMMON"},"portalCoupler":{"portalGuid":"7be1528d041146f48f15a41975108ff1.16","portalLocation":"000d45da,fb3d9d46","portalImageUrl":"https://lh3.googleusercontent.com/gBXWCD_d52Y31fLi7rMicpI9_1ZbLlSlQd3oNP_BWtFsuceIY6ZsyVrDqvU28D36iA9mm3caYmyJAG4TsgZ2h1EtUXukiWISdImKDk73I8sOxg","portalTitle":"Iglesia De Atacames","portalAddress":"Unnamed Road, Atacames, Ecuador"},"inInventory":{"playerId":"bb9d6aa75c924a0f98a8dd2483334d56.c","acquisitionTimestampMs":"1730983156670"}}]}]},"moniker":{"differentiator":"FE758180"}}],["38f3a18b67fd4ac2a0c9fae829485ea0.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["56f41df3d5ad4786877eaf39901f38e8.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["05082336a9b5457fa1ea944e6dfd749d.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["36fd8df2e8dd494795678bb1e2f6a585.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["4f7866ffb0504c3eaa15aa21e7b0b7d1.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":4}}],["4f2badd3e37c49d68d6a74a821a6dd20.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":8}}],["6011cfdbec0e4ae1b640b9b55b842fc9.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["942a45c2294b43e6aa95077f4bb0f1d6.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["e8f32ac83ff7401d9dfbeb5b890662ef.5",0,{"modResource":{"displayName":"SoftBank Ultra Link","stats":{"LINK_RANGE_MULTIPLIER":"5000","LINK_DEFENSE_BOOST":"1500","OUTGOING_LINKS_BONUS":"8","REMOVAL_STICKINESS":"150000"},"rarity":"VERY_RARE","resourceType":"ULTRA_LINK_AMP"}}],["4a7bef8cf3c242b486180cd9c7c3c473.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["78347685eaad49568552ba0f27b652c5.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["b8e607e75d1d4068a8719e0ddeb0db2f.5",0,{"resource":{"resourceType":"BOOSTED_POWER_CUBE","resourceRarity":"VERY_RARE"}}],["86a4b7c7e5414c4ab29cffe29dc25346.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["c94e516d8863499fade4cd622aa45ccd.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":8}}],["c22358b0cc124c078a465482d56b6aea.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["c5fa6b90c45c420c9c539a37182f641f.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["26c47d4f685e4ec7ae86fa06f9a94eea.5",0,{"modResource":{"displayName":"Heat Sink","stats":{"HACK_SPEED":"200000","REMOVAL_STICKINESS":"0"},"rarity":"COMMON","resourceType":"HEATSINK"}}],["41e9657bbffa4a23a3df7272c1bab999.5",0,{"resourceWithLevels":{"resourceType":"EMITTER_A","level":6}}],["825aa36646eb4c4ab1e913aaab74fac0.5",0,{"resourceWithLevels":{"resourceType":"POWER_CUBE","level":8}}],["22b268e457664e508b614b5658b77f75.5",0,{"resourceWithLevels":{"resourceType":"EMP_BURSTER","level":6}}]]}');
        },
        148: (module, exports) => {
            exports.__esModule = !0, exports.default = function(Handlebars) {
                "object" != typeof globalThis && (Object.prototype.__defineGetter__("__magic__", function() {
                    return this;
                }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
                var $Handlebars = globalThis.Handlebars;
                Handlebars.noConflict = function() {
                    return globalThis.Handlebars === Handlebars && (globalThis.Handlebars = $Handlebars), 
                    Handlebars;
                };
            }, module.exports = exports.default;
        },
        201: (module, exports) => {
            exports.__esModule = !0;
            var handlebars = function() {
                var parser = {
                    trace: function trace() {},
                    yy: {},
                    symbols_: {
                        error: 2,
                        root: 3,
                        program: 4,
                        EOF: 5,
                        program_repetition0: 6,
                        statement: 7,
                        mustache: 8,
                        block: 9,
                        rawBlock: 10,
                        partial: 11,
                        partialBlock: 12,
                        content: 13,
                        COMMENT: 14,
                        CONTENT: 15,
                        openRawBlock: 16,
                        rawBlock_repetition0: 17,
                        END_RAW_BLOCK: 18,
                        OPEN_RAW_BLOCK: 19,
                        helperName: 20,
                        openRawBlock_repetition0: 21,
                        openRawBlock_option0: 22,
                        CLOSE_RAW_BLOCK: 23,
                        openBlock: 24,
                        block_option0: 25,
                        closeBlock: 26,
                        openInverse: 27,
                        block_option1: 28,
                        OPEN_BLOCK: 29,
                        openBlock_repetition0: 30,
                        openBlock_option0: 31,
                        openBlock_option1: 32,
                        CLOSE: 33,
                        OPEN_INVERSE: 34,
                        openInverse_repetition0: 35,
                        openInverse_option0: 36,
                        openInverse_option1: 37,
                        openInverseChain: 38,
                        OPEN_INVERSE_CHAIN: 39,
                        openInverseChain_repetition0: 40,
                        openInverseChain_option0: 41,
                        openInverseChain_option1: 42,
                        inverseAndProgram: 43,
                        INVERSE: 44,
                        inverseChain: 45,
                        inverseChain_option0: 46,
                        OPEN_ENDBLOCK: 47,
                        OPEN: 48,
                        mustache_repetition0: 49,
                        mustache_option0: 50,
                        OPEN_UNESCAPED: 51,
                        mustache_repetition1: 52,
                        mustache_option1: 53,
                        CLOSE_UNESCAPED: 54,
                        OPEN_PARTIAL: 55,
                        partialName: 56,
                        partial_repetition0: 57,
                        partial_option0: 58,
                        openPartialBlock: 59,
                        OPEN_PARTIAL_BLOCK: 60,
                        openPartialBlock_repetition0: 61,
                        openPartialBlock_option0: 62,
                        param: 63,
                        sexpr: 64,
                        OPEN_SEXPR: 65,
                        sexpr_repetition0: 66,
                        sexpr_option0: 67,
                        CLOSE_SEXPR: 68,
                        hash: 69,
                        hash_repetition_plus0: 70,
                        hashSegment: 71,
                        ID: 72,
                        EQUALS: 73,
                        blockParams: 74,
                        OPEN_BLOCK_PARAMS: 75,
                        blockParams_repetition_plus0: 76,
                        CLOSE_BLOCK_PARAMS: 77,
                        path: 78,
                        dataName: 79,
                        STRING: 80,
                        NUMBER: 81,
                        BOOLEAN: 82,
                        UNDEFINED: 83,
                        NULL: 84,
                        DATA: 85,
                        pathSegments: 86,
                        SEP: 87,
                        $accept: 0,
                        $end: 1
                    },
                    terminals_: {
                        2: "error",
                        5: "EOF",
                        14: "COMMENT",
                        15: "CONTENT",
                        18: "END_RAW_BLOCK",
                        19: "OPEN_RAW_BLOCK",
                        23: "CLOSE_RAW_BLOCK",
                        29: "OPEN_BLOCK",
                        33: "CLOSE",
                        34: "OPEN_INVERSE",
                        39: "OPEN_INVERSE_CHAIN",
                        44: "INVERSE",
                        47: "OPEN_ENDBLOCK",
                        48: "OPEN",
                        51: "OPEN_UNESCAPED",
                        54: "CLOSE_UNESCAPED",
                        55: "OPEN_PARTIAL",
                        60: "OPEN_PARTIAL_BLOCK",
                        65: "OPEN_SEXPR",
                        68: "CLOSE_SEXPR",
                        72: "ID",
                        73: "EQUALS",
                        75: "OPEN_BLOCK_PARAMS",
                        77: "CLOSE_BLOCK_PARAMS",
                        80: "STRING",
                        81: "NUMBER",
                        82: "BOOLEAN",
                        83: "UNDEFINED",
                        84: "NULL",
                        85: "DATA",
                        87: "SEP"
                    },
                    productions_: [ 0, [ 3, 2 ], [ 4, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 13, 1 ], [ 10, 3 ], [ 16, 5 ], [ 9, 4 ], [ 9, 4 ], [ 24, 6 ], [ 27, 6 ], [ 38, 6 ], [ 43, 2 ], [ 45, 3 ], [ 45, 1 ], [ 26, 3 ], [ 8, 5 ], [ 8, 5 ], [ 11, 5 ], [ 12, 3 ], [ 59, 5 ], [ 63, 1 ], [ 63, 1 ], [ 64, 5 ], [ 69, 1 ], [ 71, 3 ], [ 74, 3 ], [ 20, 1 ], [ 20, 1 ], [ 20, 1 ], [ 20, 1 ], [ 20, 1 ], [ 20, 1 ], [ 20, 1 ], [ 56, 1 ], [ 56, 1 ], [ 79, 2 ], [ 78, 1 ], [ 86, 3 ], [ 86, 1 ], [ 6, 0 ], [ 6, 2 ], [ 17, 0 ], [ 17, 2 ], [ 21, 0 ], [ 21, 2 ], [ 22, 0 ], [ 22, 1 ], [ 25, 0 ], [ 25, 1 ], [ 28, 0 ], [ 28, 1 ], [ 30, 0 ], [ 30, 2 ], [ 31, 0 ], [ 31, 1 ], [ 32, 0 ], [ 32, 1 ], [ 35, 0 ], [ 35, 2 ], [ 36, 0 ], [ 36, 1 ], [ 37, 0 ], [ 37, 1 ], [ 40, 0 ], [ 40, 2 ], [ 41, 0 ], [ 41, 1 ], [ 42, 0 ], [ 42, 1 ], [ 46, 0 ], [ 46, 1 ], [ 49, 0 ], [ 49, 2 ], [ 50, 0 ], [ 50, 1 ], [ 52, 0 ], [ 52, 2 ], [ 53, 0 ], [ 53, 1 ], [ 57, 0 ], [ 57, 2 ], [ 58, 0 ], [ 58, 1 ], [ 61, 0 ], [ 61, 2 ], [ 62, 0 ], [ 62, 1 ], [ 66, 0 ], [ 66, 2 ], [ 67, 0 ], [ 67, 1 ], [ 70, 1 ], [ 70, 2 ], [ 76, 1 ], [ 76, 2 ] ],
                    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
                        var $0 = $$.length - 1;
                        switch (yystate) {
                          case 1:
                            return $$[$0 - 1];

                          case 2:
                            this.$ = yy.prepareProgram($$[$0]);
                            break;

                          case 3:
                          case 4:
                          case 5:
                          case 6:
                          case 7:
                          case 8:
                          case 20:
                          case 27:
                          case 28:
                          case 33:
                          case 34:
                          case 40:
                          case 41:
                            this.$ = $$[$0];
                            break;

                          case 9:
                            this.$ = {
                                type: "CommentStatement",
                                value: yy.stripComment($$[$0]),
                                strip: yy.stripFlags($$[$0], $$[$0]),
                                loc: yy.locInfo(this._$)
                            };
                            break;

                          case 10:
                            this.$ = {
                                type: "ContentStatement",
                                original: $$[$0],
                                value: $$[$0],
                                loc: yy.locInfo(this._$)
                            };
                            break;

                          case 11:
                            this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                            break;

                          case 12:
                            this.$ = {
                                path: $$[$0 - 3],
                                params: $$[$0 - 2],
                                hash: $$[$0 - 1]
                            };
                            break;

                          case 13:
                            this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], !1, this._$);
                            break;

                          case 14:
                            this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], !0, this._$);
                            break;

                          case 15:
                            this.$ = {
                                open: $$[$0 - 5],
                                path: $$[$0 - 4],
                                params: $$[$0 - 3],
                                hash: $$[$0 - 2],
                                blockParams: $$[$0 - 1],
                                strip: yy.stripFlags($$[$0 - 5], $$[$0])
                            };
                            break;

                          case 16:
                          case 17:
                            this.$ = {
                                path: $$[$0 - 4],
                                params: $$[$0 - 3],
                                hash: $$[$0 - 2],
                                blockParams: $$[$0 - 1],
                                strip: yy.stripFlags($$[$0 - 5], $$[$0])
                            };
                            break;

                          case 18:
                            this.$ = {
                                strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                                program: $$[$0]
                            };
                            break;

                          case 19:
                            var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], !1, this._$), program = yy.prepareProgram([ inverse ], $$[$0 - 1].loc);
                            program.chained = !0, this.$ = {
                                strip: $$[$0 - 2].strip,
                                program,
                                chain: !0
                            };
                            break;

                          case 21:
                            this.$ = {
                                path: $$[$0 - 1],
                                strip: yy.stripFlags($$[$0 - 2], $$[$0])
                            };
                            break;

                          case 22:
                          case 23:
                            this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                            break;

                          case 24:
                            this.$ = {
                                type: "PartialStatement",
                                name: $$[$0 - 3],
                                params: $$[$0 - 2],
                                hash: $$[$0 - 1],
                                indent: "",
                                strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                                loc: yy.locInfo(this._$)
                            };
                            break;

                          case 25:
                            this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                            break;

                          case 26:
                            this.$ = {
                                path: $$[$0 - 3],
                                params: $$[$0 - 2],
                                hash: $$[$0 - 1],
                                strip: yy.stripFlags($$[$0 - 4], $$[$0])
                            };
                            break;

                          case 29:
                            this.$ = {
                                type: "SubExpression",
                                path: $$[$0 - 3],
                                params: $$[$0 - 2],
                                hash: $$[$0 - 1],
                                loc: yy.locInfo(this._$)
                            };
                            break;

                          case 30:
                            this.$ = {
                                type: "Hash",
                                pairs: $$[$0],
                                loc: yy.locInfo(this._$)
                            };
                            break;

                          case 31:
                            this.$ = {
                                type: "HashPair",
                                key: yy.id($$[$0 - 2]),
                                value: $$[$0],
                                loc: yy.locInfo(this._$)
                            };
                            break;

                          case 32:
                            this.$ = yy.id($$[$0 - 1]);
                            break;

                          case 35:
                            this.$ = {
                                type: "StringLiteral",
                                value: $$[$0],
                                original: $$[$0],
                                loc: yy.locInfo(this._$)
                            };
                            break;

                          case 36:
                            this.$ = {
                                type: "NumberLiteral",
                                value: Number($$[$0]),
                                original: Number($$[$0]),
                                loc: yy.locInfo(this._$)
                            };
                            break;

                          case 37:
                            this.$ = {
                                type: "BooleanLiteral",
                                value: "true" === $$[$0],
                                original: "true" === $$[$0],
                                loc: yy.locInfo(this._$)
                            };
                            break;

                          case 38:
                            this.$ = {
                                type: "UndefinedLiteral",
                                original: void 0,
                                value: void 0,
                                loc: yy.locInfo(this._$)
                            };
                            break;

                          case 39:
                            this.$ = {
                                type: "NullLiteral",
                                original: null,
                                value: null,
                                loc: yy.locInfo(this._$)
                            };
                            break;

                          case 42:
                            this.$ = yy.preparePath(!0, $$[$0], this._$);
                            break;

                          case 43:
                            this.$ = yy.preparePath(!1, $$[$0], this._$);
                            break;

                          case 44:
                            $$[$0 - 2].push({
                                part: yy.id($$[$0]),
                                original: $$[$0],
                                separator: $$[$0 - 1]
                            }), this.$ = $$[$0 - 2];
                            break;

                          case 45:
                            this.$ = [ {
                                part: yy.id($$[$0]),
                                original: $$[$0]
                            } ];
                            break;

                          case 46:
                          case 48:
                          case 50:
                          case 58:
                          case 64:
                          case 70:
                          case 78:
                          case 82:
                          case 86:
                          case 90:
                          case 94:
                            this.$ = [];
                            break;

                          case 47:
                          case 49:
                          case 51:
                          case 59:
                          case 65:
                          case 71:
                          case 79:
                          case 83:
                          case 87:
                          case 91:
                          case 95:
                          case 99:
                          case 101:
                            $$[$0 - 1].push($$[$0]);
                            break;

                          case 98:
                          case 100:
                            this.$ = [ $$[$0] ];
                        }
                    },
                    table: [ {
                        3: 1,
                        4: 2,
                        5: [ 2, 46 ],
                        6: 3,
                        14: [ 2, 46 ],
                        15: [ 2, 46 ],
                        19: [ 2, 46 ],
                        29: [ 2, 46 ],
                        34: [ 2, 46 ],
                        48: [ 2, 46 ],
                        51: [ 2, 46 ],
                        55: [ 2, 46 ],
                        60: [ 2, 46 ]
                    }, {
                        1: [ 3 ]
                    }, {
                        5: [ 1, 4 ]
                    }, {
                        5: [ 2, 2 ],
                        7: 5,
                        8: 6,
                        9: 7,
                        10: 8,
                        11: 9,
                        12: 10,
                        13: 11,
                        14: [ 1, 12 ],
                        15: [ 1, 20 ],
                        16: 17,
                        19: [ 1, 23 ],
                        24: 15,
                        27: 16,
                        29: [ 1, 21 ],
                        34: [ 1, 22 ],
                        39: [ 2, 2 ],
                        44: [ 2, 2 ],
                        47: [ 2, 2 ],
                        48: [ 1, 13 ],
                        51: [ 1, 14 ],
                        55: [ 1, 18 ],
                        59: 19,
                        60: [ 1, 24 ]
                    }, {
                        1: [ 2, 1 ]
                    }, {
                        5: [ 2, 47 ],
                        14: [ 2, 47 ],
                        15: [ 2, 47 ],
                        19: [ 2, 47 ],
                        29: [ 2, 47 ],
                        34: [ 2, 47 ],
                        39: [ 2, 47 ],
                        44: [ 2, 47 ],
                        47: [ 2, 47 ],
                        48: [ 2, 47 ],
                        51: [ 2, 47 ],
                        55: [ 2, 47 ],
                        60: [ 2, 47 ]
                    }, {
                        5: [ 2, 3 ],
                        14: [ 2, 3 ],
                        15: [ 2, 3 ],
                        19: [ 2, 3 ],
                        29: [ 2, 3 ],
                        34: [ 2, 3 ],
                        39: [ 2, 3 ],
                        44: [ 2, 3 ],
                        47: [ 2, 3 ],
                        48: [ 2, 3 ],
                        51: [ 2, 3 ],
                        55: [ 2, 3 ],
                        60: [ 2, 3 ]
                    }, {
                        5: [ 2, 4 ],
                        14: [ 2, 4 ],
                        15: [ 2, 4 ],
                        19: [ 2, 4 ],
                        29: [ 2, 4 ],
                        34: [ 2, 4 ],
                        39: [ 2, 4 ],
                        44: [ 2, 4 ],
                        47: [ 2, 4 ],
                        48: [ 2, 4 ],
                        51: [ 2, 4 ],
                        55: [ 2, 4 ],
                        60: [ 2, 4 ]
                    }, {
                        5: [ 2, 5 ],
                        14: [ 2, 5 ],
                        15: [ 2, 5 ],
                        19: [ 2, 5 ],
                        29: [ 2, 5 ],
                        34: [ 2, 5 ],
                        39: [ 2, 5 ],
                        44: [ 2, 5 ],
                        47: [ 2, 5 ],
                        48: [ 2, 5 ],
                        51: [ 2, 5 ],
                        55: [ 2, 5 ],
                        60: [ 2, 5 ]
                    }, {
                        5: [ 2, 6 ],
                        14: [ 2, 6 ],
                        15: [ 2, 6 ],
                        19: [ 2, 6 ],
                        29: [ 2, 6 ],
                        34: [ 2, 6 ],
                        39: [ 2, 6 ],
                        44: [ 2, 6 ],
                        47: [ 2, 6 ],
                        48: [ 2, 6 ],
                        51: [ 2, 6 ],
                        55: [ 2, 6 ],
                        60: [ 2, 6 ]
                    }, {
                        5: [ 2, 7 ],
                        14: [ 2, 7 ],
                        15: [ 2, 7 ],
                        19: [ 2, 7 ],
                        29: [ 2, 7 ],
                        34: [ 2, 7 ],
                        39: [ 2, 7 ],
                        44: [ 2, 7 ],
                        47: [ 2, 7 ],
                        48: [ 2, 7 ],
                        51: [ 2, 7 ],
                        55: [ 2, 7 ],
                        60: [ 2, 7 ]
                    }, {
                        5: [ 2, 8 ],
                        14: [ 2, 8 ],
                        15: [ 2, 8 ],
                        19: [ 2, 8 ],
                        29: [ 2, 8 ],
                        34: [ 2, 8 ],
                        39: [ 2, 8 ],
                        44: [ 2, 8 ],
                        47: [ 2, 8 ],
                        48: [ 2, 8 ],
                        51: [ 2, 8 ],
                        55: [ 2, 8 ],
                        60: [ 2, 8 ]
                    }, {
                        5: [ 2, 9 ],
                        14: [ 2, 9 ],
                        15: [ 2, 9 ],
                        19: [ 2, 9 ],
                        29: [ 2, 9 ],
                        34: [ 2, 9 ],
                        39: [ 2, 9 ],
                        44: [ 2, 9 ],
                        47: [ 2, 9 ],
                        48: [ 2, 9 ],
                        51: [ 2, 9 ],
                        55: [ 2, 9 ],
                        60: [ 2, 9 ]
                    }, {
                        20: 25,
                        72: [ 1, 35 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        20: 36,
                        72: [ 1, 35 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        4: 37,
                        6: 3,
                        14: [ 2, 46 ],
                        15: [ 2, 46 ],
                        19: [ 2, 46 ],
                        29: [ 2, 46 ],
                        34: [ 2, 46 ],
                        39: [ 2, 46 ],
                        44: [ 2, 46 ],
                        47: [ 2, 46 ],
                        48: [ 2, 46 ],
                        51: [ 2, 46 ],
                        55: [ 2, 46 ],
                        60: [ 2, 46 ]
                    }, {
                        4: 38,
                        6: 3,
                        14: [ 2, 46 ],
                        15: [ 2, 46 ],
                        19: [ 2, 46 ],
                        29: [ 2, 46 ],
                        34: [ 2, 46 ],
                        44: [ 2, 46 ],
                        47: [ 2, 46 ],
                        48: [ 2, 46 ],
                        51: [ 2, 46 ],
                        55: [ 2, 46 ],
                        60: [ 2, 46 ]
                    }, {
                        15: [ 2, 48 ],
                        17: 39,
                        18: [ 2, 48 ]
                    }, {
                        20: 41,
                        56: 40,
                        64: 42,
                        65: [ 1, 43 ],
                        72: [ 1, 35 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        4: 44,
                        6: 3,
                        14: [ 2, 46 ],
                        15: [ 2, 46 ],
                        19: [ 2, 46 ],
                        29: [ 2, 46 ],
                        34: [ 2, 46 ],
                        47: [ 2, 46 ],
                        48: [ 2, 46 ],
                        51: [ 2, 46 ],
                        55: [ 2, 46 ],
                        60: [ 2, 46 ]
                    }, {
                        5: [ 2, 10 ],
                        14: [ 2, 10 ],
                        15: [ 2, 10 ],
                        18: [ 2, 10 ],
                        19: [ 2, 10 ],
                        29: [ 2, 10 ],
                        34: [ 2, 10 ],
                        39: [ 2, 10 ],
                        44: [ 2, 10 ],
                        47: [ 2, 10 ],
                        48: [ 2, 10 ],
                        51: [ 2, 10 ],
                        55: [ 2, 10 ],
                        60: [ 2, 10 ]
                    }, {
                        20: 45,
                        72: [ 1, 35 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        20: 46,
                        72: [ 1, 35 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        20: 47,
                        72: [ 1, 35 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        20: 41,
                        56: 48,
                        64: 42,
                        65: [ 1, 43 ],
                        72: [ 1, 35 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        33: [ 2, 78 ],
                        49: 49,
                        65: [ 2, 78 ],
                        72: [ 2, 78 ],
                        80: [ 2, 78 ],
                        81: [ 2, 78 ],
                        82: [ 2, 78 ],
                        83: [ 2, 78 ],
                        84: [ 2, 78 ],
                        85: [ 2, 78 ]
                    }, {
                        23: [ 2, 33 ],
                        33: [ 2, 33 ],
                        54: [ 2, 33 ],
                        65: [ 2, 33 ],
                        68: [ 2, 33 ],
                        72: [ 2, 33 ],
                        75: [ 2, 33 ],
                        80: [ 2, 33 ],
                        81: [ 2, 33 ],
                        82: [ 2, 33 ],
                        83: [ 2, 33 ],
                        84: [ 2, 33 ],
                        85: [ 2, 33 ]
                    }, {
                        23: [ 2, 34 ],
                        33: [ 2, 34 ],
                        54: [ 2, 34 ],
                        65: [ 2, 34 ],
                        68: [ 2, 34 ],
                        72: [ 2, 34 ],
                        75: [ 2, 34 ],
                        80: [ 2, 34 ],
                        81: [ 2, 34 ],
                        82: [ 2, 34 ],
                        83: [ 2, 34 ],
                        84: [ 2, 34 ],
                        85: [ 2, 34 ]
                    }, {
                        23: [ 2, 35 ],
                        33: [ 2, 35 ],
                        54: [ 2, 35 ],
                        65: [ 2, 35 ],
                        68: [ 2, 35 ],
                        72: [ 2, 35 ],
                        75: [ 2, 35 ],
                        80: [ 2, 35 ],
                        81: [ 2, 35 ],
                        82: [ 2, 35 ],
                        83: [ 2, 35 ],
                        84: [ 2, 35 ],
                        85: [ 2, 35 ]
                    }, {
                        23: [ 2, 36 ],
                        33: [ 2, 36 ],
                        54: [ 2, 36 ],
                        65: [ 2, 36 ],
                        68: [ 2, 36 ],
                        72: [ 2, 36 ],
                        75: [ 2, 36 ],
                        80: [ 2, 36 ],
                        81: [ 2, 36 ],
                        82: [ 2, 36 ],
                        83: [ 2, 36 ],
                        84: [ 2, 36 ],
                        85: [ 2, 36 ]
                    }, {
                        23: [ 2, 37 ],
                        33: [ 2, 37 ],
                        54: [ 2, 37 ],
                        65: [ 2, 37 ],
                        68: [ 2, 37 ],
                        72: [ 2, 37 ],
                        75: [ 2, 37 ],
                        80: [ 2, 37 ],
                        81: [ 2, 37 ],
                        82: [ 2, 37 ],
                        83: [ 2, 37 ],
                        84: [ 2, 37 ],
                        85: [ 2, 37 ]
                    }, {
                        23: [ 2, 38 ],
                        33: [ 2, 38 ],
                        54: [ 2, 38 ],
                        65: [ 2, 38 ],
                        68: [ 2, 38 ],
                        72: [ 2, 38 ],
                        75: [ 2, 38 ],
                        80: [ 2, 38 ],
                        81: [ 2, 38 ],
                        82: [ 2, 38 ],
                        83: [ 2, 38 ],
                        84: [ 2, 38 ],
                        85: [ 2, 38 ]
                    }, {
                        23: [ 2, 39 ],
                        33: [ 2, 39 ],
                        54: [ 2, 39 ],
                        65: [ 2, 39 ],
                        68: [ 2, 39 ],
                        72: [ 2, 39 ],
                        75: [ 2, 39 ],
                        80: [ 2, 39 ],
                        81: [ 2, 39 ],
                        82: [ 2, 39 ],
                        83: [ 2, 39 ],
                        84: [ 2, 39 ],
                        85: [ 2, 39 ]
                    }, {
                        23: [ 2, 43 ],
                        33: [ 2, 43 ],
                        54: [ 2, 43 ],
                        65: [ 2, 43 ],
                        68: [ 2, 43 ],
                        72: [ 2, 43 ],
                        75: [ 2, 43 ],
                        80: [ 2, 43 ],
                        81: [ 2, 43 ],
                        82: [ 2, 43 ],
                        83: [ 2, 43 ],
                        84: [ 2, 43 ],
                        85: [ 2, 43 ],
                        87: [ 1, 50 ]
                    }, {
                        72: [ 1, 35 ],
                        86: 51
                    }, {
                        23: [ 2, 45 ],
                        33: [ 2, 45 ],
                        54: [ 2, 45 ],
                        65: [ 2, 45 ],
                        68: [ 2, 45 ],
                        72: [ 2, 45 ],
                        75: [ 2, 45 ],
                        80: [ 2, 45 ],
                        81: [ 2, 45 ],
                        82: [ 2, 45 ],
                        83: [ 2, 45 ],
                        84: [ 2, 45 ],
                        85: [ 2, 45 ],
                        87: [ 2, 45 ]
                    }, {
                        52: 52,
                        54: [ 2, 82 ],
                        65: [ 2, 82 ],
                        72: [ 2, 82 ],
                        80: [ 2, 82 ],
                        81: [ 2, 82 ],
                        82: [ 2, 82 ],
                        83: [ 2, 82 ],
                        84: [ 2, 82 ],
                        85: [ 2, 82 ]
                    }, {
                        25: 53,
                        38: 55,
                        39: [ 1, 57 ],
                        43: 56,
                        44: [ 1, 58 ],
                        45: 54,
                        47: [ 2, 54 ]
                    }, {
                        28: 59,
                        43: 60,
                        44: [ 1, 58 ],
                        47: [ 2, 56 ]
                    }, {
                        13: 62,
                        15: [ 1, 20 ],
                        18: [ 1, 61 ]
                    }, {
                        33: [ 2, 86 ],
                        57: 63,
                        65: [ 2, 86 ],
                        72: [ 2, 86 ],
                        80: [ 2, 86 ],
                        81: [ 2, 86 ],
                        82: [ 2, 86 ],
                        83: [ 2, 86 ],
                        84: [ 2, 86 ],
                        85: [ 2, 86 ]
                    }, {
                        33: [ 2, 40 ],
                        65: [ 2, 40 ],
                        72: [ 2, 40 ],
                        80: [ 2, 40 ],
                        81: [ 2, 40 ],
                        82: [ 2, 40 ],
                        83: [ 2, 40 ],
                        84: [ 2, 40 ],
                        85: [ 2, 40 ]
                    }, {
                        33: [ 2, 41 ],
                        65: [ 2, 41 ],
                        72: [ 2, 41 ],
                        80: [ 2, 41 ],
                        81: [ 2, 41 ],
                        82: [ 2, 41 ],
                        83: [ 2, 41 ],
                        84: [ 2, 41 ],
                        85: [ 2, 41 ]
                    }, {
                        20: 64,
                        72: [ 1, 35 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        26: 65,
                        47: [ 1, 66 ]
                    }, {
                        30: 67,
                        33: [ 2, 58 ],
                        65: [ 2, 58 ],
                        72: [ 2, 58 ],
                        75: [ 2, 58 ],
                        80: [ 2, 58 ],
                        81: [ 2, 58 ],
                        82: [ 2, 58 ],
                        83: [ 2, 58 ],
                        84: [ 2, 58 ],
                        85: [ 2, 58 ]
                    }, {
                        33: [ 2, 64 ],
                        35: 68,
                        65: [ 2, 64 ],
                        72: [ 2, 64 ],
                        75: [ 2, 64 ],
                        80: [ 2, 64 ],
                        81: [ 2, 64 ],
                        82: [ 2, 64 ],
                        83: [ 2, 64 ],
                        84: [ 2, 64 ],
                        85: [ 2, 64 ]
                    }, {
                        21: 69,
                        23: [ 2, 50 ],
                        65: [ 2, 50 ],
                        72: [ 2, 50 ],
                        80: [ 2, 50 ],
                        81: [ 2, 50 ],
                        82: [ 2, 50 ],
                        83: [ 2, 50 ],
                        84: [ 2, 50 ],
                        85: [ 2, 50 ]
                    }, {
                        33: [ 2, 90 ],
                        61: 70,
                        65: [ 2, 90 ],
                        72: [ 2, 90 ],
                        80: [ 2, 90 ],
                        81: [ 2, 90 ],
                        82: [ 2, 90 ],
                        83: [ 2, 90 ],
                        84: [ 2, 90 ],
                        85: [ 2, 90 ]
                    }, {
                        20: 74,
                        33: [ 2, 80 ],
                        50: 71,
                        63: 72,
                        64: 75,
                        65: [ 1, 43 ],
                        69: 73,
                        70: 76,
                        71: 77,
                        72: [ 1, 78 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        72: [ 1, 79 ]
                    }, {
                        23: [ 2, 42 ],
                        33: [ 2, 42 ],
                        54: [ 2, 42 ],
                        65: [ 2, 42 ],
                        68: [ 2, 42 ],
                        72: [ 2, 42 ],
                        75: [ 2, 42 ],
                        80: [ 2, 42 ],
                        81: [ 2, 42 ],
                        82: [ 2, 42 ],
                        83: [ 2, 42 ],
                        84: [ 2, 42 ],
                        85: [ 2, 42 ],
                        87: [ 1, 50 ]
                    }, {
                        20: 74,
                        53: 80,
                        54: [ 2, 84 ],
                        63: 81,
                        64: 75,
                        65: [ 1, 43 ],
                        69: 82,
                        70: 76,
                        71: 77,
                        72: [ 1, 78 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        26: 83,
                        47: [ 1, 66 ]
                    }, {
                        47: [ 2, 55 ]
                    }, {
                        4: 84,
                        6: 3,
                        14: [ 2, 46 ],
                        15: [ 2, 46 ],
                        19: [ 2, 46 ],
                        29: [ 2, 46 ],
                        34: [ 2, 46 ],
                        39: [ 2, 46 ],
                        44: [ 2, 46 ],
                        47: [ 2, 46 ],
                        48: [ 2, 46 ],
                        51: [ 2, 46 ],
                        55: [ 2, 46 ],
                        60: [ 2, 46 ]
                    }, {
                        47: [ 2, 20 ]
                    }, {
                        20: 85,
                        72: [ 1, 35 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        4: 86,
                        6: 3,
                        14: [ 2, 46 ],
                        15: [ 2, 46 ],
                        19: [ 2, 46 ],
                        29: [ 2, 46 ],
                        34: [ 2, 46 ],
                        47: [ 2, 46 ],
                        48: [ 2, 46 ],
                        51: [ 2, 46 ],
                        55: [ 2, 46 ],
                        60: [ 2, 46 ]
                    }, {
                        26: 87,
                        47: [ 1, 66 ]
                    }, {
                        47: [ 2, 57 ]
                    }, {
                        5: [ 2, 11 ],
                        14: [ 2, 11 ],
                        15: [ 2, 11 ],
                        19: [ 2, 11 ],
                        29: [ 2, 11 ],
                        34: [ 2, 11 ],
                        39: [ 2, 11 ],
                        44: [ 2, 11 ],
                        47: [ 2, 11 ],
                        48: [ 2, 11 ],
                        51: [ 2, 11 ],
                        55: [ 2, 11 ],
                        60: [ 2, 11 ]
                    }, {
                        15: [ 2, 49 ],
                        18: [ 2, 49 ]
                    }, {
                        20: 74,
                        33: [ 2, 88 ],
                        58: 88,
                        63: 89,
                        64: 75,
                        65: [ 1, 43 ],
                        69: 90,
                        70: 76,
                        71: 77,
                        72: [ 1, 78 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        65: [ 2, 94 ],
                        66: 91,
                        68: [ 2, 94 ],
                        72: [ 2, 94 ],
                        80: [ 2, 94 ],
                        81: [ 2, 94 ],
                        82: [ 2, 94 ],
                        83: [ 2, 94 ],
                        84: [ 2, 94 ],
                        85: [ 2, 94 ]
                    }, {
                        5: [ 2, 25 ],
                        14: [ 2, 25 ],
                        15: [ 2, 25 ],
                        19: [ 2, 25 ],
                        29: [ 2, 25 ],
                        34: [ 2, 25 ],
                        39: [ 2, 25 ],
                        44: [ 2, 25 ],
                        47: [ 2, 25 ],
                        48: [ 2, 25 ],
                        51: [ 2, 25 ],
                        55: [ 2, 25 ],
                        60: [ 2, 25 ]
                    }, {
                        20: 92,
                        72: [ 1, 35 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        20: 74,
                        31: 93,
                        33: [ 2, 60 ],
                        63: 94,
                        64: 75,
                        65: [ 1, 43 ],
                        69: 95,
                        70: 76,
                        71: 77,
                        72: [ 1, 78 ],
                        75: [ 2, 60 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        20: 74,
                        33: [ 2, 66 ],
                        36: 96,
                        63: 97,
                        64: 75,
                        65: [ 1, 43 ],
                        69: 98,
                        70: 76,
                        71: 77,
                        72: [ 1, 78 ],
                        75: [ 2, 66 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        20: 74,
                        22: 99,
                        23: [ 2, 52 ],
                        63: 100,
                        64: 75,
                        65: [ 1, 43 ],
                        69: 101,
                        70: 76,
                        71: 77,
                        72: [ 1, 78 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        20: 74,
                        33: [ 2, 92 ],
                        62: 102,
                        63: 103,
                        64: 75,
                        65: [ 1, 43 ],
                        69: 104,
                        70: 76,
                        71: 77,
                        72: [ 1, 78 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        33: [ 1, 105 ]
                    }, {
                        33: [ 2, 79 ],
                        65: [ 2, 79 ],
                        72: [ 2, 79 ],
                        80: [ 2, 79 ],
                        81: [ 2, 79 ],
                        82: [ 2, 79 ],
                        83: [ 2, 79 ],
                        84: [ 2, 79 ],
                        85: [ 2, 79 ]
                    }, {
                        33: [ 2, 81 ]
                    }, {
                        23: [ 2, 27 ],
                        33: [ 2, 27 ],
                        54: [ 2, 27 ],
                        65: [ 2, 27 ],
                        68: [ 2, 27 ],
                        72: [ 2, 27 ],
                        75: [ 2, 27 ],
                        80: [ 2, 27 ],
                        81: [ 2, 27 ],
                        82: [ 2, 27 ],
                        83: [ 2, 27 ],
                        84: [ 2, 27 ],
                        85: [ 2, 27 ]
                    }, {
                        23: [ 2, 28 ],
                        33: [ 2, 28 ],
                        54: [ 2, 28 ],
                        65: [ 2, 28 ],
                        68: [ 2, 28 ],
                        72: [ 2, 28 ],
                        75: [ 2, 28 ],
                        80: [ 2, 28 ],
                        81: [ 2, 28 ],
                        82: [ 2, 28 ],
                        83: [ 2, 28 ],
                        84: [ 2, 28 ],
                        85: [ 2, 28 ]
                    }, {
                        23: [ 2, 30 ],
                        33: [ 2, 30 ],
                        54: [ 2, 30 ],
                        68: [ 2, 30 ],
                        71: 106,
                        72: [ 1, 107 ],
                        75: [ 2, 30 ]
                    }, {
                        23: [ 2, 98 ],
                        33: [ 2, 98 ],
                        54: [ 2, 98 ],
                        68: [ 2, 98 ],
                        72: [ 2, 98 ],
                        75: [ 2, 98 ]
                    }, {
                        23: [ 2, 45 ],
                        33: [ 2, 45 ],
                        54: [ 2, 45 ],
                        65: [ 2, 45 ],
                        68: [ 2, 45 ],
                        72: [ 2, 45 ],
                        73: [ 1, 108 ],
                        75: [ 2, 45 ],
                        80: [ 2, 45 ],
                        81: [ 2, 45 ],
                        82: [ 2, 45 ],
                        83: [ 2, 45 ],
                        84: [ 2, 45 ],
                        85: [ 2, 45 ],
                        87: [ 2, 45 ]
                    }, {
                        23: [ 2, 44 ],
                        33: [ 2, 44 ],
                        54: [ 2, 44 ],
                        65: [ 2, 44 ],
                        68: [ 2, 44 ],
                        72: [ 2, 44 ],
                        75: [ 2, 44 ],
                        80: [ 2, 44 ],
                        81: [ 2, 44 ],
                        82: [ 2, 44 ],
                        83: [ 2, 44 ],
                        84: [ 2, 44 ],
                        85: [ 2, 44 ],
                        87: [ 2, 44 ]
                    }, {
                        54: [ 1, 109 ]
                    }, {
                        54: [ 2, 83 ],
                        65: [ 2, 83 ],
                        72: [ 2, 83 ],
                        80: [ 2, 83 ],
                        81: [ 2, 83 ],
                        82: [ 2, 83 ],
                        83: [ 2, 83 ],
                        84: [ 2, 83 ],
                        85: [ 2, 83 ]
                    }, {
                        54: [ 2, 85 ]
                    }, {
                        5: [ 2, 13 ],
                        14: [ 2, 13 ],
                        15: [ 2, 13 ],
                        19: [ 2, 13 ],
                        29: [ 2, 13 ],
                        34: [ 2, 13 ],
                        39: [ 2, 13 ],
                        44: [ 2, 13 ],
                        47: [ 2, 13 ],
                        48: [ 2, 13 ],
                        51: [ 2, 13 ],
                        55: [ 2, 13 ],
                        60: [ 2, 13 ]
                    }, {
                        38: 55,
                        39: [ 1, 57 ],
                        43: 56,
                        44: [ 1, 58 ],
                        45: 111,
                        46: 110,
                        47: [ 2, 76 ]
                    }, {
                        33: [ 2, 70 ],
                        40: 112,
                        65: [ 2, 70 ],
                        72: [ 2, 70 ],
                        75: [ 2, 70 ],
                        80: [ 2, 70 ],
                        81: [ 2, 70 ],
                        82: [ 2, 70 ],
                        83: [ 2, 70 ],
                        84: [ 2, 70 ],
                        85: [ 2, 70 ]
                    }, {
                        47: [ 2, 18 ]
                    }, {
                        5: [ 2, 14 ],
                        14: [ 2, 14 ],
                        15: [ 2, 14 ],
                        19: [ 2, 14 ],
                        29: [ 2, 14 ],
                        34: [ 2, 14 ],
                        39: [ 2, 14 ],
                        44: [ 2, 14 ],
                        47: [ 2, 14 ],
                        48: [ 2, 14 ],
                        51: [ 2, 14 ],
                        55: [ 2, 14 ],
                        60: [ 2, 14 ]
                    }, {
                        33: [ 1, 113 ]
                    }, {
                        33: [ 2, 87 ],
                        65: [ 2, 87 ],
                        72: [ 2, 87 ],
                        80: [ 2, 87 ],
                        81: [ 2, 87 ],
                        82: [ 2, 87 ],
                        83: [ 2, 87 ],
                        84: [ 2, 87 ],
                        85: [ 2, 87 ]
                    }, {
                        33: [ 2, 89 ]
                    }, {
                        20: 74,
                        63: 115,
                        64: 75,
                        65: [ 1, 43 ],
                        67: 114,
                        68: [ 2, 96 ],
                        69: 116,
                        70: 76,
                        71: 77,
                        72: [ 1, 78 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        33: [ 1, 117 ]
                    }, {
                        32: 118,
                        33: [ 2, 62 ],
                        74: 119,
                        75: [ 1, 120 ]
                    }, {
                        33: [ 2, 59 ],
                        65: [ 2, 59 ],
                        72: [ 2, 59 ],
                        75: [ 2, 59 ],
                        80: [ 2, 59 ],
                        81: [ 2, 59 ],
                        82: [ 2, 59 ],
                        83: [ 2, 59 ],
                        84: [ 2, 59 ],
                        85: [ 2, 59 ]
                    }, {
                        33: [ 2, 61 ],
                        75: [ 2, 61 ]
                    }, {
                        33: [ 2, 68 ],
                        37: 121,
                        74: 122,
                        75: [ 1, 120 ]
                    }, {
                        33: [ 2, 65 ],
                        65: [ 2, 65 ],
                        72: [ 2, 65 ],
                        75: [ 2, 65 ],
                        80: [ 2, 65 ],
                        81: [ 2, 65 ],
                        82: [ 2, 65 ],
                        83: [ 2, 65 ],
                        84: [ 2, 65 ],
                        85: [ 2, 65 ]
                    }, {
                        33: [ 2, 67 ],
                        75: [ 2, 67 ]
                    }, {
                        23: [ 1, 123 ]
                    }, {
                        23: [ 2, 51 ],
                        65: [ 2, 51 ],
                        72: [ 2, 51 ],
                        80: [ 2, 51 ],
                        81: [ 2, 51 ],
                        82: [ 2, 51 ],
                        83: [ 2, 51 ],
                        84: [ 2, 51 ],
                        85: [ 2, 51 ]
                    }, {
                        23: [ 2, 53 ]
                    }, {
                        33: [ 1, 124 ]
                    }, {
                        33: [ 2, 91 ],
                        65: [ 2, 91 ],
                        72: [ 2, 91 ],
                        80: [ 2, 91 ],
                        81: [ 2, 91 ],
                        82: [ 2, 91 ],
                        83: [ 2, 91 ],
                        84: [ 2, 91 ],
                        85: [ 2, 91 ]
                    }, {
                        33: [ 2, 93 ]
                    }, {
                        5: [ 2, 22 ],
                        14: [ 2, 22 ],
                        15: [ 2, 22 ],
                        19: [ 2, 22 ],
                        29: [ 2, 22 ],
                        34: [ 2, 22 ],
                        39: [ 2, 22 ],
                        44: [ 2, 22 ],
                        47: [ 2, 22 ],
                        48: [ 2, 22 ],
                        51: [ 2, 22 ],
                        55: [ 2, 22 ],
                        60: [ 2, 22 ]
                    }, {
                        23: [ 2, 99 ],
                        33: [ 2, 99 ],
                        54: [ 2, 99 ],
                        68: [ 2, 99 ],
                        72: [ 2, 99 ],
                        75: [ 2, 99 ]
                    }, {
                        73: [ 1, 108 ]
                    }, {
                        20: 74,
                        63: 125,
                        64: 75,
                        65: [ 1, 43 ],
                        72: [ 1, 35 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        5: [ 2, 23 ],
                        14: [ 2, 23 ],
                        15: [ 2, 23 ],
                        19: [ 2, 23 ],
                        29: [ 2, 23 ],
                        34: [ 2, 23 ],
                        39: [ 2, 23 ],
                        44: [ 2, 23 ],
                        47: [ 2, 23 ],
                        48: [ 2, 23 ],
                        51: [ 2, 23 ],
                        55: [ 2, 23 ],
                        60: [ 2, 23 ]
                    }, {
                        47: [ 2, 19 ]
                    }, {
                        47: [ 2, 77 ]
                    }, {
                        20: 74,
                        33: [ 2, 72 ],
                        41: 126,
                        63: 127,
                        64: 75,
                        65: [ 1, 43 ],
                        69: 128,
                        70: 76,
                        71: 77,
                        72: [ 1, 78 ],
                        75: [ 2, 72 ],
                        78: 26,
                        79: 27,
                        80: [ 1, 28 ],
                        81: [ 1, 29 ],
                        82: [ 1, 30 ],
                        83: [ 1, 31 ],
                        84: [ 1, 32 ],
                        85: [ 1, 34 ],
                        86: 33
                    }, {
                        5: [ 2, 24 ],
                        14: [ 2, 24 ],
                        15: [ 2, 24 ],
                        19: [ 2, 24 ],
                        29: [ 2, 24 ],
                        34: [ 2, 24 ],
                        39: [ 2, 24 ],
                        44: [ 2, 24 ],
                        47: [ 2, 24 ],
                        48: [ 2, 24 ],
                        51: [ 2, 24 ],
                        55: [ 2, 24 ],
                        60: [ 2, 24 ]
                    }, {
                        68: [ 1, 129 ]
                    }, {
                        65: [ 2, 95 ],
                        68: [ 2, 95 ],
                        72: [ 2, 95 ],
                        80: [ 2, 95 ],
                        81: [ 2, 95 ],
                        82: [ 2, 95 ],
                        83: [ 2, 95 ],
                        84: [ 2, 95 ],
                        85: [ 2, 95 ]
                    }, {
                        68: [ 2, 97 ]
                    }, {
                        5: [ 2, 21 ],
                        14: [ 2, 21 ],
                        15: [ 2, 21 ],
                        19: [ 2, 21 ],
                        29: [ 2, 21 ],
                        34: [ 2, 21 ],
                        39: [ 2, 21 ],
                        44: [ 2, 21 ],
                        47: [ 2, 21 ],
                        48: [ 2, 21 ],
                        51: [ 2, 21 ],
                        55: [ 2, 21 ],
                        60: [ 2, 21 ]
                    }, {
                        33: [ 1, 130 ]
                    }, {
                        33: [ 2, 63 ]
                    }, {
                        72: [ 1, 132 ],
                        76: 131
                    }, {
                        33: [ 1, 133 ]
                    }, {
                        33: [ 2, 69 ]
                    }, {
                        15: [ 2, 12 ],
                        18: [ 2, 12 ]
                    }, {
                        14: [ 2, 26 ],
                        15: [ 2, 26 ],
                        19: [ 2, 26 ],
                        29: [ 2, 26 ],
                        34: [ 2, 26 ],
                        47: [ 2, 26 ],
                        48: [ 2, 26 ],
                        51: [ 2, 26 ],
                        55: [ 2, 26 ],
                        60: [ 2, 26 ]
                    }, {
                        23: [ 2, 31 ],
                        33: [ 2, 31 ],
                        54: [ 2, 31 ],
                        68: [ 2, 31 ],
                        72: [ 2, 31 ],
                        75: [ 2, 31 ]
                    }, {
                        33: [ 2, 74 ],
                        42: 134,
                        74: 135,
                        75: [ 1, 120 ]
                    }, {
                        33: [ 2, 71 ],
                        65: [ 2, 71 ],
                        72: [ 2, 71 ],
                        75: [ 2, 71 ],
                        80: [ 2, 71 ],
                        81: [ 2, 71 ],
                        82: [ 2, 71 ],
                        83: [ 2, 71 ],
                        84: [ 2, 71 ],
                        85: [ 2, 71 ]
                    }, {
                        33: [ 2, 73 ],
                        75: [ 2, 73 ]
                    }, {
                        23: [ 2, 29 ],
                        33: [ 2, 29 ],
                        54: [ 2, 29 ],
                        65: [ 2, 29 ],
                        68: [ 2, 29 ],
                        72: [ 2, 29 ],
                        75: [ 2, 29 ],
                        80: [ 2, 29 ],
                        81: [ 2, 29 ],
                        82: [ 2, 29 ],
                        83: [ 2, 29 ],
                        84: [ 2, 29 ],
                        85: [ 2, 29 ]
                    }, {
                        14: [ 2, 15 ],
                        15: [ 2, 15 ],
                        19: [ 2, 15 ],
                        29: [ 2, 15 ],
                        34: [ 2, 15 ],
                        39: [ 2, 15 ],
                        44: [ 2, 15 ],
                        47: [ 2, 15 ],
                        48: [ 2, 15 ],
                        51: [ 2, 15 ],
                        55: [ 2, 15 ],
                        60: [ 2, 15 ]
                    }, {
                        72: [ 1, 137 ],
                        77: [ 1, 136 ]
                    }, {
                        72: [ 2, 100 ],
                        77: [ 2, 100 ]
                    }, {
                        14: [ 2, 16 ],
                        15: [ 2, 16 ],
                        19: [ 2, 16 ],
                        29: [ 2, 16 ],
                        34: [ 2, 16 ],
                        44: [ 2, 16 ],
                        47: [ 2, 16 ],
                        48: [ 2, 16 ],
                        51: [ 2, 16 ],
                        55: [ 2, 16 ],
                        60: [ 2, 16 ]
                    }, {
                        33: [ 1, 138 ]
                    }, {
                        33: [ 2, 75 ]
                    }, {
                        33: [ 2, 32 ]
                    }, {
                        72: [ 2, 101 ],
                        77: [ 2, 101 ]
                    }, {
                        14: [ 2, 17 ],
                        15: [ 2, 17 ],
                        19: [ 2, 17 ],
                        29: [ 2, 17 ],
                        34: [ 2, 17 ],
                        39: [ 2, 17 ],
                        44: [ 2, 17 ],
                        47: [ 2, 17 ],
                        48: [ 2, 17 ],
                        51: [ 2, 17 ],
                        55: [ 2, 17 ],
                        60: [ 2, 17 ]
                    } ],
                    defaultActions: {
                        4: [ 2, 1 ],
                        54: [ 2, 55 ],
                        56: [ 2, 20 ],
                        60: [ 2, 57 ],
                        73: [ 2, 81 ],
                        82: [ 2, 85 ],
                        86: [ 2, 18 ],
                        90: [ 2, 89 ],
                        101: [ 2, 53 ],
                        104: [ 2, 93 ],
                        110: [ 2, 19 ],
                        111: [ 2, 77 ],
                        116: [ 2, 97 ],
                        119: [ 2, 63 ],
                        122: [ 2, 69 ],
                        135: [ 2, 75 ],
                        136: [ 2, 32 ]
                    },
                    parseError: function parseError(str, hash) {
                        throw new Error(str);
                    },
                    parse: function parse(input) {
                        var self = this, stack = [ 0 ], vstack = [ null ], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0;
                        this.lexer.setInput(input), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, 
                        this.yy.parser = this, void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
                        var yyloc = this.lexer.yylloc;
                        lstack.push(yyloc);
                        var ranges = this.lexer.options && this.lexer.options.ranges;
                        function lex() {
                            var token;
                            return "number" != typeof (token = self.lexer.lex() || 1) && (token = self.symbols_[token] || token), 
                            token;
                        }
                        "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                        for (var symbol, preErrorSymbol, state, action, r, p, len, newState, expected, yyval = {}; ;) {
                            if (state = stack[stack.length - 1], this.defaultActions[state] ? action = this.defaultActions[state] : (null == symbol && (symbol = lex()), 
                            action = table[state] && table[state][symbol]), void 0 === action || !action.length || !action[0]) {
                                var errStr = "";
                                if (!recovering) {
                                    for (p in expected = [], table[state]) this.terminals_[p] && p > 2 && expected.push("'" + this.terminals_[p] + "'");
                                    errStr = this.lexer.showPosition ? "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'" : "Parse error on line " + (yylineno + 1) + ": Unexpected " + (1 == symbol ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'"), 
                                    this.parseError(errStr, {
                                        text: this.lexer.match,
                                        token: this.terminals_[symbol] || symbol,
                                        line: this.lexer.yylineno,
                                        loc: yyloc,
                                        expected
                                    });
                                }
                            }
                            if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                            switch (action[0]) {
                              case 1:
                                stack.push(symbol), vstack.push(this.lexer.yytext), lstack.push(this.lexer.yylloc), 
                                stack.push(action[1]), symbol = null, preErrorSymbol ? (symbol = preErrorSymbol, 
                                preErrorSymbol = null) : (yyleng = this.lexer.yyleng, yytext = this.lexer.yytext, 
                                yylineno = this.lexer.yylineno, yyloc = this.lexer.yylloc, recovering > 0 && recovering--);
                                break;

                              case 2:
                                if (len = this.productions_[action[1]][1], yyval.$ = vstack[vstack.length - len], 
                                yyval._$ = {
                                    first_line: lstack[lstack.length - (len || 1)].first_line,
                                    last_line: lstack[lstack.length - 1].last_line,
                                    first_column: lstack[lstack.length - (len || 1)].first_column,
                                    last_column: lstack[lstack.length - 1].last_column
                                }, ranges && (yyval._$.range = [ lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1] ]), 
                                void 0 !== (r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack))) return r;
                                len && (stack = stack.slice(0, -1 * len * 2), vstack = vstack.slice(0, -1 * len), 
                                lstack = lstack.slice(0, -1 * len)), stack.push(this.productions_[action[1]][0]), 
                                vstack.push(yyval.$), lstack.push(yyval._$), newState = table[stack[stack.length - 2]][stack[stack.length - 1]], 
                                stack.push(newState);
                                break;

                              case 3:
                                return !0;
                            }
                        }
                        return !0;
                    }
                }, lexer = function() {
                    var lexer = {
                        EOF: 1,
                        parseError: function parseError(str, hash) {
                            if (!this.yy.parser) throw new Error(str);
                            this.yy.parser.parseError(str, hash);
                        },
                        setInput: function setInput(input) {
                            return this._input = input, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, 
                            this.yytext = this.matched = this.match = "", this.conditionStack = [ "INITIAL" ], 
                            this.yylloc = {
                                first_line: 1,
                                first_column: 0,
                                last_line: 1,
                                last_column: 0
                            }, this.options.ranges && (this.yylloc.range = [ 0, 0 ]), this.offset = 0, this;
                        },
                        input: function input() {
                            var ch = this._input[0];
                            return this.yytext += ch, this.yyleng++, this.offset++, this.match += ch, this.matched += ch, 
                            ch.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, 
                            this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), 
                            ch;
                        },
                        unput: function unput(ch) {
                            var len = ch.length, lines = ch.split(/(?:\r\n?|\n)/g);
                            this._input = ch + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - len - 1), 
                            this.offset -= len;
                            var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), 
                            lines.length - 1 && (this.yylineno -= lines.length - 1);
                            var r = this.yylloc.range;
                            return this.yylloc = {
                                first_line: this.yylloc.first_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.first_column,
                                last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                            }, this.options.ranges && (this.yylloc.range = [ r[0], r[0] + this.yyleng - len ]), 
                            this;
                        },
                        more: function more() {
                            return this._more = !0, this;
                        },
                        less: function less(n) {
                            this.unput(this.match.slice(n));
                        },
                        pastInput: function pastInput() {
                            var past = this.matched.substr(0, this.matched.length - this.match.length);
                            return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
                        },
                        upcomingInput: function upcomingInput() {
                            var next = this.match;
                            return next.length < 20 && (next += this._input.substr(0, 20 - next.length)), (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
                        },
                        showPosition: function showPosition() {
                            var pre = this.pastInput(), c = new Array(pre.length + 1).join("-");
                            return pre + this.upcomingInput() + "\n" + c + "^";
                        },
                        next: function next() {
                            if (this.done) return this.EOF;
                            var token, match, tempMatch, index, lines;
                            this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
                            for (var rules = this._currentRules(), i = 0; i < rules.length && (!(tempMatch = this._input.match(this.rules[rules[i]])) || match && !(tempMatch[0].length > match[0].length) || (match = tempMatch, 
                            index = i, this.options.flex)); i++) ;
                            return match ? ((lines = match[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += lines.length), 
                            this.yylloc = {
                                first_line: this.yylloc.last_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.last_column,
                                last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                            }, this.yytext += match[0], this.match += match[0], this.matches = match, this.yyleng = this.yytext.length, 
                            this.options.ranges && (this.yylloc.range = [ this.offset, this.offset += this.yyleng ]), 
                            this._more = !1, this._input = this._input.slice(match[0].length), this.matched += match[0], 
                            token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]), 
                            this.done && this._input && (this.done = !1), token || void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                text: "",
                                token: null,
                                line: this.yylineno
                            });
                        },
                        lex: function lex() {
                            var r = this.next();
                            return void 0 !== r ? r : this.lex();
                        },
                        begin: function begin(condition) {
                            this.conditionStack.push(condition);
                        },
                        popState: function popState() {
                            return this.conditionStack.pop();
                        },
                        _currentRules: function _currentRules() {
                            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                        },
                        topState: function topState() {
                            return this.conditionStack[this.conditionStack.length - 2];
                        },
                        pushState: function begin(condition) {
                            this.begin(condition);
                        },
                        options: {},
                        performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                            function strip(start, end) {
                                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
                            }
                            switch ($avoiding_name_collisions) {
                              case 0:
                                if ("\\\\" === yy_.yytext.slice(-2) ? (strip(0, 1), this.begin("mu")) : "\\" === yy_.yytext.slice(-1) ? (strip(0, 1), 
                                this.begin("emu")) : this.begin("mu"), yy_.yytext) return 15;
                                break;

                              case 1:
                              case 5:
                                return 15;

                              case 2:
                                return this.popState(), 15;

                              case 3:
                                return this.begin("raw"), 15;

                              case 4:
                                return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (strip(5, 9), 
                                "END_RAW_BLOCK");

                              case 6:
                              case 22:
                                return this.popState(), 14;

                              case 7:
                                return 65;

                              case 8:
                                return 68;

                              case 9:
                                return 19;

                              case 10:
                                return this.popState(), this.begin("raw"), 23;

                              case 11:
                                return 55;

                              case 12:
                                return 60;

                              case 13:
                                return 29;

                              case 14:
                                return 47;

                              case 15:
                              case 16:
                                return this.popState(), 44;

                              case 17:
                                return 34;

                              case 18:
                                return 39;

                              case 19:
                                return 51;

                              case 20:
                              case 23:
                                return 48;

                              case 21:
                                this.unput(yy_.yytext), this.popState(), this.begin("com");
                                break;

                              case 24:
                                return 73;

                              case 25:
                              case 26:
                              case 41:
                                return 72;

                              case 27:
                                return 87;

                              case 28:
                                break;

                              case 29:
                                return this.popState(), 54;

                              case 30:
                                return this.popState(), 33;

                              case 31:
                                return yy_.yytext = strip(1, 2).replace(/\\"/g, '"'), 80;

                              case 32:
                                return yy_.yytext = strip(1, 2).replace(/\\'/g, "'"), 80;

                              case 33:
                                return 85;

                              case 34:
                              case 35:
                                return 82;

                              case 36:
                                return 83;

                              case 37:
                                return 84;

                              case 38:
                                return 81;

                              case 39:
                                return 75;

                              case 40:
                                return 77;

                              case 42:
                                return yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, "$1"), 72;

                              case 43:
                                return "INVALID";

                              case 44:
                                return 5;
                            }
                        },
                        rules: [ /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/ ],
                        conditions: {
                            mu: {
                                rules: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44 ],
                                inclusive: !1
                            },
                            emu: {
                                rules: [ 2 ],
                                inclusive: !1
                            },
                            com: {
                                rules: [ 6 ],
                                inclusive: !1
                            },
                            raw: {
                                rules: [ 3, 4, 5 ],
                                inclusive: !1
                            },
                            INITIAL: {
                                rules: [ 0, 1, 44 ],
                                inclusive: !0
                            }
                        }
                    };
                    return lexer;
                }();
                function Parser() {
                    this.yy = {};
                }
                return parser.lexer = lexer, Parser.prototype = parser, parser.Parser = Parser, 
                new Parser;
            }();
            exports.default = handlebars, module.exports = exports.default;
        },
        261: (module, exports, __webpack_require__) => {
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }
            exports.__esModule = !0;
            var base = _interopRequireWildcard(__webpack_require__(871)), _handlebarsSafeString2 = _interopRequireDefault(__webpack_require__(613)), _handlebarsException2 = _interopRequireDefault(__webpack_require__(769)), Utils = _interopRequireWildcard(__webpack_require__(849)), runtime = _interopRequireWildcard(__webpack_require__(624)), _handlebarsNoConflict2 = _interopRequireDefault(__webpack_require__(148));
            function create() {
                var hb = new base.HandlebarsEnvironment;
                return Utils.extend(hb, base), hb.SafeString = _handlebarsSafeString2.default, hb.Exception = _handlebarsException2.default, 
                hb.Utils = Utils, hb.escapeExpression = Utils.escapeExpression, hb.VM = runtime, 
                hb.template = function(spec) {
                    return runtime.template(spec, hb);
                }, hb;
            }
            var inst = create();
            inst.create = create, _handlebarsNoConflict2.default(inst), inst.default = inst, 
            exports.default = inst, module.exports = exports.default;
        },
        277: (__unused_webpack_module, exports, __webpack_require__) => {
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.__esModule = !0, exports.registerDefaultHelpers = function registerDefaultHelpers(instance) {
                _helpersBlockHelperMissing2.default(instance), _helpersEach2.default(instance), 
                _helpersHelperMissing2.default(instance), _helpersIf2.default(instance), _helpersLog2.default(instance), 
                _helpersLookup2.default(instance), _helpersWith2.default(instance);
            }, exports.moveHelperToHooks = function moveHelperToHooks(instance, helperName, keepHelper) {
                instance.helpers[helperName] && (instance.hooks[helperName] = instance.helpers[helperName], 
                keepHelper || delete instance.helpers[helperName]);
            };
            var _helpersBlockHelperMissing2 = _interopRequireDefault(__webpack_require__(97)), _helpersEach2 = _interopRequireDefault(__webpack_require__(785)), _helpersHelperMissing2 = _interopRequireDefault(__webpack_require__(353)), _helpersIf2 = _interopRequireDefault(__webpack_require__(355)), _helpersLog2 = _interopRequireDefault(__webpack_require__(300)), _helpersLookup2 = _interopRequireDefault(__webpack_require__(466)), _helpersWith2 = _interopRequireDefault(__webpack_require__(908));
        },
        300: (module, exports) => {
            exports.__esModule = !0, exports.default = function(instance) {
                instance.registerHelper("log", function() {
                    for (var args = [ void 0 ], options = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) args.push(arguments[i]);
                    var level = 1;
                    null != options.hash.level ? level = options.hash.level : options.data && null != options.data.level && (level = options.data.level), 
                    args[0] = level, instance.log.apply(instance, args);
                });
            }, module.exports = exports.default;
        },
        314: module => {
            module.exports = function(cssWithMappingToString) {
                var list = [];
                return list.toString = function toString() {
                    return this.map(function(item) {
                        var content = "", needLayer = void 0 !== item[5];
                        return item[4] && (content += "@supports (".concat(item[4], ") {")), item[2] && (content += "@media ".concat(item[2], " {")), 
                        needLayer && (content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")), 
                        content += cssWithMappingToString(item), needLayer && (content += "}"), item[2] && (content += "}"), 
                        item[4] && (content += "}"), content;
                    }).join("");
                }, list.i = function i(modules, media, dedupe, supports, layer) {
                    "string" == typeof modules && (modules = [ [ null, modules, void 0 ] ]);
                    var alreadyImportedModules = {};
                    if (dedupe) for (var k = 0; k < this.length; k++) {
                        var id = this[k][0];
                        null != id && (alreadyImportedModules[id] = !0);
                    }
                    for (var _k = 0; _k < modules.length; _k++) {
                        var item = [].concat(modules[_k]);
                        dedupe && alreadyImportedModules[item[0]] || (void 0 !== layer && (void 0 === item[5] || (item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}")), 
                        item[5] = layer), media && (item[2] ? (item[1] = "@media ".concat(item[2], " {").concat(item[1], "}"), 
                        item[2] = media) : item[2] = media), supports && (item[4] ? (item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}"), 
                        item[4] = supports) : item[4] = "".concat(supports)), list.push(item));
                    }
                }, list;
            };
        },
        350: (module, exports, __webpack_require__) => {
            exports.__esModule = !0;
            var _exception2 = function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }(__webpack_require__(769));
            function Visitor() {
                this.parents = [];
            }
            function visitSubExpression(mustache) {
                this.acceptRequired(mustache, "path"), this.acceptArray(mustache.params), this.acceptKey(mustache, "hash");
            }
            function visitBlock(block) {
                visitSubExpression.call(this, block), this.acceptKey(block, "program"), this.acceptKey(block, "inverse");
            }
            function visitPartial(partial) {
                this.acceptRequired(partial, "name"), this.acceptArray(partial.params), this.acceptKey(partial, "hash");
            }
            Visitor.prototype = {
                constructor: Visitor,
                mutating: !1,
                acceptKey: function acceptKey(node, name) {
                    var value = this.accept(node[name]);
                    if (this.mutating) {
                        if (value && !Visitor.prototype[value.type]) throw new _exception2.default('Unexpected node type "' + value.type + '" found when accepting ' + name + " on " + node.type);
                        node[name] = value;
                    }
                },
                acceptRequired: function acceptRequired(node, name) {
                    if (this.acceptKey(node, name), !node[name]) throw new _exception2.default(node.type + " requires " + name);
                },
                acceptArray: function acceptArray(array) {
                    for (var i = 0, l = array.length; i < l; i++) this.acceptKey(array, i), array[i] || (array.splice(i, 1), 
                    i--, l--);
                },
                accept: function accept(object) {
                    if (object) {
                        if (!this[object.type]) throw new _exception2.default("Unknown type: " + object.type, object);
                        this.current && this.parents.unshift(this.current), this.current = object;
                        var ret = this[object.type](object);
                        return this.current = this.parents.shift(), !this.mutating || ret ? ret : !1 !== ret ? object : void 0;
                    }
                },
                Program: function Program(program) {
                    this.acceptArray(program.body);
                },
                MustacheStatement: visitSubExpression,
                Decorator: visitSubExpression,
                BlockStatement: visitBlock,
                DecoratorBlock: visitBlock,
                PartialStatement: visitPartial,
                PartialBlockStatement: function PartialBlockStatement(partial) {
                    visitPartial.call(this, partial), this.acceptKey(partial, "program");
                },
                ContentStatement: function ContentStatement() {},
                CommentStatement: function CommentStatement() {},
                SubExpression: visitSubExpression,
                PathExpression: function PathExpression() {},
                StringLiteral: function StringLiteral() {},
                NumberLiteral: function NumberLiteral() {},
                BooleanLiteral: function BooleanLiteral() {},
                UndefinedLiteral: function UndefinedLiteral() {},
                NullLiteral: function NullLiteral() {},
                Hash: function Hash(hash) {
                    this.acceptArray(hash.pairs);
                },
                HashPair: function HashPair(pair) {
                    this.acceptRequired(pair, "value");
                }
            }, exports.default = Visitor, module.exports = exports.default;
        },
        353: (module, exports, __webpack_require__) => {
            exports.__esModule = !0;
            var _exception2 = function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }(__webpack_require__(769));
            exports.default = function(instance) {
                instance.registerHelper("helperMissing", function() {
                    if (1 !== arguments.length) throw new _exception2.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                });
            }, module.exports = exports.default;
        },
        355: (module, exports, __webpack_require__) => {
            exports.__esModule = !0;
            var _utils = __webpack_require__(849), _exception2 = function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }(__webpack_require__(769));
            exports.default = function(instance) {
                instance.registerHelper("if", function(conditional, options) {
                    if (2 != arguments.length) throw new _exception2.default("#if requires exactly one argument");
                    return _utils.isFunction(conditional) && (conditional = conditional.call(this)), 
                    !options.hash.includeZero && !conditional || _utils.isEmpty(conditional) ? options.inverse(this) : options.fn(this);
                }), instance.registerHelper("unless", function(conditional, options) {
                    if (2 != arguments.length) throw new _exception2.default("#unless requires exactly one argument");
                    return instance.helpers.if.call(this, conditional, {
                        fn: options.inverse,
                        inverse: options.fn,
                        hash: options.hash
                    });
                });
            }, module.exports = exports.default;
        },
        398: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                default: () => __WEBPACK_DEFAULT_EXPORT__
            });
            var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72), _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825), _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__), _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659), _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__), _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56), _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__), _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540), _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__), _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113), _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__), _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(671), options = {};
            options.styleTagTransform = _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(), 
            options.setAttributes = _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(), 
            options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head"), 
            options.domAPI = _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(), 
            options.insertStyleElement = _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__.A, options);
            const __WEBPACK_DEFAULT_EXPORT__ = _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__.A && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__.A.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__.A.locals : void 0;
        },
        425: (__unused_webpack_module, exports, __webpack_require__) => {
            exports.__esModule = !0, exports.SourceLocation = function SourceLocation(source, locInfo) {
                this.source = source, this.start = {
                    line: locInfo.first_line,
                    column: locInfo.first_column
                }, this.end = {
                    line: locInfo.last_line,
                    column: locInfo.last_column
                };
            }, exports.id = function id(token) {
                return /^\[.*\]$/.test(token) ? token.substring(1, token.length - 1) : token;
            }, exports.stripFlags = function stripFlags(open, close) {
                return {
                    open: "~" === open.charAt(2),
                    close: "~" === close.charAt(close.length - 3)
                };
            }, exports.stripComment = function stripComment(comment) {
                return comment.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
            }, exports.preparePath = function preparePath(data, parts, loc) {
                loc = this.locInfo(loc);
                for (var original = data ? "@" : "", dig = [], depth = 0, i = 0, l = parts.length; i < l; i++) {
                    var part = parts[i].part, isLiteral = parts[i].original !== part;
                    if (original += (parts[i].separator || "") + part, isLiteral || ".." !== part && "." !== part && "this" !== part) dig.push(part); else {
                        if (dig.length > 0) throw new _exception2.default("Invalid path: " + original, {
                            loc
                        });
                        ".." === part && depth++;
                    }
                }
                return {
                    type: "PathExpression",
                    data,
                    depth,
                    parts: dig,
                    original,
                    loc
                };
            }, exports.prepareMustache = function prepareMustache(path, params, hash, open, strip, locInfo) {
                var escapeFlag = open.charAt(3) || open.charAt(2), escaped = "{" !== escapeFlag && "&" !== escapeFlag;
                return {
                    type: /\*/.test(open) ? "Decorator" : "MustacheStatement",
                    path,
                    params,
                    hash,
                    escaped,
                    strip,
                    loc: this.locInfo(locInfo)
                };
            }, exports.prepareRawBlock = function prepareRawBlock(openRawBlock, contents, close, locInfo) {
                validateClose(openRawBlock, close), locInfo = this.locInfo(locInfo);
                var program = {
                    type: "Program",
                    body: contents,
                    strip: {},
                    loc: locInfo
                };
                return {
                    type: "BlockStatement",
                    path: openRawBlock.path,
                    params: openRawBlock.params,
                    hash: openRawBlock.hash,
                    program,
                    openStrip: {},
                    inverseStrip: {},
                    closeStrip: {},
                    loc: locInfo
                };
            }, exports.prepareBlock = function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
                close && close.path && validateClose(openBlock, close);
                var decorator = /\*/.test(openBlock.open);
                program.blockParams = openBlock.blockParams;
                var inverse = void 0, inverseStrip = void 0;
                if (inverseAndProgram) {
                    if (decorator) throw new _exception2.default("Unexpected inverse block on decorator", inverseAndProgram);
                    inverseAndProgram.chain && (inverseAndProgram.program.body[0].closeStrip = close.strip), 
                    inverseStrip = inverseAndProgram.strip, inverse = inverseAndProgram.program;
                }
                inverted && (inverted = inverse, inverse = program, program = inverted);
                return {
                    type: decorator ? "DecoratorBlock" : "BlockStatement",
                    path: openBlock.path,
                    params: openBlock.params,
                    hash: openBlock.hash,
                    program,
                    inverse,
                    openStrip: openBlock.strip,
                    inverseStrip,
                    closeStrip: close && close.strip,
                    loc: this.locInfo(locInfo)
                };
            }, exports.prepareProgram = function prepareProgram(statements, loc) {
                if (!loc && statements.length) {
                    var firstLoc = statements[0].loc, lastLoc = statements[statements.length - 1].loc;
                    firstLoc && lastLoc && (loc = {
                        source: firstLoc.source,
                        start: {
                            line: firstLoc.start.line,
                            column: firstLoc.start.column
                        },
                        end: {
                            line: lastLoc.end.line,
                            column: lastLoc.end.column
                        }
                    });
                }
                return {
                    type: "Program",
                    body: statements,
                    strip: {},
                    loc
                };
            }, exports.preparePartialBlock = function preparePartialBlock(open, program, close, locInfo) {
                return validateClose(open, close), {
                    type: "PartialBlockStatement",
                    name: open.path,
                    params: open.params,
                    hash: open.hash,
                    program,
                    openStrip: open.strip,
                    closeStrip: close && close.strip,
                    loc: this.locInfo(locInfo)
                };
            };
            var _exception2 = function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }(__webpack_require__(769));
            function validateClose(open, close) {
                if (close = close.path ? close.path.original : close, open.path.original !== close) {
                    var errorNode = {
                        loc: open.path.loc
                    };
                    throw new _exception2.default(open.path.original + " doesn't match " + close, errorNode);
                }
            }
        },
        430: (module, exports, __webpack_require__) => {
            exports.__esModule = !0;
            var _utils = __webpack_require__(849);
            exports.default = function(instance) {
                instance.registerDecorator("inline", function(fn, props, container, options) {
                    var ret = fn;
                    return props.partials || (props.partials = {}, ret = function(context, options) {
                        var original = container.partials;
                        container.partials = _utils.extend({}, original, props.partials);
                        var ret = fn(context, options);
                        return container.partials = original, ret;
                    }), props.partials[options.args[0]] = options.fn, ret;
                });
            }, module.exports = exports.default;
        },
        466: (module, exports) => {
            exports.__esModule = !0, exports.default = function(instance) {
                instance.registerHelper("lookup", function(obj, field, options) {
                    return obj ? options.lookupProperty(obj, field) : obj;
                });
            }, module.exports = exports.default;
        },
        540: module => {
            module.exports = function insertStyleElement(options) {
                var element = document.createElement("style");
                return options.setAttributes(element, options.attributes), options.insert(element, options.options), 
                element;
            };
        },
        566: (module, exports, __webpack_require__) => {
            exports.__esModule = !0;
            var _utils = __webpack_require__(849), logger = {
                methodMap: [ "debug", "info", "warn", "error" ],
                level: "info",
                lookupLevel: function lookupLevel(level) {
                    if ("string" == typeof level) {
                        var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
                        level = levelMap >= 0 ? levelMap : parseInt(level, 10);
                    }
                    return level;
                },
                log: function log(level) {
                    if (level = logger.lookupLevel(level), "undefined" != typeof console && logger.lookupLevel(logger.level) <= level) {
                        var method = logger.methodMap[level];
                        console[method] || (method = "log");
                        for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) message[_key - 1] = arguments[_key];
                        console[method].apply(console, message);
                    }
                }
            };
            exports.default = logger, module.exports = exports.default;
        },
        601: module => {
            module.exports = function(i) {
                return i[1];
            };
        },
        613: (module, exports) => {
            function SafeString(string) {
                this.string = string;
            }
            exports.__esModule = !0, SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
                return "" + this.string;
            }, exports.default = SafeString, module.exports = exports.default;
        },
        614: (__unused_webpack_module, exports) => {
            exports.__esModule = !0, exports.wrapHelper = function wrapHelper(helper, transformOptionsFn) {
                if ("function" != typeof helper) return helper;
                return function wrapper() {
                    return arguments[arguments.length - 1] = transformOptionsFn(arguments[arguments.length - 1]), 
                    helper.apply(this, arguments);
                };
            };
        },
        624: (__unused_webpack_module, exports, __webpack_require__) => {
            exports.__esModule = !0, exports.checkRevision = function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
                if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
                if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
                    var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
                    throw new _exception2.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
                }
                throw new _exception2.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
            }, exports.template = function template(templateSpec, env) {
                if (!env) throw new _exception2.default("No environment passed to template");
                if (!templateSpec || !templateSpec.main) throw new _exception2.default("Unknown template object: " + typeof templateSpec);
                templateSpec.main.decorator = templateSpec.main_d, env.VM.checkRevision(templateSpec.compiler);
                var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && 7 === templateSpec.compiler[0];
                var container = {
                    strict: function strict(obj, name, loc) {
                        if (!obj || !(name in obj)) throw new _exception2.default('"' + name + '" not defined in ' + obj, {
                            loc
                        });
                        return container.lookupProperty(obj, name);
                    },
                    lookupProperty: function lookupProperty(parent, propertyName) {
                        var result = parent[propertyName];
                        return null == result || Object.prototype.hasOwnProperty.call(parent, propertyName) || _internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName) ? result : void 0;
                    },
                    lookup: function lookup(depths, name) {
                        for (var len = depths.length, i = 0; i < len; i++) {
                            if (null != (depths[i] && container.lookupProperty(depths[i], name))) return depths[i][name];
                        }
                    },
                    lambda: function lambda(current, context) {
                        return "function" == typeof current ? current.call(context) : current;
                    },
                    escapeExpression: Utils.escapeExpression,
                    invokePartial: function invokePartialWrapper(partial, context, options) {
                        options.hash && (context = Utils.extend({}, context, options.hash), options.ids && (options.ids[0] = !0)), 
                        partial = env.VM.resolvePartial.call(this, partial, context, options);
                        var extendedOptions = Utils.extend({}, options, {
                            hooks: this.hooks,
                            protoAccessControl: this.protoAccessControl
                        }), result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
                        if (null == result && env.compile && (options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env), 
                        result = options.partials[options.name](context, extendedOptions)), null != result) {
                            if (options.indent) {
                                for (var lines = result.split("\n"), i = 0, l = lines.length; i < l && (lines[i] || i + 1 !== l); i++) lines[i] = options.indent + lines[i];
                                result = lines.join("\n");
                            }
                            return result;
                        }
                        throw new _exception2.default("The partial " + options.name + " could not be compiled when running in runtime-only mode");
                    },
                    fn: function fn(i) {
                        var ret = templateSpec[i];
                        return ret.decorator = templateSpec[i + "_d"], ret;
                    },
                    programs: [],
                    program: function program(i, data, declaredBlockParams, blockParams, depths) {
                        var programWrapper = this.programs[i], fn = this.fn(i);
                        return data || depths || blockParams || declaredBlockParams ? programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths) : programWrapper || (programWrapper = this.programs[i] = wrapProgram(this, i, fn)), 
                        programWrapper;
                    },
                    data: function data(value, depth) {
                        for (;value && depth--; ) value = value._parent;
                        return value;
                    },
                    mergeIfNeeded: function mergeIfNeeded(param, common) {
                        var obj = param || common;
                        return param && common && param !== common && (obj = Utils.extend({}, common, param)), 
                        obj;
                    },
                    nullContext: Object.seal({}),
                    noop: env.VM.noop,
                    compilerInfo: templateSpec.compiler
                };
                function ret(context) {
                    var options = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], data = options.data;
                    ret._setup(options), !options.partial && templateSpec.useData && (data = function initData(context, data) {
                        data && "root" in data || ((data = data ? _base.createFrame(data) : {}).root = context);
                        return data;
                    }(context, data));
                    var depths = void 0, blockParams = templateSpec.useBlockParams ? [] : void 0;
                    function main(context) {
                        return "" + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
                    }
                    return templateSpec.useDepths && (depths = options.depths ? context != options.depths[0] ? [ context ].concat(options.depths) : options.depths : [ context ]), 
                    (main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams))(context, options);
                }
                return ret.isTop = !0, ret._setup = function(options) {
                    if (options.partial) container.protoAccessControl = options.protoAccessControl, 
                    container.helpers = options.helpers, container.partials = options.partials, container.decorators = options.decorators, 
                    container.hooks = options.hooks; else {
                        var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
                        !function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
                            Object.keys(mergedHelpers).forEach(function(helperName) {
                                var helper = mergedHelpers[helperName];
                                mergedHelpers[helperName] = function passLookupPropertyOption(helper, container) {
                                    var lookupProperty = container.lookupProperty;
                                    return _internalWrapHelper.wrapHelper(helper, function(options) {
                                        return Utils.extend({
                                            lookupProperty
                                        }, options);
                                    });
                                }(helper, container);
                            });
                        }(mergedHelpers, container), container.helpers = mergedHelpers, templateSpec.usePartial && (container.partials = container.mergeIfNeeded(options.partials, env.partials)), 
                        (templateSpec.usePartial || templateSpec.useDecorators) && (container.decorators = Utils.extend({}, env.decorators, options.decorators)), 
                        container.hooks = {}, container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
                        var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
                        _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers), _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
                    }
                }, ret._child = function(i, data, blockParams, depths) {
                    if (templateSpec.useBlockParams && !blockParams) throw new _exception2.default("must pass block params");
                    if (templateSpec.useDepths && !depths) throw new _exception2.default("must pass parent depths");
                    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
                }, ret;
            }, exports.wrapProgram = wrapProgram, exports.resolvePartial = function resolvePartial(partial, context, options) {
                partial ? partial.call || options.name || (options.name = partial, partial = options.partials[partial]) : partial = "@partial-block" === options.name ? options.data["partial-block"] : options.partials[options.name];
                return partial;
            }, exports.invokePartial = function invokePartial(partial, context, options) {
                var currentPartialBlock = options.data && options.data["partial-block"];
                options.partial = !0, options.ids && (options.data.contextPath = options.ids[0] || options.data.contextPath);
                var partialBlock = void 0;
                options.fn && options.fn !== noop && function() {
                    options.data = _base.createFrame(options.data);
                    var fn = options.fn;
                    partialBlock = options.data["partial-block"] = function partialBlockWrapper(context) {
                        var options = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return options.data = _base.createFrame(options.data), options.data["partial-block"] = currentPartialBlock, 
                        fn(context, options);
                    }, fn.partials && (options.partials = Utils.extend({}, options.partials, fn.partials));
                }();
                void 0 === partial && partialBlock && (partial = partialBlock);
                if (void 0 === partial) throw new _exception2.default("The partial " + options.name + " could not be found");
                if (partial instanceof Function) return partial(context, options);
            }, exports.noop = noop;
            var Utils = function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) return obj;
                var newObj = {};
                if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
                return newObj.default = obj, newObj;
            }(__webpack_require__(849)), _exception2 = function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }(__webpack_require__(769)), _base = __webpack_require__(871), _helpers = __webpack_require__(277), _internalWrapHelper = __webpack_require__(614), _internalProtoAccess = __webpack_require__(865);
            function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
                function prog(context) {
                    var options = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], currentDepths = depths;
                    return !depths || context == depths[0] || context === container.nullContext && null === depths[0] || (currentDepths = [ context ].concat(depths)), 
                    fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [ options.blockParams ].concat(blockParams), currentDepths);
                }
                return (prog = executeDecorators(fn, prog, container, depths, data, blockParams)).program = i, 
                prog.depth = depths ? depths.length : 0, prog.blockParams = declaredBlockParams || 0, 
                prog;
            }
            function noop() {
                return "";
            }
            function executeDecorators(fn, prog, container, depths, data, blockParams) {
                if (fn.decorator) {
                    var props = {};
                    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths), 
                    Utils.extend(prog, props);
                }
                return prog;
            }
        },
        632: (module, exports, __webpack_require__) => {
            exports.__esModule = !0;
            var _utils = __webpack_require__(849), SourceNode = void 0;
            try {} catch (err) {}
            function castChunk(chunk, codeGen, loc) {
                if (_utils.isArray(chunk)) {
                    for (var ret = [], i = 0, len = chunk.length; i < len; i++) ret.push(codeGen.wrap(chunk[i], loc));
                    return ret;
                }
                return "boolean" == typeof chunk || "number" == typeof chunk ? chunk + "" : chunk;
            }
            function CodeGen(srcFile) {
                this.srcFile = srcFile, this.source = [];
            }
            SourceNode || ((SourceNode = function(line, column, srcFile, chunks) {
                this.src = "", chunks && this.add(chunks);
            }).prototype = {
                add: function add(chunks) {
                    _utils.isArray(chunks) && (chunks = chunks.join("")), this.src += chunks;
                },
                prepend: function prepend(chunks) {
                    _utils.isArray(chunks) && (chunks = chunks.join("")), this.src = chunks + this.src;
                },
                toStringWithSourceMap: function toStringWithSourceMap() {
                    return {
                        code: this.toString()
                    };
                },
                toString: function toString() {
                    return this.src;
                }
            }), CodeGen.prototype = {
                isEmpty: function isEmpty() {
                    return !this.source.length;
                },
                prepend: function prepend(source, loc) {
                    this.source.unshift(this.wrap(source, loc));
                },
                push: function push(source, loc) {
                    this.source.push(this.wrap(source, loc));
                },
                merge: function merge() {
                    var source = this.empty();
                    return this.each(function(line) {
                        source.add([ "  ", line, "\n" ]);
                    }), source;
                },
                each: function each(iter) {
                    for (var i = 0, len = this.source.length; i < len; i++) iter(this.source[i]);
                },
                empty: function empty() {
                    var loc = this.currentLocation || {
                        start: {}
                    };
                    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
                },
                wrap: function wrap(chunk) {
                    var loc = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || {
                        start: {}
                    } : arguments[1];
                    return chunk instanceof SourceNode ? chunk : (chunk = castChunk(chunk, this, loc), 
                    new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk));
                },
                functionCall: function functionCall(fn, type, params) {
                    return params = this.generateList(params), this.wrap([ fn, type ? "." + type + "(" : "(", params, ")" ]);
                },
                quotedString: function quotedString(str) {
                    return '"' + (str + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
                },
                objectLiteral: function objectLiteral(obj) {
                    var _this = this, pairs = [];
                    Object.keys(obj).forEach(function(key) {
                        var value = castChunk(obj[key], _this);
                        "undefined" !== value && pairs.push([ _this.quotedString(key), ":", value ]);
                    });
                    var ret = this.generateList(pairs);
                    return ret.prepend("{"), ret.add("}"), ret;
                },
                generateList: function generateList(entries) {
                    for (var ret = this.empty(), i = 0, len = entries.length; i < len; i++) i && ret.add(","), 
                    ret.add(castChunk(entries[i], this));
                    return ret;
                },
                generateArray: function generateArray(entries) {
                    var ret = this.generateList(entries);
                    return ret.prepend("["), ret.add("]"), ret;
                }
            }, exports.default = CodeGen, module.exports = exports.default;
        },
        639: (module, exports, __webpack_require__) => {
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.__esModule = !0;
            var _handlebarsRuntime2 = _interopRequireDefault(__webpack_require__(261)), _handlebarsCompilerAst2 = _interopRequireDefault(__webpack_require__(919)), _handlebarsCompilerBase = __webpack_require__(27), _handlebarsCompilerCompiler = __webpack_require__(127), _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(__webpack_require__(727)), _handlebarsCompilerVisitor2 = _interopRequireDefault(__webpack_require__(350)), _handlebarsNoConflict2 = _interopRequireDefault(__webpack_require__(148)), _create = _handlebarsRuntime2.default.create;
            function create() {
                var hb = _create();
                return hb.compile = function(input, options) {
                    return _handlebarsCompilerCompiler.compile(input, options, hb);
                }, hb.precompile = function(input, options) {
                    return _handlebarsCompilerCompiler.precompile(input, options, hb);
                }, hb.AST = _handlebarsCompilerAst2.default, hb.Compiler = _handlebarsCompilerCompiler.Compiler, 
                hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2.default, hb.Parser = _handlebarsCompilerBase.parser, 
                hb.parse = _handlebarsCompilerBase.parse, hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing, 
                hb;
            }
            var inst = create();
            inst.create = create, _handlebarsNoConflict2.default(inst), inst.Visitor = _handlebarsCompilerVisitor2.default, 
            inst.default = inst, exports.default = inst, module.exports = exports.default;
        },
        659: module => {
            var memo = {};
            module.exports = function insertBySelector(insert, style) {
                var target = function getTarget(target) {
                    if (void 0 === memo[target]) {
                        var styleTarget = document.querySelector(target);
                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) try {
                            styleTarget = styleTarget.contentDocument.head;
                        } catch (e) {
                            styleTarget = null;
                        }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                }(insert);
                if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                target.appendChild(style);
            };
        },
        671: (module, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                A: () => __WEBPACK_DEFAULT_EXPORT__
            });
            var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601), _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__), _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314), ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
            ___CSS_LOADER_EXPORT___.push([ module.id, "", "" ]);
            const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
        },
        726: (__unused_webpack_module, exports, __webpack_require__) => {
            exports.__esModule = !0, exports.createNewLookupObject = function createNewLookupObject() {
                for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) sources[_key] = arguments[_key];
                return _utils.extend.apply(void 0, [ Object.create(null) ].concat(sources));
            };
            var _utils = __webpack_require__(849);
        },
        727: (module, exports, __webpack_require__) => {
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.__esModule = !0;
            var _base = __webpack_require__(871), _exception2 = _interopRequireDefault(__webpack_require__(769)), _utils = __webpack_require__(849), _codeGen2 = _interopRequireDefault(__webpack_require__(632));
            function Literal(value) {
                this.value = value;
            }
            function JavaScriptCompiler() {}
            JavaScriptCompiler.prototype = {
                nameLookup: function nameLookup(parent, name) {
                    return this.internalNameLookup(parent, name);
                },
                depthedLookup: function depthedLookup(name) {
                    return [ this.aliasable("container.lookup"), "(depths, ", JSON.stringify(name), ")" ];
                },
                compilerInfo: function compilerInfo() {
                    var revision = _base.COMPILER_REVISION;
                    return [ revision, _base.REVISION_CHANGES[revision] ];
                },
                appendToBuffer: function appendToBuffer(source, location, explicit) {
                    return _utils.isArray(source) || (source = [ source ]), source = this.source.wrap(source, location), 
                    this.environment.isSimple ? [ "return ", source, ";" ] : explicit ? [ "buffer += ", source, ";" ] : (source.appendToBuffer = !0, 
                    source);
                },
                initializeBuffer: function initializeBuffer() {
                    return this.quotedString("");
                },
                internalNameLookup: function internalNameLookup(parent, name) {
                    return this.lookupPropertyFunctionIsUsed = !0, [ "lookupProperty(", parent, ",", JSON.stringify(name), ")" ];
                },
                lookupPropertyFunctionIsUsed: !1,
                compile: function compile(environment, options, context, asObject) {
                    this.environment = environment, this.options = options, this.stringParams = this.options.stringParams, 
                    this.trackIds = this.options.trackIds, this.precompile = !asObject, this.name = this.environment.name, 
                    this.isChild = !!context, this.context = context || {
                        decorators: [],
                        programs: [],
                        environments: []
                    }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, 
                    this.registers = {
                        list: []
                    }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], 
                    this.compileChildren(environment, options), this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat, 
                    this.useBlockParams = this.useBlockParams || environment.useBlockParams;
                    var opcodes = environment.opcodes, opcode = void 0, firstLoc = void 0, i = void 0, l = void 0;
                    for (i = 0, l = opcodes.length; i < l; i++) opcode = opcodes[i], this.source.currentLocation = opcode.loc, 
                    firstLoc = firstLoc || opcode.loc, this[opcode.opcode].apply(this, opcode.args);
                    if (this.source.currentLocation = firstLoc, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new _exception2.default("Compile completed with content left on stack");
                    this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, 
                    this.decorators.prepend([ "var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), ";\n" ]), 
                    this.decorators.push("return fn;"), asObject ? this.decorators = Function.apply(this, [ "fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge() ]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), 
                    this.decorators.push("}\n"), this.decorators = this.decorators.merge()));
                    var fn = this.createFunctionContext(asObject);
                    if (this.isChild) return fn;
                    var ret = {
                        compiler: this.compilerInfo(),
                        main: fn
                    };
                    this.decorators && (ret.main_d = this.decorators, ret.useDecorators = !0);
                    var _context = this.context, programs = _context.programs, decorators = _context.decorators;
                    for (i = 0, l = programs.length; i < l; i++) programs[i] && (ret[i] = programs[i], 
                    decorators[i] && (ret[i + "_d"] = decorators[i], ret.useDecorators = !0));
                    return this.environment.usePartial && (ret.usePartial = !0), this.options.data && (ret.useData = !0), 
                    this.useDepths && (ret.useDepths = !0), this.useBlockParams && (ret.useBlockParams = !0), 
                    this.options.compat && (ret.compat = !0), asObject ? ret.compilerOptions = this.options : (ret.compiler = JSON.stringify(ret.compiler), 
                    this.source.currentLocation = {
                        start: {
                            line: 1,
                            column: 0
                        }
                    }, ret = this.objectLiteral(ret), options.srcName ? (ret = ret.toStringWithSourceMap({
                        file: options.destName
                    })).map = ret.map && ret.map.toString() : ret = ret.toString()), ret;
                },
                preamble: function preamble() {
                    this.lastContext = 0, this.source = new _codeGen2.default(this.options.srcName), 
                    this.decorators = new _codeGen2.default(this.options.srcName);
                },
                createFunctionContext: function createFunctionContext(asObject) {
                    var _this = this, varDeclarations = "", locals = this.stackVars.concat(this.registers.list);
                    locals.length > 0 && (varDeclarations += ", " + locals.join(", "));
                    var aliasCount = 0;
                    Object.keys(this.aliases).forEach(function(alias) {
                        var node = _this.aliases[alias];
                        node.children && node.referenceCount > 1 && (varDeclarations += ", alias" + ++aliasCount + "=" + alias, 
                        node.children[0] = "alias" + aliasCount);
                    }), this.lookupPropertyFunctionIsUsed && (varDeclarations += ", " + this.lookupPropertyFunctionVarDeclaration());
                    var params = [ "container", "depth0", "helpers", "partials", "data" ];
                    (this.useBlockParams || this.useDepths) && params.push("blockParams"), this.useDepths && params.push("depths");
                    var source = this.mergeSource(varDeclarations);
                    return asObject ? (params.push(source), Function.apply(this, params)) : this.source.wrap([ "function(", params.join(","), ") {\n  ", source, "}" ]);
                },
                mergeSource: function mergeSource(varDeclarations) {
                    var isSimple = this.environment.isSimple, appendOnly = !this.forceBuffer, appendFirst = void 0, sourceSeen = void 0, bufferStart = void 0, bufferEnd = void 0;
                    return this.source.each(function(line) {
                        line.appendToBuffer ? (bufferStart ? line.prepend("  + ") : bufferStart = line, 
                        bufferEnd = line) : (bufferStart && (sourceSeen ? bufferStart.prepend("buffer += ") : appendFirst = !0, 
                        bufferEnd.add(";"), bufferStart = bufferEnd = void 0), sourceSeen = !0, isSimple || (appendOnly = !1));
                    }), appendOnly ? bufferStart ? (bufferStart.prepend("return "), bufferEnd.add(";")) : sourceSeen || this.source.push('return "";') : (varDeclarations += ", buffer = " + (appendFirst ? "" : this.initializeBuffer()), 
                    bufferStart ? (bufferStart.prepend("return buffer + "), bufferEnd.add(";")) : this.source.push("return buffer;")), 
                    varDeclarations && this.source.prepend("var " + varDeclarations.substring(2) + (appendFirst ? "" : ";\n")), 
                    this.source.merge();
                },
                lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
                    return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim();
                },
                blockValue: function blockValue(name) {
                    var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [ this.contextName(0) ];
                    this.setupHelperArgs(name, 0, params);
                    var blockName = this.popStack();
                    params.splice(1, 0, blockName), this.push(this.source.functionCall(blockHelperMissing, "call", params));
                },
                ambiguousBlockValue: function ambiguousBlockValue() {
                    var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [ this.contextName(0) ];
                    this.setupHelperArgs("", 0, params, !0), this.flushInline();
                    var current = this.topStack();
                    params.splice(1, 0, current), this.pushSource([ "if (!", this.lastHelper, ") { ", current, " = ", this.source.functionCall(blockHelperMissing, "call", params), "}" ]);
                },
                appendContent: function appendContent(content) {
                    this.pendingContent ? content = this.pendingContent + content : this.pendingLocation = this.source.currentLocation, 
                    this.pendingContent = content;
                },
                append: function append() {
                    if (this.isInline()) this.replaceStack(function(current) {
                        return [ " != null ? ", current, ' : ""' ];
                    }), this.pushSource(this.appendToBuffer(this.popStack())); else {
                        var local = this.popStack();
                        this.pushSource([ "if (", local, " != null) { ", this.appendToBuffer(local, void 0, !0), " }" ]), 
                        this.environment.isSimple && this.pushSource([ "else { ", this.appendToBuffer("''", void 0, !0), " }" ]);
                    }
                },
                appendEscaped: function appendEscaped() {
                    this.pushSource(this.appendToBuffer([ this.aliasable("container.escapeExpression"), "(", this.popStack(), ")" ]));
                },
                getContext: function getContext(depth) {
                    this.lastContext = depth;
                },
                pushContext: function pushContext() {
                    this.pushStackLiteral(this.contextName(this.lastContext));
                },
                lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
                    var i = 0;
                    scoped || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(parts[i++])), 
                    this.resolvePath("context", parts, i, falsy, strict);
                },
                lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
                    this.useBlockParams = !0, this.push([ "blockParams[", blockParamId[0], "][", blockParamId[1], "]" ]), 
                    this.resolvePath("context", parts, 1);
                },
                lookupData: function lookupData(depth, parts, strict) {
                    depth ? this.pushStackLiteral("container.data(data, " + depth + ")") : this.pushStackLiteral("data"), 
                    this.resolvePath("data", parts, 0, !0, strict);
                },
                resolvePath: function resolvePath(type, parts, i, falsy, strict) {
                    var _this2 = this;
                    if (this.options.strict || this.options.assumeObjects) this.push(function strictLookup(requireTerminal, compiler, parts, i, type) {
                        var stack = compiler.popStack(), len = parts.length;
                        requireTerminal && len--;
                        for (;i < len; i++) stack = compiler.nameLookup(stack, parts[i], type);
                        return requireTerminal ? [ compiler.aliasable("container.strict"), "(", stack, ", ", compiler.quotedString(parts[i]), ", ", JSON.stringify(compiler.source.currentLocation), " )" ] : stack;
                    }(this.options.strict && strict, this, parts, i, type)); else for (var len = parts.length; i < len; i++) this.replaceStack(function(current) {
                        var lookup = _this2.nameLookup(current, parts[i], type);
                        return falsy ? [ " && ", lookup ] : [ " != null ? ", lookup, " : ", current ];
                    });
                },
                resolvePossibleLambda: function resolvePossibleLambda() {
                    this.push([ this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")" ]);
                },
                pushStringParam: function pushStringParam(string, type) {
                    this.pushContext(), this.pushString(type), "SubExpression" !== type && ("string" == typeof string ? this.pushString(string) : this.pushStackLiteral(string));
                },
                emptyHash: function emptyHash(omitEmpty) {
                    this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), 
                    this.pushStackLiteral(omitEmpty ? "undefined" : "{}");
                },
                pushHash: function pushHash() {
                    this.hash && this.hashes.push(this.hash), this.hash = {
                        values: {},
                        types: [],
                        contexts: [],
                        ids: []
                    };
                },
                popHash: function popHash() {
                    var hash = this.hash;
                    this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(hash.ids)), 
                    this.stringParams && (this.push(this.objectLiteral(hash.contexts)), this.push(this.objectLiteral(hash.types))), 
                    this.push(this.objectLiteral(hash.values));
                },
                pushString: function pushString(string) {
                    this.pushStackLiteral(this.quotedString(string));
                },
                pushLiteral: function pushLiteral(value) {
                    this.pushStackLiteral(value);
                },
                pushProgram: function pushProgram(guid) {
                    null != guid ? this.pushStackLiteral(this.programExpression(guid)) : this.pushStackLiteral(null);
                },
                registerDecorator: function registerDecorator(paramSize, name) {
                    var foundDecorator = this.nameLookup("decorators", name, "decorator"), options = this.setupHelperArgs(name, paramSize);
                    this.decorators.push([ "fn = ", this.decorators.functionCall(foundDecorator, "", [ "fn", "props", "container", options ]), " || fn;" ]);
                },
                invokeHelper: function invokeHelper(paramSize, name, isSimple) {
                    var nonHelper = this.popStack(), helper = this.setupHelper(paramSize, name), possibleFunctionCalls = [];
                    isSimple && possibleFunctionCalls.push(helper.name), possibleFunctionCalls.push(nonHelper), 
                    this.options.strict || possibleFunctionCalls.push(this.aliasable("container.hooks.helperMissing"));
                    var functionLookupCode = [ "(", this.itemsSeparatedBy(possibleFunctionCalls, "||"), ")" ], functionCall = this.source.functionCall(functionLookupCode, "call", helper.callParams);
                    this.push(functionCall);
                },
                itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
                    var result = [];
                    result.push(items[0]);
                    for (var i = 1; i < items.length; i++) result.push(separator, items[i]);
                    return result;
                },
                invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
                    var helper = this.setupHelper(paramSize, name);
                    this.push(this.source.functionCall(helper.name, "call", helper.callParams));
                },
                invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
                    this.useRegister("helper");
                    var nonHelper = this.popStack();
                    this.emptyHash();
                    var helper = this.setupHelper(0, name, helperCall), lookup = [ "(", "(helper = ", this.lastHelper = this.nameLookup("helpers", name, "helper"), " || ", nonHelper, ")" ];
                    this.options.strict || (lookup[0] = "(helper = ", lookup.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), 
                    this.push([ "(", lookup, helper.paramsInit ? [ "),(", helper.paramsInit ] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", helper.callParams), " : helper))" ]);
                },
                invokePartial: function invokePartial(isDynamic, name, indent) {
                    var params = [], options = this.setupParams(name, 1, params);
                    isDynamic && (name = this.popStack(), delete options.name), indent && (options.indent = JSON.stringify(indent)), 
                    options.helpers = "helpers", options.partials = "partials", options.decorators = "container.decorators", 
                    isDynamic ? params.unshift(name) : params.unshift(this.nameLookup("partials", name, "partial")), 
                    this.options.compat && (options.depths = "depths"), options = this.objectLiteral(options), 
                    params.push(options), this.push(this.source.functionCall("container.invokePartial", "", params));
                },
                assignToHash: function assignToHash(key) {
                    var value = this.popStack(), context = void 0, type = void 0, id = void 0;
                    this.trackIds && (id = this.popStack()), this.stringParams && (type = this.popStack(), 
                    context = this.popStack());
                    var hash = this.hash;
                    context && (hash.contexts[key] = context), type && (hash.types[key] = type), id && (hash.ids[key] = id), 
                    hash.values[key] = value;
                },
                pushId: function pushId(type, name, child) {
                    "BlockParam" === type ? this.pushStackLiteral("blockParams[" + name[0] + "].path[" + name[1] + "]" + (child ? " + " + JSON.stringify("." + child) : "")) : "PathExpression" === type ? this.pushString(name) : "SubExpression" === type ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
                },
                compiler: JavaScriptCompiler,
                compileChildren: function compileChildren(environment, options) {
                    for (var children = environment.children, child = void 0, compiler = void 0, i = 0, l = children.length; i < l; i++) {
                        child = children[i], compiler = new this.compiler;
                        var existing = this.matchExistingProgram(child);
                        if (null == existing) {
                            this.context.programs.push("");
                            var index = this.context.programs.length;
                            child.index = index, child.name = "program" + index, this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile), 
                            this.context.decorators[index] = compiler.decorators, this.context.environments[index] = child, 
                            this.useDepths = this.useDepths || compiler.useDepths, this.useBlockParams = this.useBlockParams || compiler.useBlockParams, 
                            child.useDepths = this.useDepths, child.useBlockParams = this.useBlockParams;
                        } else child.index = existing.index, child.name = "program" + existing.index, this.useDepths = this.useDepths || existing.useDepths, 
                        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
                    }
                },
                matchExistingProgram: function matchExistingProgram(child) {
                    for (var i = 0, len = this.context.environments.length; i < len; i++) {
                        var environment = this.context.environments[i];
                        if (environment && environment.equals(child)) return environment;
                    }
                },
                programExpression: function programExpression(guid) {
                    var child = this.environment.children[guid], programParams = [ child.index, "data", child.blockParams ];
                    return (this.useBlockParams || this.useDepths) && programParams.push("blockParams"), 
                    this.useDepths && programParams.push("depths"), "container.program(" + programParams.join(", ") + ")";
                },
                useRegister: function useRegister(name) {
                    this.registers[name] || (this.registers[name] = !0, this.registers.list.push(name));
                },
                push: function push(expr) {
                    return expr instanceof Literal || (expr = this.source.wrap(expr)), this.inlineStack.push(expr), 
                    expr;
                },
                pushStackLiteral: function pushStackLiteral(item) {
                    this.push(new Literal(item));
                },
                pushSource: function pushSource(source) {
                    this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), 
                    this.pendingContent = void 0), source && this.source.push(source);
                },
                replaceStack: function replaceStack(callback) {
                    var prefix = [ "(" ], stack = void 0, createdStack = void 0, usedLiteral = void 0;
                    if (!this.isInline()) throw new _exception2.default("replaceStack on non-inline");
                    var top = this.popStack(!0);
                    if (top instanceof Literal) prefix = [ "(", stack = [ top.value ] ], usedLiteral = !0; else {
                        createdStack = !0;
                        var _name = this.incrStack();
                        prefix = [ "((", this.push(_name), " = ", top, ")" ], stack = this.topStack();
                    }
                    var item = callback.call(this, stack);
                    usedLiteral || this.popStack(), createdStack && this.stackSlot--, this.push(prefix.concat(item, ")"));
                },
                incrStack: function incrStack() {
                    return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), 
                    this.topStackName();
                },
                topStackName: function topStackName() {
                    return "stack" + this.stackSlot;
                },
                flushInline: function flushInline() {
                    var inlineStack = this.inlineStack;
                    this.inlineStack = [];
                    for (var i = 0, len = inlineStack.length; i < len; i++) {
                        var entry = inlineStack[i];
                        if (entry instanceof Literal) this.compileStack.push(entry); else {
                            var stack = this.incrStack();
                            this.pushSource([ stack, " = ", entry, ";" ]), this.compileStack.push(stack);
                        }
                    }
                },
                isInline: function isInline() {
                    return this.inlineStack.length;
                },
                popStack: function popStack(wrapped) {
                    var inline = this.isInline(), item = (inline ? this.inlineStack : this.compileStack).pop();
                    if (!wrapped && item instanceof Literal) return item.value;
                    if (!inline) {
                        if (!this.stackSlot) throw new _exception2.default("Invalid stack pop");
                        this.stackSlot--;
                    }
                    return item;
                },
                topStack: function topStack() {
                    var stack = this.isInline() ? this.inlineStack : this.compileStack, item = stack[stack.length - 1];
                    return item instanceof Literal ? item.value : item;
                },
                contextName: function contextName(context) {
                    return this.useDepths && context ? "depths[" + context + "]" : "depth" + context;
                },
                quotedString: function quotedString(str) {
                    return this.source.quotedString(str);
                },
                objectLiteral: function objectLiteral(obj) {
                    return this.source.objectLiteral(obj);
                },
                aliasable: function aliasable(name) {
                    var ret = this.aliases[name];
                    return ret ? (ret.referenceCount++, ret) : ((ret = this.aliases[name] = this.source.wrap(name)).aliasable = !0, 
                    ret.referenceCount = 1, ret);
                },
                setupHelper: function setupHelper(paramSize, name, blockHelper) {
                    var params = [];
                    return {
                        params,
                        paramsInit: this.setupHelperArgs(name, paramSize, params, blockHelper),
                        name: this.nameLookup("helpers", name, "helper"),
                        callParams: [ this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})") ].concat(params)
                    };
                },
                setupParams: function setupParams(helper, paramSize, params) {
                    var options = {}, contexts = [], types = [], ids = [], objectArgs = !params, param = void 0;
                    objectArgs && (params = []), options.name = this.quotedString(helper), options.hash = this.popStack(), 
                    this.trackIds && (options.hashIds = this.popStack()), this.stringParams && (options.hashTypes = this.popStack(), 
                    options.hashContexts = this.popStack());
                    var inverse = this.popStack(), program = this.popStack();
                    (program || inverse) && (options.fn = program || "container.noop", options.inverse = inverse || "container.noop");
                    for (var i = paramSize; i--; ) param = this.popStack(), params[i] = param, this.trackIds && (ids[i] = this.popStack()), 
                    this.stringParams && (types[i] = this.popStack(), contexts[i] = this.popStack());
                    return objectArgs && (options.args = this.source.generateArray(params)), this.trackIds && (options.ids = this.source.generateArray(ids)), 
                    this.stringParams && (options.types = this.source.generateArray(types), options.contexts = this.source.generateArray(contexts)), 
                    this.options.data && (options.data = "data"), this.useBlockParams && (options.blockParams = "blockParams"), 
                    options;
                },
                setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
                    var options = this.setupParams(helper, paramSize, params);
                    return options.loc = JSON.stringify(this.source.currentLocation), options = this.objectLiteral(options), 
                    useRegister ? (this.useRegister("options"), params.push("options"), [ "options=", options ]) : params ? (params.push(options), 
                    "") : options;
                }
            }, function() {
                for (var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), compilerWords = JavaScriptCompiler.RESERVED_WORDS = {}, i = 0, l = reservedWords.length; i < l; i++) compilerWords[reservedWords[i]] = !0;
            }(), JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
                return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
            }, exports.default = JavaScriptCompiler, module.exports = exports.default;
        },
        769: (module, exports) => {
            exports.__esModule = !0;
            var errorProps = [ "description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack" ];
            function Exception(message, node) {
                var loc = node && node.loc, line = void 0, endLineNumber = void 0, column = void 0, endColumn = void 0;
                loc && (line = loc.start.line, endLineNumber = loc.end.line, column = loc.start.column, 
                endColumn = loc.end.column, message += " - " + line + ":" + column);
                for (var tmp = Error.prototype.constructor.call(this, message), idx = 0; idx < errorProps.length; idx++) this[errorProps[idx]] = tmp[errorProps[idx]];
                Error.captureStackTrace && Error.captureStackTrace(this, Exception);
                try {
                    loc && (this.lineNumber = line, this.endLineNumber = endLineNumber, Object.defineProperty ? (Object.defineProperty(this, "column", {
                        value: column,
                        enumerable: !0
                    }), Object.defineProperty(this, "endColumn", {
                        value: endColumn,
                        enumerable: !0
                    })) : (this.column = column, this.endColumn = endColumn));
                } catch (nop) {}
            }
            Exception.prototype = new Error, exports.default = Exception, module.exports = exports.default;
        },
        785: (module, exports, __webpack_require__) => {
            exports.__esModule = !0;
            var _utils = __webpack_require__(849), _exception2 = function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }(__webpack_require__(769));
            exports.default = function(instance) {
                instance.registerHelper("each", function(context, options) {
                    if (!options) throw new _exception2.default("Must pass iterator to #each");
                    var priorKey, fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = void 0, contextPath = void 0;
                    function execIteration(field, index, last) {
                        data && (data.key = field, data.index = index, data.first = 0 === index, data.last = !!last, 
                        contextPath && (data.contextPath = contextPath + field)), ret += fn(context[field], {
                            data,
                            blockParams: _utils.blockParams([ context[field], field ], [ contextPath + field, null ])
                        });
                    }
                    if (options.data && options.ids && (contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + "."), 
                    _utils.isFunction(context) && (context = context.call(this)), options.data && (data = _utils.createFrame(options.data)), 
                    context && "object" == typeof context) if (_utils.isArray(context)) for (var j = context.length; i < j; i++) i in context && execIteration(i, i, i === context.length - 1); else if ("function" == typeof Symbol && context[Symbol.iterator]) {
                        for (var newContext = [], iterator = context[Symbol.iterator](), it = iterator.next(); !it.done; it = iterator.next()) newContext.push(it.value);
                        for (j = (context = newContext).length; i < j; i++) execIteration(i, i, i === context.length - 1);
                    } else priorKey = void 0, Object.keys(context).forEach(function(key) {
                        void 0 !== priorKey && execIteration(priorKey, i - 1), priorKey = key, i++;
                    }), void 0 !== priorKey && execIteration(priorKey, i - 1, !0);
                    return 0 === i && (ret = inverse(this)), ret;
                });
            }, module.exports = exports.default;
        },
        825: module => {
            module.exports = function domAPI(options) {
                if ("undefined" == typeof document) return {
                    update: function update() {},
                    remove: function remove() {}
                };
                var styleElement = options.insertStyleElement(options);
                return {
                    update: function update(obj) {
                        !function apply(styleElement, options, obj) {
                            var css = "";
                            obj.supports && (css += "@supports (".concat(obj.supports, ") {")), obj.media && (css += "@media ".concat(obj.media, " {"));
                            var needLayer = void 0 !== obj.layer;
                            needLayer && (css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {")), 
                            css += obj.css, needLayer && (css += "}"), obj.media && (css += "}"), obj.supports && (css += "}");
                            var sourceMap = obj.sourceMap;
                            sourceMap && "undefined" != typeof btoa && (css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */")), 
                            options.styleTagTransform(css, styleElement, options.options);
                        }(styleElement, options, obj);
                    },
                    remove: function remove() {
                        !function removeStyleElement(styleElement) {
                            if (null === styleElement.parentNode) return !1;
                            styleElement.parentNode.removeChild(styleElement);
                        }(styleElement);
                    }
                };
            };
        },
        849: (__unused_webpack_module, exports) => {
            exports.__esModule = !0, exports.extend = extend, exports.indexOf = function indexOf(array, value) {
                for (var i = 0, len = array.length; i < len; i++) if (array[i] === value) return i;
                return -1;
            }, exports.escapeExpression = function escapeExpression(string) {
                if ("string" != typeof string) {
                    if (string && string.toHTML) return string.toHTML();
                    if (null == string) return "";
                    if (!string) return string + "";
                    string = "" + string;
                }
                if (!possible.test(string)) return string;
                return string.replace(badChars, escapeChar);
            }, exports.isEmpty = function isEmpty(value) {
                return !value && 0 !== value || !(!isArray(value) || 0 !== value.length);
            }, exports.createFrame = function createFrame(object) {
                var frame = extend({}, object);
                return frame._parent = object, frame;
            }, exports.blockParams = function blockParams(params, ids) {
                return params.path = ids, params;
            }, exports.appendContextPath = function appendContextPath(contextPath, id) {
                return (contextPath ? contextPath + "." : "") + id;
            };
            var escape = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            }, badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
            function escapeChar(chr) {
                return escape[chr];
            }
            function extend(obj) {
                for (var i = 1; i < arguments.length; i++) for (var key in arguments[i]) Object.prototype.hasOwnProperty.call(arguments[i], key) && (obj[key] = arguments[i][key]);
                return obj;
            }
            var toString = Object.prototype.toString;
            exports.toString = toString;
            var isFunction = function isFunction(value) {
                return "function" == typeof value;
            };
            isFunction(/x/) && (exports.isFunction = isFunction = function(value) {
                return "function" == typeof value && "[object Function]" === toString.call(value);
            }), exports.isFunction = isFunction;
            var isArray = Array.isArray || function(value) {
                return !(!value || "object" != typeof value) && "[object Array]" === toString.call(value);
            };
            exports.isArray = isArray;
        },
        865: (__unused_webpack_module, exports, __webpack_require__) => {
            exports.__esModule = !0, exports.createProtoAccessControl = function createProtoAccessControl(runtimeOptions) {
                var defaultMethodWhiteList = Object.create(null);
                defaultMethodWhiteList.constructor = !1, defaultMethodWhiteList.__defineGetter__ = !1, 
                defaultMethodWhiteList.__defineSetter__ = !1, defaultMethodWhiteList.__lookupGetter__ = !1;
                var defaultPropertyWhiteList = Object.create(null);
                return defaultPropertyWhiteList.__proto__ = !1, {
                    properties: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
                        defaultValue: runtimeOptions.allowProtoPropertiesByDefault
                    },
                    methods: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
                        defaultValue: runtimeOptions.allowProtoMethodsByDefault
                    }
                };
            }, exports.resultIsAllowed = function resultIsAllowed(result, protoAccessControl, propertyName) {
                return checkWhiteList("function" == typeof result ? protoAccessControl.methods : protoAccessControl.properties, propertyName);
            }, exports.resetLoggedProperties = function resetLoggedProperties() {
                Object.keys(loggedProperties).forEach(function(propertyName) {
                    delete loggedProperties[propertyName];
                });
            };
            var _createNewLookupObject = __webpack_require__(726), _logger2 = function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }(__webpack_require__(566)), loggedProperties = Object.create(null);
            function checkWhiteList(protoAccessControlForType, propertyName) {
                return void 0 !== protoAccessControlForType.whitelist[propertyName] ? !0 === protoAccessControlForType.whitelist[propertyName] : void 0 !== protoAccessControlForType.defaultValue ? protoAccessControlForType.defaultValue : (function logUnexpecedPropertyAccessOnce(propertyName) {
                    !0 !== loggedProperties[propertyName] && (loggedProperties[propertyName] = !0, _logger2.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'));
                }(propertyName), !1);
            }
        },
        871: (__unused_webpack_module, exports, __webpack_require__) => {
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.__esModule = !0, exports.HandlebarsEnvironment = HandlebarsEnvironment;
            var _utils = __webpack_require__(849), _exception2 = _interopRequireDefault(__webpack_require__(769)), _helpers = __webpack_require__(277), _decorators = __webpack_require__(940), _logger2 = _interopRequireDefault(__webpack_require__(566)), _internalProtoAccess = __webpack_require__(865);
            exports.VERSION = "4.7.8";
            exports.COMPILER_REVISION = 8;
            exports.LAST_COMPATIBLE_COMPILER_REVISION = 7;
            exports.REVISION_CHANGES = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0 <4.3.0",
                8: ">= 4.3.0"
            };
            function HandlebarsEnvironment(helpers, partials, decorators) {
                this.helpers = helpers || {}, this.partials = partials || {}, this.decorators = decorators || {}, 
                _helpers.registerDefaultHelpers(this), _decorators.registerDefaultDecorators(this);
            }
            HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,
                logger: _logger2.default,
                log: _logger2.default.log,
                registerHelper: function registerHelper(name, fn) {
                    if ("[object Object]" === _utils.toString.call(name)) {
                        if (fn) throw new _exception2.default("Arg not supported with multiple helpers");
                        _utils.extend(this.helpers, name);
                    } else this.helpers[name] = fn;
                },
                unregisterHelper: function unregisterHelper(name) {
                    delete this.helpers[name];
                },
                registerPartial: function registerPartial(name, partial) {
                    if ("[object Object]" === _utils.toString.call(name)) _utils.extend(this.partials, name); else {
                        if (void 0 === partial) throw new _exception2.default('Attempting to register a partial called "' + name + '" as undefined');
                        this.partials[name] = partial;
                    }
                },
                unregisterPartial: function unregisterPartial(name) {
                    delete this.partials[name];
                },
                registerDecorator: function registerDecorator(name, fn) {
                    if ("[object Object]" === _utils.toString.call(name)) {
                        if (fn) throw new _exception2.default("Arg not supported with multiple decorators");
                        _utils.extend(this.decorators, name);
                    } else this.decorators[name] = fn;
                },
                unregisterDecorator: function unregisterDecorator(name) {
                    delete this.decorators[name];
                },
                resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
                    _internalProtoAccess.resetLoggedProperties();
                }
            };
            var log = _logger2.default.log;
            exports.log = log, exports.createFrame = _utils.createFrame, exports.logger = _logger2.default;
        },
        908: (module, exports, __webpack_require__) => {
            exports.__esModule = !0;
            var _utils = __webpack_require__(849), _exception2 = function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }(__webpack_require__(769));
            exports.default = function(instance) {
                instance.registerHelper("with", function(context, options) {
                    if (2 != arguments.length) throw new _exception2.default("#with requires exactly one argument");
                    _utils.isFunction(context) && (context = context.call(this));
                    var fn = options.fn;
                    if (_utils.isEmpty(context)) return options.inverse(this);
                    var data = options.data;
                    return options.data && options.ids && ((data = _utils.createFrame(options.data)).contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0])), 
                    fn(context, {
                        data,
                        blockParams: _utils.blockParams([ context ], [ data && data.contextPath ])
                    });
                });
            }, module.exports = exports.default;
        },
        915: (module, exports, __webpack_require__) => {
            exports.__esModule = !0;
            var _visitor2 = function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }(__webpack_require__(350));
            function WhitespaceControl() {
                var options = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                this.options = options;
            }
            function isPrevWhitespace(body, i, isRoot) {
                void 0 === i && (i = body.length);
                var prev = body[i - 1], sibling = body[i - 2];
                return prev ? "ContentStatement" === prev.type ? (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original) : void 0 : isRoot;
            }
            function isNextWhitespace(body, i, isRoot) {
                void 0 === i && (i = -1);
                var next = body[i + 1], sibling = body[i + 2];
                return next ? "ContentStatement" === next.type ? (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original) : void 0 : isRoot;
            }
            function omitRight(body, i, multiple) {
                var current = body[null == i ? 0 : i + 1];
                if (current && "ContentStatement" === current.type && (multiple || !current.rightStripped)) {
                    var original = current.value;
                    current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, ""), 
                    current.rightStripped = current.value !== original;
                }
            }
            function omitLeft(body, i, multiple) {
                var current = body[null == i ? body.length - 1 : i - 1];
                if (current && "ContentStatement" === current.type && (multiple || !current.leftStripped)) {
                    var original = current.value;
                    return current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, ""), 
                    current.leftStripped = current.value !== original, current.leftStripped;
                }
            }
            WhitespaceControl.prototype = new _visitor2.default, WhitespaceControl.prototype.Program = function(program) {
                var doStandalone = !this.options.ignoreStandalone, isRoot = !this.isRootSeen;
                this.isRootSeen = !0;
                for (var body = program.body, i = 0, l = body.length; i < l; i++) {
                    var current = body[i], strip = this.accept(current);
                    if (strip) {
                        var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot), _isNextWhitespace = isNextWhitespace(body, i, isRoot), openStandalone = strip.openStandalone && _isPrevWhitespace, closeStandalone = strip.closeStandalone && _isNextWhitespace, inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
                        strip.close && omitRight(body, i, !0), strip.open && omitLeft(body, i, !0), doStandalone && inlineStandalone && (omitRight(body, i), 
                        omitLeft(body, i) && "PartialStatement" === current.type && (current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1])), 
                        doStandalone && openStandalone && (omitRight((current.program || current.inverse).body), 
                        omitLeft(body, i)), doStandalone && closeStandalone && (omitRight(body, i), omitLeft((current.inverse || current.program).body));
                    }
                }
                return program;
            }, WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
                this.accept(block.program), this.accept(block.inverse);
                var program = block.program || block.inverse, inverse = block.program && block.inverse, firstInverse = inverse, lastInverse = inverse;
                if (inverse && inverse.chained) for (firstInverse = inverse.body[0].program; lastInverse.chained; ) lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
                var strip = {
                    open: block.openStrip.open,
                    close: block.closeStrip.close,
                    openStandalone: isNextWhitespace(program.body),
                    closeStandalone: isPrevWhitespace((firstInverse || program).body)
                };
                if (block.openStrip.close && omitRight(program.body, null, !0), inverse) {
                    var inverseStrip = block.inverseStrip;
                    inverseStrip.open && omitLeft(program.body, null, !0), inverseStrip.close && omitRight(firstInverse.body, null, !0), 
                    block.closeStrip.open && omitLeft(lastInverse.body, null, !0), !this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body) && (omitLeft(program.body), 
                    omitRight(firstInverse.body));
                } else block.closeStrip.open && omitLeft(program.body, null, !0);
                return strip;
            }, WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
                return mustache.strip;
            }, WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
                var strip = node.strip || {};
                return {
                    inlineStandalone: !0,
                    open: strip.open,
                    close: strip.close
                };
            }, exports.default = WhitespaceControl, module.exports = exports.default;
        },
        919: (module, exports) => {
            exports.__esModule = !0;
            var AST = {
                helpers: {
                    helperExpression: function helperExpression(node) {
                        return "SubExpression" === node.type || ("MustacheStatement" === node.type || "BlockStatement" === node.type) && !!(node.params && node.params.length || node.hash);
                    },
                    scopedId: function scopedId(path) {
                        return /^\.|this\b/.test(path.original);
                    },
                    simpleId: function simpleId(path) {
                        return 1 === path.parts.length && !AST.helpers.scopedId(path) && !path.depth;
                    }
                }
            };
            exports.default = AST, module.exports = exports.default;
        },
        940: (__unused_webpack_module, exports, __webpack_require__) => {
            exports.__esModule = !0, exports.registerDefaultDecorators = function registerDefaultDecorators(instance) {
                _decoratorsInline2.default(instance);
            };
            var _decoratorsInline2 = function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }(__webpack_require__(430));
        }
    }, __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            id: moduleId,
            exports: {}
        };
        return __webpack_modules__[moduleId](module, module.exports, __webpack_require__), 
        module.exports;
    }
    __webpack_require__.n = module => {
        var getter = module && module.__esModule ? () => module.default : () => module;
        return __webpack_require__.d(getter, {
            a: getter
        }), getter;
    }, __webpack_require__.d = (exports, definition) => {
        for (var key in definition) __webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key]
        });
    }, __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop), 
    __webpack_require__.r = exports => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.nc = void 0;
    var handlebars = __webpack_require__(639);
    handlebars.registerHelper("eachInMap", (map, block) => {
        let out = "";
        for (const [key, value] of map) {
            out += block.fn({
                key,
                value
            });
        }
        return out;
    });
    class DialogHelper {
        getDialog() {
            var _a, _b, _c, _d;
            const template = handlebars.compile('<div id="{{prefix}}Container">\n    <label>\n        Selection Mode:\n        <select onchange="{{plugin}}.switchMode(this.value)">\n            {{#eachInMap selectOptions}}\n                <option value="{{key}}">{{value}}</option>\n            {{/eachInMap}}\n        </select>\n    </label>\n\n    <label>\n        Format:\n        <select onchange="{{plugin}}.switchFormat(this.value)">\n            {{#eachInMap formatOptions}}\n                <option value="{{key}}">{{value}}</option>\n            {{/eachInMap}}\n        </select>\n    </label>\n\n    <br>\n\n    <button onclick="{{plugin}}.doExport()">Export</button>\n\n    <div id="{{prefix}}Status"></div>\n\n    <br>\n\n    <label>\n        Output\n        <textarea id="{{prefix}}Output" cols="80" rows="5" style="width: 100%; white-space: nowrap;"></textarea>\n    </label>\n\n</div>\n'), data = {
                plugin: "window.plugin.ExportPortals",
                prefix: "ExportPortals",
                selectOptions: new Map([ [ "view", "View" ], [ "polygon", "Polygon(s)" ] ]),
                formatOptions: new Map([ [ "json", "JSON" ] ])
            }, dialog = window.dialog({
                title: "Export",
                html: template(data)
            }).parent(), windowHeight = null !== (_a = $(window).height()) && void 0 !== _a ? _a : 100, windowWidth = null !== (_b = $(window).width()) && void 0 !== _b ? _b : 100, dialogHeight = null !== (_c = dialog.height()) && void 0 !== _c ? _c : 50, dialogWidth = null !== (_d = dialog.width()) && void 0 !== _d ? _d : 50;
            return dialog.css("width", "600px").css("top", (windowHeight - dialogHeight) / 2).css("left", (windowWidth - dialogWidth) / 2), 
            dialog;
        }
    }
    class IitcHelper {
        findViewPortals() {
            const portals = [];
            for (const i in window.portals) {
                const portal = window.portals[i];
                portal.options.data.title && portals.push(portal);
            }
            return portals;
        }
        findPolygonPortals() {
            if (!window.plugin.drawTools) return alert("DrawTools are required"), [];
            const portals = [], polygons = this.findPolygons();
            if (0 === polygons.length) return alert("No polygon found"), [];
            for (const i in window.portals) {
                const portal = window.portals[i];
                if (portal.options.data.title) for (const polygon of polygons) if (this.isPointInPolygon(portal.getLatLng(), polygon)) {
                    portals.push(portal);
                    break;
                }
            }
            return portals;
        }
        findPolygons() {
            const layerString = localStorage["plugin-draw-tools-layer"], layers = JSON.parse(layerString), polygons = [];
            for (const i in layers) if ("polygon" === layers[i].type) {
                const layer = layers[i].latLngs;
                polygons.push(layer);
            }
            return layers.length, polygons;
        }
        isPointInPolygon(point, points) {
            const x = point.lat, y = point.lng;
            let isInside = !1, i = 0, j = points.length - 1;
            for (;i < points.length; j = i++) {
                const xi = points[i].lat, yi = points[i].lng, xj = points[j].lat, yj = points[j].lng;
                yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi && (isInside = !isInside);
            }
            return isInside;
        }
    }
    class InventoryHelper {
        async getInventory() {
            var _a;
            const inventory = {
                keys: [],
                boosts: [],
                weapons: [],
                mods: [],
                keyCapsules: []
            };
            try {
                const items = await this.fetchInventory();
                for (const item of items) {
                    const object = item[2];
                    let boost, weapon, modulator, key, keyCapsule, type = "", designation = "", level = 0;
                    switch (Object.prototype.hasOwnProperty.call(object, "resource") ? type = object.resource.resourceType : Object.prototype.hasOwnProperty.call(object, "resourceWithLevels") ? (type = object.resourceWithLevels.resourceType, 
                    level = object.resourceWithLevels.level) : Object.prototype.hasOwnProperty.call(object, "modResource") ? type = "modResource" : console.warn("No resource", object), 
                    Object.prototype.hasOwnProperty.call(object, "timedPowerupResource") && (designation = object.timedPowerupResource.designation), 
                    type) {
                      case "modResource":
                        modulator = {
                            type: object.modResource.resourceType,
                            rarity: object.modResource.rarity
                        }, inventory.mods.push(modulator);
                        break;

                      case "ULTRA_STRIKE":
                      case "EMP_BURSTER":
                        weapon = {
                            type,
                            level
                        }, inventory.weapons.push(weapon);
                        break;

                      case "FLIP_CARD":
                        weapon = {
                            type: object.flipCard.flipCardType,
                            level: 0
                        }, inventory.weapons.push(weapon);
                        break;

                      case "PORTAL_LINK_KEY":
                        key = {
                            guid: object.portalCoupler.portalGuid,
                            title: object.portalCoupler.portalTitle
                        }, inventory.keys.push(key);
                        break;

                      case "KEY_CAPSULE":
                        keyCapsule = {
                            differentiator: object.moniker.differentiator,
                            count: object.container.currentCount,
                            keys: this.listKeysInCapsule(object.container.stackableItems)
                        }, inventory.keyCapsules.push(keyCapsule);
                        break;

                      case "PORTAL_POWERUP":
                        boost = {
                            type: designation
                        }, inventory.boosts.push(boost);
                        break;

                      case "CAPSULE":
                      case "KINETIC_CAPSULE":
                      case "POWER_CUBE":
                      case "BOOSTED_POWER_CUBE":
                      case "EMITTER_A":
                      case "PLAYER_POWERUP":
                      case "ENTITLEMENT":
                      case "DRONE":
                        break;

                      default:
                        console.warn(`Unknown type${type}`, object);
                    }
                }
                return inventory;
            } catch (error) {
                const element = document.getElementById("iitc-inventory-content"), message = null !== (_a = error.message) && void 0 !== _a ? _a : error;
                element && (element.innerHTML = `<div style="color:crimson">Error: ${message}</div>`);
            }
            return inventory;
        }
        listKeysInCapsule(items) {
            const keys = [];
            for (const capsuleItem of items) {
                const coupler = capsuleItem.exampleGameEntity[2].portalCoupler, item = {
                    key: {
                        guid: coupler.portalGuid,
                        title: coupler.portalTitle
                    },
                    count: capsuleItem.itemGuids.length
                };
                keys.push(item);
            }
            return keys;
        }
        async fetchInventory() {
            let items;
            items = __webpack_require__(132).result;
            return items;
        }
        postAjax(action, data) {
            return new Promise((resolve, reject) => window.postAjax(action, data, returnValue => resolve(returnValue), (_, textStatus, errorThrown) => reject(textStatus + ": " + errorThrown)));
        }
    }
    class ExportHelper {
        exportPortals(portals, exportFormat) {
            const exported = [];
            for (const portal of portals) {
                const data = portal.options.data;
                exported.push({
                    guid: portal.options.guid,
                    title: data.title,
                    lat: data.latE6 / 1e6,
                    lng: data.lngE6 / 1e6,
                    level: data.level,
                    team: data.team,
                    health: data.health,
                    resCount: data.resCount,
                    timestamp: Date.now()
                });
            }
            let exportString = "";
            if ("json" === exportFormat) exportString = JSON.stringify(exported, void 0, 2); else alert(`Unsupported exportFormat ${exportFormat}`);
            return exportString;
        }
    }
    !function Register(plugin, name) {
        const setup = () => {
            window.plugin[name] = plugin, window.plugin[name].init();
        };
        setup.info = SCRIPT_INFO, window.bootPlugins || (window.bootPlugins = []), window.bootPlugins.push(setup), 
        window.iitcLoaded && setup();
    }(new class ExportPortals {
        constructor() {
            this.selectionMode = "view", this.exportFormat = "json";
        }
        init() {
            __webpack_require__(398), this.dialogHelper = new DialogHelper, this.iitcHelper = new IitcHelper, 
            this.inventoryHelper = new InventoryHelper, this.exportHelper = new ExportHelper, 
            this.createButtons();
        }
        createButtons() {
            $("#toolbox").append($("<a>", {
                text: "KuKuXport",
                click: () => this.showDialog()
            }));
        }
        showDialog() {
            this.dialog || (this.dialog = this.dialogHelper.getDialog(), this.dialog.on("dialogclose", () => {
                this.dialog = void 0;
            }));
        }
        switchMode(mode) {
            this.selectionMode = mode;
        }
        switchFormat(format) {
            this.exportFormat = format;
        }
        async doExport() {
            let portals = [];
            await this.inventoryHelper.getInventory();
            switch (this.selectionMode, this.exportFormat, this.selectionMode) {
              case "view":
                portals = this.iitcHelper.findViewPortals();
                break;

              case "polygon":
                portals = this.iitcHelper.findPolygonPortals();
                break;

              default:
                return void alert(`Unsupported mode: ${this.selectionMode}`);
            }
            if (0 === portals.length) return void alert("No Portals found.");
            const exportString = this.exportHelper.exportPortals(portals, this.exportFormat);
            $("#ExportPortalsOutput").val(exportString);
        }
    }, "ExportPortals");
})();
};
(function () {
  const info = {};
  if (typeof GM_info !== 'undefined' && GM_info && GM_info.script)
    info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
  if (typeof unsafeWindow != 'undefined' || typeof GM_info == 'undefined' || GM_info.scriptHandler != 'Tampermonkey') {
    const script = document.createElement('script');
    script.appendChild(document.createTextNode( '('+ wrapper +')('+JSON.stringify(info)+');'));
    document.head.appendChild(script);} 
  else wrapper(info);
})();