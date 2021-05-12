import {
  disablePageScroll, enablePageScroll, clearQueueScrollLocks, setFillGapMethod,
} from 'scroll-lock';

let locks = [];

export default {
  lock(el, gapMethod) {
    if (!el) {
      throw new Error('el - argument is required');
    }

    if (!locks.some((_el) => _el === el)) {
      locks.push(el);

      setFillGapMethod(gapMethod || 'none');
      disablePageScroll(el);
    }
  },
  unlock(el) {
    if (!el) {
      throw new Error('el - argument is required');
    }

    if (locks.some((_el) => _el === el)) {
      locks = locks.filter((_el) => _el !== el);

      enablePageScroll(el);
    }
  },
  unlockAll() {
    locks = [];

    clearQueueScrollLocks();
    enablePageScroll();
  },
};
