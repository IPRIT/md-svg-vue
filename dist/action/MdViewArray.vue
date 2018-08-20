<script>
  export default {
    name: 'md-view-array',

    functional: true,

    serverCacheKey: _ => 'md-view-array',

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
            d: 'M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z'
          }
        })
      ]);
    }
  };
</script>

