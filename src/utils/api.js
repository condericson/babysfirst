import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

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

class UserApi {
  constructor() {
    this.path = '/users';
  }

  async signup(user) {
    try {
      const { data } = await axios.post(this.path, user);
      return data;
    } catch (e) {
      return e;
    }
  }
}

export const User = new UserApi();
