import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import Hyphens_C from './Hyphens_C';
import Hyphens_N from './Hyphens_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class Hyphens extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>hyphens Property - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <Hyphens_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <Hyphens_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Hyphens;