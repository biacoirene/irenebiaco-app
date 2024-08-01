import React, { useState } from "react";
import Citizen from "./Citizen";
import SearchFilter from "./SearchFilter";
import "./styles.css";

const Citizens = () => {
  const initialCitizens = [
    {
      name: "John",
      age: getRandomAge(),
      address: "Lipata",
      status: "Active",
    },
    {
      name: "Jane",
      age: getRandomAge(),
      address: "Danao",
      status: "Active",
    },
    {
      name: "Mike",
      age: getRandomAge(),
      address: "San Ferndando",
      status: "Active",
    },
    {
      name: "Lisa",
      age: getRandomAge(),
      address: "Mandaue",
      status: "Active",
    },
    {
      name: "John",
      age: getRandomAge(),
      address: "Naga",
      status: "Active",
    },
    {
      name: "Jane",
      age: getRandomAge(),
      address: "Talisay",
      status: "Active",
    },
    {
      name: "Mike",
      age: getRandomAge(),
      address: "Toledo",
      status: "Inactive",
    },
    {
      name: "Lisa",
      age: getRandomAge(),
      address: "Tunghaan",
      status: "Inactive",
    },
    {
      name: "John",
      age: getRandomAge(),
      address: "Tulay",
      status: "Inactive",
    },
    {
      name: "Jane",
      age: getRandomAge(),
      address: "Tungkop",
      status: "Inactive",
    },
  ];

  const [citizens, setCitizens] = useState(initialCitizens);
  const [filteredCitizens, setFilteredCitizens] = useState(initialCitizens);

  function getRandomAge() {
    return Math.floor(Math.random() * (70 - 20 + 1)) + 20;
  }

  const toggleStatus = (index) => {
    const updatedCitizens = citizens.map((citizen, i) =>
      i === index
        ? {
            ...citizen,
            status: citizen.status === "Active" ? "Inactive" : "Active",
          }
        : citizen
    );
    setCitizens(updatedCitizens);
    setFilteredCitizens(updatedCitizens);
  };

  return (
    <div>
      <SearchFilter
        citizens={citizens}
        setFilteredCitizens={setFilteredCitizens}
      />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCitizens.map((citizen, index) => (
            <Citizen
              key={index}
              citizen={citizen}
              index={index}
              toggleStatus={toggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Citizens;
