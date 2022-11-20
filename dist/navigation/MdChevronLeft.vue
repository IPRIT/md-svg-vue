<script>
  import { h } from 'vue';

  export default {
    name: 'md-chevron-left',

    serverCacheKey: props => {
      return `md-chevron-left:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-chevron-left',
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
            d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

