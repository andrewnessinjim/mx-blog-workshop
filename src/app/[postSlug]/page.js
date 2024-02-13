import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import { loadBlogPost } from '@/helpers/file-helpers';
import { BLOG_TITLE } from '@/constants';
import MDX_COMPONENTS_MAP from '@/helpers/mdx-components';
import { notFound } from 'next/navigation';


export async function generateMetadata({ params }) {
  let blogPost;
  try {
    blogPost = await loadBlogPost(params.postSlug);
  } catch(e){
    return null;
  }
  
  const {frontmatter} = blogPost;
  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract
  };
}

async function BlogPost({params}) {
  let blogPost;
  try {
    blogPost = await loadBlogPost(params.postSlug);
  } catch(e){
    notFound();
  }

  const {frontmatter, content} = blogPost;

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
       <MDXRemote 
       components={MDX_COMPONENTS_MAP}
        source={content}/>
      </div>
    </article>
  );
}

export default BlogPost;
