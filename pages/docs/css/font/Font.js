import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import Font_C from './Font_C';
import Font_N from './Font_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class Font extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>font property - Fullstack Sia Channel.</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <Font_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <Font_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Font;