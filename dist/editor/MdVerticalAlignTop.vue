<script>
  export default {
    name: 'md-vertical-align-top',

    functional: true,

    serverCacheKey: props => `md-vertical-align-top:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-vertical-align-top',
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
            d: 'M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z'
          }
        })
      ]);
    }
  };
</script>

