import logo from './logo.svg';
import './App.css';
import Pages1 from './style/Pages1';
import RegisterPage from './pages/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
