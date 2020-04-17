import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import FontIntro_C from './FontIntro_C';
import FontIntro_N from './FontIntro_N';

class FontIntro extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Introduction to font - SIA channel</title>
        </Head>
        <Cheader />

        <main id="main" className="main row">
          <div id="scrollContent" className="scroll-content col-lg-10">
            <div className="normal-wrap">
              <FontIntro_C />
            </div>
          </div>

          <section id="scrollSpy" className="scroll-spy">
            <FontIntro_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default FontIntro;