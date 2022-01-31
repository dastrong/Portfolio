import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import PageHead from "components/Shared/PageHead";
import * as Texts from "components/Home/Home.texts";
import Icons, { icons } from "components/Home/Home.icons";
import { ButtonsContainer, Button } from "components/Home/Home.buttons";
import * as Sliders from "components/Home/Home.sliders";
import styles from "components/Home/Home.module.css";

export default function Home() {
  return (
    <PageHead
      title="Daniel Strong | Full Stack Developer"
      description="Come check out how Daniel Strong, a full stack wizard, can help you and your team level up."
    >
      <div className={styles.container}>
        {/* 0ms - 2500ms */}
        <Texts.StyledGreeting>
          Hey!
          <br />
          I'm Daniel.
        </Texts.StyledGreeting>

        {/* 2000ms - 2900ms */}
        <Sliders.Pink />
        <Sliders.Blue />
        <Sliders.Bg />

        {/* 2500ms - 5500ms */}
        <Texts.StyledDescription>
          I'm a
          <br />
          full stack
          <br />
          developer.
        </Texts.StyledDescription>

        {/* 4000ms - 8500ms */}
        <Blobs expandDelay={4500} duration={1000} shrinkDelay={2000} />

        {/* ICONS - 1 */}
        <Texts.StyledBasics>
          I've mastered
          <br />
          the fundamentals.
        </Texts.StyledBasics>
        <Icons
          name="basics"
          icons={icons.basics}
          enterDelay={10000}
          exitDelay={14000}
          color="--pink"
        />

        {/* ICONS - 2 */}
        <Texts.StyledStyling>
          I’ve used
          <br />
          <span className={styles.strikethrough}>every</span>{" "}
          <em className={styles.emphasis}>most</em>
          <br />
          styling frameworks..
        </Texts.StyledStyling>
        <Icons
          name="styles"
          icons={icons.styles}
          enterDelay={18000}
          exitDelay={22000}
          color="--blue"
        />

        {/* ICONS - 3 */}
        <Texts.StyledLibraries>
          And I’m a
          <br />
          wizard with
          <br />
          modern libraries.
        </Texts.StyledLibraries>
        <Icons
          name="libraries"
          icons={icons.libraries}
          enterDelay={25000}
          exitDelay={29000}
          color="--pink"
        />

        {/* ICONS - 4 */}
        <Texts.StyledExtras>
          I love
          <br />
          learning new
          <br />
          technologies too.
        </Texts.StyledExtras>
        <Icons
          name="extras"
          icons={icons.extras}
          enterDelay={32000}
          exitDelay={36000}
          color="--blue"
        />

        {/*  36000ms */}
        <Texts.StyledFinals style={{ marginTop: "-12%", textAlign: "center" }}>
          Now I'm searching
          <br />
          for my next
          <br />
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span className={styles.typewriter}>challenge.</span>
          </span>
          <ButtonsContainer>
            <Link href="/contact" passHref>
              <Button primary>Get In Touch</Button>
            </Link>
            <Link href="/work" passHref>
              <Button>View Work</Button>
            </Link>
          </ButtonsContainer>
        </Texts.StyledFinals>

        {/*  36000ms */}
        <Globe />
      </div>
    </PageHead>
  );
}

function Globe() {
  return (
    <svg
      className={styles.globe}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 259"
    >
      <g filter="url(#a)" stroke="#A30F7B">
        <path
          d="M0 6c-.227905.44505-.226562.44571-.224243.44693l.010498.00533.041138.02101.163574.08299.13977.07066c.133179.0672.303223.15276.51001.25624.576053.28829 1.436893.71575 2.577153 1.27309 2.28051 1.11467 5.67932 2.74895 10.1545 4.82845 8.9504 4.1591 22.2067 10.0995 39.4356 17.2273 34.4577 14.2557 84.807 33.2616 148.38 52.267C328.333 120.49 508.383 158.5 720 158.5c196.625 0 376.67-38.011 507.56-76.0198 65.45-19.0047 118.61-38.0095 155.4-52.264 18.4-7.1272 32.71-13.0669 42.42-17.2253 4.86-2.0792 8.56-3.71308 11.06-4.82742 1.24-.55716 2.19-.98443 2.82-1.27253.31-.14406.55-.25333.71-.32665l.18-.08285.05-.02094.01-.00529c0-.00121 0-.00184-.21-.45522l.21.45338L1440 5.5H.008179C.002686 5.5 0 5.5 0 6Zm0 0-.227905.44505L0 5.5V6Z"
          fill="#DB3EB1"
        />
        <path d="M1336.41 6.5h1.53c-.42.21767-.92.4718-1.49.76108-2.19 1.11206-5.45 2.74362-9.73 4.82052-8.54 4.1537-21.13 10.0886-37.29 17.2108-32.33 14.2448-78.96 33.2388-136.16 52.2331C1038.85 119.515 882.146 157.5 712.955 157.5c-182.107 0-335.288-37.986-442.943-75.9715-53.827-18.9927-96.27-37.9848-125.254-52.2272-14.492-7.1212-25.619-13.055-33.122-17.2075-3.751-2.0763-6.597-3.70726-8.503-4.81873-.507-.29556-.948-.55438-1.322-.77507H1336.41Z" />
        <path d="M1227.05 6.5h1.22c-.36.22209-.78.48303-1.27.78139-1.8 1.11171-4.48 2.74291-8 4.81941-7.02 4.153-17.38 10.087-30.67 17.2085-26.59 14.243-64.94 33.2349-111.99 52.227C982.233 119.522 853.35 157.5 714.205 157.5c-149.77 0-275.754-37.979-364.296-75.9595-44.271-18.99-79.179-37.9795-103.017-52.2197-11.919-7.1201-21.07-13.0528-27.241-17.2044-3.085-2.0758-5.424-3.70629-6.992-4.81731-.432-.30638-.806-.57328-1.12-.79909H1227.05Z" />
        <path d="M1128.62 6.5h.93c-.3.22816-.65.49872-1.05.81006-1.46 1.11131-3.61 2.74214-6.44 4.81814-5.66 4.1521-13.99 10.0852-24.69 17.2056-21.39 14.241-52.26 33.2301-90.13 52.2193C931.508 119.534 827.796 157.5 715.835 157.5c-120.512 0-221.89-37.967-293.145-75.9413-35.627-18.9864-63.72-37.9724-82.904-52.2102-9.592-7.1188-16.956-13.0503-21.921-17.2009-2.483-2.0752-4.366-3.70528-5.627-4.81584-.365-.32135-.678-.5992-.939-.83176H1128.62Z" />
        <path d="M1024.23 6.5h.6c-.23.2379-.5.52466-.83.85826-1.08 1.11089-2.69 2.74124-4.8 4.81674-4.21 4.1511-10.42 10.083-18.39 17.202-15.951 14.2385-38.954 33.2236-67.173 52.2081C877.188 119.561 799.918 157.5 716.523 157.5c-89.771 0-165.301-37.941-218.405-75.9067-26.55-18.9811-47.486-37.9625-61.784-52.1976-7.149-7.1174-12.637-13.0476-16.337-17.1972-1.851-2.0748-3.254-3.70437-4.194-4.81456-.292-.34578-.54-.64117-.743-.88394H1024.23Z" />
        <path d="M531.342 7.47061c-.208-.38803-.381-.71261-.517-.97061H909.132c-.15.25497-.337.57323-.562.95183-.659 1.11072-1.64 2.74077-2.926 4.81607-2.571 4.1506-6.361 10.0817-11.234 17.1997-9.745 14.2369-23.818 33.2173-41.126 52.1955C818.639 119.649 771.143 157.5 719.5 157.5c-55.603 0-102.851-37.857-136.246-75.8302-16.687-18.9753-29.891-37.9529-38.924-52.1877-4.516-7.1169-7.989-13.0469-10.332-17.1967-1.171-2.0748-2.06-3.70448-2.656-4.81479Z" />
        <path d="M648.825 7.60934c-.092-.46077-.165-.83232-.219-1.10934H791.376c-.062.27554-.145.64233-.249 1.0954-.255 1.11186-.634 2.7432-1.13 4.8197-.992 4.153-2.453 10.0867-4.33 17.2075-3.753 14.2425-9.166 33.229-15.806 52.2123-6.641 18.9891-14.501 37.9501-23.143 52.1551-4.322 7.103-8.826 12.995-13.452 17.105-4.628 4.111-9.338 6.405-14.084 6.405-5.131 0-10.099-2.303-14.881-6.411-4.784-4.108-9.35-9.998-13.664-17.099-8.627-14.201-16.189-33.159-22.438-52.1463-6.247-18.9818-11.175-37.9669-14.54-52.2087-1.683-7.1203-2.975-13.0537-3.847-17.2064-.435-2.0764-.766-3.70753-.987-4.81926Z" />
      </g>
      <defs>
        <filter
          id="a"
          x="-100.456"
          y="-95"
          width="1640.88"
          height="354"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="50" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.858824 0 0 0 0 0.243137 0 0 0 0 0.694118 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_689_4" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_689_4"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-50" />
          <feGaussianBlur stdDeviation="25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.635294 0 0 0 0 0.0588235 0 0 0 0 0.482353 0 0 0 1 0" />
          <feBlend in2="shape" result="effect2_innerShadow_689_4" />
        </filter>
      </defs>
    </svg>
  );
}

function Blobs({
  duration = 750,
  expandDelay = 5500,
  shrinkDelay = 1500,
}: {
  duration?: number;
  expandDelay?: number;
  shrinkDelay?: number;
}) {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    if (stage === 1) {
      setTimeout(() => setStage(2), expandDelay);
    }
    if (stage === 2) {
      setTimeout(() => setStage(3), shrinkDelay);
    }
  }, [stage]);

  return (
    <svg
      id="visual"
      preserveAspectRatio="none"
      viewBox="0 0 900 600"
      className={clsx(styles.blob_container)}
    >
      <g transform="translate(900, 0)">
        <path
          fill="#DB3EB1"
          style={{ transition: `all ${duration}ms ease-in 0s` }}
          d={
            stage !== 2
              ? "M0 243.4C-24.4 237.8 -48.9 232.1 -73.2 225.4C-97.6 218.7 -121.9 210.8 -143.1 196.9C-164.2 183 -182.1 163 -194.2 141.1C-206.2 119.1 -212.5 95.2 -219.7 71.4C-226.9 47.5 -235.1 23.8 -243.4 0L0 0Z"
              : "M0 540.8C-53.9 524.1 -107.8 507.3 -158.5 487.9C-209.3 468.5 -256.9 446.3 -304.5 419.1C-352 391.8 -399.4 359.4 -436.1 316.8C-472.7 274.3 -498.7 221.6 -514.4 167.1C-530 112.6 -535.4 56.3 -540.8 0L0 0Z"
          }
        ></path>
      </g>
      <g transform="translate(0, 600)">
        <path
          fill="#41B6E6"
          style={{ transition: `all ${duration}ms ease-in 0s` }}
          d={
            stage !== 2
              ? "M0 -243.4C23.8 -236.1 47.5 -228.9 72.3 -222.5C97.1 -216.2 122.8 -210.8 143.1 -196.9C163.3 -183 178 -160.6 190.9 -138.7C203.9 -116.9 215.1 -95.6 223.5 -72.6C231.9 -49.6 237.7 -24.8 243.4 0L0 0Z"
              : "M0 -540.8C58.3 -538.1 116.6 -535.4 167.1 -514.4C217.7 -493.3 260.5 -453.9 303.9 -418.3C347.3 -382.6 391.2 -350.8 425.5 -309.2C459.9 -267.6 484.5 -216.3 502.2 -163.2C519.8 -110 530.3 -55 540.8 0L0 0Z"
          }
        ></path>
      </g>
    </svg>
  );
}
