export async function get(url, token) {
  let res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }

  let j = await res.json();
  return j;
}

export async function post(url, body, token) {
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
  return json;
}

export async function del(url, body = {}, token) {
  let res = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
  return json;
}

export async function getRequests(token = null) {
  let json = await get('/api/requests', token);
  return json;
}

export async function createRequest(title, desc, city, token) {
  let json = await post("/api/requests", {
    title, desc, city
  }, token);
  return json;
}

export async function getOffers(token) {
  let json = await get('/api/offers', token);
  return json;
}

export async function createOffer(title, desc, city, token) {
  let json = await post("/api/offers", {
    title, desc, city
  }, token);
  return json;
}

export async function getProfile(token) {
  let profile = await get("/api/profile", token);
  return profile;
}

export async function updateProfile(token, name) {
  let result = await post("/api/profile", {name}, token);
  return result;
}