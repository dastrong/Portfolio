import { useRouter } from "next/router";

// used to find out if we're currenly on the homepage
export default function useHomePageChecker() {
  const { pathname } = useRouter();
  return pathname === "/";
}
