import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles.css";
import CardList from "./CardList";
function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const Search = async (e) => {
    e.preventDefault();
    const url = `https://cloud-search-api.herokuapp.com/api/search?q=${query}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={Search}>
        <label className="label">Movie Name</label>
        <input
          className="input"
          type="text"
          placeholder="Enter movie name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="button"
          type="submit"
          onClick={() => setSearchParams({ q: `${query}` })}
        >
          Search
        </button>
      </form>
      <div className="card--list">
        {results.map((result) => (
          <CardList result={result} />
        ))}
      </div>
    </>
  );
}
export default Search;
