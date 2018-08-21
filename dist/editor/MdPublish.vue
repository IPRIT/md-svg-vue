<script>
  export default {
    name: 'md-publish',

    functional: true,

    // serverCacheKey: _ => 'md-publish',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-publish',
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
            d: 'M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z'
          }
        })
      ]);
    }
  };
</script>

