import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./pages/Profile";
import { useState } from "react";
import Checkout from "./pages/Checkout";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Route exact path='/'>
        <button onClick={() => setIsAuth(true)}>Login</button>
        <button onClick={() => setIsAuth(true)}>Logout</button>
        <br />
        <Link to='/profile'>Go To Profile</Link>
        <br />
        <Link to='/checkout'>Go To Checkout</Link>
      </Route>
      <ProtectedRoute path='/profile' component={Profile} isAuth={isAuth} />
      <ProtectedRoute path='/checkout' component={Checkout} isAuth={isAuth} />
    </Router>
  );
}

export default App;
