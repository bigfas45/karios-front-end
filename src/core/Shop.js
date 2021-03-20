import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { getCategories, getFilteredProduct2 } from './apiCore';
import { API } from '../config';
const Shop = () => {

  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filterResults, setFilterResults] = useState([]);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const loadFilterResult = (newFilters) => {
    //console.log(newFilters);
    getFilteredProduct2(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilterResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    //console.log(newFilters);
    getFilteredProduct(toSkip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilterResults([...filterResults, ...data.data]);
        setSize(data.size);

        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-warning mb-5">
          {' '}
          Load more{' '}
        </button>
      )
    );
  };

  useEffect(() => {
    init();
    loadFilterResult(skip, limit, myFilters.filters);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header></Header>
      <section id="page-title">
        <div className="container clearfix">
          <h1>Shop</h1>
          <span>Start Buying your Favourite Theme</span>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Shop
            </li>
          </ol>
        </div>
      </section>

      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div
              id="shop"
              class="shop row grid-container gutter-30"
              data-layout="fitRows"
            >
              {filterResults.map((product, i) => (
                <div key={i} class="product col-md-4 col-sm-6 col-12">
                  <div class="grid-inner">
                    <div class="product-image">
                      <a href="#">
                        <img
                          src={`${API}/product/photo/${product._id}`}
                          alt={product.name}
                        />
                      </a>
                      <a href="#">
                        <img
                          src={`${API}/product/photo/${product._id}`}
                          alt={product.name}
                        />
                      </a>
                      {/* <div class="sale-flash badge badge-secondary p-2">
                        Out of Stock
                      </div> */}
                      <div class="bg-overlay">
                        <div
                          class="bg-overlay-content align-items-end justify-content-between"
                          data-hover-animate="fadeIn"
                          data-hover-speed="400"
                        >
                          <a href="#" class="btn btn-dark mr-2">
                            <i class="icon-shopping-cart"></i>
                          </a>
                          <a
                            href="include/ajax/shop-item.html"
                            class="btn btn-dark"
                            data-lightbox="ajax"
                          >
                            <i class="icon-line-expand"></i>
                          </a>
                        </div>
                        <div class="bg-overlay-bg bg-transparent"></div>
                      </div>
                    </div>
                    <div class="product-desc">
                      <div class="product-title">
                        <h3>
                          {/* <a href={`/shop-details/${product._id}`}> */}
                          <a href="#">
                            {product.name}
                          </a>
                        </h3>
                      </div>
                      <div class="product-price">
                        {/* <del>$24.99</del> */}
                        <ins>₦{product.price}</ins>
                      </div>
                      <div class="product-rating">
                        <i class="icon-star3"></i>
                        <i class="icon-star3"></i>
                        <i class="icon-star3"></i>
                        <i class="icon-star3"></i>
                        <i class="icon-star-half-full"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </Fragment>
  );
};

export default Shop;
