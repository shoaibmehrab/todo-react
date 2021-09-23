import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const TodoListItem = ({ todo }) => (
    <div className="mt-2">
        <Row>
            <Col md={6}>
                <h3>{todo.text}</h3>
            </Col>
            <Col md={6}>
                <Row>
                    <Col md={8}>
                        <Button>Mark As Completed</Button>
                    </Col>
                    <Col md={4}>
                        <Button variant="warning">Remove</Button>
                    </Col>
                </Row>
                
               
            </Col>
        </Row>
       
        <div>
          
        </div>
    </div>
)

export default TodoListItem;

