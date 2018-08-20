<script>
  export default {
    name: 'md-expand-more',

    functional: true,

    serverCacheKey: _ => 'md-expand-more',

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
            d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
          }
        })
      ]);
    }
  };
</script>

