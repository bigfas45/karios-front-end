import React, { Fragment, useState } from 'react';
import Footer from '../components/Footer';
import HeaderDashboard from '../components/HeaderDashboard';
import { isAuthenticated } from '../auth';
import { createCategory } from './ApiAdmin';
import { Link } from 'react-router-dom';
import AdminSideBar from '../components/AdminSideBar'

const AddCategory = () => {
 const [name, setName] = useState('');
 const [error, setError] = useState(false);
 const [success, setSuccess] = useState(false);

 // destructure user and info from localstprage

  const { user, token } = isAuthenticated();
  

      const handleChange = (e) => {
        setError('');
        setName(e.target.value);
      };

      const clickSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        // make request to create category
        createCategory(user._id, token, { name }).then((data) => {
          if (data.error) {
            setError(true);
          } else {
            setError('');
            setSuccess(true);
          }
        });
      };




  const newCategoryForm = () => {
    return (
      <Fragment>
        <h3>Create Category</h3>

        <form onSubmit={clickSubmit} style={{ maxWidth: '25rem' }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter category name"
              onChange={handleChange}
              value={name}
              autoFocus
              required
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>

        <div className="line"></div>
      </Fragment>
    );
  };


  const showSuccess = () => {
    if (success) {
      return (
        <div className="style-msg successmsg">
          <div className="sb-msg">
            <i className="icon-thumbs-up"></i>
            <strong>Well done!</strong> {name} is created
          </div>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-hidden="true"
          >
            &times;
          </button>
        </div>
      );
    }
  };

  const goBack = () => (
    <div className="mt-5">
      <Link to="/admin/dashboard" className="text-warning">
        Back to Dashboard
      </Link>
    </div>
  );

  const showError = () => {
    if (error) {
      return (
        <div className="style-msg errormsg">
          <div className="sb-msg">
            <i className="icon-remove"></i>
            <strong>Oh snap! </strong>
            {name} already exist
          </div>
        </div>
      );
    }
  };

  return (
    <Fragment>
      <HeaderDashboard></HeaderDashboard>
      <section id="page-title">
        <div className="container clearfix">
          <h3>{`G'day ${user.name}, ready to add a new category`}</h3>
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
              <div className="postcontent col-lg-9">
                {' '}
                {showSuccess()}
                {showError()}
                {newCategoryForm()}
                {goBack()}
              </div>
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
