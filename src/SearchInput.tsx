import React, { useState } from "react";
import styled from "styled-components";

interface Response {
  results: { collectionName: string }[];
}

interface SearchInputProps {
  setAlbums: Function;
}

function SearchInput({ setAlbums }: SearchInputProps) {
  const [inputValue, setInputValue] = useState("");

  const getAlbums = (value: string) =>
    fetch(`https://itunes.apple.com/search?term="${value}"`)
      .then((response) => response.json())
      .then((data: Response) => {
        const allAlbums = data.results
          .map((result) => result.collectionName)
          .filter((name, i, a) => {
            return a.indexOf(name) === i;
          })
          .sort()
          .slice(0, 5);
        return allAlbums;
      });

  const inputChangeHandler = (e: any) => {
    setInputValue(e.target.value);
    getAlbums(e.target.value).then((albums) => setAlbums(albums));
  };

  return (
    <Container>
      <Search
        type="search"
        placeholder="Search Band"
        value={inputValue}
        onChange={inputChangeHandler}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 292px;
`;

const Search = styled.input`
  width: 100%;
  padding: 5px;
  margin: 10px 10px 0 10px;
`;

export default SearchInput;
