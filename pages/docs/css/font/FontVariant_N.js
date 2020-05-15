import React from 'react';

class FontVariant_N extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="container text-center">
          <div className="bookmark-header">
            <a className="navbar-brand js-scroll-trigger" href="#scrollSpy">
              font-variant
             </a>
          </div>
          <nav className="collapse navbar-collapse text-left overflow-scroll">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontVariant">font의 異形</a>
                <ul>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#fontVariantNormal">normal</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#fontVariantSmallCaps">small-caps</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#fontVariantAllSmallCaps">all-small-caps</a>
                  </li>
                </ul>
              </li>

            </ul>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

export default FontVariant_N;