import { useState } from 'react'
import Calendar from './components/Calendar.jsx'


import './App.css'

function App() {

  const events = {
    '2024-08-05' : ['Make smoothie', 'clean stove', 'setup baking station'],
    '2024-08-06' : ['Make pancakes', 'clean oven', 'setup play dough station']
}


  return (
    <>
    <Calendar events={events} />

    
    </>
  )
}

export default App;

{/* <div className='navbar'>
<Link to="/">Homepage</Link>
<Link to="/calendar">Calendar</Link>
<Link to="/allevents">All Events</Link>
<Link to="/addevent">Add Event</Link>
</div>

<Routes>
<Route path="/" element={<homepage />} />
<Route path="/calendar" element={<Calendar />}/>
<Route path="/allevents" element={<allEvents />}/>
<Route path="/addevent" element={<inputForm />} />
<Route path=":id" element={<event />}/>
<Route path="*" element={<page404 />}/>

</Routes>

<div>
<Calendar events={events}/>
</div> */}
