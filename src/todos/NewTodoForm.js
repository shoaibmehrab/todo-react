import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NewTodoFrom = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <Row>
        <Col md={12}>
          <Form.Group as={Row} className="mb-3">
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="New to do"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </Col>
            <Col sm="">
            <Button>Create Todo</Button>
            </Col>
          </Form.Group>
       
        </Col>
      </Row>
    </div>
  );
};

export default NewTodoFrom;
