import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import Text_C from './Text_C';
import Text_N from './Text_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class Text extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>text property</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <Text_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <Text_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Text;