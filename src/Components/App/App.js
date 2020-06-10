import React, { Component } from "react";
import { Route, NavLink, Link, Switch, Router } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import SearchResultsContainer from "../SearchResultsContainer/SearchResultsContainer";
import StylistPage from "../StylistPage/StylistPage";
import WebContent from "../WebContent/WebContent";
import WebContentContainer from "../WebContentContainer/WebContentContainer";
import { styles, about, resources } from "../../content-data";
import { getSearchResults } from "../../apiCalls";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchTerm: "",
    };
  }

  // componentDidMount = () => {};

  retrieveSearchResults = async (searchOptions) => {
    console.log(getSearchResults(searchOptions));
    getSearchResults(searchOptions).then((response) => {
      console.log(response);
      try {
        console.log(" in try");
        if (response) {
          console.log("in if statement");
          return this.setState({
            results: [...response.businesses],
            location: searchOptions.location,
            style: searchOptions.style,
          });
        } else {
          console.log("in else statement");
          throw new Error();
        }
        // response.ok ? console.log(response.status) : console.log('not working')
      } catch {
        console.log("in catch");
        return this.setState({
          results: [],
          location: searchOptions.location,
          style: searchOptions.style,
        });
      }
      //  this.setState({results: [...response]}) : this.setState({results: []})
    });
    // .catch((err) => console.log(err));
    // .then((response) => response.json())
    // .then((result) => console.log(result))
    // .catch((error) => console.log("error", error));
  };

  //have to set it up so that if search options is blank, just displays the search results a particular way
  //which means I need to pass it down as a prop
  //search container needs to be underneath the search form, in hindsight, on that same page

  render() {
    console.log(this.state);
    return (
      <section className="App">
        <Header />
        <Switch>
          <Route
            path="/about"
            render={() => <WebContentContainer data={about} name="About" />}
          />
          <Route
            path="/styles"
            render={() => <WebContentContainer data={styles} name="Styles" />}
          />
          <Route
            path="/resources"
            render={() => (
              <WebContentContainer data={resources} name="Resources" />
            )}
          />
          <Route path="/contact" />
          <Route
            path="/stylist/:id"
            render={({ match }) => {
              const { id } = match.params;
              console.log(id);
              return <StylistPage id={id} />;
            }}
          />
          <Route
            exact
            path="/"
            render={() => (
              <>
                <SearchForm
                  retrieveSearchResults={this.retrieveSearchResults}
                />
                <SearchResultsContainer
                  results={this.state.results}
                  style={this.state.style}
                />
              </>
            )}
          ></Route>
        </Switch>
      </section>
    );
  }
}

export default App;
