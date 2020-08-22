import React from 'react';

const Item = ({ item, removeItem }) => {
  return (
    <div>
      <span>{item}</span>
      <button onClick={() => removeItem(item)}>X</button>
    </div>
  );
};

export { Item as default };
