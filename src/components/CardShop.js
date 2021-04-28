import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import ShowImage from '../components/ShowImage copy';
import moment from 'moment';
import {addItem,updateItem ,removeItem} from './CartHelpers';



const CardShop = ({product, showViewProductButton = true , showAddToCartButton = true, cartUpdate = false , showRemoveProductButton =false,  setRun = f => f,  run = undefined }) => {


    
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);


    const showViewButton = (showViewProductButton) => {
        return (
            showViewProductButton && (
                <Link to="#" className="mr-2">
                 <button className="btn btn-outline-primary mt-2 mb-2 mr-2"> View Product</button>
                </Link>
            )
        )
    }

    const addToCart = () => {
        addItem(product, () => {

            setRedirect(true)

        });
    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />
        }
    };

    const showAddToCart = (showAddToCartButton) => {
         
        return (
          showAddToCartButton && (
            // <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2">Add to cart</button>
            <a onClick={addToCart} className="buy-btn">
              <i className="icon-shopping-cart1"></i>
            </a>
          )
        );
    };



    const showRemoveButton = showRemoveProductButton => {
        return (
          showRemoveProductButton && (
            // <button
            //   onClick={() => {removeItem(product._id);setRun(!run);}}
            //   className="btn btn-outline-danger mt-2 mb-2"
            // >
            //   Remove Product
            // </button>
            <a
              onClick={() => {
                removeItem(product._id);
                setRun(!run);
              }}
              className="buy-btn"
            >
              <i className="icon-trash-alt"></i>
            </a>
          )
        );
      };



    const handleChange = (productId) => event => {
        setRun(!run); // run useEffect in parent Cart
        setCount(event.target.value < 1 ? 1 : event.target.value)
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value)
        }
    }

    const showStock = (quantity) => {
        return quantity > 0 ? (
        <span className="badge badge-primary badge-pill">In Stock</span>
        ) :(
            <span className="badge badge-primary badge-pill">out of Stock</span>
        ) ;
    };

    const showCartUpdateOptions = cartUpdate => {
        return cartUpdate &&
         <div>

             <div className="input-group mb-3">
                 <div className="input-group-prepend">
                     <span className="input-group-text">Adjust Quantity</span>
                 </div>
                 <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
             </div>

        </div>;
    };



    return (
      <div className="col-md-10">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img">
            {shouldRedirect(redirect)}
            <ShowImage item={product} url="product" />
          </div>
          <div className="wsk-cp-text">
            <div className="category">
              <span>{product.category && product.category.name}</span>
            </div>
            <div className="title-product">
              <h3>{product.name}</h3>
            </div>
            <div className="description-prod">
              <div
                dangerouslySetInnerHTML={{
                  __html: product.description.substring(0, 100),
                }}
              ></div>
            </div>
            {showStock(1)}
            <div className="card-footer">
              <div className="wcf-left">
                <span className="price">
                  ₦{product.price.toLocaleString('en-US')}
                </span>
              </div>

              <div className="wcf-right">
                {showAddToCart(showAddToCartButton)}
                {showRemoveButton(showRemoveProductButton)}
              </div>
            </div>
            {showCartUpdateOptions(cartUpdate)}
          </div>
        </div>
      </div>
    );
};

export default CardShop;