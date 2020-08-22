import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState(['item 1', 'item 2']);

  return (
    <div className="App">
      <header className="App-header">
        To Do items
        <ItemList items={items} />
      </header>
    </div>
  );
}

export default App;
