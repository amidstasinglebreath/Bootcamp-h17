import React from "react";
import { Container, Row } from "react-bootstrap";
import "./style.css";

const Title = (props) => {
  return (
      <Container className="title justify-content-center">
          <Row className="row">
            <h1>{props.title}</h1>
          </Row>
          <Row className="row">
            <h5>
                {props.sub}
            </h5>
          </Row>
      </Container>
    
  );
}

export default Title;