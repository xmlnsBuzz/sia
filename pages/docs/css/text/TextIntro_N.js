import React from 'react';

class TextIntro_N extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="container text-center">
          <div className="bookmark-header">
             <a className="navbar-brand js-scroll-trigger" href="#scrollSpy" style={{lineHeight: '1.8'}}>Type Settings</a>
           </div>
          <nav className="collapse navbar-collapse text-left overflow-scroll">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact"></a>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

export default TextIntro_N;