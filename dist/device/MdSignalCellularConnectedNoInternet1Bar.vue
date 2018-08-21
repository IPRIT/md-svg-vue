<script>
  export default {
    name: 'md-signal-cellular-connected-no-internet-1-bar',

    functional: true,

    // serverCacheKey: _ => 'md-signal-cellular-connected-no-internet-1-bar',

    render (h, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: 'icon md-icon md-signal-cellular-connected-no-internet-1-bar',
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
            d: 'M22 8V2L2 22h16V8z"/><path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z'
          }
        })
      ]);
    }
  };
</script>

