import React from 'react';
import JsonTest from '../../../../components/JsonTest';

class Font_C extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section id="">
          <div className="align-center">
            <h1>Font Property</h1>
          </div>
          <div className="normal-wrap">
            <hr />
            <h2 id="fontProperty">Font Shorthand property</h2>
            <p className="lead">font property는 font-style, font-variant, font-weight, font-stretch, font-size, line-height, font-family등 일곱가지 font관련 property들을 한꺼번에 지정하기 때문에 편리하다. 하지만 특히 font property의 단축형의 경우 초보자 뿐 아니라, 웬만큼 한다는 사람들도 실수하기 매우 쉬운데...</p>
            <p className="lead">그 이유는 이렇다. W3C의 입장은 문서작성자가 CSS를 사용해서 문서를 만드는데 있어서 편리함을 극대화시키려는 목표를 가지고 있다. 하지만 최초로 CSS2가 발표된 시점인 1994년 당시, 대부분의 브라우저들이 CSS를 거의 지원하지 못했다. 아니, 정확히 말하면 지원해야 된다는 의무감은 커녕 CSS에 관심조차 없었다. 왜냐하면 HTML이라는 웹언어가 폭발적인 인기를 얻을 것이라는 것을 웹의 창시자인 Tim Berners Lee 조차 기대하지 않았으니 말이다. 따라서 W3C CSS working group에서는 실제 CSS2를 사용하는 문서작성자들이 어떤 경험(특히 헷갈릴 만큼 어려워서 실수하는)을 하는지 예측이 거의 불가능했다.</p>
            <p className="lead">그래서 font의 경우 단축형인 font property를 사용할 때 '순서를 어기거나, 빼먹거나'하는 것을 용납하지 않았다. 사용법이 엄격했다는 말이다. 저~ 아래의 font property의 value만 봐도 복잡성이 대략 짐작가리라...</p>
            <p className="lead">하지만 font 이후에 나온 대개의 property들은 생략도 가능하고 순서도 비교적 자유롭게 구성되어 있어 편리한 반면 '뭐가 빠졌는지' 헷갈리기 쉬운 것은 단점이다.</p>

            <div className="normal-wrap">
              <h3 id="fontShorthandProperty">Shorthand property란?</h3>
              <p className="lead">Shorthand란 단어는 우리가 아는 '숏팔이, 롱팔이, 숏다리'처럼 손이 짧다는 말이 아니라 원래 '속기'라는 뜻인데, 실제로 속기사들이 속기자판 치는 것을 보면 문장 전체를 치지않고 마치 워드프로세서에서 사용하는 '상용구'처럼 약속된 몇 글자를 치면 긴 문장이 한 번에 입력되도록 한다. 이 것은 마치 VScode의 snippet과 같은 기능이다.</p>
              <p className="lead">CSS에도 역시 단축형을 사용하는 property들이 많이 있다. 즉, 아래 두꺼운 글자처럼 각 항목 아래의 property들을 하나의 property로 단축시켜 사용하는 경우이고, font도 그렇다.</p>
              <q>아래의 굵은 글씨가 단축형 property이고 아래의 해당 항목들을 필요한 만큼 축약시켜 사용한다. 예를 들어 border width를 top, right, bottom, left를 개별 지정할 수도 있지만 'border-width'라는 단축형으로 한꺼번에 지정할 수도 있다는 말이다. transition, animation도 같은 방법이다.</q>

            </div>
            <div className="vspace2"></div>
            <div className="d-flex justify-content-around align-content-around">
              <ul className="green border border-gray pl-0 p-4">
                <li><span className="emph">border-width</span></li>
                <li>border-top-width</li>
                <li>border-right-width</li>
                <li>border-bottom-width</li>
                <li>border-left-width</li>
              </ul>
              <ul className="green border border-gray pl-0 p-4">
                <li><span className="emph">transition</span></li>
                <li>transition-property</li>
                <li>transition-duration</li>
                <li>transition-timing-function</li>
                <li>transition-delay</li>
              </ul>
              <ul className="green border border-gray pl-0 p-4">
                <li className="checked"><span className="emph">animation</span></li>
                <li>animation-name</li>
                <li>animation-duration</li>
                <li>animation-timing-function</li>
                <li>animation-iteration-count</li>
                <li>animation-direction</li>
                <li>animation-play-state</li>
                <li>animation-delay</li>
                <li>animation-fill-mode</li>
              </ul>


            </div>
            <p className="lead">Shorthand가 아닌 일반 property(각 shorthand 아래 나열한 property들)들은 Longhand property라 부른다.</p>
          </div>
          <table className="normal">
            <caption>font property</caption>
            <thead>
              <tr title="Click to sort">
                <th style={{ width: '20%' }}>Property</th>
                <th>
                  <a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-style">font
                  </a>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>Values</th>
                <td>[ [ &lt;‘font-style’&gt; || &lt;font-variant-css21&gt; || &lt;‘font-weight’&gt; || &lt;‘font-stretch’&gt; ]? &lt;‘font-size’&gt; [ / &lt;‘line-height’&gt; ]? &lt;‘font-family’&gt; ] | caption | icon | menu | message-box | small-caption | status-bar</td>
              </tr>
              <tr>
                <th>Initial</th>
                <td>see individual properties (Property마다 다르므로 해당 property들을 볼 것...)</td>
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
                <td>see individual properties</td>
              </tr>
              <tr>
                <th>Media</th>
                <td>visual</td>
              </tr>
              <tr>
                <th>Computed value:</th>
                <td>see individual properties</td>
              </tr>
              <tr>
                <th>Animatable:</th>
                <td>see individual properties</td>
              </tr>

            </tbody>
          </table>
          <div className="normal-wrap">
            <h2 id="ReadCssTable_3">CSS Spec Table 읽는 방법 3</h2>
            <p className="lead">위의 table에서 font의 value는 흘깃 봤을 때 매우 복잡하다. 그러므로 이런 복잡한 것들을 흘깃 봐서는 안된다.</p>
            <div className="normal-wrap">
              <h3 id="doublePipe">Double pipe : <q>||</q></h3>
              <p className="lead">Double pipe에 의해 분리된 값들은 <span className="emph">순서에 관계없이</span> 1개에서부터 주어진 값의 갯수만큼 사용되어야 된다.</p>
              <code className="text-primary">[ &lt;‘font-style’&gt; || &lt;font-variant-css21&gt; || &lt;‘font-weight’&gt; || &lt;‘font-stretch’&gt; ]? </code>
              <p className="lead">앞의 표에서 font property value 중 위의 부분만 따로 떼어놓고 보자. Double pipe로 분리된 4개의 값(font-style, font-variant, font-weight, font-stretch)들을 최소한 1개에서 4개 까지 무순서로 사용하라는 뜻이다.</p>
              <h3 id="ZeroOrMore">Zero or more (Optional) : <q>?</q></h3>
              <p className="lead">위의 4개의 값을 square bracket으로 grouping한 다음 오른쪽 괄호(<span className="emph"> ] </span>) 밖에 <q>?</q> symbol을 붙였다. 이 심볼은 0 또는 1번을 뜻한다. 즉, 쓰거나(1) 안쓰거나(0) 선택적(optional)이라는 뜻이다.</p>




              <p className="lead">일단 '<a href="FontStyle#ReadCssTable_1">Spec 해독법 1</a>'에서 다루었던 'Single Pipe' symbol <q className="text-warning">|</q> 부터 보자. 이 심볼로 분리된 값 중에 단 하나만을 사용하라는 뜻이므로 single pipe를 기준으로 나누면 모두 일곱개(빨간 점이 찍힌)인데, 이 일곱개 중 하나만을 사용하라는 뜻이다. 그런데 처음 옵션이 좀 길다.</p>
              <style jsx>{`
          ul.red>li {
            border: 1px solid #ccc;
            padding: 1em ;
          }
          ul.green {
            border: 1px solid #ddd;
          }
          `}</style>

              <ul className="red">
                <li><span className="emph">[</span> [ &lt;‘font-style’> || &lt;font-variant-css21> || &lt;‘font-weight’> || &lt;‘font-stretch’> ]? <span className="space">&nbsp;&nbsp;</span>&lt;‘font-size’> [ / &lt;‘line-height’> ]?<span className="space">&nbsp;&nbsp;</span>&lt;‘font-family’> <span className="emph">]</span>
                </li>
                <ul className="green">
                  <p>그래서 위를 분해해 보면</p>
                  <li><span className="emph">[</span></li>
                  <li> <span className="text-danger">[</span> &lt;‘font-style’> || &lt;font-variant-css21> || &lt;‘font-weight’> || &lt;‘font-stretch’> <span className="text-danger">]</span>? <span className="space">&nbsp;&nbsp;</span></li>
                  <li>&lt;‘font-size’> [ / &lt;‘line-height’> ]?<span className="space">&nbsp;&nbsp;</span></li>
                  <li>&lt;‘font-family’></li>
                  <li><span className="emph">]</span></li>
                  <p>위 처럼 구분할 수 있다.</p>
                </ul>
                <li>caption (시스템 버튼, 드롭 다운 등)</li>
                <li>icon (시스템 아이콘 레이블)</li>
                <li>menu (시스템 메뉴 목록)</li>
                <li>message-box (시스템 대화 상자에 사용 된 글꼴)</li>
                <li>small-caption (시스템  작은 컨트롤을 레이블링하는 글꼴)</li>
                <li>status-bar (시스템 창 상태 표시 줄에 사용 된 글꼴)</li>
              </ul>
              <h3 id="AdjacentValue">Adjacent value combinator (all in order) : <q><span className="space">&nbsp;&nbsp;</span></q>(space)</h3>
              <p className="lead">Adjacent value는 space로 분리된 인접(adjacent)값들을 말하는데, 이 문서에서는 border만 있는 사각형(<span className="space">&nbsp;&nbsp;</span>)으로 표현한다. 앞의 3가지 symbol( ||, ?, <span className="space">&nbsp;&nbsp;</span> )을 적용해서 </p>
              

              <code><span className="emph font-weight-bold">[</span> <span className="text-primary">[ &lt;‘font-style’> || &lt;font-variant-css21> || &lt;‘font-weight’> || &lt;‘font-stretch’> ]?<span className="space">&nbsp;</span>&lt;‘font-size’> [ / &lt;‘line-height’> ]?<span className="space">&nbsp;</span>&lt;‘font-family’> </span><span className="emph font-weight-bold">]</span> </code>
              <p className="lead">를 해석하면 space(<span className="space">&nbsp;&nbsp;</span>)로 분리된 값들을 반드시 차례대로 생략없이 모두 써야 된다는 뜻이다.</p>
              <h4>[ / &lt;'line-height']?</h4>
              <p className="lead">이 표기는 오른쪽에 optional symbol(?)이 붙었으므로 쓰거나 말거나 하라는 말인데, 만약 쓸 경우에는 line-height 앞에 slash(/)를 붙여서 font-size property와 분리해 표기하라는 뜻이다. 그래서 만약 font property 값을 full option으로 coding한다면 아래와 같이 할 수 있다.</p>
              <code className="success">font: italic small-caps bold ultra-expaned<span className="space">&nbsp;</span>1em/1.7<span className="space">&nbsp;</span>Helvetica, serif, 바탕체, 'Lucida Sans Unicode' </code>
              <p className="lead">물론 'italic' 부터 'ultra-expanded'까지 4개의 값은 무순서로 써도 되고, 위의 1em/1.7은 '1em<span className="space">&nbsp;</span>/<span className="space">&nbsp;</span>1.7', '1em/<span className="space">&nbsp;</span>1.7', '1em<span className="space">&nbsp;</span>/1.7' 처럼 slash(/) 좌우의 space는 주어도 되고 말아도 된다.</p>
              <h3>caption | icon | menu | message-box | small-caption | status-bar</h3>
              <p className="lead">나머지 여섯가지 값은 시스템(windows, mac, linux등) interface에 지정된 글꼴이다. 예를 들어 탐색기 상태표시줄에 지정된 글꼴을 쓰고 싶다면 아래처럼 사용하면 된다.</p>
              <code className="success">font: status-bar</code>
            </div>
          </div>
          <h2 id="cautiousAboutFontShorthand">단축형으로 font 사용시 주의할 점</h2>
          <p className="lead">문서 초반에 말했듯, font를 shorthand로 사용할 때 주의사항이 있다. 만약 아래처럼</p>
          <code className="success">font: 16px / 1.5 Verdana</code>
          <p className="lead">앞의 4가지 값을 생략하면 어떻게 될까? 이 결과는 경우에 따라 다른데, 어떤 CSS rule이 먼저 선언 되었느냐에 따라 결정된다. 아래의 code를 보자</p>
          <pre><code>{`<!DOCTYPE html>
<html lang="en">

<head>
  <title>font shorthand property</title>
  <meta charset="UTF-8" />
  <style>
    .props4 {
      font-family: serif;
      font-size: 2em;
      line-height: 1.5;
      font-style: italic;
      font-variant: small-caps;
      font-weight: bold;
      font-stretch: ultra-expanded; /* font-stretch는 현재 지원 브라우저가 없어서 안 먹힌다. */
    }
    
    .shorthand {
      font-family: serif;
      font-size: 2em;
      line-height: 1.5;
      font-style: italic;
      font-variant: small-caps;
      font-weight: bold;
      font-stretch: ultra-expanded;
      font: 2em / 1.5 Verdana; /* 앞의 값들을 생략했으므로 4가지 property 모두 normal 값이 된다. */
    }

    .sham {
      font: 2em / 1.5; /* 뒤에 font-family가 빠졌으므로 CSS parser가 .sham class 전체를 무시한다. */
    }

  </style>
</head>

<body>
  <p class="props4">of course</p><!-- 지정한대로 먹힌다. -->
  <p class="shorthand">of course</p><!-- props4 class에 지정한 값을 shorthand class가 override -->
  <p class="sham">of course</p><!-- font-family가 없으므로 parser가 sham class를 무시하여 브라우저 기본값 적용. -->
  <p class="props4 shorthand">
    <span class="sham" style="color:red;">yes</span>
    <!-- .sham class는 무효화 되었지만 상속값 '2em'은 물려받는다. -->
    of course
  </p>
</body>

</html>`}</code></pre>
          <div className="normal-wrap">
            <h3 id="shorthandExeResult">실행결과 분석</h3>
            <ol className="circle">
              <li>첫번째 <span className="tag">p</span>는 .<span className="brown">props</span> class에 지정한 값들이 모두 제대로 작동한다.</li>
              <li>.<span className="brown">shorthand</span> class 마지막 줄인 <span className="css-prop">font: 2em / 1.5 Verdana</span> 앞의 4가지 값 font-style, font-variant, font-weight, font-stretch 모두 생략되었으므로 4가지 값 모두 default값인 normal이 된다.</li>
              <li>.<span className="span brown">sham</span> class같은 경우는 반드시 사용해야 될 font-family를 사용하지 않았으므로 .<span className="brown">sham</span> class 자체가 CSS parser에 의해 무효화된다. 즉, 없는 것과 마찬가지가 된다.</li>
              <li>네번째 <span className="tag">p</span> 속의 <span className="tag">span</span>은 sham class가 무효화되었지만 부모인 <span className="tag">p</span>로 부터 상속받은 <span className="css-prop">font-size: 2em</span> 을 그대로 물려받았으므로 2em 크기를 유지한다.</li>
            </ol>


            <h3 id="w3cCascadingPrincipal">Cascading</h3>
            <p className="lead">하지만 만약 위의 code에서 .props4 class와 .shorthand class의 순서를 아래와 같이 바꾸면 어떻게 될까. </p>
            <pre><code>{` .shorthand {
      font-family: serif;
      font-size: 2em;
      line-height: 1.5;
      font-style: italic;
      font-variant: small-caps;
      font-weight: bold;
      font-stretch: ultra-expanded;
      font: 2em / 1.5 Verdana; 
    }

  .props4 {
      font-family: serif;
      font-size: 2em;
      line-height: 1.5;
      font-style: italic;
      font-variant: small-caps;
      font-weight: bold;
      font-stretch: ultra-expanded; 
    }
`}</code></pre>          
            <p className="lead">이 결과 속에는 'Cascading'의 원리가 들어있는데, 이 것은 W3C가 CSS spec을 design하는 대원칙이다. Cascading에 대해서는 다른 문서에서 따로 설명하기로 하고 위의 결과는 여러분들 각자 테스트해 보시기 바란다.</p>
            <p className="lead">이 문서를 마치려다 보니, 뭔가 미진한 부분이 많이 보이지만 이 사이트 'CSS Level 3' 메뉴를 진행하다보면 무수한 property table들을 만나게 될 것이므로 특별한 내용이 나타나면 그때 마다 유의점에 대해 별도로 설명하겠다.</p>
          </div>
        </section>

      </React.Fragment>
    )
  }
}

export default Font_C;