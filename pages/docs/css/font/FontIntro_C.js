import React from 'react';
// import Mincho from './image/'
class FontIntro_C extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section id="Intro2Font">
          <div className="align-center">
            <h1>Font Module Level 3</h1>
          </div>
          <hr />
          <div className="normal-wrap">
            <h2 id="intro_whatIsFonts">FONT 라는 단어의 뜻</h2>
            <p className="lead">Font는 글꼴, 글자체, 서체등으로도 불리우며 한글의 낱자, 알파벳(대소문자), 숫자, 기호 등이 모두 같은 느낌을 주는 인쇄활자  (<a href="https://fonts.google.com/specimen/Noto+Sans+KR">구글폰트 Noto Sans KR</a> 참조) 를 뜻한다. 각 글꼴(font family)은 그 글꼴을 구성하는 각 활자가 모두 통일된 모양(face), 굵기(weight), 장평(condensed or expanded), 장식(serif or sans-serif), 기울기(style)등을 유지한다. 즉, 앞에 나열한 것 중 한가지라도 다르다면 같은 글꼴(font)이 아니라는 말이다.</p>

            <p className="lead">Font에 대한 정보를 찾고자 웹서핑을 하다보면 가끔 'Typeface'라는 말이 나온다. 이 단어는 주로 종이인쇄나 시각디자인을 전문으로 하는 사람들이 사용하는데, 하나의 페이지를 디자인하는데 사용되는 여러가지 글꼴들을 모두 포함하여 typeface라 부른다. 쉽게 말해 방탄소년단의 'Map of the soul 7' 앨범이 typeface라면 이 앨범에 포함된 'Persona'는 하나의 글꼴(font-family)인 셈이다. 하지만 이런 것들에 대한 구분없이 마구잡이로 만드는 웹문서에는 이런 구분이 별 의미없을지 모르겠다. </p>
<h2 id="intro_typography">Typography</h2>
            <p className="lead">그렇지만 이런 것들과 상관없이 시각디자인에서 사용하는 '<span className="emph">Typography</span>'라는 용어가 있다. 이 단어는 좁은 의미에서는 위의 typeface와 비슷하지만 <span className="emph">typography</span>는 글꼴 외에도 'image', 'icon' 등 여러가지 디자인적 요소를 포함한다는 점으로 구별할 수 있다. 우리가 개발하는 웹페이지도 '<span className="emph">typography</span>' 수준이 되도록 노력하면 좋겠다. 아래의 이미지는 '<span className="emph">typography</span>'의 중요성을 상기시켜주는 좋은 예이다.</p>
            <p className="lead">아카데미상 시상식에서 잘못된 typogrphy 덕분에 페이 더너웨이 아지매가 여우주연상을 'La la land'에게 수여하게 되는 해프닝이 벌어지는데, 그 때 사용된 typo card를 수정 전과 후로 본 것이다. 보다시피</p>
            <ul className="green">
              <li>before에서는 'EMMA STONE'과 'LA LA LAND'를 같은 굵기로 표현하여 양쪽을 모두 강조(highlight)하여, 정작 어떤 글자가 여우주연상 이름인지 헛갈리게 했고</li>
              <li>after는 누가 보더라도'EMMA STONE'이 한 눈에 들어오도록 했다.</li>
            </ul>  <p className="lead">
              after는 아마도 누가 포토샵으로 수정한 것 같다.
            </p>

            <img style={{ width: '100%' }} src="/img/css/font/intro/academy-award-typography.jpg" alt="" />

            <p className="lead">하여간 이 페이지에서는 글꼴의 모양, 굵기, 장평, 장식, 기울기등에 따른 font family의 구분에 대해 개략적으로 논의하며 자세한 내용은 해당 css property 문서에서 설명하기로 한다. </p>

          </div>
          <section id="intro_transformFonts" className="normal-wrap">
            <h2 id="intro_makeVariationFactorFace">FONT에 다양한 변화를 주는 font관련 property들</h2>
            <p className="lead">앞에서 말한 모양, 굵기, 장평, 장식등, 글꼴에 변화를 주는 요소와 그 '이름'이 뭔지에 대해 알아보자.</p>
            <div className="normal-wrap">
              <h2 id="intro_fontFace">font-family : 글꼴 이름</h2>
              <p className="lead">가로 세로 획의 시작 지점과 끝 지점 사이에 '굵기 변화' '뾰족한 장식' 등이 있는 글꼴. 명조체는 중국의 명나라 시대의 글씨체라는 뜻이지만 실제로는 이미 송나라 때 완성된 글씨체로 대략 가로 : 세로 = 1 : 4 인 한자체에서 유래되었다. 윈도우 OS 글꼴 중 '바탕체'가 여기에 속한다.</p>
              <div className="normal-wrap">
                <h3 id="intro_serifs">Serifs (명조체:明朝體)</h3>
                <p className="lead"><aside className="alt-image-r float-right" style={{ fontFamily: 'Noto Serif KR', fontWeight: 'bold', backgroundColor: '#efefef' }}>明朝體</aside>가로 세로 획의 시작 지점과 끝 지점 사이에 '굵기 변화' '뾰족한 장식' 등이 있는 글꼴. 명조체는 중국의 명나라 시대의 글씨체라는 뜻이지만 실제로는 이미 송나라 때 완성된 글씨체로 대략 가로두께 : 세로두께 = 1 : 4 인 한자체에서 유래되었다. 윈도우 OS 글꼴 중 '바탕체'가 여기에 속한다.</p>
              </div>
              <div className="normal-wrap">
                <h3 id="intro_sansSerifs">Sans Serifs (고딕체:Gothic)</h3>
                <p className="lead"><aside className="alt-image-r float-right" style={{ fontFamily: 'Noto Sans KR', fontWeight: 'bold', backgroundColor: '#efefef' }}>暗夕體</aside>각 획의 굵기가 일정한 글꼴이다. 대표적인 google font로는 Roboto, Open Sans, Lato, Monserrat 등의 영문폰트가 있고 한글은 Noto Sans Kr, Nanum Gothic 등이 있다. 윈도우 OS 글꼴 중 Arial, 돋움체 등이 여기에 해당된다.</p>
                <p className="lead">그 밖에 손으로 쓴 느낌의 필기체(cursive), coding에 주로 사용되는 고정폭(monospace or fixed-width), 어디에도 얽매이지 않고 틀에서 벗어난 '멋대로체'(display) 등이 있다.</p>
              </div>
              <h2 id="intro_fontStyle" className="clearfix">font-style : 글꼴의 기울기</h2>
              <p className="lead">CSS의 font-style property는 글꼴의 기울기를 다루며, 기울임이 없는 'normal', 기울기와 특유의 글꼴이 있는 '<span className="italic georgia">italic</span>', normal체에 경사만 준 '<span className="italic">oblique</span>'가 그 값이다.</p>
              <h2 id="intro_fontStretch">font-stretch : 글자의 가로폭과 굵기에 따른 분류</h2>
              <p className="lead"> 낱자 하나가 차지하는 가로폭에 따라 보통폭의 normal을 기준으로 가늘고 좁은 폭의 condensed, 굵고 넓은 폭의 expanded 등이 있으며, 보다 세분화 하여 두 단어 앞에 ultra-, extra-, semi- 등의 접두사를 붙일 수도 있다.</p>
              <img style={{ border: '1px solid #efefef', marginBottom: '20px' }} src="/img/css/font/intro/weight-width-variations.png" alt="font stretch" title="font-stretch : 가로폭에 따른 분류" />
              <div className="clearfix">
              </div>
            </div>
            <h2 id="intro_fontWeight">font-weight : 글자굵기 </h2>
            <p className="lead">글자굵기를 다루는 font-weight property는 대개 글자를 굵게 만드는 bold체라고 생각하는 경우가 많다. 하지만 반대로 font-weight는 폰트를 가늘게 만들기도 한다. 굵기를 조절하는 값 또는 keyword들은 아래와 같다.</p>
            <pre><code>normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600
            | 700 | 800 | 900</code></pre>
            <p className="lead">그러나 이런 값들을 온전히 지원하는 브라우저는 없다. 그 중 mozilla firefox가 가장 많은 값을 지원해 주긴 하지만 다 해주지는 않는다. 하지만 이 문제는 브라우저가 아닌 google variable font를 사용하여, 모두는 아닐지라도 거의 만족할 만큼의 값들을 사용하므로써 해결할 수 있는데, 이 것에 대한 논의는 각각의 property들을 다루는 문서들에서 하기로 하고 이 문서는 여기서 끝맺는다.</p>

            <h2 id="intro_fontTable">font관련 properties</h2>
            <p className="lead">아래의 표는 font관련 property들을 나열한 것이다. 내가 일일히 정성껏 만든 것은 아니고, W3C CSS spec에서 복사했다. 이 표에 익숙한 사람과 그렇지 않은 사람이 있을텐데, CSS를 꽤 안다는 사람도 'Values'에 해당되는 값들은 대개 해석이 불가할 것이다.</p>

            <table className="sortable">
              <caption>W3C Spec에서 복사함.</caption>
              <thead>
                <tr title="Click to sort">
                  <th style={{ width: '16%' }}>Property</th>
                  <th>Values</th>
                  <th>Initial</th>
                  <th>Applies to</th>
                  <th>Inh.</th>
                  <th>Percentages</th>
                  <th>Media</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font" target="_blank">
                      font
                    </a>
                  </th>
                  <td>[ [ &lt;‘font-style’&gt; || &lt;font-variant-css21&gt; ||
                  &lt;‘font-weight’&gt; || &lt;‘font-stretch’&gt; ]?
                  &lt;‘font-size’&gt; [ / &lt;‘line-height’&gt; ]?
                  &lt;‘font-family’&gt; ] | caption | icon | menu | message-box |
                small-caption | status-bar</td>
                  <td>see individual properties</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>see individual properties</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-family" target="_blank">font-family</a>
                  </th>
                  <td>[ &lt;family-name&gt; | &lt;generic-family&gt; ]#</td>
                  <td>depends on user agent</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property"
                    href="https://www.w3.org/TR/css-fonts-3/#propdef-font-feature-settings" target="_blank">font-feature-settings</a>
                  </th>
                  <td>normal | &lt;feature-tag-value&gt;#</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-kerning" target="_blank">font-kerning</a>
                  </th>
                  <td>auto | normal | none</td>
                  <td>auto</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size" target="_blank">font-size</a>
                  </th>
                  <td>&lt;absolute-size&gt; | &lt;relative-size&gt; |
                &lt;length-percentage&gt;</td>
                  <td>medium</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>refer to parent element's font size</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-size-adjust" target="_blank">font-size-adjust</a>
                  </th>
                  <td>none | &lt;number&gt;</td>
                  <td>none</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-stretch" target="_blank">font-stretch</a>
                  </th>
                  <td>normal | ultra-condensed | extra-condensed | condensed |
                  semi-condensed | semi-expanded | expanded | extra-expanded |
                ultra-expanded</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-style" target="_blank">font-style</a>
                  </th>
                  <td>normal | italic | oblique</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-synthesis" target="_blank">font-synthesis</a>
                  </th>
                  <td>none | [ weight || style ]</td>
                  <td>weight style</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant" target="_blank">font-variant</a>
                  </th>
                  <td>normal | none | [ &lt;common-lig-values&gt; ||
                  &lt;discretionary-lig-values&gt; || &lt;historical-lig-values&gt; ||
                  &lt;contextual-alt-values&gt; || [ small-caps | all-small-caps |
                  petite-caps | all-petite-caps | unicase | titling-caps ] ||
                  &lt;numeric-figure-values&gt; || &lt;numeric-spacing-values&gt; ||
                  &lt;numeric-fraction-values&gt; || ordinal || slashed-zero ||
                  &lt;east-asian-variant-values&gt; || &lt;east-asian-width-values&gt; ||
                ruby || [ sub | super ] ]</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>see individual properties</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property"
                    href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant-caps" target="_blank">font-variant-caps</a>
                  </th>
                  <td>normal | small-caps | all-small-caps | petite-caps | all-petite-caps
                | unicase | titling-caps</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property"
                    href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant-east-asian" target="_blank">font-variant-east-asian</a>
                  </th>
                  <td>normal | [ &lt;east-asian-variant-values&gt; ||
                &lt;east-asian-width-values&gt; || ruby ]</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property"
                    href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant-ligatures" target="_blank">font-variant-ligatures</a>
                  </th>
                  <td>normal | none | [ &lt;common-lig-values&gt; ||
                  &lt;discretionary-lig-values&gt; || &lt;historical-lig-values&gt; ||
                &lt;contextual-alt-values&gt; ]</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property"
                    href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant-numeric" target="_blank">font-variant-numeric</a>
                  </th>
                  <td>normal | [ &lt;numeric-figure-values&gt; ||
                  &lt;numeric-spacing-values&gt; || &lt;numeric-fraction-values&gt; ||
                ordinal || slashed-zero ]</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property"
                    href="https://www.w3.org/TR/css-fonts-3/#propdef-font-variant-position" target="_blank">font-variant-position</a>
                  </th>
                  <td>normal | sub | super</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <th><a className="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-weight" target="_blank">font-weight</a>
                  </th>
                  <td>normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600
                | 700 | 800 | 900</td>
                  <td>normal</td>
                  <td>all elements</td>
                  <td>yes</td>
                  <td>N/A</td>
                  <td>visual</td>
                </tr>
              </tbody>
            </table>
            <div className="vspace1"></div>
            <p className="lead">세상에는 '앞에 놓고 하루종일 설명해줘도 알기 힘든 지식'과 '귀띔만 해줘도 단번에 알 수 있는 지식'이 있다. 그리고 W3C 여러가지 spec 중 CSS spec은 몇 가지 기본적 방법만 알면 모든 CSS spec을 스스로 해독할 수 있는 수준이라 본다. 즉, value에 사용된 기호만 이해하면 나머지는 스스로 해독할 수 있는데, 그 기호라는 것이 몇 개 되지 않을 뿐더러 고난이도가 아니라 귀띔만으로도 알 수 있는 정도다. 물론 처음엔 좀 헛갈리겠지만... 이 채널의 목적 중 하나는 W3C CSS spec table을 스스로 해독할 수 있는 지식을 제공하는 것이다. 한발 한발 서서히 나아가다 보면 점차 익숙해 질 것이다. </p>

          </section>
        </section>
      </React.Fragment>
    )
  }
}
export default FontIntro_C;