import { Fragment, useState, useEffect } from 'react';
import ShowImage from './ShowImage';


const Card = ({ product }) => {
  let des = product.description.substring(0, 300);
  let strippedString = des.replace(/(<([^>]+)>)/gi, '');
  return (
    <div className="grid-inner row align-items-center no-gutters p-4">
      <ShowImage item={product} url="product" />
      <div className="col-md-8 pl-md-4">
        <div className="entry-title title-sm">
          <h2>
            <a href="#">{product.name}</a>
          </h2>
        </div>
        <div className="entry-meta">
          <ul>
            <li>
              <span className="badge badge-warning px-1 py-1">
                {product.category.name}
              </span>
            </li>
          </ul>
        </div>
        <div className="entry-content">
          <div
            dangerouslySetInnerHTML={{
              __html: des,
            }}
          ></div>
          <br /> <br />{' '}
          <a
            href={`/billing/${product._id}`}
            className="btn btn-secondary"
          >
            Register
          </a>{' '}
          <a
            href={`/training-details/${product._id}`}
            className="btn btn-danger"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;