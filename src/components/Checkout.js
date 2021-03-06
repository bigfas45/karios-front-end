import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import {
  getBraintreeClientToken,
  processPayment,
  createOrder,
  processPaymentOrder,
  getOrderMail,
} from '../core/apiCore';
import Card from './Card';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import 'braintree-web';
import DropIn from 'braintree-web-drop-in-react';
import { emptyCart } from './CartHelpers';

import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const Checkout = ({ products, product }) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: '',
    instance: {},
    address: '',
  });

  const [orderId, setOrderId] = useState([]);
  const [values, setValues] = useState([]);
  const [mail, setMail] = useState([]);

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const email = isAuthenticated() && isAuthenticated().user.email;
  const name = isAuthenticated() && isAuthenticated().user.name;
  const address = isAuthenticated() && isAuthenticated().user.address;
  const telephone = isAuthenticated() && isAuthenticated().user.telephone;
  const city = isAuthenticated() && isAuthenticated().user.city;
  const sex = isAuthenticated() && isAuthenticated().user.sex;
  const token = isAuthenticated() && isAuthenticated().token;

  console.log(address);

  const getToken = (userId, token, email) => {
    getBraintreeClientToken(userId, token).then((data) => {
      if (data.error) {
        setData({ ...data, error: data.error });
      } else {
        setData({ clientToken: data.clientToken });
      }
    });
  };

  const referenceId = new Date().getTime();

  useEffect(() => {
    getToken(userId, token);
    // PID();
  }, []);

  const getTotal = () => {
    return products.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };
  const showCheckout = () => {
    return isAuthenticated() ? (
      <div>{showDropIn()}</div>
    ) : (
      <a href="/signin">
        <button className="btn btn-primary">Signin to check out</button>
      </a>
    );
  };

  const config = {
    public_key: 'FLWPUBK-34b9f33c4ada2e22ab576be11f087c63-X',
    tx_ref: referenceId,
    amount: getTotal(),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    redirect_url: `https://kairosng.com/thankyou/shop/${product._id}/${referenceId}`,
    customer: {
      email: email,
      phonenumber: telephone,
      name: name,
    },
    customizations: {
      title: product.name,
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const showDropIn = () => (
    <div onBlur={() => setData({ ...data, error: '' })}>
      <div>
        {data.clientToken !== null && products.length > 0 ? (
          <div>
            <p>
              <button
                class="btn btn-primary btn-lg btn-block"
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
                }}
              >
                Pay
              </button>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );

  const showError = (error) => (
    <div
      className="alert alert-danger"
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );

  const showSuccess = (success) => (
    <div
      className="alert alert-info"
      style={{ display: success ? '' : 'none' }}
    >
      Thanks! your payment was successful
    </div>
  );

  const showLoading = (loading) => loading && <h2>Loading...</h2>;

  return (
    <div>
      <h2> Total: ???{getTotal().toLocaleString('en-US')}</h2>
      {showLoading(data.loading)}
      {showSuccess(data.success)}
      {showError(data.error)}
      {showCheckout()}
    </div>
  );
};

export default Checkout;
