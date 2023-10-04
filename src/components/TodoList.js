import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {  todoListFilterState } from '../atom';
import TodoListStats from './TodoListStats';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import { filteredTodoListState } from '../selector';
import TodoListFilters from './TodoListFilter';

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />
            {todoList.map((item) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </>
    );
}

export default TodoList;