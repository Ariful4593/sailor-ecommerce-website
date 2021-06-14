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
import SingleProduct from './components/SingleProduct/SingleProduct';
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
        <Route path="/singleProduct/:id">
          <SingleProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
