import React, { Component } from 'react'
import { Layout } from 'antd'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import Routes from './Routes'

import './App.css';

import stores from './store'

// For easier debugging
window.APP_STATE = stores;

class App extends Component {
  render() {
    return (
      <Layout>
        <Provider {...stores}>
          <Router>
            <div>

              {/* Render topbar */}
              {Routes.map(( route, index ) => (
                <Route key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.topbar}/>
              ))}

                <Layout>
                  {/* Render sidebar */}
                  {Routes.map(( route, index ) => (
                    <Route key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.sidebar}/>
                  ))}

                  {/* Render main */}
                  {Routes.map(( route, index ) => (
                    <Route key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.main}/>
                  ))}
            
                </Layout>
            </div>
          </Router>
        </Provider>
      </Layout>
    )
  }
}

export default App
