export type WorkTypes = {
  site_name: string;
  img_file: string;
  description: string;
  tech_used?: string[];
  show_work?: boolean;
  links: {
    github?: string;
    live: string;
  };
};
