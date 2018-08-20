<script>
  export default {
    name: 'md-call-received',

    functional: true,

    serverCacheKey: _ => 'md-call-received',

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
            d: 'M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z'
          }
        })
      ]);
    }
  };
</script>

