import React from "react";
import Card from "../card/card.components";

const CardList = props => (
  <>
    <div className="card-list">
      {props.characters.map(character => (
        <Card people={character} />
      ))}
    </div>
  </>
);

export default CardList;
