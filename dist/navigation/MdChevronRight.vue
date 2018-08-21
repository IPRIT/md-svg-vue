<script>
  export default {
    name: 'md-chevron-right',

    functional: true,

    // serverCacheKey: _ => 'md-chevron-right',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-chevron-right',
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
            d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
          }
        })
      ]);
    }
  };
</script>

