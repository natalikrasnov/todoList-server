const config = require('config')
const mongoose = require("mongoose");

const uri = `${config.get("db.mongoDBurl.base")}${process.env.MONGODB_USER}:${process.env.MONGODB__PASSWORD}${config.get("db.mongoDBurl.path")}`;

async function main() {
  await mongoose.connect(uri)
  console.log("-connect-");
}

main().catch((err) => console.log(err));
