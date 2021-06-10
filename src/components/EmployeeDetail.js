import React from "react";

function EmployeeDetail(props) {
  return (
    <div className="text-center border border-primary py-3">
      <img
        alt={[props.first + " " + props.last]}
        className="img-fluid"
        src={props.src}
        key={props.email}
        style={{ margin: "0 auto" }}
      />
      <h3>
        Name: {props.first} {props.last}
      </h3>
      <h3>Email: {props.email}</h3>
      <h3>Phone: {props.phone}</h3>
      <h3>Cell: {props.cell}</h3>
    </div>
  );
}

export default EmployeeDetail;
