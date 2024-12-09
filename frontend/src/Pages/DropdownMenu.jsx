import React, { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
  border: 2px solid black;
`;

const DropdownMenu = styled.div`
  background-color: #f9f9f9;
  display: none;
  padding: 12px 16px;
  position: absolute;
  right: 0;
  z-index: 1;
  border: 2px solid black;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: 2px solid black;
  color: inherit;

  &:hover + & {
    display: inline-block;
  }
`;

function DropdownMenu2() {
  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleMenu}>Dropdown</DropdownButton>
      {menuVisible && (
        <DropdownMenu>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}

export default DropdownMenu2;
