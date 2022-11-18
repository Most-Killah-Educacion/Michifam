import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Layout from '../layout'

import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Details from '../pages/Details'

function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/details/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </ScrollToTop>
  </BrowserRouter>
)

export default App
