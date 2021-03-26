import React, { Fragment, useState, useEffect } from 'react';
import {  getProjectGallery } from '../user/ApiAdmin';

const GalleryCount = ({ product }) => {
  const [values, setValues] = useState([]);
  const [error, setError] = useState(false);

  const init = (projectId) => {
    getProjectGallery(projectId).then((data) => {
      if (data.error) {
       setError(data.error);
      } else {
        setValues(data);
      }
    });
  };

  useEffect(() => {
    init(product);
  }, []);

  return (
    <div id="top-cart" class="header-misc-icon d-none d-sm-block">
      <a href={`/gallery/${product._id}`}>
        <i class="i-rounded i-bordered icon-film"></i>

        <span class="top-cart-number">
          {' '}
          <p>{values.length}</p>{' '}
        </span>
      </a>
    </div>
  );
};

export default GalleryCount;
