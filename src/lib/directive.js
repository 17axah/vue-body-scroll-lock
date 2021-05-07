import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export default {
  inserted(el, binding) {
    if (binding.value) {
      disablePageScroll();
    }
  },
  componentUpdated(el, binding) {
    (binding.value ? disablePageScroll : enablePageScroll)();
  },
  unbind() {
    enablePageScroll();
  },
};
