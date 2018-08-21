<script>
  export default {
    name: 'md-format-size',

    functional: true,

    // serverCacheKey: props => `md-format-size:${props.width}:${props.height}:${props.className || 'icon'}`,

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
        staticClass: `icon md-icon md-format-size${staticClass ? ' ' + staticClass : ''}`,
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
            d: 'M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z'
          }
        })
      ]);
    }
  };
</script>

