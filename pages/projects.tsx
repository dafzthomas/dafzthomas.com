import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const ProjectsPage: NextPage = () => {
    return (
        <PageLayout>
            <NextSeo noindex nofollow />

            <section>
                <article className="dark:bg-gray-800 drop-shadow-md border-2 bg-white rounded-md p-3">
                    <h3>readrrr</h3>
                    <p>a simple web rss reader</p>

                    <p>
                        I started this project as a means for me to have a web
                        based rss reader. The main point of it is being privacy
                        friendly, meaning no Google Analytics or any form of
                        tracking and not collecting more information than is
                        required to run.
                    </p>

                    <Link href="https://readrrr.co/">
                        Go to project website
                    </Link>
                </article>
            </section>
        </PageLayout>
    );
};

export default ProjectsPage;
