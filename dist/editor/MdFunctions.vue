<script>
  export default {
    name: 'md-functions',

    functional: true,

    serverCacheKey: _ => 'md-functions',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon',
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
            d: 'M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z'
          }
        })
      ]);
    }
  };
</script>

