function Services() {
  const services = [
    {
      title: "Connects",
      image: "/assets/images/connect.png",
    },
    {
      title: "Local Hangouts",
      image: "/assets/images/local.png",
    },
    {
      title: "Events",
      image: "/assets/images/event.png",
    },
  ];

  return (
    <section id="services" className="services-grid section">
      <div className="container">
        <div className="section-heading text-center">
          <h2>
            What’s <em>Happening</em> Around <span>You</span>
          </h2>
          <p>Discover people, places, and events without the noise.</p>
        </div>

        <div className="row g-4">
          {services.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
