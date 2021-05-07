import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default {
  inserted(el, binding) {
    if (binding.value) {
      disablePageScroll(el);
    }
  },
  componentUpdated(el, binding) {
    (binding.value ? disablePageScroll : enablePageScroll)(el);
  },
  unbind(el) {
    enablePageScroll(el);
  },
};
