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
    setCheckoutStage = _ref.setCheckoutStage,
    shippingAddr = _ref.shippingAddr,
    setShippingAddr = _ref.setShippingAddr;
  var handleClick = function handleClick(e) {
    e.preventDefault();
    console.log('Shipping Details From State', shippingAddr);
    console.log('Fetching Payment Details...');
    setCheckoutStage('payment details');
  };
  var handleChange = function handleChange(e) {
    e.preventDefault();
    var shippingDetails = {
      addrOne: document.getElementById('addr1').value,
      addrTwo: document.getElementById('addr2').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zip: document.getElementById('zip').value,
      phone: document.getElementById('phone').value
    };
    setShippingAddr(shippingDetails);
  };
  return /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Where Should We Send Your Stuff?"), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "addr1"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "addr1",
    id: "addr1",
    placeholder: "Address Line 1",
    value: shippingAddr.addrOne,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "addr2"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "addr2",
    id: "addr2",
    placeholder: "Address Line 2",
    value: shippingAddr.addrTwo,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "city"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "city",
    id: "city",
    placeholder: "City",
    value: shippingAddr.city,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "state"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "state",
    id: "state",
    placeholder: "State",
    value: shippingAddr.state,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "zip"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "zip",
    id: "zip",
    placeholder: "Zip Code",
    value: shippingAddr.zip,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "zip"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "phone",
    id: "phone",
    placeholder: "Phone Number",
    value: shippingAddr.phone,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    onClick: handleClick
  }, "Next"));
};
var _default = ShippingForm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTaGlwcGluZ0Zvcm0iLCJjaGVja291dFN0YWdlIiwic2V0Q2hlY2tvdXRTdGFnZSIsInNoaXBwaW5nQWRkciIsInNldFNoaXBwaW5nQWRkciIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInNoaXBwaW5nRGV0YWlscyIsImFkZHJPbmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJhZGRyVHdvIiwiY2l0eSIsInN0YXRlIiwiemlwIiwicGhvbmUiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9TaGlwcGluZ0Zvcm0uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIEYyIGNvbGxlY3RzIHNoaXAgdG8gYWRkcmVzcyAobGluZSAxLCBsaW5lIDIsIGNpdHksIHN0YXRlLCB6aXAgY29kZSkgYW5kIHBob25lIG51bWJlci5cbmNvbnN0IFNoaXBwaW5nRm9ybSA9ICh7IGNoZWNrb3V0U3RhZ2UsIHNldENoZWNrb3V0U3RhZ2UsIHNoaXBwaW5nQWRkciwgc2V0U2hpcHBpbmdBZGRyIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnU2hpcHBpbmcgRGV0YWlscyBGcm9tIFN0YXRlJywgc2hpcHBpbmdBZGRyKTtcbiAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgUGF5bWVudCBEZXRhaWxzLi4uJyk7XG4gICAgc2V0Q2hlY2tvdXRTdGFnZSgncGF5bWVudCBkZXRhaWxzJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzaGlwcGluZ0RldGFpbHMgPSB7XG4gICAgICBhZGRyT25lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcjEnKS52YWx1ZSxcbiAgICAgIGFkZHJUd286IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyMicpLnZhbHVlLFxuICAgICAgY2l0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKS52YWx1ZSxcbiAgICAgIHN0YXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGUnKS52YWx1ZSxcbiAgICAgIHppcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ppcCcpLnZhbHVlLFxuICAgICAgcGhvbmU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpLnZhbHVlXG4gICAgfVxuICAgIHNldFNoaXBwaW5nQWRkcihzaGlwcGluZ0RldGFpbHMpO1xuICB9O1xuXG5cdHJldHVybiAoXG5cdFx0PGZvcm0+XG5cdFx0XHQ8aDE+V2hlcmUgU2hvdWxkIFdlIFNlbmQgWW91ciBTdHVmZj88L2gxPlxuXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImFkZHIxXCI+PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJhZGRyMVwiXG4gICAgICAgIGlkPVwiYWRkcjFcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAxXCJcbiAgICAgICAgdmFsdWU9e3NoaXBwaW5nQWRkci5hZGRyT25lfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJhZGRyMlwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiYWRkcjJcIlxuICAgICAgICBpZD1cImFkZHIyXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgMlwiXG4gICAgICAgIHZhbHVlPXtzaGlwcGluZ0FkZHIuYWRkclR3b31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwiY2l0eVwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgIGlkPVwiY2l0eVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l0eVwiXG4gICAgICAgIHZhbHVlPXtzaGlwcGluZ0FkZHIuY2l0eX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwic3RhdGVcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgaWQ9XCJzdGF0ZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhdGVcIlxuICAgICAgICB2YWx1ZT17c2hpcHBpbmdBZGRyLnN0YXRlfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cblxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ6aXBcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgIGlkPVwiemlwXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJaaXAgQ29kZVwiXG4gICAgICAgIHZhbHVlPXtzaGlwcGluZ0FkZHIuemlwfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ6aXBcIj48L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgdmFsdWU9e3NoaXBwaW5nQWRkci5waG9uZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xpY2t9Pk5leHQ8L2J1dHRvbj5cblx0XHQ8L2Zvcm0+XG5cdClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXBwaW5nRm9ybTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQTBCO0FBRTFCO0FBQ0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQVksT0FBMkU7RUFBQSxJQUFyRUMsYUFBYSxRQUFiQSxhQUFhO0lBQUVDLGdCQUFnQixRQUFoQkEsZ0JBQWdCO0lBQUVDLFlBQVksUUFBWkEsWUFBWTtJQUFFQyxlQUFlLFFBQWZBLGVBQWU7RUFDcEYsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3pCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLEVBQUVOLFlBQVksQ0FBQztJQUN4REssT0FBTyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7SUFDMUNQLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0VBQ3JDLENBQUM7RUFFRCxJQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJSixDQUFDLEVBQUs7SUFDMUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBRWxCLElBQU1JLGVBQWUsR0FBRztNQUN0QkMsT0FBTyxFQUFFQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsS0FBSztNQUMvQ0MsT0FBTyxFQUFFSCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsS0FBSztNQUMvQ0UsSUFBSSxFQUFFSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsS0FBSztNQUMzQ0csS0FBSyxFQUFFTCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsS0FBSztNQUM3Q0ksR0FBRyxFQUFFTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQ0MsS0FBSztNQUN6Q0ssS0FBSyxFQUFFUCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0M7SUFDMUMsQ0FBQztJQUNEWCxlQUFlLENBQUNPLGVBQWUsQ0FBQztFQUNsQyxDQUFDO0VBRUYsb0JBQ0MsMkRBQ0MsNENBQUksa0NBQWdDLENBQUssZUFFekM7SUFBTyxPQUFPLEVBQUM7RUFBTyxFQUFTLGVBQzVCO0lBQ0UsSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsT0FBTztJQUNaLEVBQUUsRUFBQyxPQUFPO0lBQ1YsV0FBVyxFQUFDLGdCQUFnQjtJQUM1QixLQUFLLEVBQUVSLFlBQVksQ0FBQ1MsT0FBUTtJQUM1QixRQUFRLEVBQUVGO0VBQWEsRUFDdkIsZUFFTDtJQUFPLE9BQU8sRUFBQztFQUFPLEVBQVMsZUFDNUI7SUFDRSxJQUFJLEVBQUMsTUFBTTtJQUNYLElBQUksRUFBQyxPQUFPO0lBQ1osRUFBRSxFQUFDLE9BQU87SUFDVixXQUFXLEVBQUMsZ0JBQWdCO0lBQzVCLEtBQUssRUFBRVAsWUFBWSxDQUFDYSxPQUFRO0lBQzVCLFFBQVEsRUFBRU47RUFBYSxFQUN2QixlQUVMO0lBQU8sT0FBTyxFQUFDO0VBQU0sRUFBUyxlQUMzQjtJQUNFLElBQUksRUFBQyxNQUFNO0lBQ1gsSUFBSSxFQUFDLE1BQU07SUFDWCxFQUFFLEVBQUMsTUFBTTtJQUNULFdBQVcsRUFBQyxNQUFNO0lBQ2xCLEtBQUssRUFBRVAsWUFBWSxDQUFDYyxJQUFLO0lBQ3pCLFFBQVEsRUFBRVA7RUFBYSxFQUN2QixlQUVMO0lBQU8sT0FBTyxFQUFDO0VBQU8sRUFBUyxlQUM1QjtJQUNFLElBQUksRUFBQyxNQUFNO0lBQ1gsSUFBSSxFQUFDLE9BQU87SUFDWixFQUFFLEVBQUMsT0FBTztJQUNWLFdBQVcsRUFBQyxPQUFPO0lBQ25CLEtBQUssRUFBRVAsWUFBWSxDQUFDZSxLQUFNO0lBQzFCLFFBQVEsRUFBRVI7RUFBYSxFQUN2QixlQUVMO0lBQU8sT0FBTyxFQUFDO0VBQUssRUFBUyxlQUMxQjtJQUNFLElBQUksRUFBQyxNQUFNO0lBQ1gsSUFBSSxFQUFDLEtBQUs7SUFDVixFQUFFLEVBQUMsS0FBSztJQUNSLFdBQVcsRUFBQyxVQUFVO0lBQ3RCLEtBQUssRUFBRVAsWUFBWSxDQUFDZ0IsR0FBSTtJQUN4QixRQUFRLEVBQUVUO0VBQWEsRUFDdkIsZUFFRjtJQUFPLE9BQU8sRUFBQztFQUFLLEVBQVMsZUFDN0I7SUFDRSxJQUFJLEVBQUMsTUFBTTtJQUNYLElBQUksRUFBQyxPQUFPO0lBQ1osRUFBRSxFQUFDLE9BQU87SUFDVixXQUFXLEVBQUMsY0FBYztJQUMxQixLQUFLLEVBQUVQLFlBQVksQ0FBQ2lCLEtBQU07SUFDMUIsUUFBUSxFQUFFVjtFQUFhLEVBQ3ZCLGVBQ0w7SUFBUSxJQUFJLEVBQUMsUUFBUTtJQUFDLE9BQU8sRUFBRUw7RUFBWSxHQUFDLE1BQUksQ0FBUyxDQUNuRDtBQUVULENBQUM7QUFBQyxlQUVhTCxZQUFZO0FBQUEifQ==