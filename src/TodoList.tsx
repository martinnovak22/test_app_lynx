import {useState} from '@lynx-js/react';

export function TodoList() {
    const [todos, setTodos] = useState<string[]>([]);
    const [newItem, setNewItem] = useState('');

    const addTodo = () => {
        if (newItem.trim()) {
            setTodos([...todos, newItem.trim()]);
            setNewItem('');
        }
    };

    const removeTodo = (indexToRemove: number) => {
        setTodos(todos.filter((_, index) => index !== indexToRemove));
    };

    return (
        <view className="todo">
            <text className="title">Todo List</text>

            <input
                className="input"
                value={newItem}
                // @ts-ignore
                bindinput={(e: { detail: { value: string } }) =>
                    setNewItem(e.detail.value)
                }
                placeholder="Add something..."
            />

            <view className="btn add-btn" bindtap={addTodo}>
                <text>Add</text>
            </view>

            <view className="list">
                {todos.map((todo, index) => (
                    <text
                        key={index}
                        className="todo-item"
                        bindtap={() => removeTodo(index)}
                    >
                        {todo}
                    </text>
                ))}
            </view>
        </view>
    );
}
