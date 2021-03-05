import { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { createOrder } from './apiCore';
import { Spinner, Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

const Billing = (props) => {
  const [values, setValues] = useState({
    lastname: '',
    firstname: '',
    email: '',
    address: '',
    city: '',
    phonenumber: '',
    sex: '',
    trainingType: '',
    companyname: '',
    product: '',
    error: '',
    success: false,
    loading: false,
    redirectToReferrer: false,
  });

  const {
    lastname,
    firstname,
    email,
    address,
    city,
    phonenumber,
    sex,
    trainingType,
    companyname,
    product,
    success,
    error,
    loading,
    redirectToReferrer,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const [referenceId, setRefre] = useState('');

  useEffect(() => {
    setRefre(new Date().getTime());
  }, [props]);

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    createOrder({
      lastname,
      firstname,
      email,
      address,
      city,
      phonenumber,
      sex,
      trainingType,
      companyname,
      product: props.match.params.trainId,
      referenceId,
    }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          lastname: data.lastname,
          firstname: '',
          email: '',
          address: '',
          city: '',
          phonenumber: '',
          sex: '',
          trainingType: '',
          companyname: '',
          product: '',
          error: '',
          success: true,
          redirectToReferrer: true,
        });
      }
    });
  };

  const showError = () => {
    if (error) {
      return (
        <div
          className="style-msg errormsg"
          style={{ display: error ? '' : 'none' }}
        >
          <div className="sb-msg">
            <i className="icon-remove"></i>
            <strong>Oh snap!</strong> {error}
          </div>
        </div>
      );
    }
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to={`/paystack/${referenceId}`} />;
    }
  };

  const BillingForm = () => {
    return (
      <Fragment>
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <div className="form-widget">
                <div className="form-result"></div>

                <form className="row">
                  <div className="col-lg-12">
                    {/* {showSuccess()} */}
                    {showError()}
                    <div className="row checkout-form-billing">
                      <div className="col-8">
                        <h3>Billing Information</h3>
                      </div>

                      <div className="col-12 form-group">
                        <label>Last Name:</label>
                        <input
                          type="text"
                          className="form-control "
                          value={lastname}
                          placeholder="John Doe"
                          onChange={handleChange('lastname')}
                        />
                      </div>
                      <div className="col-12 form-group">
                        <label>First Name:</label>
                        <input
                          type="text"
                          className="form-control "
                          onChange={handleChange('firstname')}
                          value={firstname}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="col-12 form-group">
                        <label>Email:</label>
                        <input
                          type="email"
                          className="form-control "
                          onChange={handleChange('email')}
                          value={email}
                          placeholder="user@company.com"
                        />
                      </div>
                      <div className="col-6 form-group">
                        <label>Company Name:</label>
                        <br />
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleChange('companyname')}
                          value={companyname}
                          placeholder="Company Inc."
                        />
                      </div>
                      <div class="col-6 form-group">
                        <label>Training Type:</label>
                        <select
                          class="form-control"
                          onChange={handleChange('trainingType')}
                          value={trainingType}
                        >
                          <option value="AX">~~~Select~~~~</option>
                          <option value="Male">Online Class</option>
                          <option value="Female">Physical Master Class </option>
                        </select>
                      </div>

                      <div className="col-12 form-group">
                        <label>Street Address:</label>
                        <input
                          type="text"
                          className="form-control "
                          onChange={handleChange('address')}
                          value={address}
                        />
                      </div>

                      <div className="col-12 form-group">
                        <label>City:</label>
                        <input
                          onChange={handleChange('city')}
                          type="text"
                          className="form-control "
                          value={city}
                        />
                      </div>
                      <div class="col-6 form-group">
                        <label>Sex:</label>
                        <select
                          class="form-control"
                          onChange={handleChange('sex')}
                          value={sex}
                        >
                          <option value="AX">~~~Select~~~~</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>

                      <div className="col-12 form-group">
                        <label>Phone:</label>
                        <br />
                        <input
                          type="text"
                          className="form-control "
                          onChange={handleChange('phonenumber')}
                          value={phonenumber}
                          placeholder="081-4000-0000"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group center">
                      {loading && loading ? (
                        <Button
                          className="btn btn-primary"
                          variant="success"
                          disabled
                        >
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          Loading...
                        </Button>
                      ) : (
                        <button
                          onClick={clickSubmit}
                          className="btn btn-lg btn-secondary"
                        >
                          Checkout
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Header></Header>
      <section id="page-title">
        <div className="container clearfix">
          <h1>Billing &amp; Shipping</h1>
          <span>Forms Widget</span>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Widgets</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Billing &amp; Shipping Form
            </li>
          </ol>
        </div>
      </section>

      {BillingForm()}
      {redirectUser()}
      <Footer></Footer>
    </Fragment>
  );
};

export default Billing;
