import React, { Component } from 'react';
import debounce from 'debounce';
import mermaid from 'mermaid';

export class MermaidSample extends Component {
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
    mermaid.initialize( { startOnLoad: true } );

    var graphDefinition = 
    `
    내용들어가는 곳

    `;

    mermaid.render( 'theGraph', graphDefinition, function ( svgCode ) {
      output.innerHTML = svgCode;
    } );
  }


  render () {
    return (
      <div className="mermaid">

        <textarea 
          style={{display: 'none'}}
          rows="4"
          onChange={( e ) => this.handleChange( e.target.value )}
        />
        <div id="output" />
      </div>
    );
  }
}