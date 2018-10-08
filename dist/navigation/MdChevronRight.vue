<script>
  export default {
    name: 'md-chevron-right',

    serverCacheKey: props => {
      return `md-chevron-right:${this.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-chevron-right',
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
            d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

