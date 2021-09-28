import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            {process.env.NODE_ENV === 'production' && (
                <Head>
                    <script
                        src="https://cdn.usefathom.com/script.js"
                        data-site="EFTFIBDY"
                        defer
                    ></script>
                </Head>
            )}
            <Component {...pageProps} />;
        </div>
    );
}
export default MyApp;
