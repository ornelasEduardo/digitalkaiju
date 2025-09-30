import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogFile } from "./types";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const postsDirectory = path.join(process.cwd(), "blog_posts");

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return {
        id,
        content: matterResult.content,
        ...matterResult.data,
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostById(id: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      content: matterResult.content,
      ...matterResult.data,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getBlogData(): BlogFile {
  const posts = getAllPosts();
  return { posts };
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}
