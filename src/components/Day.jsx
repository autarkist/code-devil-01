import React from 'react';
import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';

const Day = () => {
  const params = useParams();
  const day = parseInt(params.day, 10);
  const wordList = dummy.words.filter(word => day === Number(word.day));
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Check</th>
            <th>Word</th>
            <th>Meaning</th> 
            <th>Things to do</th>
          </tr>
          {wordList.map(word => (
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;