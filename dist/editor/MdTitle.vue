<script>
  export default {
    name: 'md-title',

    functional: true,

    serverCacheKey: _ => 'md-title',

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
            d: 'M5 4v3h5.5v12h3V7H19V4z'
          }
        })
      ]);
    }
  };
</script>

