import React from 'react';

const MeetingItem = ({ meeting, index, deleteMeeting }) => {
  return (
    <li>
      <div>
        <strong>{meeting.title}</strong>
        <p>{meeting.date} at {meeting.time}</p>
        <p>Participants: {meeting.participants}</p>
      </div>
      <button onClick={() => deleteMeeting(index)}>Delete</button>
    </li>
  );
};

export default MeetingItem;
