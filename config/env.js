import { config } from "dotenv";

// Load the appropriate .env file based on NODE_ENV
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

// Destructure environment variables
export const { PORT, NODE_ENV } = process.env;