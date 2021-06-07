import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  getOrder,
  processPaymentOrder,
  getOrderId,
  getOrderMail,
  getOrderProduct,
} from './apiCore';
import { isAuthenticated } from '../auth';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const Paystack = (props) => {
  let history = useHistory();
  const [values, setValues] = useState([]);
  const [values2, setValues2] = useState([]);
  const [mail, setMail] = useState([]);
  const [values2Id, setValues2Id] = useState([]);
  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const [price, Setprice] = useState('');
  const [productName, SetproductName] = useState('');
  var referenceId;
  var productId;
  let orderId;
  var orderId2;
  const [redirectUser, setRedirectUser] = useState('');

  const loadOrder = (referenceId) => {
    // ref = referenceId;
    getOrder(referenceId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setValues(data);
      }
    });
  };

  const loadOrderProduct = (prodctId) => {
    getOrderProduct(prodctId).then((data) => {
      if (data.error) {
        // setError(data.error);
      } else {
        Setprice(data.product.price);
        SetproductName(data.product.name);
      }
    });
  };

  const email = isAuthenticated() && isAuthenticated().user.email;
  const name = isAuthenticated() && isAuthenticated().user.name;
  const telephone = isAuthenticated() && isAuthenticated().user.telephone;

  const loadOrderId = (orderId) => {
    // ref = referenceId;
    getOrderId(orderId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setValues2Id(data);
      }
    });
  };

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
        setValues2(data);
      }
    });
  };

  const GetOrderId = () => {
    values2Id.map((ord, i) => {
      orderId = ord._id;
      console.log('orderId', orderId);
      process(orderId);
      loadOrderMail(orderId);
    });
  };

  useEffect(() => {
    referenceId = props.match.params.referenceId;
    productId = props.match.params.productId;
    // console.log('productId', prodctId);
    loadOrder(referenceId);
    loadOrderId(referenceId);
    // GetOrderId();
    loadOrderProduct(productId);
  }, [props]);

  // useEffect(() => {
  //   orderId2 = values2Id._id;
  //   console.log('productId', orderId2);
  //   //  process(orderId2);
  //   //  loadOrderMail(orderId2);
  // });

  const redirect = () => {
    return <Redirect to={`/trainings`} />;
  };

  const config = {
    public_key: 'FLWPUBK_TEST-075ec686c87a8f63e27f2f80a55683c1-X',
    tx_ref: props.match.params.referenceId,
    amount: price,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    redirect_url: 'http://localhost:3000/trainings',
    customer: {
      email: email,
      phonenumber: telephone,
      name: name,
    },
    customizations: {
      title: productName,
      description: 'Payment for items in cart',
      logo: 'data:image/png;base64,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',
    },
  };

const fwConfig = {
  ...config,
  text: 'Pay with Flutterwave!',
  callback: (response) => {
    console.log(response);
    // closePaymentModal(); // this will close the modal programmatically
  },
  onClose: () => {},
};

  const section = () => {
    return (
      <section id="content">
        <div class="content-wrap bg-light">
          <div class="container py-5">
            <div class="row justify-content-center py-5 my-5">
              <div class="col-lg-7 col-md-10">
                <div class="card shadow-sm">
                  <div class="card-header">
                    <h4 class="mb-0">Make your payment</h4>
                  </div>
                  <div class="card-body">
                    <div class="form-widget">
                      <div class="form-result"></div>
                      <div class="row">
                        {values.map((order, i) => {
                          let email = order.email;
                          let amount = order.product.price;

                          return (
                            <Fragment>
                              <h3 key={i} class="mb-0">
                                Registration confirmation:
                                <br />
                                Name: {order.lastname}
                                <br />
                                Email: {email}
                                <br />
                                Course: {order.product.name}
                                <br />
                                Price: ₦{amount.toLocaleString()}
                                <br />
                              </h3>

                              <br />
                              <br />
                              <div class="col-12">
                                {' '}
                                <p>
                                  <FlutterWaveButton {...fwConfig} />
                                </p>
                              </div>
                            </Fragment>
                          );
                        })}
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

      {/* {redirect()} */}

      <Footer></Footer>
    </Fragment>
  );
};

export default Paystack;
