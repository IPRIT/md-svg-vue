<script>
  export default {
    name: 'md-assistant-photo',

    functional: true,

    serverCacheKey: _ => 'md-assistant-photo',

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
            d: 'M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z'
          }
        })
      ]);
    }
  };
</script>

