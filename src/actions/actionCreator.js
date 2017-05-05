// add first
export function getFirsts(firsts) {
  return {
    type: 'GET_FIRSTS',
    firsts,
  };
}

export function addMemory(userId, date, content, image) {
  return {
    type: 'ADD_FIRST',
    userId,
    date,
    content,
    image,
  };
}

export function addUserIdOnLogIn(userId) {
  return {
    type: 'RECORD_USER',
    userId,
  };
}
