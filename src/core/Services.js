import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <Fragment>
      <Header></Header>

      {/* <section id="page-title">
        <div className="container clearfix">
          <h1>Services</h1>
          <span>We provide Amazing Solutions</span>
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
      </section> */}

      <section id="content">
        <div className="content-wrap">
          <div
            className="section parallax mb-0 border-0 dark"
            style={{ height: '450px', padding: '120px 0', marginTop: '-80px' }}
          >
            <div className="vertical-middle center" style={{ zIndex: '2' }}>
              <div className="container clearfix" data-animate="fadeInUp">
                <a
                  href="#"
                  className="button button-border button-rounded button-white button-light button-large ml-0 mb-0"
                  style={{ marginTop: '40px' }}
                >
                  Show More
                </a>
              </div>
            </div>

            <div className="video-wrap" style={{ zIndex: '1' }}>
              <video
                poster="images/videos/messiermarathon.jpg"
                preload="auto"
                loop
                autoPlay
                muted
              >
                <source
                  src="images/videos/messiermarathon.mp4"
                  type="video/mp4"
                />
                <source
                  src="images/videos/messiermarathon.webm"
                  type="video/webm"
                />
              </video>
              <div
                className="video-overlay"
                style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
              ></div>
            </div>
          </div>

          <div className="row bottommargin-lg align-items-stretch">
            <div
              className="col-lg-6 dark col-padding overflow-hidden"
              style={{ backgroundColor: '#1abc9c' }}
            >
              <div>
                <h3 className="text-uppercase" style={{ fontWeight: '600' }}>
                  Business Advisory: Go-to-market strategy and allied support
                </h3>
                <p style={{ lineHeight: '1.8' }}>
                  Nigeria epitomizes the growth boom that Africa is
                  experiencing. Our team of experienced professionals are
                  dedicated to setting up your business with a customized
                  Go-To-Market Plan leveraging our deep knowledge and experience
                  in Africa by offering customized advisory services that
                  address your unique needs.
                </p>
                <a
                  href="/business-advisory"
                  className="button button-border button-light button-rounded button-reveal text-right text-uppercase m-0"
                >
                  <i className="icon-angle-right"></i>
                  <span>Read More</span>
                </a>
                <i className="icon-bulb bgicon"></i>
              </div>
            </div>

            <div
              className="col-lg-6 dark col-padding overflow-hidden"
              style={{ backgroundColor: '#e74c3c' }}
            >
              <div>
                <h3 className="text-uppercase" style={{ fontWeight: '600' }}>
                  SME Incubation
                </h3>
                <p style={{ lineHeight: '1.8' }}>
                  Small and Medium Enterprises are the bedrock of any economy.
                  Research indicates that SMEs employ about 30% of the workforce
                  and are crucial for driving innovation. They are no doubt the
                  conglomerates of the future.
                </p>
                <a
                  href="/sme-incubation"
                  className="button button-border button-light button-rounded text-uppercase m-0"
                >
                  Read More
                </a>
                <i className="icon-thumbs-up bgicon"></i>
              </div>
            </div>

            <div
              className="col-lg-6 dark col-padding overflow-hidden"
              style={{ backgroundColor: '#e74c3c' }}
            >
              <div>
                <h3 className="text-uppercase" style={{ fontWeight: '600' }}>
                  Technology and Telecom solution sales
                </h3>
                <p style={{ lineHeight: '1.8' }}>
                  We are passionate about the digital revolution in Africa and
                  are positioned to offer direct to Consumer as well as direct
                  to Business sales of key mobile technology products. Through
                  our offline and online platform, we bring together the
                  offerings from both local Telecom companies and hardware and
                  software providers.
                </p>
                <a
                  href="/technology-and-telecom-solution-sales"
                  className="button button-border button-light button-rounded text-uppercase m-0"
                >
                  Read More
                </a>
                <i className="icon-thumbs-up bgicon"></i>
              </div>
            </div>
            <div
              className="col-lg-6 dark col-padding overflow-hidden"
              style={{ backgroundColor: '#34495e' }}
            >
              <div>
                <h3 className="text-uppercase" style={{ fontWeight: '600' }}>
                  Leadership development
                </h3>
                <p style={{ lineHeight: '1.8' }}>
                  We have a vision of birthing a new crop of African leadership
                  and talent. At Kairos, we coach, mentor and help groom young
                  and aspiring business leaders. We manage the competition for
                  Talent and fix issues our Clients may be facing in filling
                  talent gaps in their operations.
                </p>
                <a
                  href="/leadership-development"
                  className="button button-border button-light button-rounded text-uppercase m-0"
                >
                  Read More
                </a>
                <i className="icon-cog bgicon"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
};

export default Services;
