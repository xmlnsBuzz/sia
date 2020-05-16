import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import TextSizeAdjust_C from './TextSizeAdjust_C';
import TextSizeAdjust_N from './TextSizeAdjust_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class TextSizeAdjust extends React.Component {
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
              <TextSizeAdjust_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <TextSizeAdjust_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default TextSizeAdjust;