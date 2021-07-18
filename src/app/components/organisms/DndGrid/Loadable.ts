/**
 *
 * Asynchronously loads the component for DndGrid
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DndGrid = lazyLoad(
  () => import('./index'),
  module => module.DndGrid,
);
