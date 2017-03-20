
const ndfo = require( "./ndfo.js" );

console.log( ndfo( ) );

console.log( JSON.stringify( ndfo( ) ) );

console.log( `${ ndfo( ) }` );

console.log( +ndfo( ) );

console.log( !!( ndfo( ) ) );

console.log( ( ndfo( ) ) + "" );

console.log( ( ndfo( "[object Undefined]" ) ) + "" );
