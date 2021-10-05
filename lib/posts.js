import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// postsの絶対パス
const postsDirectory = path.join(process.cwd(), 'pages/posts');

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return { id, ...matterResult.data };
  });

  return allPostsData.sort(({ date: a }, { date: b }) =>
    a < b ? 1 : b < a ? -1 : 0
  );
};
