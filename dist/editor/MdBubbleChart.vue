<script>
  export default {
    name: 'md-bubble-chart',

    functional: true,

    // serverCacheKey: _ => 'md-bubble-chart',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-bubble-chart',
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
            d: 'undefined'
          }
        })
      ]);
    }
  };
</script>

