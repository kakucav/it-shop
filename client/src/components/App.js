import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserRoute from './UserRoute';
import AdminRoute from './AdminRoute';
import Header from './Header';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import UserPanel from './UserPanel';
import AdminPanel from './AdminPanel';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <UserRoute exact path='/user/panel' component={UserPanel} />
        <AdminRoute exact path='/admin/panel' component={AdminPanel} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
