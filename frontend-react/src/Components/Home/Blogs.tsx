import { Col } from 'react-bootstrap';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const Blogs = () => {

  const images = [
    { src: 'https://marketplace.exertiowp.com/wp-content/uploads/2025/07/Layer-6891-1.png', alt: 'Layer-6891 1' },
    { src: 'https://marketplace.exertiowp.com/wp-content/uploads/2025/07/Layer-691-1.png', alt: 'Layer-691 1' },
    { src: 'https://marketplace.exertiowp.com/wp-content/uploads/2025/07/668-2.png', alt: '668 2' },
    { src: 'https://marketplace.exertiowp.com/wp-content/uploads/2025/07/667-1.png', alt: '667 1' },
    { src: 'https://marketplace.exertiowp.com/wp-content/uploads/2025/07/Layer-691-1.png', alt: 'Layer-691 1' },
    { src: 'https://marketplace.exertiowp.com/wp-content/uploads/2025/07/668-1.png', alt: '668 1' },
    { src: 'https://marketplace.exertiowp.com/wp-content/uploads/2025/07/Layer-691-1.png', alt: 'Layer-691 1' },
    { src: 'https://marketplace.exertiowp.com/wp-content/uploads/2025/07/668-1.png', alt: '668 1' },
    { src: 'https://marketplace.exertiowp.com/wp-content/uploads/2025/07/668-2.png', alt: '668 2' },
  ];


  return (
    <>
      <section className="blog-sec">
							<div className="container">
								<div className="row">
									<div className="col-xl-12 col-lg-12 col-xs-12 col-md-12 col-xs-12">
										<div className="heading-panel  section-center">
							<div className="heading-meta">
							  <h2>Latest Blog News</h2>
							  <p>Trends and what are future techs to be master in Exertio</p>
							</div>
							
							</div>
									</div>
								</div>
								<div className="row grid">
									<div className="col-xxl-3 col-xl-4 col-sm-6 col-lg-6 col-xs-12 col-md-6 grid-item">
									<div className="fr-latest-box">
									 <div className="fr-latest-content"><a href="https://marketplace.exertiowp.com/what-is-cybersecurity/">
								<img decoding="async" width="420" height="250" src="https://marketplace.exertiowp.com/wp-content/uploads/2020/12/bigstock-204415228-420x250.jpg" className="img-fluid wp-post-image" alt="" /> </a>				
						</div>
									  <div className="fr-latest-sm">
										<div className="fr-latest-content"> <a href="https://marketplace.exertiowp.com/what-is-cybersecurity/">
										  <h3>What is cybersecurity and why is…</h3>
										  </a>
										  <div className="fr-latest-style">
											<ul>
											  <li> <a href="https://marketplace.exertiowp.com/author/exertio/">
												<div className="fr-latest-profile"> <img alt="" src="https://secure.gravatar.com/avatar/af5afdf2d68775440183a152bd5df8df1be0faba9e4ab33d2bab000e6e53bd2b?s=40&amp;d=retro&amp;r=g" className="avatar avatar-40 photo" height="40" width="40" /><span>exertio</span> </div>
												</a> </li>
											  <li>
												<div className="fr-latest-profile"> <i className="fa fa-calendar"></i> <span>December 29, 2020</span> </div>
											  </li>
											</ul>
										  </div>
										</div>
										<div className="fr-latest-container">
										  <p>A practical guide for business owners looking to…</p>
										  <a href="https://marketplace.exertiowp.com/what-is-cybersecurity/"><span className="readmore">Read More<i className="fas fa-long-arrow-alt-right"></i></span></a> </div>
									  </div>
									</div>
								</div><div className="col-xxl-3 col-xl-4 col-sm-6 col-lg-6 col-xs-12 col-md-6 grid-item" >
									<div className="fr-latest-box">
									 <div className="fr-latest-content"><a href="https://marketplace.exertiowp.com/how-to-turn-your-skills-into-a-business/">
								<img decoding="async" width="420" height="250" src="https://marketplace.exertiowp.com/wp-content/uploads/2020/12/971-420x250.jpg" className="img-fluid wp-post-image" alt="" /> </a>				
						</div>
									  <div className="fr-latest-sm">
										<div className="fr-latest-content"> <a href="https://marketplace.exertiowp.com/how-to-turn-your-skills-into-a-business/">
										  <h3>How to turn your programming skills…</h3>
										  </a>
										  <div className="fr-latest-style">
											<ul>
											  <li> <a href="https://marketplace.exertiowp.com/author/exertio/">
												<div className="fr-latest-profile"> <img alt="" src="https://secure.gravatar.com/avatar/af5afdf2d68775440183a152bd5df8df1be0faba9e4ab33d2bab000e6e53bd2b?s=40&amp;d=retro&amp;r=g" className="avatar avatar-40 photo" height="40" width="40" /><span>exertio</span> </div>
												</a> </li>
											  <li>
												<div className="fr-latest-profile"> <i className="fa fa-calendar"></i> <span>December 29, 2020</span> </div>
											  </li>
											</ul>
										  </div>
										</div>
										<div className="fr-latest-container">
										  <p>Life is insane. It’s constantly been valid, however…</p>
										  <a href="https://marketplace.exertiowp.com/how-to-turn-your-skills-into-a-business/"><span className="readmore">Read More<i className="fas fa-long-arrow-alt-right"></i></span></a> </div>
									  </div>
									</div>
								</div><div className="col-xxl-3 col-xl-4 col-sm-6 col-lg-6 col-xs-12 col-md-6 grid-item" >
									<div className="fr-latest-box">
									 <div className="fr-latest-content"><a href="https://marketplace.exertiowp.com/digital-marketing-guides/">
								<img decoding="async" width="420" height="250" src="https://marketplace.exertiowp.com/wp-content/uploads/2020/12/17261-420x250.jpg" className="img-fluid wp-post-image" alt="" /> </a>				
						</div>
									  <div className="fr-latest-sm">
										<div className="fr-latest-content"> <a href="https://marketplace.exertiowp.com/digital-marketing-guides/">
										  <h3>Worth reading digital marketing guides: A…</h3>
										  </a>
										  <div className="fr-latest-style">
											<ul>
											  <li> <a href="https://marketplace.exertiowp.com/author/exertio/">
												<div className="fr-latest-profile"> <img alt="" src="https://secure.gravatar.com/avatar/af5afdf2d68775440183a152bd5df8df1be0faba9e4ab33d2bab000e6e53bd2b?s=40&amp;d=retro&amp;r=g"  className="avatar avatar-40 photo" height="40" width="40" /><span>exertio</span> </div>
												</a> </li>
											  <li>
												<div className="fr-latest-profile"> <i className="fa fa-calendar"></i> <span>December 29, 2020</span> </div>
											  </li>
											</ul>
										  </div>
										</div>
										<div className="fr-latest-container">
										  <p>It’s most likely protected to expect a significant…</p>
										  <a href="https://marketplace.exertiowp.com/digital-marketing-guides/"><span className="readmore">Read More<i className="fas fa-long-arrow-alt-right"></i></span></a> </div>
									  </div>
									</div>
								</div><div className="col-xxl-3 col-xl-4 col-sm-6 col-lg-6 col-xs-12 col-md-6 grid-item">
									<div className="fr-latest-box">
									 <div className="fr-latest-content"><a href="https://marketplace.exertiowp.com/what-is-project-management/">
								<img loading="lazy" decoding="async" width="420" height="250" src="https://marketplace.exertiowp.com/wp-content/uploads/2020/12/project-managment-420x250.jpg" className="img-fluid wp-post-image" alt="" /> </a>				
						</div>
									  <div className="fr-latest-sm">
										<div className="fr-latest-content"> <a href="https://marketplace.exertiowp.com/what-is-project-management/">
										  <h3>Research Article: What should be the…</h3>
										  </a>
										  <div className="fr-latest-style">
											<ul>
											  <li> <a href="https://marketplace.exertiowp.com/author/exertio/">
												<div className="fr-latest-profile"> <img alt="" src="https://secure.gravatar.com/avatar/af5afdf2d68775440183a152bd5df8df1be0faba9e4ab33d2bab000e6e53bd2b?s=40&amp;d=retro&amp;r=g" className="avatar avatar-40 photo" height="40" width="40" /><span>exertio</span> </div>
												</a> </li>
											  <li>
												<div className="fr-latest-profile"> <i className="fa fa-calendar"></i> <span>December 29, 2020</span> </div>
											  </li>
											</ul>
										  </div>
										</div>
										<div className="fr-latest-container">
										  <p>Truly, the task director is answerable for the…</p>
										  <a href="https://marketplace.exertiowp.com/what-is-project-management/"><span className="readmore">Read More<i className="fas fa-long-arrow-alt-right"></i></span></a> </div>
									  </div>
									</div>
								</div>
								</div>
							</div>
	  </section>

      <section className="blog-sec-lower">
      <div className="container">
        <Col lg={5} md={12} className="swiper-outer text-center mt-1 mt-lg-0 mb-5 mb-lg-0">
          <Swiper
            slidesPerView={6}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            loop={true}
            speed={500}
            modules={[Autoplay]}
            className="image-carousel"
          >
            {images.map((image, idx) => (
              <SwiperSlide key={idx} style={{ width: '233.333px' }}>
                <img src={image.src} alt={image.alt} className="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </div>
    </section>

    <section className="fr-bg-style2 ">
		  <div className="container">
			<div className="row">
			  <div className="col-xl-12 col-xs-12 col-sm-12 col-md-12">
				<div className="fr-bg-style">
				  <div className="row">
					<div className="col-xl-8 col-lg-8">
					  <div className="fr-gt-content">
						<h3>Ready To Get Started</h3>
						<p>The Exertio is a Premium WordPress Theme, you can create your own market place website using this theme. It allows you to get a commission for hiring a freelancer or for each service sold.</p>
					  </div>
					</div>
										<div className="col-xl-4 col-lg-4 align-self-center">
					  <div className="fr-gt-btn"> <a href="https://marketplace.exertiowp.com/login/" className="btn btn-theme">Get Started</a> </div>
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

export default Blogs