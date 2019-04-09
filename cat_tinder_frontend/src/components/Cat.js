import React, { Component } from 'react';
import { Button, ListGroupItem } from 'react-bootstrap'
// import { deleteCat } from '.././api'

class Cat extends Component {
  // handleDelete = (cat) => {
  //     deleteCat(cat)
  //     .then(catGone => {
  //         console.log("Cat gone. Goodbye ", catGone);
  //         let { cats } = this.state
  //         cats.splice(cats.indexOf(cat), 1)
  //         // debugger
  //         // let updateCats = cats.filter(cat => catGone !== cat);
  //         this.setState({ cats: cats })
  //     })
  // }

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
            <br/>
            <br/>
            <Button
              variant="btn btn-sm btn-outline-danger"
              onClick={() => this.props.handleDelete(cat.id)}>Delete {cat.name}
            </Button>
          </ListGroupItem>
      	</div>
    );
  }
}

export default Cat;
