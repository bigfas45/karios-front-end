import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Business = () => {
  return (
    <Fragment>
      <Header></Header>
      <section id="page-title">
        <div className="container clearfix">
          <h1> SME Incubation</h1>
          {/* <span>We provide Amazing Solutions</span> */}
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Services
            </li>
          </ol>
        </div>
      </section>

      <section id="content">
        <div class="content-wrap">
          <div class="container clearfix">
            <div class="row col-mb-50 mb-0">
              <div class="container clearfix">
                <div class="row justify-content-between">
                  <div class="col-lg-12" data-lightbox="gallery">
                    <div class="heading-block border-bottom-0 bottommargin-sm">
                      {/* <h3 class="nott ls0">
                        Go-to-market strategy and allied support
                      </h3> */}
                    </div>
                    <blockquote>
                      <p>
                        Small and Medium Enterprises are the bedrock of any
                        economy. Research indicates that SMEs employ about 30%
                        of the workforce and are crucial for driving innovation.
                        They are no doubt the conglomerates of the future.
                      </p>
                      <p>
                        Funding has been identified as one of the reasons for
                        high rate of SME failures. We are aware of how difficult
                        it is for small enterprises to secure loans from
                        financial institutions without collateral. Similarly,
                        Investors may be unwilling to take the risk since the
                        SME do not present the right amount of verifiable track
                        record and fundamentals necessary for financial analysis
                        and investment decisions.
                      </p>

                      <p>
                        Kairos seeks out SMEs with genuine business ideas and
                        supports then in their developmental journey in two key
                        areas:
                        <ul style={{ marginLeft: '50px' }}>
                          <li>
                            Provision of interest free seed funding convertible
                            to equity
                          </li>
                          <li>Coaching and Mentoring of Owner Managers</li>{' '}
                         
                        </ul>
                      </p>
                    </blockquote>
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

export default Business;
