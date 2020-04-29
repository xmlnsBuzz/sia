import React from 'react';

class FontFamily_C extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section id="page-top">
          <div className="align-center">
            <h1>font-family Property</h1>
          </div>
          <div className="normal-wrap">
            <hr />
            <h2 id="fontFamily">font-family</h2>
            <p className="lead">각 글꼴에는 이름이 있다. 예를 들면 Windows OS에 기본적으로 설치되는 한글 글꼴로는 batang, dotum, gulim, gungsuh 등이 있고, 영문은 Arial, Verdana, Tahoma등 웹문서에 주로 사용되는 글꼴 등이 있다.</p>
            <h2 id="originOfFonts">글꼴의 출처 : Origins of font-family</h2>
            <p className="lead">글꼴의 출처란 '글꼴이 저장된 위치'를 말한다.</p>
            <div className="normal-wrap">
              <h3 id="localFonts">Local fonts</h3>
              <p className="lead">Local font란 자신의 컴퓨터에 설치된 font를 말한다. Windows 사용자의 경우 대개 'Windows/fonts' 폴더에 설치된 글꼴들을 말한다. 기본으로 설치되는 바탕체, 돋움체등을 비롯해 Photoshop 등과 같은 app에서 필요한 font들이다.</p>

              <h3 id="externalFonts">External fonts</h3>
              <p className="lead">Google, Fontawesome 등과 같이 CDN(Contents Delivery Network)등을 인터넷을 통해 연결해 사용하는 폰트들이다. 연결하는 방법은 다른 문서에 자세히 설명하겠지만 HTML 문서에 link element를 사용하는 방법 CSS 문서에 @import rule 또는 @font-face rule을 이용해 사용한다.</p>
              <p className="lead">아래는 'Noto Sans KR'이라는 google font를 link와 import로 연결한 예제이다.</p>
              <div className="normal-wrap">
                <h4 id="useLinkElement">HTML head section 속에 link element를 사용한 font link</h4>
                <pre>&lt;link href="https://fonts.googleapis.com/css?family=<br />
                Noto+Sans+KR:100,300,regular,500,700,900" rel="stylesheet" /></pre>
                <h4 id="useImportRule">CSS file 속에 @import rule을 사용한 font link</h4>
                <pre>@import url("https://fonts.googleapis.com/css?family=<br />Noto+Sans+KR:100,300,regular,500,700,900");</pre>
              </div>




            </div>
            <h2 id="fontFamilySpec">CSS font-family Spec</h2>
            <table className="sortable">
              <caption>font-family property</caption>
              <thead>
                <tr title="Click to sort">
                  <th style={{ width: '20%' }}>Property</th>
                  <th>
                    <a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-style">font-family
                  </a>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Values</th>
                  <td>[ &lt;family-name&gt; | &lt;generic-family&gt; ]#</td>
                </tr>
                <tr>
                  <th>Initial</th>
                  <td>depends on user agent</td>
                </tr>
                <tr>
                  <th>Applies to</th>
                  <td>all elements</td>
                </tr>
                <tr>
                  <th>Inheritance</th>
                  <td>yes</td>
                </tr>
                <tr>
                  <th>Percentages</th>
                  <td>N/A (<span className="bold">N</span>ot <span className="bold">A</span>llowed : 허용 안됨)</td>
                </tr>
                <tr>
                  <th>Media</th>
                  <td>visual</td>
                </tr>
              </tbody>
            </table>

            <div className="normal-wrap">
              <h3 id="fontFamilyValues">Values</h3>
            </div>
          </div>
        </section>


      </React.Fragment>
    )
  }
}

export default FontFamily_C;