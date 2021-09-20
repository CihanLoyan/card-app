import React, { useState } from 'react'
import './App.css';
import List from './components/List';
import Search from './components/Search';

const Dummy_Card = [
  {
    id: 0,
    title: "Yumurta",
    quantity: 10,
    price: 1
  },
  {
    id: 1,
    title: "Süt",
    quantity: 2,
    price: 5
  },
  {
    id: 2,
    title: "Ekmek",
    quantity: 1,
    price: 2
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const handleSearch = (e) => {   // event
  setSearchTerm(e.target.value);
  }
  return (
    <div className="App">
      {searchTerm}
      <Search onChange={handleSearch}/>
      <List card={Dummy_Card}/>
    </div>
  );
}

export default App;
