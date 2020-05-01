import React from 'react';

class FontStyle_C extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section id="page-top">
          <div className="align-center">
            <h1>font-style Property</h1>
          </div>

          <hr />
          <div className="normal-wrap">

            <h2 id="Styling">Styling</h2>
            <p className="lead">'스타일링'이란 말이 있다. 흔히 자기 나름대로 머리에 멋을 부리는 것을 '헤어스타일링'이라 하는데, 생긴 그대로 normal하게 다니는 사람이 있는가 하면 빠마를 하는 사람, 무스로 스타일링하는 사람 등 뭔가 변화를 시도하는 사람도 있다. 아마도 인간이 가진 특성중 하나인 '변덕' 때문이 아닐까 한다. 사람이 한 가지 일을 꾸준히 한다는게 여간 어려운 일이 아니라는 것은 모두 잘 알 것이다.</p>

            <h2 id="CssStyle">Style Sheet</h2>
            <p className="lead">CSS도 마찬가지다. 웹문서를 목적에 맞게 스타일링하는 것이다. 예를 들어 단순히 본인의 취향대로, 유행에 따라, 또는 의뢰인의 요구에 따라 CSS를 사용하여 웹문서를 스타일링하게 된다.</p>

            <h2 id="FontStyle">font-style</h2>
            <p className="lead">Font(글꼴)의 style의 경우, 아무런 지정을 하지 않은 normal, 필기체 모양의 경사진 <span className="italic emph">italic</span>, normal체에 <br />기울기만 준 <span className="italic emph">oblique</span> 등이 있다. 얼핏 보면 'italic'과 'oblique'가 같은 것으로 보이지만 글자를 크게하여 보면 차이를 확실히 알 수 있다.</p>

            <h2 id="Synonym">단어가 다르면 뜻도 다르다.</h2>
            <p className="lead">font-style의 경우 많은 사람들이 '<span className="emph">italic</span>'과 '<span className="emph">oblique</span>'를 '이음동의어(synonym)'로 아는 경우를 보게된다. 왜냐하면 자세히 보지않는 이상, 두 keyword 모두 글자에 경사(slant)가 생기는 것 외에 별다른 차이를 눈으로 못 느끼기 때문이다. 웹개발을 좀 했다는 사람들도 font-style의 keyword value인 '<span className="emph">italic</span>'과 '<span className="emph">oblique</span>'를 구분하지 않고 쓰는 경우가 많고, 설사 차이점을 안다고 해도 사용법을 모르고 있다.</p>
            <p className="lead">하지만 단어가 다르면 내용 또한 다르다. W3C도 물론이고, 어떤 spec이라도 하나의 spec에 있어서, 같은 내용에 두 가지 단어를 중복사용하는 일은 없다.</p>

            <div className="flex-100p">
              <ruby className="normal text-96 face-serif">
                face
                  <rt>normal</rt>
              </ruby>
              <ruby className="oblique  text-96 face-serif">
                face
                  <rt>oblique</rt>
              </ruby>
              <ruby className="italic text-96 face-serif">
                face
                  <rt>italic</rt>
              </ruby>
            </div>
            
            <p className="lead">위와 같이 </p>
            <ul className="green">
              <li>normal : 초기값이다.</li>
              <li>oblique : normal체에 단순히 기울임만 준 글씨체다. 용법은 아래 spec table처럼 oblique라는 keyword 뒤에 deg(degree:각도)를 넣는다. </li>
              <li>italic : 대략 14도 정도의 기울임체인데, 단순히 기울이기만 한 것이 아니라 글꼴 자체의 디자인도 다르다. 위의 경우 'f', 'a', 'e' 등의 디자인이 oblique와 다른 것을 확인할 수 있다.</li>
            </ul>
            <h3><i className="fas fa-lightbulb text-danger"></i></h3>
            <p className="lead">oblique의 경우 어떤 font family를 사용하느냐에 따라 적용여부가 결정된다. 즉, font family에 따라 이 deg값이 먹힐 수도 있고, 안 먹힐 수도 있다는 것이다. </p>
            <h2 id="FontStyleSpec">CSS font-style Specification</h2>
            <p className="lead"></p>
            <table className="sortable">
              <caption>font-style property</caption>
              <thead>
                <tr title="Click to sort">
                  <th style={{ width: '20%' }}>Property</th>
                  <th>
                    <a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-style">font-style
                  </a>
                  </th>
                </tr>
              </thead>
              <colgroup>
                <col span="1" />
                <col span="1" style={{ fontSize: '16px !important' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th>Values</th>
                  <td>normal | italic | oblique (<span className="text-danger">N</span>deg) (ex: font-style: oblique <span className="text-danger italic">45</span>deg)</td>
                </tr>
                <tr>
                  <th>Initial</th>
                  <td>normal</td>
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


              <h3 id="Example1">font-style 예제</h3>
              <p className="lead">아래의 code는 장식이 없는 글씨체인 'sans-serif'에 각각 normal, italic, oblique 85deg 를 값으로 준 것이다. italic과 oblique에서 눈에 띌 정도의 차이가 있는 것을 알 수 있다.</p>
            <pre><code>{`<!DOCTYPE html>
<html lang="en">

<head>
  <title>font-style Property</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <style>
    :root {
      font-family: sans-serif;
      font-size: 96px;
    }

    .normal {
      font-size: inherit;
      font-style: normal;
    }
    
    .oblique {
      font-size: inherit;
      font-style: oblique 85deg;
    }
    
    .italic {
      font-size: inherit;
      font-style: italic;
    }
  </style>
</head>

<body>
  <span class="italic">L</span>
  <span class="normal">L</span>
  <span class="oblique">L</span>
</body>
</html>`}</code></pre> 
{/* <iframe src="/codes/css/html-test/font-style.html" /> */}
          </div>

        </section>

      </React.Fragment>
    )
  }
}

export default FontStyle_C;