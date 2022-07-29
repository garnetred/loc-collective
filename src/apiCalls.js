export const fetchStylist = async (id) => {
  // need to tell if we're in production or not
  const url =
    process.env.NODE_ENV !== "production"
      ? process.env.REACT_APP_DEV_API_URL
      : process.env.REACT_APP_PROD_API_URL;
  const info = await Promise.all([
    fetch(`${url}/api/stylist/${id}`).then((response) => response.json()),
    fetch(`${url}/api/reviews/${id}`).then((response) => response.json()),
  ]);
  return info;
};

export const getSearchResults = async (terms) => {
  const url =
    process.env.NODE_ENV !== "production"
      ? process.env.REACT_APP_DEV_API_URL
      : process.env.REACT_APP_PROD_API_URL;
  console.log(process.env.REACT_APP_DEV_API_URL, "dev url");
  console.log(process.env.NODE_ENV, "environment");
  const searchTerm = terms.style.split(" ").join("+");
  const info = await fetch(
    `${url}/api/search?term=${searchTerm}&location=${terms.location}`
  );
  const data = await info.json();
  return data;
};
