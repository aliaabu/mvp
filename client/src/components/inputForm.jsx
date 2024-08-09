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
      setNewEvent({
        title:"",
        url:"",
        description:"",
        location:"",
        date: "",
        time: "",
        duration:"",
        price: 0,
        age: 0,

      })

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

        <div className="container" >
        <form className="row g-3" onSubmit={handleSubmit} >
       

          <div className="row">
            <div className="col md-6">
              <label for="title"></label>
              <input
                type="text"
                className="form-control"
                aria-label="title"
                placeholder="Event name"
                name="title"
                onChange={handleInputChange}
                value={newEvent.title}/>
            </div>
              <div className="col md-6">
                <label for="url"></label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="url"
                  placeholder="Event website"
                  name="url"
                  onChange={handleInputChange}
                  value={newEvent.url}/>
              </div>
          </div>

          <div className="form-group mb-3">
            <label for="description"></label>
            
            <textarea
                rows="3"
                maxLength="255"
                type="text"
                className="form-control"
                aria-label="description"
                placeholder="A short description on what the event is about. Max 255 characters"
                name="description"
                onChange={handleInputChange}
                value={newEvent.description}/>

          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label for="location">Location</label>
              <input
                type="text"
                className="form-control"
                aria-label="location"
                name="location"
                onChange={handleInputChange}
                value={newEvent.location}/>
            </div>

            <div className="col-md-4">
              <label for="date">Date</label>
              <input
                type="date"
                className="form-control"
                aria-label="date"
                name="date"
                onChange={handleInputChange}
                value={newEvent.date}/>
            </div>

            <div className="col-md-4">
              <label for="time">Time</label>
              <input
                type="time"
                className="form-control"
                aria-label="time"
                name="time"
                onChange={handleInputChange}
                value={newEvent.time}/>
            </div>
          </div>

          <div className="row mb-3">
          
            <div className="col-md-4">
              <label for="duration">Duration</label>
              <input
                type="text"
                className="form-control"
                aria-label="duration"
                name="duration"
                onChange={handleInputChange}
                value={newEvent.duration}/>
            </div>

            <div className="col-md-4">
              <label for="price">Price</label>
              <input
                type="text"
                className="form-control"
                aria-label="price"
                name="price"
                onChange={handleInputChange}
                value={newEvent.price}/>
            </div>

            <div className="col-md-4">
              <label for="age">Age</label>
              <input
                type="text"
                className="form-control"
                aria-label="age"
                name="age"
                onChange={handleInputChange}
                value={newEvent.age}/>  
            </div>
          </div>
 
    <div className="col-12">
    <button className="btn btn-primary">Add</button>
    </div>
    
    </form>

    </div>


    </>
  }