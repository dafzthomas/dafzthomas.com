import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const AboutPage: NextPage = () => {
    return (
        <PageLayout>
            <NextSeo noindex nofollow />

            <p>Hello, I&apos;m Dafydd.</p>
        </PageLayout>
    );
};

export default AboutPage;
