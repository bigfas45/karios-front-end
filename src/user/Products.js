import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import HeaderDashboard from '../components/HeaderDashboard';
import { isAuthenticated } from '../auth';
import { getProducts, getProjectOrders } from './ApiAdmin';
import OrderCount from '../components/OrderCount';

const Products = () => {
  const [values, setValues] = useState([]);
  const [values2, setValues2] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filterResults, setFilterResults] = useState([]);
  let count = 0;
  let pId;
  // destructure user and info from localstprage

  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setValues(data);
      }
    });
  };

  

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Fragment>
      <HeaderDashboard></HeaderDashboard>
      <div id="page-menu">
        <div id="page-menu-wrap">
          <div className="container">
            <div className="page-menu-row">
              <div className="page-menu-title">Product List</div>
              <nav className="page-menu-nav">
                <ul className="page-menu-container">
                  <li className="page-menu-item ">
                    <a href="/dashboard">
                      <div>Dashboard</div>
                    </a>
                  </li>

                  <li className="page-menu-item">
                    <a href="/create/category">
                      <div>Create Category</div>
                    </a>
                  </li>
                  <li className="page-menu-item">
                    <a href="/create/trainings">
                      <div>Create Product</div>
                    </a>
                  </li>
                  <li className="page-menu-item current">
                    <a href="/products">
                      <div>Product List</div>
                    </a>
                  </li>
                </ul>
              </nav>
              <div id="page-menu-trigger">
                <i className="icon-reorder"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="content">
        <div class="content-wrap">
          <div class="container clearfix">
            <div class="table-responsive">
              <table
                class="table table-striped table-bordered"
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>TimeLine</th>
                    <th></th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>TimeLine</th>
                    <th></th>
                  </tr>
                </tfoot>
                <tbody>
                  {values.map((product, i) => {
                  
                    count++;
                    let des = product.description.substring(0, 200);

                    //  
                    return (
                      <tr key={i}>
                        <td>{count}</td>
                        <td>{product.name}</td>
                        <td>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: des,
                            }}
                          ></div>
                        </td>
                        <td>{product.price}</td>
                        <td>{product.category.name}</td>
                        <td>{product.timeLine}</td>
                        <td>
                          <OrderCount product={product._id} />
                          <a href={`/products/${product._id}`}>
                            {' '}
                            <i class="i-rounded i-bordered icon-cog"></i>
                          </a>

                          <a href={`/gallery/${product._id}`}>
                            <i class="i-rounded i-bordered icon-film"></i>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
};

export default Products;
