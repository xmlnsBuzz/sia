import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import TextAlignLast_C from './TextAlignLast_C';
import TextAlignLast_N from './TextAlignLast_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class TextAlignLast extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>text-align-last Property - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <TextAlignLast_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <TextAlignLast_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default TextAlignLast;