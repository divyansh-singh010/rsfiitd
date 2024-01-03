import "./events.css";
import first from "../../images/first.jpg";
import second from "../../images/second.jpg";
import 

const EventsObject = ({props}) => {
    <div className="events-object">
        <img src={props.image} alt="event" className="event-image" />
        <div className="event-name">
            {props.name}
        </div>
        <div className="event-description">
            {props.description}
        </div>
    </div>
}

const Events = () => {
    return (
        <div className="events">
            <div className="events-head">
                EVENTS
            </div>
        </div>
    );
}

export default Events;