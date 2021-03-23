import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './style/import.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Layout = React.lazy(()=>import('./components/Layout/layout'));
const AddSubAdmin = React.lazy(()=>import('./components/ui/SubAdmin/addSubAdminForm'));

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} /> */}
          <Route path="/" name="Home" render={props => <Layout {...props}/>} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  )
}

export default App;
