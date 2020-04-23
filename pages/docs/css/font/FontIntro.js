import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import FontIntro_C from './FontIntro_C';
import FontIntro_N from './FontIntro_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class FontIntro extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>FONT 개론¡  - Introduction to FONT</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <FontIntro_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
           <FontIntro_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default FontIntro;