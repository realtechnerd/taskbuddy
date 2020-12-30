import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Signup from "./views/Signup";
import "./css/App.css";
import {AuthProvider} from "./contexts/AuthContext.js";
import Login from "./views/Login";
import Landing from './views/Landing';
import PrivateRoute from './components/PrivateRoute';
import Dash from "./views/Dash";
import ForgotPassword from './views/ForgotPassword';

function App() {
  return (
    <> 
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <PrivateRoute path="/dashboard" component={Dash}/>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
