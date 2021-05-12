import scrollLock from './scroll-lock';

function getValue(value) {
  return Array.isArray(value) ? value[0] : value;
}

function getOptions(value) {
  return Array.isArray(value) && value[1] ? value[1] : {};
}

export default {
  inserted(el, binding) {
    const value = getValue(binding.value);
    const options = getOptions(binding.value);

    if (value) {
      scrollLock.lock(el, options);
    }
  },
  componentUpdated(el, binding) {
    const value = getValue(binding.value);
    const options = getOptions(binding.value);

    if (value) {
      scrollLock.lock(el, options);
    } else {
      scrollLock.unlock(el, options);
    }
  },
  unbind(el, binding) {
    const options = getOptions(binding.value);

    scrollLock.unlock(el, options);
  },
};
