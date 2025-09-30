import Link from "next/link";
import { Metadata } from "next";
import type { BlogPost } from "./types";
import { getAllPosts } from "./utils";

export const metadata: Metadata = {
  title: "Blog - DigitalKaiju",
  description:
    "Thoughts on software development, design systems, and building innovative digital solutions.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">{post.author.avatar}</span>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {post.author.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(post.date)} • {post.readTime}
            </p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white hover:text-green-600 transition-colors">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.id}`}
          className="text-green-600 hover:text-green-700 font-medium"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                digitalkaiju
              </span>
            </Link>
            <nav className="flex space-x-8">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/labs"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Labs
              </Link>
              <Link href="/blog" className="text-green-600 font-semibold">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent pb-2">
              digitalkaiju blog
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Thoughts on software development, design systems, and building
              innovative digital solutions.
            </p>
          </div>

          {featuredPost && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Featured Post
              </h2>
              <div className="max-w-4xl mx-auto">
                <PostCard post={featuredPost} />
              </div>
            </section>
          )}

          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              All Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
