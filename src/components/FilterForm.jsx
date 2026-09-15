import React from "react";

function filterResults(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="filter">Filter:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="filter"
          type="text"
          className="form-control"
          placeholder="Filter By Name"
          id="filter"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Filter
        </button>
        <br />
        <br />
        <button className="btn btn-primary" onClick={props.sortAZ}>
          {"A > Z"}
        </button>{" "}
        <button className="btn btn-primary" onClick={props.sortZA}>
          {"Z > A"}
        </button>
      </div>
    </form>
  );
}

export default filterResults;
