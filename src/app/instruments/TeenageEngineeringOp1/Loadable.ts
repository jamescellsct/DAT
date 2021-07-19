/**
 *
 * Asynchronously loads the component for TeenageEngineeringOp1
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TeenageEngineeringOp1 = lazyLoad(
  () => import('./index'),
  module => module.TeenageEngineeringOp1,
);
