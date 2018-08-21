<script>
  export default {
    name: 'md-keyboard-arrow-right',

    functional: true,

    // serverCacheKey: props => `md-keyboard-arrow-right:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-keyboard-arrow-right',
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
            d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z'
          }
        })
      ]);
    }
  };
</script>

