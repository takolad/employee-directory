import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import FilterForm from "./FilterForm";
import API from "../utils/API";
import EmployeeDetail from "./EmployeeDetail";

class OmdbContainer extends Component {
  state = {
    result: [],
    employees: [],
    filter: "",
    error: "",
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  };

  filterByName = (name) => {
    const employee = this.state.result.filter((employee) => {
      let empName = employee.name.first + " " + employee.name.last;
      return empName.includes(name.trim());
    });
    this.setState({ employees: employee });
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    this.filterByName(this.state.filter);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.filterByName(this.state.filter);
  };

  sortAZ = (event) => {
    event.preventDefault();
    if (this.filter) {
      this.setState({
        employees: this.state.employees.sort((a, b) =>
          a.name.last > b.name.last ? 1 : b.name.last > a.name.last ? -1 : 0
        ),
      });
    } else {
      this.setState({
        result: this.state.result.sort((a, b) =>
          a.name.last > b.name.last ? 1 : b.name.last > a.name.last ? -1 : 0
        ),
      });
    }
  };

  sortZA = (event) => {
    event.preventDefault();
    if (this.filter) {
      this.setState({
        employees: this.state.employees.sort((a, b) =>
          a.name.last < b.name.last ? 1 : b.name.last < a.name.last ? -1 : 0
        ),
      });
    } else {
      this.setState({
        result: this.state.result.sort((a, b) =>
          a.name.last < b.name.last ? 1 : b.name.last < a.name.last ? -1 : 0
        ),
      });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card heading={"Employee Directory"}>
              {this.state.result ? (
                this.state.filter.length < 1 ? (
                  this.state.result.map((friend) => {
                    return (
                      <EmployeeDetail
                        key={friend.email}
                        first={friend.name.first}
                        last={friend.name.last}
                        src={friend.picture.thumbnail}
                        email={friend.email}
                        phone={friend.phone}
                        cell={friend.cell}
                      />
                    );
                  })
                ) : (
                  this.state.employees.map((friend) => {
                    return (
                      <EmployeeDetail
                        key={friend.email}
                        first={friend.name.first}
                        last={friend.name.last}
                        src={friend.picture.thumbnail}
                        email={friend.email}
                        phone={friend.phone}
                        cell={friend.cell}
                      />
                    );
                  })
                )
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Filter">
              <FilterForm
                value={this.state.filter}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                sortAZ={this.sortAZ}
                sortZA={this.sortZA}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
