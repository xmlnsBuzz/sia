import React from 'react';

class FontIntro_N extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="container text-center">
          <div className="bookmark-header">
            <a className="navbar-brand js-scroll-trigger" href="#Intro2Font">
              Font Module
             </a>
          </div>
          <nav className="collapse navbar-collapse text-left overflow-scroll">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#intro_whatIsFonts">FONT란</a>
                <a className="nav-link js-scroll-trigger" href="#intro_transformFonts">Font Properties</a>
                <ul>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#intro_fontFace">font-family</a>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a className="nav-link js-scroll-trigger" href="#intro_serifs">Serifs</a>
                      </li>
                      <li>
                        <a className="nav-link js-scroll-trigger" href="#intro_sansSerifs">Sans Serifs</a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#intro_fontStyle">font-style</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#intro_fontStretch">font-stretch</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#intro_fontWeight">font-weight</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#intro_fontTable">properties table</a>
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

export default FontIntro_N;