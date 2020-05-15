import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import FontWeight_C from './FontWeight_C';
import FontWeight_N from './FontWeight_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class FontWeight extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>font-weight Property - SIA Channel.</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <FontWeight_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <FontWeight_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default FontWeight;