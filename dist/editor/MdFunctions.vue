<script>
  export default {
    name: 'md-functions',

    serverCacheKey: props => {
      return `md-functions:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-functions',
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
            d: 'M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

