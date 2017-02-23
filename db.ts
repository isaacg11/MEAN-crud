const connectionString:string = 'mongodb://isaac:123@ds157529.mlab.com:57529/practice-db';

import * as mongodb from 'mongodb';

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
        console.log('success')
        this.db = db;
    }).catch((err) => {
        console.error(err);
    });
  }
}
