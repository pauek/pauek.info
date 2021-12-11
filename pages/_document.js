
import Document, { Html, Head, Main, NextScript } from 'next/document';

const googleAnalyticsScript = `
var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36758965-1']);
    _gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
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
          <script type="text/javascript">{googleAnalyticsScript}</script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;