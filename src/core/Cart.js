import React, {useState, useEffect, Fragment} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCart } from '../components/CartHelpers';
import Card from '../components/CardShop';
import { Link } from 'react-router-dom';
import Checkout from '../components/Checkout';



const Cart = () =>{
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);


    useEffect(() => {
        setItems(getCart());
    }, [run]);


    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`}</h2>
                <hr />
                {items.map((product, i) => (
                <Card key={i} product={product} showAddToCartButton={false} cartUpdate={true} showRemoveProductButton={true} setRun={setRun}
                run={run} />
                ))}
            </div>
        )
    }

    const noItmesMessage = () => (
        <h2>Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link> </h2>
    )



    return (
      <Fragment>
        <Header></Header>
        <div id="page-menu">
          <div id="page-menu-wrap">
            <div className="container">
              <div className="page-menu-row">
                <div className="page-menu-title">
                  Contact <span>Options</span>
                </div>

                <nav className="page-menu-nav">
                  <ul className="page-menu-container">
                    <li className="page-menu-item current">
                      <a href="/">
                        <div>Home</div>
                      </a>
                    </li>
                  </ul>
                </nav>

                <div id="page-menu-trigger">
                  <i className="icon-reorder"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {items.length > 0 ? showItems(items) : noItmesMessage()}
          </div>

          <div className="col-md-4" style={{margin: "2px"}}>
            <h2 className="mb-4">Your cart summary </h2>
            <hr />
            {items.map((product, i) => (
              <Checkout products={items} product={product} />
            ))}
          </div>
        </div>
      </Fragment>
    );



}

export default Cart
