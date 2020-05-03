
 import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import SyntaxDataTypes_C from './SyntaxDataTypes_C';
import SyntaxDataTypes_N from './SyntaxDataTypes_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class SyntaxDataTypes extends React.Component {
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
              <SyntaxDataTypes_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <SyntaxDataTypes_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default SyntaxDataTypes;