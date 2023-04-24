import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import AddItem from "./AddItem";

function App() {
  const [filters, setFilters] = useState ({});
  const [data, setData] = useState({items: []});

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    items.push(item);
    setData({items: items});
    console.log(data);
  };



  return (
    <div className="App">
      <SearchBar updateSearchParams = {updateFilters}/>
      <AddItem addItem = {addItemToData}/>
    </div>
  );
}

export default App;
