import React from 'react';
import dummy from '../db/data.json';
import { Outlet, NavLink } from 'react-router-dom';

const DayList = () => {
  return (
    <div className='all-days'>
      <ul className='list_day'>
        {dummy.days.map(day => (
          // <li key={day.id}>Day {day.id}</li>
          <li key={day.id}>
            <NavLink
              style={({isActive}) => {
                return {
                  color: isActive ? 'red' : "",
                };
              }} 
              to={`/daylist/day/${day.id}`}
            >
              Day {day.id}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default DayList;