import { Calendar, MapPin, Bell, Users } from "lucide-react";

function About() {
  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          {/* Left Image */}
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

          {/* Right Grids */}
          <div className="col-lg-8 align-self-center">
            <div className="services">
              <div className="row">
                {/* Local Events */}
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn glass-card p-6 flex items-center gap-6"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon bg-orange-500 text-white rounded-full flex justify-center items-center w-[80px] h-[80px] shadow-lg flex-shrink-0">
                      <Calendar size={36} />
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

                {/* Places & Hangouts */}
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn glass-card p-6 flex items-center gap-6"
                    data-wow-duration="1s"
                    data-wow-delay="0.7s"
                  >
                    <div className="icon bg-green-500 text-white rounded-full flex justify-center items-center w-[80px] h-[80px] shadow-lg flex-shrink-0">
                      <MapPin size={36} />
                    </div>

                    <div className="right-text">
                      <h4>Places & Hangouts</h4>
                      <p>
                        Find restaurants, lounges, spots, and hidden gems people
                        around you actually go to.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Local Updates */}
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn glass-card p-6 flex items-center gap-6"
                    data-wow-duration="1s"
                    data-wow-delay="0.9s"
                  >
                    <div className="icon bg-blue-500 text-white rounded-full flex justify-center items-center w-[80px] h-[80px] shadow-lg flex-shrink-0">
                      <Bell size={36} />
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

                {/* Community Pulse */}
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn glass-card p-6 flex items-center gap-6"
                    data-wow-duration="1s"
                    data-wow-delay="1.1s"
                  >
                    <div className="icon bg-red-500 text-white rounded-full flex justify-center items-center w-[80px] h-[80px] shadow-lg flex-shrink-0">
                      <Users size={36} />
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
          {/* End Right Grids */}
        </div>
      </div>
    </div>
  );
}

export default About;