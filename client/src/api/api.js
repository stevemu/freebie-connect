export async function get(url, token) {
  let res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  console.log(res);
  let j = await res.json();
  console.log(j);
  return j;
}

// export async function postRequest(url, body) {
//   const { getTokenSilently } = useAuth0();
//   const token = await getTokenSilently();

//   let res = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(body),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${token}`
//     }
//   });
//   if (!res.ok) {
//     throw "error for " + url;
//   }
//   let json = await res.json();
//   return json;
// }

// export async function deleteRequest(url, body = {}) {
//   const { getTokenSilently } = useAuth0();
//   const token = await getTokenSilently();

//   let res = await fetch(url, {
//     method: "DELETE",
//     body: JSON.stringify(body),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${token}`
//     }
//   });
//   if (!res.ok) {
//     throw "error for " + url;
//   }
//   let json = await res.json();
//   return json;
// }

// export async function getOffers() {
//   return [
//     {
//       id: 122,
//       name: "freebie1"
//     },
//     {
//       id: 2,
//       name: "freebie2"
//     }
//   ];
// }

export async function getRequests(token) {
  let json = await get('/requests', token);
  console.log(json);
  return json;
}
