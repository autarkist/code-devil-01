import React from 'react';
import DayList from './components/DayList';
import Header from './components/Header';
import Day from './components/Day';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="daylist" element={<DayList />} >
            <Route 
              index
              element={
                <main>
                  <h3>Select a Day you want to study!</h3>
                </main>
              }
            />
            <Route path="day/:day" element={<Day />} />
          </Route>
        </Route>
        <Route 
          path="*"
          element={
            <main>
              <p>There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;