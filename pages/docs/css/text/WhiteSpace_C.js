import React from 'react';

class WhiteSpace_C extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="vspace2"></div>
        <div className="align-center">
          <h1>white-space Property</h1>
        </div>
        <section id="">
          <div className="normal-wrap">
            <hr />
            <h2></h2>
            <p className="lead">
              <img src="/static/word-art/white-space.png" width="100%" height="auto" alt="ASD" style={{filter: 'blur(5px)'}} />
              <img src="/static/word-art/white-space-grayTone.png" width="100%" height="auto" alt="ASD" />
              <img src="/static/word-art/white-space-grayTone-edge.png" width="100%" height="auto" alt="ASD" />
            </p>
            <div className="normal-wrap">
              <h3></h3>
            <p className="lead"></p>
            </div>
          </div><table class="sortable">
            <thead>
              <tr>
                <th></th>
                <th>New lines</th>
                <th>Spaces and tabs</th>
                <th>Text wrapping</th>
                <th>End-of-line spaces</th>
                <th>End-of-line  other spaces seperators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><code>normal</code></th>
                <td>Collapse</td>
                <td>Collapse</td>
                <td>Wrap</td>
                <td>Remove</td>
                <td>Hang</td>
              </tr>
              <tr>
                <th><code>pre</code></th>
                <td>Preserve</td>
                <td>Preserve</td>
                <td>No wrap</td>
                <td>Preserve</td>
                <td>No wrap</td>
              </tr>
              <tr>
                <th><code>nowrap</code></th>
                <td>Collapse</td>
                <td>Collapse</td>
                <td>No wrap</td>
                <td>Remove</td>
                <td>Hang</td>
              </tr>
              <tr>
                <th><code>pre-wrap</code></th>
                <td>Preserve</td>
                <td>Preserve</td>
                <td>Wrap</td>
                <td>Hang</td>
                <td>Hang</td>
              </tr>
              <tr>
                <th><code>break-spaces<sup>3</sup></code></th>
                <td>Preserve</td>
                <td>Preserve</td>
                <td>Wrap</td>
                <td>Wrap</td>
                <td>Wrap</td>
              </tr>
              <tr>
                <th><code>pre-line</code></th>
                <td>Preserve</td>
                <td>Collapse</td>
                <td>Wrap</td>
                <td>Remove</td>
                <td>Hang</td>
              </tr>
            </tbody>
          </table>
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

export default WhiteSpace_C;