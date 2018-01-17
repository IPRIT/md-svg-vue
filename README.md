# Material Design Icons by Google for Vue.js & Nuxt.js


This library should grant an easy-to-use interface to icons from Material Design.

## How to use

Simply install it using npm or yarn:

```
npm install --save md-svg-vue
```
```
yarn add md-svg-vue
```
### Import and usage

Simply import the icon you wish to use to your vue project with the CommonJS syntax like in the following examples:

```js
require('md-svg-vue/MdClose');

import 'md-svg-vue/MdClose';
```

Note here, that the icons are automatically registered as components to Vuejs, so you can use the freshly imported icons within
your templates as any other component. The naming syntax of these components is always `md-<kebab-cased-icon-name>`.

Example.vue:
```vue
<template>
  <div>
    My hand is a <md-close/>
  </div>
</template>

<script>
  import 'md-svg-vue/MdClose'
</script>
```

## Used resources

- [Material Design Icons by Google](https://github.com/google/material-design-icons/)
- [Vue.js](https://vuejs.org/)
