import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import TextualDataTypes_C from './TextualDataTypes_C';
import TextualDataTypes_N from './TextualDataTypes_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class TextualDataTypes extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Textual Data Types - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <TextualDataTypes_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <TextualDataTypes_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default TextualDataTypes;