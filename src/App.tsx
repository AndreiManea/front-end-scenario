import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import List from "./List";
import styled from "styled-components";

function App() {
  const [elements, setElements] = useState(["A", "B", "C", "D", "E"]);
  const [albums, setAlbums] = useState([]);
  const arrayRotate = (arr: any[]) => {
    if (albums.length > 0) {
      arr.shift();
      arr.push(albums.shift());
      return arr;
    }
    arr.push(arr.shift());
    return arr;
  };

  useEffect(() => {
    const timer = setTimeout(
      () => setElements(arrayRotate([...elements])),
      1000
    );
    return () => clearTimeout(timer);
  }, [elements]);

  return (
    <Container>
      <SearchInput setAlbums={setAlbums} />
      <List elements={elements} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
