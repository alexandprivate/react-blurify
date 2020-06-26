"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Blurify;

var _react = _interopRequireDefault(require("react"));

require("./src/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Blurify(_ref) {
  var children = _ref.children,
      _ref$on = _ref.on,
      on = _ref$on === void 0 ? false : _ref$on,
      _ref$intensity = _ref.intensity,
      intensity = _ref$intensity === void 0 ? 4 : _ref$intensity,
      _ref$usePreloader = _ref.usePreloader,
      usePreloader = _ref$usePreloader === void 0 ? true : _ref$usePreloader,
      _ref$preloaderPrimary = _ref.preloaderPrimaryColor,
      preloaderPrimaryColor = _ref$preloaderPrimary === void 0 ? "#000" : _ref$preloaderPrimary,
      _ref$preloaderSeconda = _ref.preloaderSecondaryColor,
      preloaderSecondaryColor = _ref$preloaderSeconda === void 0 ? "#999" : _ref$preloaderSeconda,
      _ref$preloaderBorderW = _ref.preloaderBorderWidth,
      preloaderBorderWidth = _ref$preloaderBorderW === void 0 ? 2 : _ref$preloaderBorderW,
      _ref$preloaderSize = _ref.preloaderSize,
      preloaderSize = _ref$preloaderSize === void 0 ? 36 : _ref$preloaderSize;

  var blur = function blur(i) {
    return {
      filter: on ? "blur(".concat(i, "px)") : ""
    };
  };

  var styledPreloaderContainer = {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  };
  var stylesPreloader = {
    zIndex: 1,
    borderRadius: "".concat(preloaderSize / 2, "px"),
    height: "".concat(preloaderSize, "px"),
    width: "".concat(preloaderSize, "px"),
    borderTop: "solid ".concat(preloaderBorderWidth, "px ").concat(preloaderPrimaryColor),
    borderLeft: "solid ".concat(preloaderBorderWidth, "px ").concat(preloaderSecondaryColor),
    borderRight: "solid ".concat(preloaderBorderWidth, "px ").concat(preloaderSecondaryColor),
    borderBottom: "solid ".concat(preloaderBorderWidth, "px ").concat(preloaderSecondaryColor)
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, on && usePreloader && /*#__PURE__*/_react["default"].createElement("div", {
    style: styledPreloaderContainer
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "blurify__preloader",
    style: stylesPreloader
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: blur(intensity)
  }, children));
}
