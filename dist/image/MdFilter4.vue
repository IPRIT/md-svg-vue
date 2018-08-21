<script>
  export default {
    name: 'md-filter-4',

    functional: true,

    serverCacheKey: props => `md-filter-4:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-filter-4',
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
            d: 'M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z'
          }
        })
      ]);
    }
  };
</script>

