export type BlogTypes = {
  title: string;
  description: string;
  date_publish: string;
  date_update?: string;
  tags: string[];
  show_post: boolean;
  code_snippets?: unknown;
};
