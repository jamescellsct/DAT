/**
 *
 * Asynchronously loads the component for PanelHdrTimeSignature
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PanelHdrTimeSignature = lazyLoad(
  () => import('./index'),
  module => module.PanelHdrTimeSignature,
);
