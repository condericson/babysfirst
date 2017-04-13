function recordUserId(state = [], action) {
  switch (action.type) {
    case 'RECORD_USER':
    // return the new state with the new comment
      return [...state, {
        currentUserId: action.userId,
      }];
    default:
      return state;
  }
}

export default recordUserId;
