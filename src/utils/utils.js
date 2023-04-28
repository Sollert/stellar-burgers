export const sortData = (data) => {
  const sortedData = {
    bun: {
      title: 'Булки',
      items: [],
    },
    main: {
      title: 'Начинки',
      items: [],
    },
    sauce: {
      title: 'Соусы',
      items: [],
    },
  };

  data.forEach((item) => {
    sortedData[item.type].items.push(item);
  });

  return sortedData;
};
