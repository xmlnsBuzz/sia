import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import TextIntro_C from './TextIntro_C';
import TextIntro_N from './TextIntro_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass } from '../../DocsVariables';

class TextIntro extends React.Component {
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
              <TextIntro_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <TextIntro_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default TextIntro;