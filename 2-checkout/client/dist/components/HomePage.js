"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var HomePage = function HomePage(_ref) {
  var paymentStatus = _ref.paymentStatus;
  var thanksMsg = /*#__PURE__*/_react["default"].createElement("p", {
    id: "payment-confirmation"
  }, "Thanks for shopping with us! You'll receive an email confirmation with your order details enclosed shortly.");
  var buttonMsg = !paymentStatus ? 'Checkout' : 'Place another order';
  // const btn = <button type="submit" id="home-button"><Link to="/account">{buttonMsg}</Link></button>;
  var defaultButton = /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    id: "home-button"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/account"
  }, "Checkout"));
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Shopping Cart \uD83D\uDED2"), !paymentStatus ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null) : thanksMsg, defaultButton);
};
var _default = HomePage;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb21lUGFnZSIsInBheW1lbnRTdGF0dXMiLCJ0aGFua3NNc2ciLCJidXR0b25Nc2ciLCJkZWZhdWx0QnV0dG9uIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoeyBwYXltZW50U3RhdHVzIH0pID0+IHtcbiAgY29uc3QgdGhhbmtzTXNnID0gPHAgaWQ9XCJwYXltZW50LWNvbmZpcm1hdGlvblwiPlRoYW5rcyBmb3Igc2hvcHBpbmcgd2l0aCB1cyEgWW91J2xsIHJlY2VpdmUgYW4gZW1haWwgY29uZmlybWF0aW9uIHdpdGggeW91ciBvcmRlciBkZXRhaWxzIGVuY2xvc2VkIHNob3J0bHkuPC9wPjtcbiAgY29uc3QgYnV0dG9uTXNnID0gIXBheW1lbnRTdGF0dXMgPyAnQ2hlY2tvdXQnIDogJ1BsYWNlIGFub3RoZXIgb3JkZXInO1xuICAvLyBjb25zdCBidG4gPSA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImhvbWUtYnV0dG9uXCI+PExpbmsgdG89XCIvYWNjb3VudFwiPntidXR0b25Nc2d9PC9MaW5rPjwvYnV0dG9uPjtcbiAgY29uc3QgZGVmYXVsdEJ1dHRvbiA9IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiaG9tZS1idXR0b25cIj48TGluayB0bz1cIi9hY2NvdW50XCI+Q2hlY2tvdXQ8L0xpbms+PC9idXR0b24+O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMj5TaG9wcGluZyBDYXJ0IPCfm5I8L2gyPlxuICAgICAgeyFwYXltZW50U3RhdHVzID8gPD48Lz4gOiB0aGFua3NNc2d9XG4gICAgICB7ZGVmYXVsdEJ1dHRvbn1cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBd0M7QUFFeEMsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVEsT0FBMEI7RUFBQSxJQUFwQkMsYUFBYSxRQUFiQSxhQUFhO0VBQy9CLElBQU1DLFNBQVMsZ0JBQUc7SUFBRyxFQUFFLEVBQUM7RUFBc0IsR0FBQyw2R0FBMkcsQ0FBSTtFQUM5SixJQUFNQyxTQUFTLEdBQUcsQ0FBQ0YsYUFBYSxHQUFHLFVBQVUsR0FBRyxxQkFBcUI7RUFDckU7RUFDQSxJQUFNRyxhQUFhLGdCQUFHO0lBQVEsSUFBSSxFQUFDLFFBQVE7SUFBQyxFQUFFLEVBQUM7RUFBYSxnQkFBQyxnQ0FBQyxvQkFBSTtJQUFDLEVBQUUsRUFBQztFQUFVLEdBQUMsVUFBUSxDQUFPLENBQVM7RUFFekcsb0JBQ0UsK0VBQ0UsNENBQUksNEJBQWdCLENBQUssRUFDeEIsQ0FBQ0gsYUFBYSxnQkFBRyxpRUFBSyxHQUFHQyxTQUFTLEVBQ2xDRSxhQUFhLENBQ2I7QUFFUCxDQUFDO0FBQUMsZUFFYUosUUFBUTtBQUFBIn0=