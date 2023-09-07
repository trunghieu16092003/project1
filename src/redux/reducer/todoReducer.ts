export interface Todo {
  id: string;
  name: string;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state = initialState, action: any): TodoState => {
  switch (action.type) {
    case "ADD_TODO_SUCCESS":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "UPDATE_TODO_SUCCESS":
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return {
        ...state,
        todos: updatedTodos,
      };

    case "DELETE_TODO_SUCCESS":
      const deletedId = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== deletedId),
      };

    default:
      return state;
  }
};

export default todoReducer;
