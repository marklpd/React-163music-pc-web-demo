import React, { memo } from 'react'
import { Provider } from 'react-redux';
import { HashRouter, useRoutes } from 'react-router-dom';

import routes from './router'
import store from './store';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import AppPlayBar from '@/pages/player/app-player-bar';

function RouteElement() {
  const element = useRoutes(routes);
  return element
}

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        <RouteElement />
        <AppFooter />
        <AppPlayBar />
      </HashRouter>
    </Provider>
  )
})

export default App;
