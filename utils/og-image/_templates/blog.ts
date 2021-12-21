import { darkColors } from "utils/theme";
import { ParsedRequest } from "../_lib/types";

export const blogCss = `
  .thumbnail {
    border-radius: 99999px;
  }
  .content {
    margin-left: 205px; 
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
  .sub {
    display: inline-block,
    vertical-align: bottom,
    margin-left: 32px,
  }
  .sub-heading {
    font-family: "Open Sans";
    font-size: 3rem;
    color: ${darkColors.dark};
    opacity: 0.8;
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

export const getBlogHtml = ({ title }: ParsedRequest) => `
  <div class='content'>
    <h1 class='content-heading'>Checkout this article</h1>
    <p class='content-title'>${title}</p>
  </div>
  
  <div class='bottom-left'>
    <img class='thumbnail' src='https://res.cloudinary.com/dastrong/image/upload/c_scale,r_max,w_150/v1639140498/Portfolio/blog_thumbnail_vqblya.jpg' />
    <div class='sub'>
      <p class='sub-heading'>Daniel Strong</p>
      <p class='sub-text'>danielstrong.tech/blog</p>
    </div>
  </div>  
  
  <img class='bottom-right' src='https://res.cloudinary.com/dastrong/image/upload/f_auto,w_75/v1635566564/Portfolio/favicon.png' />
`;
