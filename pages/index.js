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
        <div >
          
          {/* <div className="q" style={{ top: '10vh', bottom: '118vh',whiteSpace: 'break-spaces' }}>
            Liftime Building ?<br /><br /><br />
            Or 
            <br />
            <br /><br />Over Night Tent ?
          </div> */}

        </div>
<div style={{width: '100%', textAlign: 'center'}}><p style={{fontSize: '84px', fontFamily: 'Architects Daughter',marginTop: '1em'}}>Both are <strong style={{fontWeight: '900'}}>alright</strong>.</p>
          <p style={{ fontSize: '84px', fontFamily: 'Architects Daughter', marginTop: '1em'}}>Code as much as you <strong style={{fontWeight: '900'}}>need</strong>.</p></div>
        {/* <Cheader /> */}
        {/* <img className="landing" src="/img/landing4.png" width="100%" alt="landing" /> */}
        <div style={{ width: '100%', height: '100vh', backgroundColor: 'transparent', position: 'absolute', textAlign: 'center', backgroundImage: '/public/img/landing4.png', backgroundSize: 'cover', backgroundAttachment: 'fixed', marginTop: '1em' }}>
        <Cheader />
          <p style={{ fontSize: '84px', fontFamily: 'Architects Daughter', marginTop: '1em' }}>Both are <strong style={{ fontWeight: '900', marginTop: '1em'}}>alright</strong>.</p>
          <p style={{ fontSize: '84px', fontFamily: 'Architects Daughter', marginTop: '1em'}}>Code as much as you <strong style={{fontWeight: '900'}}>need</strong>.</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        </div>
        {/* <img className="landing" src="/img/landing4.png" width="100%" alt="landing" /> */}
        
      </React.Fragment>
    )
  }
}

export default Home;
