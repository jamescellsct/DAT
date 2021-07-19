/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/organisms/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { PagePreLoader } from './components/atoms/PagePreLoader';
import CursorProvider from '../providers/cursorProvider';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  const { i18n } = useTranslation();
  return (
    <>
      {!loading ? (
        <BrowserRouter>
          <Helmet
            titleTemplate="%s - React Boilerplate"
            defaultTitle="React Boilerplate"
            htmlAttributes={{ lang: i18n.language }}
          >
            <meta
              name="description"
              content="A React Boilerplate application"
            />
          </Helmet>
          <CursorProvider>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
            <GlobalStyle />
          </CursorProvider>
        </BrowserRouter>
      ) : (
        <PagePreLoader />
      )}
    </>
  );
}
