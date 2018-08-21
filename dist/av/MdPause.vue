<script>
  export default {
    name: 'md-pause',

    functional: true,

    serverCacheKey: props => `md-pause:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-pause',
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
            d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z'
          }
        })
      ]);
    }
  };
</script>

