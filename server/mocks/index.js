async function initRequests(db) {
  const collection = db.collection('requests');
  let requests = [
    {
      id: 1,
      title: "need a laptop",
      desc: "I need a laptop with a 12 core cpu"
    },
    {
      id: 2,
      title: "need shovel",
      desc: "I need a big shovel"
    }
  ]

  await collection.removeMany({});
  let result = await collection.insertMany(requests);
  console.log(result);
}
module.exports.initRequests = initRequests;

async function initOffers(db) {

}
module.exports.initOffers = initOffers;