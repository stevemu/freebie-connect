async function getAllRequests(db) {
  const collection = db.collection('requests');
  let docs = await collection.find({}).toArray();
  return docs;
}
exports.getAllRequests = getAllRequests;