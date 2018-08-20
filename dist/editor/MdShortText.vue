<script>
  export default {
    name: 'md-short-text',

    functional: true,

    serverCacheKey: _ => 'md-short-text',

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
            d: 'M4 9h16v2H4zm0 4h10v2H4z'
          }
        })
      ]);
    }
  };
</script>

