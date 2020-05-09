import React, { Component } from 'react';
import debounce from 'debounce';
import mermaid from 'mermaid';




class DomTreeGeneratingProcess extends Component {
  handleChange = debounce(
    ( value ) => {
      console.log( value );
      var output = document.getElementById( 'output' );
      try {
        mermaid.parse( value );
        output.innerHTML = '';
        mermaid.render( 'theGraph', value, function ( svgCode ) {
          console.log( svgCode );
          output.innerHTML = svgCode;
        } );
      } catch ( err ) {
        console.error( err );
      }
    },
    600,
    false
  );

  componentDidMount () {
    var output = document.getElementById( 'output' );
    mermaid.initialize( {
      startOnLoad: true,
      theme: 'neu',/* NOTE 와 이거 희안하네... 테마를 왼쪽처럼 주니 색다르네.. ;) */
      gantt: {
        axisFormatter: [
          [ '%Y-%m-%d', ( d ) => {
            return d.getDay() === 1
          } ]
        ]
      }
    
    
    } );

    var graphDefinition = `graph TB
        HTML[Load HTML]-->Parse[Parse HTML];
        Parse--HTML만 있을 때-->domTree[Create DOMtree];
        Parse-->CSS[Load CSS];
        CSS-->PCSS[Parse CSS];
        PCSS--Attatch as Property-->domTree;
        domTree-->Display;
        Parse-->JS[Load JavaScript];
        JS-->PJS[Parse JavaScript];
        PJS--Attatch as Property-->domTree;`;

    mermaid.render( 'theGraph', graphDefinition, function ( svgCode ) {
      output.innerHTML = svgCode;
    } );
  }

  render () {
    return (
        <div id="output" />
    );
  }
}

export default DomTreeGeneratingProcess;