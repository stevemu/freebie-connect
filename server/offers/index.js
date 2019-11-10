async function getAllOffers(db) {
  const collection = db.collection('offers');
  let docs = await collection.find({}).toArray();
  return docs;
}
exports.getAllOffers = getAllOffers;

async function createOffer(db, o) {
  const collection = db.collection('offers');
  let result = await collection.insertOne(o);
  return result;
}
exports.createOffer = createOffer;
