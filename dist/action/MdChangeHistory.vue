<script>
  export default {
    name: 'md-change-history',

    functional: true,

    // serverCacheKey: props => `md-change-history:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-change-history',
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
            d: 'M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z'
          }
        })
      ]);
    }
  };
</script>

