import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons';

import './GridArea.css';
import { useContext } from 'react';
import { gridContext } from '../../../App';
const GridArea = () => {

    const { value1, value2, value3 } = useContext(gridContext);

    const [initialState, setInitialState] = value1;
    const [listView, setListView] = value2;
    const [sortItem, setSortItem] = value3;
    const handleGridView = (test) => {
        setListView(test)
    }
    
    return (
        <div className="container">
            <div className="row product-selectors">
                <div className="col-md-4">
                    <pre><span>Display</span> <select name="display" value={initialState}
                        onChange={(e) => setInitialState(e.target.value)} id="displayCard">
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="18">18</option>
                    </select>  <span>Per Page</span>
                    </pre>
                </div>
                <div className="col-md-4 grid-layer-area">
                    <pre><span>View As </span> <button className="grid" value={listView} onClick={() => handleGridView('grid')} ><FontAwesomeIcon icon={faThLarge} /></button> <button className="list" value={listView} onClick={() => handleGridView('list')}><FontAwesomeIcon icon={faList} /></button></pre>
                </div>
                <div className="col-md-4 sort-element">
                    <pre><span>Sort By </span>
                        <select name="sortList" id="sortBy" value={sortItem} onChange={(e) => setSortItem(e.target.value)} >
                            <option value="Newest">Newest</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                        </select>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default GridArea;