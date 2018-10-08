<script>
  export default {
    name: 'md-expand-less',

    serverCacheKey: props => {
      return `md-expand-less:${this.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-expand-less',
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
            d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

