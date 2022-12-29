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
// F1 collects name, email, and password for account creation.

// =======================================================
//                  			TO-DO:
// Form validation for empty required fields and incorrect values/types
// (Refactor to React Router so I can use onSubmit / required input key?)
// =================================================================

var AccountForm = function AccountForm(_ref) {
  var checkoutStage = _ref.checkoutStage,
    setCheckoutStage = _ref.setCheckoutStage,
    accountDetails = _ref.accountDetails,
    setAccountDetails = _ref.setAccountDetails;
  var handleClick = function handleClick(e) {
    e.preventDefault();
    console.log('Account Details From State', accountDetails);
    console.log('Fetching Shipping Form...');
    setCheckoutStage('shipping details');
  };
  var handleChange = function handleChange(e) {
    e.preventDefault();
    var user = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      email: document.getElementById('email').value
    };
    setAccountDetails(_objectSpread({}, user));
  };
  return /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Create an Account:"), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "name"
  }, "Username"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Your name...",
    value: accountDetails.username,
    onChange: handleChange
    // required // doesn't work without using onSubmit instead of onClick
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "password",
    id: "password",
    placeholder: "Choose a password...",
    value: accountDetails.password,
    onChange: handleChange
    // required
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "email",
    id: "email",
    placeholder: "Email...",
    value: accountDetails.email,
    onChange: handleChange
    // required
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    onClick: handleClick
  }, "Next"));
};
var _default = AccountForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBY2NvdW50Rm9ybSIsImNoZWNrb3V0U3RhZ2UiLCJzZXRDaGVja291dFN0YWdlIiwiYWNjb3VudERldGFpbHMiLCJzZXRBY2NvdW50RGV0YWlscyIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInVzZXIiLCJ1c2VybmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiZW1haWwiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9BY2NvdW50Rm9ybS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gRjEgY29sbGVjdHMgbmFtZSwgZW1haWwsIGFuZCBwYXNzd29yZCBmb3IgYWNjb3VudCBjcmVhdGlvbi5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gICAgICAgICAgICAgICAgICBcdFx0XHRUTy1ETzpcbi8vIEZvcm0gdmFsaWRhdGlvbiBmb3IgZW1wdHkgcmVxdWlyZWQgZmllbGRzIGFuZCBpbmNvcnJlY3QgdmFsdWVzL3R5cGVzXG4vLyAoUmVmYWN0b3IgdG8gUmVhY3QgUm91dGVyIHNvIEkgY2FuIHVzZSBvblN1Ym1pdCAvIHJlcXVpcmVkIGlucHV0IGtleT8pXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBBY2NvdW50Rm9ybSA9ICh7IGNoZWNrb3V0U3RhZ2UsIHNldENoZWNrb3V0U3RhZ2UsIGFjY291bnREZXRhaWxzLCBzZXRBY2NvdW50RGV0YWlscyB9KSA9PiB7XG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc29sZS5sb2coJ0FjY291bnQgRGV0YWlscyBGcm9tIFN0YXRlJywgYWNjb3VudERldGFpbHMpO1xuXG5cdFx0Y29uc29sZS5sb2coJ0ZldGNoaW5nIFNoaXBwaW5nIEZvcm0uLi4nKTtcblx0XHRzZXRDaGVja291dFN0YWdlKCdzaGlwcGluZyBkZXRhaWxzJyk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCB1c2VyID0ge1xuXHRcdFx0dXNlcm5hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpLnZhbHVlLFxuXHRcdFx0cGFzc3dvcmQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLnZhbHVlLFxuXHRcdFx0ZW1haWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlXG5cdFx0fVxuXHRcdHNldEFjY291bnREZXRhaWxzKHsgLi4udXNlciB9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxmb3JtPlxuXHRcdFx0PGgxPkNyZWF0ZSBhbiBBY2NvdW50OjwvaDE+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdG5hbWU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdGlkPVwidXNlcm5hbWVcIlxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIllvdXIgbmFtZS4uLlwiXG5cdFx0XHRcdHZhbHVlPXthY2NvdW50RGV0YWlscy51c2VybmFtZX1cblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0Ly8gcmVxdWlyZWQgLy8gZG9lc24ndCB3b3JrIHdpdGhvdXQgdXNpbmcgb25TdWJtaXQgaW5zdGVhZCBvZiBvbkNsaWNrXG5cdFx0XHQvPlxuXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0aWQ9XCJwYXNzd29yZFwiXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGEgcGFzc3dvcmQuLi5cIlxuXHRcdFx0XHR2YWx1ZT17YWNjb3VudERldGFpbHMucGFzc3dvcmR9XG5cdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdC8vIHJlcXVpcmVkXG5cdFx0XHQvPlxuXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0aWQ9XCJlbWFpbFwiXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWwuLi5cIlxuXHRcdFx0XHR2YWx1ZT17YWNjb3VudERldGFpbHMuZW1haWx9XG5cdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdC8vIHJlcXVpcmVkXG5cdFx0XHQvPlxuXG5cdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xpY2t9Pk5leHQ8L2J1dHRvbj5cblx0XHQ8L2Zvcm0+XG5cdClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRGb3JtOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUErRTtFQUFBLElBQXpFQyxhQUFhLFFBQWJBLGFBQWE7SUFBRUMsZ0JBQWdCLFFBQWhCQSxnQkFBZ0I7SUFBRUMsY0FBYyxRQUFkQSxjQUFjO0lBQUVDLGlCQUFpQixRQUFqQkEsaUJBQWlCO0VBQ3hGLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQUlDLENBQUMsRUFBSztJQUMxQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixFQUFFTixjQUFjLENBQUM7SUFFekRLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO0lBQ3hDUCxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztFQUNyQyxDQUFDO0VBRUQsSUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSUosQ0FBQyxFQUFLO0lBQzNCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUVsQixJQUFNSSxJQUFJLEdBQUc7TUFDWkMsUUFBUSxFQUFFQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsS0FBSztNQUNuREMsUUFBUSxFQUFFSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsS0FBSztNQUNuREUsS0FBSyxFQUFFSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0M7SUFDekMsQ0FBQztJQUNEWCxpQkFBaUIsbUJBQU1PLElBQUksRUFBRztFQUMvQixDQUFDO0VBRUQsb0JBQ0MsMkRBQ0MsNENBQUksb0JBQWtCLENBQUssZUFFM0I7SUFBTyxPQUFPLEVBQUM7RUFBTSxHQUFDLFVBQVEsQ0FBUSxlQUN0QztJQUNDLElBQUksRUFBQyxNQUFNO0lBQ1gsSUFBSSxFQUFDLFVBQVU7SUFDZixFQUFFLEVBQUMsVUFBVTtJQUNiLFdBQVcsRUFBQyxjQUFjO0lBQzFCLEtBQUssRUFBRVIsY0FBYyxDQUFDUyxRQUFTO0lBQy9CLFFBQVEsRUFBRUY7SUFDVjtFQUFBLEVBQ0MsZUFFRjtJQUFPLE9BQU8sRUFBQztFQUFVLEdBQUMsVUFBUSxDQUFRLGVBQzFDO0lBQ0MsSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsVUFBVTtJQUNmLEVBQUUsRUFBQyxVQUFVO0lBQ2IsV0FBVyxFQUFDLHNCQUFzQjtJQUNsQyxLQUFLLEVBQUVQLGNBQWMsQ0FBQ2EsUUFBUztJQUMvQixRQUFRLEVBQUVOO0lBQ1Y7RUFBQSxFQUNDLGVBRUY7SUFBTyxPQUFPLEVBQUM7RUFBTyxHQUFDLE9BQUssQ0FBUSxlQUNwQztJQUNDLElBQUksRUFBQyxNQUFNO0lBQ1gsSUFBSSxFQUFDLE9BQU87SUFDWixFQUFFLEVBQUMsT0FBTztJQUNWLFdBQVcsRUFBQyxVQUFVO0lBQ3RCLEtBQUssRUFBRVAsY0FBYyxDQUFDYyxLQUFNO0lBQzVCLFFBQVEsRUFBRVA7SUFDVjtFQUFBLEVBQ0MsZUFFRjtJQUFRLElBQUksRUFBQyxRQUFRO0lBQUMsT0FBTyxFQUFFTDtFQUFZLEdBQUMsTUFBSSxDQUFTLENBQ25EO0FBRVQsQ0FBQztBQUFDLGVBRWFMLFdBQVc7QUFBQSJ9