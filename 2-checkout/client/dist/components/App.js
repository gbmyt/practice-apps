"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
var _HomePage = _interopRequireDefault(require("./HomePage.jsx"));
var _AccountForm = _interopRequireDefault(require("./AccountForm.jsx"));
var _ShippingForm = _interopRequireDefault(require("./ShippingForm.jsx"));
var _PaymentForm = _interopRequireDefault(require("./PaymentForm.jsx"));
var _Confirmation = _interopRequireDefault(require("./Confirmation.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var handleError = require('../../../utils/error-handler').handleError;
var validateFormInput = require('../../../utils/validateFormInput').validateFormInput;
var App = function App() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    shouldRedirect = _useState2[0],
    setShouldRedirect = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    formFields = _useState4[0],
    setFormFields = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    userDetails = _useState6[0],
    setUserDetails = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    shippingDetails = _useState8[0],
    setShippingDetails = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    paymentDetails = _useState10[0],
    setPaymentDetails = _useState10[1];
  var notFirstRender = Object.keys(formFields).length;
  var _useState11 = (0, _react.useState)({
      Username: '',
      Password: '',
      Email: '',
      Session: '',
      AddrOne: '',
      AddrTwo: '',
      City: '',
      State: '',
      Zip: '',
      Phone: '',
      CC: '',
      Expiry: '',
      CVV: '',
      BillingZip: ''
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    response = _useState12[0],
    setResponse = _useState12[1];

  // =============================================
  //                  TO-DO:
  // 1.	Validation doesn't work on first render
  // (when form fields haven't been changed yet)
  //
  // 2. notFirstRender isn't accurate. Its just a key count
  //		for the response state object and breaks
  // 		validation after the first Account page
  // =============================================
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e, form) {
      var validatedForm;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            validatedForm = validateFormInput(document.getElementById(form.name));
            if (validatedForm.validated) {
              _context.next = 7;
              break;
            }
            e.preventDefault();
            handleError(validatedForm);
            _context.next = 9;
            break;
          case 7:
            _context.next = 9;
            return _axios["default"].post("".concat(form.path), _objectSpread({}, form.payload));
          case 9:
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log('There was a problem submitting account details\n', _context.t0);
          case 14:
            console.log("".concat(form.name, " Details Submitted"), response);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function handleSubmit(_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-component"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_HomePage["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/account",
    element: /*#__PURE__*/_react["default"].createElement(_AccountForm["default"], {
      response: response,
      formFields: formFields,
      setFormFields: setFormFields,
      userDetails: userDetails,
      setUserDetails: setUserDetails,
      notFirstRender: notFirstRender,
      setResponse: setResponse,
      shouldRedirect: shouldRedirect,
      setShouldRedirect: setShouldRedirect,
      handleSubmit: handleSubmit
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/shipping",
    element: /*#__PURE__*/_react["default"].createElement(_ShippingForm["default"], {
      response: response,
      formFields: formFields,
      setFormFields: setFormFields,
      shippingDetails: shippingDetails,
      setShippingDetails: setShippingDetails,
      notFirstRender: notFirstRender,
      setResponse: setResponse,
      shouldRedirect: shouldRedirect,
      setShouldRedirect: setShouldRedirect,
      handleSubmit: handleSubmit
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/payment",
    element: /*#__PURE__*/_react["default"].createElement(_PaymentForm["default"], {
      response: response,
      formFields: formFields,
      setFormFields: setFormFields,
      paymentDetails: paymentDetails,
      setPaymentDetails: setPaymentDetails,
      notFirstRender: notFirstRender,
      setResponse: setResponse,
      shouldRedirect: shouldRedirect,
      setShouldRedirect: setShouldRedirect,
      handleSubmit: handleSubmit
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/confirmation",
    element: /*#__PURE__*/_react["default"].createElement(_Confirmation["default"], {
      response: response
    })
  })));
};
var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJoYW5kbGVFcnJvciIsInJlcXVpcmUiLCJ2YWxpZGF0ZUZvcm1JbnB1dCIsIkFwcCIsInVzZVN0YXRlIiwic2hvdWxkUmVkaXJlY3QiLCJzZXRTaG91bGRSZWRpcmVjdCIsImZvcm1GaWVsZHMiLCJzZXRGb3JtRmllbGRzIiwidXNlckRldGFpbHMiLCJzZXRVc2VyRGV0YWlscyIsInNoaXBwaW5nRGV0YWlscyIsInNldFNoaXBwaW5nRGV0YWlscyIsInBheW1lbnREZXRhaWxzIiwic2V0UGF5bWVudERldGFpbHMiLCJub3RGaXJzdFJlbmRlciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJVc2VybmFtZSIsIlBhc3N3b3JkIiwiRW1haWwiLCJTZXNzaW9uIiwiQWRkck9uZSIsIkFkZHJUd28iLCJDaXR5IiwiU3RhdGUiLCJaaXAiLCJQaG9uZSIsIkNDIiwiRXhwaXJ5IiwiQ1ZWIiwiQmlsbGluZ1ppcCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJoYW5kbGVTdWJtaXQiLCJlIiwiZm9ybSIsInZhbGlkYXRlZEZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInZhbGlkYXRlZCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0IiwicGF0aCIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vSG9tZVBhZ2UuanN4XCI7XG5pbXBvcnQgQWNjb3VudEZvcm0gZnJvbSBcIi4vQWNjb3VudEZvcm0uanN4XCI7XG5pbXBvcnQgU2hpcHBpbmdGb3JtIGZyb20gXCIuL1NoaXBwaW5nRm9ybS5qc3hcIjtcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tIFwiLi9QYXltZW50Rm9ybS5qc3hcIjtcbmltcG9ydCBDb25maXJtYXRpb24gZnJvbSBcIi4vQ29uZmlybWF0aW9uLmpzeFwiO1xuXG5jb25zdCBoYW5kbGVFcnJvciA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxzL2Vycm9yLWhhbmRsZXInKS5oYW5kbGVFcnJvcjtcbmNvbnN0IHZhbGlkYXRlRm9ybUlucHV0ID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbHMvdmFsaWRhdGVGb3JtSW5wdXQnKS52YWxpZGF0ZUZvcm1JbnB1dDtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuXHRjb25zdCBbc2hvdWxkUmVkaXJlY3QsIHNldFNob3VsZFJlZGlyZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2Zvcm1GaWVsZHMsIHNldEZvcm1GaWVsZHNdID0gdXNlU3RhdGUoe30pO1xuXHRjb25zdCBbdXNlckRldGFpbHMsIHNldFVzZXJEZXRhaWxzXSA9IHVzZVN0YXRlKHt9KTtcblx0Y29uc3QgW3NoaXBwaW5nRGV0YWlscywgc2V0U2hpcHBpbmdEZXRhaWxzXSA9IHVzZVN0YXRlKHt9KTtcblx0Y29uc3QgW3BheW1lbnREZXRhaWxzLCBzZXRQYXltZW50RGV0YWlsc10gPSB1c2VTdGF0ZSh7fSk7XG5cdGNvbnN0IG5vdEZpcnN0UmVuZGVyID0gT2JqZWN0LmtleXMoZm9ybUZpZWxkcykubGVuZ3RoO1xuXG5cdGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoe1xuXHRcdFVzZXJuYW1lOiAnJyxcblx0XHRQYXNzd29yZDogJycsXG5cdFx0RW1haWw6ICcnLFxuXHRcdFNlc3Npb246ICcnLFxuXG5cdFx0QWRkck9uZTogJycsXG5cdFx0QWRkclR3bzogJycsXG5cdFx0Q2l0eTogJycsXG5cdFx0U3RhdGU6ICcnLFxuXHRcdFppcDogJycsXG5cdFx0UGhvbmU6ICcnLFxuXG5cdFx0Q0M6ICcnLFxuXHRcdEV4cGlyeTogJycsXG5cdFx0Q1ZWOiAnJyxcblx0XHRCaWxsaW5nWmlwOiAnJ1xuXHR9KTtcblxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gICAgICAgICAgICAgICAgICBUTy1ETzpcblx0Ly8gMS5cdFZhbGlkYXRpb24gZG9lc24ndCB3b3JrIG9uIGZpcnN0IHJlbmRlclxuXHQvLyAod2hlbiBmb3JtIGZpZWxkcyBoYXZlbid0IGJlZW4gY2hhbmdlZCB5ZXQpXG5cdC8vXG5cdC8vIDIuIG5vdEZpcnN0UmVuZGVyIGlzbid0IGFjY3VyYXRlLiBJdHMganVzdCBhIGtleSBjb3VudFxuXHQvL1x0XHRmb3IgdGhlIHJlc3BvbnNlIHN0YXRlIG9iamVjdCBhbmQgYnJlYWtzXG5cdC8vIFx0XHR2YWxpZGF0aW9uIGFmdGVyIHRoZSBmaXJzdCBBY2NvdW50IHBhZ2Vcblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlLCBmb3JtKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHZhbGlkYXRlZEZvcm0gPSB2YWxpZGF0ZUZvcm1JbnB1dChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtLm5hbWUpKTtcblxuXHRcdFx0aWYgKCF2YWxpZGF0ZWRGb3JtLnZhbGlkYXRlZCkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGhhbmRsZUVycm9yKHZhbGlkYXRlZEZvcm0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXdhaXQgYXhpb3MucG9zdChgJHtmb3JtLnBhdGh9YCwgeyAuLi5mb3JtLnBheWxvYWQgfSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnVGhlcmUgd2FzIGEgcHJvYmxlbSBzdWJtaXR0aW5nIGFjY291bnQgZGV0YWlsc1xcbicsIGVycik7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKGAke2Zvcm0ubmFtZX0gRGV0YWlscyBTdWJtaXR0ZWRgLCByZXNwb25zZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1jb21wb25lbnRcIiA+XG4gICAgICA8Um91dGVzPlxuXHRcdFx0XHQ8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZVBhZ2UgLz59Lz5cblx0XHRcdFx0PFJvdXRlXG4gICAgICAgICAgcGF0aD1cIi9hY2NvdW50XCJcbiAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgIDxBY2NvdW50Rm9ybVxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZT17cmVzcG9uc2V9XG5cdFx0XHRcdFx0XHRcdGZvcm1GaWVsZHM9e2Zvcm1GaWVsZHN9XG5cdFx0XHRcdFx0XHRcdHNldEZvcm1GaWVsZHM9e3NldEZvcm1GaWVsZHN9XG5cdFx0XHRcdFx0XHRcdHVzZXJEZXRhaWxzPXt1c2VyRGV0YWlsc31cblx0XHRcdFx0XHRcdFx0c2V0VXNlckRldGFpbHM9e3NldFVzZXJEZXRhaWxzfVxuXHRcdFx0XHRcdFx0XHRub3RGaXJzdFJlbmRlcj17bm90Rmlyc3RSZW5kZXJ9XG5cblx0XHRcdFx0XHRcdFx0c2V0UmVzcG9uc2U9e3NldFJlc3BvbnNlfVxuXHRcdFx0XHRcdFx0XHRzaG91bGRSZWRpcmVjdD17c2hvdWxkUmVkaXJlY3R9XG5cdFx0XHRcdFx0XHRcdHNldFNob3VsZFJlZGlyZWN0PXtzZXRTaG91bGRSZWRpcmVjdH1cblx0XHRcdFx0XHRcdFx0aGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgICA8Um91dGVcbiAgICAgICAgICBwYXRoPVwiL3NoaXBwaW5nXCJcbiAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgIDxTaGlwcGluZ0Zvcm1cblx0XHRcdFx0XHRcdFx0cmVzcG9uc2U9e3Jlc3BvbnNlfVxuXHRcdFx0XHRcdFx0XHRmb3JtRmllbGRzPXtmb3JtRmllbGRzfVxuXHRcdFx0XHRcdFx0XHRzZXRGb3JtRmllbGRzPXtzZXRGb3JtRmllbGRzfVxuXHRcdFx0XHRcdFx0XHRzaGlwcGluZ0RldGFpbHM9e3NoaXBwaW5nRGV0YWlsc31cblx0XHRcdFx0XHRcdFx0c2V0U2hpcHBpbmdEZXRhaWxzPXtzZXRTaGlwcGluZ0RldGFpbHN9XG5cdFx0XHRcdFx0XHRcdG5vdEZpcnN0UmVuZGVyPXtub3RGaXJzdFJlbmRlcn1cblxuXHRcdFx0XHRcdFx0XHRzZXRSZXNwb25zZT17c2V0UmVzcG9uc2V9XG5cdFx0XHRcdFx0XHRcdHNob3VsZFJlZGlyZWN0PXtzaG91bGRSZWRpcmVjdH1cblx0XHRcdFx0XHRcdFx0c2V0U2hvdWxkUmVkaXJlY3Q9e3NldFNob3VsZFJlZGlyZWN0fVxuXHRcdFx0XHRcdFx0XHRoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxSb3V0ZVxuICAgICAgICAgIHBhdGg9XCIvcGF5bWVudFwiXG4gICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICA8UGF5bWVudEZvcm1cblx0XHRcdFx0XHRcdFx0cmVzcG9uc2U9e3Jlc3BvbnNlfVxuXHRcdFx0XHRcdFx0XHRmb3JtRmllbGRzPXtmb3JtRmllbGRzfVxuXHRcdFx0XHRcdFx0XHRzZXRGb3JtRmllbGRzPXtzZXRGb3JtRmllbGRzfVxuXHRcdFx0XHRcdFx0XHRwYXltZW50RGV0YWlscz17cGF5bWVudERldGFpbHN9XG5cdFx0XHRcdFx0XHRcdHNldFBheW1lbnREZXRhaWxzPXtzZXRQYXltZW50RGV0YWlsc31cblx0XHRcdFx0XHRcdFx0bm90Rmlyc3RSZW5kZXI9e25vdEZpcnN0UmVuZGVyfVxuXG5cdFx0XHRcdFx0XHRcdHNldFJlc3BvbnNlPXtzZXRSZXNwb25zZX1cblx0XHRcdFx0XHRcdFx0c2hvdWxkUmVkaXJlY3Q9e3Nob3VsZFJlZGlyZWN0fVxuXHRcdFx0XHRcdFx0XHRzZXRTaG91bGRSZWRpcmVjdD17c2V0U2hvdWxkUmVkaXJlY3R9XG5cdFx0XHRcdFx0XHRcdGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxSb3V0ZVxuICAgICAgICAgIHBhdGg9XCIvY29uZmlybWF0aW9uXCJcbiAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgIDxDb25maXJtYXRpb25cblx0XHRcdFx0XHRcdFx0cmVzcG9uc2U9e3Jlc3BvbnNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L1JvdXRlcz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQThDO0FBQUE7QUFBQTtBQUFBLCtDQVA5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0EsSUFBTUEsV0FBVyxHQUFHQyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQ0QsV0FBVztBQUN2RSxJQUFNRSxpQkFBaUIsR0FBR0QsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUNDLGlCQUFpQjtBQUV2RixJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBRyxHQUFTO0VBQ2pCLGdCQUE0QyxJQUFBQyxlQUFRLEVBQUMsS0FBSyxDQUFDO0lBQUE7SUFBcERDLGNBQWM7SUFBRUMsaUJBQWlCO0VBQ3hDLGlCQUFvQyxJQUFBRixlQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUF6Q0csVUFBVTtJQUFFQyxhQUFhO0VBQ2hDLGlCQUFzQyxJQUFBSixlQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUEzQ0ss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