<script>
  export default {
    name: 'md-signal-wifi-statusbar-connected-no-internet-26-x',

    serverCacheKey: props => {
      return `md-signal-wifi-statusbar-connected-no-internet-26-x:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-signal-wifi-statusbar-connected-no-internet-26-x',
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
            d: 'M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"/><path d="M22 22h2v-2h-2v2zm0-12v8h2v-8h-2z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

