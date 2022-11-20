<script>
  import { h } from 'vue';

  export default {
    name: 'md-home',

    serverCacheKey: props => {
      return `md-home:${props.color || 'default'}:${props.width}:${props.height}:${props.className || 'icon'}`;
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
        staticClass: 'icon md-icon md-home',
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
            d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
          },
          style: {
            fill: this.color
          }
        })
      ]);
    }
  };
</script>

