export type WorkTypes = {
  site_name: string;
  image: string;
  description: string;
  tech_used?: string[];
  show_work?: boolean;
  links: {
    github?: string;
    live: string;
  };
};
