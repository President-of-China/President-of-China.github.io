(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@fiahfy/icns"), require("@turbowarp/sbdl"), require("cross-fetch"), require("jszip"));
	else if(typeof define === 'function' && define.amd)
		define(["@fiahfy/icns", "@turbowarp/sbdl", "cross-fetch", "jszip"], factory);
	else if(typeof exports === 'object')
		exports["packager"] = factory(require("@fiahfy/icns"), require("@turbowarp/sbdl"), require("cross-fetch"), require("jszip"));
	else
		root["packager"] = factory(root["@fiahfy/icns"], root["@turbowarp/sbdl"], root["cross-fetch"], root["jszip"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE__fiahfy_icns__, __WEBPACK_EXTERNAL_MODULE__turbowarp_sbdl__, __WEBPACK_EXTERNAL_MODULE_cross_fetch__, __WEBPACK_EXTERNAL_MODULE_jszip__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"packager": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"icns":"icns","sha256":"sha256"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/packager/node/export.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, author, homepage, keywords, bugs, repository, funding, license, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@turbowarp/packager\",\"version\":\"1.2.0\",\"description\":\"Converts Scratch projects into HTML files, zip archives, or executable programs for Windows, macOS, and Linux.\",\"main\":\"dist/packager.js\",\"scripts\":{\"start\":\"webpack serve\",\"clean\":\"rimraf dist\",\"build\":\"npm run clean && webpack\",\"build-prod\":\"cross-env NODE_ENV=production npm run build\",\"watch\":\"webpack --watch\",\"build-standalone\":\"cross-env STANDALONE=1 npm run build && node src/build/generate-standalone.js\",\"build-standalone-prod\":\"cross-env NODE_ENV=production npm run build-standalone\",\"build-node\":\"cross-env BUILD_MODE=node npm run build\",\"build-node-prod\":\"cross-env NODE_ENV=production npm run build-node\",\"test\":\"jest\",\"prepublishOnly\":\"npm run test && npm run build-node-prod && node src/build/nodejs/update-readme.js node\",\"postpublish\":\"node src/build/nodejs/update-readme.js restore\"},\"author\":\"GarboMuffin\",\"homepage\":\"https://github.com/TurboWarp/packager#readme\",\"keywords\":[\"scratch\"],\"bugs\":{\"url\":\"https://github.com/TurboWarp/packager/issues\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/TurboWarp/packager.git\"},\"funding\":\"https://github.com/sponsors/GarboMuffin\",\"license\":\"Apache-2.0\",\"dependencies\":{\"@fiahfy/icns\":\"0.0.7\",\"@turbowarp/json\":\"^0.1.1\",\"@turbowarp/sbdl\":\"^2.3.0\",\"cross-fetch\":\"^3.1.4\",\"jszip\":\"^3.7.1\",\"sha.js\":\"^2.4.11\"},\"devDependencies\":{\"@babel/core\":\"^7.16.5\",\"@babel/preset-env\":\"^7.16.5\",\"babel-jest\":\"^27.4.5\",\"babel-loader\":\"^8.2.3\",\"comlink\":\"^4.3.1\",\"copy-webpack-plugin\":\"^6.4.1\",\"cross-env\":\"^7.0.3\",\"css-loader\":\"^5.2.7\",\"fastestsmallesttextencoderdecoder\":\"^1.0.22\",\"file-loader\":\"^6.2.0\",\"html-webpack-plugin\":\"^4.5.2\",\"jest\":\"^27.4.5\",\"rimraf\":\"^2.7.1\",\"scratch-audio\":\"0.1.0-prerelease.20200528195344\",\"scratch-render\":\"git+https://github.com/TurboWarp/scratch-render.git#develop\",\"scratch-render-fonts\":\"^1.0.0-prerelease.20210401210003\",\"scratch-storage\":\"git+https://github.com/TurboWarp/scratch-storage.git#develop\",\"scratch-svg-renderer\":\"git+https://github.com/TurboWarp/scratch-svg-renderer.git#develop\",\"scratch-vm\":\"git+https://github.com/TurboWarp/scratch-vm.git#develop\",\"style-loader\":\"^2.0.0\",\"svelte\":\"^3.44.3\",\"svelte-loader\":\"^3.1.2\",\"url-loader\":\"^4.1.1\",\"webpack\":\"^4.46.0\",\"webpack-bundle-analyzer\":\"^4.5.0\",\"webpack-cli\":\"^4.9.1\",\"webpack-dev-server\":\"^3.11.3\",\"worker-loader\":\"^2.0.0\"}}");

/***/ }),

/***/ "./src/common/errors.js":
/*!******************************!*\
  !*** ./src/common/errors.js ***!
  \******************************/
/*! exports provided: UserError, AbortError, UnknownNetworkError, OutdatedPackagerError, HTTPError, CannotAccessProjectError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserError", function() { return UserError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return AbortError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownNetworkError", function() { return UnknownNetworkError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutdatedPackagerError", function() { return OutdatedPackagerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPError", function() { return HTTPError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CannotAccessProjectError", function() { return CannotAccessProjectError; });
/**
 * Error indicating the user has misconfigured something.
 */
class UserError extends Error {
  constructor (message) {
    super(message);
    this.name = 'UserError';
  }
}

/**
 * Error indicating a process was aborted.
 */
class AbortError extends Error {
  constructor (message) {
    super(message || 'Aborted. Although this looks like a scary error, it\'s perfectly normal if you interrupted a loading bar.');
    this.name = 'AbortError';
  }
}

/**
 * Error indicating a network request was unsuccessful and the reason is unknown.
 */
class UnknownNetworkError extends Error {
  constructor (url) {
    super(`Could not fetch ${url} for unknown reason.`);
    this.name = 'UnknownNetworkError';
    this.url = url;
  }
}

/**
 * Error indicating the packager is outdated and must be updated before it can continue.
 */
class OutdatedPackagerError extends Error {
  constructor (message) {
    super(message);
    this.name = 'OutdatedPackagerError';
  }
}

/**
 * Error indicating an HTTP status error.
 */
class HTTPError extends Error {
  constructor (message, status) {
    super(message);
    this.status = status;
    this.name = 'HTTPError';
  }
}

/**
 * Error indicating a project cannot be accessed, perhaps because it's unshared, doesn't exist, or has an invalid ID.
 */
class CannotAccessProjectError extends Error {
  constructor (message) {
    super(message);
    this.name = 'CannotAccessProjectError';
  }
}


/***/ }),

/***/ "./src/common/escape-xml.js":
/*!**********************************!*\
  !*** ./src/common/escape-xml.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const escapeXML = (v) => v.replace(/["'<>&]/g, (i) => {
  switch (i) {
    case '"': return '&quot;';
    case '\'': return '&apos;';
    case '<': return '&lt;';
    case '>': return '&gt;';
    case '&': return '&amp;';
  }
});

/* harmony default export */ __webpack_exports__["default"] = (escapeXML);


/***/ }),

/***/ "./src/common/event-target.js":
/*!************************************!*\
  !*** ./src/common/event-target.js ***!
  \************************************/
/*! exports provided: EventTarget, CustomEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTarget", function() { return EventTargetShim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEvent", function() { return CustomEventShim; });
// Browser support for EventTarget constructor is surprisingly poor, so we always polyfill it
// We also need to polyfill CustomEvent for Node.js

class EventTargetShim {
  constructor () {
    this._events = {};
  }

  addEventListener (event, handler) {
    if (!this._events[event]) {
      this._events[event] = [];
    }
    this._events[event].push(handler);
  }

  removeEventListener (event, handler) {
    const handlers = this._events[event];
    if (handlers) {
      this._events[event] = handlers.filter(i => i !== handler);
    }
  }

  dispatchEvent (event) {
    const handlers = this._events[event.type];
    if (handlers) {
      for (const fn of handlers) {
        fn(event);
      }
    }
  }
}

class CustomEventShim {
  constructor (type, options) {
    this.type = type;
    this.detail = options ? options.detail : {};
  }
}




/***/ }),

/***/ "./src/common/readers.js":
/*!*******************************!*\
  !*** ./src/common/readers.js ***!
  \*******************************/
/*! exports provided: readAsArrayBuffer, readAsURL, readAsText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAsArrayBuffer", function() { return readAsArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAsURL", function() { return readAsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAsText", function() { return readAsText; });
/**
 * @param {Blob} o
 * @returns {Promise<ArrayBuffer>}
 */
const readAsArrayBuffer = (o) => new Promise((resolve, reject) => {
  const fr = new FileReader();
  fr.onload = () => resolve(fr.result);
  fr.onerror = () => reject(new Error(`Cannot read as array buffer: ${fr.error}`));
  fr.readAsArrayBuffer(o);
});

/**
 * @param {Blob} o
 * @returns {Promise<string>}
 */
const readAsURL = (o) => new Promise((resolve, reject) => {
  const fr = new FileReader();
  fr.onload = () => resolve(fr.result);
  fr.onerror = () => reject(new Error(`Cannot read as URL: ${fr.error}`));
  fr.readAsDataURL(o);
});

/**
 * @param {Blob} o
 * @returns {Promise<string>}
 */
const readAsText = (o) => new Promise((resolve, reject) => {
  const fr = new FileReader();
  fr.onload = () => resolve(fr.result);
  fr.onerror = () => reject(new Error(`Cannot read as text: ${fr.error}`));
  fr.readAsText(o);
});


/***/ }),

/***/ "./src/common/request.js":
/*!*******************************!*\
  !*** ./src/common/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/common/errors.js");


const clampProgress = (n) => Math.max(0, Math.min(1, n));

const DO_NOT_USE_FALLBACK_URL_ERRORS = [
  // If we make a request with eg. an invalid project ID, do not use fallback URLs
  400,
  // If we make a request with eg. an unshared project ID, do not use fallback URLs
  404,
];

const request = async (options) => {
  const {
    type,
    progressCallback,
    timeout,
    estimatedSize,
    abortTarget
  } = options;

  const requestURL = (url) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      cleanup();
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new _errors__WEBPACK_IMPORTED_MODULE_0__["HTTPError"](`Couldn't fetch ${url}: status code ${xhr.status}`, xhr.status));
      }
    };
    xhr.onerror = () => {
      cleanup();
      reject(new _errors__WEBPACK_IMPORTED_MODULE_0__["UnknownNetworkError"](url));
    };
  
    if (progressCallback) {
      xhr.onprogress = (e) => {
        if (e.lengthComputable) {
          progressCallback(clampProgress(e.loaded / e.total));
        } else if (estimatedSize) {
          progressCallback(clampProgress(e.loaded / estimatedSize));
        }
      };
    }
  
    xhr.responseType = type;
    xhr.open('GET', url);
    xhr.send();
  
    const cleanup = () => {
      if (cleanupAbortCallback) {
        cleanupAbortCallback();
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  
    let cleanupAbortCallback;
    if (abortTarget) {
      const abortCallback = () => {
        xhr.abort();
        cleanup();
        reject(new Error(`Couldn't fetch ${url}: aborted`));
      };
      abortTarget.addEventListener('abort', abortCallback);
      cleanupAbortCallback = () => {
        abortTarget.removeEventListener('abort', abortCallback);
      };
    }
  
    let timeoutId;
    if (timeout) {
      timeoutId = setTimeout(() => {
        xhr.abort();
        cleanup();
        reject(new Error(`Couldn't fetch ${url}: timed out`));
      }, timeout);
    }
  });

  const urls = Array.isArray(options.url) ? options.url : [options.url];
  if (urls.length === 0) {
    throw new Error('no URLs');
  }
  let errorToThrow;
  for (const url of urls) {
    try {
      return await requestURL(url);
    } catch (e) {
      if (e instanceof _errors__WEBPACK_IMPORTED_MODULE_0__["HTTPError"] && DO_NOT_USE_FALLBACK_URL_ERRORS.includes(e.status)) {
        throw e;
      }
      // We'll record this error if this is the first error, or if the current error provides more information than
      // the old error. This is useful because:
      //  trampoline.turbowarp.org/... -> blocked by filter (appears to us as generic network error)
      //  trampoline.turbowarp.xyz/... -> returns status 500
      // should return the HTTP error, not the generic network error.
      if (!errorToThrow || (errorToThrow instanceof _errors__WEBPACK_IMPORTED_MODULE_0__["UnknownNetworkError"] && !(e instanceof _errors__WEBPACK_IMPORTED_MODULE_0__["UnknownNetworkError"]))) {
        errorToThrow = e;
      }
    }
  }
  throw errorToThrow;
};

/* harmony default export */ __webpack_exports__["default"] = (request);


/***/ }),

/***/ "./src/packager/adapter.js":
/*!*********************************!*\
  !*** ./src/packager/adapter.js ***!
  \*********************************/
/*! exports provided: Adapter, setAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return Adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAdapter", function() { return setAdapter; });
let Adapter = null;

const setAdapter = (newAdapter) => {
  Adapter = newAdapter;
};


/***/ }),

/***/ "./src/packager/base85.js":
/*!********************************!*\
  !*** ./src/packager/base85.js ***!
  \********************************/
/*! exports provided: encode, decode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
// This implements a custom base85 encoding for improved efficiency compared to base64
// The character set used is 0x2a - 0x7e of ASCII
// 0x3c (<) is replaced with 0x28 (opening parenthesis) and 0x3e (>) is replaced with 0x29 (closing parenthesis)

// All characters up to the first 0x2c (,) character are considered to be the header. This encodes the length
// of the decoded data. The length is encoded as a stringified integer as ASCII shifted 49 codes up. For
// example "1" becomes "a", "2" becomes "b", etc. We've found that some people interpret a bare number as a
// project ID for some reason, so we slightly encode it to avoid any confusion.

// Encoded data can be safely included in HTML without escapes

// It's possible these functions will be stringified at runtime to be included in generated code,
// so make sure that they're entirely self contained

/**
 * @param {ArrayBuffer} buffer The data to encode
 * @returns {string} Encoded string
 */
const encode = (buffer) => {
  const originalLength = buffer.byteLength;
  let data;
  if (originalLength % 4 !== 0) {
    const newBuffer = new ArrayBuffer(originalLength + (4 - originalLength % 4));
    const originalView = new Uint8Array(buffer);
    const newView = new Uint8Array(newBuffer);
    for (let i = 0; i < originalView.length; i++) {
      newView[i] = originalView[i];
    }
    data = new Uint32Array(newBuffer);
  } else {
    data = new Uint32Array(buffer);
  }

  const originalLengthAsString = originalLength.toString();
  const resultBuffer = new ArrayBuffer(originalLengthAsString.length + 1 + data.byteLength * 5 / 4);
  const resultView = new Uint8Array(resultBuffer);
  let resultIndex = 0;
  for (let i = 0; i < originalLengthAsString.length; i++) {
    resultView[resultIndex++] = originalLengthAsString.charCodeAt(i) + 49;
  }
  resultView[resultIndex++] = 44; // ascii for ","

  const getChar = (n) => {
    n += 0x2a;
    if (n === 0x3c) return 0x28;
    if (n === 0x3e) return 0x29;
    return n;
  };
  for (let i = 0; i < data.length; i++) {
    let n = data[i];
    resultView[resultIndex++] = getChar(n % 85);
    n = Math.floor(n / 85);
    resultView[resultIndex++] = getChar(n % 85);
    n = Math.floor(n / 85);
    resultView[resultIndex++] = getChar(n % 85);
    n = Math.floor(n / 85);
    resultView[resultIndex++] = getChar(n % 85);
    n = Math.floor(n / 85);
    resultView[resultIndex++] = getChar(n % 85);
  }
  return new TextDecoder().decode(resultBuffer);
};

/**
 * @param {string} str
 * @returns {Uint8Array}
 */
const decode = (str) => {
  const getValue = (code) => {
    if (code === 0x28) code = 0x3c;
    if (code === 0x29) code = 0x3e;
    return code - 0x2a;
  };
  const toMultipleOfFour = (n) => {
    if (n % 4 === 0) {
      return n;
    }
    return n + (4 - n % 4);
  };
  const lengthEndsAt = str.indexOf(',');
  const byteLength = +str
    .substring(0, lengthEndsAt)
    .split('')
    .map(i => String.fromCharCode(i.charCodeAt(0) - 49))
    .join('');
  const resultBuffer = new ArrayBuffer(toMultipleOfFour(byteLength));
  const resultView = new Uint32Array(resultBuffer);
  for (let i = lengthEndsAt + 1, j = 0; i < str.length; i += 5, j++) {
    resultView[j] = (
      getValue(str.charCodeAt(i + 4)) * 85 * 85 * 85 * 85 +
      getValue(str.charCodeAt(i + 3)) * 85 * 85 * 85 +
      getValue(str.charCodeAt(i + 2)) * 85 * 85 +
      getValue(str.charCodeAt(i + 1)) * 85 +
      getValue(str.charCodeAt(i))
    );
  }
  return new Uint8Array(resultBuffer, 0, byteLength);
};


/***/ }),

/***/ "./src/packager/brand.js":
/*!*******************************!*\
  !*** ./src/packager/brand.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
These values control branding strings throughout the entire app. If you're forking, please take a few minutes to update them.

"The website" refers to the website itself that you use to load projects and convert them to another form.

"Packaged projects" refers to the files generated by the website. They include a line of text something like:
`Parts of this script are from the ${APP_NAME} <${WEBSITE}>, licensed as follows: ${COPYRIGHT_NOTICE}`

APP_NAME is the name of the app. This text is included in packaged projects.

WEBSITE is your app's website. This link is included in packaged projects.

COPYRIGHT_NOTICE is A copyright notice regarding the app. This text is included in packaged projects.
Also make sure to update the "License" section in README.md

ACCENT_COLOR is a color used in various parts of the interface and as the default value for the accent
color option. It should be a 6-character hex color (#123abc)

SOURCE_CODE is where users can find the app's source code. This link is included in the website's footer.
If this is set to an empty string, the link is removed.

FEEDBACK_PRIMARY and FEEDBACK_SECONDARY are feedback/bug report links shown in various places throughout the website.
name is how they will be labelled in the interface and link is of course a URL

DONATE is a link that people can visit to donate.
If this is set to an empty string, the link is removed.
*/

module.exports = {
  APP_NAME: 'TurboWarp Packager',
  WEBSITE: 'https://packager.turbowarp.org/',
  COPYRIGHT_NOTICE: `Copyright (C) 2021-2022 Thomas Weber

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`,
  ACCENT_COLOR: '#ff4c4c',
  SOURCE_CODE: 'https://github.com/TurboWarp/packager',
  FEEDBACK_PRIMARY: {
    name: 'Scratch',
    link: 'https://scratch.mit.edu/users/GarboMuffin/#comments'
  },
  FEEDBACK_SECONDARY: {
    name: 'GitHub',
    link: 'https://github.com/TurboWarp/packager/issues'
  },
  DONATE: 'https://github.com/sponsors/GarboMuffin',
};


/***/ }),

/***/ "./src/packager/build-id.js":
/*!**********************************!*\
  !*** ./src/packager/build-id.js ***!
  \**********************************/
/*! exports provided: buildId, verifyBuildId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildId", function() { return SCAFFOLDING_BUILD_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyBuildId", function() { return verifyBuildId; });
const SCAFFOLDING_BUILD_ID = Math.random().toString();

const verifyBuildId = (buildId, source) => {
  if (source.endsWith('=^..^=')) {
    return source.endsWith(`${buildId} =^..^=`);
  }
  return true;
};




/***/ }),

/***/ "./src/packager/colors.js":
/*!********************************!*\
  !*** ./src/packager/colors.js ***!
  \********************************/
/*! exports provided: hexToRgb, rgbToHex, rgbToHsv, hsvToRgb, darken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsv", function() { return rgbToHsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvToRgb", function() { return hsvToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return darken; });
// RGB <-> HSV conversion functions are based on https://github.com/LLK/scratch-vm/blob/develop/src/util/color.js

/**
 * @typedef RGB
 * @property {number} red red [0-255]
 * @property {number} green green [0-255]
 * @property {number} blue blue [0-255]
 */

/**
 * @typedef HSV
 * @property {number} hue hue [0-360)
 * @property {number} saturation saturation [0-1]
 * @property {number} value value [0-1]
 */

/**
 * @param {string} hex
 * @returns {RGB}
 */
 const hexToRgb = (hex) => {
  const parsed = parseInt(hex.substring(1), 16);
  return {
    red: (parsed >> 16) & 0xff,
    green: (parsed >> 8) & 0xff,
    blue: parsed & 0xff
  };
};

/**
 * @param {RGB} color
 * @returns {string}
 */
const rgbToHex = (color) => {
  const format = (n) => n.toString(16).padStart(2, '0');
  return `#${format(color.red)}${format(color.green)}${format(color.blue)}`;
};

/**
 * @param {RGB} color
 * @returns {HSV}
 */
const rgbToHsv = (color) => {
  const r = color.red / 255;
  const g = color.green / 255;
  const b = color.blue / 255;

  const x = Math.min(Math.min(r, g), b);
  const v = Math.max(Math.max(r, g), b);

  // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate
  let h = 0;
  let s = 0;
  if (x !== v) {
    const f = r === x ? g - b : g === x ? b - r : r - g;
    const i = r === x ? 3 : g === x ? 5 : 1;
    h = ((i - f / (v - x)) * 60) % 360;
    s = (v - x) / v;
  }

  return {
    hue: h,
    saturation: s,
    value: v
  };
};

/**
 * @param {HSV} color
 * @returns {RGB}
 */
const hsvToRgb = (color) => {
  let h = color.hue % 360;
  if (h < 0) h += 360;

  const s = Math.max(0, Math.min(color.saturation, 1));
  const v = Math.max(0, Math.min(color.value, 1));

  const i = Math.floor(h / 60);
  const f = h / 60 - i;
  const p = v * (1 - s);
  const q = v * (1 - s * f);
  const t = v * (1 - s * (1 - f));

  let r;
  let g;
  let b;

  switch (i) {
    default:
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }

  return {
    red: Math.floor(r * 255),
    green: Math.floor(g * 255),
    blue: Math.floor(b * 255),
  };
};

/**
 * @param {string} hex
 * @returns {string}
 */
const darken = (hex) => {
  const rgb = hexToRgb(hex);
  const hsv = rgbToHsv(rgb);

  // don't need to clamp value; hsvToRgb will do it for us
  hsv.value -= 0.1;

  const newRgb = hsvToRgb(hsv);
  return rgbToHex(newRgb);
};


/***/ }),

/***/ "./src/packager/download-project.js":
/*!******************************************!*\
  !*** ./src/packager/download-project.js ***!
  \******************************************/
/*! exports provided: downloadProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadProject", function() { return downloadProject; });
/* harmony import */ var _minify_sb3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minify/sb3 */ "./src/packager/minify/sb3.js");
/* harmony import */ var _turbowarp_sbdl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turbowarp/sbdl */ "@turbowarp/sbdl");
/* harmony import */ var _turbowarp_sbdl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_turbowarp_sbdl__WEBPACK_IMPORTED_MODULE_1__);



const unknownAnalysis = () => ({
  stageVariables: [],
  stageComments: [],
  usesMusic: true
});

const analyzeScratch2 = (projectData) => {
  const stageVariables = (projectData.variables || [])
    .map(({name, isPersistent}) => ({
      name,
      isCloud: isPersistent
    }));
  // This may have some false positives, but that's okay.
  const stringified = JSON.stringify(projectData);
  const usesMusic = stringified.includes('drum:duration:elapsed:from:') ||
    stringified.includes('playDrum') ||
    stringified.includes('noteOn:duration:elapsed:from:');
  return {
    ...unknownAnalysis(),
    stageVariables,
    usesMusic
  };
};

const analyzeScratch3 = (projectData) => {
  const stage = projectData.targets[0];
  if (!stage || !stage.isStage) {
    throw new Error('Project does not have stage');
  }
  const stageVariables = Object.values(stage.variables)
    .map(([name, _value, cloud]) => ({
      name,
      isCloud: !!cloud
    }));
  const stageComments = Object.values(stage.comments)
    .map((i) => i.text);
  // TODO: usesMusic has possible false negatives
  const usesMusic = projectData.extensions.includes('music');
  return {
    ...unknownAnalysis(),
    stageVariables,
    stageComments,
    usesMusic
  };
};

const mutateScratch3InPlace = (projectData) => {
  const makeImpliedCloudVariables = (projectData) => {
    const stage = projectData.targets.find((i) => i.isStage);
    if (stage) {
      for (const variable of Object.values(stage.variables)) {
        const name = variable[0];
        if (name.startsWith('☁')) {
          variable[2] = true;
        }
      }
    }
  };

  makeImpliedCloudVariables(projectData);
  Object(_minify_sb3__WEBPACK_IMPORTED_MODULE_0__["default"])(projectData);
};

const downloadProject = async (projectData, progressCallback) => {
  let analysis = unknownAnalysis();

  const options = {
    onProgress(type, loaded, total) {
      progressCallback(type, loaded, total);
    },

    processJSON(type, projectData) {
      if (type === 'sb3') {
        mutateScratch3InPlace(projectData);
        analysis = analyzeScratch3(projectData);
        return projectData;
      }
      if (type === 'sb2') {
        analysis = analyzeScratch2(projectData);
      }
    }
  };

  const project = await Object(_turbowarp_sbdl__WEBPACK_IMPORTED_MODULE_1__["downloadProjectFromBuffer"])(projectData, options);
  if (project.type !== 'sb3') {
    project.type = 'blob';
  }
  project.analysis = analysis;
  return project;
};


/***/ }),

/***/ "./src/packager/icns.js":
/*!******************************!*\
  !*** ./src/packager/icns.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_readers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/readers */ "./src/common/readers.js");


const loadImage = (src) => new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = () => resolve(image);
  image.onerror = () => reject(new Error(`Could not load image: ${src}`));
  image.src = src;
});

const canvasToBlob = (canvas) => new Promise((resolve, reject) => {
  canvas.toBlob((blob) => {
    if (blob) {
      resolve(blob);
    } else {
      reject(new Error('Could not read <canvas> as blob'));
    }
  });
});

const pngToAppleICNS = async (pngData) => {
  const {
    Icns,
    Buffer
  } = await __webpack_require__.e(/*! import() | icns */ "icns").then(__webpack_require__.bind(null, /*! ./icns-bundle */ "./src/packager/icns-bundle.js"));

  const FORMATS = [
    { type: 'ic04', size: 16 },
    { type: 'ic07', size: 128 },
    { type: 'ic08', size: 256 },
    { type: 'ic09', size: 512 },
    { type: 'ic10', size: 1024 },
    { type: 'ic11', size: 32 },
    { type: 'ic12', size: 64 },
    { type: 'ic13', size: 256 },
    { type: 'ic14', size: 512 },
  ];

  // Read the Image.
  const pngDataBlob = new Blob([pngData], {
    type: 'image/png'
  });
  const url = URL.createObjectURL(pngDataBlob);
  const image = await loadImage(url);

  // Determine the formats to create
  const eligibleFormats = FORMATS.filter((format) => {
    // Always include the smallest size so that tiny images will get at least 1 image.
    if (format.size === 16) {
      return true;
    }
    return image.width >= format.size && image.height >= format.size;
  });

  // Create a single canvas to be used for conversion
  // Creating many canvases is prone to error in Safari
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('cannot get canvas rendering context');
  }

  const icns = new Icns.Icns();
  for (const format of eligibleFormats) {
    // Use the canvas to scale the image.
    const formatSize = format.size;
    canvas.width = formatSize;
    canvas.height = formatSize;
    ctx.drawImage(image, 0, 0, formatSize, formatSize);

    const blob = await canvasToBlob(canvas);
    const arrayBuffer = await Object(_common_readers__WEBPACK_IMPORTED_MODULE_0__["readAsArrayBuffer"])(blob);
    const icnsImage = await Icns.IcnsImage.fromPNG(Buffer.from(arrayBuffer), format.type);
    icns.append(icnsImage);
  }

  return icns.data;
};

/* harmony default export */ __webpack_exports__["default"] = (pngToAppleICNS);


/***/ }),

/***/ "./src/packager/images/default-icon.png":
/*!**********************************************!*\
  !*** ./src/packager/images/default-icon.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "290e09e569a1cab8e61ba93b0d23863f.png");

/***/ }),

/***/ "./src/packager/large-assets.js":
/*!**************************************!*\
  !*** ./src/packager/large-assets.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This defines where files are fetched from when the packager needs to download files.
// Files fetched from an external server have a SHA-256 checksum used to validate the download.

// src is the URL that will be fetched to download the asset. If it's an array of URLs, each URL
// will be tried in succession if the previous one fails, perhaps because it's blocked by a school
// network filter.

// estimatedSize is used for the download progress bar if the server or browser does not tell us
// automatically. It's size in bytes after decoding Content-Encoding.
// If you change these, use numbers from a production build, not a development build.

// useBuildId is used for various cache related things. It shouldn't be changed.

const externalFile = (name) => [
  // Hopefully one of these URLs will not be blocked.
  `https://packagerdata.turbowarp.org/${name}`,
  `https://blobs.turbowarp.xyz/${name}`
];

const relativeScaffolding = (name) => `scaffolding/${name}`;

/* harmony default export */ __webpack_exports__["default"] = ({
  'nwjs-win64': {
    src: externalFile('nwjs-v0.54.0-win-x64.zip'),
    sha256: '0f082671b67b711f783d98cc989cf5aebacfc9bce3bef78875b57d08fc2a6e86'
  },
  'nwjs-win32': {
    src: externalFile('nwjs-v0.54.0-win-ia32.zip'),
    sha256: '7a1ed3a6a51b8cdf9280761b90cb4723cf9ee8050e3ed0b58451e8e4e694b203'
  },
  'nwjs-mac': {
    src: externalFile('nwjs-v0.54.0-osx-x64.zip'),
    sha256: '498c97a264f8feac504c4c2396c1fddc8290c15573aee2fc692e59ff9803cc40'
  },
  'nwjs-linux-x64': {
    src: externalFile('nwjs-v0.54.0-linux-x64.zip'),
    sha256: '53651a3a12d29ad096cff5b44d9f1e3aa09e9fad970bdcfe8bda07ea23d960d8'
  },
  'electron-win32': {
    src: externalFile('electron-v17.2.0-win32-ia32.zip'),
    sha256: '7216d0ae35c95fcdd488c720909d2320480288ef02d3f95bcb574c9ef38169b8'
  },
  'electron-win64': {
    src: externalFile('electron-v17.2.0-win32-x64.zip'),
    sha256: '64451d98e574d8f78754aeb73258814b4fd1a9ef4266bae5e53cdd09273a0b23'
  },
  'electron-mac': {
    src: externalFile('electron-v19.0.6-macos-universal.zip'),
    sha256: 'f38e3bc8c452631cf98516e940a3364aaba36e3e028599979f4fbf1d780eaacc'
  },
  'electron-linux64': {
    src: externalFile('electron-v17.2.0-linux-x64.zip'),
    sha256: '2d56903d91635ca7117723b5a2bc926d7f5b391c989da4233c8babf73e6e6584'
  },
  'webview-mac': {
    src: externalFile('WebView-macos-3.zip'),
    sha256: '5d4086894f10549c61c20e5f770c808afc25c2e4793da75b5b1cede294449fac'
  },
  scaffolding: {
    src: relativeScaffolding('scaffolding-full.js'),
    estimatedSize: 4564032,
    useBuildId: true
  },
  'scaffolding-min': {
    src: relativeScaffolding('scaffolding-min.js'),
    estimatedSize: 2530463,
    useBuildId: true
  },
  addons: {
    src: relativeScaffolding('addons.js'),
    estimatedSize: 19931,
    useBuildId: true
  }
});


/***/ }),

/***/ "./src/packager/minify/sb3.js":
/*!************************************!*\
  !*** ./src/packager/minify/sb3.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Currently, the optimization here is intentionally not optimal
// We had some corruption problems in the past that we are trying to avoid

const SOUP = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#%()*+,-./:;=?@[]^_`{|}~';
const generateId = i => {
  // IDs in Object.keys(vm.runtime.monitorBlocks._blocks) already have meaning, so make sure to skip those
  // We don't bother listing many here because most would take more than ten million items to be used
  if (i > 1309) i++; // of
  let str = '';
  while (i >= 0) {
    str = SOUP[i % SOUP.length] + str;
    i = Math.floor(i / SOUP.length) - 1;
  }
  return str;
};

class Pool {
  constructor() {
    this.generatedIds = new Map();
    this.references = new Map();
  }
  addReference(id) {
    const currentCount = this.references.get(id) || 0;
    this.references.set(id, currentCount + 1);
  }
  generateNewIds() {
    const entries = Array.from(this.references.entries());
    // The most used original IDs should get the shortest new IDs.
    entries.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < entries.length; i++) {
      this.generatedIds.set(entries[i][0], generateId(i));
    }
  }
  getNewId(originalId) {
    if (this.generatedIds.has(originalId)) {
      return this.generatedIds.get(originalId);
    }
    throw new Error(`getNewId called with unknown ID ${originalId}`);
  }
}

const BROADCAST_PRIMITIVE = 11;
const VAR_PRIMITIVE = 12;
const LIST_PRIMITIVE = 13;

const optimizeSb3Json = (projectData) => {
  // Note: we modify projectData in-place

  // Scan global attributes of the project so we can generate optimal IDs later
  const variablePool = new Pool();
  const blockPool = new Pool();

  if (projectData.monitors) {
    for (const monitor of projectData.monitors) {
      const monitorOpcode = monitor.opcode;
      if (monitorOpcode === 'data_variable' || monitorOpcode === 'data_listcontents') {
        const monitorId = monitor.id;
        variablePool.addReference(monitorId);
      }
    }
  }

  const scanCompressedNative = native => {
    const type = native[0];
    if (type === VAR_PRIMITIVE || type === LIST_PRIMITIVE) {
      const variableId = native[2];
      variablePool.addReference(variableId);
    } else if (type === BROADCAST_PRIMITIVE) {
      const broadcastId = native[2];
      variablePool.addReference(broadcastId);
    }
  };

  for (const target of projectData.targets) {
    for (const variableId of Object.keys(target.variables)) {
      variablePool.addReference(variableId);
    }
    for (const variableId of Object.keys(target.lists)) {
      variablePool.addReference(variableId);
    }
    for (const broadcastId of Object.keys(target.broadcasts)) {
      variablePool.addReference(broadcastId);
    }

    for (const [blockId, block] of Object.entries(target.blocks)) {
      blockPool.addReference(blockId);
      if (Array.isArray(block)) {
        scanCompressedNative(block);
        continue;
      }

      if (block.parent) {
        blockPool.addReference(block.parent);
      }
      if (block.next) {
        blockPool.addReference(block.next);
      }

      if (block.fields.VARIABLE) {
        variablePool.addReference(block.fields.VARIABLE[1]);
      }
      if (block.fields.LIST) {
        variablePool.addReference(block.fields.LIST[1]);
      }
      if (block.fields.BROADCAST_OPTION) {
        variablePool.addReference(block.fields.BROADCAST_OPTION[1]);
      }

      for (const input of Object.values(block.inputs)) {
        for (let i = 1; i < input.length; i++) {
          const inputValue = input[i];
          if (typeof inputValue === 'string') {
            blockPool.addReference(inputValue);
          } else if (Array.isArray(inputValue)) {
            scanCompressedNative(inputValue);
          }
        }
      }
    }
  }

  variablePool.generateNewIds();
  blockPool.generateNewIds();

  // Use gathered data to optimize the project
  if (projectData.monitors) {
    for (const monitor of projectData.monitors) {
      const monitorOpcode = monitor.opcode;
      if (monitorOpcode === 'data_variable' || monitorOpcode === 'data_listcontents') {
        const monitorId = monitor.id;
        monitor.id = variablePool.getNewId(monitorId);
      }
  
      // Remove redundant monitor values
      monitor.value = Array.isArray(monitor.value) ? [] : 0;
    }
  }

  const optimizeCompressedNative = native => {
    const type = native[0];
    if (type === VAR_PRIMITIVE || type === LIST_PRIMITIVE) {
      const variableId = native[2];
      native[2] = variablePool.getNewId(variableId);
    } else if (type === BROADCAST_PRIMITIVE) {
      const broadcastId = native[2];
      native[2] = variablePool.getNewId(broadcastId);
    }
  };
  for (const target of projectData.targets) {
    const newVariables = {};
    const newLists = {};
    const newBroadcasts = {};
    const newBlocks = {};
    const newComments = {};

    for (const [variableId, variable] of Object.entries(target.variables)) {
      newVariables[variablePool.getNewId(variableId)] = variable;
    }
    for (const [variableId, variable] of Object.entries(target.lists)) {
      newLists[variablePool.getNewId(variableId)] = variable;
    }
    for (const [broadcastId, broadcast] of Object.entries(target.broadcasts)) {
      newBroadcasts[variablePool.getNewId(broadcastId)] = broadcast;
    }

    for (const [blockId, block] of Object.entries(target.blocks)) {
      newBlocks[blockPool.getNewId(blockId)] = block;
      if (Array.isArray(block)) {
        optimizeCompressedNative(block);
        continue;
      }

      if (block.parent) {
        block.parent = blockPool.getNewId(block.parent);
      }
      if (block.next) {
        block.next = blockPool.getNewId(block.next);
      }

      if (block.fields.VARIABLE) {
        block.fields.VARIABLE[1] = variablePool.getNewId(block.fields.VARIABLE[1]);
      }
      if (block.fields.LIST) {
        block.fields.LIST[1] = variablePool.getNewId(block.fields.LIST[1]);
      }
      if (block.fields.BROADCAST_OPTION) {
        block.fields.BROADCAST_OPTION[1] = variablePool.getNewId(block.fields.BROADCAST_OPTION[1]);
      }

      for (const input of Object.values(block.inputs)) {
        for (let i = 1; i < input.length; i++) {
          const inputValue = input[i];
          if (typeof inputValue === 'string') {
            input[i] = blockPool.getNewId(inputValue);
          } else if (Array.isArray(inputValue)) {
            optimizeCompressedNative(inputValue);
          }
        }
      }
      if (!block.shadow) {
        delete block.shadow;
      }
      if (!block.topLevel) {
        delete block.topLevel;
      }
      delete block.x;
      delete block.y;
      delete block.comment;
    }
    for (const [commentId, comment] of Object.entries(target.comments)) {
      const text = comment.text;
      const isSpecial = text.includes(' // _twconfig_') || text.includes(' // _gamepad_');
      if (isSpecial) {
        newComments[commentId] = comment;
      }
    }

    target.variables = newVariables;
    target.lists = newLists;
    target.broadcasts = newBroadcasts;
    target.blocks = newBlocks;
    target.comments = newComments;
  }

  // Remove unnecessary metadata
  if (projectData.meta) {
    delete projectData.meta.agent;
    delete projectData.meta.vm;
  }

  return projectData;
};

/* harmony default export */ __webpack_exports__["default"] = (optimizeSb3Json);


/***/ }),

/***/ "./src/packager/node/adapter.js":
/*!**************************************!*\
  !*** ./src/packager/node/adapter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cross-fetch */ "cross-fetch");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../package.json */ "./package.json", 1);
/* harmony import */ var _images_default_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/default-icon.png */ "./src/packager/images/default-icon.png");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image */ "./src/packager/node/image.js");








const readFile = Object(util__WEBPACK_IMPORTED_MODULE_2__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFile);
const writeFile = Object(util__WEBPACK_IMPORTED_MODULE_2__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFile);
const mkdir = Object(util__WEBPACK_IMPORTED_MODULE_2__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdir);

const safeJoin = (root, file) => {
  root = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(root, '/');
  const joined = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(root, file);
  if (joined.startsWith(root)) {
    return joined;
  }
  return null;
};

const cacheDirectory = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '..', '.packager-cache');
const getCachePath = async (asset) => {
  if (!asset.sha256) return null;
  const path = safeJoin(cacheDirectory, asset.sha256);
  if (path) {
    await mkdir(cacheDirectory, {
      recursive: true
    });
    return path;
  }
  return null;
};

const nodeBufferToArrayBuffer = (buffer) => buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
const arrayBufferToNodeBuffer = (buffer) => Buffer.from(buffer);

class NodeAdapter {
  async getCachedAsset (asset) {
    const urls = asset.src;
    const src = Array.isArray(urls) ? urls[0] : urls;

    if (src.startsWith('scaffolding/')) {
      const file = safeJoin(__dirname, src);
      if (file) {
        return readFile(file, 'utf-8');
      }
    }

    if (src.startsWith('https:')) {
      const cachePath = await getCachePath(asset);
      if (cachePath) {
        try {
          return nodeBufferToArrayBuffer(await readFile(cachePath));
        } catch (e) {
          // ignore
        }
      }
      console.log(`[${_package_json__WEBPACK_IMPORTED_MODULE_4__["name"]}]: downloading large asset ${src}; this may take a while`);
      const res = await cross_fetch__WEBPACK_IMPORTED_MODULE_3___default()(src);
      if (!res.ok) {
        throw new Error(`Unexpected status code: ${res.status}`);
      }
      const arrayBuffer = await res.arrayBuffer();
      if (cachePath) {
        await writeFile(cachePath, arrayBufferToNodeBuffer(arrayBuffer));
      }
      return arrayBuffer;
    }
  }

  async cacheAsset (asset, result) {
    // all of our caching logic lives in getCachedAsset
  }

  async getAppIcon (file) {
    if (!file) {
      // Use the default icon when no icon is given
      const buffer = await readFile(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, _images_default_icon_png__WEBPACK_IMPORTED_MODULE_5__["default"]));
      return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    }
    if (file instanceof _image__WEBPACK_IMPORTED_MODULE_6__["default"]) {
      if (file.mimeType === 'image/png') {
        return file.readAsBuffer();
      }
      throw new Error('icon must be of type image/png but found ' + file.mimeType + ' instead.');
    }
    throw new Error('file must be an instance of Packager.Image or null but found ' + file + ' instead.');
  }

  readAsURL (file) {
    if (!(file instanceof _image__WEBPACK_IMPORTED_MODULE_6__["default"])) {
      throw new Error('file must be an instance of Packager.Image but found ' + file + ' instead.');
    }
    return file.readAsURL();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (NodeAdapter);


/***/ }),

/***/ "./src/packager/node/export.js":
/*!*************************************!*\
  !*** ./src/packager/node/export.js ***!
  \*************************************/
/*! exports provided: Packager, Image, loadProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _packager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../packager */ "./src/packager/packager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Packager", function() { return _packager__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _download_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../download-project */ "./src/packager/download-project.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadProject", function() { return _download_project__WEBPACK_IMPORTED_MODULE_1__["downloadProject"]; });

/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapter */ "./src/packager/node/adapter.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./src/packager/node/image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _image__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adapter */ "./src/packager/adapter.js");






Object(_adapter__WEBPACK_IMPORTED_MODULE_4__["setAdapter"])(new _adapter__WEBPACK_IMPORTED_MODULE_2__["default"]());




/***/ }),

/***/ "./src/packager/node/image.js":
/*!************************************!*\
  !*** ./src/packager/node/image.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Image {
  constructor (mimeType, data) {
    this.mimeType = mimeType;
    this.buffer = Buffer.from(data);
  }

  readAsURL() {
    return `data:${this.mimeType};base64,${this.buffer.toString('base64')}`;
  }

  readAsBuffer() {
    return this.buffer;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Image);


/***/ }),

/***/ "./src/packager/packager.js":
/*!**********************************!*\
  !*** ./src/packager/packager.js ***!
  \**********************************/
/*! exports provided: getJSZip, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJSZip", function() { return getJSZip; });
/* harmony import */ var _common_event_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/event-target */ "./src/common/event-target.js");
/* harmony import */ var _sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha256 */ "./src/packager/sha256.js");
/* harmony import */ var _common_escape_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/escape-xml */ "./src/common/escape-xml.js");
/* harmony import */ var _large_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./large-assets */ "./src/packager/large-assets.js");
/* harmony import */ var _common_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/request */ "./src/common/request.js");
/* harmony import */ var _icns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icns */ "./src/packager/icns.js");
/* harmony import */ var _build_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./build-id */ "./src/packager/build-id.js");
/* harmony import */ var _base85__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base85 */ "./src/packager/base85.js");
/* harmony import */ var _plist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plist */ "./src/packager/plist.js");
/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./brand */ "./src/packager/brand.js");
/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_brand__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/errors */ "./src/common/errors.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./colors */ "./src/packager/colors.js");
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adapter */ "./src/packager/adapter.js");














const PROGRESS_LOADED_SCRIPTS = 0.1;

// Used by environments that fetch the entire compressed project before calling loadProject()
const PROGRESS_FETCHED_COMPRESSED = 0.75;
const PROGRESS_EXTRACTED_COMPRESSED = 0.98;

// Used by environments that pass a project.json into loadProject() and fetch assets separately
const PROGRESS_FETCHED_PROJECT_JSON = 0.2;
const PROGRESS_FETCHED_ASSETS = 0.98;

const removeUnnecessaryEmptyLines = (string) => string.split('\n')
  .filter((line, index, array) => {
    if (index === 0 || index === array.length - 1) return true;
    if (line.trim().length === 0 && array[index - 1].trim().length === 0) return false;
    return true;
  })
  .join('\n');

const getJSZip = async () => (await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! jszip */ "jszip", 7))).default;

const setFileFast = (zip, path, data) => {
  zip.files[path] = data;
};

const interpolate = (a, b, t) => a + t * (b - a);

const SELF_LICENSE = {
  title: _brand__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"],
  homepage: _brand__WEBPACK_IMPORTED_MODULE_9__["WEBSITE"],
  license: _brand__WEBPACK_IMPORTED_MODULE_9__["COPYRIGHT_NOTICE"]
};

const SCRATCH_LICENSE = {
  title: 'Scratch',
  homepage: 'https://scratch.mit.edu/',
  license: `Copyright (c) 2016, Massachusetts Institute of Technology
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
};

const ELECTRON_LICENSE = {
  title: 'Electron',
  homepage: 'https://www.electronjs.org/',
  license: `Copyright (c) Electron contributors
Copyright (c) 2013-2020 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
};

const COPYRIGHT_HEADER = `/*!
Parts of this script are from the ${_brand__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"]} <${_brand__WEBPACK_IMPORTED_MODULE_9__["WEBSITE"]}>, licensed as follows:
${SELF_LICENSE.license}

Parts of this script are from Scratch <https://scratch.mit.edu/>, licensed as follows:
${SCRATCH_LICENSE.license}
*/\n`;

const generateChromiumLicenseHTML = (licenses) => {
  const style = `<style>body { font-family: sans-serif; }</style>`;
  const pretext = `<h2>The following entries were added by the ${_brand__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"]}</h2>`;
  const convertedLicenses = licenses.map((({title, license, homepage}, index) => `
<div class="product">
<span class="title">${Object(_common_escape_xml__WEBPACK_IMPORTED_MODULE_2__["default"])(title)}</span>
<span class="homepage"><a href="${Object(_common_escape_xml__WEBPACK_IMPORTED_MODULE_2__["default"])(homepage)}">homepage</a></span>
<input type="checkbox" hidden id="p4-${index}">
<label class="show" for="p4-${index}" tabindex="0"></label>
<div class="licence">
<pre>${Object(_common_escape_xml__WEBPACK_IMPORTED_MODULE_2__["default"])(license)}</pre>
</div>
</div>
`));
  return `${style}${pretext}${convertedLicenses.join('\n')}`;
};

// Unique identifier for the app. If this changes, things like local cloud variables will be lost.
// This should be in reverse-DNS format.
// https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleidentifier
const CFBundleIdentifier = 'CFBundleIdentifier';
// Even if you fork the packager, you shouldn't change this string unless you want packaged macOS apps
// to lose all their data.
const bundleIdentifierPrefix = 'org.turbowarp.packager.userland.';

// CFBundleName is displayed in the menu bar.
// I'm not actually sure where CFBundleDisplayName is displayed.
// Documentation says that CFBundleName is only supposed to be 15 characters and that CFBundleDisplayName
// should be used for longer names, but in reality CFBundleName seems to not have a length limit.
// https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundlename
// https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundledisplayname
const CFBundleName = 'CFBundleName';
const CFBundleDisplayName = 'CFBundleDisplayName';

// The name of the executable in the .app/Contents/MacOS folder
// https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleexecutable
const CFBundleExecutable = 'CFBundleExecutable';

// macOS's "About" screen will display: "Version {CFBundleShortVersionString} ({CFBundleVersion})"
// Apple's own apps are inconsistent about what they display here. Some apps set both of these to the same thing
// so you see eg. "Version 15.0 (15.0)" while others set CFBundleShortVersionString to a semver-like and
// treat CFBundleVersion as a simple build number eg. "Version 1.4.0 (876)"
// Apple's documentation says both of these are supposed to be major.minor.patch, but in reality it doesn't
// even have to contain numbers and everything seems to work fine.
// https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleversion
// https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleshortversionstring
const CFBundleVersion = 'CFBundleVersion';
const CFBundleShortVersionString = 'CFBundleShortVersionString';

// Describes the category of the app
// https://developer.apple.com/documentation/bundleresources/information_property_list/lsapplicationcategorytype
const LSApplicationCategoryType = 'LSApplicationCategoryType';

const generateMacReadme = (options) => `When you try to double click on the app to run it, you will probably see this warning:
"${options.app.packageName} cannot be opened because the developer cannot be verified."
This is normal. Press cancel.

To run the app:
1) Right click on the app file (${options.app.packageName} in the same folder as this document) and select "Open".
2) If a warning appears, select "Open" if it's an option.
3) If a warning appears but "Open" isn't an option, press "Cancel" and repeat from step 1.
   The open button will appear the second time the warning appears.

After completing these steps, the app should run without any further warnings.

Feel free to drag the app into your Applications folder.
`;

class Packager extends _common_event_target__WEBPACK_IMPORTED_MODULE_0__["EventTarget"] {
  constructor () {
    super();
    this.project = null;
    this.options = Packager.DEFAULT_OPTIONS();
    this.aborted = false;
    this.used = false;
  }

  abort () {
    if (!this.aborted) {
      this.aborted = true;
      this.dispatchEvent(new Event('abort'));
    }
  }

  ensureNotAborted () {
    if (this.aborted) {
      throw new Error('Aborted');
    }
  }

  async fetchLargeAsset (name, type) {
    this.ensureNotAborted();
    const asset = _large_assets__WEBPACK_IMPORTED_MODULE_3__["default"][name];
    if (!asset) {
      throw new Error(`Invalid asset: ${name}`);
    }
    if (typeof __ASSETS__ !== 'undefined' && __ASSETS__[asset.src]) {
      return __ASSETS__[asset.src];
    }
    const dispatchProgress = (progress) => this.dispatchEvent(new _common_event_target__WEBPACK_IMPORTED_MODULE_0__["CustomEvent"]('large-asset-fetch', {
      detail: {
        asset: name,
        progress
      }
    }));
    dispatchProgress(0);
    let result;
    let cameFromCache = false;
    try {
      const cached = await _adapter__WEBPACK_IMPORTED_MODULE_12__["Adapter"].getCachedAsset(asset);
      if (cached) {
        result = cached;
        cameFromCache = true;
        dispatchProgress(0.5);
      }
    } catch (e) {
      console.warn(e);
    }
    if (!result) {
      let url = asset.src;
      if (asset.useBuildId) {
        url += `?${_build_id__WEBPACK_IMPORTED_MODULE_6__["buildId"]}`;
      }
      result = await Object(_common_request__WEBPACK_IMPORTED_MODULE_4__["default"])({
        url,
        type,
        estimatedSize: asset.estimatedSize,
        progressCallback: (progress) => {
          dispatchProgress(progress);
        },
        abortTarget: this
      });
    }
    if (asset.useBuildId && !Object(_build_id__WEBPACK_IMPORTED_MODULE_6__["verifyBuildId"])(_build_id__WEBPACK_IMPORTED_MODULE_6__["buildId"], result)) {
      throw new _common_errors__WEBPACK_IMPORTED_MODULE_10__["OutdatedPackagerError"]('Build ID does not match.');
    }
    if (asset.sha256) {
      const hash = await Object(_sha256__WEBPACK_IMPORTED_MODULE_1__["default"])(result);
      if (hash !== asset.sha256) {
        throw new Error(`Hash mismatch for ${name}, found ${hash} but expected ${asset.sha256}`);
      }
    }
    if (!cameFromCache) {
      try {
        await _adapter__WEBPACK_IMPORTED_MODULE_12__["Adapter"].cacheAsset(asset, result);
      } catch (e) {
        console.warn(e);
      }
    }
    dispatchProgress(1);
    return result;
  }

  getAddonOptions () {
    return {
      ...this.options.chunks,
      specialCloudBehaviors: this.options.cloudVariables.specialCloudBehaviors,
      unsafeCloudBehaviors: this.options.cloudVariables.unsafeCloudBehaviors,
      pause: this.options.controls.pause.enabled
    };
  }

  async loadResources () {
    const texts = [COPYRIGHT_HEADER];
    if (this.project.analysis.usesMusic) {
      texts.push(await this.fetchLargeAsset('scaffolding', 'text'));
    } else {
      texts.push(await this.fetchLargeAsset('scaffolding-min', 'text'));
    }
    if (Object.values(this.getAddonOptions()).some((i) => i)) {
      texts.push(await this.fetchLargeAsset('addons', 'text'));
    }
    this.script = texts.join('\n').replace(/<\/script>/g,"</scri'+'pt>");
  }

  computeWindowSize () {
    let width = this.options.stageWidth;
    let height = this.options.stageHeight;
    if (
      this.options.controls.greenFlag.enabled ||
      this.options.controls.stopAll.enabled ||
      this.options.controls.pause.enabled
    ) {
      height += 48;
    }
    return {width, height};
  }

  getPlistPropertiesForPrimaryExecutable () {
    return {
      [CFBundleIdentifier]: `${bundleIdentifierPrefix}${this.options.app.packageName}`,

      // For simplicity, we'll set these to the same thing
      [CFBundleName]: this.options.app.windowTitle,
      [CFBundleDisplayName]: this.options.app.windowTitle,

      // We do rename the executable
      [CFBundleExecutable]: this.options.app.packageName,

      // For simplicity, we'll set these to the same thing
      [CFBundleVersion]: this.options.app.version,
      [CFBundleShortVersionString]: this.options.app.version,

      // Most items generated by the packager are games
      [LSApplicationCategoryType]: 'public.app-category.games'
    };
  }

  async updatePlist (zip, name, newProperties) {
    const contents = await zip.file(name).async('string');
    const plist = Object(_plist__WEBPACK_IMPORTED_MODULE_8__["parsePlist"])(contents);
    Object.assign(plist, newProperties);
    zip.file(name, Object(_plist__WEBPACK_IMPORTED_MODULE_8__["generatePlist"])(plist));
  }

  async addNwJS (projectZip) {
    const nwjsBuffer = await this.fetchLargeAsset(this.options.target, 'arraybuffer');
    const nwjsZip = await (await getJSZip()).loadAsync(nwjsBuffer);

    const isWindows = this.options.target.startsWith('nwjs-win');
    const isMac = this.options.target === 'nwjs-mac';
    const isLinux = this.options.target.startsWith('nwjs-linux');

    // NW.js Windows folder structure:
    // * (root)
    // +-- nwjs-v0.49.0-win-x64
    //   +-- nw.exe (executable)
    //   +-- credits.html
    //   +-- (project data)
    //   +-- ...

    // NW.js macOS folder structure:
    // * (root)
    // +-- nwjs-v0.49.0-osx-64
    //   +-- credits.html
    //   +-- nwjs.app
    //     +-- Contents
    //       +-- Resources
    //         +-- app.icns (icon)
    //         +-- app.nw
    //           +-- (project data)
    //       +-- MacOS
    //         +-- nwjs (executable)
    //       +-- ...

    // the first folder, something like "nwjs-v0.49.0-win-64"
    const nwjsPrefix = Object.keys(nwjsZip.files)[0].split('/')[0];

    const zip = new (await getJSZip());

    const packageName = this.options.app.packageName;

    // Copy NW.js files to the right place
    for (const path of Object.keys(nwjsZip.files)) {
      const file = nwjsZip.files[path];

      let newPath = path.replace(nwjsPrefix, packageName);
      if (isWindows) {
        newPath = newPath.replace('nw.exe', `${packageName}.exe`);
      } else if (isMac) {
        newPath = newPath.replace('nwjs.app', `${packageName}.app`);
      } else if (isLinux) {
        newPath = newPath.replace(/nw$/, packageName);
      }

      setFileFast(zip, newPath, file);
    }

    const ICON_NAME = 'icon.png';
    const icon = await _adapter__WEBPACK_IMPORTED_MODULE_12__["Adapter"].getAppIcon(this.options.app.icon);
    const manifest = {
      name: packageName,
      main: 'main.js',
      version: this.options.app.version,
      window: {
        width: this.computeWindowSize().width,
        height: this.computeWindowSize().height,
        icon: ICON_NAME
      }
    };

    let dataPrefix;
    if (isWindows) {
      dataPrefix = `${packageName}/`;
    } else if (isMac) {
      zip.file(`${packageName}/How to run ${packageName}.txt`, generateMacReadme(this.options));

      const icnsData = await Object(_icns__WEBPACK_IMPORTED_MODULE_5__["default"])(icon);
      zip.file(`${packageName}/${packageName}.app/Contents/Resources/app.icns`, icnsData);
      dataPrefix = `${packageName}/${packageName}.app/Contents/Resources/app.nw/`;
    } else if (isLinux) {
      const startScript = `#!/bin/bash
cd "$(dirname "$0")"
./${packageName}`;
      zip.file(`${packageName}/start.sh`, startScript, {
        unixPermissions: 0o100755
      });
      dataPrefix = `${packageName}/`;
    }

    // Copy project files and extra NW.js files to the right place
    for (const path of Object.keys(projectZip.files)) {
      setFileFast(zip, dataPrefix + path, projectZip.files[path]);
    }
    zip.file(dataPrefix + ICON_NAME, icon);
    zip.file(dataPrefix + 'package.json', JSON.stringify(manifest, null, 4));
    zip.file(dataPrefix + 'main.js', `
    const start = () => nw.Window.open('index.html', {
      position: 'center',
      new_instance: true
    });
    nw.App.on('open', start);
    start();`);

    const creditsHtmlPath = `${packageName}/credits.html`;
    const creditsHtml = await zip.file(creditsHtmlPath).async('string');
    zip.file(creditsHtmlPath, creditsHtml + generateChromiumLicenseHTML([
      SELF_LICENSE,
      SCRATCH_LICENSE
    ]));

    return zip;
  }

  async addElectron (projectZip) {
    const buffer = await this.fetchLargeAsset(this.options.target, 'arraybuffer');
    const electronZip = await (await getJSZip()).loadAsync(buffer);

    const isWindows = this.options.target.includes('win');
    const isMac = this.options.target.includes('mac');
    const isLinux = this.options.target.includes('linux');

    // See https://www.electronjs.org/docs/latest/tutorial/application-distribution#manual-distribution

    // Electron Windows/Linux folder structure:
    // * (root)
    // +-- electron.exe (executable)
    // +-- resources
    //    +-- default_app.asar (we will delete this)
    //    +-- app (we will create this)
    //      +-- index.html and the other project files (we will create this)
    // +-- LICENSES.chromium.html and everything else

    // Electron macOS folder structure:
    // * (root)
    // +-- Electron.app
    //    +-- Contents
    //      +-- Info.plist (we must update)
    //      +-- MacOS
    //        +-- Electron (executable)
    //      +-- Frameworks
    //        +-- Electron Helper.app
    //          +-- Contents
    //            +-- Info.plist (we must update)
    //        +-- Electron Helper (GPU).app
    //          +-- Contents
    //            +-- Info.plist (we must update)
    //        +-- Electron Helper (Renderer).app
    //          +-- Contents
    //            +-- Info.plist (we must update)
    //        +-- Electron Helper (Plugin).app
    //          +-- Contents
    //            +-- Info.plist (we must update)
    //        +-- and several other helpers which we won't touch
    //      +-- Resources
    //        +-- default_app.asar (we will delete this)
    //        +-- electron.icns (we will update this)
    //        +-- app (we will create this)
    //          +-- index.html and the other project files (we will create this)
    // +-- LICENSES.chromium.html and other license files

    const zip = new (await getJSZip());
    const packageName = this.options.app.packageName;
    for (const path of Object.keys(electronZip.files)) {
      const file = electronZip.files[path];

      // On Windows and Linux, make an inner folder inside the zip. Zip extraction tools will sometimes make
      // a mess if you don't make an inner folder.
      // On macOS, the .app is already itself a folder already and macOS will always make a folder for the
      // extracted files if there's multiple files at the root.
      let newPath;
      if (isMac) {
        newPath = path;
      } else {
        newPath = `${packageName}/${path}`;
      }

      if (isWindows) {
        newPath = newPath.replace('electron.exe', `${packageName}.exe`);
      } else if (isMac) {
        newPath = newPath.replace('Electron.app', `${packageName}.app`);
        newPath = newPath.replace(/Electron$/, packageName);
      } else if (isLinux) {
        newPath = newPath.replace(/electron$/, packageName);
      }

      setFileFast(zip, newPath, file);
    }

    const rootPrefix = isMac ? '' : `${packageName}/`;

    const creditsHtml = await zip.file(`${rootPrefix}LICENSES.chromium.html`).async('string');
    zip.file(`${rootPrefix}licenses.html`, creditsHtml + generateChromiumLicenseHTML([
      SELF_LICENSE,
      SCRATCH_LICENSE,
      ELECTRON_LICENSE
    ]));

    zip.remove(`${rootPrefix}LICENSE.txt`);
    zip.remove(`${rootPrefix}LICENSES.chromium.html`);
    zip.remove(`${rootPrefix}LICENSE`);
    zip.remove(`${rootPrefix}version`);
    zip.remove(`${rootPrefix}resources/default_app.asar`);

    const contentsPrefix = isMac ? `${rootPrefix}${packageName}.app/Contents/` : rootPrefix;
    const resourcesPrefix = isMac ? `${contentsPrefix}Resources/app/` : `${contentsPrefix}resources/app/`;
    const electronMainName = 'electron-main.js';
    const iconName = 'icon.png';

    const icon = await _adapter__WEBPACK_IMPORTED_MODULE_12__["Adapter"].getAppIcon(this.options.app.icon);
    zip.file(`${resourcesPrefix}${iconName}`, icon);

    const manifest = {
      name: packageName,
      main: electronMainName,
      version: this.options.app.version
    };
    zip.file(`${resourcesPrefix}package.json`, JSON.stringify(manifest, null, 4));

    const mainJS = `'use strict';
const {app, BrowserWindow, Menu, shell, screen, dialog} = require('electron');
const path = require('path');

const isWindows = process.platform === 'win32';
const isMac = process.platform === 'darwin';
const isLinux = process.platform === 'linux';

if (isMac) {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    { role: 'appMenu' },
    { role: 'fileMenu' },
    { role: 'editMenu' },
    { role: 'windowMenu' },
    { role: 'help' }
  ]));
} else {
  Menu.setApplicationMenu(null);
}

const resourcesURL = Object.assign(new URL('file://'), {
  pathname: path.join(__dirname, '/')
}).href;
const defaultProjectURL = new URL('./index.html', resourcesURL).href;

const createWindow = (windowOptions) => {
  const options = {
    title: ${JSON.stringify(this.options.app.windowTitle)},
    icon: path.resolve(__dirname, ${JSON.stringify(iconName)}),
    useContentSize: true,
    webPreferences: {
      sandbox: true,
      contextIsolation: true,
      nodeIntegration: false,
    },
    show: true,
    width: 480,
    height: 360,
    ...windowOptions,
  };

  const activeScreen = screen.getDisplayNearestPoint(screen.getCursorScreenPoint());
  const bounds = activeScreen.workArea;
  options.x = bounds.x + ((bounds.width - options.width) / 2);
  options.y = bounds.y + ((bounds.height - options.height) / 2);

  const window = new BrowserWindow(options);
  return window;
};

const createProjectWindow = (url) => {
  const windowMode = ${JSON.stringify(this.options.app.windowMode)};
  const options = {
    show: false,
    backgroundColor: ${JSON.stringify(this.options.appearance.background)},
    width: ${this.computeWindowSize().width},
    height: ${this.computeWindowSize().height},
    minWidth: 50,
    minHeight: 50,
  };
  // fullscreen === false disables fullscreen on macOS so only set this property when it's true
  if (windowMode === 'fullscreen') {
    options.fullscreen = true;
  }
  const window = createWindow(options);
  if (windowMode === 'maximize') {
    window.maximize();
  }
  window.loadURL(url);
  window.show();
};

const createDataWindow = (dataURI) => {
  const window = createWindow({});
  window.loadURL(dataURI);
};

const isResourceURL = (url) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'file:' && parsedUrl.href.startsWith(resourcesURL);
  } catch (e) {
    // ignore
  }
  return false;
};

const SAFE_PROTOCOLS = [
  'https:',
  'http:',
  'mailto:',
];

const isSafeOpenExternal = (url) => {
  try {
    const parsedUrl = new URL(url);
    return SAFE_PROTOCOLS.includes(parsedUrl.protocol);
  } catch (e) {
    // ignore
  }
  return false;
};

const isDataURL = (url) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'data:';
  } catch (e) {
    // ignore
  }
  return false;
};

const openLink = (url) => {
  if (isDataURL(url)) {
    createDataWindow(url);
  } else if (isResourceURL(url)) {
    createProjectWindow(url);
  } else if (isSafeOpenExternal(url)) {
    shell.openExternal(url);
  }
};

app.on('render-process-gone', (event, webContents, details) => {
  const window = BrowserWindow.fromWebContents(webContents);
  dialog.showMessageBoxSync(window, {
    type: 'error',
    title: 'Error',
    message: 'Renderer process crashed: ' + details.reason + ' (' + details.exitCode + ')'
  });
});

app.on('child-process-gone', (event, details) => {
  dialog.showMessageBoxSync({
    type: 'error',
    title: 'Error',
    message: details.type + ' child process crashed: ' + details.reason + ' (' + details.exitCode + ')'
  });
});

app.on('web-contents-created', (event, contents) => {
  contents.setWindowOpenHandler((details) => {
    setImmediate(() => {
      openLink(details.url);
    });
    return {action: 'deny'};
  });
  contents.on('will-navigate', (e, url) => {
    if (!isResourceURL(url)) {
      e.preventDefault();
      openLink(url);
    }
  });
  contents.on('before-input-event', (e, input) => {
    const window = BrowserWindow.fromWebContents(contents);
    if (!window || input.type !== "keyDown") return;
    if (input.key === 'F11' || (input.key === 'Enter' && input.alt)) {
      window.setFullScreen(!window.isFullScreen());
    } else if (input.key === 'Escape' && window.isFullScreen()) {
      window.setFullScreen(false);
    }
  });
});

app.on('window-all-closed', () => {
  app.quit();
});

app.whenReady().then(() => {
  createProjectWindow(defaultProjectURL);
});
`;
    zip.file(`${resourcesPrefix}${electronMainName}`, mainJS);

    for (const [path, data] of Object.entries(projectZip.files)) {
      setFileFast(zip, `${resourcesPrefix}${path}`, data);
    }

    if (isWindows) {
      const readme = [
        '1) Extract the whole zip',
        `2) Open "${packageName}.exe" to start the app.`,
        'Open "licenses.html" for information regarding open source software used by the app.',
      ].join('\n\n');
      zip.file(`${rootPrefix}README.txt`, readme);
    } else if (isMac) {
      zip.file(`How to run ${this.options.app.packageName}.txt`, generateMacReadme(this.options));

      const plist = this.getPlistPropertiesForPrimaryExecutable();
      await this.updatePlist(zip, `${contentsPrefix}Info.plist`, plist);

      // macOS Electron apps also contain several helper apps that we should update.
      const HELPERS = [
        'Electron Helper',
        'Electron Helper (GPU)',
        'Electron Helper (Renderer)',
        'Electron Helper (Plugin)',
      ];
      for (const name of HELPERS) {
        await this.updatePlist(zip, `${contentsPrefix}Frameworks/${name}.app/Contents/Info.plist`, {
          // In the prebuilt Electron binaries on GitHub, the original app has a CFBundleIdentifier of
          // com.github.Electron and all the helpers have com.github.Electron.helper
          [CFBundleIdentifier]: `${plist[CFBundleIdentifier]}.helper`,

          // We shouldn't change the actual name of the helpers because we don't actually rename their .app
          // We also don't rename the executable
          [CFBundleDisplayName]: name.replace('Electron', this.options.app.packageName),

          // electron-builder always updates the helpers to use the same version as the app itself
          [CFBundleVersion]: this.options.app.version,
          [CFBundleShortVersionString]: this.options.app.version,
        });
      }

      const icns = await Object(_icns__WEBPACK_IMPORTED_MODULE_5__["default"])(icon);
      zip.file(`${contentsPrefix}Resources/electron.icns`, icns);
    } else if (isLinux) {
      // Some Linux distributions can't easily open the executable file from the GUI, so we'll add a simple wrapper that people can use instead.
      const startScript = `#!/bin/bash
cd "$(dirname "$0")"
./${packageName}`;
      zip.file(`${rootPrefix}start.sh`, startScript, {
        unixPermissions: 0o100755
      });
    }

    return zip;
  }

  async addWebViewMac (projectZip) {
    const buffer = await this.fetchLargeAsset(this.options.target, 'arraybuffer');
    const appZip = await (await getJSZip()).loadAsync(buffer);

    // +-- WebView.app
    //   +-- Contents
    //     +-- Info.plist
    //     +-- MacOS
    //       +-- WebView (executable)
    //     +-- Resources
    //       +-- index.html
    //       +-- application_config.json
    //       +-- AppIcon.icns

    const newAppName = `${this.options.app.packageName}.app`;
    const contentsPrefix = `${newAppName}/Contents/`;
    const resourcesPrefix = `${newAppName}/Contents/Resources/`;

    const zip = new (await getJSZip());
    for (const [path, data] of Object.entries(appZip.files)) {
      const newPath = path
        // Rename the .app itself
        .replace('WebView.app', newAppName)
        // Rename the executable
        .replace(/WebView$/, this.options.app.packageName);
      setFileFast(zip, newPath, data);
    }
    for (const [path, data] of Object.entries(projectZip.files)) {
      setFileFast(zip, `${resourcesPrefix}${path}`, data);
    }

    const icon = await _adapter__WEBPACK_IMPORTED_MODULE_12__["Adapter"].getAppIcon(this.options.app.icon);
    const icns = await Object(_icns__WEBPACK_IMPORTED_MODULE_5__["default"])(icon);
    zip.file(`${resourcesPrefix}AppIcon.icns`, icns);
    zip.remove(`${resourcesPrefix}Assets.car`);

    const parsedBackgroundColor = parseInt(this.options.appearance.background.substr(1), 16);
    const applicationConfig = {
      title: this.options.app.windowTitle,
      background: [
        // R, G, B [0-255]
        parsedBackgroundColor >> 16 & 0xff,
        parsedBackgroundColor >> 8 & 0xff,
        parsedBackgroundColor & 0xff,
        // A [0-1]
        1
      ],
      width: this.computeWindowSize().width,
      height: this.computeWindowSize().height
    };
    zip.file(`${resourcesPrefix}application_config.json`, JSON.stringify(applicationConfig));

    await this.updatePlist(zip, `${contentsPrefix}Info.plist`, this.getPlistPropertiesForPrimaryExecutable());

    zip.file(`How to run ${this.options.app.packageName}.txt`, generateMacReadme(this.options));

    return zip;
  }

  makeWebSocketProvider () {
    // If using the default turbowarp.org server, we'll add a fallback for the turbowarp.xyz alias.
    // This helps work around web filters as turbowarp.org can be blocked for games and turbowarp.xyz uses
    // a problematic TLD. These are the same server and same variables, just different domain.
    const cloudHost = this.options.cloudVariables.cloudHost === 'wss://clouddata.turbowarp.org' ? [
      'wss://clouddata.turbowarp.org',
      'wss://clouddata.turbowarp.xyz'
    ] : this.options.cloudVariables.cloudHost;
    return `new Scaffolding.Cloud.WebSocketProvider(${JSON.stringify(cloudHost)}, ${JSON.stringify(this.options.projectId)})`;
  }

  makeLocalStorageProvider () {
    return `new Scaffolding.Cloud.LocalStorageProvider(${JSON.stringify(`cloudvariables:${this.options.projectId}`)})`;
  }

  makeCustomProvider () {
    const variables = this.options.cloudVariables.custom;
    let result = '{const providers = {};\n';
    for (const provider of new Set(Object.values(variables))) {
      if (provider === 'ws') {
        result += `providers.ws = ${this.makeWebSocketProvider()};\n`;
      } else if (provider === 'local') {
        result += `providers.local = ${this.makeLocalStorageProvider()};\n`;
      }
    }
    result += 'for (const provider of Object.values(providers)) scaffolding.addCloudProvider(provider);\n';
    for (const variableName of Object.keys(variables)) {
      const providerToUse = variables[variableName];
      result += `scaffolding.addCloudProviderOverride(${JSON.stringify(variableName)}, providers[${JSON.stringify(providerToUse)}] || null);\n`;
    }
    result += '}';
    return result;
  }

  generateFilename (extension) {
    return `${this.options.app.windowTitle}.${extension}`;
  }

  async generateGetProjectData () {
    let result = '';
    let getProjectDataFunction = '';
    let isZip = false;
    let storageProgressStart;
    let storageProgressEnd;

    if (this.options.target === 'html') {
      isZip = this.project.type !== 'blob';
      storageProgressStart = PROGRESS_FETCHED_COMPRESSED;
      storageProgressEnd = PROGRESS_EXTRACTED_COMPRESSED;

      // We break the project into a bunch of small segments to be able to show a good progress bar.
      const SEGMENT_LENGTH = 100000;
      const encoded = Object(_base85__WEBPACK_IMPORTED_MODULE_7__["encode"])(this.project.arrayBuffer);
      for (let i = 0; i < encoded.length; i += SEGMENT_LENGTH) {
        const segment = encoded.substr(i, SEGMENT_LENGTH);
        const progress = interpolate(PROGRESS_LOADED_SCRIPTS, PROGRESS_FETCHED_COMPRESSED, i / encoded.length);
        // Progress will always be a number between 0 and 1. We can remove the leading 0 and unnecessary decimals to save space.
        const shortenedProgress = progress.toString().substr(1, 4);
        result += `<script type="p4-project">${segment}</script><script>setProgress(${shortenedProgress})</script>`;
      }

      getProjectDataFunction = `async () => {
        const base85decode = ${_base85__WEBPACK_IMPORTED_MODULE_7__["decode"]};
        const dataElements = Array.from(document.querySelectorAll('script[type="p4-project"]'));
        const result = base85decode(dataElements.map(i => i.textContent).join(''));
        dataElements.forEach(i => i.remove());
        return result;
      }`;
    } else {
      let src;
      if (this.project.type === 'blob' || this.options.target === 'zip-one-asset') {
        isZip = this.project.type !== 'blob';
        src = './project.zip';
        storageProgressStart = PROGRESS_FETCHED_COMPRESSED;
        storageProgressEnd = PROGRESS_EXTRACTED_COMPRESSED;
      } else {
        src = './assets/project.json';
        storageProgressStart = PROGRESS_FETCHED_PROJECT_JSON;
        storageProgressEnd = PROGRESS_FETCHED_ASSETS;
      }

      getProjectDataFunction = `() => new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          resolve(xhr.response);
        };
        xhr.onerror = () => {
          if (location.protocol === 'file:') {
            reject(new Error('Zip environment must be used from a website, not from a file URL.'));
          } else {
            reject(new Error('Request to load project data failed.'));
          }
        };
        xhr.onprogress = (e) => {
          if (e.lengthComputable) {
            setProgress(interpolate(${PROGRESS_LOADED_SCRIPTS}, ${storageProgressStart}, e.loaded / e.total));
          }
        };
        xhr.responseType = 'arraybuffer';
        xhr.open('GET', ${JSON.stringify(src)});
        xhr.send();
      })`;
    }

    result += `
    <script>
      const getProjectData = (function() {
        const storage = scaffolding.storage;
        storage.onprogress = (total, loaded) => {
          setProgress(interpolate(${storageProgressStart}, ${storageProgressEnd}, loaded / total));
        };
        ${isZip ? `
        let zip;
        // Allow zip to be GC'd after project loads
        vm.runtime.on('PROJECT_LOADED', () => (zip = null));
        const findFileInZip = (path) => zip.file(path) || zip.file(new RegExp("^([^/]*/)?" + path + "$"))[0];
        storage.addHelper({
          load: (assetType, assetId, dataFormat) => {
            if (!zip) {
              throw new Error('Zip is not loaded or has been closed');
            }
            const path = assetId + '.' + dataFormat;
            const file = findFileInZip(path);
            if (!file) {
              throw new Error('Asset is not in zip: ' + path)
            }
            return file
              .async('uint8array')
              .then((data) => storage.createAsset(assetType, dataFormat, data, assetId));
          }
        });
        return () => (${getProjectDataFunction})().then(async (data) => {
          zip = await Scaffolding.JSZip.loadAsync(data);
          const file = findFileInZip('project.json');
          if (!file) {
            throw new Error('project.json is not in zip');
          }
          return file.async('arraybuffer');
        });` : `
        storage.addWebStore(
          [storage.AssetType.ImageVector, storage.AssetType.ImageBitmap, storage.AssetType.Sound],
          (asset) => new URL('./assets/' + asset.assetId + '.' + asset.dataFormat, location).href
        );
        return ${getProjectDataFunction};`}
      })();
    </script>`;
    return result;
  }

  async generateFavicon () {
    if (this.options.app.icon === null) {
      return '';
    }
    const data = await _adapter__WEBPACK_IMPORTED_MODULE_12__["Adapter"].readAsURL(this.options.app.icon, 'app icon');
    return `<link rel="icon" href="${data}">`;
  }

  async generateCursor () {
    if (this.options.cursor.type !== 'custom') {
      return this.options.cursor.type;
    }
    if (!this.options.cursor.custom) {
      // Configured to use a custom cursor but no image was selected
      return 'auto';
    }
    const data = await _adapter__WEBPACK_IMPORTED_MODULE_12__["Adapter"].readAsURL(this.options.cursor.custom, 'custom cursor');
    return `url(${data}) ${this.options.cursor.center.x} ${this.options.cursor.center.y}, auto`;
  }

  async package () {
    if (!_adapter__WEBPACK_IMPORTED_MODULE_12__["Adapter"]) {
      throw new Error('Missing adapter');
    }
    if (this.used) {
      throw new Error('Packager was already used');
    }
    this.used = true;
    this.ensureNotAborted();
    await this.loadResources();
    this.ensureNotAborted();
    const html = `<!DOCTYPE html>
<!-- Created with ${_brand__WEBPACK_IMPORTED_MODULE_9__["WEBSITE"]} -->
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <!-- We only include this to explicitly loosen the CSP of various packager environments. It does not provide any security. -->
  <meta http-equiv="Content-Security-Policy" content="default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: blob:">
  <title>${Object(_common_escape_xml__WEBPACK_IMPORTED_MODULE_2__["default"])(this.options.app.windowTitle)}</title>
  <style>
    body {
      color: ${this.options.appearance.foreground};
      font-family: sans-serif;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }
    :root, body.is-fullscreen {
      background-color: ${this.options.appearance.background};
    }
    [hidden] {
      display: none !important;
    }
    h1 {
      font-weight: normal;
    }
    a {
      color: inherit;
      text-decoration: underline;
      cursor: pointer;
    }

    #app, #loading, #error, #launch {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .screen {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: default;
      user-select: none;
      -webkit-user-select: none;
      background-color: ${this.options.appearance.background};
    }
    #launch {
      background-color: rgba(0, 0, 0, 0.7);
      cursor: pointer;
    }
    .green-flag {
      width: 80px;
      height: 80px;
      padding: 16px;
      border-radius: 100%;
      background: rgba(255, 255, 255, 0.75);
      border: 3px solid hsla(0, 100%, 100%, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }
    #loading {
      ${this.options.loadingScreen.image && this.options.loadingScreen.imageMode === 'stretch'
        ? `background-image: url(${await _adapter__WEBPACK_IMPORTED_MODULE_12__["Adapter"].readAsURL(this.options.loadingScreen.image, 'stretched loading screen')});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;`
        : ''}
    }
    .progress-bar-outer {
      border: 1px solid currentColor;
      height: 10px;
      width: 200px;
      max-width: 200px;
    }
    .progress-bar-inner {
      height: 100%;
      width: 0;
      background-color: currentColor;
    }
    .loading-text, noscript {
      font-weight: normal;
      font-size: 36px;
      margin: 0 0 16px;
    }
    .loading-image {
      margin: 0 0 16px;
    }
    #error-message, #error-stack {
      font-family: monospace;
      max-width: 600px;
      white-space: pre-wrap;
      user-select: text;
      -webkit-user-select: text;
    }
    #error-stack {
      text-align: left;
      max-height: 200px;
      overflow: auto;
    }
    .control-button {
      width: 2rem;
      height: 2rem;
      padding: 0.375rem;
      border-radius: 0.25rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      user-select: none;
      -webkit-user-select: none;
      cursor: pointer;
      border: 0;
      border-radius: 4px;
    }
    .control-button:hover {
      background: ${this.options.appearance.accent}26;
    }
    .control-button.active {
      background: ${this.options.appearance.accent}59;
    }
    .fullscreen-button {
      background: white !important;
    }
    .standalone-fullscreen-button {
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 0 0 0 4px;
      padding: 4px;
      cursor: pointer;
    }
    .sc-canvas {
      cursor: ${await this.generateCursor()};
    }
    .sc-monitor-root[opcode^="data_"] .sc-monitor-value-color {
      background-color: ${this.options.monitors.variableColor};
    }
    .sc-monitor-row-value-outer {
      background-color: ${this.options.monitors.listColor};
    }
    .sc-monitor-row-value-editing .sc-monitor-row-value-outer {
      background-color: ${Object(_colors__WEBPACK_IMPORTED_MODULE_11__["darken"])(this.options.monitors.listColor)};
    }
    ${this.options.custom.css}
  </style>
  <meta name="theme-color" content="${this.options.appearance.background}">
  ${await this.generateFavicon()}
</head>
<body>
  <div id="app"></div>

  <div id="launch" class="screen" hidden title="Click to start">
    <div class="green-flag">
      <svg viewBox="0 0 16.63 17.5" width="42" height="44">
        <defs><style>.cls-1,.cls-2{fill:#4cbf56;stroke:#45993d;stroke-linecap:round;stroke-linejoin:round;}.cls-2{stroke-width:1.5px;}</style></defs>
        <path class="cls-1" d="M.75,2A6.44,6.44,0,0,1,8.44,2h0a6.44,6.44,0,0,0,7.69,0V12.4a6.44,6.44,0,0,1-7.69,0h0a6.44,6.44,0,0,0-7.69,0"/>
        <line class="cls-2" x1="0.75" y1="16.75" x2="0.75" y2="0.75"/>
      </svg>
    </div>
  </div>

  <div id="loading" class="screen">
    <noscript>Enable JavaScript</noscript>
    ${this.options.loadingScreen.text ? `<h1 class="loading-text">${Object(_common_escape_xml__WEBPACK_IMPORTED_MODULE_2__["default"])(this.options.loadingScreen.text)}</h1>` : ''}
    ${this.options.loadingScreen.image && this.options.loadingScreen.imageMode === 'normal' ? `<div class="loading-image"><img src="${await _adapter__WEBPACK_IMPORTED_MODULE_12__["Adapter"].readAsURL(this.options.loadingScreen.image, 'loading-screen')}"></div>` : ''}
    ${this.options.loadingScreen.progressBar ? '<div class="progress-bar-outer"><div class="progress-bar-inner" id="loading-inner"></div></div>' : ''}
  </div>

  <div id="error" class="screen" hidden>
    <h1>Error</h1>
    <details>
      <summary id="error-message"></summary>
      <p id="error-stack"></p>
    </details>
  </div>

  ${this.options.target === 'html' ? `<script>${this.script}</script>` : '<script src="script.js"></script>'}
  <script>${removeUnnecessaryEmptyLines(`
    const appElement = document.getElementById('app');
    const launchScreen = document.getElementById('launch');
    const loadingScreen = document.getElementById('loading');
    const loadingInner = document.getElementById('loading-inner');
    const errorScreen = document.getElementById('error');
    const errorScreenMessage = document.getElementById('error-message');
    const errorScreenStack = document.getElementById('error-stack');

    const handleError = (error) => {
      console.error(error);
      if (!errorScreen.hidden) return;
      errorScreen.hidden = false;
      errorScreenMessage.textContent = '' + error;
      let debug = error && error.stack || 'no stack';
      debug += '\\nUser agent: ' + navigator.userAgent;
      errorScreenStack.textContent = debug;
    };
    const setProgress = (progress) => {
      if (loadingInner) loadingInner.style.width = progress * 100 + '%';
    };
    const interpolate = (a, b, t) => a + t * (b - a);

    try {
      setProgress(${PROGRESS_LOADED_SCRIPTS});

      const scaffolding = new Scaffolding.Scaffolding();
      scaffolding.width = ${this.options.stageWidth};
      scaffolding.height = ${this.options.stageHeight};
      scaffolding.resizeMode = ${JSON.stringify(this.options.resizeMode)};
      scaffolding.editableLists = ${this.options.monitors.editableLists};
      scaffolding.usePackagedRuntime = ${this.options.packagedRuntime};
      scaffolding.setup();
      scaffolding.appendTo(appElement);

      const vm = scaffolding.vm;
      window.scaffolding = scaffolding;
      window.vm = scaffolding.vm;
      window.Scratch = {
        vm,
        renderer: vm.renderer,
        audioEngine: vm.runtime.audioEngine,
        bitmapAdapter: vm.runtime.v2BitmapAdapter,
        videoProvider: vm.runtime.ioDevices.video.provider
      };

      scaffolding.setUsername(${JSON.stringify(this.options.username)}.replace(/#/g, () => Math.floor(Math.random() * 10)));
      scaffolding.setAccentColor(${JSON.stringify(this.options.appearance.accent)});

      ${this.options.cloudVariables.mode === 'ws' ?
        `scaffolding.addCloudProvider(${this.makeWebSocketProvider()})` :
        this.options.cloudVariables.mode === 'local' ?
        `scaffolding.addCloudProvider(${this.makeLocalStorageProvider()})` :
        this.options.cloudVariables.mode === 'custom' ?
        this.makeCustomProvider() :
        ''
      };

      ${this.options.controls.greenFlag.enabled ? `
      const greenFlagButton = document.createElement('img');
      greenFlagButton.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.63 17.5"><path d="M.75 2a6.44 6.44 0 017.69 0h0a6.44 6.44 0 007.69 0v10.4a6.44 6.44 0 01-7.69 0h0a6.44 6.44 0 00-7.69 0" fill="#4cbf56" stroke="#45993d" stroke-linecap="round" stroke-linejoin="round"/><path stroke-width="1.5" fill="#4cbf56" stroke="#45993d" stroke-linecap="round" stroke-linejoin="round" d="M.75 16.75v-16"/></svg>');
      greenFlagButton.className = 'control-button';
      greenFlagButton.addEventListener('click', () => {
        scaffolding.greenFlag();
      });
      scaffolding.addEventListener('PROJECT_RUN_START', () => {
        greenFlagButton.classList.add('active');
      });
      scaffolding.addEventListener('PROJECT_RUN_STOP', () => {
        greenFlagButton.classList.remove('active');
      });
      scaffolding.addControlButton({
        element: greenFlagButton,
        where: 'top-left'
      });` : ''}

      ${this.options.controls.pause.enabled ? `
      const pauseButton = document.createElement('img');
      pauseButton.className = 'control-button';
      let isPaused = false;
      pauseButton.addEventListener('click', () => {
        isPaused = !isPaused;
        vm.setPaused(isPaused);
      });
      const updatePause = () => {
        if (isPaused) {
          pauseButton.src = 'data:image/svg+xml,' + encodeURIComponent('<svg width="16" height="16" viewBox="0 0 4.2333332 4.2333335" xmlns="http://www.w3.org/2000/svg"><path d="m3.95163484 2.02835365-1.66643921.9621191-1.66643913.96211911V.10411543l1.66643922.9621191z" fill="#ffae00"/></svg>');
        } else {
          pauseButton.src = 'data:image/svg+xml,' + encodeURIComponent('<svg width="16" height="16" viewBox="0 0 4.2333332 4.2333335" xmlns="http://www.w3.org/2000/svg"><g fill="#ffae00"><path d="M.389.19239126h1.2631972v3.8485508H.389zM2.5810001.19239126h1.2631972v3.8485508H2.5810001z"/></g></svg>');
        }
      }
      vm.on('P4_PAUSE', updatePause);
      updatePause();
      scaffolding.addControlButton({
        element: pauseButton,
        where: 'top-left'
      });` : ''}

      ${this.options.controls.stopAll.enabled ? `
      const stopAllButton = document.createElement('img');
      stopAllButton.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="#ec5959" stroke="#b84848" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M4.3.5h5.4l3.8 3.8v5.4l-3.8 3.8H4.3L.5 9.7V4.3z"/></svg>');
      stopAllButton.className = 'control-button';
      stopAllButton.addEventListener('click', () => {
        scaffolding.stopAll();
      });
      scaffolding.addControlButton({
        element: stopAllButton,
        where: 'top-left'
      });` : ''}

      ${this.options.controls.fullscreen.enabled ? `
      if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
        let isFullScreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
        const fullscreenButton = document.createElement('img');
        fullscreenButton.className = 'control-button fullscreen-button';
        fullscreenButton.addEventListener('click', () => {
          if (isFullScreen) {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            }
          } else {
            if (document.body.requestFullscreen) {
              document.body.requestFullscreen();
            } else if (document.body.webkitRequestFullscreen) {
              document.body.webkitRequestFullscreen();
            }
          }
        });
        const otherControlsExist = ${this.options.controls.greenFlag.enabled || this.options.controls.stopAll.enabled};
        const fillColor = otherControlsExist ? '#575E75' : '${this.options.appearance.foreground}';
        const updateFullScreen = () => {
          isFullScreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
          document.body.classList.toggle('is-fullscreen', isFullScreen);
          if (isFullScreen) {
            fullscreenButton.src = 'data:image/svg+xml,' + encodeURIComponent('<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="' + fillColor + '" fill-rule="evenodd"><path d="M12.662 3.65l.89.891 3.133-2.374a.815.815 0 011.15.165.819.819 0 010 .986L15.467 6.46l.867.871c.25.25.072.664-.269.664L12.388 8A.397.397 0 0112 7.611V3.92c0-.341.418-.514.662-.27M7.338 16.35l-.89-.89-3.133 2.374a.817.817 0 01-1.15-.166.819.819 0 010-.985l2.37-3.143-.87-.871a.387.387 0 01.27-.664L7.612 12a.397.397 0 01.388.389v3.692a.387.387 0 01-.662.27M7.338 3.65l-.89.891-3.133-2.374a.815.815 0 00-1.15.165.819.819 0 000 .986l2.37 3.142-.87.871a.387.387 0 00.27.664L7.612 8A.397.397 0 008 7.611V3.92a.387.387 0 00-.662-.27M12.662 16.35l.89-.89 3.133 2.374a.817.817 0 001.15-.166.819.819 0 000-.985l-2.368-3.143.867-.871a.387.387 0 00-.269-.664L12.388 12a.397.397 0 00-.388.389v3.692c0 .342.418.514.662.27"/></g></svg>');
          } else {
            fullscreenButton.src = 'data:image/svg+xml,' + encodeURIComponent('<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="' + fillColor + '" fill-rule="evenodd"><path d="M16.338 7.35l-.89-.891-3.133 2.374a.815.815 0 01-1.15-.165.819.819 0 010-.986l2.368-3.142-.867-.871a.387.387 0 01.269-.664L16.612 3a.397.397 0 01.388.389V7.08a.387.387 0 01-.662.27M3.662 12.65l.89.89 3.133-2.374a.817.817 0 011.15.166.819.819 0 010 .985l-2.37 3.143.87.871c.248.25.071.664-.27.664L3.388 17A.397.397 0 013 16.611V12.92c0-.342.418-.514.662-.27M3.662 7.35l.89-.891 3.133 2.374a.815.815 0 001.15-.165.819.819 0 000-.986L6.465 4.54l.87-.871a.387.387 0 00-.27-.664L3.388 3A.397.397 0 003 3.389V7.08c0 .341.418.514.662.27M16.338 12.65l-.89.89-3.133-2.374a.817.817 0 00-1.15.166.819.819 0 000 .985l2.368 3.143-.867.871a.387.387 0 00.269.664l3.677.005a.397.397 0 00.388-.389V12.92a.387.387 0 00-.662-.27"/></g></svg>');
          }
        };
        updateFullScreen();
        document.addEventListener('fullscreenchange', updateFullScreen);
        document.addEventListener('webkitfullscreenchange', updateFullScreen);
        if (otherControlsExist) {
          fullscreenButton.className = 'control-button fullscreen-button';
          scaffolding.addControlButton({
            element: fullscreenButton,
            where: 'top-right'
          });
        } else {
          fullscreenButton.className = 'standalone-fullscreen-button';
          document.body.appendChild(fullscreenButton);
        }
      }` : ''}

      vm.setTurboMode(${this.options.turbo});
      if (vm.setInterpolation) vm.setInterpolation(${this.options.interpolation});
      if (vm.setFramerate) vm.setFramerate(${this.options.framerate});
      if (vm.renderer.setUseHighQualityRender) vm.renderer.setUseHighQualityRender(${this.options.highQualityPen});
      if (vm.setRuntimeOptions) vm.setRuntimeOptions({
        fencing: ${this.options.fencing},
        miscLimits: ${this.options.miscLimits},
        maxClones: ${this.options.maxClones},
      });
      if (vm.setCompilerOptions) vm.setCompilerOptions({
        enabled: ${this.options.compiler.enabled},
        warpTimer: ${this.options.compiler.warpTimer}
      });

      if (typeof ScaffoldingAddons !== 'undefined') {
        ScaffoldingAddons.run(scaffolding, ${JSON.stringify(this.getAddonOptions())});
      }

      for (const extension of ${JSON.stringify(this.options.extensions.map(i => i.url))}) {
        vm.extensionManager.loadExtensionURL(extension);
      }

      ${this.options.closeWhenStopped ? `vm.runtime.on('PROJECT_RUN_STOP', () => window.close());` : ''}

      ${this.options.target.startsWith('nwjs-') ? `
      if (typeof nw !== 'undefined') {
        const win = nw.Window.get();
        win.on('new-win-policy', (frame, url, policy) => {
          policy.ignore();
          nw.Shell.openExternal(url);
        });
        win.on('navigation', (frame, url, policy) => {
          policy.ignore();
          nw.Shell.openExternal(url);
        });
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && document.fullscreenElement) {
            document.exitFullscreen();
          }
        });
      }` : ''}
    } catch (e) {
      handleError(e);
    }
  `)}</script>
  ${this.options.custom.js ? `<script>
    try {
      ${this.options.custom.js}
    } catch (e) {
      handleError(e);
    }
  </script>` : ''}
  ${await this.generateGetProjectData()}
  <script>
    const run = async () => {
      const projectData = await getProjectData();
      await scaffolding.loadProject(projectData);
      setProgress(1);
      loadingScreen.hidden = true;
      if (${this.options.autoplay}) {
        scaffolding.start();
      } else {
        launchScreen.hidden = false;
        launchScreen.addEventListener('click', () => {
          launchScreen.hidden = true;
          scaffolding.start();
        });
        launchScreen.focus();
      }
    };
    run().catch(handleError);
  </script>
</body>
</html>
`;
    this.ensureNotAborted();

    if (this.options.target !== 'html') {
      let zip;
      if (this.project.type === 'sb3' && this.options.target !== 'zip-one-asset') {
        zip = await (await getJSZip()).loadAsync(this.project.arrayBuffer);
        for (const file of Object.keys(zip.files)) {
          zip.files[`assets/${file}`] = zip.files[file];
          delete zip.files[file];
        }
      } else {
        zip = new (await getJSZip());
        zip.file('project.zip', this.project.arrayBuffer);
      }
      zip.file('index.html', html);
      zip.file('script.js', this.script);

      if (this.options.target.startsWith('nwjs-')) {
        zip = await this.addNwJS(zip);
      } else if (this.options.target.startsWith('electron-')) {
        zip = await this.addElectron(zip);
      } else if (this.options.target === 'webview-mac') {
        zip = await this.addWebViewMac(zip);
      }

      this.ensureNotAborted();
      return {
        data: await zip.generateAsync({
          type: 'arraybuffer',
          compression: 'DEFLATE',
          // Use UNIX permissions so that executable bits are properly set for macOS and Linux
          platform: 'UNIX'
        }, (meta) => {
          this.dispatchEvent(new _common_event_target__WEBPACK_IMPORTED_MODULE_0__["CustomEvent"]('zip-progress', {
            detail: {
              progress: meta.percent / 100
            }
          }));
        }),
        type: 'application/zip',
        filename: this.generateFilename('zip')
      };
    }
    return {
      data: html,
      type: 'text/html',
      filename: this.generateFilename('html')
    };
  }
}

Packager.getDefaultPackageNameFromFileName = (title) => {
  // Note: Changing this logic is very dangerous because changing the defaults will cause already packaged projects
  // to loose any data when they are updated.
  title = title.split('.')[0];
  title = title.replace(/[^\-a-z ]/gi, '');
  title = title.trim();
  title = title.replace(/ /g, '-');
  return title.toLowerCase() || 'packaged-project';
};

Packager.getWindowTitleFromFileName = (title) => {
  const split = title.split('.');
  if (split.length > 1) {
    split.pop();
  }
  title = split.join('.').trim();
  return title || 'Packaged Project';
};

Packager.usesUnsafeOptions = (options) => {
  const defaultOptions = Packager.DEFAULT_OPTIONS();
  const getUnsafeOptions = (options) => [
    options.custom,
    options.extensions,
    options.cloudVariables.unsafeCloudBehaviors
  ];
  return JSON.stringify(getUnsafeOptions(defaultOptions)) !== JSON.stringify(getUnsafeOptions(options));
};

Packager.DEFAULT_OPTIONS = () => ({
  turbo: false,
  interpolation: false,
  framerate: 30,
  highQualityPen: false,
  maxClones: 300,
  fencing: true,
  miscLimits: true,
  stageWidth: 480,
  stageHeight: 360,
  resizeMode: 'preserve-ratio',
  autoplay: false,
  username: 'player####',
  closeWhenStopped: false,
  projectId: '',
  custom: {
    css: '',
    js: ''
  },
  appearance: {
    background: '#000000',
    foreground: '#ffffff',
    accent: _brand__WEBPACK_IMPORTED_MODULE_9__["ACCENT_COLOR"]
  },
  loadingScreen: {
    progressBar: true,
    text: '',
    imageMode: 'normal',
    image: null
  },
  controls: {
    greenFlag: {
      enabled: false,
    },
    stopAll: {
      enabled: false,
    },
    fullscreen: {
      enabled: false
    },
    pause: {
      enabled: false
    }
  },
  monitors: {
    editableLists: false,
    variableColor: '#ff8c1a',
    listColor: '#fc662c'
  },
  compiler: {
    enabled: true,
    warpTimer: false
  },
  packagedRuntime: true,
  target: 'html',
  app: {
    icon: null,
    packageName: Packager.getDefaultPackageNameFromFileName(''),
    windowTitle: Packager.getWindowTitleFromFileName(''),
    windowMode: 'window',
    version: '1.0.0'
  },
  chunks: {
    gamepad: false,
    pointerlock: false,
  },
  cloudVariables: {
    mode: 'ws',
    cloudHost: 'wss://clouddata.turbowarp.org',
    custom: {},
    specialCloudBehaviors: false,
    unsafeCloudBehaviors: false,
  },
  cursor: {
    type: 'auto',
    custom: null,
    center: {
      x: 0,
      y: 0
    }
  },
  extensions: []
});

/* harmony default export */ __webpack_exports__["default"] = (Packager);


/***/ }),

/***/ "./src/packager/plist.js":
/*!*******************************!*\
  !*** ./src/packager/plist.js ***!
  \*******************************/
/*! exports provided: parsePlist, generatePlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePlist", function() { return parsePlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePlist", function() { return generatePlist; });
// Parses and generates Apple Info.plist files
// Example file:
/*
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>BuildMachineOSBuild</key>
  <string>20F71</string>
  <key>CFBundleDevelopmentRegion</key>
  <string>en</string>
  <key>CFBundleExecutable</key>
  <string>WebView</string>
  <key>CFBundleIconFile</key>
  <string>AppIcon</string>
  <key>CFBundleIconName</key>
  <string>AppIcon</string>
  <key>CFBundleIdentifier</key>
  <string>org.turbowarp.webviews.mac</string>
  <key>CFBundleInfoDictionaryVersion</key>
  <string>6.0</string>
  <key>CFBundleName</key>
  <string>WebView</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>CFBundleShortVersionString</key>
  <string>1.0</string>
  <key>CFBundleSupportedPlatforms</key>
  <array>
    <string>MacOSX</string>
  </array>
  <key>CFBundleVersion</key>
  <string>1</string>
  <key>DTCompiler</key>
  <string>com.apple.compilers.llvm.clang.1_0</string>
  <key>DTPlatformBuild</key>
  <string>12E507</string>
  <key>DTPlatformName</key>
  <string>macosx</string>
  <key>DTPlatformVersion</key>
  <string>11.3</string>
  <key>DTSDKBuild</key>
  <string>20E214</string>
  <key>DTSDKName</key>
  <string>macosx11.3</string>
  <key>DTXcode</key>
  <string>1251</string>
  <key>DTXcodeBuild</key>
  <string>12E507</string>
  <key>LSApplicationCategoryType</key>
  <string>public.app-category.games</string>
  <key>LSMinimumSystemVersion</key>
  <string>10.12</string>
  <key>NSMainStoryboardFile</key>
  <string>Main</string>
  <key>NSPrincipalClass</key>
  <string>NSApplication</string>
  <key>ExampleBooleanTrue</key>
  <true/>
  <key>ExampleBooleanFalse</key>
  <false/>
</dict>
</plist>
*/

const xmlToValue = (node) => {
  if (node.tagName === 'dict') {
    const result = {};
    for (const child of node.children) {
      if (child.tagName === 'key') {
        result[child.textContent] = xmlToValue(child.nextElementSibling);
      }
    }
    return result;
  } else if (node.tagName === 'array') {
    return Array.from(node.children).map(xmlToValue);
  } else if (node.tagName === 'string') {
    return node.textContent;
  } else if (node.tagName === 'true') {
    return true;
  } else if (node.tagName === 'false') {
    return false;
  }
  console.warn('unknown plist xml', node);
  return null;
};

const valueToXml = (doc, value) => {
  if (Array.isArray(value)) {
    const node = doc.createElement('array');
    for (const listItem of value) {
      node.appendChild(valueToXml(doc, listItem));
    }
    return node;
  } else if (typeof value === 'object') {
    const node = doc.createElement('dict');
    for (const [key, keyValue] of Object.entries(value)) {
      const keyNode = doc.createElement('key');
      keyNode.textContent = key;
      const valueNode = valueToXml(doc, keyValue);
      node.appendChild(keyNode);
      node.appendChild(valueNode);
    }
    return node;
  } else if (typeof value === 'string') {
    const node = doc.createElement('string');
    node.textContent = value;
    return node;
  } else if (typeof value === 'boolean') {
    const node = doc.createElement(value.toString());
    return node;
  }
  console.warn('unknown plist value', value);
  return valueToXml(doc, `${value}`);
};

const parsePlist = (string) => {
  const xml = new DOMParser().parseFromString(string, 'text/xml');
  const rootNode = xml.children[0];
  const rootDict = rootNode.children[0];
  return xmlToValue(rootDict);
};

const generatePlist = (values) => {
  const xml = document.implementation.createDocument(null, "plist");
  const rootNode = xml.documentElement;
  rootNode.setAttribute('version', '1.0');
  rootNode.appendChild(valueToXml(xml, values));
  const serialized = new XMLSerializer().serializeToString(xml);
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
${serialized}`;
};


/***/ }),

/***/ "./src/packager/sha256.js":
/*!********************************!*\
  !*** ./src/packager/sha256.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sha256 = async (arrayBuffer) => {
  // Use the browser's builtin SHA-256 if possible.
  // This API might not exist if we're not a secure context or in versions of Node that aren't even that old,
  // so we also have a pure JS fallback.
  if (typeof crypto === 'object' && crypto.subtle && crypto.subtle.digest) {
    const rawData = await crypto.subtle.digest('SHA-256', arrayBuffer);
    return Array.from(new Uint8Array(rawData)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // The checksum will be performed on the main thread and may take a while.
  const SHA256 = (await __webpack_require__.e(/*! import() | sha256 */ "sha256").then(__webpack_require__.t.bind(null, /*! sha.js/sha256 */ "./node_modules/sha.js/sha256.js", 7))).default;
  const hash = new SHA256();
  // new Uint8Array() is necessary to make this work in Node
  hash.update(new Uint8Array(arrayBuffer));
  return hash.digest('hex');
};

/* harmony default export */ __webpack_exports__["default"] = (sha256);


/***/ }),

/***/ "@fiahfy/icns":
/*!*******************************!*\
  !*** external "@fiahfy/icns" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__fiahfy_icns__;

/***/ }),

/***/ "@turbowarp/sbdl":
/*!**********************************!*\
  !*** external "@turbowarp/sbdl" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__turbowarp_sbdl__;

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cross_fetch__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "jszip":
/*!************************!*\
  !*** external "jszip" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jszip__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
});