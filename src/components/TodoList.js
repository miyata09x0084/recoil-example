import React from 'react';
import { atom, selector, useRecoilValue } from 'recoil';
import { todoListState } from '../atom';
import TodoListStats from './TodoListStats';

function TodoList() {
    const todoList = useRecoilValue(todoListState);

    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>
            <TodoListStats />
            <ul>
                {todoList.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </ul>
        </>
    );
}

export default TodoList;