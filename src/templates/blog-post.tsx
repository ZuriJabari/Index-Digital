import React from "react"
import { graphql, Link, HeadFC } from "gatsby"
import { Layout as MainLayout } from "../components/layout"
import { motion } from "framer-motion"

interface BlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
        author: string
        tags?: string[]
        excerpt: string
      }
      html: string
      timeToRead: number
    }
  }
}

export default function BlogPost({ data }: BlogPostProps) {
  const post = data.markdownRemark

  return (
    <MainLayout>
      <div className="relative min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Graph Paper Background */}
            <div className="absolute inset-0 graph-paper-small opacity-10" />
            <div className="absolute inset-0 graph-paper-accent opacity-15" />

            {/* Content */}
            <div className="relative bg-[#1e1e1e]/40 backdrop-blur-sm rounded-lg overflow-hidden border border-[#323232]/30 p-8">
              {/* Header */}
              <header className="mb-8">
                {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.frontmatter.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded bg-secondary/10 text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="text-4xl font-bold text-white mb-4">
                  {post.frontmatter.title}
                </h1>

                <div className="flex items-center justify-between border-b border-[#323232]/30 pb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20">
                      <svg className="w-5 h-5 text-secondary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              </header>

              {/* Blog Content */}
              <div 
                className="prose prose-invert prose-pre:bg-[#1e1e1e]/60 prose-pre:border prose-pre:border-[#323232]/30 prose-code:text-secondary prose-a:text-secondary hover:prose-a:text-secondary/80 prose-headings:text-white prose-p:text-neutral-light/70 prose-strong:text-white/90 prose-blockquote:border-secondary/50 prose-blockquote:text-neutral-light/60 max-w-none"
                dangerouslySetInnerHTML={{ __html: post.html }} 
              />

              {/* Back to Blog */}
              <div className="mt-12 pt-6 border-t border-[#323232]/30">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </MainLayout>
  )
}

export const Head: HeadFC<BlogPostProps["data"]> = ({ data }) => (
  <>
    <title>{data.markdownRemark.frontmatter.title} | Index Digital Studio</title>
    <meta name="description" content={data.markdownRemark.frontmatter.excerpt} />
  </>
);

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
        tags
        excerpt
      }
    }
  }
`;
