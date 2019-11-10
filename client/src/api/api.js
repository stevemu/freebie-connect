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

export async function getRequests(token) {
  let json = await get('/requests', token);
  return json;
}
