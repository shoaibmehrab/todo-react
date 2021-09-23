import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './todos/TodoList';
import { Container, Row, Col } from 'react-bootstrap';



function App() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3}}>
          <div className="mt-5 Background">
             <TodoList />  
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
