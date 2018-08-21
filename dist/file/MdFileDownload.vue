<script>
  export default {
    name: 'md-file-download',

    functional: true,

    // serverCacheKey: props => `md-file-download:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-file-download',
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
            d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'
          }
        })
      ]);
    }
  };
</script>

