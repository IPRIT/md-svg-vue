<script>
  export default {
    name: 'md-fast-rewind',

    serverCacheKey: props => {
      return `md-fast-rewind:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-fast-rewind',
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
            d: 'M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

