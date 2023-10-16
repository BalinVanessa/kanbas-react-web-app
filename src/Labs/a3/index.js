import Classes from "./Classes";
import Styles from "./Styles";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todos/ToDoItem";
import TodoList from "./todos/ToDoList";

function Assignment3() {
    return (
        <div class="container">
            <h1>Assignment 3</h1>
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