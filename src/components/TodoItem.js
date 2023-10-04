import { useRecoilState } from 'recoil';
import { todoListState } from '../atom';

function TodoItem({ item }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const deleteItem = () => {
        const index = todoList.findIndex((listItem) => listItem.id === item.id);
        const newTodoList = [
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1),
        ];
        setTodoList(newTodoList);
    };

    const toggleItemCompletion = () => {
        const index = todoList.findIndex((listItem) => listItem.id === item.id);
        const newTodoList = [
            ...todoList.slice(0, index),
            { ...item, isComplete: !item.isComplete },
            ...todoList.slice(index + 1),
        ];
        setTodoList(newTodoList);
    }

return (
    <div>
        <button onClick={toggleItemCompletion}>
            {item.isComplete ? '完' : '未'}
        </button>
        {item.title}
        <span onClick={deleteItem} style={{cursor: 'pointer'}}>
            [x]
        </span>
    </div>
    )
}

export default TodoItem;