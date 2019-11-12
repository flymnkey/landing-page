import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Dummy = () => {
  return (
    <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      <div className="site-wrap" id="home-section">

        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>

        <header className="site-navbar site-navbar-target" role="banner">

          <div className="container">
            <div className="row align-items-center position-relative">

              <div className="col-3 ">
                <div className="site-logo">
                  <a href="index.html" className="font-weight-bold">Mighty.</a>
                </div>
              </div>

              <div className="col-9  text-right">

                <span className="d-inline-block d-lg-block"><a href="#" className="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span className="icon-menu h3 text-white" /></a></span>

                <nav className="site-navigation text-right ml-auto d-none d-lg-none" role="navigation">
                  <ul className="site-menu main-menu js-clone-nav ml-auto ">
                    <li className="active"><a href="index.html" className="nav-link">Home</a></li>
                    <li><a href="about.html" className="nav-link">About</a></li>
                    <li><a href="work.html" className="nav-link">Work</a></li>
                    <li><a href="journal.html" className="nav-link">Journal</a></li>
                    <li><a href="contact.html" className="nav-link">Contact</a></li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </header>

        <div className="ftco-blocks-cover-1">
          <div className="site-section-cover overlay" style={{ 'background-image': 'url(../images/hero_1.jpg)' }}>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7 text-center">
                  <h1 className="mb-4 text-white">Mighty Web Design Agency</h1>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
                  <p><a href="#" className="btn btn-primary btn-outline-white py-3 px-5">Contact Us</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2 className="h4 mb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae voluptatem mollitia obcaecati quod maxime. Soluta libero eligendi voluptatum, natus debitis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quasi!</p>
                <p><a href="#" className="btn btn-primary text-white px-5">Our works</a></p>
              </div>
              <div className="col-md-4">
                <img src="images/about_1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-4">

                <h2 className="h4 mb-4">Our expertise and skills</h2>

                <div className="progress-wrap mb-4">
                  <div className="d-flex">
                    <span>Writing</span>
                    <span className="ml-auto">55%</span>
                  </div>
                  <div className="progress rounded-0" style={{ 'height': '7px;' }}>
                    <div className="progress-bar" role="progressbar" style={{ 'width': '55%;' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" />
                  </div>
                </div>

                <div className="progress-wrap mb-4">
                  <div className="d-flex">
                    <span>WordPress</span>
                    <span className="ml-auto">85%</span>
                  </div>
                  <div className="progress rounded-0" style={{ 'height': '7px;' }}>
                    <div className="progress-bar" role="progressbar" style={{ 'width': '85%;' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" />
                  </div>
                </div>

                <div className="progress-wrap mb-4">
                  <div className="d-flex">
                    <span>Bootstrap</span>
                    <span className="ml-auto">93%</span>
                  </div>
                  <div className="progress rounded-0" style={{ 'height': '7px;' }}>
                    <div className="progress-bar" role="progressbar" style={{ 'width': '93%;' }} aria-valuenow="93" aria-valuemin="0" aria-valuemax="100" />
                  </div>
                </div>

                <div className="progress-wrap mb-4">
                  <div className="d-flex">
                    <span>jQuery</span>
                    <span className="ml-auto">83%</span>
                  </div>
                  <div className="progress rounded-0" style={{ 'height': '7px;' }}>
                    <div className="progress-bar" role="progressbar" style={{ 'width': '83%;' }} aria-valuenow="83" aria-valuemin="0" aria-valuemax="100" />
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-7 mx-auto text-center">
                <h2 className="heading-29190">Our Services</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="service-29128 text-center">
                  <span className="d-block wrap-icon">
                    <span className="icon-desktop_mac" />
                  </span>
                  <h3>Web Design</h3>
                  <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-29128 text-center">
                  <span className="d-block wrap-icon">
                    <span className="icon-desktop_mac" />
                  </span>
                  <h3>Graphic Design</h3>
                  <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-29128 text-center">
                  <span className="d-block wrap-icon">
                    <span className="icon-desktop_mac" />
                  </span>
                  <h3>Web Apps</h3>
                  <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-29128 text-center">
                  <span className="d-block wrap-icon">
                    <span className="icon-desktop_mac" />
                  </span>
                  <h3>Ecommerce</h3>
                  <p>Lorem ipsum dolor sit amet. Consectetur adipisicing elit Eaque commodi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">

            <div className="row mb-5">
              <div className="col-md-7 mx-auto text-center">
                <h2 className="heading-29190">Our Works</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="item web">
                  <a href="work-single.html" className="item-wrap" data-fancybox="gal">
                    <span className="icon-add" />
                    <img className="img-fluid" alt="" src="images/img_1.jpg" />
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="item web">
                  <a href="work-single.html" className="item-wrap" data-fancybox="gal">
                    <span className="icon-add" />
                    <img className="img-fluid" alt="" src="images/img_2.jpg" />
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="item web">
                  <a href="work-single.html" className="item-wrap" data-fancybox="gal">
                    <span className="icon-add" />
                    <img className="img-fluid" alt="" src="images/img_3.jpg" />
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="item web">
                  <a href="work-single.html" className="item-wrap" data-fancybox="gal">
                    <span className="icon-add" />
                    <img className="img-fluid" alt="" src="images/img_4.jpg" />
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="item web">
                  <a href="work-single.html" className="item-wrap" data-fancybox="gal">
                    <span className="icon-add" />
                    <img className="img-fluid" alt="" src="images/img_5.jpg" />
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="item web">
                  <a href="work-single.html" className="item-wrap" data-fancybox="gal">
                    <span className="icon-add" />
                    <img className="img-fluid" alt="" src="images/img_6.jpg" />
                  </a>
                </div>
              </div>

            </div>


          </div>
        </div>
        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="fact-39281 d-flex align-items-center">
                  <div className="wrap-icon mr-3">
                    <span className="icon-smile-o" />
                  </div>
                  <div className="text">
                    <span className="d-block">83</span>
                    <span>Happy Clients</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="fact-39281 d-flex align-items-center">
                  <div className="wrap-icon mr-3">
                    <span className="icon-coffee" />
                  </div>
                  <div className="text">
                    <span className="d-block">3892</span>
                    <span>Cup of Coffee</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="fact-39281 d-flex align-items-center">
                  <div className="wrap-icon mr-3">
                    <span className="icon-code" />
                  </div>
                  <div className="text">
                    <span className="d-block">3,923,892</span>
                    <span>Line of Codes</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="fact-39281 d-flex align-items-center">
                  <div className="wrap-icon mr-3">
                    <span className="icon-desktop_mac" />
                  </div>
                  <div className="text">
                    <span className="d-block">3892</span>
                    <span>Project Finish</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-7 mx-auto text-center">
                <h2 className="heading-29190">See Our Studio</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">

                <a href="https://vimeo.com/191947042" data-fancybox className="btn-video_38929">
                  <span><span className="icon-play" /></span>
                  <img src="images/img_1.jpg" alt="" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-light">
          <div className="container">

            <div className="row mb-5">
              <div className="col-md-7 mx-auto text-center">
                <h2 className="heading-29190">Testimonials</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">

                <div>
                  <div className="person-pic-39219 mb-4">
                    <img src="images/person_1.jpg" alt="" className="img-fluid" />
                  </div>

                  <blockquote className="quote_39823">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi accusantium non aut perspiciatis nisi magni libero, molestias.</p>
                  </blockquote>
                  <p>&mdash; Chris Smith</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">


                <div>
                  <div className="person-pic-39219 mb-4">
                    <img src="images/person_2.jpg" alt="" className="img-fluid" />
                  </div>
                  <blockquote className="quote_39823">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi accusantium non aut perspiciatis nisi magni libero, molestias.</p>
                  </blockquote>
                  <p>&mdash; Chris Smith</p>
                </div>

              </div>
              <div className="col-lg-4 col-md-6">

                <div>
                  <div className="person-pic-39219 mb-4">
                    <img src="images/person_3.jpg" alt="" className="img-fluid" />
                  </div>
                  <blockquote className="quote_39823">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas excepturi accusantium non aut perspiciatis nisi magni libero, molestias.</p>
                  </blockquote>
                  <p>&mdash; Chris Smith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-white">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-7 mx-auto text-center">
                <h2 className="heading-29190">Blog</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="post-entry-1 h-100">
                  <a href="single.html">
                    <img src="images/img_1.jpg" alt="" className="img-fluid" />
                  </a>
                  <div className="post-entry-1-contents">

                    <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
                    <span className="meta d-inline-block mb-3">July 17, 2019 <span className="mx-2">by</span> <a href="#">Admin</a></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="post-entry-1 h-100">
                  <a href="single.html">
                    <img src="images/img_2.jpg" alt="" className="img-fluid" />
                  </a>
                  <div className="post-entry-1-contents">

                    <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
                    <span className="meta d-inline-block mb-3">July 17, 2019 <span className="mx-2">by</span> <a href="#">Admin</a></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="post-entry-1 h-100">
                  <a href="single.html">
                    <img src="images/img_3.jpg" alt="" className="img-fluid" />
                  </a>
                  <div className="post-entry-1-contents">

                    <h2><a href="single.html">Lorem ipsum dolor sit amet</a></h2>
                    <span className="meta d-inline-block mb-3">July 17, 2019 <span className="mx-2">by</span> <a href="#">Admin</a></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h2 className="footer-heading mb-3">About Me</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
              </div>
              <div className="col-lg-8 ml-auto">
                <div className="row">
                  <div className="col-lg-6 ml-auto">
                    <h2 className="footer-heading mb-4">Quick Links</h2>
                    <ul className="list-unstyled">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Testimonials</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Privacy</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <h2 className="footer-heading mb-4">Connect</h2>
                    <div className="social_29128 white mb-5">
                      <a href="#"><span className="icon-facebook" /></a>
                      <a href="#"><span className="icon-instagram" /></a>
                      <a href="#"><span className="icon-twitter" /></a>
                    </div>
                    <h2 className="footer-heading mb-4">Newsletter</h2>
                    <form action="#" className="d-flex, subscribe">
                      <input type="text" className="form-control mr-3" placeholder="Email" />
                      <input type="submit" value="Send" className="btn btn-primary" />
                    </form>
                  </div>

                </div>
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <div className="border-top pt-5">
                  <p>
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://colorlib.com" rel="noopener noreferrer" target="_blank">Colorlib</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </footer>

      </div>
      <div>
        <script src="js/jquery-3.3.1.min.js" />
        <script src="js/jquery-migrate-3.0.0.js" />
        <script src="js/popper.min.js" />
        <script src="js/bootstrap.min.js" />
        <script src="js/owl.carousel.min.js" />
        <script src="js/jquery.sticky.js" />
        <script src="js/jquery.waypoints.min.js" />
        <script src="js/jquery.animateNumber.min.js" />
        <script src="js/jquery.fancybox.min.js" />
        <script src="js/jquery.stellar.min.js" />
        <script src="js/jquery.easing.1.3.js" />
        <script src="js/bootstrap-datepicker.min.js" />
        <script src="js/isotope.pkgd.min.js" />
        <script src="js/aos.js" />

        <script src="js/main.js" />
      </div>
    </body>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
