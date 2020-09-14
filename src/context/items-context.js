import React from 'react';

const ItemsContext = React.createContext({
  items: [],
  itemsDispatch: () => {},
});

export { ItemsContext as default };
