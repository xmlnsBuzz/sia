import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import DataTypesDefinedElseWhere_C from './DataTypesDefinedElseWhere_C';
import DataTypesDefinedElseWhere_N from './DataTypesDefinedElseWhere_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class DataTypesDefinedElseWhere extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>별도의 Units을 가진 Module들 - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <DataTypesDefinedElseWhere_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <DataTypesDefinedElseWhere_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default DataTypesDefinedElseWhere;