<script>
  import { h } from 'vue';

  export default {
    name: 'md-short-text',

    serverCacheKey: props => {
      return `md-short-text:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-short-text',
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
            d: 'M4 9h16v2H4zm0 4h10v2H4z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

