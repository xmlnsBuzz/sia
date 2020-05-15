import React from 'react';

class Fontweight_C extends React.Component {
  render () {
    return (
      <React.Fragment>
        
        <section>
        <div className="align-center">
          <h1>font-weight Property</h1>
        </div>
          <div className="normal-wrap">
            <hr />
            <h2 id="fontWeightProperty">font-weight</h2>
            <p className="lead">font-weight property는 폰트 '두께(혹은 굵기)'를 지정하는 property다. Typography에 있어서 font-weight는 결코 없어서는 안 될 요소(component)다. 나한테 font관련 CSS property 중에서 절대 포기할 수 없는 것을 꼽으라면 font-weight와 <a href="FontSize">font-size</a>를 꼽겠다. 왜냐하면 이 두가지만으로도 강조하려는 text를 얼마든지 강조할 수 있기 때문이다.</p>
            <div className="vspace2"></div>
            <h2 id="fontWeightValues">Values</h2>
            <p className="lead">font-weight는 절대값과 상대값을 사용하여 지정할 수 있다.</p>
            <div className="normal-wrap">
              <h3 id="fontWeightAbsoluteValue">Absolute Value</h3>
              <p className="lead">절대값은 아래의 표 중에 normal, bold 그리고 100 ~ 900의 숫자로 된 값이다. 하지만 이런 다양한 값이 있다고 해서 이 값들을 모두 사용할 수 있는 것은 아니다.</p>
              <p className="lead">이 값들의 사용여부는 전적으로 어떤 font-family를 사용하느냐에 달려있다. </p>



              <table className="normal">
                <caption>W3C font-weight Property</caption>
                <colgroup span="2">
                  <col span="1" />
                  <col span="1" style={{ paddingLeft: '15px' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>Property Name</th>
                    <th><a href="https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#font-weight-prop">font-weight</a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Value:</th>
                    <td>
                      normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
                  </td>
                  </tr>
                  <tr>
                    <th>Initial:</th>
                    <td>normal</td>
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
                    <td>N/A (<span className="bold">N</span>ot <span className="bold">A</span>llowed : 허용 안됨)</td>
                  </tr>
                  <tr>
                    <th>Media:</th>
                    <td>visual</td>
                  </tr>
                  <tr>
                    <th>Computed value:</th>
                    <td>numeric weight value</td>
                  </tr>
                  <tr>
                    <th>Animatable:</th>
                    <td>as <a href="https://drafts.csswg.org/css-transitions/#animtype-font-weight" target="_blank">weight</a></td>
                  </tr>
                </tbody>
              </table>
              <div className="vspace3"></div>
              <h3 id="fontWeightNames">100 ~ 900에 상응하는 font 굵기를 표현하는 단어</h3>
              <p className="lead">다소의 차이가 있지만, 아래는 100 ~ 900까지의 숫자값과 상응하는 굵기에 대한 단어표현이다. </p>
              <ul className="green">
                <li>100 - Thin</li>
                <li>200 - Extra Light (Ultra Light)</li>
                <li>300 - Light</li>
                <li>400 - Normal</li>
                <li>500 - Medium</li>
                <li>600 - Semi Bold (Demi Bold)</li>
                <li>700 - Bold</li>
                <li>800 - Extra Bold (Ultra Bold)</li>
                <li>900 - Black (Heavy)</li>
              </ul>
              <p className="lead">예를 들어 Windows System에 설치하여 사용하는 font 중에 'Trade'라는 font가 있다. 이 폰트의 경우 100 ~ 900에 해당하는 폰트  파일이 있어서 모든 굵기를 표현하려면 font file을 9개 설치해야 되는데, 만약 가장 얇은 폰트를 사용하려면 'Trade'라는 단어 뒤에 위의 100에 해당하는 'Thin'을 접미사로 붙여서 'Trade Thin'이라는 파일을 설치한다. 폰트파일 이름을 이렇게 붙이는 것은 Typography에 있어서 일종의 관습이다. </p>

              <h3 id="fontWeightRelativeValue">Relative Value</h3>
              <p className="lead">font-weight 값을 상대적으로 지정할 수도 있다. 위의 표에서 'lighter'와 'bolder'가 그것이다. 이 때 굵기의 기준은 <span className="emph">normal</span>이다. <a href="FontSize">font-size</a>를 smaller, larger등의 상대값으로 지정한 것과 같은 이치다. 아래의 예제를 브라우저로 돌려보자.</p>



              <pre><code>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>font-weight property</title>
    <style>
      body { font-size: 2em; }
      .fw100 { font-weight: 100; }
      .fw200 { font-weight: 200; }
      .fw300 { font-weight: 300; }
      .fw400 { font-weight: 400; }
      .fw500 { font-weight: 500; }
      .fw600 { font-weight: 600; }
      .fw700 { font-weight: 700; }
      .fw800 { font-weight: 800; }
      .fw900 { font-weight: 900; }
      .fw-lighter { font-weight: lighter; }
      .fw-normal { font-weight: normal; }
      .fw-bolder { font-weight: bolder; }
    </style>
  </head>
  <body>
    <p class="fw100">100</p>
    <p class="fw200">200</p>
    <p class="fw300">300</p>
    <p class="fw400">400</p>
    <p class="fw-normal">Normal 400?</p>
    <p class="fw500">500</p>
    <p class="fw-normal">Normal 500?</p>
    <p class="fw600">600</p>
    <p class="fw700">700</p>
    <p class="fw800">800</p>
    <p class="fw900">900</p>
    <p class="fw-lighter">Lighter</p>
    <p class="fw-normal">Normal</p>
    <p class="fw-bolder">Bolder</p>
  </body>
</html>
`}</code></pre>
              <p className="lead">위의 코드의 실행결과는 chrome과 firefox가 다소간의 차이가 있다. 두 브라우저에서 워낙 여러가지 차이가 나므로 일일히 설명하기 곤란하여 자세한 설명은 생략한다. ^___^</p>

              <p className="lead think"><i className="fas fa-lightbulb text-success"></i> 특별하게 많은 종류의 font-weight를 사용하지 않는 경우라면, 나는 개인적으로 상대 굵기인 'lighter'와 'bolder'를 권하고 싶다. 왜냐햐면 상대굵기를 사용할 경우 Responsive page design(반응형 웹페이지 디자인)에 매우 유리하기 때문이다. 상대값은 최상위 HTML element에 지정한 font-weight에 대한 상대값이므로 @media query에서는 font-size 정도만 변경하고 이외의 다른 font관련 property는 따로 건드릴 필요가 없기 때문이다.</p>

            </div>
            <h2 id="fontWeightComputedValue">Computed value</h2>
            <p className="lead">Computed value는 실제 화면에 표현되는 굵기이다. font-weight의 경우 값을 'thin', 'bold'등의 keyword로 주더라도 그 결과는 숫자값인 100 ~ 900으로 환산한 값을 최종적으로 화면에 표현한다는 뜻이다. 다시 말하지만 이런 값들은 전적으로 어떤 font-family를 사용하느냐에 달려있다. </p>
            <p className="lead">Google fonts 중에 아홉가지 font-weight를 지원해 주는 '<a href="https://fonts.google.com/specimen/Gothic+A1?selection.family=Gothic+A1:100,200,300,400,500,600,700,800,900" target="_blank">Gothic A1</a>'를 참조해 보면 좋을 것이다. 아래로 조금 scroll해 보면 9종류의 style이 잘 나와있다.</p>
          </div>

        </section>

      </React.Fragment>
    )
  }
}

export default Fontweight_C;