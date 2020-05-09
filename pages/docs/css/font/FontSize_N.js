import React from 'react';

class FontSize_N extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="container text-center">
          <div className="bookmark-header">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              font-size
             </a>
          </div>

          <nav className="collapse navbar-collapse text-left overflow-scroll">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontSizeValues">Values</a>
                <ul>
                  <a className="nav-link js-scroll-trigger" href="#fontSizeValueAbsolute">Absolute</a>
                  <a className="nav-link js-scroll-trigger" href="#fontSizeValueRelative">Ralative</a>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontSizeInitialValue">Initial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontSizePercentages">Percentages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#fontSizeComputedValue">Computed value</a>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

export default FontSize_N;