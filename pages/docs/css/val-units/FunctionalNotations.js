import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import FunctionalNotations_C from './FunctionalNotations_C';
import FunctionalNotations_N from './FunctionalNotations_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class FunctionalNotations extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Functional Notations - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <FunctionalNotations_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <FunctionalNotations_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default FunctionalNotations;