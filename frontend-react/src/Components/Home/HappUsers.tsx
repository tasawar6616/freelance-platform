import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const HappUsers = () => {
  return (
    <>
      <section className="fr-about2-client fr-about-client review_3" style={{ backgroundImage: `url('https://marketplace.exertiowp.com/wp-content/uploads/2025/07/carousel-bg-full.png')` }}>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-7 col-xl-5 col-sm-10 col-md-10 col-xs-12 mx-auto">
            <div className="heading-panel section-center">
              <div className="heading-meta">
                <h2>Our Happy User!</h2>
                <p>Freelancing talent at your fingertips</p>
              </div>
            </div>

            <div className="client-slider owl-carousel owl-theme owl-loaded owl-drag">
              
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10} // Matches margin-right from Owl
                  
                  pagination={{ clickable: true, el: '.owl-dots' }}
                  modules={[Navigation, Autoplay, Pagination]}
                  autoplay={{ delay: 2500, disableOnInteraction: false }} // Matches Owl transition
                  loop={true}
                  className="owl-stage-outer"
                >
                  <SwiperSlide className="owl-item cloned">
                    <div className="item review_3_item">
                      <div className="fr-c-about-style">
                        <div className="fr-c-about-profile">
                          <img
                            decoding="async"
                            src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/4.avif"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="fr-client-about-details">
                          <p>Exertio’s platform is built for remote teams. It’s simple, fast, and allows me to manage my team effectively.</p>
                          <div className="fr-client-sm">
                            <p>Sophia Ahmed</p>
                            <span>Remote Team Lead</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="owl-item cloned">
                    <div className="item review_3_item">
                      <div className="fr-c-about-style">
                        <div className="fr-c-about-profile">
                          <img
                            decoding="async"
                            src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/1.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="fr-client-about-details">
                          <p>As a freelance designer, I appreciate how Exertio helps me showcase my work and connect with the right clients.</p>
                          <div className="fr-client-sm">
                            <p>Chloe Robinson</p>
                            <span>Freelance Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="owl-item">
                    <div className="item review_3_item">
                      <div className="fr-c-about-style">
                        <div className="fr-c-about-profile">
                          <img
                            decoding="async"
                            src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/2.avif"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="fr-client-about-details">
                          <p>Exertio made hiring so easy! I was able to find skilled professionals within days. It’s user-friendly and reliable.</p>
                          <div className="fr-client-sm">
                            <p>Emily Watson</p>
                            <span>HR Consultant</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="owl-item">
                    <div className="item review_3_item">
                      <div className="fr-c-about-style">
                        <div className="fr-c-about-profile">
                          <img
                            decoding="async"
                            src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/3.avif"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="fr-client-about-details">
                          <p>I’ve worked with several freelancers here, and the process has always been smooth and transparent. Kudos to the team!</p>
                          <div className="fr-client-sm">
                            <p>Olivia Martinez</p>
                            <span>Digital Marketer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="owl-item">
                    <div className="item review_3_item">
                      <div className="fr-c-about-style">
                        <div className="fr-c-about-profile">
                          <img
                            decoding="async"
                            src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/4.avif"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="fr-client-about-details">
                          <p>Exertio’s platform is built for remote teams. It’s simple, fast, and allows me to manage my team effectively.</p>
                          <div className="fr-client-sm">
                            <p>Sophia Ahmed</p>
                            <span>Remote Team Lead</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="owl-item active">
                    <div className="item review_3_item">
                      <div className="fr-c-about-style">
                        <div className="fr-c-about-profile">
                          <img
                            decoding="async"
                            src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/1.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="fr-client-about-details">
                          <p>As a freelance designer, I appreciate how Exertio helps me showcase my work and connect with the right clients.</p>
                          <div className="fr-client-sm">
                            <p>Chloe Robinson</p>
                            <span>Freelance Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Navigation */}
                  
                  {/* Pagination */}
                  <div className="owl-dots">
                    <button role="button" className="owl-dot">
                      <span></span>
                    </button>
                    <button role="button" className="owl-dot">
                      <span></span>
                    </button>
                    <button role="button" className="owl-dot">
                      <span></span>
                    </button>
                    <button role="button" className="owl-dot active">
                      <span></span>
                    </button>
                  </div>
                </Swiper>
             
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HappUsers