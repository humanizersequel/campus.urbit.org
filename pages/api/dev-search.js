export default async (req, res) => {
  const results = await fetch(
    `https://developers.urbit.org/api/search?q=${encodeURIComponent(req.query.q)}`
  ).then((res) => res.json());
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(results));
};
