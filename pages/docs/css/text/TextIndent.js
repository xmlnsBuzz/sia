import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import TextIndent_C from './TextIndent_C';
import TextIndent_N from './TextIndent_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class TextIndent extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>text-indent Property - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <TextIndent_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <TextIndent_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default TextIndent;