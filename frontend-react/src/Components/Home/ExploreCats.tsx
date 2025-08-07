import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Col } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
const ExploreCats = () => {
    const swiperRef = useRef(null);
  return (
    <>
<section className="fr-explore-cat category-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xs-12 col-sm-12 col-md-12 col-xl-12 explore-position category-3-section">
            <input type="hidden" id="category_slider_autoplay" value="yes" />
            <input type="hidden" id="category_slider_autoplay_time" value="3000" />

            <div className="heading-panel section-left">
              <div className="heading-meta">
                <h2>Explore Your Categories</h2>
                <p>Freelancing talent at your fingertips at a reasonable cost</p>
              </div>
            </div>
          </div>
          <Col
            lg={5}
            md={12}
            className="col-xl-12 col-xs-12 col-md-12 col-lg-12"
          >
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              spaceBetween={10} // Matches gutter: 0
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[Navigation, Autoplay]}
              autoplay={false} // Controlled by hidden input if needed
              mousewheel={true} // Equivalent to mouseDrag
              breakpoints={{
                0: { slidesPerView: 1 },
                540: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 5 },
                1170: { slidesPerView: 6 },
              }}
              className="category_slider"
              onSwiper={(swiper) => {
                swiper.slides.forEach((slide) => {
                  slide.style.width = '300px'; // Match your desired width
                  slide.style.marginRight = '20px'; // Match your desired margin
                });
              }}
            >
              {/* Item 1 */}
              <SwiperSlide>
                <div className="item single-cat">
                  <div className="fr-explore-content">
                    <div className="fr-explore-product">
                      <a href="https://marketplace.exertiowp.com/services-search/?categories=233">
                        <img
                          decoding="async"
                          src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/servcie-provider1.jpg"
                          alt=""
                          className="img-fluid category-image"
                        />
                      </a>
                      <div className="explore-data">
                        <a href="https://marketplace.exertiowp.com/services-search/?categories=233">
                          <div className="fr-log-grid">
                            <img
                              decoding="async"
                              src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/support-svgrepo-com.svg"
                              alt=""
                            />
                          </div>
                        </a>
                        <div className="fr-explore-container">
                          <a href="https://marketplace.exertiowp.com/services-search/?categories=233">
                            <div className="fr-heading-style">Services Provider</div>
                          </a>
                        </div>
                        <div className="data-footer">
                          <span className="listing-count">1 Listings</span>
                          <a
                            href="https://marketplace.exertiowp.com/services-search/?categories=233"
                            className="listing-count icon"
                          >
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Item 2 */}
              <SwiperSlide>
                <div className="item single-cat">
                  <div className="fr-explore-content">
                    <div className="fr-explore-product">
                      <a href="https://marketplace.exertiowp.com/services-search/?categories=234">
                        <img
                          decoding="async"
                          src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/marketing1.jpg"
                          alt=""
                          className="img-fluid category-image"
                        />
                      </a>
                      <div className="explore-data">
                        <a href="https://marketplace.exertiowp.com/services-search/?categories=234">
                          <div className="fr-log-grid">
                            <img
                              decoding="async"
                              src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/marketing-speaker-svgrepo-com.svg"
                              alt=""
                            />
                          </div>
                        </a>
                        <div className="fr-explore-container">
                          <a href="https://marketplace.exertiowp.com/services-search/?categories=234">
                            <div className="fr-heading-style">Marketing</div>
                          </a>
                        </div>
                        <div className="data-footer">
                          <span className="listing-count">2 Listings</span>
                          <a
                            href="https://marketplace.exertiowp.com/services-search/?categories=234"
                            className="listing-count icon"
                          >
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Item 3 */}
              <SwiperSlide>
                <div className="item single-cat">
                  <div className="fr-explore-content">
                    <div className="fr-explore-product">
                      <a href="https://marketplace.exertiowp.com/services-search/?categories=193">
                        <img
                          decoding="async"
                          src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/web-dev-small1.jpg"
                          alt=""
                          className="img-fluid category-image"
                        />
                      </a>
                      <div className="explore-data">
                        <a href="https://marketplace.exertiowp.com/services-search/?categories=193">
                          <div className="fr-log-grid">
                            <img
                              decoding="async"
                              src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/coding-svgrepo-com.svg"
                              alt=""
                            />
                          </div>
                        </a>
                        <div className="fr-explore-container">
                          <a href="https://marketplace.exertiowp.com/services-search/?categories=193">
                            <div className="fr-heading-style">Web Development</div>
                          </a>
                        </div>
                        <div className="data-footer">
                          <span className="listing-count">1 Listings</span>
                          <a
                            href="https://marketplace.exertiowp.com/services-search/?categories=193"
                            className="listing-count icon"
                          >
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Item 4 */}
              <SwiperSlide >
                <div className="item single-cat">
                  <div className="fr-explore-content">
                    <div className="fr-explore-product">
                      <a href="https://marketplace.exertiowp.com/services-search/?categories=253">
                        <img
                          decoding="async"
                          src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/graphics-designing1.jpg"
                          alt=""
                          className="img-fluid category-image"
                        />
                      </a>
                      <div className="explore-data">
                        <a href="https://marketplace.exertiowp.com/services-search/?categories=253">
                          <div className="fr-log-grid">
                            <img
                              decoding="async"
                              src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/design-svgrepo-com.svg"
                              alt=""
                            />
                          </div>
                        </a>
                        <div className="fr-explore-container">
                          <a href="https://marketplace.exertiowp.com/services-search/?categories=253">
                            <div className="fr-heading-style">Graphic Designing</div>
                          </a>
                        </div>
                        <div className="data-footer">
                          <span className="listing-count">1 Listings</span>
                          <a
                            href="https://marketplace.exertiowp.com/services-search/?categories=253"
                            className="listing-count icon"
                          >
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>


              {/* Item 4 */}
              <SwiperSlide >
                <div className="item single-cat">
                  <div className="fr-explore-content">
                    <div className="fr-explore-product">
                      <a href="https://marketplace.exertiowp.com/services-search/?categories=253">
                        <img
                          decoding="async"
                          src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/graphics-designing1.jpg"
                          alt=""
                          className="img-fluid category-image"
                        />
                      </a>
                      <div className="explore-data">
                        <a href="https://marketplace.exertiowp.com/services-search/?categories=253">
                          <div className="fr-log-grid">
                            <img
                              decoding="async"
                              src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/design-svgrepo-com.svg"
                              alt=""
                            />
                          </div>
                        </a>
                        <div className="fr-explore-container">
                          <a href="https://marketplace.exertiowp.com/services-search/?categories=253">
                            <div className="fr-heading-style">Graphic Designing</div>
                          </a>
                        </div>
                        <div className="data-footer">
                          <span className="listing-count">1 Listings</span>
                          <a
                            href="https://marketplace.exertiowp.com/services-search/?categories=253"
                            className="listing-count icon"
                          >
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>


              {/* Item 4 */}
              <SwiperSlide >
                <div className="item single-cat">
                  <div className="fr-explore-content">
                    <div className="fr-explore-product">
                      <a href="https://marketplace.exertiowp.com/services-search/?categories=253">
                        <img
                          decoding="async"
                          src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/graphics-designing1.jpg"
                          alt=""
                          className="img-fluid category-image"
                        />
                      </a>
                      <div className="explore-data">
                        <a href="https://marketplace.exertiowp.com/services-search/?categories=253">
                          <div className="fr-log-grid">
                            <img
                              decoding="async"
                              src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/design-svgrepo-com.svg"
                              alt=""
                            />
                          </div>
                        </a>
                        <div className="fr-explore-container">
                          <a href="https://marketplace.exertiowp.com/services-search/?categories=253">
                            <div className="fr-heading-style">Graphic Designing</div>
                          </a>
                        </div>
                        <div className="data-footer">
                          <span className="listing-count">1 Listings</span>
                          <a
                            href="https://marketplace.exertiowp.com/services-search/?categories=253"
                            className="listing-count icon"
                          >
                            <i className="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Custom navigation buttons */}
              <div className="swiper-button-prev">
                <i className="lni lni-chevron-left"></i>
              </div>
              <div className="swiper-button-next">
                <i className="lni lni-chevron-right"></i>
              </div>
            </Swiper>
          </Col>
        </div>
      </div>
    </section>
    </>
  )
}

export default ExploreCats