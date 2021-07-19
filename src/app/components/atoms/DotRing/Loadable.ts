/**
 *
 * Asynchronously loads the component for DotRing
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DotRing = lazyLoad(
  () => import('./index'),
  module => module.DotRing,
);
