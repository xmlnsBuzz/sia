import React from 'react';
import Link from 'next/link';


class Cheader extends React.Component {
  render () {
    return (
      <header id="header" className="header fixed-top">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark " role="navigation">
          {/* hamberger button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* hamberger button */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <img className="head-logo" src="/img/favicon/favicon-32x32.png" alt="favicon" title="homepage" />
            <a className="navbar-brand" href="/">&nbsp; Full Stack <span className="text-danger" title="Stack It All">SIA</span></a>
      
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/"><i className="fad fa-house"></i> Home <span className="sr-only">(current)</span></a>
              </li>

              {/*  */}

              <li className="nav-item">
                <a className="nav-link disabled" href="#"><i className="fas fa-code-branch"></i>&nbsp;Github</a>
                {/* 드롭다운메뉴 소스 github 주소 http://fontenele.github.io/bootstrap-navbar-dropdowns/ */}
              </li>
              {/*           <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
 */}
              {/*  */}

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle disabled" id="html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-code"></i>&nbsp;HTML</a>
                <ul className="dropdown-menu" aria-labelledby="html">
                  <li className="dropdown-item"><a href="#">Action 2 A</a></li>
                  <li className="dropdown-item"><a href="#">Action 2 B</a></li>
                  <li className="dropdown-item"><a href="#">Action 2 C</a></li>
                  <li className="dropdown-item dropdown">
                    <a className="dropdown-toggle" id="dropdown2-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fad fa-1x fa-font text-danger" style={{ fontSize: '14px' }}></i>&nbsp;Fonts</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown2-1">
                      <li className="dropdown-item"><a href="/docs/css/font/fontSize">font-size</a></li>
                      <li className="dropdown-item"><a href="#">Action 2.1 B</a></li>
                      <li className="dropdown-item"><a href="#">Action 2.1 C</a></li>
                      <li className="dropdown-item dropdown">
                        <a className="dropdown-toggle" id="dropdown2-1-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown2.1.1</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown2-1-1">
                          <li className="dropdown-item"><a href="#">Action 2.1.1 A</a></li>
                          <li className="dropdown-item"><a href="#">Action 2.1.1 B</a></li>
                          <li className="dropdown-item"><a href="#">Action 2.1.1 C</a></li>
                        </ul>
                      </li>
                      <li className="dropdown-item dropdown">
                        <a className="dropdown-toggle" id="dropdown2-1-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown2.1.2</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown2-1-2">
                          <li className="dropdown-item"><a href="#">Action 2.1.2 A</a></li>
                          <li className="dropdown-item"><a href="#">Action 2.1.2 B</a></li>
                          <li className="dropdown-item"><a href="#">Action 2.1.2 C</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>


              {/* css dropdown */}

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="css" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Main menu" data-placement="top"><i className="fab fa-css3"></i> CSS 3
                </a>
                <ul className="dropdown-menu" aria-labelledby="css">
                  
                  <li className="dropdown-item dropdown">
                    <a className="dropdown-toggle" id="font" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Font Level 3
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="font">
                      <li className="dropdown-item">
                        <a href="/docs/css/font/FontIntro">Introduction to font
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a href="/docs/css/font/FontSize">font-size
                        </a>
                      </li>
                      
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <a href="/docs/css/font/Fonts">font Property</a>
                  </li>
                </ul>
              </li>

              {/*  */}

              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Main menu" data-placement="top"><i className="fab fa-css3"></i> CSS 3
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdown1">
                  
                  <li className="dropdown-item dropdown">
                    <a className="dropdown-toggle" id="dropdown1-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Font
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown1-1">
                      <li className="dropdown-item">
                        <a href="/docs/css/font/FontIntro">Introduction to font
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a href="/docs/css/font/FontSize">font-size
                        </a>
                      </li>
                      <li className="dropdown-item dropdown">
                        <a className="dropdown-toggle" id="dropdown1-1-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown1.1.1
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown1-1-1">
                          <li className="dropdown-item"><a target="_blank" href="http://www.google.com">Action 1.1.1 - Google</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-item">
                    <a href="/docs/css/font/Fonts">font Property</a>
                  </li>
                </ul>
              </li> */}

              {/*  */}

            </ul>

            {/*  */}

            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
    )
  }
}
export default Cheader;