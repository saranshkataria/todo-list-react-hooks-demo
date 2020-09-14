import React, { useContext, useState } from 'react';
import ItemsContext from './context/items-context';

const AddItemForm = () => {
  const [item, setItem] = useState('');
  const { itemsDispatch } = useContext(ItemsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // assuming no duplicates for demo purposes
    itemsDispatch({ type: 'ADD_ITEM', item });
    setItem('');
  };

  return (
    <div>
      <p>Add item</p>
      <form onSubmit={handleSubmit}>
        <input value={item} onChange={(e) => setItem(e.target.value)} />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export { AddItemForm as default };
