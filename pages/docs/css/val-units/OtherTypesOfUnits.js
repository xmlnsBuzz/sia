import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import OtherTypesOfUnits_C from './OtherTypesOfUnits_C';
import OtherTypesOfUnits_N from './OtherTypesOfUnits_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class OtherTypesOfUnits extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title> - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <OtherTypesOfUnits_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <OtherTypesOfUnits_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default OtherTypesOfUnits;