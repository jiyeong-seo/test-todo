import * as styles from "./Todo.styles";

const Todo = ({ todo: { todoValue } }) => {
  return (
    <styles.Todo>
      <p>{todoValue}</p>
    </styles.Todo>
  );
};

export default Todo;
