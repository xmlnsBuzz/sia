import React from 'react';
import Head from 'next/head';
import Cheader from '../../../../components/Cheader';
import FontMain from './FontMain';

class Fonts extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head>
          <title>SIA - Fonts Property</title>
        </Head>
        <Cheader />

        <FontMain />
      </React.Fragment>
    )
  }
}

export default Fonts;

