<script>
  export default {
    name: 'md-vertical-align-top',

    serverCacheKey: props => {
      return `md-vertical-align-top:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-vertical-align-top',
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
            d: 'M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

