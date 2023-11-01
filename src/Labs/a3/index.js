import Classes from "./Classes";
import Styles from "./Styles";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todos/ToDoItem";
import TodoList from "./todos/ToDoList";
import { useSelector } from "react-redux";

function Assignment3() {
    const { todos } = useSelector((state) => state.todosReducer);
    return (
        <div class="container">
            <h1>Assignment 3</h1>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <TodoItem />
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes />
            <PathParameters />
            <JavaScript />
        </div>
    );
}
export default Assignment3;