export async function getSafeAnimeImages(
  limit: number = 60,
  offset: number = 0
) {
  const API_URL = "https://api.nekosapi.com/v4/images";

  const params = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
    rating: "safe",
  });

  try {
    const response = await fetch(`${API_URL}?${params}`);

    if (!response.ok) {
      throw new Error(`Error fetching images: ${response.statusText}`);
    }

    const data = await response.json();
    return data; // This returns the list of images
  } catch (error) {
    console.error(error);
    return [];
  }
}
