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
              			"path": "ndfo/undefined.module.js",
              			"file": "undefined.module.js",
              			"module": "ndfo",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var EMPTY_STRING = "";
var UNDEFINED = undefined;
var SERIALIZE_UNDEFINED_TAG = "[undefined Undefined:undefined]";
var META_SERIALIZE_UNDEFINED_TAG = Meta.create(UNDEFINED).serialize();var

Undefined = function (_Meta) {(0, _inherits3.default)(Undefined, _Meta);(0, _createClass3.default)(Undefined, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				typeof instance == "undefined" ||
				Meta.instanceOf(instance, this));

		} }, { key: "deserialize", value: function deserialize(

		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */

			return Meta.create(this, UNDEFINED);
		} }]);

	function Undefined() {(0, _classCallCheck3.default)(this, Undefined);return (0, _possibleConstructorReturn3.default)(this, (Undefined.__proto__ || (0, _getPrototypeOf2.default)(Undefined)).call(this,
		UNDEFINED, "Undefined"));
	}(0, _createClass3.default)(Undefined, [{ key: "serialize", value: function serialize(

















		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			return SERIALIZE_UNDEFINED_TAG;
		} }, { key: "isCompatible", value: function isCompatible(

		tag) {
			return (
				tag === SERIALIZE_UNDEFINED_TAG ||
				tag === META_SERIALIZE_UNDEFINED_TAG);

		} }, { key: Meta.OBJECT, get: function get() {return EMPTY_STRING;} }, { key: Meta.BOOLEAN, get: function get() {return false;} }, { key: Meta.STRING, get: function get() {return EMPTY_STRING;} }, { key: Meta.NUMBER, get: function get() {return NaN;} }]);return Undefined;}(Meta);


module.exports = Undefined;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuZGVmaW5lZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbIk1ldGEiLCJyZXF1aXJlIiwiRU1QVFlfU1RSSU5HIiwiVU5ERUZJTkVEIiwidW5kZWZpbmVkIiwiU0VSSUFMSVpFX1VOREVGSU5FRF9UQUciLCJNRVRBX1NFUklBTElaRV9VTkRFRklORURfVEFHIiwiY3JlYXRlIiwic2VyaWFsaXplIiwiVW5kZWZpbmVkIiwiaW5zdGFuY2UiLCJpbnN0YW5jZU9mIiwiZGF0YSIsInBhcnNlciIsImJsdWVwcmludCIsInRhZyIsIk9CSkVDVCIsIkJPT0xFQU4iLCJTVFJJTkciLCJOVU1CRVIiLCJOYU4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxPQUFPQyxRQUFTLEtBQVQsR0FBYjs7QUFFQSxJQUFNQyxlQUFlLEVBQXJCO0FBQ0EsSUFBTUMsWUFBWUMsU0FBbEI7QUFDQSxJQUFNQywwQkFBMEIsaUNBQWhDO0FBQ0EsSUFBTUMsK0JBQStCTixLQUFLTyxNQUFMLENBQWFKLFNBQWIsRUFBeUJLLFNBQXpCLEVBQXJDLEM7O0FBRU1DLFM7QUFDMEJDLFUsRUFBVTtBQUN4QztBQUNDLFdBQU9BLFFBQVAsSUFBbUIsV0FBbkI7QUFDQVYsU0FBS1csVUFBTCxDQUFpQkQsUUFBakIsRUFBMkIsSUFBM0IsQ0FGRDs7QUFJQSxHOztBQUVtQkUsTSxFQUFNQyxNLEVBQVFDLFMsRUFBVztBQUM1Qzs7Ozs7Ozs7OztBQVVBLFVBQU9kLEtBQUtPLE1BQUwsQ0FBYSxJQUFiLEVBQW1CSixTQUFuQixDQUFQO0FBQ0EsRzs7QUFFRCxzQkFBYztBQUNOQSxXQURNLEVBQ0ssV0FETDtBQUViLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCVVUsUSxFQUFRO0FBQ2xCOzs7Ozs7OztBQVFBLFVBQU9SLHVCQUFQO0FBQ0EsRzs7QUFFYVUsSyxFQUFLO0FBQ2xCO0FBQ0NBLFlBQVFWLHVCQUFSO0FBQ0dVLFlBQVFULDRCQUZaOztBQUlBLEcsV0FqQ0tOLEtBQUtnQixNLHNCQUFXLENBQ3JCLE9BQU9kLFlBQVAsQ0FDQSxDLFdBRUtGLEtBQUtpQixPLHNCQUFZLENBQ3RCLE9BQU8sS0FBUCxDQUNBLEMsV0FFS2pCLEtBQUtrQixNLHNCQUFXLENBQ3JCLE9BQU9oQixZQUFQLENBQ0EsQyxXQUVLRixLQUFLbUIsTSxzQkFBVyxDQUNyQixPQUFPQyxHQUFQLENBQ0EsQyx3QkF4Q3NCcEIsSTs7O0FBOER4QnFCLE9BQU9DLE9BQVAsR0FBaUJiLFNBQWpCIiwiZmlsZSI6InVuZGVmaW5lZC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJuZGZvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJuZGZvL3VuZGVmaW5lZC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInVuZGVmaW5lZC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibmRmb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbmRmby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm5kZm8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2UsXG5cdFx0XHRcImludGVybmFsXCI6IHRydWUsXG5cdFx0XHRcImNsYXNzXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0VW5kZWZpbmVkIGNsYXNzIHdyYXBwZXIuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IE1ldGEgPSByZXF1aXJlKCBcImVobVwiICkoICk7XG5cbmNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5jb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5jb25zdCBTRVJJQUxJWkVfVU5ERUZJTkVEX1RBRyA9IFwiW3VuZGVmaW5lZCBVbmRlZmluZWQ6dW5kZWZpbmVkXVwiO1xuY29uc3QgTUVUQV9TRVJJQUxJWkVfVU5ERUZJTkVEX1RBRyA9IE1ldGEuY3JlYXRlKCBVTkRFRklORUQgKS5zZXJpYWxpemUoICk7XG5cbmNsYXNzIFVuZGVmaW5lZCBleHRlbmRzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dHlwZW9mIGluc3RhbmNlID09IFwidW5kZWZpbmVkXCIgfHxcblx0XHRcdE1ldGEuaW5zdGFuY2VPZiggaW5zdGFuY2UsIHRoaXMgKVxuXHRcdCk7XG5cdH1cblxuXHRzdGF0aWMgZGVzZXJpYWxpemUoIGRhdGEsIHBhcnNlciwgYmx1ZXByaW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJkYXRhXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyc2VyXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcImJsdWVwcmludFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIE1ldGEuY3JlYXRlKCB0aGlzLCBVTkRFRklORUQgKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCApe1xuXHRcdHN1cGVyKCBVTkRFRklORUQsIFwiVW5kZWZpbmVkXCIgKTtcblx0fVxuXG5cdGdldCBbIE1ldGEuT0JKRUNUIF0oICl7XG5cdFx0cmV0dXJuIEVNUFRZX1NUUklORztcblx0fVxuXG5cdGdldCBbIE1ldGEuQk9PTEVBTiBdKCApe1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldCBbIE1ldGEuU1RSSU5HIF0oICl7XG5cdFx0cmV0dXJuIEVNUFRZX1NUUklORztcblx0fVxuXG5cdGdldCBbIE1ldGEuTlVNQkVSIF0oICl7XG5cdFx0cmV0dXJuIE5hTjtcblx0fVxuXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiBTRVJJQUxJWkVfVU5ERUZJTkVEX1RBRztcblx0fVxuXG5cdGlzQ29tcGF0aWJsZSggdGFnICl7XG5cdFx0cmV0dXJuIChcblx0XHRcdHRhZyA9PT0gU0VSSUFMSVpFX1VOREVGSU5FRF9UQUdcblx0XHRcdHx8IHRhZyA9PT0gTUVUQV9TRVJJQUxJWkVfVU5ERUZJTkVEX1RBR1xuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbmRlZmluZWQ7XG4iXX0=
//# sourceMappingURL=undefined.support.js.map
