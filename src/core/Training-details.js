import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { read, listRelated } from './apiCore';

const Training_Details = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

 

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
                        <a
                          className="grid-item"
                          href="images/events/1.jpg"
                          data-lightbox="gallery-item"
                        >
                          <img
                            src="../images/events/thumbs/1.jpg"
                            alt="Gallery Thumb 1"
                          />
                        </a>
                        <a
                          className="grid-item"
                          href="images/events/2.jpg"
                          data-lightbox="gallery-item"
                        >
                          <img
                            src="../images/events/thumbs/2.jpg"
                            alt="Gallery Thumb 2"
                          />
                        </a>
                        <a
                          className="grid-item"
                          href="images/events/3.jpg"
                          data-lightbox="gallery-item"
                        >
                          <img
                            src="../images/events/thumbs/3.jpg"
                            alt="Gallery Thumb 3"
                          />
                        </a>
                        <a
                          className="grid-item"
                          href="images/events/4.jpg"
                          data-lightbox="gallery-item"
                        >
                          <img
                            src="../images/events/thumbs/4.jpg"
                            alt="Gallery Thumb 4"
                          />
                        </a>
                        <a
                          className="grid-item"
                          href="images/events/5.jpg"
                          data-lightbox="gallery-item"
                        >
                          <img
                            src="../images/events/thumbs/5.jpg"
                            alt="Gallery Thumb 5"
                          />
                        </a>
                        <a
                          className="grid-item"
                          href="images/events/6.jpg"
                          data-lightbox="gallery-item"
                        >
                          <img
                            src="../images/events/thumbs/6.jpg"
                            alt="Gallery Thumb 6"
                          />
                        </a>
                        <a
                          className="grid-item"
                          href="images/events/7.jpg"
                          data-lightbox="gallery-item"
                        >
                          <img
                            src="../images/events/thumbs/7.jpg"
                            alt="Gallery Thumb 7"
                          />
                        </a>
                        <a
                          className="grid-item"
                          href="images/events/8.jpg"
                          data-lightbox="gallery-item"
                        >
                          <img
                            src="../images/events/thumbs/8.jpg"
                            alt="Gallery Thumb 8"
                          />
                        </a>
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

                  <div className="widget quick-contact-widget form-widget clearfix">
                    <h4>Quick Contact</h4>
                    <div className="form-result"></div>
                    <form
                      id="quick-contact-form"
                      name="quick-contact-form"
                      action="http://themes.semicolonweb.com/html/canvas/include/form.php"
                      method="post"
                      className="quick-contact-form mb-0"
                    >
                      <div className="form-process">
                        <div className="css3-spinner">
                          <div className="css3-spinner-scaler"></div>
                        </div>
                      </div>

                      <input
                        type="text"
                        className="required sm-form-control input-block-level"
                        id="quick-contact-form-name"
                        name="quick-contact-form-name"
                        value=""
                        placeholder="Full Name"
                      />
                      <input
                        type="text"
                        className="required sm-form-control email input-block-level"
                        id="quick-contact-form-email"
                        name="quick-contact-form-email"
                        value=""
                        placeholder="Email Address"
                      />
                      <textarea
                        className="required sm-form-control input-block-level short-textarea"
                        id="quick-contact-form-message"
                        name="quick-contact-form-message"
                        rows="4"
                        cols="30"
                        placeholder="Message"
                      ></textarea>
                      <input
                        type="text"
                        className="d-none"
                        id="quick-contact-form-botcheck"
                        name="quick-contact-form-botcheck"
                        value=""
                      />
                      <input
                        type="hidden"
                        name="prefix"
                        value="quick-contact-form-"
                      />
                      <button
                        type="submit"
                        id="quick-contact-form-submit"
                        name="quick-contact-form-submit"
                        className="button button-small button-3d m-0"
                        value="submit"
                      >
                        Send Email
                      </button>
                    </form>
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
