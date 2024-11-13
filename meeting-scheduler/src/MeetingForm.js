import React, { useState } from 'react';
import { format } from 'date-fns';

const MeetingForm = ({ addMeeting }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const meeting = {
      id: Date.now(),
      title,
      date: format(new Date(`${date}T${time}`), 'yyyy-MM-dd HH:mm:ss'),
    };
    addMeeting(meeting);
    setDate('');
    setTime('');
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="meeting-form">
      <h2>Schedule a Meeting</h2>
      <input
        type="text"
        placeholder="Meeting Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Schedule Meeting</button>
    </form>
  );
};

export default MeetingForm;
