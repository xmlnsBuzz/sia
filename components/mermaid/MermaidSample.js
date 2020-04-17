import React, { Component } from 'react';
import debounce from 'debounce';
import mermaid from 'mermaid';

export class MermaidSample extends Component {
  /* *
   * Debounce the code first. When the function
   * fires, take the value and attempt to update
   * the Mermaid chart.
   *
   * @memberof App
   */
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

  /* *
   * Render an initial chart on mount.
   *
   * @memberof App
   */
  componentDidMount () {
    var output = document.getElementById( 'output' );
    mermaid.initialize( { startOnLoad: true } );

    var graphDefinition = 
    `graph LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
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

export class MermaidSample2 extends Component {
  /* *
   * Debounce the code first. When the function
   * fires, take the value and attempt to update
   * the Mermaid chart.
   *
   * @memberof App
   */
  handleChange = debounce(
    ( value2 ) => {
      console.log( value2 );
      var output2 = document.getElementById( 'output2' );
      try {
        mermaid.parse( value2 );

        output2.innerHTML = '';

        mermaid.render( 'theGraph2', value2, function ( svgCode2 ) {
          console.log( svgCode2 );
          output2.innerHTML = svgCode2;
        } );
      } catch ( err ) {
        console.error( err );
      }
    },
    600,
    false
  );

  /* *
   * Render an initial chart on mount.
   *
   * @memberof App
   */
  componentDidMount () {
    var output2 = document.getElementById( 'output2' );
    mermaid.initialize( { startOnLoad: true } );
  
    var graphDefinition2 = `gantt
dateFormat  YYYY-MM-DD
axisFormat  %d/%m
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d

section Critical tasks
Completed task in the critical line :crit, done, 2014-01-06,24h
Implement parser and jison          :crit, done, after des1, 2d
Create tests for parser             :crit, active, 3d
Future task in critical line        :crit, 5d
Create tests for renderer           :2d
Add to mermaid                      :1d

section Documentation
Describe gantt syntax               :active, a1, after des1, 3d
Add gantt diagram to demo page      :after a1  , 20h
Add another diagram to demo page    :doc1, after a1  , 48h

section Clickable
Visit mermaidjs               :active, cl1, 2014-01-07,2014-01-10
Calling a Callback (look at the console log) :cl2, after cl1, 3d

click cl1 href "https://mermaidjs.github.io/"
click cl2 call ganttTestClick("test", test, test)

section Last section
Describe gantt syntax               :after doc1, 3d
Add gantt diagram to demo page      : 20h
Add another diagram to demo page    : 48h
    `;
    mermaid.render( 'theGraph2', graphDefinition2, function ( svgCode2 ) {
      output2.innerHTML = svgCode2;
    } );
  }


  render () {
    return (
      <div className="mermaid">

        <textarea 
          style={{ display: 'none' }}
          rows="4"
          onChange={( e ) => this.handleChange( e.target.value )}
        />
        <div id="output2" />
      </div>
    );
  }
}

