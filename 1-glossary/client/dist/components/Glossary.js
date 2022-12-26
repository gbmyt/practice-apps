"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _GlossaryItem = _interopRequireDefault(require("./GlossaryItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Glossary = function Glossary(_ref) {
  var words = _ref.words,
    query = _ref.query;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "glossary"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Glossary"), /*#__PURE__*/_react["default"].createElement("ul", null, words.length ? words.map(function (term) {
    return /*#__PURE__*/_react["default"].createElement(_GlossaryItem["default"], {
      word: term,
      key: term._id
    });
  }) : /*#__PURE__*/_react["default"].createElement(_GlossaryItem["default"], null)));
};
var _default = Glossary;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHbG9zc2FyeSIsIndvcmRzIiwicXVlcnkiLCJsZW5ndGgiLCJtYXAiLCJ0ZXJtIiwiX2lkIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvR2xvc3NhcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR2xvc3NhcnlJdGVtIGZyb20gJy4vR2xvc3NhcnlJdGVtJztcblxuY29uc3QgR2xvc3NhcnkgPSAoeyB3b3JkcywgcXVlcnkgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2xvc3NhcnlcIj5cblx0XHRcdDxoMj5HbG9zc2FyeTwvaDI+XG5cdFx0XHQ8dWw+XG5cdFx0XHRcdHsgd29yZHMubGVuZ3RoID8gd29yZHMubWFwKHRlcm0gPT4gPEdsb3NzYXJ5SXRlbSB3b3JkPXt0ZXJtfSBrZXk9e3Rlcm0uX2lkfSAvPikgOiA8R2xvc3NhcnlJdGVtIC8+IH1cblx0XHRcdDwvdWw+XG5cdFx0PC9kaXY+XG5cdClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdsb3NzYXJ5OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUEwQztBQUUxQyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQUF5QjtFQUFBLElBQW5CQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsS0FBSyxRQUFMQSxLQUFLO0VBQy9CLG9CQUNDO0lBQUssU0FBUyxFQUFDO0VBQVUsZ0JBQ3hCLDRDQUFJLFVBQVEsQ0FBSyxlQUNqQiw0Q0FDR0QsS0FBSyxDQUFDRSxNQUFNLEdBQUdGLEtBQUssQ0FBQ0csR0FBRyxDQUFDLFVBQUFDLElBQUk7SUFBQSxvQkFBSSxnQ0FBQyx3QkFBWTtNQUFDLElBQUksRUFBRUEsSUFBSztNQUFDLEdBQUcsRUFBRUEsSUFBSSxDQUFDQztJQUFJLEVBQUc7RUFBQSxFQUFDLGdCQUFHLGdDQUFDLHdCQUFZLE9BQUcsQ0FDOUYsQ0FDQTtBQUVSLENBQUM7QUFBQyxlQUVhTixRQUFRO0FBQUEifQ==