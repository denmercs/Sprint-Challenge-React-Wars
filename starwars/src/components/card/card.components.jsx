import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 85vw;
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  background-color: #0005;
  align-items: center;
`;

const Header = styled.h2`
  padding-top: 2rem;
  text-align: center;
  font-size: 32px;
  color: #fbeef2;
  text-align: center;
`;

const Text = styled.p`
  color: #fff;
`;

const Card = props => {
  return (
    <>
      <CardContainer>
        <Header>{props.people.name}</Header>
        <div>
          <Text>Birth Date: {props.people.birth_year}</Text>
          <Text>Hair Color: {props.people.hair_color}</Text>
        </div>
        <div>
          <Text>Height: {props.people.height}</Text>
          <Text>Eyes: {props.people.eye_color}</Text>
        </div>
        <div>
          <Text>Species: {props.people.species}</Text>
        </div>
      </CardContainer>
    </>
  );
};

export default Card;
