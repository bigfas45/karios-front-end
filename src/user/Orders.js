import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import HeaderDashboard from '../components/HeaderDashboard';
import { isAuthenticated } from '../auth';
import { getProjectOrders } from './ApiAdmin';
import { Link } from 'react-router-dom';
import AdminSideBar from '../components/AdminSideBar';

const AddCategory = ({ match }) => {
  const [values, setValues] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  let count = 0;
  // destructure user and info from localstprage

  const { user, token } = isAuthenticated();

  const loadProductsOrders = (productId) => {
    getProjectOrders(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setValues(data);
      }
    });
  };

  useEffect(() => {
    loadProductsOrders(match.params.productId);
  }, []);

  const OrderTable = () => {
    return (
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
                    <th> Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Phone Number</th>
                    <th>Training Type</th>
                    <th>Company Name</th>
                    <th>Product</th>
                    <th>Reference ID</th>
                    <th>Created At</th>
                  </tr>
                </thead>
               
                <tbody>
                
                  {values.map((order, i) => {
                    count++
                    return (
                      <tr key={i}>
                        <td>{count}</td>
                        <td>
                          {order.firstname} {order.firstname}
                        </td>
                        <td> {order.email}</td>
                        <td> {order.address}</td>
                        <td> {order.city}</td>
                        <td> {order.phonenumber}</td>
                        <td> {order.trainingType}</td>
                        <td> {order.companyname}</td>
                        <td> {order.product.name}</td>
                        <td> {order.referenceId}</td>
                        <td> {order.createdAt}</td>
                      </tr>
                    );
                  })}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <Fragment>
      <HeaderDashboard></HeaderDashboard>

      <div id="page-menu">
        <div id="page-menu-wrap">
          <div className="container">
            <div className="page-menu-row">
              <div className="page-menu-title">Orders</div>
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
        <div className="content-wrap">
          <div className="container clearfix">
            <div className="row gutter-40 col-mb-80">
              <div className="postcontent col-lg-12">{OrderTable()}</div>
              <AdminSideBar></AdminSideBar>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
};

export default AddCategory;
