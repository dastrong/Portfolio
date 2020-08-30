import React from "react";
import * as Styled from "./TagsVisibilityButtons.styles";

export default function TagsVisibilityButtons({
  showPosts,
  showWorks,
  setShowPosts,
  setShowWorks,
}: {
  showPosts: boolean;
  showWorks: boolean;
  setShowPosts: (value: React.SetStateAction<boolean>) => void;
  setShowWorks: (value: React.SetStateAction<boolean>) => void;
}) {
  return (
    <Styled.ButtonContainer>
      <Styled.Button primary onClick={() => setShowPosts(state => !state)}>
        {showPosts ? "Hide" : "Show"} Posts
      </Styled.Button>
      <Styled.Button onClick={() => setShowWorks(state => !state)}>
        {showWorks ? "Hide" : "Show"} Work
      </Styled.Button>
    </Styled.ButtonContainer>
  );
}
