import React, { Fragment, useEffect, useState } from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import { contactForm } from '../core/apiCore';
import swal from 'sweetalert';
import TrainingCardCom from '../components/TrainingCardCom';

const Home = () => {
  const [values, setValues] = useState({
    email: '',
    error: '',
    success: '',
  });
  const { email, error, success } = values;
  const handleChnage = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    contactForm({ email }).then((data) => {
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
          email: '',
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
        `You have succesfully be added to our weekly news letter  `
      );
    }
    if (error) {
      return dashboarddashboard('An Error Occured', error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Header></Header>

      <Slider></Slider>

      {/* 
        		<!-- Content
		============================================= --> */}
      <section id="content">
        <div className="content-wrap">
          <div className="section header-stick">
            <div className="container clearfix">
              <div className="row">
                <div className="col-lg-9">
                  <div className="heading-block bottommargin-sm">
                    <h3>
                      {' '}
                      We enable new and existing African businesses unlock
                      opportunities in the continent.
                    </h3>
                  </div>

                  <p className="mb-0">
                    We deliver go-to-market solutions to companies and investors
                    entering the African market and help build a pool of African
                    talent to support business growth and development in Africa.
                  </p>
                </div>

                <div className="col-lg-3">
                  <a
                    href="/services"
                    className="button button-3d button-dark button-large btn-block center"
                    style={{ marginTop: '30px' }}
                  >
                    Check our Services
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container clearfix">
            <div className="row justify-content-center col-mb-50">
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box media-box">
                  <div className="fbox-media">
                    <img src="images/services/1.jpg" alt="Why choose Us?" />
                  </div>
                  <div className="fbox-content px-0">
                    <h3>
                      Why choose Us.
                      <span className="subtitle">Because we are Reliable.</span>
                    </h3>
                    <p>
                      Kairos provides intermediation solutions, giving intending
                      foreign Investors an option to test the waters with an
                      outsourced agency solution. This allows the Investors time
                      to test their strategy, find the winning and scalable
                      formula before taking on the burden of setting up a local
                      in-country entity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="feature-box media-box">
                  <div className="fbox-media">
                    <img src="images/services/2.jpg" alt="Why choose Us?" />
                  </div>
                  <div className="fbox-content px-0">
                    <h3>Our VISION.</h3>
                    <p>
                      At Kairos we believe that Opportunities abound for Growth
                      and Prosperity for Everyone.
                    </p>
                    <br />
                    <h3>Our MISSION.</h3>
                    <p>
                      To unlock opportunities - enabling individuals and
                      organizations realize their full potentials.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="feature-box media-box">
                  <div className="fbox-media">
                    <img src="images/services/3.jpg" alt="Why choose Us?" />
                  </div>
                  <div className="fbox-content px-0">
                    <h3>
                      What we Do.
                      <span className="subtitle">
                        We are focused on four key areas of service to our
                        Clients:{' '}
                      </span>
                    </h3>
                    <p>
                      • Business Advisory: Go-to-market strategy and allied
                      support.
                      <br /> • Leadership development. <br />• SME Incubation.{' '}
                      <br />• Technology and Telecom solution sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section parallax bottommargin-lg"
            style={{
              backgroundImage: "url('images/parallax/3.jpg')",
              padding: '100px 0',
            }}
            data-bottom-top="background-position:0px 300px;"
            data-top-bottom="background-position:0px -300px;"
          >
            <div className="heading-block center border-bottom-0 mb-0">
              <h2>
                We have a vision of birthing a new crop of African leadership
                and talent.
              </h2>
            </div>
          </div>

          <div className="container clearfix">
            <div className="row gutter-40 mb-0">
              <div className="col-lg-8">
                <div className="accordion accordion-border mb-0">
                  <div className="accordion-header">
                    <div className="accordion-icon">
                      <i className="accordion-closed icon-ok-circle"></i>
                      <i className="accordion-open icon-remove-circle"></i>
                    </div>
                    <div className="accordion-title">Our Company's Values</div>
                  </div>
                  <div className="accordion-content">
                    To unlock opportunities - enabling individuals and
                    organizations realize their full potentials.
                  </div>

                  <div className="accordion-header">
                    <div className="accordion-icon">
                      <i className="accordion-closed icon-ok-circle"></i>
                      <i className="accordion-open icon-remove-circle"></i>
                    </div>
                    <div className="accordion-title">How to get Support?</div>
                  </div>
                  <div className="accordion-content">
                    {/* Nullam id dolor id nibh ultricies vehicula ut id elit.
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet. Duis mollis, est non commodo luctus. Aenean lacinia
                    bibendum nulla sed consectetur. */}
                  </div>

                  <div className="accordion-header">
                    <div className="accordion-icon">
                      <i className="accordion-closed icon-ok-circle"></i>
                      <i className="accordion-open icon-remove-circle"></i>
                    </div>
                    <div className="accordion-title">
                      Where can you find us?
                    </div>
                  </div>
                  <div className="accordion-content">
                    7Block A, 1st floor, Lofty Heights Office Complex, Marwa Bus
                    stop, Lekki-epe Express way, Lekki phase 1, Lagos state.
                  </div>

                  <div className="accordion-header">
                    <div className="accordion-icon">
                      <i className="accordion-closed icon-ok-circle"></i>
                      <i className="accordion-open icon-remove-circle"></i>
                    </div>
                    <div className="accordion-title">
                      Why you choose our Company?
                    </div>
                  </div>
                  <div className="accordion-content">
                    At Kairos Integrated Concepts, we provide a wide range of
                    services to meet our customer needs. Our tailored approach
                    combined with the expertise of our team and partners, we can
                    provide an investor or a business with the exact advise &
                    strategy to prosper in the African Markets. Click below to
                    read about our full list of services.
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-3 col-md-6">
                <div className="fancy-title title-border">
                  <h4>Our Services</h4>
                </div>

                <ul className="skills">
                  <li data-percent="100">
                    <span>Business Advisory</span>
                    <div className="progress">
                      <div className="progress-percent">
                        <div className="counter counter-inherit counter-instant">
                          <span
                            data-from="0"
                            data-to="100"
                            data-refresh-interval="30"
                            data-speed="1000"
                          ></span>
                          %
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-percent="100">
                    <span>Leadership development</span>
                    <div className="progress">
                      <div className="progress-percent">
                        <div className="counter counter-inherit counter-instant">
                          <span
                            data-from="0"
                            data-to="100"
                            data-refresh-interval="30"
                            data-speed="1000"
                          ></span>
                          %
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-percent="100">
                    <span>SME Incubation</span>
                    <div className="progress">
                      <div className="progress-percent">
                        <div className="counter counter-inherit counter-instant">
                          <span
                            data-from="0"
                            data-to="100"
                            data-refresh-interval="30"
                            data-speed="1000"
                          ></span>
                          %
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-percent="100">
                    <span>Technology and Telecom solution sales</span>
                    <div className="progress">
                      <div className="progress-percent">
                        <div className="counter counter-inherit counter-instant">
                          <span
                            data-from="0"
                            data-to="100"
                            data-refresh-interval="30"
                            data-speed="1000"
                          ></span>
                          %
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}

              {/* recently posed training */}
              <TrainingCardCom></TrainingCardCom>
            </div>
          </div>

          {showLoading()}

          <div className="section mb-0">
            <div className="container clearfix">
              <div className="heading-block center">
                <h3>
                  Subscribe to our <span>Newsletter</span>
                </h3>
              </div>

              <div className="subscribe-widget">
                <div className="widget-subscribe-form-result"></div>
                <form>
                  <div
                    className="input-group input-group-lg mx-auto"
                    style={{ maxWidth: '600px' }}
                  >
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="icon-email2"></i>
                      </div>
                    </div>
                    <input
                      type="email"
                      onChange={handleChnage('email')}
                      value={email}
                      className="form-control required email"
                      placeholder="Enter your Email"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-secondary"
                        onClick={clickSubmit}
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
