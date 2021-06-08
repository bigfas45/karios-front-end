import React, { useState, Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { processPaymentOrder, getOrderMail, createOrder } from './apiCore';
import { isAuthenticated } from '../auth';
import { emptyCart } from '../components/CartHelpers';

const Thankyou = (props) => {
  const [values, setValues] = useState([]);
  const [mail, setMail] = useState([]);
  const [error, setError] = useState('');
    const [error2, setError2] = useState('');

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const email = isAuthenticated() && isAuthenticated().user.email;
  const name = isAuthenticated() && isAuthenticated().user.name;
  const address = isAuthenticated() && isAuthenticated().user.address;
  const telephone = isAuthenticated() && isAuthenticated().user.telephone;
  const city = isAuthenticated() && isAuthenticated().user.city;
  const sex = isAuthenticated() && isAuthenticated().user.sex;
  const token = isAuthenticated() && isAuthenticated().token;

  const loadOrderMail = (orderId) => {
    // ref = referenceId;
    getOrderMail(orderId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setMail(data);
      }
    });
  };

  const process = (orderId) => {
    // let orderId = '6059d431e9cd0c503c1bf494';
    processPaymentOrder(orderId).then((data) => {
      if (data.error) {
        setError2(data.error);
      } else {
        setValues(data);
        loadOrderMail(orderId);
      }
    });
  };

  const order = (productId) => {
    createOrder({
      lastname: name,
      firstname: name,
      email: email,
      address: address,
      city: city,
      phonenumber: telephone,
      sex: sex,
      trainingType: 'Shop',
      companyname: name,
      product: productId,
      referenceId: props.match.params.refId,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);

        // setOrderId(data._id);
        process(data.order._id);
      }
    });
  };

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const token = query.get('status');

    if (token === 'successful') {
      order(props.match.params.productId);
      emptyCart();
    } else {
      alert('Transcation failed try again');
    }
  }, [props]);

  const section = () => {
    return (
      <section id="content">
        <div class="content-wrap bg-light">
          <div class="container py-5">
            <div class="row justify-content-center py-5 my-5">
              <div class="col-lg-7 col-md-10">
                <div class="card shadow-sm">
                  <div class="card-header">
                    <h4 class="mb-0">Thank you</h4>
                  </div>
                  <div class="card-body">
                    <div class="form-widget">
                      <div class="form-result"></div>
                      <div class="row">
                        <h1>Your payment is being processed</h1>
                      </div>
                      {/* put here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <Fragment>
      <Header></Header>
      {section()}

      <Footer></Footer>
    </Fragment>
  );
};

export default Thankyou;
