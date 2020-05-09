import React from 'react';

class Fontweight_C extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="vspace2"></div>
        <div className="align-center">
          <h1>font-weight Property</h1>
        </div>
        <section>
          <div className="normal-wrap">
            <hr />
            <h2 id="fontWeightProperty">font-weight</h2>
            <p className="lead">font-weight property는 폰트 '두께(혹은 굵기)'를 지정하는 property다. Typography에 있어서 font-weight는 결코 없어서는 안 될 요소(component)다. 나한테 font관련 CSS property 중에서 절대 포기할 수 없는 것을 꼽으라면 이 font-weight와 font-size를 꼽겠다.</p>
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
            <div className="normal-wrap">
              <h3></h3>
              <p className="lead"></p>
            </div>
          </div>
        </section>

        <section id="">
          <div className="normal-wrap">
            <h2 id=""></h2>
            <p className="lead"></p>
       
          </div>
        </section>
        <section id="">
          <div className="normal-wrap">
            <h2 id=""></h2>
            <p className="lead"></p>
          </div>
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
        </section>
        <section id="">
          <div className="normal-wrap">
            <h2 id=""></h2>
            <p className="lead"></p>
          </div>
        </section>

      </React.Fragment>
    )
  }
}

export default Fontweight_C;