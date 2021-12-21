import { darkColors } from "utils/theme";
import { ParsedRequest } from "../_lib/types";

export const defaultCss = `
  .thumbnail {
    border-radius: 99999px;
  }
  .content {
    display: inline-block;  
    vertical-align: top; 
    margin-left: 24px; 
    width: calc(100% - 30px - 250px); 
  }
  .content-heading {
    font-family: "Work Sans";
    font-size: 2rem;
    color: ${darkColors.light};
    opacity: 0.6;
  }
  .content-title {
    font-family: "Open Sans";
    font-size: 4.5rem;
    color: ${darkColors.dark};
    opacity: 0.9;
  }
  .sub-text {
    font-family: "Open Sans";
    font-size: 2rem;
    color: ${darkColors.main};
    opacity: 0.6;
  }
  .bottom-left {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const getDefaultHtml = ({ heading, title, url }: ParsedRequest) => `
  <img class='thumbnail' src='https://res.cloudinary.com/dastrong/image/upload/c_scale,r_max,w_200/v1639140498/Portfolio/blog_thumbnail_vqblya.jpg' />
  
  <div class='content'>
    <h1 class='content-heading'>${heading}</h1>
    <p class='content-title'>${title}</p>
  </div>
  
  <p class='sub-text bottom-left'>danielstrong.tech/${url}</p>
  
  <img class='bottom-right' src='https://res.cloudinary.com/dastrong/image/upload/f_auto,w_350/v1638607193/Portfolio/logo.svg' />
`;
