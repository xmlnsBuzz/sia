import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import LetterSpacing_C from './LetterSpacing_C';
import LetterSpacing_N from './LetterSpacing_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class LetterSpacing extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>letter-spacing Property - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <LetterSpacing_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <LetterSpacing_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default LetterSpacing;