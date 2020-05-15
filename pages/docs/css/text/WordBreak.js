import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import WordBreak_C from './WordBreak_C';
import WordBreak_N from './WordBreak_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class WordBreak extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title></title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <WordBreak_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <WordBreak_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default WordBreak;