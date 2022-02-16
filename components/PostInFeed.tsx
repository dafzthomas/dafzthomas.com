import Link from 'next/link';
import React from 'react';
import { PostMeta } from '../types/post';

interface Props {
    post: PostMeta;
}

const PostInFeed = ({ post }: Props) => {
    return (
        <article key={post.slug} className="">
            <h3 className="mb-1">{post.title}</h3>
            <p className="mt-0 mb-2">{post.description}</p>
            <Link href={`/blog/${post.slug}`}>
                <a>Read post</a>
            </Link>
        </article>
    );
};

export default PostInFeed;
