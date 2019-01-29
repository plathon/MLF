import React, { Component } from 'react'
import { Layout } from 'antd'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Routes from './Routes'

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
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
      </Layout>
    )
  }
}

export default App
