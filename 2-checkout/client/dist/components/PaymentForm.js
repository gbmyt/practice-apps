"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// F3 collects credit card #, expiry date, CVV, and billing zip code.
var PaymentForm = function PaymentForm(_ref) {
  var checkoutStage = _ref.checkoutStage,
    setCheckoutStage = _ref.setCheckoutStage,
    paymentDetails = _ref.paymentDetails,
    setPaymentDetails = _ref.setPaymentDetails;
  var handleClick = function handleClick(e) {
    e.preventDefault();
    console.log('Payment Details From State', paymentDetails);
    console.log('Fetching Confirmation Page...');
    setCheckoutStage('confirmation');
  };
  var handleChange = function handleChange(e) {
    e.preventDefault();
    var paymentInfo = {
      cc: document.getElementById('cc').value,
      expiry: document.getElementById('expiry').value,
      cvv: document.getElementById('cvv').value,
      billingZip: document.getElementById('billing-zip').value
    };
    setPaymentDetails(_objectSpread({}, paymentInfo));
  };
  return /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Payment Details"), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "cc"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "cc",
    id: "cc",
    placeholder: "Credit Card Number",
    value: paymentDetails.cc,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "expiry"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "expiry",
    id: "expiry",
    placeholder: "Expiration Date",
    value: paymentDetails.expiry,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "cvv"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "cvv",
    id: "cvv",
    placeholder: "Four Digit CVV",
    value: paymentDetails.cvv,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "billing-zip"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "billing-zip",
    id: "billing-zip",
    placeholder: "Billing Zip Code",
    value: paymentDetails.billingZip,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    onClick: handleClick
  }, "Next"));
};
var _default = PaymentForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQYXltZW50Rm9ybSIsImNoZWNrb3V0U3RhZ2UiLCJzZXRDaGVja291dFN0YWdlIiwicGF5bWVudERldGFpbHMiLCJzZXRQYXltZW50RGV0YWlscyIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInBheW1lbnRJbmZvIiwiY2MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJleHBpcnkiLCJjdnYiLCJiaWxsaW5nWmlwIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUGF5bWVudEZvcm0uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIEYzIGNvbGxlY3RzIGNyZWRpdCBjYXJkICMsIGV4cGlyeSBkYXRlLCBDVlYsIGFuZCBiaWxsaW5nIHppcCBjb2RlLlxuY29uc3QgUGF5bWVudEZvcm0gPSAoeyBjaGVja291dFN0YWdlLCBzZXRDaGVja291dFN0YWdlLCBwYXltZW50RGV0YWlscywgc2V0UGF5bWVudERldGFpbHMgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdQYXltZW50IERldGFpbHMgRnJvbSBTdGF0ZScsIHBheW1lbnREZXRhaWxzKTtcblxuICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBDb25maXJtYXRpb24gUGFnZS4uLicpO1xuICAgIHNldENoZWNrb3V0U3RhZ2UoJ2NvbmZpcm1hdGlvbicpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBheW1lbnRJbmZvID0ge1xuICAgICAgY2M6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYycpLnZhbHVlLFxuICAgICAgZXhwaXJ5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwaXJ5JykudmFsdWUsXG4gICAgICBjdnY6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdnYnKS52YWx1ZSxcbiAgICAgIGJpbGxpbmdaaXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWxsaW5nLXppcCcpLnZhbHVlXG4gICAgfVxuICAgIHNldFBheW1lbnREZXRhaWxzKHsgLi4ucGF5bWVudEluZm8gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcblx0XHQ8Zm9ybT5cblx0XHRcdDxoMT5QYXltZW50IERldGFpbHM8L2gxPlxuXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImNjXCI+PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJjY1wiXG4gICAgICAgIGlkPVwiY2NcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWRpdCBDYXJkIE51bWJlclwiXG4gICAgICAgIHZhbHVlPXtwYXltZW50RGV0YWlscy5jY31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZXhwaXJ5XCI+PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJleHBpcnlcIlxuICAgICAgICBpZD1cImV4cGlyeVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRXhwaXJhdGlvbiBEYXRlXCJcbiAgICAgICAgdmFsdWU9e3BheW1lbnREZXRhaWxzLmV4cGlyeX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiY3Z2XCI+PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJjdnZcIlxuICAgICAgICBpZD1cImN2dlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRm91ciBEaWdpdCBDVlZcIlxuICAgICAgICB2YWx1ZT17cGF5bWVudERldGFpbHMuY3Z2fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJiaWxsaW5nLXppcFwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiYmlsbGluZy16aXBcIlxuICAgICAgICBpZD1cImJpbGxpbmctemlwXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJCaWxsaW5nIFppcCBDb2RlXCJcbiAgICAgICAgdmFsdWU9e3BheW1lbnREZXRhaWxzLmJpbGxpbmdaaXB9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuXG5cdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xpY2t9Pk5leHQ8L2J1dHRvbj5cblx0XHQ8L2Zvcm0+XG5cdClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRGb3JtOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFMUI7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUErRTtFQUFBLElBQXpFQyxhQUFhLFFBQWJBLGFBQWE7SUFBRUMsZ0JBQWdCLFFBQWhCQSxnQkFBZ0I7SUFBRUMsY0FBYyxRQUFkQSxjQUFjO0lBQUVDLGlCQUFpQixRQUFqQkEsaUJBQWlCO0VBQ3ZGLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQUlDLENBQUMsRUFBSztJQUN6QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixFQUFFTixjQUFjLENBQUM7SUFFekRLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixDQUFDO0lBQzVDUCxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7RUFDbEMsQ0FBQztFQUVELElBQU1RLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUlKLENBQUMsRUFBSztJQUMxQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFDbEIsSUFBTUksV0FBVyxHQUFHO01BQ2xCQyxFQUFFLEVBQUVDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDQyxLQUFLO01BQ3ZDQyxNQUFNLEVBQUVILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLO01BQy9DRSxHQUFHLEVBQUVKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxLQUFLO01BQ3pDRyxVQUFVLEVBQUVMLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDQztJQUNyRCxDQUFDO0lBQ0RYLGlCQUFpQixtQkFBTU8sV0FBVyxFQUFHO0VBQ3ZDLENBQUM7RUFFRCxvQkFDQSwyREFDQyw0Q0FBSSxpQkFBZSxDQUFLLGVBRXhCO0lBQU8sT0FBTyxFQUFDO0VBQUksRUFBUyxlQUN6QjtJQUNFLElBQUksRUFBQyxNQUFNO0lBQ1gsSUFBSSxFQUFDLElBQUk7SUFDVCxFQUFFLEVBQUMsSUFBSTtJQUNQLFdBQVcsRUFBQyxvQkFBb0I7SUFDaEMsS0FBSyxFQUFFUixjQUFjLENBQUNTLEVBQUc7SUFDekIsUUFBUSxFQUFFRjtFQUFhLEVBQ3ZCLGVBRUw7SUFBTyxPQUFPLEVBQUM7RUFBUSxFQUFTLGVBQzdCO0lBQ0UsSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsUUFBUTtJQUNiLEVBQUUsRUFBQyxRQUFRO0lBQ1gsV0FBVyxFQUFDLGlCQUFpQjtJQUM3QixLQUFLLEVBQUVQLGNBQWMsQ0FBQ2EsTUFBTztJQUM3QixRQUFRLEVBQUVOO0VBQWEsRUFDdkIsZUFFTDtJQUFPLE9BQU8sRUFBQztFQUFLLEVBQVMsZUFDMUI7SUFDRSxJQUFJLEVBQUMsTUFBTTtJQUNYLElBQUksRUFBQyxLQUFLO0lBQ1YsRUFBRSxFQUFDLEtBQUs7SUFDUixXQUFXLEVBQUMsZ0JBQWdCO0lBQzVCLEtBQUssRUFBRVAsY0FBYyxDQUFDYyxHQUFJO0lBQzFCLFFBQVEsRUFBRVA7RUFBYSxFQUN2QixlQUVMO0lBQU8sT0FBTyxFQUFDO0VBQWEsRUFBUyxlQUNsQztJQUNFLElBQUksRUFBQyxNQUFNO0lBQ1gsSUFBSSxFQUFDLGFBQWE7SUFDbEIsRUFBRSxFQUFDLGFBQWE7SUFDaEIsV0FBVyxFQUFDLGtCQUFrQjtJQUM5QixLQUFLLEVBQUVQLGNBQWMsQ0FBQ2UsVUFBVztJQUNqQyxRQUFRLEVBQUVSO0VBQWEsRUFDdkIsZUFFTDtJQUFRLElBQUksRUFBQyxRQUFRO0lBQUMsT0FBTyxFQUFFTDtFQUFZLEdBQUMsTUFBSSxDQUFTLENBQ25EO0FBRVQsQ0FBQztBQUFDLGVBRWFMLFdBQVc7QUFBQSJ9