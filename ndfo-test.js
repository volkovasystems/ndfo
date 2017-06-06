const assert = require( "assert" );
const ndfo = require( "./ndfo.js" );

assert.equal( JSON.stringify( ndfo( ) ), '"[object Undefined]"', "should be equal" );

assert.equal( `${ ndfo( ) }`, "", "should be empty string" );

assert.equal( +ndfo( ), 0, "should have value 0" );

assert.equal( !!( ndfo( ) ), true, "should be true" );

assert.equal( ( ndfo( ) ) + "", "false", "should be 'false'" );

assert.equal( ( ndfo( "[object Undefined]" ) ) + "", "false", "should be 'false'" );

console.log( "ok" );
