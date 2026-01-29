function About() {
  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="left-image wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <img
                src="/assets/images/about-left-image.png"
                alt="local community illustration"
              />
            </div>
          </div>

          <div className="col-lg-8 align-self-center">
            <div className="services">
              <div className="row">

                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon">
                      <img
                        src="/assets/images/service-icon-01.png"
                        alt="local events"
                      />
                    </div>
                    <div className="right-text">
                      <h4>Local Events</h4>
                      <p>
                        Discover concerts, festivals, pop-ups, and community
                        events happening around you, in real time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.7s"
                  >
                    <div className="icon">
                      <img
                        src="/assets/images/service-icon-02.png"
                        alt="places and hangouts"
                      />
                    </div>
                    <div className="right-text">
                      <h4>Places & Hangouts</h4>
                      <p>
                        Find restaurants, lounges, spots, and hidden gems
                        people around you actually go to.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.9s"
                  >
                    <div className="icon">
                      <img
                        src="/assets/images/service-icon-03.png"
                        alt="local updates"
                      />
                    </div>
                    <div className="right-text">
                      <h4>Local Updates</h4>
                      <p>
                        Stay informed with updates, trends, and happenings
                        shaping your city and neighborhood.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="1.1s"
                  >
                    <div className="icon">
                      <img
                        src="/assets/images/service-icon-04.png"
                        alt="community connection"
                      />
                    </div>
                    <div className="right-text">
                      <h4>Community Pulse</h4>
                      <p>
                        NaijaWetinDey connects you to what people are talking
                        about and doing right where you live.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
