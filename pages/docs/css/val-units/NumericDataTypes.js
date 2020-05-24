import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import NumericDataTypes_C from './NumericDataTypes_C';
import NumericDataTypes_N from './NumericDataTypes_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class NumericDataTypes extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Numeric Data Types - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <NumericDataTypes_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <NumericDataTypes_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default NumericDataTypes;