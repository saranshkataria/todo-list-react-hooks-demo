import React, { useEffect, useReducer } from 'react';
import AddItemForm from './AddItemForm';
import './App.css';
import ItemList from './ItemList';
import itemsReducer from './reducers/items';

function App() {
  const [items, itemsDispatch] = useReducer(itemsReducer, []);
  const addItem = (item) => {
    // assuming no duplicates for demo purposes
    itemsDispatch({ type: 'ADD_ITEM', item });
  };

  const removeItem = (itemToBeDeleted) => {
    itemsDispatch({ type: 'REMOVE_ITEM', itemToBeDeleted });
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      itemsDispatch({ type: 'POPULATE_ITEMS', items });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

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
