import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import HeaderDashboard from '../components/HeaderDashboard';
import { isAuthenticated } from '../auth';
import AdminSideBar from '../components/AdminSideBar';

const UserDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? 'Admin' : 'Registered User'}
          </li>
        </ul>
      </div>
    );
  };



  return (
    <Fragment>
      <HeaderDashboard></HeaderDashboard>
     
      <div id="page-menu">
        <div id="page-menu-wrap">
          <div className="container">
            <div className="page-menu-row">
              <div className="page-menu-title">{`G'day ${name}!`}</div>
              <nav className="page-menu-nav">
                <ul className="page-menu-container">
                  <li className="page-menu-item current">
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
                  <li className="page-menu-item">
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
              <div className="postcontent col-lg-9">{adminInfo()}</div>
           
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
};

export default UserDashboard;
