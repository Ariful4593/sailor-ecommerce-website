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
import { createContext, useState } from 'react';
import Cart from './components/Cart/Cart';

export const gridContext = createContext()
function App() {
  const [initialState, setInitialState] = useState(6);
  const [gridView, setGridView] = useState('');
  const [listView, setListView] = useState('');
  const [sortItem, setSortItem] = useState('');
  const [product, setProduct] = useState([])


  return (
    <gridContext.Provider value={{ value1: [initialState, setInitialState], value2: [listView, setListView], value3: [sortItem, setSortItem], value4: [gridView, setGridView], value5: [product, setProduct] }}>
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
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </gridContext.Provider>
  );
}

export default App;
