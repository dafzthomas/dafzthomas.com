const { promises: fs } = require('fs');
const { join } = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const postDirectory = join(process.cwd(), 'posts');

async function getPostSlugs() {
    return await fs.readdir(postDirectory);
}

async function generate() {
    const feed = new RSS({
        title: 'Dafydd Thomas',
        site_url: 'https://dafzthomas.com',
        feed_url: 'https://dafzthomas.com/feed.xml',
    });

    const slugs = await getPostSlugs();

    await Promise.all(
        slugs.map(async slug => {
            const fullPath = join(postDirectory, slug);
            const fileContents = await fs.readFile(fullPath, 'utf8');

            const { data, content } = matter(fileContents);

            feed.item({
                title: data.title,
                url:
                    'https://dafzthomas.com/blog/' + slug.replace(/\.mdx?/, ''),
                date: data.date,
                description: data.excerpt,
            });
        }),
    );

    return await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
