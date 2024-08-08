import { useState, useEffect
 } from 'react'
import Calendar from './components/Calendar.jsx'
import InputForm from './components/InputForm.jsx';
import AllEvents from './components/AllEvents.jsx';
import NavBar from './components/NavBar.jsx';
import Page404 from './components/Page404.jsx'
import Event from './components/Event.jsx';
import Homepage from './components/Homepage.jsx';
import { Routes, Route } from "react-router-dom";

import './App.css'

function App() {

const [allEvents, setAllEvents] = useState([]);

const [allEventsByDate, setAllEventsByDate] = useState([]);

useEffect(() => {
  getEvents();
}, []);

const getEvents = () => {
  fetch("/api/geteventsbydate")
      .then(res => res.json())
      .then(json => {
        setAllEvents(json);
        console.log(allEvents)
      })
      .catch(error => {
        console.log(error);
      });

}


  return (
    <>
    <NavBar />

    

    <Routes>
    <Route path="/" element={<Homepage allEventsByDate={allEventsByDate} setAllEventsByDate={setAllEventsByDate}/>} >
    {/* <Route path="/events/:id" element={<Event />}/> */}
    </Route>
      <Route path="/calendar" element={<Calendar />}/>
      <Route path="/events" element={<AllEvents allEvents={allEvents} setAllEvents={setAllEvents} />} >
      <Route path=":id" element={<Event />}/>
      </Route>
      <Route path="/InputForm" element={<InputForm allEvents={allEvents} setAllEvents={setAllEvents} />} />
      <Route path="/events/:id" element={<Event />}/>
      <Route path="*" element={<Page404 />}/>

    </Routes>

  

    
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