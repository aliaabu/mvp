import { useState, useEffect } from "react";

export default function InputForm({allEvents, setAllEvents}) {

  // this will look similar to allEvents, except I'll be fetching to post
  // look at milestone five video to find out how to link database

  const [newEvent, setNewEvent] = useState({
    title:"",
    url:"",
    description:"",
    location:"",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "", 
    price: 0,
    age: 0,
  })
    
    //when the page loads, perform this
    useEffect(() => {
      getEvents();
    }, []);

    const getEvents = () => {
      fetch("/api/events")
          .then(res => res.json())
          .then(json => {
            setAllEvents(json);
            console.log(allEvents)
          })
          .catch(error => {
            console.log(error);
          });

    }

    const handleInputChange = (event) => {
      const {name, value} = event.target;
      console.log(name, value);
      setNewEvent((prevState) => ({...prevState, [name]:value}))
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      addEvent();
    };

    const addEvent = async () => {
      try {
        const response = await fetch("/api/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newEvent)
        });
        const updatedEvents = await response.json();
        setAllEvents(updatedEvents);

      } catch(err) {
        console.log(err)
      }
    }
    return <>
        <div className="title">
          <p>
          Submit Event Details Here
          </p>
        </div>

        <form onSubmit={handleSubmit}>
    <div className="input-group mb-3">

    <span className="input-group-text">Title</span>
    <input
    type="text"
    className="form-control"
    aria-label="title"
    name="title"
    onChange={handleInputChange}
    value={newEvent.title}/>

    <span className="input-group-text">URL</span>
        <input
        type="text"
        className="form-control"
        aria-label="url"
        name="url"
        onChange={handleInputChange}
        value={newEvent.url}/>

    <span className="input-group-text">Description</span>
        <input
        type="text"
        className="form-control"
        aria-label="description"
        name="description"
        onChange={handleInputChange}
        value={newEvent.description}/>

<span className="input-group-text">Location</span>
        <input
        type="text"
        className="form-control"
        aria-label="location"
        name="location"
        onChange={handleInputChange}
        value={newEvent.location}/>

<span className="input-group-text">Start Date</span>
        <input
        type="date"
        className="form-control"
        aria-label="start_date"
        name="start_date"
        onChange={handleInputChange}
        value={newEvent.start_date}/>

<span className="input-group-text">End Date</span>
        <input
        type="date"
        className="form-control"
        aria-label="end_date"
        name="end_date"
        onChange={handleInputChange}
        value={newEvent.end_date}/>

<span className="input-group-text">Start Time</span>
        <input
        type="time"
        className="form-control"
        aria-label="start_time"
        name="start_time"
        onChange={handleInputChange}
        value={newEvent.start_time}/>

<span className="input-group-text">End Time</span>
        <input
        type="time"
        className="form-control"
        aria-label="end_time"
        name="end_time"
        onChange={handleInputChange}
        value={newEvent.end_time}/>

<span className="input-group-text">Price</span>
        <input
        type="text"
        className="form-control"
        aria-label="price"
        name="price"
        onChange={handleInputChange}/>

<span className="input-group-text">Age</span>
        <input
        type="text"
        className="form-control"
        aria-label="age"
        name="age"
        onChange={handleInputChange}/>     
 

</div>

    <button className="btn btn-primary">Add</button>
    </form>


    </>
  }