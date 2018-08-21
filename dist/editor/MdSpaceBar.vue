<script>
  export default {
    name: 'md-space-bar',

    functional: true,

    serverCacheKey: props => `md-space-bar:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-space-bar',
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
            d: 'M18 9v4H6V9H4v6h16V9z'
          }
        })
      ]);
    }
  };
</script>

