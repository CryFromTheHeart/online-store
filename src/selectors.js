import { sortBy } from 'lodash';

const getSortItems = (chunkItems, sort) => {
  const sorts = {
    LOWPRICE: (chunk) => [...chunk].sort((a, b) => a.price - b.price),
    HIGHERPRICE: (chunk) => [...chunk].sort((a, b) => b.price - a.price),
    NAME: (chunk) => sortBy(chunk, ({ name }) => name),
  };

  return sorts[sort](chunkItems);
};

const getFilteredItems = (chunkItems, activeFilters) =>
  Object.entries(activeFilters).reduce(
    (acc, [type, value]) =>
      value === '' ? acc : acc.filter(({ desc }) => desc[type] === value),
    chunkItems
  );

export const getItemsInfo = (state) => state.itemsInfo;

export const getItemsForCart = (state) => {
  const { items } = state.storeInfo;
  const { items: itemsInCart, cost } = state.cartInfo;
  const data = itemsInCart.map((item) => {
    const rawData = items.find(({ id }) => id === item.id);
    return { ...rawData, count: item.count };
  });
  return { items: data, cost };
};

export const getItemsCount = (state) => state.itemsInfo.items.length;

export const getStorePageInfo = (state) => {
  const { page, chunkItems, pageCount, sort } = state.storeInfo;
  const { activeFilters } = state.filter;

  const filteredItems = getFilteredItems(chunkItems, activeFilters);

  const sortedChunk = getSortItems(filteredItems, sort);

  return { page, chunkItems: sortedChunk, pageCount };
};
