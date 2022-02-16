import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Home: NextPage = () => {
    return (
        <PageLayout>
            <NextSeo
                title="Dafydd Thomas | Personal website"
                description="Web developer"
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}`}
                openGraph={{
                    type: 'website',
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
                    title: 'Dafydd Thomas | Personal website',
                    description: 'Web developer',
                    site_name: 'Dafydd Thomas | Personal Website',
                    profile: {
                        firstName: 'Dafydd',
                        lastName: 'Thomas',
                        username: 'dafzthomas',
                    },
                }}
                twitter={{
                    handle: '@dafzthomas',
                    cardType: 'summary_large_image',
                }}
            />
        </PageLayout>
    );
};

export default Home;
