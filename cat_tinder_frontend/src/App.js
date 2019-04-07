import React, { Component } from 'react'

import { getCats, createCat, deleteCat } from './api'
import Header from './components/Header'
import Cats from './components/Cats'
import NewCat from './components/NewCat'

class App extends Component {
  constructor(props){
	  super(props)
	  this.state = {
			cats: []
		}
	}

  	componentWillMount() {
  		getCats()
  		.then(APIcats => {
  			this.setState({ cats: APIcats })
  		})
  	}

    handleNewCat(newCatInfo) {
    	createCat(newCatInfo)
        .then(successCat => {
            console.log("SUCCESS! New cat: ", successCat);
            // this.setState({
            //     cats: successCat
            // })
        })
    }

    handleDelete(cat) {
        deleteCat(cat)
        .then(catGone => {
            // let updatedCats = this.state.cats.filter((cat) => cat.id !== id)
            // this.setState({ cats: updatedCats })
            console.log("Cat gone. Goodbye ", catGone);
        })
        // let updatedCats = this.state.cats.filter((cat) => cat.id !== id)
        // this.setState({
        //   cats: updatedCats
        // })
    }

    render() {
        let { cats } = this.state
        return (
        	<div>
        		<Header />
        		<Cats cats={cats} handleDelete={this.handleDelete.bind(this)}/>
        		<NewCat addCat={this.handleNewCat.bind(this)}/>
        	</div>
        );
    }
}

export default App;
