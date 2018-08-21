<script>
  export default {
    name: 'md-signal-cellular-connected-no-internet-0-bar',

    serverCacheKey: props => {
      return `md-signal-cellular-connected-no-internet-0-bar:${props.width}:${props.height}:${props.className || 'icon'}`;
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
      }
    },

    render (h) {
      const data = {
        staticClass: 'icon md-icon md-signal-cellular-connected-no-internet-0-bar',
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
            d: 'M22 8V2L2 22h16V8z"/><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z'
          }
        })
      ]);
    }
  };
</script>

