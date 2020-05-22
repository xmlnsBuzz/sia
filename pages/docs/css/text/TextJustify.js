import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import TextJustify_C from './TextJustify_C';
import TextJustify_N from './TextJustify_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class TextJustify extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>text-justify Property - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <TextJustify_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <TextJustify_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default TextJustify;