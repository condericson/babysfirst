function firstsreducer(state = [], action) {
  switch (action.type) {
    case 'GET_FIRSTS':
      console.log(action.firsts);
      return [...state, {
        firsts: action.firsts,
      }];
    case 'ADD_FIRST':
      return [...state, {
        userId: action.userId,
        date: action.date,
        content: action.content,
        image: action.image,
      }];

    default:
      return state;
  }
}

export default firstsreducer;
