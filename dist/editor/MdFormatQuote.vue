<script>
  import { h } from 'vue';

  export default {
    name: 'md-format-quote',

    serverCacheKey: props => {
      return `md-format-quote:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-format-quote',
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
            d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

