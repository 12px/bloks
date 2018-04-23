/* bloks engine: exposing less methods */

var Less = less.functions.functionRegistry._data;
var Color = less.tree.Color;
Color.prototype = less.tree.Color.prototype;

// color wrapper
var _c = function(c) { return new Color(c.replace('#', '')); };

// define LESS methods
var LessMethods = {

  lightness: function(color) {
    var data = Less.lightness( _c(color) );
    return data.value;
  },

  mix: function(color1, color2, wt) {
    var data = Less.mix( _c(color1) ,  _c(color2) , { value: wt });
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

// define mixins
var LessMixins = {
  // move a brightness shade up/down based on current brightness
  bump: function(color, weight) {
    if (!weight) weight = '5';
    if (this.lightness(color) < 50) return this.lighten(color, weight);
    else return this.darken(color, weight);
  },

  // merge two colors together based on brightness of first color
  fuse: function(color1, color2) {
    if (!color2) color2 = this.c_text_base;
    if (this.lightness(color1) < 50) return this.mix(color2, color1, 60);
    else return this.mix(color2, color1, 40); 
  }
}
