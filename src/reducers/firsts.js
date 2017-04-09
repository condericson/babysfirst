function postFirst(state = [], action) {
  switch(action.type){
    case 'ADD_FIRST':
    // return the new state with the new comment
      return [...state, {
        userId: action.userId,
        date: action.date,
        content: action.content
      }];
    default:
      return state;
  }
}



export default postFirst;
