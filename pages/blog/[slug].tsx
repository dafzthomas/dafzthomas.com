import { getAllPostsMeta, getPostBySlug } from '../../lib/posts';
import { format, parseISO } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React, { useMemo } from 'react';
import type { Post } from '../../types/post';
import { components } from '../../components/MdxComponents';
import PageLayout from '../../components/layout/PageLayout';

export const getStaticPaths = () => {
    const posts = getAllPostsMeta();
    const paths = posts.map(({ slug }) => ({ params: { slug } }));

    return {
        paths: paths,
        // Return 404 page if path is not returned by getStaticPaths
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Post> = async context => {
    const slug = context.params?.slug as string;

    var post = await getPostBySlug(slug);

    return { props: post };
};

export default function PostPage({ meta, code }: Post) {
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <PageLayout readerMode>
            <NextSeo
                title={`${meta.title} | Dafydd Thomas`}
                description={meta.description}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${meta.slug}`}
                openGraph={{
                    type: 'website',
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${meta.slug}`,
                    title: `${meta.title} | Dafydd Thomas`,
                    description: meta.description,
                    site_name: 'Dafydd Thomas',
                    profile: {
                        firstName: 'Dafydd',
                        lastName: 'Thomas',
                        username: 'dafzthomas',
                    },
                    article: {
                        publishedTime: meta.publishedAt,
                        modifiedTime: meta.updatedAt,
                    },
                }}
                twitter={{
                    handle: '@dafzthomas',
                    cardType: 'summary_large_image',
                }}
            />

            <h2 className="text-4xl">{meta.title}</h2>
            <aside className="space-y-1 mt-3">
                <p className="m-0 dark:text-gray-400">
                    <span className="font-semibold ">
                        {format(parseISO(meta.publishedAt), 'MMMM dd, yyyy')}
                    </span>
                </p>
                {meta.updatedAt && (
                    <p className="m-0">
                        Updated{' '}
                        <span className="font-semibold">
                            {format(parseISO(meta.updatedAt), 'MMMM dd, yyyy')}
                        </span>
                    </p>
                )}
            </aside>

            <Component components={components} />
        </PageLayout>
    );
}
