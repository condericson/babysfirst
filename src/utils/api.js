
export function fetchAPI(path, method, args) {
  return fetch(`http://localhost:8080/${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args),
  });
}