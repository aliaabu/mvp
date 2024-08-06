import Calendar from "./Calendar";
import App from "../App";
import { Outlet } from "react-router-dom";

export default function Homepage() {

  const events = {
    '2024-08-05' : ['Make smoothie', 'clean stove', 'setup baking station'],
    '2024-08-06' : ['Make pancakes', 'clean oven', 'setup play dough station']
}
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