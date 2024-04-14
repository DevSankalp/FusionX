import React, { useState } from "react";
import Card from "./Card";
import Filters from "./Filters";

function CardList({ data }) {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (filters) => {
    let updatedData = data;

    if (filters.tag) {
      updatedData = updatedData.filter((item) =>
        item.tags.includes(filters.tag)
      );
    }

    if (filters.search) {
      updatedData = updatedData.filter((item) =>
        item.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredData(updatedData);
  };

  return (
    <div className="flex flex-col items-center gap-4 pt-12 min-h-[100vh]">
      <div className="App flex flex-col gap-4 items-center">
        <h1 className="text-xl">Filter and Search</h1>
        <Filters tags={["Tag1", "Tag2", "Tag3"]} onFilter={handleFilter} />
      </div>
      <div className="cards">
        {filteredData.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            email={item.email}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
