<script>
  export default {
    name: 'md-vertical-align-bottom',

    functional: true,

    // serverCacheKey: _ => 'md-vertical-align-bottom',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-vertical-align-bottom',
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
            d: 'M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z'
          }
        })
      ]);
    }
  };
</script>

