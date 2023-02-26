import { useState, useEffect } from 'react';
import '../styles/globals.css';
import Load from '../components/Load';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  return (
    // <>
    //   {!loading ? (
    //     <>
    <Component {...pageProps} />
    //     </>
    //   ) : (
    //     <>
    //       <Load />
    //     </>
    //   )}
    // </>
  );
}

export default MyApp;
