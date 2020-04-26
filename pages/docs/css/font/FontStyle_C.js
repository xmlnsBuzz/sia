import React from 'react';

class FontStyle_C extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section id="page-top">
          <div className="align-center">
            <h1>font-style Property</h1>
          </div>
          <div className="normal-wrap">
            <hr />
            <h2>CSS font-style Specification</h2>
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
              <tbody>
                <tr>
                  <th>Values</th>
                  <td>normal | italic | oblique</td>
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
                  <td>N/A</td>
                </tr>
                <tr>
                  <th>Media</th>
                  <td>visual</td>
                </tr>
              </tbody>
            </table>
            <h2 id="Styling">Styling</h2>
            <p className="lead">'스타일링'이란 말이 있다. 흔히 자기 나름대로 머리에 멋을 부리는 것을 '헤어스타일링'이라 하는데, 생긴 그대로 normal하게 다니는 사람이 있는가 하면 빠마를 하는 사람, 무스로 스타일링하는 사람 등 뭔가 변화를 시도하는 사람도 있다. 아마도 인간이 가진 특성중 하나인 '변덕' 때문이 아닐까 한다. 사람이 한 가지 일을 꾸준히 한다는게 여간 어려운 일이 아니라는 것은 모두 잘 알 것이다.</p>
            <h2 id="Synonym">i</h2>
            <p className="lead">이건 너무나 뻔한 말이다. 하지만 웹개발을 좀 했다는 사람들도 font-style의 keyword value인 'italic'과 'oblique'를 구분하지 않고 쓰는 경우가 많고, 설사 안다고 해도 사용법을 모르고 있다.</p>
            <h2 id="FontStyle">font-style</h2>
            <p className="lead">Font(글꼴)의 style도 마찬가지다. 아무런 지정을 하지 않은 normal과 필기체 모양의 경사진 <span className="italic">italic</span>, normal체에 기울기만 준 <span className="oblique">oblique</span> 등이 있다.</p>
            <span className="oblique">face oblique</span><br/>
            <span className="italic">face italic</span>
            <div className="normal-wrap">
              <h3></h3>
              <p className="lead"></p>
            </div>
            
          </div>

        </section>

      </React.Fragment>
    )
  }
}

export default FontStyle_C;