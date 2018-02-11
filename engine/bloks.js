/* bloks engine scripts */

// start vue
var vm = new Vue({

  el: '#bloks',

  data: {
    // less configs
    c_background:     '#ffffff',
    c_foreground:     '#ffffff',
    c_text_base:      '#191a23',
    c_link:           '#4481ec',
    c_upvote:         '#f33336',
    c_downvote:       '#0071c5',
    c_thumbnail:      '#f1f1f1',
    c_nsfw:           '#d86a62',
    c_locked:         '#ead340',
    c_stickied:       '#399b76',
    o_static_nav:     true,
    o_use_tabs:       true,
    o_no_margin:      true,
    w_thumbnail:      '65px',
    h_thumbnail:      '45px',
    o_show_nsfw:      false,
    w_sidebar:        '300px',
    o_side_image:     true,
    t_subscribers:    'Subscribers',
    t_online:         'Online'
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

    // engine/vue/preview.js
    css: previewStyles
  },

  methods: {
    // engine/less.js
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
