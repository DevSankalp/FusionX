import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function Filters({ tags, onFilter }) {
  const [selectedTag, setSelectedTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    const filters = {
      tag: selectedTag,
      search: searchQuery,
    };
    onFilter(filters);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      <FormControl variant="outlined" style={{ width: "100px" }}>
        <InputLabel id="tag-filter-label">Tag</InputLabel>
        <Select
          labelId="tag-filter-label"
          id="tag-filter"
          value={selectedTag}
          onChange={handleTagChange}
          label="Tag"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {tags.map((tag, index) => (
            <MenuItem key={index} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        id="search"
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <Button variant="contained" color="primary" onClick={handleFilterClick}>
        Filter
      </Button>
    </div>
  );
}

export default Filters;
