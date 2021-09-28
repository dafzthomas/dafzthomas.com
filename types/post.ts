export type PostMeta = {
    title: string;
    publishedAt: string;
    updatedAt?: string;
    description: string;
    slug?: any;
    category?: 'draft' | 'project' | 'post';
    image?: string;
    source?: string;
};

export type Post = {
    meta: PostMeta;
    code?: any;
};
