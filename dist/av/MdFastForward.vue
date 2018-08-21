<script>
  export default {
    name: 'md-fast-forward',

    functional: true,

    // serverCacheKey: props => `md-fast-forward:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-fast-forward',
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
            d: 'M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z'
          }
        })
      ]);
    }
  };
</script>

