import React, { memo } from 'react'
import { HashRouter, useRoutes } from 'react-router-dom';

import routes from './router'
import store from './store';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

function RouteElement() {
  const element = useRoutes(routes);
  return element
}

const App = memo(() => {
  return (
    <HashRouter>
      <AppHeader/> 
      <RouteElement/> 
      <AppFooter/>
    </HashRouter>
  )
})

export default App;
