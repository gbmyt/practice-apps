"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var Confirmation = function Confirmation(_ref) {
  var setCheckoutStage = _ref.setCheckoutStage,
    accountDetails = _ref.accountDetails,
    shippingAddr = _ref.shippingAddr,
    paymentDetails = _ref.paymentDetails;
  var handleClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var formResponse;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            console.log('Thanks for shopping with us! You will receive a confirmation email with your order details enclosed shortly.');
            formResponse = _objectSpread(_objectSpread(_objectSpread({}, accountDetails), shippingAddr), paymentDetails);
            console.log('formResponse', formResponse);
            _context.next = 6;
            return _axios["default"].post('/checkout', _objectSpread({}, formResponse));
          case 6:
            // Render home page
            setCheckoutStage('home');
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleClick(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Confirm Your Details:"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "user-details"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "User Details:"), /*#__PURE__*/_react["default"].createElement("p", null, "Username: ", accountDetails.username), /*#__PURE__*/_react["default"].createElement("p", null, "Password: ", accountDetails.password), /*#__PURE__*/_react["default"].createElement("p", null, "Email Address: ", accountDetails.email)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "shipping-details"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Shipping Details:"), /*#__PURE__*/_react["default"].createElement("p", null, "Address Line 1: ", shippingAddr.addrOne), /*#__PURE__*/_react["default"].createElement("p", null, "Address Line 2: ", shippingAddr.addrTwo), /*#__PURE__*/_react["default"].createElement("p", null, "City: ", shippingAddr.city), /*#__PURE__*/_react["default"].createElement("p", null, "State: ", shippingAddr.state), /*#__PURE__*/_react["default"].createElement("p", null, "Zip Code: ", shippingAddr.zip), /*#__PURE__*/_react["default"].createElement("p", null, "Phone Number: ", shippingAddr.phone)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "billing-details"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Billing Details:"), /*#__PURE__*/_react["default"].createElement("h3", null, "Shipping Details:"), /*#__PURE__*/_react["default"].createElement("p", null, "Credit Card #: ", paymentDetails.cc), /*#__PURE__*/_react["default"].createElement("p", null, "Expiration Date: ", paymentDetails.expiry), /*#__PURE__*/_react["default"].createElement("p", null, "CVV: ", paymentDetails.cvv), /*#__PURE__*/_react["default"].createElement("p", null, "Billing Zip Code: ", paymentDetails.billingZip)), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick
  }, "Purchase"));
};
var _default = Confirmation;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb25maXJtYXRpb24iLCJzZXRDaGVja291dFN0YWdlIiwiYWNjb3VudERldGFpbHMiLCJzaGlwcGluZ0FkZHIiLCJwYXltZW50RGV0YWlscyIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZvcm1SZXNwb25zZSIsImF4aW9zIiwicG9zdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCIsImFkZHJPbmUiLCJhZGRyVHdvIiwiY2l0eSIsInN0YXRlIiwiemlwIiwicGhvbmUiLCJjYyIsImV4cGlyeSIsImN2diIsImJpbGxpbmdaaXAiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9Db25maXJtYXRpb24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBDb25maXJtYXRpb24gPSAoeyBzZXRDaGVja291dFN0YWdlLCBhY2NvdW50RGV0YWlscyxcdHNoaXBwaW5nQWRkcixcdHBheW1lbnREZXRhaWxzIH0pID0+IHtcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zb2xlLmxvZygnVGhhbmtzIGZvciBzaG9wcGluZyB3aXRoIHVzISBZb3Ugd2lsbCByZWNlaXZlIGEgY29uZmlybWF0aW9uIGVtYWlsIHdpdGggeW91ciBvcmRlciBkZXRhaWxzIGVuY2xvc2VkIHNob3J0bHkuJyk7XG5cblx0XHRjb25zdCBmb3JtUmVzcG9uc2UgPSB7XG5cdFx0XHQuLi5hY2NvdW50RGV0YWlscyxcblx0XHRcdC4uLnNoaXBwaW5nQWRkcixcblx0XHRcdC4uLnBheW1lbnREZXRhaWxzXG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKCdmb3JtUmVzcG9uc2UnLCBmb3JtUmVzcG9uc2UpO1xuXHRcdGF3YWl0IGF4aW9zLnBvc3QoJy9jaGVja291dCcsIHsgLi4uZm9ybVJlc3BvbnNlIH0pO1xuXG5cdFx0Ly8gUmVuZGVyIGhvbWUgcGFnZVxuXHRcdHNldENoZWNrb3V0U3RhZ2UoJ2hvbWUnKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+Q29uZmlybSBZb3VyIERldGFpbHM6PC9oMT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlci1kZXRhaWxzXCI+XG5cdFx0XHRcdDxoMz5Vc2VyIERldGFpbHM6PC9oMz5cblx0XHRcdFx0PHA+VXNlcm5hbWU6IHthY2NvdW50RGV0YWlscy51c2VybmFtZX08L3A+XG5cdFx0XHRcdDxwPlBhc3N3b3JkOiB7YWNjb3VudERldGFpbHMucGFzc3dvcmR9PC9wPlxuXHRcdFx0XHQ8cD5FbWFpbCBBZGRyZXNzOiB7YWNjb3VudERldGFpbHMuZW1haWx9PC9wPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2hpcHBpbmctZGV0YWlsc1wiPlxuXHRcdFx0XHQ8aDM+U2hpcHBpbmcgRGV0YWlsczo8L2gzPlxuXG5cdFx0XHRcdDxwPkFkZHJlc3MgTGluZSAxOiB7c2hpcHBpbmdBZGRyLmFkZHJPbmV9PC9wPlxuXHRcdFx0XHQ8cD5BZGRyZXNzIExpbmUgMjoge3NoaXBwaW5nQWRkci5hZGRyVHdvfTwvcD5cblx0XHRcdFx0PHA+Q2l0eToge3NoaXBwaW5nQWRkci5jaXR5fTwvcD5cblx0XHRcdFx0PHA+U3RhdGU6IHtzaGlwcGluZ0FkZHIuc3RhdGV9PC9wPlxuXHRcdFx0XHQ8cD5aaXAgQ29kZToge3NoaXBwaW5nQWRkci56aXB9PC9wPlxuXHRcdFx0XHQ8cD5QaG9uZSBOdW1iZXI6IHtzaGlwcGluZ0FkZHIucGhvbmV9PC9wPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmlsbGluZy1kZXRhaWxzXCI+XG5cdFx0XHRcdDxoMz5CaWxsaW5nIERldGFpbHM6PC9oMz5cblxuXHRcdFx0XHQ8aDM+U2hpcHBpbmcgRGV0YWlsczo8L2gzPlxuXHRcdFx0XHQ8cD5DcmVkaXQgQ2FyZCAjOiB7cGF5bWVudERldGFpbHMuY2N9PC9wPlxuXHRcdFx0XHQ8cD5FeHBpcmF0aW9uIERhdGU6IHtwYXltZW50RGV0YWlscy5leHBpcnl9PC9wPlxuXHRcdFx0XHQ8cD5DVlY6IHtwYXltZW50RGV0YWlscy5jdnZ9PC9wPlxuXHRcdFx0XHQ8cD5CaWxsaW5nIFppcCBDb2RlOiB7cGF5bWVudERldGFpbHMuYmlsbGluZ1ppcH08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlB1cmNoYXNlPC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1hdGlvbjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQTBCO0FBQUEsK0NBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxPQUEyRTtFQUFBLElBQXJFQyxnQkFBZ0IsUUFBaEJBLGdCQUFnQjtJQUFFQyxjQUFjLFFBQWRBLGNBQWM7SUFBRUMsWUFBWSxRQUFaQSxZQUFZO0lBQUVDLGNBQWMsUUFBZEEsY0FBYztFQUNyRixJQUFNQyxXQUFXO0lBQUEsdUVBQUcsaUJBQU9DLENBQUM7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUMzQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7WUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhHQUE4RyxDQUFDO1lBRXJIQyxZQUFZLGlEQUNkUixjQUFjLEdBQ2RDLFlBQVksR0FDWkMsY0FBYztZQUVsQkksT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFQyxZQUFZLENBQUM7WUFBQztZQUFBLE9BQ3BDQyxpQkFBSyxDQUFDQyxJQUFJLENBQUMsV0FBVyxvQkFBT0YsWUFBWSxFQUFHO1VBQUE7WUFFbEQ7WUFDQVQsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1VBQUM7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBLENBQ3pCO0lBQUEsZ0JBZEtJLFdBQVc7TUFBQTtJQUFBO0VBQUEsR0FjaEI7RUFFRCxvQkFDQywwREFDQyw0Q0FBSSx1QkFBcUIsQ0FBSyxlQUM5QjtJQUFLLFNBQVMsRUFBQztFQUFjLGdCQUM1Qiw0Q0FBSSxlQUFhLENBQUssZUFDdEIsMkNBQUcsWUFBVSxFQUFDSCxjQUFjLENBQUNXLFFBQVEsQ0FBSyxlQUMxQywyQ0FBRyxZQUFVLEVBQUNYLGNBQWMsQ0FBQ1ksUUFBUSxDQUFLLGVBQzFDLDJDQUFHLGlCQUFlLEVBQUNaLGNBQWMsQ0FBQ2EsS0FBSyxDQUFLLENBQ3ZDLGVBRU47SUFBSyxTQUFTLEVBQUM7RUFBa0IsZ0JBQ2hDLDRDQUFJLG1CQUFpQixDQUFLLGVBRTFCLDJDQUFHLGtCQUFnQixFQUFDWixZQUFZLENBQUNhLE9BQU8sQ0FBSyxlQUM3QywyQ0FBRyxrQkFBZ0IsRUFBQ2IsWUFBWSxDQUFDYyxPQUFPLENBQUssZUFDN0MsMkNBQUcsUUFBTSxFQUFDZCxZQUFZLENBQUNlLElBQUksQ0FBSyxlQUNoQywyQ0FBRyxTQUFPLEVBQUNmLFlBQVksQ0FBQ2dCLEtBQUssQ0FBSyxlQUNsQywyQ0FBRyxZQUFVLEVBQUNoQixZQUFZLENBQUNpQixHQUFHLENBQUssZUFDbkMsMkNBQUcsZ0JBQWMsRUFBQ2pCLFlBQVksQ0FBQ2tCLEtBQUssQ0FBSyxDQUNwQyxlQUVOO0lBQUssU0FBUyxFQUFDO0VBQWlCLGdCQUMvQiw0Q0FBSSxrQkFBZ0IsQ0FBSyxlQUV6Qiw0Q0FBSSxtQkFBaUIsQ0FBSyxlQUMxQiwyQ0FBRyxpQkFBZSxFQUFDakIsY0FBYyxDQUFDa0IsRUFBRSxDQUFLLGVBQ3pDLDJDQUFHLG1CQUFpQixFQUFDbEIsY0FBYyxDQUFDbUIsTUFBTSxDQUFLLGVBQy9DLDJDQUFHLE9BQUssRUFBQ25CLGNBQWMsQ0FBQ29CLEdBQUcsQ0FBSyxlQUNoQywyQ0FBRyxvQkFBa0IsRUFBQ3BCLGNBQWMsQ0FBQ3FCLFVBQVUsQ0FBSyxDQUMvQyxlQUNOO0lBQVEsT0FBTyxFQUFFcEI7RUFBWSxHQUFDLFVBQVEsQ0FBUyxDQUMxQztBQUVSLENBQUM7QUFBQyxlQUVhTCxZQUFZO0FBQUEifQ==