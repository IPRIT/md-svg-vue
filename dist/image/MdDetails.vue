<script>
  export default {
    name: 'md-details',

    functional: true,

    // serverCacheKey: _ => 'md-details',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-details',
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
            d: 'M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z'
          }
        })
      ]);
    }
  };
</script>

