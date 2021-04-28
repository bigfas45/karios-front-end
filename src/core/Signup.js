import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { signup } from '../auth';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    address: '',
    telephone: '',
    city: '',
    sex: '',

    success: false,
  });

  const {
    name,
    email,
    password,
    success,
    error,
    address,
    telephone,
    city,
    sex,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, address, telephone, city, sex }).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: '',
            email: '',
            password: '',
            address,
            telephone,
            city,
            sex,
            error: '',
            success: true,
          });
        }
      }
    );
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      class="style-msg successmsg"
      style={{ display: success ? '' : 'none' }}
    >
      <div class="sb-msg">
        <i class="icon-thumbs-up"></i>
        <strong>Well done!</strong> New account is created. Please{' '}
        <a href="/signin">Signin</a>
      </div>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-hidden="true"
      >
        &times;
      </button>
    </div>
  );

  const signUpForm = () => (
    <Fragment>
      <section id="page-title">
        <div className="container clearfix">
          <h1>My Account</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Login
            </li>
          </ol>
        </div>
      </section>
      {showSuccess()}
      {showError()}
      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div
              className="accordion accordion-lg mx-auto mb-0 clearfix"
              style={{ maxWidth: '550px' }}
            >
              <div className="accordion-header">
                <div className="accordion-icon">
                  <i className="accordion-closed icon-lock3"></i>
                  <i className="accordion-open icon-unlock"></i>
                </div>

                <div className="accordion-title">Login to your Account</div>
              </div>

              <div className="accordion-content clearfix">
                <form
                  id="register-form"
                  name="register-form"
                  className="row mb-0"
                  action="#"
                  method="post"
                >
                  <div className="col-12 form-group">
                    <label for="register-form-name">Name:</label>
                    <input
                      onChange={handleChange('name')}
                      type="text"
                      id="register-form-name"
                      name="register-form-name"
                      value={name}
                      className="form-control"
                    />
                  </div>

                  <div className="col-12 form-group">
                    <label for="register-form-email">Email Address:</label>
                    <input
                      onChange={handleChange('email')}
                      type="text"
                      id="register-form-email"
                      name="register-form-email"
                      value={email}
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <label for="register-form-password">Password:</label>
                    <input
                      onChange={handleChange('password')}
                      type="password"
                      id="register-form-password"
                      name="register-form-password"
                      value={password}
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <label for="register-form-address"> Address:</label>
                    <input
                      onChange={handleChange('address')}
                      type="text"
                      id="register-form-address"
                      name="register-form-address"
                      value={address}
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <label for="register-form-telephone">Telephone:</label>
                    <input
                      onChange={handleChange('telephone')}
                      type="number"
                      id="register-form-telephone"
                      name="register-form-telephone"
                      value={telephone}
                      className="form-control"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <label for="register-form-city">City</label>
                    <input
                      onChange={handleChange('city')}
                      type="text"
                      id="register-form-city"
                      name="register-form-city"
                      value={city}
                      className="form-control"
                    />
                  </div>

                  <div className="col-12 form-group">
                    <label for="register-form-sex">Sex:</label>
                    <input
                      onChange={handleChange('sex')}
                      type="sex"
                      id="register-form-sex"
                      name="register-form-sex"
                      value={sex}
                      className="form-control"
                    />
                  </div>

                  <div className="col-12 form-group">
                    <button
                      className="button button-3d button-black m-0"
                      id="register-form-submit"
                      name="register-form-submit"
                      value="register"
                      onClick={clickSubmit}
                    >
                      Register Now
                    </button>
                  </div>
                </form>
              </div>

              <div className="accordion-content clearfix"></div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );

  return (
    <Fragment>
      <Header></Header>

      {signUpForm()}
      <Footer></Footer>
    </Fragment>
  );
};

export default Signup;
