"use strict";

exports.defaults = function() {
  return {
    d3OnWindow: {
      libName: "d3.js",
      replace: /(}\(\);)$/
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
         "  d3OnWindow:\n" +
         "    libName: 'd3.js'      # file name of d3 library\n" +
         "    replace: /(}\(\);)$/  # regex used to find text to prepend window.d3 to";
};

exports.validate = function(config, validators) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "d3OnWindow config", config.d3OnWindow ) ) {
    validators.ifExistsIsString( errors, "d3OnWindow.libName", config.d3OnWindow.libName );
    if ( ! ( config.d3OnWindow.replace instanceof RegExp ) ) {
      errors.push( "d3OnWindow.replace must be a RegExp" );
    }
  }

  return errors;
};
