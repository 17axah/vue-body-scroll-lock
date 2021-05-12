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
<div v-scroll-lock="[value, options]"></div>
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

## options

### gap
Possible values: 'padding', 'margin', 'width', 'max-width', 'none'

### el
Selector or HTMLElement
Scrollable element
