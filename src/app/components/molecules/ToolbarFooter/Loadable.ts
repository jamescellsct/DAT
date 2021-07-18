/**
 *
 * Asynchronously loads the component for ToolbarFooter
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ToolbarFooter = lazyLoad(
  () => import('./index'),
  module => module.ToolbarFooter,
);
