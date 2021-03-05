import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getOrder } from './apiCore';
import { PaystackButton } from 'react-paystack';
import { Link, Redirect, useHistory } from 'react-router-dom';

const Paystack = (props) => {
  let history = useHistory();
  const [values, setValues] = useState([]);
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

  useEffect(() => {
    const referenceId = props.match.params.referenceId;
    loadOrder(referenceId);
  }, [props]);

  const componentProps = {
    email: 'afasina@nasdng.com',
    amount: 1000 * 100,

    referenceId: 1614724909836,
    metadata: {
      name: 'lastname',
      phone: '0902626726728',
    },
    publicKey,
    text: 'Pay',
    className: 'class="btn btn-secondary btn-block btn-lg"',
    onSuccess: (data) => {
       return history.push('/');
      // return <Redirect to="/" />;
    },

    onClose: () => alert("Wait! Don't leave :("),
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
                          return (
                            <Fragment>
                              <h3 key={i} class="mb-0">
                                I {order.lastname} would like to pay the sum of{' '}
                                {order.product.price} for the training (
                                {order.product.name}), so please send me the
                                Confirmation Message on my {order.email}
                              </h3>
                            </Fragment>
                          );
                        })}
                        <div class="col-12">
                          <PaystackButton {...componentProps} />
                        </div>
                      </div>
                      {/* {JSON.stringify(values)} */}
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
