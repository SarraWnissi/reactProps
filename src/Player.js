import React from "react";

import Card from "react-bootstrap/Card";

const Player = (props) => {
  const { name, team, nationality, jerseyNumber, age, imageUrl } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <img src={imageUrl} alt="fefe " />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text>
          <strong>Jersey Number:</strong> {jerseyNumber}
        </Card.Text>
        <Card.Text>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
