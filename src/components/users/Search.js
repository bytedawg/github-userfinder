import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';

class Search extends Component {
  state = {
    text: ''
  };

  onChange = e => this.setState({ text: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState.text = '';
  }



  render() {
    return (

      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="formBasicSearch">
                <Form.Label>Search</Form.Label>
                <Form.Control type="input" placeholder="Search" onChange={this.onChange} value={this.state.text} />
              </Form.Group>

              <Button variant="primary" type="text" >
                Search
          </Button>
            </Form></Col>
        </Row>

      </Container>
    )
  }
}

export default Search;
