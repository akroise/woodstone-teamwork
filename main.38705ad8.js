// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"fx60":[function(require,module,exports) {

},{"./..\\assests\\home2.jpeg":[["home2.1325565c.jpeg","gQ1g"],"gQ1g"]}],"kvYs":[function(require,module,exports) {
/*
 * Const hover = document.querySelector('#catalog'),
 *   resetcatalog = () => {
 *     const pic = document.querySelector('#pic');
 *     pic.style.display = 'block';
 *     const pic1 = document.querySelector('#pic1');
 *     pic1.style.display = 'none';
 *     const pic2 = document.querySelector('#pic2');
 *     pic2.style.display = 'none';
 *     const pic3 = document.querySelector('#pic3');
 *     pic3.style.display = 'none';
 *   };
 * hover.addEventListener('mouseover', (event) => {
 *   console.log('Mouse in');
 *   loopcatalog();
 * });
 */

/*
 * Hover.addEventListener('mouseout', (event) => {
 *   console.log('Mouse out');
 *   clearTimeout(animate);
 *   resetcatalog();
 * });
 */

/*
 * Const loopcatalog = () => {
 *   setTimeout(() => {
 *     const pic = document.querySelector('#pic');
 *     let i = 1,
 *       pic1 = null;
 *     for (let i = 1; i <= 3; i++) {
 *       setTimeout(() => {
 *         console.log(`#pic${i}`);
 *         pic1 = document.querySelector(`#pic${i}`);
 *         pic1.style.display = 'block';
 *         if (i == 1) {
 *           pic.style.display = 'none';
 *         }
 *         if (i >= 2) {
 *           const j = i - 1,
 *             pic2 = document.querySelector(`#pic${j}`);
 *           pic2.style.display = 'none';
 *         }
 *       }, i * 2000);
 *       reset_catalog();
 *     }
 *   }, 1000);
 *   resetcatalog();
 * };
 */
},{}],"N8YO":[function(require,module,exports) {
/*
 * (A) SCROLL TO X PIXELS FROM THE TOP
 * function goToPixel(pix) {
 *   window.scroll({
 *     top: pix,
 *     left: 0,
 *     behavior: "smooth",
 *   });
 * }
 */

/*
 * (B) SCROLL TO ELEMENT WITH SPECIFIED ID
 * function goToID(id) {
 *   document.querySelector(id).scrollIntoView({
 *     behavior: "smooth",
 *   });
 *   console.log(document.querySelector(id).scrollLeft);
 * }
 */

/*
 * (C) SCROLL X PIXELS WITH REFERENCE TO CURRENT POSITION
 * function goBy(pix) {
 *   window.scrollBy({
 *     top: pix,
 *     left: 0,
 *     behavior: "smooth",
 *   });
 * }
 */
},{}],"vynJ":[function(require,module,exports) {

},{}],"d6sW":[function(require,module,exports) {
"use strict";

require("../scss/main.scss");

require("./hover");

require("./scroll");

require("./mobile");

console.log('main.js running'); // Send button
},{"../scss/main.scss":"fx60","./hover":"kvYs","./scroll":"N8YO","./mobile":"vynJ"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.38705ad8.js.map