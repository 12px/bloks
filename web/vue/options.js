/* bloks engine: options templates */

// value change emitter for v-model
var newVal = function(val) { this.$emit('input', val); };

// option wrapper
Vue.component('config', {
  props: ['title'],
  template: `<div class="conf card bg-light mb-3">
    <div class="card-header">{{ title }}</div>
    <div class="card-body row">
      <slot></slot>
    </div>
  </div>`
})

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

// toggle option
Vue.component('toggle', {
  props: ['value', 'label'], methods: { newVal },
  template: `<div class="col-12 mb-3 cfg">
    <span @click="newVal(!value)" :class="{ 'toggle btn btn-sm mr-3': 1, 'btn-success': value, 'btn-danger': !value }">
      <span v-if="value">ON</span>
      <span v-if="!value">OFF</span>
    </span>
    <span class="label mr-4">{{ label }}</span>
    <span class="label text-secondary"><slot></slot></span>
  </div>`
});

// string option
Vue.component('string', {
  props: ['value'], methods: { newVal },
  template: `<div class="col-12 col-md-6 col-lg-3 mb-3 cfg">
    <div class="input-group">
      <input type="text" class="form-control form-control-sm"
        :value="value" @input="newVal($event.target.value)">
    </div>
    <div class="label text-center text-secondary pt-1"><slot></slot></div>
  </div>`
});
