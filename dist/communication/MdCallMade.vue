<script>
  export default {
    name: 'md-call-made',

    functional: true,

    serverCacheKey: _ => 'md-call-made',

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
            d: 'M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z'
          }
        })
      ]);
    }
  };
</script>

