import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import FontStyle_C from './FontStyle_C';
import FontStyle_N from './FontStyle_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class FontStyle extends React.Component {
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
              <FontStyle_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <FontStyle_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default FontStyle;