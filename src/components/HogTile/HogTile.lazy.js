import React, { lazy, Suspense } from 'react';

const LazyHogTile = lazy(() => import('./HogTile'));

const HogTile = props => (
  <Suspense fallback={null}>
    <LazyHogTile {...props} />
  </Suspense>
);

export default HogTile;
