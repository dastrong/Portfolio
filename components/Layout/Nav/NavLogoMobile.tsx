import React from "react";
import styled, { useTheme } from "styled-components";
import InterLink from "components/Shared/Links";

const StyledAnchor = styled.a`
  height: 100px;
  width: 200px;
  margin: 20px auto 10px;
`;

const MoonSun = styled.path`
  transition: 0.4s transform;
  transform-origin: center;
  transform: rotate(${({ theme }) => (theme.isDarkTheme ? -20 : 20)}deg);
`;

export default function NavLogoMobile() {
  const { isDarkTheme, colors } = useTheme();

  return (
    <InterLink href="/" StyledAnchor={StyledAnchor}>
      <svg viewBox="0 0 452 234" xmlns="http://www.w3.org/2000/svg">
        <MoonSun
          fillRule="evenodd"
          clipRule="evenodd"
          d="M101.234 59.148l3.659 10.866-7.506-.066 3.847-10.8zm-.566 64.998l3.847-10.801-7.505-.065 3.658 10.866zm21.982-36.063l10.8 3.847-10.866 3.658.066-7.505zm-54.198 3.28l10.866-3.658-.065 7.506-10.8-3.847zm50.618-12.176l5.125-10.255-10.371 4.887 5.246 5.368zm-41.362 35.175l10.37-4.888-5.245-5.368-5.125 10.256zm41.071-9.842l4.887 10.371-10.255-5.125 5.368-5.246zM78.236 68.403l10.256 5.125-5.368 5.246-4.888-10.371zm44.195 18.537l8.614-7.566-11.448.616 2.834 6.95zM70.857 103.92l11.449-.616-2.834-6.95-8.615 7.566zm41.751 6.373l.616 11.449-7.566-8.615 6.95-2.834zm-23.93-48.74l7.567 8.615-6.95 2.834-.616-11.448zm24.357 11.723l.88-11.43-7.763 8.436 6.883 2.994zM87.988 121.45l7.762-8.437-6.883-2.994-.88 11.431zm34.329-24.601l8.437 7.762-11.431-.879 2.994-6.883zM71.149 78.683l11.43.88-2.993 6.883-8.437-7.763zm29.626 33.185c11.168.098 20.3-8.877 20.398-20.045.097-11.168-8.878-20.3-20.046-20.398-11.168-.097-20.3 8.878-20.397 20.046-.098 11.168 8.877 20.3 20.045 20.397zM370.184 59.937c-3 .428-6.02 1.285-8.974 2.6-15.934 7.09-23.886 24.828-17.762 39.618 6.125 14.789 24.008 21.03 39.942 13.939a34.584 34.584 0 007.999-4.954c-13.186 1.885-25.979-4.49-30.969-16.538-4.99-12.049-.637-26.054 9.764-34.665z"
          fill="#DB3EB1"
        />
        <path d="M3 203L76.35 36l122.672 167H3z" fill="#41B6E6" />
        <path d="M220.406 203l95.339-165 30.294 165H220.406z" fill="#48BEEE" />
        <path d="M296.06 203l88-177 64 177h-152z" fill="#41B6E6" />
        <path d="M78.06 203L198.442 4l126.616 199h-247z" fill="#39ACDB" />
        <path
          d="M319.759 103.798l-15.754-26.72 8.784-20.611 6.97 47.331zM380.655 47l-13.338 24.574-11.258 22.03 16.106-1.334 8.49-45.27zM76.729 44.413l-3.25 16.795-6.752 35.117L79.48 68.079l10.502 3.817-13.253-27.483zM384.821 40.178l12.231 34.934 10.027 31.188-21.313-4.768-.945-61.354zM156.56 90l41.161-75 34.839 54.5L197.721 46 156.56 90z"
          fill="#DB3EB1"
          fillOpacity=".38"
        />
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M82.46 111.774c0 .11.032.183.05.253.118.458.372.852.673 1.211.43.511.955.922 1.493 1.309.467.336.944.664 1.412.997.08.057.157.123.244.193-.075.041-.137.077-.202.11-.619.313-1.214.665-1.763 1.091-.33.257-.65.53-.876.887-.363.574-.492 1.185-.221 1.838.08.19.2.355.37.477a.545.545 0 00.181.093c.166.039.334.065.502.095h.473a2.946 2.946 0 001.433-.524c.673-.465 1.127-1.088 1.322-1.888a3.334 3.334 0 00-.02-1.743 1.8 1.8 0 00-.054-.158c-.02-.052-.045-.103-.073-.168l1.075-.618.016.014c-.02.064-.04.128-.058.192-.128.467-.213.941-.182 1.425.032.515.176.998.478 1.429.244.348.826.361 1.085.012a2.53 2.53 0 00.248-.393c.175-.362.338-.73.505-1.095l.03-.067c-.013.173-.027.325-.033.477-.01.238.004.474.085.7.07.193.188.338.41.363.15.018.272-.052.383-.14.174-.137.315-.307.42-.499.297-.546.603-1.088.872-1.647.29-.605.546-1.228.816-1.843l.045-.109c.064.251.108.497.19.73.096.27.213.534.342.79.06.121.054.2-.03.302-.353.425-.7.855-1.046 1.284a2.974 2.974 0 00-.217.295.58.58 0 00-.075.214.27.27 0 00.216.307c.137.03.283.041.423.031a2.48 2.48 0 001.312-.494c.503-.372.665-.881.543-1.484-.033-.164-.092-.323-.148-.48-.026-.072-.027-.121.019-.188.402-.574.746-1.184 1.066-1.807a.38.38 0 01.048-.076c.103.539.26 1.059.538 1.53-.142.138-.283.262-.41.399-.282.303-.526.631-.653 1.031-.055.172-.096.348-.072.532.038.286.272.472.553.407.603-.14 1.123-.423 1.502-.926.256-.338.28-.716.172-1.111-.03-.108-.064-.214-.102-.337.15-.046.294-.101.444-.136.778-.177 1.547-.146 2.297.135.438.164.791.438 1.001.87.256.528.114 1.029-.383 1.363-.047.031-.1.056-.138.094a.134.134 0 00-.032.105c.003.019.054.043.083.043.164-.001.296-.087.424-.175.319-.221.552-.518.602-.909l.01-.029-.012-.255c-.005-.015.003-.029.002-.04-.068-.57-.372-1.012-.815-1.358-.512-.401-1.117-.566-1.757-.592a3.985 3.985 0 00-1.526.235c-.14.051-.279.111-.42.168-.019-.034-.04-.067-.056-.101-.145-.296-.32-.58-.359-.919-.027-.241-.06-.482-.004-.721.056-.23.127-.455.195-.682.035-.116.01-.181-.1-.234a.453.453 0 00-.124-.04 1.887 1.887 0 00-.808.06c-.093.027-.162.08-.182.183-.012.06-.036.117-.053.176-.07.244-.118.493-.23.725-.28.584-.6 1.146-.928 1.703l-.118.192c-.115-.24-.237-.456-.275-.709-.042-.287-.075-.572-.003-.856.053-.212.122-.42.186-.629.03-.1.016-.152-.074-.204a.429.429 0 00-.148-.058 1.812 1.812 0 00-.837.069c-.085.027-.13.082-.155.169-.077.259-.142.523-.249.768-.433.994-.879 1.983-1.324 2.971-.093.207-.202.406-.307.607-.027.051-.065.096-.098.143-.027-.031-.037-.053-.037-.074 0-.127-.015-.258.01-.381.073-.371.157-.741.246-1.109.074-.304.16-.605.24-.907.028-.101.028-.196-.044-.281a.42.42 0 00-.529-.064l-.067.038.013-.108a1.68 1.68 0 00-.025-.689c-.079-.284-.281-.447-.576-.438a1.232 1.232 0 00-.408.078c-.534.209-.945.58-1.295 1.026a.413.413 0 01-.118.102c-.452.251-.905.498-1.359.747l-.504.276c-.136-.129-.259-.263-.398-.376-.426-.348-.86-.687-1.288-1.03-.38-.305-.749-.622-1.03-1.025-.21-.3-.346-.629-.359-1a2.345 2.345 0 01.359-1.306c.308-.515.727-.927 1.189-1.301a11.012 11.012 0 011.564-1.038c.766-.428 1.553-.808 2.398-1.058.866-.257 1.744-.404 2.65-.301.357.04.703.121 1.02.296.244.133.443.307.536.58.091.269.089.541.025.813-.129.553-.431 1.008-.812 1.414-.624.667-1.385 1.121-2.242 1.421a6.171 6.171 0 01-1.526.325 2.874 2.874 0 01-1.247-.15 1.622 1.622 0 01-.688-.467c-.033-.039-.076-.081-.138-.044-.061.035-.072.094-.052.152.035.098.066.2.12.288.133.219.329.378.544.515.413.263.874.351 1.353.371.726.032 1.435-.077 2.133-.271.998-.279 1.865-.77 2.56-1.545.58-.645.993-1.373 1.082-2.253.043-.429-.003-.85-.204-1.241a2.243 2.243 0 00-.98-.957c-.603-.317-1.254-.501-1.926-.501h-.673c-.815 0-1.602.234-2.367.512-.579.211-1.147.459-1.698.735-1.2.6-2.318 1.323-3.236 2.317-.458.496-.845 1.043-1.068 1.686a6.376 6.376 0 00-.174.586l-.013.282zm4.363 5.345c-.052.696-.368 1.261-.884 1.719-.29.257-.623.44-1.01.504a.738.738 0 01-.422-.029c-.194-.083-.238-.256-.242-.44-.005-.293.097-.558.238-.81.184-.329.453-.579.74-.813.454-.369.946-.682 1.449-.976l.038-.016c.078.288.115.572.093.861zm3.931-3.028a5.237 5.237 0 01-.148.66c-.224.747-.513 1.47-.825 2.184-.058.132-.141.252-.214.377-.012.02-.028.036-.045.053-.09.089-.176.084-.221-.033a2.431 2.431 0 01-.114-.424c-.019-.096-.014-.198-.02-.296.006-.703.22-1.341.583-1.935.15-.245.313-.478.563-.633a.992.992 0 01.249-.111c.133-.037.214.025.192.158zm2.682 3.417l.964-1.126c.04.418-.67 1.252-.964 1.126zm3.079-.758c-.069.039-.143.067-.213.103-.064.034-.085 0-.087-.055a.378.378 0 01.015-.113c.13-.459.37-.85.726-1.169l.025-.013c.17.474-.026.995-.466 1.247z"
            fill="#CB6699"
          />
        </g>
        <path
          d="M43 155.832l-1.572-17.621h17.263l-1.573 17.618-7.069 1.96-7.05-1.957z"
          fill="#1572B6"
        />
        <path
          d="M50.06 156.291l5.712-1.584 1.344-15.055H50.06v16.639z"
          fill="#33A9DC"
        />
        <path
          d="M50.06 146.036h2.86l.197-2.213H50.06v-2.161h5.419l-.052.58-.532 5.955H50.06v-2.161z"
          fill="#fff"
        />
        <path
          d="M50.072 151.648l-.01.003-2.406-.65-.154-1.723h-2.169l.303 3.393 4.427 1.229.01-.003v-2.249z"
          fill="#EBEBEB"
        />
        <path
          d="M52.736 148.105l-.26 2.895-2.411.65v2.249l4.43-1.228.033-.365.376-4.201h-2.168z"
          fill="#fff"
        />
        <path
          d="M50.067 141.662v2.161h-5.22l-.043-.486-.099-1.095-.052-.58h5.414zm-.008 4.374v2.161h-2.376l-.043-.485-.099-1.096-.051-.58h2.57z"
          fill="#EBEBEB"
        />
        <path
          d="M128.372 162.793l-1.563-17.533h17.177l-1.565 17.53-7.034 1.95-7.015-1.947z"
          fill="#E44D26"
        />
        <path
          d="M135.397 163.25l5.684-1.576 1.338-14.981h-7.022v16.557z"
          fill="#F16529"
        />
        <path
          d="M135.397 153.196h-2.845l-.197-2.202h3.042v-2.15h-5.392l.051.576.529 5.927h4.812v-2.151zm0 5.585l-.009.003-2.395-.647-.153-1.715h-2.159l.301 3.376 4.405 1.223.01-.003v-2.237z"
          fill="#EBEBEB"
        />
        <path
          d="M135.39 153.196v2.151h2.648l-.25 2.788-2.398.648v2.237l4.408-1.222.033-.363.505-5.661.052-.578H135.39zm0-4.352v2.15h5.194l.043-.483.098-1.091.052-.576h-5.387z"
          fill="#fff"
        />
        <g clipPath="url(#clip1)">
          <path d="M185.262 142.22h19.56v19.56h-19.56v-19.56z" fill="#F0DB4F" />
          <path
            d="M203.221 157.115c-.143-.892-.725-1.642-2.449-2.341-.598-.275-1.266-.472-1.465-.926-.07-.264-.08-.413-.035-.572.128-.519.747-.681 1.238-.532.316.106.615.349.796.738.844-.547.842-.543 1.432-.919-.216-.334-.331-.488-.473-.632-.507-.567-1.199-.859-2.305-.836l-.576.074c-.553.14-1.079.43-1.387.818-.926 1.051-.662 2.89.464 3.646 1.11.833 2.741 1.023 2.949 1.802.203.954-.701 1.262-1.599 1.153-.662-.138-1.03-.474-1.428-1.086-.732.424-.732.424-1.485.857.178.391.366.567.665.906 1.417 1.437 4.963 1.366 5.599-.809.026-.075.197-.573.059-1.341zm-7.326-5.905h-1.829l-.008 4.73c0 1.006.052 1.928-.111 2.211-.268.556-.962.487-1.278.379-.321-.158-.485-.383-.674-.701-.052-.091-.092-.162-.105-.167l-1.487.911c.247.507.612.948 1.078 1.234.697.419 1.634.547 2.614.322.638-.186 1.189-.571 1.477-1.157.416-.767.327-1.697.323-2.725.01-1.677 0-3.355 0-5.037z"
            fill="#323330"
          />
        </g>
        <g clipPath="url(#clip2)" fill="#61DAFB">
          <path d="M237.252 132.781a1.78 1.78 0 10.001-3.561 1.78 1.78 0 00-.001 3.561z" />
          <path d="M244.018 128.062a17.23 17.23 0 00-1.078-.359c.093-.375.172-.75.234-1.109.328-2.063-.031-3.516-1.031-4.078a1.94 1.94 0 00-1-.25c-1.094 0-2.485.812-3.891 2.171-1.406-1.359-2.797-2.171-3.89-2.171-.375 0-.704.078-1 .25-1 .578-1.36 2.031-1.032 4.078.063.359.141.734.235 1.109-.375.109-.735.219-1.078.359-1.954.75-3.016 1.782-3.016 2.938 0 1.156 1.078 2.187 3.016 2.937.343.125.703.25 1.078.36-.094.375-.172.75-.235 1.109-.328 2.063.032 3.516 1.032 4.078.296.172.625.25 1 .25 1.109 0 2.5-.812 3.89-2.172 1.406 1.36 2.797 2.172 3.891 2.172a1.94 1.94 0 001-.25c1-.578 1.359-2.031 1.031-4.078a15.844 15.844 0 00-.234-1.109c.375-.11.734-.219 1.078-.36 1.953-.75 3.015-1.781 3.015-2.937s-1.062-2.188-3.015-2.938zm-2.313-4.765c.641.375.86 1.531.594 3.172a9.367 9.367 0 01-.219 1.031 18.462 18.462 0 00-2.578-.391 22.422 22.422 0 00-1.625-2.031c1.156-1.141 2.328-1.922 3.281-1.922.204 0 .391.047.547.141zm-1.75 9.265c-.281.5-.609 1-.953 1.5-.578.047-1.156.063-1.75.063-.609 0-1.187-.016-1.75-.063-.344-.5-.656-1-.937-1.5a24.814 24.814 0 01-.828-1.562c.25-.516.531-1.047.828-1.563.281-.5.609-1 .953-1.5a21.971 21.971 0 011.75-.062c.609 0 1.187.016 1.75.062.344.5.656 1 .937 1.5.297.516.578 1.047.828 1.563a49.028 49.028 0 01-.828 1.562zm1.297-.515c.235.547.422 1.078.594 1.609-.531.125-1.094.219-1.688.297.188-.297.391-.609.563-.937.187-.329.359-.657.531-.969zm-4 4.234a17.605 17.605 0 01-1.078-1.297c.359.016.719.032 1.078.032.36 0 .719-.016 1.078-.032-.343.453-.703.891-1.078 1.297zm-2.906-2.344a17.176 17.176 0 01-1.688-.296c.172-.516.36-1.063.594-1.61.172.313.344.641.531.953.188.344.375.641.563.953zm-1.094-3.984a18.64 18.64 0 01-.594-1.609 17.17 17.17 0 011.688-.297c-.188.297-.391.609-.563.937-.187.328-.359.657-.531.969zm4-4.234c.375.406.735.843 1.078 1.297-.359-.016-.718-.032-1.078-.032-.359 0-.719.016-1.078.032.344-.454.703-.891 1.078-1.297zm3.469 3.281l-.563-.938c.594.079 1.157.172 1.688.297a20.291 20.291 0 01-.594 1.61c-.172-.328-.344-.657-.531-.969zm-8.516-2.531c-.265-1.641-.047-2.797.594-3.172.156-.094.344-.141.547-.141.937 0 2.109.766 3.281 1.922a20.51 20.51 0 00-1.625 2.031c-.906.078-1.765.219-2.578.391-.094-.359-.156-.703-.219-1.031zM228.346 131c0-.734.891-1.516 2.453-2.094a9.444 9.444 0 011-.328c.25.781.563 1.609.938 2.438-.375.828-.704 1.64-.938 2.421-2.156-.625-3.453-1.562-3.453-2.437zm4.453 7.703c-.641-.375-.859-1.531-.594-3.172.047-.328.125-.672.219-1.031.813.187 1.672.312 2.578.391.531.75 1.078 1.421 1.625 2.031-1.156 1.14-2.328 1.922-3.281 1.922-.203 0-.391-.047-.547-.141zm9.5-3.172c.266 1.641.047 2.797-.594 3.172a1.051 1.051 0 01-.547.141c-.937 0-2.109-.766-3.281-1.922a20.51 20.51 0 001.625-2.031 21.38 21.38 0 002.578-.391c.094.359.157.703.219 1.031zm1.406-2.437a9.369 9.369 0 01-1 .328c-.25-.781-.562-1.61-.937-2.438.375-.828.703-1.64.937-2.422 2.157.625 3.453 1.563 3.453 2.438 0 .734-.906 1.516-2.453 2.094z" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M379.567 113.689c.251.726.432 1.466.491 2.234.074.952.04 1.898-.161 2.835-.005.026-.017.05-.025.075-.063 0-.128-.008-.189.002-.52.081-1.04.166-1.56.25-.537.087-1.075.171-1.611.264-.19.033-.425-.006-.502.256-.002.008-.024.009-.037.013l.026-1.571-.026-3.789.25-.043c.41-.067.819-.135 1.229-.2.489-.078.978-.153 1.467-.229.216-.034.432-.064.648-.097z"
          fill="#439934"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375.457 124.196c-.264-.227-.538-.444-.791-.683-1.362-1.285-2.358-2.797-2.849-4.62a7.478 7.478 0 01-.254-1.53c-.02-.362-.05-.728-.024-1.089.068-.96.207-1.911.489-2.836l.015-.021c.027.036.067.068.081.109.275.81.547 1.62.819 2.43.853 2.547 1.704 5.094 2.559 7.641.016.049.06.09.091.135l-.136.464z"
          fill="#45A538"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M379.567 113.689c-.216.033-.432.063-.648.097-.489.075-.979.151-1.467.229-.41.065-.82.133-1.229.2l-.25.043-.002-.164c-.008-.134-.023-.268-.024-.402-.011-.856-.018-1.712-.028-2.568-.007-.536-.017-1.071-.028-1.607a36.819 36.819 0 00-.029-.998c-.008-.179-.036-.356-.048-.535-.007-.103.002-.206.004-.309.128.247.253.496.384.742.207.388.538.674.835.986a10.99 10.99 0 012.53 4.286z"
          fill="#46A037"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375.973 119.618c.013-.004.035-.006.037-.013.077-.263.312-.223.502-.256.536-.093 1.074-.177 1.611-.264.52-.084 1.04-.169 1.56-.25.062-.01.126-.002.189-.002-.097.347-.174.701-.297 1.038-.14.383-.31.756-.489 1.122a7.689 7.689 0 01-.993 1.526c-.3.361-.634.694-.969 1.023-.185.182-.404.33-.607.494l-.052-.036-.19-.162-.196-.43a6.45 6.45 0 01-.218-1.538l.003-.087.027-.379c.009-.13.021-.259.026-.389.021-.465.038-.931.056-1.397z"
          fill="#409433"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375.974 119.618c-.019.466-.036.932-.056 1.398-.006.129-.018.259-.027.388l-.119.045c-.266-.781-.531-1.555-.791-2.33-.43-1.283-.854-2.567-1.283-3.85a808.036 808.036 0 00-1.047-3.105c-.017-.048-.064-.086-.097-.129l.765-1.406c.027.045.061.088.078.137.354 1.047.707 2.095 1.057 3.144.456 1.364.909 2.729 1.364 4.093.018.055.048.105.077.166l.105-.122-.026 1.571z"
          fill="#4FAA41"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M372.555 112.035c.033.043.08.081.096.13.351 1.034.701 2.068 1.047 3.104.429 1.283.854 2.567 1.283 3.85.26.775.526 1.549.791 2.33l.12-.045-.027.379-.024.087c-.042.415-.077.831-.127 1.245-.026.208-.08.412-.121.617-.031-.045-.074-.085-.091-.135l-2.559-7.641c-.271-.81-.544-1.62-.819-2.43-.014-.041-.053-.073-.081-.109l.512-1.382z"
          fill="#4AA73C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375.999 118.047l-.104.122c-.029-.061-.059-.112-.077-.166-.455-1.364-.908-2.729-1.364-4.093-.35-1.049-.703-2.096-1.057-3.144-.017-.049-.051-.092-.078-.137l.946-1.245c.03.04.073.076.088.121.263.768.523 1.538.782 2.309.242.719.48 1.439.724 2.158.017.048.074.082.112.123l.002.163.026 3.789z"
          fill="#57AE47"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375.971 114.094c-.038-.04-.095-.074-.112-.122-.244-.719-.482-1.439-.724-2.159-.259-.77-.519-1.54-.782-2.309-.015-.045-.058-.08-.088-.12.308-.301.606-.613.926-.901.285-.255.513-.529.524-.932 0-.017.009-.033.023-.08l.081.204c-.002.103-.012.206-.005.309.012.179.041.356.049.535.015.332.022.665.029.998.01.536.02 1.071.027 1.607.01.856.017 1.712.028 2.568.001.134.015.268.024.402z"
          fill="#60B24F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375.592 123.732c.042-.205.096-.409.121-.617.051-.414.086-.83.127-1.245l.011-.001.01.001c.012.521.083 1.034.218 1.538-.028.036-.067.068-.081.109-.114.32-.221.643-.335.964-.016.043-.059.077-.09.116l-.116-.401.135-.464z"
          fill="#A9AA88"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375.573 124.597c.031-.038.075-.072.09-.116.114-.321.222-.643.335-.964.015-.041.053-.073.081-.109l.196.43c-.039.055-.092.105-.114.166l-.375 1.103c-.016.044-.069.075-.104.113l-.109-.623z"
          fill="#B6B598"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375.682 125.22c.036-.038.088-.069.104-.113l.375-1.103c.022-.061.075-.111.114-.166l.19.162c-.092.091-.143.195-.112.328l-.058.188c-.026.033-.064.061-.077.098-.131.375-.256.753-.388 1.128-.017.048-.063.085-.096.127l-.052-.649z"
          fill="#C2C1A7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375.734 125.869c.032-.042.079-.079.096-.127.132-.375.257-.752.388-1.128.013-.037.051-.065.077-.098l-.079.867c-.022.024-.052.046-.063.074-.089.253-.174.507-.264.759-.019.052-.055.098-.082.146-.025-.032-.069-.063-.071-.097-.008-.131-.003-.264-.002-.396z"
          fill="#CECDB7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375.807 126.362c.027-.048.063-.094.082-.146.09-.252.175-.506.264-.759.011-.028.041-.05.063-.074l.001.569-.19.488-.22-.078z"
          fill="#DBDAC7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M376.027 126.44l.191-.488.039.577-.23-.089z"
          fill="#EBE9DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M376.353 124.328c-.031-.133.02-.237.111-.328l.053.036-.164.292z"
          fill="#CECDB7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M375.862 121.871l-.011-.002-.011.001.025-.087-.003.088z"
          fill="#4FAA41"
        />
        <path
          d="M310.023 125.74l-6.89-4.001a1.485 1.485 0 00-1.439 0l-6.963 4.001c-.449.258-.766.742-.766 1.261v7.991c0 .519.325 1.004.774 1.263l1.84 1.045c.879.433 1.19.433 1.59.433 1.302 0 2.046-.787 2.046-2.161v-7.889c0-.111-.058-.277-.167-.277h-.879c-.111 0-.36.166-.36.277v7.889c0 .609-.551 1.215-1.58.7l-1.901-1.095a.217.217 0 01-.113-.185v-7.991c0-.075.087-.151.153-.189l6.942-3.994a.24.24 0 01.224 0l6.857 3.993c.066.039.042.112.042.19v7.991c0 .076.029.15-.036.187l-6.888 3.996a.193.193 0 01-.197 0l-1.767-1.054c-.053-.031-.117-.042-.168-.014-.491.279-.582.316-1.043.476-.113.039-.281.108.064.301l2.312 1.368a1.455 1.455 0 001.456 0l6.857-3.997c.448-.261.661-.744.661-1.263v-7.991c0-.519-.213-1.002-.661-1.261zm-5.447 7.986c-1.832 0-2.236-.506-2.371-1.417-.015-.098-.098-.215-.198-.215h-.896c-.111 0-.2.134-.2.244 0 1.167.635 2.58 3.665 2.58 2.194 0 3.451-.852 3.451-2.36 0-1.496-1.01-1.888-3.138-2.17-2.15-.284-2.368-.428-2.368-.932 0-.415.185-.969 1.777-.969 1.422 0 1.947.305 2.163 1.264.018.091.1.155.193.155h.899a.202.202 0 00.147-.062.2.2 0 00.053-.153c-.14-1.651-1.237-2.42-3.455-2.42-1.974 0-3.151.833-3.151 2.23 0 1.515 1.171 1.934 3.066 2.121 2.266.223 2.442.554 2.442 1 0 .774-.621 1.104-2.079 1.104z"
          fill="#83CD29"
        />
        <g clipPath="url(#clip3)">
          <path
            d="M175.042 110.767c-1.406 2.875-3.869 4.81-7.127 5.446a6.224 6.224 0 01-1.526.178c-1.875 0-3.594-.782-4.428-2.061-1.121-1.705-1.502-5.319 2.192-7.992.075.407.228.967.33 1.298a5.966 5.966 0 00-1.736 2.036c-.688 1.35-.611 2.698.203 3.945.562.841 1.453 1.352 2.598 1.508a6.877 6.877 0 004.149-.781c1.986-1.044 3.309-2.291 4.175-3.996a1.454 1.454 0 01-.408-.937 1.425 1.425 0 011.372-1.473h.053a1.43 1.43 0 01.156 2.851l-.003-.022zm4.48-3.156c1.907 2.162 1.959 4.708 1.222 6.184-.688 1.349-2.5 2.699-4.938 2.699a7.893 7.893 0 01-3.281-.789c.358-.255.865-.663 1.145-.917.79.342 1.64.523 2.5.534 1.578 0 2.774-.738 3.486-2.086.458-.891.484-1.934.052-3.003a6.82 6.82 0 00-2.699-3.258 9.693 9.693 0 00-5.428-1.655h-.458a1.439 1.439 0 01-1.25.866h-.048a1.429 1.429 0 01-1.022-2.404 1.43 1.43 0 01.975-.448h.051a1.414 1.414 0 011.25.764h.408c3.25 0 6.103 1.247 8.035 3.513zm-12.93 3.594c-.027-.26.036-.521.178-.739-1.425-2.469-2.187-5.599-1.017-8.857.839-2.448 2.951-4.103 5.242-4.103 2.444 0 4.989 2.14 5.294 6.261-.381-.126-.938-.312-1.272-.381-.083-1.348-1.222-4.708-3.92-4.658-.968.027-2.393.485-3.125 1.425a6.828 6.828 0 00-1.507 3.945 9.315 9.315 0 001.324 5.65.447.447 0 01.178-.025h.05a1.426 1.426 0 01.052 2.85h-.052a1.427 1.427 0 01-1.425-1.373v.005z"
            fill="#764ABC"
          />
        </g>
        <g clipPath="url(#clip4)">
          <path
            d="M203.707 88.986v9.766h19.531V79.22h-19.531v9.766zm15.739-.781a2.43 2.43 0 011.222.703c.181.188.338.398.469.625 0 .025-.844.595-1.358.914-.019.012-.094-.069-.177-.192a1.102 1.102 0 00-.917-.552c-.592-.04-.973.27-.97.781a.716.716 0 00.084.366c.13.27.372.431 1.131.76 1.399.6 1.997.998 2.369 1.562.416.625.508 1.634.227 2.381-.313.813-1.078 1.364-2.161 1.547a5.995 5.995 0 01-1.488-.016 3.593 3.593 0 01-1.982-1.023c-.18-.199-.53-.716-.508-.753a1.5 1.5 0 01.179-.114l.719-.413.561-.325.117.174c.198.283.45.524.741.71.625.327 1.478.282 1.9-.098a.849.849 0 00.108-1.081c-.157-.217-.469-.4-1.342-.781-1.008-.435-1.443-.703-1.84-1.132a2.58 2.58 0 01-.535-.976 3.885 3.885 0 01-.035-1.25c.208-.974.938-1.653 2.003-1.855a4.946 4.946 0 011.483.04v-.002zm-4.584.818v.8h-2.536v7.224h-1.799v-7.225h-2.542v-.781a7.746 7.746 0 01.022-.807c.009-.012 1.563-.018 3.438-.015h3.407l.01.804z"
            fill="#007ACC"
          />
        </g>
        <g clipPath="url(#clip5)">
          <path
            d="M360.526 161.122l-8.612-8.612a1.27 1.27 0 00-1.796 0l-1.788 1.788 2.268 2.269a1.508 1.508 0 011.911 1.923l2.186 2.186a1.51 1.51 0 011.561 2.496 1.51 1.51 0 01-2.467-1.644l-2.038-2.038-.001 5.365a1.51 1.51 0 11-1.737 2.424c-.59-.591-.639-1.548-.049-2.138.146-.146.29-.256.446-.33v-5.415a1.596 1.596 0 01-.446-.33c-.447-.447-.53-1.103-.301-1.653l-2.224-2.236-5.899 5.905c-.496.496-.493 1.3.003 1.797l8.614 8.611c.495.496 1.3.496 1.797 0l8.572-8.571a1.271 1.271 0 000-1.797z"
            fill="#F34F29"
          />
        </g>
        <path
          d="M405.622 138.312h-11.906c-1.031 0-1.86.829-1.86 1.86v15.672c0 1.031.829 1.859 1.86 1.859h11.922a1.854 1.854 0 001.859-1.859v-15.672a1.878 1.878 0 00-1.875-1.86zm-10.172 16.672v-4.406l2.203 2.203-2.203 2.203zm8.281.047h-2.046l.015-.031v-7.719s.485-1.844-6.203.75c-.016.031-.031-7.14-.031-7.14l2.172-.016v4.594s6.093-2.407 6.093 1.828v7.734zm-.812-11.406h-2.313c.829-.937 1.594-2.656 1.594-2.656h2.391s-.406 1.093-1.672 2.656z"
          fill="#6762A6"
        />
        <g filter="url(#filter0_d)">
          <path
            d="M43.981 175.74c6.303 0 11.122 1.749 14.457 5.246 3.375 3.457 5.063 8.418 5.063 14.884 0 6.466-1.688 11.448-5.063 14.945-3.335 3.457-8.154 5.185-14.457 5.185h-17.08v-40.26h17.08zm-1.037 32.33c3.375 0 5.856-1.017 7.442-3.05 1.586-2.033 2.38-5.083 2.38-9.15s-.794-7.117-2.38-9.15c-1.586-2.033-4.067-3.05-7.442-3.05h-5.55v24.4h5.55zm56.115 2.013c.773 0 1.403-.081 1.891-.244l-.793 5.795c-1.18.651-2.562.976-4.148.976-4.392 0-7.015-1.566-7.87-4.697-1.83 3.131-5.448 4.697-10.857 4.697-3.05 0-5.388-.651-7.015-1.952-1.627-1.301-2.44-3.192-2.44-5.673 0-2.603.915-4.697 2.745-6.283 1.87-1.627 4.92-2.867 9.15-3.721l6.893-1.342v-1.098c0-1.383-.386-2.481-1.16-3.294-.772-.813-1.83-1.22-3.171-1.22-1.546 0-2.806.366-3.782 1.098-.976.732-1.606 1.932-1.891 3.599l-8.418-2.44c.529-2.969 1.993-5.266 4.392-6.893 2.4-1.667 5.632-2.501 9.699-2.501 4.758 0 8.377.976 10.858 2.928 2.48 1.952 3.72 4.88 3.72 8.784v11.102c0 1.586.733 2.379 2.197 2.379zm-17.995-.183c1.423 0 2.704-.386 3.843-1.159 1.139-.813 1.708-1.871 1.708-3.172v-2.623l-4.941 1.159c-1.302.325-2.237.732-2.806 1.22-.529.447-.793 1.098-.793 1.952 0 .854.264 1.505.793 1.952.529.447 1.26.671 2.196.671zm43.984-25.01c3.213 0 5.775.935 7.686 2.806 1.912 1.871 2.867 4.534 2.867 7.991V216h-10.37v-17.446c0-2.074-.386-3.538-1.159-4.392-.732-.895-1.789-1.342-3.172-1.342-1.626 0-2.948.59-3.965 1.769-1.016 1.139-1.525 2.908-1.525 5.307V216h-10.37v-30.5h9.272l.305 5.856c.976-2.155 2.359-3.762 4.148-4.819 1.79-1.098 3.884-1.647 6.283-1.647zm23.004-2.928c-2.114 0-3.66-.386-4.636-1.159-.935-.813-1.403-2.074-1.403-3.782 0-1.749.468-3.009 1.403-3.782.976-.813 2.522-1.22 4.636-1.22 2.115 0 3.64.407 4.575 1.22.976.773 1.464 2.033 1.464 3.782 0 1.708-.488 2.969-1.464 3.782-.935.773-2.46 1.159-4.575 1.159zM153.237 216h-10.37v-30.5h10.37V216zm37.089-15.677c0 1.383-.101 2.521-.305 3.416H169.22c.326 1.911 1.017 3.314 2.074 4.209 1.098.895 2.542 1.342 4.331 1.342 1.505 0 2.725-.285 3.66-.854.976-.569 1.627-1.403 1.952-2.501l8.418 2.684c-.854 2.603-2.521 4.595-5.002 5.978-2.44 1.342-5.449 2.013-9.028 2.013-5.327 0-9.414-1.383-12.261-4.148-2.806-2.765-4.209-6.669-4.209-11.712s1.383-8.947 4.148-11.712c2.766-2.765 6.69-4.148 11.773-4.148 4.921 0 8.683 1.362 11.285 4.087 2.644 2.684 3.965 6.466 3.965 11.346zm-15.311-8.174c-3.294 0-5.246 1.993-5.856 5.978h11.468c-.488-3.985-2.358-5.978-5.612-5.978zm31.356 13.298c0 1.383.204 2.359.61 2.928.407.569 1.139.854 2.196.854.976 0 2.013-.183 3.111-.549l-.671 6.405c-.732.447-1.687.813-2.867 1.098a14.763 14.763 0 01-3.477.427c-3.253 0-5.612-.752-7.076-2.257-1.464-1.545-2.196-4.006-2.196-7.381v-34.404h10.37v32.879zm42.798-30.317c3.823 0 7.076.569 9.76 1.708 2.725 1.139 5.246 2.989 7.564 5.551l-5.917 6.832c-1.342-2.033-2.928-3.518-4.758-4.453-1.789-.976-3.944-1.464-6.466-1.464-2.114 0-3.741.366-4.88 1.098-1.138.732-1.708 1.708-1.708 2.928 0 1.017.59 1.85 1.769 2.501 1.22.61 3.274 1.179 6.161 1.708 5.572 1.017 9.537 2.501 11.895 4.453 2.4 1.952 3.599 4.697 3.599 8.235 0 2.562-.732 4.778-2.196 6.649-1.464 1.871-3.497 3.294-6.1 4.27-2.562.976-5.469 1.464-8.723 1.464-4.554 0-8.255-.549-11.102-1.647-2.846-1.139-5.307-2.867-7.381-5.185l5.368-7.32c1.586 2.196 3.376 3.741 5.368 4.636 1.993.895 4.392 1.342 7.198 1.342 2.237 0 3.904-.305 5.002-.915 1.139-.651 1.708-1.566 1.708-2.745 0-.935-.61-1.688-1.83-2.257-1.179-.61-3.172-1.179-5.978-1.708-3.456-.691-6.323-1.505-8.601-2.44-2.236-.976-3.985-2.277-5.246-3.904-1.22-1.627-1.83-3.701-1.83-6.222 0-2.521.671-4.778 2.013-6.771 1.383-1.993 3.376-3.538 5.978-4.636 2.644-1.139 5.755-1.708 9.333-1.708zm44.93 39.162c-1.016.691-2.318 1.261-3.904 1.708-1.545.407-3.111.61-4.697.61-3.619 0-6.384-.773-8.296-2.318-1.911-1.545-2.887-4.026-2.928-7.442v-13.969h-5.246V185.5h5.246v-6.832l10.37-2.867v9.699h9.15v7.381h-9.15v12.261c0 2.725 1.342 4.087 4.026 4.087 1.668 0 3.132-.447 4.392-1.342l1.037 6.405zm23.215-29.402c1.383 0 2.481.224 3.294.671l-1.098 8.784c-.407-.244-.956-.447-1.647-.61a7.753 7.753 0 00-2.196-.305c-1.952 0-3.579.63-4.88 1.891-1.301 1.22-1.952 2.989-1.952 5.307V216h-10.37v-30.5h9.15l.427 6.588c.732-2.318 1.871-4.087 3.416-5.307 1.586-1.261 3.538-1.891 5.856-1.891zm21.645 0c5.083 0 9.028 1.403 11.834 4.209 2.846 2.765 4.27 6.649 4.27 11.651s-1.424 8.906-4.27 11.712c-2.806 2.765-6.751 4.148-11.834 4.148-5.084 0-9.049-1.383-11.895-4.148-2.806-2.806-4.209-6.71-4.209-11.712s1.403-8.886 4.209-11.651c2.846-2.806 6.811-4.209 11.895-4.209zm0 7.381c-1.952 0-3.396.671-4.331 2.013-.936 1.342-1.403 3.497-1.403 6.466 0 2.969.467 5.124 1.403 6.466.935 1.342 2.379 2.013 4.331 2.013 1.952 0 3.395-.671 4.331-2.013.935-1.342 1.403-3.497 1.403-6.466 0-2.969-.468-5.124-1.403-6.466-.936-1.342-2.379-2.013-4.331-2.013zm42.063-7.381c3.213 0 5.775.935 7.686 2.806 1.911 1.871 2.867 4.534 2.867 7.991V216h-10.37v-17.446c0-2.074-.386-3.538-1.159-4.392-.732-.895-1.789-1.342-3.172-1.342-1.627 0-2.948.59-3.965 1.769-1.017 1.139-1.525 2.908-1.525 5.307V216h-10.37v-30.5h9.272l.305 5.856c.976-2.155 2.359-3.762 4.148-4.819 1.789-1.098 3.884-1.647 6.283-1.647zm37.156 24.339c3.538 0 6.263.773 8.174 2.318 1.952 1.545 2.928 3.823 2.928 6.832 0 3.457-1.545 6.1-4.636 7.93-3.05 1.871-7.218 2.806-12.505 2.806-5.327 0-9.272-.63-11.834-1.891-2.521-1.261-3.782-3.03-3.782-5.307 0-1.342.468-2.521 1.403-3.538s2.359-1.749 4.27-2.196c-3.131-1.342-4.697-3.457-4.697-6.344 0-1.423.447-2.684 1.342-3.782.895-1.098 2.115-1.911 3.66-2.44-3.335-1.789-5.002-4.575-5.002-8.357 0-3.294 1.301-5.836 3.904-7.625 2.603-1.83 6.263-2.745 10.98-2.745 2.196 0 4.229.224 6.1.671.407-2.44 1.322-4.433 2.745-5.978s3.396-2.318 5.917-2.318l.976.061 1.159 6.893c-.813-.081-1.383-.122-1.708-.122-1.383 0-2.542.244-3.477.732-.895.488-1.545 1.159-1.952 2.013 3.416 1.789 5.124 4.595 5.124 8.418 0 3.294-1.301 5.836-3.904 7.625-2.603 1.789-6.263 2.684-10.98 2.684-2.196 0-4.148-.183-5.856-.549-1.261.325-1.891 1.037-1.891 2.135 0 1.383 1.057 2.074 3.172 2.074h10.37zm-5.795-18.422c-1.342 0-2.44.407-3.294 1.22-.813.813-1.22 1.891-1.22 3.233s.407 2.42 1.22 3.233c.854.773 1.952 1.159 3.294 1.159s2.42-.386 3.233-1.159c.854-.813 1.281-1.891 1.281-3.233s-.427-2.42-1.281-3.233c-.813-.813-1.891-1.22-3.233-1.22zm.488 31.598c2.684 0 4.717-.285 6.1-.854 1.423-.529 2.135-1.24 2.135-2.135 0-.651-.285-1.139-.854-1.464-.569-.325-1.525-.488-2.867-.488h-8.357c-1.667 0-2.867.163-3.599.488-.691.366-1.037.915-1.037 1.647 0 1.871 2.826 2.806 8.479 2.806z"
            fill={colors.text.main}
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="16"
            y="165"
            width="420"
            height="67"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values={
                isDarkTheme
                  ? "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  : "0 0 0 0 0.952941 0 0 0 0 0.972549 0 0 0 0 0.980392 0 0 0 1 0"
              }
            />
            <feOffset dx="0" dy="-1" />
            <feGaussianBlur stdDeviation="3" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </InterLink>
  );
}
