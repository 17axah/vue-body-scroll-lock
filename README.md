# vue-body-scroll-lock

Vue plugin to disable scrolling page.
Built on top of [https://www.npmjs.com/package/scroll-lock](https://www.npmjs.com/package/scroll-lock)
For better use, check out the [scroll-lock](https://www.npmjs.com/package/scroll-lock) documentation

## Installation

```bash
$ npm i vue-body-scroll-lock
```

## Usage (global)

```js
import Vue from 'vue';
import VueBodyScrollLock from 'vue-body-scroll-lock';

Vue.use(VueBodyScrollLock);
```

## Usage (local)

```html
<div v-scroll-lock="value"></div>
```

```js
<script>
import { VScrollLock } from 'vue-body-scroll-lock';

export default {
    directives: {
        VScrollLock,
    },
    data() {
        return {
            value: false
        }
    }
};
</script>
```

The module also exports the scroll-lock library:

```js
<script>
import { ScrollLock } from 'vue-body-scroll-lock';
</script>
```
