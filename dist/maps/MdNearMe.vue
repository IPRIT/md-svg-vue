<script>
  export default {
    name: 'md-near-me',

    functional: true,

    serverCacheKey: props => `md-near-me:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-near-me',
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
            d: 'M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z'
          }
        })
      ]);
    }
  };
</script>

