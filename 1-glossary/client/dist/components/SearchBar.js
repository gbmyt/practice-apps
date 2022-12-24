"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SearchBar = function SearchBar(props) {
  // const [searchTerm, setSearchTerm] = React.useState('');

  var setTerm = function setTerm(e) {
    props.setTerm(e.target.value);
  };

  // ==================================================================
  //   TO-DO: Searching a term should filter existing glossary list
  // ==================================================================
  var search = function search(e) {
    e.preventDefault();
    props.onSearch();
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    id: "searchForm"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "search"
  }, "Search:"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "search",
    id: "searchFormInput",
    placeholder: "Type something...",
    value: props.searchTerm,
    onChange: setTerm
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    onClick: search
  }, "Search")));
};
var _default = SearchBar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInNldFRlcm0iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsIm9uU2VhcmNoIiwic2VhcmNoVGVybSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFNlYXJjaEJhciA9IHByb3BzID0+IHtcblx0Ly8gY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gUmVhY3QudXNlU3RhdGUoJycpO1xuXG5cdGNvbnN0IHNldFRlcm0gPSAoZSkgPT4ge1xuXHRcdHByb3BzLnNldFRlcm0oZS50YXJnZXQudmFsdWUpO1xuXHR9O1xuXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLyAgIFRPLURPOiBTZWFyY2hpbmcgYSB0ZXJtIHNob3VsZCBmaWx0ZXIgZXhpc3RpbmcgZ2xvc3NhcnkgbGlzdFxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Y29uc3Qgc2VhcmNoID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0cHJvcHMub25TZWFyY2goKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuXHRcdFx0PGZvcm0gaWQ9XCJzZWFyY2hGb3JtXCIgPlxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInNlYXJjaFwiPlNlYXJjaDo8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0bmFtZT1cInNlYXJjaFwiXG5cdFx0XHRcdFx0aWQ9XCJzZWFyY2hGb3JtSW5wdXRcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVHlwZSBzb21ldGhpbmcuLi5cIlxuXHRcdFx0XHRcdHZhbHVlPXtwcm9wcy5zZWFyY2hUZXJtfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRUZXJtfVxuXHRcdFx0XHQvPlxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17c2VhcmNofT5TZWFyY2g8L2J1dHRvbj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFBMEI7QUFBQTtBQUFBO0FBRTFCLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTLENBQUdDLEtBQUssRUFBSTtFQUMxQjs7RUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxDQUFJQyxDQUFDLEVBQUs7SUFDdEJGLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQzlCLENBQUM7O0VBRUQ7RUFDQTtFQUNBO0VBQ0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQU0sQ0FBSUgsQ0FBQyxFQUFLO0lBQ3JCQSxDQUFDLENBQUNJLGNBQWMsRUFBRTtJQUNsQk4sS0FBSyxDQUFDTyxRQUFRLEVBQUU7RUFDakIsQ0FBQztFQUVELG9CQUNDO0lBQUssU0FBUyxFQUFDO0VBQU0sZ0JBQ3BCO0lBQU0sRUFBRSxFQUFDO0VBQVksZ0JBQ3BCO0lBQU8sT0FBTyxFQUFDO0VBQVEsR0FBQyxTQUFPLENBQVEsZUFDdkM7SUFDQyxJQUFJLEVBQUMsTUFBTTtJQUNYLElBQUksRUFBQyxRQUFRO0lBQ2IsRUFBRSxFQUFDLGlCQUFpQjtJQUNwQixXQUFXLEVBQUMsbUJBQW1CO0lBQy9CLEtBQUssRUFBRVAsS0FBSyxDQUFDUSxVQUFXO0lBQ3hCLFFBQVEsRUFBRVA7RUFBUSxFQUNqQixlQUNIO0lBQVEsSUFBSSxFQUFDLFFBQVE7SUFBQyxPQUFPLEVBQUVJO0VBQU8sR0FBQyxRQUFNLENBQVMsQ0FDL0MsQ0FDRjtBQUVSLENBQUM7QUFBQyxlQUVhTixTQUFTO0FBQUEifQ==