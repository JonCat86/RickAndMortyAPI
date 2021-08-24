export const helpFetch = async (section, page, filter) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/${section}/?page=${page}&name=${filter}`
  );
  const json = await res.json();
  return json.results;
};
