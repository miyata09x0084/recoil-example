import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atom';

function TodoItemCreator() {
    const [title, setTitle] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const handleChange = (e) => {
        setTitle(e.target.value);
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
        <div>
            <input type="text" value={title} onChange={handleChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
}

export default TodoItemCreator;

let id = 1;
function getId() {
    return id++;
};