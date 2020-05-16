import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import WordSpacing_C from './WordSpacing_C';
import WordSpacing_N from './WordSpacing_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class WordSpacing extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>word-spacing Property - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <WordSpacing_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <WordSpacing_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default WordSpacing;