import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function hello() {
  return (
    <div>
      <Container>
      <Row>
        <Col xs>First, but unordered</Col>
        <Col xs={{ order: 12 }}>Second, but last</Col>
        {/* <Col xs={{ order: 1 }}>Third, but second</Col> */}
      </Row>
    </Container>
    hello
    </div>
  )
}
