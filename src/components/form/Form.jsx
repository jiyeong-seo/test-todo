import * as styles from "./Form.styles";
import { Input, List, Button } from "../../components";
import { useState } from "react";

const Form = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  // 제출 버튼 클릭시 todoVlaue(state(String))를 todos(state(Array))의 원소로 추가하는 핸들러
  const handleAddTodo = () => {
    setTodos([...todos, { todoValue, id: Math.floor(Math.random() * 100) }]);
    setTodoValue("");
  };

  return (
    <>
      <styles.Form>
        <Input
          type={"text"}
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        />
        <Button type={"button"} onClick={handleAddTodo}>
          제출하기
        </Button>
      </styles.Form>
      <List todos={todos} />
    </>
  );
};

export default Form;
