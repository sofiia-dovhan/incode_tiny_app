import { Db, MongoClient } from 'mongodb';

  export async function up(db: Db, client: MongoClient) {
    const admin = await db.collection('users').findOne({ email: 'admin@gmail.com' });

    await db.collection('users').updateMany({ bossId: { $exists: false } }, { $set: { bossId: admin!._id } });
  };

  export async function down(db: Db, client: MongoClient) {
    
  };
