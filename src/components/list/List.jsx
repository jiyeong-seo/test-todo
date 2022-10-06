import * as styles from "./List.styles";
import { Todo } from "../../components";

const List = ({ todos }) => {
  return (
    <>
      <styles.ListTitle>Todo List</styles.ListTitle>
      <styles.List>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </styles.List>
    </>
  );
};

export default List;
