<script>
  export default {
    name: 'md-clear-all',

    serverCacheKey: props => {
      return `md-clear-all:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-clear-all',
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
            d: 'M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

