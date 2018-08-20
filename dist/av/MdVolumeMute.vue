<script>
  export default {
    name: 'md-volume-mute',

    functional: true,

    serverCacheKey: _ => 'md-volume-mute',

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
            d: 'M7 9v6h4l5 5V4l-5 5H7z'
          }
        })
      ]);
    }
  };
</script>

