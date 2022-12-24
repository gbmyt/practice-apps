"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _GlossaryItem = _interopRequireDefault(require("./GlossaryItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Glossary = function Glossary(_ref) {
  var words = _ref.words;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "glossary"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Glossary"), /*#__PURE__*/_react["default"].createElement("ul", null, words.length ? words.map(function (term) {
    return /*#__PURE__*/_react["default"].createElement(_GlossaryItem["default"], {
      word: term,
      key: term._id
    });
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)));
};
var _default = Glossary;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHbG9zc2FyeSIsIndvcmRzIiwibGVuZ3RoIiwibWFwIiwidGVybSIsIl9pZCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0dsb3NzYXJ5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdsb3NzYXJ5SXRlbSBmcm9tICcuL0dsb3NzYXJ5SXRlbSc7XG5cbmNvbnN0IEdsb3NzYXJ5ID0gKHsgd29yZHMgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2xvc3NhcnlcIj5cblx0XHRcdDxoMj5HbG9zc2FyeTwvaDI+XG5cdFx0XHQ8dWw+XG5cdFx0XHRcdHsgd29yZHMubGVuZ3RoID8gd29yZHMubWFwKHRlcm0gPT4gPEdsb3NzYXJ5SXRlbSB3b3JkPXt0ZXJtfSBrZXk9e3Rlcm0uX2lkfSAvPikgOiA8PjwvPiB9XG5cdFx0XHQ8L3VsPlxuXHRcdDwvZGl2PlxuXHQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHbG9zc2FyeTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBMEM7QUFFMUMsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVEsT0FBa0I7RUFBQSxJQUFaQyxLQUFLLFFBQUxBLEtBQUs7RUFDeEIsb0JBQ0M7SUFBSyxTQUFTLEVBQUM7RUFBVSxnQkFDeEIsNENBQUksVUFBUSxDQUFLLGVBQ2pCLDRDQUNHQSxLQUFLLENBQUNDLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxHQUFHLENBQUMsVUFBQUMsSUFBSTtJQUFBLG9CQUFJLGdDQUFDLHdCQUFZO01BQUMsSUFBSSxFQUFFQSxJQUFLO01BQUMsR0FBRyxFQUFFQSxJQUFJLENBQUNDO0lBQUksRUFBRztFQUFBLEVBQUMsZ0JBQUcsaUVBQUssQ0FDbkYsQ0FDQTtBQUVSLENBQUM7QUFBQyxlQUVhTCxRQUFRO0FBQUEifQ==