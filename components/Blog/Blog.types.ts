export type BlogTypes = {
  title: string;
  description: string;
  date_publish: string;
  date_update?: string;
  tags: string[];
  show_post: boolean;
  internal_images?: string[];
  external_images?: string[];
};
