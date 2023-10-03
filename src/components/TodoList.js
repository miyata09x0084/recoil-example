import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atom';
import TodoListStats from './TodoListStats';

function TodoList() {
    const [title, setTitle] = useState('');
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    let id = 1;
    function getId() {
        return id++;
    };

    const addItem = () => {
        setTodoList((oldTodoList) => [
          ...oldTodoList,
          {
            id: getId(),
            title: title,
            isComplete: false,
          },
        ]);
        setTitle('');
    };

    return (
        <>
            <h1>RecoilによるTodoアプリ</h1>
            <TodoListStats />
            <div>
                <input type="text" value={title} onChange={handleChange} />
                <button onClick={addItem}>Add</button>
            </div>
            <ul>
                {todoList.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </ul>
        </>
    );
}

export default TodoList;