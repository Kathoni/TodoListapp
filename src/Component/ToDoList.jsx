import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#e5e7e9',
      padding: '20px',
    }}>
      <div style={{
        backgroundColor: '#fdfefe',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
      }}>
        <h1 style={{ textAlign: 'center' }}>To-Do List</h1>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          gap: '10px',
        }}>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="Enter a new to-do item"
            style={{
              flex: 1,
              padding: '10px',
              border: 'none',
              borderRadius: '15px',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              outline: 'none',
              fontSize: '16px',
              color: '#333',
            }}
          />
          <button 
            onClick={handleAddTodo}
            style={{
              padding: '10px 20px',
              backgroundColor: '#e5e7e9',
              color: '#fff',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Add
          </button>
        </div>
        <ul style={{
          listStyleType: 'none',
          padding: 0,
        }}>
          {todos.map((todo, index) => (
            <li 
              key={index} 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                borderBottom: '1px solid #ccc',
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#888' : '#333',
              }}
            >
              <span 
                onClick={() => handleCompleteTodo(index)}
                style={{
                  cursor: 'pointer',
                  flex: 1,
                }}
              >
                {todo.text}
              </span>
              <button 
                onClick={() => handleDeleteTodo(index)}
                style={{
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '15px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
