import Link from 'next/link';
import React from 'react';
import { PostMeta } from '../types/post';

interface Props {
    post: PostMeta;
}

const PostInFeed = ({ post }: Props) => {
    return (
        <article key={post.slug} className="">
            <h2 className="mb-1 text-2xl">{post.title}</h2>
            <p className="mt-0 mb-2">{post.description}</p>
            <Link href={`/blog/${post.slug}`}>
                <a>Read post</a>
            </Link>
        </article>
    );
};

export default PostInFeed;
