/* bloks engine: preview templates */

// Header preview
Vue.component('preview-header', {
  props: ['css'],
  template: `<div>
    <div class="preview-navbar" :style="css.navbar"><strong>r/bloks</strong></div>
    <div class="preview-header" :style="css.header"></div>
    <div class="preview-topnav" :style="css.topnav">
      <strong class="mr-3">Posts</strong><span class="mr-3">Link 1</span><span>Link 2</span>
    </div>
  </div>`
});

Vue.component('preview-link', {
  props: ['css', 'type'],
  template: `<div class="link mb-2">
    <div class="votes text-center">
      <div class="upvote" :style="css.upvote">▲</div>
      <div class="score" :style="css.text_subtle">125</div>
      <div class="downvote" :style="css.downvote">▼</div>
    </div>
    <div class="thumbnail" :style="[css.thumb.nail, css.thumb[type ? type : 'link']]"></div>
    <div class="post">
      <div class="title" :style="css.post[type ? type : 'link']">
      <span v-if="!type">This is a sample link.</span>
        <span v-if="type == 'nsfw'">This post is NSFW.</span>
        <strong v-if="type == 'stickied'">This is a stickied link.</strong>
        <span v-if="type == 'locked'">This is a (visited) locked post.</span>
      </div>
      <div class="subtitle" :style="css.text_subtle">
        <span v-if="type == 'nsfw'" :style="css.nsfw">NSFW</span>
        Posted by <span :style="css.link">u/SomeUser</span> to
        <span :style="css.link">r/SomeSubreddit</span>
      </div>
    </div>
  </div>`
});

// pre-generated preview css
var previewStyles = function() {
  return {
    navbar: {
      color:           this.c_navbar_text,
      backgroundColor: this.c_navbar_bg,
      borderBottom:    '1px solid ' + this.bump(this.c_navbar_bg)
    },
    header: {
      height:          this.h_header,
      color:           this.c_header_text,
      backgroundColor: this.c_header_bg
    },
    content: {
      color:           this.c_text_base,
      backgroundColor: this.c_background,
      padding:         this.o_no_margin ? '0px' : this.w_margin
    }
  }
};

// preview styles
var oldStyles = function() {
  return {
    background:   { backgroundColor:  this.c_background   },
    foreground:   { backgroundColor:  this.c_foreground   },
    text_base:    { color:            this.c_text_base    },
    text_subtle:  { color:            this.c_text_subtle  },
    link:         { color:            this.c_link         },
    link_visited: { color:            this.c_link_visited },
    upvote:       { color:            this.c_upvote       },
    downvote:     { color:            this.c_downvote     },
    stickied:     { color:            this.c_stickied     },
    nsfw:         { color:            this.c_nsfw         },
    thumb: {
      nail: {
        width:                  this.w_thumbnail,
        height:                 this.h_thumbnail
      },
      link:      { backgroundColor:  this.c_thumbnail },
      stickied:  { backgroundColor:  this.c_thumbnail },
      nsfw:      { backgroundColor:  this.mix(this.c_thumbnail, this.c_nsfw, 50)   },
      locked:    { backgroundColor:  this.mix(this.c_thumbnail, this.c_locked, 50) }
    },
    post: {
      link:      { color: this.c_link         },
      stickied:  { color: this.c_stickied     },
      nsfw:      { color: this.c_link         },
      locked:    { color: this.c_link_visited }
    }
  }
};
