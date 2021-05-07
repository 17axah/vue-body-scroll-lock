import scrollLockDirective from './directive';

export const directive = scrollLockDirective;

export default function (Vue) {
  Vue.directive('scroll-lock', scrollLockDirective);
}
