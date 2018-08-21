<script>
  export default {
    name: 'md-forward',

    functional: true,

    serverCacheKey: props => `md-forward:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-forward',
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
            d: 'M12 8V4l8 8-8 8v-4H4V8z'
          }
        })
      ]);
    }
  };
</script>

