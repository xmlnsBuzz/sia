import React from 'react';

class FontWeight_N extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="container text-center">
          <div className="bookmark-header">
            <a className="navbar-brand js-scroll-trigger" href="#scrollSpy">
              Font Weight
             </a>
          </div>
          <nav className="collapse navbar-collapse text-left overflow-scroll">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontWeightProperty">font-weight</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontWeightValues">Values</a>
              </li>
                <ul>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#fontWeightAbsoluteValue">Absolute value</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#fontWeightNames">Weight names</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#fontWeightRelativeValue">Relative value</a>
                  </li>
                </ul>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontWeightComputedValue">Computed value</a>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

export default FontWeight_N;