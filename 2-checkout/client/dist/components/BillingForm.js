"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// F3 collects credit card #, expiry date, CVV, and billing zip code.
var BillingForm = function BillingForm(_ref) {
  var checkoutStage = _ref.checkoutStage,
    setCheckoutStage = _ref.setCheckoutStage;
  var handleClick = function handleClick(e) {
    e.preventDefault();
    console.log('Getting Confirmation Page...');
    setCheckoutStage('confirmation');
  };
  return /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Billing Details"), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "cc"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "cc",
    placeholder: "Credit Card Number"
    // value={}
    // onChange={}
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "expiry"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "expiry",
    placeholder: "Expiration Date"
    // value={}
    // onChange={}
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "cvv"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "cvv",
    placeholder: "Four Digit CVV"
    // value={}
    // onChange={}
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "billing-zip"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "billing-zip",
    placeholder: "Billing Zip Code"
    // value={}
    // onChange={}
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    onClick: handleClick
  }, "Next"));
};
var _default = BillingForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCaWxsaW5nRm9ybSIsImNoZWNrb3V0U3RhZ2UiLCJzZXRDaGVja291dFN0YWdlIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvQmlsbGluZ0Zvcm0uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIEYzIGNvbGxlY3RzIGNyZWRpdCBjYXJkICMsIGV4cGlyeSBkYXRlLCBDVlYsIGFuZCBiaWxsaW5nIHppcCBjb2RlLlxuY29uc3QgQmlsbGluZ0Zvcm0gPSAoeyBjaGVja291dFN0YWdlLCBzZXRDaGVja291dFN0YWdlIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyBDb25maXJtYXRpb24gUGFnZS4uLicpO1xuICAgIHNldENoZWNrb3V0U3RhZ2UoJ2NvbmZpcm1hdGlvbicpO1xuICB9O1xuXG4gIHJldHVybiAoXG5cdFx0PGZvcm0+XG5cdFx0XHQ8aDE+QmlsbGluZyBEZXRhaWxzPC9oMT5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJjY1wiPjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiY2NcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWRpdCBDYXJkIE51bWJlclwiXG4gICAgICAgIC8vIHZhbHVlPXt9XG4gICAgICAgIC8vIG9uQ2hhbmdlPXt9XG4gICAgICAvPlxuXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImV4cGlyeVwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiZXhwaXJ5XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFeHBpcmF0aW9uIERhdGVcIlxuICAgICAgICAvLyB2YWx1ZT17fVxuICAgICAgICAvLyBvbkNoYW5nZT17fVxuICAgICAgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJjdnZcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRm91ciBEaWdpdCBDVlZcIlxuICAgICAgICAvLyB2YWx1ZT17fVxuICAgICAgICAvLyBvbkNoYW5nZT17fVxuICAgICAgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJiaWxsaW5nLXppcFwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiYmlsbGluZy16aXBcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkJpbGxpbmcgWmlwIENvZGVcIlxuICAgICAgICAvLyB2YWx1ZT17fVxuICAgICAgICAvLyBvbkNoYW5nZT17fVxuICAgICAgLz5cblxuXHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5OZXh0PC9idXR0b24+XG5cdFx0PC9mb3JtPlxuXHQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCaWxsaW5nRm9ybTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQTBCO0FBRTFCO0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQVcsT0FBNEM7RUFBQSxJQUF0Q0MsYUFBYSxRQUFiQSxhQUFhO0lBQUVDLGdCQUFnQixRQUFoQkEsZ0JBQWdCO0VBQ3BELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQUlDLENBQUMsRUFBSztJQUN6QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDO0lBQzNDTCxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7RUFDbEMsQ0FBQztFQUVELG9CQUNBLDJEQUNDLDRDQUFJLGlCQUFlLENBQUssZUFFeEI7SUFBTyxPQUFPLEVBQUM7RUFBSSxFQUFTLGVBQ3pCO0lBQ0UsSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsSUFBSTtJQUNULFdBQVcsRUFBQztJQUNaO0lBQ0E7RUFBQSxFQUNBLGVBRUw7SUFBTyxPQUFPLEVBQUM7RUFBUSxFQUFTLGVBQzdCO0lBQ0UsSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsUUFBUTtJQUNiLFdBQVcsRUFBQztJQUNaO0lBQ0E7RUFBQSxFQUNBLGVBRUw7SUFBTyxPQUFPLEVBQUM7RUFBSyxFQUFTLGVBQzFCO0lBQ0UsSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsS0FBSztJQUNWLFdBQVcsRUFBQztJQUNaO0lBQ0E7RUFBQSxFQUNBLGVBRUw7SUFBTyxPQUFPLEVBQUM7RUFBYSxFQUFTLGVBQ2xDO0lBQ0UsSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsYUFBYTtJQUNsQixXQUFXLEVBQUM7SUFDWjtJQUNBO0VBQUEsRUFDQSxlQUVMO0lBQVEsSUFBSSxFQUFDLFFBQVE7SUFBQyxPQUFPLEVBQUVDO0VBQVksR0FBQyxNQUFJLENBQVMsQ0FDbkQ7QUFFVCxDQUFDO0FBQUMsZUFFYUgsV0FBVztBQUFBIn0=