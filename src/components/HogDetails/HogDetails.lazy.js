import React, { lazy, Suspense } from 'react';

const LazyHogDetails = lazy(() => import('./HogDetails'));

const HogDetails = props => (
  <Suspense fallback={null}>
    <LazyHogDetails {...props} />
  </Suspense>
);

export default HogDetails;
