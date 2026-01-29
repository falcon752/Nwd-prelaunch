import CountdownTimer from './CountdownTimer'

function Hero() {
  return (
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
  )
}

export default Hero
