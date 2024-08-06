import Calendar from "./Calendar";
import App from "../App";
import { Outlet } from "react-router-dom";

export default function Homepage() {

  const events = {
    '2024-08-05' : ['Make smoothie', 'clean stove', 'setup baking station'],
    '2024-08-06' : ['Make pancakes', 'clean oven', 'setup play dough station']
    }

 /*
 I want to connect the calendar to my list of events. 
 When I click a date, the event whose date matches the calendar date will show up on the side. 
 In my data, I have start_date and end_date, because an event can run for a period of time. I want to have this feature in my project bcos it's about clicking on a date and seeing what you can do on that day. 

 Right now, how it works is that 
 */ 


    return (
      <>

     

        <div>
        <Calendar events={events}/>

        </div>

        <div>
          <Outlet />
        </div>
      
        
      </>

      

      
    )
    
    
  }