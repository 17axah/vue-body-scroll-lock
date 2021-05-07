import * as scrollLock from 'scroll-lock';
import directive from './directive';

export const VScrollLock = directive;
export const ScrollLock = scrollLock;

export default function (Vue) {
  Vue.directive('scroll-lock', directive);
}
