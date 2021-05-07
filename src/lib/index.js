import * as scrollLock from 'scroll-lock';
import scrollLockDirective from './directive';

export const directive = scrollLockDirective;
export const ScrollLock = scrollLock;

export default function (Vue) {
  Vue.directive('scroll-lock', scrollLockDirective);
}
