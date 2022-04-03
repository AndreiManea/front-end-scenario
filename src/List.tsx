import React from "react";
import styled from "styled-components";

interface ListProps {
  elements: string[];
}

function List({ elements }: ListProps) {
  return (
    <Container>
      {elements.map((el, i) => (
        <Item key={i}>{el}</Item>
      ))}
    </Container>
  );
}

const Container = styled.div`
  background-color: #d5d5d5;
  padding: 20px;
  width: 250px;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 10px;
`;

const Item = styled.div`
  background: white;
  margin-top: 10px;
  border: 1px solid gray;
  text-align: center;
`;

export default List;
