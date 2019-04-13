import React, { Component } from 'react';
import { Modal, Button, ListGroupItem } from 'react-bootstrap'

class Cat extends Component {
  constructor(props){
	  super(props)
	  this.state = {
			show: false
		}
	}

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    let { cat } = this.props
      return (
      	<div>
          <ListGroupItem>
            <h4>
              <span className='cat-name'>
                {cat.name}
              </span> - <small className='cat-age'>age {cat.age}</small>
            </h4>

            <span className='cat-enjoys'>
              {cat.name} enjoys {cat.enjoys}
            </span>
            <Button
              style={{float: 'right'}}
              variant="btn btn-sm btn-outline-success"
              onClick={this.handleShow}>See More
            </Button>

              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{cat.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>Age: {cat.age}</p>
                  <p>{cat.name} enjoys {cat.enjoys}.</p>
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    variant="btn btn-sm btn-outline-warning"
                    style={{float: 'left'}}
                    onClick={() => this.props.handleDelete(cat.id)}>Delete {cat.name}
                  </Button>
                  <Button
                  variant="btn btn-sm btn-outline-success"
                  style={{float: 'right'}}
                  onClick={this.handleClose}>Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
          </ListGroupItem>
      	</div>
    );
  }
}

export default Cat;
