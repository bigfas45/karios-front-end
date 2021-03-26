import React, { Fragment, useState, useEffect } from 'react';
 import { getProducts, getProjectOrders } from '../user/ApiAdmin';


const OrderCount = ({ product }) => {

  const [values, setValues] = useState([]);
  const [error, setError] = useState(false);


   const loadProductsOrders = (product) => {
     getProjectOrders(product).then((data) => {
       if (data.error) {
         setError(data.error);
       } else {
         setValues(data);
       }
     });
   };

   useEffect(() => {
     loadProductsOrders(product);
   }, []);

  return (
    <div id="top-cart" class="header-misc-icon d-none d-sm-block">
      <a href={`/orders/${product}`}>
        <i class="i-rounded i-bordered icon-line-shopping-cart"></i>
       
          <span class="top-cart-number">
            {' '}
            <p>{values.length}</p>{' '}
          </span>
       
      </a>
    </div>
  );
};

export default OrderCount;