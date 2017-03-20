"use strict";

/*;
              	@submodule-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "ndfo",
              			"path": "ndfo/undefined.js",
              			"file": "undefined.js",
              			"module": "ndfo",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/ndfo.git",
              			"test": "ndfo-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Undefined class wrapper.
              	@end-submodule-documentation
              */var _toStringTag = require("babel-runtime/core-js/symbol/to-string-tag");var _toStringTag2 = _interopRequireDefault(_toStringTag);var _toPrimitive = require("babel-runtime/core-js/symbol/to-primitive");var _toPrimitive2 = _interopRequireDefault(_toPrimitive);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var UNDEFINED = undefined;
var UNDEFINED_TAG = Object.prototype.toString.call(UNDEFINED);

var NAME = (0, _for2.default)("name");
var VALUE = (0, _for2.default)("value");
var TYPE = (0, _for2.default)("type");var

Undefined = function () {(0, _createClass3.default)(Undefined, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return instance === UNDEFINED || (instance || {}).constructor === Undefined;
		} }]);

	function Undefined(entity) {(0, _classCallCheck3.default)(this, Undefined);
		if (typeof entity == "string" && entity === UNDEFINED_TAG ||
		entity === UNDEFINED || !arguments.length)
		{
			this[NAME] = "undefined";
			this[VALUE] = entity || UNDEFINED;
			this[TYPE] = (0, _typeof3.default)(this.value);

		} else if (arguments.length) {
			throw new Error("invalid undefined value, " + entity);
		}
	}(0, _createClass3.default)(Undefined, [{ key: "toString", value: function toString()

		{
			return UNDEFINED_TAG;
		} }, { key: "valueOf", value: function valueOf()





		{
			return UNDEFINED;
		} }, { key: _toPrimitive2.default, value: function value(

		hint) {
			switch (hint) {
				case "string":
					return "";

				case "number":
					return 0;

				default:
					return false;}

		} }, { key: "toJSON", value: function toJSON()

		{
			return this.toString();
		} }, { key: _toStringTag2.default, get: function get() {return "Undefined";} }]);return Undefined;}();


module.exports = Undefined;

//# sourceMappingURL=undefined.js.map