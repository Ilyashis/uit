import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-ULKGYNY5.js";

// node_modules/@bem-react/classname/build/classname.development.js
var require_classname_development = __commonJS({
  "node_modules/@bem-react/classname/build/classname.development.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function withNaming2(preset) {
      var nameSpace = preset.n || "";
      var modValueDelimiter = preset.v || preset.m;
      function stringify(b, e, m, mix) {
        var entityName = e ? nameSpace + b + preset.e + e : nameSpace + b;
        var className = entityName;
        if (m) {
          var modPrefix = " " + className + preset.m;
          for (var k in m) {
            if (m.hasOwnProperty(k)) {
              var modVal = m[k];
              if (modVal === true) {
                className += modPrefix + k;
              } else if (modVal) {
                className += modPrefix + k + modValueDelimiter + modVal;
              }
            }
          }
        }
        if (mix !== void 0) {
          mix = Array.isArray(mix) ? mix : [mix];
          for (var i = 0, len = mix.length; i < len; i++) {
            var value = mix[i];
            if (!value || typeof value.valueOf() !== "string")
              continue;
            var mixes = value.valueOf().split(" ");
            for (var j = 0; j < mixes.length; j++) {
              var val = mixes[j];
              if (val !== entityName) {
                className += " " + val;
              }
            }
          }
        }
        return className;
      }
      return function cnGenerator(b, e) {
        return function(elemOrMods, elemModsOrBlockMix, elemMix) {
          if (typeof elemOrMods === "string") {
            if (typeof elemModsOrBlockMix === "string" || Array.isArray(elemModsOrBlockMix)) {
              return stringify(b, elemOrMods, void 0, elemModsOrBlockMix);
            }
            return stringify(b, elemOrMods, elemModsOrBlockMix, elemMix);
          }
          return stringify(b, e, elemOrMods, elemModsOrBlockMix);
        };
      };
    }
    var cn2 = withNaming2({
      e: "-",
      m: "_"
    });
    exports.cn = cn2;
    exports.withNaming = withNaming2;
  }
});

// node_modules/@bem-react/classname/index.js
var require_classname = __commonJS({
  "node_modules/@bem-react/classname/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_classname_development();
    }
  }
});

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.js
var import_react = __toESM(require_react());

// node_modules/@consta/uikit/__internal__/src/utils/bem.js
var import_classname = __toESM(require_classname());
function ownKeys(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b && (d = d.filter(function(b2) {
      return Object.getOwnPropertyDescriptor(a, b2).enumerable;
    })), c.push.apply(c, d);
  }
  return c;
}
function _objectSpread(a) {
  for (var b, c = 1; c < arguments.length; c++)
    b = null == arguments[c] ? {} : arguments[c], c % 2 ? ownKeys(Object(b), true).forEach(function(c2) {
      _defineProperty(a, c2, b[c2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys(Object(b)).forEach(function(c2) {
      Object.defineProperty(a, c2, Object.getOwnPropertyDescriptor(b, c2));
    });
  return a;
}
var reactBemNaming = { e: "-", m: "_", v: "_" };
var cn = (0, import_classname.withNaming)(reactBemNaming);
var withPrefix = function(a) {
  return (0, import_classname.withNaming)(_objectSpread({ n: "".concat(a, "--") }, reactBemNaming));
};
var cnCanary = withPrefix("canary");
var cnDeprecated = withPrefix("deprecated");

// node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDefault.js
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_shadow/Theme_shadow_gpnDefault.css";
var presetGpnDefault = { color: { primary: "gpnDefault", accent: "gpnDark", invert: "gpnDark" }, control: "gpnDefault", font: "gpnDefault", size: "gpnDefault", space: "gpnDefault", shadow: "gpnDefault" };

// node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDark.js
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_shadow/Theme_shadow_gpnDefault.css";
var presetGpnDark = { color: { primary: "gpnDark", accent: "gpnDark", invert: "gpnDefault" }, control: "gpnDefault", font: "gpnDefault", size: "gpnDefault", space: "gpnDefault", shadow: "gpnDefault" };

// node_modules/@consta/uikit/__internal__/src/components/Theme/presets/presetGpnDisplay.js
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDisplay.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_font/Theme_font_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css";
import "/Users/ilyaskhismatullin/Documents/ProjectReact/uit/node_modules/@consta/uikit/__internal__/src/components/Theme/_shadow/Theme_shadow_gpnDefault.css";
var presetGpnDisplay = { color: { primary: "gpnDisplay", accent: "gpnDark", invert: "gpnDefault" }, control: "gpnDefault", font: "gpnDefault", size: "gpnDefault", space: "gpnDefault", shadow: "gpnDefault" };

// node_modules/@consta/uikit/__internal__/src/components/Theme/Theme.js
var _excluded = ["className", "children", "preset"];
function ownKeys2(a, b) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    b && (d = d.filter(function(b2) {
      return Object.getOwnPropertyDescriptor(a, b2).enumerable;
    })), c.push.apply(c, d);
  }
  return c;
}
function _objectSpread2(a) {
  for (var b, c = 1; c < arguments.length; c++)
    b = null == arguments[c] ? {} : arguments[c], c % 2 ? ownKeys2(Object(b), true).forEach(function(c2) {
      _defineProperty(a, c2, b[c2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(b)) : ownKeys2(Object(b)).forEach(function(c2) {
      Object.defineProperty(a, c2, Object.getOwnPropertyDescriptor(b, c2));
    });
  return a;
}
var cnTheme = cn("Theme");
var generateThemeClassNames = function(a) {
  return { color: { primary: cnTheme({ color: a.color.primary }), accent: cnTheme({ color: a.color.accent }), invert: cnTheme({ color: a.color.invert }) }, control: cnTheme({ control: a.control }), font: cnTheme({ font: a.font }), size: cnTheme({ size: a.size }), space: cnTheme({ space: a.space }), shadow: cnTheme({ shadow: a.shadow }) };
};
var generateDeps = function(a) {
  var b = "";
  return Object.keys(a).map(function(c) {
    b += "color" === c ? a.color.accent + a.color.invert + a.color.primary : a[c];
  }), b;
};
var defaultContextValue = { theme: presetGpnDefault, themeClassNames: generateThemeClassNames(presetGpnDefault) };
var ThemeContext = (0, import_react.createContext)(defaultContextValue);
var Theme = import_react.default.forwardRef(function(a, b) {
  var c = a.className, d = a.children, e = a.preset, f = _objectWithoutProperties(a, _excluded), g = (0, import_react.useMemo)(function() {
    return [{ theme: e, themeClassNames: generateThemeClassNames(e) }, _objectSpread2(_objectSpread2({}, e), {}, { color: e.color.primary })];
  }, [generateDeps(e)]), h = _slicedToArray(g, 2), i = h[0], j = h[1];
  return import_react.default.createElement(ThemeContext.Provider, { value: i }, import_react.default.createElement("div", Object.assign({}, f, { ref: b, className: cnTheme(j, [c]) }), d));
});
function useTheme() {
  return (0, import_react.useContext)(ThemeContext);
}
export {
  Theme,
  ThemeContext,
  cnTheme,
  generateDeps,
  generateThemeClassNames,
  presetGpnDark,
  presetGpnDefault,
  presetGpnDisplay,
  useTheme
};
//# sourceMappingURL=@consta_uikit_Theme.js.map
