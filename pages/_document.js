import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';



export default class MyDocument extends Document {

  render () {

    return (
      <html lang="ko">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="FullStack Web Development SIA" />
          <link rel="icon" type="image/png" href="/img/favicon/favicon-32x32.png" />
          <link rel="apple-touch-icon" href="/img/favicon/logo192.png" />
          {/* <link rel="manifest" href="/img/favicon/manifest.json" /> */}
          <link rel="stylesheet" href="/static/css/bootstrap-4.1.3.min.css" />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
          
          {/* <link href="/static/css/navbar.css" rel="stylesheet" /> */}
          {/* <link href="/static/css/scrolling-nav.css" rel="stylesheet" /> */}
          <link rel="stylesheet" href="/static/css/vs2015.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mermaid/7.0.11/mermaid.css" />
          <link rel="stylesheet" href="/static/css/styles.css" />
        </Head>
        <body id="scrollSpy" className="scrollspy">
          
          <Main />
          <NextScript />
          <script type="text/javascript" src="/static/js/jquery-3.4.1.slim.min.js"></script>
          <script type="text/javascript" src="/static/js/popper-1.16.0.min.js"></script>
          <script type="text/javascript" src="/static/js/bootstrap-4.4.1.min.js"></script>
          {/*           <script type="text/javascript" src="/static/js/jquery.easing.min.js"></script>  */}
          <script type="text/javascript" src="/static/js/scrolling-nav.js"></script>
          {/*  NOTE scrolling-nav.js가 없으면 scroll해도 indexing 북마크 글자들이 highlight되지 않는다. */}
          <script type="text/javascript" src="/static/js/navbar.js"></script>

          <script src="/static/js/sorttable.js"></script>
          {/* <script src="//cdn.jsdelivr.net/npm/mermaid@8.2.1/dist/mermaid.min.js"></script> */}
          <script src="/static/js/mermaid.js"></script>
          {/* <script src="/static/js/mermaid-sub.js"></script> */}
          {/* <script src="/static/js/index.bundle.js" charSet="utf-8"></script> */}



          <script src="/static/js/highlight.pack.js"></script>
          <script>hljs.initHighlightingOnLoad();</script>

        </body>
      </html>
    );
  }
}