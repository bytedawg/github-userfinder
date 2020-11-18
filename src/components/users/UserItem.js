 import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Users from './Users';


class UserItem extends Component {

  render() {
    const {login, avatar_url,html_url} = this.props.user;
    return (
      <Container>
        <Row>
          <Col sm={{ span: 3, offset: 4 }}>
            <div className="card text-center">
            <Card style={wid}>
              <Card.Img variant="top" src={avatar_url} className="round-img" style={width100} />
              <Card.Body>
                <Card.Title>{login}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" href={html_url} target="_blank">More</Button>
              </Card.Body>
            </Card>
          </div>
         </Col>
        </Row>
      </Container>
    );
  }
}

const wid = {width: '18rem'}

const width100 = {width: '100%'}

export default UserItem;
