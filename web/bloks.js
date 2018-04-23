/* bloks engine scripts */

// start vue
var vm = new Vue({

  el: '#bloks',

  data: {
    // less configs
    c_background:     '#f1f1f1',
    c_foreground:     '#ffffff',
    c_text_base:      '#191a23',
    c_link:           '#4481ec',
    c_upvote:         '#f33336',
    c_downvote:       '#0071c5',
    c_thumbnail:      '#f1f1f1',
    c_nsfw:           '#d86a62',
    c_locked:         '#ead340',
    c_stickied:       '#399b76',

    c_navbar_bg:      '#ffffff',
    c_navbar_text:    '#191a23',

    h_header:         '145px',
    o_static_nav:     true,
    o_use_tabs:       true,
    c_header_bg:      '#ffffff',
    c_header_text:    '#191a23',

    o_no_margin:      true,
    w_margin:         '25px',
    w_thumbnail:      '65px',
    h_thumbnail:      '45px',
    o_show_nsfw:      false,

    w_sidebar:        '300px',
    o_side_image:     true,
    t_subscribers:    'Subscribers',
    t_online:         'Online'
  },

  computed: {
    // engine/vue/preview.js
    css: previewStyles
  },

  methods: {
    // engine/less.js
    mix : LessMethods.mix,
    lightness: LessMethods.lightness,
    lighten: LessMethods.lighten,
    darken: LessMethods.darken,
    bump: LessMixins.bump,
    fuse: LessMixins.fuse
  },

  // on page load
  mounted: function() {
    $('#preload').fadeOut();
  }

});
