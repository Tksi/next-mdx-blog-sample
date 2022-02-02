import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts.js';

export const getStaticProps = async () => {
  return {
    props: {
      posts: getSortedPostsData(),
    },
  };
};

const index = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`./posts/${post.id.replace('.mdx', '')}`}>
              <a>{post.title}</a>
            </Link>
            <p>date : {post.date}</p>
            <p>fileName : {post.id}</p>
            <p>tag : {JSON.stringify(post.tag)}</p>
          </div>
        );
      })}
    </>
  );
};

export default index;
