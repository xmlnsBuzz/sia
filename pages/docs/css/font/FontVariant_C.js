import React from 'react';

class FontVariant_C extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="vspace2"></div>
        <div className="align-center">
          <h1>font-variant Property</h1>
        </div>
        <section>
          <div className="normal-wrap">
            <hr />
            <h2 id="fontVariant">font-variant</h2>
            <p className="lead">font-variant는 font-variant-alternates,
            font-variant-caps,
            font-variant-east-asian,
            font-variant-ligatures,
            font-variant-numeric,
            font-variant-position,
font-variation-settings의 단축형 property다.</p>

            <p className="lead"><span className="emph">variant</span>라는 단어는 변종(變種) 또는 이형(異形)이라는 뜻이다. Alphabet에서의 모양상의 변화는 대문자와 소문자 두가지 type 밖에 없다. 이 것은 alphabet의 고유한 형태이지 변화한 것이 아니다.</p>

            <p className="lead">그런데 이 property들은 현재 'FireFox' 브라우저에서만 지원되고, 사파리에서 일부 지원된다.크롬에서는 이 이 property들 중에 몇 가지 값만을 지원하는데, 이 페이지에서는 크롬에서도 지원하는 값에 대해서만 간단히 알아본다.</p>

            <p className="lead">
              Alphabet에서의 이형이란 어떤 것이 있는지 알아보자.
            </p>
            <div className="normal-wrap">
              <h3 id="fontVariantNormal">normal</h3>
              <p className="lead">이형을 만들지 않는다. 기본값이다.</p>
              <h3 id="fontVariantSmallCaps">소문자를 소문자 높이의 대문자로 : small-caps</h3>
              <p className="lead">소문자 높이의 대문자를 만든다.</p>
              <h3 id="fontVariantAllSmallCaps">대소문자 모두 소문자 높이의 대문자로 : small-caps</h3>
              <p className="lead">대소문자 모두 소문자 높이의 대문자를 만든다. 아래의 code를 복사한 후 실행해 보는 것으로 이 페이지를 마치는데, 나머지 property value들은 추후 다른 브라우저들의 지원 상황이 바뀌게 되면 보충하기로 한다.</p>
              <p className="lead">참고로 font-variant를 지원해 주는 브라우저 현황이 caniuse.com에 가면 있는데 <a href="https://caniuse.com/#search=font-variant" target="_blank">font-variant 지원현황</a>을 확인해 보시기 바란다. 써도되요.com... 참 고마운 사이트다.</p>
            </div>
            <pre><code>{`<!DOCTYPE html>
<html lang="en">

  <head>
    <title>font-variant Property</title>
    <meta charset="UTF-8" />
    <style>
      html {
        font-size: 2em;
        font-family: serif;
      }

      .small {
        font-variant: small-caps;
      }

      .all-small {
        font-variant: all-small-caps;
      }

    </style>
  </head>

  <body>
    <p class="small">Lorem ipsum dolor sit amet.</p>
    <p class="all-small">Lorem ipsum dolor sit amet.</p>
  </body>

</html>`}</code></pre>            
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default FontVariant_C;