import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { read, listRelated, getProjectGallery } from './apiCore';
import { API } from '../config';

const Training_Details = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  const [gallery, setGallery] = useState([]);
  

   const initProjectGallery = (projectId) => {
     getProjectGallery(projectId).then((data) => {
       if (data.error) {
         setError(data.error);
       } else {
         setGallery(data);
       }
     });
   };

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related product
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    // get productId from the url
    const productId = props.match.params.trainId;
    loadSingleProduct(productId);
     initProjectGallery(productId);
  }, [props]);

  return (
    <Fragment>
      <Header></Header>
      <section id="page-title">
        <div className="container clearfix">
          <h1>{product && product.name}</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Events</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Event Single
            </li>
          </ol>
        </div>
      </section>

      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div className="row gutter-40 col-mb-80">
              <div className="postcontent col-lg-9">
                <div className="single-event">
                  <div className="row col-mb-50 mb-0">
                    <div className="col-md-5 col-lg-4 order-md-last">
                      <div className="card event-meta mb-3">
                        <div className="card-header">
                          <h5 className="mb-0">Event Info:</h5>
                        </div>
                        <div className="card-body">
                          <ul className="iconlist mb-0">
                            <li>
                              <i className="icon-calendar3"></i>{' '}
                              {product.timeLine}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <a
                        href={`/billing/${product._id}`}
                        className="btn btn-success btn-block btn-lg"
                      >
                        Register
                      </a>
                    </div>

                    <div className="col-md-7 col-lg-8">
                      <h3>Details</h3>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="row col-mb-50">
                    <div className="w-100"></div>

                    <div className="col-md-5">
                      <h4>Gallery</h4>

                      {/* <!-- Events Single Gallery Thumbs
								============================================= --> */}
                      <div
                        className="masonry-thumbs grid-container grid-4"
                        data-lightbox="gallery"
                      >
                        {gallery.map((g, i) => {
                          return (
                            <a
                              className="grid-item"
                              href={`${API}/gallery/file/${g._id}`}
                              data-lightbox="gallery-item"
                            >
                              <img
                                src={`${API}/gallery/file/${g._id}`}
                                alt={g._id}
                              />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar col-lg-3">
                <div className="sidebar-widgets-wrap">
                  <div className="widget clearfix">
                    <h4>Upcoming Events</h4>
                    <div
                      className="posts-sm row col-mb-30"
                      id="post-list-sidebar"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </Fragment>
  );
};

export default Training_Details;
