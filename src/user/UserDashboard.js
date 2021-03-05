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
      <section id="page-title">
        <div className="container clearfix">
          <h1>{`G'day ${name}!`}</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Admin</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tables
            </li>
          </ol>
        </div>
      </section>
      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div className="row gutter-40 col-mb-80">
              <div className="postcontent col-lg-9">{adminInfo()}</div>
             <AdminSideBar></AdminSideBar>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
};

export default UserDashboard;
