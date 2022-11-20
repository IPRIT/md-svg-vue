<script>
  import { h } from 'vue';

  export default {
    name: 'md-send',

    serverCacheKey: props => {
      return `md-send:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-send',
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
            d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

