import { Db, MongoClient } from 'mongodb';

  export async function up(db: Db, client: MongoClient) {
    await db.collection('users').insertOne({ email: 'admin@gmail.com', password: 'admin', role: 'administrator' });
  };

  export async function down(db: Db, client: MongoClient) {
    await db.collection('users').deleteOne({ email: 'admin@gmail.com' });
  };
