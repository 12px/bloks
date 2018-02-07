/* bloks engine scripts */

// start vue
var vm = new Vue({

  el: '#bloks',
  data: {
    c_background: '#ffffff',
    c_text_base: '#191a23'
  },
  computed: {
    c_shadow: function() {
      if (this.lightness(this.c_background) < 50) {
        return this.lighten(this.c_background, '5');
      } else {
        return this.darken(this.c_background, '5');
      }
    },
    c_border: function() {
      if (this.lightness(this.c_background) < 50) {
        return this.lighten(this.c_background, '8');
      } else {
        return this.darken(this.c_background, '8');
      }
    }
  },
  methods: {
    mix : LessMethods.mix,
    lightness: LessMethods.lightness,
    lighten: LessMethods.lighten,
    darken: LessMethods.darken
  },

  // on page load
  mounted: function() {
    $('#preload').fadeOut();
  }

});
