<script>
  export default {
    name: 'md-expand-less',

    functional: true,

    serverCacheKey: props => `md-expand-less:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-expand-less',
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
            d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z'
          }
        })
      ]);
    }
  };
</script>

