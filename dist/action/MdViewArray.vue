<script>
  import { h } from 'vue';

  export default {
    name: 'md-view-array',

    serverCacheKey: props => {
      return `md-view-array:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-view-array',
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
            d: 'M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

