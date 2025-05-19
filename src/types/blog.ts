export type BlogPost = {
  id: number;
  heading: string;
  postedDate: string; //YYYY-MM-DDThh:mm:ss
  minRead: number;
  viewer: number;
  relation: number[];
  content: string[];
};
