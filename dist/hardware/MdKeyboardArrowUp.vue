<script>
  export default {
    name: 'md-keyboard-arrow-up',

    serverCacheKey: props => {
      return `md-keyboard-arrow-up:${this.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
      },
      color: String
    },

    render (h) {
      const data = {
        staticClass: 'icon md-icon md-keyboard-arrow-up',
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
            d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

