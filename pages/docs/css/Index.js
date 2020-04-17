import React from 'react';
import Head from 'next/head';
import Cheader from '../../../components/Cheader';
import Index_C from './Index_C';
import Index_N from './Index_N';

class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title></title>
        </Head>
        <Cheader />

        <main id="main" className="main row">
          <div id="scrollContent" className="scroll-content col-lg-10">
           <Index_C />
          </div>
          <section id="scrollSpy" className="scroll-spy">
            <div className="container text-center">
             <div className="bookmark-header">
               <a className="navbar-brand js-scroll-trigger" href="#page-top">
                 
                </a>
             </div>
            </div>
           <Index_N />
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Index;