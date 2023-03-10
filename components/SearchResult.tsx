import React from "react";
import styled from "styled-components";
import MovieRow from "./MovieRow";

const SearchResult = ({
  debouncedInput,
  input,
  movies,
  onResultClick,
  mainMode = false,
  cardMode = false,
}) => {
  return (
    <StyledSearchResults
      className={debouncedInput && input ? "col-12 col-lg-10" : "d-none"}
    >
      <div className={`RowContainer ${mainMode ? "pt-5" : "pt-3"}`}>
        <MovieRow
          title=""
          id="SearchResult"
          movieResultsList={movies}
          onResultClick={onResultClick}
          cardMode={cardMode}
          mainMode={mainMode}
        ></MovieRow>
      </div>
    </StyledSearchResults>
  );
};

export default SearchResult;

export const StyledSearchResults = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  backdrop-filter: blur(10px);
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
  .RowContainer {
    padding-top: 1rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  /*
  https://stackoverflow.com/questions/63213956/when-loading-swiper-slide-height-changes
  */
  .row__posters {
    height: 8vh;
  }
`;
