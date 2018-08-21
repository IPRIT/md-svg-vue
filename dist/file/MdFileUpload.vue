<script>
  export default {
    name: 'md-file-upload',

    functional: true,

    // serverCacheKey: props => `md-file-upload:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-file-upload',
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
            d: 'M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z'
          }
        })
      ]);
    }
  };
</script>

