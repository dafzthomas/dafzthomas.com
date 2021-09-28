import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Home: NextPage = () => {
    return (
        <PageLayout>
            <NextSeo
                title="Dafydd Thomas - Personal website"
                description="Web developer"
                canonical={`https://dafzthomas.com`}
                openGraph={{
                    type: 'website',
                    url: `https://dafzthomas.com/`,
                    title: 'Dafydd Thomas - Personal website',
                    description: 'Web developer',
                    site_name: 'Dafydd Thomas - Personal Website',
                }}
                twitter={{
                    handle: '@dafzthomas',
                    cardType: 'summary_large_image',
                }}
            />

            <p>Hello, I&apos;m Dafydd.</p>
        </PageLayout>
    );
};

export default Home;
