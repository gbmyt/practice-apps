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
  var setTerm = function setTerm(e) {
    props.setTerm(e.target.value);
  };
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
  })));
};
var _default = SearchBar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInNldFRlcm0iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2giLCJwcmV2ZW50RGVmYXVsdCIsIm9uU2VhcmNoIiwic2VhcmNoVGVybSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFNlYXJjaEJhciA9IHByb3BzID0+IHtcblx0Y29uc3Qgc2V0VGVybSA9IChlKSA9PiB7XG5cdFx0cHJvcHMuc2V0VGVybShlLnRhcmdldC52YWx1ZSk7XG5cdH07XG5cblx0Y29uc3Qgc2VhcmNoID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0cHJvcHMub25TZWFyY2goKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuXHRcdFx0PGZvcm0gaWQ9XCJzZWFyY2hGb3JtXCIgPlxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInNlYXJjaFwiPlNlYXJjaDo8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0bmFtZT1cInNlYXJjaFwiXG5cdFx0XHRcdFx0aWQ9XCJzZWFyY2hGb3JtSW5wdXRcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVHlwZSBzb21ldGhpbmcuLi5cIlxuXHRcdFx0XHRcdHZhbHVlPXtwcm9wcy5zZWFyY2hUZXJtfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRUZXJtfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUEwQjtBQUFBO0FBQUE7QUFFMUIsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVMsQ0FBR0MsS0FBSyxFQUFJO0VBQzFCLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPLENBQUlDLENBQUMsRUFBSztJQUN0QkYsS0FBSyxDQUFDQyxPQUFPLENBQUNDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDOUIsQ0FBQztFQUVELElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFNLENBQUlILENBQUMsRUFBSztJQUNyQkEsQ0FBQyxDQUFDSSxjQUFjLEVBQUU7SUFDbEJOLEtBQUssQ0FBQ08sUUFBUSxFQUFFO0VBQ2pCLENBQUM7RUFFRCxvQkFDQztJQUFLLFNBQVMsRUFBQztFQUFNLGdCQUNwQjtJQUFNLEVBQUUsRUFBQztFQUFZLGdCQUNwQjtJQUFPLE9BQU8sRUFBQztFQUFRLEdBQUMsU0FBTyxDQUFRLGVBQ3ZDO0lBQ0MsSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsUUFBUTtJQUNiLEVBQUUsRUFBQyxpQkFBaUI7SUFDcEIsV0FBVyxFQUFDLG1CQUFtQjtJQUMvQixLQUFLLEVBQUVQLEtBQUssQ0FBQ1EsVUFBVztJQUN4QixRQUFRLEVBQUVQO0VBQVEsRUFDakIsQ0FDSSxDQUNGO0FBRVIsQ0FBQztBQUFDLGVBRWFGLFNBQVM7QUFBQSJ9