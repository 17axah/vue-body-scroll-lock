import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default {
  inserted(el, { value }) {
    const [val, options] = Array.isArray(value) ? value : [value];

    if (val) {
      disableBodyScroll(el, options);
    }
  },
  componentUpdated(el, { value }) {
    const [val, options] = Array.isArray(value) ? value : [value];

    if (val) {
      disableBodyScroll(el, options);
    } else {
      enableBodyScroll(el);
    }
  },
  unbind(el) {
    enableBodyScroll(el);
  },
};
