import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import FontFamily_C from './FontFamily_C';
import FontFamily_N from './FontFamily_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class FontFamily extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>font-family property</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <FontFamily_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <FontFamily_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default FontFamily;