

const Slider = () => {
  return (
    <section
      id="slider"
      className="slider-element swiper_wrapper min-vh-60 min-vh-md-100"
    >
      <div className="slider-inner">
        <div className="swiper-container swiper-parent">
          <div className="swiper-wrapper">
            <div className="swiper-slide dark">
              <div className="container">
                <div className="slider-caption slider-caption-center">
                  <h3 data-animate="fadeInUp">
                    INNOVATION | OPPORTUNITY | SERVICE
                  </h3>
                  <p
                    className="d-none d-sm-block"
                    data-animate="fadeInUp"
                    data-delay="200"
                  >
                    We enable new and existing African businesses unlock
                    opportunities in the continent.
                  </p>
                </div>
              </div>
              <div
                className="swiper-slide-bg"
                style={{
                  backgroundImage: "url('images/slider/swiper/1.jpg')",
                }}
              ></div>
            </div>
            <div className="swiper-slide dark">
              <div className="container">
                <div className="slider-caption slider-caption-center">
                  <h2 data-animate="fadeInUp"> Leadership Training </h2>
                  <p
                    className="d-none d-sm-block"
                    data-animate="fadeInUp"
                    data-delay="200"
                  >
                    We have a vision of birthing a new crop of African
                    leadership and talent. At Kairos, we coach, mentor and help
                    groom young and aspiring business leaders
                  </p>
                </div>
              </div>
              <div className="video-wrap">
                <video
                  poster="images/videos/deskwork.jpg"
                  preload="auto"
                  loop
                  autoplay
                  muted
                >
                  <source src="images/videos/deskwork.mp4" type="video/mp4" />
                  <source src="images/videos/deskwork.webm" type="video/webm" />
                </video>
                <div
                  className="video-overlay"
                  style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
                ></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="container">
                <div className="slider-caption">
                  <h2 data-animate="fadeInUp">
                    Business Advisory & Incubation{' '}
                  </h2>
                  <p
                    className="d-none d-sm-block"
                    data-animate="fadeInUp"
                    data-delay="10"
                  >
                    Nigeria epitomizes the growth boom that Africa is
                    experiencing. Our team of experienced professionals are
                    dedicated to setting up your business with a customized
                    Go-To-Market Plan leveraging our deep knowledge and
                    experience in Africa by offering customized advisory
                    services that address your unique needs
                  </p>
                </div>
              </div>
              <div
                className="swiper-slide-bg"
                style={{
                  backgroundImage: "url('images/slider/swiper/3.jpg')",
                  backgroundPosition: 'center top',
                }}
              ></div>
            </div>
          </div>
          <div className="slider-arrow-left">
            <i className="icon-angle-left"></i>
          </div>
          <div className="slider-arrow-right">
            <i className="icon-angle-right"></i>
          </div>
          <div className="slide-number">
            <div className="slide-number-current"></div>
            <span>/</span>
            <div className="slide-number-total"></div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Slider;