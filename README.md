# Material Design Icons by Google for Vue.js & Nuxt.js (inline SVG with path)

This library should grant an easy-to-use interface to icons from Material Design.

Advantages of this module in comparing to fonts, svg sprites, etc.
1. Instead of importing all icons to your application you can simply import only necessary icons what you only need.
2. Decrease a huge amount of bytes cause you no need to load fonts or something else.
3. You will see your icon on the site right away after server side rendering cause server renders icon as inline svg with only one path.
4. Great performance cause icons built on top of Vue functional components.
5. You can extend existing iconset with your icons. Just clone this repo and load your icons (each icon in separate svg file) to corresponding path.

## How to use

Simply install it using npm or yarn:

```
npm install --save md-svg-vue
```

or

```
yarn add md-svg-vue
```

### Import and usage

Simply import the icon you wish to use to your vue project with the CommonJS syntax like in the following examples:

```js
var MdClose = require('md-svg-vue/dist/action/MdClose');

// or

import MdClose from 'md-svg-vue/dist/action/MdClose';
```

***Common structure of import paths:***
```js
import MdIcon from 'md-svg-vue/dist/<namespace>/<icon-name>.vue'
```

where
* namespace - Google Material Icons namespace (e.g.: action, alert, av, content, communication, etc.)
* icon-name - Vue component with Icon (MdClose, MdBluetoothSearching)

Then you need to import the icon to your Vue component:

```js
props: {
  // ...
},
components: {
  MdClose,
  MdBluetoothSearching,
  MdAttachMoney
}
```

The naming syntax of these components is `md-<kebab-cased-icon-name>`.

Example.vue:
```vue
<template>
  <div>
    <button @click="close()">
      <md-close></md-close>
    </button>
  </div>
</template>
```

or 

```vue
<template>
  <div>
    <button @click="close()">
      <md-close class="your-class"></md-close>
    </button>
  </div>
</template>
```

or 

```vue
<template>
  <div class="bluetooth-searching">
    <md-bluetooth-searching :width="16" :height="16"></md-bluetooth-searching>
    <span>Searching...</span>
  </div>
</template>
```

## Used resources

- [Material Design Icons by Google](https://material.io/tools/icons)
- [Material Design Icons by Google (Github sources)](https://github.com/google/material-design-icons/)
- [Vue.js](https://vuejs.org/)
