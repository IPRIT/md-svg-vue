<script>
  export default {
    name: 'md-signal-cellular-1-bar',

    functional: true,

    // serverCacheKey: _ => 'md-signal-cellular-1-bar',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-signal-cellular-1-bar',
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
            d: 'M2 22h20V2z"/><path d="M12 12L2 22h10z'
          }
        })
      ]);
    }
  };
</script>

