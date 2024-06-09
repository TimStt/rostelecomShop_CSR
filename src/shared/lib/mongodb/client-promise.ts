import { MongoClient } from "mongodb";

let clientPromise: Promise<MongoClient>;

if (!process.env.NEXT_PUBLIC_DB_URL) {
  throw new Error("Missing NEXT_PUBLIC_DB_URL");
} else {
  clientPromise = MongoClient.connect(
    process.env.NEXT_PUBLIC_DB_URL as string,
    {
      maxPoolSize: 10,
    }
  );
}

export { clientPromise };
