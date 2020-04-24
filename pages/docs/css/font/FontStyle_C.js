import React from 'react';

class FontStyle_C extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section id="">
          <div className="align-center">
            <h1>font-style Property</h1>
          </div>
          <div className="normal-wrap">
            <hr />
            <h2></h2>
            <p className="lead"></p>
            <div className="normal-wrap">
              <h3></h3>
              <p class="lead"></p>
            </div>
          </div>
          <h2></h2>
          <p className="lead"></p>
          <table className="sortable">
            <caption>font-style property</caption>
            <thead>
              <tr title="Click to sort">
                <th style={{width: '20%'}}>Property</th>
                <th>
                  <a class="property" href="https://www.w3.org/TR/css-fonts-3/#propdef-font-style">font-style
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
        </section>

      </React.Fragment>
    )
  }
}

export default FontStyle_C;