<script>
  export default {
    name: 'md-signal-cellular-3-bar',

    functional: true,

    // serverCacheKey: props => `md-signal-cellular-3-bar:${props.width}:${props.height}:${props.className || 'icon'}`,

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
        staticClass: `icon md-icon md-signal-cellular-3-bar${staticClass ? ' ' + staticClass : ''}`,
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
            d: 'M2 22h20V2z"/><path d="M17 7L2 22h15z'
          }
        })
      ]);
    }
  };
</script>

