import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="create project" done={true} />
      <TodoItem text="style components" done={true} />
      <TodoItem text="create Context" done={false} />
      <TodoItem text="create function" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
