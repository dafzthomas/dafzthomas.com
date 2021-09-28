import { getAllPostsMeta } from '../../lib/posts';
import React from 'react';
import type { PostMeta } from '../../types/post';
import PageLayout from '../../components/layout/PageLayout';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export function getStaticProps() {
    const posts = getAllPostsMeta('post');
    return { props: { posts } };
}

export default function BlogPage({ posts }: { posts: PostMeta[] }) {
    return (
        <PageLayout>
            <NextSeo
                title="Blog - Dafydd Thomas"
                description="Web developer"
                canonical={`https://dafzthomas.com/blog`}
                openGraph={{
                    type: 'website',
                    url: `https://dafzthomas.com/blog`,
                    title: 'Blog - Dafydd Thomas',
                    description: 'Web developer',
                    site_name: 'Dafydd Thomas - Personal website',
                }}
                twitter={{
                    handle: '@dafzthomas',
                    cardType: 'summary_large_image',
                }}
            />

            <section className="space-y-8">
                {posts.map(post => (
                    <article key={post.slug} className="">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <Link href={`/blog/${post.slug}`}>
                            <a>Read post</a>
                        </Link>
                    </article>
                ))}
            </section>
        </PageLayout>
    );
}
