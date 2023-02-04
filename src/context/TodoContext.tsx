import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { TodoDTO } from '../dto/TodoDTO';
import { TodoItem } from '../components/TodoItem'

interface TodoProvider {
    children: ReactNode;
}

interface TodoContext {
  todos: TodoDTO[]
  onTouchTodo: (id: TodoDTO['id']) => void
  addTodo: (todo: TodoDTO) => void;
  removeTodo: (id: TodoDTO['id']) => void;
}

const TodoContext = createContext({} as TodoContext)

export function TodoProvider ({ children, }: TodoProvider) {
  const [ todos, setTodos ] = useState<TodoDTO[]>([])

  const onTouchTodo = (id: TodoDTO['id']) => {
    const todoSelected = todos.map(todo => (todo.id === id ? {...todo, active: !todo.active} : todo))
    setTodos(todoSelected)
  }

  const addTodo = (todo: TodoDTO) => {
    setTodos([todo, ...todos])
  }

  const removeTodo = (id: TodoDTO['id']) => {
    const todosFiltered = todos.filter(todo => todo.id !== id)

    setTodos(todosFiltered)
  }
  
  return (
    <TodoContext.Provider
      value={{
        todos,
        onTouchTodo,
        addTodo,
        removeTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => useContext(TodoContext)