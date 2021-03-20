import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Business = () => {
  return (
    <Fragment>
      <Header></Header>
      <section id="page-title">
        <div className="container clearfix">
          <h1> Business Advisory</h1>
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
                      <h3 class="nott ls0">
                        Go-to-market strategy and allied support
                      </h3>
                    </div>
                    <blockquote>
                      <p>
                        Nigeria epitomizes the growth boom that Africa is
                        experiencing. Our team of experienced professionals are
                        dedicated to setting up your business with a customized
                        Go-To-Market Plan leveraging our deep knowledge and
                        experience in Africa by offering customized advisory
                        services that address your unique needs. In doing so, we
                        help companies set up and establish critical Sales and
                        Marketing processes, enabling them to achieve speed to
                        market.
                      </p>
                      <p>
                        We help in identifying key market segments, most
                        profitable sales channels and suitable marketing touch
                        points. Many of the key channel players are known to us
                        through our years of field work and collaboration,
                        therefore we are able to connect our Clients to
                        trustworthy Channel Partners enabling our Clients to
                        achieve scale easily. We understand local peculiarities
                        and are able to leverage our relationships to guide our
                        clients to low hanging fruits and early wins. We offer
                        sustainable market entry options and provide bespoke
                        solutions for our clients.
                      </p>
                      <p>
                        We handle requirements to liaise with Regulators at
                        every level. Our team of highly specialized consultants
                        are adept with the working protocols of the local
                        authorities. Regulatory bottlenecks are always a source
                        of concern for companies entering into new legal
                        jurisdictions. We understand how these local regulators
                        work and are able to handle Investor projects on an
                        outsource basis.
                      </p>
                      <p>
                        Some of the areas where we provide support include:
                        <ul style={{ marginLeft: '50px' }}>
                          <li>Product registration with NAFDAC and SON</li>
                          <li>Product type approval from NCC</li>{' '}
                          <li>
                            Intermediation with the National office for
                            Technology transfer and acquisition
                          </li>
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
