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
      <div id="js-preloader" className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <div className="relative">
          <span className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary block animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:0.4s]" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <nav className="flex items-center justify-between w-full">
              <a href="#top" className="text-2xl font-bold">
                <h4 className="text-gray-800">
                  Naija<span className="text-primary">WetinDey</span>
                </h4>
              </a>
              <ul className="hidden lg:flex items-center gap-8">
                <li>
                  <a href="#top" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                    Places
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#term" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                    Terms
                  </a>
                </li>
              </ul>
              <button className="lg:hidden flex flex-col gap-1.5 p-2">
                <span className="w-6 h-0.5 bg-gray-800 block"></span>
                <span className="w-6 h-0.5 bg-gray-800 block"></span>
                <span className="w-6 h-0.5 bg-gray-800 block"></span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-gray-50 to-white" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6" data-wow-duration="1s" data-wow-delay="1s">
                <h6 className="text-primary font-semibold text-sm uppercase tracking-wider">Welcome to NaijaWetinDey</h6>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Your <span className="text-primary">Local Pulse</span> in Nigeria
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Find events, places, and updates happening right around you.
                </p>
                <div className="countdown-wrapper">
                  <h5 className="countdown-title">Launching in</h5>
                  <CountdownTimer />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="/assets/images/hero-image.png" alt="team meeting" className="w-full h-auto rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="relative" data-wow-duration="1s" data-wow-delay="0.2s">
                <img src="/assets/images/about-left-image.png" alt="person graphic" className="w-full h-auto rounded-2xl" />
              </div>
            </div>
            <div className="lg:col-span-8 flex items-center">
              <div className="w-full">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <img src="/assets/images/service-icon-01.png" alt="reporting" className="w-16 h-16" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Data Analysis</h4>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300" data-wow-duration="1s" data-wow-delay="0.7s">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <img src="/assets/images/service-icon-02.png" alt="data reporting" className="w-16 h-16" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Data Reporting</h4>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300" data-wow-duration="1s" data-wow-delay="0.9s">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <img src="/assets/images/service-icon-03.png" alt="web analytics" className="w-16 h-16" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Web Analytics</h4>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300" data-wow-duration="1s" data-wow-delay="1.1s">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <img src="/assets/images/service-icon-04.png" alt="seo suggestions" className="w-16 h-16" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">SEO Suggestions</h4>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
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
      <div id="services" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1" data-wow-duration="1s" data-wow-delay="0.2s">
              <div className="relative">
                <img src="/assets/images/services-left-image.png" alt="services" className="w-full h-auto rounded-2xl shadow-xl" />
              </div>
            </div>
            <div className="order-1 lg:order-2" data-wow-duration="1s" data-wow-delay="0.2s">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Grow your website with our <em className="text-primary not-italic">SEO</em> service &amp; <span className="text-secondary">Project</span> Ideas
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    NaijaWetinDey ships clear insights and practical campaigns. We keep the hustle lean, the stories bold,
                    and the results measurable.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">Website Analysis</h4>
                      <span className="text-primary font-bold">84%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full" style={{width: '84%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">SEO Reports</h4>
                      <span className="text-primary font-bold">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">Page Optimizations</h4>
                      <span className="text-primary font-bold">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div id="portfolio" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12" data-wow-duration="1s" data-wow-delay="0.2s">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See What Our Agency <em className="text-primary not-italic">Offers</em> &amp; What We <span className="text-secondary">Provide</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" data-wow-duration="1s" data-wow-delay="0.3s">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center p-6">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-bold mb-2">SEO Analysis</h4>
                    <p className="text-sm">Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                </div>
                <img src="/assets/images/portfolio-image.png" alt="portfolio SEO" className="w-full h-auto" />
              </div>
            </a>
            <a href="#" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" data-wow-duration="1s" data-wow-delay="0.4s">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center p-6">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-bold mb-2">Website Reporting</h4>
                    <p className="text-sm">Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                </div>
                <img src="/assets/images/portfolio-image.png" alt="portfolio reporting" className="w-full h-auto" />
              </div>
            </a>
            <a href="#" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center p-6">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-bold mb-2">Performance Tests</h4>
                    <p className="text-sm">Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                </div>
                <img src="/assets/images/portfolio-image.png" alt="portfolio performance" className="w-full h-auto" />
              </div>
            </a>
            <a href="#" className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" data-wow-duration="1s" data-wow-delay="0.6s">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center p-6">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-bold mb-2">Data Analysis</h4>
                    <p className="text-sm">Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                </div>
                <img src="/assets/images/portfolio-image.png" alt="portfolio data" className="w-full h-auto" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div id="blog" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div data-wow-duration="1s" data-wow-delay="0.25s">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Check Out What Is <em className="text-primary not-italic">Trending</em> In Our Latest <span className="text-secondary">News</span>
              </h2>
            </div>
            <div className="flex justify-end" data-wow-duration="1s" data-wow-delay="0.25s">
              <img src="/assets/images/blog-dec.png" alt="decoration" className="max-w-xs" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6" data-wow-duration="1s" data-wow-delay="0.25s">
              <a href="#" className="block group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img src="/assets/images/big-blog-thumb.jpg" alt="workspace desktop" className="w-full h-auto group-hover:scale-110 transition-transform duration-500" />
                </div>
              </a>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <ul className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <i className="fa fa-calendar text-primary" /> 24 Mar 2021
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-users text-primary" /> NaijaWetinDey
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-folder text-primary" /> Branding
                  </li>
                </ul>
                <a href="#" className="group">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">SEO Agency &amp; Digital Marketing</h4>
                </a>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et
                  dolore magna...
                </p>
                <a href="#" className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-shadow duration-300">
                  Discover More
                </a>
              </div>
            </div>
            <div className="space-y-6" data-wow-duration="1s" data-wow-delay="0.25s">
              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex-1">
                  <span className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <i className="fa fa-calendar text-primary" /> 18 Mar 2021
                  </span>
                  <a href="#" className="group">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">New Websites &amp; Backlinks</h4>
                  </a>
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                </div>
                <div className="flex-shrink-0">
                  <a href="#" className="block">
                    <img src="/assets/images/blog-thumb-01.jpg" alt="new websites" className="w-24 h-24 object-cover rounded-lg" />
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex-1">
                  <span className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <i className="fa fa-calendar text-primary" /> 14 Mar 2021
                  </span>
                  <a href="#" className="group">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">SEO Analysis &amp; Content Ideas</h4>
                  </a>
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                </div>
                <div className="flex-shrink-0">
                  <a href="#" className="block">
                    <img src="/assets/images/blog-thumb-01.jpg" alt="analysis" className="w-24 h-24 object-cover rounded-lg" />
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg flex gap-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex-1">
                  <span className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <i className="fa fa-calendar text-primary" /> 06 Mar 2021
                  </span>
                  <a href="#" className="group">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">SEO Tips &amp; Digital Marketing</h4>
                  </a>
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amsecteturii and sed doer ket eismod...</p>
                </div>
                <div className="flex-shrink-0">
                  <a href="#" className="block">
                    <img src="/assets/images/blog-thumb-01.jpg" alt="seo tips" className="w-24 h-24 object-cover rounded-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6" data-wow-duration="0.5s" data-wow-delay="0.25s">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">Feel Free To Send Us a Message About Your Website Needs</h2>
              <p className="text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor incididunt ut
                labore et dolores
              </p>
              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl text-white">
                <h4 className="text-lg font-semibold">
                  For any enquiry, Call Us: <span className="flex items-center gap-2 mt-2"><i className="fa fa-phone" /> <a href="#" className="hover:underline">010-020-0340</a></span>
                </h4>
              </div>
            </div>
            <div className="relative" data-wow-duration="0.5s" data-wow-delay="0.25s">
              <form id="contact" action="" method="post" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      placeholder="Name" 
                      autoComplete="on" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="surname"
                      id="surname"
                      placeholder="Surname"
                      autoComplete="on"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>
                <div>
                  <button 
                    type="submit" 
                    id="form-submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div className="absolute -bottom-8 -right-8 opacity-20 pointer-events-none hidden lg:block">
                <img src="/assets/images/contact-decoration.png" alt="contact decoration" className="w-32 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center" data-wow-duration="1s" data-wow-delay="0.25s">
            <p className="text-gray-400">
              © 2026 NaijaWetinDey. All Rights Reserved.
              <br />
              Design: <a rel="nofollow" href="https://templatemo.com" className="text-primary hover:text-secondary transition-colors">TemplateMo</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
