<script>
  export default {
    name: 'md-keyboard-arrow-down',

    functional: true,

    // serverCacheKey: props => `md-keyboard-arrow-down:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-keyboard-arrow-down',
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
            d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'
          }
        })
      ]);
    }
  };
</script>

