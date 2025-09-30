export interface BlogAuthor {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  content: string;
  author: BlogAuthor;
}

export interface BlogFile {
  posts: BlogPost[];
}
