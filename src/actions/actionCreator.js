//increment likes
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add first
export function addComment(postId, author, comment) {
  console.log("dispatching add comment");
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
