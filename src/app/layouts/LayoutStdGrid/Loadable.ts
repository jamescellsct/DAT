/**
 *
 * Asynchronously loads the component for LayoutStdGrid
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LayoutStdGrid = lazyLoad(
  () => import('./index'),
  module => module.LayoutStdGrid,
);
