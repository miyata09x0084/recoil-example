import { useRecoilState } from 'recoil';
import { todoListState } from '../atom';

function TodoItem({ item }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const deleteItem = () => {
        console.log('delete')
    };

return (
    <div>
        {item.title}
        <span onClick={deleteItem} style={{cursor: 'pointer'}}>
            [x]
        </span>
    </div>
    )
}

export default TodoItem;