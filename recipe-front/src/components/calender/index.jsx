import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './styles.css'
import { useState, useEffect } from 'react'
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";

const Calendar = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        const getEventsHandler = async () => {
            try {
                const response = await sendRequest({
                    method: "GET",
                    route: "/get_plans",
                });
                setEvents(response.events)
            } catch (error) {
                console.log(error);
            }
        };
        getEventsHandler()
    }, [])
    return (
        <div className='calender-container'>

            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={true}
                events={events}
            />
        </div>
    );
}

export default Calendar;