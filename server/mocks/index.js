async function initRequests(db) {
  const collection = db.collection('requests');
  let requests = [
    {
      title: "need a laptop",
      city: "Braintree",
      desc: "I need a laptop with a 12 core cpu",
      createdBy: "auth0|5dc76ce9401e7a0e7e7fbe96",
      createdByEmail: "skycloud112@gmail.com"
    },
    {
      title: "need shovel 1",
      city: "Braintree",
      desc: "I need a big shovel",
      createdBy: "auth0|5dc76ce9401e7a0e7e7fbe96",
      createdByEmail: "skycloud112@gmail.com"
    },
    {
      title: "need shovel 2",
      city: "Braintree",
      desc: "I need a big shovel",
      createdBy: "auth0|5dc76ce9401e7a0e7e7fbe96",
      createdByEmail: "skycloud112@gmail.com"
    },
    {
      title: "need shovel 3",
      city: "Braintree",
      desc: "I need a big shovel",
      createdBy: "auth0|5dc76ce9401e7a0e7e7fbe96",
      createdByEmail: "skycloud112@gmail.com"
    },
    {
      title: "need shovel 4",
      city: "Braintree",
      desc: "I need a big shovel",
      createdBy: "auth0|5dc76ce9401e7a0e7e7fbe96",
      createdByEmail: "skycloud112@gmail.com"
    },
    {
      title: "need shovel 5",
      city: "Braintree",
      desc: "I need a big shovel",
      createdBy: "auth0|5dc76ce9401e7a0e7e7fbe96",
      createdByEmail: "skycloud112@gmail.com"
    }
  ]

  await collection.removeMany({});
  let result = await collection.insertMany(requests);
  console.log(result);
}
module.exports.initRequests = initRequests;

async function initOffers(db) {
  const collection = db.collection('offers');
  let offers = [
    {
      title: "offer a laptop",
      city: "Braintree",
      desc: "I have an used apple laptop",
      createdBy: "auth0|5dc76ce9401e7a0e7e7fbe96",
      createdByEmail: "skycloud112@gmail.com"
    },
    {
      title: "offer a shovel",
      city: "Braintree",
      desc: "I have a 2 year old shovel during summer for you to use for free",
      createdBy: "auth0|5dc76ce9401e7a0e7e7fbe96",
      createdByEmail: "skycloud112@gmail.com"
    }
  ]

  await collection.removeMany({});
  let result = await collection.insertMany(offers);
  console.log(result);
}
module.exports.initOffers = initOffers;