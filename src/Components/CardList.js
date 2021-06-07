import React from "react";
import { Button, Card } from "react-bootstrap";

const CardList = ({ user }) => {
  return (
      <Card className="card" style={{ width: "18rem",height:'auto',margin:"auto" }}>
        <span className="profile">{user.name[0] + "." + user.username[0]}</span>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <h3>username:{user.username} </h3>
            <p>
              <strong>email:</strong>
              {user.email}
            </p>
            <p>
              <strong>address:</strong>
              {user.address.city}
            </p>
          </Card.Text>
          <Button variant="primary">Vue details</Button>
        </Card.Body>
      </Card>
    
  );
};

export default CardList;
