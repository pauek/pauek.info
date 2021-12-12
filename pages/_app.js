import { Layout } from '../components/Layout';
import Script from 'next/script';
import '../styles/globals.css'
import '../public/webfonts/ss-social.css';

function MyApp({ Component, pageProps }) {
  const id = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  return (
    <Layout>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy='afterInteractive'
      />
      <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${id}');
      `}</Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
