async function getAllRequests(db) {
  const collection = db.collection('requests');
  let docs = await collection.find({}).toArray();
  return docs;
}
exports.getAllRequests = getAllRequests;

async function createRequest(db, r) {
  const collection = db.collection('requests');
  let docs = await collection.insertOne(r);
  return docs;
}
exports.createRequest = createRequest;
