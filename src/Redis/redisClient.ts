import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : undefined,
  },
});
client.on("error", (err) => console.error("Redis Client Error", err));
if (!client.isOpen) {
  client.connect();
}

export { client };
