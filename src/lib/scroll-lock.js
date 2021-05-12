import {
  disablePageScroll, enablePageScroll, clearQueueScrollLocks, setFillGapMethod,
} from 'scroll-lock';

const defaultOptions = {
  gap: 'none',
  el: false,
};

let locks = [];

function getElement(el, options) {
  if (options.el) {
    return typeof options.el === 'string'
      ? el.querySelector(options.el)
      : options.el;
  }
  return el;
}

export default {
  lock(_element, _options) {
    const options = _options ? { ...defaultOptions, ..._options } : defaultOptions;
    const element = getElement(_element, options);

    if (!element) {
      throw new Error('el - argument is required');
    }

    if (!locks.some((_el) => _el === element)) {
      locks.push(element);

      setFillGapMethod(options.gap);
      disablePageScroll(element);
    }
  },
  unlock(_element, _options) {
    const options = _options ? { ...defaultOptions, _options } : defaultOptions;
    const element = getElement(_element, options);

    if (!element) {
      throw new Error('el - argument is required');
    }

    if (locks.some((_el) => _el === element)) {
      locks = locks.filter((_el) => _el !== element);

      enablePageScroll(element);
    }
  },
  unlockAll() {
    locks = [];

    clearQueueScrollLocks();
    enablePageScroll();
  },
};
