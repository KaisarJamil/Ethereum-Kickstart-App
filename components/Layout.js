import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default props => {
  return (
      <Container style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"
          />
        </Head>
        <Header />
        { props.children }
      </Container>
  );
};
