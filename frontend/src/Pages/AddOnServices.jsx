import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
//import styles from "../App.css";
import styled from "styled-components";

function DropdownMenu() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className="addOnButton">
          Add on Services
        </Dropdown.Toggle>
        <Dropdown.Menu className="listItems">
          <Dropdown.Item href="#/action-1" className="walk">
            1hr/30 min walks
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="swim">
            Swimming
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="park">
            Trips to the park
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4" className="groom">
            Grooming
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default DropdownMenu;
