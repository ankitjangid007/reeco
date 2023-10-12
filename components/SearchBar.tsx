"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #20361b;
  background-color: #fff;
  border-radius: 30px;
  padding: 5px;
`;

const SearchInput = styled.input`
  width: 97%;
  border: none;
  outline: none;
  padding: 4px;
  border-radius: 4px;
  font-size: 16px;
`;

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <BsSearch size={22} />
    </SearchBarContainer>
  );
};

export default SearchBar;
