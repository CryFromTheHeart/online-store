import { sortBy } from 'lodash';

const getSortItems = (chunkItems, sort) => {
  const sorts = {
    LOWPRICE: (chunk) => [...chunk].sort((a, b) => a.price - b.price),
    HIGHERPRICE: (chunk) => [...chunk].sort((a, b) => b.price - a.price),
    NAME: (chunk) => sortBy(chunk, ({ name }) => name),
  };

  return sorts[sort](chunkItems);
};

const getFilteredItems = (chunkItems, activeFilters) => Object.entries(activeFilters).reduce(
  (acc, [type, value]) => (value === ''
    ? acc
    : acc
      .filter(({ desc }) => desc[type])
      .filter(({ desc }) => desc[type].value === value)),
  chunkItems,
);

const getChunks = (items, page, countShowItems) => {
  const start = (page - 1) * countShowItems;
  const end = page * countShowItems;

  return {
    chunkItems: items.slice(start, end),
    pageCount: Math.trunc(items.length / countShowItems) + 1,
  };
};

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
  const { page, items, sort } = state.storeInfo;
  const { activeFilters } = state.filter;

  const filteredItems = getFilteredItems(items, activeFilters);

  const sortedItems = getSortItems(filteredItems, sort);

  const { chunkItems, pageCount } = getChunks(sortedItems, page, 10);

  return { page, chunkItems, pageCount };
};

export const getCartInfo = (state) => state.cartInfo;

export const getModalInfo = (state) => state.modal;

export const getFilters = (state) => state.filter;
