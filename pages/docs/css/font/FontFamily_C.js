import React from 'react';
// import FetchAPI from '../../../../components/FetchAPI';
import MyChannelVscodeUsageLink from '../../../../components/doc_comp/MyChannelVscodeUsageLink'

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
            <q className="block-success"> 이 문서에서는 사용하는 단어인 '글꼴'과 'font-family', '폰트'는 같은 뜻으로 사용한다는 것을 미리 밝혀둔다.</q>
            <p className="lead">각 글꼴에는 이름이 있다. 예를 들면 Windows OS에 기본적으로 설치되는 한글 글꼴로는 batang, dotum, gulim, gungsuh 등이 있고, 영문은 Arial, Verdana, Tahoma등 웹문서에 주로 사용되는 글꼴 등이 있고, 새로 설치해서 사용하는 Photoshop Illustrator 등에서 사용하는 design용 글꼴들이 있다.</p>

            <h2 id="originOfFonts">글꼴의 출처 : Origins of font-family</h2>
            <p className="lead">글꼴의 출처란 '글꼴이 저장된 위치'를 말한다. CSS 초보자가 font를 사용할 때 흔히 다음과 같은 일이 생긴다.</p>
            <q className="block">어? 내 컴퓨터에서는 font가 잘 나타났는데, PC방에서는 왜 다르게 보이지?</q>
            <p className="lead">이 경우, 자신의 컴퓨터에만 설치된 글꼴을 사용했기 때문이다. Windows에 기본으로 깔리는 바탕, 돋움, 맑은고딕 등의 font-family를 지정했다면 이 글꼴은 windows 사용자라면 누구나 가지고 있으므로 제대로 보일 것이다. 하지만 대부분이 설치 않는 아주 독특한 글꼴을 자신의 컴퓨터에만 설치하고 그 글꼴을 CSS에 font-family로 지정했다면, 그 문서를 브라우저로 보는 다른 사람들에게 그 글꼴이 제대로 보일 리가 없다.</p>
            {/* <FetchAPI /> */}
            <div className="normal-wrap">
              <h3 id="localFonts">Local fonts</h3>
              <p className="lead"> Local font란 자신의 컴퓨터에 설치된 font를 말한다. 위의 경우가 독특한 Local font(자신의 컴퓨터에 설치된 글꼴)를 사용했을 경우 벌어질 수 있는 상황이다. Windows의 경우 대개 'Windows/fonts' 폴더에 설치된 글꼴들을 말한다. 기본으로 설치되는 바탕체, 돋움체등을 비롯해 Photoshop 등과 같은 app에서 필요로 하는 font들이다.</p>

              <h3 id="externalFonts">External fonts</h3>
              <p className="lead">Google, Fontawesome 등과 같이 CDN(Contents Delivery Network)등을 인터넷으로 연결해 사용하는 폰트들이다. 연결하는 방법은 다른 문서에 자세히 설명하겠지만 HTML 문서에 link element를 사용하는 방법, CSS 문서에 @import rule 또는 @font-face rule을 사용하는 방법이 있다.</p>
              <p className="lead">이 방법을 사용하면 브라우저가 해당 문서에 연결된 font를 읽어와서 브라우저 창에 페인팅해 주기 때문에 자신의 컴퓨터에 설치되었건 아니건 관계없이 항상 자신이 CSS에 지정한 폰트가 보인다.</p>
              <p className="lead">아래는 'Noto Sans KR'이라는 google font를 link로 연결한 사례와 import로 연결한 사례다.</p>
              <div className="normal-wrap">
                <h4 id="useLinkElement">HTML head section 속에 link element를 사용한 font link</h4>
                <div className="simple-code">{`<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,regular,500,700,900" rel="stylesheet" />`}</div>
                <h4 id="useImportRule">CSS file 속에 @import rule을 사용한 font link</h4>
                <div className="simple-code">{`@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,regular,500,700,900");`}</div>
              </div>
              <div className="vspace3"></div>



            </div>
            <h2 id="fontFamilySpec">CSS font-family 사용법</h2>
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
            {/* NOTE google font extension 설치할 것 */}
            <div className="normal-wrap">
              <h3 id="fontFamilyValues">Values</h3>
              <p className="lead">font-family property에 사용할 수 있는 값은 두 가지다. </p>



              <div className="normal-wrap">
                <h4 id="fontFamilyName">font-family name</h4>
                <p className="lead">font-family name은 각 글꼴의 고유한 이름이다. 예를 들어 한글 '바탕체'는 영문으로 'Batang'이고, 나눔고딕의 정식 font-family name은 'Nanum Gothic'이다. 이 때 대소문자의 구분은 없지만(case insensitive) 가독성(readability)을 감안하여 대소문자를 구분(case sensitive)해 주는 것이 좋다.</p>
                <p className="lead">font-family란 <a href="FontIntro">font에 대한 소개</a>에서 말했듯 '글꼴을 구성하는 각 활자가 모두 통일된 모양(face), 굵기(weight), 장평(condensed or expanded), 장식(serif or sans-serif), 기울기(style)등을 가진 글꼴'이다. 그러므로 글꼴을 사용하는데 있어서 가장 먼저 알아야 할 것은 font-family name다. 그런데 generic name이 아닌 특정한 글꼴을 사용하려 한다면 중요한 것은 그 특정 글꼴의 이름(font-family name)을 알아야 된다는 것이다. 우선 윈도우에 기본설치되는 글꼴의 이름은 Microsoft사의 (<a href="https://docs.microsoft.com/ko-kr/typography/fonts/windows_10_font_list" target="_blank">Windows 10 default font list</a>) 문서를 참고한다. 이 문서에는 Windows OS 별 기본설치 글꼴의 목록들이 있고, 이 것들은 CSS font-family의 값으로 사용되는 'Font Name'과 해당 파일이름을 잘 보여주고 있는데 앞으로 사용할 font-family의 값은 바로 'Family'라는 제목에 해당되는 부분(Arial, Arial Black, Bahnschrift, Calibri 등등)이다. 즉 아래처럼 사용하면 된다.</p>

<code className="success">font-family: 'Arial Black';</code>


                <h4 id="genericFamilyName">generic family name</h4>
                <p className="lead">이 방식은 font-family의 형태를 serif, sans serif, monospace, cursive, fantasy 등으로 생김새를 구분하여 다섯가지 범주로 Grouping하여 통칭하는 방법이다.</p>

                <p className="lead">아래의 code를 마우스로 긁은 다음, Vscode에 붙여넣고 preview해 보자. Vscode 설치 및 사용법을 모른다면 아래의 link를 참조하자.
                </p>
                <MyChannelVscodeUsageLink />


              </div>

              <pre><code>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Generic Font Families</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <style>
      p {
        font-size: 3em;
      }

      .serif {
        font-family: serif;
      }

      .sansserif {
        font-family: sans-serif;
      }

      .monospace {
        font-family: monospace;
      }

      .cursive {
        font-family: cursive;
      }

      .fantasy {
        font-family: fantasy;
      }
    </style>
  </head>
  <body>
    <p class="serif"> serif : Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <p class="sansserif"> sans-serif : Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <p class="monospace">monospace : Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    <p class="cursive">cursive : Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    <p class="fantasy">fantasy : Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
  </body>
</html>`}</code></pre>
<p className="lead">각 generic-name별 특징을 알 수 있다.</p>

            </div>
            <div className="normal-wrap">
              <h3 id="fontFamilyInitial">Initial : Depends on user agent</h3>
              <p className="lead">'Depends on user agent(UA)'란 FireFox, Chrome 등의 visual 브라우저 또는 '음성합성장치(Text to Speech)'같은 Aural 브라우저 등이 자체적으로 지정한 초기값에 따른다.</p>
              <p className="lead">한가지 예를 들자면, 어떤 브라우저는  font-family initial value(초기값)를 serif로 지정해 두었는가 하면, 어떤 브라우저는 sans-serif를 초기값으로 지정하는 등의 차이 때문에 정확한 값을 지정하지 못하고 "UA에 달려있다"라고 spec에 표현한 것이다. </p>
              <p className="lead"></p>
              <p className="lead">하지만 대부분의 브라우저들이 거의 비슷한 CSS default values를 구현해 주므로 크게 신경쓰지 않아도 된다.</p>
            </div>
            <ul className="check-all">
              <li>font-weight: old;</li>
              <li className="uncheck"></li>
              <li></li>
            </ul>

          </div>
        </section>

      </React.Fragment >
    )
  }
}

export default FontFamily_C;