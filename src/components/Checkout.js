import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import {
  getBraintreeClientToken,
  processPayment,
  createOrder,
} from '../core/apiCore';
import Card from './Card';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import 'braintree-web';
import DropIn from 'braintree-web-drop-in-react';
import { emptyCart } from './CartHelpers';
import PaystackButton from 'react-paystack';

const Checkout = ({ products, product }) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: '',
    instance: {},
    address: '',
  });

  console.log(product._id);

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const email = isAuthenticated() && isAuthenticated().user.email;
  const name = isAuthenticated() && isAuthenticated().user.name;
  const address = isAuthenticated() && isAuthenticated().user.address;
  const telephone = isAuthenticated() && isAuthenticated().user.telephone;
  const city = isAuthenticated() && isAuthenticated().user.city;
  const sex = isAuthenticated() && isAuthenticated().user.sex;
  const token = isAuthenticated() && isAuthenticated().token;

  console.log(address)

  const getToken = (userId, token, email) => {
    getBraintreeClientToken(userId, token).then((data) => {
      if (data.error) {
        setData({ ...data, error: data.erro });
      } else {
        setData({ clientToken: data.clientToken });
      }
    });
  };

  const referenceId = new Date().getTime();

  const order = () => {
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
      product: product._id,
      referenceId,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
      }
    });
  };

  const publicKey = 'pk_test_3c713de9a71c00fa72ed7193436212f5ec0b08a5';

  let callback = (response) => {
    if (response.message === 'Success') {
      console.log(response.message);
      {
        order();
      }
      console.log("done");
      emptyCart();
    }
  };

  let close = () => {
    console.log('Payment closed');
  };

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

  const showDropIn = () => (
    <div onBlur={() => setData({ ...data, error: '' })}>
      <div>
        {data.clientToken !== null && products.length > 0 ? (
          <div>
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
                amount={1000 * 100}
                paystackkey={publicKey}
                tag="button"
              />
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
      <h2> Total: ${getTotal()}</h2>
      {showLoading(data.loading)}
      {showSuccess(data.success)}
      {showError(data.error)}
      {showCheckout()}
    </div>
  );
};

export default Checkout;
