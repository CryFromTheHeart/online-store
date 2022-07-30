export const getItemsInfo = (state) => state.itemsInfo;

export const getItemsForCart = (state) => {
  const { items } = state.itemsInfo;
  const { items: itemsInCart } = state.cartInfo;
  const data = itemsInCart.map((item) => {
    const rawData = items.find(({ id }) => id === item.id);
    return { ...rawData, count: item.count };
  });
  return data;
};

export const getItemsCount = (state) => state.itemsInfo.items.length;

export const getChunkItems = (start, end) => (state) => {
  const { items } = state.itemsInfo;
  return items.slice(start, end);
};
