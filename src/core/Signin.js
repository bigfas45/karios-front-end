import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from '../auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Spinner, Button } from 'reactstrap';


const Signin = () => {



const [values, setValues] = useState({
  email: '',
  password: '',
  error: '',
  loading: false,
  redirectToReferrer: false,
});

const { email, password, loading, error, redirectToReferrer } = values;
const { user } = isAuthenticated();

const handleChange = (name) => (event) => {
  setValues({ ...values, error: false, [name]: event.target.value });
};

const clickSubmit = (event) => {
  event.preventDefault();
  setValues({ ...values, error: false, loading: true });
  signin({ email, password }).then((data) => {
    if (data.error) {
      setValues({ ...values, error: data.error, loading: false });
    } else {
      authenticate(data, () => {
        setValues({ ...values, redirectToReferrer: true });
      });
    }
  });
  };
  

     const redirectUser = () => {
       if (redirectToReferrer) {
         if (user && user.role === 1) {
           return <Redirect to="/dashboard" />;
         } else {
           return <Redirect to="/" />;
         }
       }

       if (isAuthenticated()) {
         return <Redirect to="/" />;
       }
  };
  

  const SigninForm = () => {
    return (
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
                    id="login-form"
                    name="login-form"
                    className="row mb-0"
                    action="#"
                    method="post"
                  >
                    <div className="col-12 form-group">
                      <label for="login-form-username">Email:</label>
                      <input
                        onChange={handleChange('email')}
                        type="text"
                        id="login-form-username"
                        name="login-form-username"
                        value={email}
                        className="form-control"
                      />
                    </div>

                    <div className="col-12 form-group">
                      <label for="login-form-password">Password:</label>
                      <input
                        onChange={handleChange('password')}
                        type="password"
                        id="login-form-password"
                        name="login-form-password"
                        value={password}
                        className="form-control"
                      />
                    </div>
                    <div class="col-12 form-group">
                      
                      <a href="/signup" class="float-right">
                        Signup
                      </a>
                    </div>

                    <div className="col-12 form-group">
                      {/* */}
                      {loading && loading ? (
                        <Button
                          class="btn btn-primary"
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
                          className="button button-3d button-black m-0"
                          id="login-form-submit"
                          name="login-form-submit"
                          value="login"
                          onClick={clickSubmit}
                        >
                          Login
                        </button>
                      )}{' '}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }



  return (
    <Fragment>
      <Header></Header>
      {SigninForm()}
      {/* {redirectUser()} */}
      <Footer></Footer>
    </Fragment>
  );
};

export default Signin;
