import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { contactForm, contactEmail } from '../core/apiCore';
import swal from 'sweetalert';

const Contact = () => {
  const [mail, setMail] = useState([]);
  const [error2, setEror2] = useState([]);

  const [values, setValues] = useState({
    name: '',
    telephone: '',
    email: '',
    message: '',
    subject: '',
    services: '',
    error: '',
    success: '',
  });
  const { name, email, telephone, message, subject, services, error, success } =
    values;
  const handleChnage = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const contactSendMail = (contactId) => {
    // ref = referenceId;
    contactEmail(contactId).then((data) => {
      if (data.error) {
        setEror2(data.error);
      } else {
        setMail(data);
      }
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    contactForm({ name, email, telephone, message, subject, services }).then(
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
            telephone: '',
            email: '',
            message: '',
            subject: '',
            services: '',
            error: false,
            success: true,
          });

          contactSendMail(data.contactForm._id);
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
    <Fragment>
      <Header></Header>
      {/* <section id="page-title">
        <div className="container clearfix">
          <h1>Contact</h1>
          <span>Get in Touch with Us</span>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact
            </li>
          </ol>
        </div>
      </section> */}

      {/* <!-- Page Sub Menu
		============================================= --> */}
      {showLoading()}
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

      {/* <!-- Contact Form & Map Overlay Section
		============================================= --> */}
      <section id="map-overlay">
        <div className="container">
          <div className="row">
            {/* <!-- Contact Form Overlay
					============================================= --> */}
            <div className="contact-form-overlay col-md-8 offset-md-2 p-5">
              <div className="fancy-title title-border">
                <h3>Send us an Email</h3>
              </div>

              <div className="form-widget">
                <div className="form-result"></div>

                {/* <!-- Contact Form
							============================================= --> */}
                <form className="row mb-0" id="template-contactform">
                  <div className="col-md-6 form-group">
                    <label for="template-contactform-name">
                      Name <small>*</small>
                    </label>
                    <input
                      type="text"
                      onChange={handleChnage('name')}
                      id="template-contactform-name"
                      name="template-contactform-name"
                      value={name}
                      className="sm-form-control required"
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label for="template-contactform-email">
                      Email <small>*</small>
                    </label>
                    <input
                      type="email"
                      id="template-contactform-email"
                      name="template-contactform-email"
                      onChange={handleChnage('email')}
                      value={email}
                      className="required email sm-form-control"
                    />
                  </div>

                  <div className="w-100"></div>

                  <div className="col-md-6 form-group">
                    <label for="template-contactform-phone">Phone</label>
                    <input
                      type="text"
                      id="template-contactform-phone"
                      name="template-contactform-phone"
                      onChange={handleChnage('telephone')}
                      value={telephone}
                      className="sm-form-control"
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label for="template-contactform-service">Services</label>
                    <select
                      onChange={handleChnage('services')}
                      className="sm-form-control"
                    >
                      <option value="">-- Select One --</option>
                      <option value="Business Advisory">
                        Business Advisory
                      </option>
                      <option value="Leadership development">
                        Leadership development
                      </option>
                      <option value="SME Incubation">SME Incubation</option>
                      <option value="Technology and Telecom solution sales">
                        Technology and Telecom solution sales
                      </option>
                    </select>
                  </div>

                  <div className="w-100"></div>

                  <div className="col-12 form-group">
                    <label for="template-contactform-subject">
                      Subject <small>*</small>
                    </label>
                    <input
                      type="text"
                      onChange={handleChnage('subject')}
                      name="subject"
                      value={subject}
                      className="required sm-form-control"
                    />
                  </div>

                  <div className="col-12 form-group">
                    <label for="template-contactform-message">
                      Message <small>*</small>
                    </label>
                    <textarea
                      className="required sm-form-control"
                      onChange={handleChnage('message')}
                      name="template-contactform-message"
                      rows="6"
                      cols="30"
                      value={message}
                    ></textarea>
                  </div>

                  <div className="col-12 form-group d-none">
                    <input
                      type="text"
                      id="template-contactform-botcheck"
                      name="template-contactform-botcheck"
                      value=""
                      className="sm-form-control"
                    />
                  </div>

                  <div className="col-12 form-group">
                    <button
                      className="button button-3d m-0"
                      onClick={clickSubmit}
                      value="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              <div className="line"></div>

              <div className="row col-mb-50">
                {/* <!-- Contact Info
							============================================= --> */}
                <div className="col-md-4">
                  <address>
                    <strong>Headquarters:</strong>
                    Block A, 1st floor, Lofty Heights Office Complex, Marwa Bus
                    stop, Lekki-epe Express way, Lekki phase 1, Lagos state.
                  </address>
                  <abbr title="Phone Number">
                    <strong>Phone:</strong>
                  </abbr>{' '}
                  +234 908 788 8862
                  <br />
                  <abbr title="Fax">
                    <strong>Phone:</strong>
                  </abbr>{' '}
                  +234 (0)1 630 6765
                  <br />
                  <abbr title="Email Address">
                    <strong>Email:</strong>
                  </abbr>{' '}
                  info@kairosng.com
                </div>
                {/* 
							<!-- Testimonails
							============================================= --> */}
                {/* <div className="col-md-8">
                  <a href="https://twitter.com/Kairos_ng">
                    <div
                      className="fslider customjs testimonial twitter-scroll twitter-feed"
                      data-username="Kairos_ng"
                      data-count="4"
                      data-animation="slide"
                      data-arrows="false"
                    >
                      <i
                        className="i-plain color icon-twitter mb-0"
                        style={{ marginRight: '15px' }}
                      ></i>
                      <div className="flexslider" style={{ width: 'auto' }}>
                        <div className="slider-wrap">
                          <div className="slide"></div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Google Map
			============================================= --> */}

        {/* <section
          className="gmap"
          data-latitude=" 6.43211614566657"
          data-longitude=" 3.4696866441768206"
          data-scrollwheel="false"
          data-markers='[{latitude: 6.43211614566657, longitude: 3.4696866441768206, html: "<div className=\"p-2\" style=\"width: 300px;\"><h4 className=\"mb-2\">Hi! We are <span>Envato!</span></h4><p className=\"mb-0\" style=\"font-size:1rem;\">Our mission is to help people to <strong>earn</strong> and to <strong>learn</strong> online. We operate <strong>marketplaces</strong> where hundreds of thousands of people buy and sell digital goods every day.</p></div>", icon:{ image: "images/icons/map-icon-red.png", iconsize: [32, 39], iconanchor: [32,39] } }]'
        ></section> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.70861617807!2d3.468108650432969!3d6.431464825987712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf590870766cb%3A0x55a808f8b6e075b6!2sLofty%20Heights%20Office%20complex!5e0!3m2!1sen!2sng!4v1614777082901!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer></Footer>
    </Fragment>
  );
};

export default Contact;
