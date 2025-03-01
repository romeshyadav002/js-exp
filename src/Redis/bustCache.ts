import { client } from "./redisClient";

export const deleteKey = async (key: string) => {
  try {
    const response = await client.del(key);
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteKeysByPattern = async (pattern: string): Promise<void> => {
  const allKeys = await client.keys(pattern);
  for (let i = 0; i < allKeys.length; i++) {
    await client.del(allKeys[i]);
  }
};
