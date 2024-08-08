import Calendar from "./Calendar";
import App from "../App";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Homepage() {

  const [allEventsByDate, setAllEventsByDate] = useState([]);

  useEffect(() => {
    getEventsByDate();
  }, []);
  
  const getEventsByDate = () => {
    fetch("/api/geteventsbydate")
        .then(res => res.json())
        .then(json => {
          setAllEventsByDate(json);
          console.log(allEventsByDate)
        })
        .catch(error => {
          console.log(error);
        });
  
  }


  // const testing = { data: [{ name: "Jason and the Adventure of 254", location:"The Wellcome Gallery", time: "10.30am", duration: "1.5 hour"},
  //   { name: "NAME TEST 2", location:"LOCATION TEST 2", time: "10.30am", duration: "1 hour"},
  //   { name: "NAME TEST 3", location:"LOCATION TEST 3", time: "11.30am", duration: "2 hour"}
  // ]}

  // const events = {
  //   '2024-08-01' : [`${testing.data[0].name}, ${testing.data[0].location}, ${testing.data[0].time}, ${testing.data[0].duration}`,
  //   `${testing.data[1].name}, ${testing.data[1].location}, ${testing.data[1].time}, ${testing.data[1].duration}`,
    
  //   ],
  //   '2024-08-05' : ['Make smoothie', 'clean stove', 'setup baking station'],

  //   '2024-08-06' : ['Make pancakes', 'clean oven', 'setup play dough station']
  //   }

 /*
 I want to connect the calendar to my list of events. 
 When I click a date, the event whose date matches the calendar date will show up on the side. 
 In my data, I have start_date and end_date, because an event can run for a period of time. I want to have this feature in my project bcos it's about clicking on a date and seeing what you can do on that day. 

 Right now, how it works is that it match
 */ 


    return (
      <>

        <div>
        <Calendar allEventsByDate={allEventsByDate}/>

        </div>

        <div>
          <Outlet />
        </div>
      
        
      </>

      

      
    )
    
    
  }