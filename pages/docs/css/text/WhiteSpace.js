import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import WhiteSpace_C from './WhiteSpace_C';
import WhiteSpace_N from './WhiteSpace_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class WhiteSpace extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>white-space Property - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <WhiteSpace_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <WhiteSpace_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default WhiteSpace;