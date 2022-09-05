import { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "3px solid red" : "0px" }}
        >
          <Card.Img variant="top" src={this.props.imgUrl} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
        <Container>
          <Row>
            <Col>
              {this.state.selected && (
                <CommentArea elementId={this.props.bookAsin} />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SingleBook;
