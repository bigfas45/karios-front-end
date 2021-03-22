import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getOrder } from './apiCore';
import PaystackButton from 'react-paystack';
import { Link, Redirect, useHistory } from 'react-router-dom';

const Paystack = (props) => {
  let history = useHistory();
  const [values, setValues] = useState([]);
  const [error, setError] = useState('');
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

  var referenceId;

  useEffect(() => {
     referenceId = props.match.params.referenceId;
    loadOrder(referenceId);
  }, [props]);

  const callback = (response) => {
    console.log(response); // card charged successfully, get reference here
  };

  const close = () => {
    console.log('Payment closed');
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
                          let amount = order.product.price
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
                                    callback={callback()}
                                    close={close()}
                                    disabled={true}
                                    embed={true}
                                    reference={referenceId}
                                    email={email}
                                    amount={1000 * amount}
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

      <Footer></Footer>
    </Fragment>
  );
};

export default Paystack;
