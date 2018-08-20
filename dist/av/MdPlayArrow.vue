<script>
  export default {
    name: 'md-play-arrow',

    functional: true,

    serverCacheKey: _ => 'md-play-arrow',

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
            d: 'M8 5v14l11-7z'
          }
        })
      ]);
    }
  };
</script>

