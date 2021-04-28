import mongoose from 'mongoose';
import env from 'dotenv';

env.config({ path: ".sample-env" });
const db = {};
db.mongoose = mongoose;
//db.url = 'mongodb+srv://esfernandes:mongo123@bootcamp.fxb6q.mongodb.net/MY_GRADES_DB?retryWrites=true&w=majority' process.env.MONGODB;
db.url = 'mongodb+srv://'+
          process.env.USERDB+
          ':'+
          process.env.PWDDB+
          process.env.MONGODB;

console.log('url:'+ db.url);

export { db };
