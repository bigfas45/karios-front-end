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

    // <section
    //   id="slider"
    //   class="slider-element slider-parallax revslider-wrap overflow-hidden clearfix"
    // >
    //   <div
    //     id="rev_slider_ishop_wrapper"
    //     class="rev_slider_wrapper fullwidth-container"
    //     data-alias="default-slider"
    //     style={{ padding: '0px' }}
    //   >
    //     <div
    //       id="rev_slider_ishop"
    //       class="rev_slider fullwidthbanner"
    //       style={{ display: 'none' }}
    //       data-version="5.1.4"
    //     >
    //       <ul>
    //         <li
    //           data-transition="fade"
    //           data-slotamount="1"
    //           data-masterspeed="1500"
    //           data-delay="5000"
    //           data-saveperformance="off"
    //           data-title="Latest Collections"
    //           style={{ backgroundColor: '#F6F6F6' }}
    //         >
    //           <div
    //             class="tp-caption ltl tp-resizeme revo-slider-caps-text text-uppercase"
    //             data-x="100"
    //             data-y="50"
    //             data-transform_in="x:-200;y:0;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;s:700;e:Power4.easeOutQuad;"
    //             data-speed="400"
    //             data-start="1000"
    //             data-easing="easeOutQuad"
    //             data-splitin="none"
    //             data-splitout="none"
    //             data-elementdelay="0.01"
    //             data-endelementdelay="0.1"
    //             data-endspeed="1000"
    //             data-endeasing="Power4.easeIn"
    //           >
    //             <img src="images/slider/rev/shop/girl1.jpg" alt="Girl" />
    //           </div>

    //           <div
    //             class="tp-caption ltl tp-resizeme revo-slider-caps-text text-uppercase"
    //             data-x="570"
    //             data-y="75"
    //             data-transform_in="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;s:700;e:Power4.easeOutQuad;"
    //             data-speed="700"
    //             data-start="1000"
    //             data-easing="easeOutQuad"
    //             data-splitin="none"
    //             data-splitout="none"
    //             data-elementdelay="0.01"
    //             data-endelementdelay="0.1"
    //             data-endspeed="1000"
    //             data-endeasing="Power4.easeIn"
    //             style={{ color: '#333' }}
    //           >
    //             Get your Shopping Bags Ready
    //           </div>

    //           <div
    //             class="tp-caption ltl tp-resizeme revo-slider-emphasis-text p-0 border-0"
    //             data-x="570"
    //             data-y="105"
    //             data-transform_in="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;s:700;e:Power4.easeOutQuad;"
    //             data-speed="700"
    //             data-start="1200"
    //             data-easing="easeOutQuad"
    //             data-splitin="none"
    //             data-splitout="none"
    //             data-elementdelay="0.01"
    //             data-endelementdelay="0.1"
    //             data-endspeed="1000"
    //             data-endeasing="Power4.easeIn"
    //             style={{ color: '#333', maxWidth: '430px', lineHeight: '1.15' }}
    //           >
    //             Latest Fashion
    //             <br />
    //             Collections
    //           </div>

    //           <div
    //             class="tp-caption ltl tp-resizeme revo-slider-desc-text text-left"
    //             data-x="570"
    //             data-y="275"
    //             data-transform_in="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;s:700;e:Power4.easeOutQuad;"
    //             data-speed="700"
    //             data-start="1400"
    //             data-easing="easeOutQuad"
    //             data-splitin="none"
    //             data-splitout="none"
    //             data-elementdelay="0.01"
    //             data-endelementdelay="0.1"
    //             data-endspeed="1000"
    //             data-endeasing="Power4.easeIn"
    //             style={{
    //               color: '#33',
    //               maxWidth: '550px',
    //               whiteSpace: 'normal',
    //             }}
    //           >
    //             We have created a Design that looks Awesome, performs
    //             Brilliantly &amp; senses Orientations.
    //           </div>

    //           <div
    //             class="tp-caption ltl tp-resizeme"
    //             data-x="570"
    //             data-y="375"
    //             data-transform_in="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;s:700;e:Power4.easeOutQuad;"
    //             data-speed="700"
    //             data-start="1550"
    //             data-easing="easeOutQuad"
    //             data-splitin="none"
    //             data-splitout="none"
    //             data-elementdelay="0.01"
    //             data-endelementdelay="0.1"
    //             data-endspeed="1000"
    //             data-endeasing="Power4.easeIn"
    //           >
    //             <a
    //               href="#"
    //               class="button button-border button-large button-rounded text-right m-0"
    //             >
    //               <span>Start Shopping</span> <i class="icon-angle-right"></i>
    //             </a>
    //           </div>
    //         </li>

    //         <li
    //           data-transition="slideup"
    //           data-slotamount="1"
    //           data-masterspeed="1500"
    //           data-delay="5000"
    //           data-saveperformance="off"
    //           data-title="Messenger bags"
    //           style={{ backgroundColor: '#E9E8E3' }}
    //         >
    //           <div
    //             class="tp-caption ltl tp-resizeme revo-slider-caps-text text-uppercase"
    //             data-x="630"
    //             data-y="78"
    //             data-transform_in="x:250;y:0;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;s:400;e:Power4.easeOutQuad;"
    //             data-speed="400"
    //             data-start="1000"
    //             data-easing="easeOutQuad"
    //             data-splitin="none"
    //             data-splitout="none"
    //             data-elementdelay="0.01"
    //             data-endelementdelay="0.1"
    //             data-endspeed="1000"
    //             data-endeasing="Power4.easeIn"
    //           >
    //             <img src="images/slider/rev/shop/bag.png" alt="Bag" />
    //           </div>

    //           <div
    //             class="tp-caption ltl tp-resizeme revo-slider-caps-text text-uppercase"
    //             data-x="0"
    //             data-y="110"
    //             data-transform_in="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;s:700;e:Power4.easeOutQuad;"
    //             data-speed="700"
    //             data-start="1000"
    //             data-easing="easeOutQuad"
    //             data-splitin="none"
    //             data-splitout="none"
    //             data-elementdelay="0.01"
    //             data-endelementdelay="0.1"
    //             data-endspeed="1000"
    //             data-endeasing="Power4.easeIn"
    //             style={{ color: '#333' }}
    //           >
    //             Buy Stylish Bags at Discounted Prices
    //           </div>

    //           <div
    //             class="tp-caption ltl tp-resizeme revo-slider-emphasis-text p-0 border-0"
    //             data-x="0"
    //             data-y="140"
    //             data-transform_in="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;s:700;e:Power4.easeOutQuad;"
    //             data-speed="700"
    //             data-start="1200"
    //             data-easing="easeOutQuad"
    //             data-splitin="none"
    //             data-splitout="none"
    //             data-elementdelay="0.01"
    //             data-endelementdelay="0.1"
    //             data-endspeed="1000"
    //             data-endeasing="Power4.easeIn"
    //             style={{ color: '#333', lineHeight: '1.15' }}
    //           >
    //             Messenger Bags
    //           </div>

    //           <div
    //             class="tp-caption ltl tp-resizeme revo-slider-desc-text text-left"
    //             data-x="0"
    //             data-y="240"
    //             data-transform_in="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;s:700;e:Power4.easeOutQuad;"
    //             data-speed="700"
    //             data-start="1400"
    //             data-easing="easeOutQuad"
    //             data-splitin="none"
    //             data-splitout="none"
    //             data-elementdelay="0.01"
    //             data-endelementdelay="0.1"
    //             data-endspeed="1000"
    //             data-endeasing="Power4.easeIn"
    //             style={{
    //               color: '#333',
    //               maxWidth: '550px',
    //               whiteSpace: 'normal',
    //             }}
    //           >
    //             Grantees insurmountable challenges invest protect, growth
    //             improving quality social entrepreneurship.
    //           </div>

    //           <div
    //             class="tp-caption ltl tp-resizeme"
    //             data-x="0"
    //             data-y="340"
    //             data-transform_in="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;s:700;e:Power4.easeOutQuad;"
    //             data-speed="700"
    //             data-start="1550"
    //             data-easing="easeOutQuad"
    //             data-splitin="none"
    //             data-splitout="none"
    //             data-elementdelay="0.01"
    //             data-endelementdelay="0.1"
    //             data-endspeed="1000"
    //             data-endeasing="Power4.easeIn"
    //           >
    //             <a
    //               href="#"
    //               class="button button-border button-large button-rounded text-right m-0"
    //             >
    //               <span>Start Shopping</span> <i class="icon-angle-right"></i>
    //             </a>
    //           </div>

    //           <div
    //             class="tp-caption utb tp-resizeme revo-slider-caps-text text-uppercase"
    //             data-x="510"
    //             data-y="0"
    //             data-transform_in="x:0;y:-236;z:0;rotationZ:0;skewX:0;skewY:0;opacity:0;s:700;e:Power4.easeOutQuad;"
    //             data-speed="600"
    //             data-start="2100"
    //             data-easing="easeOutQuad"
    //             data-splitin="none"
    //             data-splitout="none"
    //             data-elementdelay="0.01"
    //             data-endelementdelay="0.1"
    //             data-endspeed="1000"
    //             data-endeasing="Power4.easeIn"
    //           >
    //             <img src="images/slider/rev/shop/tag.png" alt="Bag" />
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Slider;
