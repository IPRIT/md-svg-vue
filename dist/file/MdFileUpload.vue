<script>
  export default {
    name: 'md-file-upload',

    serverCacheKey: props => {
      return `md-file-upload:${this.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-file-upload',
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
            d: 'M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

