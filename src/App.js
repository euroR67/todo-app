import './App.css';
import './output.css';
import { useState } from 'react';

function App() {
    // Déclaration des états pour les todos et le champ de saisie
  const [todos, setTodos] = useState([]); // Liste des todos
  const [inputValue, setInputValue] = useState(''); // Valeur de l'entrée utilisateur

  // Fonction ajouter un todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return; // Vérifier si l'entrée est vide
    const newTodo = {
      id: todos.length + 1, // ID unique pour chaque todo
      text: inputValue,
      completed: false, // État initial du todo
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]); // Met à jour l'état des todos
    setInputValue(''); // Réinitialise le champ de saisie
  };

  // Fonction qui gère la suppression d'un todo
  const handleDelete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id));
  };

  // Fonction pour changer l'état de complétion d'un todo
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Todo App</h1>
      <p>Total Todos: {todos.length}</p>
<p>Completed Todos: {todos.filter(todo => todo.completed).length}</p>
      <form onSubmit={handleSubmit} className="flex mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 border rounded-lg p-2"
          placeholder="Enter a new todo"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 ml-2">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => toggleComplete(todo.id)} className="flex justify-between items-center p-2">
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className="bg-red-500 text-white rounded p-1" onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}

export default App;