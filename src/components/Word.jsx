import React, { useState } from 'react';

const Word = ({word}) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow  = () => {
    setIsShow(!isShow);
  }

  const toggleDone = () => {
    setIsDone(!isDone);
  }
  return (
        <tr className={isDone ? 'off' : ''}>
          <td>
            <input type="checkbox" onChange={toggleDone} checked={isDone} />
          </td>
          <td>
            {word.eng}
          </td>
          <td>
            {isShow && word.kor}
          </td>
          <td>
            <button onClick={toggleShow}>{isShow ? "Hide" : "Show"}</button>
            <button>Delete</button>
          </td>
        </tr>
  );
};

export default Word;