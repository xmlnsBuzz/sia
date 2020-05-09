import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import ValDefSyntax_C from './ValDefSyntax_C';
import ValDefSyntax_N from './ValDefSyntax_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class ValDefSyntax extends React.Component {
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
              <ValDefSyntax_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <ValDefSyntax_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default ValDefSyntax;