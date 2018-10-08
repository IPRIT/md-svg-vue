<script>
  export default {
    name: 'md-fast-forward',

    serverCacheKey: props => {
      return `md-fast-forward:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-fast-forward',
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
            d: 'M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

