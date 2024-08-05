import { useState } from 'react'
import Calendar from './components/Calendar.jsx'
import InputForm from './components/InputForm.jsx';
import AllEvents from './components/AllEvents.jsx';
// import Homepage from './components/Homepage.jsx';
import { Routes, Route, Link } from "react-router-dom";

import './App.css'

function App() {

  const events = {
    '2024-08-05' : ['Make smoothie', 'clean stove', 'setup baking station'],
    '2024-08-06' : ['Make pancakes', 'clean oven', 'setup play dough station']
}

const [allEvents, setAllEvents] = useState({});


  return (
    <>
    
    <div className='navbar'>
      {/* <Link to="/">Homepage</Link> */}
      <Link to="/Calendar">Calendar</Link>
      <Link to="/AllEvents">All Events</Link>
      <Link to="/InputForm">Add Event</Link>
    </div>

    <Routes>
    {/* <Route path="/" element={<Homepage />} /> */}
      <Route path="/calendar" element={<Calendar />}/>
      <Route path="/allevents" element={<AllEvents allEvents={allEvents} setAllEvents={setAllEvents} />} />
      <Route path="/addevent" element={<InputForm />} />
      <Route path=":id" element={<event />}/>
      <Route path="*" element={<page404 />}/>

    </Routes>

    

    <div>
    <InputForm />
    </div>

    <div>
    <Calendar events={events} />
    </div>
    </>
  )
}

export default App;

{/* 

- set up useState in App.jsx [events, setEvents]
- pass the state in the allevents component
- <Route path="/allEvents" element={<AllEvents events={events} setEvents={setEvents} />} /> this passes the props
- go back to react lectures to understand 

- fetch all the events in allevents component
- set the state to whatever the result of the fetch is


*/}