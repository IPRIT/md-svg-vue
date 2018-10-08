<script>
  export default {
    name: 'md-add-circle-outline',

    serverCacheKey: props => {
      return `md-add-circle-outline:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-add-circle-outline',
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
            d: 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

