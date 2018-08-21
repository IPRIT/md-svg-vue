<script>
  export default {
    name: 'md-volume-mute',

    functional: true,

    serverCacheKey: props => `md-volume-mute:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-volume-mute',
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

