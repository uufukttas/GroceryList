import './App.css';
import { useState } from 'react';
import AddProduct from './Components/AddProduct';
import List from './Components/List';

let initialState = JSON.parse(window.localStorage.getItem('grocery-list')) || [];

function App() {
  const [products, setProducts] = useState(initialState);

  return (
    <div className="App">
      <AddProduct products={products} setProducts={setProducts} />
      <List products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
