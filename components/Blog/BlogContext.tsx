import { useContext, createContext } from "react";

export type ProbedImageType = {
  height: number;
  width: number;
  url: string;
};

export type BlogContextType = () => {
  internalImages: ProbedImageType[];
  externalImages: ProbedImageType[];
};

const BlogContext = createContext(null);

export const useBlogImages = (): BlogContextType => useContext(BlogContext);

export default BlogContext.Provider;
