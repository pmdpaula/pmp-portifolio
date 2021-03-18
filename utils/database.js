/* eslint-disable import/prefer-default-export */
import { MongoClient } from 'mongodb';

const { DATABASE_URI, DATABASE_NAME } = process.env;

if (!DATABASE_URI) {
  throw new Error(
    'Please define the DATABASE_URI environment variable inside .env.local',
  );
}

if (!DATABASE_NAME) {
  throw new Error(
    'Please define the DATABASE_NAME environment variable inside .env.local',
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
  cached = { conn: null, promise: null };
  global.mongo = { conn: null, promise: null };
}

export async function connect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(DATABASE_URI, opts).then(client => ({
      client,
      db: client.db(DATABASE_NAME),
    }));
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
