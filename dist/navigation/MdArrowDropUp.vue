<script>
  export default {
    name: 'md-arrow-drop-up',

    functional: true,

    serverCacheKey: _ => 'md-arrow-drop-up',

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
            d: 'M7 14l5-5 5 5z'
          }
        })
      ]);
    }
  };
</script>

