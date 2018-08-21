<script>
  export default {
    name: 'md-format-quote',

    functional: true,

    // serverCacheKey: _ => 'md-format-quote',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-format-quote',
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
            d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z'
          }
        })
      ]);
    }
  };
</script>

