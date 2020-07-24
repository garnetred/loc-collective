import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import SearchResultsContainer from "../SearchResultsContainer/SearchResultsContainer";
import StylistPage from "../StylistPage/StylistPage";
import WebContentContainer from "../WebContentContainer/WebContentContainer";
import ContactForm from "../ContactForm/ContactForm";
import { styles, about, resources } from "../../content-data";
import { getSearchResults } from "../../apiCalls";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  retrieveSearchResults = async (searchOptions) => {
    getSearchResults(searchOptions).then((response) => {
      try {
        if (response) {
          return this.setState({
            results: [...response.businesses],
            location: searchOptions.location,
            style: searchOptions.style,
          });
        } else {
          throw new Error();
        }
      } catch {
        return this.setState({
          results: [],
          location: searchOptions.location,
          style: searchOptions.style,
        });
      }
    });
  };

  render() {
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
          <Route path="/contact" render={() => <ContactForm />} />
          <Route
            path="/stylist/:id"
            render={({ match }) => {
              const { id } = match.params;
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
