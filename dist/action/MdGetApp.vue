<script>
  export default {
    name: 'md-get-app',

    serverCacheKey: props => {
      return `md-get-app:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-get-app',
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
            d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

