import React, {Component} from 'react';
import {Form}  from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';

class Search extends Component {
  render () {
    return (

      <Container>
  <Row>
    <Col md={{ span: 4, offset: 4 }}>
        <Form>
          <Form.Group controlId="formBasicSearch">
            <Form.Label>Search</Form.Label>
            <Form.Control type="input" placeholder="Search" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form></Col>
  </Row>

</Container>
    )
  }
}

export default Search;
