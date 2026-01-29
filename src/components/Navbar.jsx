function Navbar() {
  return (
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
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
