<script>
  export default {
    name: 'md-eject',

    functional: true,

    serverCacheKey: props => `md-eject:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-eject',
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
            d: 'M5 17h14v2H5zm7-12L5.33 15h13.34z'
          }
        })
      ]);
    }
  };
</script>

