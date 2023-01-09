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
// F1 collects name, email, and password for account creation.
var AccountForm = function AccountForm(_ref) {
  var response = _ref.response,
    formFields = _ref.formFields,
    setFormFields = _ref.setFormFields,
    userDetails = _ref.userDetails,
    setUserDetails = _ref.setUserDetails,
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

  // =============================================
  // 							CUSTOM HANDLERS
  // =============================================
  var handleClick = function handleClick(e) {
    try {
      handleSubmit(e, {
        name: 'create-account',
        path: '/account',
        payload: userDetails
      });
    } catch (err) {
      console.log('Account Post Error', err);
    }
  };
  var handleChange = function handleChange() {
    var user = {
      Username: document.getElementById('username').value,
      Password: document.getElementById('password').value,
      Email: document.getElementById('email').value
    };
    setFormFields(function (prev) {
      return _objectSpread(_objectSpread({}, prev), user);
    });
    setUserDetails(function (prev) {
      return _objectSpread(_objectSpread({}, prev), user);
    });
    setResponse(function (prev) {
      return _objectSpread(_objectSpread({}, prev), user);
    });
  };
  return /*#__PURE__*/_react["default"].createElement("form", {
    id: "create-account"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Create an Account:"), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "name"
  }, "Username"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Your name...",
    value: response.username,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "password"
  }, "Password"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "password",
    id: "password",
    placeholder: "Choose a password...",
    value: response.password,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "email",
    id: "email",
    placeholder: "Email...",
    value: response.email,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement(_ConditionalLink["default"], {
    to: "/shipping",
    condition: shouldRedirect
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick
  }, "Next")));
};
var _default = AccountForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBY2NvdW50Rm9ybSIsInJlc3BvbnNlIiwiZm9ybUZpZWxkcyIsInNldEZvcm1GaWVsZHMiLCJ1c2VyRGV0YWlscyIsInNldFVzZXJEZXRhaWxzIiwiaW52YWxpZElucHV0Iiwibm90Rmlyc3RSZW5kZXIiLCJzZXRSZXNwb25zZSIsInNob3VsZFJlZGlyZWN0Iiwic2V0U2hvdWxkUmVkaXJlY3QiLCJoYW5kbGVTdWJtaXQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDbGljayIsImUiLCJuYW1lIiwicGF0aCIsInBheWxvYWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwidXNlciIsIlVzZXJuYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiUGFzc3dvcmQiLCJFbWFpbCIsInByZXYiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZW1haWwiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9BY2NvdW50Rm9ybS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgQ29uZGl0aW9uYWxMaW5rIGZyb20gJy4vQ29uZGl0aW9uYWxMaW5rLmpzeCc7XG5cbi8vIEYxIGNvbGxlY3RzIG5hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmQgZm9yIGFjY291bnQgY3JlYXRpb24uXG5jb25zdCBBY2NvdW50Rm9ybSA9ICh7XG5cdHJlc3BvbnNlLFxuXHRmb3JtRmllbGRzLFxuXHRzZXRGb3JtRmllbGRzLFxuXHR1c2VyRGV0YWlscyxcblx0c2V0VXNlckRldGFpbHMsXG5cdGludmFsaWRJbnB1dCxcbiAgbm90Rmlyc3RSZW5kZXIsXG5cdHNldFJlc3BvbnNlLFxuXHRzaG91bGRSZWRpcmVjdCxcblx0c2V0U2hvdWxkUmVkaXJlY3QsXG5cdGhhbmRsZVN1Ym1pdFxufSkgPT4ge1xuXG5cdC8vIE1ha2Ugc3VyZSB3ZSBzdGFydCBvdXQgd2l0aCBhIHJlZGlyZWN0L2ZhbHNlXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0U2hvdWxkUmVkaXJlY3QoZmFsc2UpO1xuXHR9LCBbXSk7XG5cblx0Ly8gSWYgYWxsIGZpZWxkcyBoYXZlIGJlZW4gZmlsbGVkIG91dCwgYWxsb3cgcmVkaXJlY3QgdG8gU2hpcHBpbmcgRGV0YWlsc1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdCFpbnZhbGlkSW5wdXQgJiYgbm90Rmlyc3RSZW5kZXIgPyBzZXRTaG91bGRSZWRpcmVjdCh0cnVlKSA6IHNldFNob3VsZFJlZGlyZWN0KGZhbHNlKTtcblx0fSwgW2Zvcm1GaWVsZHNdKTtcblxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gXHRcdFx0XHRcdFx0XHRDVVNUT00gSEFORExFUlNcblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0aGFuZGxlU3VibWl0KGUsIHtcblx0XHRcdFx0bmFtZTogJ2NyZWF0ZS1hY2NvdW50Jyxcblx0XHRcdFx0cGF0aDogJy9hY2NvdW50Jyxcblx0XHRcdFx0cGF5bG9hZDogdXNlckRldGFpbHNcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coJ0FjY291bnQgUG9zdCBFcnJvcicsIGVycik7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcblx0XHRjb25zdCB1c2VyID0ge1xuXHRcdFx0VXNlcm5hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpLnZhbHVlLFxuXHRcdFx0UGFzc3dvcmQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLnZhbHVlLFxuXHRcdFx0RW1haWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlXG5cdFx0fVxuXHRcdHNldEZvcm1GaWVsZHMocHJldiA9PiAoeyAuLi5wcmV2LCAuLi51c2VyIH0pKTtcblx0XHRzZXRVc2VyRGV0YWlscyhwcmV2ID0+ICh7IC4uLnByZXYsIC4uLnVzZXIgfSkpO1xuXHRcdHNldFJlc3BvbnNlKHByZXYgPT4gKHsgLi4ucHJldiwgLi4udXNlciB9KSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8Zm9ybSBpZD1cImNyZWF0ZS1hY2NvdW50XCI+XG5cdFx0XHQ8aDE+Q3JlYXRlIGFuIEFjY291bnQ6PC9oMT5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0bmFtZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0aWQ9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lLi4uXCJcblx0XHRcdFx0dmFsdWU9e3Jlc3BvbnNlLnVzZXJuYW1lfVxuXHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0PjwvaW5wdXQ+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRpZD1cInBhc3N3b3JkXCJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJDaG9vc2UgYSBwYXNzd29yZC4uLlwiXG5cdFx0XHRcdHZhbHVlPXtyZXNwb25zZS5wYXNzd29yZH1cblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdD48L2lucHV0PlxuXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0aWQ9XCJlbWFpbFwiXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWwuLi5cIlxuXHRcdFx0XHR2YWx1ZT17cmVzcG9uc2UuZW1haWx9XG5cdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHQ+PC9pbnB1dD5cblxuXHRcdFx0PENvbmRpdGlvbmFsTGluayB0bz0nL3NoaXBwaW5nJyBjb25kaXRpb249e3Nob3VsZFJlZGlyZWN0fT5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+TmV4dDwvYnV0dG9uPlxuXHRcdFx0PC9Db25kaXRpb25hbExpbms+XG5cdFx0PC9mb3JtPlxuXHQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50Rm9ybTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUFvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFcEQ7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQVlYO0VBQUEsSUFYTEMsUUFBUSxRQUFSQSxRQUFRO0lBQ1JDLFVBQVUsUUFBVkEsVUFBVTtJQUNWQyxhQUFhLFFBQWJBLGFBQWE7SUFDYkMsV0FBVyxRQUFYQSxXQUFXO0lBQ1hDLGNBQWMsUUFBZEEsY0FBYztJQUNkQyxZQUFZLFFBQVpBLFlBQVk7SUFDWEMsY0FBYyxRQUFkQSxjQUFjO0lBQ2ZDLFdBQVcsUUFBWEEsV0FBVztJQUNYQyxjQUFjLFFBQWRBLGNBQWM7SUFDZEMsaUJBQWlCLFFBQWpCQSxpQkFBaUI7SUFDakJDLFlBQVksUUFBWkEsWUFBWTtFQUdaO0VBQ0EsSUFBQUMsZ0JBQVMsRUFBQyxZQUFNO0lBQ2ZGLGlCQUFpQixDQUFDLEtBQUssQ0FBQztFQUN6QixDQUFDLEVBQUUsRUFBRSxDQUFDOztFQUVOO0VBQ0EsSUFBQUUsZ0JBQVMsRUFBQyxZQUFNO0lBQ2YsQ0FBQ04sWUFBWSxJQUFJ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