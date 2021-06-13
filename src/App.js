import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MensCollections from './components/Collections/MensCollections/MensCollections';
import WomenCollection from './components/Collections/WomenCollections/WomenCollection';
import KidsCollections from './components/Collections/KidsCollections/KidsCollections';
import NewbornCollections from './components/Collections/NewbornCollections/NewbornCollections';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/mens">
          <MensCollections />
        </Route>
        <Route path="/womens">
          <WomenCollection />
        </Route>
        <Route path="/kids">
          <KidsCollections />
        </Route>
        <Route path="/newborn">
          <NewbornCollections />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
