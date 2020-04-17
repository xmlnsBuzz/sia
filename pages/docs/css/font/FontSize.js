import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import FontSize_C from './FontSize_C';
import FontSize_N from './FontSize_N';

class FontSize extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>font-size Property - SIA Channel.</title>
        </Head>
        <Cheader />

        <main id="main" className="main row">
          <div id="scrollContent" className="scroll-content col-lg-10">
           <div className="normal-wrap">
             <FontSize_C />
           </div>
          </div>
          <section id="scrollSpy" className="scroll-spy">
           <FontSize_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default FontSize;