import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


export default function Event() {

    const [event, setEvent] = useState();

    const {id} = useParams();
    // console.log(id)

    const getEventDetails = async () => {
        try {
            const result = await fetch(`/api/events/${id}`);
            const data = await result.json();
            // console.log(data);
            setEvent(data);
            

        } catch(err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getEventDetails();
    }, [id]);

    


    return <>

        <div>
        Event Info
        {event && (
            <div>
                <p>{event.title}</p>
                <p>{event.location}</p>
            </div>
        )}

        </div>




    
    
    </>
  }