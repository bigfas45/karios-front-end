import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { contactForm } from '../core/apiCore';
import swal from 'sweetalert';

const Footer = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    error: '',
    success: '',
  });
  const {
    name,
    email,
    message,
    error,
    success,
  } = values;
  const handleChnage = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    contactForm({ name, email,  message }).then(
      (data) => {
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            success: false,
            pop: false,
          });
        } else {
          setValues({
            ...values,
            name: '',
            email: '',
            message: '',
            error: false,
            success: true,
          });
        }
      }
    );
  };
  const dashboarddashboard = (title, text) => {
    swal({
      title: ` ${title}`,
      text: `${text}`,
      icon: 'error',
    });
  };

  const dashboarddashboard2 = (title, text) => {
    swal({
      title: ` ${title}`,
      text: `${text}`,
      icon: 'success',
    });
  };

  const showLoading = () => {
    if (success) {
      return dashboarddashboard2(
        'Email Added Succesfully',
        `Your message has been sent, we will get in touch shortly. `
      );
    }
    if (error) {
      return dashboarddashboard('An Error Occured', error);
    }
  };
  return (
    <footer id="footer" class="dark">
      <div class="container">
        {/* <!-- Footer Widgets
				============================================= --> */}
        <div class="footer-widgets-wrap">
          <div class="row col-mb-50">
            <div class="col-md-6 col-lg-4">
              <div class="widget clearfix">
                <img
                  src="images/logo-3_1.png"
                  alt="Image"
                  class="footer-logo"
                />

                <p>
                  To unlock opportunities - enabling individuals and
                  organizations realize their full potentials.
                </p>

                <div
                  style={{
                    background:
                      "url('images/world-map.png') no-repeat center center",
                    backgroundSize: '100%',
                  }}
                >
                  <address>
                    <strong>Headquarters:</strong>
                    Block A, 1st floor, Lofty Heights Office Complex, Marwa Bus
                    stop, Lekki-epe Express way, Lekki phase 1, Lagos state.
                  </address>
                  <abbr title="Phone Number">
                    <strong>Phone:</strong>
                  </abbr>{' '}
                  +234 908 788 8862,
                  <br />
                  {/* <abbr title="Fax">
                    <strong>Fax:</strong>
                  </abbr>{' '} */}
                  +234 (0)1 630 6765
                  <br />
                  <abbr title="Email Address">
                    <strong>Email:</strong>
                  </abbr>{' '}
                  info@kairosng.com
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="widget clearfix">
                <h4>Client Testimonials</h4>

                <div
                  class="fslider testimonial no-image bg-transparent border-0 shadow-none p-0"
                  data-animation="slide"
                  data-arrows="false"
                >
                  <div class="flexslider">
                    <div class="slider-wrap">
                      <div class="slide">
                        <div class="testi-image">
                          <a href="#">
                            <img
                              src="images/testimonials/3.jpg"
                              alt="Customer Testimonails"
                            />
                          </a>
                        </div>
                        <div class="testi-content">
                          <p>
                            Similique fugit repellendus expedita excepturi iure
                            perferendis provident quia eaque. Repellendus, vero
                            numquam?
                          </p>
                          <div class="testi-meta">
                            Steve Jobs
                            <span>Apple Inc.</span>
                          </div>
                        </div>
                      </div>
                      <div class="slide">
                        <div class="testi-image">
                          <a href="#">
                            <img
                              src="images/testimonials/2.jpg"
                              alt="Customer Testimonails"
                            />
                          </a>
                        </div>
                        <div class="testi-content">
                          <p>
                            Natus voluptatum enim quod necessitatibus quis
                            expedita harum provident eos obcaecati id culpa
                            corporis molestias.
                          </p>
                          <div class="testi-meta">
                            Collis Ta'eed
                            <span>Envato Inc.</span>
                          </div>
                        </div>
                      </div>
                      <div class="slide">
                        <div class="testi-image">
                          <a href="#">
                            <img
                              src="images/testimonials/1.jpg"
                              alt="Customer Testimonails"
                            />
                          </a>
                        </div>
                        <div class="testi-content">
                          <p>
                            Incidunt deleniti blanditiis quas aperiam recusandae
                            consequatur ullam quibusdam cum libero illo rerum!
                          </p>
                          <div class="testi-meta">
                            John Doe
                            <span>XYZ Inc.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="widget clearfix">
                <a href="#" class="social-icon si-small si-rounded si-facebook">
                  <i class="icon-facebook"></i>
                  <i class="icon-facebook"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-twitter">
                  <i class="icon-twitter"></i>
                  <i class="icon-twitter"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-gplus">
                  <i class="icon-gplus"></i>
                  <i class="icon-gplus"></i>
                </a>

                <a
                  href="#"
                  class="social-icon si-small si-rounded si-pinterest"
                >
                  <i class="icon-pinterest"></i>
                  <i class="icon-pinterest"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-vimeo">
                  <i class="icon-vimeo"></i>
                  <i class="icon-vimeo"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-github">
                  <i class="icon-github"></i>
                  <i class="icon-github"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-yahoo">
                  <i class="icon-yahoo"></i>
                  <i class="icon-yahoo"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-linkedin">
                  <i class="icon-linkedin"></i>
                  <i class="icon-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="widget quick-contact-widget form-widget clearfix">
                <h4>Send Message</h4>

                <div class="form-result"></div>

                <form>
                  <div class="form-process">
                    <div class="css3-spinner">
                      <div class="css3-spinner-scaler"></div>
                    </div>
                  </div>
                  {showLoading()}
                  <div class="input-group mx-auto">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="icon-user"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="required form-control"
                      id="quick-contact-form-name"
                      onChange={handleChnage('name')}
                      value={name}
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="input-group mx-auto">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="icon-email2"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="required form-control email"
                      onChange={handleChnage('email')}
                      value={email}
                      placeholder="Email Address"
                    />
                  </div>
                  <textarea
                    class="required form-control input-block-level short-textarea"
                    id="quick-contact-form-message"
                    name="quick-contact-form-message"
                    rows="4"
                    cols="30"
                    onChange={handleChnage('message')}
                    placeholder="Message"
                    value={message}
                  ></textarea>
                  <input
                    type="text"
                    class="d-none"
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
                    onClick={clickSubmit}
                    class="btn btn-danger m-0"
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

      {/* <!-- Copyrights
			============================================= --> */}
      <div id="copyrights">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-12 col-lg-auto text-center text-lg-left">
              <p class="mb-3">
                Copyrights &copy; 2020 All Rights Reserved by Kairos Integrated
                Concepts Limited .
              </p>
            </div>

            <div class="col-12 col-lg-auto text-center text-lg-right">
              <div class="copyrights-menu copyright-links mb-0">
                <a href="/">Home</a>/<a href="/about">About</a>/
                <a href="/services">Services</a>/
                <a href="#">Portfolio</a>/<a href="#">FAQs</a>/
                <a href="/contactus">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
