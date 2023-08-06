const baseUrl = "https://hologif.api.fujitime.my.id/api";

const fetchData = async (endpoint: string): Promise<any> => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from the HoloGif API. Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getDataFromCacheOrFetch = async (key: string, endpoint: string): Promise<any> => {
  const dataFromCache = localStorage.getItem(key);
  if (dataFromCache) {
    return JSON.parse(dataFromCache);
  } else {
    const fetchedData = await fetchData(endpoint);
    localStorage.setItem(key, JSON.stringify(fetchedData));
    return fetchedData;
  }
};

export {
  getDataFromCacheOrFetch,
};
