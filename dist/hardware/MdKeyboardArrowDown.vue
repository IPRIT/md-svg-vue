<script>
  export default {
    name: 'md-keyboard-arrow-down',

    serverCacheKey: props => {
      return `md-keyboard-arrow-down:${props.width}:${props.height}:${props.className || 'icon'}`;
    },

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
      const data = {
        staticClass: 'icon md-icon md-keyboard-arrow-down',
        'class': this.className,
        attrs: {
          width: this.width,
          height: this.height,
          viewBox: this.viewBox,
          xmlns: 'http://www.w3.org/2000/svg'
        }
      };

      return h('svg', data, [
        h('path', {
          attrs: {
            d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'
          }
        })
      ]);
    }
  };
</script>

