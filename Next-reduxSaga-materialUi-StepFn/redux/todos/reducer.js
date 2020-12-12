const initialState = {
  todos: [{
    id: 1,
    content: 'demo'
  }],
  text: '',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      console.log('Add todo success');
    default:
      return state;
  }
}