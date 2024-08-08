import { useState, useEffect } from "react";

export default function InputForm({allEvents, setAllEvents}) {

  // this will look similar to allEvents, except I'll be fetching to post
  // look at milestone five video to find out how to link database

  const [newEvent, setNewEvent] = useState({
    title:"",
    url:"",
    description:"",
    location:"",
    date: "",
    time: "",
    duration:"",
    price: 0,
    age: 0,
  });
    
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
        console.log(updatedEvents)

      } catch(err) {
        console.log(err)
      }
    };

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

<span className="input-group-text">Date</span>
        <input
        type="date"
        className="form-control"
        aria-label="date"
        name="date"
        onChange={handleInputChange}
        value={newEvent.date}/>

<span className="input-group-text">Time</span>
        <input
        type="time"
        className="form-control"
        aria-label="time"
        name="time"
        onChange={handleInputChange}
        value={newEvent.time}/>

<span className="input-group-text">Duration</span>
        <input
        type="text"
        className="form-control"
        aria-label="duration"
        name="duration"
        onChange={handleInputChange}
        value={newEvent.duration}/>

<span className="input-group-text">Price</span>
        <input
        type="text"
        className="form-control"
        aria-label="price"
        name="price"
        onChange={handleInputChange}
        value={newEvent.price}/>

<span className="input-group-text">Age</span>
        <input
        type="text"
        className="form-control"
        aria-label="age"
        name="age"
        onChange={handleInputChange}
        value={newEvent.age}/>     
 

</div>

    <button className="btn btn-primary">Add</button>
    </form>


    </>
  }