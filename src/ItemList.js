import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="items-container">
      <ul>
        {items.map((item) => (
          <li>
            <Item key={item} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ItemList as default };
