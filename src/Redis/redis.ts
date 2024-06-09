import axios from "axios";
import { client } from "./redisClient";

const DICTIONARY_API = "https://api.dictionaryapi.dev/api/v2/entries";

const dictionarySearch = async (language: string, word: string) => {
  const redisKey = `s:${language}:${word}`;

  try {
    const result = await client.get(redisKey);
    if (result) {
      console.log("i am from redis db");
      return JSON.parse(result);
    } else {
      const response = await axios.get(`${DICTIONARY_API}/${language}/${word}`);
      const data = response.data;
      await client.setEx(redisKey, 3600, JSON.stringify(data));

      return data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default dictionarySearch;
