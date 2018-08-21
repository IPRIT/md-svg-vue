<script>
  export default {
    name: 'md-signal-cellular-connected-no-internet-4-bar',

    functional: true,

    // serverCacheKey: _ => 'md-signal-cellular-connected-no-internet-4-bar',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-signal-cellular-connected-no-internet-4-bar',
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
            d: 'M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z'
          }
        })
      ]);
    }
  };
</script>

