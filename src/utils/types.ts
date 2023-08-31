interface BaseCategory {
  id: number;
  title: string;
  slug: string;
  accent: string;
}
export interface Category extends BaseCategory {
  post_count: number;
}

export interface CategoryDetails extends BaseCategory {
  posts?: Post[]
}

export interface CategoryLatestPost extends BaseCategory {
  latest_post: Post | null
}

export interface Tag {
  id: number;
  title: string;
  slug: string;
}

export interface TagDetails extends Tag {
  posts?: Post[]
}

interface BaseAuthor {
  username: string
  email: string
  first_name: string
  last_name: string
  is_superuser: boolean
  bio: string
  profile_pic: string
}

interface Author extends BaseAuthor{
  following_authors: Array<BaseAuthor>
}

export interface Post {
	id: number;
	title: string;
	slug: string;
	author: Author;
  excerpt: string
	category: Category
	created_at: string;
	thumbnail_url: string;
  thumbnail_sm_url: string
  views?: number

};


export interface FullPost extends Post {
  body: string;
  excerpt: string;
  status: string;
  views: number
  content_type: string;
  allow_comments: string;
  featured_image_url: string
  tags: Tag[];
  previous_post?: Post
  next_post?: Post
}

export type size= "sm" | "md"

export type SidebarData  = {
  recentPosts?: Post[];
  popularPosts?: Post[];
  categoryList?: Category[];
  tagList?: Tag[];
}