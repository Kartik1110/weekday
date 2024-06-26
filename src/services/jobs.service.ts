import { API_ENDPOINTS } from "../constants/apiEndPointUrl";

/**
 * Fetches data from the API endpoint.
 * @returns {Promise<any>} A promise that resolves to the fetched data.
 */
export const fetchData = async (limit: number, offset: number) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      limit,
      offset,
    }),
  };

  try {
    const response = await fetch(API_ENDPOINTS.getJobs, requestOptions);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
