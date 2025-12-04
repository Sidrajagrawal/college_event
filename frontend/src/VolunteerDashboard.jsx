import React from "react";

function VolunteerDashboard({ onOpenScanner }) {
  return (
    <div>
      <h1>Volunteer Dashboard</h1>
      <button onClick={onOpenScanner}>Open Scanner</button>
    </div>
  );
}

export default VolunteerDashboard;
