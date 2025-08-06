import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import { useEffect } from 'react';
import { useRef } from 'react';
const ExploreCats = () => {
    const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      tns({
        container: sliderRef.current,
        items: 3,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        gutter: 0,
        nav: false,
        controls: true,
        controlsText: [
          '<i className="lni lni-chevron-left"></i>',
          '<i className="lni lni-chevron-right"></i>'
        ],
        responsive: {
          0: {
            items: 1
          },
          540: {
            items: 2
          },
          768: {
            items: 4
          },
          992: {
            items: 5
          },
          1170: {
            items: 6
          }
        }
      });
    }
  }, []);
  return (
    <>
<section className="fr-explore-cat category-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-xs-12 col-sm-12 col-md-12 col-xl-12 explore-position category-3-section">
        <input type="hidden" id="category_slider_autoplay" value="yes" />

        <input type="hidden" id="category_slider_autoplay_time" value="3000" />


        
        <div className="heading-panel  section-left">
            <div className="heading-meta">
            <h2>Explore Your Categories</h2>
            <p>Freelancing talent at your fingertips at a reasonable cost</p>
            </div>
    
            </div>
        </div>
        <div className="col-xl-12 col-xs-12 col-md-12 col-lg-12">
           <div className="category_slider" ref={sliderRef}>
            {/* item 1 */}

                <div className="item single-cat" >
                    <div className="fr-explore-content">
                        <div className="fr-explore-product">
                            <a href="https://marketplace.exertiowp.com/services-search/?categories=233"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/servcie-provider1.jpg" alt="" className="img-fluid category-image" /></a>
                            <div className="explore-data">
                                <a href="https://marketplace.exertiowp.com/services-search/?categories=233">
                                    <div className="fr-log-grid"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/support-svgrepo-com.svg" alt="" /></div>
                                </a>
                                <div className="fr-explore-container">
                                    <a href="https://marketplace.exertiowp.com/services-search/?categories=233">
                                        <div className="fr-heading-style">Services Provider</div>
                                    </a>
                                </div>
                                <div className="data-footer">
                                    <span className="listing-count">1 Listings</span>
                                    <a href="https://marketplace.exertiowp.com/services-search/?categories=233" className="listing-count icon"><i className="fas fa-arrow-right" ></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* item 2 */}

                  <div className="item single-cat">
                        <div className="fr-explore-content">
                            <div className="fr-explore-product">
                                <a href="https://marketplace.exertiowp.com/services-search/?categories=234"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/marketing1.jpg" alt="" className="img-fluid category-image" /></a>
                                <div className="explore-data">
                                    <a href="https://marketplace.exertiowp.com/services-search/?categories=234">
                                        <div className="fr-log-grid"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/marketing-speaker-svgrepo-com.svg" alt="" /></div>
                                    </a>
                                    <div className="fr-explore-container">
                                        <a href="https://marketplace.exertiowp.com/services-search/?categories=234">
                                            <div className="fr-heading-style">Marketing</div>
                                        </a>
                                    </div>
                                    <div className="data-footer">
                                        <span className="listing-count">2 Listings</span>
                                        <a href="https://marketplace.exertiowp.com/services-search/?categories=234" className="listing-count icon"><i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>

                {/* item 3 */}
                
                <div className="item single-cat">
                    <div className="fr-explore-content">
                        <div className="fr-explore-product">
                            <a href="https://marketplace.exertiowp.com/services-search/?categories=193"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/web-dev-small1.jpg" alt="" className="img-fluid category-image" /></a>
                            <div className="explore-data">
                                <a href="https://marketplace.exertiowp.com/services-search/?categories=193">
                                    <div className="fr-log-grid"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/coding-svgrepo-com.svg" alt="" /></div>
                                </a>
                                <div className="fr-explore-container">
                                    <a href="https://marketplace.exertiowp.com/services-search/?categories=193">
                                        <div className="fr-heading-style">Web Development</div>
                                    </a>
                                </div>
                                <div className="data-footer">
                                    <span className="listing-count">1 Listings</span>
                                    <a href="https://marketplace.exertiowp.com/services-search/?categories=193" className="listing-count icon"><i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>

                {/* item 4 */}

                <div className="item single-cat">
                    <div className="fr-explore-content">
                        <div className="fr-explore-product">
                            <a href="https://marketplace.exertiowp.com/services-search/?categories=253"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/graphics-designing1.jpg" alt="" className="img-fluid category-image" /></a>
                            <div className="explore-data">
                                <a href="https://marketplace.exertiowp.com/services-search/?categories=253">
                                    <div className="fr-log-grid"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2025/07/design-svgrepo-com.svg" alt="" /></div>
                                </a>
                                <div className="fr-explore-container">
                                    <a href="https://marketplace.exertiowp.com/services-search/?categories=253">
                                        <div className="fr-heading-style">Graphic Designing</div>
                                    </a>
                                </div>
                                <div className="data-footer">
                                    <span className="listing-count">1 Listings</span>
                                    <a href="https://marketplace.exertiowp.com/services-search/?categories=253" className="listing-count icon"><i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
			    </div>

            </div>
                   
                   
        </div>
        </div>
    </div>
</section>
    </>
  )
}

export default ExploreCats