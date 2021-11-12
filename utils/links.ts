import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export const internalLinks = [
  { href: "/about", text: "About" },
  { href: "/work", text: "Work" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" },
];

export const externalLinks = [
  {
    text: "GitHub",
    href: "https://github.com/dastrong",
    SquareIcon: FaGithubSquare,
    RegIcon: FaGithub,
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-strong-tech",
    SquareIcon: FaLinkedin,
    RegIcon: FaLinkedinIn,
  },
  {
    text: "Twitter",
    href: "https://twitter.com/DaStrongWon",
    SquareIcon: FaTwitterSquare,
    RegIcon: FaTwitter,
  },
];
