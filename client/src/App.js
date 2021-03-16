import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Pg404 from "./components/Pages/404/Pg404";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={About} />
          <Route exact path="/" component={Contact} />
          <Route component={Pg404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
