<script>
  export default {
    name: 'md-drag-handle',

    functional: true,

    // serverCacheKey: _ => 'md-drag-handle',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-drag-handle',
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
            d: 'M20 9H4v2h16V9zM4 15h16v-2H4v2z'
          }
        })
      ]);
    }
  };
</script>

