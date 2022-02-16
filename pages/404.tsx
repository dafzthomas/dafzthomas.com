import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const FourOFourPage: NextPage = () => {
    return (
        <PageLayout>
            <NextSeo noindex nofollow />

            <h2 className="text-center">404 Not found</h2>
            <p className="text-center">
                The page you were looking for isn&apos;t here... or has been
                removed.
            </p>
        </PageLayout>
    );
};

export default FourOFourPage;
