"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
var ShippingForm = function ShippingForm(_ref) {
  var checkoutStage = _ref.checkoutStage,
    setCheckoutStage = _ref.setCheckoutStage;
  var handleClick = function handleClick(e) {
    e.preventDefault();
    console.log('Getting Billing Details...');
    setCheckoutStage('payment details');
  };
  return /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Where Should We Send Your Stuff?"), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "addr1"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "addr1",
    placeholder: "Address Line 1"
    // value={}
    // onChange={}
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "addr2"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "addr2",
    placeholder: "Address Line 2"
    // value={}
    // onChange={}
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "city"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "city",
    placeholder: "City"
    // value={}
    // onChange={}
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "state"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "state",
    placeholder: "State"
    // value={}
    // onChange={}
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "zip"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "zip",
    placeholder: "Zip Code"
    // value={}
    // onChange={}
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    onClick: handleClick
  }, "Next"));
};
var _default = ShippingForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTaGlwcGluZ0Zvcm0iLCJjaGVja291dFN0YWdlIiwic2V0Q2hlY2tvdXRTdGFnZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NoaXBwaW5nRm9ybS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gRjIgY29sbGVjdHMgc2hpcCB0byBhZGRyZXNzIChsaW5lIDEsIGxpbmUgMiwgY2l0eSwgc3RhdGUsIHppcCBjb2RlKSBhbmQgcGhvbmUgbnVtYmVyLlxuY29uc3QgU2hpcHBpbmdGb3JtID0gKHsgY2hlY2tvdXRTdGFnZSwgc2V0Q2hlY2tvdXRTdGFnZSB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgQmlsbGluZyBEZXRhaWxzLi4uJyk7XG4gICAgc2V0Q2hlY2tvdXRTdGFnZSgncGF5bWVudCBkZXRhaWxzJyk7XG4gIH07XG5cblx0cmV0dXJuIChcblx0XHQ8Zm9ybT5cblx0XHRcdDxoMT5XaGVyZSBTaG91bGQgV2UgU2VuZCBZb3VyIFN0dWZmPzwvaDE+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWRkcjFcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImFkZHIxXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgMVwiXG4gICAgICAgIC8vIHZhbHVlPXt9XG4gICAgICAgIC8vIG9uQ2hhbmdlPXt9XG4gICAgICAvPlxuXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImFkZHIyXCI+PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJhZGRyMlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDJcIlxuICAgICAgICAvLyB2YWx1ZT17fVxuICAgICAgICAvLyBvbkNoYW5nZT17fVxuICAgICAgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJjaXR5XCI+PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDaXR5XCJcbiAgICAgICAgLy8gdmFsdWU9e31cbiAgICAgICAgLy8gb25DaGFuZ2U9e31cbiAgICAgIC8+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwic3RhdGVcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiXG4gICAgICAgIC8vIHZhbHVlPXt9XG4gICAgICAgIC8vIG9uQ2hhbmdlPXt9XG4gICAgICAvPlxuXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInppcFwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiemlwXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJaaXAgQ29kZVwiXG4gICAgICAgIC8vIHZhbHVlPXt9XG4gICAgICAgIC8vIG9uQ2hhbmdlPXt9XG4gICAgICAvPlxuXG5cblx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kbGVDbGlja30+TmV4dDwvYnV0dG9uPlxuXHRcdDwvZm9ybT5cblx0KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcHBpbmdGb3JtOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBMEI7QUFFMUI7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxPQUE0QztFQUFBLElBQXRDQyxhQUFhLFFBQWJBLGFBQWE7SUFBRUMsZ0JBQWdCLFFBQWhCQSxnQkFBZ0I7RUFDckQsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3pCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7SUFDekNMLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0VBQ3JDLENBQUM7RUFFRixvQkFDQywyREFDQyw0Q0FBSSxrQ0FBZ0MsQ0FBSyxlQUV6QztJQUFPLE9BQU8sRUFBQztFQUFPLEVBQVMsZUFDNUI7SUFDRSxJQUFJLEVBQUMsTUFBTTtJQUNYLElBQUksRUFBQyxPQUFPO0lBQ1osV0FBVyxFQUFDO0lBQ1o7SUFDQTtFQUFBLEVBQ0EsZUFFTDtJQUFPLE9BQU8sRUFBQztFQUFPLEVBQVMsZUFDNUI7SUFDRSxJQUFJLEVBQUMsTUFBTTtJQUNYLElBQUksRUFBQyxPQUFPO0lBQ1osV0FBVyxFQUFDO0lBQ1o7SUFDQTtFQUFBLEVBQ0EsZUFFTDtJQUFPLE9BQU8sRUFBQztFQUFNLEVBQVMsZUFDM0I7SUFDRSxJQUFJLEVBQUMsTUFBTTtJQUNYLElBQUksRUFBQyxNQUFNO0lBQ1gsV0FBVyxFQUFDO0lBQ1o7SUFDQTtFQUFBLEVBQ0EsZUFFTDtJQUFPLE9BQU8sRUFBQztFQUFPLEVBQVMsZUFDNUI7SUFDRSxJQUFJLEVBQUMsTUFBTTtJQUNYLElBQUksRUFBQyxPQUFPO0lBQ1osV0FBVyxFQUFDO0lBQ1o7SUFDQTtFQUFBLEVBQ0EsZUFFTDtJQUFPLE9BQU8sRUFBQztFQUFLLEVBQVMsZUFDMUI7SUFDRSxJQUFJLEVBQUMsTUFBTTtJQUNYLElBQUksRUFBQyxLQUFLO0lBQ1YsV0FBVyxFQUFDO0lBQ1o7SUFDQTtFQUFBLEVBQ0EsZUFHTDtJQUFRLElBQUksRUFBQyxRQUFRO0lBQUMsT0FBTyxFQUFFQztFQUFZLEdBQUMsTUFBSSxDQUFTLENBQ25EO0FBRVQsQ0FBQztBQUFDLGVBRWFILFlBQVk7QUFBQSJ9