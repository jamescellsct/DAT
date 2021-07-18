/**
 *
 * Asynchronously loads the component for PanelHdrTempo
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PanelHdrTempo = lazyLoad(
  () => import('./index'),
  module => module.PanelHdrTempo,
);
