import React from 'react';
import PageTop from '../../PageTop';
import DomTreeGeneratingProcess from '../../../../components/mermaid/DomTreeGeneratingProcess'

// mermaid.initialize( {
//   theme: 'neutral',
//   width: '800px',
//   fontFamily: 'Shadows Into Light',
//   color: '#f00',
//   fontSize: 8,
//   textAlign: 'center',
//   gantt: {
//     axisFormatter: [
//       [ '%Y-%m-%d', ( d ) => {
//         return d.getDay() === 1
//       } ]
//     ]
//   }
// } )


class FontMain extends React.Component {
  render () {
    return (
      <main id="main" className="main row">
        <div id="scrollContent" className="scroll-content col-lg-10">
          <section id="about">
            <div className="normal-wrap">

              <div className="align-center">
                <h1>Fonts Property</h1>
              </div>
              <hr />
              
              <h2>About this page</h2>
              <p className="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so
              you can use it as a boilerplate or starting point for you own landing page designs! This template features : 우리는 민족 중흥의 역사적 사명을 띄고 이 땅에 태어났다. 조상의 빛난 얼을 오늘에 되살려 안으로 자주독립의 기틀을 마련하고 밖으로 인류공영에 이바지할 때이다. 이에 우리의 나아갈 바를 밝혀 교육의 지표로 삼는다.</p>
              <p><q>sdf</q></p>

              <div className="normal-wrap">
                <h3 id="us">Heading 3</h3>
              </div>
              <p>para</p>
            </div>
            <p>text</p>
          </section>
          <section id="services">
            <h2>Services we offer</h2>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita
            quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut
      velit dignissimos.</p>
          </section>

          <section id="contact">
            <h2>Contact us</h2>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor,
            provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in,
      quo totam.</p>
            <DomTreeGeneratingProcess />
          </section>
          <section id="fontProperties">
            <h2>Font properties</h2>
            <p></p>
            <table className="sortable">
              <caption>font Properties (출처 : W3C)</caption>
              <colgroup>
                <col span="1"/>
                <col span="1" width="35%"/>
                <col span="1" width="10%"/>
                
                <col span="4" className="center"/>
                
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">Property</th>
                  <th scope="col">Values</th>
                  <th scope="col">Initial</th>
                  <th scope="col">Applies to</th>
                  <th scope="col">Inheritance</th>
                  <th scope="col">Percentage</th>
                  <th scope="col">Media</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font"
                    >font</a>                    
                  </th>
                  <td>
                    [ [ &lt;‘font-style’&gt; || &lt;font-variant-css21&gt; ||
                    &lt;‘font-weight’&gt; || &lt;‘font-stretch’&gt; ]?
                    &lt;‘font-size’&gt; [ / &lt;‘line-height’&gt; ]?
                    &lt;‘font-family’&gt; ] | caption | icon | menu | message-box |
                    small-caption | status-bar
          </td>
                  <td>see individual properties</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>see individual properties</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-family"
                    >font-family</a>
                  </th>
                  <td>[ &lt;family-name&gt; | &lt;generic-family&gt; ]#</td>
                  <td>depends on user agent</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-feature-settings"
                    >font-feature-settings</a>
                  </th>
                  <td>normal | &lt;feature-tag-value&gt;#</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-kerning"
                    >font-kerning</a>
                  </th>
                  <td>auto | normal | none</td>
                  <td>auto</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size"
                    >font-size</a>
                  </th>
                  <td>
                    &lt;absolute-size&gt; | &lt;relative-size&gt; |
                    &lt;length-percentage&gt;
          </td>
                  <td>medium</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>refer to parent element's font size</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size-adjust"
                    >font-size-adjust</a>
                  </th>
                  <td>none | &lt;number&gt;</td>
                  <td>none</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-stretch"
                    >font-stretch</a>
                  </th>
                  <td>
                    normal | ultra-condensed | extra-condensed | condensed |
                    semi-condensed | semi-expanded | expanded | extra-expanded |
                    ultra-expanded
          </td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-style"
                    >font-style</a>
                  </th>
                  <td>normal | italic | oblique</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-synthesis"
                    >font-synthesis</a>
                  </th>
                  <td>none | [ weight || style ]</td>
                  <td>weight style</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant"
                    >font-variant</a>
                  </th>
                  <td>
                    normal | none | [ &lt;common-lig-values&gt; ||
                    &lt;discretionary-lig-values&gt; || &lt;historical-lig-values&gt; ||
                    &lt;contextual-alt-values&gt; || [ small-caps | all-small-caps |
                    petite-caps | all-petite-caps | unicase | titling-caps ] ||
                    &lt;numeric-figure-values&gt; || &lt;numeric-spacing-values&gt; ||
                    &lt;numeric-fraction-values&gt; || ordinal || slashed-zero ||
                    &lt;east-asian-variant-values&gt; || &lt;east-asian-width-values&gt;
                    || ruby || [ sub | super ] ]
          </td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>see individual properties</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant-caps"
                    >font-variant-caps</a>
                  </th>
                  <td>
                    normal | small-caps | all-small-caps | petite-caps | all-petite-caps
                    | unicase | titling-caps
          </td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant-east-asian"
                    >font-variant-east-asian</a>
                  </th>
                  <td>
                    normal | [ &lt;east-asian-variant-values&gt; ||
                    &lt;east-asian-width-values&gt; || ruby ]
          </td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant-ligatures"
                    >font-variant-ligatures</a>
                  </th>
                  <td>
                    normal | none | [ &lt;common-lig-values&gt; ||
                    &lt;discretionary-lig-values&gt; || &lt;historical-lig-values&gt; ||
                    &lt;contextual-alt-values&gt; ]
          </td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant-numeric"
                    >font-variant-numeric</a>
                  </th>
                  <td>
                    normal | [ &lt;numeric-figure-values&gt; ||
                    &lt;numeric-spacing-values&gt; || &lt;numeric-fraction-values&gt; ||
                    ordinal || slashed-zero ]
          </td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant-position"
                    >font-variant-position</a>
                  </th>
                  <td>normal | sub | super</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th>
                    <a
                      className="property"
                      href="https://www.w3.org/TR/css-fonts-3/#propdef-font-weight"
                    >font-weight</a>
                  </th>
                  <td>
                    normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600
                    | 700 | 800 | 900
          </td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
              </tbody>
            </table>

          </section>
        </div>
        <section id="scrollSpy" className="scroll-spy">
          <div className="container text-center">
            <PageTop />
            <nav className="collapse navbar-collapse text-left overflow-scroll">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li>
                  <ul>
                    <li className="nav-item">
                      <a className="nav-link js-scroll-trigger" href="#us">us</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#fontProperties">Font Properties</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </main>
    )
  }
}

export default FontMain;