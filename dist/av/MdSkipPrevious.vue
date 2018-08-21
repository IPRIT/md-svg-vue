<script>
  export default {
    name: 'md-skip-previous',

    functional: true,

    // serverCacheKey: _ => 'md-skip-previous',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-skip-previous',
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
            d: 'M6 6h2v12H6zm3.5 6l8.5 6V6z'
          }
        })
      ]);
    }
  };
</script>

