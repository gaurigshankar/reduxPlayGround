const todos = (state = [], action) => {

  switch(action.type){
    case 'ADD-TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      case 'TOGGLE-TODO':

      return state.map(todo => {
          if( todo.id != action.id) {
            return todo
          }
          return {
            ...todo,
            completed: !todo.completed
          };
        });

      default:
       return state
  }

};


const testTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD-TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(todos(stateBefore, action)).toEqual(stateAfter);

}

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Shopping',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE-TODO',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Shopping',
      completed: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);

  expect(todos(stateBefore, action)).toEqual(stateAfter);

}

testTodo();
testToggleTodo();
console.log("Test Completed")
