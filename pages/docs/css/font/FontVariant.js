import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import FontVariant_C from './FontVariant_C';
import FontVariant_N from './FontVariant_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class FontVariant extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>font-variant Property - SIA Channel.</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <FontVariant_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <FontVariant_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default FontVariant;