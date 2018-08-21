<script>
  export default {
    name: 'md-add',

    functional: true,

    serverCacheKey: props => `md-add:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-add',
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
            d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'
          }
        })
      ]);
    }
  };
</script>

