import React, { useState } from "react";

const SearchFilter = ({ citizens, setFilteredCitizens }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredCitizens(
      citizens.filter((citizen) => citizen.name.toLowerCase().includes(query))
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search citizens..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
