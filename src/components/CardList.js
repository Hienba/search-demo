import React from "react";

function CardList({ result }) {
  return (
    <div className="card" key={result.id}>
      <img className="card-image" src={result.avatar} alt="Search" />
      <div className="card--content">
        <h3 className="card--title">{result.first_name + result.last_name}</h3>
        <p>
          <small>{result.nickname}</small>
        </p>
      </div>
    </div>
  );
}
export default CardList;
