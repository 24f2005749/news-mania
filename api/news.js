export default async function handler(req, res) {

    try {

        const country = req.query.country || "us";
        const category = req.query.category || "general";
        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 12;

        const url =
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${process.env.NEWS_API_KEY}`;

        const response = await fetch(url);

        const data = await response.json();

        return res.status(200).json(data);

    } catch (err) {

        return res.status(500).json({
            error: err.message
        });

    }
}