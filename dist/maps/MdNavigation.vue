<script>
  export default {
    name: 'md-navigation',

    functional: true,

    // serverCacheKey: _ => 'md-navigation',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-navigation',
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
            d: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z'
          }
        })
      ]);
    }
  };
</script>

