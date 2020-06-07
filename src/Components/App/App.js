import React, { Component } from "react";
import { Route, NavLink, Link, Switch, Router } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // componentDidMount = () => {};

  retrieveSearchResults = async (searchOptions) => {
    const searchTerm = searchOptions.style.split(" ").join("+");
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer B1luOAhR9OYY1l9WsHUFv7oJ2-CdckIvtrb7Q9RyptY6iJIIdCytMCmiE7BDg8QnGAMXhxWFkhSGZUJVLUjbBZHEpBouBNVjitjOQkwDqDSKRiVVLkp6cTl-A8rZXnYx"
    );
    myHeaders.append("Content-Type", "application/json");

    let raw = "{name: 'Shelby', date: '5/30', time: '2:00', number: 2}";

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      // body: raw,
      // redirect: "follow",
    };

    const info = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&category=(hairstylists, US)&location=${searchOptions.location}&limit=50`,
      requestOptions
    );
    const data = await info.json().then((response) => {
      console.log(response);
      try {
        console.log(" in try");
        if (response) {
          // console.log(response.status)
          return this.setState({ results: [...response.businesses] });
        } else {
          throw new Error();
        }
        // response.ok ? console.log(response.status) : console.log('not working')
      } catch {
        return this.setState({ results: [] });
      }
      //  this.setState({results: [...response]}) : this.setState({results: []})
    });
    // .catch((err) => console.log(err));
    // .then((response) => response.json())
    // .then((result) => console.log(result))
    // .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <section className="App">
        <Header />
        <Switch>
          <Route path="/about" />
          <Route path="/styles" />
          <Route path="/resources" />
          <Route path="/contact" />
          <Route
            exact
            path="/"
            render={() => (
              <SearchForm retrieveSearchResults={this.retrieveSearchResults} />
            )}
          ></Route>
        </Switch>
      </section>
    );
  }
}

export default App;
