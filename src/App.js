import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import './App.css';
import Appoinment from './Pages/AppoinmentPage/Appoinment/Appoinment';
import AuthProvider from './Pages/Context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/Login/Login'
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
