import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import './App.css';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    // assuming no duplicates for demo purposes
    setItems([...items, item]);
  };
  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };
  return (
    <div className="App">
      <header className="App-header">
        To Do items
        <ItemList items={items} removeItem={removeItem} />
        <AddItemForm addItem={addItem} />
      </header>
    </div>
  );
}

export default App;
