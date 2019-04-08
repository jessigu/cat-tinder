import React, { Component } from 'react';
import { Col, Container, Row, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

class Cats extends Component {
  render() {
    return (
    	<Container>
            <Row>
                <Col xs={12}>
                    <ListGroup>
                        {this.props.cats.map((cat) => {
                            return (
                                <ListGroupItem key={cat.id}>
                                    <h4> 
                                      <span className='cat-name'>
                                        {cat.name}
                                      </span> - <small className='cat-age'>age {cat.age}</small>
                                    </h4>

                                    <span className='cat-enjoys'>
                                      {cat.name} enjoys {cat.enjoys}
                                    </span><br/><br/>
                                    <Button variant="btn btn-sm btn-outline-danger" onClick={() => this.props.handleDelete(cat)}>Delete</Button>
                                </ListGroupItem>
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
