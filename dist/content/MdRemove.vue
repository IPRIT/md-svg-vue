<script>
  export default {
    name: 'md-remove',

    functional: true,

    // serverCacheKey: _ => 'md-remove',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-remove',
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
            d: 'M19 13H5v-2h14v2z'
          }
        })
      ]);
    }
  };
</script>

