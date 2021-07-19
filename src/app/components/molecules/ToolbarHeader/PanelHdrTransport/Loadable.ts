/**
 *
 * Asynchronously loads the component for PanelHdrTransport
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PanelHdrTransport = lazyLoad(
  () => import('./index'),
  module => module.PanelHdrTransport,
);
