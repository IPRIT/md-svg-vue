<script>
  export default {
    name: 'md-send',

    functional: true,

    // serverCacheKey: _ => 'md-send',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-send',
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
            d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'
          }
        })
      ]);
    }
  };
</script>

