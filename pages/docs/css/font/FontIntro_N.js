import React from 'react';

class FontIntro_N extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="container text-center">
          <div className="bookmark-header">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              Font Intro
             </a>
          </div>
          <nav className="collapse navbar-collapse text-left overflow-scroll">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontFamily">font family</a>
                <ul>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#typeFace">Typeface</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

export default FontIntro_N;