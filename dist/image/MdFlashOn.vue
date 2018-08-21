<script>
  export default {
    name: 'md-flash-on',

    functional: true,

    // serverCacheKey: props => `md-flash-on:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-flash-on',
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
            d: 'M7 2v11h3v9l7-12h-4l4-8z'
          }
        })
      ]);
    }
  };
</script>

