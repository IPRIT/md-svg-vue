<script>
  import { h } from 'vue';

  export default {
    name: 'md-flash-on',

    serverCacheKey: props => {
      return `md-flash-on:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-flash-on',
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
            d: 'M7 2v11h3v9l7-12h-4l4-8z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

