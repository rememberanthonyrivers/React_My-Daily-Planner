// eslint-disable-next-line no-unused-vars
import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  
  const { todos } = props

  return (
    // below is the setup for looping
    // through and listing the items of
    // the array
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}