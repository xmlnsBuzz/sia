import React from 'react';

class Font_N extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="container text-center">
          <div className="bookmark-header">
            <a className="navbar-brand js-scroll-trigger" href="#scrollSpy">
              Font
             </a>
          </div>
          <nav className="collapse navbar-collapse text-left overflow-scroll">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontProperty">font Shorthand </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontShorthandProperty">Shorthand란?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#ReadCssTable_3">Spec 해독법 3</a>
                <ul>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#doublePipe"><q>||</q></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#ZeroOrMore"><q>?</q> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#AdjacentValue"><q><span className="space">&nbsp;</span></q></a>
                  </li>
                </ul>
                <ul>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#cautiousAboutFontShorthand">font사용 주의점</a>
                    <ul>
                      <li>
                        <a className="nav-link js-scroll-trigger" href="#shorthandExeResult">실행결과 분석</a>
                      </li>
                      <li>
                        <a className="nav-link js-scroll-trigger" href="#w3cCascadingPrincipal">Cascading</a>
                      </li>
                    </ul>
                  </li></ul>

              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

export default Font_N;