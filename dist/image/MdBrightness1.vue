<script>
  export default {
    name: 'md-brightness-1',

    functional: true,

    // serverCacheKey: _ => 'md-brightness-1',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-brightness-1',
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
            d: 'undefined'
          }
        })
      ]);
    }
  };
</script>

