<script>
  export default {
    name: 'md-view-carousel',

    serverCacheKey: props => {
      return `md-view-carousel:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-view-carousel',
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
            d: 'M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

