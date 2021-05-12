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

<!-- with gap method: -->
<div v-scroll-lock:padding="value"></div>
<div v-scroll-lock:margin="value"></div>
```

```js
<script>
import { directive } from 'vue-body-scroll-lock';

export default {
    directives: {
        scrollLock: directive,
    },
    data() {
        return {
            value: false
        }
    }
};
</script>
```

You can also use attributes from the [scroll-lock](https://www.npmjs.com/package/scroll-lock) module:
***data-scroll-lock-fill-gap***, ***data-scroll-lock-scrollable***, ***data-scroll-lock-lockable***
