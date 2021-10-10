import "./App.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Rating from "./components/Rating";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action href="#link1">
                <div className="ratingRow">
                  <span className="namePlayer">Frank</span>
                  <span>
                    <Rating />
                  </span>
                </div>
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" disabled>
                <div className="ratingRow">
                  <span className="namePlayer">Gabi</span>
                  <span>
                    <Rating />
                  </span>
                </div>
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => {}}>
                <div className="ratingRow">
                  <span className="namePlayer">William</span>
                  <span>
                    <Rating />
                  </span>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
