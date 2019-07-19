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
        <Text>
          <p>Birth Date: {props.people.birth_year}</p>
          <p>Hair Color: {props.people.hair_color}</p>
          <p>Height: {props.people.height}</p>
          <p>Eyes: {props.people.eye_color}</p>
        </Text>
      </CardContainer>
    </>
  );
};

export default Card;
