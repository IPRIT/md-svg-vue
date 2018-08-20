<script>
  export default {
    name: 'md-skip-next',

    functional: true,

    serverCacheKey: _ => 'md-skip-next',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon',
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
            d: 'M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z'
          }
        })
      ]);
    }
  };
</script>

