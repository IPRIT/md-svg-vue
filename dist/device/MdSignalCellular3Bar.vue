<script>
  import { h } from 'vue';

  export default {
    name: 'md-signal-cellular-3-bar',

    serverCacheKey: props => {
      return `md-signal-cellular-3-bar:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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

    render () {
      const data = {
        staticClass: 'icon md-icon md-signal-cellular-3-bar',
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
            d: 'M2 22h20V2z"/><path d="M17 7L2 22h15z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

