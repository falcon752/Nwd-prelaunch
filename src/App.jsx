import './App.css'
import { useState, useEffect } from 'react'

function CountdownTimer() {
  const [countdown, setCountdown] = useState({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0
  })

  useEffect(() => {
    // Set a target date 3 months from now
    const targetDate = new Date()
    targetDate.setMonth(targetDate.getMonth() + 3)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate - now

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000)
        const totalMinutes = Math.floor(totalSeconds / 60)
        const totalHours = Math.floor(totalMinutes / 60)
        const totalDays = Math.floor(totalHours / 24)
        
        const months = Math.floor(totalDays / 30)
        const weeks = Math.floor((totalDays % 30) / 7)
        const days = totalDays % 7
        const hours = totalHours % 24

        setCountdown({ months, weeks, days, hours })
      } else {
        setCountdown({ months: 0, weeks: 0, days: 0, hours: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown-display">
      <div className="countdown-item">
        <span className="countdown-number">{countdown.months}</span>
        <span className="countdown-label">Months</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{countdown.weeks}</span>
        <span className="countdown-label">Weeks</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{countdown.days}</span>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{countdown.hours}</span>
        <span className="countdown-label">Hours</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      {/* Preloader */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot" />
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#top" className="logo">
                  <h4>
                    Naija<span>WetinDey</span>
                  </h4>
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">Events</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">Places</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#portfolio">Updates</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#blog">Privacy</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#term">Terms</a>
                  </li>
                  {/* <li className="scroll-to-section">
                    <div className="main-red-button">
                      <a href="#contact">Contact Now</a>
                    </div>
                  </li> */}
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                    <h6>Welcome to NaijaWetinDey</h6>
                    <h2>
                      Your <span></span><em>Local Pulse</em> in Nigeria
                      <span></span>

                    </h2>
                    <p>
                      Find events, places, and updates happening right around you.
                    </p>
                    <div className="left-content countdown-wrapper">
                      <h5 className="countdown-title">Launching in</h5>
                      <CountdownTimer />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                    <img src="/assets/images/hero-image.png" alt="team meeting" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <img src="/assets/images/about-left-image.png" alt="person graphic" />
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="services">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                      <div className="icon">
                        <img src="/assets/images/service-icon-01.png" alt="reporting" />
                      </div>
                      <div className="right-text">
                        <h4>Data Analysis</h4>
                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                      <div className="icon">
                        <img src="/assets/images/service-icon-02.png" alt="data reporting" />
                      </div>
                      <div className="right-text">
                        <h4>Data Reporting</h4>
                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                      <div className="icon">
                        <img src="/assets/images/service-icon-03.png" alt="web analytics" />
                      </div>
                      <div className="right-text">
                        <h4>Web Analytics</h4>
                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                      <div className="icon">
                        <img src="/assets/images/service-icon-04.png" alt="seo suggestions" />
                      </div>
                      <div className="right-text">
                        <h4>SEO Suggestions</h4>
                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services" className="our-services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center  wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
              <div className="left-image">
                <img src="/assets/images/services-left-image.png" alt="services" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
              <div className="section-heading">
                <h2>
                  Grow your website with our <em>SEO</em> service &amp; <span>Project</span> Ideas
                </h2>
                <p>
                  NaijaWetinDey ships clear insights and practical campaigns. We keep the hustle lean, the stories bold,
                  and the results measurable.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="first-bar progress-skill-bar">
                    <h4>Website Analysis</h4>
                    <span>84%</span>
                    <div className="filled-bar" />
                    <div className="full-bar" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="second-bar progress-skill-bar">
                    <h4>SEO Reports</h4>
                    <span>88%</span>
                    <div className="filled-bar" />
                    <div className="full-bar" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="third-bar progress-skill-bar">
                    <h4>Page Optimizations</h4>
                    <span>94%</span>
                    <div className="filled-bar" />
                    <div className="full-bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div id="portfolio" className="our-portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading  wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <h2>
                  See What Our Agency <em>Offers</em> &amp; What We <span>Provide</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <a href="#">
                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                  <div className="hidden-content">
                    <h4>SEO Analysis</h4>
                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                  <div className="showed-content">
                    <img src="/assets/images/portfolio-image.png" alt="portfolio SEO" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-6">
              <a href="#">
                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                  <div className="hidden-content">
                    <h4>Website Reporting</h4>
                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                  <div className="showed-content">
                    <img src="/assets/images/portfolio-image.png" alt="portfolio reporting" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-6">
              <a href="#">
                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div className="hidden-content">
                    <h4>Performance Tests</h4>
                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                  <div className="showed-content">
                    <img src="/assets/images/portfolio-image.png" alt="portfolio performance" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-6">
              <a href="#">
                <div className="item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                  <div className="hidden-content">
                    <h4>Data Analysis</h4>
                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                  <div className="showed-content">
                    <img src="/assets/images/portfolio-image.png" alt="portfolio data" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div id="blog" className="our-blog section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
              <div className="section-heading">
                <h2>
                  Check Out What Is <em>Trending</em> In Our Latest <span>News</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.25s">
              <div className="top-dec">
                <img src="/assets/images/blog-dec.png" alt="decoration" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
              <div className="left-image">
                <a href="#">
                  <img src="/assets/images/big-blog-thumb.jpg" alt="workspace desktop" />
                </a>
                <div className="info">
                  <div className="inner-content">
                    <ul>
                      <li>
                        <i className="fa fa-calendar" /> 24 Mar 2021
                      </li>
                      <li>
                        <i className="fa fa-users" /> NaijaWetinDey
                      </li>
                      <li>
                        <i className="fa fa-folder" /> Branding
                      </li>
                    </ul>
                    <a href="#">
                      <h4>SEO Agency &amp; Digital Marketing</h4>
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et
                      dolore magna...
                    </p>
                    <div className="main-blue-button">
                      <a href="#">Discover More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.25s">
              <div className="right-list">
                <ul>
                  <li>
                    <div className="left-content align-self-center">
                      <span>
                        <i className="fa fa-calendar" /> 18 Mar 2021
                      </span>
                      <a href="#">
                        <h4>New Websites &amp; Backlinks</h4>
                      </a>
                      <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                    </div>
                    <div className="right-image">
                      <a href="#">
                        <img src="/assets/images/blog-thumb-01.jpg" alt="new websites" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="left-content align-self-center">
                      <span>
                        <i className="fa fa-calendar" /> 14 Mar 2021
                      </span>
                      <a href="#">
                        <h4>SEO Analysis &amp; Content Ideas</h4>
                      </a>
                      <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                    </div>
                    <div className="right-image">
                      <a href="#">
                        <img src="/assets/images/blog-thumb-01.jpg" alt="analysis" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="left-content align-self-center">
                      <span>
                        <i className="fa fa-calendar" /> 06 Mar 2021
                      </span>
                      <a href="#">
                        <h4>SEO Tips &amp; Digital Marketing</h4>
                      </a>
                      <p>Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                    </div>
                    <div className="right-image">
                      <a href="#">
                        <img src="/assets/images/blog-thumb-01.jpg" alt="seo tips" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="0.25s">
              <div className="section-heading">
                <h2>Feel Free To Send Us a Message About Your Website Needs</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor incididunt ut
                  labore et dolores
                </p>
                <div className="phone-info">
                  <h4>
                    For any enquiry, Call Us: <span><i className="fa fa-phone" /> <a href="#">010-020-0340</a></span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <input type="text" name="name" id="name" placeholder="Name" autoComplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="surname"
                        id="surname"
                        placeholder="Surname"
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="main-button ">
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
                <div className="contact-dec">
                  <img src="/assets/images/contact-decoration.png" alt="contact decoration" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
              <p>
                © 2026 NaijaWetinDey. All Rights Reserved.
                <br />
                Design: <a rel="nofollow" href="https://templatemo.com">TemplateMo</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
