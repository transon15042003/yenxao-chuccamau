export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  postedDate: string; //YYYY-MM-DDThh:mm:ss
  minRead: number;
  viewer: number;
  relation: string[];
  description?: string;
  keywords?: string[];
  thumbnailUrl?: string;
};
