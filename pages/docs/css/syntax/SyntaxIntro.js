import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import SyntaxIntro_C from './SyntaxIntro_C';
import SyntaxIntro_N from './SyntaxIntro_N';
import { MainId, MainClass, ScrollContentId, ScrollContentClass, NormalWrapClass, ScrollSpyId, ScrollSpyClass, DocTitleAttach, BaseUrl } from '../../DocsVariables';

class SyntaxIntro extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>CSS Syntax Module Level 3 - {DocTitleAttach}</title>
        </Head>
        <Cheader />

        <main id={MainId} className={MainClass}>
          <div id={ScrollContentId} className={ScrollContentClass}>
            <div className={NormalWrapClass}>
              <SyntaxIntro_C />
            </div>
          </div>
          <section id={ScrollSpyId} className={ScrollSpyClass}>
            <SyntaxIntro_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default SyntaxIntro;