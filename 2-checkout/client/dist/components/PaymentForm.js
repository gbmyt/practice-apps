"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _ConditionalLink = _interopRequireDefault(require("./ConditionalLink.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// F3 collects credit card #, expiry date, CVV, and billing zip code.
var PaymentForm = function PaymentForm(_ref) {
  var response = _ref.response,
    formFields = _ref.formFields,
    setFormFields = _ref.setFormFields,
    paymentDetails = _ref.paymentDetails,
    setPaymentDetails = _ref.setPaymentDetails,
    invalidInput = _ref.invalidInput,
    notFirstRender = _ref.notFirstRender,
    setResponse = _ref.setResponse,
    shouldRedirect = _ref.shouldRedirect,
    setShouldRedirect = _ref.setShouldRedirect,
    handleSubmit = _ref.handleSubmit;
  // Make sure we start out with a redirect/false
  (0, _react.useEffect)(function () {
    setShouldRedirect(false);
  }, []);

  // If all fields have been filled out, allow redirect to Shipping Details
  (0, _react.useEffect)(function () {
    !invalidInput && notFirstRender ? setShouldRedirect(true) : setShouldRedirect(false);
  }, [formFields]);
  var handleChange = function handleChange(e) {
    var paymentInfo = {
      CC: document.getElementById('cc').value,
      Expiry: document.getElementById('expiry').value,
      CVV: document.getElementById('cvv').value,
      BillingZip: document.getElementById('billing-zip').value
    };
    setFormFields(function (prev) {
      return _objectSpread(_objectSpread({}, prev), paymentInfo);
    });
    setPaymentDetails(function (prev) {
      return _objectSpread(_objectSpread({}, prev), paymentInfo);
    });
    setResponse(function (prev) {
      return _objectSpread(_objectSpread({}, prev), paymentInfo);
    });
  };
  var handleClick = function handleClick(e) {
    try {
      handleSubmit(e, {
        name: 'payment-info',
        path: '/payment',
        payload: paymentDetails
      });
    } catch (err) {
      console.log('Payment Post Error', err);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("form", {
    id: "payment-info"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Payment Details"), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "cc"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "cc",
    id: "cc",
    placeholder: "Credit Card Number",
    value: response.cc,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "expiry"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "expiry",
    id: "expiry",
    placeholder: "Expiration Date",
    value: response.expiry,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "cvv"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "cvv",
    id: "cvv",
    placeholder: "Four Digit CVV",
    value: response.cvv,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "billing-zip"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "billing-zip",
    id: "billing-zip",
    placeholder: "Billing Zip Code",
    value: response.billingZip,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement(_ConditionalLink["default"], {
    to: "/confirmation",
    condition: shouldRedirect
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick
  }, "Next")));
};
var _default = PaymentForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQYXltZW50Rm9ybSIsInJlc3BvbnNlIiwiZm9ybUZpZWxkcyIsInNldEZvcm1GaWVsZHMiLCJwYXltZW50RGV0YWlscyIsInNldFBheW1lbnREZXRhaWxzIiwiaW52YWxpZElucHV0Iiwibm90Rmlyc3RSZW5kZXIiLCJzZXRSZXNwb25zZSIsInNob3VsZFJlZGlyZWN0Iiwic2V0U2hvdWxkUmVkaXJlY3QiLCJoYW5kbGVTdWJtaXQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicGF5bWVudEluZm8iLCJDQyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIkV4cGlyeSIsIkNWViIsIkJpbGxpbmdaaXAiLCJwcmV2IiwiaGFuZGxlQ2xpY2siLCJuYW1lIiwicGF0aCIsInBheWxvYWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY2MiLCJleHBpcnkiLCJjdnYiLCJiaWxsaW5nWmlwIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUGF5bWVudEZvcm0uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgQ29uZGl0aW9uYWxMaW5rIGZyb20gJy4vQ29uZGl0aW9uYWxMaW5rLmpzeCc7XG5cbi8vIEYzIGNvbGxlY3RzIGNyZWRpdCBjYXJkICMsIGV4cGlyeSBkYXRlLCBDVlYsIGFuZCBiaWxsaW5nIHppcCBjb2RlLlxuY29uc3QgUGF5bWVudEZvcm0gPSAoe1xuXHRyZXNwb25zZSxcblx0Zm9ybUZpZWxkcyxcblx0c2V0Rm9ybUZpZWxkcyxcbiAgcGF5bWVudERldGFpbHMsXG4gIHNldFBheW1lbnREZXRhaWxzLFxuXHRpbnZhbGlkSW5wdXQsXG4gIG5vdEZpcnN0UmVuZGVyLFxuXHRzZXRSZXNwb25zZSxcblx0c2hvdWxkUmVkaXJlY3QsXG5cdHNldFNob3VsZFJlZGlyZWN0LFxuXHRoYW5kbGVTdWJtaXRcbn0pID0+IHtcbiAgLy8gTWFrZSBzdXJlIHdlIHN0YXJ0IG91dCB3aXRoIGEgcmVkaXJlY3QvZmFsc2Vcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRTaG91bGRSZWRpcmVjdChmYWxzZSk7XG5cdH0sIFtdKTtcblxuXHQvLyBJZiBhbGwgZmllbGRzIGhhdmUgYmVlbiBmaWxsZWQgb3V0LCBhbGxvdyByZWRpcmVjdCB0byBTaGlwcGluZyBEZXRhaWxzXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0IWludmFsaWRJbnB1dCAmJiBub3RGaXJzdFJlbmRlciA/IHNldFNob3VsZFJlZGlyZWN0KHRydWUpIDogc2V0U2hvdWxkUmVkaXJlY3QoZmFsc2UpO1xuXHR9LCBbZm9ybUZpZWxkc10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgcGF5bWVudEluZm8gPSB7XG4gICAgICBDQzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NjJykudmFsdWUsXG4gICAgICBFeHBpcnk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBpcnknKS52YWx1ZSxcbiAgICAgIENWVjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N2dicpLnZhbHVlLFxuICAgICAgQmlsbGluZ1ppcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpbGxpbmctemlwJykudmFsdWVcbiAgICB9XG4gICAgc2V0Rm9ybUZpZWxkcyhwcmV2ID0+ICh7IC4uLnByZXYsIC4uLnBheW1lbnRJbmZvIH0pKTtcbiAgICBzZXRQYXltZW50RGV0YWlscyhwcmV2ID0+ICh7IC4uLnByZXYsIC4uLnBheW1lbnRJbmZvIH0pKTtcbiAgICBzZXRSZXNwb25zZShwcmV2ID0+ICh7IC4uLnByZXYsIC4uLnBheW1lbnRJbmZvIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgdHJ5IHtcblx0XHRcdGhhbmRsZVN1Ym1pdChlLCB7XG5cdFx0XHRcdG5hbWU6ICdwYXltZW50LWluZm8nLFxuXHRcdFx0XHRwYXRoOiAnL3BheW1lbnQnLFxuXHRcdFx0XHRwYXlsb2FkOiBwYXltZW50RGV0YWlsc1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnUGF5bWVudCBQb3N0IEVycm9yJywgZXJyKTtcblx0XHR9XG4gIH07XG5cbiAgcmV0dXJuIChcblx0XHQ8Zm9ybSBpZD1cInBheW1lbnQtaW5mb1wiPlxuXHRcdFx0PGgxPlBheW1lbnQgRGV0YWlsczwvaDE+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiY2NcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImNjXCJcbiAgICAgICAgaWQ9XCJjY1wiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ3JlZGl0IENhcmQgTnVtYmVyXCJcbiAgICAgICAgdmFsdWU9e3Jlc3BvbnNlLmNjfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJleHBpcnlcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImV4cGlyeVwiXG4gICAgICAgIGlkPVwiZXhwaXJ5XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFeHBpcmF0aW9uIERhdGVcIlxuICAgICAgICB2YWx1ZT17cmVzcG9uc2UuZXhwaXJ5fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJjdnZcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgIGlkPVwiY3Z2XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJGb3VyIERpZ2l0IENWVlwiXG4gICAgICAgIHZhbHVlPXtyZXNwb25zZS5jdnZ9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImJpbGxpbmctemlwXCI+PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJiaWxsaW5nLXppcFwiXG4gICAgICAgIGlkPVwiYmlsbGluZy16aXBcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkJpbGxpbmcgWmlwIENvZGVcIlxuICAgICAgICB2YWx1ZT17cmVzcG9uc2UuYmlsbGluZ1ppcH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cbiAgICAgIDxDb25kaXRpb25hbExpbmsgdG89Jy9jb25maXJtYXRpb24nIGNvbmRpdGlvbj17c2hvdWxkUmVkaXJlY3R9PlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5OZXh0PC9idXR0b24+XG5cdFx0XHQ8L0NvbmRpdGlvbmFsTGluaz5cblx0XHQ8L2Zvcm0+XG5cdClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRGb3JtOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQW9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVwRDtBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLE9BWVg7RUFBQSxJQVhMQyxRQUFRLFFBQVJBLFFBQVE7SUFDUkMsVUFBVSxRQUFWQSxVQUFVO0lBQ1ZDLGFBQWEsUUFBYkEsYUFBYTtJQUNaQyxjQUFjLFFBQWRBLGNBQWM7SUFDZEMsaUJBQWlCLFFBQWpCQSxpQkFBaUI7SUFDbEJDLFlBQVksUUFBWkEsWUFBWTtJQUNYQyxjQUFjLFFBQWRBLGNBQWM7SUFDZkMsV0FBVyxRQUFYQSxXQUFXO0lBQ1hDLGNBQWMsUUFBZEEsY0FBYztJQUNkQyxpQkFBaUIsUUFBakJBLGlCQUFpQjtJQUNq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