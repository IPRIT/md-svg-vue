<script>
  import { h } from 'vue';

  export default {
    name: 'md-publish',

    serverCacheKey: props => {
      return `md-publish:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-publish',
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
            d: 'M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

