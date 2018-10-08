<script>
  export default {
    name: 'md-keyboard-arrow-left',

    serverCacheKey: props => {
      return `md-keyboard-arrow-left:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-keyboard-arrow-left',
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
            d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

