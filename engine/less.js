/* bloks engine: exposing less methods */

var Less = less.functions.functionRegistry._data;
var Color = less.tree.Color;
Color.prototype = less.tree.Color.prototype;

// color wrapper
var _c = function(c) { return new Color(c.replace('#', '')); };

// define methods
var LessMethods = {

  lightness: function(color) {
    var data = Less.lightness( _c(color) );
    return data.value;
  },

  mix: function(color1, color2, wt) {
    var data = Less.mix( _c(color1) ,  _c(color2) , wt);
    return data.toRGB();
  },

  lighten: function(color, wt) {
    var data = Less.lighten( _c(color) , { value: wt });
    return data.toRGB();
  },

  darken: function(color, wt) {
    var data = Less.darken( _c(color) , { value: wt });
    return data.toRGB();
  }

};
