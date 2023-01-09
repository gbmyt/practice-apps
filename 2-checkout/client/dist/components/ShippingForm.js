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
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
var ShippingForm = function ShippingForm(_ref) {
  var response = _ref.response,
    formFields = _ref.formFields,
    setFormFields = _ref.setFormFields,
    shippingDetails = _ref.shippingDetails,
    setShippingDetails = _ref.setShippingDetails,
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
  (0, _react.useEffect)(function () {
    !invalidInput && notFirstRender ? setShouldRedirect(true) : setShouldRedirect(false);
  }, [formFields]);
  var handleChange = function handleChange() {
    var shippingDetails = {
      AddrOne: document.getElementById('addr1').value,
      AddrTwo: document.getElementById('addr2').value,
      City: document.getElementById('city').value,
      State: document.getElementById('state').value,
      Zip: document.getElementById('zip').value,
      Phone: document.getElementById('phone').value
    };
    setFormFields(function (prev) {
      return _objectSpread(_objectSpread({}, prev), shippingDetails);
    });
    setShippingDetails(function (prev) {
      return _objectSpread(_objectSpread({}, prev), shippingDetails);
    });
    setResponse(function (prev) {
      return _objectSpread(_objectSpread({}, prev), shippingDetails);
    });
  };
  var handleClick = function handleClick(e) {
    try {
      handleSubmit(e, {
        name: 'shipping-info',
        path: '/shipping',
        payload: shippingDetails
      });
    } catch (err) {
      console.log('Shipping Post Error', err);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("form", {
    id: "shipping-info"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Where Should We Send Your Stuff?"), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "addr1"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "addr1",
    id: "addr1",
    placeholder: "Address Line 1",
    value: response.addrOne,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "addr2"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "addr2",
    id: "addr2",
    placeholder: "Address Line 2",
    value: response.addrTwo,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "city"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "city",
    id: "city",
    placeholder: "City",
    value: response.city,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "state"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "state",
    id: "state",
    placeholder: "State",
    value: response.state,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "zip"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "zip",
    id: "zip",
    placeholder: "Zip Code",
    value: response.zip,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "zip"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "phone",
    id: "phone",
    placeholder: "Phone Number",
    value: response.phone,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement(_ConditionalLink["default"], {
    to: "/payment",
    condition: shouldRedirect
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick
  }, "Next")));
};
var _default = ShippingForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTaGlwcGluZ0Zvcm0iLCJyZXNwb25zZSIsImZvcm1GaWVsZHMiLCJzZXRGb3JtRmllbGRzIiwic2hpcHBpbmdEZXRhaWxzIiwic2V0U2hpcHBpbmdEZXRhaWxzIiwiaW52YWxpZElucHV0Iiwibm90Rmlyc3RSZW5kZXIiLCJzZXRSZXNwb25zZSIsInNob3VsZFJlZGlyZWN0Iiwic2V0U2hvdWxkUmVkaXJlY3QiLCJoYW5kbGVTdWJtaXQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJBZGRyT25lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiQWRkclR3byIsIkNpdHkiLCJTdGF0ZSIsIlppcCIsIlBob25lIiwicHJldiIsImhhbmRsZUNsaWNrIiwiZSIsIm5hbWUiLCJwYXRoIiwicGF5bG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhZGRyT25lIiwiYWRkclR3byIsImNpdHkiLCJzdGF0ZSIsInppcCIsInBob25lIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvU2hpcHBpbmdGb3JtLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBDb25kaXRpb25hbExpbmsgZnJvbSAnLi9Db25kaXRpb25hbExpbmsuanN4JztcblxuLy8gRjIgY29sbGVjdHMgc2hpcCB0byBhZGRyZXNzIChsaW5lIDEsIGxpbmUgMiwgY2l0eSwgc3RhdGUsIHppcCBjb2RlKSBhbmQgcGhvbmUgbnVtYmVyLlxuY29uc3QgU2hpcHBpbmdGb3JtID0gKHtcbiAgcmVzcG9uc2UsXG4gIGZvcm1GaWVsZHMsXG4gIHNldEZvcm1GaWVsZHMsXG4gIHNoaXBwaW5nRGV0YWlscyxcbiAgc2V0U2hpcHBpbmdEZXRhaWxzLFxuICBpbnZhbGlkSW5wdXQsXG4gIG5vdEZpcnN0UmVuZGVyLFxuICBzZXRSZXNwb25zZSxcbiAgc2hvdWxkUmVkaXJlY3QsXG4gIHNldFNob3VsZFJlZGlyZWN0LFxuICBoYW5kbGVTdWJtaXRcbn0pID0+IHtcblxuICAvLyBNYWtlIHN1cmUgd2Ugc3RhcnQgb3V0IHdpdGggYSByZWRpcmVjdC9mYWxzZVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFNob3VsZFJlZGlyZWN0KGZhbHNlKTtcblx0fSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0IWludmFsaWRJbnB1dCAmJiBub3RGaXJzdFJlbmRlciA/IHNldFNob3VsZFJlZGlyZWN0KHRydWUpIDogc2V0U2hvdWxkUmVkaXJlY3QoZmFsc2UpO1xuXHR9LCBbZm9ybUZpZWxkc10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwcGluZ0RldGFpbHMgPSB7XG4gICAgICBBZGRyT25lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcjEnKS52YWx1ZSxcbiAgICAgIEFkZHJUd286IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyMicpLnZhbHVlLFxuICAgICAgQ2l0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKS52YWx1ZSxcbiAgICAgIFN0YXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGUnKS52YWx1ZSxcbiAgICAgIFppcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ppcCcpLnZhbHVlLFxuICAgICAgUGhvbmU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpLnZhbHVlXG4gICAgfVxuICAgIHNldEZvcm1GaWVsZHMocHJldiA9PiAoey4uLnByZXYsIC4uLnNoaXBwaW5nRGV0YWlscyB9KSk7XG4gICAgc2V0U2hpcHBpbmdEZXRhaWxzKHByZXYgPT4gKHsuLi5wcmV2LCAuLi5zaGlwcGluZ0RldGFpbHMgfSkpO1xuICAgIHNldFJlc3BvbnNlKHByZXYgPT4gKHsuLi5wcmV2LCAuLi5zaGlwcGluZ0RldGFpbHMgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICB0cnkge1xuXHRcdFx0aGFuZGxlU3VibWl0KGUsIHtcblx0XHRcdFx0bmFtZTogJ3NoaXBwaW5nLWluZm8nLFxuXHRcdFx0XHRwYXRoOiAnL3NoaXBwaW5nJyxcblx0XHRcdFx0cGF5bG9hZDogc2hpcHBpbmdEZXRhaWxzXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdTaGlwcGluZyBQb3N0IEVycm9yJywgZXJyKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8Zm9ybSBpZD1cInNoaXBwaW5nLWluZm9cIj5cblx0XHRcdDxoMT5XaGVyZSBTaG91bGQgV2UgU2VuZCBZb3VyIFN0dWZmPzwvaDE+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWRkcjFcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImFkZHIxXCJcbiAgICAgICAgaWQ9XCJhZGRyMVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDFcIlxuICAgICAgICB2YWx1ZT17cmVzcG9uc2UuYWRkck9uZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWRkcjJcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImFkZHIyXCJcbiAgICAgICAgaWQ9XCJhZGRyMlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDJcIlxuICAgICAgICB2YWx1ZT17cmVzcG9uc2UuYWRkclR3b31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiY2l0eVwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgIGlkPVwiY2l0eVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l0eVwiXG4gICAgICAgIHZhbHVlPXtyZXNwb25zZS5jaXR5fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJzdGF0ZVwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICBpZD1cInN0YXRlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiXG4gICAgICAgIHZhbHVlPXtyZXNwb25zZS5zdGF0ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiemlwXCI+PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJ6aXBcIlxuICAgICAgICBpZD1cInppcFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWmlwIENvZGVcIlxuICAgICAgICB2YWx1ZT17cmVzcG9uc2UuemlwfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ6aXBcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgdmFsdWU9e3Jlc3BvbnNlLnBob25lfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cblxuICAgICAgPENvbmRpdGlvbmFsTGluayB0bz0nL3BheW1lbnQnIGNvbmRpdGlvbj17c2hvdWxkUmVkaXJlY3R9PlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5OZXh0PC9idXR0b24+XG5cdFx0XHQ8L0NvbmRpdGlvbmFsTGluaz5cblx0XHQ8L2Zvcm0+XG5cdClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXBwaW5nRm9ybTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUFvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFcEQ7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxPQVlaO0VBQUEsSUFYSkMsUUFBUSxRQUFSQSxRQUFRO0lBQ1JDLFVBQVUsUUFBVkEsVUFBVTtJQUNWQyxhQUFhLFFBQWJBLGFBQWE7SUFDYkMsZUFBZSxRQUFmQSxlQUFlO0lBQ2ZDLGtCQUFrQixRQUFsQkEsa0JBQWtCO0lBQ2xCQyxZQUFZLFFBQVpBLFlBQVk7SUFDWkMsY0FBYyxRQUFkQSxjQUFjO0lBQ2RDLFdBQVcsUUFBWEEsV0FBVztJQUNYQyxjQUFjLFFBQWRBLGNBQWM7SUFDZEMsaUJBQWlCLFFBQWpCQSxpQkFBaUI7SUFDakJDLFlBQVksUUFBWkEsWUFBWTtFQUdaO0VBQ0QsSUFBQUMsZ0JBQVMsRUFBQyxZQUFNO0lBQ2ZGLGlCQUFpQixDQUFDLEtBQUssQ0FBQztFQUN6QixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRUwsSUFBQUUsZ0JBQVMsRUFBQyxZQUFNO0lBQ2hCLENBQUNOLFlBQVksSUFBSUMsY0FBYyxHQUFHRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBR0EsaUJBQWlCLENBQUMsS0FBSyxDQUFDO0VBQ3JGLENBQUMsRUFBRSxDQUFDUixVQUFVLENBQUMsQ0FBQztFQUVmLElBQU1XLFlBQVksR0FBRyxTQUFmQSxZQUFZLEdBQVM7SUFDekIsSUFBTVQsZUFBZSxHQUFHO01BQ3RCVSxPQUFPLEVBQUVDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8s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