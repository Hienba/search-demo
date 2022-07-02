import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles.css";
import CardList from "./CardList";
function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const url = `https://cloud-search-api.herokuapp.com/api/search?q=${encodeURIComponent(
    search
  )}`;
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  return (
    <>
      <form className="form">
        <label className="label">Movie Search App</label>
        <input
          className="input"
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button className="button" type="submit" onClick={handleSubmit}>
          Search
        </button>
        {loading ? <p>Loading...</p> : null}
        {error ? <p>Error: {error.message}</p> : null}
      </form>
      <div className="card--list">
        {results.map((result) => (
          <CardList key={result.id} result={result} />
        ))}
      </div>
    </>
  );
}
export default Search;
