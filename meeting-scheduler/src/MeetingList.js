import React from 'react';

const MeetingList = ({ meetings }) => {
  return (
    <div className="meeting-list">
      <h2>Scheduled Meetings</h2>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            <span>{meeting.title}</span>
            <span>{meeting.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;
