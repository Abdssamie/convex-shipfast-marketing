import { defineCollection, defineConfig, s } from 'velite';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s.object({
    slug: s.path().transform(p => p.replace(/^blog\//, '')),
    title: s.string().max(99),
    excerpt: s.string().max(999).optional(),
    date: s.isodate(),
    readTime: s.string(),
    coverImage: s.string().optional(),
    content: s.mdx(),
    toc: s.toc(),
  }).transform(data => ({
    ...data,
    permalink: `/blog/${data.slug}`
  }))
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'github-dark' }],
      [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['subheading-anchor'], ariaLabel: 'Link to section' } }]
    ],
    remarkPlugins: []
  }
});
