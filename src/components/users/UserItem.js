import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Users from './Users';
import propTypes from 'prop-types';


const UserItem = ({user: {login, avatar_url, html_url}}) => {

    return (
      <Container>
        <Row>
          <Col sm={{ span: 3, offset: 4 }}>
            <div className="card text-center">
            <Card style={wid}>
              <Card.Img variant="top" src={avatar_url} className="round-img" style={width100}/>
              <Card.Body>
                <Card.Title>{login}</Card.Title>
                <Card.Text>
                  Github URL: {html_url}
                </Card.Text>
                <Button variant="primary" href={html_url} target="_blank">View</Button>
              </Card.Body>
            </Card>
          </div>
         </Col>
        </Row>
      </Container>
    );

}

const wid = {width: '18rem'}

const width100 = {width: '100%'}

UserItem.propTypes = {
  user: propTypes.object.isRequired
}

export default UserItem;
