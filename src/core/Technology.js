import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Technology = () => {
  return (
    <Fragment>
      <Header></Header>
      <section id="page-title">
        <div className="container clearfix">
          <h1> Technology and Telecom solution sales</h1>
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
                        We are passionate about the digital revolution in Africa
                        and are positioned to offer direct to Consumer as well
                        as direct to Business sales of key mobile technology
                        products.
                      </p>
                      <p>
                        Through our offline and online platform, we bring
                        together the offerings from both local Telecom companies
                        and hardware and software providers. We believe that
                        mobile technology will shape the way we live in the
                        future – from artificial intelligence to connected homes
                        and smart cities, we are orchestrating the digital
                        revolution by offering Consumers access to latest
                        innovations.
                      </p>

                      <p>
                        We continue to broaden our partnerships with local last
                        mile Telecom Operators as well as Original Equipment
                        manufacturers to create Digital experience centers where
                        consumers can access the latest technologies. It is our
                        intention to enable digital inclusion in line with the
                        millennial development goals. Our offerings include:
                        <ul style={{ marginLeft: '50px' }}>
                          <li>Operator airtime and data bundles</li>
                          <li>Smartphones</li>
                          <li>Gaming consoles</li>
                          <li>Virtual reality sets</li>
                          <li>Various models of mobile accessories</li>
                          <li>Mobile KYC terminals</li>
                          <li>Mobile Fitness gear</li>
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

export default Technology;
