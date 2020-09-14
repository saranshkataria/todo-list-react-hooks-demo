import React, { useEffect, useReducer } from 'react';
import AddItemForm from './AddItemForm';
import './App.css';
import ItemsContext from './context/items-context';
import ItemList from './ItemList';
import itemsReducer from './reducers/items';

function App() {
  const [items, itemsDispatch] = useReducer(itemsReducer, []);

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
    <ItemsContext.Provider value={{ items, itemsDispatch }}>
      <div className="App">
        <header className="App-header">
          To Do items
          <ItemList />
          <AddItemForm />
        </header>
      </div>
    </ItemsContext.Provider>
  );
}

export default App;
