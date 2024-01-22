import React from "react";
import "./events.css";
import firstevent from "../../images/firstevent.png";
import secondevent from "../../images/secondevent.png";

const EventsObject = ({ props, index }) => {
  const isEven = index % 2 === 0;

  return (
    <>
      {isEven ? (
        <div className="events-object">
          <div className="events-object-image">
            <img src={props.image} alt="event" />
          </div>
          <div className="events-object-info">
            <div className="events-object-info-name">{props.name}</div>
            <div className="events-object-info-description">
              {props.description}
            </div>
          </div>
        </div>
      ) : (
        <div className="events-object">
          <div className="events-object-info">
            <div className="events-object-info-name">{props.name}</div>
            <div className="events-object-info-description">
              {props.description}
            </div>
          </div>
          <div className="events-object-image">
            <img src={props.image} alt="event" />
          </div>
        </div>
      )}
    </>
  );
};

const Events = () => {
  const eventsData = [
    {
      name: "Research Blitz",
      description:
        "The 'Research Blitz' event, organized by the Research Scholar Forum and Academic Outreach at the Indian Institute of Technology Delhi (IITD), provided a platform for Ph.D. students to demonstrate their research excellence through the art of pitching. The event was held on 27th March 2021, and was attended by over 100 participants from across the country. The event was organized by the Research Scholar Forum and Academic Outreach at IIT Delhi, and was supported by the Office of the Dean of Research and Development, IIT Delhi.",
      image: firstevent,
    },
    {
      name: "Talk by Dr. Mayra Castro",
      description:
        "The talk by Dr. Mayra Castro was a captivating and informative session that delved into the exploration of publishing as a viable career path for individuals who have completed their Ph.D. studies. Dr. Castro, an expert in the field, shared valuable insights and perspectives on the various opportunities and challenges associated with pursuing a career in publishing post-Ph.D.",
      image: secondevent,
    },
  ];

  return (
    <div className="events">
      <div className="events-head">EVENTS</div>
      <div className="events-container">
        {eventsData.map((event, index) => (
          <EventsObject key={index} props={event} index={index} />
        ))}
      </div>
      <div className="margin"></div>
    </div>
  );
};

export default Events;
