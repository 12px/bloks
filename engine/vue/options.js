/* bloks engine: options templates */

// value change emitter for v-model
var newVal = function(val) { this.$emit('input', val); };

// color option
Vue.component('color', {
  props: ['value'], methods: { newVal },
  template: `<div class="col-12 col-md-6 col-lg-3 cfg">
    <div class="input-group">
      <input type="text" class="form-control form-control-sm" :value="value" @input="newVal($event.target.value)">
      <span class="input-group-append">
        <input type="color" :value="value" :style="{ backgroundColor: value }" @change="newVal($event.target.value)">
      </span>
    </div>
    <div class="label text-center text-secondary pt-1"><slot></slot></div>
  </div>`
});
