import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import textDataTypes_C from './textDataTypes_C';
import textDataTypes_N from './textDataTypes_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class textDataTypes extends React.Component {
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
              <textDataTypes_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <textDataTypes_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default textDataTypes;