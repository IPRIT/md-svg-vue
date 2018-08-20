<script>
  export default {
    name: 'md-priority-high',

    functional: true,

    serverCacheKey: _ => 'md-priority-high',

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
            d: 'M10 3h4v12h-4z'
          }
        })
      ]);
    }
  };
</script>

