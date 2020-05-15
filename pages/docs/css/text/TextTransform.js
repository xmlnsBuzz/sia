import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import TextTransform_C from './TextTransform_C';
import TextTransform_N from './TextTransform_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class TextTransform extends React.Component {
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
              <TextTransform_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <TextTransform_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default TextTransform;