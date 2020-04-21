import React from 'react';
import Head from 'next/head';
import Cheader from '../components/Cheader';
import index_C from './index_C';
import index_N from './index_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from './docs/DocsVariables';

class index extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>FullStack WebDev Front Page</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <index_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
           <index_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default index;