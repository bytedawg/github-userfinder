import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Alert = ({alert}) => {
    return (
        alert != null && (
        <Container>
        <Row>
        <Col md={{ span: 4, offset: 4 }}>
        <div className={`alert alert-${alert.type}`}>
                        <FontAwesomeIcon icon={["fa", "exclamation-triangle"]} />
                        <i className="fas fa-exclamation-triangle"></i> {alert.msg}
                    </div>
        </Col>
        </Row>
        </Container>
        )
    )
}

export default Alert;