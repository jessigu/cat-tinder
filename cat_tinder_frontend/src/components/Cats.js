import React, { Component } from 'react';
import { Col, Container, Row, ListGroup } from 'react-bootstrap'
import Cat from './Cat'

class Cats extends Component {

  render() {
    return (
    	<Container>
            <Row>
                <Col xs={12}>
                    <ListGroup>
                        {this.props.cats.map((cat) => {
                            return (
                              < Cat
                              cat={cat}
                              key={cat.id}
                              handleDelete={this.props.handleDelete}
                              />
                            )
                        })}
                    </ListGroup>
                </Col>
            </Row>
    	</Container>
    );
  }
}

export default Cats;
