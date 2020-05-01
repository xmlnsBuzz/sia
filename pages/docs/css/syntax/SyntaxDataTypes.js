
 import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import CssDataTypes_C from './CssDataTypes_C';
import CssDataTypes_N from './CssDataTypes_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class CssDataTypes extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>CSS Data Types</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <CssDataTypes_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <CssDataTypes_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default CssDataTypes;