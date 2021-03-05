import React, { Fragment, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Fragment>
      <Header></Header>

      <section
        id="page-title"
        className="page-title-parallax page-title-dark include-header"
        style={{
          padding: ' 250px 0',
          backgroundImage: "url('images/about/parallax.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        data-bottom-top="background-position:0px 400px;"
        data-top-bottom="background-position:0px -500px;"
      >
        <div className="container clearfix">
          <h1>About Us</h1>
          <span>Everything you need to know about our Company</span>
          <ol className="breadcrumb">
            <Link className="breadcrumb-item">
              <a to="/">Home</a>
            </Link>

            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </div>
      </section>

      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div className="row col-mb-50 mb-0">
              <div className="col-lg-4">
                <div className="heading-block fancy-title border-bottom-0 title-bottom-border">
                  <h4>
                    Why choose <span>Us</span>.
                  </h4>
                </div>

                <p>
                  Because we are Reliable. We are a team of experienced,
                  passionate and dedicated people with deep insights about the
                  African business landscape. Our mission is to facilitate
                  growth by connecting companies and individuals to
                  opportunities.
                </p>
              </div>

              <div className="col-lg-4">
                <div className="heading-block fancy-title border-bottom-0 title-bottom-border">
                  <h4>
                    Our <span>Mission</span>.
                  </h4>
                </div>

                <p>
                  To unlock opportunities - enabling individuals and
                  organizations realize their full potentials.
                </p>
              </div>

              <div className="col-lg-4">
                <div className="heading-block fancy-title border-bottom-0 title-bottom-border">
                  <h4>
                    What we <span>Do</span>.
                  </h4>
                </div>

                <p>
                  <span className="subtitle">
                    We are focused on four key areas of service to our Clients:{' '}
                  </span>
                  <p>
                    • Business Advisory: Go-to-market strategy and allied
                    support.
                    <br /> • Leadership development. <br />• SME Incubation.{' '}
                    <br />• Technology and Telecom solution sales.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="container clearfix">
            <div className="clear"></div>
            <div className="col-lg-12">
              <div className="heading-block fancy-title border-bottom-0 title-bottom-border">
                <h4>
                  Who <span>We are</span>.
                </h4>
              </div>

              <p>
                Kairos Integrated Concepts Limited was established in 2006 with
                a passion to enable new and existing African businesses unlock
                opportunities in the continent, deliver go-to-market solutions
                to companies and investors entering the African market and help
                build a pool of African talent to support business growth and
                development in Africa.
              </p>

              <p>
                Small and medium sized companies are expectedly the engine of
                growth in an economy. Our research suggests that a high
                percentage of these entities struggle for competitiveness,
                funding and containment of risk management issues. We at Kairos
                Integrated provide SME Incubation and Leadership Development to
                solve these issues in our markets.
              </p>

              <p>
                We are particular about the evolution of digital experience in
                Africa. Therefore, we offer sales of technology and telecom
                products from both hardware and software providers.
              </p>
            </div>
          </div>

          <div className="container clearfix">
            <div className="clear"></div>

            <div className="heading-block center">
              <h4>Our Clients</h4>
            </div>

            <ul className="clients-grid grid-2 grid-sm-3 grid-md-6 mb-0">
              <li className="grid-item">
                <a href="http://logofury.com/logo/enzo.html">
                  <img src="images/clients/1.png" alt="Clients" />
                </a>
              </li>
              <li className="grid-item">
                <a href="http://logofury.com/">
                  <img src="images/clients/2.png" alt="Clients" />
                </a>
              </li>
              <li className="grid-item">
                <a href="http://logofaves.com/2021/03/grabbt/">
                  <img src="images/clients/3.png" alt="Clients" />
                </a>
              </li>
              <li className="grid-item">
                <a href="http://logofaves.com/2021/01/ladera-granola/">
                  <img src="images/clients/4.png" alt="Clients" />
                </a>
              </li>
              <li className="grid-item">
                <a href="http://logofaves.com/2021/02/hershel-farms/">
                  <img src="images/clients/5.png" alt="Clients" />
                </a>
              </li>

              <li className="grid-item">
                <a href="http://logofury.com/">
                  <img src="images/clients/12.png" alt="Clients" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
};

export default About;
