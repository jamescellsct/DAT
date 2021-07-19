/**
 *
 * Asynchronously loads the component for PanelHdrEnvelopes
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PanelHdrEnvelopes = lazyLoad(
  () => import('./index'),
  module => module.PanelHdrEnvelopes,
);
