<script>
  export default {
    name: 'md-home',

    functional: true,

    // serverCacheKey: props => `md-home:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-home',
        'class': className,
        attrs: {
          width: width,
          height: height,
          viewBox: viewBox,
          xmlns: 'http://www.w3.org/2000/svg'
        }
      }, [
        h('path', {
          attrs: {
            d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
          }
        })
      ]);
    }
  };
</script>

