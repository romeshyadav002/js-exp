import express from "express";
import dictionarySearch from "./Redis/redis";
import dotenv from "dotenv";
import { deleteKey, deleteKeysByPattern } from "./Redis/bustCache";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/search", async (req, res) => {
  const { language, word } = req.query;

  if (!language || !word) {
    return res.status(400).json({ error: "Language and word are required" });
  }

  try {
    const data = await dictionarySearch(language as string, word as string);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/cache", async (req, res) => {
  const { language, word } = req.query;

  if (!language || !word) {
    return res.status(400).json({ error: "Language and word are required" });
  }
  const key = `s:${language}:${word}`;
  try {
    const data = await deleteKey(key);
    res.json({ message: "Cache busted for specific word" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/burst", async (req, res) => {
  const { language, word } = req.query;

  try {
    if (language && word) {
      const redisKey = `s:${language}:${word}`;
      const data = await deleteKey(redisKey);
      res.json({ message: "Cache busted for specific word" });
    } else if (language) {
      const pattern = `s:${language}:*`;
      await deleteKeysByPattern(pattern);
      res.json({
        message: "Cache busted for all words in the specified language",
      });
    } else {
      res.status(400).json({ error: "Language is required" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
