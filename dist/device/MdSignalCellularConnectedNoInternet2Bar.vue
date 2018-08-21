<script>
  export default {
    name: 'md-signal-cellular-connected-no-internet-2-bar',

    functional: true,

    // serverCacheKey: props => `md-signal-cellular-connected-no-internet-2-bar:${props.width}:${props.height}:${props.className || 'icon'}`,

    render (h, renderContext) {
      const { props = {}, data = {} } = renderContext;
      const { staticClass = '' } = data;
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return h('svg', {
        staticClass: `icon md-icon md-signal-cellular-connected-no-internet-2-bar${staticClass ? ' ' + staticClass : ''}`,
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
            d: 'M22 8V2L2 22h16V8z"/><path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z'
          }
        })
      ]);
    }
  };
</script>

