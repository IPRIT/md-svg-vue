<script>
  export default {
    name: 'md-chevron-left',

    functional: true,

    serverCacheKey: props => `md-chevron-left:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-chevron-left',
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
            d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
          }
        })
      ]);
    }
  };
</script>

