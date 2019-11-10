async function initRequests(db) {
  const collection = db.collection('requests');
  let requests = [
    {
      id: 1,
      title: "need a laptop",
      city: "Braintree",
      desc: "I need a laptop with a 12 core cpu",
      createdBy: "auth0|5dc76ce9401e7a0e7e7fbe96"
    },
    {
      id: 2,
      title: "need shovel",
      city: "Braintree",
      desc: "I need a big shovel",
      createdBy: "auth0|5dc76ce9401e7a0e7e7fbe96"
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