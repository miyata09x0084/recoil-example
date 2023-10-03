import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../atom';
import TodoListStats from './TodoListStats';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';

function TodoList() {
    const todoList = useRecoilValue(todoListState);

    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>
            <TodoListStats />
            <TodoItemCreator />
            {todoList.map((item) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </>
    );
}

export default TodoList;