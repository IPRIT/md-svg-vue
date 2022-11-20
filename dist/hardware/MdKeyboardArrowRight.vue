<script>
  import { h } from 'vue';

  export default {
    name: 'md-keyboard-arrow-right',

    serverCacheKey: props => {
      return `md-keyboard-arrow-right:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-keyboard-arrow-right',
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
            d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

