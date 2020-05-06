import React from 'react';

class FontFamily_N extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="container text-center">
          <div className="bookmark-header">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              font-family
             </a>
          </div>
          <nav className="collapse navbar-collapse text-left overflow-scroll">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontFamily">font-family</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#originOfFonts">글꼴의 출처</a>
                <ul>
                  <li>
                    <a className="nav-link js-scroll-trigger" href="#localFonts">Local fonts</a>
                  </li>
                  <li>
                    <a className="nav-link js-scroll-trigger" href="#externalFonts">External fonts</a>
                    <ul>
                      <li>
                        <a className="nav-link js-scroll-trigger" href="#useLinkElement">link element</a>
                      </li>
                      <li>
                        <a className="nav-link js-scroll-trigger" href="#useImportRule">@import rule</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontFamilySpec">W3C Spec</a>
                <ul>
                  <li>
                    <a className="nav-link js-scroll-trigger" href="#fontFamilyValues">Values</a>
                    <ul>
                      <li>
                    <a className="nav-link js-scroll-trigger" href="#fontFamilyName">font family</a>
                    </li>
                    <li>
                    <a className="nav-link js-scroll-trigger" href="#genericFamilyName">generic Family</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link js-scroll-trigger" href="#fontFamilyInitial">Initial</a>
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

export default FontFamily_N;