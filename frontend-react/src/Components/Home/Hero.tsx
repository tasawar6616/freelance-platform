import { Container, Row, Col, Button } from 'react-bootstrap';
import HeroImage from '../../assets/images/hero_image.png'
const Hero = () => {
  return (
    <>
    <section className="fr-hero-ad fr-hero hero-5 hero-7">
        <Container>
            <Row>
                <Col xl={12}>
                    <div className="hero-text">
                        <Row>
                            <Col lg={7} md={12} className='py-lg-1 py-5'>
                              <div className='fr-hero-content'>
                                 <h1>
                                Join <span className="pink">Remote Platform</span>
                                To Work With Top Global Industry Leaders</h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">Design your full-time freelance career with Total! Enjoy the flexibility of remote work with the stability of a full-time role and the freedom to choose innovative and challenging jobs with top companies.</p>
                              </div>

                              <div className='mt-3'>
                                 <Button variant="dark" className="me-2 btn secondary-btn">Find Talent Now</Button>
                               </div>
                             
                            </Col>
                            <Col lg={5} md={12} className="text-center mt-1 mt-lg-0 mb-lg-0 mb-5">
                              <div className='fr-hero-content'>
                                <img src={HeroImage} alt="hero image" />
                                </div>
                            </Col>
                             
                           

                        </Row>
                    </div>
             <div className='hero-freelancers'>
                <Row>
                 <Col>
					<div className="hero_fl_box_wrapper">
						<div className="hero-freelancer-box">
							<div className="freelancer-img">
								<a href="https://marketplace.exertiowp.com/freelancer/finn/"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2021/01/3-1.jpg" alt="" className="img-fluid" /></a>
							</div>
							<div className="freelancer-data">
								<div className="freelancer-name"><i className="fa fa-check"></i>Hannah Fin...</div>
								<h4 className="freelancer-tagline">Mobile APP Developme...</h4>
								
							<div className="freelancer-rate">
								<img decoding="async" src="https://marketplace.exertiowp.com/wp-content/themes/exertio/images/money-icon.svg" alt="Hourly Rate Icon" />
								<span className="ms-2"><span className="currency">$</span><span className="price">25.00</span></span>
								<span className="rate-unit ms-2">hourly</span>
							</div>
							</div>
						</div>
					</div>
					<div className="hero_fl_box_wrapper">
						<div className="hero-freelancer-box">
							<div className="freelancer-img">
								<a href="https://marketplace.exertiowp.com/freelancer/dean/"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2021/01/deam-profile.jpg" alt="" className="img-fluid" /></a>
							</div>
							<div className="freelancer-data">
								<div className="freelancer-name"><i className="fa fa-check"></i>AsliSincer...</div>
								<h4 className="freelancer-tagline">Graphic Designer</h4>
								
							<div className="freelancer-rate">
								<img decoding="async" src="https://marketplace.exertiowp.com/wp-content/themes/exertio/images/money-icon.svg" alt="Hourly Rate Icon" />
								<span className="ms-2"><span className="currency">$</span><span className="price">20.00</span></span>
								<span className="rate-unit ms-2">hourly</span>
							</div>
							</div>
						</div>
					</div>
					<div className="hero_fl_box_wrapper">
						<div className="hero-freelancer-box">
							<div className="freelancer-img">
								<a href="https://marketplace.exertiowp.com/freelancer/sam/"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2021/01/eshal-dp.jpg" alt="" className="img-fluid" /></a>
							</div>
							<div className="freelancer-data">
								<div className="freelancer-name"><i className="fa fa-check verified protip" data-pt-position="top" data-pt-scheme="black" data-pt-title="Verified"></i> Eshaal Meh...</div>
								<h4 className="freelancer-tagline">SEO Expert</h4>
								
							<div className="freelancer-rate">
								<img decoding="async" src="https://marketplace.exertiowp.com/wp-content/themes/exertio/images/money-icon.svg" alt="Hourly Rate Icon" />
								<span className="ms-2"><span className="currency">$</span><span className="price">15.00</span></span>
								<span className="rate-unit ms-2">hourly</span>
							</div>
							</div>
						</div>
					</div>
					<div className="hero_fl_box_wrapper">
						<div className="hero-freelancer-box">
							<div className="freelancer-img">
								<a href="https://marketplace.exertiowp.com/freelancer/edison/"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2021/01/edison-profile.jpg" alt="" className="img-fluid" /></a>
							</div>
							<div className="freelancer-data">
								<div className="freelancer-name"><i className="fa fa-check"></i>Edison Bel...</div>
								<h4 className="freelancer-tagline">Video Games and Apps</h4>
								
							<div className="freelancer-rate">
								<img decoding="async" src="https://marketplace.exertiowp.com/wp-content/themes/exertio/images/money-icon.svg" alt="Hourly Rate Icon" />
								<span className="ms-2"><span className="currency">$</span><span className="price">30.00</span></span>
								<span className="rate-unit ms-2">hourly</span>
							</div>
							</div>
						</div>
					</div>
					<div className="hero_fl_box_wrapper">
						<div className="hero-freelancer-box">
							<div className="freelancer-img">
								<a href="https://marketplace.exertiowp.com/freelancer/jason/"><img decoding="async" src="https://marketplace.exertiowp.com/wp-content/uploads/2020/12/jason-dp450.jpg" alt="" className="img-fluid" /></a>
							</div>
							<div className="freelancer-data">
								<div className="freelancer-name"><i className="fa fa-check"></i>Voorhees J...</div>
								<h4 className="freelancer-tagline">Social Media Expert</h4>
								
							<div className="freelancer-rate">
								<img decoding="async" src="https://marketplace.exertiowp.com/wp-content/themes/exertio/images/money-icon.svg" alt="Hourly Rate Icon" />
								<span className="ms-2"><span className="currency">$</span><span className="price">18.00</span></span>
								<span className="rate-unit ms-2">hourly</span>
							</div>
							</div>
						</div>
					</div>
                </Col>
			</Row>

            </div>

        </Col>
   </Row>
</Container>
</section>
   
    </>
  )
}

export default Hero