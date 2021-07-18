/**
 *
 * Asynchronously loads the component for ToolbarHeader
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ToolbarHeader = lazyLoad(
  () => import('./index'),
  module => module.ToolbarHeader,
);
