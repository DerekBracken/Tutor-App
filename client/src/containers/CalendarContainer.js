import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from 'react-router-dom';

//need to change this from the US to the UK - GB isn't working
const locales = {
    "en-GB": require("date-fns/locale/en-GB"),
};

//maybe use Moment for the localizer?
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

//dates are really weird
const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 11, 29),
        end: new Date(2021, 11, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 12, 7),
        end: new Date(2021, 12, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];


//add details to correspond to JSON e.g. details
function CalendarContainer() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "",});
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default withRouter(CalendarContainer);
