(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse || !wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"kgclient","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 11:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 12:
/*!****************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/store/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 13));var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  state: {
    hasLogin: false,
    isUniverifyLogin: false,
    loginProvider: "",
    openid: null,
    testvuex: false,
    colorIndex: 0,
    colorList: ['#FF0000', '#00FF00', '#0000FF'],
    noMatchLeftWindow: true,
    active: 'componentPage',
    leftWinActive: '/pages/component/view/view',
    activeOpen: '',
    menu: [],
    univerifyErrorMsg: '',
    userInfo: null,
    weixinUserInfo: null },

  mutations: {
    login: function login(state, provider) {
      state.hasLogin = true;
      state.loginProvider = provider;
    },
    logout: function logout(state) {
      state.hasLogin = false;
      state.openid = null;
    },
    setOpenid: function setOpenid(state, openid) {
      state.openid = openid;
    },
    setTestTrue: function setTestTrue(state) {
      state.testvuex = true;
    },
    setTestFalse: function setTestFalse(state) {
      state.testvuex = false;
    },
    setColorIndex: function setColorIndex(state, index) {
      state.colorIndex = index;
    },
    setMatchLeftWindow: function setMatchLeftWindow(state, matchLeftWindow) {
      state.noMatchLeftWindow = !matchLeftWindow;
    },
    setActive: function setActive(state, tabPage) {
      state.active = tabPage;
    },
    setLeftWinActive: function setLeftWinActive(state, leftWinActive) {
      state.leftWinActive = leftWinActive;
    },
    setActiveOpen: function setActiveOpen(state, activeOpen) {
      state.activeOpen = activeOpen;
    },
    setMenu: function setMenu(state, menu) {
      state.menu = menu;
    },
    setUniverifyLogin: function setUniverifyLogin(state, payload) {
      typeof payload !== 'boolean' ? payload = !!payload : '';
      state.isUniverifyLogin = payload;
    },
    setUniverifyErrorMsg: function setUniverifyErrorMsg(state) {var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      state.univerifyErrorMsg = payload;
    },
    setUserInfo: function setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setWeixinUserInfo: function setWeixinUserInfo(state, payload) {
      state.weixinUserInfo = payload;
    } },


  getters: {
    currentColor: function currentColor(state) {
      return state.colorList[state.colorIndex];
    } },

  actions: {
    // lazy loading openid
    getUserOpenId: function () {var _getUserOpenId = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {var commit, state;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                commit = _ref.commit,
                state = _ref.state;_context.next = 3;return (

                  new Promise(function (resolve, reject) {
                    if (state.openid) {
                      resolve(state.openid);
                    } else {
                      uni.login({
                        success: function success(data) {
                          commit('login');
                          setTimeout(function () {//模拟异步请求服务器获取 openid
                            var openid = '123456789';
                            console.log('uni.request mock openid[' + openid + ']');
                            commit('setOpenid', openid);
                            resolve(openid);
                          }, 1000);
                        },
                        fail: function fail(err) {
                          console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err);
                          reject(err);
                        } });

                    }
                  }));case 3:return _context.abrupt("return", _context.sent);case 4:case "end":return _context.stop();}}}, _callee);}));function getUserOpenId(_x) {return _getUserOpenId.apply(this, arguments);}return getUserOpenId;}(),

    getPhoneNumber: function getPhoneNumber(_ref2,

    univerifyInfo) {var commit = _ref2.commit;
      return new Promise(function (resolve, reject) {
        uni.request({
          url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/univerify-login',
          method: 'POST',
          data: univerifyInfo,
          success: function success(res) {
            var data = res.data;
            if (data.success) {
              resolve(data.phoneNumber);
            } else {
              reject(res);
            }

          },
          fail: function fail(err) {
            reject(res);
          } });

      });
    } } });var _default =



store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 13:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 14);

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 15);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 15:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 16:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(item =>String.fromCharCode(item)).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 168:
/*!*******************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/components/uni-popup/popup.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _message = _interopRequireDefault(__webpack_require__(/*! ./message.js */ 169));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// 定义 type 类型:弹出类型：top/bottom/center
var config = {
  // 顶部弹出
  top: 'top',
  // 底部弹出
  bottom: 'bottom',
  // 居中弹出
  center: 'center',
  // 消息提示
  message: 'top',
  // 对话框
  dialog: 'center',
  // 分享
  share: 'bottom' };var _default =


{
  data: function data() {
    return {
      config: config };

  },
  mixins: [_message.default] };exports.default = _default;

/***/ }),

/***/ 169:
/*!*********************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/components/uni-popup/message.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  created: function created() {
    if (this.type === 'message') {
      // 不显示遮罩
      this.maskShow = false;
      // 获取子组件对象
      this.childrenMsg = null;
    }
  },
  methods: {
    customOpen: function customOpen() {
      if (this.childrenMsg) {
        this.childrenMsg.open();
      }
    },
    customClose: function customClose() {
      if (this.childrenMsg) {
        this.childrenMsg.close();
      }
    } } };exports.default = _default;

/***/ }),

/***/ 17:
/*!***********************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/node_modules/js-base64/base64.mjs ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object.defineProperty(exports, "__esModule", { value: true });exports.Base64 = exports.extendBuiltins = exports.extendUint8Array = exports.extendString = exports.toUint8Array = exports.fromUint8Array = exports.isValid = exports.btou = exports.encodeURL = exports.encodeURI = exports.utob = exports.encode = exports.toBase64 = exports.decode = exports.fromBase64 = exports.btoaPolyfill = exports.btoa = exports.atobPolyfill = exports.atob = exports.VERSION = exports.version = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *  base64.ts
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *  Licensed under the BSD 3-Clause License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *    http://opensource.org/licenses/BSD-3-Clause
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *  References:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *    http://en.wikipedia.org/wiki/Base64
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @author Dan Kogai (https://github.com/dankogai)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */
var version = '3.6.0';
/**
                        * @deprecated use lowercase `version`.
                        */exports.version = version;
var VERSION = version;exports.VERSION = VERSION;
var _hasatob = typeof atob === 'function';
var _hasbtoa = typeof btoa === 'function';
var _hasBuffer = typeof Buffer === 'function';
var _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
var _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
var b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64chs = _toConsumableArray(b64ch);
var b64tab = function (a) {
  var tab = {};
  a.forEach(function (c, i) {return tab[c] = i;});
  return tab;
}(b64chs);
var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
var _fromCC = String.fromCharCode.bind(String);
var _U8Afrom = typeof Uint8Array.from === 'function' ?
Uint8Array.from.bind(Uint8Array) :
function (it) {var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x) {return x;};return new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));};
var _mkUriSafe = function _mkUriSafe(src) {return src.
  replace(/[+\/]/g, function (m0) {return m0 == '+' ? '-' : '_';}).
  replace(/=+$/m, '');};
var _tidyB64 = function _tidyB64(s) {return s.replace(/[^A-Za-z0-9\+\/]/g, '');};
/**
                                                                                   * polyfill version of `btoa`
                                                                                   */
var btoaPolyfill = function btoaPolyfill(bin) {
  // console.log('polyfilled');
  var u32,c0,c1,c2,asc = '';
  var pad = bin.length % 3;
  for (var i = 0; i < bin.length;) {
    if ((c0 = bin.charCodeAt(i++)) > 255 ||
    (c1 = bin.charCodeAt(i++)) > 255 ||
    (c2 = bin.charCodeAt(i++)) > 255)
    throw new TypeError('invalid character found');
    u32 = c0 << 16 | c1 << 8 | c2;
    asc += b64chs[u32 >> 18 & 63] +
    b64chs[u32 >> 12 & 63] +
    b64chs[u32 >> 6 & 63] +
    b64chs[u32 & 63];
  }
  return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
    * does what `window.btoa` of web browsers do.
    * @param {String} bin binary string
    * @returns {string} Base64-encoded string
    */exports.btoaPolyfill = btoaPolyfill;
var _btoa = _hasbtoa ? function (bin) {return btoa(bin);} :
_hasBuffer ? function (bin) {return Buffer.from(bin, 'binary').toString('base64');} :
btoaPolyfill;exports.btoa = _btoa;
var _fromUint8Array = _hasBuffer ?
function (u8a) {return Buffer.from(u8a).toString('base64');} :
function (u8a) {
  // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
  var maxargs = 0x1000;
  var strs = [];
  for (var i = 0, l = u8a.length; i < l; i += maxargs) {
    strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
  }
  return _btoa(strs.join(''));
};
/**
    * converts a Uint8Array to a Base64 string.
    * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
    * @returns {string} Base64 string
    */
var fromUint8Array = function fromUint8Array(u8a) {var urlsafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;return urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);};
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
exports.fromUint8Array = fromUint8Array;var cb_utob = function cb_utob(c) {
  if (c.length < 2) {
    var cc = c.charCodeAt(0);
    return cc < 0x80 ? c :
    cc < 0x800 ? _fromCC(0xc0 | cc >>> 6) +
    _fromCC(0x80 | cc & 0x3f) :
    _fromCC(0xe0 | cc >>> 12 & 0x0f) +
    _fromCC(0x80 | cc >>> 6 & 0x3f) +
    _fromCC(0x80 | cc & 0x3f);
  } else
  {
    var cc = 0x10000 +
    (c.charCodeAt(0) - 0xD800) * 0x400 + (
    c.charCodeAt(1) - 0xDC00);
    return _fromCC(0xf0 | cc >>> 18 & 0x07) +
    _fromCC(0x80 | cc >>> 12 & 0x3f) +
    _fromCC(0x80 | cc >>> 6 & 0x3f) +
    _fromCC(0x80 | cc & 0x3f);
  }
};
var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
                                                                * @deprecated should have been internal use only.
                                                                * @param {string} src UTF-8 string
                                                                * @returns {string} UTF-16 string
                                                                */
var utob = function utob(u) {return u.replace(re_utob, cb_utob);};
//
exports.utob = utob;var _encode = _hasBuffer ?
function (s) {return Buffer.from(s, 'utf8').toString('base64');} :
_TE ?
function (s) {return _fromUint8Array(_TE.encode(s));} :
function (s) {return _btoa(utob(s));};
/**
                                        * converts a UTF-8-encoded string to a Base64 string.
                                        * @param {boolean} [urlsafe] if `true` make the result URL-safe
                                        * @returns {string} Base64 string
                                        */
var encode = function encode(src) {var urlsafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;return urlsafe ?
  _mkUriSafe(_encode(src)) :
  _encode(src);};
/**
                   * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
                   * @returns {string} Base64 string
                   */exports.encode = exports.toBase64 = encode;
var encodeURI = function encodeURI(src) {return encode(src, true);};
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
exports.encodeURL = exports.encodeURI = encodeURI;var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
var cb_btou = function cb_btou(cccc) {
  switch (cccc.length) {
    case 4:
      var cp = (0x07 & cccc.charCodeAt(0)) << 18 |
      (0x3f & cccc.charCodeAt(1)) << 12 |
      (0x3f & cccc.charCodeAt(2)) << 6 |
      0x3f & cccc.charCodeAt(3),offset = cp - 0x10000;
      return _fromCC((offset >>> 10) + 0xD800) +
      _fromCC((offset & 0x3FF) + 0xDC00);
    case 3:
      return _fromCC((0x0f & cccc.charCodeAt(0)) << 12 |
      (0x3f & cccc.charCodeAt(1)) << 6 |
      0x3f & cccc.charCodeAt(2));
    default:
      return _fromCC((0x1f & cccc.charCodeAt(0)) << 6 |
      0x3f & cccc.charCodeAt(1));}

};
/**
    * @deprecated should have been internal use only.
    * @param {string} src UTF-16 string
    * @returns {string} UTF-8 string
    */
var btou = function btou(b) {return b.replace(re_btou, cb_btou);};
/**
                                                                    * polyfill version of `atob`
                                                                    */exports.btou = btou;
var atobPolyfill = function atobPolyfill(asc) {
  // console.log('polyfilled');
  asc = asc.replace(/\s+/g, '');
  if (!b64re.test(asc))
  throw new TypeError('malformed base64.');
  asc += '=='.slice(2 - (asc.length & 3));
  var u24,bin = '',r1,r2;
  for (var i = 0; i < asc.length;) {
    u24 = b64tab[asc.charAt(i++)] << 18 |
    b64tab[asc.charAt(i++)] << 12 |
    (r1 = b64tab[asc.charAt(i++)]) << 6 | (
    r2 = b64tab[asc.charAt(i++)]);
    bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) :
    r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) :
    _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
  }
  return bin;
};
/**
    * does what `window.atob` of web browsers do.
    * @param {String} asc Base64-encoded string
    * @returns {string} binary string
    */exports.atobPolyfill = atobPolyfill;
var _atob = _hasatob ? function (asc) {return atob(_tidyB64(asc));} :
_hasBuffer ? function (asc) {return Buffer.from(asc, 'base64').toString('binary');} :
atobPolyfill;
//
exports.atob = _atob;var _toUint8Array = _hasBuffer ?
function (a) {return _U8Afrom(Buffer.from(a, 'base64'));} :
function (a) {return _U8Afrom(_atob(a), function (c) {return c.charCodeAt(0);});};
/**
                                                                                    * converts a Base64 string to a Uint8Array.
                                                                                    */
var toUint8Array = function toUint8Array(a) {return _toUint8Array(_unURI(a));};
//
exports.toUint8Array = toUint8Array;var _decode = _hasBuffer ?
function (a) {return Buffer.from(a, 'base64').toString('utf8');} :
_TD ?
function (a) {return _TD.decode(_toUint8Array(a));} :
function (a) {return btou(_atob(a));};
var _unURI = function _unURI(a) {return _tidyB64(a.replace(/[-_]/g, function (m0) {return m0 == '-' ? '+' : '/';}));};
/**
                                                                                                                        * converts a Base64 string to a UTF-8 string.
                                                                                                                        * @param {String} src Base64 string.  Both normal and URL-safe are supported
                                                                                                                        * @returns {string} UTF-8 string
                                                                                                                        */
var decode = function decode(src) {return _decode(_unURI(src));};
/**
                                                                   * check if a value is a valid Base64 string
                                                                   * @param {String} src a value to check
                                                                    */exports.decode = exports.fromBase64 = decode;
var isValid = function isValid(src) {
  if (typeof src !== 'string')
  return false;
  var s = src.replace(/\s+/g, '').replace(/=+$/, '');
  return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
exports.isValid = isValid;var _noEnum = function _noEnum(v) {
  return {
    value: v, enumerable: false, writable: true, configurable: true };

};
/**
    * extend String.prototype with relevant methods
    */
var extendString = function extendString() {
  var _add = function _add(name, body) {return Object.defineProperty(String.prototype, name, _noEnum(body));};
  _add('fromBase64', function () {return decode(this);});
  _add('toBase64', function (urlsafe) {return encode(this, urlsafe);});
  _add('toBase64URI', function () {return encode(this, true);});
  _add('toBase64URL', function () {return encode(this, true);});
  _add('toUint8Array', function () {return toUint8Array(this);});
};
/**
    * extend Uint8Array.prototype with relevant methods
    */exports.extendString = extendString;
var extendUint8Array = function extendUint8Array() {
  var _add = function _add(name, body) {return Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));};
  _add('toBase64', function (urlsafe) {return fromUint8Array(this, urlsafe);});
  _add('toBase64URI', function () {return fromUint8Array(this, true);});
  _add('toBase64URL', function () {return fromUint8Array(this, true);});
};
/**
    * extend Builtin prototypes with relevant methods
    */exports.extendUint8Array = extendUint8Array;
var extendBuiltins = function extendBuiltins() {
  extendString();
  extendUint8Array();
};exports.extendBuiltins = extendBuiltins;
var gBase64 = {
  version: version,
  VERSION: VERSION,
  atob: _atob,
  atobPolyfill: atobPolyfill,
  btoa: _btoa,
  btoaPolyfill: btoaPolyfill,
  fromBase64: decode,
  toBase64: encode,
  encode: encode,
  encodeURI: encodeURI,
  encodeURL: encodeURI,
  utob: utob,
  btou: btou,
  decode: decode,
  isValid: isValid,
  fromUint8Array: fromUint8Array,
  toUint8Array: toUint8Array,
  extendString: extendString,
  extendUint8Array: extendUint8Array,
  extendBuiltins: extendBuiltins };

// makecjs:CUT //
exports.Base64 = gBase64;

/***/ }),

/***/ 177:
/*!**********************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/components/uni-forms/validate.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}
var pattern = {
  email: /^\S+?@\S+?\.\S+?$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i') };


var FORMAT_MAPPING = {
  "int": 'number',
  "bool": 'boolean',
  "double": 'number',
  "long": 'number',
  "password": 'string' };


function formatMessage(args, resources) {
  var defaultMessage = ['label'];
  defaultMessage.forEach(function (item) {
    if (args[item] === undefined) {
      args[item] = '';
    }
  });

  var str = resources;
  for (var key in args) {
    var reg = new RegExp('{' + key + '}');
    str = str.replace(reg, args[key]);
  }
  return str;
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (typeof value === 'string' && !value) {
    return true;
  }

  if (Array.isArray(value) && !value.length) {
    return true;
  }

  if (type === 'object' && !Object.keys(value).length) {
    return true;
  }

  return false;
}

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  string: function string(value) {
    return typeof value === 'string';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  "boolean": function boolean(value) {
    return typeof value === 'boolean';
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  date: function date(value) {
    var v;
    if (value instanceof Date) {
      v = value;
    } else {
      v = new Date(value);
    }
    return typeof v.getTime === 'function' && typeof v.getMonth === 'function' && typeof v.getYear === 'function' && !isNaN(v.getTime());
  },
  timestamp: function timestamp(value) {
    if (!this.integer(value) || Math.abs(value).toString().length > 16) {
      return false;
    }

    return this.date(value);
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  pattern: function pattern(reg, value) {
    try {
      return new RegExp(reg).test(value);
    } catch (e) {
      return false;
    }
  },
  method: function method(value) {
    return typeof value === 'function';
  } };var


RuleValidator = /*#__PURE__*/function () {

  function RuleValidator(message) {_classCallCheck(this, RuleValidator);
    this._message = message;
  }_createClass(RuleValidator, [{ key: "validateRule", value: function () {var _validateRule = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(

      key, value, data, allData) {var result, rules, hasRequired, message, i, rule, vt, now, resultExpr;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                result = null;

                rules = key.rules;

                hasRequired = rules.findIndex(function (item) {
                  return item.required;
                });if (!(
                hasRequired < 0)) {_context.next = 8;break;}if (!(
                value === null || value === undefined)) {_context.next = 6;break;}return _context.abrupt("return",
                result);case 6:if (!(

                typeof value === 'string' && !value.length)) {_context.next = 8;break;}return _context.abrupt("return",
                result);case 8:



                message = this._message;if (!(

                rules === undefined)) {_context.next = 11;break;}return _context.abrupt("return",
                message['default']);case 11:


                i = 0;case 12:if (!(i < rules.length)) {_context.next = 35;break;}
                rule = rules[i];
                vt = this._getValidateType(rule);

                if (key.label !== undefined) {
                  Object.assign(rule, {
                    label: key.label });

                }if (!

                RuleValidatorHelper[vt]) {_context.next = 20;break;}
                result = RuleValidatorHelper[vt](rule, value, message);if (!(
                result != null)) {_context.next = 20;break;}return _context.abrupt("break", 35);case 20:if (!




                rule.validateExpr) {_context.next = 26;break;}
                now = Date.now();
                resultExpr = rule.validateExpr(value, allData, now);if (!(
                resultExpr === false)) {_context.next = 26;break;}
                result = this._getMessage(rule, rule.errorMessage || this._message['default']);return _context.abrupt("break", 35);case 26:if (!




                rule.validateFunction) {_context.next = 32;break;}_context.next = 29;return (
                  this.validateFunction(rule, value, data, allData, vt));case 29:result = _context.sent;if (!(
                result !== null)) {_context.next = 32;break;}return _context.abrupt("break", 35);case 32:i++;_context.next = 12;break;case 35:return _context.abrupt("return",





                result);case 36:case "end":return _context.stop();}}}, _callee, this);}));function validateRule(_x, _x2, _x3, _x4) {return _validateRule.apply(this, arguments);}return validateRule;}() }, { key: "validateFunction", value: function () {var _validateFunction = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(


      rule, value, data, allData, vt) {var result, callbackMessage, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                result = null;_context2.prev = 1;

                callbackMessage = null;_context2.next = 5;return (
                  rule.validateFunction(rule, value, allData || data, function (message) {
                    callbackMessage = message;
                  }));case 5:res = _context2.sent;
                if (callbackMessage || typeof res === 'string' && res || res === false) {
                  result = this._getMessage(rule, callbackMessage || res, vt);
                }_context2.next = 12;break;case 9:_context2.prev = 9;_context2.t0 = _context2["catch"](1);

                result = this._getMessage(rule, _context2.t0.message, vt);case 12:return _context2.abrupt("return",

                result);case 13:case "end":return _context2.stop();}}}, _callee2, this, [[1, 9]]);}));function validateFunction(_x5, _x6, _x7, _x8, _x9) {return _validateFunction.apply(this, arguments);}return validateFunction;}() }, { key: "_getMessage", value: function _getMessage(


    rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message['default']);
    } }, { key: "_getValidateType", value: function _getValidateType(

    rule) {
      // TODO
      var result = '';
      if (rule.required) {
        result = 'required';
      } else if (rule.format) {
        result = 'format';
      } else if (rule.range) {
        result = 'range';
      } else if (rule.maximum || rule.minimum) {
        result = 'rangeNumber';
      } else if (rule.maxLength || rule.minLength) {
        result = 'rangeLength';
      } else if (rule.pattern) {
        result = 'pattern';
      }
      return result;
    } }]);return RuleValidator;}();


var RuleValidatorHelper = {
  required: function required(rule, value, message) {
    if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
      return formatMessage(rule, rule.errorMessage || message.required);
    }

    return null;
  },

  range: function range(rule, value, message) {var
    range = rule.range,errorMessage = rule.errorMessage;

    var list = new Array(range.length);
    for (var i = 0; i < range.length; i++) {
      var item = range[i];
      if (types.object(item) && item.value !== undefined) {
        list[i] = item.value;
      } else {
        list[i] = item;
      }
    }

    var result = false;
    if (Array.isArray(value)) {
      result = new Set(value.concat(list)).size === list.length;
    } else {
      if (list.indexOf(value) > -1) {
        result = true;
      }
    }

    if (!result) {
      return formatMessage(rule, errorMessage || message['enum']);
    }

    return null;
  },

  rangeNumber: function rangeNumber(rule, value, message) {
    if (!types.number(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }var

    minimum = rule.minimum,maximum = rule.maximum,exclusiveMinimum = rule.exclusiveMinimum,exclusiveMaximum = rule.exclusiveMaximum;
    var min = exclusiveMinimum ? value <= minimum : value < minimum;
    var max = exclusiveMaximum ? value >= maximum : value > maximum;

    if (minimum !== undefined && min) {
      return formatMessage(rule, rule.errorMessage || message['number'].min);
    } else if (maximum !== undefined && max) {
      return formatMessage(rule, rule.errorMessage || message['number'].max);
    } else if (minimum !== undefined && maximum !== undefined && (min || max)) {
      return formatMessage(rule, rule.errorMessage || message['number'].range);
    }

    return null;
  },

  rangeLength: function rangeLength(rule, value, message) {
    if (!types.string(value) && !types.array(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }

    var min = rule.minLength;
    var max = rule.maxLength;
    var val = value.length;

    if (min !== undefined && val < min) {
      return formatMessage(rule, rule.errorMessage || message['length'].min);
    } else if (max !== undefined && val > max) {
      return formatMessage(rule, rule.errorMessage || message['length'].max);
    } else if (min !== undefined && max !== undefined && (val < min || val > max)) {
      return formatMessage(rule, rule.errorMessage || message['length'].range);
    }

    return null;
  },

  pattern: function pattern(rule, value, message) {
    if (!types['pattern'](rule.pattern, value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }

    return null;
  },

  format: function format(rule, value, message) {
    var customTypes = Object.keys(types);
    var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format;

    if (customTypes.indexOf(format) > -1) {
      if (!types[format](value)) {
        return formatMessage(rule, rule.errorMessage || message.types[format]);
      }
    }

    return null;
  } };var


SchemaValidator = /*#__PURE__*/function (_RuleValidator) {_inherits(SchemaValidator, _RuleValidator);var _super = _createSuper(SchemaValidator);

  function SchemaValidator(schema, options) {var _this;_classCallCheck(this, SchemaValidator);
    _this = _super.call(this, SchemaValidator.message);

    _this._schema = schema;
    _this._options = options || null;return _this;
  }_createClass(SchemaValidator, [{ key: "updateSchema", value: function updateSchema(

    schema) {
      this._schema = schema;
    } }, { key: "validate", value: function () {var _validate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(

      data, allData) {var result;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                result = this._checkFieldInSchema(data);if (
                result) {_context3.next = 5;break;}_context3.next = 4;return (
                  this.invokeValidate(data, false, allData));case 4:result = _context3.sent;case 5:return _context3.abrupt("return",

                result.length ? result[0] : null);case 6:case "end":return _context3.stop();}}}, _callee3, this);}));function validate(_x10, _x11) {return _validate.apply(this, arguments);}return validate;}() }, { key: "validateAll", value: function () {var _validateAll = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(


      data, allData) {var result;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                result = this._checkFieldInSchema(data);if (
                result) {_context4.next = 5;break;}_context4.next = 4;return (
                  this.invokeValidate(data, true, allData));case 4:result = _context4.sent;case 5:return _context4.abrupt("return",

                result);case 6:case "end":return _context4.stop();}}}, _callee4, this);}));function validateAll(_x12, _x13) {return _validateAll.apply(this, arguments);}return validateAll;}() }, { key: "validateUpdate", value: function () {var _validateUpdate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(


      data, allData) {var result;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                result = this._checkFieldInSchema(data);if (
                result) {_context5.next = 5;break;}_context5.next = 4;return (
                  this.invokeValidateUpdate(data, false, allData));case 4:result = _context5.sent;case 5:return _context5.abrupt("return",

                result.length ? result[0] : null);case 6:case "end":return _context5.stop();}}}, _callee5, this);}));function validateUpdate(_x14, _x15) {return _validateUpdate.apply(this, arguments);}return validateUpdate;}() }, { key: "invokeValidate", value: function () {var _invokeValidate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(


      data, all, allData) {var result, schema, key, value, errorMessage;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                result = [];
                schema = this._schema;_context6.t0 = _regenerator.default.keys(
                schema);case 3:if ((_context6.t1 = _context6.t0()).done) {_context6.next = 15;break;}key = _context6.t1.value;
                value = schema[key];_context6.next = 8;return (
                  this.validateRule(value, data[key], data, allData));case 8:errorMessage = _context6.sent;if (!(
                errorMessage != null)) {_context6.next = 13;break;}
                result.push({
                  key: key,
                  errorMessage: errorMessage });if (

                all) {_context6.next = 13;break;}return _context6.abrupt("break", 15);case 13:_context6.next = 3;break;case 15:return _context6.abrupt("return",


                result);case 16:case "end":return _context6.stop();}}}, _callee6, this);}));function invokeValidate(_x16, _x17, _x18) {return _invokeValidate.apply(this, arguments);}return invokeValidate;}() }, { key: "invokeValidateUpdate", value: function () {var _invokeValidateUpdate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(


      data, all, allData) {var result, key, errorMessage;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                result = [];_context7.t0 = _regenerator.default.keys(
                data);case 2:if ((_context7.t1 = _context7.t0()).done) {_context7.next = 13;break;}key = _context7.t1.value;_context7.next = 6;return (
                  this.validateRule(this._schema[key], data[key], data, allData));case 6:errorMessage = _context7.sent;if (!(
                errorMessage != null)) {_context7.next = 11;break;}
                result.push({
                  key: key,
                  errorMessage: errorMessage });if (

                all) {_context7.next = 11;break;}return _context7.abrupt("break", 13);case 11:_context7.next = 2;break;case 13:return _context7.abrupt("return",


                result);case 14:case "end":return _context7.stop();}}}, _callee7, this);}));function invokeValidateUpdate(_x19, _x20, _x21) {return _invokeValidateUpdate.apply(this, arguments);}return invokeValidateUpdate;}() }, { key: "_checkFieldInSchema", value: function _checkFieldInSchema(


    data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return '';
      }
      return [{
        key: 'invalid',
        errorMessage: SchemaValidator.message['defaultInvalid'] }];

    } }]);return SchemaValidator;}(RuleValidator);


function Message() {
  return {
    default: '验证错误',
    defaultInvalid: '字段超出范围',
    required: '{label}必填',
    'enum': '{label}超出范围',
    whitespace: '{label}不能为空',
    date: {
      format: '{label}日期{value}格式无效',
      parse: '{label}日期无法解析,{value}无效',
      invalid: '{label}日期{value}无效' },

    types: {
      string: '{label}类型无效',
      array: '{label}类型无效',
      object: '{label}类型无效',
      number: '{label}类型无效',
      date: '{label}类型无效',
      boolean: '{label}类型无效',
      integer: '{label}类型无效',
      float: '{label}类型无效',
      regexp: '{label}无效',
      email: '{label}类型无效',
      url: '{label}类型无效' },

    length: {
      min: '{label}长度不能少于{minLength}',
      max: '{label}长度不能超过{maxLength}',
      range: '{label}必须介于{minLength}和{maxLength}之间' },

    number: {
      min: '{label}不能小于{minimum}',
      max: '{label}不能大于{maximum}',
      range: '{label}必须介于{minimum}and{maximum}之间' },

    pattern: {
      mismatch: '{label}格式不匹配' } };


}


SchemaValidator.message = new Message();var _default =

SchemaValidator;exports.default = _default;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/utils/request.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.baseUrl = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}var baseUrl =  true ? 'http://localhost:7001' : undefined;exports.baseUrl = baseUrl;
var request = function request(_ref)
{var _ref$url = _ref.url,url = _ref$url === void 0 ? '' : _ref$url,_ref$data = _ref.data,data = _ref$data === void 0 ? {} : _ref$data,_ref$method = _ref.method,method = _ref$method === void 0 ? 'GET' : _ref$method,_ref$header = _ref.header,header = _ref$header === void 0 ? {} : _ref$header;
  return new Promise(function (resolve, reject) {
    uni.request({
      method: method,
      url: baseUrl + url,
      data: data,
      header: header,
      dataType: 'json' }).
    then(function (response) {
      setTimeout(function () {
        uni.hideLoading();
      }, 200);var _response = _slicedToArray(
      response, 2),error = _response[0],res = _response[1];
      resolve(res.data);
    }).catch(function (error) {var _error = _slicedToArray(
      error, 2),err = _error[0],res = _error[1];
      reject(err);
    });
  });
};var _default =
request;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 192:
/*!******************************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/components/uni-data-checkbox/clientdb.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}
var events = {
  load: 'load',
  error: 'error' };

var pageMode = {
  add: 'add',
  replace: 'replace' };


var attrs = [
'pageCurrent',
'pageSize',
'collection',
'action',
'field',
'getcount',
'orderby',
'where'];var _default =


{
  data: function data() {
    return {
      loading: false,
      listData: this.getone ? {} : [],
      paginationInternal: {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0 },

      errorMessage: '' };

  },
  created: function created() {var _this = this;
    var db = null;
    var dbCmd = null;

    if (this.collection) {
      this.db = uniCloud.database();
      this.dbCmd = this.db.command;
    }

    this._isEnded = false;

    this.$watch(function () {
      var al = [];
      attrs.forEach(function (key) {
        al.push(_this[key]);
      });
      return al;
    }, function (newValue, oldValue) {
      _this.paginationInternal.pageSize = _this.pageSize;

      var needReset = false;
      for (var i = 2; i < newValue.length; i++) {
        if (newValue[i] != oldValue[i]) {
          needReset = true;
          break;
        }
      }
      if (needReset) {
        _this.clear();
        _this.reset();
      }
      if (newValue[0] != oldValue[0]) {
        _this.paginationInternal.current = _this.pageCurrent;
      }

      _this._execLoadData();
    });









































    // if (!this.manual) {
    // 	this.loadData()
    // }
  },














  methods: {
    loadData: function loadData(args1, args2) {
      var callback = null;
      if (typeof args1 === 'object') {
        if (args1.clear) {
          this.clear();
          this.reset();
        }
        if (args1.current !== undefined) {
          this.paginationInternal.current = args1.current;
        }
        if (typeof args2 === 'function') {
          callback = args2;
        }
      } else if (typeof args1 === 'function') {
        callback = args1;
      }

      this._execLoadData(callback);
    },
    loadMore: function loadMore() {
      if (this._isEnded) {
        return;
      }
      this._execLoadData();
    },
    refresh: function refresh() {
      this.clear();
      this._execLoadData();
    },
    clear: function clear() {
      this._isEnded = false;
      this.listData = [];
    },
    reset: function reset() {
      this.paginationInternal.current = 1;
    },
    remove: function remove(id)




    {var _this2 = this;var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},action = _ref.action,callback = _ref.callback,confirmTitle = _ref.confirmTitle,confirmContent = _ref.confirmContent;
      if (!id || !id.length) {
        return;
      }
      uni.showModal({
        title: confirmTitle || '提示',
        content: confirmContent || '是否删除该数据',
        showCancel: true,
        success: function success(res) {
          if (!res.confirm) {
            return;
          }
          _this2._execRemove(id, action, callback);
        } });

    },
    _execLoadData: function _execLoadData(callback) {var _this3 = this;
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.errorMessage = '';

      this._getExec().then(function (res) {
        _this3.loading = false;var _res$result =



        res.result,data = _res$result.data,count = _res$result.count;
        _this3._isEnded = data.length < _this3.pageSize;

        callback && callback(data, _this3._isEnded);
        _this3._dispatchEvent(events.load, data);

        if (_this3.getone) {
          _this3.listData = data.length ? data[0] : undefined;
        } else if (_this3.pageData === pageMode.add) {var _this3$listData;
          (_this3$listData = _this3.listData).push.apply(_this3$listData, _toConsumableArray(data));
          if (_this3.listData.length) {
            _this3.paginationInternal.current++;
          }
        } else if (_this3.pageData === pageMode.replace) {
          _this3.listData = data;
          _this3.paginationInternal.count = count;
        }







      }).catch(function (err) {
        _this3.loading = false;
        _this3.errorMessage = err;
        callback && callback();
        _this3.$emit(events.error, err);
      });
    },
    _getExec: function _getExec() {
      var exec = this.db;
      if (this.action) {
        exec = exec.action(this.action);
      }

      exec = exec.collection(this.collection);

      if (!(!this.where || !Object.keys(this.where).length)) {
        exec = exec.where(this.where);
      }
      if (this.field) {
        exec = exec.field(this.field);
      }
      if (this.orderby) {
        exec = exec.orderBy(this.orderby);
      }var _this$paginationInter =




      this.paginationInternal,current = _this$paginationInter.current,size = _this$paginationInter.size;
      exec = exec.skip(size * (current - 1)).limit(size).get({
        getCount: this.getcount });


      return exec;
    },
    _execRemove: function _execRemove(id, action, callback) {var _this4 = this;
      if (!this.collection || !id) {
        return;
      }

      var ids = Array.isArray(id) ? id : [id];
      if (!ids.length) {
        return;
      }

      uni.showLoading({
        mask: true });


      var exec = this.db;
      if (action) {
        exec = exec.action(action);
      }

      exec.collection(this.collection).where({
        _id: dbCmd.in(ids) }).
      remove().then(function (res) {
        callback && callback(res.result);
        if (_this4.pageData === pageMode.replace) {
          _this4.refresh();
        } else {
          _this4.removeData(ids);
        }
      }).catch(function (err) {
        uni.showModal({
          content: err.message,
          showCancel: false });

      }).finally(function () {
        uni.hideLoading();
      });
    },
    removeData: function removeData(ids) {
      var il = ids.slice(0);
      var dl = this.listData;
      for (var i = dl.length - 1; i >= 0; i--) {
        var index = il.indexOf(dl[i]._id);
        if (index >= 0) {
          dl.splice(i, 1);
          il.splice(index, 1);
        }
      }
    },
    _dispatchEvent: function _dispatchEvent(type, data) {
      if (this._changeDataFunction) {
        this._changeDataFunction(data, this._isEnded);
      } else {
        this.$emit(type, data, this._isEnded);
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 193)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 193:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 13));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e26) {throw _e26;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e27) {didErr = true;err = _e27;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var s = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),s = {},r = s.lib = {},o = r.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, n) {e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,s = this.sigBytes,r = e.sigBytes;if (this.clamp(), s % 4) for (var o = 0; o < r; o++) {var i = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[s + o >>> 2] |= i << 24 - (s + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[s + o >>> 2] = n[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, s = [], r = function r(t) {t = t;var n = 987654321,s = 4294967295;return function () {var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (n || e.random()));n = 987654071 * a(), s.push(4294967296 * a() | 0);}return new i.init(s, t);} }),a = s.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push((o >>> 4).toString(16)), s.push((15 & o).toString(16));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s += 2) {n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push(String.fromCharCode(o));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s++) {n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;}return new i.init(n, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,s = n.words,r = n.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(s, h);}var l = s.splice(0, c);n.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),d = (r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new d.HMAC.init(e, n).finalize(t);};} }), s.algo = {});return s;}(Math), n);}),r = (n(function (e, t) {var n;e.exports = (n = s, function (e) {var t = n,s = t.lib,r = s.WordArray,o = s.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var s = t + n,r = e[s];e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],v = e[t + 9],S = e[t + 10],k = e[t + 11],T = e[t + 12],P = e[t + 13],I = e[t + 14],A = e[t + 15],E = o[0],b = o[1],O = o[2],U = o[3];E = u(E, b, O, U, i, 7, a[0]), U = u(U, E, b, O, c, 12, a[1]), O = u(O, U, E, b, f, 17, a[2]), b = u(b, O, U, E, p, 22, a[3]), E = u(E, b, O, U, g, 7, a[4]), U = u(U, E, b, O, m, 12, a[5]), O = u(O, U, E, b, y, 17, a[6]), b = u(b, O, U, E, _, 22, a[7]), E = u(E, b, O, U, w, 7, a[8]), U = u(U, E, b, O, v, 12, a[9]), O = u(O, U, E, b, S, 17, a[10]), b = u(b, O, U, E, k, 22, a[11]), E = u(E, b, O, U, T, 7, a[12]), U = u(U, E, b, O, P, 12, a[13]), O = u(O, U, E, b, I, 17, a[14]), E = h(E, b = u(b, O, U, E, A, 22, a[15]), O, U, c, 5, a[16]), U = h(U, E, b, O, y, 9, a[17]), O = h(O, U, E, b, k, 14, a[18]), b = h(b, O, U, E, i, 20, a[19]), E = h(E, b, O, U, m, 5, a[20]), U = h(U, E, b, O, S, 9, a[21]), O = h(O, U, E, b, A, 14, a[22]), b = h(b, O, U, E, g, 20, a[23]), E = h(E, b, O, U, v, 5, a[24]), U = h(U, E, b, O, I, 9, a[25]), O = h(O, U, E, b, p, 14, a[26]), b = h(b, O, U, E, w, 20, a[27]), E = h(E, b, O, U, P, 5, a[28]), U = h(U, E, b, O, f, 9, a[29]), O = h(O, U, E, b, _, 14, a[30]), E = l(E, b = h(b, O, U, E, T, 20, a[31]), O, U, m, 4, a[32]), U = l(U, E, b, O, w, 11, a[33]), O = l(O, U, E, b, k, 16, a[34]), b = l(b, O, U, E, I, 23, a[35]), E = l(E, b, O, U, c, 4, a[36]), U = l(U, E, b, O, g, 11, a[37]), O = l(O, U, E, b, _, 16, a[38]), b = l(b, O, U, E, S, 23, a[39]), E = l(E, b, O, U, P, 4, a[40]), U = l(U, E, b, O, i, 11, a[41]), O = l(O, U, E, b, p, 16, a[42]), b = l(b, O, U, E, y, 23, a[43]), E = l(E, b, O, U, v, 4, a[44]), U = l(U, E, b, O, T, 11, a[45]), O = l(O, U, E, b, A, 16, a[46]), E = d(E, b = l(b, O, U, E, f, 23, a[47]), O, U, i, 6, a[48]), U = d(U, E, b, O, _, 10, a[49]), O = d(O, U, E, b, I, 15, a[50]), b = d(b, O, U, E, m, 21, a[51]), E = d(E, b, O, U, T, 6, a[52]), U = d(U, E, b, O, p, 10, a[53]), O = d(O, U, E, b, S, 15, a[54]), b = d(b, O, U, E, c, 21, a[55]), E = d(E, b, O, U, w, 6, a[56]), U = d(U, E, b, O, A, 10, a[57]), O = d(O, U, E, b, y, 15, a[58]), b = d(b, O, U, E, P, 21, a[59]), E = d(E, b, O, U, g, 6, a[60]), U = d(U, E, b, O, k, 10, a[61]), O = d(O, U, E, b, f, 15, a[62]), b = d(b, O, U, E, v, 21, a[63]), o[0] = o[0] + E | 0, o[1] = o[1] + b | 0, o[2] = o[2] + O | 0, o[3] = o[3] + U | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,s = 8 * this._nDataBytes,r = 8 * t.sigBytes;n[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(s / 4294967296),i = s;n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, s, r, o, i) {var a = e + (t & n | ~t & s) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, n, s, r, o, i) {var a = e + (t & s | n & ~s) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, n, s, r, o, i) {var a = e + (t ^ n ^ s) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, n, s, r, o, i) {var a = e + (n ^ (t | ~s)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, r, o;e.exports = (r = (n = s).lib.Base, o = n.enc.Utf8, void (n.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var n = e.blockSize,s = 4 * n;t.sigBytes > s && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = s, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = s.HmacMD5;}));function o(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function i(e) {return "object" === o(e);}var a = /*#__PURE__*/function (_Error) {_inherits(a, _Error);var _super = _createSuper(a);function a(e, t) {var _this;_classCallCheck(this, a);_this = _super.call(this, e), _this.code = t;return _this;}return a;}( /*#__PURE__*/_wrapNativeSuper(Error));function c(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var u = "development" === "development",h = "mp-weixin",l = c(undefined),d = c([]),f = true;var p = "";try {{var _e2 = __webpack_require__(/*! uni-stat-config */ 194).default || __webpack_require__(/*! uni-stat-config */ 194);p = _e2.appid;}} catch (e) {}var g = {};function m(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var n, s;return n = g, s = e, Object.prototype.hasOwnProperty.call(n, s) || (g[e] = t), g[e];}"app-plus" === h && (g = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var y = ["invoke", "success", "fail", "complete"],_ = m("_globalUniCloudInterceptor");function w(e, t) {_[e] || (_[e] = {}), i(t) && Object.keys(t).forEach(function (n) {y.indexOf(n) > -1 && function (e, t, n) {var s = _[e][t];s || (s = _[e][t] = []), -1 === s.indexOf(n) && "function" == typeof n && s.push(n);}(e, n, t[n]);});}function v(e, t) {_[e] || (_[e] = {}), i(t) ? Object.keys(t).forEach(function (n) {y.indexOf(n) > -1 && function (e, t, n) {var s = _[e][t];if (!s) return;var r = s.indexOf(n);r > -1 && s.splice(r, 1);}(e, n, t[n]);}) : delete _[e];}function S(e, t) {return e && 0 !== e.length ? e.reduce(function (e, n) {return e.then(function () {return n(t);});}, Promise.resolve()) : Promise.resolve();}function k(e, t) {return _[e] && _[e][t] || [];}function T(e, t) {return t ? function (n) {var _this2 = this;var s = "callFunction" === t && "DCloud-clientDB" === (n && n.name);var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};var o = r.then(function () {return s ? Promise.resolve() : S(k(t, "invoke"), n);}).then(function () {return e.call(_this2, n);}).then(function (e) {return s ? Promise.resolve(e) : S(k(t, "success"), e).then(function () {return S(k(t, "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {return s ? Promise.reject(e) : S(k(t, "fail"), e).then(function () {return S(k(t, "complete"), e);}).then(function () {return Promise.reject(e);});});if (!(n.success || n.fail || n.complete)) return o;o.then(function (e) {n.success && n.success(e), n.complete && n.complete(e);}).catch(function (e) {n.fail && n.fail(e), n.complete && n.complete(e);});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var P = /*#__PURE__*/function (_Error2) {_inherits(P, _Error2);var _super2 = _createSuper(P);function P(e) {var _this3;_classCallCheck(this, P);_this3 = _super2.call(this, e.message), _this3.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this3), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this3;}return P;}( /*#__PURE__*/_wrapNativeSuper(Error));var _e3 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" } }, "zh-Hans"),I = _e3.t,A = _e3.setLocale,E = _e3.getLocale;var b, O;function U() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var t = "";for (; t.length < e;) {t += Math.random().toString(32).substring(2);}return t.substring(0, e);}function C() {var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),e = _uni$getSystemInfoSyn.deviceId;return { PLATFORM: h, OS: O, APPID: p, LOCALE: E(), DEVICEID: e, CLIENT_SDK_VERSION: "1.0.9" };}function D() {if ("n" === x()) {try {b = plus.runtime.getDCloudId();} catch (e) {b = "";}return b;}return b || (b = U(32), uni.setStorage({ key: "__DC_CLOUD_UUID", data: b })), b;}function x() {var _appPlus$h5$mpWeixi;return (_appPlus$h5$mpWeixi = { "app-plus": "n", h5: "h5", "mp-weixin": "wx" }, _defineProperty(_appPlus$h5$mpWeixi, ["y", "a", "p", "mp-ali"].reverse().join(""), "ali"), _defineProperty(_appPlus$h5$mpWeixi, "mp-baidu", "bd"), _defineProperty(_appPlus$h5$mpWeixi, "mp-toutiao", "tt"), _defineProperty(_appPlus$h5$mpWeixi, "mp-qq", "qq"), _defineProperty(_appPlus$h5$mpWeixi, "quickapp-native", "qn"), _appPlus$h5$mpWeixi)[h];}var R = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), r(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, s) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), u && "h5" === h && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return s(new P({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return s(new P({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, n(r);} }));});} };var q = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var F = /*#__PURE__*/function () {function F(e) {_classCallCheck(this, F);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(I("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = q, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(F, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return R.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this4 = this;return Promise.resolve().then(function () {return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this4.getAccessToken();}).then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});}) : _this4.getAccessToken().then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = R.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = R.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: s };} }, { key: "getAccessToken", value: function getAccessToken() {var _this5 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this5.setAccessToken(e.result.accessToken), _this5._getAccessTokenPromiseStatus = "fulfilled", t(_this5.accessToken)) : (_this5._getAccessTokenPromiseStatus = "rejected", n(new P({ code: "AUTH_FAILED", message: "获取accessToken失败" })));});}, function (e) {return _this5._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this6 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,s = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this6.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new P({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this7 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,s = _ref2.onUploadProgress,r = _ref2.config;if ("string" !== o(t)) throw new P({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });if (!(t = t.trim())) throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });if (/:\/\//.test(t)) throw new P({ code: "INVALID_PARAM", message: "cloudPath不合法" });var i = r && r.envType || this.config.envType;var a, c;return this.getOSSUploadOptionsFromPath({ env: i, filename: t }).then(function (t) {var r = t.result;a = r.id, c = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: a, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this7.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: s }));}).then(function () {return _this7.reportOSSUpload({ id: a });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: c }) : s(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, n) {Array.isArray(e) && 0 !== e.length || n(new P({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return F;}();var L = { init: function init(e) {var t = new F(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} },N = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";var M;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(M || (M = {}));var $ = function $() {};var j = function j() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t = function _t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t }), Object.defineProperty(e.promise, "catch", { get: _t }), e;}var t = new Promise(function (t, n) {e = function e(_e4, s) {return _e4 ? n(_e4) : t(s);};});return e.promise = t, e;};function K(e) {return void 0 === e;}function B(e) {return "[object Null]" === Object.prototype.toString.call(e);}var H;function W(e) {var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);var n;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e5 = _step.value;var _t2 = _e5.isMatch,_n = _e5.genAdapter,_s = _e5.runtime;if (_t2()) return { adapter: _n(), runtime: _s };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(H || (H = {}));var z = { adapter: null, runtime: void 0 },V = ["anonymousUuidKey"];var J = /*#__PURE__*/function (_$) {_inherits(J, _$);var _super3 = _createSuper(J);function J() {var _this8;_classCallCheck(this, J);_this8 = _super3.call(this), z.adapter.root.tcbObject || (z.adapter.root.tcbObject = {});return _this8;}_createClass(J, [{ key: "setItem", value: function setItem(e, t) {z.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return z.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete z.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete z.adapter.root.tcbObject;} }]);return J;}($);function Y(e, t) {switch (e) {case "local":return t.localStorage || new J();case "none":return new J();default:return t.sessionStorage || new J();}}var X = /*#__PURE__*/function () {function X(e) {_classCallCheck(this, X);if (!this._storage) {this._persistence = z.adapter.primaryStorage || e.persistence, this._storage = Y(this._persistence, z.adapter);var _t3 = "access_token_".concat(e.env),_n2 = "access_token_expire_".concat(e.env),_s2 = "refresh_token_".concat(e.env),_r = "anonymous_uuid_".concat(e.env),_o = "login_type_".concat(e.env),_i = "user_info_".concat(e.env);this.keys = { accessTokenKey: _t3, accessTokenExpireKey: _n2, refreshTokenKey: _s2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(X, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var n = Y(e, z.adapter);for (var _e6 in this.keys) {var _s3 = this.keys[_e6];if (t && V.includes(_e6)) continue;var _r2 = this._storage.getItem(_s3);K(_r2) || B(_r2) || (n.setItem(_s3, _r2), this._storage.removeItem(_s3));}this._storage = n;} }, { key: "setStore", value: function setStore(e, t, n) {if (!this._storage) return;var s = { version: n || "localCachev1", content: t },r = JSON.stringify(s);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var n = this._storage.getItem(e);if (!n) return "";if (n.indexOf(t) >= 0) {return JSON.parse(n).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return X;}();var G = {},Q = {};function Z(e) {return G[e];}var ee = function ee(e, t) {_classCallCheck(this, ee);this.data = t || null, this.name = e;};var te = /*#__PURE__*/function (_ee) {_inherits(te, _ee);var _super4 = _createSuper(te);function te(e, t) {var _this9;_classCallCheck(this, te);_this9 = _super4.call(this, "error", { error: e, data: t }), _this9.error = e;return _this9;}return te;}(ee);var ne = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, n) {if (n && n[e]) {var _s4 = n[e].indexOf(t);-1 !== _s4 && n[e].splice(_s4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof te) return console.error(e.error), this;var n = "string" == typeof e ? new ee(e, t || {}) : e;var s = n.name;if (this._listens(s)) {n.target = this;var _e7 = this._listeners[s] ? _toConsumableArray(this._listeners[s]) : [];var _iterator2 = _createForOfIteratorHelper(_e7),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t4 = _step2.value;_t4.call(this, n);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function se(e, t) {ne.on(e, t);}function re(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};ne.fire(e, t);}function oe(e, t) {ne.off(e, t);}var ie = "loginStateChanged",ae = "loginStateExpire",ce = "loginTypeChanged",ue = "anonymousConverted",he = "refreshAccessToken";var le;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(le || (le = {}));var de = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],fe = { "X-SDK-Version": "1.3.5" };function pe(e, t, n) {var s = e[t];e[t] = function (t) {var r = {},o = {};n.forEach(function (n) {var _n$call = n.call(e, t),s = _n$call.data,i = _n$call.headers;Object.assign(r, s), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e8 in r) {i.append(_e8, r[_e8]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), s.call(e, t);};}function ge() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, fe), {}, { "x-seqid": e }) };}var me = /*#__PURE__*/function () {function me() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, me);var t;this.config = e, this._reqClass = new z.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = Z(this.config.env), this._localCache = (t = this.config.env, Q[t]), pe(this._reqClass, "post", [ge]), pe(this._reqClass, "upload", [ge]), pe(this._reqClass, "download", [ge]);}_createClass(me, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, n, s, r, o, i, a, _e9, _e10, _t5, _s5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(n);if (o) {_context5.next = 5;break;}throw new Error("未登录CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e9 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e9 || "REFRESH_TOKEN_EXPIRED" === _e9 || "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 20;break;}if (!(this._cache.getStore(s) === le.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 19;break;}_e10 = this._cache.getStore(r);_t5 = this._cache.getStore(n);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e10, refresh_token: _t5 });case 17:_s5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_s5.refresh_token), this._refreshAccessToken()));case 19:re(ae), this._cache.removeStore(n);case 20:throw new Error("\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code));case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (re(he), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, n, s, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(n)) {_context6.next = 3;break;}throw new Error("refresh token不存在，登录状态异常");case 3:s = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(s, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!s || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: s, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, n) {var s, r, o, _e11, i, _e12, _e13, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:s = "x-tcb-trace_".concat(this.config.env);r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === de.indexOf(e))) {_context7.next = 10;break;}_e11 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e11);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e12 in i) {i.hasOwnProperty(_e12) && void 0 !== i[_e12] && i.append(_e12, o[_e12]);}r = "multipart/form-data";} else {r = "application/json;charset=UTF-8", i = {};for (_e13 in o) {void 0 !== o[_e13] && (i[_e13] = o[_e13]);}}a = { headers: { "content-type": r } };n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);c = this._localCache.getStore(s);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var s = /\?/.test(t);var r = "";for (var _e14 in n) {"" === r ? !s && (t += "?") : r += "&", r += "".concat(_e14, "=").concat(encodeURIComponent(n[_e14]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(N, "//tcb-api.tencentcloudapi.com/web", d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(s, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,n,_n3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:n = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === de.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_n3 = _context8.sent;if (!_n3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_n3.data.code, "] ").concat(_n3.data.message));case 12:return _context8.abrupt("return", _n3.data);case 13:if (!n.data.code) {_context8.next = 15;break;}throw new Error("[".concat(n.data.code, "] ").concat(n.data.message));case 15:return _context8.abrupt("return", n.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,n = _this$_cache$keys3.accessTokenExpireKey,s = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }]);return me;}();var ye = {};function _e(e) {return ye[e];}var we = /*#__PURE__*/function () {function we(e) {_classCallCheck(this, we);this.config = e, this._cache = Z(e.env), this._request = _e(e.env);}_createClass(we, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,n = _this$_cache$keys4.accessTokenExpireKey,s = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,n = _this$_cache$keys5.accessTokenKey,s = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(n, e), this._cache.setStore(s, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return we;}();var ve = /*#__PURE__*/function () {function ve(e) {_classCallCheck(this, ve);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = Z(this._envId), this._request = _e(this._envId), this.setUserInfo();}_createClass(ve, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, n;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;n = e.users;return _context10.abrupt("return", (n.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: n, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, n, s, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;n = e.gender;s = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: s, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this10 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this10[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return ve;}();var Se = /*#__PURE__*/function () {function Se(e) {_classCallCheck(this, Se);if (!e) throw new Error("envId is not defined");this._cache = Z(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,n = _this$_cache$keys6.accessTokenKey,s = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(n),i = this._cache.getStore(s);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new ve(e);}_createClass(Se, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === le.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === le.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === le.WECHAT || this.loginType === le.WECHAT_OPEN || this.loginType === le.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Se;}();var ke = /*#__PURE__*/function (_we) {_inherits(ke, _we);var _super5 = _createSuper(ke);function ke() {_classCallCheck(this, ke);return _super5.apply(this, arguments);}_createClass(ke, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, n, s, r, _e15;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;n = this._cache.getStore(e) || void 0;s = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: n, refresh_token: s });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:re(ie);re(ce, { env: this.config.env, loginType: le.ANONYMOUS, persistence: "local" });_e15 = new Se(this.config.env);_context13.next = 19;return _e15.user.refresh();case 19:return _context13.abrupt("return", _e15);case 20:throw new Error("匿名登录失败");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, n, s, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;n = _this$_cache$keys8.refreshTokenKey;s = this._cache.getStore(t);r = this._cache.getStore(n);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:re(ue, { env: this.config.env });re(ce, { loginType: le.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("匿名转化失败");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,n = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, le.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return ke;}(we);var Te = /*#__PURE__*/function (_we2) {_inherits(Te, _we2);var _super6 = _createSuper(Te);function Te() {_classCallCheck(this, Te);return _super6.apply(this, arguments);}_createClass(Te, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, n;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:n = _context15.sent;if (!n.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(n.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:re(ie);re(ce, { env: this.config.env, loginType: le.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new Se(this.config.env));case 15:throw new Error("自定义登录失败");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return Te;}(we);var Pe = /*#__PURE__*/function (_we3) {_inherits(Pe, _we3);var _super7 = _createSuper(Pe);function Pe() {_classCallCheck(this, Pe);return _super7.apply(this, arguments);}_createClass(Pe, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:n = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 5:s = _context16.sent;r = s.refresh_token;o = s.access_token;i = s.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:re(ie);re(ce, { env: this.config.env, loginType: le.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new Se(this.config.env));case 22:throw s.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("邮箱登录失败");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return Pe;}(we);var Ie = /*#__PURE__*/function (_we4) {_inherits(Ie, _we4);var _super8 = _createSuper(Ie);function Ie() {_classCallCheck(this, Ie);return _super8.apply(this, arguments);}_createClass(Ie, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));n = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: le.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 6:s = _context19.sent;r = s.refresh_token;o = s.access_token_expire;i = s.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:re(ie);re(ce, { env: this.config.env, loginType: le.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new Se(this.config.env));case 23:throw s.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("用户名密码登录失败");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return Ie;}(we);var Ae = /*#__PURE__*/function () {function Ae(e) {_classCallCheck(this, Ae);this.config = e, this._cache = Z(e.env), this._request = _e(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), se(ce, this._onLoginTypeChanged);}_createClass(Ae, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new ke(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new Te(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new Pe(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new Ie(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new ke(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new Pe(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new Ie(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new ke(this.config)), se(ue, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, n, s, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === le.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("匿名用户不支持登出操作");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);if (s) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: s });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), re(ie), re(ce, { env: this.config.env, loginType: le.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this11 = this;se(ie, function () {var t = _this11.hasLoginState();e.call(_this11, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {se(ae, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {se(he, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {se(ue, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this12 = this;se(ce, function () {var t = _this12.hasLoginState();e.call(_this12, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new Se(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new Te(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,n = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,n = _e$data.persistence,s = _e$data.env;s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Ae;}();var Ee = function Ee(e, t) {t = t || j();var n = _e(this.config.env),s = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: s, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };n.upload({ url: a, data: f, file: r, name: s, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: ".concat(e.data)));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},be = function be(e, t) {t = t || j();var n = _e(this.config.env),s = e.cloudPath;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},Oe = function Oe(_ref5, t) {var e = _ref5.fileList;if (t = t || j(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t6 = _step3.value;if (!_t6 || "string" != typeof _t6) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var n = { fileid_list: e };return _e(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ue = function Ue(_ref6, t) {var e = _ref6.fileList;t = t || j(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var n = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _s6 = _step4.value;"object" == typeof _s6 ? (_s6.hasOwnProperty("fileID") && _s6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n.push({ fileid: _s6.fileID, max_age: _s6.maxAge })) : "string" == typeof _s6 ? n.push({ fileid: _s6 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var s = { file_list: n };return _e(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ce = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, n, s, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return Ue.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:n = _context29.sent.fileList[0];if (!("SUCCESS" !== n.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(n) : new Promise(function (e) {e(n);}));case 6:s = _e(this.config.env);r = n.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", s.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return s.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function Ce(_x26, _x27) {return _ref8.apply(this, arguments);};}(),De = function De(_ref9, o) {var e = _ref9.name,t = _ref9.data,n = _ref9.query,s = _ref9.parse,r = _ref9.search;var i = o || j();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("函数名不能为空"));var c = { inQuery: n, parse: s, search: r, function_name: e, request_data: a };return _e(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t7 = e.data.response_data;if (s) i(null, { result: _t7, requestId: e.requestId });else try {_t7 = JSON.parse(e.data.response_data), i(null, { result: _t7, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},xe = { timeout: 15e3, persistence: "session" },Re = {};var qe = /*#__PURE__*/function () {function qe(e) {_classCallCheck(this, qe);this.config = e || this.config, this.authObj = void 0;}_createClass(qe, [{ key: "init", value: function init(e) {switch (z.adapter || (this.requestClient = new z.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, xe), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new qe(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || z.adapter.primaryStorage || xe.persistence;var n;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;G[t] = new X(e), Q[t] = new X(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), n = this.config, ye[n.env] = new me(n), this.authObj = new Ae(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return se.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return oe.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return De.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return Oe.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Ue.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return Ce.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return Ee.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return be.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {Re[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var n;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:n = Re[e];if (n) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return n.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = W(e) || {},t = _ref11.adapter,n = _ref11.runtime;t && (z.adapter = t), n && (z.runtime = n);} }]);return qe;}();var Fe = new qe();function Le(e, t, n) {void 0 === n && (n = {});var s = /\?/.test(t),r = "";for (var o in n) {"" === r ? !s && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(n[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var Ne = /*#__PURE__*/function () {function Ne() {_classCallCheck(this, Ne);}_createClass(Ne, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,s = e.headers;return new Promise(function (e, r) {q.request({ url: Le("https:", t), data: n, method: "POST", header: s, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var s = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = q.uploadFile({ url: Le("https:", s), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (n.statusCode = parseInt(o.success_action_status, 10)), t(n);}, fail: function fail(e) {u && "mp-alipay" === h && console.warn("支付宝小程序开发工具上传腾讯云时无法准确判断是否上传成功，请使用真机测试"), n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return Ne;}();var Me = { setItem: function setItem(e, t) {q.setStorageSync(e, t);}, getItem: function getItem(e) {return q.getStorageSync(e);}, removeItem: function removeItem(e) {q.removeStorageSync(e);}, clear: function clear() {q.clearStorageSync();} };var $e = { genAdapter: function genAdapter() {return { root: {}, reqClass: Ne, localStorage: Me, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Fe.useAdapters($e);var je = Fe,Ke = je.init;je.init = function (e) {e.env = e.spaceId;var t = Ke.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;return t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = T(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var Be = /*#__PURE__*/function (_F) {_inherits(Be, _F);var _super9 = _createSuper(Be);function Be() {_classCallCheck(this, Be);return _super9.apply(this, arguments);}_createClass(Be, [{ key: "getAccessToken", value: function getAccessToken() {var _this13 = this;return new Promise(function (e, t) {var n = "Anonymous_Access_token";_this13.setAccessToken(n), e(n);});} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };"auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = R.sign(n, this.config.clientSecret);var r = C(),o = r.APPID,i = r.PLATFORM,a = r.DEVICEID,c = r.CLIENT_SDK_VERSION;return s["x-client-platform"] = i, s["x-client-appid"] = o, s["x-client-device-id"] = a, s["x-client-version"] = c, s["x-client-token"] = q.getStorageSync("uni_id_token"), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: JSON.parse(JSON.stringify(s)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this14 = this;var e = _ref12.url,t = _ref12.formData,n = _ref12.name,s = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (i, a) {var c = _this14.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new P({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this15 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,n = _ref13$fileType === void 0 ? "image" : _ref13$fileType,s = _ref13.onUploadProgress;if (!t) throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name,c = _t$result.fileUrl;r = c;var u = { url: o, formData: i, name: a, filePath: e, fileType: n };return _this15.uploadFileToOSS(Object.assign({}, u, { onUploadProgress: s }));}).then(function () {return _this15.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: r }) : s(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }]);return Be;}(F);var He = { init: function init(e) {var t = new Be(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };var We, ze;function Ve(_ref14) {var e = _ref14.name,t = _ref14.data,n = _ref14.spaceId,s = _ref14.provider;We || (We = C(), ze = { ak: p, p: "android" === O ? "a" : "i", ut: x(), uuid: D() });var r = JSON.parse(JSON.stringify(t || {})),o = e,i = n,a = { tencent: "t", aliyun: "a" }[s];{var _e16 = Object.assign({}, ze, { fn: o, sid: i, pvd: a });Object.assign(r, { clientInfo: We, uniCloudClientInfo: encodeURIComponent(JSON.stringify(_e16)) });var _uni$getSystemInfoSyn2 = uni.getSystemInfoSync(),_t8 = _uni$getSystemInfoSyn2.deviceId;r.uniCloudDeviceId = _t8;}if (!r.uniIdToken) {var _e17 = q.getStorageSync("uni_id_token") || q.getStorageSync("uniIdToken");_e17 && (r.uniIdToken = _e17);}return r;}function Je(_ref15) {var _this16 = this;var e = _ref15.name,t = _ref15.data;var n = this.localAddress,s = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,i = "http://".concat(n, ":").concat(s, "/system/check-function"),a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);return new Promise(function (t, n) {q.request({ method: "POST", url: i, data: { name: e, platform: h, provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref16.data;var _ref17 = e || {},t = _ref17.code,n = _ref17.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: n || "SYS_ERR" };}).then(function (_ref18) {var n = _ref18.code,s = _ref18.message;if (0 !== n) {switch (n) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e18 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e18), new Error(_e18);}case "SWITCH_TO_CLOUD":break;default:{var _e19 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e19), new Error(_e19);}}return _this16._originCallFunction({ name: e, data: t });}return new Promise(function (n, s) {var i = Ve({ name: e, data: t, provider: _this16.config.provider, spaceId: o });q.request({ method: "POST", url: a, data: { provider: r, platform: h, param: i }, success: function success() {var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref19.statusCode,t = _ref19.data;return !e || e >= 400 ? s(new P({ code: t.code || "SYS_ERR", message: t.message || "request:fail" })) : n({ result: t });}, fail: function fail(e) {s(new P({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var Ye = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];var Xe = /[\\^$.*+?()[\]{}|]/g,Ge = RegExp(Xe.source);function Qe(e, t, n) {return e.replace(new RegExp((s = t) && Ge.test(s) ? s.replace(Xe, "\\$&") : s, "g"), n);var s;}function Ze(_ref20) {var e = _ref20.functionName,t = _ref20.result,n = _ref20.logPvd;if (this.config.useDebugFunction && t && t.requestId) {var _s7 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(n, "-request]").concat(_s7, "[/").concat(n, "-request]"));}}function et(e) {var t = e.callFunction,n = function n(e) {var _this17 = this;var n = e.name;e.data = Ve({ name: n, data: e.data, provider: this.config.provider, spaceId: this.config.spaceId });var s = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];return t.call(this, e).then(function (e) {return Ze.call(_this17, { functionName: n, result: e, logPvd: s }), Promise.resolve(e);}, function (t) {return Ze.call(_this17, { functionName: n, result: t, logPvd: s }), t && t.message && (t.message = function () {var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref21$message = _ref21.message,e = _ref21$message === void 0 ? "" : _ref21$message,_ref21$extraInfo = _ref21.extraInfo,t = _ref21$extraInfo === void 0 ? {} : _ref21$extraInfo,_ref21$formatter = _ref21.formatter,n = _ref21$formatter === void 0 ? [] : _ref21$formatter;for (var _s8 = 0; _s8 < n.length; _s8++) {var _n$_s = n[_s8],_r3 = _n$_s.rule,_o2 = _n$_s.content,i = _n$_s.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e20 = 1; _e20 < _a.length; _e20++) {_c = Qe(_c, "{$".concat(_e20, "}"), _a[_e20]);}for (var _e21 in t) {_c = Qe(_c, "{".concat(_e21, "}"), t[_e21]);}switch (i) {case "replace":return _c;case "append":default:return e + _c;}}return e;}({ message: "[".concat(e.name, "]: ").concat(t.message), formatter: Ye, extraInfo: { functionName: n } })), Promise.reject(t);});};e.callFunction = function (t) {var s;return u && e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = n), s = Je.call(this, t)) : s = n.call(this, t), Object.defineProperty(s, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), s;};}var tt = Symbol("CLIENT_DB_INTERNAL");function nt(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = tt, e.__ob__ = void 0, new Proxy(e, { get: function get(e, n, s) {return n in e || "string" != typeof n ? e[n] : t.get(e, n, s);} });}function st(e) {switch (o(e)) {case "array":return e.map(function (e) {return st(e);});case "object":return e._internalType === tt || Object.keys(e).forEach(function (t) {e[t] = st(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}function rt() {var e = q.getStorageSync("uni_id_token") || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var n;try {n = JSON.parse((s = t[1], decodeURIComponent(atob(s).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var s;return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;}var ot = t(n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var n = "chooseAndUploadFile:ok",s = "chooseAndUploadFile:fail";function r(e, t) {return e.tempFiles.forEach(function (e, n) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function o(e, t, _ref22) {var s = _ref22.onChooseFile,r = _ref22.onUploadProgress;return t.then(function (e) {if (s) {var _t9 = s(e);if (void 0 !== _t9) return Promise.resolve(_t9).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: n, tempFilePaths: [], tempFiles: [] } : function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var r = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = n;var o = t.tempFiles,i = o.length;var a = 0;return new Promise(function (n) {for (; a < s;) {c();}function c() {var s = a++;if (s >= i) return void (!o.find(function (e) {return !e.url && !e.errMsg;}) && n(t));var u = o[s];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);} }).then(function (e) {u.url = e.fileID, s < i && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, s < i && c();});}});}(e, t, 5, r);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? o(e, function (e) {var t = e.count,n = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: n, sourceType: o, extension: i, success: function success(t) {e(r(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", s) });} });});}(t), t) : "video" === t.type ? o(e, function (e) {var t = e.camera,n = e.compressed,o = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: n, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var n = t.tempFilePath,s = t.duration,o = t.size,i = t.height,a = t.width;e(r({ errMsg: "chooseVideo:ok", tempFilePaths: [n], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: n, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: s, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", s) });} });});}(t), t) : o(e, function (e) {var t = e.count,n = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: n, success: function success(t) {e(r(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", s) });} });});}(t), t);};};}));var it = "manual";function at(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this18 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this18[t]);}), e;}, function (e, t) {if (_this18.loadtime === it) return;var n = !1;var s = [];for (var _r4 = 2; _r4 < e.length; _r4++) {e[_r4] !== t[_r4] && (s.push(e[_r4]), n = !0);}e[0] !== t[0] && (_this18.mixinDatacomPage.current = _this18.pageCurrent), _this18.mixinDatacomPage.size = _this18.pageSize, _this18.onMixinDatacomPropsChange(n, s);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this19 = this;var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref23$getone = _ref23.getone,e = _ref23$getone === void 0 ? !1 : _ref23$getone,t = _ref23.success,n = _ref23.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {_this19.mixinDatacomLoading = !1;var _n$result = n.result,s = _n$result.data,r = _n$result.count;_this19.getcount && (_this19.mixinDatacomPage.count = r), _this19.mixinDatacomHasMore = s.length < _this19.pageSize;var o = e ? s.length ? s[0] : void 0 : s;_this19.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this19.mixinDatacomLoading = !1, _this19.mixinDatacomErrorMessage = e, n && n(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var _n4;var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var n = e.database();var s = t.action || this.action;s && (n = n.action(s));var r = t.collection || this.collection;n = Array.isArray(r) ? (_n4 = n).collection.apply(_n4, _toConsumableArray(r)) : n.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (n = n.where(o));var i = t.field || this.field;i && (n = n.field(i));var a = t.foreignKey || this.foreignKey;a && (n = n.foreignKey(a));var c = t.groupby || this.groupby;c && (n = n.groupBy(c));var u = t.groupField || this.groupField;u && (n = n.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());var h = t.orderby || this.orderby;h && (n = n.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;} } };}function ct(_x30, _x31) {return _ct.apply(this, arguments);}function _ct() {_ct = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var n, _e28, s;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:n = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return s = { url: n, timeout: 500 }, new Promise(function (e, t) {q.request(_objectSpread(_objectSpread({}, s), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e28 = _context32.sent;return _context32.abrupt("return", !(!_e28.data || 0 !== _e28.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _ct.apply(this, arguments);}var ut = new ( /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);}_createClass(_class2, [{ key: "init", value: function init(e) {var t = {};var n = !1 !== e.debugFunction && u && ("h5" === h && navigator.userAgent.indexOf("HBuilderX") > 0 || "app-plus" === h);switch (e.provider) {case "tencent":t = je.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":t = L.init(Object.assign(e, { useDebugFunction: n }));break;case "private":t = He.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("未提供正确的provider参数");}var s = l;u && s && !s.code && (t.debugInfo = s);var r = Promise.resolve();var o;o = 1, r = new Promise(function (e, t) {setTimeout(function () {e();}, o);}), t.isReady = !1, t.isDefault = !1;var i = t.auth();t.initUniCloud = r.then(function () {return i.getLoginState();}).then(function (e) {return e ? Promise.resolve() : i.signInAnonymously();}).then(function () {if (u && t.debugInfo) {var _t$debugInfo = t.debugInfo,_e22 = _t$debugInfo.address,_n5 = _t$debugInfo.servePort;return function () {var _ref24 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var n, _s9, _r5;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_s9 = 0;case 1:if (!(_s9 < e.length)) {_context31.next = 11;break;}_r5 = e[_s9];_context31.next = 5;return ct(_r5, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}n = _r5;return _context31.abrupt("break", 11);case 8:_s9++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: n, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref24.apply(this, arguments);};}()(_e22, _n5);}return Promise.resolve();}).then(function () {var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref25.address,n = _ref25.port;if (!u) return Promise.resolve();if (e) t.localAddress = e, t.localPort = n;else if (t.debugInfo) {var _e23 = console["app-plus" === h ? "error" : "warn"];"remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, _e23("当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs")) : _e23("无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs");}}).then(function () {return function () {if (!u || "h5" !== h) return;if (uni.getStorageSync("__LAST_DCLOUD_APPID") === p) return;uni.setStorageSync("__LAST_DCLOUD_APPID", p), uni.removeStorageSync("uni_id_token") && (console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), uni.removeStorageSync("uni_id_token"), uni.removeStorageSync("uni_id_token_expired"));}(), new Promise(function (e) {"quickapp-native" === h ? (O = "android", uni.getStorage({ key: "__DC_CLOUD_UUID", success: function success(t) {b = t.data ? t.data : U(32), e();} })) : setTimeout(function () {O = uni.getSystemInfoSync().platform, b = uni.getStorageSync("__DC_CLOUD_UUID") || U(32), e();}, 0);});}).then(function () {t.isReady = !0;}), et(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this20 = this;var n;return n = this.isReady ? Promise.resolve() : this.initUniCloud, n.then(function () {return t.call(_this20, e);});};}(t), function (e) {e.database = function () {if (this._database) return this._database;var t = {};var n = {};function s(_ref26) {var s = _ref26.action,r = _ref26.command,o = _ref26.multiCommand;return S(k("database", "invoke")).then(function () {return e.callFunction({ name: "DCloud-clientDB", data: { action: s, command: r, multiCommand: o } });}).then(function (e) {var _e$result = e.result,s = _e$result.code,r = _e$result.message,o = _e$result.token,i = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,c = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (c) for (var _e24 = 0; _e24 < c.length; _e24++) {var _c$_e = c[_e24],_t10 = _c$_e.level,_n6 = _c$_e.message,_s10 = _c$_e.detail,_r6 = console["app-plus" === h && "warn" === _t10 ? "error" : _t10] || console.log;var _o3 = "[System Info]" + _n6;_s10 && (_o3 = "".concat(_o3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s10)), _r6(_o3);}if (s) {var _e25 = new a(r, s);return n.error && n.error.forEach(function (t) {t(_e25);}), Promise.reject(_e25);}o && i && (t.refreshToken && t.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}), n.refreshToken && n.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}));var u = e.result.affectedDocs;return "number" == typeof u && Object.defineProperty(e.result, "affectedDocs", { get: function get() {return console.warn("affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"), u;} }), S(k("database", "success"), e).then(function () {return S(k("database", "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {var t = new a(e.message, e.code || "SYSTEM_ERROR");return n.error && n.error.forEach(function (e) {e(t);}), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), S(k("database", "fail"), e).then(function () {return S(k("database", "complete"), e);}).then(function () {return Promise.reject(e);});});}this.isDefault && (n = m("_globalUniCloudDatabaseCallback"));var r = /*#__PURE__*/function () {function r(e, t) {_classCallCheck(this, r);this.content = e, this.prevStage = t, this.udb = null;}_createClass(r, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: st(e.$param) };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB禁止使用set方法");} }, { key: "_send", value: function _send(e, t) {var n = this.getAction(),r = this.getCommand();return r.$db.push({ $method: e, $param: st(t) }), s({ action: n, command: r });} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _n7 = e.content.$method;if ("aggregate" === _n7 || "pipeline" === _n7) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return c({ $method: "count", $param: st(Array.from(arguments)) }, e);};} }, { key: "multiSend", get: function get() {} }]);return r;}();var o = ["db.Geo", "db.command", "command.aggregate"];function i(e, t) {return o.indexOf("".concat(e, ".").concat(t)) > -1;}function c(e, t) {return nt(new r(e, t), { get: function get(e, t) {var n = "db";return e && e.content && (n = e.content.$method), i(n, t) ? c({ $method: t }, e) : function () {return c({ $method: t, $param: st(Array.from(arguments)) }, e);};} });}function u(_ref27) {var e = _ref27.path,t = _ref27.method;return /*#__PURE__*/function () {function _class3() {_classCallCheck(this, _class3);this.param = Array.from(arguments);}_createClass(_class3, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class3;}();}var l = { auth: { on: function on(e, n) {t[e] = t[e] || [], t[e].indexOf(n) > -1 || t[e].push(n);}, off: function off(e, n) {t[e] = t[e] || [];var s = t[e].indexOf(n);-1 !== s && t[e].splice(s, 1);} }, on: function on(e, t) {n[e] = n[e] || [], n[e].indexOf(t) > -1 || n[e].push(t);}, off: function off(e, t) {n[e] = n[e] || [];var s = n[e].indexOf(t);-1 !== s && n[e].splice(s, 1);}, env: nt({}, { get: function get(e, t) {return { $env: t };} }), Geo: nt({}, { get: function get(e, t) {return u({ path: ["Geo"], method: t });} }), getCloudEnv: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };}, multiSend: function multiSend() {var e = Array.from(arguments);return s({ multiCommand: e.map(function (e) {var t = e.getAction(),n = e.getCommand();if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");return { action: t, command: n };}) }).then(function (t) {for (var _n8 = 0; _n8 < e.length; _n8++) {var _s11 = e[_n8];_s11.udb && "function" == typeof _s11.udb.setResult && _s11.udb.setResult(t.result.dataList[_n8]);}return Promise.resolve(t);}, function (t) {for (var _n9 = 0; _n9 < e.length; _n9++) {var _s12 = e[_n9];_s12.udb && "function" == typeof _s12.udb.setResult && _s12.udb.setResult(t);}return Promise.reject(t);});}, get serverDate() {return u({ path: [], method: "serverDate" });}, get RegExp() {return u({ path: [], method: "RegExp" });} },d = nt(l, { get: function get(e, t) {return i("db", t) ? c({ $method: t }) : function () {return c({ $method: t, $param: st(Array.from(arguments)) });};} });return this._database = d, d;};}(t), function (e) {e.getCurrentUserInfo = rt, e.chooseAndUploadFile = ot.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return at(e);} });}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {t[e] && (t[e] = T(t[e], e));}), t.init = this.init, t;} }]);return _class2;}())();(function () {{var e = d;var t = {};if (1 === e.length) t = e[0], ut = ut.init(t), ut.isDefault = !0;else {var _t11 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];var _n10;_n10 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : f ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t11.forEach(function (e) {ut[e] = function () {return console.error(_n10), Promise.reject(new P({ code: "SYS_ERR", message: _n10 }));};});}Object.assign(ut, { get mixinDatacom() {return at(ut);} }), ut.addInterceptor = w, ut.removeInterceptor = v, u && "h5" === h && (window.uniCloud = ut);}})();var ht = ut;var _default2 = ht;exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 194:
/*!****************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/pages.json?{"type":"stat"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "" };exports.default = _default;

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"kgclient","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"kgclient","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"kgclient","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"kgclient","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 209:
/*!*******************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/components/uni-icons/icons.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "pulldown": "\uE588",
  "refreshempty": "\uE461",
  "back": "\uE471",
  "forward": "\uE470",
  "more": "\uE507",
  "more-filled": "\uE537",
  "scan": "\uE612",
  "qq": "\uE264",
  "weibo": "\uE260",
  "weixin": "\uE261",
  "pengyouquan": "\uE262",
  "loop": "\uE565",
  "refresh": "\uE407",
  "refresh-filled": "\uE437",
  "arrowthindown": "\uE585",
  "arrowthinleft": "\uE586",
  "arrowthinright": "\uE587",
  "arrowthinup": "\uE584",
  "undo-filled": "\uE7D6",
  "undo": "\uE406",
  "redo": "\uE405",
  "redo-filled": "\uE7D9",
  "bars": "\uE563",
  "chatboxes": "\uE203",
  "camera": "\uE301",
  "chatboxes-filled": "\uE233",
  "camera-filled": "\uE7EF",
  "cart-filled": "\uE7F4",
  "cart": "\uE7F5",
  "checkbox-filled": "\uE442",
  "checkbox": "\uE7FA",
  "arrowleft": "\uE582",
  "arrowdown": "\uE581",
  "arrowright": "\uE583",
  "smallcircle-filled": "\uE801",
  "arrowup": "\uE580",
  "circle": "\uE411",
  "eye-filled": "\uE568",
  "eye-slash-filled": "\uE822",
  "eye-slash": "\uE823",
  "eye": "\uE824",
  "flag-filled": "\uE825",
  "flag": "\uE508",
  "gear-filled": "\uE532",
  "reload": "\uE462",
  "gear": "\uE502",
  "hand-thumbsdown-filled": "\uE83B",
  "hand-thumbsdown": "\uE83C",
  "hand-thumbsup-filled": "\uE83D",
  "heart-filled": "\uE83E",
  "hand-thumbsup": "\uE83F",
  "heart": "\uE840",
  "home": "\uE500",
  "info": "\uE504",
  "home-filled": "\uE530",
  "info-filled": "\uE534",
  "circle-filled": "\uE441",
  "chat-filled": "\uE847",
  "chat": "\uE263",
  "mail-open-filled": "\uE84D",
  "email-filled": "\uE231",
  "mail-open": "\uE84E",
  "email": "\uE201",
  "checkmarkempty": "\uE472",
  "list": "\uE562",
  "locked-filled": "\uE856",
  "locked": "\uE506",
  "map-filled": "\uE85C",
  "map-pin": "\uE85E",
  "map-pin-ellipse": "\uE864",
  "map": "\uE364",
  "minus-filled": "\uE440",
  "mic-filled": "\uE332",
  "minus": "\uE410",
  "micoff": "\uE360",
  "mic": "\uE302",
  "clear": "\uE434",
  "smallcircle": "\uE868",
  "close": "\uE404",
  "closeempty": "\uE460",
  "paperclip": "\uE567",
  "paperplane": "\uE503",
  "paperplane-filled": "\uE86E",
  "person-filled": "\uE131",
  "contact-filled": "\uE130",
  "person": "\uE101",
  "contact": "\uE100",
  "images-filled": "\uE87A",
  "phone": "\uE200",
  "images": "\uE87B",
  "image": "\uE363",
  "image-filled": "\uE877",
  "location-filled": "\uE333",
  "location": "\uE303",
  "plus-filled": "\uE439",
  "plus": "\uE409",
  "plusempty": "\uE468",
  "help-filled": "\uE535",
  "help": "\uE505",
  "navigate-filled": "\uE884",
  "navigate": "\uE501",
  "mic-slash-filled": "\uE892",
  "search": "\uE466",
  "settings": "\uE560",
  "sound": "\uE590",
  "sound-filled": "\uE8A1",
  "spinner-cycle": "\uE465",
  "download-filled": "\uE8A4",
  "personadd-filled": "\uE132",
  "videocam-filled": "\uE8AF",
  "personadd": "\uE102",
  "upload": "\uE402",
  "upload-filled": "\uE8B1",
  "starhalf": "\uE463",
  "star-filled": "\uE438",
  "star": "\uE408",
  "trash": "\uE401",
  "phone-filled": "\uE230",
  "compose": "\uE400",
  "videocam": "\uE300",
  "trash-filled": "\uE8DC",
  "download": "\uE403",
  "chatbubble-filled": "\uE232",
  "chatbubble": "\uE202",
  "cloud-download": "\uE8E4",
  "cloud-upload-filled": "\uE8E5",
  "cloud-upload": "\uE8E6",
  "cloud-download-filled": "\uE8E9",
  "headphones": "\uE8BF",
  "shop": "\uE609" };exports.default = _default;

/***/ }),

/***/ 224:
/*!************************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/components/uni-easyinput/common.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.throttle = exports.debounce = void 0; /**
                                                                                                                          * @desc 函数防抖
                                                                                                                          * @param func 目标函数
                                                                                                                          * @param wait 延迟执行毫秒数
                                                                                                                          * @param immediate true - 立即执行， false - 延迟执行
                                                                                                                          */
var debounce = function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var timer;
  console.log(1);
  return function () {
    console.log(123);
    var context = this,
    args = arguments;
    if (timer) clearTimeout(timer);
    if (immediate) {
      var callNow = !timer;
      timer = setTimeout(function () {
        timer = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timer = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
};
/**
    * @desc 函数节流
    * @param func 函数
    * @param wait 延迟执行毫秒数
    * @param type 1 使用表时间戳，在时间段开始的时候触发 2 使用表定时器，在时间段结束的时候触发
    */exports.debounce = debounce;
var throttle = function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var previous = 0;
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    if (type === 1) {
      var now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(function () {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
};exports.throttle = throttle;

/***/ }),

/***/ 286:
/*!**************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/pages/qianchu/address.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{
  "id": 110000,
  "name": "北京市",
  "children": [{
    "id": 110100,
    "name": "北京市",
    "children": [{
      "id": 110101,
      "name": "东城区" },
    {
      "id": 110102,
      "name": "西城区" },
    {
      "id": 110105,
      "name": "朝阳区" },
    {
      "id": 110106,
      "name": "丰台区" },
    {
      "id": 110107,
      "name": "石景山区" },
    {
      "id": 110108,
      "name": "海淀区" },
    {
      "id": 110109,
      "name": "门头沟区" },
    {
      "id": 110111,
      "name": "房山区" },
    {
      "id": 110112,
      "name": "通州区" },
    {
      "id": 110113,
      "name": "顺义区" },
    {
      "id": 110114,
      "name": "昌平区" },
    {
      "id": 110115,
      "name": "大兴区" },
    {
      "id": 110116,
      "name": "怀柔区" },
    {
      "id": 110117,
      "name": "平谷区" },
    {
      "id": 110118,
      "name": "密云区" },
    {
      "id": 110119,
      "name": "延庆区" }] }] },


{
  "id": 120000,
  "name": "天津市",
  "children": [{
    "id": 120100,
    "name": "天津市",
    "children": [{
      "id": 120101,
      "name": "和平区" },
    {
      "id": 120102,
      "name": "河东区" },
    {
      "id": 120103,
      "name": "河西区" },
    {
      "id": 120104,
      "name": "南开区" },
    {
      "id": 120105,
      "name": "河北区" },
    {
      "id": 120106,
      "name": "红桥区" },
    {
      "id": 120110,
      "name": "东丽区" },
    {
      "id": 120111,
      "name": "西青区" },
    {
      "id": 120112,
      "name": "津南区" },
    {
      "id": 120113,
      "name": "北辰区" },
    {
      "id": 120114,
      "name": "武清区" },
    {
      "id": 120115,
      "name": "宝坻区" },
    {
      "id": 120116,
      "name": "滨海新区" },
    {
      "id": 120117,
      "name": "宁河区" },
    {
      "id": 120118,
      "name": "静海区" },
    {
      "id": 120119,
      "name": "蓟州区" }] }] },


{
  "id": 130000,
  "name": "河北省",
  "children": [{
    "id": 130100,
    "name": "石家庄市",
    "children": [{
      "id": 130102,
      "name": "长安区" },
    {
      "id": 130104,
      "name": "桥西区" },
    {
      "id": 130105,
      "name": "新华区" },
    {
      "id": 130107,
      "name": "井陉矿区" },
    {
      "id": 130108,
      "name": "裕华区" },
    {
      "id": 130109,
      "name": "藁城区" },
    {
      "id": 130110,
      "name": "鹿泉区" },
    {
      "id": 130111,
      "name": "栾城区" },
    {
      "id": 130121,
      "name": "井陉县" },
    {
      "id": 130123,
      "name": "正定县" },
    {
      "id": 130125,
      "name": "行唐县" },
    {
      "id": 130126,
      "name": "灵寿县" },
    {
      "id": 130127,
      "name": "高邑县" },
    {
      "id": 130128,
      "name": "深泽县" },
    {
      "id": 130129,
      "name": "赞皇县" },
    {
      "id": 130130,
      "name": "无极县" },
    {
      "id": 130131,
      "name": "平山县" },
    {
      "id": 130132,
      "name": "元氏县" },
    {
      "id": 130133,
      "name": "赵县" },
    {
      "id": 130181,
      "name": "辛集市" },
    {
      "id": 130183,
      "name": "晋州市" },
    {
      "id": 130184,
      "name": "新乐市" }] },

  {
    "id": 130200,
    "name": "唐山市",
    "children": [{
      "id": 130202,
      "name": "路南区" },
    {
      "id": 130203,
      "name": "路北区" },
    {
      "id": 130204,
      "name": "古冶区" },
    {
      "id": 130205,
      "name": "开平区" },
    {
      "id": 130207,
      "name": "丰南区" },
    {
      "id": 130208,
      "name": "丰润区" },
    {
      "id": 130209,
      "name": "曹妃甸区" },
    {
      "id": 130224,
      "name": "滦南县" },
    {
      "id": 130225,
      "name": "乐亭县" },
    {
      "id": 130227,
      "name": "迁西县" },
    {
      "id": 130229,
      "name": "玉田县" },
    {
      "id": 130230,
      "name": "芦台区" },
    {
      "id": 130281,
      "name": "遵化市" },
    {
      "id": 130283,
      "name": "迁安市" },
    {
      "id": 130284,
      "name": "滦州市" }] },

  {
    "id": 130300,
    "name": "秦皇岛市",
    "children": [{
      "id": 130302,
      "name": "海港区" },
    {
      "id": 130303,
      "name": "山海关区" },
    {
      "id": 130304,
      "name": "北戴河区" },
    {
      "id": 130306,
      "name": "抚宁区" },
    {
      "id": 130321,
      "name": "青龙满族自治县" },
    {
      "id": 130322,
      "name": "昌黎县" },
    {
      "id": 130324,
      "name": "卢龙县" }] },

  {
    "id": 130400,
    "name": "邯郸市",
    "children": [{
      "id": 130402,
      "name": "邯山区" },
    {
      "id": 130403,
      "name": "丛台区" },
    {
      "id": 130404,
      "name": "复兴区" },
    {
      "id": 130406,
      "name": "峰峰矿区" },
    {
      "id": 130407,
      "name": "肥乡区" },
    {
      "id": 130408,
      "name": "永年区" },
    {
      "id": 130423,
      "name": "临漳县" },
    {
      "id": 130424,
      "name": "成安县" },
    {
      "id": 130425,
      "name": "大名县" },
    {
      "id": 130426,
      "name": "涉县" },
    {
      "id": 130427,
      "name": "磁县" },
    {
      "id": 130430,
      "name": "邱县" },
    {
      "id": 130431,
      "name": "鸡泽县" },
    {
      "id": 130432,
      "name": "广平县" },
    {
      "id": 130433,
      "name": "馆陶县" },
    {
      "id": 130434,
      "name": "魏县" },
    {
      "id": 130435,
      "name": "曲周县" },
    {
      "id": 130481,
      "name": "武安市" }] },

  {
    "id": 130500,
    "name": "邢台市",
    "children": [{
      "id": 130502,
      "name": "桥东区" },
    {
      "id": 130503,
      "name": "桥西区" },
    {
      "id": 130521,
      "name": "邢台县" },
    {
      "id": 130522,
      "name": "临城县" },
    {
      "id": 130523,
      "name": "内丘县" },
    {
      "id": 130524,
      "name": "柏乡县" },
    {
      "id": 130525,
      "name": "隆尧县" },
    {
      "id": 130526,
      "name": "任县" },
    {
      "id": 130527,
      "name": "南和县" },
    {
      "id": 130528,
      "name": "宁晋县" },
    {
      "id": 130529,
      "name": "巨鹿县" },
    {
      "id": 130530,
      "name": "新河县" },
    {
      "id": 130531,
      "name": "广宗县" },
    {
      "id": 130532,
      "name": "平乡县" },
    {
      "id": 130533,
      "name": "威县" },
    {
      "id": 130534,
      "name": "清河县" },
    {
      "id": 130535,
      "name": "临西县" },
    {
      "id": 130581,
      "name": "南宫市" },
    {
      "id": 130582,
      "name": "沙河市" }] },

  {
    "id": 130600,
    "name": "保定市",
    "children": [{
      "id": 130602,
      "name": "竞秀区" },
    {
      "id": 130606,
      "name": "莲池区" },
    {
      "id": 130607,
      "name": "满城区" },
    {
      "id": 130608,
      "name": "清苑区" },
    {
      "id": 130609,
      "name": "徐水区" },
    {
      "id": 130623,
      "name": "涞水县" },
    {
      "id": 130624,
      "name": "阜平县" },
    {
      "id": 130626,
      "name": "定兴县" },
    {
      "id": 130627,
      "name": "唐县" },
    {
      "id": 130628,
      "name": "高阳县" },
    {
      "id": 130629,
      "name": "容城县" },
    {
      "id": 130630,
      "name": "涞源县" },
    {
      "id": 130631,
      "name": "望都县" },
    {
      "id": 130632,
      "name": "安新县" },
    {
      "id": 130633,
      "name": "易县" },
    {
      "id": 130634,
      "name": "曲阳县" },
    {
      "id": 130635,
      "name": "蠡县" },
    {
      "id": 130636,
      "name": "顺平县" },
    {
      "id": 130637,
      "name": "博野县" },
    {
      "id": 130638,
      "name": "雄县" },
    {
      "id": 130681,
      "name": "涿州市" },
    {
      "id": 130682,
      "name": "定州市" },
    {
      "id": 130683,
      "name": "安国市" },
    {
      "id": 130684,
      "name": "高碑店市" }] },

  {
    "id": 130700,
    "name": "张家口市",
    "children": [{
      "id": 130702,
      "name": "桥东区" },
    {
      "id": 130703,
      "name": "桥西区" },
    {
      "id": 130705,
      "name": "宣化区" },
    {
      "id": 130706,
      "name": "下花园区" },
    {
      "id": 130708,
      "name": "万全区" },
    {
      "id": 130709,
      "name": "崇礼区" },
    {
      "id": 130722,
      "name": "张北县" },
    {
      "id": 130723,
      "name": "康保县" },
    {
      "id": 130724,
      "name": "沽源县" },
    {
      "id": 130725,
      "name": "尚义县" },
    {
      "id": 130726,
      "name": "蔚县" },
    {
      "id": 130727,
      "name": "阳原县" },
    {
      "id": 130728,
      "name": "怀安县" },
    {
      "id": 130730,
      "name": "怀来县" },
    {
      "id": 130731,
      "name": "涿鹿县" },
    {
      "id": 130732,
      "name": "赤城县" }] },

  {
    "id": 130800,
    "name": "承德市",
    "children": [{
      "id": 130802,
      "name": "双桥区" },
    {
      "id": 130803,
      "name": "双滦区" },
    {
      "id": 130804,
      "name": "鹰手营子矿区" },
    {
      "id": 130821,
      "name": "承德县" },
    {
      "id": 130822,
      "name": "兴隆县" },
    {
      "id": 130824,
      "name": "滦平县" },
    {
      "id": 130825,
      "name": "隆化县" },
    {
      "id": 130826,
      "name": "丰宁满族自治县" },
    {
      "id": 130827,
      "name": "宽城满族自治县" },
    {
      "id": 130828,
      "name": "围场满族蒙古族自治县" },
    {
      "id": 130881,
      "name": "平泉市" }] },

  {
    "id": 130900,
    "name": "沧州市",
    "children": [{
      "id": 130902,
      "name": "新华区" },
    {
      "id": 130903,
      "name": "运河区" },
    {
      "id": 130921,
      "name": "沧县" },
    {
      "id": 130922,
      "name": "青县" },
    {
      "id": 130923,
      "name": "东光县" },
    {
      "id": 130924,
      "name": "海兴县" },
    {
      "id": 130925,
      "name": "盐山县" },
    {
      "id": 130926,
      "name": "肃宁县" },
    {
      "id": 130927,
      "name": "南皮县" },
    {
      "id": 130928,
      "name": "吴桥县" },
    {
      "id": 130929,
      "name": "献县" },
    {
      "id": 130930,
      "name": "孟村回族自治县" },
    {
      "id": 130981,
      "name": "泊头市" },
    {
      "id": 130982,
      "name": "任丘市" },
    {
      "id": 130983,
      "name": "黄骅市" },
    {
      "id": 130984,
      "name": "河间市" }] },

  {
    "id": 131000,
    "name": "廊坊市",
    "children": [{
      "id": 131002,
      "name": "安次区" },
    {
      "id": 131003,
      "name": "广阳区" },
    {
      "id": 131022,
      "name": "固安县" },
    {
      "id": 131023,
      "name": "永清县" },
    {
      "id": 131024,
      "name": "香河县" },
    {
      "id": 131025,
      "name": "大城县" },
    {
      "id": 131026,
      "name": "文安县" },
    {
      "id": 131028,
      "name": "大厂回族自治县" },
    {
      "id": 131081,
      "name": "霸州市" },
    {
      "id": 131082,
      "name": "三河市" }] },

  {
    "id": 131100,
    "name": "衡水市",
    "children": [{
      "id": 131102,
      "name": "桃城区" },
    {
      "id": 131103,
      "name": "冀州区" },
    {
      "id": 131121,
      "name": "枣强县" },
    {
      "id": 131122,
      "name": "武邑县" },
    {
      "id": 131123,
      "name": "武强县" },
    {
      "id": 131124,
      "name": "饶阳县" },
    {
      "id": 131125,
      "name": "安平县" },
    {
      "id": 131126,
      "name": "故城县" },
    {
      "id": 131127,
      "name": "景县" },
    {
      "id": 131128,
      "name": "阜城县" },
    {
      "id": 131182,
      "name": "深州市" }] }] },


{
  "id": 140000,
  "name": "山西省",
  "children": [{
    "id": 140100,
    "name": "太原市",
    "children": [{
      "id": 140105,
      "name": "小店区" },
    {
      "id": 140106,
      "name": "迎泽区" },
    {
      "id": 140107,
      "name": "杏花岭区" },
    {
      "id": 140108,
      "name": "尖草坪区" },
    {
      "id": 140109,
      "name": "万柏林区" },
    {
      "id": 140110,
      "name": "晋源区" },
    {
      "id": 140121,
      "name": "清徐县" },
    {
      "id": 140122,
      "name": "阳曲县" },
    {
      "id": 140123,
      "name": "娄烦县" },
    {
      "id": 140181,
      "name": "古交市" }] },

  {
    "id": 140200,
    "name": "大同市",
    "children": [{
      "id": 140212,
      "name": "新荣区" },
    {
      "id": 140213,
      "name": "平城区" },
    {
      "id": 140214,
      "name": "云冈区" },
    {
      "id": 140215,
      "name": "云州区" },
    {
      "id": 140221,
      "name": "阳高县" },
    {
      "id": 140222,
      "name": "天镇县" },
    {
      "id": 140223,
      "name": "广灵县" },
    {
      "id": 140224,
      "name": "灵丘县" },
    {
      "id": 140225,
      "name": "浑源县" },
    {
      "id": 140226,
      "name": "左云县" }] },

  {
    "id": 140300,
    "name": "阳泉市",
    "children": [{
      "id": 140302,
      "name": "城区" },
    {
      "id": 140303,
      "name": "矿区" },
    {
      "id": 140311,
      "name": "郊区" },
    {
      "id": 140321,
      "name": "平定县" },
    {
      "id": 140322,
      "name": "盂县" }] },

  {
    "id": 140400,
    "name": "长治市",
    "children": [{
      "id": 140403,
      "name": "潞州区" },
    {
      "id": 140404,
      "name": "上党区" },
    {
      "id": 140405,
      "name": "屯留区" },
    {
      "id": 140406,
      "name": "潞城区" },
    {
      "id": 140423,
      "name": "襄垣县" },
    {
      "id": 140425,
      "name": "平顺县" },
    {
      "id": 140426,
      "name": "黎城县" },
    {
      "id": 140427,
      "name": "壶关县" },
    {
      "id": 140428,
      "name": "长子县" },
    {
      "id": 140429,
      "name": "武乡县" },
    {
      "id": 140430,
      "name": "沁县" },
    {
      "id": 140431,
      "name": "沁源县" }] },

  {
    "id": 140500,
    "name": "晋城市",
    "children": [{
      "id": 140502,
      "name": "城区" },
    {
      "id": 140521,
      "name": "沁水县" },
    {
      "id": 140522,
      "name": "阳城县" },
    {
      "id": 140524,
      "name": "陵川县" },
    {
      "id": 140525,
      "name": "泽州县" },
    {
      "id": 140581,
      "name": "高平市" }] },

  {
    "id": 140600,
    "name": "朔州市",
    "children": [{
      "id": 140602,
      "name": "朔城区" },
    {
      "id": 140603,
      "name": "平鲁区" },
    {
      "id": 140621,
      "name": "山阴县" },
    {
      "id": 140622,
      "name": "应县" },
    {
      "id": 140623,
      "name": "右玉县" },
    {
      "id": 140681,
      "name": "怀仁市" }] },

  {
    "id": 140700,
    "name": "晋中市",
    "children": [{
      "id": 140702,
      "name": "榆次区" },
    {
      "id": 140721,
      "name": "榆社县" },
    {
      "id": 140722,
      "name": "左权县" },
    {
      "id": 140723,
      "name": "和顺县" },
    {
      "id": 140724,
      "name": "昔阳县" },
    {
      "id": 140725,
      "name": "寿阳县" },
    {
      "id": 140726,
      "name": "太谷县" },
    {
      "id": 140727,
      "name": "祁县" },
    {
      "id": 140728,
      "name": "平遥县" },
    {
      "id": 140729,
      "name": "灵石县" },
    {
      "id": 140781,
      "name": "介休市" }] },

  {
    "id": 140800,
    "name": "运城市",
    "children": [{
      "id": 140802,
      "name": "盐湖区" },
    {
      "id": 140821,
      "name": "临猗县" },
    {
      "id": 140822,
      "name": "万荣县" },
    {
      "id": 140823,
      "name": "闻喜县" },
    {
      "id": 140824,
      "name": "稷山县" },
    {
      "id": 140825,
      "name": "新绛县" },
    {
      "id": 140826,
      "name": "绛县" },
    {
      "id": 140827,
      "name": "垣曲县" },
    {
      "id": 140828,
      "name": "夏县" },
    {
      "id": 140829,
      "name": "平陆县" },
    {
      "id": 140830,
      "name": "芮城县" },
    {
      "id": 140881,
      "name": "永济市" },
    {
      "id": 140882,
      "name": "河津市" }] },

  {
    "id": 140900,
    "name": "忻州市",
    "children": [{
      "id": 140902,
      "name": "忻府区" },
    {
      "id": 140921,
      "name": "定襄县" },
    {
      "id": 140922,
      "name": "五台县" },
    {
      "id": 140923,
      "name": "代县" },
    {
      "id": 140924,
      "name": "繁峙县" },
    {
      "id": 140925,
      "name": "宁武县" },
    {
      "id": 140926,
      "name": "静乐县" },
    {
      "id": 140927,
      "name": "神池县" },
    {
      "id": 140928,
      "name": "五寨县" },
    {
      "id": 140929,
      "name": "岢岚县" },
    {
      "id": 140930,
      "name": "河曲县" },
    {
      "id": 140931,
      "name": "保德县" },
    {
      "id": 140932,
      "name": "偏关县" },
    {
      "id": 140981,
      "name": "原平市" }] },

  {
    "id": 141000,
    "name": "临汾市",
    "children": [{
      "id": 141002,
      "name": "尧都区" },
    {
      "id": 141021,
      "name": "曲沃县" },
    {
      "id": 141022,
      "name": "翼城县" },
    {
      "id": 141023,
      "name": "襄汾县" },
    {
      "id": 141024,
      "name": "洪洞县" },
    {
      "id": 141025,
      "name": "古县" },
    {
      "id": 141026,
      "name": "安泽县" },
    {
      "id": 141027,
      "name": "浮山县" },
    {
      "id": 141028,
      "name": "吉县" },
    {
      "id": 141029,
      "name": "乡宁县" },
    {
      "id": 141030,
      "name": "大宁县" },
    {
      "id": 141031,
      "name": "隰县" },
    {
      "id": 141032,
      "name": "永和县" },
    {
      "id": 141033,
      "name": "蒲县" },
    {
      "id": 141034,
      "name": "汾西县" },
    {
      "id": 141081,
      "name": "侯马市" },
    {
      "id": 141082,
      "name": "霍州市" }] },

  {
    "id": 141100,
    "name": "吕梁市",
    "children": [{
      "id": 141102,
      "name": "离石区" },
    {
      "id": 141121,
      "name": "文水县" },
    {
      "id": 141122,
      "name": "交城县" },
    {
      "id": 141123,
      "name": "兴县" },
    {
      "id": 141124,
      "name": "临县" },
    {
      "id": 141125,
      "name": "柳林县" },
    {
      "id": 141126,
      "name": "石楼县" },
    {
      "id": 141127,
      "name": "岚县" },
    {
      "id": 141128,
      "name": "方山县" },
    {
      "id": 141129,
      "name": "中阳县" },
    {
      "id": 141130,
      "name": "交口县" },
    {
      "id": 141181,
      "name": "孝义市" },
    {
      "id": 141182,
      "name": "汾阳市" }] }] },


{
  "id": 150000,
  "name": "内蒙古自治区",
  "children": [{
    "id": 150100,
    "name": "呼和浩特市",
    "children": [{
      "id": 150102,
      "name": "新城区" },
    {
      "id": 150103,
      "name": "回民区" },
    {
      "id": 150104,
      "name": "玉泉区" },
    {
      "id": 150105,
      "name": "赛罕区" },
    {
      "id": 150121,
      "name": "土默特左旗" },
    {
      "id": 150122,
      "name": "托克托县" },
    {
      "id": 150123,
      "name": "和林格尔县" },
    {
      "id": 150124,
      "name": "清水河县" },
    {
      "id": 150125,
      "name": "武川县" }] },

  {
    "id": 150200,
    "name": "包头市",
    "children": [{
      "id": 150202,
      "name": "东河区" },
    {
      "id": 150203,
      "name": "昆都仑区" },
    {
      "id": 150204,
      "name": "青山区" },
    {
      "id": 150205,
      "name": "石拐区" },
    {
      "id": 150206,
      "name": "白云鄂博矿区" },
    {
      "id": 150207,
      "name": "九原区" },
    {
      "id": 150221,
      "name": "土默特右旗" },
    {
      "id": 150222,
      "name": "固阳县" },
    {
      "id": 150223,
      "name": "达尔罕茂明安联合旗" }] },

  {
    "id": 150300,
    "name": "乌海市",
    "children": [{
      "id": 150302,
      "name": "海勃湾区" },
    {
      "id": 150303,
      "name": "海南区" },
    {
      "id": 150304,
      "name": "乌达区" }] },

  {
    "id": 150400,
    "name": "赤峰市",
    "children": [{
      "id": 150402,
      "name": "红山区" },
    {
      "id": 150403,
      "name": "元宝山区" },
    {
      "id": 150404,
      "name": "松山区" },
    {
      "id": 150421,
      "name": "阿鲁科尔沁旗" },
    {
      "id": 150422,
      "name": "巴林左旗" },
    {
      "id": 150423,
      "name": "巴林右旗" },
    {
      "id": 150424,
      "name": "林西县" },
    {
      "id": 150425,
      "name": "克什克腾旗" },
    {
      "id": 150426,
      "name": "翁牛特旗" },
    {
      "id": 150428,
      "name": "喀喇沁旗" },
    {
      "id": 150429,
      "name": "宁城县" },
    {
      "id": 150430,
      "name": "敖汉旗" }] },

  {
    "id": 150500,
    "name": "通辽市",
    "children": [{
      "id": 150502,
      "name": "科尔沁区" },
    {
      "id": 150521,
      "name": "科尔沁左翼中旗" },
    {
      "id": 150522,
      "name": "科尔沁左翼后旗" },
    {
      "id": 150523,
      "name": "开鲁县" },
    {
      "id": 150524,
      "name": "库伦旗" },
    {
      "id": 150525,
      "name": "奈曼旗" },
    {
      "id": 150526,
      "name": "扎鲁特旗" },
    {
      "id": 150581,
      "name": "霍林郭勒市" }] },

  {
    "id": 150600,
    "name": "鄂尔多斯市",
    "children": [{
      "id": 150602,
      "name": "东胜区" },
    {
      "id": 150603,
      "name": "康巴什区" },
    {
      "id": 150621,
      "name": "达拉特旗" },
    {
      "id": 150622,
      "name": "准格尔旗" },
    {
      "id": 150623,
      "name": "鄂托克前旗" },
    {
      "id": 150624,
      "name": "鄂托克旗" },
    {
      "id": 150625,
      "name": "杭锦旗" },
    {
      "id": 150626,
      "name": "乌审旗" },
    {
      "id": 150627,
      "name": "伊金霍洛旗" }] },

  {
    "id": 150700,
    "name": "呼伦贝尔市",
    "children": [{
      "id": 150702,
      "name": "海拉尔区" },
    {
      "id": 150703,
      "name": "扎赉诺尔区" },
    {
      "id": 150721,
      "name": "阿荣旗" },
    {
      "id": 150722,
      "name": "莫力达瓦达斡尔族自治旗" },
    {
      "id": 150723,
      "name": "鄂伦春自治旗" },
    {
      "id": 150724,
      "name": "鄂温克族自治旗" },
    {
      "id": 150725,
      "name": "陈巴尔虎旗" },
    {
      "id": 150726,
      "name": "新巴尔虎左旗" },
    {
      "id": 150727,
      "name": "新巴尔虎右旗" },
    {
      "id": 150781,
      "name": "满洲里市" },
    {
      "id": 150782,
      "name": "牙克石市" },
    {
      "id": 150783,
      "name": "扎兰屯市" },
    {
      "id": 150784,
      "name": "额尔古纳市" },
    {
      "id": 150785,
      "name": "根河市" }] },

  {
    "id": 150800,
    "name": "巴彦淖尔市",
    "children": [{
      "id": 150802,
      "name": "临河区" },
    {
      "id": 150821,
      "name": "五原县" },
    {
      "id": 150822,
      "name": "磴口县" },
    {
      "id": 150823,
      "name": "乌拉特前旗" },
    {
      "id": 150824,
      "name": "乌拉特中旗" },
    {
      "id": 150825,
      "name": "乌拉特后旗" },
    {
      "id": 150826,
      "name": "杭锦后旗" }] },

  {
    "id": 150900,
    "name": "乌兰察布市",
    "children": [{
      "id": 150902,
      "name": "集宁区" },
    {
      "id": 150921,
      "name": "卓资县" },
    {
      "id": 150922,
      "name": "化德县" },
    {
      "id": 150923,
      "name": "商都县" },
    {
      "id": 150924,
      "name": "兴和县" },
    {
      "id": 150925,
      "name": "凉城县" },
    {
      "id": 150926,
      "name": "察哈尔右翼前旗" },
    {
      "id": 150927,
      "name": "察哈尔右翼中旗" },
    {
      "id": 150928,
      "name": "察哈尔右翼后旗" },
    {
      "id": 150929,
      "name": "四子王旗" },
    {
      "id": 150981,
      "name": "丰镇市" }] },

  {
    "id": 152200,
    "name": "兴安盟",
    "children": [{
      "id": 152201,
      "name": "乌兰浩特市" },
    {
      "id": 152202,
      "name": "阿尔山市" },
    {
      "id": 152221,
      "name": "科尔沁右翼前旗" },
    {
      "id": 152222,
      "name": "科尔沁右翼中旗" },
    {
      "id": 152223,
      "name": "扎赉特旗" },
    {
      "id": 152224,
      "name": "突泉县" }] },

  {
    "id": 152500,
    "name": "锡林郭勒盟",
    "children": [{
      "id": 152501,
      "name": "二连浩特市" },
    {
      "id": 152502,
      "name": "锡林浩特市" },
    {
      "id": 152522,
      "name": "阿巴嘎旗" },
    {
      "id": 152523,
      "name": "苏尼特左旗" },
    {
      "id": 152524,
      "name": "苏尼特右旗" },
    {
      "id": 152525,
      "name": "东乌珠穆沁旗" },
    {
      "id": 152526,
      "name": "西乌珠穆沁旗" },
    {
      "id": 152527,
      "name": "太仆寺旗" },
    {
      "id": 152528,
      "name": "镶黄旗" },
    {
      "id": 152529,
      "name": "正镶白旗" },
    {
      "id": 152530,
      "name": "正蓝旗" },
    {
      "id": 152531,
      "name": "多伦县" }] },

  {
    "id": 152900,
    "name": "阿拉善盟",
    "children": [{
      "id": 152921,
      "name": "阿拉善左旗" },
    {
      "id": 152922,
      "name": "阿拉善右旗" },
    {
      "id": 152923,
      "name": "额济纳旗" }] }] },


{
  "id": 210000,
  "name": "辽宁省",
  "children": [{
    "id": 210100,
    "name": "沈阳市",
    "children": [{
      "id": 210102,
      "name": "和平区" },
    {
      "id": 210103,
      "name": "沈河区" },
    {
      "id": 210104,
      "name": "大东区" },
    {
      "id": 210105,
      "name": "皇姑区" },
    {
      "id": 210106,
      "name": "铁西区" },
    {
      "id": 210111,
      "name": "苏家屯区" },
    {
      "id": 210112,
      "name": "浑南区" },
    {
      "id": 210113,
      "name": "沈北新区" },
    {
      "id": 210114,
      "name": "于洪区" },
    {
      "id": 210115,
      "name": "辽中区" },
    {
      "id": 210123,
      "name": "康平县" },
    {
      "id": 210124,
      "name": "法库县" },
    {
      "id": 210181,
      "name": "新民市" }] },

  {
    "id": 210200,
    "name": "大连市",
    "children": [{
      "id": 210202,
      "name": "中山区" },
    {
      "id": 210203,
      "name": "西岗区" },
    {
      "id": 210204,
      "name": "沙河口区" },
    {
      "id": 210211,
      "name": "甘井子区" },
    {
      "id": 210212,
      "name": "旅顺口区" },
    {
      "id": 210213,
      "name": "金州区" },
    {
      "id": 210214,
      "name": "普兰店区" },
    {
      "id": 210224,
      "name": "长海县" },
    {
      "id": 210281,
      "name": "瓦房店市" },
    {
      "id": 210283,
      "name": "庄河市" }] },

  {
    "id": 210300,
    "name": "鞍山市",
    "children": [{
      "id": 210302,
      "name": "铁东区" },
    {
      "id": 210303,
      "name": "铁西区" },
    {
      "id": 210304,
      "name": "立山区" },
    {
      "id": 210311,
      "name": "千山区" },
    {
      "id": 210321,
      "name": "台安县" },
    {
      "id": 210323,
      "name": "岫岩满族自治县" },
    {
      "id": 210381,
      "name": "海城市" }] },

  {
    "id": 210400,
    "name": "抚顺市",
    "children": [{
      "id": 210402,
      "name": "新抚区" },
    {
      "id": 210403,
      "name": "东洲区" },
    {
      "id": 210404,
      "name": "望花区" },
    {
      "id": 210411,
      "name": "顺城区" },
    {
      "id": 210421,
      "name": "抚顺县" },
    {
      "id": 210422,
      "name": "新宾满族自治县" },
    {
      "id": 210423,
      "name": "清原满族自治县" }] },

  {
    "id": 210500,
    "name": "本溪市",
    "children": [{
      "id": 210502,
      "name": "平山区" },
    {
      "id": 210503,
      "name": "溪湖区" },
    {
      "id": 210504,
      "name": "明山区" },
    {
      "id": 210505,
      "name": "南芬区" },
    {
      "id": 210521,
      "name": "本溪满族自治县" },
    {
      "id": 210522,
      "name": "桓仁满族自治县" }] },

  {
    "id": 210600,
    "name": "丹东市",
    "children": [{
      "id": 210602,
      "name": "元宝区" },
    {
      "id": 210603,
      "name": "振兴区" },
    {
      "id": 210604,
      "name": "振安区" },
    {
      "id": 210624,
      "name": "宽甸满族自治县" },
    {
      "id": 210681,
      "name": "东港市" },
    {
      "id": 210682,
      "name": "凤城市" }] },

  {
    "id": 210700,
    "name": "锦州市",
    "children": [{
      "id": 210702,
      "name": "古塔区" },
    {
      "id": 210703,
      "name": "凌河区" },
    {
      "id": 210711,
      "name": "太和区" },
    {
      "id": 210726,
      "name": "黑山县" },
    {
      "id": 210727,
      "name": "义县" },
    {
      "id": 210781,
      "name": "凌海市" },
    {
      "id": 210782,
      "name": "北镇市" }] },

  {
    "id": 210800,
    "name": "营口市",
    "children": [{
      "id": 210802,
      "name": "站前区" },
    {
      "id": 210803,
      "name": "西市区" },
    {
      "id": 210804,
      "name": "鲅鱼圈区" },
    {
      "id": 210811,
      "name": "老边区" },
    {
      "id": 210881,
      "name": "盖州市" },
    {
      "id": 210882,
      "name": "大石桥市" }] },

  {
    "id": 210900,
    "name": "阜新市",
    "children": [{
      "id": 210902,
      "name": "海州区" },
    {
      "id": 210903,
      "name": "新邱区" },
    {
      "id": 210904,
      "name": "太平区" },
    {
      "id": 210905,
      "name": "清河门区" },
    {
      "id": 210911,
      "name": "细河区" },
    {
      "id": 210921,
      "name": "阜新蒙古族自治县" },
    {
      "id": 210922,
      "name": "彰武县" }] },

  {
    "id": 211000,
    "name": "辽阳市",
    "children": [{
      "id": 211002,
      "name": "白塔区" },
    {
      "id": 211003,
      "name": "文圣区" },
    {
      "id": 211004,
      "name": "宏伟区" },
    {
      "id": 211005,
      "name": "弓长岭区" },
    {
      "id": 211011,
      "name": "太子河区" },
    {
      "id": 211021,
      "name": "辽阳县" },
    {
      "id": 211081,
      "name": "灯塔市" }] },

  {
    "id": 211100,
    "name": "盘锦市",
    "children": [{
      "id": 211102,
      "name": "双台子区" },
    {
      "id": 211103,
      "name": "兴隆台区" },
    {
      "id": 211104,
      "name": "大洼区" },
    {
      "id": 211122,
      "name": "盘山县" }] },

  {
    "id": 211200,
    "name": "铁岭市",
    "children": [{
      "id": 211202,
      "name": "银州区" },
    {
      "id": 211204,
      "name": "清河区" },
    {
      "id": 211221,
      "name": "铁岭县" },
    {
      "id": 211223,
      "name": "西丰县" },
    {
      "id": 211224,
      "name": "昌图县" },
    {
      "id": 211281,
      "name": "调兵山市" },
    {
      "id": 211282,
      "name": "开原市" }] },

  {
    "id": 211300,
    "name": "朝阳市",
    "children": [{
      "id": 211302,
      "name": "双塔区" },
    {
      "id": 211303,
      "name": "龙城区" },
    {
      "id": 211321,
      "name": "朝阳县" },
    {
      "id": 211322,
      "name": "建平县" },
    {
      "id": 211324,
      "name": "喀喇沁左翼蒙古族自治县" },
    {
      "id": 211381,
      "name": "北票市" },
    {
      "id": 211382,
      "name": "凌源市" }] },

  {
    "id": 211400,
    "name": "葫芦岛市",
    "children": [{
      "id": 211402,
      "name": "连山区" },
    {
      "id": 211403,
      "name": "龙港区" },
    {
      "id": 211404,
      "name": "南票区" },
    {
      "id": 211421,
      "name": "绥中县" },
    {
      "id": 211422,
      "name": "建昌县" },
    {
      "id": 211481,
      "name": "兴城市" }] }] },


{
  "id": 220000,
  "name": "吉林省",
  "children": [{
    "id": 220100,
    "name": "长春市",
    "children": [{
      "id": 220102,
      "name": "南关区" },
    {
      "id": 220103,
      "name": "宽城区" },
    {
      "id": 220104,
      "name": "朝阳区" },
    {
      "id": 220105,
      "name": "二道区" },
    {
      "id": 220106,
      "name": "绿园区" },
    {
      "id": 220112,
      "name": "双阳区" },
    {
      "id": 220113,
      "name": "九台区" },
    {
      "id": 220122,
      "name": "农安县" },
    {
      "id": 220182,
      "name": "榆树市" },
    {
      "id": 220183,
      "name": "德惠市" }] },

  {
    "id": 220200,
    "name": "吉林市",
    "children": [{
      "id": 220202,
      "name": "昌邑区" },
    {
      "id": 220203,
      "name": "龙潭区" },
    {
      "id": 220204,
      "name": "船营区" },
    {
      "id": 220211,
      "name": "丰满区" },
    {
      "id": 220221,
      "name": "永吉县" },
    {
      "id": 220281,
      "name": "蛟河市" },
    {
      "id": 220282,
      "name": "桦甸市" },
    {
      "id": 220283,
      "name": "舒兰市" },
    {
      "id": 220284,
      "name": "磐石市" }] },

  {
    "id": 220300,
    "name": "四平市",
    "children": [{
      "id": 220302,
      "name": "铁西区" },
    {
      "id": 220303,
      "name": "铁东区" },
    {
      "id": 220322,
      "name": "梨树县" },
    {
      "id": 220323,
      "name": "伊通满族自治县" },
    {
      "id": 220381,
      "name": "公主岭市" },
    {
      "id": 220382,
      "name": "双辽市" }] },

  {
    "id": 220400,
    "name": "辽源市",
    "children": [{
      "id": 220402,
      "name": "龙山区" },
    {
      "id": 220403,
      "name": "西安区" },
    {
      "id": 220421,
      "name": "东丰县" },
    {
      "id": 220422,
      "name": "东辽县" }] },

  {
    "id": 220500,
    "name": "通化市",
    "children": [{
      "id": 220502,
      "name": "东昌区" },
    {
      "id": 220503,
      "name": "二道江区" },
    {
      "id": 220521,
      "name": "通化县" },
    {
      "id": 220523,
      "name": "辉南县" },
    {
      "id": 220524,
      "name": "柳河县" },
    {
      "id": 220581,
      "name": "梅河口市" },
    {
      "id": 220582,
      "name": "集安市" }] },

  {
    "id": 220600,
    "name": "白山市",
    "children": [{
      "id": 220602,
      "name": "浑江区" },
    {
      "id": 220605,
      "name": "江源区" },
    {
      "id": 220621,
      "name": "抚松县" },
    {
      "id": 220622,
      "name": "靖宇县" },
    {
      "id": 220623,
      "name": "长白朝鲜族自治县" },
    {
      "id": 220681,
      "name": "临江市" }] },

  {
    "id": 220700,
    "name": "松原市",
    "children": [{
      "id": 220702,
      "name": "宁江区" },
    {
      "id": 220721,
      "name": "前郭尔罗斯蒙古族自治县" },
    {
      "id": 220722,
      "name": "长岭县" },
    {
      "id": 220723,
      "name": "乾安县" },
    {
      "id": 220781,
      "name": "扶余市" }] },

  {
    "id": 220800,
    "name": "白城市",
    "children": [{
      "id": 220802,
      "name": "洮北区" },
    {
      "id": 220821,
      "name": "镇赉县" },
    {
      "id": 220822,
      "name": "通榆县" },
    {
      "id": 220881,
      "name": "洮南市" },
    {
      "id": 220882,
      "name": "大安市" }] },

  {
    "id": 222400,
    "name": "延边朝鲜族自治州",
    "children": [{
      "id": 222401,
      "name": "延吉市" },
    {
      "id": 222402,
      "name": "图们市" },
    {
      "id": 222403,
      "name": "敦化市" },
    {
      "id": 222404,
      "name": "珲春市" },
    {
      "id": 222405,
      "name": "龙井市" },
    {
      "id": 222406,
      "name": "和龙市" },
    {
      "id": 222424,
      "name": "汪清县" },
    {
      "id": 222426,
      "name": "安图县" }] }] },


{
  "id": 230000,
  "name": "黑龙江省",
  "children": [{
    "id": 230100,
    "name": "哈尔滨市",
    "children": [{
      "id": 230102,
      "name": "道里区" },
    {
      "id": 230103,
      "name": "南岗区" },
    {
      "id": 230104,
      "name": "道外区" },
    {
      "id": 230108,
      "name": "平房区" },
    {
      "id": 230109,
      "name": "松北区" },
    {
      "id": 230110,
      "name": "香坊区" },
    {
      "id": 230111,
      "name": "呼兰区" },
    {
      "id": 230112,
      "name": "阿城区" },
    {
      "id": 230113,
      "name": "双城区" },
    {
      "id": 230123,
      "name": "依兰县" },
    {
      "id": 230124,
      "name": "方正县" },
    {
      "id": 230125,
      "name": "宾县" },
    {
      "id": 230126,
      "name": "巴彦县" },
    {
      "id": 230127,
      "name": "木兰县" },
    {
      "id": 230128,
      "name": "通河县" },
    {
      "id": 230129,
      "name": "延寿县" },
    {
      "id": 230183,
      "name": "尚志市" },
    {
      "id": 230184,
      "name": "五常市" }] },

  {
    "id": 230200,
    "name": "齐齐哈尔市",
    "children": [{
      "id": 230202,
      "name": "龙沙区" },
    {
      "id": 230203,
      "name": "建华区" },
    {
      "id": 230204,
      "name": "铁锋区" },
    {
      "id": 230205,
      "name": "昂昂溪区" },
    {
      "id": 230206,
      "name": "富拉尔基区" },
    {
      "id": 230207,
      "name": "碾子山区" },
    {
      "id": 230208,
      "name": "梅里斯达斡尔族区" },
    {
      "id": 230221,
      "name": "龙江县" },
    {
      "id": 230223,
      "name": "依安县" },
    {
      "id": 230224,
      "name": "泰来县" },
    {
      "id": 230225,
      "name": "甘南县" },
    {
      "id": 230227,
      "name": "富裕县" },
    {
      "id": 230229,
      "name": "克山县" },
    {
      "id": 230230,
      "name": "克东县" },
    {
      "id": 230231,
      "name": "拜泉县" },
    {
      "id": 230281,
      "name": "讷河市" }] },

  {
    "id": 230300,
    "name": "鸡西市",
    "children": [{
      "id": 230302,
      "name": "鸡冠区" },
    {
      "id": 230303,
      "name": "恒山区" },
    {
      "id": 230304,
      "name": "滴道区" },
    {
      "id": 230305,
      "name": "梨树区" },
    {
      "id": 230306,
      "name": "城子河区" },
    {
      "id": 230307,
      "name": "麻山区" },
    {
      "id": 230321,
      "name": "鸡东县" },
    {
      "id": 230381,
      "name": "虎林市" },
    {
      "id": 230382,
      "name": "密山市" }] },

  {
    "id": 230400,
    "name": "鹤岗市",
    "children": [{
      "id": 230402,
      "name": "向阳区" },
    {
      "id": 230403,
      "name": "工农区" },
    {
      "id": 230404,
      "name": "南山区" },
    {
      "id": 230405,
      "name": "兴安区" },
    {
      "id": 230406,
      "name": "东山区" },
    {
      "id": 230407,
      "name": "兴山区" },
    {
      "id": 230421,
      "name": "萝北县" },
    {
      "id": 230422,
      "name": "绥滨县" }] },

  {
    "id": 230500,
    "name": "双鸭山市",
    "children": [{
      "id": 230502,
      "name": "尖山区" },
    {
      "id": 230503,
      "name": "岭东区" },
    {
      "id": 230505,
      "name": "四方台区" },
    {
      "id": 230506,
      "name": "宝山区" },
    {
      "id": 230521,
      "name": "集贤县" },
    {
      "id": 230522,
      "name": "友谊县" },
    {
      "id": 230523,
      "name": "宝清县" },
    {
      "id": 230524,
      "name": "饶河县" }] },

  {
    "id": 230600,
    "name": "大庆市",
    "children": [{
      "id": 230602,
      "name": "萨尔图区" },
    {
      "id": 230603,
      "name": "龙凤区" },
    {
      "id": 230604,
      "name": "让胡路区" },
    {
      "id": 230605,
      "name": "红岗区" },
    {
      "id": 230606,
      "name": "大同区" },
    {
      "id": 230621,
      "name": "肇州县" },
    {
      "id": 230622,
      "name": "肇源县" },
    {
      "id": 230623,
      "name": "林甸县" },
    {
      "id": 230624,
      "name": "杜尔伯特蒙古族自治县" }] },

  {
    "id": 230700,
    "name": "伊春市",
    "children": [{
      "id": 230702,
      "name": "伊春区" },
    {
      "id": 230703,
      "name": "南岔区" },
    {
      "id": 230704,
      "name": "友好区" },
    {
      "id": 230705,
      "name": "西林区" },
    {
      "id": 230706,
      "name": "翠峦区" },
    {
      "id": 230707,
      "name": "新青区" },
    {
      "id": 230708,
      "name": "美溪区" },
    {
      "id": 230709,
      "name": "金山屯区" },
    {
      "id": 230710,
      "name": "五营区" },
    {
      "id": 230711,
      "name": "乌马河区" },
    {
      "id": 230712,
      "name": "汤旺河区" },
    {
      "id": 230713,
      "name": "带岭区" },
    {
      "id": 230714,
      "name": "乌伊岭区" },
    {
      "id": 230715,
      "name": "红星区" },
    {
      "id": 230716,
      "name": "上甘岭区" },
    {
      "id": 230722,
      "name": "嘉荫县" },
    {
      "id": 230781,
      "name": "铁力市" }] },

  {
    "id": 230800,
    "name": "佳木斯市",
    "children": [{
      "id": 230803,
      "name": "向阳区" },
    {
      "id": 230804,
      "name": "前进区" },
    {
      "id": 230805,
      "name": "东风区" },
    {
      "id": 230811,
      "name": "郊区" },
    {
      "id": 230822,
      "name": "桦南县" },
    {
      "id": 230826,
      "name": "桦川县" },
    {
      "id": 230828,
      "name": "汤原县" },
    {
      "id": 230881,
      "name": "同江市" },
    {
      "id": 230882,
      "name": "富锦市" },
    {
      "id": 230883,
      "name": "抚远市" }] },

  {
    "id": 230900,
    "name": "七台河市",
    "children": [{
      "id": 230902,
      "name": "新兴区" },
    {
      "id": 230903,
      "name": "桃山区" },
    {
      "id": 230904,
      "name": "茄子河区" },
    {
      "id": 230921,
      "name": "勃利县" }] },

  {
    "id": 231000,
    "name": "牡丹江市",
    "children": [{
      "id": 231002,
      "name": "东安区" },
    {
      "id": 231003,
      "name": "阳明区" },
    {
      "id": 231004,
      "name": "爱民区" },
    {
      "id": 231005,
      "name": "西安区" },
    {
      "id": 231025,
      "name": "林口县" },
    {
      "id": 231081,
      "name": "绥芬河市" },
    {
      "id": 231083,
      "name": "海林市" },
    {
      "id": 231084,
      "name": "宁安市" },
    {
      "id": 231085,
      "name": "穆棱市" },
    {
      "id": 231086,
      "name": "东宁市" }] },

  {
    "id": 231100,
    "name": "黑河市",
    "children": [{
      "id": 231102,
      "name": "爱辉区" },
    {
      "id": 231121,
      "name": "嫩江县" },
    {
      "id": 231123,
      "name": "逊克县" },
    {
      "id": 231124,
      "name": "孙吴县" },
    {
      "id": 231181,
      "name": "北安市" },
    {
      "id": 231182,
      "name": "五大连池市" }] },

  {
    "id": 231200,
    "name": "绥化市",
    "children": [{
      "id": 231202,
      "name": "北林区" },
    {
      "id": 231221,
      "name": "望奎县" },
    {
      "id": 231222,
      "name": "兰西县" },
    {
      "id": 231223,
      "name": "青冈县" },
    {
      "id": 231224,
      "name": "庆安县" },
    {
      "id": 231225,
      "name": "明水县" },
    {
      "id": 231226,
      "name": "绥棱县" },
    {
      "id": 231281,
      "name": "安达市" },
    {
      "id": 231282,
      "name": "肇东市" },
    {
      "id": 231283,
      "name": "海伦市" }] },

  {
    "id": 232700,
    "name": "大兴安岭地区",
    "children": [{
      "id": 232701,
      "name": "漠河市" },
    {
      "id": 232721,
      "name": "呼玛县" },
    {
      "id": 232722,
      "name": "塔河县" }] }] },


{
  "id": 310000,
  "name": "上海市",
  "children": [{
    "id": 310100,
    "name": "上海市",
    "children": [{
      "id": 310101,
      "name": "黄浦区" },
    {
      "id": 310104,
      "name": "徐汇区" },
    {
      "id": 310105,
      "name": "长宁区" },
    {
      "id": 310106,
      "name": "静安区" },
    {
      "id": 310107,
      "name": "普陀区" },
    {
      "id": 310109,
      "name": "虹口区" },
    {
      "id": 310110,
      "name": "杨浦区" },
    {
      "id": 310112,
      "name": "闵行区" },
    {
      "id": 310113,
      "name": "宝山区" },
    {
      "id": 310114,
      "name": "嘉定区" },
    {
      "id": 310115,
      "name": "浦东新区" },
    {
      "id": 310116,
      "name": "金山区" },
    {
      "id": 310117,
      "name": "松江区" },
    {
      "id": 310118,
      "name": "青浦区" },
    {
      "id": 310120,
      "name": "奉贤区" },
    {
      "id": 310151,
      "name": "崇明区" }] }] },


{
  "id": 320000,
  "name": "江苏省",
  "children": [{
    "id": 320100,
    "name": "南京市",
    "children": [{
      "id": 320102,
      "name": "玄武区" },
    {
      "id": 320104,
      "name": "秦淮区" },
    {
      "id": 320105,
      "name": "建邺区" },
    {
      "id": 320106,
      "name": "鼓楼区" },
    {
      "id": 320111,
      "name": "浦口区" },
    {
      "id": 320113,
      "name": "栖霞区" },
    {
      "id": 320114,
      "name": "雨花台区" },
    {
      "id": 320115,
      "name": "江宁区" },
    {
      "id": 320116,
      "name": "六合区" },
    {
      "id": 320117,
      "name": "溧水区" },
    {
      "id": 320118,
      "name": "高淳区" }] },

  {
    "id": 320200,
    "name": "无锡市",
    "children": [{
      "id": 320205,
      "name": "锡山区" },
    {
      "id": 320206,
      "name": "惠山区" },
    {
      "id": 320211,
      "name": "滨湖区" },
    {
      "id": 320213,
      "name": "梁溪区" },
    {
      "id": 320214,
      "name": "新吴区" },
    {
      "id": 320281,
      "name": "江阴市" },
    {
      "id": 320282,
      "name": "宜兴市" }] },

  {
    "id": 320300,
    "name": "徐州市",
    "children": [{
      "id": 320302,
      "name": "鼓楼区" },
    {
      "id": 320303,
      "name": "云龙区" },
    {
      "id": 320305,
      "name": "贾汪区" },
    {
      "id": 320311,
      "name": "泉山区" },
    {
      "id": 320312,
      "name": "铜山区" },
    {
      "id": 320321,
      "name": "丰县" },
    {
      "id": 320322,
      "name": "沛县" },
    {
      "id": 320324,
      "name": "睢宁县" },
    {
      "id": 320381,
      "name": "新沂市" },
    {
      "id": 320382,
      "name": "邳州市" }] },

  {
    "id": 320400,
    "name": "常州市",
    "children": [{
      "id": 320402,
      "name": "天宁区" },
    {
      "id": 320404,
      "name": "钟楼区" },
    {
      "id": 320411,
      "name": "新北区" },
    {
      "id": 320412,
      "name": "武进区" },
    {
      "id": 320413,
      "name": "金坛区" },
    {
      "id": 320481,
      "name": "溧阳市" }] },

  {
    "id": 320500,
    "name": "苏州市",
    "children": [{
      "id": 320505,
      "name": "虎丘区" },
    {
      "id": 320506,
      "name": "吴中区" },
    {
      "id": 320507,
      "name": "相城区" },
    {
      "id": 320508,
      "name": "姑苏区" },
    {
      "id": 320509,
      "name": "吴江区" },
    {
      "id": 320581,
      "name": "常熟市" },
    {
      "id": 320582,
      "name": "张家港市" },
    {
      "id": 320583,
      "name": "昆山市" },
    {
      "id": 320585,
      "name": "太仓市" }] },

  {
    "id": 320600,
    "name": "南通市",
    "children": [{
      "id": 320602,
      "name": "崇川区" },
    {
      "id": 320611,
      "name": "港闸区" },
    {
      "id": 320612,
      "name": "通州区" },
    {
      "id": 320623,
      "name": "如东县" },
    {
      "id": 320681,
      "name": "启东市" },
    {
      "id": 320682,
      "name": "如皋市" },
    {
      "id": 320684,
      "name": "海门市" },
    {
      "id": 320685,
      "name": "海安市" }] },

  {
    "id": 320700,
    "name": "连云港市",
    "children": [{
      "id": 320703,
      "name": "连云区" },
    {
      "id": 320706,
      "name": "海州区" },
    {
      "id": 320707,
      "name": "赣榆区" },
    {
      "id": 320722,
      "name": "东海县" },
    {
      "id": 320723,
      "name": "灌云县" },
    {
      "id": 320724,
      "name": "灌南县" }] },

  {
    "id": 320800,
    "name": "淮安市",
    "children": [{
      "id": 320803,
      "name": "淮安区" },
    {
      "id": 320804,
      "name": "淮阴区" },
    {
      "id": 320812,
      "name": "清江浦区" },
    {
      "id": 320813,
      "name": "洪泽区" },
    {
      "id": 320826,
      "name": "涟水县" },
    {
      "id": 320830,
      "name": "盱眙县" },
    {
      "id": 320831,
      "name": "金湖县" }] },

  {
    "id": 320900,
    "name": "盐城市",
    "children": [{
      "id": 320902,
      "name": "亭湖区" },
    {
      "id": 320903,
      "name": "盐都区" },
    {
      "id": 320904,
      "name": "大丰区" },
    {
      "id": 320921,
      "name": "响水县" },
    {
      "id": 320922,
      "name": "滨海县" },
    {
      "id": 320923,
      "name": "阜宁县" },
    {
      "id": 320924,
      "name": "射阳县" },
    {
      "id": 320925,
      "name": "建湖县" },
    {
      "id": 320981,
      "name": "东台市" }] },

  {
    "id": 321000,
    "name": "扬州市",
    "children": [{
      "id": 321002,
      "name": "广陵区" },
    {
      "id": 321003,
      "name": "邗江区" },
    {
      "id": 321012,
      "name": "江都区" },
    {
      "id": 321023,
      "name": "宝应县" },
    {
      "id": 321081,
      "name": "仪征市" },
    {
      "id": 321084,
      "name": "高邮市" }] },

  {
    "id": 321100,
    "name": "镇江市",
    "children": [{
      "id": 321102,
      "name": "京口区" },
    {
      "id": 321111,
      "name": "润州区" },
    {
      "id": 321112,
      "name": "丹徒区" },
    {
      "id": 321181,
      "name": "丹阳市" },
    {
      "id": 321182,
      "name": "扬中市" },
    {
      "id": 321183,
      "name": "句容市" }] },

  {
    "id": 321200,
    "name": "泰州市",
    "children": [{
      "id": 321202,
      "name": "海陵区" },
    {
      "id": 321203,
      "name": "高港区" },
    {
      "id": 321204,
      "name": "姜堰区" },
    {
      "id": 321281,
      "name": "兴化市" },
    {
      "id": 321282,
      "name": "靖江市" },
    {
      "id": 321283,
      "name": "泰兴市" }] },

  {
    "id": 321300,
    "name": "宿迁市",
    "children": [{
      "id": 321302,
      "name": "宿城区" },
    {
      "id": 321311,
      "name": "宿豫区" },
    {
      "id": 321322,
      "name": "沭阳县" },
    {
      "id": 321323,
      "name": "泗阳县" },
    {
      "id": 321324,
      "name": "泗洪县" }] }] },


{
  "id": 330000,
  "name": "浙江省",
  "children": [{
    "id": 330100,
    "name": "杭州市",
    "children": [{
      "id": 330102,
      "name": "上城区" },
    {
      "id": 330103,
      "name": "下城区" },
    {
      "id": 330104,
      "name": "江干区" },
    {
      "id": 330105,
      "name": "拱墅区" },
    {
      "id": 330106,
      "name": "西湖区" },
    {
      "id": 330108,
      "name": "滨江区" },
    {
      "id": 330109,
      "name": "萧山区" },
    {
      "id": 330110,
      "name": "余杭区" },
    {
      "id": 330111,
      "name": "富阳区" },
    {
      "id": 330112,
      "name": "临安区" },
    {
      "id": 330122,
      "name": "桐庐县" },
    {
      "id": 330127,
      "name": "淳安县" },
    {
      "id": 330182,
      "name": "建德市" }] },

  {
    "id": 330200,
    "name": "宁波市",
    "children": [{
      "id": 330203,
      "name": "海曙区" },
    {
      "id": 330205,
      "name": "江北区" },
    {
      "id": 330206,
      "name": "北仑区" },
    {
      "id": 330211,
      "name": "镇海区" },
    {
      "id": 330212,
      "name": "鄞州区" },
    {
      "id": 330213,
      "name": "奉化区" },
    {
      "id": 330225,
      "name": "象山县" },
    {
      "id": 330226,
      "name": "宁海县" },
    {
      "id": 330281,
      "name": "余姚市" },
    {
      "id": 330282,
      "name": "慈溪市" }] },

  {
    "id": 330300,
    "name": "温州市",
    "children": [{
      "id": 330302,
      "name": "鹿城区" },
    {
      "id": 330303,
      "name": "龙湾区" },
    {
      "id": 330304,
      "name": "瓯海区" },
    {
      "id": 330305,
      "name": "洞头区" },
    {
      "id": 330324,
      "name": "永嘉县" },
    {
      "id": 330326,
      "name": "平阳县" },
    {
      "id": 330327,
      "name": "苍南县" },
    {
      "id": 330328,
      "name": "文成县" },
    {
      "id": 330329,
      "name": "泰顺县" },
    {
      "id": 330381,
      "name": "瑞安市" },
    {
      "id": 330382,
      "name": "乐清市" }] },

  {
    "id": 330400,
    "name": "嘉兴市",
    "children": [{
      "id": 330402,
      "name": "南湖区" },
    {
      "id": 330411,
      "name": "秀洲区" },
    {
      "id": 330421,
      "name": "嘉善县" },
    {
      "id": 330424,
      "name": "海盐县" },
    {
      "id": 330481,
      "name": "海宁市" },
    {
      "id": 330482,
      "name": "平湖市" },
    {
      "id": 330483,
      "name": "桐乡市" }] },

  {
    "id": 330500,
    "name": "湖州市",
    "children": [{
      "id": 330502,
      "name": "吴兴区" },
    {
      "id": 330503,
      "name": "南浔区" },
    {
      "id": 330521,
      "name": "德清县" },
    {
      "id": 330522,
      "name": "长兴县" },
    {
      "id": 330523,
      "name": "安吉县" }] },

  {
    "id": 330600,
    "name": "绍兴市",
    "children": [{
      "id": 330602,
      "name": "越城区" },
    {
      "id": 330603,
      "name": "柯桥区" },
    {
      "id": 330604,
      "name": "上虞区" },
    {
      "id": 330624,
      "name": "新昌县" },
    {
      "id": 330681,
      "name": "诸暨市" },
    {
      "id": 330683,
      "name": "嵊州市" }] },

  {
    "id": 330700,
    "name": "金华市",
    "children": [{
      "id": 330702,
      "name": "婺城区" },
    {
      "id": 330703,
      "name": "金东区" },
    {
      "id": 330723,
      "name": "武义县" },
    {
      "id": 330726,
      "name": "浦江县" },
    {
      "id": 330727,
      "name": "磐安县" },
    {
      "id": 330781,
      "name": "兰溪市" },
    {
      "id": 330782,
      "name": "义乌市" },
    {
      "id": 330783,
      "name": "东阳市" },
    {
      "id": 330784,
      "name": "永康市" }] },

  {
    "id": 330800,
    "name": "衢州市",
    "children": [{
      "id": 330802,
      "name": "柯城区" },
    {
      "id": 330803,
      "name": "衢江区" },
    {
      "id": 330822,
      "name": "常山县" },
    {
      "id": 330824,
      "name": "开化县" },
    {
      "id": 330825,
      "name": "龙游县" },
    {
      "id": 330881,
      "name": "江山市" }] },

  {
    "id": 330900,
    "name": "舟山市",
    "children": [{
      "id": 330902,
      "name": "定海区" },
    {
      "id": 330903,
      "name": "普陀区" },
    {
      "id": 330921,
      "name": "岱山县" },
    {
      "id": 330922,
      "name": "嵊泗县" }] },

  {
    "id": 331000,
    "name": "台州市",
    "children": [{
      "id": 331002,
      "name": "椒江区" },
    {
      "id": 331003,
      "name": "黄岩区" },
    {
      "id": 331004,
      "name": "路桥区" },
    {
      "id": 331022,
      "name": "三门县" },
    {
      "id": 331023,
      "name": "天台县" },
    {
      "id": 331024,
      "name": "仙居县" },
    {
      "id": 331081,
      "name": "温岭市" },
    {
      "id": 331082,
      "name": "临海市" },
    {
      "id": 331083,
      "name": "玉环市" }] },

  {
    "id": 331100,
    "name": "丽水市",
    "children": [{
      "id": 331102,
      "name": "莲都区" },
    {
      "id": 331121,
      "name": "青田县" },
    {
      "id": 331122,
      "name": "缙云县" },
    {
      "id": 331123,
      "name": "遂昌县" },
    {
      "id": 331124,
      "name": "松阳县" },
    {
      "id": 331125,
      "name": "云和县" },
    {
      "id": 331126,
      "name": "庆元县" },
    {
      "id": 331127,
      "name": "景宁畲族自治县" },
    {
      "id": 331181,
      "name": "龙泉市" }] }] },


{
  "id": 340000,
  "name": "安徽省",
  "children": [{
    "id": 340100,
    "name": "合肥市",
    "children": [{
      "id": 340102,
      "name": "瑶海区" },
    {
      "id": 340103,
      "name": "庐阳区" },
    {
      "id": 340104,
      "name": "蜀山区" },
    {
      "id": 340111,
      "name": "包河区" },
    {
      "id": 340121,
      "name": "长丰县" },
    {
      "id": 340122,
      "name": "肥东县" },
    {
      "id": 340123,
      "name": "肥西县" },
    {
      "id": 340124,
      "name": "庐江县" },
    {
      "id": 340181,
      "name": "巢湖市" }] },

  {
    "id": 340200,
    "name": "芜湖市",
    "children": [{
      "id": 340202,
      "name": "镜湖区" },
    {
      "id": 340203,
      "name": "弋江区" },
    {
      "id": 340207,
      "name": "鸠江区" },
    {
      "id": 340208,
      "name": "三山区" },
    {
      "id": 340221,
      "name": "芜湖县" },
    {
      "id": 340222,
      "name": "繁昌县" },
    {
      "id": 340223,
      "name": "南陵县" },
    {
      "id": 340225,
      "name": "无为县" }] },

  {
    "id": 340300,
    "name": "蚌埠市",
    "children": [{
      "id": 340302,
      "name": "龙子湖区" },
    {
      "id": 340303,
      "name": "蚌山区" },
    {
      "id": 340304,
      "name": "禹会区" },
    {
      "id": 340311,
      "name": "淮上区" },
    {
      "id": 340321,
      "name": "怀远县" },
    {
      "id": 340322,
      "name": "五河县" },
    {
      "id": 340323,
      "name": "固镇县" }] },

  {
    "id": 340400,
    "name": "淮南市",
    "children": [{
      "id": 340402,
      "name": "大通区" },
    {
      "id": 340403,
      "name": "田家庵区" },
    {
      "id": 340404,
      "name": "谢家集区" },
    {
      "id": 340405,
      "name": "八公山区" },
    {
      "id": 340406,
      "name": "潘集区" },
    {
      "id": 340421,
      "name": "凤台县" },
    {
      "id": 340422,
      "name": "寿县" }] },

  {
    "id": 340500,
    "name": "马鞍山市",
    "children": [{
      "id": 340503,
      "name": "花山区" },
    {
      "id": 340504,
      "name": "雨山区" },
    {
      "id": 340506,
      "name": "博望区" },
    {
      "id": 340521,
      "name": "当涂县" },
    {
      "id": 340522,
      "name": "含山县" },
    {
      "id": 340523,
      "name": "和县" }] },

  {
    "id": 340600,
    "name": "淮北市",
    "children": [{
      "id": 340602,
      "name": "杜集区" },
    {
      "id": 340603,
      "name": "相山区" },
    {
      "id": 340604,
      "name": "烈山区" },
    {
      "id": 340621,
      "name": "濉溪县" }] },

  {
    "id": 340700,
    "name": "铜陵市",
    "children": [{
      "id": 340705,
      "name": "铜官区" },
    {
      "id": 340706,
      "name": "义安区" },
    {
      "id": 340711,
      "name": "郊区" },
    {
      "id": 340722,
      "name": "枞阳县" }] },

  {
    "id": 340800,
    "name": "安庆市",
    "children": [{
      "id": 340802,
      "name": "迎江区" },
    {
      "id": 340803,
      "name": "大观区" },
    {
      "id": 340811,
      "name": "宜秀区" },
    {
      "id": 340822,
      "name": "怀宁县" },
    {
      "id": 340825,
      "name": "太湖县" },
    {
      "id": 340826,
      "name": "宿松县" },
    {
      "id": 340827,
      "name": "望江县" },
    {
      "id": 340828,
      "name": "岳西县" },
    {
      "id": 340881,
      "name": "桐城市" },
    {
      "id": 340882,
      "name": "潜山市" }] },

  {
    "id": 341000,
    "name": "黄山市",
    "children": [{
      "id": 341002,
      "name": "屯溪区" },
    {
      "id": 341003,
      "name": "黄山区" },
    {
      "id": 341004,
      "name": "徽州区" },
    {
      "id": 341021,
      "name": "歙县" },
    {
      "id": 341022,
      "name": "休宁县" },
    {
      "id": 341023,
      "name": "黟县" },
    {
      "id": 341024,
      "name": "祁门县" }] },

  {
    "id": 341100,
    "name": "滁州市",
    "children": [{
      "id": 341102,
      "name": "琅琊区" },
    {
      "id": 341103,
      "name": "南谯区" },
    {
      "id": 341122,
      "name": "来安县" },
    {
      "id": 341124,
      "name": "全椒县" },
    {
      "id": 341125,
      "name": "定远县" },
    {
      "id": 341126,
      "name": "凤阳县" },
    {
      "id": 341181,
      "name": "天长市" },
    {
      "id": 341182,
      "name": "明光市" }] },

  {
    "id": 341200,
    "name": "阜阳市",
    "children": [{
      "id": 341202,
      "name": "颍州区" },
    {
      "id": 341203,
      "name": "颍东区" },
    {
      "id": 341204,
      "name": "颍泉区" },
    {
      "id": 341221,
      "name": "临泉县" },
    {
      "id": 341222,
      "name": "太和县" },
    {
      "id": 341225,
      "name": "阜南县" },
    {
      "id": 341226,
      "name": "颍上县" },
    {
      "id": 341282,
      "name": "界首市" }] },

  {
    "id": 341300,
    "name": "宿州市",
    "children": [{
      "id": 341302,
      "name": "埇桥区" },
    {
      "id": 341321,
      "name": "砀山县" },
    {
      "id": 341322,
      "name": "萧县" },
    {
      "id": 341323,
      "name": "灵璧县" },
    {
      "id": 341324,
      "name": "泗县" }] },

  {
    "id": 341500,
    "name": "六安市",
    "children": [{
      "id": 341502,
      "name": "金安区" },
    {
      "id": 341503,
      "name": "裕安区" },
    {
      "id": 341504,
      "name": "叶集区" },
    {
      "id": 341522,
      "name": "霍邱县" },
    {
      "id": 341523,
      "name": "舒城县" },
    {
      "id": 341524,
      "name": "金寨县" },
    {
      "id": 341525,
      "name": "霍山县" }] },

  {
    "id": 341600,
    "name": "亳州市",
    "children": [{
      "id": 341602,
      "name": "谯城区" },
    {
      "id": 341621,
      "name": "涡阳县" },
    {
      "id": 341622,
      "name": "蒙城县" },
    {
      "id": 341623,
      "name": "利辛县" }] },

  {
    "id": 341700,
    "name": "池州市",
    "children": [{
      "id": 341702,
      "name": "贵池区" },
    {
      "id": 341721,
      "name": "东至县" },
    {
      "id": 341722,
      "name": "石台县" },
    {
      "id": 341723,
      "name": "青阳县" }] },

  {
    "id": 341800,
    "name": "宣城市",
    "children": [{
      "id": 341802,
      "name": "宣州区" },
    {
      "id": 341821,
      "name": "郎溪县" },
    {
      "id": 341822,
      "name": "广德县" },
    {
      "id": 341823,
      "name": "泾县" },
    {
      "id": 341824,
      "name": "绩溪县" },
    {
      "id": 341825,
      "name": "旌德县" },
    {
      "id": 341881,
      "name": "宁国市" }] }] },


{
  "id": 350000,
  "name": "福建省",
  "children": [{
    "id": 350100,
    "name": "福州市",
    "children": [{
      "id": 350102,
      "name": "鼓楼区" },
    {
      "id": 350103,
      "name": "台江区" },
    {
      "id": 350104,
      "name": "仓山区" },
    {
      "id": 350105,
      "name": "马尾区" },
    {
      "id": 350111,
      "name": "晋安区" },
    {
      "id": 350112,
      "name": "长乐区" },
    {
      "id": 350121,
      "name": "闽侯县" },
    {
      "id": 350122,
      "name": "连江县" },
    {
      "id": 350123,
      "name": "罗源县" },
    {
      "id": 350124,
      "name": "闽清县" },
    {
      "id": 350125,
      "name": "永泰县" },
    {
      "id": 350128,
      "name": "平潭县" },
    {
      "id": 350181,
      "name": "福清市" }] },

  {
    "id": 350200,
    "name": "厦门市",
    "children": [{
      "id": 350203,
      "name": "思明区" },
    {
      "id": 350205,
      "name": "海沧区" },
    {
      "id": 350206,
      "name": "湖里区" },
    {
      "id": 350211,
      "name": "集美区" },
    {
      "id": 350212,
      "name": "同安区" },
    {
      "id": 350213,
      "name": "翔安区" }] },

  {
    "id": 350300,
    "name": "莆田市",
    "children": [{
      "id": 350302,
      "name": "城厢区" },
    {
      "id": 350303,
      "name": "涵江区" },
    {
      "id": 350304,
      "name": "荔城区" },
    {
      "id": 350305,
      "name": "秀屿区" },
    {
      "id": 350322,
      "name": "仙游县" }] },

  {
    "id": 350400,
    "name": "三明市",
    "children": [{
      "id": 350402,
      "name": "梅列区" },
    {
      "id": 350403,
      "name": "三元区" },
    {
      "id": 350421,
      "name": "明溪县" },
    {
      "id": 350423,
      "name": "清流县" },
    {
      "id": 350424,
      "name": "宁化县" },
    {
      "id": 350425,
      "name": "大田县" },
    {
      "id": 350426,
      "name": "尤溪县" },
    {
      "id": 350427,
      "name": "沙县" },
    {
      "id": 350428,
      "name": "将乐县" },
    {
      "id": 350429,
      "name": "泰宁县" },
    {
      "id": 350430,
      "name": "建宁县" },
    {
      "id": 350481,
      "name": "永安市" }] },

  {
    "id": 350500,
    "name": "泉州市",
    "children": [{
      "id": 350502,
      "name": "鲤城区" },
    {
      "id": 350503,
      "name": "丰泽区" },
    {
      "id": 350504,
      "name": "洛江区" },
    {
      "id": 350505,
      "name": "泉港区" },
    {
      "id": 350521,
      "name": "惠安县" },
    {
      "id": 350524,
      "name": "安溪县" },
    {
      "id": 350525,
      "name": "永春县" },
    {
      "id": 350526,
      "name": "德化县" },
    {
      "id": 350527,
      "name": "金门县" },
    {
      "id": 350581,
      "name": "石狮市" },
    {
      "id": 350582,
      "name": "晋江市" },
    {
      "id": 350583,
      "name": "南安市" }] },

  {
    "id": 350600,
    "name": "漳州市",
    "children": [{
      "id": 350602,
      "name": "芗城区" },
    {
      "id": 350603,
      "name": "龙文区" },
    {
      "id": 350622,
      "name": "云霄县" },
    {
      "id": 350623,
      "name": "漳浦县" },
    {
      "id": 350624,
      "name": "诏安县" },
    {
      "id": 350625,
      "name": "长泰县" },
    {
      "id": 350626,
      "name": "东山县" },
    {
      "id": 350627,
      "name": "南靖县" },
    {
      "id": 350628,
      "name": "平和县" },
    {
      "id": 350629,
      "name": "华安县" },
    {
      "id": 350681,
      "name": "龙海市" }] },

  {
    "id": 350700,
    "name": "南平市",
    "children": [{
      "id": 350702,
      "name": "延平区" },
    {
      "id": 350703,
      "name": "建阳区" },
    {
      "id": 350721,
      "name": "顺昌县" },
    {
      "id": 350722,
      "name": "浦城县" },
    {
      "id": 350723,
      "name": "光泽县" },
    {
      "id": 350724,
      "name": "松溪县" },
    {
      "id": 350725,
      "name": "政和县" },
    {
      "id": 350781,
      "name": "邵武市" },
    {
      "id": 350782,
      "name": "武夷山市" },
    {
      "id": 350783,
      "name": "建瓯市" }] },

  {
    "id": 350800,
    "name": "龙岩市",
    "children": [{
      "id": 350802,
      "name": "新罗区" },
    {
      "id": 350803,
      "name": "永定区" },
    {
      "id": 350821,
      "name": "长汀县" },
    {
      "id": 350823,
      "name": "上杭县" },
    {
      "id": 350824,
      "name": "武平县" },
    {
      "id": 350825,
      "name": "连城县" },
    {
      "id": 350881,
      "name": "漳平市" }] },

  {
    "id": 350900,
    "name": "宁德市",
    "children": [{
      "id": 350902,
      "name": "蕉城区" },
    {
      "id": 350921,
      "name": "霞浦县" },
    {
      "id": 350922,
      "name": "古田县" },
    {
      "id": 350923,
      "name": "屏南县" },
    {
      "id": 350924,
      "name": "寿宁县" },
    {
      "id": 350925,
      "name": "周宁县" },
    {
      "id": 350926,
      "name": "柘荣县" },
    {
      "id": 350981,
      "name": "福安市" },
    {
      "id": 350982,
      "name": "福鼎市" }] }] },


{
  "id": 360000,
  "name": "江西省",
  "children": [{
    "id": 360100,
    "name": "南昌市",
    "children": [{
      "id": 360102,
      "name": "东湖区" },
    {
      "id": 360103,
      "name": "西湖区" },
    {
      "id": 360104,
      "name": "青云谱区" },
    {
      "id": 360105,
      "name": "湾里区" },
    {
      "id": 360111,
      "name": "青山湖区" },
    {
      "id": 360112,
      "name": "新建区" },
    {
      "id": 360121,
      "name": "南昌县" },
    {
      "id": 360123,
      "name": "安义县" },
    {
      "id": 360124,
      "name": "进贤县" }] },

  {
    "id": 360200,
    "name": "景德镇市",
    "children": [{
      "id": 360202,
      "name": "昌江区" },
    {
      "id": 360203,
      "name": "珠山区" },
    {
      "id": 360222,
      "name": "浮梁县" },
    {
      "id": 360281,
      "name": "乐平市" }] },

  {
    "id": 360300,
    "name": "萍乡市",
    "children": [{
      "id": 360302,
      "name": "安源区" },
    {
      "id": 360313,
      "name": "湘东区" },
    {
      "id": 360321,
      "name": "莲花县" },
    {
      "id": 360322,
      "name": "上栗县" },
    {
      "id": 360323,
      "name": "芦溪县" }] },

  {
    "id": 360400,
    "name": "九江市",
    "children": [{
      "id": 360402,
      "name": "濂溪区" },
    {
      "id": 360403,
      "name": "浔阳区" },
    {
      "id": 360404,
      "name": "柴桑区" },
    {
      "id": 360423,
      "name": "武宁县" },
    {
      "id": 360424,
      "name": "修水县" },
    {
      "id": 360425,
      "name": "永修县" },
    {
      "id": 360426,
      "name": "德安县" },
    {
      "id": 360428,
      "name": "都昌县" },
    {
      "id": 360429,
      "name": "湖口县" },
    {
      "id": 360430,
      "name": "彭泽县" },
    {
      "id": 360481,
      "name": "瑞昌市" },
    {
      "id": 360482,
      "name": "共青城市" },
    {
      "id": 360483,
      "name": "庐山市" }] },

  {
    "id": 360500,
    "name": "新余市",
    "children": [{
      "id": 360502,
      "name": "渝水区" },
    {
      "id": 360521,
      "name": "分宜县" }] },

  {
    "id": 360600,
    "name": "鹰潭市",
    "children": [{
      "id": 360602,
      "name": "月湖区" },
    {
      "id": 360603,
      "name": "余江区" },
    {
      "id": 360681,
      "name": "贵溪市" }] },

  {
    "id": 360700,
    "name": "赣州市",
    "children": [{
      "id": 360702,
      "name": "章贡区" },
    {
      "id": 360703,
      "name": "南康区" },
    {
      "id": 360704,
      "name": "赣县区" },
    {
      "id": 360722,
      "name": "信丰县" },
    {
      "id": 360723,
      "name": "大余县" },
    {
      "id": 360724,
      "name": "上犹县" },
    {
      "id": 360725,
      "name": "崇义县" },
    {
      "id": 360726,
      "name": "安远县" },
    {
      "id": 360727,
      "name": "龙南县" },
    {
      "id": 360728,
      "name": "定南县" },
    {
      "id": 360729,
      "name": "全南县" },
    {
      "id": 360730,
      "name": "宁都县" },
    {
      "id": 360731,
      "name": "于都县" },
    {
      "id": 360732,
      "name": "兴国县" },
    {
      "id": 360733,
      "name": "会昌县" },
    {
      "id": 360734,
      "name": "寻乌县" },
    {
      "id": 360735,
      "name": "石城县" },
    {
      "id": 360781,
      "name": "瑞金市" }] },

  {
    "id": 360800,
    "name": "吉安市",
    "children": [{
      "id": 360802,
      "name": "吉州区" },
    {
      "id": 360803,
      "name": "青原区" },
    {
      "id": 360821,
      "name": "吉安县" },
    {
      "id": 360822,
      "name": "吉水县" },
    {
      "id": 360823,
      "name": "峡江县" },
    {
      "id": 360824,
      "name": "新干县" },
    {
      "id": 360825,
      "name": "永丰县" },
    {
      "id": 360826,
      "name": "泰和县" },
    {
      "id": 360827,
      "name": "遂川县" },
    {
      "id": 360828,
      "name": "万安县" },
    {
      "id": 360829,
      "name": "安福县" },
    {
      "id": 360830,
      "name": "永新县" },
    {
      "id": 360881,
      "name": "井冈山市" }] },

  {
    "id": 360900,
    "name": "宜春市",
    "children": [{
      "id": 360902,
      "name": "袁州区" },
    {
      "id": 360921,
      "name": "奉新县" },
    {
      "id": 360922,
      "name": "万载县" },
    {
      "id": 360923,
      "name": "上高县" },
    {
      "id": 360924,
      "name": "宜丰县" },
    {
      "id": 360925,
      "name": "靖安县" },
    {
      "id": 360926,
      "name": "铜鼓县" },
    {
      "id": 360981,
      "name": "丰城市" },
    {
      "id": 360982,
      "name": "樟树市" },
    {
      "id": 360983,
      "name": "高安市" }] },

  {
    "id": 361000,
    "name": "抚州市",
    "children": [{
      "id": 361002,
      "name": "临川区" },
    {
      "id": 361003,
      "name": "东乡区" },
    {
      "id": 361021,
      "name": "南城县" },
    {
      "id": 361022,
      "name": "黎川县" },
    {
      "id": 361023,
      "name": "南丰县" },
    {
      "id": 361024,
      "name": "崇仁县" },
    {
      "id": 361025,
      "name": "乐安县" },
    {
      "id": 361026,
      "name": "宜黄县" },
    {
      "id": 361027,
      "name": "金溪县" },
    {
      "id": 361028,
      "name": "资溪县" },
    {
      "id": 361030,
      "name": "广昌县" }] },

  {
    "id": 361100,
    "name": "上饶市",
    "children": [{
      "id": 361102,
      "name": "信州区" },
    {
      "id": 361103,
      "name": "广丰区" },
    {
      "id": 361121,
      "name": "上饶县" },
    {
      "id": 361123,
      "name": "玉山县" },
    {
      "id": 361124,
      "name": "铅山县" },
    {
      "id": 361125,
      "name": "横峰县" },
    {
      "id": 361126,
      "name": "弋阳县" },
    {
      "id": 361127,
      "name": "余干县" },
    {
      "id": 361128,
      "name": "鄱阳县" },
    {
      "id": 361129,
      "name": "万年县" },
    {
      "id": 361130,
      "name": "婺源县" },
    {
      "id": 361181,
      "name": "德兴市" }] }] },


{
  "id": 370000,
  "name": "山东省",
  "children": [{
    "id": 370100,
    "name": "济南市",
    "children": [{
      "id": 370102,
      "name": "历下区" },
    {
      "id": 370103,
      "name": "市中区" },
    {
      "id": 370104,
      "name": "槐荫区" },
    {
      "id": 370105,
      "name": "天桥区" },
    {
      "id": 370112,
      "name": "历城区" },
    {
      "id": 370113,
      "name": "长清区" },
    {
      "id": 370114,
      "name": "章丘区" },
    {
      "id": 370115,
      "name": "济阳区" },
    {
      "id": 370116,
      "name": "莱芜区" },
    {
      "id": 370117,
      "name": "钢城区" },
    {
      "id": 370124,
      "name": "平阴县" },
    {
      "id": 370126,
      "name": "商河县" }] },

  {
    "id": 370200,
    "name": "青岛市",
    "children": [{
      "id": 370202,
      "name": "市南区" },
    {
      "id": 370203,
      "name": "市北区" },
    {
      "id": 370211,
      "name": "黄岛区" },
    {
      "id": 370212,
      "name": "崂山区" },
    {
      "id": 370213,
      "name": "李沧区" },
    {
      "id": 370214,
      "name": "城阳区" },
    {
      "id": 370215,
      "name": "即墨区" },
    {
      "id": 370281,
      "name": "胶州市" },
    {
      "id": 370283,
      "name": "平度市" },
    {
      "id": 370285,
      "name": "莱西市" }] },

  {
    "id": 370300,
    "name": "淄博市",
    "children": [{
      "id": 370302,
      "name": "淄川区" },
    {
      "id": 370303,
      "name": "张店区" },
    {
      "id": 370304,
      "name": "博山区" },
    {
      "id": 370305,
      "name": "临淄区" },
    {
      "id": 370306,
      "name": "周村区" },
    {
      "id": 370321,
      "name": "桓台县" },
    {
      "id": 370322,
      "name": "高青县" },
    {
      "id": 370323,
      "name": "沂源县" }] },

  {
    "id": 370400,
    "name": "枣庄市",
    "children": [{
      "id": 370402,
      "name": "市中区" },
    {
      "id": 370403,
      "name": "薛城区" },
    {
      "id": 370404,
      "name": "峄城区" },
    {
      "id": 370405,
      "name": "台儿庄区" },
    {
      "id": 370406,
      "name": "山亭区" },
    {
      "id": 370481,
      "name": "滕州市" }] },

  {
    "id": 370500,
    "name": "东营市",
    "children": [{
      "id": 370502,
      "name": "东营区" },
    {
      "id": 370503,
      "name": "河口区" },
    {
      "id": 370505,
      "name": "垦利区" },
    {
      "id": 370522,
      "name": "利津县" },
    {
      "id": 370523,
      "name": "广饶县" }] },

  {
    "id": 370600,
    "name": "烟台市",
    "children": [{
      "id": 370602,
      "name": "芝罘区" },
    {
      "id": 370611,
      "name": "福山区" },
    {
      "id": 370612,
      "name": "牟平区" },
    {
      "id": 370613,
      "name": "莱山区" },
    {
      "id": 370634,
      "name": "长岛县" },
    {
      "id": 370681,
      "name": "龙口市" },
    {
      "id": 370682,
      "name": "莱阳市" },
    {
      "id": 370683,
      "name": "莱州市" },
    {
      "id": 370684,
      "name": "蓬莱市" },
    {
      "id": 370685,
      "name": "招远市" },
    {
      "id": 370686,
      "name": "栖霞市" },
    {
      "id": 370687,
      "name": "海阳市" }] },

  {
    "id": 370700,
    "name": "潍坊市",
    "children": [{
      "id": 370702,
      "name": "潍城区" },
    {
      "id": 370703,
      "name": "寒亭区" },
    {
      "id": 370704,
      "name": "坊子区" },
    {
      "id": 370705,
      "name": "奎文区" },
    {
      "id": 370724,
      "name": "临朐县" },
    {
      "id": 370725,
      "name": "昌乐县" },
    {
      "id": 370781,
      "name": "青州市" },
    {
      "id": 370782,
      "name": "诸城市" },
    {
      "id": 370783,
      "name": "寿光市" },
    {
      "id": 370784,
      "name": "安丘市" },
    {
      "id": 370785,
      "name": "高密市" },
    {
      "id": 370786,
      "name": "昌邑市" }] },

  {
    "id": 370800,
    "name": "济宁市",
    "children": [{
      "id": 370811,
      "name": "任城区" },
    {
      "id": 370812,
      "name": "兖州区" },
    {
      "id": 370826,
      "name": "微山县" },
    {
      "id": 370827,
      "name": "鱼台县" },
    {
      "id": 370828,
      "name": "金乡县" },
    {
      "id": 370829,
      "name": "嘉祥县" },
    {
      "id": 370830,
      "name": "汶上县" },
    {
      "id": 370831,
      "name": "泗水县" },
    {
      "id": 370832,
      "name": "梁山县" },
    {
      "id": 370881,
      "name": "曲阜市" },
    {
      "id": 370883,
      "name": "邹城市" }] },

  {
    "id": 370900,
    "name": "泰安市",
    "children": [{
      "id": 370902,
      "name": "泰山区" },
    {
      "id": 370911,
      "name": "岱岳区" },
    {
      "id": 370921,
      "name": "宁阳县" },
    {
      "id": 370923,
      "name": "东平县" },
    {
      "id": 370982,
      "name": "新泰市" },
    {
      "id": 370983,
      "name": "肥城市" }] },

  {
    "id": 371000,
    "name": "威海市",
    "children": [{
      "id": 371002,
      "name": "环翠区" },
    {
      "id": 371003,
      "name": "文登区" },
    {
      "id": 371082,
      "name": "荣成市" },
    {
      "id": 371083,
      "name": "乳山市" }] },

  {
    "id": 371100,
    "name": "日照市",
    "children": [{
      "id": 371102,
      "name": "东港区" },
    {
      "id": 371103,
      "name": "岚山区" },
    {
      "id": 371121,
      "name": "五莲县" },
    {
      "id": 371122,
      "name": "莒县" }] },

  {
    "id": 371300,
    "name": "临沂市",
    "children": [{
      "id": 371302,
      "name": "兰山区" },
    {
      "id": 371311,
      "name": "罗庄区" },
    {
      "id": 371312,
      "name": "河东区" },
    {
      "id": 371321,
      "name": "沂南县" },
    {
      "id": 371322,
      "name": "郯城县" },
    {
      "id": 371323,
      "name": "沂水县" },
    {
      "id": 371324,
      "name": "兰陵县" },
    {
      "id": 371325,
      "name": "费县" },
    {
      "id": 371326,
      "name": "平邑县" },
    {
      "id": 371327,
      "name": "莒南县" },
    {
      "id": 371328,
      "name": "蒙阴县" },
    {
      "id": 371329,
      "name": "临沭县" }] },

  {
    "id": 371400,
    "name": "德州市",
    "children": [{
      "id": 371402,
      "name": "德城区" },
    {
      "id": 371403,
      "name": "陵城区" },
    {
      "id": 371422,
      "name": "宁津县" },
    {
      "id": 371423,
      "name": "庆云县" },
    {
      "id": 371424,
      "name": "临邑县" },
    {
      "id": 371425,
      "name": "齐河县" },
    {
      "id": 371426,
      "name": "平原县" },
    {
      "id": 371427,
      "name": "夏津县" },
    {
      "id": 371428,
      "name": "武城县" },
    {
      "id": 371481,
      "name": "乐陵市" },
    {
      "id": 371482,
      "name": "禹城市" }] },

  {
    "id": 371500,
    "name": "聊城市",
    "children": [{
      "id": 371502,
      "name": "东昌府区" },
    {
      "id": 371521,
      "name": "阳谷县" },
    {
      "id": 371522,
      "name": "莘县" },
    {
      "id": 371523,
      "name": "茌平县" },
    {
      "id": 371524,
      "name": "东阿县" },
    {
      "id": 371525,
      "name": "冠县" },
    {
      "id": 371526,
      "name": "高唐县" },
    {
      "id": 371581,
      "name": "临清市" }] },

  {
    "id": 371600,
    "name": "滨州市",
    "children": [{
      "id": 371602,
      "name": "滨城区" },
    {
      "id": 371603,
      "name": "沾化区" },
    {
      "id": 371621,
      "name": "惠民县" },
    {
      "id": 371622,
      "name": "阳信县" },
    {
      "id": 371623,
      "name": "无棣县" },
    {
      "id": 371625,
      "name": "博兴县" },
    {
      "id": 371681,
      "name": "邹平市" }] },

  {
    "id": 371700,
    "name": "菏泽市",
    "children": [{
      "id": 371702,
      "name": "牡丹区" },
    {
      "id": 371703,
      "name": "定陶区" },
    {
      "id": 371721,
      "name": "曹县" },
    {
      "id": 371722,
      "name": "单县" },
    {
      "id": 371723,
      "name": "成武县" },
    {
      "id": 371724,
      "name": "巨野县" },
    {
      "id": 371725,
      "name": "郓城县" },
    {
      "id": 371726,
      "name": "鄄城县" },
    {
      "id": 371728,
      "name": "东明县" }] }] },


{
  "id": 410000,
  "name": "河南省",
  "children": [{
    "id": 410100,
    "name": "郑州市",
    "children": [{
      "id": 410102,
      "name": "中原区" },
    {
      "id": 410103,
      "name": "二七区" },
    {
      "id": 410104,
      "name": "管城回族区" },
    {
      "id": 410105,
      "name": "金水区" },
    {
      "id": 410106,
      "name": "上街区" },
    {
      "id": 410108,
      "name": "惠济区" },
    {
      "id": 410122,
      "name": "中牟县" },
    {
      "id": 410181,
      "name": "巩义市" },
    {
      "id": 410182,
      "name": "荥阳市" },
    {
      "id": 410183,
      "name": "新密市" },
    {
      "id": 410184,
      "name": "新郑市" },
    {
      "id": 410185,
      "name": "登封市" }] },

  {
    "id": 410200,
    "name": "开封市",
    "children": [{
      "id": 410202,
      "name": "龙亭区" },
    {
      "id": 410203,
      "name": "顺河回族区" },
    {
      "id": 410204,
      "name": "鼓楼区" },
    {
      "id": 410205,
      "name": "禹王台区" },
    {
      "id": 410212,
      "name": "祥符区" },
    {
      "id": 410221,
      "name": "杞县" },
    {
      "id": 410222,
      "name": "通许县" },
    {
      "id": 410223,
      "name": "尉氏县" },
    {
      "id": 410225,
      "name": "兰考县" }] },

  {
    "id": 410300,
    "name": "洛阳市",
    "children": [{
      "id": 410302,
      "name": "老城区" },
    {
      "id": 410303,
      "name": "西工区" },
    {
      "id": 410304,
      "name": "瀍河回族区" },
    {
      "id": 410305,
      "name": "涧西区" },
    {
      "id": 410306,
      "name": "吉利区" },
    {
      "id": 410311,
      "name": "洛龙区" },
    {
      "id": 410322,
      "name": "孟津县" },
    {
      "id": 410323,
      "name": "新安县" },
    {
      "id": 410324,
      "name": "栾川县" },
    {
      "id": 410325,
      "name": "嵩县" },
    {
      "id": 410326,
      "name": "汝阳县" },
    {
      "id": 410327,
      "name": "宜阳县" },
    {
      "id": 410328,
      "name": "洛宁县" },
    {
      "id": 410329,
      "name": "伊川县" },
    {
      "id": 410381,
      "name": "偃师市" }] },

  {
    "id": 410400,
    "name": "平顶山市",
    "children": [{
      "id": 410402,
      "name": "新华区" },
    {
      "id": 410403,
      "name": "卫东区" },
    {
      "id": 410404,
      "name": "石龙区" },
    {
      "id": 410411,
      "name": "湛河区" },
    {
      "id": 410421,
      "name": "宝丰县" },
    {
      "id": 410422,
      "name": "叶县" },
    {
      "id": 410423,
      "name": "鲁山县" },
    {
      "id": 410425,
      "name": "郏县" },
    {
      "id": 410481,
      "name": "舞钢市" },
    {
      "id": 410482,
      "name": "汝州市" }] },

  {
    "id": 410500,
    "name": "安阳市",
    "children": [{
      "id": 410502,
      "name": "文峰区" },
    {
      "id": 410503,
      "name": "北关区" },
    {
      "id": 410505,
      "name": "殷都区" },
    {
      "id": 410506,
      "name": "龙安区" },
    {
      "id": 410522,
      "name": "安阳县" },
    {
      "id": 410523,
      "name": "汤阴县" },
    {
      "id": 410526,
      "name": "滑县" },
    {
      "id": 410527,
      "name": "内黄县" },
    {
      "id": 410581,
      "name": "林州市" }] },

  {
    "id": 410600,
    "name": "鹤壁市",
    "children": [{
      "id": 410602,
      "name": "鹤山区" },
    {
      "id": 410603,
      "name": "山城区" },
    {
      "id": 410611,
      "name": "淇滨区" },
    {
      "id": 410621,
      "name": "浚县" },
    {
      "id": 410622,
      "name": "淇县" }] },

  {
    "id": 410700,
    "name": "新乡市",
    "children": [{
      "id": 410702,
      "name": "红旗区" },
    {
      "id": 410703,
      "name": "卫滨区" },
    {
      "id": 410704,
      "name": "凤泉区" },
    {
      "id": 410711,
      "name": "牧野区" },
    {
      "id": 410721,
      "name": "新乡县" },
    {
      "id": 410724,
      "name": "获嘉县" },
    {
      "id": 410725,
      "name": "原阳县" },
    {
      "id": 410726,
      "name": "延津县" },
    {
      "id": 410727,
      "name": "封丘县" },
    {
      "id": 410728,
      "name": "长垣县" },
    {
      "id": 410781,
      "name": "卫辉市" },
    {
      "id": 410782,
      "name": "辉县市" }] },

  {
    "id": 410800,
    "name": "焦作市",
    "children": [{
      "id": 410802,
      "name": "解放区" },
    {
      "id": 410803,
      "name": "中站区" },
    {
      "id": 410804,
      "name": "马村区" },
    {
      "id": 410811,
      "name": "山阳区" },
    {
      "id": 410821,
      "name": "修武县" },
    {
      "id": 410822,
      "name": "博爱县" },
    {
      "id": 410823,
      "name": "武陟县" },
    {
      "id": 410825,
      "name": "温县" },
    {
      "id": 410882,
      "name": "沁阳市" },
    {
      "id": 410883,
      "name": "孟州市" }] },

  {
    "id": 410900,
    "name": "濮阳市",
    "children": [{
      "id": 410902,
      "name": "华龙区" },
    {
      "id": 410922,
      "name": "清丰县" },
    {
      "id": 410923,
      "name": "南乐县" },
    {
      "id": 410926,
      "name": "范县" },
    {
      "id": 410927,
      "name": "台前县" },
    {
      "id": 410928,
      "name": "濮阳县" }] },

  {
    "id": 411000,
    "name": "许昌市",
    "children": [{
      "id": 411002,
      "name": "魏都区" },
    {
      "id": 411003,
      "name": "建安区" },
    {
      "id": 411024,
      "name": "鄢陵县" },
    {
      "id": 411025,
      "name": "襄城县" },
    {
      "id": 411081,
      "name": "禹州市" },
    {
      "id": 411082,
      "name": "长葛市" }] },

  {
    "id": 411100,
    "name": "漯河市",
    "children": [{
      "id": 411102,
      "name": "源汇区" },
    {
      "id": 411103,
      "name": "郾城区" },
    {
      "id": 411104,
      "name": "召陵区" },
    {
      "id": 411121,
      "name": "舞阳县" },
    {
      "id": 411122,
      "name": "临颍县" }] },

  {
    "id": 411200,
    "name": "三门峡市",
    "children": [{
      "id": 411202,
      "name": "湖滨区" },
    {
      "id": 411203,
      "name": "陕州区" },
    {
      "id": 411221,
      "name": "渑池县" },
    {
      "id": 411224,
      "name": "卢氏县" },
    {
      "id": 411281,
      "name": "义马市" },
    {
      "id": 411282,
      "name": "灵宝市" }] },

  {
    "id": 411300,
    "name": "南阳市",
    "children": [{
      "id": 411302,
      "name": "宛城区" },
    {
      "id": 411303,
      "name": "卧龙区" },
    {
      "id": 411321,
      "name": "南召县" },
    {
      "id": 411322,
      "name": "方城县" },
    {
      "id": 411323,
      "name": "西峡县" },
    {
      "id": 411324,
      "name": "镇平县" },
    {
      "id": 411325,
      "name": "内乡县" },
    {
      "id": 411326,
      "name": "淅川县" },
    {
      "id": 411327,
      "name": "社旗县" },
    {
      "id": 411328,
      "name": "唐河县" },
    {
      "id": 411329,
      "name": "新野县" },
    {
      "id": 411330,
      "name": "桐柏县" },
    {
      "id": 411381,
      "name": "邓州市" }] },

  {
    "id": 411400,
    "name": "商丘市",
    "children": [{
      "id": 411402,
      "name": "梁园区" },
    {
      "id": 411403,
      "name": "睢阳区" },
    {
      "id": 411421,
      "name": "民权县" },
    {
      "id": 411422,
      "name": "睢县" },
    {
      "id": 411423,
      "name": "宁陵县" },
    {
      "id": 411424,
      "name": "柘城县" },
    {
      "id": 411425,
      "name": "虞城县" },
    {
      "id": 411426,
      "name": "夏邑县" },
    {
      "id": 411481,
      "name": "永城市" }] },

  {
    "id": 411500,
    "name": "信阳市",
    "children": [{
      "id": 411502,
      "name": "浉河区" },
    {
      "id": 411503,
      "name": "平桥区" },
    {
      "id": 411521,
      "name": "罗山县" },
    {
      "id": 411522,
      "name": "光山县" },
    {
      "id": 411523,
      "name": "新县" },
    {
      "id": 411524,
      "name": "商城县" },
    {
      "id": 411525,
      "name": "固始县" },
    {
      "id": 411526,
      "name": "潢川县" },
    {
      "id": 411527,
      "name": "淮滨县" },
    {
      "id": 411528,
      "name": "息县" }] },

  {
    "id": 411600,
    "name": "周口市",
    "children": [{
      "id": 411602,
      "name": "川汇区" },
    {
      "id": 411621,
      "name": "扶沟县" },
    {
      "id": 411622,
      "name": "西华县" },
    {
      "id": 411623,
      "name": "商水县" },
    {
      "id": 411624,
      "name": "沈丘县" },
    {
      "id": 411625,
      "name": "郸城县" },
    {
      "id": 411626,
      "name": "淮阳县" },
    {
      "id": 411627,
      "name": "太康县" },
    {
      "id": 411628,
      "name": "鹿邑县" },
    {
      "id": 411681,
      "name": "项城市" }] },

  {
    "id": 411700,
    "name": "驻马店市",
    "children": [{
      "id": 411702,
      "name": "驿城区" },
    {
      "id": 411721,
      "name": "西平县" },
    {
      "id": 411722,
      "name": "上蔡县" },
    {
      "id": 411723,
      "name": "平舆县" },
    {
      "id": 411724,
      "name": "正阳县" },
    {
      "id": 411725,
      "name": "确山县" },
    {
      "id": 411726,
      "name": "泌阳县" },
    {
      "id": 411727,
      "name": "汝南县" },
    {
      "id": 411728,
      "name": "遂平县" },
    {
      "id": 411729,
      "name": "新蔡县" }] },

  {
    "id": 419001,
    "name": "济源市",
    "children": [{
      "id": 419001001,
      "name": "沁园街道" },
    {
      "id": 419001002,
      "name": "济水街道" },
    {
      "id": 419001003,
      "name": "北海街道" },
    {
      "id": 419001004,
      "name": "天坛街道" },
    {
      "id": 419001005,
      "name": "玉泉街道" },
    {
      "id": 419001100,
      "name": "克井镇" },
    {
      "id": 419001101,
      "name": "五龙口镇" },
    {
      "id": 419001102,
      "name": "轵城镇" },
    {
      "id": 419001103,
      "name": "承留镇" },
    {
      "id": 419001104,
      "name": "邵原镇" },
    {
      "id": 419001105,
      "name": "坡头镇" },
    {
      "id": 419001106,
      "name": "梨林镇" },
    {
      "id": 419001107,
      "name": "大峪镇" },
    {
      "id": 419001108,
      "name": "思礼镇" },
    {
      "id": 419001109,
      "name": "王屋镇" },
    {
      "id": 419001110,
      "name": "下冶镇" }] }] },


{
  "id": 420000,
  "name": "湖北省",
  "children": [{
    "id": 420100,
    "name": "武汉市",
    "children": [{
      "id": 420102,
      "name": "江岸区" },
    {
      "id": 420103,
      "name": "江汉区" },
    {
      "id": 420104,
      "name": "硚口区" },
    {
      "id": 420105,
      "name": "汉阳区" },
    {
      "id": 420106,
      "name": "武昌区" },
    {
      "id": 420107,
      "name": "青山区" },
    {
      "id": 420111,
      "name": "洪山区" },
    {
      "id": 420112,
      "name": "东西湖区" },
    {
      "id": 420113,
      "name": "汉南区" },
    {
      "id": 420114,
      "name": "蔡甸区" },
    {
      "id": 420115,
      "name": "江夏区" },
    {
      "id": 420116,
      "name": "黄陂区" },
    {
      "id": 420117,
      "name": "新洲区" }] },

  {
    "id": 420200,
    "name": "黄石市",
    "children": [{
      "id": 420202,
      "name": "黄石港区" },
    {
      "id": 420203,
      "name": "西塞山区" },
    {
      "id": 420204,
      "name": "下陆区" },
    {
      "id": 420205,
      "name": "铁山区" },
    {
      "id": 420222,
      "name": "阳新县" },
    {
      "id": 420281,
      "name": "大冶市" }] },

  {
    "id": 420300,
    "name": "十堰市",
    "children": [{
      "id": 420302,
      "name": "茅箭区" },
    {
      "id": 420303,
      "name": "张湾区" },
    {
      "id": 420304,
      "name": "郧阳区" },
    {
      "id": 420322,
      "name": "郧西县" },
    {
      "id": 420323,
      "name": "竹山县" },
    {
      "id": 420324,
      "name": "竹溪县" },
    {
      "id": 420325,
      "name": "房县" },
    {
      "id": 420381,
      "name": "丹江口市" }] },

  {
    "id": 420500,
    "name": "宜昌市",
    "children": [{
      "id": 420502,
      "name": "西陵区" },
    {
      "id": 420503,
      "name": "伍家岗区" },
    {
      "id": 420504,
      "name": "点军区" },
    {
      "id": 420505,
      "name": "猇亭区" },
    {
      "id": 420506,
      "name": "夷陵区" },
    {
      "id": 420525,
      "name": "远安县" },
    {
      "id": 420526,
      "name": "兴山县" },
    {
      "id": 420527,
      "name": "秭归县" },
    {
      "id": 420528,
      "name": "长阳土家族自治县" },
    {
      "id": 420529,
      "name": "五峰土家族自治县" },
    {
      "id": 420581,
      "name": "宜都市" },
    {
      "id": 420582,
      "name": "当阳市" },
    {
      "id": 420583,
      "name": "枝江市" }] },

  {
    "id": 420600,
    "name": "襄阳市",
    "children": [{
      "id": 420602,
      "name": "襄城区" },
    {
      "id": 420606,
      "name": "樊城区" },
    {
      "id": 420607,
      "name": "襄州区" },
    {
      "id": 420624,
      "name": "南漳县" },
    {
      "id": 420625,
      "name": "谷城县" },
    {
      "id": 420626,
      "name": "保康县" },
    {
      "id": 420682,
      "name": "老河口市" },
    {
      "id": 420683,
      "name": "枣阳市" },
    {
      "id": 420684,
      "name": "宜城市" }] },

  {
    "id": 420700,
    "name": "鄂州市",
    "children": [{
      "id": 420702,
      "name": "梁子湖区" },
    {
      "id": 420703,
      "name": "华容区" },
    {
      "id": 420704,
      "name": "鄂城区" }] },

  {
    "id": 420800,
    "name": "荆门市",
    "children": [{
      "id": 420802,
      "name": "东宝区" },
    {
      "id": 420804,
      "name": "掇刀区" },
    {
      "id": 420822,
      "name": "沙洋县" },
    {
      "id": 420881,
      "name": "钟祥市" },
    {
      "id": 420882,
      "name": "京山市" }] },

  {
    "id": 420900,
    "name": "孝感市",
    "children": [{
      "id": 420902,
      "name": "孝南区" },
    {
      "id": 420921,
      "name": "孝昌县" },
    {
      "id": 420922,
      "name": "大悟县" },
    {
      "id": 420923,
      "name": "云梦县" },
    {
      "id": 420981,
      "name": "应城市" },
    {
      "id": 420982,
      "name": "安陆市" },
    {
      "id": 420984,
      "name": "汉川市" }] },

  {
    "id": 421000,
    "name": "荆州市",
    "children": [{
      "id": 421002,
      "name": "沙市区" },
    {
      "id": 421003,
      "name": "荆州区" },
    {
      "id": 421022,
      "name": "公安县" },
    {
      "id": 421023,
      "name": "监利县" },
    {
      "id": 421024,
      "name": "江陵县" },
    {
      "id": 421081,
      "name": "石首市" },
    {
      "id": 421083,
      "name": "洪湖市" },
    {
      "id": 421087,
      "name": "松滋市" }] },

  {
    "id": 421100,
    "name": "黄冈市",
    "children": [{
      "id": 421102,
      "name": "黄州区" },
    {
      "id": 421121,
      "name": "团风县" },
    {
      "id": 421122,
      "name": "红安县" },
    {
      "id": 421123,
      "name": "罗田县" },
    {
      "id": 421124,
      "name": "英山县" },
    {
      "id": 421125,
      "name": "浠水县" },
    {
      "id": 421126,
      "name": "蕲春县" },
    {
      "id": 421127,
      "name": "黄梅县" },
    {
      "id": 421181,
      "name": "麻城市" },
    {
      "id": 421182,
      "name": "武穴市" }] },

  {
    "id": 421200,
    "name": "咸宁市",
    "children": [{
      "id": 421202,
      "name": "咸安区" },
    {
      "id": 421221,
      "name": "嘉鱼县" },
    {
      "id": 421222,
      "name": "通城县" },
    {
      "id": 421223,
      "name": "崇阳县" },
    {
      "id": 421224,
      "name": "通山县" },
    {
      "id": 421281,
      "name": "赤壁市" }] },

  {
    "id": 421300,
    "name": "随州市",
    "children": [{
      "id": 421303,
      "name": "曾都区" },
    {
      "id": 421321,
      "name": "随县" },
    {
      "id": 421381,
      "name": "广水市" }] },

  {
    "id": 422800,
    "name": "恩施土家族苗族自治州",
    "children": [{
      "id": 422801,
      "name": "恩施市" },
    {
      "id": 422802,
      "name": "利川市" },
    {
      "id": 422822,
      "name": "建始县" },
    {
      "id": 422823,
      "name": "巴东县" },
    {
      "id": 422825,
      "name": "宣恩县" },
    {
      "id": 422826,
      "name": "咸丰县" },
    {
      "id": 422827,
      "name": "来凤县" },
    {
      "id": 422828,
      "name": "鹤峰县" }] },

  {
    "id": 429004,
    "name": "仙桃市",
    "children": [{
      "id": 429004001,
      "name": "沙嘴街道" },
    {
      "id": 429004002,
      "name": "干河街道" },
    {
      "id": 429004003,
      "name": "龙华山街道" },
    {
      "id": 429004100,
      "name": "郑场镇" },
    {
      "id": 429004101,
      "name": "毛嘴镇" },
    {
      "id": 429004102,
      "name": "豆河镇" },
    {
      "id": 429004103,
      "name": "三伏潭镇" },
    {
      "id": 429004104,
      "name": "胡场镇" },
    {
      "id": 429004105,
      "name": "长倘口镇" },
    {
      "id": 429004106,
      "name": "西流河镇" },
    {
      "id": 429004107,
      "name": "沙湖镇" },
    {
      "id": 429004108,
      "name": "杨林尾镇" },
    {
      "id": 429004109,
      "name": "彭场镇" },
    {
      "id": 429004110,
      "name": "张沟镇" },
    {
      "id": 429004111,
      "name": "郭河镇" },
    {
      "id": 429004112,
      "name": "沔城回族镇" },
    {
      "id": 429004113,
      "name": "通海口镇" },
    {
      "id": 429004114,
      "name": "陈场镇" },
    {
      "id": 429004400,
      "name": "工业园区" },
    {
      "id": 429004401,
      "name": "九合垸原种场" },
    {
      "id": 429004404,
      "name": "五湖渔场" },
    {
      "id": 429004405,
      "name": "赵西垸林场" },
    {
      "id": 429004407,
      "name": "畜禽良种场" }] },

  {
    "id": 429005,
    "name": "潜江市",
    "children": [{
      "id": 429005001,
      "name": "园林街道" },
    {
      "id": 429005003,
      "name": "周矶街道" },
    {
      "id": 429005004,
      "name": "广华街道" },
    {
      "id": 429005005,
      "name": "泰丰街道" },
    {
      "id": 429005006,
      "name": "高场街道" },
    {
      "id": 429005100,
      "name": "竹根滩镇" },
    {
      "id": 429005101,
      "name": "渔洋镇" },
    {
      "id": 429005102,
      "name": "王场镇" },
    {
      "id": 429005103,
      "name": "高石碑镇" },
    {
      "id": 429005104,
      "name": "熊口镇" },
    {
      "id": 429005105,
      "name": "老新镇" },
    {
      "id": 429005106,
      "name": "浩口镇" },
    {
      "id": 429005107,
      "name": "积玉口镇" },
    {
      "id": 429005108,
      "name": "张金镇" },
    {
      "id": 429005109,
      "name": "龙湾镇" },
    {
      "id": 429005451,
      "name": "后湖管理区" },
    {
      "id": 429005452,
      "name": "熊口管理区" },
    {
      "id": 429005453,
      "name": "总口管理区" },
    {
      "id": 429005454,
      "name": "白鹭湖管理区" },
    {
      "id": 429005455,
      "name": "运粮湖管理区" },
    {
      "id": 429005900,
      "name": "杨市街道" },
    {
      "id": 429005950,
      "name": "广华寺农场" }] },

  {
    "id": 429006,
    "name": "天门市",
    "children": [{
      "id": 429006001,
      "name": "竟陵街道" },
    {
      "id": 429006002,
      "name": "侨乡街道开发区" },
    {
      "id": 429006003,
      "name": "杨林街道" },
    {
      "id": 429006100,
      "name": "多宝镇" },
    {
      "id": 429006101,
      "name": "拖市镇" },
    {
      "id": 429006102,
      "name": "张港镇" },
    {
      "id": 429006103,
      "name": "蒋场镇" },
    {
      "id": 429006104,
      "name": "汪场镇" },
    {
      "id": 429006105,
      "name": "渔薪镇" },
    {
      "id": 429006106,
      "name": "黄潭镇" },
    {
      "id": 429006107,
      "name": "岳口镇" },
    {
      "id": 429006108,
      "name": "横林镇" },
    {
      "id": 429006109,
      "name": "彭市镇" },
    {
      "id": 429006110,
      "name": "麻洋镇" },
    {
      "id": 429006111,
      "name": "多祥镇" },
    {
      "id": 429006112,
      "name": "干驿镇" },
    {
      "id": 429006113,
      "name": "马湾镇" },
    {
      "id": 429006114,
      "name": "卢市镇" },
    {
      "id": 429006115,
      "name": "小板镇" },
    {
      "id": 429006116,
      "name": "九真镇" },
    {
      "id": 429006118,
      "name": "皂市镇" },
    {
      "id": 429006119,
      "name": "胡市镇" },
    {
      "id": 429006120,
      "name": "石河镇" },
    {
      "id": 429006121,
      "name": "佛子山镇" },
    {
      "id": 429006201,
      "name": "净潭乡" },
    {
      "id": 429006450,
      "name": "蒋湖农场" },
    {
      "id": 429006451,
      "name": "白茅湖农场" },
    {
      "id": 429006452,
      "name": "沉湖管委会" }] },

  {
    "id": 429021,
    "name": "神农架林区",
    "children": [{
      "id": 429021100,
      "name": "松柏镇" },
    {
      "id": 429021101,
      "name": "阳日镇" },
    {
      "id": 429021102,
      "name": "木鱼镇" },
    {
      "id": 429021103,
      "name": "红坪镇" },
    {
      "id": 429021104,
      "name": "新华镇" },
    {
      "id": 429021105,
      "name": "九湖镇" },
    {
      "id": 429021200,
      "name": "宋洛乡" },
    {
      "id": 429021202,
      "name": "下谷坪土家族乡" }] }] },


{
  "id": 430000,
  "name": "湖南省",
  "children": [{
    "id": 430100,
    "name": "长沙市",
    "children": [{
      "id": 430102,
      "name": "芙蓉区" },
    {
      "id": 430103,
      "name": "天心区" },
    {
      "id": 430104,
      "name": "岳麓区" },
    {
      "id": 430105,
      "name": "开福区" },
    {
      "id": 430111,
      "name": "雨花区" },
    {
      "id": 430112,
      "name": "望城区" },
    {
      "id": 430121,
      "name": "长沙县" },
    {
      "id": 430181,
      "name": "浏阳市" },
    {
      "id": 430182,
      "name": "宁乡市" }] },

  {
    "id": 430200,
    "name": "株洲市",
    "children": [{
      "id": 430202,
      "name": "荷塘区" },
    {
      "id": 430203,
      "name": "芦淞区" },
    {
      "id": 430204,
      "name": "石峰区" },
    {
      "id": 430211,
      "name": "天元区" },
    {
      "id": 430212,
      "name": "渌口区" },
    {
      "id": 430223,
      "name": "攸县" },
    {
      "id": 430224,
      "name": "茶陵县" },
    {
      "id": 430225,
      "name": "炎陵县" },
    {
      "id": 430281,
      "name": "醴陵市" }] },

  {
    "id": 430300,
    "name": "湘潭市",
    "children": [{
      "id": 430302,
      "name": "雨湖区" },
    {
      "id": 430304,
      "name": "岳塘区" },
    {
      "id": 430321,
      "name": "湘潭县" },
    {
      "id": 430381,
      "name": "湘乡市" },
    {
      "id": 430382,
      "name": "韶山市" }] },

  {
    "id": 430400,
    "name": "衡阳市",
    "children": [{
      "id": 430405,
      "name": "珠晖区" },
    {
      "id": 430406,
      "name": "雁峰区" },
    {
      "id": 430407,
      "name": "石鼓区" },
    {
      "id": 430408,
      "name": "蒸湘区" },
    {
      "id": 430412,
      "name": "南岳区" },
    {
      "id": 430421,
      "name": "衡阳县" },
    {
      "id": 430422,
      "name": "衡南县" },
    {
      "id": 430423,
      "name": "衡山县" },
    {
      "id": 430424,
      "name": "衡东县" },
    {
      "id": 430426,
      "name": "祁东县" },
    {
      "id": 430481,
      "name": "耒阳市" },
    {
      "id": 430482,
      "name": "常宁市" }] },

  {
    "id": 430500,
    "name": "邵阳市",
    "children": [{
      "id": 430502,
      "name": "双清区" },
    {
      "id": 430503,
      "name": "大祥区" },
    {
      "id": 430511,
      "name": "北塔区" },
    {
      "id": 430521,
      "name": "邵东县" },
    {
      "id": 430522,
      "name": "新邵县" },
    {
      "id": 430523,
      "name": "邵阳县" },
    {
      "id": 430524,
      "name": "隆回县" },
    {
      "id": 430525,
      "name": "洞口县" },
    {
      "id": 430527,
      "name": "绥宁县" },
    {
      "id": 430528,
      "name": "新宁县" },
    {
      "id": 430529,
      "name": "城步苗族自治县" },
    {
      "id": 430581,
      "name": "武冈市" }] },

  {
    "id": 430600,
    "name": "岳阳市",
    "children": [{
      "id": 430602,
      "name": "岳阳楼区" },
    {
      "id": 430603,
      "name": "云溪区" },
    {
      "id": 430611,
      "name": "君山区" },
    {
      "id": 430621,
      "name": "岳阳县" },
    {
      "id": 430623,
      "name": "华容县" },
    {
      "id": 430624,
      "name": "湘阴县" },
    {
      "id": 430626,
      "name": "平江县" },
    {
      "id": 430681,
      "name": "汨罗市" },
    {
      "id": 430682,
      "name": "临湘市" }] },

  {
    "id": 430700,
    "name": "常德市",
    "children": [{
      "id": 430702,
      "name": "武陵区" },
    {
      "id": 430703,
      "name": "鼎城区" },
    {
      "id": 430721,
      "name": "安乡县" },
    {
      "id": 430722,
      "name": "汉寿县" },
    {
      "id": 430723,
      "name": "澧县" },
    {
      "id": 430724,
      "name": "临澧县" },
    {
      "id": 430725,
      "name": "桃源县" },
    {
      "id": 430726,
      "name": "石门县" },
    {
      "id": 430781,
      "name": "津市市" }] },

  {
    "id": 430800,
    "name": "张家界市",
    "children": [{
      "id": 430802,
      "name": "永定区" },
    {
      "id": 430811,
      "name": "武陵源区" },
    {
      "id": 430821,
      "name": "慈利县" },
    {
      "id": 430822,
      "name": "桑植县" }] },

  {
    "id": 430900,
    "name": "益阳市",
    "children": [{
      "id": 430902,
      "name": "资阳区" },
    {
      "id": 430903,
      "name": "赫山区" },
    {
      "id": 430921,
      "name": "南县" },
    {
      "id": 430922,
      "name": "桃江县" },
    {
      "id": 430923,
      "name": "安化县" },
    {
      "id": 430981,
      "name": "沅江市" }] },

  {
    "id": 431000,
    "name": "郴州市",
    "children": [{
      "id": 431002,
      "name": "北湖区" },
    {
      "id": 431003,
      "name": "苏仙区" },
    {
      "id": 431021,
      "name": "桂阳县" },
    {
      "id": 431022,
      "name": "宜章县" },
    {
      "id": 431023,
      "name": "永兴县" },
    {
      "id": 431024,
      "name": "嘉禾县" },
    {
      "id": 431025,
      "name": "临武县" },
    {
      "id": 431026,
      "name": "汝城县" },
    {
      "id": 431027,
      "name": "桂东县" },
    {
      "id": 431028,
      "name": "安仁县" },
    {
      "id": 431081,
      "name": "资兴市" }] },

  {
    "id": 431100,
    "name": "永州市",
    "children": [{
      "id": 431102,
      "name": "零陵区" },
    {
      "id": 431103,
      "name": "冷水滩区" },
    {
      "id": 431121,
      "name": "祁阳县" },
    {
      "id": 431122,
      "name": "东安县" },
    {
      "id": 431123,
      "name": "双牌县" },
    {
      "id": 431124,
      "name": "道县" },
    {
      "id": 431125,
      "name": "江永县" },
    {
      "id": 431126,
      "name": "宁远县" },
    {
      "id": 431127,
      "name": "蓝山县" },
    {
      "id": 431128,
      "name": "新田县" },
    {
      "id": 431129,
      "name": "江华瑶族自治县" }] },

  {
    "id": 431200,
    "name": "怀化市",
    "children": [{
      "id": 431202,
      "name": "鹤城区" },
    {
      "id": 431221,
      "name": "中方县" },
    {
      "id": 431222,
      "name": "沅陵县" },
    {
      "id": 431223,
      "name": "辰溪县" },
    {
      "id": 431224,
      "name": "溆浦县" },
    {
      "id": 431225,
      "name": "会同县" },
    {
      "id": 431226,
      "name": "麻阳苗族自治县" },
    {
      "id": 431227,
      "name": "新晃侗族自治县" },
    {
      "id": 431228,
      "name": "芷江侗族自治县" },
    {
      "id": 431229,
      "name": "靖州苗族侗族自治县" },
    {
      "id": 431230,
      "name": "通道侗族自治县" },
    {
      "id": 431281,
      "name": "洪江市" }] },

  {
    "id": 431300,
    "name": "娄底市",
    "children": [{
      "id": 431302,
      "name": "娄星区" },
    {
      "id": 431321,
      "name": "双峰县" },
    {
      "id": 431322,
      "name": "新化县" },
    {
      "id": 431381,
      "name": "冷水江市" },
    {
      "id": 431382,
      "name": "涟源市" }] },

  {
    "id": 433100,
    "name": "湘西土家族苗族自治州",
    "children": [{
      "id": 433101,
      "name": "吉首市" },
    {
      "id": 433122,
      "name": "泸溪县" },
    {
      "id": 433123,
      "name": "凤凰县" },
    {
      "id": 433124,
      "name": "花垣县" },
    {
      "id": 433125,
      "name": "保靖县" },
    {
      "id": 433126,
      "name": "古丈县" },
    {
      "id": 433127,
      "name": "永顺县" },
    {
      "id": 433130,
      "name": "龙山县" }] }] },


{
  "id": 440000,
  "name": "广东省",
  "children": [{
    "id": 440100,
    "name": "广州市",
    "children": [{
      "id": 440103,
      "name": "荔湾区" },
    {
      "id": 440104,
      "name": "越秀区" },
    {
      "id": 440105,
      "name": "海珠区" },
    {
      "id": 440106,
      "name": "天河区" },
    {
      "id": 440111,
      "name": "白云区" },
    {
      "id": 440112,
      "name": "黄埔区" },
    {
      "id": 440113,
      "name": "番禺区" },
    {
      "id": 440114,
      "name": "花都区" },
    {
      "id": 440115,
      "name": "南沙区" },
    {
      "id": 440117,
      "name": "从化区" },
    {
      "id": 440118,
      "name": "增城区" }] },

  {
    "id": 440200,
    "name": "韶关市",
    "children": [{
      "id": 440203,
      "name": "武江区" },
    {
      "id": 440204,
      "name": "浈江区" },
    {
      "id": 440205,
      "name": "曲江区" },
    {
      "id": 440222,
      "name": "始兴县" },
    {
      "id": 440224,
      "name": "仁化县" },
    {
      "id": 440229,
      "name": "翁源县" },
    {
      "id": 440232,
      "name": "乳源瑶族自治县" },
    {
      "id": 440233,
      "name": "新丰县" },
    {
      "id": 440281,
      "name": "乐昌市" },
    {
      "id": 440282,
      "name": "南雄市" }] },

  {
    "id": 440300,
    "name": "深圳市",
    "children": [{
      "id": 440303,
      "name": "罗湖区" },
    {
      "id": 440304,
      "name": "福田区" },
    {
      "id": 440305,
      "name": "南山区" },
    {
      "id": 440306,
      "name": "宝安区" },
    {
      "id": 440307,
      "name": "龙岗区" },
    {
      "id": 440308,
      "name": "盐田区" },
    {
      "id": 440309,
      "name": "龙华区" },
    {
      "id": 440310,
      "name": "坪山区" },
    {
      "id": 440311,
      "name": "光明区" }] },

  {
    "id": 440400,
    "name": "珠海市",
    "children": [{
      "id": 440402,
      "name": "香洲区" },
    {
      "id": 440403,
      "name": "斗门区" },
    {
      "id": 440404,
      "name": "金湾区" },
    {
      "id": 440499,
      "name": "香洲区澳门大学横琴校区(由澳门特别行政区实施管辖)" }] },

  {
    "id": 440500,
    "name": "汕头市",
    "children": [{
      "id": 440507,
      "name": "龙湖区" },
    {
      "id": 440511,
      "name": "金平区" },
    {
      "id": 440512,
      "name": "濠江区" },
    {
      "id": 440513,
      "name": "潮阳区" },
    {
      "id": 440514,
      "name": "潮南区" },
    {
      "id": 440515,
      "name": "澄海区" },
    {
      "id": 440523,
      "name": "南澳县" }] },

  {
    "id": 440600,
    "name": "佛山市",
    "children": [{
      "id": 440604,
      "name": "禅城区" },
    {
      "id": 440605,
      "name": "南海区" },
    {
      "id": 440606,
      "name": "顺德区" },
    {
      "id": 440607,
      "name": "三水区" },
    {
      "id": 440608,
      "name": "高明区" }] },

  {
    "id": 440700,
    "name": "江门市",
    "children": [{
      "id": 440703,
      "name": "蓬江区" },
    {
      "id": 440704,
      "name": "江海区" },
    {
      "id": 440705,
      "name": "新会区" },
    {
      "id": 440781,
      "name": "台山市" },
    {
      "id": 440783,
      "name": "开平市" },
    {
      "id": 440784,
      "name": "鹤山市" },
    {
      "id": 440785,
      "name": "恩平市" }] },

  {
    "id": 440800,
    "name": "湛江市",
    "children": [{
      "id": 440802,
      "name": "赤坎区" },
    {
      "id": 440803,
      "name": "霞山区" },
    {
      "id": 440804,
      "name": "坡头区" },
    {
      "id": 440811,
      "name": "麻章区" },
    {
      "id": 440823,
      "name": "遂溪县" },
    {
      "id": 440825,
      "name": "徐闻县" },
    {
      "id": 440881,
      "name": "廉江市" },
    {
      "id": 440882,
      "name": "雷州市" },
    {
      "id": 440883,
      "name": "吴川市" }] },

  {
    "id": 440900,
    "name": "茂名市",
    "children": [{
      "id": 440902,
      "name": "茂南区" },
    {
      "id": 440904,
      "name": "电白区" },
    {
      "id": 440981,
      "name": "高州市" },
    {
      "id": 440982,
      "name": "化州市" },
    {
      "id": 440983,
      "name": "信宜市" }] },

  {
    "id": 441200,
    "name": "肇庆市",
    "children": [{
      "id": 441202,
      "name": "端州区" },
    {
      "id": 441203,
      "name": "鼎湖区" },
    {
      "id": 441204,
      "name": "高要区" },
    {
      "id": 441223,
      "name": "广宁县" },
    {
      "id": 441224,
      "name": "怀集县" },
    {
      "id": 441225,
      "name": "封开县" },
    {
      "id": 441226,
      "name": "德庆县" },
    {
      "id": 441284,
      "name": "四会市" }] },

  {
    "id": 441300,
    "name": "惠州市",
    "children": [{
      "id": 441302,
      "name": "惠城区" },
    {
      "id": 441303,
      "name": "惠阳区" },
    {
      "id": 441322,
      "name": "博罗县" },
    {
      "id": 441323,
      "name": "惠东县" },
    {
      "id": 441324,
      "name": "龙门县" }] },

  {
    "id": 441400,
    "name": "梅州市",
    "children": [{
      "id": 441402,
      "name": "梅江区" },
    {
      "id": 441403,
      "name": "梅县区" },
    {
      "id": 441422,
      "name": "大埔县" },
    {
      "id": 441423,
      "name": "丰顺县" },
    {
      "id": 441424,
      "name": "五华县" },
    {
      "id": 441426,
      "name": "平远县" },
    {
      "id": 441427,
      "name": "蕉岭县" },
    {
      "id": 441481,
      "name": "兴宁市" }] },

  {
    "id": 441500,
    "name": "汕尾市",
    "children": [{
      "id": 441502,
      "name": "城区" },
    {
      "id": 441521,
      "name": "海丰县" },
    {
      "id": 441523,
      "name": "陆河县" },
    {
      "id": 441581,
      "name": "陆丰市" }] },

  {
    "id": 441600,
    "name": "河源市",
    "children": [{
      "id": 441602,
      "name": "源城区" },
    {
      "id": 441621,
      "name": "紫金县" },
    {
      "id": 441622,
      "name": "龙川县" },
    {
      "id": 441623,
      "name": "连平县" },
    {
      "id": 441624,
      "name": "和平县" },
    {
      "id": 441625,
      "name": "东源县" }] },

  {
    "id": 441700,
    "name": "阳江市",
    "children": [{
      "id": 441702,
      "name": "江城区" },
    {
      "id": 441704,
      "name": "阳东区" },
    {
      "id": 441721,
      "name": "阳西县" },
    {
      "id": 441781,
      "name": "阳春市" }] },

  {
    "id": 441800,
    "name": "清远市",
    "children": [{
      "id": 441802,
      "name": "清城区" },
    {
      "id": 441803,
      "name": "清新区" },
    {
      "id": 441821,
      "name": "佛冈县" },
    {
      "id": 441823,
      "name": "阳山县" },
    {
      "id": 441825,
      "name": "连山壮族瑶族自治县" },
    {
      "id": 441826,
      "name": "连南瑶族自治县" },
    {
      "id": 441881,
      "name": "英德市" },
    {
      "id": 441882,
      "name": "连州市" }] },

  {
    "id": 441900,
    "name": "东莞市",
    "children": [{
      "id": 441999,
      "name": "东莞市" }] },

  {
    "id": 442000,
    "name": "中山市",
    "children": [{
      "id": 442099,
      "name": "中山市" }] },

  {
    "id": 445100,
    "name": "潮州市",
    "children": [{
      "id": 445102,
      "name": "湘桥区" },
    {
      "id": 445103,
      "name": "潮安区" },
    {
      "id": 445122,
      "name": "饶平县" }] },

  {
    "id": 445200,
    "name": "揭阳市",
    "children": [{
      "id": 445202,
      "name": "榕城区" },
    {
      "id": 445203,
      "name": "揭东区" },
    {
      "id": 445222,
      "name": "揭西县" },
    {
      "id": 445224,
      "name": "惠来县" },
    {
      "id": 445281,
      "name": "普宁市" }] },

  {
    "id": 445300,
    "name": "云浮市",
    "children": [{
      "id": 445302,
      "name": "云城区" },
    {
      "id": 445303,
      "name": "云安区" },
    {
      "id": 445321,
      "name": "新兴县" },
    {
      "id": 445322,
      "name": "郁南县" },
    {
      "id": 445381,
      "name": "罗定市" }] }] },


{
  "id": 450000,
  "name": "广西壮族自治区",
  "children": [{
    "id": 450100,
    "name": "南宁市",
    "children": [{
      "id": 450102,
      "name": "兴宁区" },
    {
      "id": 450103,
      "name": "青秀区" },
    {
      "id": 450105,
      "name": "江南区" },
    {
      "id": 450107,
      "name": "西乡塘区" },
    {
      "id": 450108,
      "name": "良庆区" },
    {
      "id": 450109,
      "name": "邕宁区" },
    {
      "id": 450110,
      "name": "武鸣区" },
    {
      "id": 450123,
      "name": "隆安县" },
    {
      "id": 450124,
      "name": "马山县" },
    {
      "id": 450125,
      "name": "上林县" },
    {
      "id": 450126,
      "name": "宾阳县" },
    {
      "id": 450127,
      "name": "横县" }] },

  {
    "id": 450200,
    "name": "柳州市",
    "children": [{
      "id": 450202,
      "name": "城中区" },
    {
      "id": 450203,
      "name": "鱼峰区" },
    {
      "id": 450204,
      "name": "柳南区" },
    {
      "id": 450205,
      "name": "柳北区" },
    {
      "id": 450206,
      "name": "柳江区" },
    {
      "id": 450222,
      "name": "柳城县" },
    {
      "id": 450223,
      "name": "鹿寨县" },
    {
      "id": 450224,
      "name": "融安县" },
    {
      "id": 450225,
      "name": "融水苗族自治县" },
    {
      "id": 450226,
      "name": "三江侗族自治县" }] },

  {
    "id": 450300,
    "name": "桂林市",
    "children": [{
      "id": 450302,
      "name": "秀峰区" },
    {
      "id": 450303,
      "name": "叠彩区" },
    {
      "id": 450304,
      "name": "象山区" },
    {
      "id": 450305,
      "name": "七星区" },
    {
      "id": 450311,
      "name": "雁山区" },
    {
      "id": 450312,
      "name": "临桂区" },
    {
      "id": 450321,
      "name": "阳朔县" },
    {
      "id": 450323,
      "name": "灵川县" },
    {
      "id": 450324,
      "name": "全州县" },
    {
      "id": 450325,
      "name": "兴安县" },
    {
      "id": 450326,
      "name": "永福县" },
    {
      "id": 450327,
      "name": "灌阳县" },
    {
      "id": 450328,
      "name": "龙胜各族自治县" },
    {
      "id": 450329,
      "name": "资源县" },
    {
      "id": 450330,
      "name": "平乐县" },
    {
      "id": 450332,
      "name": "恭城瑶族自治县" },
    {
      "id": 450381,
      "name": "荔浦市" }] },

  {
    "id": 450400,
    "name": "梧州市",
    "children": [{
      "id": 450403,
      "name": "万秀区" },
    {
      "id": 450405,
      "name": "长洲区" },
    {
      "id": 450406,
      "name": "龙圩区" },
    {
      "id": 450421,
      "name": "苍梧县" },
    {
      "id": 450422,
      "name": "藤县" },
    {
      "id": 450423,
      "name": "蒙山县" },
    {
      "id": 450481,
      "name": "岑溪市" }] },

  {
    "id": 450500,
    "name": "北海市",
    "children": [{
      "id": 450502,
      "name": "海城区" },
    {
      "id": 450503,
      "name": "银海区" },
    {
      "id": 450512,
      "name": "铁山港区" },
    {
      "id": 450521,
      "name": "合浦县" }] },

  {
    "id": 450600,
    "name": "防城港市",
    "children": [{
      "id": 450602,
      "name": "港口区" },
    {
      "id": 450603,
      "name": "防城区" },
    {
      "id": 450621,
      "name": "上思县" },
    {
      "id": 450681,
      "name": "东兴市" }] },

  {
    "id": 450700,
    "name": "钦州市",
    "children": [{
      "id": 450702,
      "name": "钦南区" },
    {
      "id": 450703,
      "name": "钦北区" },
    {
      "id": 450721,
      "name": "灵山县" },
    {
      "id": 450722,
      "name": "浦北县" }] },

  {
    "id": 450800,
    "name": "贵港市",
    "children": [{
      "id": 450802,
      "name": "港北区" },
    {
      "id": 450803,
      "name": "港南区" },
    {
      "id": 450804,
      "name": "覃塘区" },
    {
      "id": 450821,
      "name": "平南县" },
    {
      "id": 450881,
      "name": "桂平市" }] },

  {
    "id": 450900,
    "name": "玉林市",
    "children": [{
      "id": 450902,
      "name": "玉州区" },
    {
      "id": 450903,
      "name": "福绵区" },
    {
      "id": 450921,
      "name": "容县" },
    {
      "id": 450922,
      "name": "陆川县" },
    {
      "id": 450923,
      "name": "博白县" },
    {
      "id": 450924,
      "name": "兴业县" },
    {
      "id": 450981,
      "name": "北流市" }] },

  {
    "id": 451000,
    "name": "百色市",
    "children": [{
      "id": 451002,
      "name": "右江区" },
    {
      "id": 451021,
      "name": "田阳县" },
    {
      "id": 451022,
      "name": "田东县" },
    {
      "id": 451023,
      "name": "平果县" },
    {
      "id": 451024,
      "name": "德保县" },
    {
      "id": 451026,
      "name": "那坡县" },
    {
      "id": 451027,
      "name": "凌云县" },
    {
      "id": 451028,
      "name": "乐业县" },
    {
      "id": 451029,
      "name": "田林县" },
    {
      "id": 451030,
      "name": "西林县" },
    {
      "id": 451031,
      "name": "隆林各族自治县" },
    {
      "id": 451081,
      "name": "靖西市" }] },

  {
    "id": 451100,
    "name": "贺州市",
    "children": [{
      "id": 451102,
      "name": "八步区" },
    {
      "id": 451103,
      "name": "平桂区" },
    {
      "id": 451121,
      "name": "昭平县" },
    {
      "id": 451122,
      "name": "钟山县" },
    {
      "id": 451123,
      "name": "富川瑶族自治县" }] },

  {
    "id": 451200,
    "name": "河池市",
    "children": [{
      "id": 451202,
      "name": "金城江区" },
    {
      "id": 451203,
      "name": "宜州区" },
    {
      "id": 451221,
      "name": "南丹县" },
    {
      "id": 451222,
      "name": "天峨县" },
    {
      "id": 451223,
      "name": "凤山县" },
    {
      "id": 451224,
      "name": "东兰县" },
    {
      "id": 451225,
      "name": "罗城仫佬族自治县" },
    {
      "id": 451226,
      "name": "环江毛南族自治县" },
    {
      "id": 451227,
      "name": "巴马瑶族自治县" },
    {
      "id": 451228,
      "name": "都安瑶族自治县" },
    {
      "id": 451229,
      "name": "大化瑶族自治县" }] },

  {
    "id": 451300,
    "name": "来宾市",
    "children": [{
      "id": 451302,
      "name": "兴宾区" },
    {
      "id": 451321,
      "name": "忻城县" },
    {
      "id": 451322,
      "name": "象州县" },
    {
      "id": 451323,
      "name": "武宣县" },
    {
      "id": 451324,
      "name": "金秀瑶族自治县" },
    {
      "id": 451381,
      "name": "合山市" }] },

  {
    "id": 451400,
    "name": "崇左市",
    "children": [{
      "id": 451402,
      "name": "江州区" },
    {
      "id": 451421,
      "name": "扶绥县" },
    {
      "id": 451422,
      "name": "宁明县" },
    {
      "id": 451423,
      "name": "龙州县" },
    {
      "id": 451424,
      "name": "大新县" },
    {
      "id": 451425,
      "name": "天等县" },
    {
      "id": 451481,
      "name": "凭祥市" }] }] },


{
  "id": 460000,
  "name": "海南省",
  "children": [{
    "id": 460100,
    "name": "海口市",
    "children": [{
      "id": 460105,
      "name": "秀英区" },
    {
      "id": 460106,
      "name": "龙华区" },
    {
      "id": 460107,
      "name": "琼山区" },
    {
      "id": 460108,
      "name": "美兰区" }] },

  {
    "id": 460200,
    "name": "三亚市",
    "children": [{
      "id": 460202,
      "name": "海棠区" },
    {
      "id": 460203,
      "name": "吉阳区" },
    {
      "id": 460204,
      "name": "天涯区" },
    {
      "id": 460205,
      "name": "崖州区" }] },

  {
    "id": 460300,
    "name": "三沙市",
    "children": [{
      "id": 460321,
      "name": "西沙群岛" },
    {
      "id": 460322,
      "name": "南沙群岛" },
    {
      "id": 460323,
      "name": "中沙群岛的岛礁及其海域" }] },

  {
    "id": 460400,
    "name": "儋州市",
    "children": [{
      "id": 460499,
      "name": "儋州市" }] },

  {
    "id": 469001,
    "name": "五指山市",
    "children": [{
      "id": 469001100,
      "name": "通什镇" },
    {
      "id": 469001101,
      "name": "南圣镇" },
    {
      "id": 469001102,
      "name": "毛阳镇" },
    {
      "id": 469001103,
      "name": "番阳镇" },
    {
      "id": 469001200,
      "name": "畅好乡" },
    {
      "id": 469001201,
      "name": "毛道乡" },
    {
      "id": 469001202,
      "name": "水满乡" },
    {
      "id": 469001400,
      "name": "国营畅好农场" }] },

  {
    "id": 469002,
    "name": "琼海市",
    "children": [{
      "id": 469002100,
      "name": "嘉积镇" },
    {
      "id": 469002101,
      "name": "万泉镇" },
    {
      "id": 469002102,
      "name": "石壁镇" },
    {
      "id": 469002103,
      "name": "中原镇" },
    {
      "id": 469002104,
      "name": "博鳌镇" },
    {
      "id": 469002105,
      "name": "阳江镇" },
    {
      "id": 469002106,
      "name": "龙江镇" },
    {
      "id": 469002107,
      "name": "潭门镇" },
    {
      "id": 469002108,
      "name": "塔洋镇" },
    {
      "id": 469002109,
      "name": "长坡镇" },
    {
      "id": 469002110,
      "name": "大路镇" },
    {
      "id": 469002111,
      "name": "会山镇" },
    {
      "id": 469002400,
      "name": "东太农场" },
    {
      "id": 469002401,
      "name": "南俸农场" },
    {
      "id": 469002402,
      "name": "东红农场" },
    {
      "id": 469002500,
      "name": "彬村山华侨农场" },
    {
      "id": 469002953,
      "name": "东平农场" }] },

  {
    "id": 469005,
    "name": "文昌市",
    "children": [{
      "id": 469005100,
      "name": "文城镇" },
    {
      "id": 469005101,
      "name": "重兴镇" },
    {
      "id": 469005102,
      "name": "蓬莱镇" },
    {
      "id": 469005103,
      "name": "会文镇" },
    {
      "id": 469005104,
      "name": "东路镇" },
    {
      "id": 469005105,
      "name": "潭牛镇" },
    {
      "id": 469005106,
      "name": "东阁镇" },
    {
      "id": 469005107,
      "name": "文教镇" },
    {
      "id": 469005108,
      "name": "东郊镇" },
    {
      "id": 469005109,
      "name": "龙楼镇" },
    {
      "id": 469005110,
      "name": "昌洒镇" },
    {
      "id": 469005111,
      "name": "翁田镇" },
    {
      "id": 469005112,
      "name": "抱罗镇" },
    {
      "id": 469005113,
      "name": "冯坡镇" },
    {
      "id": 469005114,
      "name": "锦山镇" },
    {
      "id": 469005115,
      "name": "铺前镇" },
    {
      "id": 469005116,
      "name": "公坡镇" },
    {
      "id": 469005401,
      "name": "国营南阳农场" },
    {
      "id": 469005402,
      "name": "国营罗豆农场" }] },

  {
    "id": 469006,
    "name": "万宁市",
    "children": [{
      "id": 469006100,
      "name": "万城镇" },
    {
      "id": 469006101,
      "name": "龙滚镇" },
    {
      "id": 469006102,
      "name": "和乐镇" },
    {
      "id": 469006103,
      "name": "后安镇" },
    {
      "id": 469006104,
      "name": "大茂镇" },
    {
      "id": 469006105,
      "name": "东澳镇" },
    {
      "id": 469006106,
      "name": "礼纪镇" },
    {
      "id": 469006107,
      "name": "长丰镇" },
    {
      "id": 469006108,
      "name": "山根镇" },
    {
      "id": 469006109,
      "name": "北大镇" },
    {
      "id": 469006110,
      "name": "南桥镇" },
    {
      "id": 469006111,
      "name": "三更罗镇" },
    {
      "id": 469006400,
      "name": "国营东兴农场" },
    {
      "id": 469006500,
      "name": "兴隆华侨农场" },
    {
      "id": 469006501,
      "name": "地方国营六连林场" },
    {
      "id": 469006951,
      "name": "东岭农场" }] },

  {
    "id": 469007,
    "name": "东方市",
    "children": [{
      "id": 469007100,
      "name": "八所镇" },
    {
      "id": 469007101,
      "name": "东河镇" },
    {
      "id": 469007102,
      "name": "大田镇" },
    {
      "id": 469007103,
      "name": "感城镇" },
    {
      "id": 469007104,
      "name": "板桥镇" },
    {
      "id": 469007105,
      "name": "三家镇" },
    {
      "id": 469007106,
      "name": "四更镇" },
    {
      "id": 469007107,
      "name": "新龙镇" },
    {
      "id": 469007200,
      "name": "天安乡" },
    {
      "id": 469007201,
      "name": "江边乡" },
    {
      "id": 469007400,
      "name": "国营广坝农场" },
    {
      "id": 469007500,
      "name": "东方华侨农场" },
    {
      "id": 469007950,
      "name": "东方农场" }] },

  {
    "id": 469021,
    "name": "定安县",
    "children": [{
      "id": 469021100,
      "name": "定城镇" },
    {
      "id": 469021101,
      "name": "新竹镇" },
    {
      "id": 469021102,
      "name": "龙湖镇" },
    {
      "id": 469021103,
      "name": "黄竹镇" },
    {
      "id": 469021104,
      "name": "雷鸣镇" },
    {
      "id": 469021105,
      "name": "龙门镇" },
    {
      "id": 469021106,
      "name": "龙河镇" },
    {
      "id": 469021107,
      "name": "岭口镇" },
    {
      "id": 469021108,
      "name": "翰林镇" },
    {
      "id": 469021109,
      "name": "富文镇" },
    {
      "id": 469021400,
      "name": "国营中瑞农场" },
    {
      "id": 469021401,
      "name": "国营南海农场" },
    {
      "id": 469021402,
      "name": "国营金鸡岭农场" },
    {
      "id": 469021403,
      "name": "国营东升农场" }] },

  {
    "id": 469022,
    "name": "屯昌县",
    "children": [{
      "id": 469022100,
      "name": "屯城镇" },
    {
      "id": 469022101,
      "name": "新兴镇" },
    {
      "id": 469022102,
      "name": "枫木镇" },
    {
      "id": 469022103,
      "name": "乌坡镇" },
    {
      "id": 469022104,
      "name": "南吕镇" },
    {
      "id": 469022105,
      "name": "南坤镇" },
    {
      "id": 469022106,
      "name": "坡心镇" },
    {
      "id": 469022107,
      "name": "西昌镇" },
    {
      "id": 469022400,
      "name": "国营中瑞农场" },
    {
      "id": 469022401,
      "name": "国营中坤农场" },
    {
      "id": 469022950,
      "name": "国营中建农场" },
    {
      "id": 469022951,
      "name": "晨星农场" },
    {
      "id": 469022952,
      "name": "黄岭农场" },
    {
      "id": 469022954,
      "name": "广青农场" }] },

  {
    "id": 469023,
    "name": "澄迈县",
    "children": [{
      "id": 469023100,
      "name": "金江镇" },
    {
      "id": 469023101,
      "name": "老城镇" },
    {
      "id": 469023102,
      "name": "瑞溪镇" },
    {
      "id": 469023103,
      "name": "永发镇" },
    {
      "id": 469023104,
      "name": "加乐镇" },
    {
      "id": 469023105,
      "name": "文儒镇" },
    {
      "id": 469023106,
      "name": "中兴镇" },
    {
      "id": 469023107,
      "name": "仁兴镇" },
    {
      "id": 469023108,
      "name": "福山镇" },
    {
      "id": 469023109,
      "name": "桥头镇" },
    {
      "id": 469023110,
      "name": "大丰镇" },
    {
      "id": 469023400,
      "name": "国营红光农场" },
    {
      "id": 469023401,
      "name": "红岗农场" },
    {
      "id": 469023402,
      "name": "国营西达农场" },
    {
      "id": 469023405,
      "name": "国营金安农场" }] },

  {
    "id": 469024,
    "name": "临高县",
    "children": [{
      "id": 469024100,
      "name": "临城镇" },
    {
      "id": 469024101,
      "name": "波莲镇" },
    {
      "id": 469024102,
      "name": "东英镇" },
    {
      "id": 469024103,
      "name": "博厚镇" },
    {
      "id": 469024104,
      "name": "皇桐镇" },
    {
      "id": 469024105,
      "name": "多文镇" },
    {
      "id": 469024106,
      "name": "和舍镇" },
    {
      "id": 469024107,
      "name": "南宝镇" },
    {
      "id": 469024108,
      "name": "新盈镇" },
    {
      "id": 469024109,
      "name": "调楼镇" },
    {
      "id": 469024400,
      "name": "国营红华农场" },
    {
      "id": 469024401,
      "name": "国营加来农场" }] },

  {
    "id": 469025,
    "name": "白沙黎族自治县",
    "children": [{
      "id": 469025100,
      "name": "牙叉镇" },
    {
      "id": 469025101,
      "name": "七坊镇" },
    {
      "id": 469025102,
      "name": "邦溪镇" },
    {
      "id": 469025103,
      "name": "打安镇" },
    {
      "id": 469025200,
      "name": "细水乡" },
    {
      "id": 469025201,
      "name": "元门乡" },
    {
      "id": 469025202,
      "name": "南开乡" },
    {
      "id": 469025203,
      "name": "阜龙乡" },
    {
      "id": 469025204,
      "name": "青松乡" },
    {
      "id": 469025205,
      "name": "金波乡" },
    {
      "id": 469025206,
      "name": "荣邦乡" },
    {
      "id": 469025401,
      "name": "国营白沙农场" },
    {
      "id": 469025404,
      "name": "国营龙江农场" },
    {
      "id": 469025950,
      "name": "卫星农场" }] },

  {
    "id": 469026,
    "name": "昌江黎族自治县",
    "children": [{
      "id": 469026100,
      "name": "石碌镇" },
    {
      "id": 469026101,
      "name": "叉河镇" },
    {
      "id": 469026102,
      "name": "十月田镇" },
    {
      "id": 469026103,
      "name": "乌烈镇" },
    {
      "id": 469026104,
      "name": "昌化镇" },
    {
      "id": 469026105,
      "name": "海尾镇" },
    {
      "id": 469026106,
      "name": "七叉镇" },
    {
      "id": 469026200,
      "name": "王下乡" },
    {
      "id": 469026401,
      "name": "国营红林农场" },
    {
      "id": 469026500,
      "name": "国营霸王岭林场" }] },

  {
    "id": 469027,
    "name": "乐东黎族自治县",
    "children": [{
      "id": 469027100,
      "name": "抱由镇" },
    {
      "id": 469027101,
      "name": "万冲镇" },
    {
      "id": 469027102,
      "name": "大安镇" },
    {
      "id": 469027103,
      "name": "志仲镇" },
    {
      "id": 469027104,
      "name": "千家镇" },
    {
      "id": 469027105,
      "name": "九所镇" },
    {
      "id": 469027106,
      "name": "利国镇" },
    {
      "id": 469027107,
      "name": "黄流镇" },
    {
      "id": 469027108,
      "name": "佛罗镇" },
    {
      "id": 469027109,
      "name": "尖峰镇" },
    {
      "id": 469027110,
      "name": "莺歌海镇" },
    {
      "id": 469027401,
      "name": "国营山荣农场" },
    {
      "id": 469027402,
      "name": "国营乐光农场" },
    {
      "id": 469027405,
      "name": "国营保国农场" },
    {
      "id": 469027951,
      "name": "福报农场" }] },

  {
    "id": 469028,
    "name": "陵水黎族自治县",
    "children": [{
      "id": 469028100,
      "name": "椰林镇" },
    {
      "id": 469028101,
      "name": "光坡镇" },
    {
      "id": 469028102,
      "name": "三才镇" },
    {
      "id": 469028103,
      "name": "英州镇" },
    {
      "id": 469028104,
      "name": "隆广镇" },
    {
      "id": 469028105,
      "name": "文罗镇" },
    {
      "id": 469028106,
      "name": "本号镇" },
    {
      "id": 469028107,
      "name": "新村镇" },
    {
      "id": 469028108,
      "name": "黎安镇" },
    {
      "id": 469028200,
      "name": "提蒙乡" },
    {
      "id": 469028201,
      "name": "群英乡" },
    {
      "id": 469028400,
      "name": "岭门农场" },
    {
      "id": 469028401,
      "name": "国营南平农场" }] },

  {
    "id": 469029,
    "name": "保亭黎族苗族自治县",
    "children": [{
      "id": 469029100,
      "name": "保城镇" },
    {
      "id": 469029101,
      "name": "什玲镇" },
    {
      "id": 469029102,
      "name": "加茂镇" },
    {
      "id": 469029103,
      "name": "响水镇" },
    {
      "id": 469029104,
      "name": "新政镇" },
    {
      "id": 469029105,
      "name": "三道镇" },
    {
      "id": 469029200,
      "name": "六弓乡" },
    {
      "id": 469029201,
      "name": "南林乡" },
    {
      "id": 469029202,
      "name": "毛感乡" },
    {
      "id": 469029401,
      "name": "新星农场" },
    {
      "id": 469029402,
      "name": "海南保亭热带作物研究所" },
    {
      "id": 469029403,
      "name": "国营金江农场" },
    {
      "id": 469029950,
      "name": "南茂农场" },
    {
      "id": 469029952,
      "name": "通什茶场" }] },

  {
    "id": 469030,
    "name": "琼中黎族苗族自治县",
    "children": [{
      "id": 469030100,
      "name": "营根镇" },
    {
      "id": 469030101,
      "name": "湾岭镇" },
    {
      "id": 469030102,
      "name": "黎母山镇" },
    {
      "id": 469030103,
      "name": "和平镇" },
    {
      "id": 469030104,
      "name": "长征镇" },
    {
      "id": 469030105,
      "name": "红毛镇" },
    {
      "id": 469030106,
      "name": "中平镇" },
    {
      "id": 469030200,
      "name": "吊罗山乡" },
    {
      "id": 469030201,
      "name": "上安乡" },
    {
      "id": 469030202,
      "name": "什运乡" },
    {
      "id": 469030402,
      "name": "阳江农场" },
    {
      "id": 469030403,
      "name": "乌石农场" },
    {
      "id": 469030950,
      "name": "岭头茶场" },
    {
      "id": 469030951,
      "name": "南方农场" }] }] },


{
  "id": 500000,
  "name": "重庆市",
  "children": [{
    "id": 500100,
    "name": "重庆市",
    "children": [{
      "id": 500101,
      "name": "万州区" },
    {
      "id": 500102,
      "name": "涪陵区" },
    {
      "id": 500103,
      "name": "渝中区" },
    {
      "id": 500104,
      "name": "大渡口区" },
    {
      "id": 500105,
      "name": "江北区" },
    {
      "id": 500106,
      "name": "沙坪坝区" },
    {
      "id": 500107,
      "name": "九龙坡区" },
    {
      "id": 500108,
      "name": "南岸区" },
    {
      "id": 500109,
      "name": "北碚区" },
    {
      "id": 500110,
      "name": "綦江区" },
    {
      "id": 500111,
      "name": "大足区" },
    {
      "id": 500112,
      "name": "渝北区" },
    {
      "id": 500113,
      "name": "巴南区" },
    {
      "id": 500114,
      "name": "黔江区" },
    {
      "id": 500115,
      "name": "长寿区" },
    {
      "id": 500116,
      "name": "江津区" },
    {
      "id": 500117,
      "name": "合川区" },
    {
      "id": 500118,
      "name": "永川区" },
    {
      "id": 500119,
      "name": "南川区" },
    {
      "id": 500120,
      "name": "璧山区" },
    {
      "id": 500151,
      "name": "铜梁区" },
    {
      "id": 500152,
      "name": "潼南区" },
    {
      "id": 500153,
      "name": "荣昌区" },
    {
      "id": 500154,
      "name": "开州区" },
    {
      "id": 500155,
      "name": "梁平区" },
    {
      "id": 500156,
      "name": "武隆区" },
    {
      "id": 500229,
      "name": "城口县" },
    {
      "id": 500230,
      "name": "丰都县" },
    {
      "id": 500231,
      "name": "垫江县" },
    {
      "id": 500233,
      "name": "忠县" },
    {
      "id": 500235,
      "name": "云阳县" },
    {
      "id": 500236,
      "name": "奉节县" },
    {
      "id": 500237,
      "name": "巫山县" },
    {
      "id": 500238,
      "name": "巫溪县" },
    {
      "id": 500240,
      "name": "石柱土家族自治县" },
    {
      "id": 500241,
      "name": "秀山土家族苗族自治县" },
    {
      "id": 500242,
      "name": "酉阳土家族苗族自治县" },
    {
      "id": 500243,
      "name": "彭水苗族土家族自治县" }] }] },


{
  "id": 510000,
  "name": "四川省",
  "children": [{
    "id": 510100,
    "name": "成都市",
    "children": [{
      "id": 510104,
      "name": "锦江区" },
    {
      "id": 510105,
      "name": "青羊区" },
    {
      "id": 510106,
      "name": "金牛区" },
    {
      "id": 510107,
      "name": "武侯区" },
    {
      "id": 510108,
      "name": "成华区" },
    {
      "id": 510112,
      "name": "龙泉驿区" },
    {
      "id": 510113,
      "name": "青白江区" },
    {
      "id": 510114,
      "name": "新都区" },
    {
      "id": 510115,
      "name": "温江区" },
    {
      "id": 510116,
      "name": "双流区" },
    {
      "id": 510117,
      "name": "郫都区" },
    {
      "id": 510121,
      "name": "金堂县" },
    {
      "id": 510129,
      "name": "大邑县" },
    {
      "id": 510131,
      "name": "蒲江县" },
    {
      "id": 510132,
      "name": "新津县" },
    {
      "id": 510181,
      "name": "都江堰市" },
    {
      "id": 510182,
      "name": "彭州市" },
    {
      "id": 510183,
      "name": "邛崃市" },
    {
      "id": 510184,
      "name": "崇州市" },
    {
      "id": 510185,
      "name": "简阳市" }] },

  {
    "id": 510300,
    "name": "自贡市",
    "children": [{
      "id": 510302,
      "name": "自流井区" },
    {
      "id": 510303,
      "name": "贡井区" },
    {
      "id": 510304,
      "name": "大安区" },
    {
      "id": 510311,
      "name": "沿滩区" },
    {
      "id": 510321,
      "name": "荣县" },
    {
      "id": 510322,
      "name": "富顺县" }] },

  {
    "id": 510400,
    "name": "攀枝花市",
    "children": [{
      "id": 510402,
      "name": "东区" },
    {
      "id": 510403,
      "name": "西区" },
    {
      "id": 510411,
      "name": "仁和区" },
    {
      "id": 510421,
      "name": "米易县" },
    {
      "id": 510422,
      "name": "盐边县" }] },

  {
    "id": 510500,
    "name": "泸州市",
    "children": [{
      "id": 510502,
      "name": "江阳区" },
    {
      "id": 510503,
      "name": "纳溪区" },
    {
      "id": 510504,
      "name": "龙马潭区" },
    {
      "id": 510521,
      "name": "泸县" },
    {
      "id": 510522,
      "name": "合江县" },
    {
      "id": 510524,
      "name": "叙永县" },
    {
      "id": 510525,
      "name": "古蔺县" }] },

  {
    "id": 510600,
    "name": "德阳市",
    "children": [{
      "id": 510603,
      "name": "旌阳区" },
    {
      "id": 510604,
      "name": "罗江区" },
    {
      "id": 510623,
      "name": "中江县" },
    {
      "id": 510681,
      "name": "广汉市" },
    {
      "id": 510682,
      "name": "什邡市" },
    {
      "id": 510683,
      "name": "绵竹市" }] },

  {
    "id": 510700,
    "name": "绵阳市",
    "children": [{
      "id": 510703,
      "name": "涪城区" },
    {
      "id": 510704,
      "name": "游仙区" },
    {
      "id": 510705,
      "name": "安州区" },
    {
      "id": 510722,
      "name": "三台县" },
    {
      "id": 510723,
      "name": "盐亭县" },
    {
      "id": 510725,
      "name": "梓潼县" },
    {
      "id": 510726,
      "name": "北川羌族自治县" },
    {
      "id": 510727,
      "name": "平武县" },
    {
      "id": 510781,
      "name": "江油市" }] },

  {
    "id": 510800,
    "name": "广元市",
    "children": [{
      "id": 510802,
      "name": "利州区" },
    {
      "id": 510811,
      "name": "昭化区" },
    {
      "id": 510812,
      "name": "朝天区" },
    {
      "id": 510821,
      "name": "旺苍县" },
    {
      "id": 510822,
      "name": "青川县" },
    {
      "id": 510823,
      "name": "剑阁县" },
    {
      "id": 510824,
      "name": "苍溪县" }] },

  {
    "id": 510900,
    "name": "遂宁市",
    "children": [{
      "id": 510903,
      "name": "船山区" },
    {
      "id": 510904,
      "name": "安居区" },
    {
      "id": 510921,
      "name": "蓬溪县" },
    {
      "id": 510922,
      "name": "射洪县" },
    {
      "id": 510923,
      "name": "大英县" }] },

  {
    "id": 511000,
    "name": "内江市",
    "children": [{
      "id": 511002,
      "name": "市中区" },
    {
      "id": 511011,
      "name": "东兴区" },
    {
      "id": 511024,
      "name": "威远县" },
    {
      "id": 511025,
      "name": "资中县" },
    {
      "id": 511083,
      "name": "隆昌市" }] },

  {
    "id": 511100,
    "name": "乐山市",
    "children": [{
      "id": 511102,
      "name": "市中区" },
    {
      "id": 511111,
      "name": "沙湾区" },
    {
      "id": 511112,
      "name": "五通桥区" },
    {
      "id": 511113,
      "name": "金口河区" },
    {
      "id": 511123,
      "name": "犍为县" },
    {
      "id": 511124,
      "name": "井研县" },
    {
      "id": 511126,
      "name": "夹江县" },
    {
      "id": 511129,
      "name": "沐川县" },
    {
      "id": 511132,
      "name": "峨边彝族自治县" },
    {
      "id": 511133,
      "name": "马边彝族自治县" },
    {
      "id": 511181,
      "name": "峨眉山市" }] },

  {
    "id": 511300,
    "name": "南充市",
    "children": [{
      "id": 511302,
      "name": "顺庆区" },
    {
      "id": 511303,
      "name": "高坪区" },
    {
      "id": 511304,
      "name": "嘉陵区" },
    {
      "id": 511321,
      "name": "南部县" },
    {
      "id": 511322,
      "name": "营山县" },
    {
      "id": 511323,
      "name": "蓬安县" },
    {
      "id": 511324,
      "name": "仪陇县" },
    {
      "id": 511325,
      "name": "西充县" },
    {
      "id": 511381,
      "name": "阆中市" }] },

  {
    "id": 511400,
    "name": "眉山市",
    "children": [{
      "id": 511402,
      "name": "东坡区" },
    {
      "id": 511403,
      "name": "彭山区" },
    {
      "id": 511421,
      "name": "仁寿县" },
    {
      "id": 511423,
      "name": "洪雅县" },
    {
      "id": 511424,
      "name": "丹棱县" },
    {
      "id": 511425,
      "name": "青神县" }] },

  {
    "id": 511500,
    "name": "宜宾市",
    "children": [{
      "id": 511502,
      "name": "翠屏区" },
    {
      "id": 511503,
      "name": "南溪区" },
    {
      "id": 511504,
      "name": "叙州区" },
    {
      "id": 511523,
      "name": "江安县" },
    {
      "id": 511524,
      "name": "长宁县" },
    {
      "id": 511525,
      "name": "高县" },
    {
      "id": 511526,
      "name": "珙县" },
    {
      "id": 511527,
      "name": "筠连县" },
    {
      "id": 511528,
      "name": "兴文县" },
    {
      "id": 511529,
      "name": "屏山县" }] },

  {
    "id": 511600,
    "name": "广安市",
    "children": [{
      "id": 511602,
      "name": "广安区" },
    {
      "id": 511603,
      "name": "前锋区" },
    {
      "id": 511621,
      "name": "岳池县" },
    {
      "id": 511622,
      "name": "武胜县" },
    {
      "id": 511623,
      "name": "邻水县" },
    {
      "id": 511681,
      "name": "华蓥市" }] },

  {
    "id": 511700,
    "name": "达州市",
    "children": [{
      "id": 511702,
      "name": "通川区" },
    {
      "id": 511703,
      "name": "达川区" },
    {
      "id": 511722,
      "name": "宣汉县" },
    {
      "id": 511723,
      "name": "开江县" },
    {
      "id": 511724,
      "name": "大竹县" },
    {
      "id": 511725,
      "name": "渠县" },
    {
      "id": 511781,
      "name": "万源市" }] },

  {
    "id": 511800,
    "name": "雅安市",
    "children": [{
      "id": 511802,
      "name": "雨城区" },
    {
      "id": 511803,
      "name": "名山区" },
    {
      "id": 511822,
      "name": "荥经县" },
    {
      "id": 511823,
      "name": "汉源县" },
    {
      "id": 511824,
      "name": "石棉县" },
    {
      "id": 511825,
      "name": "天全县" },
    {
      "id": 511826,
      "name": "芦山县" },
    {
      "id": 511827,
      "name": "宝兴县" }] },

  {
    "id": 511900,
    "name": "巴中市",
    "children": [{
      "id": 511902,
      "name": "巴州区" },
    {
      "id": 511903,
      "name": "恩阳区" },
    {
      "id": 511921,
      "name": "通江县" },
    {
      "id": 511922,
      "name": "南江县" },
    {
      "id": 511923,
      "name": "平昌县" }] },

  {
    "id": 512000,
    "name": "资阳市",
    "children": [{
      "id": 512002,
      "name": "雁江区" },
    {
      "id": 512021,
      "name": "安岳县" },
    {
      "id": 512022,
      "name": "乐至县" }] },

  {
    "id": 513200,
    "name": "阿坝藏族羌族自治州",
    "children": [{
      "id": 513201,
      "name": "马尔康市" },
    {
      "id": 513221,
      "name": "汶川县" },
    {
      "id": 513222,
      "name": "理县" },
    {
      "id": 513223,
      "name": "茂县" },
    {
      "id": 513224,
      "name": "松潘县" },
    {
      "id": 513225,
      "name": "九寨沟县" },
    {
      "id": 513226,
      "name": "金川县" },
    {
      "id": 513227,
      "name": "小金县" },
    {
      "id": 513228,
      "name": "黑水县" },
    {
      "id": 513230,
      "name": "壤塘县" },
    {
      "id": 513231,
      "name": "阿坝县" },
    {
      "id": 513232,
      "name": "若尔盖县" },
    {
      "id": 513233,
      "name": "红原县" }] },

  {
    "id": 513300,
    "name": "甘孜藏族自治州",
    "children": [{
      "id": 513301,
      "name": "康定市" },
    {
      "id": 513322,
      "name": "泸定县" },
    {
      "id": 513323,
      "name": "丹巴县" },
    {
      "id": 513324,
      "name": "九龙县" },
    {
      "id": 513325,
      "name": "雅江县" },
    {
      "id": 513326,
      "name": "道孚县" },
    {
      "id": 513327,
      "name": "炉霍县" },
    {
      "id": 513328,
      "name": "甘孜县" },
    {
      "id": 513329,
      "name": "新龙县" },
    {
      "id": 513330,
      "name": "德格县" },
    {
      "id": 513331,
      "name": "白玉县" },
    {
      "id": 513332,
      "name": "石渠县" },
    {
      "id": 513333,
      "name": "色达县" },
    {
      "id": 513334,
      "name": "理塘县" },
    {
      "id": 513335,
      "name": "巴塘县" },
    {
      "id": 513336,
      "name": "乡城县" },
    {
      "id": 513337,
      "name": "稻城县" },
    {
      "id": 513338,
      "name": "得荣县" }] },

  {
    "id": 513400,
    "name": "凉山彝族自治州",
    "children": [{
      "id": 513401,
      "name": "西昌市" },
    {
      "id": 513422,
      "name": "木里藏族自治县" },
    {
      "id": 513423,
      "name": "盐源县" },
    {
      "id": 513424,
      "name": "德昌县" },
    {
      "id": 513425,
      "name": "会理县" },
    {
      "id": 513426,
      "name": "会东县" },
    {
      "id": 513427,
      "name": "宁南县" },
    {
      "id": 513428,
      "name": "普格县" },
    {
      "id": 513429,
      "name": "布拖县" },
    {
      "id": 513430,
      "name": "金阳县" },
    {
      "id": 513431,
      "name": "昭觉县" },
    {
      "id": 513432,
      "name": "喜德县" },
    {
      "id": 513433,
      "name": "冕宁县" },
    {
      "id": 513434,
      "name": "越西县" },
    {
      "id": 513435,
      "name": "甘洛县" },
    {
      "id": 513436,
      "name": "美姑县" },
    {
      "id": 513437,
      "name": "雷波县" }] }] },


{
  "id": 520000,
  "name": "贵州省",
  "children": [{
    "id": 520100,
    "name": "贵阳市",
    "children": [{
      "id": 520102,
      "name": "南明区" },
    {
      "id": 520103,
      "name": "云岩区" },
    {
      "id": 520111,
      "name": "花溪区" },
    {
      "id": 520112,
      "name": "乌当区" },
    {
      "id": 520113,
      "name": "白云区" },
    {
      "id": 520115,
      "name": "观山湖区" },
    {
      "id": 520121,
      "name": "开阳县" },
    {
      "id": 520122,
      "name": "息烽县" },
    {
      "id": 520123,
      "name": "修文县" },
    {
      "id": 520181,
      "name": "清镇市" }] },

  {
    "id": 520200,
    "name": "六盘水市",
    "children": [{
      "id": 520201,
      "name": "钟山区" },
    {
      "id": 520203,
      "name": "六枝特区" },
    {
      "id": 520221,
      "name": "水城县" },
    {
      "id": 520281,
      "name": "盘州市" }] },

  {
    "id": 520300,
    "name": "遵义市",
    "children": [{
      "id": 520302,
      "name": "红花岗区" },
    {
      "id": 520303,
      "name": "汇川区" },
    {
      "id": 520304,
      "name": "播州区" },
    {
      "id": 520322,
      "name": "桐梓县" },
    {
      "id": 520323,
      "name": "绥阳县" },
    {
      "id": 520324,
      "name": "正安县" },
    {
      "id": 520325,
      "name": "道真仡佬族苗族自治县" },
    {
      "id": 520326,
      "name": "务川仡佬族苗族自治县" },
    {
      "id": 520327,
      "name": "凤冈县" },
    {
      "id": 520328,
      "name": "湄潭县" },
    {
      "id": 520329,
      "name": "余庆县" },
    {
      "id": 520330,
      "name": "习水县" },
    {
      "id": 520381,
      "name": "赤水市" },
    {
      "id": 520382,
      "name": "仁怀市" }] },

  {
    "id": 520400,
    "name": "安顺市",
    "children": [{
      "id": 520402,
      "name": "西秀区" },
    {
      "id": 520403,
      "name": "平坝区" },
    {
      "id": 520422,
      "name": "普定县" },
    {
      "id": 520423,
      "name": "镇宁布依族苗族自治县" },
    {
      "id": 520424,
      "name": "关岭布依族苗族自治县" },
    {
      "id": 520425,
      "name": "紫云苗族布依族自治县" }] },

  {
    "id": 520500,
    "name": "毕节市",
    "children": [{
      "id": 520502,
      "name": "七星关区" },
    {
      "id": 520521,
      "name": "大方县" },
    {
      "id": 520522,
      "name": "黔西县" },
    {
      "id": 520523,
      "name": "金沙县" },
    {
      "id": 520524,
      "name": "织金县" },
    {
      "id": 520525,
      "name": "纳雍县" },
    {
      "id": 520526,
      "name": "威宁彝族回族苗族自治县" },
    {
      "id": 520527,
      "name": "赫章县" }] },

  {
    "id": 520600,
    "name": "铜仁市",
    "children": [{
      "id": 520602,
      "name": "碧江区" },
    {
      "id": 520603,
      "name": "万山区" },
    {
      "id": 520621,
      "name": "江口县" },
    {
      "id": 520622,
      "name": "玉屏侗族自治县" },
    {
      "id": 520623,
      "name": "石阡县" },
    {
      "id": 520624,
      "name": "思南县" },
    {
      "id": 520625,
      "name": "印江土家族苗族自治县" },
    {
      "id": 520626,
      "name": "德江县" },
    {
      "id": 520627,
      "name": "沿河土家族自治县" },
    {
      "id": 520628,
      "name": "松桃苗族自治县" }] },

  {
    "id": 522300,
    "name": "黔西南布依族苗族自治州",
    "children": [{
      "id": 522301,
      "name": "兴义市" },
    {
      "id": 522302,
      "name": "兴仁市" },
    {
      "id": 522323,
      "name": "普安县" },
    {
      "id": 522324,
      "name": "晴隆县" },
    {
      "id": 522325,
      "name": "贞丰县" },
    {
      "id": 522326,
      "name": "望谟县" },
    {
      "id": 522327,
      "name": "册亨县" },
    {
      "id": 522328,
      "name": "安龙县" }] },

  {
    "id": 522600,
    "name": "黔东南苗族侗族自治州",
    "children": [{
      "id": 522601,
      "name": "凯里市" },
    {
      "id": 522622,
      "name": "黄平县" },
    {
      "id": 522623,
      "name": "施秉县" },
    {
      "id": 522624,
      "name": "三穗县" },
    {
      "id": 522625,
      "name": "镇远县" },
    {
      "id": 522626,
      "name": "岑巩县" },
    {
      "id": 522627,
      "name": "天柱县" },
    {
      "id": 522628,
      "name": "锦屏县" },
    {
      "id": 522629,
      "name": "剑河县" },
    {
      "id": 522630,
      "name": "台江县" },
    {
      "id": 522631,
      "name": "黎平县" },
    {
      "id": 522632,
      "name": "榕江县" },
    {
      "id": 522633,
      "name": "从江县" },
    {
      "id": 522634,
      "name": "雷山县" },
    {
      "id": 522635,
      "name": "麻江县" },
    {
      "id": 522636,
      "name": "丹寨县" }] },

  {
    "id": 522700,
    "name": "黔南布依族苗族自治州",
    "children": [{
      "id": 522701,
      "name": "都匀市" },
    {
      "id": 522702,
      "name": "福泉市" },
    {
      "id": 522722,
      "name": "荔波县" },
    {
      "id": 522723,
      "name": "贵定县" },
    {
      "id": 522725,
      "name": "瓮安县" },
    {
      "id": 522726,
      "name": "独山县" },
    {
      "id": 522727,
      "name": "平塘县" },
    {
      "id": 522728,
      "name": "罗甸县" },
    {
      "id": 522729,
      "name": "长顺县" },
    {
      "id": 522730,
      "name": "龙里县" },
    {
      "id": 522731,
      "name": "惠水县" },
    {
      "id": 522732,
      "name": "三都水族自治县" }] }] },


{
  "id": 530000,
  "name": "云南省",
  "children": [{
    "id": 530100,
    "name": "昆明市",
    "children": [{
      "id": 530102,
      "name": "五华区" },
    {
      "id": 530103,
      "name": "盘龙区" },
    {
      "id": 530111,
      "name": "官渡区" },
    {
      "id": 530112,
      "name": "西山区" },
    {
      "id": 530113,
      "name": "东川区" },
    {
      "id": 530114,
      "name": "呈贡区" },
    {
      "id": 530115,
      "name": "晋宁区" },
    {
      "id": 530124,
      "name": "富民县" },
    {
      "id": 530125,
      "name": "宜良县" },
    {
      "id": 530126,
      "name": "石林彝族自治县" },
    {
      "id": 530127,
      "name": "嵩明县" },
    {
      "id": 530128,
      "name": "禄劝彝族苗族自治县" },
    {
      "id": 530129,
      "name": "寻甸回族彝族自治县" },
    {
      "id": 530181,
      "name": "安宁市" }] },

  {
    "id": 530300,
    "name": "曲靖市",
    "children": [{
      "id": 530302,
      "name": "麒麟区" },
    {
      "id": 530303,
      "name": "沾益区" },
    {
      "id": 530304,
      "name": "马龙区" },
    {
      "id": 530322,
      "name": "陆良县" },
    {
      "id": 530323,
      "name": "师宗县" },
    {
      "id": 530324,
      "name": "罗平县" },
    {
      "id": 530325,
      "name": "富源县" },
    {
      "id": 530326,
      "name": "会泽县" },
    {
      "id": 530381,
      "name": "宣威市" }] },

  {
    "id": 530400,
    "name": "玉溪市",
    "children": [{
      "id": 530402,
      "name": "红塔区" },
    {
      "id": 530403,
      "name": "江川区" },
    {
      "id": 530422,
      "name": "澄江县" },
    {
      "id": 530423,
      "name": "通海县" },
    {
      "id": 530424,
      "name": "华宁县" },
    {
      "id": 530425,
      "name": "易门县" },
    {
      "id": 530426,
      "name": "峨山彝族自治县" },
    {
      "id": 530427,
      "name": "新平彝族傣族自治县" },
    {
      "id": 530428,
      "name": "元江县" }] },

  {
    "id": 530500,
    "name": "保山市",
    "children": [{
      "id": 530502,
      "name": "隆阳区" },
    {
      "id": 530521,
      "name": "施甸县" },
    {
      "id": 530523,
      "name": "龙陵县" },
    {
      "id": 530524,
      "name": "昌宁县" },
    {
      "id": 530581,
      "name": "腾冲市" }] },

  {
    "id": 530600,
    "name": "昭通市",
    "children": [{
      "id": 530602,
      "name": "昭阳区" },
    {
      "id": 530621,
      "name": "鲁甸县" },
    {
      "id": 530622,
      "name": "巧家县" },
    {
      "id": 530623,
      "name": "盐津县" },
    {
      "id": 530624,
      "name": "大关县" },
    {
      "id": 530625,
      "name": "永善县" },
    {
      "id": 530626,
      "name": "绥江县" },
    {
      "id": 530627,
      "name": "镇雄县" },
    {
      "id": 530628,
      "name": "彝良县" },
    {
      "id": 530629,
      "name": "威信县" },
    {
      "id": 530681,
      "name": "水富市" }] },

  {
    "id": 530700,
    "name": "丽江市",
    "children": [{
      "id": 530702,
      "name": "古城区" },
    {
      "id": 530721,
      "name": "玉龙纳西族自治县" },
    {
      "id": 530722,
      "name": "永胜县" },
    {
      "id": 530723,
      "name": "华坪县" },
    {
      "id": 530724,
      "name": "宁蒗彝族自治县" }] },

  {
    "id": 530800,
    "name": "普洱市",
    "children": [{
      "id": 530802,
      "name": "思茅区" },
    {
      "id": 530821,
      "name": "宁洱哈尼族彝族自治县" },
    {
      "id": 530822,
      "name": "墨江哈尼族自治县" },
    {
      "id": 530823,
      "name": "景东彝族自治县" },
    {
      "id": 530824,
      "name": "景谷傣族彝族自治县" },
    {
      "id": 530825,
      "name": "镇沅县" },
    {
      "id": 530826,
      "name": "江城哈尼族彝族自治县" },
    {
      "id": 530827,
      "name": "孟连县" },
    {
      "id": 530828,
      "name": "澜沧拉祜族自治县" },
    {
      "id": 530829,
      "name": "西盟佤族自治县" }] },

  {
    "id": 530900,
    "name": "临沧市",
    "children": [{
      "id": 530902,
      "name": "临翔区" },
    {
      "id": 530921,
      "name": "凤庆县" },
    {
      "id": 530922,
      "name": "云县" },
    {
      "id": 530923,
      "name": "永德县" },
    {
      "id": 530924,
      "name": "镇康县" },
    {
      "id": 530925,
      "name": "双江县" },
    {
      "id": 530926,
      "name": "耿马傣族佤族自治县" },
    {
      "id": 530927,
      "name": "沧源佤族自治县" }] },

  {
    "id": 532300,
    "name": "楚雄彝族自治州",
    "children": [{
      "id": 532301,
      "name": "楚雄市" },
    {
      "id": 532322,
      "name": "双柏县" },
    {
      "id": 532323,
      "name": "牟定县" },
    {
      "id": 532324,
      "name": "南华县" },
    {
      "id": 532325,
      "name": "姚安县" },
    {
      "id": 532326,
      "name": "大姚县" },
    {
      "id": 532327,
      "name": "永仁县" },
    {
      "id": 532328,
      "name": "元谋县" },
    {
      "id": 532329,
      "name": "武定县" },
    {
      "id": 532331,
      "name": "禄丰县" }] },

  {
    "id": 532500,
    "name": "红河哈尼族彝族自治州",
    "children": [{
      "id": 532501,
      "name": "个旧市" },
    {
      "id": 532502,
      "name": "开远市" },
    {
      "id": 532503,
      "name": "蒙自市" },
    {
      "id": 532504,
      "name": "弥勒市" },
    {
      "id": 532523,
      "name": "屏边苗族自治县" },
    {
      "id": 532524,
      "name": "建水县" },
    {
      "id": 532525,
      "name": "石屏县" },
    {
      "id": 532527,
      "name": "泸西县" },
    {
      "id": 532528,
      "name": "元阳县" },
    {
      "id": 532529,
      "name": "红河县" },
    {
      "id": 532530,
      "name": "金平苗族瑶族傣族自治县" },
    {
      "id": 532531,
      "name": "绿春县" },
    {
      "id": 532532,
      "name": "河口瑶族自治县" }] },

  {
    "id": 532600,
    "name": "文山壮族苗族自治州",
    "children": [{
      "id": 532601,
      "name": "文山市" },
    {
      "id": 532622,
      "name": "砚山县" },
    {
      "id": 532623,
      "name": "西畴县" },
    {
      "id": 532624,
      "name": "麻栗坡县" },
    {
      "id": 532625,
      "name": "马关县" },
    {
      "id": 532626,
      "name": "丘北县" },
    {
      "id": 532627,
      "name": "广南县" },
    {
      "id": 532628,
      "name": "富宁县" }] },

  {
    "id": 532800,
    "name": "西双版纳傣族自治州",
    "children": [{
      "id": 532801,
      "name": "景洪市" },
    {
      "id": 532822,
      "name": "勐海县" },
    {
      "id": 532823,
      "name": "勐腊县" }] },

  {
    "id": 532900,
    "name": "大理白族自治州",
    "children": [{
      "id": 532901,
      "name": "大理市" },
    {
      "id": 532922,
      "name": "漾濞彝族自治县" },
    {
      "id": 532923,
      "name": "祥云县" },
    {
      "id": 532924,
      "name": "宾川县" },
    {
      "id": 532925,
      "name": "弥渡县" },
    {
      "id": 532926,
      "name": "南涧彝族自治县" },
    {
      "id": 532927,
      "name": "巍山彝族回族自治县" },
    {
      "id": 532928,
      "name": "永平县" },
    {
      "id": 532929,
      "name": "云龙县" },
    {
      "id": 532930,
      "name": "洱源县" },
    {
      "id": 532931,
      "name": "剑川县" },
    {
      "id": 532932,
      "name": "鹤庆县" }] },

  {
    "id": 533100,
    "name": "德宏傣族景颇族自治州",
    "children": [{
      "id": 533102,
      "name": "瑞丽市" },
    {
      "id": 533103,
      "name": "芒市" },
    {
      "id": 533122,
      "name": "梁河县" },
    {
      "id": 533123,
      "name": "盈江县" },
    {
      "id": 533124,
      "name": "陇川县" }] },

  {
    "id": 533300,
    "name": "怒江傈僳族自治州",
    "children": [{
      "id": 533301,
      "name": "泸水市" },
    {
      "id": 533323,
      "name": "福贡县" },
    {
      "id": 533324,
      "name": "贡山独龙族怒族自治县" },
    {
      "id": 533325,
      "name": "兰坪白族普米族自治县" }] },

  {
    "id": 533400,
    "name": "迪庆藏族自治州",
    "children": [{
      "id": 533401,
      "name": "香格里拉市" },
    {
      "id": 533422,
      "name": "德钦县" },
    {
      "id": 533423,
      "name": "维西傈僳族自治县" }] }] },


{
  "id": 540000,
  "name": "西藏自治区",
  "children": [{
    "id": 540100,
    "name": "拉萨市",
    "children": [{
      "id": 540102,
      "name": "城关区" },
    {
      "id": 540103,
      "name": "堆龙德庆区" },
    {
      "id": 540104,
      "name": "达孜区" },
    {
      "id": 540121,
      "name": "林周县" },
    {
      "id": 540122,
      "name": "当雄县" },
    {
      "id": 540123,
      "name": "尼木县" },
    {
      "id": 540124,
      "name": "曲水县" },
    {
      "id": 540127,
      "name": "墨竹工卡县" }] },

  {
    "id": 540200,
    "name": "日喀则市",
    "children": [{
      "id": 540202,
      "name": "桑珠孜区" },
    {
      "id": 540221,
      "name": "南木林县" },
    {
      "id": 540222,
      "name": "江孜县" },
    {
      "id": 540223,
      "name": "定日县" },
    {
      "id": 540224,
      "name": "萨迦县" },
    {
      "id": 540225,
      "name": "拉孜县" },
    {
      "id": 540226,
      "name": "昂仁县" },
    {
      "id": 540227,
      "name": "谢通门县" },
    {
      "id": 540228,
      "name": "白朗县" },
    {
      "id": 540229,
      "name": "仁布县" },
    {
      "id": 540230,
      "name": "康马县" },
    {
      "id": 540231,
      "name": "定结县" },
    {
      "id": 540232,
      "name": "仲巴县" },
    {
      "id": 540233,
      "name": "亚东县" },
    {
      "id": 540234,
      "name": "吉隆县" },
    {
      "id": 540235,
      "name": "聂拉木县" },
    {
      "id": 540236,
      "name": "萨嘎县" },
    {
      "id": 540237,
      "name": "岗巴县" }] },

  {
    "id": 540300,
    "name": "昌都市",
    "children": [{
      "id": 540302,
      "name": "卡若区" },
    {
      "id": 540321,
      "name": "江达县" },
    {
      "id": 540322,
      "name": "贡觉县" },
    {
      "id": 540323,
      "name": "类乌齐县" },
    {
      "id": 540324,
      "name": "丁青县" },
    {
      "id": 540325,
      "name": "察雅县" },
    {
      "id": 540326,
      "name": "八宿县" },
    {
      "id": 540327,
      "name": "左贡县" },
    {
      "id": 540328,
      "name": "芒康县" },
    {
      "id": 540329,
      "name": "洛隆县" },
    {
      "id": 540330,
      "name": "边坝县" }] },

  {
    "id": 540400,
    "name": "林芝市",
    "children": [{
      "id": 540402,
      "name": "巴宜区" },
    {
      "id": 540421,
      "name": "工布江达县" },
    {
      "id": 540422,
      "name": "米林县" },
    {
      "id": 540423,
      "name": "墨脱县" },
    {
      "id": 540424,
      "name": "波密县" },
    {
      "id": 540425,
      "name": "察隅县" },
    {
      "id": 540426,
      "name": "朗县" }] },

  {
    "id": 540500,
    "name": "山南市",
    "children": [{
      "id": 540502,
      "name": "乃东区" },
    {
      "id": 540521,
      "name": "扎囊县" },
    {
      "id": 540522,
      "name": "贡嘎县" },
    {
      "id": 540523,
      "name": "桑日县" },
    {
      "id": 540524,
      "name": "琼结县" },
    {
      "id": 540525,
      "name": "曲松县" },
    {
      "id": 540526,
      "name": "措美县" },
    {
      "id": 540527,
      "name": "洛扎县" },
    {
      "id": 540528,
      "name": "加查县" },
    {
      "id": 540529,
      "name": "隆子县" },
    {
      "id": 540530,
      "name": "错那县" },
    {
      "id": 540531,
      "name": "浪卡子县" }] },

  {
    "id": 540600,
    "name": "那曲市",
    "children": [{
      "id": 540602,
      "name": "色尼区" },
    {
      "id": 540621,
      "name": "嘉黎县" },
    {
      "id": 540622,
      "name": "比如县" },
    {
      "id": 540623,
      "name": "聂荣县" },
    {
      "id": 540624,
      "name": "安多县" },
    {
      "id": 540625,
      "name": "申扎县" },
    {
      "id": 540626,
      "name": "索县" },
    {
      "id": 540627,
      "name": "班戈县" },
    {
      "id": 540628,
      "name": "巴青县" },
    {
      "id": 540629,
      "name": "尼玛县" },
    {
      "id": 540630,
      "name": "双湖县" }] },

  {
    "id": 542500,
    "name": "阿里地区",
    "children": [{
      "id": 542521,
      "name": "普兰县" },
    {
      "id": 542522,
      "name": "札达县" },
    {
      "id": 542523,
      "name": "噶尔县" },
    {
      "id": 542524,
      "name": "日土县" },
    {
      "id": 542525,
      "name": "革吉县" },
    {
      "id": 542526,
      "name": "改则县" },
    {
      "id": 542527,
      "name": "措勤县" }] }] },


{
  "id": 610000,
  "name": "陕西省",
  "children": [{
    "id": 610100,
    "name": "西安市",
    "children": [{
      "id": 610102,
      "name": "新城区" },
    {
      "id": 610103,
      "name": "碑林区" },
    {
      "id": 610104,
      "name": "莲湖区" },
    {
      "id": 610111,
      "name": "灞桥区" },
    {
      "id": 610112,
      "name": "未央区" },
    {
      "id": 610113,
      "name": "雁塔区" },
    {
      "id": 610114,
      "name": "阎良区" },
    {
      "id": 610115,
      "name": "临潼区" },
    {
      "id": 610116,
      "name": "长安区" },
    {
      "id": 610117,
      "name": "高陵区" },
    {
      "id": 610118,
      "name": "鄠邑区" },
    {
      "id": 610122,
      "name": "蓝田县" },
    {
      "id": 610124,
      "name": "周至县" }] },

  {
    "id": 610200,
    "name": "铜川市",
    "children": [{
      "id": 610202,
      "name": "王益区" },
    {
      "id": 610203,
      "name": "印台区" },
    {
      "id": 610204,
      "name": "耀州区" },
    {
      "id": 610222,
      "name": "宜君县" }] },

  {
    "id": 610300,
    "name": "宝鸡市",
    "children": [{
      "id": 610302,
      "name": "渭滨区" },
    {
      "id": 610303,
      "name": "金台区" },
    {
      "id": 610304,
      "name": "陈仓区" },
    {
      "id": 610322,
      "name": "凤翔县" },
    {
      "id": 610323,
      "name": "岐山县" },
    {
      "id": 610324,
      "name": "扶风县" },
    {
      "id": 610326,
      "name": "眉县" },
    {
      "id": 610327,
      "name": "陇县" },
    {
      "id": 610328,
      "name": "千阳县" },
    {
      "id": 610329,
      "name": "麟游县" },
    {
      "id": 610330,
      "name": "凤县" },
    {
      "id": 610331,
      "name": "太白县" }] },

  {
    "id": 610400,
    "name": "咸阳市",
    "children": [{
      "id": 610402,
      "name": "秦都区" },
    {
      "id": 610403,
      "name": "杨陵区" },
    {
      "id": 610404,
      "name": "渭城区" },
    {
      "id": 610422,
      "name": "三原县" },
    {
      "id": 610423,
      "name": "泾阳县" },
    {
      "id": 610424,
      "name": "乾县" },
    {
      "id": 610425,
      "name": "礼泉县" },
    {
      "id": 610426,
      "name": "永寿县" },
    {
      "id": 610428,
      "name": "长武县" },
    {
      "id": 610429,
      "name": "旬邑县" },
    {
      "id": 610430,
      "name": "淳化县" },
    {
      "id": 610431,
      "name": "武功县" },
    {
      "id": 610481,
      "name": "兴平市" },
    {
      "id": 610482,
      "name": "彬州市" }] },

  {
    "id": 610500,
    "name": "渭南市",
    "children": [{
      "id": 610502,
      "name": "临渭区" },
    {
      "id": 610503,
      "name": "华州区" },
    {
      "id": 610522,
      "name": "潼关县" },
    {
      "id": 610523,
      "name": "大荔县" },
    {
      "id": 610524,
      "name": "合阳县" },
    {
      "id": 610525,
      "name": "澄城县" },
    {
      "id": 610526,
      "name": "蒲城县" },
    {
      "id": 610527,
      "name": "白水县" },
    {
      "id": 610528,
      "name": "富平县" },
    {
      "id": 610581,
      "name": "韩城市" },
    {
      "id": 610582,
      "name": "华阴市" }] },

  {
    "id": 610600,
    "name": "延安市",
    "children": [{
      "id": 610602,
      "name": "宝塔区" },
    {
      "id": 610603,
      "name": "安塞区" },
    {
      "id": 610621,
      "name": "延长县" },
    {
      "id": 610622,
      "name": "延川县" },
    {
      "id": 610623,
      "name": "子长县" },
    {
      "id": 610625,
      "name": "志丹县" },
    {
      "id": 610626,
      "name": "吴起县" },
    {
      "id": 610627,
      "name": "甘泉县" },
    {
      "id": 610628,
      "name": "富县" },
    {
      "id": 610629,
      "name": "洛川县" },
    {
      "id": 610630,
      "name": "宜川县" },
    {
      "id": 610631,
      "name": "黄龙县" },
    {
      "id": 610632,
      "name": "黄陵县" }] },

  {
    "id": 610700,
    "name": "汉中市",
    "children": [{
      "id": 610702,
      "name": "汉台区" },
    {
      "id": 610703,
      "name": "南郑区" },
    {
      "id": 610722,
      "name": "城固县" },
    {
      "id": 610723,
      "name": "洋县" },
    {
      "id": 610724,
      "name": "西乡县" },
    {
      "id": 610725,
      "name": "勉县" },
    {
      "id": 610726,
      "name": "宁强县" },
    {
      "id": 610727,
      "name": "略阳县" },
    {
      "id": 610728,
      "name": "镇巴县" },
    {
      "id": 610729,
      "name": "留坝县" },
    {
      "id": 610730,
      "name": "佛坪县" }] },

  {
    "id": 610800,
    "name": "榆林市",
    "children": [{
      "id": 610802,
      "name": "榆阳区" },
    {
      "id": 610803,
      "name": "横山区" },
    {
      "id": 610822,
      "name": "府谷县" },
    {
      "id": 610824,
      "name": "靖边县" },
    {
      "id": 610825,
      "name": "定边县" },
    {
      "id": 610826,
      "name": "绥德县" },
    {
      "id": 610827,
      "name": "米脂县" },
    {
      "id": 610828,
      "name": "佳县" },
    {
      "id": 610829,
      "name": "吴堡县" },
    {
      "id": 610830,
      "name": "清涧县" },
    {
      "id": 610831,
      "name": "子洲县" },
    {
      "id": 610881,
      "name": "神木市" }] },

  {
    "id": 610900,
    "name": "安康市",
    "children": [{
      "id": 610902,
      "name": "汉滨区" },
    {
      "id": 610921,
      "name": "汉阴县" },
    {
      "id": 610922,
      "name": "石泉县" },
    {
      "id": 610923,
      "name": "宁陕县" },
    {
      "id": 610924,
      "name": "紫阳县" },
    {
      "id": 610925,
      "name": "岚皋县" },
    {
      "id": 610926,
      "name": "平利县" },
    {
      "id": 610927,
      "name": "镇坪县" },
    {
      "id": 610928,
      "name": "旬阳县" },
    {
      "id": 610929,
      "name": "白河县" }] },

  {
    "id": 611000,
    "name": "商洛市",
    "children": [{
      "id": 611002,
      "name": "商州区" },
    {
      "id": 611021,
      "name": "洛南县" },
    {
      "id": 611022,
      "name": "丹凤县" },
    {
      "id": 611023,
      "name": "商南县" },
    {
      "id": 611024,
      "name": "山阳县" },
    {
      "id": 611025,
      "name": "镇安县" },
    {
      "id": 611026,
      "name": "柞水县" }] }] },


{
  "id": 620000,
  "name": "甘肃省",
  "children": [{
    "id": 620100,
    "name": "兰州市",
    "children": [{
      "id": 620102,
      "name": "城关区" },
    {
      "id": 620103,
      "name": "七里河区" },
    {
      "id": 620104,
      "name": "西固区" },
    {
      "id": 620105,
      "name": "安宁区" },
    {
      "id": 620111,
      "name": "红古区" },
    {
      "id": 620121,
      "name": "永登县" },
    {
      "id": 620122,
      "name": "皋兰县" },
    {
      "id": 620123,
      "name": "榆中县" }] },

  {
    "id": 620200,
    "name": "嘉峪关市",
    "children": [{
      "id": 620299,
      "name": "嘉峪关市" }] },

  {
    "id": 620300,
    "name": "金昌市",
    "children": [{
      "id": 620302,
      "name": "金川区" },
    {
      "id": 620321,
      "name": "永昌县" }] },

  {
    "id": 620400,
    "name": "白银市",
    "children": [{
      "id": 620402,
      "name": "白银区" },
    {
      "id": 620403,
      "name": "平川区" },
    {
      "id": 620421,
      "name": "靖远县" },
    {
      "id": 620422,
      "name": "会宁县" },
    {
      "id": 620423,
      "name": "景泰县" }] },

  {
    "id": 620500,
    "name": "天水市",
    "children": [{
      "id": 620502,
      "name": "秦州区" },
    {
      "id": 620503,
      "name": "麦积区" },
    {
      "id": 620521,
      "name": "清水县" },
    {
      "id": 620522,
      "name": "秦安县" },
    {
      "id": 620523,
      "name": "甘谷县" },
    {
      "id": 620524,
      "name": "武山县" },
    {
      "id": 620525,
      "name": "张家川回族自治县" }] },

  {
    "id": 620600,
    "name": "武威市",
    "children": [{
      "id": 620602,
      "name": "凉州区" },
    {
      "id": 620621,
      "name": "民勤县" },
    {
      "id": 620622,
      "name": "古浪县" },
    {
      "id": 620623,
      "name": "天祝藏族自治县" }] },

  {
    "id": 620700,
    "name": "张掖市",
    "children": [{
      "id": 620702,
      "name": "甘州区" },
    {
      "id": 620721,
      "name": "肃南裕固族自治县" },
    {
      "id": 620722,
      "name": "民乐县" },
    {
      "id": 620723,
      "name": "临泽县" },
    {
      "id": 620724,
      "name": "高台县" },
    {
      "id": 620725,
      "name": "山丹县" }] },

  {
    "id": 620800,
    "name": "平凉市",
    "children": [{
      "id": 620802,
      "name": "崆峒区" },
    {
      "id": 620821,
      "name": "泾川县" },
    {
      "id": 620822,
      "name": "灵台县" },
    {
      "id": 620823,
      "name": "崇信县" },
    {
      "id": 620825,
      "name": "庄浪县" },
    {
      "id": 620826,
      "name": "静宁县" },
    {
      "id": 620881,
      "name": "华亭市" }] },

  {
    "id": 620900,
    "name": "酒泉市",
    "children": [{
      "id": 620902,
      "name": "肃州区" },
    {
      "id": 620921,
      "name": "金塔县" },
    {
      "id": 620922,
      "name": "瓜州县" },
    {
      "id": 620923,
      "name": "肃北蒙古族自治县" },
    {
      "id": 620924,
      "name": "阿克塞哈萨克族自治县" },
    {
      "id": 620981,
      "name": "玉门市" },
    {
      "id": 620982,
      "name": "敦煌市" }] },

  {
    "id": 621000,
    "name": "庆阳市",
    "children": [{
      "id": 621002,
      "name": "西峰区" },
    {
      "id": 621021,
      "name": "庆城县" },
    {
      "id": 621022,
      "name": "环县" },
    {
      "id": 621023,
      "name": "华池县" },
    {
      "id": 621024,
      "name": "合水县" },
    {
      "id": 621025,
      "name": "正宁县" },
    {
      "id": 621026,
      "name": "宁县" },
    {
      "id": 621027,
      "name": "镇原县" }] },

  {
    "id": 621100,
    "name": "定西市",
    "children": [{
      "id": 621102,
      "name": "安定区" },
    {
      "id": 621121,
      "name": "通渭县" },
    {
      "id": 621122,
      "name": "陇西县" },
    {
      "id": 621123,
      "name": "渭源县" },
    {
      "id": 621124,
      "name": "临洮县" },
    {
      "id": 621125,
      "name": "漳县" },
    {
      "id": 621126,
      "name": "岷县" }] },

  {
    "id": 621200,
    "name": "陇南市",
    "children": [{
      "id": 621202,
      "name": "武都区" },
    {
      "id": 621221,
      "name": "成县" },
    {
      "id": 621222,
      "name": "文县" },
    {
      "id": 621223,
      "name": "宕昌县" },
    {
      "id": 621224,
      "name": "康县" },
    {
      "id": 621225,
      "name": "西和县" },
    {
      "id": 621226,
      "name": "礼县" },
    {
      "id": 621227,
      "name": "徽县" },
    {
      "id": 621228,
      "name": "两当县" }] },

  {
    "id": 622900,
    "name": "临夏回族自治州",
    "children": [{
      "id": 622901,
      "name": "临夏市" },
    {
      "id": 622921,
      "name": "临夏县" },
    {
      "id": 622922,
      "name": "康乐县" },
    {
      "id": 622923,
      "name": "永靖县" },
    {
      "id": 622924,
      "name": "广河县" },
    {
      "id": 622925,
      "name": "和政县" },
    {
      "id": 622926,
      "name": "东乡族自治县" },
    {
      "id": 622927,
      "name": "积石山县" }] },

  {
    "id": 623000,
    "name": "甘南藏族自治州",
    "children": [{
      "id": 623001,
      "name": "合作市" },
    {
      "id": 623021,
      "name": "临潭县" },
    {
      "id": 623022,
      "name": "卓尼县" },
    {
      "id": 623023,
      "name": "舟曲县" },
    {
      "id": 623024,
      "name": "迭部县" },
    {
      "id": 623025,
      "name": "玛曲县" },
    {
      "id": 623026,
      "name": "碌曲县" },
    {
      "id": 623027,
      "name": "夏河县" }] }] },


{
  "id": 630000,
  "name": "青海省",
  "children": [{
    "id": 630100,
    "name": "西宁市",
    "children": [{
      "id": 630102,
      "name": "城东区" },
    {
      "id": 630103,
      "name": "城中区" },
    {
      "id": 630104,
      "name": "城西区" },
    {
      "id": 630105,
      "name": "城北区" },
    {
      "id": 630121,
      "name": "大通回族土族自治县" },
    {
      "id": 630122,
      "name": "湟中县" },
    {
      "id": 630123,
      "name": "湟源县" }] },

  {
    "id": 630200,
    "name": "海东市",
    "children": [{
      "id": 630202,
      "name": "乐都区" },
    {
      "id": 630203,
      "name": "平安区" },
    {
      "id": 630222,
      "name": "民和回族土族自治县" },
    {
      "id": 630223,
      "name": "互助土族自治县" },
    {
      "id": 630224,
      "name": "化隆回族自治县" },
    {
      "id": 630225,
      "name": "循化撒拉族自治县" }] },

  {
    "id": 632200,
    "name": "海北藏族自治州",
    "children": [{
      "id": 632221,
      "name": "门源回族自治县" },
    {
      "id": 632222,
      "name": "祁连县" },
    {
      "id": 632223,
      "name": "海晏县" },
    {
      "id": 632224,
      "name": "刚察县" }] },

  {
    "id": 632300,
    "name": "黄南藏族自治州",
    "children": [{
      "id": 632321,
      "name": "同仁县" },
    {
      "id": 632322,
      "name": "尖扎县" },
    {
      "id": 632323,
      "name": "泽库县" },
    {
      "id": 632324,
      "name": "河南蒙古族自治县" }] },

  {
    "id": 632500,
    "name": "海南藏族自治州",
    "children": [{
      "id": 632521,
      "name": "共和县" },
    {
      "id": 632522,
      "name": "同德县" },
    {
      "id": 632523,
      "name": "贵德县" },
    {
      "id": 632524,
      "name": "兴海县" },
    {
      "id": 632525,
      "name": "贵南县" }] },

  {
    "id": 632600,
    "name": "果洛藏族自治州",
    "children": [{
      "id": 632621,
      "name": "玛沁县" },
    {
      "id": 632622,
      "name": "班玛县" },
    {
      "id": 632623,
      "name": "甘德县" },
    {
      "id": 632624,
      "name": "达日县" },
    {
      "id": 632625,
      "name": "久治县" },
    {
      "id": 632626,
      "name": "玛多县" }] },

  {
    "id": 632700,
    "name": "玉树藏族自治州",
    "children": [{
      "id": 632701,
      "name": "玉树市" },
    {
      "id": 632722,
      "name": "杂多县" },
    {
      "id": 632723,
      "name": "称多县" },
    {
      "id": 632724,
      "name": "治多县" },
    {
      "id": 632725,
      "name": "囊谦县" },
    {
      "id": 632726,
      "name": "曲麻莱县" }] },

  {
    "id": 632800,
    "name": "海西蒙古族藏族自治州",
    "children": [{
      "id": 632801,
      "name": "格尔木市" },
    {
      "id": 632802,
      "name": "德令哈市" },
    {
      "id": 632803,
      "name": "茫崖市" },
    {
      "id": 632821,
      "name": "乌兰县" },
    {
      "id": 632822,
      "name": "都兰县" },
    {
      "id": 632823,
      "name": "天峻县" },
    {
      "id": 632825,
      "name": "大柴旦行政委员会" }] }] },


{
  "id": 640000,
  "name": "宁夏回族自治区",
  "children": [{
    "id": 640100,
    "name": "银川市",
    "children": [{
      "id": 640104,
      "name": "兴庆区" },
    {
      "id": 640105,
      "name": "西夏区" },
    {
      "id": 640106,
      "name": "金凤区" },
    {
      "id": 640121,
      "name": "永宁县" },
    {
      "id": 640122,
      "name": "贺兰县" },
    {
      "id": 640181,
      "name": "灵武市" }] },

  {
    "id": 640200,
    "name": "石嘴山市",
    "children": [{
      "id": 640202,
      "name": "大武口区" },
    {
      "id": 640205,
      "name": "惠农区" },
    {
      "id": 640221,
      "name": "平罗县" }] },

  {
    "id": 640300,
    "name": "吴忠市",
    "children": [{
      "id": 640302,
      "name": "利通区" },
    {
      "id": 640303,
      "name": "红寺堡区" },
    {
      "id": 640323,
      "name": "盐池县" },
    {
      "id": 640324,
      "name": "同心县" },
    {
      "id": 640381,
      "name": "青铜峡市" }] },

  {
    "id": 640400,
    "name": "固原市",
    "children": [{
      "id": 640402,
      "name": "原州区" },
    {
      "id": 640422,
      "name": "西吉县" },
    {
      "id": 640423,
      "name": "隆德县" },
    {
      "id": 640424,
      "name": "泾源县" },
    {
      "id": 640425,
      "name": "彭阳县" }] },

  {
    "id": 640500,
    "name": "中卫市",
    "children": [{
      "id": 640502,
      "name": "沙坡头区" },
    {
      "id": 640521,
      "name": "中宁县" },
    {
      "id": 640522,
      "name": "海原县" }] }] },


{
  "id": 650000,
  "name": "新疆维吾尔自治区",
  "children": [{
    "id": 650100,
    "name": "乌鲁木齐市",
    "children": [{
      "id": 650102,
      "name": "天山区" },
    {
      "id": 650103,
      "name": "沙依巴克区" },
    {
      "id": 650104,
      "name": "新市区" },
    {
      "id": 650105,
      "name": "水磨沟区" },
    {
      "id": 650106,
      "name": "头屯河区" },
    {
      "id": 650107,
      "name": "达坂城区" },
    {
      "id": 650109,
      "name": "米东区" },
    {
      "id": 650121,
      "name": "乌鲁木齐县" }] },

  {
    "id": 650200,
    "name": "克拉玛依市",
    "children": [{
      "id": 650202,
      "name": "独山子区" },
    {
      "id": 650203,
      "name": "克拉玛依区" },
    {
      "id": 650204,
      "name": "白碱滩区" },
    {
      "id": 650205,
      "name": "乌尔禾区" }] },

  {
    "id": 650400,
    "name": "吐鲁番市",
    "children": [{
      "id": 650402,
      "name": "高昌区" },
    {
      "id": 650421,
      "name": "鄯善县" },
    {
      "id": 650422,
      "name": "托克逊县" }] },

  {
    "id": 650500,
    "name": "哈密市",
    "children": [{
      "id": 650502,
      "name": "伊州区" },
    {
      "id": 650521,
      "name": "巴里坤哈萨克自治县" },
    {
      "id": 650522,
      "name": "伊吾县" }] },

  {
    "id": 652300,
    "name": "昌吉回族自治州",
    "children": [{
      "id": 652301,
      "name": "昌吉市" },
    {
      "id": 652302,
      "name": "阜康市" },
    {
      "id": 652323,
      "name": "呼图壁县" },
    {
      "id": 652324,
      "name": "玛纳斯县" },
    {
      "id": 652325,
      "name": "奇台县" },
    {
      "id": 652327,
      "name": "吉木萨尔县" },
    {
      "id": 652328,
      "name": "木垒哈萨克自治县" }] },

  {
    "id": 652700,
    "name": "博尔塔拉蒙古自治州",
    "children": [{
      "id": 652701,
      "name": "博乐市" },
    {
      "id": 652702,
      "name": "阿拉山口市" },
    {
      "id": 652722,
      "name": "精河县" },
    {
      "id": 652723,
      "name": "温泉县" }] },

  {
    "id": 652800,
    "name": "巴音郭楞蒙古自治州",
    "children": [{
      "id": 652801,
      "name": "库尔勒市" },
    {
      "id": 652822,
      "name": "轮台县" },
    {
      "id": 652823,
      "name": "尉犁县" },
    {
      "id": 652824,
      "name": "若羌县" },
    {
      "id": 652825,
      "name": "且末县" },
    {
      "id": 652826,
      "name": "焉耆回族自治县" },
    {
      "id": 652827,
      "name": "和静县" },
    {
      "id": 652828,
      "name": "和硕县" },
    {
      "id": 652829,
      "name": "博湖县" }] },

  {
    "id": 652900,
    "name": "阿克苏地区",
    "children": [{
      "id": 652901,
      "name": "阿克苏市" },
    {
      "id": 652922,
      "name": "温宿县" },
    {
      "id": 652923,
      "name": "库车县" },
    {
      "id": 652924,
      "name": "沙雅县" },
    {
      "id": 652925,
      "name": "新和县" },
    {
      "id": 652926,
      "name": "拜城县" },
    {
      "id": 652927,
      "name": "乌什县" },
    {
      "id": 652928,
      "name": "阿瓦提县" },
    {
      "id": 652929,
      "name": "柯坪县" }] },

  {
    "id": 653000,
    "name": "克孜勒苏柯尔克孜自治州",
    "children": [{
      "id": 653001,
      "name": "阿图什市" },
    {
      "id": 653022,
      "name": "阿克陶县" },
    {
      "id": 653023,
      "name": "阿合奇县" },
    {
      "id": 653024,
      "name": "乌恰县" }] },

  {
    "id": 653100,
    "name": "喀什地区",
    "children": [{
      "id": 653101,
      "name": "喀什市" },
    {
      "id": 653121,
      "name": "疏附县" },
    {
      "id": 653122,
      "name": "疏勒县" },
    {
      "id": 653123,
      "name": "英吉沙县" },
    {
      "id": 653124,
      "name": "泽普县" },
    {
      "id": 653125,
      "name": "莎车县" },
    {
      "id": 653126,
      "name": "叶城县" },
    {
      "id": 653127,
      "name": "麦盖提县" },
    {
      "id": 653128,
      "name": "岳普湖县" },
    {
      "id": 653129,
      "name": "伽师县" },
    {
      "id": 653130,
      "name": "巴楚县" },
    {
      "id": 653131,
      "name": "塔什库尔干塔吉克自治县" }] },

  {
    "id": 653200,
    "name": "和田地区",
    "children": [{
      "id": 653201,
      "name": "和田市" },
    {
      "id": 653221,
      "name": "和田县" },
    {
      "id": 653222,
      "name": "墨玉县" },
    {
      "id": 653223,
      "name": "皮山县" },
    {
      "id": 653224,
      "name": "洛浦县" },
    {
      "id": 653225,
      "name": "策勒县" },
    {
      "id": 653226,
      "name": "于田县" },
    {
      "id": 653227,
      "name": "民丰县" }] },

  {
    "id": 654000,
    "name": "伊犁哈萨克自治州",
    "children": [{
      "id": 654002,
      "name": "伊宁市" },
    {
      "id": 654003,
      "name": "奎屯市" },
    {
      "id": 654004,
      "name": "霍尔果斯市" },
    {
      "id": 654021,
      "name": "伊宁县" },
    {
      "id": 654022,
      "name": "察布查尔锡伯自治县" },
    {
      "id": 654023,
      "name": "霍城县" },
    {
      "id": 654024,
      "name": "巩留县" },
    {
      "id": 654025,
      "name": "新源县" },
    {
      "id": 654026,
      "name": "昭苏县" },
    {
      "id": 654027,
      "name": "特克斯县" },
    {
      "id": 654028,
      "name": "尼勒克县" }] },

  {
    "id": 654200,
    "name": "塔城地区",
    "children": [{
      "id": 654201,
      "name": "塔城市" },
    {
      "id": 654202,
      "name": "乌苏市" },
    {
      "id": 654221,
      "name": "额敏县" },
    {
      "id": 654223,
      "name": "沙湾县" },
    {
      "id": 654224,
      "name": "托里县" },
    {
      "id": 654225,
      "name": "裕民县" },
    {
      "id": 654226,
      "name": "和布克赛尔蒙古自治县" }] },

  {
    "id": 654300,
    "name": "阿勒泰地区",
    "children": [{
      "id": 654301,
      "name": "阿勒泰市" },
    {
      "id": 654321,
      "name": "布尔津县" },
    {
      "id": 654322,
      "name": "富蕴县" },
    {
      "id": 654323,
      "name": "福海县" },
    {
      "id": 654324,
      "name": "哈巴河县" },
    {
      "id": 654325,
      "name": "青河县" },
    {
      "id": 654326,
      "name": "吉木乃县" }] },

  {
    "id": 659001,
    "name": "石河子市",
    "children": [{
      "id": 659001001,
      "name": "新城街道" },
    {
      "id": 659001002,
      "name": "向阳街道" },
    {
      "id": 659001003,
      "name": "红山街道" },
    {
      "id": 659001004,
      "name": "老街街道" },
    {
      "id": 659001005,
      "name": "东城街道" },
    {
      "id": 659001100,
      "name": "北泉镇" },
    {
      "id": 659001200,
      "name": "石河子镇" },
    {
      "id": 659001500,
      "name": "兵团一五二团" }] },

  {
    "id": 659002,
    "name": "阿拉尔市",
    "children": [{
      "id": 659002001,
      "name": "金银川路街道" },
    {
      "id": 659002002,
      "name": "幸福路街道" },
    {
      "id": 659002003,
      "name": "青松路街道" },
    {
      "id": 659002004,
      "name": "南口街道" },
    {
      "id": 659002200,
      "name": "托喀依乡" },
    {
      "id": 659002500,
      "name": "兵团七团" },
    {
      "id": 659002501,
      "name": "兵团八团" },
    {
      "id": 659002503,
      "name": "兵团十团" },
    {
      "id": 659002505,
      "name": "兵团十二团" },
    {
      "id": 659002507,
      "name": "兵团十四团" },
    {
      "id": 659002508,
      "name": "兵团五团" },
    {
      "id": 659002509,
      "name": "兵团十六团" },
    {
      "id": 659002511,
      "name": "兵团第一师水利水电工程处" },
    {
      "id": 659002513,
      "name": "阿拉尔农场" },
    {
      "id": 659002514,
      "name": "兵团第一师幸福农场" },
    {
      "id": 659002901,
      "name": "兵团二团" },
    {
      "id": 659002902,
      "name": "兵团农一师沙井子水利管理处" },
    {
      "id": 659002964,
      "name": "兵团九团" },
    {
      "id": 659002966,
      "name": "兵团十一团" },
    {
      "id": 659002967,
      "name": "兵团十三团" },
    {
      "id": 659002968,
      "name": "兵团十五团" }] },

  {
    "id": 659003,
    "name": "图木舒克市",
    "children": [{
      "id": 659003001,
      "name": "齐干却勒街道" },
    {
      "id": 659003002,
      "name": "前海街道" },
    {
      "id": 659003003,
      "name": "永安坝街道" },
    {
      "id": 659003504,
      "name": "兵团四十四团" },
    {
      "id": 659003509,
      "name": "兵团四十九团" },
    {
      "id": 659003513,
      "name": "兵团五十三团" },
    {
      "id": 659003960,
      "name": "喀拉拜勒镇" },
    {
      "id": 659003964,
      "name": "兵团五十一团" },
    {
      "id": 659003965,
      "name": "兵团五十二团" },
    {
      "id": 659003966,
      "name": "兵团五十团" }] },

  {
    "id": 659004,
    "name": "五家渠市",
    "children": [{
      "id": 659004001,
      "name": "军垦路街道" },
    {
      "id": 659004002,
      "name": "青湖路街道" },
    {
      "id": 659004003,
      "name": "人民路街道" },
    {
      "id": 659004500,
      "name": "兵团一零一团" },
    {
      "id": 659004960,
      "name": "蔡家湖镇" },
    {
      "id": 659004961,
      "name": "梧桐镇" }] },

  {
    "id": 659005,
    "name": "北屯市",
    "children": [{
      "id": 659005502,
      "name": "兵团一八七团" },
    {
      "id": 659005503,
      "name": "兵团一八八团" }] },

  {
    "id": 659006,
    "name": "铁门关市",
    "children": [{
      "id": 659006501,
      "name": "兵团二十九团" },
    {
      "id": 659006502,
      "name": "农二师三十团" }] },

  {
    "id": 659007,
    "name": "双河市",
    "children": [{
      "id": 659007501,
      "name": "兵团八十一团" },
    {
      "id": 659007502,
      "name": "兵团八十四团" },
    {
      "id": 659007504,
      "name": "兵团八十六团" },
    {
      "id": 659007505,
      "name": "兵团八十九团" },
    {
      "id": 659007506,
      "name": "兵团九十团" }] },

  {
    "id": 659008,
    "name": "可克达拉市",
    "children": [{
      "id": 659008502,
      "name": "兵团六十七团" },
    {
      "id": 659008503,
      "name": "兵团六十八团" },
    {
      "id": 659008507,
      "name": "兵团六十三团" },
    {
      "id": 659008508,
      "name": "兵团六十四团" },
    {
      "id": 659008509,
      "name": "兵团六十六团" }] },

  {
    "id": 659009,
    "name": "昆玉市",
    "children": [{
      "id": 659009400,
      "name": "兵团一牧场" },
    {
      "id": 659009401,
      "name": "兵团皮山农场" },
    {
      "id": 659009501,
      "name": "兵团二二四团" }] }] },


{
  "id": 710000,
  "name": "台湾省",
  "children": [{
    "id": 710100,
    "name": "台北市",
    "children": [{
      "id": 710101,
      "name": "中正区" },
    {
      "id": 710102,
      "name": "大同区" },
    {
      "id": 710103,
      "name": "中山区" },
    {
      "id": 710104,
      "name": "松山区" },
    {
      "id": 710105,
      "name": "大安区" },
    {
      "id": 710106,
      "name": "万华区" },
    {
      "id": 710107,
      "name": "信义区" },
    {
      "id": 710108,
      "name": "士林区" },
    {
      "id": 710109,
      "name": "北投区" },
    {
      "id": 710110,
      "name": "内湖区" },
    {
      "id": 710111,
      "name": "南港区" },
    {
      "id": 710112,
      "name": "文山区" }] },

  {
    "id": 710200,
    "name": "高雄市",
    "children": [{
      "id": 710201,
      "name": "新兴区" },
    {
      "id": 710202,
      "name": "前金区" },
    {
      "id": 710203,
      "name": "苓雅区" },
    {
      "id": 710204,
      "name": "盐埕区" },
    {
      "id": 710205,
      "name": "鼓山区" },
    {
      "id": 710206,
      "name": "旗津区" },
    {
      "id": 710207,
      "name": "前镇区" },
    {
      "id": 710208,
      "name": "三民区" },
    {
      "id": 710209,
      "name": "左营区" },
    {
      "id": 710210,
      "name": "楠梓区" },
    {
      "id": 710211,
      "name": "小港区" },
    {
      "id": 710242,
      "name": "仁武区" },
    {
      "id": 710243,
      "name": "大社区" },
    {
      "id": 710244,
      "name": "冈山区" },
    {
      "id": 710245,
      "name": "路竹区" },
    {
      "id": 710246,
      "name": "阿莲区" },
    {
      "id": 710247,
      "name": "田寮区" },
    {
      "id": 710248,
      "name": "燕巢区" },
    {
      "id": 710249,
      "name": "桥头区" },
    {
      "id": 710250,
      "name": "梓官区" },
    {
      "id": 710251,
      "name": "弥陀区" },
    {
      "id": 710252,
      "name": "永安区" },
    {
      "id": 710253,
      "name": "湖内区" },
    {
      "id": 710254,
      "name": "凤山区" },
    {
      "id": 710255,
      "name": "大寮区" },
    {
      "id": 710256,
      "name": "林园区" },
    {
      "id": 710257,
      "name": "鸟松区" },
    {
      "id": 710258,
      "name": "大树区" },
    {
      "id": 710259,
      "name": "旗山区" },
    {
      "id": 710260,
      "name": "美浓区" },
    {
      "id": 710261,
      "name": "六龟区" },
    {
      "id": 710262,
      "name": "内门区" },
    {
      "id": 710263,
      "name": "杉林区" },
    {
      "id": 710264,
      "name": "甲仙区" },
    {
      "id": 710265,
      "name": "桃源区" },
    {
      "id": 710266,
      "name": "那玛夏区" },
    {
      "id": 710267,
      "name": "茂林区" },
    {
      "id": 710268,
      "name": "茄萣区" }] },

  {
    "id": 710300,
    "name": "台南市",
    "children": [{
      "id": 710301,
      "name": "中西区" },
    {
      "id": 710302,
      "name": "东区" },
    {
      "id": 710303,
      "name": "南区" },
    {
      "id": 710304,
      "name": "北区" },
    {
      "id": 710305,
      "name": "安平区" },
    {
      "id": 710306,
      "name": "安南区" },
    {
      "id": 710339,
      "name": "永康区" },
    {
      "id": 710340,
      "name": "归仁区" },
    {
      "id": 710341,
      "name": "新化区" },
    {
      "id": 710342,
      "name": "左镇区" },
    {
      "id": 710343,
      "name": "玉井区" },
    {
      "id": 710344,
      "name": "楠西区" },
    {
      "id": 710345,
      "name": "南化区" },
    {
      "id": 710346,
      "name": "仁德区" },
    {
      "id": 710347,
      "name": "关庙区" },
    {
      "id": 710348,
      "name": "龙崎区" },
    {
      "id": 710349,
      "name": "官田区" },
    {
      "id": 710350,
      "name": "麻豆区" },
    {
      "id": 710351,
      "name": "佳里区" },
    {
      "id": 710352,
      "name": "西港区" },
    {
      "id": 710353,
      "name": "七股区" },
    {
      "id": 710354,
      "name": "将军区" },
    {
      "id": 710355,
      "name": "学甲区" },
    {
      "id": 710356,
      "name": "北门区" },
    {
      "id": 710357,
      "name": "新营区" },
    {
      "id": 710358,
      "name": "后壁区" },
    {
      "id": 710359,
      "name": "白河区" },
    {
      "id": 710360,
      "name": "东山区" },
    {
      "id": 710361,
      "name": "六甲区" },
    {
      "id": 710362,
      "name": "下营区" },
    {
      "id": 710363,
      "name": "柳营区" },
    {
      "id": 710364,
      "name": "盐水区" },
    {
      "id": 710365,
      "name": "善化区" },
    {
      "id": 710366,
      "name": "大内区" },
    {
      "id": 710367,
      "name": "山上区" },
    {
      "id": 710368,
      "name": "新市区" },
    {
      "id": 710369,
      "name": "安定区" }] },

  {
    "id": 710400,
    "name": "台中市",
    "children": [{
      "id": 710401,
      "name": "中区" },
    {
      "id": 710402,
      "name": "东区" },
    {
      "id": 710403,
      "name": "南区" },
    {
      "id": 710404,
      "name": "西区" },
    {
      "id": 710405,
      "name": "北区" },
    {
      "id": 710406,
      "name": "北屯区" },
    {
      "id": 710407,
      "name": "西屯区" },
    {
      "id": 710408,
      "name": "南屯区" },
    {
      "id": 710431,
      "name": "太平区" },
    {
      "id": 710432,
      "name": "大里区" },
    {
      "id": 710433,
      "name": "雾峰区" },
    {
      "id": 710434,
      "name": "乌日区" },
    {
      "id": 710435,
      "name": "丰原区" },
    {
      "id": 710436,
      "name": "后里区" },
    {
      "id": 710437,
      "name": "石冈区" },
    {
      "id": 710438,
      "name": "东势区" },
    {
      "id": 710439,
      "name": "和平区" },
    {
      "id": 710440,
      "name": "新社区" },
    {
      "id": 710441,
      "name": "潭子区" },
    {
      "id": 710442,
      "name": "大雅区" },
    {
      "id": 710443,
      "name": "神冈区" },
    {
      "id": 710444,
      "name": "大肚区" },
    {
      "id": 710445,
      "name": "沙鹿区" },
    {
      "id": 710446,
      "name": "龙井区" },
    {
      "id": 710447,
      "name": "梧栖区" },
    {
      "id": 710448,
      "name": "清水区" },
    {
      "id": 710449,
      "name": "大甲区" },
    {
      "id": 710450,
      "name": "外埔区" },
    {
      "id": 710451,
      "name": "大安区" }] },

  {
    "id": 710600,
    "name": "南投县",
    "children": [{
      "id": 710614,
      "name": "南投市" },
    {
      "id": 710615,
      "name": "中寮乡" },
    {
      "id": 710616,
      "name": "草屯镇" },
    {
      "id": 710617,
      "name": "国姓乡" },
    {
      "id": 710618,
      "name": "埔里镇" },
    {
      "id": 710619,
      "name": "仁爱乡" },
    {
      "id": 710620,
      "name": "名间乡" },
    {
      "id": 710621,
      "name": "集集镇" },
    {
      "id": 710622,
      "name": "水里乡" },
    {
      "id": 710623,
      "name": "鱼池乡" },
    {
      "id": 710624,
      "name": "信义乡" },
    {
      "id": 710625,
      "name": "竹山镇" },
    {
      "id": 710626,
      "name": "鹿谷乡" }] },

  {
    "id": 710700,
    "name": "基隆市",
    "children": [{
      "id": 710701,
      "name": "仁爱区" },
    {
      "id": 710702,
      "name": "信义区" },
    {
      "id": 710703,
      "name": "中正区" },
    {
      "id": 710704,
      "name": "中山区" },
    {
      "id": 710705,
      "name": "安乐区" },
    {
      "id": 710706,
      "name": "暖暖区" },
    {
      "id": 710707,
      "name": "七堵区" }] },

  {
    "id": 710800,
    "name": "新竹市",
    "children": [{
      "id": 710801,
      "name": "东区" },
    {
      "id": 710802,
      "name": "北区" },
    {
      "id": 710803,
      "name": "香山区" }] },

  {
    "id": 710900,
    "name": "嘉义市",
    "children": [{
      "id": 710901,
      "name": "东区" },
    {
      "id": 710902,
      "name": "西区" }] },

  {
    "id": 711100,
    "name": "新北市",
    "children": [{
      "id": 711130,
      "name": "万里区" },
    {
      "id": 711131,
      "name": "金山区" },
    {
      "id": 711132,
      "name": "板桥区" },
    {
      "id": 711133,
      "name": "汐止区" },
    {
      "id": 711134,
      "name": "深坑区" },
    {
      "id": 711135,
      "name": "石碇区" },
    {
      "id": 711136,
      "name": "瑞芳区" },
    {
      "id": 711137,
      "name": "平溪区" },
    {
      "id": 711138,
      "name": "双溪区" },
    {
      "id": 711139,
      "name": "贡寮区" },
    {
      "id": 711140,
      "name": "新店区" },
    {
      "id": 711141,
      "name": "坪林区" },
    {
      "id": 711142,
      "name": "乌来区" },
    {
      "id": 711143,
      "name": "永和区" },
    {
      "id": 711144,
      "name": "中和区" },
    {
      "id": 711145,
      "name": "土城区" },
    {
      "id": 711146,
      "name": "三峡区" },
    {
      "id": 711147,
      "name": "树林区" },
    {
      "id": 711148,
      "name": "莺歌区" },
    {
      "id": 711149,
      "name": "三重区" },
    {
      "id": 711150,
      "name": "新庄区" },
    {
      "id": 711151,
      "name": "泰山区" },
    {
      "id": 711152,
      "name": "林口区" },
    {
      "id": 711153,
      "name": "芦洲区" },
    {
      "id": 711154,
      "name": "五股区" },
    {
      "id": 711155,
      "name": "八里区" },
    {
      "id": 711156,
      "name": "淡水区" },
    {
      "id": 711157,
      "name": "三芝区" },
    {
      "id": 711158,
      "name": "石门区" }] },

  {
    "id": 711200,
    "name": "宜兰县",
    "children": [{
      "id": 711214,
      "name": "宜兰市" },
    {
      "id": 711215,
      "name": "头城镇" },
    {
      "id": 711216,
      "name": "礁溪乡" },
    {
      "id": 711217,
      "name": "壮围乡" },
    {
      "id": 711218,
      "name": "员山乡" },
    {
      "id": 711219,
      "name": "罗东镇" },
    {
      "id": 711220,
      "name": "三星乡" },
    {
      "id": 711221,
      "name": "大同乡" },
    {
      "id": 711222,
      "name": "五结乡" },
    {
      "id": 711223,
      "name": "冬山乡" },
    {
      "id": 711224,
      "name": "苏澳镇" },
    {
      "id": 711225,
      "name": "南澳乡" }] },

  {
    "id": 711300,
    "name": "新竹县",
    "children": [{
      "id": 711314,
      "name": "竹北市" },
    {
      "id": 711315,
      "name": "湖口乡" },
    {
      "id": 711316,
      "name": "新丰乡" },
    {
      "id": 711317,
      "name": "新埔镇" },
    {
      "id": 711318,
      "name": "关西镇" },
    {
      "id": 711319,
      "name": "芎林乡" },
    {
      "id": 711320,
      "name": "宝山乡" },
    {
      "id": 711321,
      "name": "竹东镇" },
    {
      "id": 711322,
      "name": "五峰乡" },
    {
      "id": 711323,
      "name": "横山乡" },
    {
      "id": 711324,
      "name": "尖石乡" },
    {
      "id": 711325,
      "name": "北埔乡" },
    {
      "id": 711326,
      "name": "峨眉乡" }] },

  {
    "id": 711400,
    "name": "桃园市",
    "children": [{
      "id": 711414,
      "name": "中坜区" },
    {
      "id": 711415,
      "name": "平镇区" },
    {
      "id": 711416,
      "name": "龙潭区" },
    {
      "id": 711417,
      "name": "杨梅区" },
    {
      "id": 711418,
      "name": "新屋区" },
    {
      "id": 711419,
      "name": "观音区" },
    {
      "id": 711420,
      "name": "桃园区" },
    {
      "id": 711421,
      "name": "龟山区" },
    {
      "id": 711422,
      "name": "八德区" },
    {
      "id": 711423,
      "name": "大溪区" },
    {
      "id": 711424,
      "name": "复兴区" },
    {
      "id": 711425,
      "name": "大园区" },
    {
      "id": 711426,
      "name": "芦竹区" }] },

  {
    "id": 711500,
    "name": "苗栗县",
    "children": [{
      "id": 711519,
      "name": "竹南镇" },
    {
      "id": 711520,
      "name": "头份市" },
    {
      "id": 711521,
      "name": "三湾乡" },
    {
      "id": 711522,
      "name": "南庄乡" },
    {
      "id": 711523,
      "name": "狮潭乡" },
    {
      "id": 711524,
      "name": "后龙镇" },
    {
      "id": 711525,
      "name": "通霄镇" },
    {
      "id": 711526,
      "name": "苑里镇" },
    {
      "id": 711527,
      "name": "苗栗市" },
    {
      "id": 711528,
      "name": "造桥乡" },
    {
      "id": 711529,
      "name": "头屋乡" },
    {
      "id": 711530,
      "name": "公馆乡" },
    {
      "id": 711531,
      "name": "大湖乡" },
    {
      "id": 711532,
      "name": "泰安乡" },
    {
      "id": 711533,
      "name": "铜锣乡" },
    {
      "id": 711534,
      "name": "三义乡" },
    {
      "id": 711535,
      "name": "西湖乡" },
    {
      "id": 711536,
      "name": "卓兰镇" }] },

  {
    "id": 711700,
    "name": "彰化县",
    "children": [{
      "id": 711727,
      "name": "彰化市" },
    {
      "id": 711728,
      "name": "芬园乡" },
    {
      "id": 711729,
      "name": "花坛乡" },
    {
      "id": 711730,
      "name": "秀水乡" },
    {
      "id": 711731,
      "name": "鹿港镇" },
    {
      "id": 711732,
      "name": "福兴乡" },
    {
      "id": 711733,
      "name": "线西乡" },
    {
      "id": 711734,
      "name": "和美镇" },
    {
      "id": 711735,
      "name": "伸港乡" },
    {
      "id": 711736,
      "name": "员林市" },
    {
      "id": 711737,
      "name": "社头乡" },
    {
      "id": 711738,
      "name": "永靖乡" },
    {
      "id": 711739,
      "name": "埔心乡" },
    {
      "id": 711740,
      "name": "溪湖镇" },
    {
      "id": 711741,
      "name": "大村乡" },
    {
      "id": 711742,
      "name": "埔盐乡" },
    {
      "id": 711743,
      "name": "田中镇" },
    {
      "id": 711744,
      "name": "北斗镇" },
    {
      "id": 711745,
      "name": "田尾乡" },
    {
      "id": 711746,
      "name": "埤头乡" },
    {
      "id": 711747,
      "name": "溪州乡" },
    {
      "id": 711748,
      "name": "竹塘乡" },
    {
      "id": 711749,
      "name": "二林镇" },
    {
      "id": 711750,
      "name": "大城乡" },
    {
      "id": 711751,
      "name": "芳苑乡" },
    {
      "id": 711752,
      "name": "二水乡" }] },

  {
    "id": 711900,
    "name": "嘉义县",
    "children": [{
      "id": 711919,
      "name": "番路乡" },
    {
      "id": 711920,
      "name": "梅山乡" },
    {
      "id": 711921,
      "name": "竹崎乡" },
    {
      "id": 711922,
      "name": "阿里山乡" },
    {
      "id": 711923,
      "name": "中埔乡" },
    {
      "id": 711924,
      "name": "大埔乡" },
    {
      "id": 711925,
      "name": "水上乡" },
    {
      "id": 711926,
      "name": "鹿草乡" },
    {
      "id": 711927,
      "name": "太保市" },
    {
      "id": 711928,
      "name": "朴子市" },
    {
      "id": 711929,
      "name": "东石乡" },
    {
      "id": 711930,
      "name": "六脚乡" },
    {
      "id": 711931,
      "name": "新港乡" },
    {
      "id": 711932,
      "name": "民雄乡" },
    {
      "id": 711933,
      "name": "大林镇" },
    {
      "id": 711934,
      "name": "溪口乡" },
    {
      "id": 711935,
      "name": "义竹乡" },
    {
      "id": 711936,
      "name": "布袋镇" }] },

  {
    "id": 712100,
    "name": "云林县",
    "children": [{
      "id": 712121,
      "name": "斗南镇" },
    {
      "id": 712122,
      "name": "大埤乡" },
    {
      "id": 712123,
      "name": "虎尾镇" },
    {
      "id": 712124,
      "name": "土库镇" },
    {
      "id": 712125,
      "name": "褒忠乡" },
    {
      "id": 712126,
      "name": "东势乡" },
    {
      "id": 712127,
      "name": "台西乡" },
    {
      "id": 712128,
      "name": "仑背乡" },
    {
      "id": 712129,
      "name": "麦寮乡" },
    {
      "id": 712130,
      "name": "斗六市" },
    {
      "id": 712131,
      "name": "林内乡" },
    {
      "id": 712132,
      "name": "古坑乡" },
    {
      "id": 712133,
      "name": "莿桐乡" },
    {
      "id": 712134,
      "name": "西螺镇" },
    {
      "id": 712135,
      "name": "二仑乡" },
    {
      "id": 712136,
      "name": "北港镇" },
    {
      "id": 712137,
      "name": "水林乡" },
    {
      "id": 712138,
      "name": "口湖乡" },
    {
      "id": 712139,
      "name": "四湖乡" },
    {
      "id": 712140,
      "name": "元长乡" }] },

  {
    "id": 712400,
    "name": "屏东县",
    "children": [{
      "id": 712434,
      "name": "屏东市" },
    {
      "id": 712435,
      "name": "三地门乡" },
    {
      "id": 712436,
      "name": "雾台乡" },
    {
      "id": 712437,
      "name": "玛家乡" },
    {
      "id": 712438,
      "name": "九如乡" },
    {
      "id": 712439,
      "name": "里港乡" },
    {
      "id": 712440,
      "name": "高树乡" },
    {
      "id": 712441,
      "name": "盐埔乡" },
    {
      "id": 712442,
      "name": "长治乡" },
    {
      "id": 712443,
      "name": "麟洛乡" },
    {
      "id": 712444,
      "name": "竹田乡" },
    {
      "id": 712445,
      "name": "内埔乡" },
    {
      "id": 712446,
      "name": "万丹乡" },
    {
      "id": 712447,
      "name": "潮州镇" },
    {
      "id": 712448,
      "name": "泰武乡" },
    {
      "id": 712449,
      "name": "来义乡" },
    {
      "id": 712450,
      "name": "万峦乡" },
    {
      "id": 712451,
      "name": "崁顶乡" },
    {
      "id": 712452,
      "name": "新埤乡" },
    {
      "id": 712453,
      "name": "南州乡" },
    {
      "id": 712454,
      "name": "林边乡" },
    {
      "id": 712455,
      "name": "东港镇" },
    {
      "id": 712456,
      "name": "琉球乡" },
    {
      "id": 712457,
      "name": "佳冬乡" },
    {
      "id": 712458,
      "name": "新园乡" },
    {
      "id": 712459,
      "name": "枋寮乡" },
    {
      "id": 712460,
      "name": "枋山乡" },
    {
      "id": 712461,
      "name": "春日乡" },
    {
      "id": 712462,
      "name": "狮子乡" },
    {
      "id": 712463,
      "name": "车城乡" },
    {
      "id": 712464,
      "name": "牡丹乡" },
    {
      "id": 712465,
      "name": "恒春镇" },
    {
      "id": 712466,
      "name": "满州乡" }] },

  {
    "id": 712500,
    "name": "台东县",
    "children": [{
      "id": 712517,
      "name": "台东市" },
    {
      "id": 712518,
      "name": "绿岛乡" },
    {
      "id": 712519,
      "name": "兰屿乡" },
    {
      "id": 712520,
      "name": "延平乡" },
    {
      "id": 712521,
      "name": "卑南乡" },
    {
      "id": 712522,
      "name": "鹿野乡" },
    {
      "id": 712523,
      "name": "关山镇" },
    {
      "id": 712524,
      "name": "海端乡" },
    {
      "id": 712525,
      "name": "池上乡" },
    {
      "id": 712526,
      "name": "东河乡" },
    {
      "id": 712527,
      "name": "成功镇" },
    {
      "id": 712528,
      "name": "长滨乡" },
    {
      "id": 712529,
      "name": "金峰乡" },
    {
      "id": 712530,
      "name": "大武乡" },
    {
      "id": 712531,
      "name": "达仁乡" },
    {
      "id": 712532,
      "name": "太麻里乡" }] },

  {
    "id": 712600,
    "name": "花莲县",
    "children": [{
      "id": 712615,
      "name": "花莲市" },
    {
      "id": 712616,
      "name": "新城乡" },
    {
      "id": 712618,
      "name": "秀林乡" },
    {
      "id": 712619,
      "name": "吉安乡" },
    {
      "id": 712620,
      "name": "寿丰乡" },
    {
      "id": 712621,
      "name": "凤林镇" },
    {
      "id": 712622,
      "name": "光复乡" },
    {
      "id": 712623,
      "name": "丰滨乡" },
    {
      "id": 712624,
      "name": "瑞穗乡" },
    {
      "id": 712625,
      "name": "万荣乡" },
    {
      "id": 712626,
      "name": "玉里镇" },
    {
      "id": 712627,
      "name": "卓溪乡" },
    {
      "id": 712628,
      "name": "富里乡" }] },

  {
    "id": 712700,
    "name": "澎湖县",
    "children": [{
      "id": 712707,
      "name": "马公市" },
    {
      "id": 712708,
      "name": "西屿乡" },
    {
      "id": 712709,
      "name": "望安乡" },
    {
      "id": 712710,
      "name": "七美乡" },
    {
      "id": 712711,
      "name": "白沙乡" },
    {
      "id": 712712,
      "name": "湖西乡" }] }] },


{
  "id": 810000,
  "name": "香港特别行政区",
  "children": [{
    "id": 810100,
    "name": "香港特别行政区",
    "children": [{
      "id": 810101,
      "name": "中西区" },
    {
      "id": 810102,
      "name": "东区" },
    {
      "id": 810103,
      "name": "九龙城区" },
    {
      "id": 810104,
      "name": "观塘区" },
    {
      "id": 810105,
      "name": "南区" },
    {
      "id": 810106,
      "name": "深水埗区" },
    {
      "id": 810107,
      "name": "湾仔区" },
    {
      "id": 810108,
      "name": "黄大仙区" },
    {
      "id": 810109,
      "name": "油尖旺区" },
    {
      "id": 810110,
      "name": "离岛区" },
    {
      "id": 810111,
      "name": "葵青区" },
    {
      "id": 810112,
      "name": "北区" },
    {
      "id": 810113,
      "name": "西贡区" },
    {
      "id": 810114,
      "name": "沙田区" },
    {
      "id": 810115,
      "name": "屯门区" },
    {
      "id": 810116,
      "name": "大埔区" },
    {
      "id": 810117,
      "name": "荃湾区" },
    {
      "id": 810118,
      "name": "元朗区" }] }] },


{
  "id": 820000,
  "name": "澳门特别行政区",
  "children": [{
    "id": 820100,
    "name": "澳门特别行政区",
    "children": [{
      "id": 820101,
      "name": "澳门半岛" },
    {
      "id": 820102,
      "name": "凼仔" },
    {
      "id": 820103,
      "name": "路凼城" },
    {
      "id": 820104,
      "name": "路环" }] }] }];

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') !== -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') !== -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


var ignoreVueI18n = true;
function watchAppLocale(appVm, i18n) {
  appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
    i18n.setLocale(newLocale);
  });
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    locale =
    typeof uni !== 'undefined' && uni.getLocale && uni.getLocale() ||
    LOCALE_EN;
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var appVm = getApp().$vm;
      watchAppLocale(appVm, i18n);
      if (!appVm.$t || !appVm.$i18n || ignoreVueI18n) {
        // if (!locale) {
        //   i18n.setLocale(getDefaultLocale())
        // }
        /* eslint-disable no-func-assign */
        _t = function t(key, values) {
          // 触发响应式
          appVm.$locale;
          return i18n.t(key, values);
        };
      } else
      {
        /* eslint-disable no-func-assign */
        _t = function t(key, values) {
          var $i18n = appVm.$i18n;
          var silentTranslationWarn = $i18n.silentTranslationWarn;
          $i18n.silentTranslationWarn = true;
          var msg = appVm.$t(key, values);
          $i18n.silentTranslationWarn = silentTranslationWarn;
          if (msg !== key) {
            return msg;
          }
          return i18n.t(key, $i18n.locale, values);
        };
      }
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 41:
/*!************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/common/graceChecker.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
数据验证（表单验证）
来自 grace.hcoder.net 
作者 hcoder 深海
*/
module.exports = {
  error: '',
  check: function check(data, rule) {
    for (var i = 0; i < rule.length; i++) {
      if (!rule[i].checkType) {return true;}
      if (!rule[i].name) {return true;}
      if (!rule[i].errorMsg) {return true;}
      if (!data[rule[i].name]) {this.error = rule[i].errorMsg;return false;}
      switch (rule[i].checkType) {
        case 'string':
          var reg = new RegExp('^.{' + rule[i].checkRule + '}$');
          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}
          break;
        case 'int':
          var reg = new RegExp('^(-[1-9]|[1-9])[0-9]{' + rule[i].checkRule + '}$');
          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}
          break;
          break;
        case 'between':
          if (!this.isNumber(data[rule[i].name])) {
            this.error = rule[i].errorMsg;
            return false;
          }
          var minMax = rule[i].checkRule.split(',');
          minMax[0] = Number(minMax[0]);
          minMax[1] = Number(minMax[1]);
          if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {
            this.error = rule[i].errorMsg;
            return false;
          }
          break;
        case 'betweenD':
          var reg = /^-?[1-9][0-9]?$/;
          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}
          var minMax = rule[i].checkRule.split(',');
          minMax[0] = Number(minMax[0]);
          minMax[1] = Number(minMax[1]);
          if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {
            this.error = rule[i].errorMsg;
            return false;
          }
          break;
        case 'betweenF':
          var reg = /^-?[0-9][0-9]?.+[0-9]+$/;
          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}
          var minMax = rule[i].checkRule.split(',');
          minMax[0] = Number(minMax[0]);
          minMax[1] = Number(minMax[1]);
          if (data[rule[i].name] > minMax[1] || data[rule[i].name] < minMax[0]) {
            this.error = rule[i].errorMsg;
            return false;
          }
          break;
        case 'same':
          if (data[rule[i].name] != rule[i].checkRule) {this.error = rule[i].errorMsg;return false;}
          break;
        case 'notsame':
          if (data[rule[i].name] == rule[i].checkRule) {this.error = rule[i].errorMsg;return false;}
          break;
        case 'email':
          var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}
          break;
        case 'phoneno':
          var reg = /^1[0-9]{10,10}$/;
          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}
          break;
        case 'zipcode':
          var reg = /^[0-9]{6}$/;
          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}
          break;
        case 'reg':
          var reg = new RegExp(rule[i].checkRule);
          if (!reg.test(data[rule[i].name])) {this.error = rule[i].errorMsg;return false;}
          break;
        case 'in':
          if (rule[i].checkRule.indexOf(data[rule[i].name]) == -1) {
            this.error = rule[i].errorMsg;return false;
          }
          break;
        case 'notnull':
          if (data[rule[i].name] == null || data[rule[i].name].length < 1) {this.error = rule[i].errorMsg;return false;}
          break;}

    }
    return true;
  },
  isNumber: function isNumber(checkVal) {
    var reg = /^-?[1-9][0-9]?.?[0-9]*$/;
    return reg.test(checkVal);
  } };

/***/ }),

/***/ 42:
/*!********************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/pages/invoiceRecord/address.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [{
  "id": 110000,
  "name": "北京市",
  "children": [{
    "id": 110100,
    "name": "北京市",
    "children": [{
      "id": 110101,
      "name": "东城区" },
    {
      "id": 110102,
      "name": "西城区" },
    {
      "id": 110105,
      "name": "朝阳区" },
    {
      "id": 110106,
      "name": "丰台区" },
    {
      "id": 110107,
      "name": "石景山区" },
    {
      "id": 110108,
      "name": "海淀区" },
    {
      "id": 110109,
      "name": "门头沟区" },
    {
      "id": 110111,
      "name": "房山区" },
    {
      "id": 110112,
      "name": "通州区" },
    {
      "id": 110113,
      "name": "顺义区" },
    {
      "id": 110114,
      "name": "昌平区" },
    {
      "id": 110115,
      "name": "大兴区" },
    {
      "id": 110116,
      "name": "怀柔区" },
    {
      "id": 110117,
      "name": "平谷区" },
    {
      "id": 110118,
      "name": "密云区" },
    {
      "id": 110119,
      "name": "延庆区" }] }] },


{
  "id": 120000,
  "name": "天津市",
  "children": [{
    "id": 120100,
    "name": "天津市",
    "children": [{
      "id": 120101,
      "name": "和平区" },
    {
      "id": 120102,
      "name": "河东区" },
    {
      "id": 120103,
      "name": "河西区" },
    {
      "id": 120104,
      "name": "南开区" },
    {
      "id": 120105,
      "name": "河北区" },
    {
      "id": 120106,
      "name": "红桥区" },
    {
      "id": 120110,
      "name": "东丽区" },
    {
      "id": 120111,
      "name": "西青区" },
    {
      "id": 120112,
      "name": "津南区" },
    {
      "id": 120113,
      "name": "北辰区" },
    {
      "id": 120114,
      "name": "武清区" },
    {
      "id": 120115,
      "name": "宝坻区" },
    {
      "id": 120116,
      "name": "滨海新区" },
    {
      "id": 120117,
      "name": "宁河区" },
    {
      "id": 120118,
      "name": "静海区" },
    {
      "id": 120119,
      "name": "蓟州区" }] }] },


{
  "id": 130000,
  "name": "河北省",
  "children": [{
    "id": 130100,
    "name": "石家庄市",
    "children": [{
      "id": 130102,
      "name": "长安区" },
    {
      "id": 130104,
      "name": "桥西区" },
    {
      "id": 130105,
      "name": "新华区" },
    {
      "id": 130107,
      "name": "井陉矿区" },
    {
      "id": 130108,
      "name": "裕华区" },
    {
      "id": 130109,
      "name": "藁城区" },
    {
      "id": 130110,
      "name": "鹿泉区" },
    {
      "id": 130111,
      "name": "栾城区" },
    {
      "id": 130121,
      "name": "井陉县" },
    {
      "id": 130123,
      "name": "正定县" },
    {
      "id": 130125,
      "name": "行唐县" },
    {
      "id": 130126,
      "name": "灵寿县" },
    {
      "id": 130127,
      "name": "高邑县" },
    {
      "id": 130128,
      "name": "深泽县" },
    {
      "id": 130129,
      "name": "赞皇县" },
    {
      "id": 130130,
      "name": "无极县" },
    {
      "id": 130131,
      "name": "平山县" },
    {
      "id": 130132,
      "name": "元氏县" },
    {
      "id": 130133,
      "name": "赵县" },
    {
      "id": 130181,
      "name": "辛集市" },
    {
      "id": 130183,
      "name": "晋州市" },
    {
      "id": 130184,
      "name": "新乐市" }] },

  {
    "id": 130200,
    "name": "唐山市",
    "children": [{
      "id": 130202,
      "name": "路南区" },
    {
      "id": 130203,
      "name": "路北区" },
    {
      "id": 130204,
      "name": "古冶区" },
    {
      "id": 130205,
      "name": "开平区" },
    {
      "id": 130207,
      "name": "丰南区" },
    {
      "id": 130208,
      "name": "丰润区" },
    {
      "id": 130209,
      "name": "曹妃甸区" },
    {
      "id": 130224,
      "name": "滦南县" },
    {
      "id": 130225,
      "name": "乐亭县" },
    {
      "id": 130227,
      "name": "迁西县" },
    {
      "id": 130229,
      "name": "玉田县" },
    {
      "id": 130230,
      "name": "芦台区" },
    {
      "id": 130281,
      "name": "遵化市" },
    {
      "id": 130283,
      "name": "迁安市" },
    {
      "id": 130284,
      "name": "滦州市" }] },

  {
    "id": 130300,
    "name": "秦皇岛市",
    "children": [{
      "id": 130302,
      "name": "海港区" },
    {
      "id": 130303,
      "name": "山海关区" },
    {
      "id": 130304,
      "name": "北戴河区" },
    {
      "id": 130306,
      "name": "抚宁区" },
    {
      "id": 130321,
      "name": "青龙满族自治县" },
    {
      "id": 130322,
      "name": "昌黎县" },
    {
      "id": 130324,
      "name": "卢龙县" }] },

  {
    "id": 130400,
    "name": "邯郸市",
    "children": [{
      "id": 130402,
      "name": "邯山区" },
    {
      "id": 130403,
      "name": "丛台区" },
    {
      "id": 130404,
      "name": "复兴区" },
    {
      "id": 130406,
      "name": "峰峰矿区" },
    {
      "id": 130407,
      "name": "肥乡区" },
    {
      "id": 130408,
      "name": "永年区" },
    {
      "id": 130423,
      "name": "临漳县" },
    {
      "id": 130424,
      "name": "成安县" },
    {
      "id": 130425,
      "name": "大名县" },
    {
      "id": 130426,
      "name": "涉县" },
    {
      "id": 130427,
      "name": "磁县" },
    {
      "id": 130430,
      "name": "邱县" },
    {
      "id": 130431,
      "name": "鸡泽县" },
    {
      "id": 130432,
      "name": "广平县" },
    {
      "id": 130433,
      "name": "馆陶县" },
    {
      "id": 130434,
      "name": "魏县" },
    {
      "id": 130435,
      "name": "曲周县" },
    {
      "id": 130481,
      "name": "武安市" }] },

  {
    "id": 130500,
    "name": "邢台市",
    "children": [{
      "id": 130502,
      "name": "桥东区" },
    {
      "id": 130503,
      "name": "桥西区" },
    {
      "id": 130521,
      "name": "邢台县" },
    {
      "id": 130522,
      "name": "临城县" },
    {
      "id": 130523,
      "name": "内丘县" },
    {
      "id": 130524,
      "name": "柏乡县" },
    {
      "id": 130525,
      "name": "隆尧县" },
    {
      "id": 130526,
      "name": "任县" },
    {
      "id": 130527,
      "name": "南和县" },
    {
      "id": 130528,
      "name": "宁晋县" },
    {
      "id": 130529,
      "name": "巨鹿县" },
    {
      "id": 130530,
      "name": "新河县" },
    {
      "id": 130531,
      "name": "广宗县" },
    {
      "id": 130532,
      "name": "平乡县" },
    {
      "id": 130533,
      "name": "威县" },
    {
      "id": 130534,
      "name": "清河县" },
    {
      "id": 130535,
      "name": "临西县" },
    {
      "id": 130581,
      "name": "南宫市" },
    {
      "id": 130582,
      "name": "沙河市" }] },

  {
    "id": 130600,
    "name": "保定市",
    "children": [{
      "id": 130602,
      "name": "竞秀区" },
    {
      "id": 130606,
      "name": "莲池区" },
    {
      "id": 130607,
      "name": "满城区" },
    {
      "id": 130608,
      "name": "清苑区" },
    {
      "id": 130609,
      "name": "徐水区" },
    {
      "id": 130623,
      "name": "涞水县" },
    {
      "id": 130624,
      "name": "阜平县" },
    {
      "id": 130626,
      "name": "定兴县" },
    {
      "id": 130627,
      "name": "唐县" },
    {
      "id": 130628,
      "name": "高阳县" },
    {
      "id": 130629,
      "name": "容城县" },
    {
      "id": 130630,
      "name": "涞源县" },
    {
      "id": 130631,
      "name": "望都县" },
    {
      "id": 130632,
      "name": "安新县" },
    {
      "id": 130633,
      "name": "易县" },
    {
      "id": 130634,
      "name": "曲阳县" },
    {
      "id": 130635,
      "name": "蠡县" },
    {
      "id": 130636,
      "name": "顺平县" },
    {
      "id": 130637,
      "name": "博野县" },
    {
      "id": 130638,
      "name": "雄县" },
    {
      "id": 130681,
      "name": "涿州市" },
    {
      "id": 130682,
      "name": "定州市" },
    {
      "id": 130683,
      "name": "安国市" },
    {
      "id": 130684,
      "name": "高碑店市" }] },

  {
    "id": 130700,
    "name": "张家口市",
    "children": [{
      "id": 130702,
      "name": "桥东区" },
    {
      "id": 130703,
      "name": "桥西区" },
    {
      "id": 130705,
      "name": "宣化区" },
    {
      "id": 130706,
      "name": "下花园区" },
    {
      "id": 130708,
      "name": "万全区" },
    {
      "id": 130709,
      "name": "崇礼区" },
    {
      "id": 130722,
      "name": "张北县" },
    {
      "id": 130723,
      "name": "康保县" },
    {
      "id": 130724,
      "name": "沽源县" },
    {
      "id": 130725,
      "name": "尚义县" },
    {
      "id": 130726,
      "name": "蔚县" },
    {
      "id": 130727,
      "name": "阳原县" },
    {
      "id": 130728,
      "name": "怀安县" },
    {
      "id": 130730,
      "name": "怀来县" },
    {
      "id": 130731,
      "name": "涿鹿县" },
    {
      "id": 130732,
      "name": "赤城县" }] },

  {
    "id": 130800,
    "name": "承德市",
    "children": [{
      "id": 130802,
      "name": "双桥区" },
    {
      "id": 130803,
      "name": "双滦区" },
    {
      "id": 130804,
      "name": "鹰手营子矿区" },
    {
      "id": 130821,
      "name": "承德县" },
    {
      "id": 130822,
      "name": "兴隆县" },
    {
      "id": 130824,
      "name": "滦平县" },
    {
      "id": 130825,
      "name": "隆化县" },
    {
      "id": 130826,
      "name": "丰宁满族自治县" },
    {
      "id": 130827,
      "name": "宽城满族自治县" },
    {
      "id": 130828,
      "name": "围场满族蒙古族自治县" },
    {
      "id": 130881,
      "name": "平泉市" }] },

  {
    "id": 130900,
    "name": "沧州市",
    "children": [{
      "id": 130902,
      "name": "新华区" },
    {
      "id": 130903,
      "name": "运河区" },
    {
      "id": 130921,
      "name": "沧县" },
    {
      "id": 130922,
      "name": "青县" },
    {
      "id": 130923,
      "name": "东光县" },
    {
      "id": 130924,
      "name": "海兴县" },
    {
      "id": 130925,
      "name": "盐山县" },
    {
      "id": 130926,
      "name": "肃宁县" },
    {
      "id": 130927,
      "name": "南皮县" },
    {
      "id": 130928,
      "name": "吴桥县" },
    {
      "id": 130929,
      "name": "献县" },
    {
      "id": 130930,
      "name": "孟村回族自治县" },
    {
      "id": 130981,
      "name": "泊头市" },
    {
      "id": 130982,
      "name": "任丘市" },
    {
      "id": 130983,
      "name": "黄骅市" },
    {
      "id": 130984,
      "name": "河间市" }] },

  {
    "id": 131000,
    "name": "廊坊市",
    "children": [{
      "id": 131002,
      "name": "安次区" },
    {
      "id": 131003,
      "name": "广阳区" },
    {
      "id": 131022,
      "name": "固安县" },
    {
      "id": 131023,
      "name": "永清县" },
    {
      "id": 131024,
      "name": "香河县" },
    {
      "id": 131025,
      "name": "大城县" },
    {
      "id": 131026,
      "name": "文安县" },
    {
      "id": 131028,
      "name": "大厂回族自治县" },
    {
      "id": 131081,
      "name": "霸州市" },
    {
      "id": 131082,
      "name": "三河市" }] },

  {
    "id": 131100,
    "name": "衡水市",
    "children": [{
      "id": 131102,
      "name": "桃城区" },
    {
      "id": 131103,
      "name": "冀州区" },
    {
      "id": 131121,
      "name": "枣强县" },
    {
      "id": 131122,
      "name": "武邑县" },
    {
      "id": 131123,
      "name": "武强县" },
    {
      "id": 131124,
      "name": "饶阳县" },
    {
      "id": 131125,
      "name": "安平县" },
    {
      "id": 131126,
      "name": "故城县" },
    {
      "id": 131127,
      "name": "景县" },
    {
      "id": 131128,
      "name": "阜城县" },
    {
      "id": 131182,
      "name": "深州市" }] }] },


{
  "id": 140000,
  "name": "山西省",
  "children": [{
    "id": 140100,
    "name": "太原市",
    "children": [{
      "id": 140105,
      "name": "小店区" },
    {
      "id": 140106,
      "name": "迎泽区" },
    {
      "id": 140107,
      "name": "杏花岭区" },
    {
      "id": 140108,
      "name": "尖草坪区" },
    {
      "id": 140109,
      "name": "万柏林区" },
    {
      "id": 140110,
      "name": "晋源区" },
    {
      "id": 140121,
      "name": "清徐县" },
    {
      "id": 140122,
      "name": "阳曲县" },
    {
      "id": 140123,
      "name": "娄烦县" },
    {
      "id": 140181,
      "name": "古交市" }] },

  {
    "id": 140200,
    "name": "大同市",
    "children": [{
      "id": 140212,
      "name": "新荣区" },
    {
      "id": 140213,
      "name": "平城区" },
    {
      "id": 140214,
      "name": "云冈区" },
    {
      "id": 140215,
      "name": "云州区" },
    {
      "id": 140221,
      "name": "阳高县" },
    {
      "id": 140222,
      "name": "天镇县" },
    {
      "id": 140223,
      "name": "广灵县" },
    {
      "id": 140224,
      "name": "灵丘县" },
    {
      "id": 140225,
      "name": "浑源县" },
    {
      "id": 140226,
      "name": "左云县" }] },

  {
    "id": 140300,
    "name": "阳泉市",
    "children": [{
      "id": 140302,
      "name": "城区" },
    {
      "id": 140303,
      "name": "矿区" },
    {
      "id": 140311,
      "name": "郊区" },
    {
      "id": 140321,
      "name": "平定县" },
    {
      "id": 140322,
      "name": "盂县" }] },

  {
    "id": 140400,
    "name": "长治市",
    "children": [{
      "id": 140403,
      "name": "潞州区" },
    {
      "id": 140404,
      "name": "上党区" },
    {
      "id": 140405,
      "name": "屯留区" },
    {
      "id": 140406,
      "name": "潞城区" },
    {
      "id": 140423,
      "name": "襄垣县" },
    {
      "id": 140425,
      "name": "平顺县" },
    {
      "id": 140426,
      "name": "黎城县" },
    {
      "id": 140427,
      "name": "壶关县" },
    {
      "id": 140428,
      "name": "长子县" },
    {
      "id": 140429,
      "name": "武乡县" },
    {
      "id": 140430,
      "name": "沁县" },
    {
      "id": 140431,
      "name": "沁源县" }] },

  {
    "id": 140500,
    "name": "晋城市",
    "children": [{
      "id": 140502,
      "name": "城区" },
    {
      "id": 140521,
      "name": "沁水县" },
    {
      "id": 140522,
      "name": "阳城县" },
    {
      "id": 140524,
      "name": "陵川县" },
    {
      "id": 140525,
      "name": "泽州县" },
    {
      "id": 140581,
      "name": "高平市" }] },

  {
    "id": 140600,
    "name": "朔州市",
    "children": [{
      "id": 140602,
      "name": "朔城区" },
    {
      "id": 140603,
      "name": "平鲁区" },
    {
      "id": 140621,
      "name": "山阴县" },
    {
      "id": 140622,
      "name": "应县" },
    {
      "id": 140623,
      "name": "右玉县" },
    {
      "id": 140681,
      "name": "怀仁市" }] },

  {
    "id": 140700,
    "name": "晋中市",
    "children": [{
      "id": 140702,
      "name": "榆次区" },
    {
      "id": 140721,
      "name": "榆社县" },
    {
      "id": 140722,
      "name": "左权县" },
    {
      "id": 140723,
      "name": "和顺县" },
    {
      "id": 140724,
      "name": "昔阳县" },
    {
      "id": 140725,
      "name": "寿阳县" },
    {
      "id": 140726,
      "name": "太谷县" },
    {
      "id": 140727,
      "name": "祁县" },
    {
      "id": 140728,
      "name": "平遥县" },
    {
      "id": 140729,
      "name": "灵石县" },
    {
      "id": 140781,
      "name": "介休市" }] },

  {
    "id": 140800,
    "name": "运城市",
    "children": [{
      "id": 140802,
      "name": "盐湖区" },
    {
      "id": 140821,
      "name": "临猗县" },
    {
      "id": 140822,
      "name": "万荣县" },
    {
      "id": 140823,
      "name": "闻喜县" },
    {
      "id": 140824,
      "name": "稷山县" },
    {
      "id": 140825,
      "name": "新绛县" },
    {
      "id": 140826,
      "name": "绛县" },
    {
      "id": 140827,
      "name": "垣曲县" },
    {
      "id": 140828,
      "name": "夏县" },
    {
      "id": 140829,
      "name": "平陆县" },
    {
      "id": 140830,
      "name": "芮城县" },
    {
      "id": 140881,
      "name": "永济市" },
    {
      "id": 140882,
      "name": "河津市" }] },

  {
    "id": 140900,
    "name": "忻州市",
    "children": [{
      "id": 140902,
      "name": "忻府区" },
    {
      "id": 140921,
      "name": "定襄县" },
    {
      "id": 140922,
      "name": "五台县" },
    {
      "id": 140923,
      "name": "代县" },
    {
      "id": 140924,
      "name": "繁峙县" },
    {
      "id": 140925,
      "name": "宁武县" },
    {
      "id": 140926,
      "name": "静乐县" },
    {
      "id": 140927,
      "name": "神池县" },
    {
      "id": 140928,
      "name": "五寨县" },
    {
      "id": 140929,
      "name": "岢岚县" },
    {
      "id": 140930,
      "name": "河曲县" },
    {
      "id": 140931,
      "name": "保德县" },
    {
      "id": 140932,
      "name": "偏关县" },
    {
      "id": 140981,
      "name": "原平市" }] },

  {
    "id": 141000,
    "name": "临汾市",
    "children": [{
      "id": 141002,
      "name": "尧都区" },
    {
      "id": 141021,
      "name": "曲沃县" },
    {
      "id": 141022,
      "name": "翼城县" },
    {
      "id": 141023,
      "name": "襄汾县" },
    {
      "id": 141024,
      "name": "洪洞县" },
    {
      "id": 141025,
      "name": "古县" },
    {
      "id": 141026,
      "name": "安泽县" },
    {
      "id": 141027,
      "name": "浮山县" },
    {
      "id": 141028,
      "name": "吉县" },
    {
      "id": 141029,
      "name": "乡宁县" },
    {
      "id": 141030,
      "name": "大宁县" },
    {
      "id": 141031,
      "name": "隰县" },
    {
      "id": 141032,
      "name": "永和县" },
    {
      "id": 141033,
      "name": "蒲县" },
    {
      "id": 141034,
      "name": "汾西县" },
    {
      "id": 141081,
      "name": "侯马市" },
    {
      "id": 141082,
      "name": "霍州市" }] },

  {
    "id": 141100,
    "name": "吕梁市",
    "children": [{
      "id": 141102,
      "name": "离石区" },
    {
      "id": 141121,
      "name": "文水县" },
    {
      "id": 141122,
      "name": "交城县" },
    {
      "id": 141123,
      "name": "兴县" },
    {
      "id": 141124,
      "name": "临县" },
    {
      "id": 141125,
      "name": "柳林县" },
    {
      "id": 141126,
      "name": "石楼县" },
    {
      "id": 141127,
      "name": "岚县" },
    {
      "id": 141128,
      "name": "方山县" },
    {
      "id": 141129,
      "name": "中阳县" },
    {
      "id": 141130,
      "name": "交口县" },
    {
      "id": 141181,
      "name": "孝义市" },
    {
      "id": 141182,
      "name": "汾阳市" }] }] },


{
  "id": 150000,
  "name": "内蒙古自治区",
  "children": [{
    "id": 150100,
    "name": "呼和浩特市",
    "children": [{
      "id": 150102,
      "name": "新城区" },
    {
      "id": 150103,
      "name": "回民区" },
    {
      "id": 150104,
      "name": "玉泉区" },
    {
      "id": 150105,
      "name": "赛罕区" },
    {
      "id": 150121,
      "name": "土默特左旗" },
    {
      "id": 150122,
      "name": "托克托县" },
    {
      "id": 150123,
      "name": "和林格尔县" },
    {
      "id": 150124,
      "name": "清水河县" },
    {
      "id": 150125,
      "name": "武川县" }] },

  {
    "id": 150200,
    "name": "包头市",
    "children": [{
      "id": 150202,
      "name": "东河区" },
    {
      "id": 150203,
      "name": "昆都仑区" },
    {
      "id": 150204,
      "name": "青山区" },
    {
      "id": 150205,
      "name": "石拐区" },
    {
      "id": 150206,
      "name": "白云鄂博矿区" },
    {
      "id": 150207,
      "name": "九原区" },
    {
      "id": 150221,
      "name": "土默特右旗" },
    {
      "id": 150222,
      "name": "固阳县" },
    {
      "id": 150223,
      "name": "达尔罕茂明安联合旗" }] },

  {
    "id": 150300,
    "name": "乌海市",
    "children": [{
      "id": 150302,
      "name": "海勃湾区" },
    {
      "id": 150303,
      "name": "海南区" },
    {
      "id": 150304,
      "name": "乌达区" }] },

  {
    "id": 150400,
    "name": "赤峰市",
    "children": [{
      "id": 150402,
      "name": "红山区" },
    {
      "id": 150403,
      "name": "元宝山区" },
    {
      "id": 150404,
      "name": "松山区" },
    {
      "id": 150421,
      "name": "阿鲁科尔沁旗" },
    {
      "id": 150422,
      "name": "巴林左旗" },
    {
      "id": 150423,
      "name": "巴林右旗" },
    {
      "id": 150424,
      "name": "林西县" },
    {
      "id": 150425,
      "name": "克什克腾旗" },
    {
      "id": 150426,
      "name": "翁牛特旗" },
    {
      "id": 150428,
      "name": "喀喇沁旗" },
    {
      "id": 150429,
      "name": "宁城县" },
    {
      "id": 150430,
      "name": "敖汉旗" }] },

  {
    "id": 150500,
    "name": "通辽市",
    "children": [{
      "id": 150502,
      "name": "科尔沁区" },
    {
      "id": 150521,
      "name": "科尔沁左翼中旗" },
    {
      "id": 150522,
      "name": "科尔沁左翼后旗" },
    {
      "id": 150523,
      "name": "开鲁县" },
    {
      "id": 150524,
      "name": "库伦旗" },
    {
      "id": 150525,
      "name": "奈曼旗" },
    {
      "id": 150526,
      "name": "扎鲁特旗" },
    {
      "id": 150581,
      "name": "霍林郭勒市" }] },

  {
    "id": 150600,
    "name": "鄂尔多斯市",
    "children": [{
      "id": 150602,
      "name": "东胜区" },
    {
      "id": 150603,
      "name": "康巴什区" },
    {
      "id": 150621,
      "name": "达拉特旗" },
    {
      "id": 150622,
      "name": "准格尔旗" },
    {
      "id": 150623,
      "name": "鄂托克前旗" },
    {
      "id": 150624,
      "name": "鄂托克旗" },
    {
      "id": 150625,
      "name": "杭锦旗" },
    {
      "id": 150626,
      "name": "乌审旗" },
    {
      "id": 150627,
      "name": "伊金霍洛旗" }] },

  {
    "id": 150700,
    "name": "呼伦贝尔市",
    "children": [{
      "id": 150702,
      "name": "海拉尔区" },
    {
      "id": 150703,
      "name": "扎赉诺尔区" },
    {
      "id": 150721,
      "name": "阿荣旗" },
    {
      "id": 150722,
      "name": "莫力达瓦达斡尔族自治旗" },
    {
      "id": 150723,
      "name": "鄂伦春自治旗" },
    {
      "id": 150724,
      "name": "鄂温克族自治旗" },
    {
      "id": 150725,
      "name": "陈巴尔虎旗" },
    {
      "id": 150726,
      "name": "新巴尔虎左旗" },
    {
      "id": 150727,
      "name": "新巴尔虎右旗" },
    {
      "id": 150781,
      "name": "满洲里市" },
    {
      "id": 150782,
      "name": "牙克石市" },
    {
      "id": 150783,
      "name": "扎兰屯市" },
    {
      "id": 150784,
      "name": "额尔古纳市" },
    {
      "id": 150785,
      "name": "根河市" }] },

  {
    "id": 150800,
    "name": "巴彦淖尔市",
    "children": [{
      "id": 150802,
      "name": "临河区" },
    {
      "id": 150821,
      "name": "五原县" },
    {
      "id": 150822,
      "name": "磴口县" },
    {
      "id": 150823,
      "name": "乌拉特前旗" },
    {
      "id": 150824,
      "name": "乌拉特中旗" },
    {
      "id": 150825,
      "name": "乌拉特后旗" },
    {
      "id": 150826,
      "name": "杭锦后旗" }] },

  {
    "id": 150900,
    "name": "乌兰察布市",
    "children": [{
      "id": 150902,
      "name": "集宁区" },
    {
      "id": 150921,
      "name": "卓资县" },
    {
      "id": 150922,
      "name": "化德县" },
    {
      "id": 150923,
      "name": "商都县" },
    {
      "id": 150924,
      "name": "兴和县" },
    {
      "id": 150925,
      "name": "凉城县" },
    {
      "id": 150926,
      "name": "察哈尔右翼前旗" },
    {
      "id": 150927,
      "name": "察哈尔右翼中旗" },
    {
      "id": 150928,
      "name": "察哈尔右翼后旗" },
    {
      "id": 150929,
      "name": "四子王旗" },
    {
      "id": 150981,
      "name": "丰镇市" }] },

  {
    "id": 152200,
    "name": "兴安盟",
    "children": [{
      "id": 152201,
      "name": "乌兰浩特市" },
    {
      "id": 152202,
      "name": "阿尔山市" },
    {
      "id": 152221,
      "name": "科尔沁右翼前旗" },
    {
      "id": 152222,
      "name": "科尔沁右翼中旗" },
    {
      "id": 152223,
      "name": "扎赉特旗" },
    {
      "id": 152224,
      "name": "突泉县" }] },

  {
    "id": 152500,
    "name": "锡林郭勒盟",
    "children": [{
      "id": 152501,
      "name": "二连浩特市" },
    {
      "id": 152502,
      "name": "锡林浩特市" },
    {
      "id": 152522,
      "name": "阿巴嘎旗" },
    {
      "id": 152523,
      "name": "苏尼特左旗" },
    {
      "id": 152524,
      "name": "苏尼特右旗" },
    {
      "id": 152525,
      "name": "东乌珠穆沁旗" },
    {
      "id": 152526,
      "name": "西乌珠穆沁旗" },
    {
      "id": 152527,
      "name": "太仆寺旗" },
    {
      "id": 152528,
      "name": "镶黄旗" },
    {
      "id": 152529,
      "name": "正镶白旗" },
    {
      "id": 152530,
      "name": "正蓝旗" },
    {
      "id": 152531,
      "name": "多伦县" }] },

  {
    "id": 152900,
    "name": "阿拉善盟",
    "children": [{
      "id": 152921,
      "name": "阿拉善左旗" },
    {
      "id": 152922,
      "name": "阿拉善右旗" },
    {
      "id": 152923,
      "name": "额济纳旗" }] }] },


{
  "id": 210000,
  "name": "辽宁省",
  "children": [{
    "id": 210100,
    "name": "沈阳市",
    "children": [{
      "id": 210102,
      "name": "和平区" },
    {
      "id": 210103,
      "name": "沈河区" },
    {
      "id": 210104,
      "name": "大东区" },
    {
      "id": 210105,
      "name": "皇姑区" },
    {
      "id": 210106,
      "name": "铁西区" },
    {
      "id": 210111,
      "name": "苏家屯区" },
    {
      "id": 210112,
      "name": "浑南区" },
    {
      "id": 210113,
      "name": "沈北新区" },
    {
      "id": 210114,
      "name": "于洪区" },
    {
      "id": 210115,
      "name": "辽中区" },
    {
      "id": 210123,
      "name": "康平县" },
    {
      "id": 210124,
      "name": "法库县" },
    {
      "id": 210181,
      "name": "新民市" }] },

  {
    "id": 210200,
    "name": "大连市",
    "children": [{
      "id": 210202,
      "name": "中山区" },
    {
      "id": 210203,
      "name": "西岗区" },
    {
      "id": 210204,
      "name": "沙河口区" },
    {
      "id": 210211,
      "name": "甘井子区" },
    {
      "id": 210212,
      "name": "旅顺口区" },
    {
      "id": 210213,
      "name": "金州区" },
    {
      "id": 210214,
      "name": "普兰店区" },
    {
      "id": 210224,
      "name": "长海县" },
    {
      "id": 210281,
      "name": "瓦房店市" },
    {
      "id": 210283,
      "name": "庄河市" }] },

  {
    "id": 210300,
    "name": "鞍山市",
    "children": [{
      "id": 210302,
      "name": "铁东区" },
    {
      "id": 210303,
      "name": "铁西区" },
    {
      "id": 210304,
      "name": "立山区" },
    {
      "id": 210311,
      "name": "千山区" },
    {
      "id": 210321,
      "name": "台安县" },
    {
      "id": 210323,
      "name": "岫岩满族自治县" },
    {
      "id": 210381,
      "name": "海城市" }] },

  {
    "id": 210400,
    "name": "抚顺市",
    "children": [{
      "id": 210402,
      "name": "新抚区" },
    {
      "id": 210403,
      "name": "东洲区" },
    {
      "id": 210404,
      "name": "望花区" },
    {
      "id": 210411,
      "name": "顺城区" },
    {
      "id": 210421,
      "name": "抚顺县" },
    {
      "id": 210422,
      "name": "新宾满族自治县" },
    {
      "id": 210423,
      "name": "清原满族自治县" }] },

  {
    "id": 210500,
    "name": "本溪市",
    "children": [{
      "id": 210502,
      "name": "平山区" },
    {
      "id": 210503,
      "name": "溪湖区" },
    {
      "id": 210504,
      "name": "明山区" },
    {
      "id": 210505,
      "name": "南芬区" },
    {
      "id": 210521,
      "name": "本溪满族自治县" },
    {
      "id": 210522,
      "name": "桓仁满族自治县" }] },

  {
    "id": 210600,
    "name": "丹东市",
    "children": [{
      "id": 210602,
      "name": "元宝区" },
    {
      "id": 210603,
      "name": "振兴区" },
    {
      "id": 210604,
      "name": "振安区" },
    {
      "id": 210624,
      "name": "宽甸满族自治县" },
    {
      "id": 210681,
      "name": "东港市" },
    {
      "id": 210682,
      "name": "凤城市" }] },

  {
    "id": 210700,
    "name": "锦州市",
    "children": [{
      "id": 210702,
      "name": "古塔区" },
    {
      "id": 210703,
      "name": "凌河区" },
    {
      "id": 210711,
      "name": "太和区" },
    {
      "id": 210726,
      "name": "黑山县" },
    {
      "id": 210727,
      "name": "义县" },
    {
      "id": 210781,
      "name": "凌海市" },
    {
      "id": 210782,
      "name": "北镇市" }] },

  {
    "id": 210800,
    "name": "营口市",
    "children": [{
      "id": 210802,
      "name": "站前区" },
    {
      "id": 210803,
      "name": "西市区" },
    {
      "id": 210804,
      "name": "鲅鱼圈区" },
    {
      "id": 210811,
      "name": "老边区" },
    {
      "id": 210881,
      "name": "盖州市" },
    {
      "id": 210882,
      "name": "大石桥市" }] },

  {
    "id": 210900,
    "name": "阜新市",
    "children": [{
      "id": 210902,
      "name": "海州区" },
    {
      "id": 210903,
      "name": "新邱区" },
    {
      "id": 210904,
      "name": "太平区" },
    {
      "id": 210905,
      "name": "清河门区" },
    {
      "id": 210911,
      "name": "细河区" },
    {
      "id": 210921,
      "name": "阜新蒙古族自治县" },
    {
      "id": 210922,
      "name": "彰武县" }] },

  {
    "id": 211000,
    "name": "辽阳市",
    "children": [{
      "id": 211002,
      "name": "白塔区" },
    {
      "id": 211003,
      "name": "文圣区" },
    {
      "id": 211004,
      "name": "宏伟区" },
    {
      "id": 211005,
      "name": "弓长岭区" },
    {
      "id": 211011,
      "name": "太子河区" },
    {
      "id": 211021,
      "name": "辽阳县" },
    {
      "id": 211081,
      "name": "灯塔市" }] },

  {
    "id": 211100,
    "name": "盘锦市",
    "children": [{
      "id": 211102,
      "name": "双台子区" },
    {
      "id": 211103,
      "name": "兴隆台区" },
    {
      "id": 211104,
      "name": "大洼区" },
    {
      "id": 211122,
      "name": "盘山县" }] },

  {
    "id": 211200,
    "name": "铁岭市",
    "children": [{
      "id": 211202,
      "name": "银州区" },
    {
      "id": 211204,
      "name": "清河区" },
    {
      "id": 211221,
      "name": "铁岭县" },
    {
      "id": 211223,
      "name": "西丰县" },
    {
      "id": 211224,
      "name": "昌图县" },
    {
      "id": 211281,
      "name": "调兵山市" },
    {
      "id": 211282,
      "name": "开原市" }] },

  {
    "id": 211300,
    "name": "朝阳市",
    "children": [{
      "id": 211302,
      "name": "双塔区" },
    {
      "id": 211303,
      "name": "龙城区" },
    {
      "id": 211321,
      "name": "朝阳县" },
    {
      "id": 211322,
      "name": "建平县" },
    {
      "id": 211324,
      "name": "喀喇沁左翼蒙古族自治县" },
    {
      "id": 211381,
      "name": "北票市" },
    {
      "id": 211382,
      "name": "凌源市" }] },

  {
    "id": 211400,
    "name": "葫芦岛市",
    "children": [{
      "id": 211402,
      "name": "连山区" },
    {
      "id": 211403,
      "name": "龙港区" },
    {
      "id": 211404,
      "name": "南票区" },
    {
      "id": 211421,
      "name": "绥中县" },
    {
      "id": 211422,
      "name": "建昌县" },
    {
      "id": 211481,
      "name": "兴城市" }] }] },


{
  "id": 220000,
  "name": "吉林省",
  "children": [{
    "id": 220100,
    "name": "长春市",
    "children": [{
      "id": 220102,
      "name": "南关区" },
    {
      "id": 220103,
      "name": "宽城区" },
    {
      "id": 220104,
      "name": "朝阳区" },
    {
      "id": 220105,
      "name": "二道区" },
    {
      "id": 220106,
      "name": "绿园区" },
    {
      "id": 220112,
      "name": "双阳区" },
    {
      "id": 220113,
      "name": "九台区" },
    {
      "id": 220122,
      "name": "农安县" },
    {
      "id": 220182,
      "name": "榆树市" },
    {
      "id": 220183,
      "name": "德惠市" }] },

  {
    "id": 220200,
    "name": "吉林市",
    "children": [{
      "id": 220202,
      "name": "昌邑区" },
    {
      "id": 220203,
      "name": "龙潭区" },
    {
      "id": 220204,
      "name": "船营区" },
    {
      "id": 220211,
      "name": "丰满区" },
    {
      "id": 220221,
      "name": "永吉县" },
    {
      "id": 220281,
      "name": "蛟河市" },
    {
      "id": 220282,
      "name": "桦甸市" },
    {
      "id": 220283,
      "name": "舒兰市" },
    {
      "id": 220284,
      "name": "磐石市" }] },

  {
    "id": 220300,
    "name": "四平市",
    "children": [{
      "id": 220302,
      "name": "铁西区" },
    {
      "id": 220303,
      "name": "铁东区" },
    {
      "id": 220322,
      "name": "梨树县" },
    {
      "id": 220323,
      "name": "伊通满族自治县" },
    {
      "id": 220381,
      "name": "公主岭市" },
    {
      "id": 220382,
      "name": "双辽市" }] },

  {
    "id": 220400,
    "name": "辽源市",
    "children": [{
      "id": 220402,
      "name": "龙山区" },
    {
      "id": 220403,
      "name": "西安区" },
    {
      "id": 220421,
      "name": "东丰县" },
    {
      "id": 220422,
      "name": "东辽县" }] },

  {
    "id": 220500,
    "name": "通化市",
    "children": [{
      "id": 220502,
      "name": "东昌区" },
    {
      "id": 220503,
      "name": "二道江区" },
    {
      "id": 220521,
      "name": "通化县" },
    {
      "id": 220523,
      "name": "辉南县" },
    {
      "id": 220524,
      "name": "柳河县" },
    {
      "id": 220581,
      "name": "梅河口市" },
    {
      "id": 220582,
      "name": "集安市" }] },

  {
    "id": 220600,
    "name": "白山市",
    "children": [{
      "id": 220602,
      "name": "浑江区" },
    {
      "id": 220605,
      "name": "江源区" },
    {
      "id": 220621,
      "name": "抚松县" },
    {
      "id": 220622,
      "name": "靖宇县" },
    {
      "id": 220623,
      "name": "长白朝鲜族自治县" },
    {
      "id": 220681,
      "name": "临江市" }] },

  {
    "id": 220700,
    "name": "松原市",
    "children": [{
      "id": 220702,
      "name": "宁江区" },
    {
      "id": 220721,
      "name": "前郭尔罗斯蒙古族自治县" },
    {
      "id": 220722,
      "name": "长岭县" },
    {
      "id": 220723,
      "name": "乾安县" },
    {
      "id": 220781,
      "name": "扶余市" }] },

  {
    "id": 220800,
    "name": "白城市",
    "children": [{
      "id": 220802,
      "name": "洮北区" },
    {
      "id": 220821,
      "name": "镇赉县" },
    {
      "id": 220822,
      "name": "通榆县" },
    {
      "id": 220881,
      "name": "洮南市" },
    {
      "id": 220882,
      "name": "大安市" }] },

  {
    "id": 222400,
    "name": "延边朝鲜族自治州",
    "children": [{
      "id": 222401,
      "name": "延吉市" },
    {
      "id": 222402,
      "name": "图们市" },
    {
      "id": 222403,
      "name": "敦化市" },
    {
      "id": 222404,
      "name": "珲春市" },
    {
      "id": 222405,
      "name": "龙井市" },
    {
      "id": 222406,
      "name": "和龙市" },
    {
      "id": 222424,
      "name": "汪清县" },
    {
      "id": 222426,
      "name": "安图县" }] }] },


{
  "id": 230000,
  "name": "黑龙江省",
  "children": [{
    "id": 230100,
    "name": "哈尔滨市",
    "children": [{
      "id": 230102,
      "name": "道里区" },
    {
      "id": 230103,
      "name": "南岗区" },
    {
      "id": 230104,
      "name": "道外区" },
    {
      "id": 230108,
      "name": "平房区" },
    {
      "id": 230109,
      "name": "松北区" },
    {
      "id": 230110,
      "name": "香坊区" },
    {
      "id": 230111,
      "name": "呼兰区" },
    {
      "id": 230112,
      "name": "阿城区" },
    {
      "id": 230113,
      "name": "双城区" },
    {
      "id": 230123,
      "name": "依兰县" },
    {
      "id": 230124,
      "name": "方正县" },
    {
      "id": 230125,
      "name": "宾县" },
    {
      "id": 230126,
      "name": "巴彦县" },
    {
      "id": 230127,
      "name": "木兰县" },
    {
      "id": 230128,
      "name": "通河县" },
    {
      "id": 230129,
      "name": "延寿县" },
    {
      "id": 230183,
      "name": "尚志市" },
    {
      "id": 230184,
      "name": "五常市" }] },

  {
    "id": 230200,
    "name": "齐齐哈尔市",
    "children": [{
      "id": 230202,
      "name": "龙沙区" },
    {
      "id": 230203,
      "name": "建华区" },
    {
      "id": 230204,
      "name": "铁锋区" },
    {
      "id": 230205,
      "name": "昂昂溪区" },
    {
      "id": 230206,
      "name": "富拉尔基区" },
    {
      "id": 230207,
      "name": "碾子山区" },
    {
      "id": 230208,
      "name": "梅里斯达斡尔族区" },
    {
      "id": 230221,
      "name": "龙江县" },
    {
      "id": 230223,
      "name": "依安县" },
    {
      "id": 230224,
      "name": "泰来县" },
    {
      "id": 230225,
      "name": "甘南县" },
    {
      "id": 230227,
      "name": "富裕县" },
    {
      "id": 230229,
      "name": "克山县" },
    {
      "id": 230230,
      "name": "克东县" },
    {
      "id": 230231,
      "name": "拜泉县" },
    {
      "id": 230281,
      "name": "讷河市" }] },

  {
    "id": 230300,
    "name": "鸡西市",
    "children": [{
      "id": 230302,
      "name": "鸡冠区" },
    {
      "id": 230303,
      "name": "恒山区" },
    {
      "id": 230304,
      "name": "滴道区" },
    {
      "id": 230305,
      "name": "梨树区" },
    {
      "id": 230306,
      "name": "城子河区" },
    {
      "id": 230307,
      "name": "麻山区" },
    {
      "id": 230321,
      "name": "鸡东县" },
    {
      "id": 230381,
      "name": "虎林市" },
    {
      "id": 230382,
      "name": "密山市" }] },

  {
    "id": 230400,
    "name": "鹤岗市",
    "children": [{
      "id": 230402,
      "name": "向阳区" },
    {
      "id": 230403,
      "name": "工农区" },
    {
      "id": 230404,
      "name": "南山区" },
    {
      "id": 230405,
      "name": "兴安区" },
    {
      "id": 230406,
      "name": "东山区" },
    {
      "id": 230407,
      "name": "兴山区" },
    {
      "id": 230421,
      "name": "萝北县" },
    {
      "id": 230422,
      "name": "绥滨县" }] },

  {
    "id": 230500,
    "name": "双鸭山市",
    "children": [{
      "id": 230502,
      "name": "尖山区" },
    {
      "id": 230503,
      "name": "岭东区" },
    {
      "id": 230505,
      "name": "四方台区" },
    {
      "id": 230506,
      "name": "宝山区" },
    {
      "id": 230521,
      "name": "集贤县" },
    {
      "id": 230522,
      "name": "友谊县" },
    {
      "id": 230523,
      "name": "宝清县" },
    {
      "id": 230524,
      "name": "饶河县" }] },

  {
    "id": 230600,
    "name": "大庆市",
    "children": [{
      "id": 230602,
      "name": "萨尔图区" },
    {
      "id": 230603,
      "name": "龙凤区" },
    {
      "id": 230604,
      "name": "让胡路区" },
    {
      "id": 230605,
      "name": "红岗区" },
    {
      "id": 230606,
      "name": "大同区" },
    {
      "id": 230621,
      "name": "肇州县" },
    {
      "id": 230622,
      "name": "肇源县" },
    {
      "id": 230623,
      "name": "林甸县" },
    {
      "id": 230624,
      "name": "杜尔伯特蒙古族自治县" }] },

  {
    "id": 230700,
    "name": "伊春市",
    "children": [{
      "id": 230702,
      "name": "伊春区" },
    {
      "id": 230703,
      "name": "南岔区" },
    {
      "id": 230704,
      "name": "友好区" },
    {
      "id": 230705,
      "name": "西林区" },
    {
      "id": 230706,
      "name": "翠峦区" },
    {
      "id": 230707,
      "name": "新青区" },
    {
      "id": 230708,
      "name": "美溪区" },
    {
      "id": 230709,
      "name": "金山屯区" },
    {
      "id": 230710,
      "name": "五营区" },
    {
      "id": 230711,
      "name": "乌马河区" },
    {
      "id": 230712,
      "name": "汤旺河区" },
    {
      "id": 230713,
      "name": "带岭区" },
    {
      "id": 230714,
      "name": "乌伊岭区" },
    {
      "id": 230715,
      "name": "红星区" },
    {
      "id": 230716,
      "name": "上甘岭区" },
    {
      "id": 230722,
      "name": "嘉荫县" },
    {
      "id": 230781,
      "name": "铁力市" }] },

  {
    "id": 230800,
    "name": "佳木斯市",
    "children": [{
      "id": 230803,
      "name": "向阳区" },
    {
      "id": 230804,
      "name": "前进区" },
    {
      "id": 230805,
      "name": "东风区" },
    {
      "id": 230811,
      "name": "郊区" },
    {
      "id": 230822,
      "name": "桦南县" },
    {
      "id": 230826,
      "name": "桦川县" },
    {
      "id": 230828,
      "name": "汤原县" },
    {
      "id": 230881,
      "name": "同江市" },
    {
      "id": 230882,
      "name": "富锦市" },
    {
      "id": 230883,
      "name": "抚远市" }] },

  {
    "id": 230900,
    "name": "七台河市",
    "children": [{
      "id": 230902,
      "name": "新兴区" },
    {
      "id": 230903,
      "name": "桃山区" },
    {
      "id": 230904,
      "name": "茄子河区" },
    {
      "id": 230921,
      "name": "勃利县" }] },

  {
    "id": 231000,
    "name": "牡丹江市",
    "children": [{
      "id": 231002,
      "name": "东安区" },
    {
      "id": 231003,
      "name": "阳明区" },
    {
      "id": 231004,
      "name": "爱民区" },
    {
      "id": 231005,
      "name": "西安区" },
    {
      "id": 231025,
      "name": "林口县" },
    {
      "id": 231081,
      "name": "绥芬河市" },
    {
      "id": 231083,
      "name": "海林市" },
    {
      "id": 231084,
      "name": "宁安市" },
    {
      "id": 231085,
      "name": "穆棱市" },
    {
      "id": 231086,
      "name": "东宁市" }] },

  {
    "id": 231100,
    "name": "黑河市",
    "children": [{
      "id": 231102,
      "name": "爱辉区" },
    {
      "id": 231121,
      "name": "嫩江县" },
    {
      "id": 231123,
      "name": "逊克县" },
    {
      "id": 231124,
      "name": "孙吴县" },
    {
      "id": 231181,
      "name": "北安市" },
    {
      "id": 231182,
      "name": "五大连池市" }] },

  {
    "id": 231200,
    "name": "绥化市",
    "children": [{
      "id": 231202,
      "name": "北林区" },
    {
      "id": 231221,
      "name": "望奎县" },
    {
      "id": 231222,
      "name": "兰西县" },
    {
      "id": 231223,
      "name": "青冈县" },
    {
      "id": 231224,
      "name": "庆安县" },
    {
      "id": 231225,
      "name": "明水县" },
    {
      "id": 231226,
      "name": "绥棱县" },
    {
      "id": 231281,
      "name": "安达市" },
    {
      "id": 231282,
      "name": "肇东市" },
    {
      "id": 231283,
      "name": "海伦市" }] },

  {
    "id": 232700,
    "name": "大兴安岭地区",
    "children": [{
      "id": 232701,
      "name": "漠河市" },
    {
      "id": 232721,
      "name": "呼玛县" },
    {
      "id": 232722,
      "name": "塔河县" }] }] },


{
  "id": 310000,
  "name": "上海市",
  "children": [{
    "id": 310100,
    "name": "上海市",
    "children": [{
      "id": 310101,
      "name": "黄浦区" },
    {
      "id": 310104,
      "name": "徐汇区" },
    {
      "id": 310105,
      "name": "长宁区" },
    {
      "id": 310106,
      "name": "静安区" },
    {
      "id": 310107,
      "name": "普陀区" },
    {
      "id": 310109,
      "name": "虹口区" },
    {
      "id": 310110,
      "name": "杨浦区" },
    {
      "id": 310112,
      "name": "闵行区" },
    {
      "id": 310113,
      "name": "宝山区" },
    {
      "id": 310114,
      "name": "嘉定区" },
    {
      "id": 310115,
      "name": "浦东新区" },
    {
      "id": 310116,
      "name": "金山区" },
    {
      "id": 310117,
      "name": "松江区" },
    {
      "id": 310118,
      "name": "青浦区" },
    {
      "id": 310120,
      "name": "奉贤区" },
    {
      "id": 310151,
      "name": "崇明区" }] }] },


{
  "id": 320000,
  "name": "江苏省",
  "children": [{
    "id": 320100,
    "name": "南京市",
    "children": [{
      "id": 320102,
      "name": "玄武区" },
    {
      "id": 320104,
      "name": "秦淮区" },
    {
      "id": 320105,
      "name": "建邺区" },
    {
      "id": 320106,
      "name": "鼓楼区" },
    {
      "id": 320111,
      "name": "浦口区" },
    {
      "id": 320113,
      "name": "栖霞区" },
    {
      "id": 320114,
      "name": "雨花台区" },
    {
      "id": 320115,
      "name": "江宁区" },
    {
      "id": 320116,
      "name": "六合区" },
    {
      "id": 320117,
      "name": "溧水区" },
    {
      "id": 320118,
      "name": "高淳区" }] },

  {
    "id": 320200,
    "name": "无锡市",
    "children": [{
      "id": 320205,
      "name": "锡山区" },
    {
      "id": 320206,
      "name": "惠山区" },
    {
      "id": 320211,
      "name": "滨湖区" },
    {
      "id": 320213,
      "name": "梁溪区" },
    {
      "id": 320214,
      "name": "新吴区" },
    {
      "id": 320281,
      "name": "江阴市" },
    {
      "id": 320282,
      "name": "宜兴市" }] },

  {
    "id": 320300,
    "name": "徐州市",
    "children": [{
      "id": 320302,
      "name": "鼓楼区" },
    {
      "id": 320303,
      "name": "云龙区" },
    {
      "id": 320305,
      "name": "贾汪区" },
    {
      "id": 320311,
      "name": "泉山区" },
    {
      "id": 320312,
      "name": "铜山区" },
    {
      "id": 320321,
      "name": "丰县" },
    {
      "id": 320322,
      "name": "沛县" },
    {
      "id": 320324,
      "name": "睢宁县" },
    {
      "id": 320381,
      "name": "新沂市" },
    {
      "id": 320382,
      "name": "邳州市" }] },

  {
    "id": 320400,
    "name": "常州市",
    "children": [{
      "id": 320402,
      "name": "天宁区" },
    {
      "id": 320404,
      "name": "钟楼区" },
    {
      "id": 320411,
      "name": "新北区" },
    {
      "id": 320412,
      "name": "武进区" },
    {
      "id": 320413,
      "name": "金坛区" },
    {
      "id": 320481,
      "name": "溧阳市" }] },

  {
    "id": 320500,
    "name": "苏州市",
    "children": [{
      "id": 320505,
      "name": "虎丘区" },
    {
      "id": 320506,
      "name": "吴中区" },
    {
      "id": 320507,
      "name": "相城区" },
    {
      "id": 320508,
      "name": "姑苏区" },
    {
      "id": 320509,
      "name": "吴江区" },
    {
      "id": 320581,
      "name": "常熟市" },
    {
      "id": 320582,
      "name": "张家港市" },
    {
      "id": 320583,
      "name": "昆山市" },
    {
      "id": 320585,
      "name": "太仓市" }] },

  {
    "id": 320600,
    "name": "南通市",
    "children": [{
      "id": 320602,
      "name": "崇川区" },
    {
      "id": 320611,
      "name": "港闸区" },
    {
      "id": 320612,
      "name": "通州区" },
    {
      "id": 320623,
      "name": "如东县" },
    {
      "id": 320681,
      "name": "启东市" },
    {
      "id": 320682,
      "name": "如皋市" },
    {
      "id": 320684,
      "name": "海门市" },
    {
      "id": 320685,
      "name": "海安市" }] },

  {
    "id": 320700,
    "name": "连云港市",
    "children": [{
      "id": 320703,
      "name": "连云区" },
    {
      "id": 320706,
      "name": "海州区" },
    {
      "id": 320707,
      "name": "赣榆区" },
    {
      "id": 320722,
      "name": "东海县" },
    {
      "id": 320723,
      "name": "灌云县" },
    {
      "id": 320724,
      "name": "灌南县" }] },

  {
    "id": 320800,
    "name": "淮安市",
    "children": [{
      "id": 320803,
      "name": "淮安区" },
    {
      "id": 320804,
      "name": "淮阴区" },
    {
      "id": 320812,
      "name": "清江浦区" },
    {
      "id": 320813,
      "name": "洪泽区" },
    {
      "id": 320826,
      "name": "涟水县" },
    {
      "id": 320830,
      "name": "盱眙县" },
    {
      "id": 320831,
      "name": "金湖县" }] },

  {
    "id": 320900,
    "name": "盐城市",
    "children": [{
      "id": 320902,
      "name": "亭湖区" },
    {
      "id": 320903,
      "name": "盐都区" },
    {
      "id": 320904,
      "name": "大丰区" },
    {
      "id": 320921,
      "name": "响水县" },
    {
      "id": 320922,
      "name": "滨海县" },
    {
      "id": 320923,
      "name": "阜宁县" },
    {
      "id": 320924,
      "name": "射阳县" },
    {
      "id": 320925,
      "name": "建湖县" },
    {
      "id": 320981,
      "name": "东台市" }] },

  {
    "id": 321000,
    "name": "扬州市",
    "children": [{
      "id": 321002,
      "name": "广陵区" },
    {
      "id": 321003,
      "name": "邗江区" },
    {
      "id": 321012,
      "name": "江都区" },
    {
      "id": 321023,
      "name": "宝应县" },
    {
      "id": 321081,
      "name": "仪征市" },
    {
      "id": 321084,
      "name": "高邮市" }] },

  {
    "id": 321100,
    "name": "镇江市",
    "children": [{
      "id": 321102,
      "name": "京口区" },
    {
      "id": 321111,
      "name": "润州区" },
    {
      "id": 321112,
      "name": "丹徒区" },
    {
      "id": 321181,
      "name": "丹阳市" },
    {
      "id": 321182,
      "name": "扬中市" },
    {
      "id": 321183,
      "name": "句容市" }] },

  {
    "id": 321200,
    "name": "泰州市",
    "children": [{
      "id": 321202,
      "name": "海陵区" },
    {
      "id": 321203,
      "name": "高港区" },
    {
      "id": 321204,
      "name": "姜堰区" },
    {
      "id": 321281,
      "name": "兴化市" },
    {
      "id": 321282,
      "name": "靖江市" },
    {
      "id": 321283,
      "name": "泰兴市" }] },

  {
    "id": 321300,
    "name": "宿迁市",
    "children": [{
      "id": 321302,
      "name": "宿城区" },
    {
      "id": 321311,
      "name": "宿豫区" },
    {
      "id": 321322,
      "name": "沭阳县" },
    {
      "id": 321323,
      "name": "泗阳县" },
    {
      "id": 321324,
      "name": "泗洪县" }] }] },


{
  "id": 330000,
  "name": "浙江省",
  "children": [{
    "id": 330100,
    "name": "杭州市",
    "children": [{
      "id": 330102,
      "name": "上城区" },
    {
      "id": 330103,
      "name": "下城区" },
    {
      "id": 330104,
      "name": "江干区" },
    {
      "id": 330105,
      "name": "拱墅区" },
    {
      "id": 330106,
      "name": "西湖区" },
    {
      "id": 330108,
      "name": "滨江区" },
    {
      "id": 330109,
      "name": "萧山区" },
    {
      "id": 330110,
      "name": "余杭区" },
    {
      "id": 330111,
      "name": "富阳区" },
    {
      "id": 330112,
      "name": "临安区" },
    {
      "id": 330122,
      "name": "桐庐县" },
    {
      "id": 330127,
      "name": "淳安县" },
    {
      "id": 330182,
      "name": "建德市" }] },

  {
    "id": 330200,
    "name": "宁波市",
    "children": [{
      "id": 330203,
      "name": "海曙区" },
    {
      "id": 330205,
      "name": "江北区" },
    {
      "id": 330206,
      "name": "北仑区" },
    {
      "id": 330211,
      "name": "镇海区" },
    {
      "id": 330212,
      "name": "鄞州区" },
    {
      "id": 330213,
      "name": "奉化区" },
    {
      "id": 330225,
      "name": "象山县" },
    {
      "id": 330226,
      "name": "宁海县" },
    {
      "id": 330281,
      "name": "余姚市" },
    {
      "id": 330282,
      "name": "慈溪市" }] },

  {
    "id": 330300,
    "name": "温州市",
    "children": [{
      "id": 330302,
      "name": "鹿城区" },
    {
      "id": 330303,
      "name": "龙湾区" },
    {
      "id": 330304,
      "name": "瓯海区" },
    {
      "id": 330305,
      "name": "洞头区" },
    {
      "id": 330324,
      "name": "永嘉县" },
    {
      "id": 330326,
      "name": "平阳县" },
    {
      "id": 330327,
      "name": "苍南县" },
    {
      "id": 330328,
      "name": "文成县" },
    {
      "id": 330329,
      "name": "泰顺县" },
    {
      "id": 330381,
      "name": "瑞安市" },
    {
      "id": 330382,
      "name": "乐清市" }] },

  {
    "id": 330400,
    "name": "嘉兴市",
    "children": [{
      "id": 330402,
      "name": "南湖区" },
    {
      "id": 330411,
      "name": "秀洲区" },
    {
      "id": 330421,
      "name": "嘉善县" },
    {
      "id": 330424,
      "name": "海盐县" },
    {
      "id": 330481,
      "name": "海宁市" },
    {
      "id": 330482,
      "name": "平湖市" },
    {
      "id": 330483,
      "name": "桐乡市" }] },

  {
    "id": 330500,
    "name": "湖州市",
    "children": [{
      "id": 330502,
      "name": "吴兴区" },
    {
      "id": 330503,
      "name": "南浔区" },
    {
      "id": 330521,
      "name": "德清县" },
    {
      "id": 330522,
      "name": "长兴县" },
    {
      "id": 330523,
      "name": "安吉县" }] },

  {
    "id": 330600,
    "name": "绍兴市",
    "children": [{
      "id": 330602,
      "name": "越城区" },
    {
      "id": 330603,
      "name": "柯桥区" },
    {
      "id": 330604,
      "name": "上虞区" },
    {
      "id": 330624,
      "name": "新昌县" },
    {
      "id": 330681,
      "name": "诸暨市" },
    {
      "id": 330683,
      "name": "嵊州市" }] },

  {
    "id": 330700,
    "name": "金华市",
    "children": [{
      "id": 330702,
      "name": "婺城区" },
    {
      "id": 330703,
      "name": "金东区" },
    {
      "id": 330723,
      "name": "武义县" },
    {
      "id": 330726,
      "name": "浦江县" },
    {
      "id": 330727,
      "name": "磐安县" },
    {
      "id": 330781,
      "name": "兰溪市" },
    {
      "id": 330782,
      "name": "义乌市" },
    {
      "id": 330783,
      "name": "东阳市" },
    {
      "id": 330784,
      "name": "永康市" }] },

  {
    "id": 330800,
    "name": "衢州市",
    "children": [{
      "id": 330802,
      "name": "柯城区" },
    {
      "id": 330803,
      "name": "衢江区" },
    {
      "id": 330822,
      "name": "常山县" },
    {
      "id": 330824,
      "name": "开化县" },
    {
      "id": 330825,
      "name": "龙游县" },
    {
      "id": 330881,
      "name": "江山市" }] },

  {
    "id": 330900,
    "name": "舟山市",
    "children": [{
      "id": 330902,
      "name": "定海区" },
    {
      "id": 330903,
      "name": "普陀区" },
    {
      "id": 330921,
      "name": "岱山县" },
    {
      "id": 330922,
      "name": "嵊泗县" }] },

  {
    "id": 331000,
    "name": "台州市",
    "children": [{
      "id": 331002,
      "name": "椒江区" },
    {
      "id": 331003,
      "name": "黄岩区" },
    {
      "id": 331004,
      "name": "路桥区" },
    {
      "id": 331022,
      "name": "三门县" },
    {
      "id": 331023,
      "name": "天台县" },
    {
      "id": 331024,
      "name": "仙居县" },
    {
      "id": 331081,
      "name": "温岭市" },
    {
      "id": 331082,
      "name": "临海市" },
    {
      "id": 331083,
      "name": "玉环市" }] },

  {
    "id": 331100,
    "name": "丽水市",
    "children": [{
      "id": 331102,
      "name": "莲都区" },
    {
      "id": 331121,
      "name": "青田县" },
    {
      "id": 331122,
      "name": "缙云县" },
    {
      "id": 331123,
      "name": "遂昌县" },
    {
      "id": 331124,
      "name": "松阳县" },
    {
      "id": 331125,
      "name": "云和县" },
    {
      "id": 331126,
      "name": "庆元县" },
    {
      "id": 331127,
      "name": "景宁畲族自治县" },
    {
      "id": 331181,
      "name": "龙泉市" }] }] },


{
  "id": 340000,
  "name": "安徽省",
  "children": [{
    "id": 340100,
    "name": "合肥市",
    "children": [{
      "id": 340102,
      "name": "瑶海区" },
    {
      "id": 340103,
      "name": "庐阳区" },
    {
      "id": 340104,
      "name": "蜀山区" },
    {
      "id": 340111,
      "name": "包河区" },
    {
      "id": 340121,
      "name": "长丰县" },
    {
      "id": 340122,
      "name": "肥东县" },
    {
      "id": 340123,
      "name": "肥西县" },
    {
      "id": 340124,
      "name": "庐江县" },
    {
      "id": 340181,
      "name": "巢湖市" }] },

  {
    "id": 340200,
    "name": "芜湖市",
    "children": [{
      "id": 340202,
      "name": "镜湖区" },
    {
      "id": 340203,
      "name": "弋江区" },
    {
      "id": 340207,
      "name": "鸠江区" },
    {
      "id": 340208,
      "name": "三山区" },
    {
      "id": 340221,
      "name": "芜湖县" },
    {
      "id": 340222,
      "name": "繁昌县" },
    {
      "id": 340223,
      "name": "南陵县" },
    {
      "id": 340225,
      "name": "无为县" }] },

  {
    "id": 340300,
    "name": "蚌埠市",
    "children": [{
      "id": 340302,
      "name": "龙子湖区" },
    {
      "id": 340303,
      "name": "蚌山区" },
    {
      "id": 340304,
      "name": "禹会区" },
    {
      "id": 340311,
      "name": "淮上区" },
    {
      "id": 340321,
      "name": "怀远县" },
    {
      "id": 340322,
      "name": "五河县" },
    {
      "id": 340323,
      "name": "固镇县" }] },

  {
    "id": 340400,
    "name": "淮南市",
    "children": [{
      "id": 340402,
      "name": "大通区" },
    {
      "id": 340403,
      "name": "田家庵区" },
    {
      "id": 340404,
      "name": "谢家集区" },
    {
      "id": 340405,
      "name": "八公山区" },
    {
      "id": 340406,
      "name": "潘集区" },
    {
      "id": 340421,
      "name": "凤台县" },
    {
      "id": 340422,
      "name": "寿县" }] },

  {
    "id": 340500,
    "name": "马鞍山市",
    "children": [{
      "id": 340503,
      "name": "花山区" },
    {
      "id": 340504,
      "name": "雨山区" },
    {
      "id": 340506,
      "name": "博望区" },
    {
      "id": 340521,
      "name": "当涂县" },
    {
      "id": 340522,
      "name": "含山县" },
    {
      "id": 340523,
      "name": "和县" }] },

  {
    "id": 340600,
    "name": "淮北市",
    "children": [{
      "id": 340602,
      "name": "杜集区" },
    {
      "id": 340603,
      "name": "相山区" },
    {
      "id": 340604,
      "name": "烈山区" },
    {
      "id": 340621,
      "name": "濉溪县" }] },

  {
    "id": 340700,
    "name": "铜陵市",
    "children": [{
      "id": 340705,
      "name": "铜官区" },
    {
      "id": 340706,
      "name": "义安区" },
    {
      "id": 340711,
      "name": "郊区" },
    {
      "id": 340722,
      "name": "枞阳县" }] },

  {
    "id": 340800,
    "name": "安庆市",
    "children": [{
      "id": 340802,
      "name": "迎江区" },
    {
      "id": 340803,
      "name": "大观区" },
    {
      "id": 340811,
      "name": "宜秀区" },
    {
      "id": 340822,
      "name": "怀宁县" },
    {
      "id": 340825,
      "name": "太湖县" },
    {
      "id": 340826,
      "name": "宿松县" },
    {
      "id": 340827,
      "name": "望江县" },
    {
      "id": 340828,
      "name": "岳西县" },
    {
      "id": 340881,
      "name": "桐城市" },
    {
      "id": 340882,
      "name": "潜山市" }] },

  {
    "id": 341000,
    "name": "黄山市",
    "children": [{
      "id": 341002,
      "name": "屯溪区" },
    {
      "id": 341003,
      "name": "黄山区" },
    {
      "id": 341004,
      "name": "徽州区" },
    {
      "id": 341021,
      "name": "歙县" },
    {
      "id": 341022,
      "name": "休宁县" },
    {
      "id": 341023,
      "name": "黟县" },
    {
      "id": 341024,
      "name": "祁门县" }] },

  {
    "id": 341100,
    "name": "滁州市",
    "children": [{
      "id": 341102,
      "name": "琅琊区" },
    {
      "id": 341103,
      "name": "南谯区" },
    {
      "id": 341122,
      "name": "来安县" },
    {
      "id": 341124,
      "name": "全椒县" },
    {
      "id": 341125,
      "name": "定远县" },
    {
      "id": 341126,
      "name": "凤阳县" },
    {
      "id": 341181,
      "name": "天长市" },
    {
      "id": 341182,
      "name": "明光市" }] },

  {
    "id": 341200,
    "name": "阜阳市",
    "children": [{
      "id": 341202,
      "name": "颍州区" },
    {
      "id": 341203,
      "name": "颍东区" },
    {
      "id": 341204,
      "name": "颍泉区" },
    {
      "id": 341221,
      "name": "临泉县" },
    {
      "id": 341222,
      "name": "太和县" },
    {
      "id": 341225,
      "name": "阜南县" },
    {
      "id": 341226,
      "name": "颍上县" },
    {
      "id": 341282,
      "name": "界首市" }] },

  {
    "id": 341300,
    "name": "宿州市",
    "children": [{
      "id": 341302,
      "name": "埇桥区" },
    {
      "id": 341321,
      "name": "砀山县" },
    {
      "id": 341322,
      "name": "萧县" },
    {
      "id": 341323,
      "name": "灵璧县" },
    {
      "id": 341324,
      "name": "泗县" }] },

  {
    "id": 341500,
    "name": "六安市",
    "children": [{
      "id": 341502,
      "name": "金安区" },
    {
      "id": 341503,
      "name": "裕安区" },
    {
      "id": 341504,
      "name": "叶集区" },
    {
      "id": 341522,
      "name": "霍邱县" },
    {
      "id": 341523,
      "name": "舒城县" },
    {
      "id": 341524,
      "name": "金寨县" },
    {
      "id": 341525,
      "name": "霍山县" }] },

  {
    "id": 341600,
    "name": "亳州市",
    "children": [{
      "id": 341602,
      "name": "谯城区" },
    {
      "id": 341621,
      "name": "涡阳县" },
    {
      "id": 341622,
      "name": "蒙城县" },
    {
      "id": 341623,
      "name": "利辛县" }] },

  {
    "id": 341700,
    "name": "池州市",
    "children": [{
      "id": 341702,
      "name": "贵池区" },
    {
      "id": 341721,
      "name": "东至县" },
    {
      "id": 341722,
      "name": "石台县" },
    {
      "id": 341723,
      "name": "青阳县" }] },

  {
    "id": 341800,
    "name": "宣城市",
    "children": [{
      "id": 341802,
      "name": "宣州区" },
    {
      "id": 341821,
      "name": "郎溪县" },
    {
      "id": 341822,
      "name": "广德县" },
    {
      "id": 341823,
      "name": "泾县" },
    {
      "id": 341824,
      "name": "绩溪县" },
    {
      "id": 341825,
      "name": "旌德县" },
    {
      "id": 341881,
      "name": "宁国市" }] }] },


{
  "id": 350000,
  "name": "福建省",
  "children": [{
    "id": 350100,
    "name": "福州市",
    "children": [{
      "id": 350102,
      "name": "鼓楼区" },
    {
      "id": 350103,
      "name": "台江区" },
    {
      "id": 350104,
      "name": "仓山区" },
    {
      "id": 350105,
      "name": "马尾区" },
    {
      "id": 350111,
      "name": "晋安区" },
    {
      "id": 350112,
      "name": "长乐区" },
    {
      "id": 350121,
      "name": "闽侯县" },
    {
      "id": 350122,
      "name": "连江县" },
    {
      "id": 350123,
      "name": "罗源县" },
    {
      "id": 350124,
      "name": "闽清县" },
    {
      "id": 350125,
      "name": "永泰县" },
    {
      "id": 350128,
      "name": "平潭县" },
    {
      "id": 350181,
      "name": "福清市" }] },

  {
    "id": 350200,
    "name": "厦门市",
    "children": [{
      "id": 350203,
      "name": "思明区" },
    {
      "id": 350205,
      "name": "海沧区" },
    {
      "id": 350206,
      "name": "湖里区" },
    {
      "id": 350211,
      "name": "集美区" },
    {
      "id": 350212,
      "name": "同安区" },
    {
      "id": 350213,
      "name": "翔安区" }] },

  {
    "id": 350300,
    "name": "莆田市",
    "children": [{
      "id": 350302,
      "name": "城厢区" },
    {
      "id": 350303,
      "name": "涵江区" },
    {
      "id": 350304,
      "name": "荔城区" },
    {
      "id": 350305,
      "name": "秀屿区" },
    {
      "id": 350322,
      "name": "仙游县" }] },

  {
    "id": 350400,
    "name": "三明市",
    "children": [{
      "id": 350402,
      "name": "梅列区" },
    {
      "id": 350403,
      "name": "三元区" },
    {
      "id": 350421,
      "name": "明溪县" },
    {
      "id": 350423,
      "name": "清流县" },
    {
      "id": 350424,
      "name": "宁化县" },
    {
      "id": 350425,
      "name": "大田县" },
    {
      "id": 350426,
      "name": "尤溪县" },
    {
      "id": 350427,
      "name": "沙县" },
    {
      "id": 350428,
      "name": "将乐县" },
    {
      "id": 350429,
      "name": "泰宁县" },
    {
      "id": 350430,
      "name": "建宁县" },
    {
      "id": 350481,
      "name": "永安市" }] },

  {
    "id": 350500,
    "name": "泉州市",
    "children": [{
      "id": 350502,
      "name": "鲤城区" },
    {
      "id": 350503,
      "name": "丰泽区" },
    {
      "id": 350504,
      "name": "洛江区" },
    {
      "id": 350505,
      "name": "泉港区" },
    {
      "id": 350521,
      "name": "惠安县" },
    {
      "id": 350524,
      "name": "安溪县" },
    {
      "id": 350525,
      "name": "永春县" },
    {
      "id": 350526,
      "name": "德化县" },
    {
      "id": 350527,
      "name": "金门县" },
    {
      "id": 350581,
      "name": "石狮市" },
    {
      "id": 350582,
      "name": "晋江市" },
    {
      "id": 350583,
      "name": "南安市" }] },

  {
    "id": 350600,
    "name": "漳州市",
    "children": [{
      "id": 350602,
      "name": "芗城区" },
    {
      "id": 350603,
      "name": "龙文区" },
    {
      "id": 350622,
      "name": "云霄县" },
    {
      "id": 350623,
      "name": "漳浦县" },
    {
      "id": 350624,
      "name": "诏安县" },
    {
      "id": 350625,
      "name": "长泰县" },
    {
      "id": 350626,
      "name": "东山县" },
    {
      "id": 350627,
      "name": "南靖县" },
    {
      "id": 350628,
      "name": "平和县" },
    {
      "id": 350629,
      "name": "华安县" },
    {
      "id": 350681,
      "name": "龙海市" }] },

  {
    "id": 350700,
    "name": "南平市",
    "children": [{
      "id": 350702,
      "name": "延平区" },
    {
      "id": 350703,
      "name": "建阳区" },
    {
      "id": 350721,
      "name": "顺昌县" },
    {
      "id": 350722,
      "name": "浦城县" },
    {
      "id": 350723,
      "name": "光泽县" },
    {
      "id": 350724,
      "name": "松溪县" },
    {
      "id": 350725,
      "name": "政和县" },
    {
      "id": 350781,
      "name": "邵武市" },
    {
      "id": 350782,
      "name": "武夷山市" },
    {
      "id": 350783,
      "name": "建瓯市" }] },

  {
    "id": 350800,
    "name": "龙岩市",
    "children": [{
      "id": 350802,
      "name": "新罗区" },
    {
      "id": 350803,
      "name": "永定区" },
    {
      "id": 350821,
      "name": "长汀县" },
    {
      "id": 350823,
      "name": "上杭县" },
    {
      "id": 350824,
      "name": "武平县" },
    {
      "id": 350825,
      "name": "连城县" },
    {
      "id": 350881,
      "name": "漳平市" }] },

  {
    "id": 350900,
    "name": "宁德市",
    "children": [{
      "id": 350902,
      "name": "蕉城区" },
    {
      "id": 350921,
      "name": "霞浦县" },
    {
      "id": 350922,
      "name": "古田县" },
    {
      "id": 350923,
      "name": "屏南县" },
    {
      "id": 350924,
      "name": "寿宁县" },
    {
      "id": 350925,
      "name": "周宁县" },
    {
      "id": 350926,
      "name": "柘荣县" },
    {
      "id": 350981,
      "name": "福安市" },
    {
      "id": 350982,
      "name": "福鼎市" }] }] },


{
  "id": 360000,
  "name": "江西省",
  "children": [{
    "id": 360100,
    "name": "南昌市",
    "children": [{
      "id": 360102,
      "name": "东湖区" },
    {
      "id": 360103,
      "name": "西湖区" },
    {
      "id": 360104,
      "name": "青云谱区" },
    {
      "id": 360105,
      "name": "湾里区" },
    {
      "id": 360111,
      "name": "青山湖区" },
    {
      "id": 360112,
      "name": "新建区" },
    {
      "id": 360121,
      "name": "南昌县" },
    {
      "id": 360123,
      "name": "安义县" },
    {
      "id": 360124,
      "name": "进贤县" }] },

  {
    "id": 360200,
    "name": "景德镇市",
    "children": [{
      "id": 360202,
      "name": "昌江区" },
    {
      "id": 360203,
      "name": "珠山区" },
    {
      "id": 360222,
      "name": "浮梁县" },
    {
      "id": 360281,
      "name": "乐平市" }] },

  {
    "id": 360300,
    "name": "萍乡市",
    "children": [{
      "id": 360302,
      "name": "安源区" },
    {
      "id": 360313,
      "name": "湘东区" },
    {
      "id": 360321,
      "name": "莲花县" },
    {
      "id": 360322,
      "name": "上栗县" },
    {
      "id": 360323,
      "name": "芦溪县" }] },

  {
    "id": 360400,
    "name": "九江市",
    "children": [{
      "id": 360402,
      "name": "濂溪区" },
    {
      "id": 360403,
      "name": "浔阳区" },
    {
      "id": 360404,
      "name": "柴桑区" },
    {
      "id": 360423,
      "name": "武宁县" },
    {
      "id": 360424,
      "name": "修水县" },
    {
      "id": 360425,
      "name": "永修县" },
    {
      "id": 360426,
      "name": "德安县" },
    {
      "id": 360428,
      "name": "都昌县" },
    {
      "id": 360429,
      "name": "湖口县" },
    {
      "id": 360430,
      "name": "彭泽县" },
    {
      "id": 360481,
      "name": "瑞昌市" },
    {
      "id": 360482,
      "name": "共青城市" },
    {
      "id": 360483,
      "name": "庐山市" }] },

  {
    "id": 360500,
    "name": "新余市",
    "children": [{
      "id": 360502,
      "name": "渝水区" },
    {
      "id": 360521,
      "name": "分宜县" }] },

  {
    "id": 360600,
    "name": "鹰潭市",
    "children": [{
      "id": 360602,
      "name": "月湖区" },
    {
      "id": 360603,
      "name": "余江区" },
    {
      "id": 360681,
      "name": "贵溪市" }] },

  {
    "id": 360700,
    "name": "赣州市",
    "children": [{
      "id": 360702,
      "name": "章贡区" },
    {
      "id": 360703,
      "name": "南康区" },
    {
      "id": 360704,
      "name": "赣县区" },
    {
      "id": 360722,
      "name": "信丰县" },
    {
      "id": 360723,
      "name": "大余县" },
    {
      "id": 360724,
      "name": "上犹县" },
    {
      "id": 360725,
      "name": "崇义县" },
    {
      "id": 360726,
      "name": "安远县" },
    {
      "id": 360727,
      "name": "龙南县" },
    {
      "id": 360728,
      "name": "定南县" },
    {
      "id": 360729,
      "name": "全南县" },
    {
      "id": 360730,
      "name": "宁都县" },
    {
      "id": 360731,
      "name": "于都县" },
    {
      "id": 360732,
      "name": "兴国县" },
    {
      "id": 360733,
      "name": "会昌县" },
    {
      "id": 360734,
      "name": "寻乌县" },
    {
      "id": 360735,
      "name": "石城县" },
    {
      "id": 360781,
      "name": "瑞金市" }] },

  {
    "id": 360800,
    "name": "吉安市",
    "children": [{
      "id": 360802,
      "name": "吉州区" },
    {
      "id": 360803,
      "name": "青原区" },
    {
      "id": 360821,
      "name": "吉安县" },
    {
      "id": 360822,
      "name": "吉水县" },
    {
      "id": 360823,
      "name": "峡江县" },
    {
      "id": 360824,
      "name": "新干县" },
    {
      "id": 360825,
      "name": "永丰县" },
    {
      "id": 360826,
      "name": "泰和县" },
    {
      "id": 360827,
      "name": "遂川县" },
    {
      "id": 360828,
      "name": "万安县" },
    {
      "id": 360829,
      "name": "安福县" },
    {
      "id": 360830,
      "name": "永新县" },
    {
      "id": 360881,
      "name": "井冈山市" }] },

  {
    "id": 360900,
    "name": "宜春市",
    "children": [{
      "id": 360902,
      "name": "袁州区" },
    {
      "id": 360921,
      "name": "奉新县" },
    {
      "id": 360922,
      "name": "万载县" },
    {
      "id": 360923,
      "name": "上高县" },
    {
      "id": 360924,
      "name": "宜丰县" },
    {
      "id": 360925,
      "name": "靖安县" },
    {
      "id": 360926,
      "name": "铜鼓县" },
    {
      "id": 360981,
      "name": "丰城市" },
    {
      "id": 360982,
      "name": "樟树市" },
    {
      "id": 360983,
      "name": "高安市" }] },

  {
    "id": 361000,
    "name": "抚州市",
    "children": [{
      "id": 361002,
      "name": "临川区" },
    {
      "id": 361003,
      "name": "东乡区" },
    {
      "id": 361021,
      "name": "南城县" },
    {
      "id": 361022,
      "name": "黎川县" },
    {
      "id": 361023,
      "name": "南丰县" },
    {
      "id": 361024,
      "name": "崇仁县" },
    {
      "id": 361025,
      "name": "乐安县" },
    {
      "id": 361026,
      "name": "宜黄县" },
    {
      "id": 361027,
      "name": "金溪县" },
    {
      "id": 361028,
      "name": "资溪县" },
    {
      "id": 361030,
      "name": "广昌县" }] },

  {
    "id": 361100,
    "name": "上饶市",
    "children": [{
      "id": 361102,
      "name": "信州区" },
    {
      "id": 361103,
      "name": "广丰区" },
    {
      "id": 361121,
      "name": "上饶县" },
    {
      "id": 361123,
      "name": "玉山县" },
    {
      "id": 361124,
      "name": "铅山县" },
    {
      "id": 361125,
      "name": "横峰县" },
    {
      "id": 361126,
      "name": "弋阳县" },
    {
      "id": 361127,
      "name": "余干县" },
    {
      "id": 361128,
      "name": "鄱阳县" },
    {
      "id": 361129,
      "name": "万年县" },
    {
      "id": 361130,
      "name": "婺源县" },
    {
      "id": 361181,
      "name": "德兴市" }] }] },


{
  "id": 370000,
  "name": "山东省",
  "children": [{
    "id": 370100,
    "name": "济南市",
    "children": [{
      "id": 370102,
      "name": "历下区" },
    {
      "id": 370103,
      "name": "市中区" },
    {
      "id": 370104,
      "name": "槐荫区" },
    {
      "id": 370105,
      "name": "天桥区" },
    {
      "id": 370112,
      "name": "历城区" },
    {
      "id": 370113,
      "name": "长清区" },
    {
      "id": 370114,
      "name": "章丘区" },
    {
      "id": 370115,
      "name": "济阳区" },
    {
      "id": 370116,
      "name": "莱芜区" },
    {
      "id": 370117,
      "name": "钢城区" },
    {
      "id": 370124,
      "name": "平阴县" },
    {
      "id": 370126,
      "name": "商河县" }] },

  {
    "id": 370200,
    "name": "青岛市",
    "children": [{
      "id": 370202,
      "name": "市南区" },
    {
      "id": 370203,
      "name": "市北区" },
    {
      "id": 370211,
      "name": "黄岛区" },
    {
      "id": 370212,
      "name": "崂山区" },
    {
      "id": 370213,
      "name": "李沧区" },
    {
      "id": 370214,
      "name": "城阳区" },
    {
      "id": 370215,
      "name": "即墨区" },
    {
      "id": 370281,
      "name": "胶州市" },
    {
      "id": 370283,
      "name": "平度市" },
    {
      "id": 370285,
      "name": "莱西市" }] },

  {
    "id": 370300,
    "name": "淄博市",
    "children": [{
      "id": 370302,
      "name": "淄川区" },
    {
      "id": 370303,
      "name": "张店区" },
    {
      "id": 370304,
      "name": "博山区" },
    {
      "id": 370305,
      "name": "临淄区" },
    {
      "id": 370306,
      "name": "周村区" },
    {
      "id": 370321,
      "name": "桓台县" },
    {
      "id": 370322,
      "name": "高青县" },
    {
      "id": 370323,
      "name": "沂源县" }] },

  {
    "id": 370400,
    "name": "枣庄市",
    "children": [{
      "id": 370402,
      "name": "市中区" },
    {
      "id": 370403,
      "name": "薛城区" },
    {
      "id": 370404,
      "name": "峄城区" },
    {
      "id": 370405,
      "name": "台儿庄区" },
    {
      "id": 370406,
      "name": "山亭区" },
    {
      "id": 370481,
      "name": "滕州市" }] },

  {
    "id": 370500,
    "name": "东营市",
    "children": [{
      "id": 370502,
      "name": "东营区" },
    {
      "id": 370503,
      "name": "河口区" },
    {
      "id": 370505,
      "name": "垦利区" },
    {
      "id": 370522,
      "name": "利津县" },
    {
      "id": 370523,
      "name": "广饶县" }] },

  {
    "id": 370600,
    "name": "烟台市",
    "children": [{
      "id": 370602,
      "name": "芝罘区" },
    {
      "id": 370611,
      "name": "福山区" },
    {
      "id": 370612,
      "name": "牟平区" },
    {
      "id": 370613,
      "name": "莱山区" },
    {
      "id": 370634,
      "name": "长岛县" },
    {
      "id": 370681,
      "name": "龙口市" },
    {
      "id": 370682,
      "name": "莱阳市" },
    {
      "id": 370683,
      "name": "莱州市" },
    {
      "id": 370684,
      "name": "蓬莱市" },
    {
      "id": 370685,
      "name": "招远市" },
    {
      "id": 370686,
      "name": "栖霞市" },
    {
      "id": 370687,
      "name": "海阳市" }] },

  {
    "id": 370700,
    "name": "潍坊市",
    "children": [{
      "id": 370702,
      "name": "潍城区" },
    {
      "id": 370703,
      "name": "寒亭区" },
    {
      "id": 370704,
      "name": "坊子区" },
    {
      "id": 370705,
      "name": "奎文区" },
    {
      "id": 370724,
      "name": "临朐县" },
    {
      "id": 370725,
      "name": "昌乐县" },
    {
      "id": 370781,
      "name": "青州市" },
    {
      "id": 370782,
      "name": "诸城市" },
    {
      "id": 370783,
      "name": "寿光市" },
    {
      "id": 370784,
      "name": "安丘市" },
    {
      "id": 370785,
      "name": "高密市" },
    {
      "id": 370786,
      "name": "昌邑市" }] },

  {
    "id": 370800,
    "name": "济宁市",
    "children": [{
      "id": 370811,
      "name": "任城区" },
    {
      "id": 370812,
      "name": "兖州区" },
    {
      "id": 370826,
      "name": "微山县" },
    {
      "id": 370827,
      "name": "鱼台县" },
    {
      "id": 370828,
      "name": "金乡县" },
    {
      "id": 370829,
      "name": "嘉祥县" },
    {
      "id": 370830,
      "name": "汶上县" },
    {
      "id": 370831,
      "name": "泗水县" },
    {
      "id": 370832,
      "name": "梁山县" },
    {
      "id": 370881,
      "name": "曲阜市" },
    {
      "id": 370883,
      "name": "邹城市" }] },

  {
    "id": 370900,
    "name": "泰安市",
    "children": [{
      "id": 370902,
      "name": "泰山区" },
    {
      "id": 370911,
      "name": "岱岳区" },
    {
      "id": 370921,
      "name": "宁阳县" },
    {
      "id": 370923,
      "name": "东平县" },
    {
      "id": 370982,
      "name": "新泰市" },
    {
      "id": 370983,
      "name": "肥城市" }] },

  {
    "id": 371000,
    "name": "威海市",
    "children": [{
      "id": 371002,
      "name": "环翠区" },
    {
      "id": 371003,
      "name": "文登区" },
    {
      "id": 371082,
      "name": "荣成市" },
    {
      "id": 371083,
      "name": "乳山市" }] },

  {
    "id": 371100,
    "name": "日照市",
    "children": [{
      "id": 371102,
      "name": "东港区" },
    {
      "id": 371103,
      "name": "岚山区" },
    {
      "id": 371121,
      "name": "五莲县" },
    {
      "id": 371122,
      "name": "莒县" }] },

  {
    "id": 371300,
    "name": "临沂市",
    "children": [{
      "id": 371302,
      "name": "兰山区" },
    {
      "id": 371311,
      "name": "罗庄区" },
    {
      "id": 371312,
      "name": "河东区" },
    {
      "id": 371321,
      "name": "沂南县" },
    {
      "id": 371322,
      "name": "郯城县" },
    {
      "id": 371323,
      "name": "沂水县" },
    {
      "id": 371324,
      "name": "兰陵县" },
    {
      "id": 371325,
      "name": "费县" },
    {
      "id": 371326,
      "name": "平邑县" },
    {
      "id": 371327,
      "name": "莒南县" },
    {
      "id": 371328,
      "name": "蒙阴县" },
    {
      "id": 371329,
      "name": "临沭县" }] },

  {
    "id": 371400,
    "name": "德州市",
    "children": [{
      "id": 371402,
      "name": "德城区" },
    {
      "id": 371403,
      "name": "陵城区" },
    {
      "id": 371422,
      "name": "宁津县" },
    {
      "id": 371423,
      "name": "庆云县" },
    {
      "id": 371424,
      "name": "临邑县" },
    {
      "id": 371425,
      "name": "齐河县" },
    {
      "id": 371426,
      "name": "平原县" },
    {
      "id": 371427,
      "name": "夏津县" },
    {
      "id": 371428,
      "name": "武城县" },
    {
      "id": 371481,
      "name": "乐陵市" },
    {
      "id": 371482,
      "name": "禹城市" }] },

  {
    "id": 371500,
    "name": "聊城市",
    "children": [{
      "id": 371502,
      "name": "东昌府区" },
    {
      "id": 371521,
      "name": "阳谷县" },
    {
      "id": 371522,
      "name": "莘县" },
    {
      "id": 371523,
      "name": "茌平县" },
    {
      "id": 371524,
      "name": "东阿县" },
    {
      "id": 371525,
      "name": "冠县" },
    {
      "id": 371526,
      "name": "高唐县" },
    {
      "id": 371581,
      "name": "临清市" }] },

  {
    "id": 371600,
    "name": "滨州市",
    "children": [{
      "id": 371602,
      "name": "滨城区" },
    {
      "id": 371603,
      "name": "沾化区" },
    {
      "id": 371621,
      "name": "惠民县" },
    {
      "id": 371622,
      "name": "阳信县" },
    {
      "id": 371623,
      "name": "无棣县" },
    {
      "id": 371625,
      "name": "博兴县" },
    {
      "id": 371681,
      "name": "邹平市" }] },

  {
    "id": 371700,
    "name": "菏泽市",
    "children": [{
      "id": 371702,
      "name": "牡丹区" },
    {
      "id": 371703,
      "name": "定陶区" },
    {
      "id": 371721,
      "name": "曹县" },
    {
      "id": 371722,
      "name": "单县" },
    {
      "id": 371723,
      "name": "成武县" },
    {
      "id": 371724,
      "name": "巨野县" },
    {
      "id": 371725,
      "name": "郓城县" },
    {
      "id": 371726,
      "name": "鄄城县" },
    {
      "id": 371728,
      "name": "东明县" }] }] },


{
  "id": 410000,
  "name": "河南省",
  "children": [{
    "id": 410100,
    "name": "郑州市",
    "children": [{
      "id": 410102,
      "name": "中原区" },
    {
      "id": 410103,
      "name": "二七区" },
    {
      "id": 410104,
      "name": "管城回族区" },
    {
      "id": 410105,
      "name": "金水区" },
    {
      "id": 410106,
      "name": "上街区" },
    {
      "id": 410108,
      "name": "惠济区" },
    {
      "id": 410122,
      "name": "中牟县" },
    {
      "id": 410181,
      "name": "巩义市" },
    {
      "id": 410182,
      "name": "荥阳市" },
    {
      "id": 410183,
      "name": "新密市" },
    {
      "id": 410184,
      "name": "新郑市" },
    {
      "id": 410185,
      "name": "登封市" }] },

  {
    "id": 410200,
    "name": "开封市",
    "children": [{
      "id": 410202,
      "name": "龙亭区" },
    {
      "id": 410203,
      "name": "顺河回族区" },
    {
      "id": 410204,
      "name": "鼓楼区" },
    {
      "id": 410205,
      "name": "禹王台区" },
    {
      "id": 410212,
      "name": "祥符区" },
    {
      "id": 410221,
      "name": "杞县" },
    {
      "id": 410222,
      "name": "通许县" },
    {
      "id": 410223,
      "name": "尉氏县" },
    {
      "id": 410225,
      "name": "兰考县" }] },

  {
    "id": 410300,
    "name": "洛阳市",
    "children": [{
      "id": 410302,
      "name": "老城区" },
    {
      "id": 410303,
      "name": "西工区" },
    {
      "id": 410304,
      "name": "瀍河回族区" },
    {
      "id": 410305,
      "name": "涧西区" },
    {
      "id": 410306,
      "name": "吉利区" },
    {
      "id": 410311,
      "name": "洛龙区" },
    {
      "id": 410322,
      "name": "孟津县" },
    {
      "id": 410323,
      "name": "新安县" },
    {
      "id": 410324,
      "name": "栾川县" },
    {
      "id": 410325,
      "name": "嵩县" },
    {
      "id": 410326,
      "name": "汝阳县" },
    {
      "id": 410327,
      "name": "宜阳县" },
    {
      "id": 410328,
      "name": "洛宁县" },
    {
      "id": 410329,
      "name": "伊川县" },
    {
      "id": 410381,
      "name": "偃师市" }] },

  {
    "id": 410400,
    "name": "平顶山市",
    "children": [{
      "id": 410402,
      "name": "新华区" },
    {
      "id": 410403,
      "name": "卫东区" },
    {
      "id": 410404,
      "name": "石龙区" },
    {
      "id": 410411,
      "name": "湛河区" },
    {
      "id": 410421,
      "name": "宝丰县" },
    {
      "id": 410422,
      "name": "叶县" },
    {
      "id": 410423,
      "name": "鲁山县" },
    {
      "id": 410425,
      "name": "郏县" },
    {
      "id": 410481,
      "name": "舞钢市" },
    {
      "id": 410482,
      "name": "汝州市" }] },

  {
    "id": 410500,
    "name": "安阳市",
    "children": [{
      "id": 410502,
      "name": "文峰区" },
    {
      "id": 410503,
      "name": "北关区" },
    {
      "id": 410505,
      "name": "殷都区" },
    {
      "id": 410506,
      "name": "龙安区" },
    {
      "id": 410522,
      "name": "安阳县" },
    {
      "id": 410523,
      "name": "汤阴县" },
    {
      "id": 410526,
      "name": "滑县" },
    {
      "id": 410527,
      "name": "内黄县" },
    {
      "id": 410581,
      "name": "林州市" }] },

  {
    "id": 410600,
    "name": "鹤壁市",
    "children": [{
      "id": 410602,
      "name": "鹤山区" },
    {
      "id": 410603,
      "name": "山城区" },
    {
      "id": 410611,
      "name": "淇滨区" },
    {
      "id": 410621,
      "name": "浚县" },
    {
      "id": 410622,
      "name": "淇县" }] },

  {
    "id": 410700,
    "name": "新乡市",
    "children": [{
      "id": 410702,
      "name": "红旗区" },
    {
      "id": 410703,
      "name": "卫滨区" },
    {
      "id": 410704,
      "name": "凤泉区" },
    {
      "id": 410711,
      "name": "牧野区" },
    {
      "id": 410721,
      "name": "新乡县" },
    {
      "id": 410724,
      "name": "获嘉县" },
    {
      "id": 410725,
      "name": "原阳县" },
    {
      "id": 410726,
      "name": "延津县" },
    {
      "id": 410727,
      "name": "封丘县" },
    {
      "id": 410728,
      "name": "长垣县" },
    {
      "id": 410781,
      "name": "卫辉市" },
    {
      "id": 410782,
      "name": "辉县市" }] },

  {
    "id": 410800,
    "name": "焦作市",
    "children": [{
      "id": 410802,
      "name": "解放区" },
    {
      "id": 410803,
      "name": "中站区" },
    {
      "id": 410804,
      "name": "马村区" },
    {
      "id": 410811,
      "name": "山阳区" },
    {
      "id": 410821,
      "name": "修武县" },
    {
      "id": 410822,
      "name": "博爱县" },
    {
      "id": 410823,
      "name": "武陟县" },
    {
      "id": 410825,
      "name": "温县" },
    {
      "id": 410882,
      "name": "沁阳市" },
    {
      "id": 410883,
      "name": "孟州市" }] },

  {
    "id": 410900,
    "name": "濮阳市",
    "children": [{
      "id": 410902,
      "name": "华龙区" },
    {
      "id": 410922,
      "name": "清丰县" },
    {
      "id": 410923,
      "name": "南乐县" },
    {
      "id": 410926,
      "name": "范县" },
    {
      "id": 410927,
      "name": "台前县" },
    {
      "id": 410928,
      "name": "濮阳县" }] },

  {
    "id": 411000,
    "name": "许昌市",
    "children": [{
      "id": 411002,
      "name": "魏都区" },
    {
      "id": 411003,
      "name": "建安区" },
    {
      "id": 411024,
      "name": "鄢陵县" },
    {
      "id": 411025,
      "name": "襄城县" },
    {
      "id": 411081,
      "name": "禹州市" },
    {
      "id": 411082,
      "name": "长葛市" }] },

  {
    "id": 411100,
    "name": "漯河市",
    "children": [{
      "id": 411102,
      "name": "源汇区" },
    {
      "id": 411103,
      "name": "郾城区" },
    {
      "id": 411104,
      "name": "召陵区" },
    {
      "id": 411121,
      "name": "舞阳县" },
    {
      "id": 411122,
      "name": "临颍县" }] },

  {
    "id": 411200,
    "name": "三门峡市",
    "children": [{
      "id": 411202,
      "name": "湖滨区" },
    {
      "id": 411203,
      "name": "陕州区" },
    {
      "id": 411221,
      "name": "渑池县" },
    {
      "id": 411224,
      "name": "卢氏县" },
    {
      "id": 411281,
      "name": "义马市" },
    {
      "id": 411282,
      "name": "灵宝市" }] },

  {
    "id": 411300,
    "name": "南阳市",
    "children": [{
      "id": 411302,
      "name": "宛城区" },
    {
      "id": 411303,
      "name": "卧龙区" },
    {
      "id": 411321,
      "name": "南召县" },
    {
      "id": 411322,
      "name": "方城县" },
    {
      "id": 411323,
      "name": "西峡县" },
    {
      "id": 411324,
      "name": "镇平县" },
    {
      "id": 411325,
      "name": "内乡县" },
    {
      "id": 411326,
      "name": "淅川县" },
    {
      "id": 411327,
      "name": "社旗县" },
    {
      "id": 411328,
      "name": "唐河县" },
    {
      "id": 411329,
      "name": "新野县" },
    {
      "id": 411330,
      "name": "桐柏县" },
    {
      "id": 411381,
      "name": "邓州市" }] },

  {
    "id": 411400,
    "name": "商丘市",
    "children": [{
      "id": 411402,
      "name": "梁园区" },
    {
      "id": 411403,
      "name": "睢阳区" },
    {
      "id": 411421,
      "name": "民权县" },
    {
      "id": 411422,
      "name": "睢县" },
    {
      "id": 411423,
      "name": "宁陵县" },
    {
      "id": 411424,
      "name": "柘城县" },
    {
      "id": 411425,
      "name": "虞城县" },
    {
      "id": 411426,
      "name": "夏邑县" },
    {
      "id": 411481,
      "name": "永城市" }] },

  {
    "id": 411500,
    "name": "信阳市",
    "children": [{
      "id": 411502,
      "name": "浉河区" },
    {
      "id": 411503,
      "name": "平桥区" },
    {
      "id": 411521,
      "name": "罗山县" },
    {
      "id": 411522,
      "name": "光山县" },
    {
      "id": 411523,
      "name": "新县" },
    {
      "id": 411524,
      "name": "商城县" },
    {
      "id": 411525,
      "name": "固始县" },
    {
      "id": 411526,
      "name": "潢川县" },
    {
      "id": 411527,
      "name": "淮滨县" },
    {
      "id": 411528,
      "name": "息县" }] },

  {
    "id": 411600,
    "name": "周口市",
    "children": [{
      "id": 411602,
      "name": "川汇区" },
    {
      "id": 411621,
      "name": "扶沟县" },
    {
      "id": 411622,
      "name": "西华县" },
    {
      "id": 411623,
      "name": "商水县" },
    {
      "id": 411624,
      "name": "沈丘县" },
    {
      "id": 411625,
      "name": "郸城县" },
    {
      "id": 411626,
      "name": "淮阳县" },
    {
      "id": 411627,
      "name": "太康县" },
    {
      "id": 411628,
      "name": "鹿邑县" },
    {
      "id": 411681,
      "name": "项城市" }] },

  {
    "id": 411700,
    "name": "驻马店市",
    "children": [{
      "id": 411702,
      "name": "驿城区" },
    {
      "id": 411721,
      "name": "西平县" },
    {
      "id": 411722,
      "name": "上蔡县" },
    {
      "id": 411723,
      "name": "平舆县" },
    {
      "id": 411724,
      "name": "正阳县" },
    {
      "id": 411725,
      "name": "确山县" },
    {
      "id": 411726,
      "name": "泌阳县" },
    {
      "id": 411727,
      "name": "汝南县" },
    {
      "id": 411728,
      "name": "遂平县" },
    {
      "id": 411729,
      "name": "新蔡县" }] },

  {
    "id": 419001,
    "name": "济源市",
    "children": [{
      "id": 419001001,
      "name": "沁园街道" },
    {
      "id": 419001002,
      "name": "济水街道" },
    {
      "id": 419001003,
      "name": "北海街道" },
    {
      "id": 419001004,
      "name": "天坛街道" },
    {
      "id": 419001005,
      "name": "玉泉街道" },
    {
      "id": 419001100,
      "name": "克井镇" },
    {
      "id": 419001101,
      "name": "五龙口镇" },
    {
      "id": 419001102,
      "name": "轵城镇" },
    {
      "id": 419001103,
      "name": "承留镇" },
    {
      "id": 419001104,
      "name": "邵原镇" },
    {
      "id": 419001105,
      "name": "坡头镇" },
    {
      "id": 419001106,
      "name": "梨林镇" },
    {
      "id": 419001107,
      "name": "大峪镇" },
    {
      "id": 419001108,
      "name": "思礼镇" },
    {
      "id": 419001109,
      "name": "王屋镇" },
    {
      "id": 419001110,
      "name": "下冶镇" }] }] },


{
  "id": 420000,
  "name": "湖北省",
  "children": [{
    "id": 420100,
    "name": "武汉市",
    "children": [{
      "id": 420102,
      "name": "江岸区" },
    {
      "id": 420103,
      "name": "江汉区" },
    {
      "id": 420104,
      "name": "硚口区" },
    {
      "id": 420105,
      "name": "汉阳区" },
    {
      "id": 420106,
      "name": "武昌区" },
    {
      "id": 420107,
      "name": "青山区" },
    {
      "id": 420111,
      "name": "洪山区" },
    {
      "id": 420112,
      "name": "东西湖区" },
    {
      "id": 420113,
      "name": "汉南区" },
    {
      "id": 420114,
      "name": "蔡甸区" },
    {
      "id": 420115,
      "name": "江夏区" },
    {
      "id": 420116,
      "name": "黄陂区" },
    {
      "id": 420117,
      "name": "新洲区" }] },

  {
    "id": 420200,
    "name": "黄石市",
    "children": [{
      "id": 420202,
      "name": "黄石港区" },
    {
      "id": 420203,
      "name": "西塞山区" },
    {
      "id": 420204,
      "name": "下陆区" },
    {
      "id": 420205,
      "name": "铁山区" },
    {
      "id": 420222,
      "name": "阳新县" },
    {
      "id": 420281,
      "name": "大冶市" }] },

  {
    "id": 420300,
    "name": "十堰市",
    "children": [{
      "id": 420302,
      "name": "茅箭区" },
    {
      "id": 420303,
      "name": "张湾区" },
    {
      "id": 420304,
      "name": "郧阳区" },
    {
      "id": 420322,
      "name": "郧西县" },
    {
      "id": 420323,
      "name": "竹山县" },
    {
      "id": 420324,
      "name": "竹溪县" },
    {
      "id": 420325,
      "name": "房县" },
    {
      "id": 420381,
      "name": "丹江口市" }] },

  {
    "id": 420500,
    "name": "宜昌市",
    "children": [{
      "id": 420502,
      "name": "西陵区" },
    {
      "id": 420503,
      "name": "伍家岗区" },
    {
      "id": 420504,
      "name": "点军区" },
    {
      "id": 420505,
      "name": "猇亭区" },
    {
      "id": 420506,
      "name": "夷陵区" },
    {
      "id": 420525,
      "name": "远安县" },
    {
      "id": 420526,
      "name": "兴山县" },
    {
      "id": 420527,
      "name": "秭归县" },
    {
      "id": 420528,
      "name": "长阳土家族自治县" },
    {
      "id": 420529,
      "name": "五峰土家族自治县" },
    {
      "id": 420581,
      "name": "宜都市" },
    {
      "id": 420582,
      "name": "当阳市" },
    {
      "id": 420583,
      "name": "枝江市" }] },

  {
    "id": 420600,
    "name": "襄阳市",
    "children": [{
      "id": 420602,
      "name": "襄城区" },
    {
      "id": 420606,
      "name": "樊城区" },
    {
      "id": 420607,
      "name": "襄州区" },
    {
      "id": 420624,
      "name": "南漳县" },
    {
      "id": 420625,
      "name": "谷城县" },
    {
      "id": 420626,
      "name": "保康县" },
    {
      "id": 420682,
      "name": "老河口市" },
    {
      "id": 420683,
      "name": "枣阳市" },
    {
      "id": 420684,
      "name": "宜城市" }] },

  {
    "id": 420700,
    "name": "鄂州市",
    "children": [{
      "id": 420702,
      "name": "梁子湖区" },
    {
      "id": 420703,
      "name": "华容区" },
    {
      "id": 420704,
      "name": "鄂城区" }] },

  {
    "id": 420800,
    "name": "荆门市",
    "children": [{
      "id": 420802,
      "name": "东宝区" },
    {
      "id": 420804,
      "name": "掇刀区" },
    {
      "id": 420822,
      "name": "沙洋县" },
    {
      "id": 420881,
      "name": "钟祥市" },
    {
      "id": 420882,
      "name": "京山市" }] },

  {
    "id": 420900,
    "name": "孝感市",
    "children": [{
      "id": 420902,
      "name": "孝南区" },
    {
      "id": 420921,
      "name": "孝昌县" },
    {
      "id": 420922,
      "name": "大悟县" },
    {
      "id": 420923,
      "name": "云梦县" },
    {
      "id": 420981,
      "name": "应城市" },
    {
      "id": 420982,
      "name": "安陆市" },
    {
      "id": 420984,
      "name": "汉川市" }] },

  {
    "id": 421000,
    "name": "荆州市",
    "children": [{
      "id": 421002,
      "name": "沙市区" },
    {
      "id": 421003,
      "name": "荆州区" },
    {
      "id": 421022,
      "name": "公安县" },
    {
      "id": 421023,
      "name": "监利县" },
    {
      "id": 421024,
      "name": "江陵县" },
    {
      "id": 421081,
      "name": "石首市" },
    {
      "id": 421083,
      "name": "洪湖市" },
    {
      "id": 421087,
      "name": "松滋市" }] },

  {
    "id": 421100,
    "name": "黄冈市",
    "children": [{
      "id": 421102,
      "name": "黄州区" },
    {
      "id": 421121,
      "name": "团风县" },
    {
      "id": 421122,
      "name": "红安县" },
    {
      "id": 421123,
      "name": "罗田县" },
    {
      "id": 421124,
      "name": "英山县" },
    {
      "id": 421125,
      "name": "浠水县" },
    {
      "id": 421126,
      "name": "蕲春县" },
    {
      "id": 421127,
      "name": "黄梅县" },
    {
      "id": 421181,
      "name": "麻城市" },
    {
      "id": 421182,
      "name": "武穴市" }] },

  {
    "id": 421200,
    "name": "咸宁市",
    "children": [{
      "id": 421202,
      "name": "咸安区" },
    {
      "id": 421221,
      "name": "嘉鱼县" },
    {
      "id": 421222,
      "name": "通城县" },
    {
      "id": 421223,
      "name": "崇阳县" },
    {
      "id": 421224,
      "name": "通山县" },
    {
      "id": 421281,
      "name": "赤壁市" }] },

  {
    "id": 421300,
    "name": "随州市",
    "children": [{
      "id": 421303,
      "name": "曾都区" },
    {
      "id": 421321,
      "name": "随县" },
    {
      "id": 421381,
      "name": "广水市" }] },

  {
    "id": 422800,
    "name": "恩施土家族苗族自治州",
    "children": [{
      "id": 422801,
      "name": "恩施市" },
    {
      "id": 422802,
      "name": "利川市" },
    {
      "id": 422822,
      "name": "建始县" },
    {
      "id": 422823,
      "name": "巴东县" },
    {
      "id": 422825,
      "name": "宣恩县" },
    {
      "id": 422826,
      "name": "咸丰县" },
    {
      "id": 422827,
      "name": "来凤县" },
    {
      "id": 422828,
      "name": "鹤峰县" }] },

  {
    "id": 429004,
    "name": "仙桃市",
    "children": [{
      "id": 429004001,
      "name": "沙嘴街道" },
    {
      "id": 429004002,
      "name": "干河街道" },
    {
      "id": 429004003,
      "name": "龙华山街道" },
    {
      "id": 429004100,
      "name": "郑场镇" },
    {
      "id": 429004101,
      "name": "毛嘴镇" },
    {
      "id": 429004102,
      "name": "豆河镇" },
    {
      "id": 429004103,
      "name": "三伏潭镇" },
    {
      "id": 429004104,
      "name": "胡场镇" },
    {
      "id": 429004105,
      "name": "长倘口镇" },
    {
      "id": 429004106,
      "name": "西流河镇" },
    {
      "id": 429004107,
      "name": "沙湖镇" },
    {
      "id": 429004108,
      "name": "杨林尾镇" },
    {
      "id": 429004109,
      "name": "彭场镇" },
    {
      "id": 429004110,
      "name": "张沟镇" },
    {
      "id": 429004111,
      "name": "郭河镇" },
    {
      "id": 429004112,
      "name": "沔城回族镇" },
    {
      "id": 429004113,
      "name": "通海口镇" },
    {
      "id": 429004114,
      "name": "陈场镇" },
    {
      "id": 429004400,
      "name": "工业园区" },
    {
      "id": 429004401,
      "name": "九合垸原种场" },
    {
      "id": 429004404,
      "name": "五湖渔场" },
    {
      "id": 429004405,
      "name": "赵西垸林场" },
    {
      "id": 429004407,
      "name": "畜禽良种场" }] },

  {
    "id": 429005,
    "name": "潜江市",
    "children": [{
      "id": 429005001,
      "name": "园林街道" },
    {
      "id": 429005003,
      "name": "周矶街道" },
    {
      "id": 429005004,
      "name": "广华街道" },
    {
      "id": 429005005,
      "name": "泰丰街道" },
    {
      "id": 429005006,
      "name": "高场街道" },
    {
      "id": 429005100,
      "name": "竹根滩镇" },
    {
      "id": 429005101,
      "name": "渔洋镇" },
    {
      "id": 429005102,
      "name": "王场镇" },
    {
      "id": 429005103,
      "name": "高石碑镇" },
    {
      "id": 429005104,
      "name": "熊口镇" },
    {
      "id": 429005105,
      "name": "老新镇" },
    {
      "id": 429005106,
      "name": "浩口镇" },
    {
      "id": 429005107,
      "name": "积玉口镇" },
    {
      "id": 429005108,
      "name": "张金镇" },
    {
      "id": 429005109,
      "name": "龙湾镇" },
    {
      "id": 429005451,
      "name": "后湖管理区" },
    {
      "id": 429005452,
      "name": "熊口管理区" },
    {
      "id": 429005453,
      "name": "总口管理区" },
    {
      "id": 429005454,
      "name": "白鹭湖管理区" },
    {
      "id": 429005455,
      "name": "运粮湖管理区" },
    {
      "id": 429005900,
      "name": "杨市街道" },
    {
      "id": 429005950,
      "name": "广华寺农场" }] },

  {
    "id": 429006,
    "name": "天门市",
    "children": [{
      "id": 429006001,
      "name": "竟陵街道" },
    {
      "id": 429006002,
      "name": "侨乡街道开发区" },
    {
      "id": 429006003,
      "name": "杨林街道" },
    {
      "id": 429006100,
      "name": "多宝镇" },
    {
      "id": 429006101,
      "name": "拖市镇" },
    {
      "id": 429006102,
      "name": "张港镇" },
    {
      "id": 429006103,
      "name": "蒋场镇" },
    {
      "id": 429006104,
      "name": "汪场镇" },
    {
      "id": 429006105,
      "name": "渔薪镇" },
    {
      "id": 429006106,
      "name": "黄潭镇" },
    {
      "id": 429006107,
      "name": "岳口镇" },
    {
      "id": 429006108,
      "name": "横林镇" },
    {
      "id": 429006109,
      "name": "彭市镇" },
    {
      "id": 429006110,
      "name": "麻洋镇" },
    {
      "id": 429006111,
      "name": "多祥镇" },
    {
      "id": 429006112,
      "name": "干驿镇" },
    {
      "id": 429006113,
      "name": "马湾镇" },
    {
      "id": 429006114,
      "name": "卢市镇" },
    {
      "id": 429006115,
      "name": "小板镇" },
    {
      "id": 429006116,
      "name": "九真镇" },
    {
      "id": 429006118,
      "name": "皂市镇" },
    {
      "id": 429006119,
      "name": "胡市镇" },
    {
      "id": 429006120,
      "name": "石河镇" },
    {
      "id": 429006121,
      "name": "佛子山镇" },
    {
      "id": 429006201,
      "name": "净潭乡" },
    {
      "id": 429006450,
      "name": "蒋湖农场" },
    {
      "id": 429006451,
      "name": "白茅湖农场" },
    {
      "id": 429006452,
      "name": "沉湖管委会" }] },

  {
    "id": 429021,
    "name": "神农架林区",
    "children": [{
      "id": 429021100,
      "name": "松柏镇" },
    {
      "id": 429021101,
      "name": "阳日镇" },
    {
      "id": 429021102,
      "name": "木鱼镇" },
    {
      "id": 429021103,
      "name": "红坪镇" },
    {
      "id": 429021104,
      "name": "新华镇" },
    {
      "id": 429021105,
      "name": "九湖镇" },
    {
      "id": 429021200,
      "name": "宋洛乡" },
    {
      "id": 429021202,
      "name": "下谷坪土家族乡" }] }] },


{
  "id": 430000,
  "name": "湖南省",
  "children": [{
    "id": 430100,
    "name": "长沙市",
    "children": [{
      "id": 430102,
      "name": "芙蓉区" },
    {
      "id": 430103,
      "name": "天心区" },
    {
      "id": 430104,
      "name": "岳麓区" },
    {
      "id": 430105,
      "name": "开福区" },
    {
      "id": 430111,
      "name": "雨花区" },
    {
      "id": 430112,
      "name": "望城区" },
    {
      "id": 430121,
      "name": "长沙县" },
    {
      "id": 430181,
      "name": "浏阳市" },
    {
      "id": 430182,
      "name": "宁乡市" }] },

  {
    "id": 430200,
    "name": "株洲市",
    "children": [{
      "id": 430202,
      "name": "荷塘区" },
    {
      "id": 430203,
      "name": "芦淞区" },
    {
      "id": 430204,
      "name": "石峰区" },
    {
      "id": 430211,
      "name": "天元区" },
    {
      "id": 430212,
      "name": "渌口区" },
    {
      "id": 430223,
      "name": "攸县" },
    {
      "id": 430224,
      "name": "茶陵县" },
    {
      "id": 430225,
      "name": "炎陵县" },
    {
      "id": 430281,
      "name": "醴陵市" }] },

  {
    "id": 430300,
    "name": "湘潭市",
    "children": [{
      "id": 430302,
      "name": "雨湖区" },
    {
      "id": 430304,
      "name": "岳塘区" },
    {
      "id": 430321,
      "name": "湘潭县" },
    {
      "id": 430381,
      "name": "湘乡市" },
    {
      "id": 430382,
      "name": "韶山市" }] },

  {
    "id": 430400,
    "name": "衡阳市",
    "children": [{
      "id": 430405,
      "name": "珠晖区" },
    {
      "id": 430406,
      "name": "雁峰区" },
    {
      "id": 430407,
      "name": "石鼓区" },
    {
      "id": 430408,
      "name": "蒸湘区" },
    {
      "id": 430412,
      "name": "南岳区" },
    {
      "id": 430421,
      "name": "衡阳县" },
    {
      "id": 430422,
      "name": "衡南县" },
    {
      "id": 430423,
      "name": "衡山县" },
    {
      "id": 430424,
      "name": "衡东县" },
    {
      "id": 430426,
      "name": "祁东县" },
    {
      "id": 430481,
      "name": "耒阳市" },
    {
      "id": 430482,
      "name": "常宁市" }] },

  {
    "id": 430500,
    "name": "邵阳市",
    "children": [{
      "id": 430502,
      "name": "双清区" },
    {
      "id": 430503,
      "name": "大祥区" },
    {
      "id": 430511,
      "name": "北塔区" },
    {
      "id": 430521,
      "name": "邵东县" },
    {
      "id": 430522,
      "name": "新邵县" },
    {
      "id": 430523,
      "name": "邵阳县" },
    {
      "id": 430524,
      "name": "隆回县" },
    {
      "id": 430525,
      "name": "洞口县" },
    {
      "id": 430527,
      "name": "绥宁县" },
    {
      "id": 430528,
      "name": "新宁县" },
    {
      "id": 430529,
      "name": "城步苗族自治县" },
    {
      "id": 430581,
      "name": "武冈市" }] },

  {
    "id": 430600,
    "name": "岳阳市",
    "children": [{
      "id": 430602,
      "name": "岳阳楼区" },
    {
      "id": 430603,
      "name": "云溪区" },
    {
      "id": 430611,
      "name": "君山区" },
    {
      "id": 430621,
      "name": "岳阳县" },
    {
      "id": 430623,
      "name": "华容县" },
    {
      "id": 430624,
      "name": "湘阴县" },
    {
      "id": 430626,
      "name": "平江县" },
    {
      "id": 430681,
      "name": "汨罗市" },
    {
      "id": 430682,
      "name": "临湘市" }] },

  {
    "id": 430700,
    "name": "常德市",
    "children": [{
      "id": 430702,
      "name": "武陵区" },
    {
      "id": 430703,
      "name": "鼎城区" },
    {
      "id": 430721,
      "name": "安乡县" },
    {
      "id": 430722,
      "name": "汉寿县" },
    {
      "id": 430723,
      "name": "澧县" },
    {
      "id": 430724,
      "name": "临澧县" },
    {
      "id": 430725,
      "name": "桃源县" },
    {
      "id": 430726,
      "name": "石门县" },
    {
      "id": 430781,
      "name": "津市市" }] },

  {
    "id": 430800,
    "name": "张家界市",
    "children": [{
      "id": 430802,
      "name": "永定区" },
    {
      "id": 430811,
      "name": "武陵源区" },
    {
      "id": 430821,
      "name": "慈利县" },
    {
      "id": 430822,
      "name": "桑植县" }] },

  {
    "id": 430900,
    "name": "益阳市",
    "children": [{
      "id": 430902,
      "name": "资阳区" },
    {
      "id": 430903,
      "name": "赫山区" },
    {
      "id": 430921,
      "name": "南县" },
    {
      "id": 430922,
      "name": "桃江县" },
    {
      "id": 430923,
      "name": "安化县" },
    {
      "id": 430981,
      "name": "沅江市" }] },

  {
    "id": 431000,
    "name": "郴州市",
    "children": [{
      "id": 431002,
      "name": "北湖区" },
    {
      "id": 431003,
      "name": "苏仙区" },
    {
      "id": 431021,
      "name": "桂阳县" },
    {
      "id": 431022,
      "name": "宜章县" },
    {
      "id": 431023,
      "name": "永兴县" },
    {
      "id": 431024,
      "name": "嘉禾县" },
    {
      "id": 431025,
      "name": "临武县" },
    {
      "id": 431026,
      "name": "汝城县" },
    {
      "id": 431027,
      "name": "桂东县" },
    {
      "id": 431028,
      "name": "安仁县" },
    {
      "id": 431081,
      "name": "资兴市" }] },

  {
    "id": 431100,
    "name": "永州市",
    "children": [{
      "id": 431102,
      "name": "零陵区" },
    {
      "id": 431103,
      "name": "冷水滩区" },
    {
      "id": 431121,
      "name": "祁阳县" },
    {
      "id": 431122,
      "name": "东安县" },
    {
      "id": 431123,
      "name": "双牌县" },
    {
      "id": 431124,
      "name": "道县" },
    {
      "id": 431125,
      "name": "江永县" },
    {
      "id": 431126,
      "name": "宁远县" },
    {
      "id": 431127,
      "name": "蓝山县" },
    {
      "id": 431128,
      "name": "新田县" },
    {
      "id": 431129,
      "name": "江华瑶族自治县" }] },

  {
    "id": 431200,
    "name": "怀化市",
    "children": [{
      "id": 431202,
      "name": "鹤城区" },
    {
      "id": 431221,
      "name": "中方县" },
    {
      "id": 431222,
      "name": "沅陵县" },
    {
      "id": 431223,
      "name": "辰溪县" },
    {
      "id": 431224,
      "name": "溆浦县" },
    {
      "id": 431225,
      "name": "会同县" },
    {
      "id": 431226,
      "name": "麻阳苗族自治县" },
    {
      "id": 431227,
      "name": "新晃侗族自治县" },
    {
      "id": 431228,
      "name": "芷江侗族自治县" },
    {
      "id": 431229,
      "name": "靖州苗族侗族自治县" },
    {
      "id": 431230,
      "name": "通道侗族自治县" },
    {
      "id": 431281,
      "name": "洪江市" }] },

  {
    "id": 431300,
    "name": "娄底市",
    "children": [{
      "id": 431302,
      "name": "娄星区" },
    {
      "id": 431321,
      "name": "双峰县" },
    {
      "id": 431322,
      "name": "新化县" },
    {
      "id": 431381,
      "name": "冷水江市" },
    {
      "id": 431382,
      "name": "涟源市" }] },

  {
    "id": 433100,
    "name": "湘西土家族苗族自治州",
    "children": [{
      "id": 433101,
      "name": "吉首市" },
    {
      "id": 433122,
      "name": "泸溪县" },
    {
      "id": 433123,
      "name": "凤凰县" },
    {
      "id": 433124,
      "name": "花垣县" },
    {
      "id": 433125,
      "name": "保靖县" },
    {
      "id": 433126,
      "name": "古丈县" },
    {
      "id": 433127,
      "name": "永顺县" },
    {
      "id": 433130,
      "name": "龙山县" }] }] },


{
  "id": 440000,
  "name": "广东省",
  "children": [{
    "id": 440100,
    "name": "广州市",
    "children": [{
      "id": 440103,
      "name": "荔湾区" },
    {
      "id": 440104,
      "name": "越秀区" },
    {
      "id": 440105,
      "name": "海珠区" },
    {
      "id": 440106,
      "name": "天河区" },
    {
      "id": 440111,
      "name": "白云区" },
    {
      "id": 440112,
      "name": "黄埔区" },
    {
      "id": 440113,
      "name": "番禺区" },
    {
      "id": 440114,
      "name": "花都区" },
    {
      "id": 440115,
      "name": "南沙区" },
    {
      "id": 440117,
      "name": "从化区" },
    {
      "id": 440118,
      "name": "增城区" }] },

  {
    "id": 440200,
    "name": "韶关市",
    "children": [{
      "id": 440203,
      "name": "武江区" },
    {
      "id": 440204,
      "name": "浈江区" },
    {
      "id": 440205,
      "name": "曲江区" },
    {
      "id": 440222,
      "name": "始兴县" },
    {
      "id": 440224,
      "name": "仁化县" },
    {
      "id": 440229,
      "name": "翁源县" },
    {
      "id": 440232,
      "name": "乳源瑶族自治县" },
    {
      "id": 440233,
      "name": "新丰县" },
    {
      "id": 440281,
      "name": "乐昌市" },
    {
      "id": 440282,
      "name": "南雄市" }] },

  {
    "id": 440300,
    "name": "深圳市",
    "children": [{
      "id": 440303,
      "name": "罗湖区" },
    {
      "id": 440304,
      "name": "福田区" },
    {
      "id": 440305,
      "name": "南山区" },
    {
      "id": 440306,
      "name": "宝安区" },
    {
      "id": 440307,
      "name": "龙岗区" },
    {
      "id": 440308,
      "name": "盐田区" },
    {
      "id": 440309,
      "name": "龙华区" },
    {
      "id": 440310,
      "name": "坪山区" },
    {
      "id": 440311,
      "name": "光明区" }] },

  {
    "id": 440400,
    "name": "珠海市",
    "children": [{
      "id": 440402,
      "name": "香洲区" },
    {
      "id": 440403,
      "name": "斗门区" },
    {
      "id": 440404,
      "name": "金湾区" },
    {
      "id": 440499,
      "name": "香洲区澳门大学横琴校区(由澳门特别行政区实施管辖)" }] },

  {
    "id": 440500,
    "name": "汕头市",
    "children": [{
      "id": 440507,
      "name": "龙湖区" },
    {
      "id": 440511,
      "name": "金平区" },
    {
      "id": 440512,
      "name": "濠江区" },
    {
      "id": 440513,
      "name": "潮阳区" },
    {
      "id": 440514,
      "name": "潮南区" },
    {
      "id": 440515,
      "name": "澄海区" },
    {
      "id": 440523,
      "name": "南澳县" }] },

  {
    "id": 440600,
    "name": "佛山市",
    "children": [{
      "id": 440604,
      "name": "禅城区" },
    {
      "id": 440605,
      "name": "南海区" },
    {
      "id": 440606,
      "name": "顺德区" },
    {
      "id": 440607,
      "name": "三水区" },
    {
      "id": 440608,
      "name": "高明区" }] },

  {
    "id": 440700,
    "name": "江门市",
    "children": [{
      "id": 440703,
      "name": "蓬江区" },
    {
      "id": 440704,
      "name": "江海区" },
    {
      "id": 440705,
      "name": "新会区" },
    {
      "id": 440781,
      "name": "台山市" },
    {
      "id": 440783,
      "name": "开平市" },
    {
      "id": 440784,
      "name": "鹤山市" },
    {
      "id": 440785,
      "name": "恩平市" }] },

  {
    "id": 440800,
    "name": "湛江市",
    "children": [{
      "id": 440802,
      "name": "赤坎区" },
    {
      "id": 440803,
      "name": "霞山区" },
    {
      "id": 440804,
      "name": "坡头区" },
    {
      "id": 440811,
      "name": "麻章区" },
    {
      "id": 440823,
      "name": "遂溪县" },
    {
      "id": 440825,
      "name": "徐闻县" },
    {
      "id": 440881,
      "name": "廉江市" },
    {
      "id": 440882,
      "name": "雷州市" },
    {
      "id": 440883,
      "name": "吴川市" }] },

  {
    "id": 440900,
    "name": "茂名市",
    "children": [{
      "id": 440902,
      "name": "茂南区" },
    {
      "id": 440904,
      "name": "电白区" },
    {
      "id": 440981,
      "name": "高州市" },
    {
      "id": 440982,
      "name": "化州市" },
    {
      "id": 440983,
      "name": "信宜市" }] },

  {
    "id": 441200,
    "name": "肇庆市",
    "children": [{
      "id": 441202,
      "name": "端州区" },
    {
      "id": 441203,
      "name": "鼎湖区" },
    {
      "id": 441204,
      "name": "高要区" },
    {
      "id": 441223,
      "name": "广宁县" },
    {
      "id": 441224,
      "name": "怀集县" },
    {
      "id": 441225,
      "name": "封开县" },
    {
      "id": 441226,
      "name": "德庆县" },
    {
      "id": 441284,
      "name": "四会市" }] },

  {
    "id": 441300,
    "name": "惠州市",
    "children": [{
      "id": 441302,
      "name": "惠城区" },
    {
      "id": 441303,
      "name": "惠阳区" },
    {
      "id": 441322,
      "name": "博罗县" },
    {
      "id": 441323,
      "name": "惠东县" },
    {
      "id": 441324,
      "name": "龙门县" }] },

  {
    "id": 441400,
    "name": "梅州市",
    "children": [{
      "id": 441402,
      "name": "梅江区" },
    {
      "id": 441403,
      "name": "梅县区" },
    {
      "id": 441422,
      "name": "大埔县" },
    {
      "id": 441423,
      "name": "丰顺县" },
    {
      "id": 441424,
      "name": "五华县" },
    {
      "id": 441426,
      "name": "平远县" },
    {
      "id": 441427,
      "name": "蕉岭县" },
    {
      "id": 441481,
      "name": "兴宁市" }] },

  {
    "id": 441500,
    "name": "汕尾市",
    "children": [{
      "id": 441502,
      "name": "城区" },
    {
      "id": 441521,
      "name": "海丰县" },
    {
      "id": 441523,
      "name": "陆河县" },
    {
      "id": 441581,
      "name": "陆丰市" }] },

  {
    "id": 441600,
    "name": "河源市",
    "children": [{
      "id": 441602,
      "name": "源城区" },
    {
      "id": 441621,
      "name": "紫金县" },
    {
      "id": 441622,
      "name": "龙川县" },
    {
      "id": 441623,
      "name": "连平县" },
    {
      "id": 441624,
      "name": "和平县" },
    {
      "id": 441625,
      "name": "东源县" }] },

  {
    "id": 441700,
    "name": "阳江市",
    "children": [{
      "id": 441702,
      "name": "江城区" },
    {
      "id": 441704,
      "name": "阳东区" },
    {
      "id": 441721,
      "name": "阳西县" },
    {
      "id": 441781,
      "name": "阳春市" }] },

  {
    "id": 441800,
    "name": "清远市",
    "children": [{
      "id": 441802,
      "name": "清城区" },
    {
      "id": 441803,
      "name": "清新区" },
    {
      "id": 441821,
      "name": "佛冈县" },
    {
      "id": 441823,
      "name": "阳山县" },
    {
      "id": 441825,
      "name": "连山壮族瑶族自治县" },
    {
      "id": 441826,
      "name": "连南瑶族自治县" },
    {
      "id": 441881,
      "name": "英德市" },
    {
      "id": 441882,
      "name": "连州市" }] },

  {
    "id": 441900,
    "name": "东莞市",
    "children": [{
      "id": 441999,
      "name": "东莞市" }] },

  {
    "id": 442000,
    "name": "中山市",
    "children": [{
      "id": 442099,
      "name": "中山市" }] },

  {
    "id": 445100,
    "name": "潮州市",
    "children": [{
      "id": 445102,
      "name": "湘桥区" },
    {
      "id": 445103,
      "name": "潮安区" },
    {
      "id": 445122,
      "name": "饶平县" }] },

  {
    "id": 445200,
    "name": "揭阳市",
    "children": [{
      "id": 445202,
      "name": "榕城区" },
    {
      "id": 445203,
      "name": "揭东区" },
    {
      "id": 445222,
      "name": "揭西县" },
    {
      "id": 445224,
      "name": "惠来县" },
    {
      "id": 445281,
      "name": "普宁市" }] },

  {
    "id": 445300,
    "name": "云浮市",
    "children": [{
      "id": 445302,
      "name": "云城区" },
    {
      "id": 445303,
      "name": "云安区" },
    {
      "id": 445321,
      "name": "新兴县" },
    {
      "id": 445322,
      "name": "郁南县" },
    {
      "id": 445381,
      "name": "罗定市" }] }] },


{
  "id": 450000,
  "name": "广西壮族自治区",
  "children": [{
    "id": 450100,
    "name": "南宁市",
    "children": [{
      "id": 450102,
      "name": "兴宁区" },
    {
      "id": 450103,
      "name": "青秀区" },
    {
      "id": 450105,
      "name": "江南区" },
    {
      "id": 450107,
      "name": "西乡塘区" },
    {
      "id": 450108,
      "name": "良庆区" },
    {
      "id": 450109,
      "name": "邕宁区" },
    {
      "id": 450110,
      "name": "武鸣区" },
    {
      "id": 450123,
      "name": "隆安县" },
    {
      "id": 450124,
      "name": "马山县" },
    {
      "id": 450125,
      "name": "上林县" },
    {
      "id": 450126,
      "name": "宾阳县" },
    {
      "id": 450127,
      "name": "横县" }] },

  {
    "id": 450200,
    "name": "柳州市",
    "children": [{
      "id": 450202,
      "name": "城中区" },
    {
      "id": 450203,
      "name": "鱼峰区" },
    {
      "id": 450204,
      "name": "柳南区" },
    {
      "id": 450205,
      "name": "柳北区" },
    {
      "id": 450206,
      "name": "柳江区" },
    {
      "id": 450222,
      "name": "柳城县" },
    {
      "id": 450223,
      "name": "鹿寨县" },
    {
      "id": 450224,
      "name": "融安县" },
    {
      "id": 450225,
      "name": "融水苗族自治县" },
    {
      "id": 450226,
      "name": "三江侗族自治县" }] },

  {
    "id": 450300,
    "name": "桂林市",
    "children": [{
      "id": 450302,
      "name": "秀峰区" },
    {
      "id": 450303,
      "name": "叠彩区" },
    {
      "id": 450304,
      "name": "象山区" },
    {
      "id": 450305,
      "name": "七星区" },
    {
      "id": 450311,
      "name": "雁山区" },
    {
      "id": 450312,
      "name": "临桂区" },
    {
      "id": 450321,
      "name": "阳朔县" },
    {
      "id": 450323,
      "name": "灵川县" },
    {
      "id": 450324,
      "name": "全州县" },
    {
      "id": 450325,
      "name": "兴安县" },
    {
      "id": 450326,
      "name": "永福县" },
    {
      "id": 450327,
      "name": "灌阳县" },
    {
      "id": 450328,
      "name": "龙胜各族自治县" },
    {
      "id": 450329,
      "name": "资源县" },
    {
      "id": 450330,
      "name": "平乐县" },
    {
      "id": 450332,
      "name": "恭城瑶族自治县" },
    {
      "id": 450381,
      "name": "荔浦市" }] },

  {
    "id": 450400,
    "name": "梧州市",
    "children": [{
      "id": 450403,
      "name": "万秀区" },
    {
      "id": 450405,
      "name": "长洲区" },
    {
      "id": 450406,
      "name": "龙圩区" },
    {
      "id": 450421,
      "name": "苍梧县" },
    {
      "id": 450422,
      "name": "藤县" },
    {
      "id": 450423,
      "name": "蒙山县" },
    {
      "id": 450481,
      "name": "岑溪市" }] },

  {
    "id": 450500,
    "name": "北海市",
    "children": [{
      "id": 450502,
      "name": "海城区" },
    {
      "id": 450503,
      "name": "银海区" },
    {
      "id": 450512,
      "name": "铁山港区" },
    {
      "id": 450521,
      "name": "合浦县" }] },

  {
    "id": 450600,
    "name": "防城港市",
    "children": [{
      "id": 450602,
      "name": "港口区" },
    {
      "id": 450603,
      "name": "防城区" },
    {
      "id": 450621,
      "name": "上思县" },
    {
      "id": 450681,
      "name": "东兴市" }] },

  {
    "id": 450700,
    "name": "钦州市",
    "children": [{
      "id": 450702,
      "name": "钦南区" },
    {
      "id": 450703,
      "name": "钦北区" },
    {
      "id": 450721,
      "name": "灵山县" },
    {
      "id": 450722,
      "name": "浦北县" }] },

  {
    "id": 450800,
    "name": "贵港市",
    "children": [{
      "id": 450802,
      "name": "港北区" },
    {
      "id": 450803,
      "name": "港南区" },
    {
      "id": 450804,
      "name": "覃塘区" },
    {
      "id": 450821,
      "name": "平南县" },
    {
      "id": 450881,
      "name": "桂平市" }] },

  {
    "id": 450900,
    "name": "玉林市",
    "children": [{
      "id": 450902,
      "name": "玉州区" },
    {
      "id": 450903,
      "name": "福绵区" },
    {
      "id": 450921,
      "name": "容县" },
    {
      "id": 450922,
      "name": "陆川县" },
    {
      "id": 450923,
      "name": "博白县" },
    {
      "id": 450924,
      "name": "兴业县" },
    {
      "id": 450981,
      "name": "北流市" }] },

  {
    "id": 451000,
    "name": "百色市",
    "children": [{
      "id": 451002,
      "name": "右江区" },
    {
      "id": 451021,
      "name": "田阳县" },
    {
      "id": 451022,
      "name": "田东县" },
    {
      "id": 451023,
      "name": "平果县" },
    {
      "id": 451024,
      "name": "德保县" },
    {
      "id": 451026,
      "name": "那坡县" },
    {
      "id": 451027,
      "name": "凌云县" },
    {
      "id": 451028,
      "name": "乐业县" },
    {
      "id": 451029,
      "name": "田林县" },
    {
      "id": 451030,
      "name": "西林县" },
    {
      "id": 451031,
      "name": "隆林各族自治县" },
    {
      "id": 451081,
      "name": "靖西市" }] },

  {
    "id": 451100,
    "name": "贺州市",
    "children": [{
      "id": 451102,
      "name": "八步区" },
    {
      "id": 451103,
      "name": "平桂区" },
    {
      "id": 451121,
      "name": "昭平县" },
    {
      "id": 451122,
      "name": "钟山县" },
    {
      "id": 451123,
      "name": "富川瑶族自治县" }] },

  {
    "id": 451200,
    "name": "河池市",
    "children": [{
      "id": 451202,
      "name": "金城江区" },
    {
      "id": 451203,
      "name": "宜州区" },
    {
      "id": 451221,
      "name": "南丹县" },
    {
      "id": 451222,
      "name": "天峨县" },
    {
      "id": 451223,
      "name": "凤山县" },
    {
      "id": 451224,
      "name": "东兰县" },
    {
      "id": 451225,
      "name": "罗城仫佬族自治县" },
    {
      "id": 451226,
      "name": "环江毛南族自治县" },
    {
      "id": 451227,
      "name": "巴马瑶族自治县" },
    {
      "id": 451228,
      "name": "都安瑶族自治县" },
    {
      "id": 451229,
      "name": "大化瑶族自治县" }] },

  {
    "id": 451300,
    "name": "来宾市",
    "children": [{
      "id": 451302,
      "name": "兴宾区" },
    {
      "id": 451321,
      "name": "忻城县" },
    {
      "id": 451322,
      "name": "象州县" },
    {
      "id": 451323,
      "name": "武宣县" },
    {
      "id": 451324,
      "name": "金秀瑶族自治县" },
    {
      "id": 451381,
      "name": "合山市" }] },

  {
    "id": 451400,
    "name": "崇左市",
    "children": [{
      "id": 451402,
      "name": "江州区" },
    {
      "id": 451421,
      "name": "扶绥县" },
    {
      "id": 451422,
      "name": "宁明县" },
    {
      "id": 451423,
      "name": "龙州县" },
    {
      "id": 451424,
      "name": "大新县" },
    {
      "id": 451425,
      "name": "天等县" },
    {
      "id": 451481,
      "name": "凭祥市" }] }] },


{
  "id": 460000,
  "name": "海南省",
  "children": [{
    "id": 460100,
    "name": "海口市",
    "children": [{
      "id": 460105,
      "name": "秀英区" },
    {
      "id": 460106,
      "name": "龙华区" },
    {
      "id": 460107,
      "name": "琼山区" },
    {
      "id": 460108,
      "name": "美兰区" }] },

  {
    "id": 460200,
    "name": "三亚市",
    "children": [{
      "id": 460202,
      "name": "海棠区" },
    {
      "id": 460203,
      "name": "吉阳区" },
    {
      "id": 460204,
      "name": "天涯区" },
    {
      "id": 460205,
      "name": "崖州区" }] },

  {
    "id": 460300,
    "name": "三沙市",
    "children": [{
      "id": 460321,
      "name": "西沙群岛" },
    {
      "id": 460322,
      "name": "南沙群岛" },
    {
      "id": 460323,
      "name": "中沙群岛的岛礁及其海域" }] },

  {
    "id": 460400,
    "name": "儋州市",
    "children": [{
      "id": 460499,
      "name": "儋州市" }] },

  {
    "id": 469001,
    "name": "五指山市",
    "children": [{
      "id": 469001100,
      "name": "通什镇" },
    {
      "id": 469001101,
      "name": "南圣镇" },
    {
      "id": 469001102,
      "name": "毛阳镇" },
    {
      "id": 469001103,
      "name": "番阳镇" },
    {
      "id": 469001200,
      "name": "畅好乡" },
    {
      "id": 469001201,
      "name": "毛道乡" },
    {
      "id": 469001202,
      "name": "水满乡" },
    {
      "id": 469001400,
      "name": "国营畅好农场" }] },

  {
    "id": 469002,
    "name": "琼海市",
    "children": [{
      "id": 469002100,
      "name": "嘉积镇" },
    {
      "id": 469002101,
      "name": "万泉镇" },
    {
      "id": 469002102,
      "name": "石壁镇" },
    {
      "id": 469002103,
      "name": "中原镇" },
    {
      "id": 469002104,
      "name": "博鳌镇" },
    {
      "id": 469002105,
      "name": "阳江镇" },
    {
      "id": 469002106,
      "name": "龙江镇" },
    {
      "id": 469002107,
      "name": "潭门镇" },
    {
      "id": 469002108,
      "name": "塔洋镇" },
    {
      "id": 469002109,
      "name": "长坡镇" },
    {
      "id": 469002110,
      "name": "大路镇" },
    {
      "id": 469002111,
      "name": "会山镇" },
    {
      "id": 469002400,
      "name": "东太农场" },
    {
      "id": 469002401,
      "name": "南俸农场" },
    {
      "id": 469002402,
      "name": "东红农场" },
    {
      "id": 469002500,
      "name": "彬村山华侨农场" },
    {
      "id": 469002953,
      "name": "东平农场" }] },

  {
    "id": 469005,
    "name": "文昌市",
    "children": [{
      "id": 469005100,
      "name": "文城镇" },
    {
      "id": 469005101,
      "name": "重兴镇" },
    {
      "id": 469005102,
      "name": "蓬莱镇" },
    {
      "id": 469005103,
      "name": "会文镇" },
    {
      "id": 469005104,
      "name": "东路镇" },
    {
      "id": 469005105,
      "name": "潭牛镇" },
    {
      "id": 469005106,
      "name": "东阁镇" },
    {
      "id": 469005107,
      "name": "文教镇" },
    {
      "id": 469005108,
      "name": "东郊镇" },
    {
      "id": 469005109,
      "name": "龙楼镇" },
    {
      "id": 469005110,
      "name": "昌洒镇" },
    {
      "id": 469005111,
      "name": "翁田镇" },
    {
      "id": 469005112,
      "name": "抱罗镇" },
    {
      "id": 469005113,
      "name": "冯坡镇" },
    {
      "id": 469005114,
      "name": "锦山镇" },
    {
      "id": 469005115,
      "name": "铺前镇" },
    {
      "id": 469005116,
      "name": "公坡镇" },
    {
      "id": 469005401,
      "name": "国营南阳农场" },
    {
      "id": 469005402,
      "name": "国营罗豆农场" }] },

  {
    "id": 469006,
    "name": "万宁市",
    "children": [{
      "id": 469006100,
      "name": "万城镇" },
    {
      "id": 469006101,
      "name": "龙滚镇" },
    {
      "id": 469006102,
      "name": "和乐镇" },
    {
      "id": 469006103,
      "name": "后安镇" },
    {
      "id": 469006104,
      "name": "大茂镇" },
    {
      "id": 469006105,
      "name": "东澳镇" },
    {
      "id": 469006106,
      "name": "礼纪镇" },
    {
      "id": 469006107,
      "name": "长丰镇" },
    {
      "id": 469006108,
      "name": "山根镇" },
    {
      "id": 469006109,
      "name": "北大镇" },
    {
      "id": 469006110,
      "name": "南桥镇" },
    {
      "id": 469006111,
      "name": "三更罗镇" },
    {
      "id": 469006400,
      "name": "国营东兴农场" },
    {
      "id": 469006500,
      "name": "兴隆华侨农场" },
    {
      "id": 469006501,
      "name": "地方国营六连林场" },
    {
      "id": 469006951,
      "name": "东岭农场" }] },

  {
    "id": 469007,
    "name": "东方市",
    "children": [{
      "id": 469007100,
      "name": "八所镇" },
    {
      "id": 469007101,
      "name": "东河镇" },
    {
      "id": 469007102,
      "name": "大田镇" },
    {
      "id": 469007103,
      "name": "感城镇" },
    {
      "id": 469007104,
      "name": "板桥镇" },
    {
      "id": 469007105,
      "name": "三家镇" },
    {
      "id": 469007106,
      "name": "四更镇" },
    {
      "id": 469007107,
      "name": "新龙镇" },
    {
      "id": 469007200,
      "name": "天安乡" },
    {
      "id": 469007201,
      "name": "江边乡" },
    {
      "id": 469007400,
      "name": "国营广坝农场" },
    {
      "id": 469007500,
      "name": "东方华侨农场" },
    {
      "id": 469007950,
      "name": "东方农场" }] },

  {
    "id": 469021,
    "name": "定安县",
    "children": [{
      "id": 469021100,
      "name": "定城镇" },
    {
      "id": 469021101,
      "name": "新竹镇" },
    {
      "id": 469021102,
      "name": "龙湖镇" },
    {
      "id": 469021103,
      "name": "黄竹镇" },
    {
      "id": 469021104,
      "name": "雷鸣镇" },
    {
      "id": 469021105,
      "name": "龙门镇" },
    {
      "id": 469021106,
      "name": "龙河镇" },
    {
      "id": 469021107,
      "name": "岭口镇" },
    {
      "id": 469021108,
      "name": "翰林镇" },
    {
      "id": 469021109,
      "name": "富文镇" },
    {
      "id": 469021400,
      "name": "国营中瑞农场" },
    {
      "id": 469021401,
      "name": "国营南海农场" },
    {
      "id": 469021402,
      "name": "国营金鸡岭农场" },
    {
      "id": 469021403,
      "name": "国营东升农场" }] },

  {
    "id": 469022,
    "name": "屯昌县",
    "children": [{
      "id": 469022100,
      "name": "屯城镇" },
    {
      "id": 469022101,
      "name": "新兴镇" },
    {
      "id": 469022102,
      "name": "枫木镇" },
    {
      "id": 469022103,
      "name": "乌坡镇" },
    {
      "id": 469022104,
      "name": "南吕镇" },
    {
      "id": 469022105,
      "name": "南坤镇" },
    {
      "id": 469022106,
      "name": "坡心镇" },
    {
      "id": 469022107,
      "name": "西昌镇" },
    {
      "id": 469022400,
      "name": "国营中瑞农场" },
    {
      "id": 469022401,
      "name": "国营中坤农场" },
    {
      "id": 469022950,
      "name": "国营中建农场" },
    {
      "id": 469022951,
      "name": "晨星农场" },
    {
      "id": 469022952,
      "name": "黄岭农场" },
    {
      "id": 469022954,
      "name": "广青农场" }] },

  {
    "id": 469023,
    "name": "澄迈县",
    "children": [{
      "id": 469023100,
      "name": "金江镇" },
    {
      "id": 469023101,
      "name": "老城镇" },
    {
      "id": 469023102,
      "name": "瑞溪镇" },
    {
      "id": 469023103,
      "name": "永发镇" },
    {
      "id": 469023104,
      "name": "加乐镇" },
    {
      "id": 469023105,
      "name": "文儒镇" },
    {
      "id": 469023106,
      "name": "中兴镇" },
    {
      "id": 469023107,
      "name": "仁兴镇" },
    {
      "id": 469023108,
      "name": "福山镇" },
    {
      "id": 469023109,
      "name": "桥头镇" },
    {
      "id": 469023110,
      "name": "大丰镇" },
    {
      "id": 469023400,
      "name": "国营红光农场" },
    {
      "id": 469023401,
      "name": "红岗农场" },
    {
      "id": 469023402,
      "name": "国营西达农场" },
    {
      "id": 469023405,
      "name": "国营金安农场" }] },

  {
    "id": 469024,
    "name": "临高县",
    "children": [{
      "id": 469024100,
      "name": "临城镇" },
    {
      "id": 469024101,
      "name": "波莲镇" },
    {
      "id": 469024102,
      "name": "东英镇" },
    {
      "id": 469024103,
      "name": "博厚镇" },
    {
      "id": 469024104,
      "name": "皇桐镇" },
    {
      "id": 469024105,
      "name": "多文镇" },
    {
      "id": 469024106,
      "name": "和舍镇" },
    {
      "id": 469024107,
      "name": "南宝镇" },
    {
      "id": 469024108,
      "name": "新盈镇" },
    {
      "id": 469024109,
      "name": "调楼镇" },
    {
      "id": 469024400,
      "name": "国营红华农场" },
    {
      "id": 469024401,
      "name": "国营加来农场" }] },

  {
    "id": 469025,
    "name": "白沙黎族自治县",
    "children": [{
      "id": 469025100,
      "name": "牙叉镇" },
    {
      "id": 469025101,
      "name": "七坊镇" },
    {
      "id": 469025102,
      "name": "邦溪镇" },
    {
      "id": 469025103,
      "name": "打安镇" },
    {
      "id": 469025200,
      "name": "细水乡" },
    {
      "id": 469025201,
      "name": "元门乡" },
    {
      "id": 469025202,
      "name": "南开乡" },
    {
      "id": 469025203,
      "name": "阜龙乡" },
    {
      "id": 469025204,
      "name": "青松乡" },
    {
      "id": 469025205,
      "name": "金波乡" },
    {
      "id": 469025206,
      "name": "荣邦乡" },
    {
      "id": 469025401,
      "name": "国营白沙农场" },
    {
      "id": 469025404,
      "name": "国营龙江农场" },
    {
      "id": 469025950,
      "name": "卫星农场" }] },

  {
    "id": 469026,
    "name": "昌江黎族自治县",
    "children": [{
      "id": 469026100,
      "name": "石碌镇" },
    {
      "id": 469026101,
      "name": "叉河镇" },
    {
      "id": 469026102,
      "name": "十月田镇" },
    {
      "id": 469026103,
      "name": "乌烈镇" },
    {
      "id": 469026104,
      "name": "昌化镇" },
    {
      "id": 469026105,
      "name": "海尾镇" },
    {
      "id": 469026106,
      "name": "七叉镇" },
    {
      "id": 469026200,
      "name": "王下乡" },
    {
      "id": 469026401,
      "name": "国营红林农场" },
    {
      "id": 469026500,
      "name": "国营霸王岭林场" }] },

  {
    "id": 469027,
    "name": "乐东黎族自治县",
    "children": [{
      "id": 469027100,
      "name": "抱由镇" },
    {
      "id": 469027101,
      "name": "万冲镇" },
    {
      "id": 469027102,
      "name": "大安镇" },
    {
      "id": 469027103,
      "name": "志仲镇" },
    {
      "id": 469027104,
      "name": "千家镇" },
    {
      "id": 469027105,
      "name": "九所镇" },
    {
      "id": 469027106,
      "name": "利国镇" },
    {
      "id": 469027107,
      "name": "黄流镇" },
    {
      "id": 469027108,
      "name": "佛罗镇" },
    {
      "id": 469027109,
      "name": "尖峰镇" },
    {
      "id": 469027110,
      "name": "莺歌海镇" },
    {
      "id": 469027401,
      "name": "国营山荣农场" },
    {
      "id": 469027402,
      "name": "国营乐光农场" },
    {
      "id": 469027405,
      "name": "国营保国农场" },
    {
      "id": 469027951,
      "name": "福报农场" }] },

  {
    "id": 469028,
    "name": "陵水黎族自治县",
    "children": [{
      "id": 469028100,
      "name": "椰林镇" },
    {
      "id": 469028101,
      "name": "光坡镇" },
    {
      "id": 469028102,
      "name": "三才镇" },
    {
      "id": 469028103,
      "name": "英州镇" },
    {
      "id": 469028104,
      "name": "隆广镇" },
    {
      "id": 469028105,
      "name": "文罗镇" },
    {
      "id": 469028106,
      "name": "本号镇" },
    {
      "id": 469028107,
      "name": "新村镇" },
    {
      "id": 469028108,
      "name": "黎安镇" },
    {
      "id": 469028200,
      "name": "提蒙乡" },
    {
      "id": 469028201,
      "name": "群英乡" },
    {
      "id": 469028400,
      "name": "岭门农场" },
    {
      "id": 469028401,
      "name": "国营南平农场" }] },

  {
    "id": 469029,
    "name": "保亭黎族苗族自治县",
    "children": [{
      "id": 469029100,
      "name": "保城镇" },
    {
      "id": 469029101,
      "name": "什玲镇" },
    {
      "id": 469029102,
      "name": "加茂镇" },
    {
      "id": 469029103,
      "name": "响水镇" },
    {
      "id": 469029104,
      "name": "新政镇" },
    {
      "id": 469029105,
      "name": "三道镇" },
    {
      "id": 469029200,
      "name": "六弓乡" },
    {
      "id": 469029201,
      "name": "南林乡" },
    {
      "id": 469029202,
      "name": "毛感乡" },
    {
      "id": 469029401,
      "name": "新星农场" },
    {
      "id": 469029402,
      "name": "海南保亭热带作物研究所" },
    {
      "id": 469029403,
      "name": "国营金江农场" },
    {
      "id": 469029950,
      "name": "南茂农场" },
    {
      "id": 469029952,
      "name": "通什茶场" }] },

  {
    "id": 469030,
    "name": "琼中黎族苗族自治县",
    "children": [{
      "id": 469030100,
      "name": "营根镇" },
    {
      "id": 469030101,
      "name": "湾岭镇" },
    {
      "id": 469030102,
      "name": "黎母山镇" },
    {
      "id": 469030103,
      "name": "和平镇" },
    {
      "id": 469030104,
      "name": "长征镇" },
    {
      "id": 469030105,
      "name": "红毛镇" },
    {
      "id": 469030106,
      "name": "中平镇" },
    {
      "id": 469030200,
      "name": "吊罗山乡" },
    {
      "id": 469030201,
      "name": "上安乡" },
    {
      "id": 469030202,
      "name": "什运乡" },
    {
      "id": 469030402,
      "name": "阳江农场" },
    {
      "id": 469030403,
      "name": "乌石农场" },
    {
      "id": 469030950,
      "name": "岭头茶场" },
    {
      "id": 469030951,
      "name": "南方农场" }] }] },


{
  "id": 500000,
  "name": "重庆市",
  "children": [{
    "id": 500100,
    "name": "重庆市",
    "children": [{
      "id": 500101,
      "name": "万州区" },
    {
      "id": 500102,
      "name": "涪陵区" },
    {
      "id": 500103,
      "name": "渝中区" },
    {
      "id": 500104,
      "name": "大渡口区" },
    {
      "id": 500105,
      "name": "江北区" },
    {
      "id": 500106,
      "name": "沙坪坝区" },
    {
      "id": 500107,
      "name": "九龙坡区" },
    {
      "id": 500108,
      "name": "南岸区" },
    {
      "id": 500109,
      "name": "北碚区" },
    {
      "id": 500110,
      "name": "綦江区" },
    {
      "id": 500111,
      "name": "大足区" },
    {
      "id": 500112,
      "name": "渝北区" },
    {
      "id": 500113,
      "name": "巴南区" },
    {
      "id": 500114,
      "name": "黔江区" },
    {
      "id": 500115,
      "name": "长寿区" },
    {
      "id": 500116,
      "name": "江津区" },
    {
      "id": 500117,
      "name": "合川区" },
    {
      "id": 500118,
      "name": "永川区" },
    {
      "id": 500119,
      "name": "南川区" },
    {
      "id": 500120,
      "name": "璧山区" },
    {
      "id": 500151,
      "name": "铜梁区" },
    {
      "id": 500152,
      "name": "潼南区" },
    {
      "id": 500153,
      "name": "荣昌区" },
    {
      "id": 500154,
      "name": "开州区" },
    {
      "id": 500155,
      "name": "梁平区" },
    {
      "id": 500156,
      "name": "武隆区" },
    {
      "id": 500229,
      "name": "城口县" },
    {
      "id": 500230,
      "name": "丰都县" },
    {
      "id": 500231,
      "name": "垫江县" },
    {
      "id": 500233,
      "name": "忠县" },
    {
      "id": 500235,
      "name": "云阳县" },
    {
      "id": 500236,
      "name": "奉节县" },
    {
      "id": 500237,
      "name": "巫山县" },
    {
      "id": 500238,
      "name": "巫溪县" },
    {
      "id": 500240,
      "name": "石柱土家族自治县" },
    {
      "id": 500241,
      "name": "秀山土家族苗族自治县" },
    {
      "id": 500242,
      "name": "酉阳土家族苗族自治县" },
    {
      "id": 500243,
      "name": "彭水苗族土家族自治县" }] }] },


{
  "id": 510000,
  "name": "四川省",
  "children": [{
    "id": 510100,
    "name": "成都市",
    "children": [{
      "id": 510104,
      "name": "锦江区" },
    {
      "id": 510105,
      "name": "青羊区" },
    {
      "id": 510106,
      "name": "金牛区" },
    {
      "id": 510107,
      "name": "武侯区" },
    {
      "id": 510108,
      "name": "成华区" },
    {
      "id": 510112,
      "name": "龙泉驿区" },
    {
      "id": 510113,
      "name": "青白江区" },
    {
      "id": 510114,
      "name": "新都区" },
    {
      "id": 510115,
      "name": "温江区" },
    {
      "id": 510116,
      "name": "双流区" },
    {
      "id": 510117,
      "name": "郫都区" },
    {
      "id": 510121,
      "name": "金堂县" },
    {
      "id": 510129,
      "name": "大邑县" },
    {
      "id": 510131,
      "name": "蒲江县" },
    {
      "id": 510132,
      "name": "新津县" },
    {
      "id": 510181,
      "name": "都江堰市" },
    {
      "id": 510182,
      "name": "彭州市" },
    {
      "id": 510183,
      "name": "邛崃市" },
    {
      "id": 510184,
      "name": "崇州市" },
    {
      "id": 510185,
      "name": "简阳市" }] },

  {
    "id": 510300,
    "name": "自贡市",
    "children": [{
      "id": 510302,
      "name": "自流井区" },
    {
      "id": 510303,
      "name": "贡井区" },
    {
      "id": 510304,
      "name": "大安区" },
    {
      "id": 510311,
      "name": "沿滩区" },
    {
      "id": 510321,
      "name": "荣县" },
    {
      "id": 510322,
      "name": "富顺县" }] },

  {
    "id": 510400,
    "name": "攀枝花市",
    "children": [{
      "id": 510402,
      "name": "东区" },
    {
      "id": 510403,
      "name": "西区" },
    {
      "id": 510411,
      "name": "仁和区" },
    {
      "id": 510421,
      "name": "米易县" },
    {
      "id": 510422,
      "name": "盐边县" }] },

  {
    "id": 510500,
    "name": "泸州市",
    "children": [{
      "id": 510502,
      "name": "江阳区" },
    {
      "id": 510503,
      "name": "纳溪区" },
    {
      "id": 510504,
      "name": "龙马潭区" },
    {
      "id": 510521,
      "name": "泸县" },
    {
      "id": 510522,
      "name": "合江县" },
    {
      "id": 510524,
      "name": "叙永县" },
    {
      "id": 510525,
      "name": "古蔺县" }] },

  {
    "id": 510600,
    "name": "德阳市",
    "children": [{
      "id": 510603,
      "name": "旌阳区" },
    {
      "id": 510604,
      "name": "罗江区" },
    {
      "id": 510623,
      "name": "中江县" },
    {
      "id": 510681,
      "name": "广汉市" },
    {
      "id": 510682,
      "name": "什邡市" },
    {
      "id": 510683,
      "name": "绵竹市" }] },

  {
    "id": 510700,
    "name": "绵阳市",
    "children": [{
      "id": 510703,
      "name": "涪城区" },
    {
      "id": 510704,
      "name": "游仙区" },
    {
      "id": 510705,
      "name": "安州区" },
    {
      "id": 510722,
      "name": "三台县" },
    {
      "id": 510723,
      "name": "盐亭县" },
    {
      "id": 510725,
      "name": "梓潼县" },
    {
      "id": 510726,
      "name": "北川羌族自治县" },
    {
      "id": 510727,
      "name": "平武县" },
    {
      "id": 510781,
      "name": "江油市" }] },

  {
    "id": 510800,
    "name": "广元市",
    "children": [{
      "id": 510802,
      "name": "利州区" },
    {
      "id": 510811,
      "name": "昭化区" },
    {
      "id": 510812,
      "name": "朝天区" },
    {
      "id": 510821,
      "name": "旺苍县" },
    {
      "id": 510822,
      "name": "青川县" },
    {
      "id": 510823,
      "name": "剑阁县" },
    {
      "id": 510824,
      "name": "苍溪县" }] },

  {
    "id": 510900,
    "name": "遂宁市",
    "children": [{
      "id": 510903,
      "name": "船山区" },
    {
      "id": 510904,
      "name": "安居区" },
    {
      "id": 510921,
      "name": "蓬溪县" },
    {
      "id": 510922,
      "name": "射洪县" },
    {
      "id": 510923,
      "name": "大英县" }] },

  {
    "id": 511000,
    "name": "内江市",
    "children": [{
      "id": 511002,
      "name": "市中区" },
    {
      "id": 511011,
      "name": "东兴区" },
    {
      "id": 511024,
      "name": "威远县" },
    {
      "id": 511025,
      "name": "资中县" },
    {
      "id": 511083,
      "name": "隆昌市" }] },

  {
    "id": 511100,
    "name": "乐山市",
    "children": [{
      "id": 511102,
      "name": "市中区" },
    {
      "id": 511111,
      "name": "沙湾区" },
    {
      "id": 511112,
      "name": "五通桥区" },
    {
      "id": 511113,
      "name": "金口河区" },
    {
      "id": 511123,
      "name": "犍为县" },
    {
      "id": 511124,
      "name": "井研县" },
    {
      "id": 511126,
      "name": "夹江县" },
    {
      "id": 511129,
      "name": "沐川县" },
    {
      "id": 511132,
      "name": "峨边彝族自治县" },
    {
      "id": 511133,
      "name": "马边彝族自治县" },
    {
      "id": 511181,
      "name": "峨眉山市" }] },

  {
    "id": 511300,
    "name": "南充市",
    "children": [{
      "id": 511302,
      "name": "顺庆区" },
    {
      "id": 511303,
      "name": "高坪区" },
    {
      "id": 511304,
      "name": "嘉陵区" },
    {
      "id": 511321,
      "name": "南部县" },
    {
      "id": 511322,
      "name": "营山县" },
    {
      "id": 511323,
      "name": "蓬安县" },
    {
      "id": 511324,
      "name": "仪陇县" },
    {
      "id": 511325,
      "name": "西充县" },
    {
      "id": 511381,
      "name": "阆中市" }] },

  {
    "id": 511400,
    "name": "眉山市",
    "children": [{
      "id": 511402,
      "name": "东坡区" },
    {
      "id": 511403,
      "name": "彭山区" },
    {
      "id": 511421,
      "name": "仁寿县" },
    {
      "id": 511423,
      "name": "洪雅县" },
    {
      "id": 511424,
      "name": "丹棱县" },
    {
      "id": 511425,
      "name": "青神县" }] },

  {
    "id": 511500,
    "name": "宜宾市",
    "children": [{
      "id": 511502,
      "name": "翠屏区" },
    {
      "id": 511503,
      "name": "南溪区" },
    {
      "id": 511504,
      "name": "叙州区" },
    {
      "id": 511523,
      "name": "江安县" },
    {
      "id": 511524,
      "name": "长宁县" },
    {
      "id": 511525,
      "name": "高县" },
    {
      "id": 511526,
      "name": "珙县" },
    {
      "id": 511527,
      "name": "筠连县" },
    {
      "id": 511528,
      "name": "兴文县" },
    {
      "id": 511529,
      "name": "屏山县" }] },

  {
    "id": 511600,
    "name": "广安市",
    "children": [{
      "id": 511602,
      "name": "广安区" },
    {
      "id": 511603,
      "name": "前锋区" },
    {
      "id": 511621,
      "name": "岳池县" },
    {
      "id": 511622,
      "name": "武胜县" },
    {
      "id": 511623,
      "name": "邻水县" },
    {
      "id": 511681,
      "name": "华蓥市" }] },

  {
    "id": 511700,
    "name": "达州市",
    "children": [{
      "id": 511702,
      "name": "通川区" },
    {
      "id": 511703,
      "name": "达川区" },
    {
      "id": 511722,
      "name": "宣汉县" },
    {
      "id": 511723,
      "name": "开江县" },
    {
      "id": 511724,
      "name": "大竹县" },
    {
      "id": 511725,
      "name": "渠县" },
    {
      "id": 511781,
      "name": "万源市" }] },

  {
    "id": 511800,
    "name": "雅安市",
    "children": [{
      "id": 511802,
      "name": "雨城区" },
    {
      "id": 511803,
      "name": "名山区" },
    {
      "id": 511822,
      "name": "荥经县" },
    {
      "id": 511823,
      "name": "汉源县" },
    {
      "id": 511824,
      "name": "石棉县" },
    {
      "id": 511825,
      "name": "天全县" },
    {
      "id": 511826,
      "name": "芦山县" },
    {
      "id": 511827,
      "name": "宝兴县" }] },

  {
    "id": 511900,
    "name": "巴中市",
    "children": [{
      "id": 511902,
      "name": "巴州区" },
    {
      "id": 511903,
      "name": "恩阳区" },
    {
      "id": 511921,
      "name": "通江县" },
    {
      "id": 511922,
      "name": "南江县" },
    {
      "id": 511923,
      "name": "平昌县" }] },

  {
    "id": 512000,
    "name": "资阳市",
    "children": [{
      "id": 512002,
      "name": "雁江区" },
    {
      "id": 512021,
      "name": "安岳县" },
    {
      "id": 512022,
      "name": "乐至县" }] },

  {
    "id": 513200,
    "name": "阿坝藏族羌族自治州",
    "children": [{
      "id": 513201,
      "name": "马尔康市" },
    {
      "id": 513221,
      "name": "汶川县" },
    {
      "id": 513222,
      "name": "理县" },
    {
      "id": 513223,
      "name": "茂县" },
    {
      "id": 513224,
      "name": "松潘县" },
    {
      "id": 513225,
      "name": "九寨沟县" },
    {
      "id": 513226,
      "name": "金川县" },
    {
      "id": 513227,
      "name": "小金县" },
    {
      "id": 513228,
      "name": "黑水县" },
    {
      "id": 513230,
      "name": "壤塘县" },
    {
      "id": 513231,
      "name": "阿坝县" },
    {
      "id": 513232,
      "name": "若尔盖县" },
    {
      "id": 513233,
      "name": "红原县" }] },

  {
    "id": 513300,
    "name": "甘孜藏族自治州",
    "children": [{
      "id": 513301,
      "name": "康定市" },
    {
      "id": 513322,
      "name": "泸定县" },
    {
      "id": 513323,
      "name": "丹巴县" },
    {
      "id": 513324,
      "name": "九龙县" },
    {
      "id": 513325,
      "name": "雅江县" },
    {
      "id": 513326,
      "name": "道孚县" },
    {
      "id": 513327,
      "name": "炉霍县" },
    {
      "id": 513328,
      "name": "甘孜县" },
    {
      "id": 513329,
      "name": "新龙县" },
    {
      "id": 513330,
      "name": "德格县" },
    {
      "id": 513331,
      "name": "白玉县" },
    {
      "id": 513332,
      "name": "石渠县" },
    {
      "id": 513333,
      "name": "色达县" },
    {
      "id": 513334,
      "name": "理塘县" },
    {
      "id": 513335,
      "name": "巴塘县" },
    {
      "id": 513336,
      "name": "乡城县" },
    {
      "id": 513337,
      "name": "稻城县" },
    {
      "id": 513338,
      "name": "得荣县" }] },

  {
    "id": 513400,
    "name": "凉山彝族自治州",
    "children": [{
      "id": 513401,
      "name": "西昌市" },
    {
      "id": 513422,
      "name": "木里藏族自治县" },
    {
      "id": 513423,
      "name": "盐源县" },
    {
      "id": 513424,
      "name": "德昌县" },
    {
      "id": 513425,
      "name": "会理县" },
    {
      "id": 513426,
      "name": "会东县" },
    {
      "id": 513427,
      "name": "宁南县" },
    {
      "id": 513428,
      "name": "普格县" },
    {
      "id": 513429,
      "name": "布拖县" },
    {
      "id": 513430,
      "name": "金阳县" },
    {
      "id": 513431,
      "name": "昭觉县" },
    {
      "id": 513432,
      "name": "喜德县" },
    {
      "id": 513433,
      "name": "冕宁县" },
    {
      "id": 513434,
      "name": "越西县" },
    {
      "id": 513435,
      "name": "甘洛县" },
    {
      "id": 513436,
      "name": "美姑县" },
    {
      "id": 513437,
      "name": "雷波县" }] }] },


{
  "id": 520000,
  "name": "贵州省",
  "children": [{
    "id": 520100,
    "name": "贵阳市",
    "children": [{
      "id": 520102,
      "name": "南明区" },
    {
      "id": 520103,
      "name": "云岩区" },
    {
      "id": 520111,
      "name": "花溪区" },
    {
      "id": 520112,
      "name": "乌当区" },
    {
      "id": 520113,
      "name": "白云区" },
    {
      "id": 520115,
      "name": "观山湖区" },
    {
      "id": 520121,
      "name": "开阳县" },
    {
      "id": 520122,
      "name": "息烽县" },
    {
      "id": 520123,
      "name": "修文县" },
    {
      "id": 520181,
      "name": "清镇市" }] },

  {
    "id": 520200,
    "name": "六盘水市",
    "children": [{
      "id": 520201,
      "name": "钟山区" },
    {
      "id": 520203,
      "name": "六枝特区" },
    {
      "id": 520221,
      "name": "水城县" },
    {
      "id": 520281,
      "name": "盘州市" }] },

  {
    "id": 520300,
    "name": "遵义市",
    "children": [{
      "id": 520302,
      "name": "红花岗区" },
    {
      "id": 520303,
      "name": "汇川区" },
    {
      "id": 520304,
      "name": "播州区" },
    {
      "id": 520322,
      "name": "桐梓县" },
    {
      "id": 520323,
      "name": "绥阳县" },
    {
      "id": 520324,
      "name": "正安县" },
    {
      "id": 520325,
      "name": "道真仡佬族苗族自治县" },
    {
      "id": 520326,
      "name": "务川仡佬族苗族自治县" },
    {
      "id": 520327,
      "name": "凤冈县" },
    {
      "id": 520328,
      "name": "湄潭县" },
    {
      "id": 520329,
      "name": "余庆县" },
    {
      "id": 520330,
      "name": "习水县" },
    {
      "id": 520381,
      "name": "赤水市" },
    {
      "id": 520382,
      "name": "仁怀市" }] },

  {
    "id": 520400,
    "name": "安顺市",
    "children": [{
      "id": 520402,
      "name": "西秀区" },
    {
      "id": 520403,
      "name": "平坝区" },
    {
      "id": 520422,
      "name": "普定县" },
    {
      "id": 520423,
      "name": "镇宁布依族苗族自治县" },
    {
      "id": 520424,
      "name": "关岭布依族苗族自治县" },
    {
      "id": 520425,
      "name": "紫云苗族布依族自治县" }] },

  {
    "id": 520500,
    "name": "毕节市",
    "children": [{
      "id": 520502,
      "name": "七星关区" },
    {
      "id": 520521,
      "name": "大方县" },
    {
      "id": 520522,
      "name": "黔西县" },
    {
      "id": 520523,
      "name": "金沙县" },
    {
      "id": 520524,
      "name": "织金县" },
    {
      "id": 520525,
      "name": "纳雍县" },
    {
      "id": 520526,
      "name": "威宁彝族回族苗族自治县" },
    {
      "id": 520527,
      "name": "赫章县" }] },

  {
    "id": 520600,
    "name": "铜仁市",
    "children": [{
      "id": 520602,
      "name": "碧江区" },
    {
      "id": 520603,
      "name": "万山区" },
    {
      "id": 520621,
      "name": "江口县" },
    {
      "id": 520622,
      "name": "玉屏侗族自治县" },
    {
      "id": 520623,
      "name": "石阡县" },
    {
      "id": 520624,
      "name": "思南县" },
    {
      "id": 520625,
      "name": "印江土家族苗族自治县" },
    {
      "id": 520626,
      "name": "德江县" },
    {
      "id": 520627,
      "name": "沿河土家族自治县" },
    {
      "id": 520628,
      "name": "松桃苗族自治县" }] },

  {
    "id": 522300,
    "name": "黔西南布依族苗族自治州",
    "children": [{
      "id": 522301,
      "name": "兴义市" },
    {
      "id": 522302,
      "name": "兴仁市" },
    {
      "id": 522323,
      "name": "普安县" },
    {
      "id": 522324,
      "name": "晴隆县" },
    {
      "id": 522325,
      "name": "贞丰县" },
    {
      "id": 522326,
      "name": "望谟县" },
    {
      "id": 522327,
      "name": "册亨县" },
    {
      "id": 522328,
      "name": "安龙县" }] },

  {
    "id": 522600,
    "name": "黔东南苗族侗族自治州",
    "children": [{
      "id": 522601,
      "name": "凯里市" },
    {
      "id": 522622,
      "name": "黄平县" },
    {
      "id": 522623,
      "name": "施秉县" },
    {
      "id": 522624,
      "name": "三穗县" },
    {
      "id": 522625,
      "name": "镇远县" },
    {
      "id": 522626,
      "name": "岑巩县" },
    {
      "id": 522627,
      "name": "天柱县" },
    {
      "id": 522628,
      "name": "锦屏县" },
    {
      "id": 522629,
      "name": "剑河县" },
    {
      "id": 522630,
      "name": "台江县" },
    {
      "id": 522631,
      "name": "黎平县" },
    {
      "id": 522632,
      "name": "榕江县" },
    {
      "id": 522633,
      "name": "从江县" },
    {
      "id": 522634,
      "name": "雷山县" },
    {
      "id": 522635,
      "name": "麻江县" },
    {
      "id": 522636,
      "name": "丹寨县" }] },

  {
    "id": 522700,
    "name": "黔南布依族苗族自治州",
    "children": [{
      "id": 522701,
      "name": "都匀市" },
    {
      "id": 522702,
      "name": "福泉市" },
    {
      "id": 522722,
      "name": "荔波县" },
    {
      "id": 522723,
      "name": "贵定县" },
    {
      "id": 522725,
      "name": "瓮安县" },
    {
      "id": 522726,
      "name": "独山县" },
    {
      "id": 522727,
      "name": "平塘县" },
    {
      "id": 522728,
      "name": "罗甸县" },
    {
      "id": 522729,
      "name": "长顺县" },
    {
      "id": 522730,
      "name": "龙里县" },
    {
      "id": 522731,
      "name": "惠水县" },
    {
      "id": 522732,
      "name": "三都水族自治县" }] }] },


{
  "id": 530000,
  "name": "云南省",
  "children": [{
    "id": 530100,
    "name": "昆明市",
    "children": [{
      "id": 530102,
      "name": "五华区" },
    {
      "id": 530103,
      "name": "盘龙区" },
    {
      "id": 530111,
      "name": "官渡区" },
    {
      "id": 530112,
      "name": "西山区" },
    {
      "id": 530113,
      "name": "东川区" },
    {
      "id": 530114,
      "name": "呈贡区" },
    {
      "id": 530115,
      "name": "晋宁区" },
    {
      "id": 530124,
      "name": "富民县" },
    {
      "id": 530125,
      "name": "宜良县" },
    {
      "id": 530126,
      "name": "石林彝族自治县" },
    {
      "id": 530127,
      "name": "嵩明县" },
    {
      "id": 530128,
      "name": "禄劝彝族苗族自治县" },
    {
      "id": 530129,
      "name": "寻甸回族彝族自治县" },
    {
      "id": 530181,
      "name": "安宁市" }] },

  {
    "id": 530300,
    "name": "曲靖市",
    "children": [{
      "id": 530302,
      "name": "麒麟区" },
    {
      "id": 530303,
      "name": "沾益区" },
    {
      "id": 530304,
      "name": "马龙区" },
    {
      "id": 530322,
      "name": "陆良县" },
    {
      "id": 530323,
      "name": "师宗县" },
    {
      "id": 530324,
      "name": "罗平县" },
    {
      "id": 530325,
      "name": "富源县" },
    {
      "id": 530326,
      "name": "会泽县" },
    {
      "id": 530381,
      "name": "宣威市" }] },

  {
    "id": 530400,
    "name": "玉溪市",
    "children": [{
      "id": 530402,
      "name": "红塔区" },
    {
      "id": 530403,
      "name": "江川区" },
    {
      "id": 530422,
      "name": "澄江县" },
    {
      "id": 530423,
      "name": "通海县" },
    {
      "id": 530424,
      "name": "华宁县" },
    {
      "id": 530425,
      "name": "易门县" },
    {
      "id": 530426,
      "name": "峨山彝族自治县" },
    {
      "id": 530427,
      "name": "新平彝族傣族自治县" },
    {
      "id": 530428,
      "name": "元江县" }] },

  {
    "id": 530500,
    "name": "保山市",
    "children": [{
      "id": 530502,
      "name": "隆阳区" },
    {
      "id": 530521,
      "name": "施甸县" },
    {
      "id": 530523,
      "name": "龙陵县" },
    {
      "id": 530524,
      "name": "昌宁县" },
    {
      "id": 530581,
      "name": "腾冲市" }] },

  {
    "id": 530600,
    "name": "昭通市",
    "children": [{
      "id": 530602,
      "name": "昭阳区" },
    {
      "id": 530621,
      "name": "鲁甸县" },
    {
      "id": 530622,
      "name": "巧家县" },
    {
      "id": 530623,
      "name": "盐津县" },
    {
      "id": 530624,
      "name": "大关县" },
    {
      "id": 530625,
      "name": "永善县" },
    {
      "id": 530626,
      "name": "绥江县" },
    {
      "id": 530627,
      "name": "镇雄县" },
    {
      "id": 530628,
      "name": "彝良县" },
    {
      "id": 530629,
      "name": "威信县" },
    {
      "id": 530681,
      "name": "水富市" }] },

  {
    "id": 530700,
    "name": "丽江市",
    "children": [{
      "id": 530702,
      "name": "古城区" },
    {
      "id": 530721,
      "name": "玉龙纳西族自治县" },
    {
      "id": 530722,
      "name": "永胜县" },
    {
      "id": 530723,
      "name": "华坪县" },
    {
      "id": 530724,
      "name": "宁蒗彝族自治县" }] },

  {
    "id": 530800,
    "name": "普洱市",
    "children": [{
      "id": 530802,
      "name": "思茅区" },
    {
      "id": 530821,
      "name": "宁洱哈尼族彝族自治县" },
    {
      "id": 530822,
      "name": "墨江哈尼族自治县" },
    {
      "id": 530823,
      "name": "景东彝族自治县" },
    {
      "id": 530824,
      "name": "景谷傣族彝族自治县" },
    {
      "id": 530825,
      "name": "镇沅县" },
    {
      "id": 530826,
      "name": "江城哈尼族彝族自治县" },
    {
      "id": 530827,
      "name": "孟连县" },
    {
      "id": 530828,
      "name": "澜沧拉祜族自治县" },
    {
      "id": 530829,
      "name": "西盟佤族自治县" }] },

  {
    "id": 530900,
    "name": "临沧市",
    "children": [{
      "id": 530902,
      "name": "临翔区" },
    {
      "id": 530921,
      "name": "凤庆县" },
    {
      "id": 530922,
      "name": "云县" },
    {
      "id": 530923,
      "name": "永德县" },
    {
      "id": 530924,
      "name": "镇康县" },
    {
      "id": 530925,
      "name": "双江县" },
    {
      "id": 530926,
      "name": "耿马傣族佤族自治县" },
    {
      "id": 530927,
      "name": "沧源佤族自治县" }] },

  {
    "id": 532300,
    "name": "楚雄彝族自治州",
    "children": [{
      "id": 532301,
      "name": "楚雄市" },
    {
      "id": 532322,
      "name": "双柏县" },
    {
      "id": 532323,
      "name": "牟定县" },
    {
      "id": 532324,
      "name": "南华县" },
    {
      "id": 532325,
      "name": "姚安县" },
    {
      "id": 532326,
      "name": "大姚县" },
    {
      "id": 532327,
      "name": "永仁县" },
    {
      "id": 532328,
      "name": "元谋县" },
    {
      "id": 532329,
      "name": "武定县" },
    {
      "id": 532331,
      "name": "禄丰县" }] },

  {
    "id": 532500,
    "name": "红河哈尼族彝族自治州",
    "children": [{
      "id": 532501,
      "name": "个旧市" },
    {
      "id": 532502,
      "name": "开远市" },
    {
      "id": 532503,
      "name": "蒙自市" },
    {
      "id": 532504,
      "name": "弥勒市" },
    {
      "id": 532523,
      "name": "屏边苗族自治县" },
    {
      "id": 532524,
      "name": "建水县" },
    {
      "id": 532525,
      "name": "石屏县" },
    {
      "id": 532527,
      "name": "泸西县" },
    {
      "id": 532528,
      "name": "元阳县" },
    {
      "id": 532529,
      "name": "红河县" },
    {
      "id": 532530,
      "name": "金平苗族瑶族傣族自治县" },
    {
      "id": 532531,
      "name": "绿春县" },
    {
      "id": 532532,
      "name": "河口瑶族自治县" }] },

  {
    "id": 532600,
    "name": "文山壮族苗族自治州",
    "children": [{
      "id": 532601,
      "name": "文山市" },
    {
      "id": 532622,
      "name": "砚山县" },
    {
      "id": 532623,
      "name": "西畴县" },
    {
      "id": 532624,
      "name": "麻栗坡县" },
    {
      "id": 532625,
      "name": "马关县" },
    {
      "id": 532626,
      "name": "丘北县" },
    {
      "id": 532627,
      "name": "广南县" },
    {
      "id": 532628,
      "name": "富宁县" }] },

  {
    "id": 532800,
    "name": "西双版纳傣族自治州",
    "children": [{
      "id": 532801,
      "name": "景洪市" },
    {
      "id": 532822,
      "name": "勐海县" },
    {
      "id": 532823,
      "name": "勐腊县" }] },

  {
    "id": 532900,
    "name": "大理白族自治州",
    "children": [{
      "id": 532901,
      "name": "大理市" },
    {
      "id": 532922,
      "name": "漾濞彝族自治县" },
    {
      "id": 532923,
      "name": "祥云县" },
    {
      "id": 532924,
      "name": "宾川县" },
    {
      "id": 532925,
      "name": "弥渡县" },
    {
      "id": 532926,
      "name": "南涧彝族自治县" },
    {
      "id": 532927,
      "name": "巍山彝族回族自治县" },
    {
      "id": 532928,
      "name": "永平县" },
    {
      "id": 532929,
      "name": "云龙县" },
    {
      "id": 532930,
      "name": "洱源县" },
    {
      "id": 532931,
      "name": "剑川县" },
    {
      "id": 532932,
      "name": "鹤庆县" }] },

  {
    "id": 533100,
    "name": "德宏傣族景颇族自治州",
    "children": [{
      "id": 533102,
      "name": "瑞丽市" },
    {
      "id": 533103,
      "name": "芒市" },
    {
      "id": 533122,
      "name": "梁河县" },
    {
      "id": 533123,
      "name": "盈江县" },
    {
      "id": 533124,
      "name": "陇川县" }] },

  {
    "id": 533300,
    "name": "怒江傈僳族自治州",
    "children": [{
      "id": 533301,
      "name": "泸水市" },
    {
      "id": 533323,
      "name": "福贡县" },
    {
      "id": 533324,
      "name": "贡山独龙族怒族自治县" },
    {
      "id": 533325,
      "name": "兰坪白族普米族自治县" }] },

  {
    "id": 533400,
    "name": "迪庆藏族自治州",
    "children": [{
      "id": 533401,
      "name": "香格里拉市" },
    {
      "id": 533422,
      "name": "德钦县" },
    {
      "id": 533423,
      "name": "维西傈僳族自治县" }] }] },


{
  "id": 540000,
  "name": "西藏自治区",
  "children": [{
    "id": 540100,
    "name": "拉萨市",
    "children": [{
      "id": 540102,
      "name": "城关区" },
    {
      "id": 540103,
      "name": "堆龙德庆区" },
    {
      "id": 540104,
      "name": "达孜区" },
    {
      "id": 540121,
      "name": "林周县" },
    {
      "id": 540122,
      "name": "当雄县" },
    {
      "id": 540123,
      "name": "尼木县" },
    {
      "id": 540124,
      "name": "曲水县" },
    {
      "id": 540127,
      "name": "墨竹工卡县" }] },

  {
    "id": 540200,
    "name": "日喀则市",
    "children": [{
      "id": 540202,
      "name": "桑珠孜区" },
    {
      "id": 540221,
      "name": "南木林县" },
    {
      "id": 540222,
      "name": "江孜县" },
    {
      "id": 540223,
      "name": "定日县" },
    {
      "id": 540224,
      "name": "萨迦县" },
    {
      "id": 540225,
      "name": "拉孜县" },
    {
      "id": 540226,
      "name": "昂仁县" },
    {
      "id": 540227,
      "name": "谢通门县" },
    {
      "id": 540228,
      "name": "白朗县" },
    {
      "id": 540229,
      "name": "仁布县" },
    {
      "id": 540230,
      "name": "康马县" },
    {
      "id": 540231,
      "name": "定结县" },
    {
      "id": 540232,
      "name": "仲巴县" },
    {
      "id": 540233,
      "name": "亚东县" },
    {
      "id": 540234,
      "name": "吉隆县" },
    {
      "id": 540235,
      "name": "聂拉木县" },
    {
      "id": 540236,
      "name": "萨嘎县" },
    {
      "id": 540237,
      "name": "岗巴县" }] },

  {
    "id": 540300,
    "name": "昌都市",
    "children": [{
      "id": 540302,
      "name": "卡若区" },
    {
      "id": 540321,
      "name": "江达县" },
    {
      "id": 540322,
      "name": "贡觉县" },
    {
      "id": 540323,
      "name": "类乌齐县" },
    {
      "id": 540324,
      "name": "丁青县" },
    {
      "id": 540325,
      "name": "察雅县" },
    {
      "id": 540326,
      "name": "八宿县" },
    {
      "id": 540327,
      "name": "左贡县" },
    {
      "id": 540328,
      "name": "芒康县" },
    {
      "id": 540329,
      "name": "洛隆县" },
    {
      "id": 540330,
      "name": "边坝县" }] },

  {
    "id": 540400,
    "name": "林芝市",
    "children": [{
      "id": 540402,
      "name": "巴宜区" },
    {
      "id": 540421,
      "name": "工布江达县" },
    {
      "id": 540422,
      "name": "米林县" },
    {
      "id": 540423,
      "name": "墨脱县" },
    {
      "id": 540424,
      "name": "波密县" },
    {
      "id": 540425,
      "name": "察隅县" },
    {
      "id": 540426,
      "name": "朗县" }] },

  {
    "id": 540500,
    "name": "山南市",
    "children": [{
      "id": 540502,
      "name": "乃东区" },
    {
      "id": 540521,
      "name": "扎囊县" },
    {
      "id": 540522,
      "name": "贡嘎县" },
    {
      "id": 540523,
      "name": "桑日县" },
    {
      "id": 540524,
      "name": "琼结县" },
    {
      "id": 540525,
      "name": "曲松县" },
    {
      "id": 540526,
      "name": "措美县" },
    {
      "id": 540527,
      "name": "洛扎县" },
    {
      "id": 540528,
      "name": "加查县" },
    {
      "id": 540529,
      "name": "隆子县" },
    {
      "id": 540530,
      "name": "错那县" },
    {
      "id": 540531,
      "name": "浪卡子县" }] },

  {
    "id": 540600,
    "name": "那曲市",
    "children": [{
      "id": 540602,
      "name": "色尼区" },
    {
      "id": 540621,
      "name": "嘉黎县" },
    {
      "id": 540622,
      "name": "比如县" },
    {
      "id": 540623,
      "name": "聂荣县" },
    {
      "id": 540624,
      "name": "安多县" },
    {
      "id": 540625,
      "name": "申扎县" },
    {
      "id": 540626,
      "name": "索县" },
    {
      "id": 540627,
      "name": "班戈县" },
    {
      "id": 540628,
      "name": "巴青县" },
    {
      "id": 540629,
      "name": "尼玛县" },
    {
      "id": 540630,
      "name": "双湖县" }] },

  {
    "id": 542500,
    "name": "阿里地区",
    "children": [{
      "id": 542521,
      "name": "普兰县" },
    {
      "id": 542522,
      "name": "札达县" },
    {
      "id": 542523,
      "name": "噶尔县" },
    {
      "id": 542524,
      "name": "日土县" },
    {
      "id": 542525,
      "name": "革吉县" },
    {
      "id": 542526,
      "name": "改则县" },
    {
      "id": 542527,
      "name": "措勤县" }] }] },


{
  "id": 610000,
  "name": "陕西省",
  "children": [{
    "id": 610100,
    "name": "西安市",
    "children": [{
      "id": 610102,
      "name": "新城区" },
    {
      "id": 610103,
      "name": "碑林区" },
    {
      "id": 610104,
      "name": "莲湖区" },
    {
      "id": 610111,
      "name": "灞桥区" },
    {
      "id": 610112,
      "name": "未央区" },
    {
      "id": 610113,
      "name": "雁塔区" },
    {
      "id": 610114,
      "name": "阎良区" },
    {
      "id": 610115,
      "name": "临潼区" },
    {
      "id": 610116,
      "name": "长安区" },
    {
      "id": 610117,
      "name": "高陵区" },
    {
      "id": 610118,
      "name": "鄠邑区" },
    {
      "id": 610122,
      "name": "蓝田县" },
    {
      "id": 610124,
      "name": "周至县" }] },

  {
    "id": 610200,
    "name": "铜川市",
    "children": [{
      "id": 610202,
      "name": "王益区" },
    {
      "id": 610203,
      "name": "印台区" },
    {
      "id": 610204,
      "name": "耀州区" },
    {
      "id": 610222,
      "name": "宜君县" }] },

  {
    "id": 610300,
    "name": "宝鸡市",
    "children": [{
      "id": 610302,
      "name": "渭滨区" },
    {
      "id": 610303,
      "name": "金台区" },
    {
      "id": 610304,
      "name": "陈仓区" },
    {
      "id": 610322,
      "name": "凤翔县" },
    {
      "id": 610323,
      "name": "岐山县" },
    {
      "id": 610324,
      "name": "扶风县" },
    {
      "id": 610326,
      "name": "眉县" },
    {
      "id": 610327,
      "name": "陇县" },
    {
      "id": 610328,
      "name": "千阳县" },
    {
      "id": 610329,
      "name": "麟游县" },
    {
      "id": 610330,
      "name": "凤县" },
    {
      "id": 610331,
      "name": "太白县" }] },

  {
    "id": 610400,
    "name": "咸阳市",
    "children": [{
      "id": 610402,
      "name": "秦都区" },
    {
      "id": 610403,
      "name": "杨陵区" },
    {
      "id": 610404,
      "name": "渭城区" },
    {
      "id": 610422,
      "name": "三原县" },
    {
      "id": 610423,
      "name": "泾阳县" },
    {
      "id": 610424,
      "name": "乾县" },
    {
      "id": 610425,
      "name": "礼泉县" },
    {
      "id": 610426,
      "name": "永寿县" },
    {
      "id": 610428,
      "name": "长武县" },
    {
      "id": 610429,
      "name": "旬邑县" },
    {
      "id": 610430,
      "name": "淳化县" },
    {
      "id": 610431,
      "name": "武功县" },
    {
      "id": 610481,
      "name": "兴平市" },
    {
      "id": 610482,
      "name": "彬州市" }] },

  {
    "id": 610500,
    "name": "渭南市",
    "children": [{
      "id": 610502,
      "name": "临渭区" },
    {
      "id": 610503,
      "name": "华州区" },
    {
      "id": 610522,
      "name": "潼关县" },
    {
      "id": 610523,
      "name": "大荔县" },
    {
      "id": 610524,
      "name": "合阳县" },
    {
      "id": 610525,
      "name": "澄城县" },
    {
      "id": 610526,
      "name": "蒲城县" },
    {
      "id": 610527,
      "name": "白水县" },
    {
      "id": 610528,
      "name": "富平县" },
    {
      "id": 610581,
      "name": "韩城市" },
    {
      "id": 610582,
      "name": "华阴市" }] },

  {
    "id": 610600,
    "name": "延安市",
    "children": [{
      "id": 610602,
      "name": "宝塔区" },
    {
      "id": 610603,
      "name": "安塞区" },
    {
      "id": 610621,
      "name": "延长县" },
    {
      "id": 610622,
      "name": "延川县" },
    {
      "id": 610623,
      "name": "子长县" },
    {
      "id": 610625,
      "name": "志丹县" },
    {
      "id": 610626,
      "name": "吴起县" },
    {
      "id": 610627,
      "name": "甘泉县" },
    {
      "id": 610628,
      "name": "富县" },
    {
      "id": 610629,
      "name": "洛川县" },
    {
      "id": 610630,
      "name": "宜川县" },
    {
      "id": 610631,
      "name": "黄龙县" },
    {
      "id": 610632,
      "name": "黄陵县" }] },

  {
    "id": 610700,
    "name": "汉中市",
    "children": [{
      "id": 610702,
      "name": "汉台区" },
    {
      "id": 610703,
      "name": "南郑区" },
    {
      "id": 610722,
      "name": "城固县" },
    {
      "id": 610723,
      "name": "洋县" },
    {
      "id": 610724,
      "name": "西乡县" },
    {
      "id": 610725,
      "name": "勉县" },
    {
      "id": 610726,
      "name": "宁强县" },
    {
      "id": 610727,
      "name": "略阳县" },
    {
      "id": 610728,
      "name": "镇巴县" },
    {
      "id": 610729,
      "name": "留坝县" },
    {
      "id": 610730,
      "name": "佛坪县" }] },

  {
    "id": 610800,
    "name": "榆林市",
    "children": [{
      "id": 610802,
      "name": "榆阳区" },
    {
      "id": 610803,
      "name": "横山区" },
    {
      "id": 610822,
      "name": "府谷县" },
    {
      "id": 610824,
      "name": "靖边县" },
    {
      "id": 610825,
      "name": "定边县" },
    {
      "id": 610826,
      "name": "绥德县" },
    {
      "id": 610827,
      "name": "米脂县" },
    {
      "id": 610828,
      "name": "佳县" },
    {
      "id": 610829,
      "name": "吴堡县" },
    {
      "id": 610830,
      "name": "清涧县" },
    {
      "id": 610831,
      "name": "子洲县" },
    {
      "id": 610881,
      "name": "神木市" }] },

  {
    "id": 610900,
    "name": "安康市",
    "children": [{
      "id": 610902,
      "name": "汉滨区" },
    {
      "id": 610921,
      "name": "汉阴县" },
    {
      "id": 610922,
      "name": "石泉县" },
    {
      "id": 610923,
      "name": "宁陕县" },
    {
      "id": 610924,
      "name": "紫阳县" },
    {
      "id": 610925,
      "name": "岚皋县" },
    {
      "id": 610926,
      "name": "平利县" },
    {
      "id": 610927,
      "name": "镇坪县" },
    {
      "id": 610928,
      "name": "旬阳县" },
    {
      "id": 610929,
      "name": "白河县" }] },

  {
    "id": 611000,
    "name": "商洛市",
    "children": [{
      "id": 611002,
      "name": "商州区" },
    {
      "id": 611021,
      "name": "洛南县" },
    {
      "id": 611022,
      "name": "丹凤县" },
    {
      "id": 611023,
      "name": "商南县" },
    {
      "id": 611024,
      "name": "山阳县" },
    {
      "id": 611025,
      "name": "镇安县" },
    {
      "id": 611026,
      "name": "柞水县" }] }] },


{
  "id": 620000,
  "name": "甘肃省",
  "children": [{
    "id": 620100,
    "name": "兰州市",
    "children": [{
      "id": 620102,
      "name": "城关区" },
    {
      "id": 620103,
      "name": "七里河区" },
    {
      "id": 620104,
      "name": "西固区" },
    {
      "id": 620105,
      "name": "安宁区" },
    {
      "id": 620111,
      "name": "红古区" },
    {
      "id": 620121,
      "name": "永登县" },
    {
      "id": 620122,
      "name": "皋兰县" },
    {
      "id": 620123,
      "name": "榆中县" }] },

  {
    "id": 620200,
    "name": "嘉峪关市",
    "children": [{
      "id": 620299,
      "name": "嘉峪关市" }] },

  {
    "id": 620300,
    "name": "金昌市",
    "children": [{
      "id": 620302,
      "name": "金川区" },
    {
      "id": 620321,
      "name": "永昌县" }] },

  {
    "id": 620400,
    "name": "白银市",
    "children": [{
      "id": 620402,
      "name": "白银区" },
    {
      "id": 620403,
      "name": "平川区" },
    {
      "id": 620421,
      "name": "靖远县" },
    {
      "id": 620422,
      "name": "会宁县" },
    {
      "id": 620423,
      "name": "景泰县" }] },

  {
    "id": 620500,
    "name": "天水市",
    "children": [{
      "id": 620502,
      "name": "秦州区" },
    {
      "id": 620503,
      "name": "麦积区" },
    {
      "id": 620521,
      "name": "清水县" },
    {
      "id": 620522,
      "name": "秦安县" },
    {
      "id": 620523,
      "name": "甘谷县" },
    {
      "id": 620524,
      "name": "武山县" },
    {
      "id": 620525,
      "name": "张家川回族自治县" }] },

  {
    "id": 620600,
    "name": "武威市",
    "children": [{
      "id": 620602,
      "name": "凉州区" },
    {
      "id": 620621,
      "name": "民勤县" },
    {
      "id": 620622,
      "name": "古浪县" },
    {
      "id": 620623,
      "name": "天祝藏族自治县" }] },

  {
    "id": 620700,
    "name": "张掖市",
    "children": [{
      "id": 620702,
      "name": "甘州区" },
    {
      "id": 620721,
      "name": "肃南裕固族自治县" },
    {
      "id": 620722,
      "name": "民乐县" },
    {
      "id": 620723,
      "name": "临泽县" },
    {
      "id": 620724,
      "name": "高台县" },
    {
      "id": 620725,
      "name": "山丹县" }] },

  {
    "id": 620800,
    "name": "平凉市",
    "children": [{
      "id": 620802,
      "name": "崆峒区" },
    {
      "id": 620821,
      "name": "泾川县" },
    {
      "id": 620822,
      "name": "灵台县" },
    {
      "id": 620823,
      "name": "崇信县" },
    {
      "id": 620825,
      "name": "庄浪县" },
    {
      "id": 620826,
      "name": "静宁县" },
    {
      "id": 620881,
      "name": "华亭市" }] },

  {
    "id": 620900,
    "name": "酒泉市",
    "children": [{
      "id": 620902,
      "name": "肃州区" },
    {
      "id": 620921,
      "name": "金塔县" },
    {
      "id": 620922,
      "name": "瓜州县" },
    {
      "id": 620923,
      "name": "肃北蒙古族自治县" },
    {
      "id": 620924,
      "name": "阿克塞哈萨克族自治县" },
    {
      "id": 620981,
      "name": "玉门市" },
    {
      "id": 620982,
      "name": "敦煌市" }] },

  {
    "id": 621000,
    "name": "庆阳市",
    "children": [{
      "id": 621002,
      "name": "西峰区" },
    {
      "id": 621021,
      "name": "庆城县" },
    {
      "id": 621022,
      "name": "环县" },
    {
      "id": 621023,
      "name": "华池县" },
    {
      "id": 621024,
      "name": "合水县" },
    {
      "id": 621025,
      "name": "正宁县" },
    {
      "id": 621026,
      "name": "宁县" },
    {
      "id": 621027,
      "name": "镇原县" }] },

  {
    "id": 621100,
    "name": "定西市",
    "children": [{
      "id": 621102,
      "name": "安定区" },
    {
      "id": 621121,
      "name": "通渭县" },
    {
      "id": 621122,
      "name": "陇西县" },
    {
      "id": 621123,
      "name": "渭源县" },
    {
      "id": 621124,
      "name": "临洮县" },
    {
      "id": 621125,
      "name": "漳县" },
    {
      "id": 621126,
      "name": "岷县" }] },

  {
    "id": 621200,
    "name": "陇南市",
    "children": [{
      "id": 621202,
      "name": "武都区" },
    {
      "id": 621221,
      "name": "成县" },
    {
      "id": 621222,
      "name": "文县" },
    {
      "id": 621223,
      "name": "宕昌县" },
    {
      "id": 621224,
      "name": "康县" },
    {
      "id": 621225,
      "name": "西和县" },
    {
      "id": 621226,
      "name": "礼县" },
    {
      "id": 621227,
      "name": "徽县" },
    {
      "id": 621228,
      "name": "两当县" }] },

  {
    "id": 622900,
    "name": "临夏回族自治州",
    "children": [{
      "id": 622901,
      "name": "临夏市" },
    {
      "id": 622921,
      "name": "临夏县" },
    {
      "id": 622922,
      "name": "康乐县" },
    {
      "id": 622923,
      "name": "永靖县" },
    {
      "id": 622924,
      "name": "广河县" },
    {
      "id": 622925,
      "name": "和政县" },
    {
      "id": 622926,
      "name": "东乡族自治县" },
    {
      "id": 622927,
      "name": "积石山县" }] },

  {
    "id": 623000,
    "name": "甘南藏族自治州",
    "children": [{
      "id": 623001,
      "name": "合作市" },
    {
      "id": 623021,
      "name": "临潭县" },
    {
      "id": 623022,
      "name": "卓尼县" },
    {
      "id": 623023,
      "name": "舟曲县" },
    {
      "id": 623024,
      "name": "迭部县" },
    {
      "id": 623025,
      "name": "玛曲县" },
    {
      "id": 623026,
      "name": "碌曲县" },
    {
      "id": 623027,
      "name": "夏河县" }] }] },


{
  "id": 630000,
  "name": "青海省",
  "children": [{
    "id": 630100,
    "name": "西宁市",
    "children": [{
      "id": 630102,
      "name": "城东区" },
    {
      "id": 630103,
      "name": "城中区" },
    {
      "id": 630104,
      "name": "城西区" },
    {
      "id": 630105,
      "name": "城北区" },
    {
      "id": 630121,
      "name": "大通回族土族自治县" },
    {
      "id": 630122,
      "name": "湟中县" },
    {
      "id": 630123,
      "name": "湟源县" }] },

  {
    "id": 630200,
    "name": "海东市",
    "children": [{
      "id": 630202,
      "name": "乐都区" },
    {
      "id": 630203,
      "name": "平安区" },
    {
      "id": 630222,
      "name": "民和回族土族自治县" },
    {
      "id": 630223,
      "name": "互助土族自治县" },
    {
      "id": 630224,
      "name": "化隆回族自治县" },
    {
      "id": 630225,
      "name": "循化撒拉族自治县" }] },

  {
    "id": 632200,
    "name": "海北藏族自治州",
    "children": [{
      "id": 632221,
      "name": "门源回族自治县" },
    {
      "id": 632222,
      "name": "祁连县" },
    {
      "id": 632223,
      "name": "海晏县" },
    {
      "id": 632224,
      "name": "刚察县" }] },

  {
    "id": 632300,
    "name": "黄南藏族自治州",
    "children": [{
      "id": 632321,
      "name": "同仁县" },
    {
      "id": 632322,
      "name": "尖扎县" },
    {
      "id": 632323,
      "name": "泽库县" },
    {
      "id": 632324,
      "name": "河南蒙古族自治县" }] },

  {
    "id": 632500,
    "name": "海南藏族自治州",
    "children": [{
      "id": 632521,
      "name": "共和县" },
    {
      "id": 632522,
      "name": "同德县" },
    {
      "id": 632523,
      "name": "贵德县" },
    {
      "id": 632524,
      "name": "兴海县" },
    {
      "id": 632525,
      "name": "贵南县" }] },

  {
    "id": 632600,
    "name": "果洛藏族自治州",
    "children": [{
      "id": 632621,
      "name": "玛沁县" },
    {
      "id": 632622,
      "name": "班玛县" },
    {
      "id": 632623,
      "name": "甘德县" },
    {
      "id": 632624,
      "name": "达日县" },
    {
      "id": 632625,
      "name": "久治县" },
    {
      "id": 632626,
      "name": "玛多县" }] },

  {
    "id": 632700,
    "name": "玉树藏族自治州",
    "children": [{
      "id": 632701,
      "name": "玉树市" },
    {
      "id": 632722,
      "name": "杂多县" },
    {
      "id": 632723,
      "name": "称多县" },
    {
      "id": 632724,
      "name": "治多县" },
    {
      "id": 632725,
      "name": "囊谦县" },
    {
      "id": 632726,
      "name": "曲麻莱县" }] },

  {
    "id": 632800,
    "name": "海西蒙古族藏族自治州",
    "children": [{
      "id": 632801,
      "name": "格尔木市" },
    {
      "id": 632802,
      "name": "德令哈市" },
    {
      "id": 632803,
      "name": "茫崖市" },
    {
      "id": 632821,
      "name": "乌兰县" },
    {
      "id": 632822,
      "name": "都兰县" },
    {
      "id": 632823,
      "name": "天峻县" },
    {
      "id": 632825,
      "name": "大柴旦行政委员会" }] }] },


{
  "id": 640000,
  "name": "宁夏回族自治区",
  "children": [{
    "id": 640100,
    "name": "银川市",
    "children": [{
      "id": 640104,
      "name": "兴庆区" },
    {
      "id": 640105,
      "name": "西夏区" },
    {
      "id": 640106,
      "name": "金凤区" },
    {
      "id": 640121,
      "name": "永宁县" },
    {
      "id": 640122,
      "name": "贺兰县" },
    {
      "id": 640181,
      "name": "灵武市" }] },

  {
    "id": 640200,
    "name": "石嘴山市",
    "children": [{
      "id": 640202,
      "name": "大武口区" },
    {
      "id": 640205,
      "name": "惠农区" },
    {
      "id": 640221,
      "name": "平罗县" }] },

  {
    "id": 640300,
    "name": "吴忠市",
    "children": [{
      "id": 640302,
      "name": "利通区" },
    {
      "id": 640303,
      "name": "红寺堡区" },
    {
      "id": 640323,
      "name": "盐池县" },
    {
      "id": 640324,
      "name": "同心县" },
    {
      "id": 640381,
      "name": "青铜峡市" }] },

  {
    "id": 640400,
    "name": "固原市",
    "children": [{
      "id": 640402,
      "name": "原州区" },
    {
      "id": 640422,
      "name": "西吉县" },
    {
      "id": 640423,
      "name": "隆德县" },
    {
      "id": 640424,
      "name": "泾源县" },
    {
      "id": 640425,
      "name": "彭阳县" }] },

  {
    "id": 640500,
    "name": "中卫市",
    "children": [{
      "id": 640502,
      "name": "沙坡头区" },
    {
      "id": 640521,
      "name": "中宁县" },
    {
      "id": 640522,
      "name": "海原县" }] }] },


{
  "id": 650000,
  "name": "新疆维吾尔自治区",
  "children": [{
    "id": 650100,
    "name": "乌鲁木齐市",
    "children": [{
      "id": 650102,
      "name": "天山区" },
    {
      "id": 650103,
      "name": "沙依巴克区" },
    {
      "id": 650104,
      "name": "新市区" },
    {
      "id": 650105,
      "name": "水磨沟区" },
    {
      "id": 650106,
      "name": "头屯河区" },
    {
      "id": 650107,
      "name": "达坂城区" },
    {
      "id": 650109,
      "name": "米东区" },
    {
      "id": 650121,
      "name": "乌鲁木齐县" }] },

  {
    "id": 650200,
    "name": "克拉玛依市",
    "children": [{
      "id": 650202,
      "name": "独山子区" },
    {
      "id": 650203,
      "name": "克拉玛依区" },
    {
      "id": 650204,
      "name": "白碱滩区" },
    {
      "id": 650205,
      "name": "乌尔禾区" }] },

  {
    "id": 650400,
    "name": "吐鲁番市",
    "children": [{
      "id": 650402,
      "name": "高昌区" },
    {
      "id": 650421,
      "name": "鄯善县" },
    {
      "id": 650422,
      "name": "托克逊县" }] },

  {
    "id": 650500,
    "name": "哈密市",
    "children": [{
      "id": 650502,
      "name": "伊州区" },
    {
      "id": 650521,
      "name": "巴里坤哈萨克自治县" },
    {
      "id": 650522,
      "name": "伊吾县" }] },

  {
    "id": 652300,
    "name": "昌吉回族自治州",
    "children": [{
      "id": 652301,
      "name": "昌吉市" },
    {
      "id": 652302,
      "name": "阜康市" },
    {
      "id": 652323,
      "name": "呼图壁县" },
    {
      "id": 652324,
      "name": "玛纳斯县" },
    {
      "id": 652325,
      "name": "奇台县" },
    {
      "id": 652327,
      "name": "吉木萨尔县" },
    {
      "id": 652328,
      "name": "木垒哈萨克自治县" }] },

  {
    "id": 652700,
    "name": "博尔塔拉蒙古自治州",
    "children": [{
      "id": 652701,
      "name": "博乐市" },
    {
      "id": 652702,
      "name": "阿拉山口市" },
    {
      "id": 652722,
      "name": "精河县" },
    {
      "id": 652723,
      "name": "温泉县" }] },

  {
    "id": 652800,
    "name": "巴音郭楞蒙古自治州",
    "children": [{
      "id": 652801,
      "name": "库尔勒市" },
    {
      "id": 652822,
      "name": "轮台县" },
    {
      "id": 652823,
      "name": "尉犁县" },
    {
      "id": 652824,
      "name": "若羌县" },
    {
      "id": 652825,
      "name": "且末县" },
    {
      "id": 652826,
      "name": "焉耆回族自治县" },
    {
      "id": 652827,
      "name": "和静县" },
    {
      "id": 652828,
      "name": "和硕县" },
    {
      "id": 652829,
      "name": "博湖县" }] },

  {
    "id": 652900,
    "name": "阿克苏地区",
    "children": [{
      "id": 652901,
      "name": "阿克苏市" },
    {
      "id": 652922,
      "name": "温宿县" },
    {
      "id": 652923,
      "name": "库车县" },
    {
      "id": 652924,
      "name": "沙雅县" },
    {
      "id": 652925,
      "name": "新和县" },
    {
      "id": 652926,
      "name": "拜城县" },
    {
      "id": 652927,
      "name": "乌什县" },
    {
      "id": 652928,
      "name": "阿瓦提县" },
    {
      "id": 652929,
      "name": "柯坪县" }] },

  {
    "id": 653000,
    "name": "克孜勒苏柯尔克孜自治州",
    "children": [{
      "id": 653001,
      "name": "阿图什市" },
    {
      "id": 653022,
      "name": "阿克陶县" },
    {
      "id": 653023,
      "name": "阿合奇县" },
    {
      "id": 653024,
      "name": "乌恰县" }] },

  {
    "id": 653100,
    "name": "喀什地区",
    "children": [{
      "id": 653101,
      "name": "喀什市" },
    {
      "id": 653121,
      "name": "疏附县" },
    {
      "id": 653122,
      "name": "疏勒县" },
    {
      "id": 653123,
      "name": "英吉沙县" },
    {
      "id": 653124,
      "name": "泽普县" },
    {
      "id": 653125,
      "name": "莎车县" },
    {
      "id": 653126,
      "name": "叶城县" },
    {
      "id": 653127,
      "name": "麦盖提县" },
    {
      "id": 653128,
      "name": "岳普湖县" },
    {
      "id": 653129,
      "name": "伽师县" },
    {
      "id": 653130,
      "name": "巴楚县" },
    {
      "id": 653131,
      "name": "塔什库尔干塔吉克自治县" }] },

  {
    "id": 653200,
    "name": "和田地区",
    "children": [{
      "id": 653201,
      "name": "和田市" },
    {
      "id": 653221,
      "name": "和田县" },
    {
      "id": 653222,
      "name": "墨玉县" },
    {
      "id": 653223,
      "name": "皮山县" },
    {
      "id": 653224,
      "name": "洛浦县" },
    {
      "id": 653225,
      "name": "策勒县" },
    {
      "id": 653226,
      "name": "于田县" },
    {
      "id": 653227,
      "name": "民丰县" }] },

  {
    "id": 654000,
    "name": "伊犁哈萨克自治州",
    "children": [{
      "id": 654002,
      "name": "伊宁市" },
    {
      "id": 654003,
      "name": "奎屯市" },
    {
      "id": 654004,
      "name": "霍尔果斯市" },
    {
      "id": 654021,
      "name": "伊宁县" },
    {
      "id": 654022,
      "name": "察布查尔锡伯自治县" },
    {
      "id": 654023,
      "name": "霍城县" },
    {
      "id": 654024,
      "name": "巩留县" },
    {
      "id": 654025,
      "name": "新源县" },
    {
      "id": 654026,
      "name": "昭苏县" },
    {
      "id": 654027,
      "name": "特克斯县" },
    {
      "id": 654028,
      "name": "尼勒克县" }] },

  {
    "id": 654200,
    "name": "塔城地区",
    "children": [{
      "id": 654201,
      "name": "塔城市" },
    {
      "id": 654202,
      "name": "乌苏市" },
    {
      "id": 654221,
      "name": "额敏县" },
    {
      "id": 654223,
      "name": "沙湾县" },
    {
      "id": 654224,
      "name": "托里县" },
    {
      "id": 654225,
      "name": "裕民县" },
    {
      "id": 654226,
      "name": "和布克赛尔蒙古自治县" }] },

  {
    "id": 654300,
    "name": "阿勒泰地区",
    "children": [{
      "id": 654301,
      "name": "阿勒泰市" },
    {
      "id": 654321,
      "name": "布尔津县" },
    {
      "id": 654322,
      "name": "富蕴县" },
    {
      "id": 654323,
      "name": "福海县" },
    {
      "id": 654324,
      "name": "哈巴河县" },
    {
      "id": 654325,
      "name": "青河县" },
    {
      "id": 654326,
      "name": "吉木乃县" }] },

  {
    "id": 659001,
    "name": "石河子市",
    "children": [{
      "id": 659001001,
      "name": "新城街道" },
    {
      "id": 659001002,
      "name": "向阳街道" },
    {
      "id": 659001003,
      "name": "红山街道" },
    {
      "id": 659001004,
      "name": "老街街道" },
    {
      "id": 659001005,
      "name": "东城街道" },
    {
      "id": 659001100,
      "name": "北泉镇" },
    {
      "id": 659001200,
      "name": "石河子镇" },
    {
      "id": 659001500,
      "name": "兵团一五二团" }] },

  {
    "id": 659002,
    "name": "阿拉尔市",
    "children": [{
      "id": 659002001,
      "name": "金银川路街道" },
    {
      "id": 659002002,
      "name": "幸福路街道" },
    {
      "id": 659002003,
      "name": "青松路街道" },
    {
      "id": 659002004,
      "name": "南口街道" },
    {
      "id": 659002200,
      "name": "托喀依乡" },
    {
      "id": 659002500,
      "name": "兵团七团" },
    {
      "id": 659002501,
      "name": "兵团八团" },
    {
      "id": 659002503,
      "name": "兵团十团" },
    {
      "id": 659002505,
      "name": "兵团十二团" },
    {
      "id": 659002507,
      "name": "兵团十四团" },
    {
      "id": 659002508,
      "name": "兵团五团" },
    {
      "id": 659002509,
      "name": "兵团十六团" },
    {
      "id": 659002511,
      "name": "兵团第一师水利水电工程处" },
    {
      "id": 659002513,
      "name": "阿拉尔农场" },
    {
      "id": 659002514,
      "name": "兵团第一师幸福农场" },
    {
      "id": 659002901,
      "name": "兵团二团" },
    {
      "id": 659002902,
      "name": "兵团农一师沙井子水利管理处" },
    {
      "id": 659002964,
      "name": "兵团九团" },
    {
      "id": 659002966,
      "name": "兵团十一团" },
    {
      "id": 659002967,
      "name": "兵团十三团" },
    {
      "id": 659002968,
      "name": "兵团十五团" }] },

  {
    "id": 659003,
    "name": "图木舒克市",
    "children": [{
      "id": 659003001,
      "name": "齐干却勒街道" },
    {
      "id": 659003002,
      "name": "前海街道" },
    {
      "id": 659003003,
      "name": "永安坝街道" },
    {
      "id": 659003504,
      "name": "兵团四十四团" },
    {
      "id": 659003509,
      "name": "兵团四十九团" },
    {
      "id": 659003513,
      "name": "兵团五十三团" },
    {
      "id": 659003960,
      "name": "喀拉拜勒镇" },
    {
      "id": 659003964,
      "name": "兵团五十一团" },
    {
      "id": 659003965,
      "name": "兵团五十二团" },
    {
      "id": 659003966,
      "name": "兵团五十团" }] },

  {
    "id": 659004,
    "name": "五家渠市",
    "children": [{
      "id": 659004001,
      "name": "军垦路街道" },
    {
      "id": 659004002,
      "name": "青湖路街道" },
    {
      "id": 659004003,
      "name": "人民路街道" },
    {
      "id": 659004500,
      "name": "兵团一零一团" },
    {
      "id": 659004960,
      "name": "蔡家湖镇" },
    {
      "id": 659004961,
      "name": "梧桐镇" }] },

  {
    "id": 659005,
    "name": "北屯市",
    "children": [{
      "id": 659005502,
      "name": "兵团一八七团" },
    {
      "id": 659005503,
      "name": "兵团一八八团" }] },

  {
    "id": 659006,
    "name": "铁门关市",
    "children": [{
      "id": 659006501,
      "name": "兵团二十九团" },
    {
      "id": 659006502,
      "name": "农二师三十团" }] },

  {
    "id": 659007,
    "name": "双河市",
    "children": [{
      "id": 659007501,
      "name": "兵团八十一团" },
    {
      "id": 659007502,
      "name": "兵团八十四团" },
    {
      "id": 659007504,
      "name": "兵团八十六团" },
    {
      "id": 659007505,
      "name": "兵团八十九团" },
    {
      "id": 659007506,
      "name": "兵团九十团" }] },

  {
    "id": 659008,
    "name": "可克达拉市",
    "children": [{
      "id": 659008502,
      "name": "兵团六十七团" },
    {
      "id": 659008503,
      "name": "兵团六十八团" },
    {
      "id": 659008507,
      "name": "兵团六十三团" },
    {
      "id": 659008508,
      "name": "兵团六十四团" },
    {
      "id": 659008509,
      "name": "兵团六十六团" }] },

  {
    "id": 659009,
    "name": "昆玉市",
    "children": [{
      "id": 659009400,
      "name": "兵团一牧场" },
    {
      "id": 659009401,
      "name": "兵团皮山农场" },
    {
      "id": 659009501,
      "name": "兵团二二四团" }] }] },


{
  "id": 710000,
  "name": "台湾省",
  "children": [{
    "id": 710100,
    "name": "台北市",
    "children": [{
      "id": 710101,
      "name": "中正区" },
    {
      "id": 710102,
      "name": "大同区" },
    {
      "id": 710103,
      "name": "中山区" },
    {
      "id": 710104,
      "name": "松山区" },
    {
      "id": 710105,
      "name": "大安区" },
    {
      "id": 710106,
      "name": "万华区" },
    {
      "id": 710107,
      "name": "信义区" },
    {
      "id": 710108,
      "name": "士林区" },
    {
      "id": 710109,
      "name": "北投区" },
    {
      "id": 710110,
      "name": "内湖区" },
    {
      "id": 710111,
      "name": "南港区" },
    {
      "id": 710112,
      "name": "文山区" }] },

  {
    "id": 710200,
    "name": "高雄市",
    "children": [{
      "id": 710201,
      "name": "新兴区" },
    {
      "id": 710202,
      "name": "前金区" },
    {
      "id": 710203,
      "name": "苓雅区" },
    {
      "id": 710204,
      "name": "盐埕区" },
    {
      "id": 710205,
      "name": "鼓山区" },
    {
      "id": 710206,
      "name": "旗津区" },
    {
      "id": 710207,
      "name": "前镇区" },
    {
      "id": 710208,
      "name": "三民区" },
    {
      "id": 710209,
      "name": "左营区" },
    {
      "id": 710210,
      "name": "楠梓区" },
    {
      "id": 710211,
      "name": "小港区" },
    {
      "id": 710242,
      "name": "仁武区" },
    {
      "id": 710243,
      "name": "大社区" },
    {
      "id": 710244,
      "name": "冈山区" },
    {
      "id": 710245,
      "name": "路竹区" },
    {
      "id": 710246,
      "name": "阿莲区" },
    {
      "id": 710247,
      "name": "田寮区" },
    {
      "id": 710248,
      "name": "燕巢区" },
    {
      "id": 710249,
      "name": "桥头区" },
    {
      "id": 710250,
      "name": "梓官区" },
    {
      "id": 710251,
      "name": "弥陀区" },
    {
      "id": 710252,
      "name": "永安区" },
    {
      "id": 710253,
      "name": "湖内区" },
    {
      "id": 710254,
      "name": "凤山区" },
    {
      "id": 710255,
      "name": "大寮区" },
    {
      "id": 710256,
      "name": "林园区" },
    {
      "id": 710257,
      "name": "鸟松区" },
    {
      "id": 710258,
      "name": "大树区" },
    {
      "id": 710259,
      "name": "旗山区" },
    {
      "id": 710260,
      "name": "美浓区" },
    {
      "id": 710261,
      "name": "六龟区" },
    {
      "id": 710262,
      "name": "内门区" },
    {
      "id": 710263,
      "name": "杉林区" },
    {
      "id": 710264,
      "name": "甲仙区" },
    {
      "id": 710265,
      "name": "桃源区" },
    {
      "id": 710266,
      "name": "那玛夏区" },
    {
      "id": 710267,
      "name": "茂林区" },
    {
      "id": 710268,
      "name": "茄萣区" }] },

  {
    "id": 710300,
    "name": "台南市",
    "children": [{
      "id": 710301,
      "name": "中西区" },
    {
      "id": 710302,
      "name": "东区" },
    {
      "id": 710303,
      "name": "南区" },
    {
      "id": 710304,
      "name": "北区" },
    {
      "id": 710305,
      "name": "安平区" },
    {
      "id": 710306,
      "name": "安南区" },
    {
      "id": 710339,
      "name": "永康区" },
    {
      "id": 710340,
      "name": "归仁区" },
    {
      "id": 710341,
      "name": "新化区" },
    {
      "id": 710342,
      "name": "左镇区" },
    {
      "id": 710343,
      "name": "玉井区" },
    {
      "id": 710344,
      "name": "楠西区" },
    {
      "id": 710345,
      "name": "南化区" },
    {
      "id": 710346,
      "name": "仁德区" },
    {
      "id": 710347,
      "name": "关庙区" },
    {
      "id": 710348,
      "name": "龙崎区" },
    {
      "id": 710349,
      "name": "官田区" },
    {
      "id": 710350,
      "name": "麻豆区" },
    {
      "id": 710351,
      "name": "佳里区" },
    {
      "id": 710352,
      "name": "西港区" },
    {
      "id": 710353,
      "name": "七股区" },
    {
      "id": 710354,
      "name": "将军区" },
    {
      "id": 710355,
      "name": "学甲区" },
    {
      "id": 710356,
      "name": "北门区" },
    {
      "id": 710357,
      "name": "新营区" },
    {
      "id": 710358,
      "name": "后壁区" },
    {
      "id": 710359,
      "name": "白河区" },
    {
      "id": 710360,
      "name": "东山区" },
    {
      "id": 710361,
      "name": "六甲区" },
    {
      "id": 710362,
      "name": "下营区" },
    {
      "id": 710363,
      "name": "柳营区" },
    {
      "id": 710364,
      "name": "盐水区" },
    {
      "id": 710365,
      "name": "善化区" },
    {
      "id": 710366,
      "name": "大内区" },
    {
      "id": 710367,
      "name": "山上区" },
    {
      "id": 710368,
      "name": "新市区" },
    {
      "id": 710369,
      "name": "安定区" }] },

  {
    "id": 710400,
    "name": "台中市",
    "children": [{
      "id": 710401,
      "name": "中区" },
    {
      "id": 710402,
      "name": "东区" },
    {
      "id": 710403,
      "name": "南区" },
    {
      "id": 710404,
      "name": "西区" },
    {
      "id": 710405,
      "name": "北区" },
    {
      "id": 710406,
      "name": "北屯区" },
    {
      "id": 710407,
      "name": "西屯区" },
    {
      "id": 710408,
      "name": "南屯区" },
    {
      "id": 710431,
      "name": "太平区" },
    {
      "id": 710432,
      "name": "大里区" },
    {
      "id": 710433,
      "name": "雾峰区" },
    {
      "id": 710434,
      "name": "乌日区" },
    {
      "id": 710435,
      "name": "丰原区" },
    {
      "id": 710436,
      "name": "后里区" },
    {
      "id": 710437,
      "name": "石冈区" },
    {
      "id": 710438,
      "name": "东势区" },
    {
      "id": 710439,
      "name": "和平区" },
    {
      "id": 710440,
      "name": "新社区" },
    {
      "id": 710441,
      "name": "潭子区" },
    {
      "id": 710442,
      "name": "大雅区" },
    {
      "id": 710443,
      "name": "神冈区" },
    {
      "id": 710444,
      "name": "大肚区" },
    {
      "id": 710445,
      "name": "沙鹿区" },
    {
      "id": 710446,
      "name": "龙井区" },
    {
      "id": 710447,
      "name": "梧栖区" },
    {
      "id": 710448,
      "name": "清水区" },
    {
      "id": 710449,
      "name": "大甲区" },
    {
      "id": 710450,
      "name": "外埔区" },
    {
      "id": 710451,
      "name": "大安区" }] },

  {
    "id": 710600,
    "name": "南投县",
    "children": [{
      "id": 710614,
      "name": "南投市" },
    {
      "id": 710615,
      "name": "中寮乡" },
    {
      "id": 710616,
      "name": "草屯镇" },
    {
      "id": 710617,
      "name": "国姓乡" },
    {
      "id": 710618,
      "name": "埔里镇" },
    {
      "id": 710619,
      "name": "仁爱乡" },
    {
      "id": 710620,
      "name": "名间乡" },
    {
      "id": 710621,
      "name": "集集镇" },
    {
      "id": 710622,
      "name": "水里乡" },
    {
      "id": 710623,
      "name": "鱼池乡" },
    {
      "id": 710624,
      "name": "信义乡" },
    {
      "id": 710625,
      "name": "竹山镇" },
    {
      "id": 710626,
      "name": "鹿谷乡" }] },

  {
    "id": 710700,
    "name": "基隆市",
    "children": [{
      "id": 710701,
      "name": "仁爱区" },
    {
      "id": 710702,
      "name": "信义区" },
    {
      "id": 710703,
      "name": "中正区" },
    {
      "id": 710704,
      "name": "中山区" },
    {
      "id": 710705,
      "name": "安乐区" },
    {
      "id": 710706,
      "name": "暖暖区" },
    {
      "id": 710707,
      "name": "七堵区" }] },

  {
    "id": 710800,
    "name": "新竹市",
    "children": [{
      "id": 710801,
      "name": "东区" },
    {
      "id": 710802,
      "name": "北区" },
    {
      "id": 710803,
      "name": "香山区" }] },

  {
    "id": 710900,
    "name": "嘉义市",
    "children": [{
      "id": 710901,
      "name": "东区" },
    {
      "id": 710902,
      "name": "西区" }] },

  {
    "id": 711100,
    "name": "新北市",
    "children": [{
      "id": 711130,
      "name": "万里区" },
    {
      "id": 711131,
      "name": "金山区" },
    {
      "id": 711132,
      "name": "板桥区" },
    {
      "id": 711133,
      "name": "汐止区" },
    {
      "id": 711134,
      "name": "深坑区" },
    {
      "id": 711135,
      "name": "石碇区" },
    {
      "id": 711136,
      "name": "瑞芳区" },
    {
      "id": 711137,
      "name": "平溪区" },
    {
      "id": 711138,
      "name": "双溪区" },
    {
      "id": 711139,
      "name": "贡寮区" },
    {
      "id": 711140,
      "name": "新店区" },
    {
      "id": 711141,
      "name": "坪林区" },
    {
      "id": 711142,
      "name": "乌来区" },
    {
      "id": 711143,
      "name": "永和区" },
    {
      "id": 711144,
      "name": "中和区" },
    {
      "id": 711145,
      "name": "土城区" },
    {
      "id": 711146,
      "name": "三峡区" },
    {
      "id": 711147,
      "name": "树林区" },
    {
      "id": 711148,
      "name": "莺歌区" },
    {
      "id": 711149,
      "name": "三重区" },
    {
      "id": 711150,
      "name": "新庄区" },
    {
      "id": 711151,
      "name": "泰山区" },
    {
      "id": 711152,
      "name": "林口区" },
    {
      "id": 711153,
      "name": "芦洲区" },
    {
      "id": 711154,
      "name": "五股区" },
    {
      "id": 711155,
      "name": "八里区" },
    {
      "id": 711156,
      "name": "淡水区" },
    {
      "id": 711157,
      "name": "三芝区" },
    {
      "id": 711158,
      "name": "石门区" }] },

  {
    "id": 711200,
    "name": "宜兰县",
    "children": [{
      "id": 711214,
      "name": "宜兰市" },
    {
      "id": 711215,
      "name": "头城镇" },
    {
      "id": 711216,
      "name": "礁溪乡" },
    {
      "id": 711217,
      "name": "壮围乡" },
    {
      "id": 711218,
      "name": "员山乡" },
    {
      "id": 711219,
      "name": "罗东镇" },
    {
      "id": 711220,
      "name": "三星乡" },
    {
      "id": 711221,
      "name": "大同乡" },
    {
      "id": 711222,
      "name": "五结乡" },
    {
      "id": 711223,
      "name": "冬山乡" },
    {
      "id": 711224,
      "name": "苏澳镇" },
    {
      "id": 711225,
      "name": "南澳乡" }] },

  {
    "id": 711300,
    "name": "新竹县",
    "children": [{
      "id": 711314,
      "name": "竹北市" },
    {
      "id": 711315,
      "name": "湖口乡" },
    {
      "id": 711316,
      "name": "新丰乡" },
    {
      "id": 711317,
      "name": "新埔镇" },
    {
      "id": 711318,
      "name": "关西镇" },
    {
      "id": 711319,
      "name": "芎林乡" },
    {
      "id": 711320,
      "name": "宝山乡" },
    {
      "id": 711321,
      "name": "竹东镇" },
    {
      "id": 711322,
      "name": "五峰乡" },
    {
      "id": 711323,
      "name": "横山乡" },
    {
      "id": 711324,
      "name": "尖石乡" },
    {
      "id": 711325,
      "name": "北埔乡" },
    {
      "id": 711326,
      "name": "峨眉乡" }] },

  {
    "id": 711400,
    "name": "桃园市",
    "children": [{
      "id": 711414,
      "name": "中坜区" },
    {
      "id": 711415,
      "name": "平镇区" },
    {
      "id": 711416,
      "name": "龙潭区" },
    {
      "id": 711417,
      "name": "杨梅区" },
    {
      "id": 711418,
      "name": "新屋区" },
    {
      "id": 711419,
      "name": "观音区" },
    {
      "id": 711420,
      "name": "桃园区" },
    {
      "id": 711421,
      "name": "龟山区" },
    {
      "id": 711422,
      "name": "八德区" },
    {
      "id": 711423,
      "name": "大溪区" },
    {
      "id": 711424,
      "name": "复兴区" },
    {
      "id": 711425,
      "name": "大园区" },
    {
      "id": 711426,
      "name": "芦竹区" }] },

  {
    "id": 711500,
    "name": "苗栗县",
    "children": [{
      "id": 711519,
      "name": "竹南镇" },
    {
      "id": 711520,
      "name": "头份市" },
    {
      "id": 711521,
      "name": "三湾乡" },
    {
      "id": 711522,
      "name": "南庄乡" },
    {
      "id": 711523,
      "name": "狮潭乡" },
    {
      "id": 711524,
      "name": "后龙镇" },
    {
      "id": 711525,
      "name": "通霄镇" },
    {
      "id": 711526,
      "name": "苑里镇" },
    {
      "id": 711527,
      "name": "苗栗市" },
    {
      "id": 711528,
      "name": "造桥乡" },
    {
      "id": 711529,
      "name": "头屋乡" },
    {
      "id": 711530,
      "name": "公馆乡" },
    {
      "id": 711531,
      "name": "大湖乡" },
    {
      "id": 711532,
      "name": "泰安乡" },
    {
      "id": 711533,
      "name": "铜锣乡" },
    {
      "id": 711534,
      "name": "三义乡" },
    {
      "id": 711535,
      "name": "西湖乡" },
    {
      "id": 711536,
      "name": "卓兰镇" }] },

  {
    "id": 711700,
    "name": "彰化县",
    "children": [{
      "id": 711727,
      "name": "彰化市" },
    {
      "id": 711728,
      "name": "芬园乡" },
    {
      "id": 711729,
      "name": "花坛乡" },
    {
      "id": 711730,
      "name": "秀水乡" },
    {
      "id": 711731,
      "name": "鹿港镇" },
    {
      "id": 711732,
      "name": "福兴乡" },
    {
      "id": 711733,
      "name": "线西乡" },
    {
      "id": 711734,
      "name": "和美镇" },
    {
      "id": 711735,
      "name": "伸港乡" },
    {
      "id": 711736,
      "name": "员林市" },
    {
      "id": 711737,
      "name": "社头乡" },
    {
      "id": 711738,
      "name": "永靖乡" },
    {
      "id": 711739,
      "name": "埔心乡" },
    {
      "id": 711740,
      "name": "溪湖镇" },
    {
      "id": 711741,
      "name": "大村乡" },
    {
      "id": 711742,
      "name": "埔盐乡" },
    {
      "id": 711743,
      "name": "田中镇" },
    {
      "id": 711744,
      "name": "北斗镇" },
    {
      "id": 711745,
      "name": "田尾乡" },
    {
      "id": 711746,
      "name": "埤头乡" },
    {
      "id": 711747,
      "name": "溪州乡" },
    {
      "id": 711748,
      "name": "竹塘乡" },
    {
      "id": 711749,
      "name": "二林镇" },
    {
      "id": 711750,
      "name": "大城乡" },
    {
      "id": 711751,
      "name": "芳苑乡" },
    {
      "id": 711752,
      "name": "二水乡" }] },

  {
    "id": 711900,
    "name": "嘉义县",
    "children": [{
      "id": 711919,
      "name": "番路乡" },
    {
      "id": 711920,
      "name": "梅山乡" },
    {
      "id": 711921,
      "name": "竹崎乡" },
    {
      "id": 711922,
      "name": "阿里山乡" },
    {
      "id": 711923,
      "name": "中埔乡" },
    {
      "id": 711924,
      "name": "大埔乡" },
    {
      "id": 711925,
      "name": "水上乡" },
    {
      "id": 711926,
      "name": "鹿草乡" },
    {
      "id": 711927,
      "name": "太保市" },
    {
      "id": 711928,
      "name": "朴子市" },
    {
      "id": 711929,
      "name": "东石乡" },
    {
      "id": 711930,
      "name": "六脚乡" },
    {
      "id": 711931,
      "name": "新港乡" },
    {
      "id": 711932,
      "name": "民雄乡" },
    {
      "id": 711933,
      "name": "大林镇" },
    {
      "id": 711934,
      "name": "溪口乡" },
    {
      "id": 711935,
      "name": "义竹乡" },
    {
      "id": 711936,
      "name": "布袋镇" }] },

  {
    "id": 712100,
    "name": "云林县",
    "children": [{
      "id": 712121,
      "name": "斗南镇" },
    {
      "id": 712122,
      "name": "大埤乡" },
    {
      "id": 712123,
      "name": "虎尾镇" },
    {
      "id": 712124,
      "name": "土库镇" },
    {
      "id": 712125,
      "name": "褒忠乡" },
    {
      "id": 712126,
      "name": "东势乡" },
    {
      "id": 712127,
      "name": "台西乡" },
    {
      "id": 712128,
      "name": "仑背乡" },
    {
      "id": 712129,
      "name": "麦寮乡" },
    {
      "id": 712130,
      "name": "斗六市" },
    {
      "id": 712131,
      "name": "林内乡" },
    {
      "id": 712132,
      "name": "古坑乡" },
    {
      "id": 712133,
      "name": "莿桐乡" },
    {
      "id": 712134,
      "name": "西螺镇" },
    {
      "id": 712135,
      "name": "二仑乡" },
    {
      "id": 712136,
      "name": "北港镇" },
    {
      "id": 712137,
      "name": "水林乡" },
    {
      "id": 712138,
      "name": "口湖乡" },
    {
      "id": 712139,
      "name": "四湖乡" },
    {
      "id": 712140,
      "name": "元长乡" }] },

  {
    "id": 712400,
    "name": "屏东县",
    "children": [{
      "id": 712434,
      "name": "屏东市" },
    {
      "id": 712435,
      "name": "三地门乡" },
    {
      "id": 712436,
      "name": "雾台乡" },
    {
      "id": 712437,
      "name": "玛家乡" },
    {
      "id": 712438,
      "name": "九如乡" },
    {
      "id": 712439,
      "name": "里港乡" },
    {
      "id": 712440,
      "name": "高树乡" },
    {
      "id": 712441,
      "name": "盐埔乡" },
    {
      "id": 712442,
      "name": "长治乡" },
    {
      "id": 712443,
      "name": "麟洛乡" },
    {
      "id": 712444,
      "name": "竹田乡" },
    {
      "id": 712445,
      "name": "内埔乡" },
    {
      "id": 712446,
      "name": "万丹乡" },
    {
      "id": 712447,
      "name": "潮州镇" },
    {
      "id": 712448,
      "name": "泰武乡" },
    {
      "id": 712449,
      "name": "来义乡" },
    {
      "id": 712450,
      "name": "万峦乡" },
    {
      "id": 712451,
      "name": "崁顶乡" },
    {
      "id": 712452,
      "name": "新埤乡" },
    {
      "id": 712453,
      "name": "南州乡" },
    {
      "id": 712454,
      "name": "林边乡" },
    {
      "id": 712455,
      "name": "东港镇" },
    {
      "id": 712456,
      "name": "琉球乡" },
    {
      "id": 712457,
      "name": "佳冬乡" },
    {
      "id": 712458,
      "name": "新园乡" },
    {
      "id": 712459,
      "name": "枋寮乡" },
    {
      "id": 712460,
      "name": "枋山乡" },
    {
      "id": 712461,
      "name": "春日乡" },
    {
      "id": 712462,
      "name": "狮子乡" },
    {
      "id": 712463,
      "name": "车城乡" },
    {
      "id": 712464,
      "name": "牡丹乡" },
    {
      "id": 712465,
      "name": "恒春镇" },
    {
      "id": 712466,
      "name": "满州乡" }] },

  {
    "id": 712500,
    "name": "台东县",
    "children": [{
      "id": 712517,
      "name": "台东市" },
    {
      "id": 712518,
      "name": "绿岛乡" },
    {
      "id": 712519,
      "name": "兰屿乡" },
    {
      "id": 712520,
      "name": "延平乡" },
    {
      "id": 712521,
      "name": "卑南乡" },
    {
      "id": 712522,
      "name": "鹿野乡" },
    {
      "id": 712523,
      "name": "关山镇" },
    {
      "id": 712524,
      "name": "海端乡" },
    {
      "id": 712525,
      "name": "池上乡" },
    {
      "id": 712526,
      "name": "东河乡" },
    {
      "id": 712527,
      "name": "成功镇" },
    {
      "id": 712528,
      "name": "长滨乡" },
    {
      "id": 712529,
      "name": "金峰乡" },
    {
      "id": 712530,
      "name": "大武乡" },
    {
      "id": 712531,
      "name": "达仁乡" },
    {
      "id": 712532,
      "name": "太麻里乡" }] },

  {
    "id": 712600,
    "name": "花莲县",
    "children": [{
      "id": 712615,
      "name": "花莲市" },
    {
      "id": 712616,
      "name": "新城乡" },
    {
      "id": 712618,
      "name": "秀林乡" },
    {
      "id": 712619,
      "name": "吉安乡" },
    {
      "id": 712620,
      "name": "寿丰乡" },
    {
      "id": 712621,
      "name": "凤林镇" },
    {
      "id": 712622,
      "name": "光复乡" },
    {
      "id": 712623,
      "name": "丰滨乡" },
    {
      "id": 712624,
      "name": "瑞穗乡" },
    {
      "id": 712625,
      "name": "万荣乡" },
    {
      "id": 712626,
      "name": "玉里镇" },
    {
      "id": 712627,
      "name": "卓溪乡" },
    {
      "id": 712628,
      "name": "富里乡" }] },

  {
    "id": 712700,
    "name": "澎湖县",
    "children": [{
      "id": 712707,
      "name": "马公市" },
    {
      "id": 712708,
      "name": "西屿乡" },
    {
      "id": 712709,
      "name": "望安乡" },
    {
      "id": 712710,
      "name": "七美乡" },
    {
      "id": 712711,
      "name": "白沙乡" },
    {
      "id": 712712,
      "name": "湖西乡" }] }] },


{
  "id": 810000,
  "name": "香港特别行政区",
  "children": [{
    "id": 810100,
    "name": "香港特别行政区",
    "children": [{
      "id": 810101,
      "name": "中西区" },
    {
      "id": 810102,
      "name": "东区" },
    {
      "id": 810103,
      "name": "九龙城区" },
    {
      "id": 810104,
      "name": "观塘区" },
    {
      "id": 810105,
      "name": "南区" },
    {
      "id": 810106,
      "name": "深水埗区" },
    {
      "id": 810107,
      "name": "湾仔区" },
    {
      "id": 810108,
      "name": "黄大仙区" },
    {
      "id": 810109,
      "name": "油尖旺区" },
    {
      "id": 810110,
      "name": "离岛区" },
    {
      "id": 810111,
      "name": "葵青区" },
    {
      "id": 810112,
      "name": "北区" },
    {
      "id": 810113,
      "name": "西贡区" },
    {
      "id": 810114,
      "name": "沙田区" },
    {
      "id": 810115,
      "name": "屯门区" },
    {
      "id": 810116,
      "name": "大埔区" },
    {
      "id": 810117,
      "name": "荃湾区" },
    {
      "id": 810118,
      "name": "元朗区" }] }] },


{
  "id": 820000,
  "name": "澳门特别行政区",
  "children": [{
    "id": 820100,
    "name": "澳门特别行政区",
    "children": [{
      "id": 820101,
      "name": "澳门半岛" },
    {
      "id": 820102,
      "name": "凼仔" },
    {
      "id": 820103,
      "name": "路凼城" },
    {
      "id": 820104,
      "name": "路环" }] }] }];

/***/ }),

/***/ 5:
/*!************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/pages.json ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 83:
/*!*************************************************************************!*\
  !*** /Volumes/OS X Base System/Richar/kgclient/pages/schedul/base64.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = Base64;function Base64() {
  // 私钥
  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  // 加密
  this.encode = function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = _utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output +
      _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
      _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }
    return output;
  };
  // 解密
  this.decode = function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    if (input == undefined || input == null) {

    } else {
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }
      }
      output = _utf8_decode(output);
      return output;
    }

  };
  // private method for UTF-8 encoding
  var _utf8_encode = function _utf8_encode(string) {
    console.log("string", string);
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }
    return utftext;
  };
  // private method for UTF-8 decoding
  var _utf8_decode = function _utf8_decode(utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode((c & 31) << 6 | c2 & 63);
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        i += 3;
      }
    }
    return string;
  };
}

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map