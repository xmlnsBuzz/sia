import React from 'react';
import Head from 'next/head';
import Cheader from '../components/Cheader';
import Index_C from './Index_C';

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Full Stack WebDev - SIA</title>
        </Head>
        <Index_C />
        <div style={{ width: '100%', height: '100vh', backgroundColor: 'transparent', top: '0', left: '0', position: 'absolute', textAlign: 'center'}}>
          
          <div className="q" style={{ top: '15vh'}}>Build a Life Time Building? Or</div>
          <div className="q" style={{ top: '65vh' }}>Build a Over Night Stand Tent?</div>

        </div>
        <Cheader />
        <img className="landing" src="/img/landing4.png" width="100%" alt="landing" />
        
        <Cheader />
        <img className="landing" src="/img/landing4.png" width="100%" alt="landing" />
        
      </React.Fragment>
    )
  }
}

export default Home;
