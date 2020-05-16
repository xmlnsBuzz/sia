import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import TextAlign_C from './TextAlign_C';
import TextAlign_N from './TextAlign_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class TextAlign extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>text align Property - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <TextAlign_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <TextAlign_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default TextAlign;