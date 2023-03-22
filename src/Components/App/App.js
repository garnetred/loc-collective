import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import SearchResultsContainer from "../SearchResultsContainer/SearchResultsContainer";
import StylistPage from "../StylistPage/StylistPage";
import WebContentContainer from "../WebContentContainer/WebContentContainer";
import ContactForm from "../ContactForm/ContactForm";
import { styles, about } from "../../content-data";
import { getSearchResults } from "../../apiCalls";
import "./App.css";

const App = () => {
  const [style, setStyle] = useState("");
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const retrieveSearchResults = async (searchOptions) => {
    getSearchResults(searchOptions).then((response) => {
      try {
        if (response) {
          setResults([...response.data.businesses]);
          setLocation(searchOptions.location);
          setStyle(searchOptions.style);
          setIsLoading(false);
        } else {
          throw new Error();
        }
      } catch {
        setResults([]);
        setLocation(searchOptions.location);
        setStyle(searchOptions.style);
      }
    });
  };

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
              <SearchForm retrieveSearchResults={retrieveSearchResults} setIsLoading={setIsLoading} />
              <SearchResultsContainer
                results={results}
                style={style}
                isLoading={isLoading}
              />
            </>
          )}
        ></Route>
      </Switch>
      <Footer />
    </section>
  );
};

export default App;
