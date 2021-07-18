/**
 *
 * Asynchronously loads the component for PagePreLoader
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PagePreLoader = lazyLoad(
  () => import('./index'),
  module => module.PagePreLoader,
);
