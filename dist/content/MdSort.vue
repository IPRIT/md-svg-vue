<script>
  export default {
    name: 'md-sort',

    serverCacheKey: props => {
      return `md-sort:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-sort',
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
            d: 'M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

