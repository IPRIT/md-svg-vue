<script>
  import { h } from 'vue';

  export default {
    name: 'md-details',

    serverCacheKey: props => {
      return `md-details:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-details',
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
            d: 'M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

