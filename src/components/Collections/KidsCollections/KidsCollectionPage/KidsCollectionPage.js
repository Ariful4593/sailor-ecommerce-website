import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faBars, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import collectionsData from '../../../../fakeData/collectionsData';
import { useHistory } from 'react-router-dom';
import './KidsCollectionPage.css';
import { Link } from "react-router-dom";
import GridArea from '../../GridArea/GridArea';
import { useContext } from 'react';
import { gridContext } from '../../../../App';
const KidsCollectionPage = () => {
    const { value1, value2, value3 } = useContext(gridContext);

    const [initialState] = value1;
    const [listView, setListView] = value2;
    const [sortItem] = value3
    useEffect(() => {
        setListView('grid')
    }, [setListView])
    const { location: { pathname } } = useHistory();
    const filterData = collectionsData.filter(data => data.type === pathname);
    const gridArray = []
    for (let i = 0; i < initialState; i++) {
        const element = filterData[i];
        gridArray.push(element)
    }

    let temp;
    if (sortItem === 'Price: Low to High') {
        for (let i = 0; i < gridArray.length; i++) {
            for (let j = 0; j < gridArray.length - i - 1; j++) {
                if (gridArray[j].price > gridArray[j + 1].price) {
                    temp = gridArray[j];
                    gridArray[j] = gridArray[j + 1];
                    gridArray[j + 1] = temp;
                }
            }
        }
    }

    if (sortItem === 'Price: High to Low') {
        for (let i = 0; i < gridArray.length; ++i) {
            for (let j = i + 1; j < gridArray.length; ++j) {
                if (gridArray[i].price < gridArray[j].price) {
                    temp = gridArray[i];
                    gridArray[i] = gridArray[j];
                    gridArray[j] = temp;
                }
            }
        }
    }
    return (
        <div className="kids-collection-page">
            <div className="row">
                <div className="main-title">
                    <h1>KIDS COLLECTIONS</h1>
                    <hr />
                </div>
                <div className="col-md-3 title">
                    <strong>RECENTLY VIEWED PRODUCTS</strong>
                </div>
                <div className="col-md-9 grid-main-area">
                    <GridArea />
                    <div className="container">
                        <div className="row mt-3">
                            {
                               listView === 'grid' && gridArray.map((card, index) => (
                                    <div className="col-12 col-sm-6 col-md-4 product mt-3" key={index}>
                                        <Link to={`/singleProduct/${card.id}`}>
                                            <img src={card.img} className="card-img-top" alt="..." />
                                            <div className="card-body product-card">
                                                <h5 className="card-title">{card.title}</h5>
                                                <p className="card-text text-danger font-weight-bold">{card.price}</p>
                                            </div>

                                            <ul className="icon-area">
                                                <li><FontAwesomeIcon icon={faEye} /></li>
                                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                                <li><FontAwesomeIcon icon={faBars} /></li>
                                                <li><FontAwesomeIcon icon={faCartPlus} /></li>
                                            </ul>
                                        </Link>
                                    </div>
                                ))

                            }
                        </div>
                        {
                            listView === 'list' &&
                            gridArray.map((data, i) => (
                                <div className="row mt-3 list-product-area" key={i}>
                                    <div className="col-md-4">
                                        <Link to={`/singleProduct/${data.id}`}>
                                            <img src={data.img} className="card-img-top" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="col-md-8 list-product ">
                                        <h4 className="name">{data.title}</h4>
                                        <p className="price"><strong>Price: </strong>{data.price}</p>
                                        <label htmlFor="">Size: </label>
                                        <div className="size-attributes mt-2">
                                            <span className="label label-default">S</span>
                                            <span className="label label-primary">M</span>
                                            <span className="label label-success">L</span>
                                            <span className="label label-info">XL</span>
                                            <span className="label label-warning">XXL</span>
                                        </div>
                                        <hr />
                                        <div className="increment-decrement-area">
                                            <input type="text" className="text-center" /> <button className="btn btn-danger">+</button> <button className="btn btn-danger">-</button>
                                        </div>
                                        <div className="add-to-cart mt-4">
                                            <button type="submit">ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default KidsCollectionPage;