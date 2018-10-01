var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _antd = "antd",Icon = _antd.Icon;
// Icons not yet added. Currently using PNG icons.
var
Nav = function (_React$Component) {_inherits(Nav, _React$Component);
  function Nav(props) {_classCallCheck(this, Nav);var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this,
    props));_this.




    hoverOn = function () {
      console.log("On");
    };_this.
    hoverOff = function () {
      console.log("Off");
    };_this.state = { hover: false };return _this;}_createClass(Nav, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", {
            className: "all",
            onMouseEnter: this.hoverOn,
            onMouseLeave: this.hoverOff },

          React.createElement("div", { className: "lefter" }),
          React.createElement("div", { className: "left" }),
          React.createElement("div", { className: "center" },
            React.createElement("div", { className: "explainer" },
              React.createElement("div", { className: "home" }))),


          React.createElement("div", { className: "right" }),
          React.createElement("div", { className: "righter" })));


    } }]);return Nav;}(React.Component);


ReactDOM.render(React.createElement(Nav, null), document.getElementById("root"));