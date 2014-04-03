"use strict";

var path = require( "path" )
  , config = require( "./config" )
  , hasD3 = /window\.d3/;

var _attach = function ( mimosaConfig, options, next ) {
  if ( options.files && options.files.length ) {
    options.files.forEach( function( file ) {
      // is right file
      if ( path.basename( file.inputFileName ) === mimosaConfig.d3OnWindow.libName ) {
        // does it have d3 on window already?
        if ( hasD3.test( file.outputFileText ) ) {
          mimosaConfig.log.info( "mimosa-d3-on-window detected that window.d3 already exists in [[ " +  mimosaConfig.d3OnWindow.libName + " ]], you may not need this module any longer" );
        } else {
          file.outputFileText = file.outputFileText.replace(
            mimosaConfig.d3OnWindow.replace,
            "window.d3 = d3;\n$1");
        }
      }
    });
  }
  next();
};

var registration = function (mc, register) {
  register( ["add","update","buildFile"], "afterCompile", _attach, mc.extensions.javascript );
};

module.exports = {
  registration: registration,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};
