import { Link } from "react-router-dom";

function NavBar () {

    return (
        <>

    <div className='navbar'>
      <Link to="/">Homepage</Link>
      {/* <Link to="/Calendar">Calendar</Link> */}
      <Link to="/events">All Events</Link>
      <Link to="/InputForm">Add Event</Link>
    </div>
        
        
        </>

    )
   
};

export default NavBar;