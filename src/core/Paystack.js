import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  getOrder,
  processPaymentOrder,
  getOrderId,
  getOrderMail,
} from './apiCore';
import PaystackButton from 'react-paystack';
import { Link, Redirect, useHistory } from 'react-router-dom';

const Paystack = (props) => {
  let history = useHistory();
  const [values, setValues] = useState([]);
  const [values2, setValues2] = useState([]);
  const [mail, setMail] = useState([]);
  const [values2Id, setValues2Id] = useState([]);
  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  var referenceId;
  let orderId;
  const [redirectUser, setRedirectUser] = useState('');

  const publicKey = 'pk_test_3c713de9a71c00fa72ed7193436212f5ec0b08a5';
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
    loadOrder(referenceId);
    loadOrderId(referenceId);
    GetOrderId();
  }, [props]);

  let callback = (response) => {
    if (response.message === 'Success') {
      console.log(response.message);
      {
        GetOrderId();
      }
      setRedirectUser(true);
    }
  };

  let close = () => {
    console.log('Payment closed');
  };

    const redirect = () => {
      if (redirectUser) {
        if (!error) {
          return <Redirect to={`/`} />;
        }
      }
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
                                  <PaystackButton
                                    text="Make Payment"
                                    class="payButton"
                                    callback={callback}
                                    close={close}
                                    disabled={true}
                                    embed={true}
                                    reference={referenceId}
                                    email={email}
                                    amount={amount * 100}
                                    paystackkey={publicKey}
                                    tag="button"
                                  />
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




      {redirect()}

      <Footer></Footer>
    </Fragment>
  );
};

export default Paystack;
