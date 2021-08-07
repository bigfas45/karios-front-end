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
          {/* <ol className="breadcrumb">
            <Link className="breadcrumb-item">
              <a to="/">Home</a>
            </Link>

            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol> */}
        </div>
      </section>

      <section id="content">
        <div className="content-wrap">
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
              <p>
                With an increasingly youthful population, a growing economy and
                challenged educational systems, Nigeria and many African
                countries continue to experience a short supply in critical
                leadership competencies needed to run and grow world class
                businesses. Companies continue to import expensive talent and
                skilled manpower from Asia and Europe with significant impact on
                their bottom lines. Kairos therefore provides a platform to
                develop critical competencies needed to run successful
                organizations. We achieve this through our Leadership Series,
                coaching and mentoring services targeted at Mid and Top-level
                employees of both local and international companies to prepare
                them for leadership roles and improve succession planning and
                bench strength of companies. In addition, Kairos provides seed
                funding and business expertise to local SMEs to bridge their
                funding gaps and make them more competitive.
              </p>
            </div>





            
          </div>
          <br />

          <div className="container clearfix">
            <div className="row col-mb-50 mb-0">
              <div className="col-lg-3">
                <div className="heading-block fancy-title border-bottom-0 title-bottom-border">
                  <h4>
                    Why choose <span>Us</span>.
                  </h4>
                </div>

                <p>
                  Kairos provides intermediation solutions, giving intending
                  foreign Investors an option to test the waters with an
                  outsourced agency solution. This allows the Investors time to
                  test their strategy, find the winning and scalable formula
                  before taking on the burden of setting up a local in-country
                  entity.
                </p>
              </div>

              <div className="col-lg-3">
                <div className="heading-block fancy-title border-bottom-0 title-bottom-border">
                  <h4>
                    Our <span>VISION</span>.
                  </h4>
                </div>

                <p>
                  At Kairos we believe that Opportunities abound for Growth and
                  Prosperity for Everyone.
                </p>
              </div>

              <div className="col-lg-3">
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

              <div className="col-lg-3">
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

            <div className="heading-block center">
              <h4>Our Clients</h4>
            </div>

            <ul className="clients-grid grid-3 grid-sm-3 grid-md-3 mb-0">
              <li className="grid-item">
                <a href="#">
                  <img src="baybender.png" alt="Clients" />
                </a>
              </li>
              <li className="grid-item">
                <a href="#">
                  <img src="bellus.png" alt="Clients" />
                </a>
              </li>
              <li className="grid-item">
                <a href="#">
                  <img src="infocus.png" alt="Clients" />
                </a>
              </li>
              {/* <li className="grid-item">
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
              </li> */}
            </ul>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
};

export default About;
