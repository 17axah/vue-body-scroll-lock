import scrollLock from './scroll-lock';

export default {
  inserted(el, { value, arg }) {
    if (value) {
      scrollLock.lock(el, arg);
    }
  },
  componentUpdated(el, { value, arg }) {
    if (value) {
      scrollLock.lock(el, arg);
    } else {
      scrollLock.unlock(el);
    }
  },
  unbind(el) {
    scrollLock.unlock(el);
  },
};
