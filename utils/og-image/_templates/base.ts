import { readFileSync } from "fs";
import { resolve, join } from "path";
import { lightColors, textures } from "utils/theme";

const fontsDir = resolve(process.cwd(), "utils/og-image/_fonts");
console.time("Open Sans loading: ");
const thin = readFileSync(join(fontsDir, "OpenSansThin.woff2")).toString(
  "base64"
);
console.timeEnd("Open Sans loading: ");
console.time("Open Sans loading: ");
const bold = readFileSync(join(fontsDir, "WorkSansBold.woff2")).toString(
  "base64"
);
console.timeEnd("Open Sans loading: ");

export function getHtml(htmlContent: string, additionalCss: string) {
  return `<!DOCTYPE html>
<html>
  <meta charset="utf-8">
  <title>Generated Image from Daniel Strong Tech</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    @font-face {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 300;
      src: url(data:font/woff2;charset=utf-8;base64,${thin}) format('woff2');
    }
    @font-face {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 700;
      src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }
  </style>
  <style>
    body > div {
      font-family: "Open Sans";
      width: 1200px;
      height: 630px;
      background-image: url("${textures.light}");
      background-repeat: repeat;
      background-color: ${lightColors.light};
      padding: 50px;
      box-sizing: border-box;
      line-height: 1.3;
    }
    body > div > div {
      position: relative;
      width: 100%;
      height: 100%;
    }
    * {
      margin: 0;
      padding: 0;
    }
  </style>
  <style>
    ${additionalCss}
  </style>

  <body>
    <div>
      <div>
        ${htmlContent}
      </div>
    </div>
  </body>
</html>`;
}
