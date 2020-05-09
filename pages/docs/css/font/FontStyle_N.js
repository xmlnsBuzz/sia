import React from 'react';

class FontStyle_N extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="container text-center">
          <div className="bookmark-header">
            <a className="navbar-brand js-scroll-trigger" href="#scrollSpy">
              font-style
             </a>
          </div>
          <nav className="collapse navbar-collapse text-left overflow-scroll">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#Styling">Styling</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#CssStyle">Style Sheet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#FontStyle">font-style</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#Synonym">Synonym</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#FontStyleSpec">font-style Spec</a>
              </li>
                            <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#Example1">font-style 예제</a>
              </li>

              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontStyleInheritance">상속</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#rejectFontStyleInheritance">상속 거부</a>
              </li>

              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#ReadCssTable_1">Spec 해독법 <span style={{fontFamily: 'initial'}}>1</span></a>
                <ul>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#SinglePipe">Single Pipe</a>
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

export default FontStyle_N;