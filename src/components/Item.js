import React, { useContext } from 'react';
import ItemsContext from '../context/items-context';

const Item = ({ item }) => {
  const { itemsDispatch } = useContext(ItemsContext);

  return (
    <div>
      <span>{item}</span>
      <button
        onClick={() =>
          itemsDispatch({ type: 'REMOVE_ITEM', itemToBeDeleted: item })
        }
      >
        X
      </button>
    </div>
  );
};

export { Item as default };
