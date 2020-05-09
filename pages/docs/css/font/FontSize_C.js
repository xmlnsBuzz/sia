import React from 'react';

class FontSize_C extends React.Component {
  render () {
    return (
      <React.Fragment>

        <section>
          <div className="align-center">
            <h1>font-size Property</h1>
          </div>

          <hr />
          <div className="normal-wrap">
            <h2 id="fontSizeValues">Value</h2>

            <p className="lead">font-size property는 font의 크기를 지정한다. 지정할 수 있는 크기는 절대크기(absolut-size)와 상대크기(relative size) 그리고 길이단위(length-units)의 백분율이다.</p>

            <table class="normal">
              <caption>W3C font-size Property</caption>
              <colgroup span="2">
                <col span="1" />
                <col span="1" style={{ paddingLeft: '15px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Property Name</th>
                  <th><a href="https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#font-style-prop">font-style</a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Value:</th>
                  <td>
                    <a href="https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#absolute-size-value" target="_blank">&lt;absolute-size&gt;</a>
          | <a href="https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#relative-size-value" target="_blank">&lt;relative-size&gt;</a> |
          &lt;length-percentage&gt;

          </td>
                </tr>
                <tr>
                  <th>Initial:</th>
                  <td>medium</td>
                </tr>
                <tr>
                  <th>Applies to:</th>
                  <td>all elements</td>
                </tr>
                <tr>
                  <th>Inherited:</th>
                  <td>yes</td>
                </tr>
                <tr>
                  <th>Percentages:</th>
                  <td>refer to parent element's font size</td>
                </tr>
                <tr>
                  <th>Media:</th>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>Computed value:</th>
                  <td>absolute length</td>
                </tr>
                <tr>
                  <th>Animatable:</th>
                  <td>as <a href="https://drafts.csswg.org/css-transitions/#animtype-length" target="_blank">length</a></td>
                </tr>
              </tbody>
            </table>
            {/* NOTE 문서의 글씨크기는 몇 가지여야 될까? */}
            <div className="normal-wrap">
              <h3 id="fontSizeValueAbsolute">Absolut size (절대크기)</h3>
              <p className="lead">font-size에서 사용되는 절대크기란 아래의 표에서 표시한 keyword <span className="emph">xx-small</span>부터 <span className="emph">xx-large</span> 중에서 <span className="emph">medium</span>을 뺀 여섯가지 keyword들이다.</p>
              <table class="normal">
                <thead>
                  <tr>
                    <th style={{ width: '30%' }}>CSS absolute-size values</th>
                    <th>xx-small</th>
                    <th>x-small</th>
                    <th>small</th>
                    <th><span className="emph">medium</span></th>
                    <th>large</th>
                    <th>x-large</th>
                    <th>xx-large</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>CSS Pixels</th>
                    <td>9</td>
                    <td>10</td>
                    <td>13</td>
                    <td>16(1em)</td>
                    <td>18</td>
                    <td>24</td>
                    <td>32</td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <th>HTML headings(h1~h6)</th>
                    <td>h6</td>
                    <td></td>
                    <td>h5</td>
                    <td>h4</td>
                    <td>h3</td>
                    <td>h2</td>
                    <td>h1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>HTML font element's sizes</th>
                    <td>1</td>
                    <td></td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                  </tr>
                </tbody>
              </table>

              <p className="lead">위 여섯개의 keyword value는 절대값이므로 <span className="emph">:root</span>, <span className="emph">html, body</span> 같은 selector에 어떤 값을 지정하든 표에 있는 크기를 유지한다.</p>

              <h3 id="fontSizeValueRelative">Relative size (상대크기)</h3>
              <p className="lead">Property table의 value 중 비교급 단어가 있다. 바로 <span className="emph">smaller</span>와 <span className="emph">larger</span>다. 이 두 keyword의 비교대상은 medium이다. midium에 지정된 값을 기준으로 상대적으로 작아지고 커진다.</p>
              <table class="normal">
                <thead>
                  <tr>
                    <th style={{ width: '31%' }}>CSS relative-size values</th>
                    <th>small</th>
                    <th>medium</th>
                    <th>large</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Scaling factor(배율)</th>
                    <td style={{ width: '23%' }}>5/6</td>
                    <td style={{ width: '23%' }}>1</td>
                    <td style={{ width: '23%' }}>6/5</td>
                  </tr>
                  <tr>
                    <th>CSS Pixels</th>
                    <td>13.3333</td>
                    <td>16(1em)</td>
                    <td>19.2</td>
                  </tr>

                </tbody>
              </table>
              <p className="lead">하지만 아래의 상대크기 keyword들은 <span className="emph">medium</span>에 지정하는 값에 따라 표에 표시한 배율(Scaling factor)만큼 커지거나 작아진다. 따라서</p>
              <pre><code>{`<!DOCTYPE html>
<html lang="en">

<head>
  <title>font-size property</title>
  <style>
    :root {
    font-family: sans-serif;
    font-size: 2em;
    }

    /*
    :root의 font-size 값을 변동시켜 본다.
    smaller, medium, larger 값은 변동되고
    나머지 keyword 값들은 절대값이므로 변동없다.
    */

    .small { font-size: small; }
    .smaller { font-size: smaller; }
    .x-small { font-size: x-small; }
    .xx-small { font-size: xx-small; }
    .medium { font-size: medium; }
    .f16 { font-size: 16px; }
    .rem-1 { font-size: 1rem; }
    .large { font-size: large; }
    .larger { font-size: larger; }
    .x-large { font-size: x-large; }
    .xx-large { font-size: xx-large; }
  </style>
</head>

<body>
  <h1>font-size의 Keyword 값들</h1>
  <p class="xx-small">xx-small : 9px</p>
  <p class="x-small">x-small : 10px</p>
  <p class="small">small : 13px</p>
  <p class="smaller">smaller : 13.3333px</p>
  <p class="medium">medium : 16px</p>
  <p className="rem-1">rem : root size</p>
  <p class="f16">1em : 16px</p>
  <p class="large">large : 18px</p>
  <p class="larger">larger : 19.2px</p>
  <p class="x-large">x-large : 24px</p>
  <p class="xx-large">xx-large : 32px</p>

  <font size="1">font size 1</font>
  <font size="2">font size 2</font>
  <font size="3">font size 3</font>
  <font size="4">font size 4</font>
  <font size="5">font size 5</font>
  <font size="6">font size 6</font>
  <font size="7">font size 7</font>
</body>
</html>
          `}</code></pre>
              <p className="lead"><span className="emph">:root</span> class에 <span className="css-prop">font-size : 2em</span>을 주었을 경우 <span className="emph">medium</span> 값은 2em을 그대로 받게되고, <span className="emph">smaller</span>와 <span className="emph">larger</span>는 <span className="emph">medium</span>값에 각각의 배율을 곱한 크기가 된다. 위의 code에서는 '2em' 이므로 배율은 2가 되겠다.</p>
            </div>
              <h2 id="fontSizeInitialValue">Initial (초기값)</h2>
              <p className="lead">부모 또는 조상 element에 font-size를 지정하지 않았다면 <span className="emph">medium</span>의 font-size는 UA(브라우저)의 초기값인 '1em' 이다.</p>

              <div className="normal-wrap"><h4>옛날에 <span className="tag">font</span> element 쓰던 시절에...</h4>
              <p className="lead">HTML version 4 부터 도태(deprecated)되어 지금은 쓰지 않는 <span className="tag">font</span>라는 element가 있는데 초보자들이 애용했었다. 나 역시 처음 HTML을 배울 당시 가장 많이 사용한 element 중 하나였는데, 나는 글씨 크기 보다 색깔이 내가 지정한대로 나오는 것이 어찌나 신기하던지...<span className="tag">font</span>의 attribute 중 <span className="emph">size</span>라는 것이 있는데 글꼴을 크기를 지정하는 attribute다. 1 ~ 7까지의 값을 지정할 수 있는데 그 크기는 위의 표를 참조할 것.</p>
              <p className="lead"></p>
                <p className="lead">그런데 HTML 버전이 올라가면서 도태되는 element들을 브라우저가 지원할까 안할까? 지금도 대부분의 major 브라우저가 지원하고 있다. 만약 지원하지 않는다면 옛날에 만든 문서가 브라우저에서 엉망으로 보일 것이다.</p>
              </div>

              <h2 id="fontSizePercentages">Percentages (백분율)</h2>
              <p className="lead">부모(parent)가 가진 font-size에 대한 백분율을 사용할 수 있다.</p>
            
            <pre><code>{`<head>
  <style>
    section {
    font-size: 20px;
    }
    
    p {
    font-size: 80%;
    }
    
    </style>
  </head>
  
  <body>
    <section>font-size 20px
      <div>font-size 20px
        <p>font-size 80% (20px X 0.8 = 16px)</p>
      </div>
    </section>
  </body>`}</code></pre>
            <p className="lead"><span className="tag">p</span>의 입장에서 <span className="tag">section</span>은 부모가 아니라 조상(ascendant)이다. <span className="tag">div</span>에 font-size를 지정하지 않아서 얼핏보면 조상의 크기를 물려받은 것 같지만 <span className="tag">div</span>에 font-size를 따로 지정하지 않았으므로 당연히 부모인 <span className="tag">section</span>의 '20px'를 물려받은 것이고, 물려받은 '20px'를 자식(child)인 <span className="tag">p</span>에 물려준 것이다. </p>

            <h3 id="fontSizeComputedValue">Computed value</h3>
            <p className="lead">Computed value란 CSS parser의 계산에 의해  최종적으로 판결되는 값을 말한다. '판결'이라는 단어가 재판에 주로 쓰는 단어라 어색하겠지만, CSS의 첫 글자 'C'에 해당하는 단어인 'Cascading'{/* NOTE cascading 문서를 만들면 링크시킬 것. */}에 의해 우선순위가 가장 높은 값을 판단하여 결정하기 때문에 '판결'이 가장 가까운 단어일 것 같아서 사용한 것 이다.</p>
            <p className="lead">Cascading에 대해서는 따로 설명하기로 하고,여하튼 CSS parser는 최종값인 computed value를 결정하게 되는데,모니터 같은 visual media의 경우 길이나 크기의 computed value는 항상 <q>pixel</q>단위가 된다. <q>Pixel</q>이란 모니터 화소의 최소단위인데, 이 값이 종종 소수점 이하로 나오게 되고 W3C guideline에는 소수점 이하 나머지값은 버리도록 되어있는데...</p>
            <p className="lead">이게... 글쎄 브라우저에 따라 다르게 표현된다. 내 경우 브라우저는 크롬과 파이어폭스 두가지에서 테스트 하는데, 크롬은 무슨 수를 썼는지 소수점 이하값을 표현하는 듯 보이고, 파이어폭스는 잘라내는 것으로 나타났다. 정말이다... 궁금하면 아래의 코드를 브라우저에서 실행해 보도록 한다.</p>
            <pre><code>{`<!DOCTYPE html>
<html lang="en">

<head>
  <title>Computed value</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <style>
    div {
      width: 100px;
      height: 100px;
    }

    .b10 {
      border: 1px solid red;
    }

    .b14 {
      border: 1.4px solid red;
    }

    .b15 {
      border: 1.9px solid red;
    }

    .b20 {
      border: 2px solid red;
    }

  </style>
</head>

<body>
  <div class="b10"></div>
  <div class="b14"></div>
  <div class="b15"></div>
  <div class="b20"></div>
</body>

</html>
            `}</code></pre>
            <p className="lead">FireFox는 소수점 이하는 무조건 잘라내고 크롬은 그렇지 않다. 분명 pixel이하를 표현할 수 없는 것으로 아는데... 혹시 누구 아는 분은 내게 좀 가르쳐 주시기 바란다.</p>
          </div>
          {/* h3 */}
          {/* h2 */}


        </section>



      </React.Fragment >
    )
  }
}

export default FontSize_C;