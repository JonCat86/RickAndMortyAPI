export const helpFetch = async (url) => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (error) {}
};
