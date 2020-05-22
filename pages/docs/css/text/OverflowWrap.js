import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import OverflowWrap_C from './OverflowWrap_C';
import OverflowWrap_N from './OverflowWrap_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class OverflowWrap extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>overflow-wrap Property - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <OverflowWrap_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <OverflowWrap_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default OverflowWrap;