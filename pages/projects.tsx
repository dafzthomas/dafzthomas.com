import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const ProjectsPage: NextPage = () => {
    return (
        <PageLayout>
            <NextSeo
                title="Projects - Dafydd Thomas"
                description="Web developer"
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}`}
                openGraph={{
                    type: 'website',
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
                    title: 'Projects - Dafydd Thomas',
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

            <section>
                <article className="dark:bg-gray-800 drop-shadow-md border-2 bg-white rounded-md p-3">
                    <h2>readrrr</h2>
                    <p>a simple web rss reader</p>

                    <p>
                        I started this project as a means for me to have a web
                        based rss reader. The main point of it is being privacy
                        friendly, meaning no Google Analytics or any form of
                        tracking and not collecting more information than is
                        required to run.
                    </p>

                    <Link href="https://readrrr.co/">
                        <a target="_blank" referrerPolicy="no-referrer">
                            Go to project website
                        </a>
                    </Link>
                </article>
            </section>
        </PageLayout>
    );
};

export default ProjectsPage;
