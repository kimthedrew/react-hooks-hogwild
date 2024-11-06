import React, { lazy, Suspense } from 'react';

const LazyHogForm = lazy(() => import('./HogForm'));

const HogForm = props => (
  <Suspense fallback={null}>
    <LazyHogForm {...props} />
  </Suspense>
);

export default HogForm;
