import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  addTodoRequest,
  updateTodoRequest,
  deleteTodoRequest,
} from "../redux/actions/todoActions";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoReducer.todos);

  console.log(todos);
  const [newTodoText, setNewTodoText] = useState("");
  const [editingTodo, setEditingTodo] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const handleAddTodo = () => {
    if (newTodoText.trim() === "") return;
    dispatch(
      addTodoRequest({
        name: newTodoText,
      })
    );
    setNewTodoText("");
  };

  const handleEditTodo = (todo: { id: string; name: string }) => {
    setEditingTodo(todo);
    setNewTodoText(todo.name);
  };

  const handleUpdateTodo = () => {
    if (!editingTodo || newTodoText.trim() === "") return;
    dispatch(
      updateTodoRequest({
        name: newTodoText,
        id: editingTodo.id,
      })
    );
    setEditingTodo(null);
    setNewTodoText("");
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodoRequest(id));
    console.log(todos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        {editingTodo ? (
          <>
            <button onClick={handleUpdateTodo}>Update</button>
            <button onClick={() => setEditingTodo(null)}>Cancel</button>
          </>
        ) : (
          <button onClick={handleAddTodo}>Add</button>
        )}
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => handleEditTodo(todo)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
