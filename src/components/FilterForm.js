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
        {/* <button onClick={props.} className="btn btn-primary">
          Gender Filter
        </button> */}
      </div>
    </form>
  );
}

export default filterResults;

// potentional filters
// gender, name, email
