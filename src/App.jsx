import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodos } from "./components/IncompleteTodo";
import { CompleteTodos } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  // 第一変数は初期値であり、render後にセットされる変数、第二関数は第一変数をstate(更新)する。
  // useStateの中身は第一変数
  const [incompleteTodos, setIncompleteTodos] = useState(["ONO"]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // renderできるように、変数で渡してevent + target + 変数 で渡す
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 未完了のTodoから削除する
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 何番目の要素に対して, いくつ削除するのか？というメソッド
    newTodos.splice(index, 1);
    // 要素の更新
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    // slice 何番目の要素に対して, いくつ削除するのか？というメソッド
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <InCompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
