import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCategories, getFilteredProduct } from './apiCore';
import Card from '../components/Card';
import { prices } from './fixedPrices';

const Trainings = () => {
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
    getFilteredProduct(skip, limit, newFilters).then((data) => {
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

  const handleFilters = (filters, filterBy) => {
    //console.log("SHOP", filters, filterBy)
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === 'price') {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilterResult(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let array = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  return (
    <Fragment>
      <Header></Header>
      <section id="page-title">
        <div className="container clearfix">
          <h1>Training List</h1>
          <span>Showcase of Trainings </span>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Training
            </li>
          </ol>
        </div>
      </section>
      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div className="row">
              {filterResults.map((product, i) => (
                <div key={i} className="entry event col-12">
                  {filterResults ? <Card product={product} /> : 'No post yet'}
                </div>
              ))}
            </div>

            {/* <!-- Pager
					============================================= --> */}
            <div className="d-flex justify-content-between">
              {loadMoreButton()}
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </Fragment>
  );
};

export default Trainings;
