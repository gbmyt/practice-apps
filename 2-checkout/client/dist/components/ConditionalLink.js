"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _excluded = ["children", "condition"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ConditionalLink = function ConditionalLink(_ref) {
  var children = _ref.children,
    condition = _ref.condition,
    props = _objectWithoutProperties(_ref, _excluded);
  return !!condition && props.to ? /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, props, children) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
};
var _default = ConditionalLink;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb25kaXRpb25hbExpbmsiLCJjaGlsZHJlbiIsImNvbmRpdGlvbiIsInByb3BzIiwidG8iXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9Db25kaXRpb25hbExpbmsuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgQ29uZGl0aW9uYWxMaW5rID0gKHsgY2hpbGRyZW4sIGNvbmRpdGlvbiwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gISFjb25kaXRpb24gJiYgcHJvcHMudG8gPyA8TGluayB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0xpbms+IDogPD57Y2hpbGRyZW59PC8+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25hbExpbms7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBd0M7QUFBQTtBQUFBO0FBQUE7QUFFeEMsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFlLE9BQTBDO0VBQUEsSUFBcENDLFFBQVEsUUFBUkEsUUFBUTtJQUFFQyxTQUFTLFFBQVRBLFNBQVM7SUFBS0MsS0FBSztFQUN0RCxPQUFPLENBQUMsQ0FBQ0QsU0FBUyxJQUFJQyxLQUFLLENBQUNDLEVBQUUsZ0JBQUcsZ0NBQUMsb0JBQUksRUFBS0QsS0FBSyxFQUFHRixRQUFRLENBQVEsZ0JBQUcsa0VBQUdBLFFBQVEsQ0FBSTtBQUN2RixDQUFDO0FBQUMsZUFFYUQsZUFBZTtBQUFBIn0=