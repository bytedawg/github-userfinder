import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ text: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if(this.state.text === ''){
      this.props.setAlert('Please enter text', 'danger');
    }else {
      this.props.searchUsers(this.state.text);
      this.setState({text: ''});
    }
    this.props.searchUsers(this.state.text);
    this.setState({text: ''});
  }


  clearUsers = () => {
    this.setState({users: [], loading: false});
  }



  render() {
const {showClear, clearUsers} = this.props;

    return (

      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="formBasicSearch">
                <Form.Label>Search</Form.Label>
                <Form.Control type="input" placeholder="Search Git User" onChange={this.onChange} value={this.state.text}/>
              </Form.Group>
          <div className="mb-5"> 
          <Button variant="primary" type="text" className="mr-5">Search</Button>
          {showClear && (<Button onClick={clearUsers}> Clear</Button>)}

          </div>   
            </Form></Col>
        </Row>
      </Container>
    )
  }
}

export default Search;
