import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//fetch methods
import { getCats, createCat, deleteCat } from './api'

//files
import Header from './components/Header'
import Cats from './components/Cats'
import NewCat from './components/NewCat'

//pages
// import NotFound from './pages/NotFound'
// import NewCat from './pages/NewCat'


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
            // console.log("SUCCESS! New cat: ", successCat);
            this.showCats()
        })
    }

    handleDelete = (id) => {
        deleteCat(id)
        .then(catGone => {
            // console.log("Cat gone. Goodbye ", catGone);
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
