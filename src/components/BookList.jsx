import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import books from "../assets/books/books.json";
import { Component } from "react";

class BookList extends Component {
  state = {
    query: "",
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md={3}>
              <Form.Label>Cerca libro</Form.Label>
              <Form.Control
                type="text"
                placeholder="cerca libro..."
                value={this.state.query}
                onChange={(event) => this.setState({query: event.target.value})}
              />
            </Col>
          </Row>
          <Row>
            {/* {books.map((book) => (
              <Col md={2}>
                <SingleBook imgUrl={book.img} title={book.title} />
              </Col>
            ))} */}
            {
              books.filter((book) => book.title.toLowerCase().includes(this.state.query))
              .map((book) => (
                <Col key={book.asin} md={2}>
                  <SingleBook bookAsin={book.asin} imgUrl={book.img} title={book.title} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default BookList;
