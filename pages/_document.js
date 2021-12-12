
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="author" content="Pau Fernández" />
          <meta name="description" content="Profesor en la UPC, Programador, Creador de minidosis.org" />
          <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Source+Sans+Pro&display=swap" rel="stylesheet" />
          <link href="https://feeds.feedburner.com/pauek"
            rel="alternate"
            title="Pau Fernández"
            type="application/atom+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;