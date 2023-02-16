export function filterData(searchText, restaurant) {
  const filteredData = restaurant.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}
