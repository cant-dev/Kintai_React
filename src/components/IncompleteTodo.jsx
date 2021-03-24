import React from "react";

export const InCompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">準備完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>出勤</button>
              <button onClick={() => onClickDelete(index)}>退勤</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
