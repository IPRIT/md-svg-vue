<script>
  export default {
    name: 'md-arrow-drop-up',

    functional: true,

    serverCacheKey: props => `md-arrow-drop-up:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-arrow-drop-up',
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

