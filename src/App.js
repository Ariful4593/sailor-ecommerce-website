import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MensCollections from './components/Collections/MensCollections/MensCollections';
import WomenCollection from './components/Collections/WomenCollections/WomenCollection';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/crazy-mens-collections">
          <MensCollections />
        </Route>
        <Route path="/crazy-womens-collections">
          <WomenCollection />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
