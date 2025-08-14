export default async function handler(req, res) {
  try {
    const url = "https://raw.githubusercontent.com/codeallthethingz/delete-me/refs/heads/main/data.json"; 

    const response = await fetch(url);
    if (!response.ok) {
      res.status(response.status).json({ error: "GitHub fetch failed" });
      return;
    }

    const text = await response.text();
    console.log("Fetched data:", text);
    res.send(text);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}