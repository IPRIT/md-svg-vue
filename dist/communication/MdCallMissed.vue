<script>
  export default {
    name: 'md-call-missed',

    functional: true,

    // serverCacheKey: props => `md-call-missed:${props.width}:${props.height}:${props.className || 'icon'}`,

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
        staticClass: `icon md-icon md-call-missed${staticClass ? ' ' + staticClass : ''}`,
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
            d: 'M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z'
          }
        })
      ]);
    }
  };
</script>

