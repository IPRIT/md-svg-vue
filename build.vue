<script>
  export default {
    name: 'md-{{icon}}',
    props: {
      className: [Object, Array, String],
      width: {
        type: Number,
        'default': 24
      },
      height: {
        type: Number,
        'default': 24
      },
      viewBox: {
        type: String,
        'default': '0 0 24 24',
      }
    },
    render (h) {
      return h('svg', {
        staticClass: 'icon md-icon',
        'class': this.className,
        domProps: {
          width: this.width,
          height: this.height,
          viewBox: this.viewBox,
          xmlns: 'http://www.w3.org/2000/svg'
        }
      }, h('path', {
        domProps: {
          d: '{{path}}'
        }
      }));
    }
  };
</script>

