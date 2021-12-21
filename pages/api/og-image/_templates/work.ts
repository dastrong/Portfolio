import { darkColors } from "utils/theme";
import { ParsedRequest } from "../_lib/types";

export const workCss = `
.thumbnail {
  border-radius: 99999px;
  margin-bottom: 8px;
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

export const getWorkHtml = ({ title, image }: ParsedRequest) => `
  <h1 class='content-heading'>Checkout my work</h1>
  <p class='content-title'>${title}</p>
  
  <div class='bottom-left'>
    <img class='thumbnail' src='https://res.cloudinary.com/dastrong/image/upload/c_scale,r_max,w_150/v1639140498/Portfolio/blog_thumbnail_vqblya.jpg' />
    <p class='sub-text'>danielstrong.tech/work</p>
  </div>  
  
  <img class='bottom-right' src='${image}' />
`;
