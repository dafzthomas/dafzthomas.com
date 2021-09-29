import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const StyleGuidePage: NextPage = () => {
    return (
        <PageLayout>
            <Head>
                <title>Style Guide - Dafydd Thomas</title>
                <meta
                    name="description"
                    content="Style guide page for Dafydd Thomas"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NextSeo noindex nofollow />

            <main>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nihil itaque ad soluta, deserunt reprehenderit accusantium,
                    nesciunt consequatur molestias veritatis quod inventore
                    aperiam hic ducimus cum exercitationem vel ipsam amet
                    consequuntur?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, consequatur incidunt voluptatibus laudantium, nobis
                    nisi atque labore modi nihil non perspiciatis tempora
                    cupiditate aspernatur nam pariatur rem vero laboriosam
                    molestiae.
                </p>
            </main>
        </PageLayout>
    );
};

export default StyleGuidePage;
