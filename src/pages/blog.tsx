import React from 'react';
import { motion } from 'framer-motion';
import { Link, HeadFC, graphql, PageProps } from 'gatsby';
import { Layout as MainLayout } from '../components/layout';

interface BlogPost {
  frontmatter: {
    title: string;
    date: string;
    author: string;
    tags?: string[];
    excerpt: string;
  };
  fields: {
    slug: string;
  };
  timeToRead: number;
}

interface BlogPageData {
  allMarkdownRemark: {
    nodes: BlogPost[];
  };
}

const BlogPage = ({ data }: PageProps<BlogPageData>) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <MainLayout>
      <div className="relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-secondary">Blog</span>
            </h1>
            <p className="text-neutral-light/70 max-w-2xl mx-auto text-lg">
              Insights, tutorials, and updates from the Index Digital team
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.fields.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Graph Paper Background */}
                <div className="absolute inset-0 graph-paper-small opacity-10" />
                <div className="absolute inset-0 graph-paper-accent opacity-15" />
                
                {/* Card Content */}
                <Link to={post.fields.slug} className="block relative">
                  <div className="relative bg-[#1e1e1e]/40 backdrop-blur-sm rounded-lg overflow-hidden border border-[#323232]/30 hover:border-secondary/20 transition-all duration-500 p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.frontmatter.tags?.map(tag => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-1 rounded bg-secondary/10 text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title and Excerpt */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-neutral-light/70 text-sm mb-4 line-clamp-3">
                      {post.frontmatter.excerpt}
                    </p>

                    {/* Author and Meta */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#323232]/30">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20">
                          <svg className="w-4 h-4 text-secondary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-white">{post.frontmatter.author}</p>
                          <p className="text-xs text-neutral-light/50">{post.frontmatter.date}</p>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-light/50">{post.timeToRead} min read</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;

export const Head: HeadFC = () => (
  <>
    <title>Blog | Index Digital Studio</title>
    <meta name="description" content="Stay updated with the latest insights, tutorials, and news from Index Digital's team of experts." />
  </>
);

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }]
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          author
          tags
          excerpt
        }
        fields {
          slug
        }
        timeToRead
      }
    }
  }
`;
