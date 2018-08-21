<script>
  export default {
    name: 'md-view-stream',

    functional: true,

    // serverCacheKey: props => `md-view-stream:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-view-stream',
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
            d: 'M4 18h17v-6H4v6zM4 5v6h17V5H4z'
          }
        })
      ]);
    }
  };
</script>

