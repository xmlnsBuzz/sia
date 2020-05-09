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
            <p className="lead">'스타일링'이란 말이 있다. 흔히 자기 나름대로 머리에 멋을 부리는 것을 '헤어스타일링'이라 하는데, 생긴 그대로 normal하게 다니는 사람이 있는가 하면 빠마를 하는 사람, 무스로 스타일링하는 사람 등 뭔가 변화를 시도하는 사람도 있다. 아마도 인간이 가진 특성중 하나인 '변덕'과 남들보다 '돋보임'을 추구하려는 개성 때문이 아닐까 한다. </p>

            <h2 id="CssStyle">Style Sheet</h2>
            <p className="lead">CSS도 마찬가지다. 웹문서를 목적에 맞게 스타일링하는 것이다. 예를 들어 단순히 본인의 취향대로, 유행에 따라, 또는 의뢰인의 요구에 따라 CSS를 사용하여 웹문서를 스타일링하게 된다.</p>

            <p className="lead">font-style은 이런 것들과 맥을 같이하는데, 그 중에서도 '돋보임'이 목적이라 할 수 있다. 그리고 '돋보인다'는 말은 결국 남들과는 '달라 보인다'는 말과 같다. </p>

            <p className="lead">글꼴이 돋보일 수 있는 방법은 여러가지지만 font-style은 그 중 글꼴에 기울임(slant)을 주어 일반적인(normal) 글자보다 눈에 띄게 만드는 것이고, 눈에 띄게 만든다는 말을 달리하면 <q>강조</q>시킨다는 말이다. </p>

            <h2 id="FontStyle">font-style</h2>
            <p className="lead">Font(글꼴)의 style의 경우, 아무런 지정을 하지 않은 normal, 필기체 모양의 경사진 <span className="italic emph">italic</span>, normal체에 <br />기울기만 준 <span className="italic emph">oblique</span> 등이 있다. 얼핏 보면 'italic'과 'oblique'가 같은 것으로 보이지만 글자를 크게하여 보면 차이를 확실히 알 수 있다.</p>

            <h2 id="Synonym">단어가 다르면 뜻도 다르다.</h2>
            <p className="lead">font-style의 경우 많은 사람들이 '<span className="emph">italic</span>'과 '<span className="emph">oblique</span>'를 '이음동의어(synonym)'로 아는 경우를 보게된다. 왜냐하면 자세히 보지않는 이상, 두 keyword 모두 글자에 경사(slant)가 생기는 것 외에 별다른 차이를 눈으로 못 느끼기 때문이다. 웹개발을 좀 했다는 사람들도 font-style의 keyword value인 '<span className="emph">italic</span>'과 '<span className="emph">oblique</span>'를 구분하지 않고 쓰는 경우가 많고, 설사 차이점을 안다고 해도 사용법을 모르고 있다.</p>
            <p className="lead">하지만 단어가 다르면 내용 또한 다르다. W3C도 물론이고, 어떤 spec이라도 하나의 spec에 있어서, 같은 내용을 두 가지 단어로 중복해서 사용하는 일은 없다.</p>

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

            <p className="lead"><i className="fas fa-lightbulb text-danger shadow"></i> oblique의 경우 어떤 font family를 사용하느냐에 따라 적용여부가 결정된다. 즉, font family에 따라 deg 값이 먹힐 수도 있고, 안 먹힐 수도 있다는 것이다. </p>
            <h2 id="FontStyleSpec">CSS font-style 사용법</h2>
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
                <tr>
                  <th>Computed value:</th>
                  <td>as specified</td>
                </tr>
                <tr>
                  <th>Animatable:</th>
                  <td>no</td>
                </tr>

              </tbody>
            </table>


            <h3 id="Example1" className="bottom-0">font-style 예제</h3>
            <p className="lead">아래의 code는 장식이 없는 글씨체인 'sans-serif'에 각각 normal, italic, oblique 21deg 를 값으로 준 것이다. italic과 oblique에서 눈에 띌 정도의 차이가 있는 것을 알 수 있다.</p>
            <pre><code>{`<!DOCTYPE html>
<html lang="en">

  <head>
    <title>font-style Property</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <style>
      span {
        font-family: 'Lucida Sans';
        font-size: 96px;
      }

      .normal {
        font-style: normal;
      }
      
      .oblique {
        font-style: oblique 21deg;
      }
      
      .italic {
        font-style: italic;
      }
    </style>
  </head>

  <body>
    <span class="normal">L</span>
    <span class="italic">L</span>
    <span class="oblique">L</span>
  </body>
</html>`}</code></pre>
            {/* <iframe src="/codes/css/html-test/font-style.html" /> */}
            <p className="lead">italic과 oblique는 font-family에 따라 효과가 모두 다르다. 위에서 oblique 경사를 21deg로 주었는데, 테스트 결과, 'Lucida Sans'의 경우 20deg까지는 변화없이 italic과 같았고 21deg에서 변화가 나타났으며 21deg 이상의 각도를 주어도 21deg와 같았다.</p>
            <p className="lead">하지만 FireFox로 보면 완전히 다를 수 있다. 예를 들어 font-family를 'MS Gothic'으로 주고 font-style 값에 'oblique 85deg'를 주고 실행해 보면 글자가 거의 오른쪽으로 납작하게 누워있는 모습을 볼 수 있다. W3C spec에 가장 가깝게 구현해주는 브라우저는 단연 <q>FireFox</q> 라 할 수 있다. </p>

          </div>
          <div className="normal-wrap">
            <h3 id="fontStyleInheritance">Inheritance</h3>
            <p className="lead">CSS spec에는 'inherit'라는 값이 자주 나온다. Inherit는 '상속'이라는 뜻인데, 잘 알다시피 상속이란 '부모가 자식 또는 자손에게 대물림을 한다'는 의미다. CSS spec의 경우 아래와 같이 </p>
            <pre><code>{`
<section style="font-style: italic;">
  <div>
    division marker
    <p>para 1</p>
    <p>para 2</p>
    <p>para 3</p>
  </div>
</section>
`}</code></pre>
            <p className="lead"><span className="tag">section</span> element에 <span className="css-prop">font-style: italic</span>로 지정했을 경우 자식(child)인 <span className="tag">div</span> element는 물론, 자손(descendant)인 <span className="tag">p</span> element에게도 'italic'이라는 font-style를 물려주게 된다.</p>
            <p className="lead">CSS에는 font-style처럼 자식 및 자손들에게 자동적으로 상속되는 CSS property들이 꽤 많다. </p>
            <h3 id="rejectFontStyleInheritance">상속거부와 'normal'값의 쓰임새</h3>
            <p className="lead">보다시피 상속은 CSS를 사용하는데 있어 매우 편리한 성질이다. 왜냐하면 화면에 표시되는 element 중 최상위 element인 <span className="tag">body</span>에 상속되는 CSS property를 지정하면 하위 element에 매번 같은 값을 따로 지정하지 않더라도 최하위 element까지 지정한 값이 상속되므로...  </p>
            <p className="lead">그러나 문서를 만들다 보면 상위에서 상속받은 값을 쓰면 안 될 경우가 반드시 생기게 마련인데, 이 때는 아래의 code처럼 상속을 거부하면 된다.</p>
          </div>
          <pre><code>{`<section style="font-style: italic;">
  <div>
    <p style="font-style: normal;">para 1 <span>inline</span></p>
    <p>para 2</p>
    <p>para 3</p>
  </div>
</section>
`}</code></pre>
          <p className="lead">내가 처음 CSS를 배울 때 'normal'이라는 값에 좀 의아함을 느꼈다. 왜냐하면 '그냥 가만히 있으면 normal인데 이 걸 어디에다 쓰지?' 라는 의문말이다. 그러다가 '상속'이란 걸 배우고 나서야 '아! 이래서 normal을 만들었구나'하고 깨닫게 되었다.</p>
          <p className="lead">위의 code에서 <span className="tag">p</span> 속의 <span className="tag">span</span>에도 부모인 <span className="tag">p</span>에 지정한 'normal' 값이 상속된다.</p>
          <h2 id="ReadCssTable_1">CSS Spec Table 읽는 방법 1</h2>
          <p className="lead"><a href="FontIntro">Font 개론</a>에서 예고한 것 처럼 CSS table 읽는 방법을 알아보자. 가장 간단한 <q>|</q>(single pipe) 부터 시작한다.</p>
            <div className="normal-wrap">
              <h3 id="SinglePipe">Single pipe : <q>|</q> (Only One of them)</h3>
              <p className="lead">Single pipe는 자판의 enter key 위에 있는 원화표시 키의 uppercase이므로 Shift를 누르고 이 자판을 찍으면 된다.</p>
              <p className="lead">Single Pipe는 CSS spec table에 정의된 가장 간단한 symbol 중 하나이다. 이 symbol의 의미는 <q>|</q>로 분리(seperate)된 값 중에서 오직 1개만을 사용하라는 것이다.</p>
            </div>
            <code className="success">font-family : normal | italic | obllique</code>
            <p className="lead">이 기호는 '|' 로 구분된 값 중에 단 하나만 사용하라는 뜻이므로 아래 처럼 사용하면 안된다.</p>
            <code className="bg-gray">
              <ul className="uncheck-all">
                <li>font-style : <span className="space">&nbsp;</span> ;  &nbsp;/* value가 비었다. */</li>
                <li>font-style : normal oblique; /* 2개를 썼다. */</li>
                <li>font-style : normal, oblique; /* 2개를 쓴데다 comma까지 찍었다.. */</li>
              </ul></code>
            <p className="lead">따라서 font-style 이라는 property 자체를 아예 사용하지 않거나, 사용하려면 아래처럼 사용해야 된다.</p>
            <code className="bg-gray">
              <ul className="check-all">
                <li>font-style : noraml;</li>
                <li>font-style : italic;</li>
                <li>font-style : oblique;</li>
              </ul>
            </code>

        </section>

      </React.Fragment>
    )
  }
}

export default FontStyle_C;