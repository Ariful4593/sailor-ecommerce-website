import React from 'react';
import './Blog.css';
import blogData from '../../fakeData/blogData';
const Blog = () => {
    return (
        <div className="blog-area">
            <div className="row">
                <div className="blog-title">
                    <strong>LATEST FROM BLOG</strong>
                </div>
                {
                    blogData.map((items, index) => (
                        <div className="col-sm-6" key={index}>
                            <div className="card mt-3" >
                                <img src={items.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    <small className="card-text text-danger font-weight-bold">{items.date}</small>
                                    <p className="card-text">{`${(items.description).slice(0, 179)}...`}</p>
                                    <br />
                                    <p className="text-danger font-italic">Read More {'>>'}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blog;