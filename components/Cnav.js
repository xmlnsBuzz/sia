import React from 'react';

class Cnav extends React.Component {
  render () {
    return (
      <section id="scrollSpy" className="scroll-spy">
        <div className="container text-center">
          <div className="bookmark-header">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Page <i className="fad fa-arrow-alt-to-top text-danger"></i> Top </a>
          </div>
          <nav className="collapse navbar-collapse text-left overflow-scroll">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
               {/* <li>
                <ul>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </nav>
        </div>
      </section>
    )
  }
}

export default Cnav;