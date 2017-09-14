"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "ndfo",
              			"path": "ndfo/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/ndfo.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"ndfo": "ndfo"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var ndfo = require("./ndfo.support.js");
//: @end-client







//: @client:

describe("ndfo", function () {

	describe("`ndfo( )`", function () {
		it("should return Undefined instance", function () {
			var data = ndfo();

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "Undefined");

			assert.equal(data.valueOf(), undefined);

		});
	});

	describe("`ndfo( undefined )`", function () {
		it("should return Undefined instance", function () {
			var data = ndfo(undefined);

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "Undefined");

			assert.equal(data.valueOf(), undefined);

		});
	});

	describe("`ndfo( undefined ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(ndfo(undefined).toString()), "string");
		});
	});

	describe("`ndfo( undefined ).toNumber( )`", function () {
		it("should return NaN", function () {
			assert.equal(ndfo(undefined).toNumber().toString(), "NaN");
		});
	});

	describe("`ndfo( undefined ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			assert.equal((0, _typeof3.default)(ndfo(undefined).toBoolean()), "boolean");
		});
	});

	describe("`ndfo( undefined ).toObject( )`", function () {
		it("should return object type", function () {
			var descriptor = ndfo(undefined).toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibmRmbyIsImRlc2NyaWJlIiwiaXQiLCJkYXRhIiwiZXF1YWwiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ2YWx1ZU9mIiwidW5kZWZpbmVkIiwidG9TdHJpbmciLCJ0b051bWJlciIsInRvQm9vbGVhbiIsImRlc2NyaXB0b3IiLCJ0b09iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsV0FBVixFQUF1QixZQUFPO0FBQzdCQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87QUFDOUMsT0FBSUMsT0FBT0gsTUFBWDs7QUFFQUYsVUFBT00sS0FBUCxRQUFxQkQsSUFBckIsdURBQXFCQSxJQUFyQixHQUEyQixRQUEzQjs7QUFFQUwsVUFBT00sS0FBUCxDQUFjRCxLQUFLRSxXQUFMLENBQWlCQyxJQUEvQixFQUFxQyxXQUFyQzs7QUFFQVIsVUFBT00sS0FBUCxDQUFjRCxLQUFLSSxPQUFMLEVBQWQsRUFBK0JDLFNBQS9COztBQUVBLEdBVEQ7QUFVQSxFQVhEOztBQWFBUCxVQUFVLHFCQUFWLEVBQWlDLFlBQU87QUFDdkNDLEtBQUksa0NBQUosRUFBd0MsWUFBTztBQUM5QyxPQUFJQyxPQUFPSCxLQUFNUSxTQUFOLENBQVg7O0FBRUFWLFVBQU9NLEtBQVAsUUFBcUJELElBQXJCLHVEQUFxQkEsSUFBckIsR0FBMkIsUUFBM0I7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0UsV0FBTCxDQUFpQkMsSUFBL0IsRUFBcUMsV0FBckM7O0FBRUFSLFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0ksT0FBTCxFQUFkLEVBQStCQyxTQUEvQjs7QUFFQSxHQVREO0FBVUEsRUFYRDs7QUFhQVAsVUFBVSxpQ0FBVixFQUE2QyxZQUFPO0FBQ25EQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9NLEtBQVAsdUJBQXFCSixLQUFNUSxTQUFOLEVBQWtCQyxRQUFsQixFQUFyQixHQUFvRCxRQUFwRDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BUixVQUFVLGlDQUFWLEVBQTZDLFlBQU87QUFDbkRDLEtBQUksbUJBQUosRUFBeUIsWUFBTztBQUMvQkosVUFBT00sS0FBUCxDQUFjSixLQUFNUSxTQUFOLEVBQWtCRSxRQUFsQixHQUE4QkQsUUFBOUIsRUFBZCxFQUF5RCxLQUF6RDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BUixVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERDLEtBQUksNEJBQUosRUFBa0MsWUFBTztBQUN4Q0osVUFBT00sS0FBUCx1QkFBcUJKLEtBQU1RLFNBQU4sRUFBa0JHLFNBQWxCLEVBQXJCLEdBQXFELFNBQXJEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFWLFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREMsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDLE9BQUlVLGFBQWFaLEtBQU1RLFNBQU4sRUFBa0JLLFFBQWxCLEVBQWpCOztBQUVBZixVQUFPTSxLQUFQLFFBQXFCUSxVQUFyQix1REFBcUJBLFVBQXJCLEdBQWlDLFFBQWpDOztBQUVBZCxVQUFPTSxLQUFQLENBQWMsVUFBVVEsVUFBeEIsRUFBb0MsSUFBcEM7O0FBRUFkLFVBQU9NLEtBQVAsQ0FBYyxVQUFVUSxVQUF4QixFQUFvQyxJQUFwQzs7QUFFQWQsVUFBT00sS0FBUCxDQUFjLFdBQVdRLFVBQXpCLEVBQXFDLElBQXJDOztBQUVBZCxVQUFPTSxLQUFQLENBQWMsWUFBWVEsVUFBMUIsRUFBc0MsSUFBdEM7O0FBRUEsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBLENBL0REOztBQWlFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm5kZm9cIixcblx0XHRcdFwicGF0aFwiOiBcIm5kZm8vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL25kZm8uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcIm5kZm9cIjogXCJuZGZvXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBuZGZvID0gcmVxdWlyZSggXCIuL25kZm8uc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcIm5kZm9cIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgbmRmbyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIFVuZGVmaW5lZCBpbnN0YW5jZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRhdGEgPSBuZGZvKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBkYXRhLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YS5jb25zdHJ1Y3Rvci5uYW1lLCBcIlVuZGVmaW5lZFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YS52YWx1ZU9mKCApLCB1bmRlZmluZWQgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBuZGZvKCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIFVuZGVmaW5lZCBpbnN0YW5jZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRhdGEgPSBuZGZvKCB1bmRlZmluZWQgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGF0YSwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGEuY29uc3RydWN0b3IubmFtZSwgXCJVbmRlZmluZWRcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGEudmFsdWVPZiggKSwgdW5kZWZpbmVkICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbmRmbyggdW5kZWZpbmVkICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgbmRmbyggdW5kZWZpbmVkICkudG9TdHJpbmcoICksIFwic3RyaW5nXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbmRmbyggdW5kZWZpbmVkICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBOYU5cIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggbmRmbyggdW5kZWZpbmVkICkudG9OdW1iZXIoICkudG9TdHJpbmcoICksIFwiTmFOXCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbmRmbyggdW5kZWZpbmVkICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gYm9vbGVhbiB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBuZGZvKCB1bmRlZmluZWQgKS50b0Jvb2xlYW4oICksIFwiYm9vbGVhblwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG5kZm8oIHVuZGVmaW5lZCApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBkZXNjcmlwdG9yID0gbmRmbyggdW5kZWZpbmVkICkudG9PYmplY3QoICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRlc2NyaXB0b3IsIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInR5cGVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJuYW1lXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
