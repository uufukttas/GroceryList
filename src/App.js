import './App.css';
import { useState } from 'react';
import AddProduct from './Components/AddProduct';
import List from './Components/List';

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <AddProduct products={products} setProducts={setProducts} />
      <List products={products} />
    </div>
  );
}

export default App;
