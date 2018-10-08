<script>
  export default {
    name: 'md-assistant-photo',

    serverCacheKey: props => {
      return `md-assistant-photo:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-assistant-photo',
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
            d: 'M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

