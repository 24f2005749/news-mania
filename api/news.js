export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch news"
    });
  }
}