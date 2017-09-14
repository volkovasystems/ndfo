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
*/

const assert = require( "should/as-function" );

//: @server:
const ndfo = require( "./ndfo.js" );
//: @end-server

//: @client:
const ndfo = require( "./ndfo.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "ndfo", ( ) => {

	describe( "`ndfo( )`", ( ) => {
		it( "should return Undefined instance", ( ) => {
			let data = ndfo( );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Undefined" );

			assert.equal( data.valueOf( ), undefined );

		} );
	} );

	describe( "`ndfo( undefined )`", ( ) => {
		it( "should return Undefined instance", ( ) => {
			let data = ndfo( undefined );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Undefined" );

			assert.equal( data.valueOf( ), undefined );

		} );
	} );

	describe( "`ndfo( undefined ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof ndfo( undefined ).toString( ), "string" );
		} );
	} );

	describe( "`ndfo( undefined ).toNumber( )`", ( ) => {
		it( "should return NaN", ( ) => {
			assert.equal( ndfo( undefined ).toNumber( ).toString( ), "NaN" );
		} );
	} );

	describe( "`ndfo( undefined ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			assert.equal( typeof ndfo( undefined ).toBoolean( ), "boolean" );
		} );
	} );

	describe( "`ndfo( undefined ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = ndfo( undefined ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "ndfo", ( ) => {

	describe( "`ndfo( )`", ( ) => {
		it( "should return Undefined instance", ( ) => {
			let data = ndfo( );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Undefined" );

			assert.equal( data.valueOf( ), undefined );

		} );
	} );

	describe( "`ndfo( undefined )`", ( ) => {
		it( "should return Undefined instance", ( ) => {
			let data = ndfo( undefined );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Undefined" );

			assert.equal( data.valueOf( ), undefined );

		} );
	} );

	describe( "`ndfo( undefined ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			assert.equal( typeof ndfo( undefined ).toString( ), "string" );
		} );
	} );

	describe( "`ndfo( undefined ).toNumber( )`", ( ) => {
		it( "should return NaN", ( ) => {
			assert.equal( ndfo( undefined ).toNumber( ).toString( ), "NaN" );
		} );
	} );

	describe( "`ndfo( undefined ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			assert.equal( typeof ndfo( undefined ).toBoolean( ), "boolean" );
		} );
	} );

	describe( "`ndfo( undefined ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = ndfo( undefined ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "ndfo", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`ndfo( )`", ( ) => {
		it( "should return Undefined instance", ( ) => {
			//: @ignore:
			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof ndfo( ); } ).value, "object" );
			//: @end-ignore

			assert.equal( browser.url( bridgeURL ).execute( ( ) => ndfo( ).constructor.name ).value, "Undefined" );

			assert.equal( browser.url( bridgeURL ).execute( ( ) => `${ ndfo( ).valueOf( ) }` ).value, "undefined" );

		} );
	} );

	describe( "`ndfo( undefined )`", ( ) => {
		it( "should return Undefined instance", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let data = ndfo( undefined );

					let test = typeof data == "object" &&
						data.constructor.name == "Undefined" &&
						data.valueOf( ) == undefined;

					return test;
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );

		} );
	} );

	describe( "`ndfo( undefined ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof ndfo( undefined ).toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "string" );
		} );
	} );

	describe( "`ndfo( undefined ).toNumber( )`", ( ) => {
		it( "should return NaN", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return ndfo( undefined ).toNumber( ).toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "NaN" );
		} );
	} );

	describe( "`ndfo( undefined ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof ndfo( undefined ).toBoolean( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "boolean" );
		} );
	} );

	describe( "`ndfo( undefined ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let descriptor = ndfo( undefined ).toObject( );

					let test = typeof descriptor == "object" &&
						"type" in descriptor == true &&
						"name" in descriptor == true &&
						"value" in descriptor == true &&
						"format" in descriptor == true;

					return test;
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );

		} );
	} );

} );

//: @end-bridge
