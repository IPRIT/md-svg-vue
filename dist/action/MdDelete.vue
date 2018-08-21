<script>
  export default {
    name: 'md-delete',

    functional: true,

    // serverCacheKey: props => `md-delete:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, renderContext) {
      const { props = {}, data = {} } = renderContext;
      const { staticClass = '' } = data;
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: `icon md-icon md-delete${staticClass ? ' ' + staticClass : ''}`,
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
            d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'
          }
        })
      ]);
    }
  };
</script>

