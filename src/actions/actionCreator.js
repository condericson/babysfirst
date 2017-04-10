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

// // remove comment
// export function removeComment(postId, i) {
//   return {
//     type: 'REMOVE_COMMENT',
//     i,
//     postId
//   }
// }
