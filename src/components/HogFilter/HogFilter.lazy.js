import React, { lazy, Suspense } from 'react';

const LazyHogFilter = lazy(() => import('./HogFilter'));

const HogFilter = props => (
  <Suspense fallback={null}>
    <LazyHogFilter {...props} />
  </Suspense>
);

export default HogFilter;
