import { getAllPostsMeta } from '../../lib/posts';
import React from 'react';
import type { PostMeta } from '../../types/post';
import PageLayout from '../../components/layout/PageLayout';
import { NextSeo } from 'next-seo';
import PostInFeed from '../../components/PostInFeed';

export function getStaticProps() {
    const posts = getAllPostsMeta('post');
    return { props: { posts } };
}

export default function BlogPage({ posts }: { posts: PostMeta[] }) {
    return (
        <PageLayout>
            <NextSeo
                title="Blog | Dafydd Thomas"
                description="Web developer"
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/blog`}
                openGraph={{
                    type: 'website',
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
                    title: 'Blog | Dafydd Thomas',
                    description: 'Web developer',
                    site_name: 'Dafydd Thomas | Personal website',
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

            <section className="space-y-12">
                {posts.map(post => (
                    <PostInFeed key={post.slug} post={post} />
                ))}
            </section>
        </PageLayout>
    );
}
