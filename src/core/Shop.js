import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { getCategories, getFilteredProduct2 } from './apiCore';
import { API } from '../config';
import Card from '../components/CardShop';

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
    getFilteredProduct2(toSkip, limit, myFilters.filters).then((data) => {
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
      {/* <section id="page-title">
        <div className="container clearfix">
          <h1>Shop</h1>

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Shop
            </li>
          </ol>
        </div>
      </section> */}

      <div id="page-menu">
        <div id="page-menu-wrap">
          <div className="container">
            <div className="page-menu-row">
              <div className="page-menu-title">Shop</div>

              <div id="page-menu-trigger">
                <i className="icon-reorder"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div
              id="shop"
              class="shop row grid-container gutter-30"
              data-layout="fitRows"
            >
              {filterResults.map((product, i) => (
                <div key={i} className="col-4 mb-3">
                  <Card product={product} />
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
