import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Leadership = () => {
  return (
    <Fragment>
      <Header></Header>
      <section id="page-title">
        <div className="container clearfix">
          <h1>Leadership development</h1>
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
                      <p>Leadership development</p>
                      <p>
                        We have a vision of birthing a new crop of African
                        leadership and talent. At Kairos, we coach, mentor and
                        help groom young and aspiring business leaders. We
                        manage the competition for Talent and fix issues our
                        Clients may be facing in filling talent gaps in their
                        operations. In addition, Kairos runs very practical and
                        impactful executive skill intervention programs on
                        topics like:
                      </p>

                      <ul style={{ marginLeft: '50px' }}>
                        <li>Negotiation</li>
                        <li>Innovative Sales Strategy</li>
                        <li>Change Management</li>
                      </ul>
                      <p>
                        Our world class team of facilitators and Resource
                        persons ensure the most impactful content is delivered
                        to our attendees and participants. Furthermore, we offer
                        advisory services in the following areas:
                        <ul style={{ marginLeft: '50px' }}>
                          <li>Business turnaround</li>
                          <li>Change management</li>
                          <li>Internal controls</li>
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

export default Leadership;
