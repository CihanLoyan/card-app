import './App.css';
import List from './components/List';
import Search from './components/Search';

const Dummy_Card = [
  {
    id: 0,
    title: "yumurta",
    quantity: 10,
    price: 1
  },
  {
    id: 1,
    title: "süt",
    quantity: 2,
    price: 5
  },
  {
    id: 2,
    title: "ekmek",
    quantity: 1,
    price: 2
  }
];

function App() {

  const handleSearch = () => {
    console.log("merhaba");
  }
  return (
    <div className="App">
      <Search onChange={handleSearch}/>
      <List card={Dummy_Card}/>
    </div>
  );
}

export default App;
