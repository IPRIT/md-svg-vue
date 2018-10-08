<script>
  export default {
    name: 'md-call-missed',

    serverCacheKey: props => {
      return `md-call-missed:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-call-missed',
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
            d: 'M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

