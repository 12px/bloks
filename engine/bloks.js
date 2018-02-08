/* bloks engine scripts */

// start vue
var vm = new Vue({

  el: '#bloks',

  data: {
    // less configs
    c_background:  '#ffffff',
    c_text_base:   '#191a23',
    c_link:        '#4481ec'
  },

  computed: {
    // generated less variables for live preview
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
    },
    c_text_subtle: function() {
      if (this.lightness(this.c_background) < 50) {
        return this.mix(this.c_text_base, this.c_background, 60);
      } else {
        return this.mix(this.c_text_base, this.c_background, 40);
      }
    },
    c_link_visited: function() {
      if (this.lightness(this.c_background) < 50) {
        return this.mix(this.c_link, this.c_background, 60);
      } else {
        return this.mix(this.c_link, this.c_background, 40);
      }
    },

    // css output for live preview
    css: function() {
      return {
        preview: {
          color: this.c_text_base,
          backgroundColor: this.c_background
        },
        subtle: {
          color: this.c_text_subtle
        }
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
