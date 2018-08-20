<script>
  export default {
    name: 'md-{{icon}}',

    functional: true,

    serverCacheKey: _ => 'md-{{icon}}',

    render (createElement, { props = {} }) {
      const {
        className,
        width = 24,
        height = 24,
        viewBox = '0 0 24 24'
      } = props;

      return createElement('svg', {
        staticClass: 'icon md-icon',
        'class': className,
        attrs: {
          width: width,
          height: height,
          viewBox: viewBox,
          xmlns: 'http://www.w3.org/2000/svg'
        }
      }, createElement('path', {
        attrs: {
          d: '{{path}}'
        }
      }));
    }
  };
</script>

