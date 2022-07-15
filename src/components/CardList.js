import React from "react";

function CardList({ result }) {
  return (
    <div className="card" key={result._id}>
      <img className="card-image" src={result.image} alt="Search" />
      <div className="card--content">
        <h3 className="card--title">{result.title}</h3>
        <p>
          <small>{result.price}</small>
        </p>
      </div>
    </div>
  );
}
export default CardList;
