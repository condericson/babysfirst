// add first
export function addMemory(userId, date, content, image) {
  console.log('dispatching add first');
  return {
    type: 'ADD_FIRST',
    userId,
    date,
    content,
    image,
  };
}

export function addUserIdOnLogIn(userId) {
  console.log('adding userId on login');
  return {
    type: 'RECORD_USER',
    userId,
  };
}
