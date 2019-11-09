export async function getRequest(url) {
  let res = await fetch(url);
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
  return json;
}

export async function postRequest(url, body) {
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
  return json;
}

export async function deleteRequest(url, body = {}) {
  let res = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
  return json;
}

export async function getPosts() {
  return [
    {
      id: 122,
      name: "freebie1"
    },
    {
      id: 2,
      name: "freebie2"
    }
  ]
}

export async function getRequests() {
  return [
    {
      id: 101,
      name: "want freebie1"
    },
    {
      id: 102,
      name: "want freebie2"
    }
  ]
}