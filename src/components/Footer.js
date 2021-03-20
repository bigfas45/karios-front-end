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
  const { name, email, message, error, success } = values;
  const handleChnage = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    contactForm({ name, email, message }).then((data) => {
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
    });
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
    // <footer id="footer" className="dark">
    //   <div className="container">
    //     {/* <!-- Footer Widgets
    // 		============================================= --> */}
    //     <div className="footer-widgets-wrap">
    //       <div className="row col-mb-50">
    //         <div className="col-md-6 col-lg-4">
    //           <div className="widget clearfix">
    //             <img
    //               src="images/logo-3_1.png"
    //               alt="Image"
    //               className="footer-logo"
    //             />

    //             <p>
    //               To unlock opportunities - enabling individuals and
    //               organizations realize their full potentials.
    //             </p>

    //             <div
    //               style={{
    //                 background:
    //                   "url('images/world-map.png') no-repeat center center",
    //                 backgroundSize: '100%',
    //               }}
    //             >
    //               <address>
    //                 <strong>Headquarters:</strong>
    //                 Block A, 1st floor, Lofty Heights Office Complex, Marwa Bus
    //                 stop, Lekki-epe Express way, Lekki phase 1, Lagos state.
    //               </address>
    //               <abbr title="Phone Number">
    //                 <strong>Phone:</strong>
    //               </abbr>{' '}
    //               +234 908 788 8862,
    //               <br />
    //               {/* <abbr title="Fax">
    //                 <strong>Fax:</strong>
    //               </abbr>{' '} */}
    //               +234 (0)1 630 6765
    //               <br />
    //               <abbr title="Email Address">
    //                 <strong>Email:</strong>
    //               </abbr>{' '}
    //               info@kairosng.com
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-md-6 col-lg-4">
    //           <div className="widget clearfix">
    //             <h4>Client Testimonials</h4>

    //             <div
    //               className="fslider testimonial no-image bg-transparent border-0 shadow-none p-0"
    //               data-animation="slide"
    //               data-arrows="false"
    //             >
    //               <div className="flexslider">
    //                 <div className="slider-wrap">
    //                   <div className="slide">
    //                     <div className="testi-image">
    //                       <a href="#">
    //                         <img
    //                           src="images/testimonials/3.jpg"
    //                           alt="Customer Testimonails"
    //                         />
    //                       </a>
    //                     </div>
    //                     <div className="testi-content">
    //                       <p>
    //                         Similique fugit repellendus expedita excepturi iure
    //                         perferendis provident quia eaque. Repellendus, vero
    //                         numquam?
    //                       </p>
    //                       <div className="testi-meta">
    //                         Steve Jobs
    //                         <span>Apple Inc.</span>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="slide">
    //                     <div className="testi-image">
    //                       <a href="#">
    //                         <img
    //                           src="images/testimonials/2.jpg"
    //                           alt="Customer Testimonails"
    //                         />
    //                       </a>
    //                     </div>
    //                     <div className="testi-content">
    //                       <p>
    //                         Natus voluptatum enim quod necessitatibus quis
    //                         expedita harum provident eos obcaecati id culpa
    //                         corporis molestias.
    //                       </p>
    //                       <div className="testi-meta">
    //                         Collis Ta'eed
    //                         <span>Envato Inc.</span>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="slide">
    //                     <div className="testi-image">
    //                       <a href="#">
    //                         <img
    //                           src="images/testimonials/1.jpg"
    //                           alt="Customer Testimonails"
    //                         />
    //                       </a>
    //                     </div>
    //                     <div className="testi-content">
    //                       <p>
    //                         Incidunt deleniti blanditiis quas aperiam recusandae
    //                         consequatur ullam quibusdam cum libero illo rerum!
    //                       </p>
    //                       <div className="testi-meta">
    //                         John Doe
    //                         <span>XYZ Inc.</span>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="widget clearfix">
    //             <a href="#" className="social-icon si-small si-rounded si-facebook">
    //               <i className="icon-facebook"></i>
    //               <i className="icon-facebook"></i>
    //             </a>

    //             <a href="#" className="social-icon si-small si-rounded si-twitter">
    //               <i className="icon-twitter"></i>
    //               <i className="icon-twitter"></i>
    //             </a>

    //             <a href="#" className="social-icon si-small si-rounded si-gplus">
    //               <i className="icon-gplus"></i>
    //               <i className="icon-gplus"></i>
    //             </a>

    //             <a
    //               href="#"
    //               className="social-icon si-small si-rounded si-pinterest"
    //             >
    //               <i className="icon-pinterest"></i>
    //               <i className="icon-pinterest"></i>
    //             </a>

    //             <a href="#" className="social-icon si-small si-rounded si-vimeo">
    //               <i className="icon-vimeo"></i>
    //               <i className="icon-vimeo"></i>
    //             </a>

    //             <a href="#" className="social-icon si-small si-rounded si-github">
    //               <i className="icon-github"></i>
    //               <i className="icon-github"></i>
    //             </a>

    //             <a href="#" className="social-icon si-small si-rounded si-yahoo">
    //               <i className="icon-yahoo"></i>
    //               <i className="icon-yahoo"></i>
    //             </a>

    //             <a href="#" className="social-icon si-small si-rounded si-linkedin">
    //               <i className="icon-linkedin"></i>
    //               <i className="icon-linkedin"></i>
    //             </a>
    //           </div>
    //         </div>

    //         <div className="col-md-6 col-lg-4">
    //           <div className="widget quick-contact-widget form-widget clearfix">
    //             <h4>Send Message</h4>

    //             <div className="form-result"></div>

    //             <form>
    //               <div className="form-process">
    //                 <div className="css3-spinner">
    //                   <div className="css3-spinner-scaler"></div>
    //                 </div>
    //               </div>
    //               {showLoading()}
    //               <div className="input-group mx-auto">
    //                 <div className="input-group-prepend">
    //                   <div className="input-group-text">
    //                     <i className="icon-user"></i>
    //                   </div>
    //                 </div>
    //                 <input
    //                   type="text"
    //                   className="required form-control"
    //                   id="quick-contact-form-name"
    //                   onChange={handleChnage('name')}
    //                   value={name}
    //                   placeholder="Full Name"
    //                 />
    //               </div>
    //               <div className="input-group mx-auto">
    //                 <div className="input-group-prepend">
    //                   <div className="input-group-text">
    //                     <i className="icon-email2"></i>
    //                   </div>
    //                 </div>
    //                 <input
    //                   type="text"
    //                   className="required form-control email"
    //                   onChange={handleChnage('email')}
    //                   value={email}
    //                   placeholder="Email Address"
    //                 />
    //               </div>
    //               <textarea
    //                 className="required form-control input-block-level short-textarea"
    //                 id="quick-contact-form-message"
    //                 name="quick-contact-form-message"
    //                 rows="4"
    //                 cols="30"
    //                 onChange={handleChnage('message')}
    //                 placeholder="Message"
    //                 value={message}
    //               ></textarea>
    //               <input
    //                 type="text"
    //                 className="d-none"
    //                 id="quick-contact-form-botcheck"
    //                 name="quick-contact-form-botcheck"
    //                 value=""
    //               />
    //               <input
    //                 type="hidden"
    //                 name="prefix"
    //                 value="quick-contact-form-"
    //               />
    //               <button
    //                 onClick={clickSubmit}
    //                 className="btn btn-danger m-0"
    //                 value="submit"
    //               >
    //                 Send Email
    //               </button>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* <!-- Copyrights
    // 	============================================= --> */}
    //   <div id="copyrights">
    //     <div className="container">
    //       <div className="row justify-content-between">
    //         <div className="col-12 col-lg-auto text-center text-lg-left">
    //           <p className="mb-3">
    //             Copyrights &copy; 2020 All Rights Reserved by Kairos Integrated
    //             Concepts Limited .
    //           </p>
    //         </div>

    //         <div className="col-12 col-lg-auto text-center text-lg-right">
    //           <div className="copyrights-menu copyright-links mb-0">
    //             <a href="/">Home</a>/<a href="/about">About</a>/
    //             <a href="/services">Services</a>/
    //             <a href="#">Portfolio</a>/<a href="#">FAQs</a>/
    //             <a href="/contactus">Contact</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer id="footer" className="dark">
      <div id="copyrights">
        <div className="container">
          <div className="row col-mb-30">
            <div className="col-md-6 text-center text-md-left">
              Copyrights &copy; 2021 All Rights Reserved by Kairos Integrated
              Concepts
              <br />
              <div className="copyright-links">
                <a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a>
              </div>
            </div>

            <div className="col-md-6 text-center text-md-right">
              <div className="d-flex justify-content-center justify-content-md-end">
                <a
                  href="#"
                  className="social-icon si-small si-borderless si-facebook"
                >
                  <i className="icon-facebook"></i>
                  <i className="icon-facebook"></i>
                </a>

                <a
                  href="#"
                  className="social-icon si-small si-borderless si-twitter"
                >
                  <i className="icon-twitter"></i>
                  <i className="icon-twitter"></i>
                </a>

                <a
                  href="#"
                  className="social-icon si-small si-borderless si-gplus"
                >
                  <i className="icon-gplus"></i>
                  <i className="icon-gplus"></i>
                </a>

                <a
                  href="#"
                  className="social-icon si-small si-borderless si-pinterest"
                >
                  <i className="icon-pinterest"></i>
                  <i className="icon-pinterest"></i>
                </a>

                <a
                  href="#"
                  className="social-icon si-small si-borderless si-vimeo"
                >
                  <i className="icon-vimeo"></i>
                  <i className="icon-vimeo"></i>
                </a>

                <a
                  href="#"
                  className="social-icon si-small si-borderless si-github"
                >
                  <i className="icon-github"></i>
                  <i className="icon-github"></i>
                </a>

                <a
                  href="#"
                  className="social-icon si-small si-borderless si-yahoo"
                >
                  <i className="icon-yahoo"></i>
                  <i className="icon-yahoo"></i>
                </a>

                <a
                  href="#"
                  className="social-icon si-small si-borderless si-linkedin"
                >
                  <i className="icon-linkedin"></i>
                  <i className="icon-linkedin"></i>
                </a>
              </div>
              <div className="clear"></div>
              <i className="icon-envelope2"></i> info@kairosng.com{' '}
              <span className="middot">&middot;</span>{' '}
              <i className="icon-headphones"></i> 01 630 6765,{' '}
              <span className="middot">&middot;</span>{' '}
              <i className="icon-skype2"></i> KariosOnSkype
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
