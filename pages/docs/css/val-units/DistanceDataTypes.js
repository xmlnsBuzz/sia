import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import DistanceDataTypes_C from './DistanceDataTypes_C';
import DistanceDataTypes_N from './DistanceDataTypes_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class DistanceDataTypes extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Length(Distance) Data Types - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <DistanceDataTypes_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <DistanceDataTypes_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default DistanceDataTypes;