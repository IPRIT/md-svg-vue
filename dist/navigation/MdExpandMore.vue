<script>
  export default {
    name: 'md-expand-more',

    functional: true,

    // serverCacheKey: props => `md-expand-more:${props.width}:${props.height}:${props.className || 'icon'}`,

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
        staticClass: `icon md-icon md-expand-more${staticClass ? ' ' + staticClass : ''}`,
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
            d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
          }
        })
      ]);
    }
  };
</script>

