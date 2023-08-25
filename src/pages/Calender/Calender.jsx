import React, { useState, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Typography } from "@mui/material";
import { ModalForm } from "../../components/ModalForm";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const calendarRef = useRef(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setModalTitle("Event Title");
    setModalOpen(true);
  };

  const handleSave = (inputValue) => {
    setEvents([
      ...events,
      { title: inputValue, start: selectedDate, end: selectedDate },
    ]);
  };

  const handleRemove = (eventToRemove) => {
    const updatedEvents = events.filter((event) => event !== eventToRemove);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <Typography component="h1" variant="h4" noWrap>
        Calender
      </Typography>
      <br />
      <Calendar
        ref={calendarRef}
        localizer={localizer}
        events={events}
        onSelectSlot={(slotInfo) => handleDateSelect(slotInfo.start)}
        selectable
        style={{ height: 800 }}
      />
      <ModalForm
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        title={modalTitle}
      />

      {events.map((event, index) => (
        <div key={index}>
          <p>
            {event.title} - {moment(event.start).format("YYYY-MM-DD")}
          </p>
          <button onClick={() => handleRemove(event)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CalendarComponent;
