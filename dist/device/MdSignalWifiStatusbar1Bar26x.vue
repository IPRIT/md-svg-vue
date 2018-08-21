<script>
  export default {
    name: 'md-signal-wifi-statusbar-1-bar-26-x',

    serverCacheKey: props => {
      return `md-signal-wifi-statusbar-1-bar-26-x:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-signal-wifi-statusbar-1-bar-26-x',
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
            d: 'M13 21.99l5.66-7.05C18.44 14.78 16.27 13 13 13s-5.44 1.78-5.66 1.95L13 21.99z"/><path fill-opacity=".3" d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z'
          }
        })
      ]);
    }
  };
</script>

