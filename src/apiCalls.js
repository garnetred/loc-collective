export const fetchStylist = async (id) => {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer B1luOAhR9OYY1l9WsHUFv7oJ2-CdckIvtrb7Q9RyptY6iJIIdCytMCmiE7BDg8QnGAMXhxWFkhSGZUJVLUjbBZHEpBouBNVjitjOQkwDqDSKRiVVLkp6cTl-A8rZXnYx"
  );
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  const info = await Promise.all([
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,
      requestOptions
    ).then((response) => response.json()),
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}/reviews`,
      requestOptions
    ).then((response) => response.json()),
  ]);
  return info;
};

export const getSearchResults = async (terms) => {
  const searchTerm = terms.style.split(" ").join("+");
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer B1luOAhR9OYY1l9WsHUFv7oJ2-CdckIvtrb7Q9RyptY6iJIIdCytMCmiE7BDg8QnGAMXhxWFkhSGZUJVLUjbBZHEpBouBNVjitjOQkwDqDSKRiVVLkp6cTl-A8rZXnYx"
  );
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const info = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&category=(hairstylists, US)&location=${terms.location}&limit=50`,
    requestOptions
  );
  const data = await info.json();
  return data;
};
