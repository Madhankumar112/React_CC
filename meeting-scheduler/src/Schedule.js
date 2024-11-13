import React, { useState } from 'react';
import MeetingForm from './MeetingForm';
import MeetingList from './MeetingList';

const Schedule = () => {
  const [meetings, setMeetings] = useState([]);

  const addMeeting = (meeting) => {
    setMeetings([...meetings, meeting]);
  };

  return (
    <div className="container">
      <MeetingForm addMeeting={addMeeting} />
      <MeetingList meetings={meetings} />
    </div>
  );
};

export default Schedule;
