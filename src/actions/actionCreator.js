//add first
export function addMemory(userId, date, content) {
  console.log("dispatching add first");
  return {
    type: 'ADD_FIRST',
    userId,
    date,
    content
  }
}

// // remove comment
// export function removeComment(postId, i) {
//   return {
//     type: 'REMOVE_COMMENT',
//     i,
//     postId
//   }
// }
