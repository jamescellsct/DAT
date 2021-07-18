import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutStdGrid } from '../../layouts/LayoutStdGrid';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <LayoutStdGrid>
        <span>HomePage container</span>
      </LayoutStdGrid>
    </>
  );
}
