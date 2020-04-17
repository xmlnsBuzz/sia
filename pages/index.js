import React from 'react';
import Head from 'next/head';
import Cheader from '../components/Cheader';
import Cmain from '../components/Cmain';


class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>Full Stack WebDev - SIA</title>
        </Head>
        <Cheader />
        <Cmain />
      </React.Fragment>
    )
  }
}

export default Home;
