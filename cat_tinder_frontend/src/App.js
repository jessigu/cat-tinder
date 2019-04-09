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

  	componentWillMount = () => {
      this.showCats()
  	}

    showCats = () => {
      getCats()
      .then(APIcats => {
        this.setState({ cats: APIcats })
      })
    }

    handleNewCat = (newCatInfo) => {
    	createCat(newCatInfo)
        .then(successCat => {
            console.log("SUCCESS! New cat: ", successCat);
            const { cats } = this.state
            cats.push(successCat)
            this.setState({ cats: cats })
        })
    }

    handleDelete = (id) => {
        deleteCat(id)
        .then(catGone => {
            console.log("Cat gone. Goodbye ", catGone);
            this.showCats()
        })
    }

    render() {
        let { cats } = this.state
        return (
        	<div>
        		<Header />
        		<Cats cats={cats} handleDelete={this.handleDelete}/>
        		<NewCat addCat={this.handleNewCat}/>
        	</div>
        );
    }
}

export default App;
